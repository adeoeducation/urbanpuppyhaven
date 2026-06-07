export const AURA_STACK_STAGES = Object.freeze([
  'User request',
  'Product intent interpreter',
  'AURA product specification draft',
  'Financial physics engine',
  'Primitive and capability requirements',
  'Primitive registry',
  'Product composer',
  'Kernel contract builder',
  'Simulation engine',
  'Compliance and jurisdiction governor',
  'UI and UX composer',
  'Runtime execution engine',
  'Runtime monitor and governor watchtower',
  'Outcome learning engine'
])

export const CANONICAL_FINANCIAL_OBJECTS = Object.freeze([
  'actor',
  'entity',
  'wallet',
  'account',
  'balance_segment',
  'fund_state',
  'obligation',
  'claim',
  'promise',
  'rule',
  'trigger',
  'condition',
  'flow',
  'ledger_event',
  'settlement_mode',
  'risk_exposure',
  'consent_requirement',
  'disclosure',
  'failure_mode',
  'recovery_path'
])

export const HARD_INVARIANTS = Object.freeze([
  {
    id: 'funded_release',
    text: 'Money cannot be released unless its source is funded or authorized.',
    severity: 'hard'
  },
  {
    id: 'exclusive_claims',
    text: 'One unit of money cannot satisfy two exclusive obligations.',
    severity: 'hard'
  },
  {
    id: 'locked_not_available',
    text: 'Locked funds cannot be treated as available funds.',
    severity: 'hard'
  },
  {
    id: 'balanced_ledger_entries',
    text: 'Every movement of money must create balanced ledger entries.',
    severity: 'hard'
  },
  {
    id: 'conditional_release_failure_path',
    text: 'Every conditional release must have a failure path.',
    severity: 'hard'
  },
  {
    id: 'loss_exposure_identified',
    text: 'Every actor exposed to loss must be identified.',
    severity: 'hard'
  },
  {
    id: 'loss_exposure_consented',
    text: 'Every actor exposed to loss must have consented.',
    severity: 'hard'
  },
  {
    id: 'pooled_default_handling',
    text: 'Every pooled-money product must define default handling.',
    severity: 'hard'
  },
  {
    id: 'promise_terms',
    text: 'Every promise to pay must define due date, grace period, and consequence.',
    severity: 'hard'
  },
  {
    id: 'reserve_definition',
    text: 'Every reserve must define what it protects, who owns it, and when it is released.',
    severity: 'hard'
  },
  {
    id: 'refund_path_specificity',
    text: 'Every refund path must specify destination, timing, and conditions.',
    severity: 'hard'
  },
  {
    id: 'automated_decision_explainability',
    text: 'Every automated decision must be explainable.',
    severity: 'hard'
  },
  {
    id: 'creation_to_closure_audit',
    text: 'Every product must be auditable from creation to closure.',
    severity: 'hard'
  }
])

export const contributionGroupIntake = Object.freeze({
  intent: 'Let me create a contribution group.',
  classification: [
    'informal_group_tool',
    'savings_club',
    'deposit_product',
    'credit_product',
    'investment_product'
  ],
  questions: [
    'Who contributes?',
    'How much does each member contribute?',
    'How often do contributions happen?',
    'Who receives the pot, and on what schedule?',
    'What happens if someone misses payment?',
    'Can the pot shrink?',
    'Is there a reserve?',
    'Who bears loss?',
    'Can a member leave?',
    'Can an admin replace a member?',
    'Can payout be reversed?',
    'Does every exposed actor consent?',
    'Does the language imply insurance, credit, deposit, or investment behavior?',
    'Which ledger states are needed?',
    'Which user warnings are required?',
    'Which runtime monitors must watch the product?'
  ],
  requiredPrimitives: [
    'group_wallet',
    'recurring_contribution_schedule',
    'member_consent_disclosure',
    'rotating_payout_rule',
    'missed_payment_recovery',
    'reserve_policy',
    'loss_allocation_rule',
    'admin_change_control',
    'reversal_policy',
    'runtime_monitor'
  ],
  uiWarnings: [
    'Members may lose expected payout timing if another member misses a contribution.',
    'A pooled pot needs explicit loss rules before activation.',
    'Contribution groups may trigger local legal or tax review depending on promises made.'
  ],
  runtimeMonitors: [
    'missed_contribution',
    'pot_underfunded',
    'payout_due',
    'member_exit_request',
    'admin_replacement_request',
    'consent_revoked'
  ]
})

export const rentProtectionIntent = Object.freeze({
  intent:
    'I want to save money for rent automatically, but I also want emergency access if something happens.',
  structure: {
    actors: ['user', 'rent_recipient', 'emergency_unlock_authority'],
    moneySources: ['salary', 'wallet_balance', 'bank_transfer'],
    objects: ['rent_goal_wallet', 'emergency_rule', 'scheduled_obligation', 'lock_policy', 'unlock_condition'],
    time: ['monthly_rent_due_date', 'salary_date', 'grace_period'],
    rules: [
      'allocate_rent_first',
      'lock_rent_funds',
      'allow_emergency_override_only_under_defined_conditions',
      'notify_user_before_override',
      'require_confirmation'
    ],
    risks: ['user_raids_rent_money', 'income_insufficient', 'rent_due_before_full_funding'],
    requiredPrimitives: [
      'goal_wallet',
      'salary_split',
      'obligation_scheduler',
      'restricted_unlock',
      'alert_system',
      'consent_disclosure',
      'runtime_monitor'
    ]
  }
})

export const proofGatedPaymentRequirements = Object.freeze({
  intent: 'I want to send money, but the person can only receive it after proving they delivered the item.',
  requiredAtoms: ['debit', 'hold', 'credit', 'release', 'refund', 'expire', 'notify', 'verify', 'dispute', 'audit'],
  requiredMiniPrimitives: [
    'conditional_hold',
    'proof_submission',
    'expiry_timer',
    'refund_trigger',
    'claimant_identity_check'
  ],
  requiredPrimitives: [
    'escrow_payment',
    'photo_verification',
    'gps_verification',
    'claimable_transfer',
    'dispute_workflow'
  ],
  requiredCapability: 'SafeSend with proof-gated release'
})

export const proofGatedPaymentManifest = Object.freeze({
  product_type: 'proof_gated_payment',
  actors: [
    {
      role: 'sender',
      permissions: ['fund_payment', 'set_conditions', 'cancel_before_claim']
    },
    {
      role: 'recipient',
      permissions: ['submit_proof', 'claim_after_approval']
    },
    {
      role: 'verifier',
      permissions: ['review_proof', 'approve_or_reject']
    }
  ],
  value_objects: [
    {
      asset: 'USD',
      amount: 1000,
      state: 'escrowed',
      source: 'sender_wallet'
    }
  ],
  fund_states: [
    'initiated',
    'funds_reserved',
    'escrowed',
    'proof_pending',
    'proof_submitted',
    'approved',
    'released',
    'refunded',
    'disputed',
    'expired'
  ],
  release_conditions: [
    'recipient_identity_verified',
    'gps_location_within_allowed_radius',
    'photo_proof_passes_validation',
    'sender_or_system_approval'
  ],
  failure_modes: ['proof_rejected', 'deadline_expired', 'recipient_unverified', 'sender_dispute'],
  invariants: [
    'funds_must_be_escrowed_before_claim',
    'release_requires_all_conditions_true',
    'expired_claim_refunds_sender',
    'all_state_changes_must_be_audited'
  ],
  required_primitives: [
    'escrow_hold',
    'gps_verification',
    'photo_proof',
    'claimable_transfer',
    'refund_timer',
    'dispute_resolution'
  ],
  required_disclosures: [
    'recipient_cannot_access_funds_until_conditions_are_met',
    'sender_may_receive_refund_if_proof_is_not_submitted_before_deadline'
  ]
})

export const organizerControlledGroupRiskProfile = Object.freeze({
  intent: 'Let people contribute to a group and let the organizer decide who gets paid.',
  hiddenRisks: [
    'organizer_fraud',
    'favoritism',
    'unauthorized_payout',
    'missing_consent',
    'pooled_funds_liability',
    'default_risk',
    'dispute_risk',
    'missing_audit_trail',
    'missing_payout_fairness_rule',
    'missing_replacement_process',
    'missing_refund_rule'
  ],
  requiredControls: [
    'payout_queue_rule',
    'member_consent',
    'contribution_ledger',
    'admin_limits',
    'default_policy',
    'dispute_policy',
    'reserve_policy',
    'transparent_payout_history',
    'member_exit_rule'
  ]
})

export const FORMLESS_BANKING_INTENTS = Object.freeze([
  'protect_rent',
  'pay_school_fees',
  'run_savings_circle',
  'safely_pay_contractor',
  'split_income_intelligently',
  'send_money_with_conditions',
  'avoid_spending_important_money',
  'family_goal_contributions',
  'business_milestone_contractor_payment'
])

export const rentShieldInvisibleStructure = Object.freeze({
  productName: 'AURA Rent Shield',
  userSees: [
    'Rent money is protected.',
    'You can add money anytime.',
    'AURA prioritizes rent when income arrives.',
    'Early withdrawal requires emergency confirmation.',
    'You will be warned if rent is underfunded.'
  ],
  engineBuilds: [
    'rent_obligation',
    'protected_wallet',
    'due_date_schedule',
    'restricted_withdrawal_rule',
    'emergency_override',
    'reminder_system',
    'funding_priority',
    'failure_handling',
    'consent_summary'
  ]
})

export const savingsCircleManifest = Object.freeze({
  productType: 'rotating_contribution_group',
  coreLaw: 'no_payout_is_released_unless_fundability_is_satisfied',
  actors: ['organizer', 'members', 'payout_recipient', 'reserve_holder', 'platform', 'possible_guarantor'],
  value: {
    contributionAmount: 10000,
    memberCount: 5,
    potPerRound: 50000,
    cadence: 'weekly',
    payout: 'rotating'
  },
  coreObligations: [
    'each_member_owes_100_weekly',
    'group_owes_current_payout_recipient_500_if_fundability_is_satisfied',
    'members_who_received_payout_remain_obligated_for_future_rounds'
  ],
  hiddenRisks: [
    'post_payout_default',
    'late_contribution',
    'organizer_manipulation',
    'payment_reversal',
    'pot_shrinkage',
    'reserve_depletion',
    'unfair_payout_order',
    'member_exit_mid_cycle'
  ],
  requiredPolicies: [
    'contribution_deadline',
    'grace_period',
    'default_declaration_rule',
    'reserve_policy',
    'payout_order_rule',
    'replacement_rule',
    'pause_resume_rule',
    'member_removal_rule',
    'refund_settlement_rule',
    'dispute_policy'
  ],
  requiredInvariants: [
    'payout_cannot_shrink_below_promised_amount',
    'payout_cannot_release_unless_pot_fully_funded_or_reserve_covers_gap',
    'member_who_receives_payout_remains_obligated_for_future_rounds',
    'reserve_use_must_be_logged',
    'organizer_cannot_override_payout_order_without_member_approved_rule',
    'every_member_must_consent_before_joining'
  ],
  requiredPrimitives: [
    'group_wallet',
    'recurring_contribution',
    'rotating_payout_queue',
    'member_obligation_tracker',
    'reserve_wallet',
    'default_handler',
    'trust_score_integration',
    'consent_capture',
    'contribution_reminders',
    'payout_release_control',
    'dispute_workflow'
  ],
  protection: 'reserve_and_default_policy_required',
  runtimeWatch: [
    'contribution_completion',
    'reserve_health',
    'late_payments',
    'post_payout_default_exposure'
  ]
})

export const safeSendManifest = Object.freeze({
  productType: 'safesend_gps_photo_proof',
  actors: ['sender', 'recipient', 'verifier', 'platform', 'optional_human_reviewer'],
  moneyStates: [
    'sender_available_balance',
    'funds_reserved',
    'funds_escrowed',
    'recipient_claim_pending',
    'proof_submitted',
    'proof_approved',
    'funds_released'
  ],
  conditions: [
    'recipient_identity_verified',
    'gps_location_within_accepted_radius',
    'photo_uploaded',
    'photo_metadata_checked',
    'photo_content_matches_expected_proof',
    'submission_before_deadline',
    'no_active_sender_dispute'
  ],
  failurePaths: [
    'proof_missing_refund_after_deadline',
    'proof_rejected_request_resubmission_or_refund',
    'gps_mismatch_manual_review',
    'suspicious_image_hold',
    'sender_dispute_freeze',
    'recipient_unverified_block_release'
  ],
  requiredPrimitives: [
    'escrow_hold',
    'claimable_transfer',
    'gps_verification',
    'photo_proof',
    'deadline_timer',
    'refund_trigger',
    'dispute_system',
    'proof_review',
    'audit_ledger'
  ],
  invariant: 'recipient_cannot_receive_funds_until_release_conditions_are_satisfied'
})

export const simplifiedSafeSendPhysicsManifest = Object.freeze({
  product_id: 'aura.safe_send.proof_gated_payment',
  product_type: 'conditional_payment',
  actors: {
    sender: {
      permissions: ['fund_payment', 'set_conditions', 'cancel_before_recipient_claim']
    },
    recipient: {
      permissions: ['submit_proof', 'claim_after_approval']
    },
    verifier: {
      permissions: ['review_proof', 'approve_or_reject']
    }
  },
  value_objects: {
    payment_amount: {
      asset: 'USD',
      amount: 1000,
      source: 'sender_wallet',
      initial_state: 'available',
      protected_state: 'escrowed'
    }
  },
  fund_states: [
    'draft',
    'funded',
    'escrowed',
    'proof_pending',
    'proof_submitted',
    'approved',
    'released',
    'rejected',
    'disputed',
    'refunded',
    'closed'
  ],
  flows: {
    fund: {
      from: 'sender_wallet',
      to: 'escrow_wallet',
      trigger: 'sender_confirms'
    },
    release: {
      from: 'escrow_wallet',
      to: 'recipient_wallet',
      trigger: 'proof_approved'
    },
    refund: {
      from: 'escrow_wallet',
      to: 'sender_wallet',
      trigger: 'deadline_expired_or_proof_rejected'
    }
  },
  conditions: {
    proof_approved: {
      requires: [
        'recipient_identity_verified',
        'gps_within_allowed_radius',
        'photo_submitted',
        'proof_confidence_above_threshold',
        'no_open_dispute'
      ]
    }
  },
  invariants: [
    'funds_must_be_escrowed_before_claim',
    'release_requires_all_conditions_true',
    'refund_requires_rejection_or_expiry',
    'all_state_changes_must_be_audited',
    'sender_and_recipient_must_consent_to_terms'
  ],
  failure_modes: [
    'proof_missing',
    'gps_mismatch',
    'photo_rejected',
    'recipient_unverified',
    'sender_dispute',
    'processor_failure'
  ],
  required_primitives: [
    'escrow_hold',
    'claimable_transfer',
    'gps_verification',
    'photo_proof',
    'refund_timer',
    'dispute_workflow',
    'consent_capture',
    'audit_ledger'
  ],
  runtime_monitors: [
    'proof_deadline_monitor',
    'suspicious_submission_monitor',
    'escrow_age_monitor',
    'dispute_status_monitor'
  ],
  release_mode: {
    recommended: 'supervised_auto_release'
  }
})

export const groupSavingsAPSLExample = Object.freeze({
  action: 'create_group_savings_product',
  memberContribution: 10000,
  contributionCadence: 'weekly',
  payoutAmount: 50000,
  noPotShrinkageAllowed: true
})

export const salarySplitManifest = Object.freeze({
  productType: 'smart_salary_routing',
  inboundSource: 'salary_deposit',
  categories: ['rent', 'food', 'school_fees', 'debt', 'emergency_savings', 'flexible_spending'],
  priorityWaterfall: ['rent', 'school_fees', 'debt_minimum', 'food', 'emergency_savings', 'flexible_spending'],
  rules: [
    'if_income_full_allocate_by_planned_formula',
    'if_income_short_use_priority_waterfall',
    'if_rent_underfunded_alert_user',
    'suggest_shortfall_plan',
    'delay_discretionary_spending'
  ],
  requiredPrimitives: [
    'income_detector',
    'smart_split',
    'goal_wallets',
    'obligation_scheduler',
    'priority_waterfall',
    'shortfall_detector',
    'notification_engine',
    'user_override_rule'
  ],
  invariant:
    'discretionary_allocation_cannot_occur_before_protected_obligations_reach_minimum_required_funding_unless_user_explicitly_overrides'
})

export const schoolFeeWalletManifest = Object.freeze({
  productType: 'school_fee_wallet',
  roles: {
    child: 'beneficiary',
    parent: 'controller',
    relatives: 'contributors',
    school: 'approved_recipient',
    money: 'restricted_educational_funds'
  },
  requiredRules: [
    'funds_can_enter_from_multiple_contributors',
    'funds_locked_for_education_use',
    'funds_can_only_go_to_approved_school_account',
    'refund_rules_defined',
    'parent_may_manage_but_not_misuse',
    'contributors_may_need_visibility_into_usage'
  ],
  requiredPrimitives: [
    'restricted_goal_wallet',
    'contribution_link',
    'approved_payee_registry',
    'invoice_verification',
    'guardian_consent',
    'payment_release',
    'contribution_receipt',
    'audit_trail',
    'refund_policy'
  ],
  invariant:
    'school_fee_funds_cannot_be_withdrawn_as_unrestricted_cash_unless_approved_exception_rules_are_satisfied'
})

export const AURA_CREATION_STACK = Object.freeze([
  'atoms',
  'mini_primitives',
  'primitives',
  'capabilities',
  'products'
])

export const FINANCIAL_ATOMS = Object.freeze([
  'debit',
  'credit',
  'hold',
  'release',
  'refund',
  'lock',
  'unlock',
  'split',
  'route',
  'notify',
  'verify',
  'authorize',
  'consent',
  'expire',
  'escalate',
  'audit'
])

export const FINANCIAL_MINI_PRIMITIVES = Object.freeze([
  'conditional_hold',
  'expiry_timer',
  'contribution_reminder',
  'proof_submission',
  'balance_reservation',
  'payee_restriction',
  'priority_allocation',
  'partial_payment',
  'grace_period',
  'auto_refund'
])

export const FINANCIAL_PRIMITIVES = Object.freeze([
  'escrow',
  'goal_wallet',
  'group_wallet',
  'recurring_contribution',
  'claimable_transfer',
  'smart_split',
  'installment_plan',
  'payout_queue',
  'reserve_pool',
  'obligation_tracker',
  'dispute_workflow'
])

export const FINANCIAL_CAPABILITIES = Object.freeze([
  'safesend',
  'family_hub',
  'request2pay',
  'school_fee_wallet',
  'susu_circle',
  'smart_salary_split',
  'contractor_milestone_payment',
  'emergency_vault',
  'business_procurement_flow'
])

export const GROUP_SAVINGS_USER_QUESTIONS = Object.freeze([
  'How many people?',
  'How much should each person contribute?',
  'How often?',
  'Should payout order be fixed or decided by trust?',
  'What should happen if someone misses payment?',
  'Should AURA protect the pot from shrinking?'
])

export const GROUP_SAVINGS_BEHIND_THE_SCENES = Object.freeze([
  'detecting_product_type',
  'building_contribution_obligations',
  'calculating_pot_size',
  'checking_default_exposure',
  'choosing_reserve_logic',
  'defining_payout_state_machine',
  'selecting_primitives',
  'generating_consent_requirements',
  'running_simulations',
  'preparing_disclosures'
])

export const PRODUCT_PHYSICS_MANIFEST_FIELDS = Object.freeze([
  'product_identity',
  'product_type',
  'actors_and_roles',
  'ownership_model',
  'control_model',
  'value_objects',
  'money_sources',
  'fund_states',
  'ledger_mappings',
  'obligations',
  'claims',
  'conditions',
  'triggers',
  'flow_graph',
  'time_rules',
  'risk_exposures',
  'reserve_rules',
  'failure_modes',
  'recovery_paths',
  'invariants',
  'required_primitives',
  'required_disclosures',
  'required_consents',
  'simulation_scenarios',
  'runtime_monitoring_hooks',
  'release_mode_recommendation',
  'explanation_summary'
])

export function draftProductSpecification(intentText) {
  const normalized = intentText.toLowerCase()

  if (normalized.includes('contribution group') || normalized.includes('savings group')) {
    return {
      sourceIntent: intentText,
      likelyProductFamily: 'pooled_contribution_group',
      intake: contributionGroupIntake,
      canonicalObjects: [
        'actor',
        'wallet',
        'balance_segment',
        'obligation',
        'claim',
        'rule',
        'trigger',
        'ledger_event',
        'risk_exposure',
        'consent_requirement',
        'disclosure',
        'failure_mode',
        'recovery_path'
      ],
      nextStage: 'Financial physics engine'
    }
  }

  if (normalized.includes('rent') && normalized.includes('emergency')) {
    return {
      sourceIntent: intentText,
      likelyProductFamily: 'protected_goal_wallet',
      intake: rentProtectionIntent,
      canonicalObjects: [
        'actor',
        'wallet',
        'balance_segment',
        'obligation',
        'rule',
        'condition',
        'trigger',
        'risk_exposure',
        'consent_requirement',
        'disclosure',
        'failure_mode',
        'recovery_path'
      ],
      nextStage: 'Financial physics engine'
    }
  }

  return {
    sourceIntent: intentText,
    likelyProductFamily: 'unknown_financial_product',
    intake: {
      questions: [
        'Who owns the funds?',
        'Who can claim the funds?',
        'What must happen before money moves?',
        'What can fail?',
        'Who bears loss?',
        'Which disclosures and consents are required?'
      ],
      requiredPrimitives: ['intent_clarifier', 'risk_classifier', 'consent_disclosure']
    },
    canonicalObjects: CANONICAL_FINANCIAL_OBJECTS,
    nextStage: 'Financial physics engine'
  }
}

export function evaluateSpecificationCompleteness(specification) {
  const objectCoverage = specification.canonicalObjects.length / CANONICAL_FINANCIAL_OBJECTS.length
  const primitiveCount = specification.intake.requiredPrimitives?.length ?? 0
  const questionCount = specification.intake.questions?.length ?? 0

  return {
    objectCoverage,
    primitiveCount,
    questionCount,
    readyForPhysics: primitiveCount > 0 && questionCount > 0 && specification.canonicalObjects.length > 0
  }
}

export function evaluateFundability({
  requiredPayout,
  guaranteedFunding = 0,
  approvedCredit = 0,
  permittedReserveSupport = 0
}) {
  const availableFunding = guaranteedFunding + approvedCredit + permittedReserveSupport
  const shortfall = Math.max(requiredPayout - availableFunding, 0)

  return {
    requiredPayout,
    availableFunding,
    shortfall,
    fundable: requiredPayout <= availableFunding,
    formula: 'required_payout <= guaranteed_funding + approved_credit + permitted_reserve_support',
    questions: shortfall > 0
      ? [
          'Where does the missing funding come from?',
          'Is it a loan, sponsor, platform advance, reserve pool, delayed payout, discount, or merchant subsidy?'
        ]
      : []
  }
}

export function detectHiddenRisk(intentText) {
  const normalized = intentText.toLowerCase()

  if (normalized.includes('organizer') && normalized.includes('decide')) {
    return organizerControlledGroupRiskProfile
  }

  return {
    intent: intentText,
    hiddenRisks: ['unknown_loss_exposure', 'missing_failure_mode', 'missing_consent_scope'],
    requiredControls: ['risk_review', 'failure_policy', 'consent_disclosure']
  }
}

export function generatePrimitiveRequirements(intentText) {
  const normalized = intentText.toLowerCase()

  if (normalized.includes('proving') || normalized.includes('delivered')) {
    return proofGatedPaymentRequirements
  }

  if (normalized.includes('contribution group') || normalized.includes('savings group')) {
    return {
      intent: intentText,
      requiredAtoms: ['debit', 'hold', 'credit', 'notify', 'audit'],
      requiredMiniPrimitives: ['recurring_schedule', 'missed_payment_trigger', 'member_consent_capture'],
      requiredPrimitives: contributionGroupIntake.requiredPrimitives,
      requiredCapability: 'Rotating contribution group'
    }
  }

  return {
    intent: intentText,
    requiredAtoms: ['audit', 'notify'],
    requiredMiniPrimitives: ['intent_clarifier'],
    requiredPrimitives: ['risk_review'],
    requiredCapability: 'Needs clarification'
  }
}

export function buildInvisibleProduct(intentText) {
  const normalized = intentText.toLowerCase()

  if (normalized.includes('rent') && (normalized.includes('not touch') || normalized.includes('protect'))) {
    return rentShieldInvisibleStructure
  }

  return {
    productName: 'AURA Custom Structure',
    userSees: ['AURA will turn your goal into a protected financial structure.'],
    engineBuilds: ['intent_interpreter', 'physics_manifest', 'simulation_plan', 'runtime_monitor']
  }
}

export function validateAPSLWithFinancialPhysics(apslSpec, context) {
  const checks = [
    {
      id: 'member_count_satisfies_payout',
      passed: context.memberCount * apslSpec.memberContribution >= apslSpec.payoutAmount
    },
    {
      id: 'funds_settle_before_payout',
      passed: Boolean(context.fundsSettleBeforePayout)
    },
    {
      id: 'reserve_covers_shortfall',
      passed: !apslSpec.noPotShrinkageAllowed || Boolean(context.reserveCoversShortfall)
    },
    {
      id: 'member_consent_present',
      passed: Boolean(context.memberConsentPresent)
    },
    {
      id: 'payout_order_defined',
      passed: Boolean(context.payoutOrderDefined)
    },
    {
      id: 'default_rules_defined',
      passed: Boolean(context.defaultRulesDefined)
    }
  ]

  return {
    apsl: apslSpec,
    valid: checks.every((check) => check.passed),
    checks,
    relationship: {
      apsl: 'expression_of_product_intent_and_rules',
      financialPhysicsEngine: 'financial_validity_structure_and_invariant_compiler',
      kernelContractBuilder: 'executable_enforcement'
    }
  }
}
