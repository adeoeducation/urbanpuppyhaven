export const IMPLEMENTATION_ARCHITECTURE = Object.freeze({
  rustKernel: [
    'state_machines',
    'invariant_enforcement',
    'ledger_validation',
    'balance_checks',
    'allowed_transitions',
    'fund_state_logic',
    'deterministic_contract_execution'
  ],
  goBackend: [
    'orchestration',
    'service_coordination',
    'product_composition_workflow',
    'calling_simulation',
    'calling_compliance_governor',
    'managing_product_manifests',
    'provider_adapter_interfaces',
    'runtime_monitoring_coordination'
  ],
  typeScriptFrontend: [
    'admin_drag_and_drop_canvas',
    'user_facing_creation_flow',
    'capability_configuration_ui',
    'state_visualizations',
    'warnings',
    'consent_screens',
    'explanation_panels',
    'product_timelines'
  ],
  intelligenceLayer: [
    'natural_language_interpretation',
    'clarifying_questions',
    'drafting_apsl',
    'explaining_product_behavior',
    'suggesting_safer_alternatives',
    'generating_ui_copy',
    'mapping_user_intent_to_product_families'
  ],
  boundary: 'intelligence_interprets_deterministic_kernel_enforces'
})

export const CANONICAL_OBJECT_SCHEMAS = Object.freeze({
  Actor: ['id', 'role', 'identity_level', 'permissions', 'risk_exposure', 'consent_status'],
  ValueObject: ['id', 'asset', 'amount', 'source', 'owner', 'controller', 'state'],
  Obligation: ['id', 'debtor', 'creditor', 'amount', 'due_at', 'priority', 'default_policy'],
  Claim: ['id', 'claimant', 'against_value_object', 'amount', 'conditions', 'priority'],
  Flow: ['id', 'from', 'to', 'amount_formula', 'trigger', 'required_conditions', 'settlement_mode'],
  Invariant: ['id', 'description', 'predicate', 'severity'],
  FailureMode: ['id', 'trigger', 'recovery_path', 'user_explanation'],
  ProductPhysicsManifest: [
    'product_id',
    'product_type',
    'actors',
    'value_objects',
    'obligations',
    'claims',
    'flows',
    'invariants',
    'failure_modes',
    'required_primitives',
    'required_disclosures',
    'runtime_monitors'
  ]
})

export const TESTING_CATEGORIES = Object.freeze([
  'invariant_tests',
  'state_machine_tests',
  'ledger_balance_tests',
  'fundability_tests',
  'default_scenario_tests',
  'fraud_scenario_tests',
  'simulation_tests',
  'primitive_compatibility_tests',
  'consent_coverage_tests',
  'compliance_handoff_tests',
  'runtime_drift_tests',
  'explanation_accuracy_tests'
])

export const canonicalSafeSendObject = Object.freeze({
  product_id: 'aura.safe_send.proof_gated_payment',
  product_type: 'conditional_payment',
  actors: [
    {
      id: 'sender',
      role: 'payer',
      identity_level: 'verified',
      permissions: ['fund_payment', 'set_conditions'],
      risk_exposure: ['refund_delay'],
      consent_status: 'captured'
    }
  ],
  value_objects: [
    {
      id: 'payment_amount',
      asset: 'USD',
      amount: 100000,
      source: 'sender_wallet',
      owner: 'sender',
      controller: 'escrow_contract',
      state: 'escrowed'
    }
  ],
  obligations: [],
  claims: [
    {
      id: 'recipient_claim',
      claimant: 'recipient',
      against_value_object: 'payment_amount',
      amount: 100000,
      conditions: ['proof_approved'],
      priority: 1
    }
  ],
  flows: [
    {
      id: 'release',
      from: 'escrow_wallet',
      to: 'recipient_wallet',
      amount_formula: 'payment_amount',
      trigger: 'proof_approved',
      required_conditions: ['release_requires_all_conditions_true'],
      settlement_mode: 'supervised_auto_release'
    }
  ],
  invariants: [
    {
      id: 'release_requires_all_conditions_true',
      description: 'Recipient cannot claim until release conditions pass.',
      predicate: 'proof_approved == true',
      severity: 'block'
    }
  ],
  failure_modes: [
    {
      id: 'proof_missing',
      trigger: 'deadline_expired',
      recovery_path: 'auto_refund',
      user_explanation: 'Funds return to sender if proof is not submitted in time.'
    }
  ],
  required_primitives: ['escrow_hold', 'claimable_transfer', 'refund_timer'],
  required_disclosures: ['recipient_cannot_access_funds_until_conditions_are_met'],
  runtime_monitors: ['proof_deadline_monitor']
})

export function validateCanonicalObject(kind, object) {
  const required = CANONICAL_OBJECT_SCHEMAS[kind] ?? []
  const missing = required.filter((field) => object[field] === undefined)

  return {
    kind,
    valid: missing.length === 0,
    missing
  }
}
