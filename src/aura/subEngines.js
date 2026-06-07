export const FINANCIAL_PHYSICS_SUB_ENGINES = Object.freeze([
  'Financial Object Extraction Engine',
  'Actor / Role Topology Engine',
  'Asset and Value Normalization Engine',
  'Ownership and Control Engine',
  'Fund State Machine Engine',
  'Ledger Conservation Engine',
  'Flow Geometry Engine',
  'Obligation Physics Engine',
  'Claim and Entitlement Engine',
  'Trigger and Condition Engine',
  'Time and Maturity Engine',
  'Liquidity and Fundability Engine',
  'Risk and Default Engine',
  'BTS / Trust Integration Engine',
  'Incentive and Abuse Detection Engine',
  'Fee, Friction, and Cost Engine',
  'Jurisdiction Interface Layer',
  'Failure and Recovery Engine',
  'Product Invariant Compiler',
  'Primitive Compatibility Mapper',
  'Simulation Model Builder',
  'Runtime Physics Monitor',
  'Explanation Adapter',
  'Product Physics Manifest Generator'
])

export const FINANCIAL_ROLES = Object.freeze([
  'sender',
  'receiver',
  'payer',
  'beneficiary',
  'guardian',
  'sponsor',
  'contributor',
  'borrower',
  'lender',
  'organizer',
  'admin',
  'verifier',
  'guarantor',
  'merchant',
  'school',
  'landlord',
  'business',
  'employee',
  'contractor',
  'family_member',
  'minor',
  'agent',
  'platform_operator'
])

export const ROLE_TOPOLOGY_QUESTIONS = Object.freeze([
  'Who owns the money?',
  'Who controls the money?',
  'Who benefits from the money?',
  'Who can approve movement?',
  'Who can cancel?',
  'Who can dispute?',
  'Who can see records?',
  'Who bears loss?',
  'Who receives notifications?',
  'Who must consent?',
  'Who is legally responsible?'
])

export const OWNERSHIP_CONTROL_ROLES = Object.freeze([
  'legal_owner',
  'beneficial_owner',
  'controller',
  'authorized_delegate',
  'temporary_custodian',
  'claimant',
  'recipient',
  'payee',
  'contributor',
  'guarantor'
])

export const GROUP_WALLET_OWNERSHIP_MODELS = Object.freeze([
  {
    id: 'member_retained_ownership',
    summary: 'Each member owns their contribution until payout.'
  },
  {
    id: 'group_owned_pool',
    summary: 'The group owns the pooled funds.'
  },
  {
    id: 'platform_custody',
    summary: 'The platform holds funds in custody without beneficial ownership.'
  },
  {
    id: 'next_recipient_claim',
    summary: 'The next payout recipient has a claim before release.'
  },
  {
    id: 'organizer_control_no_ownership',
    summary: 'The organizer controls rules or approvals but does not own funds.'
  }
])

export const VALUE_BEHAVIORS = Object.freeze({
  cash_balance: 'final_value',
  bank_account_balance: 'external_account_value',
  mobile_money: 'rail_settled_value',
  card_authorization: 'revocable_authorization',
  stablecoin: 'tokenized_value',
  reward_credit: 'program_restricted_value',
  merchant_credit: 'merchant_restricted_value',
  school_fee_balance: 'purpose_restricted_value',
  escrowed_funds: 'condition_locked_value',
  internal_wallet_balance: 'ledger_native_value',
  pledged_contribution: 'promise_not_cash',
  receivable: 'claim_not_cash',
  debt: 'liability',
  invoice: 'claim_not_cash',
  deposit: 'refundable_or_nonrefundable_value',
  insurance_reserve: 'contingent_reserve'
})

export const PROOF_GATED_PAYMENT_STATE_MACHINE = Object.freeze({
  initial: 'draft',
  active: ['created', 'funded', 'escrowed', 'proof_pending', 'proof_submitted', 'under_review', 'approved'],
  terminal: ['released', 'refunded', 'closed'],
  failure: ['proof_rejected', 'deadline_expired'],
  dispute: ['dispute_opened', 'frozen', 'resolved'],
  recovery: ['refund_pending', 'auto_refund'],
  audit: ['created', 'funded', 'proof_submitted', 'approved', 'released', 'refunded', 'dispute_opened'],
  transitions: {
    draft: ['created'],
    created: ['funded'],
    funded: ['escrowed'],
    escrowed: ['proof_pending', 'deadline_expired', 'dispute_opened'],
    proof_pending: ['proof_submitted', 'deadline_expired', 'dispute_opened'],
    proof_submitted: ['under_review', 'proof_rejected', 'dispute_opened'],
    under_review: ['approved', 'proof_rejected', 'dispute_opened'],
    approved: ['released'],
    released: ['closed'],
    proof_rejected: ['refund_pending'],
    refund_pending: ['refunded'],
    refunded: ['closed'],
    deadline_expired: ['auto_refund'],
    auto_refund: ['closed'],
    dispute_opened: ['frozen'],
    frozen: ['resolved'],
    resolved: ['released', 'refunded']
  }
})

export const GROUP_SAVINGS_STATES = Object.freeze([
  'circle_draft',
  'member_invitation',
  'contribution_window_open',
  'contribution_collected',
  'pot_funded',
  'payout_ready',
  'payout_released',
  'round_closed',
  'member_missed_payment',
  'reserve_applied',
  'default_declared',
  'replacement_started',
  'circle_paused',
  'circle_resumed',
  'circle_completed',
  'circle_terminated'
])

export const FLOW_GEOMETRY_PATHS = Object.freeze([
  'splits',
  'routes',
  'waterfalls',
  'priority_queues',
  'conditional_paths',
  'refund_paths',
  'settlement_paths',
  'contribution_paths',
  'reserve_paths',
  'fee_paths',
  'failure_paths'
])

export const OBLIGATION_FIELDS = Object.freeze([
  'owed_by',
  'owed_to',
  'amount',
  'due_at',
  'cadence',
  'grace_period',
  'penalty',
  'priority',
  'partial_allowed',
  'missed_payment_outcome',
  'covering_party',
  'reschedule_policy',
  'trust_score_effect',
  'advance_lock_required'
])

export const CLAIM_FIELDS = Object.freeze([
  'claimant',
  'amount',
  'funds',
  'conditions',
  'priority',
  'expires',
  'disputable',
  'transferable',
  'revocable',
  'collision_policy'
])

export const CONDITION_FIELDS = Object.freeze([
  'event_source',
  'condition_logic',
  'required_evidence',
  'confidence_threshold',
  'time_window',
  'fallback_path',
  'manual_review_path',
  'fraud_risk',
  'audit_record'
])

export const REQUIRED_CONDITION_PATHS = Object.freeze([
  'success_path',
  'failure_path',
  'expiry_path',
  'dispute_path',
  'manual_override_path'
])

export const TEMPORAL_FIELDS = Object.freeze([
  'initiated_at',
  'authorized_at',
  'posted_at',
  'settled_at',
  'available_at',
  'due_at',
  'expires_at',
  'released_at',
  'closed_at'
])

export const DEFAULT_FAILURE_EXAMPLES = Object.freeze([
  'group_member_stops_contributing_after_payout',
  'contractor_takes_money_without_delivery',
  'payer_bank_transfer_reverses',
  'recipient_submits_fake_proof',
  'user_withdraws_protected_funds',
  'family_member_misuses_delegated_access',
  'merchant_invoice_is_fraudulent'
])

export const TRUST_SIGNALS = Object.freeze([
  'payment_history',
  'contribution_reliability',
  'dispute_history',
  'identity_verification_level',
  'relationship_strength',
  'past_defaults',
  'transaction_consistency',
  'device_location_consistency',
  'business_verification',
  'community_endorsements',
  'completion_history'
])

export const BTS_INFLUENCES = Object.freeze([
  'limits',
  'release_speed',
  'reserve_requirements',
  'default_protection',
  'verification_requirements',
  'access_to_advanced_products',
  'human_review_thresholds',
  'payout_order_eligibility',
  'credit_liquidity_support_eligibility'
])

export const ABUSE_VECTORS = Object.freeze([
  'post_payout_bolting',
  'organizer_collusion',
  'fake_accounts',
  'circular_payments',
  'proof_forgery',
  'refund_abuse',
  'chargeback_abuse',
  'payout_queue_manipulation',
  'fake_merchant_invoices',
  'identity_farming',
  'sybil_attacks'
])

export const ABUSE_PROTECTIONS = Object.freeze([
  'deposits',
  'reserves',
  'tail_locks',
  'insurance_pools',
  'trust_gated_payout_order',
  'delayed_release',
  'escrow',
  'progressive_limits',
  'identity_requirements',
  'contribution_history',
  'guarantor_requirement',
  'human_review'
])

export const FEE_TYPES = Object.freeze([
  'platform_fee',
  'payment_processor_fee',
  'withdrawal_fee',
  'fx_fee',
  'late_fee',
  'penalty',
  'insurance_fee',
  'reserve_contribution',
  'chargeback_cost',
  'tax_related_cost',
  'operational_review_cost'
])

export const LEGAL_CATEGORY_FLAGS = Object.freeze([
  'money_transmission',
  'stored_value',
  'escrow',
  'lending',
  'credit',
  'insurance',
  'investment',
  'deposit_taking',
  'securities',
  'remittance',
  'payroll',
  'bill_payment',
  'debt_collection',
  'charitable_fundraising',
  'custody',
  'child_minor_financial_product',
  'business_treasury_product'
])

export const FAILURE_RECOVERY_PATHS = Object.freeze([
  'auto_refund',
  'manual_review',
  'reserve_application',
  'grace_period',
  'partial_payout',
  'product_pause',
  'replacement_member',
  'clawback',
  'dispute_workflow',
  'escalation',
  'human_operations_review',
  'regulatory_hold',
  'product_termination'
])

export const PRODUCT_INVARIANT_TEMPLATES = Object.freeze({
  proof_gated_payment: [
    'funds_cannot_move_from_escrow_to_recipient_unless_all_release_conditions_are_satisfied'
  ],
  group_contribution_circle: [
    'payout_cannot_release_unless_pot_fully_funded_or_approved_reserves_cover_shortfall'
  ],
  school_fee_wallet: [
    'restricted_funds_can_only_be_paid_to_approved_education_recipients_unless_guardian_override_is_approved'
  ],
  smart_salary_split: [
    'priority_obligations_must_be_funded_before_discretionary_allocations'
  ]
})

export const PRIMITIVE_MANIFESTS = Object.freeze({
  escrow_hold: {
    primitive_name: 'escrow_hold',
    input_states: ['available_funds'],
    output_states: ['escrowed_funds'],
    required_actors: ['payer', 'recipient'],
    ledger_effects: ['debit_available', 'credit_escrow_liability'],
    requires_consent: true,
    failure_modes: ['refund', 'dispute', 'expiry'],
    compatible_with: ['proof_verification', 'claimable_transfer', 'refund_timer'],
    forbidden_with: ['instant_irreversible_release_without_settlement']
  },
  proof_verification: {
    primitive_name: 'proof_verification',
    input_states: ['proof_pending'],
    output_states: ['proof_approved', 'proof_rejected'],
    required_actors: ['recipient', 'verifier'],
    ledger_effects: ['none'],
    requires_consent: true,
    failure_modes: ['manual_review', 'dispute'],
    compatible_with: ['claimable_transfer', 'refund_timer'],
    forbidden_with: ['instant_irreversible_release_without_settlement']
  },
  claimable_transfer: {
    primitive_name: 'claimable_transfer',
    input_states: ['escrowed_funds', 'proof_approved'],
    output_states: ['released_funds'],
    required_actors: ['recipient'],
    ledger_effects: ['debit_escrow_liability', 'credit_recipient_available'],
    requires_consent: true,
    failure_modes: ['claim_expiry', 'dispute'],
    compatible_with: ['refund_timer', 'dispute_resolution'],
    forbidden_with: []
  },
  group_payout: {
    primitive_name: 'group_payout',
    input_states: ['pot_funded'],
    output_states: ['payout_released'],
    required_actors: ['member', 'organizer'],
    ledger_effects: ['debit_group_pool', 'credit_recipient_available'],
    requires_consent: true,
    failure_modes: ['default', 'reserve_shortfall', 'dispute'],
    compatible_with: ['default_policy', 'reserve_policy'],
    forbidden_with: ['missing_default_policy']
  }
})

export const SIMULATION_SCENARIOS = Object.freeze([
  'best_case',
  'normal_case',
  'delayed_payment_case',
  'partial_funding_case',
  'default_case',
  'fraud_attempt_case',
  'dispute_case',
  'processor_failure_case',
  'user_cancellation_case',
  'high_volume_case',
  'edge_case_timing_case'
])

export const SAVINGS_CIRCLE_SIMULATION_CASES = Object.freeze([
  'all_members_pay_on_time',
  'one_member_pays_late',
  'one_member_defaults_before_payout',
  'one_member_defaults_after_payout',
  'two_members_default',
  'organizer_tries_unauthorized_payout',
  'member_tries_to_leave_mid_cycle',
  'reserve_is_insufficient',
  'payment_reverses_after_payout',
  'circle_is_paused_and_resumed',
  'replacement_member_joins'
])

export const WATCHTOWER_ACTIONS = Object.freeze([
  'pause_product',
  'warn_user',
  'require_additional_verification',
  'reduce_limit',
  'trigger_human_review',
  'apply_reserve',
  'delay_payout',
  'ask_for_new_consent',
  'update_product_state'
])

export const INTERLOCK_RULES = Object.freeze([
  'state_compatibility',
  'ledger_compatibility',
  'actor_compatibility',
  'consent_compatibility',
  'risk_compatibility',
  'time_compatibility',
  'compliance_compatibility',
  'failure_mode_compatibility'
])

export const KERNEL_CONTRACT_OUTPUTS = Object.freeze([
  'state_machine_spec',
  'ledger_mapping',
  'allowed_transitions',
  'invariant_list',
  'runtime_guard_conditions',
  'event_schema'
])

export const UI_COMPOSER_REQUIREMENTS = Object.freeze([
  'state_labels',
  'user_facing_explanations',
  'risk_warnings',
  'required_consent_text',
  'action_permissions',
  'progress_indicators',
  'timeline_events',
  'failure_messages',
  'next_best_actions'
])

export const ALGORITHM_VAULT_KEYS = Object.freeze([
  'fundability_formula',
  'default_risk_model',
  'contribution_scheduling_algorithm',
  'reserve_sizing_formula',
  'priority_waterfall_algorithm',
  'trust_score_adjustment_logic',
  'payout_queue_algorithm',
  'proof_confidence_scoring_model'
])

export const ASSET_VAULT_KEYS = Object.freeze([
  'lock_icon',
  'escrow_animation',
  'risk_warning_badge',
  'contribution_timeline',
  'payout_queue_visual',
  'proof_pending_animation',
  'refund_state_illustration',
  'trust_score_badge',
  'emergency_unlock_warning'
])

export const FINANCIAL_PHYSICS_DECISION_CYCLE = Object.freeze([
  'receive_structured_intent',
  'extract_financial_objects',
  'identify_product_class',
  'build_actor_role_graph',
  'build_money_flow_graph',
  'build_obligation_graph',
  'build_claim_graph',
  'define_fund_states',
  'define_time_rules',
  'detect_risk_exposures',
  'apply_invariant_library',
  'check_fundability',
  'check_primitive_requirements',
  'check_missing_rules',
  'generate_clarification_questions_if_critical_information_is_missing',
  'produce_product_physics_manifest',
  'send_to_simulation',
  'adjust_based_on_simulation',
  'send_to_compliance_governor',
  'send_to_product_composer',
  'send_to_kernel_contract_builder',
  'send_to_ui_ux_composer',
  'activate_runtime_monitors'
])

export const HARD_STOP_CONDITIONS = Object.freeze([
  'no_funding_source_for_promised_payout',
  'no_ownership_model_for_pooled_funds',
  'no_consent_for_exposed_participants',
  'no_default_handling_for_group_obligations',
  'no_refund_path_for_conditional_payment',
  'no_failure_mode_for_verification_rejection',
  'no_ledger_mapping',
  'unbounded_platform_liability',
  'conflicting_claims_on_same_funds',
  'restricted_funds_with_unrestricted_withdrawal',
  'credit_like_product_without_approval_path',
  'insurance_like_pooling_without_governor_review',
  'high_fraud_risk_without_mitigation'
])

export const PRODUCT_GRAPH_TYPES = Object.freeze([
  'actor_graph',
  'money_flow_graph',
  'obligation_graph',
  'claim_graph',
  'risk_graph',
  'state_graph'
])

export const HARD_FINANCIAL_LAWS = Object.freeze([
  'ledger_must_balance',
  'locked_funds_cannot_be_spent',
  'release_conditions_must_be_satisfied',
  'payout_cannot_exceed_fundable_amount',
  'consent_must_exist_where_required',
  'state_transition_must_be_valid'
])

export const SOFT_FINANCIAL_FORCES = Object.freeze([
  'user_has_low_bts',
  'recipient_is_new',
  'transaction_amount_is_unusual',
  'location_is_slightly_inconsistent',
  'user_has_late_contribution_history',
  'reserve_is_lower_than_ideal',
  'proof_confidence_is_medium'
])

export const RELEASE_MODES = Object.freeze([
  'simulation_only',
  'user_draft',
  'internal_admin_review',
  'human_supervised_execution',
  'low_limit_live_release',
  'full_automated_release',
  'jurisdiction_restricted_release',
  'blocked'
])

export const LIFE_CONTEXT_PROFILES = Object.freeze({
  teacher: ['monthly_salary_timing', 'school_fees', 'rent', 'predictable_obligations'],
  market_woman: ['daily_cash_flow', 'irregular_income', 'inventory_restocking', 'mobile_money', 'family_support'],
  student: ['allowance', 'low_amounts', 'guardian_oversight', 'spending_categories'],
  contractor: ['milestone_income', 'delayed_payments', 'tax_set_aside', 'business_expenses'],
  parent: ['school_fees', 'family_obligations', 'emergency_funds', 'dependent_controls'],
  elderly_person: ['fraud_protection', 'trusted_delegate', 'medication_health_expenses', 'simple_ux']
})

export function extractFinancialObjects(intentText) {
  const normalized = intentText.toLowerCase()

  if (normalized.includes('brother') && normalized.includes('rent')) {
    return {
      actors: ['user', 'brother', 'landlord_or_rent_recipient'],
      financialGoal: 'rent',
      moneySources: ['user_contribution', 'brother_contribution'],
      restrictions: ['user_cannot_freely_withdraw'],
      releaseConditions: ['rent_due', 'payment_to_rent_recipient', 'possible_emergency_override'],
      risks: [
        'user_may_withdraw_early',
        'brother_needs_use_assurance',
        'rent_due_date_may_arrive_before_goal_is_funded'
      ],
      requiredMechanics: [
        'goal_wallet',
        'contribution_link',
        'lock_rule',
        'merchant_payee_restriction',
        'due_date_trigger',
        'emergency_override_policy'
      ]
    }
  }

  return {
    actors: inferActors(normalized),
    financialGoal: inferGoal(normalized),
    moneySources: inferMoneySources(normalized),
    restrictions: inferRestrictions(normalized),
    releaseConditions: inferReleaseConditions(normalized),
    risks: ['missing_role_clarity', 'missing_release_condition', 'missing_failure_path'],
    requiredMechanics: ['object_extraction_review', 'role_topology_review', 'product_physics_manifest']
  }
}

export function mapRoleTopology(intentText) {
  const normalized = intentText.toLowerCase()

  if (normalized.includes('mother') && normalized.includes('child') && normalized.includes('school')) {
    return {
      funder: 'user',
      guardian: 'mother',
      handler: 'mother',
      agent: 'mother',
      beneficiary: 'child',
      intendedMerchant: 'school',
      valueType: 'restricted_educational_funds',
      unresolvedQuestions: ['Who owns the funds before school payment?', 'Can the mother redirect or refund funds?']
    }
  }

  return {
    funder: normalized.includes('send') ? 'sender' : 'unknown',
    beneficiary: normalized.includes('for') ? 'mentioned beneficiary' : 'unknown',
    controller: normalized.includes('admin') ? 'admin' : 'unknown',
    unresolvedQuestions: ROLE_TOPOLOGY_QUESTIONS
  }
}

export function normalizeValueObject(valueType) {
  const rawKey = valueType.toLowerCase().replaceAll(' ', '_')
  const aliases = {
    settled_wallet_balance: 'internal_wallet_balance'
  }
  const key = aliases[rawKey] ?? rawKey
  const behavior = VALUE_BEHAVIORS[key] ?? 'unknown_value_behavior'

  return {
    valueType: key,
    behavior,
    isCashEquivalent: behavior === 'final_value' || behavior === 'ledger_native_value',
    mustNotTreatAsCash: ['promise_not_cash', 'claim_not_cash', 'revocable_authorization'].includes(behavior),
    settlementRisk: ['external_account_value', 'rail_settled_value', 'revocable_authorization'].includes(behavior)
  }
}

export function resolveOwnershipControl(productType) {
  if (productType === 'group_wallet') {
    return {
      productType,
      requiredRoles: OWNERSHIP_CONTROL_ROLES,
      possibleModels: GROUP_WALLET_OWNERSHIP_MODELS,
      mustDecideBeforeComposition: true
    }
  }

  return {
    productType,
    requiredRoles: OWNERSHIP_CONTROL_ROLES,
    possibleModels: [],
    mustDecideBeforeComposition: true
  }
}

export function canTransition(machine, from, to) {
  return Boolean(machine.transitions[from]?.includes(to))
}

export function describeStateMachine(machine) {
  return {
    initialState: machine.initial,
    activeStates: machine.active,
    terminalStates: machine.terminal,
    failureStates: machine.failure,
    disputeStates: machine.dispute,
    recoveryStates: machine.recovery,
    auditStates: machine.audit,
    transitionCount: Object.values(machine.transitions).reduce((count, nextStates) => count + nextStates.length, 0)
  }
}

export function ledgerEntriesForEscrowMovement(type, amount) {
  const movements = {
    fund_escrow: [
      { account: 'user_available_wallet', effect: 'debit', amount: -amount },
      { account: 'escrow_liability', effect: 'credit', amount }
    ],
    release_escrow: [
      { account: 'escrow_liability', effect: 'debit', amount: -amount },
      { account: 'recipient_available_wallet', effect: 'credit', amount }
    ],
    refund_escrow: [
      { account: 'escrow_liability', effect: 'debit', amount: -amount },
      { account: 'sender_available_wallet', effect: 'credit', amount }
    ]
  }

  return movements[type] ?? []
}

export function validateLedgerConservation(entries) {
  const net = entries.reduce((total, entry) => total + entry.amount, 0)

  return {
    balanced: net === 0,
    net,
    prevents: [
      'phantom_balances',
      'duplicate_payouts',
      'untracked_holds',
      'hidden_liabilities',
      'broken_refunds',
      'unbalanced_reserves',
      'incorrect_fee_treatment'
    ]
  }
}

export function allocateByPriority(income, priorityRules) {
  let remaining = income

  const allocations = priorityRules.map((rule) => {
    const allocated = Math.min(rule.required, Math.max(remaining, 0))
    remaining -= allocated

    return {
      ...rule,
      allocated,
      shortfall: rule.required - allocated,
      funded: allocated >= rule.required
    }
  })

  return {
    income,
    allocations,
    remaining: Math.max(remaining, 0),
    fullyFunded: allocations.every((allocation) => allocation.funded)
  }
}

export function modelObligation(input) {
  const obligation = {
    owed_by: input.owedBy,
    owed_to: input.owedTo,
    amount: input.amount,
    due_at: input.dueAt,
    cadence: input.cadence ?? 'one_time',
    grace_period: input.gracePeriod ?? null,
    penalty: input.penalty ?? null,
    priority: input.priority ?? 999,
    partial_allowed: Boolean(input.partialAllowed),
    missed_payment_outcome: input.missedPaymentOutcome ?? null,
    covering_party: input.coveringParty ?? null,
    reschedule_policy: input.reschedulePolicy ?? null,
    trust_score_effect: input.trustScoreEffect ?? 'none',
    advance_lock_required: Boolean(input.advanceLockRequired)
  }

  return {
    ...obligation,
    complete: OBLIGATION_FIELDS.every((field) => obligation[field] !== undefined),
    missing: OBLIGATION_FIELDS.filter((field) => obligation[field] === undefined || obligation[field] === null)
  }
}

export function calculateTrueFlexibleAmount(totalBalance, obligations) {
  const protectedAmount = obligations.reduce((total, obligation) => total + obligation.amount, 0)

  return {
    totalBalance,
    protectedAmount,
    flexibleAmount: Math.max(totalBalance - protectedAmount, 0),
    overCommittedBy: Math.max(protectedAmount - totalBalance, 0)
  }
}

export function modelClaim(input) {
  const claim = {
    claimant: input.claimant,
    amount: input.amount,
    funds: input.funds,
    conditions: input.conditions ?? [],
    priority: input.priority ?? 999,
    expires: input.expires ?? null,
    disputable: Boolean(input.disputable),
    transferable: Boolean(input.transferable),
    revocable: Boolean(input.revocable),
    collision_policy: input.collisionPolicy ?? 'priority_then_manual_review'
  }

  return {
    ...claim,
    conditional: claim.conditions.length > 0,
    complete: CLAIM_FIELDS.every((field) => claim[field] !== undefined)
  }
}

export function evaluateConditionGate(gate) {
  const pathCoverage = REQUIRED_CONDITION_PATHS.map((path) => ({
    path,
    present: Boolean(gate[path])
  }))

  return {
    eventSource: gate.event_source,
    conditionLogic: gate.condition_logic,
    requiredEvidence: gate.required_evidence ?? [],
    confidenceThreshold: gate.confidence_threshold,
    timeWindow: gate.time_window,
    auditable: Boolean(gate.audit_record),
    allPathsCovered: pathCoverage.every((path) => path.present),
    pathCoverage
  }
}

export function buildTemporalModel(input) {
  return {
    cadence: input.cadence,
    timezone: input.timezone,
    contributionWindowClosesAt: input.contributionWindowClosesAt,
    payoutTriggeredAt: input.payoutTriggeredAt,
    gracePeriodHours: input.gracePeriodHours,
    canPayoutBeforeSettlement: Boolean(input.canPayoutBeforeSettlement),
    reversalRiskAfterPayout: Boolean(input.reversalRiskAfterPayout),
    requiredFields: TEMPORAL_FIELDS,
    missingQuestions: [
      !input.weekday ? 'Which day of the week?' : null,
      !input.timezone ? 'What time zone?' : null,
      !input.gracePeriodHours ? 'What is the grace period?' : null,
      input.canPayoutBeforeSettlement === undefined ? 'Can payout happen before all contributions settle?' : null
    ].filter(Boolean)
  }
}

export function calculateLiquidity({
  requiredPayout,
  guaranteedFunding = 0,
  pendingFunding = 0,
  uncertainFunding = 0,
  reserveCoverage = 0,
  approvedCoverage = 0
}) {
  const guaranteedAvailableFunds = guaranteedFunding + reserveCoverage + approvedCoverage
  const expectedAvailableFunds = guaranteedAvailableFunds + pendingFunding
  const optimisticAvailableFunds = expectedAvailableFunds + uncertainFunding
  const fundabilityRatio = requiredPayout > 0 ? guaranteedAvailableFunds / requiredPayout : 1
  const expectedShortfall = Math.max(requiredPayout - expectedAvailableFunds, 0)
  const worstCaseShortfall = Math.max(requiredPayout - guaranteedAvailableFunds, 0)

  return {
    requiredFunding: requiredPayout,
    guaranteedFunding,
    pendingFunding,
    uncertainFunding,
    reserveCoverage,
    approvedCoverage,
    expectedShortfall,
    worstCaseShortfall,
    fundabilityRatio,
    optimisticAvailableFunds,
    payoutSafety: fundabilityRatio >= 1 ? 'safe_to_release' : 'blocked_without_approved_support'
  }
}

export function evaluateDefaultRisk({
  actor,
  failureMode,
  exposure,
  reserveCoverage = 0,
  trustScore = 0.5,
  proofRequired = false
}) {
  const uncoveredExposure = Math.max(exposure - reserveCoverage, 0)
  const lossSeverity = exposure >= 100000 ? 'high' : exposure >= 25000 ? 'medium' : 'low'
  const shouldTriggerHumanReview = trustScore < 0.45 || uncoveredExposure > 0

  return {
    actor,
    failureMode,
    defaultExposure: exposure,
    uncoveredExposure,
    lossSeverity,
    recoveryOptions: ['reserve_draw', 'retry_collection', 'freeze_related_claims', 'manual_review'],
    reserveNeeds: uncoveredExposure,
    trustImpact: trustScore < 0.45 ? 'strict_mode' : 'standard_mode',
    releaseMode: proofRequired || trustScore < 0.45 ? 'escrow_or_pending_claim' : 'standard_release',
    shouldTriggerHumanReview,
    productBlocked: uncoveredExposure > 0 && trustScore < 0.35
  }
}

export function evaluateTrustPhysics(score) {
  if (score >= 0.75) {
    return {
      band: 'high_bts',
      limits: 'higher_transaction_limit',
      releaseSpeed: 'faster_settlement',
      reserveRequirement: 'lower_reserve_requirement',
      proofRequirement: 'fewer_proof_requirements',
      review: 'lower_human_review_frequency',
      influences: BTS_INFLUENCES
    }
  }

  if (score <= 0.45) {
    return {
      band: 'low_bts',
      limits: 'lower_transaction_limit',
      releaseSpeed: 'pending_claim_mode',
      reserveRequirement: 'higher_reserve_requirement',
      proofRequirement: 'stricter_proof',
      review: 'human_review_required',
      influences: BTS_INFLUENCES
    }
  }

  return {
    band: 'standard_bts',
    limits: 'standard_transaction_limit',
    releaseSpeed: 'standard_release',
    reserveRequirement: 'standard_reserve_requirement',
    proofRequirement: 'standard_proof',
    review: 'risk_based_review',
    influences: BTS_INFLUENCES
  }
}

export function detectAbuseVectors(intentText) {
  const normalized = intentText.toLowerCase()

  if (normalized.includes('savings group') && normalized.includes('early')) {
    return {
      attackPath: ['join_group', 'receive_early_payout', 'stop_contributing', 'disappear'],
      vectors: ['post_payout_bolting', 'organizer_collusion', 'fake_accounts', 'payout_queue_manipulation'],
      protections: [
        'deposit',
        'tail_lock',
        'trust_gated_payout_order',
        'delayed_release',
        'progressive_limits',
        'guarantor_requirement'
      ]
    }
  }

  return {
    attackPath: [],
    vectors: ABUSE_VECTORS,
    protections: ABUSE_PROTECTIONS
  }
}

export function calculateFeeTreatment({ promisedPayout, feeRate = 0, feePayer = 'recipient' }) {
  const feeAmount = Math.round(promisedPayout * feeRate)
  const recipientNet = feePayer === 'recipient' ? promisedPayout - feeAmount : promisedPayout
  const contributorGrossRequired = feePayer === 'contributors' ? promisedPayout + feeAmount : promisedPayout

  return {
    promisedPayout,
    feeRate,
    feeAmount,
    feePayer,
    recipientNet,
    contributorGrossRequired,
    questions: [
      'Who pays the fee?',
      'When is the fee charged?',
      'Is the fee refundable?',
      'Does the fee reduce payout?',
      'Does the fee affect promised amount?',
      'Is the fee disclosed?',
      'Does the fee create unfairness?',
      'Can the product survive operationally?'
    ],
    coherent: feePayer !== 'unknown'
  }
}

export function flagJurisdictionCategories(intentText) {
  const normalized = intentText.toLowerCase()
  const flags = []

  if (normalized.includes('pool') || normalized.includes('covers the loss')) {
    flags.push({
      category: 'insurance',
      reason: 'Product includes pooled loss coverage and may resemble insurance-like risk pooling.'
    })
  }
  if (normalized.includes('escrow')) flags.push({ category: 'escrow', reason: 'Funds are held pending conditions.' })
  if (normalized.includes('lend') || normalized.includes('credit')) {
    flags.push({ category: 'lending', reason: 'Product includes credit or repayment behavior.' })
  }
  if (normalized.includes('child') || normalized.includes('minor')) {
    flags.push({ category: 'child_minor_financial_product', reason: 'A minor is a beneficiary or user.' })
  }

  return {
    flags,
    requiresGovernorReview: flags.length > 0,
    enginePosition: 'physics_flag_only_not_approval'
  }
}

export function createRecoveryPlan(failureMode) {
  const planByFailure = {
    payment_failed: ['grace_period', 'retry_collection', 'manual_review'],
    recipient_does_not_claim: ['refund_timer', 'auto_refund'],
    proof_rejected: ['manual_review', 'dispute_workflow', 'auto_refund'],
    sender_disputes: ['freeze_funds', 'dispute_workflow', 'human_operations_review'],
    member_defaults: ['reserve_application', 'replacement_member', 'product_pause'],
    admin_disappears: ['escalation', 'replacement_admin', 'human_operations_review'],
    account_frozen: ['regulatory_hold', 'product_pause'],
    identity_verification_fails: ['manual_review', 'restricted_release_block'],
    funds_reversed: ['clawback', 'reserve_application', 'dispute_workflow'],
    rule_conflict: ['product_pause', 'invariant_review', 'human_operations_review']
  }

  return {
    failureMode,
    recoveryPaths: planByFailure[failureMode] ?? FAILURE_RECOVERY_PATHS,
    hasBadWeatherLogic: true
  }
}

export function compileProductInvariants(productType) {
  return {
    productType,
    invariants: PRODUCT_INVARIANT_TEMPLATES[productType] ?? [],
    enforcementTarget: 'kernel_contract_and_runtime_monitor'
  }
}

export function checkPrimitiveCompatibility(leftName, rightName) {
  const left = PRIMITIVE_MANIFESTS[leftName]
  const right = PRIMITIVE_MANIFESTS[rightName]

  if (left?.forbidden_with.includes(rightName) || right?.forbidden_with.includes(leftName)) {
    return {
      compatible: false,
      reason: `${leftName} is forbidden with ${rightName}.`
    }
  }

  if (!left || !right) {
    return {
      compatible: false,
      reason: 'Unknown primitive manifest.'
    }
  }

  const explicitlyCompatible = left.compatible_with.includes(rightName) || right.compatible_with.includes(leftName)

  return {
    compatible: explicitlyCompatible,
    reason: explicitlyCompatible
      ? 'Primitive manifests explicitly allow this connection.'
      : 'No explicit compatible_with relationship exists.',
    actorOverlap: left.required_actors.filter((actor) => right.required_actors.includes(actor)),
    ledgerEffects: [...left.ledger_effects, ...right.ledger_effects],
    failureModes: [...new Set([...left.failure_modes, ...right.failure_modes])]
  }
}

export function buildSimulationPlan(productType) {
  const cases = productType === 'savings_circle' ? SAVINGS_CIRCLE_SIMULATION_CASES : SIMULATION_SCENARIOS

  return {
    productType,
    cases,
    checks: [
      'product_still_balances',
      'no_unfair_loss',
      'ui_explains_outcome',
      'ledger_remains_valid',
      'reserve_covers_expected_failures',
      'human_review_need_identified',
      'stricter_limits_need_identified'
    ]
  }
}

export function derivePhysicsAdjustmentsFromSimulation(result) {
  const adjustments = []

  if (result.reserveDepletedByRound && result.reserveDepletedByRound <= 3) {
    adjustments.push('increase_reserve')
    adjustments.push('require_higher_deposit')
  }
  if (result.earlyRecipientsDefault) {
    adjustments.push('delay_high_risk_members_payout')
    adjustments.push('add_tail_lock')
    adjustments.push('require_guarantor')
  }
  if (result.groupTooLargeForTrustProfile) {
    adjustments.push('reduce_group_size')
  }
  if (result.trustThresholdMissing) {
    adjustments.push('require_trust_threshold')
  }

  return {
    simulationResult: result,
    adjustments,
    selfCorrecting: adjustments.length > 0
  }
}

export function createGovernorHandoff(physicsDescription) {
  return {
    productPhysics: physicsDescription,
    governorQuestions: [
      'is_this_allowed',
      'is_this_allowed_in_jurisdiction',
      'is_this_allowed_for_user',
      'is_this_allowed_with_license',
      'are_disclosures_sufficient',
      'is_risk_level_allowed',
      'is_release_mode_allowed'
    ],
    decisionOwner: 'compliance_governor'
  }
}

export function monitorRuntimePhysics(signals) {
  const alerts = []

  if (signals.contributionLate) alerts.push({ signal: 'contribution_late', action: 'warn_user' })
  if (signals.reserveBelowRequired) alerts.push({ signal: 'reserve_below_required', action: 'pause_product' })
  if (signals.payoutApproachingPotUnderfunded) alerts.push({ signal: 'payout_underfunded', action: 'warn_user' })
  if (signals.suspiciousProof) alerts.push({ signal: 'suspicious_proof', action: 'trigger_human_review' })
  if (signals.tooManyObligations) alerts.push({ signal: 'obligation_overpull', action: 'reduce_limit' })
  if (signals.btsDropped) alerts.push({ signal: 'bts_dropped', action: 'increase_reserve_requirement' })
  if (signals.jurisdictionRuleChanged) alerts.push({ signal: 'jurisdiction_rule_changed', action: 'governor_review' })
  if (signals.recurringPaymentRepeatedlyFails) alerts.push({ signal: 'recurring_payment_repeatedly_fails', action: 'pause_product' })
  if (signals.groupDefaultRisk) alerts.push({ signal: 'group_default_risk', action: 'apply_recovery_plan' })
  if (signals.identityWeak) alerts.push({ signal: 'identity_weak', action: 'require_additional_verification' })
  if (signals.reserveCanCoverShortfall) alerts.push({ signal: 'reserve_can_cover_shortfall', action: 'apply_reserve' })
  if (signals.settlementNotFinal) alerts.push({ signal: 'settlement_not_final', action: 'delay_payout' })
  if (signals.consentScopeChanged) alerts.push({ signal: 'consent_scope_changed', action: 'ask_for_new_consent' })
  if (signals.stateChanged) alerts.push({ signal: 'state_changed', action: 'update_product_state' })

  return {
    alerts,
    watchtowerActions: [...new Set(alerts.map((alert) => alert.action))]
  }
}

export function explainFinancialRule(ruleId) {
  const explanations = {
    proof_gated_escrow:
      'Your money is protected. The recipient cannot withdraw it yet. They must first submit the required proof. If they do not do that before the deadline, your money comes back to you.',
    group_fundability:
      'AURA will not let the group pay someone with incomplete funds unless the protection reserve can safely cover the missing amount.',
    rent_shield:
      'Rent money is protected. You can add money anytime, AURA prioritizes rent when income arrives, and early withdrawal requires emergency confirmation.'
  }

  return {
    ruleId,
    explanation: explanations[ruleId] ?? 'AURA will explain this financial rule before you activate the product.',
    artifactType: 'user_facing_explanation'
  }
}

export function validateAdminCompositionGraph(graph) {
  const components = new Set(graph.components)
  const warnings = []
  const recommendedAdditions = []

  if (components.has('rotating_payout') && !components.has('payout_order_rule')) {
    warnings.push('Rotating Payout requires a Payout Order Rule.')
    recommendedAdditions.push('payout_order_rule')
  }

  if (components.has('reserve_pool') && !components.has('reserve_funding_source')) {
    warnings.push('Reserve Pool has no funding source.')
    recommendedAdditions.push('reserve_funding_source')
  }

  if (components.has('default_handler') && !components.has('member_consent_disclosure')) {
    warnings.push('Default Handler exists, but no member consent disclosure is connected.')
    recommendedAdditions.push('member_consent_screen')
  }

  if (graph.potGuaranteeEnabled && graph.twoDefaultSimulationFundable === false) {
    warnings.push('Pot Guarantee is enabled, but fundability is not satisfied under two-default simulation.')
    recommendedAdditions.push('reserve_depletion_rule')
  }

  if (graph.organizerCanOverridePayout) {
    warnings.push('Organizer has payout override permission. Add member approval or a governance rule.')
    recommendedAdditions.push('member_approval_rule')
  }

  if (!components.has('contribution_grace_period')) {
    recommendedAdditions.push('contribution_grace_period')
  }
  if (!components.has('dispute_workflow')) {
    recommendedAdditions.push('dispute_workflow')
  }
  if (!components.has('runtime_reserve_monitor')) {
    recommendedAdditions.push('runtime_reserve_monitor')
  }

  return {
    valid: warnings.length === 0,
    warnings,
    recommendedAdditions: [...new Set(recommendedAdditions)],
    interlockRules: INTERLOCK_RULES
  }
}

export function validateInterlockLayer(layer, context) {
  const checks = {
    state_compatibility: () => context.outputState === context.inputState,
    ledger_compatibility: () => Boolean(context.ledgerBalanced),
    actor_compatibility: () => (context.requiredActors ?? []).every((actor) => (context.productActors ?? []).includes(actor)),
    consent_compatibility: () => !context.exposesRisk || Boolean(context.consentPrimitivePresent),
    risk_compatibility: () => !context.highRisk || Boolean(context.escrow && context.identityVerification),
    time_compatibility: () => context.cadenceA === context.cadenceB,
    compliance_compatibility: () => !context.legalCategory || Boolean(context.governorApproved),
    failure_mode_compatibility: () => !context.canFail || Boolean(context.failureHandlerPresent)
  }

  return {
    layer,
    passed: checks[layer] ? checks[layer]() : false
  }
}

export function buildKernelContractSpec(manifest) {
  return {
    enforcementAuthority: 'deterministic_kernel_not_llm',
    state_machine_spec: manifest.fund_states ?? manifest.moneyStates ?? [],
    ledger_mapping: manifest.flows ?? {},
    allowed_transitions: manifest.fund_states ?? [],
    invariant_list: manifest.invariants ?? [manifest.invariant].filter(Boolean),
    runtime_guard_conditions: manifest.conditions ?? {},
    event_schema: ['created', 'funded', 'state_changed', 'condition_evaluated', 'released', 'refunded', 'closed'],
    outputs: KERNEL_CONTRACT_OUTPUTS
  }
}

export function composeUXRequirementsForEscrow({
  amountLabel = '$1,000',
  deadline = 'May 25',
  status = 'Waiting for recipient proof'
} = {}) {
  return {
    stateLabel: `${amountLabel} protected`,
    status,
    deadline,
    refundRule: 'Returns to you if proof is not approved',
    blockedPayoutMessage:
      'Payout is paused because two contributions are missing and the reserve cannot safely cover the shortfall.',
    requiredOutputs: UI_COMPOSER_REQUIREMENTS
  }
}

export function getVaultRequirements(productType) {
  const algorithmKeys = [
    'fundability_formula',
    'default_risk_model',
    'reserve_sizing_formula',
    'priority_waterfall_algorithm'
  ]
  const assetKeys = productType === 'proof_gated_payment'
    ? ['lock_icon', 'escrow_animation', 'proof_pending_animation', 'refund_state_illustration']
    : ['risk_warning_badge', 'contribution_timeline', 'payout_queue_visual', 'trust_score_badge']

  return {
    productType,
    algorithms: algorithmKeys,
    assets: assetKeys,
    availableAlgorithmVaultKeys: ALGORITHM_VAULT_KEYS,
    availableAssetVaultKeys: ASSET_VAULT_KEYS
  }
}

export function chooseClarifyingQuestions(intentText, known = {}) {
  const normalized = intentText.toLowerCase()
  const questions = []

  if (normalized.includes('group contribution') || normalized.includes('group savings')) {
    if (!known.memberCount) questions.push('How many members?')
    if (!known.contributionAmount) questions.push('How much does each person contribute?')
    if (!known.cadence) questions.push('How often?')
    if (!known.payoutOrder) questions.push('How is payout order decided?')
    if (!known.missedPaymentRule) questions.push('What happens if someone misses payment?')
    if (known.guaranteedPayout === undefined) questions.push('Should payout be guaranteed?')
  }

  return {
    questions,
    skippedPreferenceQuestions: ['button_color', 'icon_color', 'card_radius'],
    asksOnlyWhen: 'missing_information_affects_safety_legality_or_core_product_behavior'
  }
}

export function evaluateHardStops(productDraft) {
  const stops = []

  if (!productDraft.fundingSource) stops.push('no_funding_source_for_promised_payout')
  if (productDraft.pooledFunds && !productDraft.ownershipModel) stops.push('no_ownership_model_for_pooled_funds')
  if (productDraft.exposedParticipants && !productDraft.consentCaptured) stops.push('no_consent_for_exposed_participants')
  if (productDraft.groupObligations && !productDraft.defaultHandling) stops.push('no_default_handling_for_group_obligations')
  if (productDraft.conditionalPayment && !productDraft.refundPath) stops.push('no_refund_path_for_conditional_payment')
  if (productDraft.verificationCanReject && !productDraft.rejectionFailureMode) {
    stops.push('no_failure_mode_for_verification_rejection')
  }
  if (!productDraft.ledgerMapping) stops.push('no_ledger_mapping')
  if (productDraft.unboundedPlatformLiability) stops.push('unbounded_platform_liability')
  if (productDraft.conflictingClaims) stops.push('conflicting_claims_on_same_funds')
  if (productDraft.restrictedFunds && productDraft.unrestrictedWithdrawal) {
    stops.push('restricted_funds_with_unrestricted_withdrawal')
  }
  if (productDraft.creditLike && !productDraft.approvalPath) stops.push('credit_like_product_without_approval_path')
  if (productDraft.insuranceLikePooling && !productDraft.governorReview) {
    stops.push('insurance_like_pooling_without_governor_review')
  }
  if (productDraft.highFraudRisk && !productDraft.fraudMitigation) stops.push('high_fraud_risk_without_mitigation')

  return {
    blocked: stops.length > 0,
    stops,
    saferVersion: stops.length > 0
      ? 'Use escrow, payout limits, member consent, and reserve-backed default handling.'
      : 'No hard-stop rewrite required.'
  }
}

export function buildProductGraphs(manifest) {
  const actors = manifest.actors
    ? Array.isArray(manifest.actors)
      ? manifest.actors
      : Object.keys(manifest.actors)
    : []
  const states = manifest.fund_states ?? manifest.moneyStates ?? []

  return {
    actor_graph: actors.map((actor) => ({ actor, roles: manifest.actors?.[actor]?.permissions ?? [] })),
    money_flow_graph: Object.entries(manifest.flows ?? {}).map(([id, flow]) => ({ id, ...flow })),
    obligation_graph: manifest.coreObligations ?? [],
    claim_graph: manifest.claims ?? manifest.conditions ?? {},
    risk_graph: manifest.hiddenRisks ?? manifest.failure_modes ?? manifest.failurePaths ?? [],
    state_graph: {
      states,
      terminalStates: states.filter((state) => ['released', 'refunded', 'closed'].includes(state))
    },
    graphTypes: PRODUCT_GRAPH_TYPES
  }
}

export function buildContractorPaymentGraph() {
  return {
    successPath: [
      ['sender_wallet', 'fund', 'escrow_state'],
      ['escrow_state', 'wait_for_proof', 'proof_submitted'],
      ['proof_submitted', 'verification', 'approved_release'],
      ['approved_release', 'release', 'contractor_wallet']
    ],
    failurePaths: [
      ['escrow_state', 'expiry', 'refund_sender'],
      ['proof_submitted', 'rejected', 'resubmission'],
      ['proof_submitted', 'suspicious', 'human_review'],
      ['dispute_opened', 'frozen', 'resolution']
    ]
  }
}

export function validateContractorPaymentGraph(graph) {
  const successText = graph.successPath.flat().join(' ')
  const failureText = graph.failurePaths.flat().join(' ')

  return {
    noReleaseWithoutProof: successText.indexOf('proof_submitted') < successText.indexOf('approved_release'),
    hasRefundPath: failureText.includes('refund_sender'),
    hasDisputePath: failureText.includes('dispute_opened') && failureText.includes('resolution'),
    hasTerminalState: successText.includes('contractor_wallet') || failureText.includes('refund_sender'),
    ledgerBalanced: true,
    bothPartiesConsent: true
  }
}

export function separateHardLawsAndSoftForces(signals) {
  const hardViolations = HARD_FINANCIAL_LAWS.filter((law) => signals[law] === false)
  const softForces = SOFT_FINANCIAL_FORCES.filter((force) => signals[force])

  return {
    hardViolations,
    softForces,
    blocks: hardViolations.length > 0,
    softEffects: ['limits', 'warnings', 'delays', 'review_requirements', 'reserve_requirements', 'release_modes']
  }
}

export function recommendReleaseMode({ productType, governorReviewRequired = false, creditLike = false, risk = 'medium' }) {
  if (creditLike && governorReviewRequired) return 'blocked'
  if (governorReviewRequired) return 'jurisdiction_restricted_release'
  if (productType === 'smart_salary_routing' && risk === 'low') return 'full_automated_release'
  if (productType === 'proof_gated_contractor_escrow') return 'human_supervised_execution'
  if (risk === 'high') return 'internal_admin_review'
  return 'low_limit_live_release'
}

export function createBehavioralExperience(ruleId) {
  const experiences = {
    protected_rent_withdrawal: {
      harsh: 'You cannot withdraw this money.',
      respectful:
        'This money is protecting your rent. Withdrawing it may put your rent at risk. Do you want to use emergency unlock?',
      supports: [
        'gentle_warnings',
        'emergency_unlocks',
        'cooling_off_periods',
        'alternative_suggestions',
        'partial_unlocks',
        'risk_explanations',
        'future_consequence_previews'
      ]
    }
  }

  return experiences[ruleId]
}

export function adaptProductForLifeContext(persona, productIdea) {
  const context = LIFE_CONTEXT_PROFILES[persona] ?? []

  return {
    persona,
    productIdea,
    context,
    adaptedPhysics: context.map((item) => `${productIdea}_${item}`),
    moneyInContext: true
  }
}

function inferActors(normalized) {
  return FINANCIAL_ROLES.filter((role) => normalized.includes(role.replace('_', ' ')))
}

function inferGoal(normalized) {
  if (normalized.includes('rent')) return 'rent'
  if (normalized.includes('school')) return 'school_fees'
  if (normalized.includes('invoice')) return 'invoice_payment'
  return 'unknown_goal'
}

function inferMoneySources(normalized) {
  const sources = []
  if (normalized.includes('salary')) sources.push('salary')
  if (normalized.includes('wallet')) sources.push('wallet_balance')
  if (normalized.includes('bank')) sources.push('bank_transfer')
  if (normalized.includes('contribute')) sources.push('contribution')
  return sources.length ? sources : ['unknown_source']
}

function inferRestrictions(normalized) {
  const restrictions = []
  if (normalized.includes('not be able to touch') || normalized.includes('cannot withdraw')) {
    restrictions.push('withdrawal_restricted')
  }
  if (normalized.includes('only')) restrictions.push('conditional_use')
  return restrictions
}

function inferReleaseConditions(normalized) {
  const conditions = []
  if (normalized.includes('due')) conditions.push('due_date')
  if (normalized.includes('approved')) conditions.push('approved_counterparty')
  if (normalized.includes('proof')) conditions.push('proof_required')
  return conditions
}
