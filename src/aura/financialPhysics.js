export const MONEY_STATES = Object.freeze([
  'available',
  'pending',
  'settled',
  'reserved',
  'locked',
  'escrowed',
  'claimable',
  'disputed',
  'refundable',
  'committed',
  'allocated',
  'restricted',
  'released',
  'expired',
  'defaulted',
  'reversed',
  'written_off',
  'closed'
])

export const STATE_MEANING = Object.freeze({
  available: 'Spendable now after obligations and protections are respected.',
  pending: 'In motion, but not settled enough to rely on.',
  settled: 'Final and usable unless another rule restricts it.',
  reserved: 'Set aside for a named future commitment.',
  locked: 'Held from normal spending until a release rule is satisfied.',
  escrowed: 'Controlled by conditional claim and release rules.',
  claimable: 'Available to a beneficiary once proof or timing requirements pass.',
  disputed: 'Frozen while a dispute process decides ownership or reversal.',
  refundable: 'Eligible to return to a payer through a defined path.',
  committed: 'Promised to an obligation and unavailable for casual spending.',
  allocated: 'Assigned to a purpose, budget, or product rule.',
  restricted: 'Usable only for approved counterparties, categories, or rails.',
  released: 'Previously held money that has satisfied release conditions.',
  expired: 'No longer valid under its original claim window.',
  defaulted: 'Failed according to product rules and needs recovery handling.',
  reversed: 'Moved back through an authorized reversal path.',
  written_off: 'Recognized as unrecoverable under a governance decision.',
  closed: 'Final state; no more movement without reopening authority.'
})

const PROTECTED_STATES = new Set([
  'reserved',
  'locked',
  'escrowed',
  'disputed',
  'committed',
  'allocated',
  'restricted'
])

export const FINANCIAL_PHYSICS_LAWS = Object.freeze([
  {
    id: 'conservation',
    name: 'Conservation',
    description: 'Money cannot be created, duplicated, or disappear inside a product.'
  },
  {
    id: 'collision',
    name: 'Collision',
    description: 'Two rules cannot claim the same money at the same time.'
  },
  {
    id: 'lock_semantics',
    name: 'Lock semantics',
    description: 'Locked, reserved, escrowed, or restricted money cannot behave like free cash.'
  },
  {
    id: 'obligation_funding',
    name: 'Obligation funding',
    description: 'Every promise needs a source, funding path, and recovery rule.'
  },
  {
    id: 'consent',
    name: 'Consent',
    description: 'A person exposed to financial risk must knowingly consent.'
  },
  {
    id: 'execution_source',
    name: 'Execution source',
    description: 'Payouts, refunds, and reversals need an explicit source and destination.'
  },
  {
    id: 'auditability',
    name: 'Auditability',
    description: 'Financial products need audit trails, dispute logic, and reversibility rules.'
  }
])

export const salaryShieldScenario = Object.freeze({
  id: 'salary-shield-school-fees',
  name: 'Salary Shield with School Fee Lock',
  intent:
    'Split salary into prioritized commitments while protecting restricted school fee money and emergency liquidity.',
  accounts: [
    { id: 'salary-wallet', label: 'Primary wallet', balance: 100000 },
    { id: 'school-lockbox', label: 'School lockbox', balance: 15000 }
  ],
  allocations: [
    {
      id: 'rent-reserve',
      accountId: 'salary-wallet',
      label: 'Rent reserve',
      amount: 30000,
      state: 'reserved',
      claimants: ['landlord'],
      spendable: false
    },
    {
      id: 'school-fees',
      accountId: 'school-lockbox',
      label: 'School fees',
      amount: 15000,
      state: 'restricted',
      claimants: ['approved-school'],
      restrictions: ['approved_school_accounts_only'],
      spendable: false
    },
    {
      id: 'group-pledge',
      accountId: 'salary-wallet',
      label: 'Friday savings group pledge',
      amount: 10000,
      state: 'committed',
      claimants: ['savings-group'],
      spendable: false
    },
    {
      id: 'emergency-buffer',
      accountId: 'salary-wallet',
      label: 'Protected emergency buffer',
      amount: 20000,
      state: 'locked',
      claimants: ['account-holder'],
      spendable: false
    },
    {
      id: 'free-cash',
      accountId: 'salary-wallet',
      label: 'Flexible spending',
      amount: 40000,
      state: 'available',
      claimants: ['account-holder'],
      spendable: true
    }
  ],
  obligations: [
    {
      id: 'monthly-rent',
      label: 'Monthly rent',
      amount: 30000,
      sourceAccountId: 'salary-wallet',
      fundingPathAllocationIds: ['rent-reserve'],
      dueInDays: 6,
      priority: 1,
      recoveryRule: 'protect-rent-first-and-pause-flex-spend',
      consentActorIds: ['account-holder']
    },
    {
      id: 'group-contribution',
      label: 'Savings group contribution',
      amount: 10000,
      sourceAccountId: 'salary-wallet',
      fundingPathAllocationIds: ['group-pledge'],
      dueInDays: 4,
      priority: 2,
      recoveryRule: 'notify-group-and-retry-from-available-cash',
      consentActorIds: ['account-holder', 'savings-group']
    }
  ],
  flows: [
    {
      id: 'school-payment',
      type: 'payout',
      sourceAllocationId: 'school-fees',
      destination: 'approved-school',
      amount: 15000,
      releaseRule: 'destination-must-be-approved-school-account',
      failureMode: 'destination_rejected',
      recoveryRule: 'return-to-school-lockbox'
    }
  ],
  actors: [
    { id: 'account-holder', label: 'Account holder', consented: true },
    { id: 'savings-group', label: 'Savings group', consented: true },
    { id: 'landlord', label: 'Landlord', consented: true },
    { id: 'approved-school', label: 'Approved school', consented: true }
  ],
  governance: {
    auditTrail: true,
    disputeRule: 'freeze-affected-allocation-and-open-review',
    reversalRule: 'reverse-through-original-source-when-lawful'
  }
})

export function formatMoney(cents, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  }).format(cents / 100)
}

export function evaluateFinancialPhysics(scenario) {
  const issues = []
  const accounts = new Map(scenario.accounts.map((account) => [
    account.id,
    { ...account, allocated: 0, free: account.balance }
  ]))
  const allocations = new Map(scenario.allocations.map((allocation) => [allocation.id, allocation]))
  const actors = new Map(scenario.actors.map((actor) => [actor.id, actor]))

  for (const allocation of scenario.allocations) {
    const account = accounts.get(allocation.accountId)
    if (!account) {
      issues.push(fail('conservation', `${allocation.label} points to a missing source account.`))
      continue
    }

    if (!MONEY_STATES.includes(allocation.state)) {
      issues.push(fail('lock_semantics', `${allocation.label} uses unknown money state "${allocation.state}".`))
    }

    if (allocation.amount < 0) {
      issues.push(fail('conservation', `${allocation.label} cannot allocate a negative amount.`))
    }

    account.allocated += allocation.amount
    account.free = account.balance - account.allocated

    if (allocation.claimants?.length > 1 && allocation.state !== 'escrowed') {
      issues.push(fail('collision', `${allocation.label} has multiple claimants without escrow arbitration.`))
    }

    if (PROTECTED_STATES.has(allocation.state) && allocation.spendable) {
      issues.push(fail('lock_semantics', `${allocation.label} is ${allocation.state} but marked spendable.`))
    }
  }

  for (const account of accounts.values()) {
    if (account.allocated > account.balance) {
      issues.push(
        fail(
          'conservation',
          `${account.label} over-allocates ${formatMoney(account.allocated - account.balance)} beyond its balance.`
        )
      )
    }
  }

  for (const obligation of scenario.obligations) {
    const source = accounts.get(obligation.sourceAccountId)
    const fundedAmount = sumFundingPath(obligation.fundingPathAllocationIds, allocations)

    if (!source) {
      issues.push(fail('obligation_funding', `${obligation.label} has no valid source account.`))
    }

    if (fundedAmount < obligation.amount) {
      issues.push(
        fail(
          'obligation_funding',
          `${obligation.label} is short by ${formatMoney(obligation.amount - fundedAmount)}.`
        )
      )
    }

    if (!obligation.recoveryRule) {
      issues.push(warn('obligation_funding', `${obligation.label} needs a recovery rule for failed payment.`))
    }

    for (const actorId of obligation.consentActorIds ?? []) {
      if (!actors.get(actorId)?.consented) {
        issues.push(fail('consent', `${obligation.label} exposes ${actorId} without recorded consent.`))
      }
    }
  }

  for (const flow of scenario.flows) {
    const hasSource = Boolean(flow.sourceAllocationId && allocations.has(flow.sourceAllocationId))
    if (!hasSource || !flow.destination) {
      issues.push(fail('execution_source', `${flow.id} needs a source allocation and destination.`))
    }
    if (flow.failureMode && !flow.recoveryRule) {
      issues.push(warn('execution_source', `${flow.id} has a failure mode without a recovery rule.`))
    }
  }

  if (!scenario.governance?.auditTrail) {
    issues.push(fail('auditability', `${scenario.name} needs an immutable audit trail.`))
  }
  if (!scenario.governance?.disputeRule) {
    issues.push(warn('auditability', `${scenario.name} needs dispute handling.`))
  }
  if (!scenario.governance?.reversalRule) {
    issues.push(warn('auditability', `${scenario.name} needs reversal logic.`))
  }

  return {
    scenarioId: scenario.id,
    name: scenario.name,
    status: issues.some((issue) => issue.severity === 'fail') ? 'blocked' : 'composable',
    balances: Array.from(accounts.values()),
    issues,
    laws: FINANCIAL_PHYSICS_LAWS.map((law) => ({
      ...law,
      status: lawStatus(law.id, issues)
    }))
  }
}

function sumFundingPath(ids = [], allocations) {
  return ids.reduce((total, id) => total + (allocations.get(id)?.amount ?? 0), 0)
}

function lawStatus(lawId, issues) {
  const lawIssues = issues.filter((issue) => issue.lawId === lawId)
  if (lawIssues.some((issue) => issue.severity === 'fail')) return 'fail'
  if (lawIssues.some((issue) => issue.severity === 'warn')) return 'warn'
  return 'pass'
}

function fail(lawId, message) {
  return { lawId, message, severity: 'fail' }
}

function warn(lawId, message) {
  return { lawId, message, severity: 'warn' }
}
