import { checkPrimitiveCompatibility, evaluateHardStops, validateContractorPaymentGraph, buildContractorPaymentGraph } from './subEngines.js'
import { calculateLiquidity } from './subEngines.js'

export const PHYSICS_TEST_CASES = Object.freeze([
  {
    id: 'recipient_claim_before_proof',
    category: 'invariant_tests',
    expected: 'blocked',
    reason: 'release_requires_all_conditions_true invariant failed',
    run() {
      const graph = buildContractorPaymentGraph()
      const validation = validateContractorPaymentGraph(graph)
      return validation.noReleaseWithoutProof ? 'blocked' : 'failed'
    }
  },
  {
    id: 'group_payout_underfunded_no_reserve',
    category: 'fundability_tests',
    expected: 'blocked',
    reason: 'fundability invariant failed',
    run() {
      const liquidity = calculateLiquidity({
        requiredPayout: 50000,
        guaranteedFunding: 40000,
        reserveCoverage: 0
      })
      return liquidity.payoutSafety === 'blocked_without_approved_support' ? 'blocked' : 'failed'
    }
  },
  {
    id: 'restricted_school_fees_to_cash_withdrawal',
    category: 'primitive_compatibility_tests',
    expected: 'blocked',
    reason: 'restricted purpose invariant failed',
    run() {
      const hardStops = evaluateHardStops({
        fundingSource: 'school_fee_wallet',
        ledgerMapping: true,
        restrictedFunds: true,
        unrestrictedWithdrawal: true
      })
      return hardStops.stops.includes('restricted_funds_with_unrestricted_withdrawal') ? 'blocked' : 'failed'
    }
  },
  {
    id: 'escrow_to_proof_verification',
    category: 'primitive_compatibility_tests',
    expected: 'allowed',
    reason: 'primitive manifests explicitly allow this connection',
    run() {
      const compatibility = checkPrimitiveCompatibility('escrow_hold', 'proof_verification')
      return compatibility.compatible ? 'allowed' : 'failed'
    }
  }
])

export function runPhysicsTestCases() {
  const results = PHYSICS_TEST_CASES.map((test) => {
    const actual = test.run()
    return {
      id: test.id,
      category: test.category,
      expected: test.expected,
      actual,
      passed: actual === test.expected,
      reason: test.reason
    }
  })

  return {
    passed: results.every((result) => result.passed),
    results
  }
}
