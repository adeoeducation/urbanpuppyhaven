export const CAPABILITY_PACKAGE_FIELDS = Object.freeze([
  'intent',
  'actors',
  'moneyStates',
  'rules',
  'ledgerEffects',
  'uiSurfaces',
  'algorithms',
  'assets',
  'consentRequirements',
  'complianceTags',
  'runtimeMonitors',
  'failureModes',
  'recoveryPaths',
  'version',
  'migrationRules',
  'testCases',
  'simulationRequirements',
  'explanationLogic',
  'releaseMode',
  'healthStatus'
])

export const CAPABILITY_GENOME_CORE_SECTIONS = Object.freeze([
  'user_intent',
  'financial_rules',
  'money_movement_logic',
  'ledger_behavior',
  'state_transitions',
  'eligibility_conditions',
  'identity_requirements',
  'consent_requirements',
  'risk_controls',
  'fraud_controls',
  'ui_experience',
  'disclosures',
  'telemetry',
  'permissions',
  'version_history',
  'jurisdictional_constraints',
  'runtime_monitoring_rules',
  'recovery_paths',
  'simulation_results',
  'release_status',
  'human_review_requirements'
])

export const CAPABILITY_GENOME_ANSWERED_QUESTIONS = Object.freeze([
  'what_the_capability_does',
  'who_it_serves',
  'what_atoms_it_uses',
  'what_primitives_it_uses',
  'what_rules_govern_it',
  'how_money_moves',
  'what_state_machine_controls_it',
  'what_ui_it_needs',
  'what_disclosures_are_required',
  'what_data_it_collects',
  'what_risks_it_introduces',
  'what_fraud_patterns_may_attack_it',
  'what_jurisdictions_it_can_operate_in',
  'what_tests_it_has_passed',
  'what_version_it_belongs_to',
  'what_it_inherited_from_previous_templates',
  'what_runtime_behavior_should_be_watched'
])

export const CAPABILITY_DOCTOR_DIAGNOSTIC_TARGETS = Object.freeze([
  'missing_rules',
  'broken_state_transitions',
  'impossible_money_movement',
  'unbalanced_ledger_events',
  'unsafe_composition',
  'missing_consent',
  'dark_patterns',
  'user_harm',
  'fraud_loopholes',
  'jurisdiction_conflicts',
  'bad_ux',
  'cognitive_overload',
  'inaccessible_ui',
  'inconsistent_terminology',
  'poor_recovery_paths',
  'runtime_anomalies',
  'version_migration_risks',
  'dependency_failures',
  'incomplete_testing'
])

export const CAPABILITY_GENOME_VS_DOCTOR = Object.freeze({
  genome: {
    metaphor: 'body',
    question: 'what_exactly_is_this_capability_made_of',
    role: 'canonical_machine_readable_capability_dna'
  },
  doctor: {
    metaphor: 'medical_system',
    question: 'is_this_capability_safe_valid_useful_compliant_explainable_testable_reversible_composable_and_healthy_enough',
    role: 'diagnostic_validation_repair_and_certification_system'
  }
})

export const CAPABILITY_GENOME_SOURCE_OF_TRUTH_RULES = Object.freeze({
  user_prompt: 'seed_only',
  ui: 'expression_only',
  backend: 'execution_layer_only',
  ledger: 'financial_record_only',
  genome: 'canonical_capability_map'
})

export const CAPABILITY_GENOME_COMPILE_PIPELINE = Object.freeze([
  'capability_genome',
  'universal_capability_contract',
  'financial_kernel_contract',
  'state_machine_definition',
  'ledger_rules',
  'policy_rules',
  'experience_contract',
  'ui_directives',
  'disclosure_consent_flows',
  'runtime_telemetry_rules',
  'audit_ledger_events',
  'simulation_and_test_cases'
])

export const CAPABILITY_GENES = Object.freeze([
  'requires_gps_verification',
  'holds_funds_in_escrow',
  'supports_auto_refund',
  'allows_contributor_deposits',
  'requires_identity_verification',
  'sends_notification',
  'uses_pending_claim_settlement',
  'requires_image_evidence',
  'has_two_party_confirmation',
  'supports_dispute_window',
  'caps_transaction_amount',
  'requires_guardian_approval',
  'allows_recurring_contribution'
])

export const CAPABILITY_GENE_LOCI = Object.freeze([
  'financial_rules_locus',
  'state_machine_locus',
  'identity_locus',
  'ux_locus',
  'compliance_locus',
  'asset_locus',
  'telemetry_locus',
  'consent_locus'
])

export const PROOF_REQUIREMENT_GENE_ALLELES = Object.freeze([
  'gps_proof',
  'photo_proof',
  'video_proof',
  'qr_scan_proof',
  'counterparty_confirmation_proof',
  'receipt_upload_proof',
  'human_reviewer_proof',
  'multi_proof_combination'
])

export const CAPABILITY_GENOME_SKIPPED_PROVIDER_API_ALLELES = Object.freeze([
  'merchant_api_proof'
])

export const CAPABILITY_CHROMOSOMES = Object.freeze([
  'financial_chromosome',
  'experience_chromosome',
  'compliance_chromosome',
  'identity_chromosome',
  'risk_chromosome',
  'state_machine_chromosome',
  'asset_chromosome',
  'runtime_chromosome'
])

export const CAPABILITY_MUTATION_TYPES = Object.freeze([
  'manual_to_automatic_release',
  'add_gps_verification',
  'increase_escrow_timeout',
  'change_allowed_user_group',
  'add_dispute_window',
  'change_risk_level',
  'replace_image_proof_with_video_proof'
])

export const CAPABILITY_RECOMBINATION_EXAMPLE = Object.freeze({
  inputs: [
    'escrow_capability',
    'gps_verification_primitive',
    'photo_evidence_primitive',
    'conditional_release_state_machine',
    'dispute_resolution_pattern',
    'auto_refund_pattern'
  ],
  output: 'proof_gated_payment_capability'
})

export const CAPABILITY_PHENOTYPE_FIELDS = Object.freeze([
  'screens',
  'buttons',
  'explanations',
  'money_movement',
  'alerts',
  'progress_state',
  'proof_upload_flow',
  'refund_experience',
  'receipt',
  'final_outcome'
])

export const CAPABILITY_DOCTOR_ARCHITECTURE_CHECKS = Object.freeze([
  'intent_alignment_check',
  'genome_completeness_check',
  'composition_compatibility_check',
  'financial_physics_check',
  'state_machine_check',
  'compliance_jurisdiction_check',
  'risk_fraud_check',
  'identity_verification_check',
  'ux_experience_check',
  'consent_disclosure_check',
  'data_privacy_check',
  'simulation_check',
  'runtime_readiness_check',
  'human_review_routing'
])

export const CAPABILITY_COMPILATION_LAYER_OUTPUTS = Object.freeze([
  'financial_kernel_contract',
  'ledger_state_machine',
  'service_orchestration_contract',
  'typescript_ui_directives',
  'consent_disclosure_flow',
  'asset_vault_bindings',
  'algorithm_vault_bindings',
  'telemetry_audit_rules'
])

export const CAPABILITY_GENOME_LIFECYCLE_ARCHITECTURE = Object.freeze([
  'user_admin_agent_request',
  'product_intent_interpreter',
  'aura_product_specification_language',
  'draft_capability_genome',
  'capability_doctor',
  'certified_capability_genome',
  'compilation_layer',
  'runtime_capability',
  'runtime_doctor_monitoring',
  'patch_quarantine_evolve'
])

export const CAPABILITY_SUBGENOMES = Object.freeze([
  'identity_genome',
  'intent_genome',
  'user_persona_genome',
  'capability_type_genome',
  'composition_genome',
  'financial_physics_genome',
  'state_machine_genome',
  'rule_policy_genome',
  'identity_entity_genome',
  'verification_genome',
  'compliance_jurisdiction_genome',
  'risk_fraud_genome',
  'experience_genome',
  'disclosure_consent_genome',
  'data_privacy_genome',
  'asset_genome',
  'algorithm_intelligence_genome',
  'integration_genome',
  'observability_genome',
  'simulation_testing_genome',
  'lifecycle_versioning_genome',
  'governance_genome',
  'outcome_learning_genome'
])

export const CAPABILITY_TYPE_CATEGORIES = Object.freeze([
  'savings_reminder',
  'salary_split',
  'school_fee_wallet',
  'contractor_escrow',
  'susu_circle',
  'liquidity_advance',
  'reserve_backed_group_payout',
  'child_controlled_spending_wallet',
  'business_procurement_flow',
  'cross_border_family_support'
])

export const SAFESEND_PROOF_GATED_CAPABILITY = Object.freeze({
  id: 'safesend_proof_gated_release',
  type: 'contractor_escrow',
  intent: 'pay_someone_safely_after_proof',
  components: [
    'escrow_hold',
    'claimable_transfer',
    'recipient_identity_check',
    'photo_proof',
    'gps_proof',
    'release_condition',
    'refund_timer',
    'dispute_workflow',
    'consent_capture',
    'audit_ledger',
    'runtime_monitor',
    'protected_money_ui',
    'explanation_module',
    'compliance_tagging'
  ],
  actors: ['payer', 'recipient', 'verifier', 'system'],
  moneyStates: ['available_funds', 'escrowed_funds', 'proof_pending', 'released_funds', 'refundable_funds'],
  rules: ['release_requires_verified_proof', 'refund_after_deadline', 'freeze_on_dispute'],
  ledgerEffects: ['debit_payer_available', 'credit_escrow_liability', 'debit_escrow_liability', 'credit_recipient_available'],
  uiSurfaces: ['protected_money_status', 'proof_timeline', 'refund_deadline', 'dispute_status'],
  algorithms: ['proof_confidence_scoring', 'deadline_evaluation'],
  assets: ['proof_upload_asset', 'location_evidence_asset'],
  consentRequirements: ['payer_understands_hold', 'recipient_understands_conditional_release'],
  complianceTags: ['conditional_payment', 'evidence_review'],
  runtimeMonitors: ['escrow_age_monitor', 'proof_deadline_monitor', 'dispute_status_monitor'],
  failureModes: ['proof_missing', 'gps_mismatch', 'dispute_opened', 'recipient_unverified'],
  recoveryPaths: ['manual_review', 'refund', 'resubmission', 'freeze'],
  version: '1.0.0',
  migrationRules: ['reconsent_if_release_conditions_change'],
  testCases: ['recipient_claim_before_proof', 'proof_deadline_expired', 'gps_mismatch', 'dispute_opened_before_release'],
  simulationRequirements: ['proof_fraud', 'deadline_expiry', 'payment_reversal'],
  explanationLogic: ['explain_hold', 'explain_release_condition', 'explain_refund_path'],
  releaseMode: 'supervised',
  healthStatus: 'healthy'
})

export const SAFESEND_CAPABILITY_GENOME = Object.freeze({
  genome_id: 'genome.aura.safesend.proof_gated_release.v1',
  capability_id: 'safesend_proof_gated_release',
  type: 'contractor_escrow',
  user_intent: 'pay_someone_safely_after_proof',
  financial_rules: ['release_requires_verified_proof', 'refund_after_deadline', 'freeze_on_dispute'],
  money_movement_logic: ['fund_escrow', 'hold_until_condition', 'release_or_refund'],
  ledger_behavior: ['debit_payer_available', 'credit_escrow_liability', 'debit_escrow_liability', 'credit_recipient_available'],
  state_transitions: ['available_to_escrowed', 'proof_pending_to_released', 'proof_pending_to_refundable', 'disputed_to_frozen'],
  eligibility_conditions: ['sender_has_available_funds', 'recipient_identity_can_be_verified'],
  identity_requirements: ['payer_identity', 'recipient_identity', 'optional_verifier_identity'],
  consent_requirements: ['payer_understands_hold', 'recipient_understands_conditional_release'],
  risk_controls: ['supervised_release_mode', 'manual_review_on_suspicion', 'amount_limit'],
  fraud_controls: ['photo_proof', 'gps_proof', 'proof_confidence_scoring'],
  ui_experience: ['protected_money_status', 'proof_timeline', 'refund_deadline', 'dispute_status'],
  disclosures: ['escrow_hold_terms', 'proof_release_terms', 'refund_terms'],
  telemetry: ['escrow_age', 'proof_status', 'dispute_status', 'release_attempts'],
  permissions: ['payer_can_fund', 'recipient_can_submit_proof', 'system_can_release_after_guards'],
  version_history: ['1.0.0'],
  jurisdictional_constraints: ['escrow_like_review_required'],
  runtime_monitoring_rules: ['escrow_age_monitor', 'proof_deadline_monitor', 'dispute_status_monitor'],
  recovery_paths: ['manual_review', 'refund', 'resubmission', 'freeze'],
  simulation_results: ['proof_fraud_passed', 'deadline_expiry_passed', 'payment_reversal_passed'],
  release_status: 'supervised',
  human_review_requirements: ['high_amount', 'suspicious_proof', 'identity_mismatch']
})

export const SAFESEND_GENOME_TRAITS = Object.freeze({
  genes: [
    { gene: 'holds_funds_in_escrow', locus: 'financial_rules_locus', allele: 'escrow_hold' },
    { gene: 'requires_gps_verification', locus: 'identity_locus', allele: 'gps_proof' },
    { gene: 'requires_image_evidence', locus: 'asset_locus', allele: 'photo_proof' },
    { gene: 'supports_auto_refund', locus: 'state_machine_locus', allele: 'deadline_refund' },
    { gene: 'supports_dispute_window', locus: 'state_machine_locus', allele: 'pre_release_dispute_window' }
  ],
  chromosomes: {
    financial_chromosome: ['holds_funds_in_escrow', 'supports_auto_refund'],
    experience_chromosome: ['requires_image_evidence', 'sends_notification'],
    identity_chromosome: ['requires_gps_verification', 'requires_identity_verification'],
    risk_chromosome: ['supports_dispute_window', 'caps_transaction_amount'],
    runtime_chromosome: ['escrow_age_monitor', 'proof_deadline_monitor']
  }
})

export const IDENTITY_GENOME_FIELDS = Object.freeze([
  'capability_id',
  'canonical_name',
  'display_name',
  'category',
  'domain',
  'capability_family',
  'version',
  'creator_type',
  'creation_source',
  'owner',
  'status',
  'release_mode',
  'lineage'
])

export const PROOF_GATED_PAYMENT_IDENTITY_GENOME = Object.freeze({
  capability_id: 'cap_gps_proof_payment_001',
  canonical_name: 'proof_gated_payment',
  display_name: 'Release Money After Proof',
  category: 'conditional_payment',
  domain: 'consumer_finance',
  capability_family: 'escrow_and_verification',
  version: '1.0.0',
  creator_type: 'aura_generated',
  creation_source: 'natural_language_request',
  owner: 'AURA',
  status: 'draft_under_diagnosis',
  release_mode: 'supervised_runtime',
  lineage: {
    parent_templates: ['escrow_payment_template', 'conditional_release_template', 'gps_verification_template'],
    inherited_patterns: ['auto_refund_pattern', 'dispute_window_pattern', 'evidence_capture_pattern']
  }
})

export const IDENTITY_GENOME_STATUS_VALUES = Object.freeze([
  'draft',
  'draft_under_diagnosis',
  'certified',
  'live',
  'deprecated',
  'quarantined',
  'retired'
])

export const INTENT_GENOME_FIELDS = Object.freeze([
  'original_user_request',
  'interpreted_intent',
  'primary_goal',
  'secondary_goal',
  'financial_outcome',
  'user_problem',
  'unacceptable_outcomes'
])

export const PROOF_GATED_PAYMENT_INTENT_GENOME = Object.freeze({
  original_user_request: 'I want to send money, but the recipient should only get it after they prove they delivered the cement to the construction site.',
  interpreted_intent: 'conditional_release_after_delivery_proof',
  primary_goal: 'protect_sender_against_non_delivery',
  secondary_goal: 'give_recipient_clear_path_to_claim_funds',
  financial_outcome: 'release_or_refund_locked_payment',
  user_problem: [
    'sender_does_not_fully_trust_recipient',
    'sender_needs_proof_of_work_or_delivery',
    'money_should_not_be_freely_accessible_immediately'
  ],
  unacceptable_outcomes: [
    'recipient_receives_money_without_proof',
    'sender_can_unfairly_block_payment_after_valid_proof',
    'funds_disappear_or_become_stuck',
    'evidence_collected_without_consent',
    'gps_photo_data_retained_forever_without_policy'
  ]
})

export const PERSONA_GENOME_PERSONAS = Object.freeze([
  'child',
  'teenager',
  'adult',
  'elderly',
  'parent',
  'trader',
  'teacher',
  'banker',
  'student',
  'market_woman',
  'contractor',
  'small_business_owner',
  'immigrant',
  'financially_vulnerable_user',
  'high_net_worth_user',
  'merchant',
  'school',
  'caregiver_agency',
  'government_worker',
  'freelancer',
  'religious_institution',
  'investment_club',
  'susu_group',
  'family_hub_member'
])

export const PERSONA_GENOME_FIELDS = Object.freeze([
  'primary_personas',
  'secondary_personas',
  'financial_literacy_level_required',
  'vulnerability_flags',
  'experience_adaptation',
  'accessibility_needs'
])

export const PROOF_GATED_PAYMENT_PERSONA_GENOME = Object.freeze({
  primary_personas: ['sender_adult', 'recipient_contractor'],
  secondary_personas: ['human_reviewer', 'dispute_resolver'],
  financial_literacy_level_required: 'low_to_medium',
  vulnerability_flags: ['possible_trust_gap', 'possible_power_imbalance', 'possible_informal_agreement'],
  experience_adaptation: {
    language_style: 'plain',
    explanation_depth: 'guided',
    friction_level: 'moderate',
    require_confirmation_before_locking_funds: true
  },
  accessibility_needs: {
    screen_reader_support: 'required',
    low_literacy_mode: 'supported',
    multilingual_copy: 'supported'
  }
})

export const CAPABILITY_TYPE_GENOME_TYPES = Object.freeze([
  'payment_capability',
  'saving_capability',
  'escrow_capability',
  'credit_capability',
  'insurance_like_capability',
  'investment_like_capability',
  'donation_capability',
  'group_finance_capability',
  'merchant_capability',
  'family_finance_capability',
  'identity_capability',
  'verification_capability',
  'budgeting_capability',
  'obligation_capability',
  'reward_capability',
  'marketplace_capability',
  'procurement_capability',
  'subscription_capability',
  'loan_repayment_capability',
  'proof_gated_capability'
])

export const CAPABILITY_TYPE_GENOME_FIELDS = Object.freeze([
  'primary_type',
  'secondary_types',
  'type_constraints',
  'forbidden_traits'
])

export const PROOF_GATED_PAYMENT_TYPE_GENOME = Object.freeze({
  primary_type: 'proof_gated_payment',
  secondary_types: ['escrow', 'verification', 'conditional_release'],
  type_constraints: {
    requires_ledger_locking: true,
    requires_release_condition: true,
    requires_refund_path: true,
    requires_dispute_path: true,
    requires_evidence_policy: true,
    requires_consent: true
  },
  forbidden_traits: [
    'irreversible_release_without_proof',
    'indefinite_fund_hold',
    'hidden_fee',
    'evidence_capture_without_notice'
  ]
})

export const COMPOSITION_GENOME_FIELDS = Object.freeze([
  'atoms',
  'micro_primitives',
  'primitives',
  'patterns',
  'composed_capability'
])

export const PROOF_GATED_PAYMENT_COMPOSITION_GENOME = Object.freeze({
  atoms: [
    'money_lock_atom',
    'balance_reservation_atom',
    'gps_capture_atom',
    'image_upload_atom',
    'timer_atom',
    'notification_atom',
    'consent_capture_atom',
    'audit_event_atom'
  ],
  micro_primitives: [
    'escrow_hold_micro_primitive',
    'gps_radius_check_micro_primitive',
    'image_metadata_check_micro_primitive',
    'proof_submission_micro_primitive',
    'release_guard_micro_primitive'
  ],
  primitives: [
    'conditional_payment_primitive',
    'proof_verification_primitive',
    'dispute_resolution_primitive',
    'auto_refund_primitive'
  ],
  patterns: ['pending_claim_pattern', 'evidence_based_release_pattern', 'timeout_refund_pattern'],
  composed_capability: { name: 'proof_gated_payment' }
})

export const FINANCIAL_PHYSICS_GENOME_FIELDS = Object.freeze([
  'money_behavior',
  'accounts',
  'funds_flow',
  'invariants',
  'fees',
  'limits'
])

export const FINANCIAL_PHYSICS_HARD_GATES = Object.freeze([
  'debits_and_credits_must_balance',
  'money_cannot_disappear',
  'money_cannot_be_double_spent',
  'funds_cannot_be_stuck_forever',
  'release_requires_authorization',
  'refunds_must_be_defined',
  'state_machine_and_ledger_must_agree',
  'fees_must_be_disclosed',
  'charges_require_consent',
  'locked_funds_cannot_show_as_spendable',
  'terminal_state_required'
])

export const PROOF_GATED_PAYMENT_FINANCIAL_PHYSICS_GENOME = Object.freeze({
  money_behavior: 'conditional_lock_and_release',
  accounts: {
    sender_wallet: 'user_balance_account',
    escrow_account: 'platform_controlled_liability_account',
    recipient_wallet: 'user_balance_account',
    fee_account: 'platform_revenue_account'
  },
  funds_flow: {
    initial_action: {
      debit: 'sender_wallet',
      credit: 'escrow_account',
      amount: 'transfer_amount',
      state: 'funds_locked'
    },
    successful_proof: {
      debit: 'escrow_account',
      credit: 'recipient_wallet',
      amount: 'transfer_amount_minus_fee',
      state: 'released'
    },
    refund: {
      debit: 'escrow_account',
      credit: 'sender_wallet',
      amount: 'remaining_locked_amount',
      state: 'refunded'
    },
    split_settlement: {
      debit: 'escrow_account',
      credit: 'recipient_wallet_and_sender_wallet',
      amount: 'dispute_resolution_amounts',
      state: 'split_settlement'
    }
  },
  invariants: [
    'total_debits_equal_total_credits',
    'locked_funds_cannot_be_spent',
    'recipient_cannot_access_before_release',
    'sender_cannot_double_spend_locked_amount',
    'funds_must_not_remain_indefinitely_locked',
    'every_terminal_state_has_a_ledger_finalization_event'
  ],
  fees: {
    fee_model: 'optional_platform_fee',
    fee_timing: 'on_successful_release',
    fee_disclosure_required: true
  },
  limits: {
    max_transaction_amount: 'jurisdiction_policy_defined',
    max_lock_duration_days: 'policy_defined',
    min_balance_required: 'transfer_amount_plus_fee'
  }
})

export const STATE_MACHINE_GENOME_FIELDS = Object.freeze([
  'states',
  'initial_state',
  'terminal_states',
  'transitions'
])

export const STATE_MACHINE_DOCTOR_CHECKS = Object.freeze([
  'unreachable_states',
  'dead_end_states',
  'funds_locked_forever',
  'release_without_proof',
  'multiple_terminal_outcomes',
  'cancel_after_release',
  'unauthorized_transitions',
  'ledger_state_mismatch',
  'duplicate_transitions',
  'race_conditions',
  'event_ownership',
  'concurrency_controls',
  'recovery_transitions',
  'timer_transitions',
  'dispute_transitions',
  'reversal_policy'
])

export const PROOF_GATED_PAYMENT_STATE_MACHINE_GENOME = Object.freeze({
  states: [
    'draft',
    'awaiting_sender_confirmation',
    'funds_locked',
    'awaiting_recipient_proof',
    'proof_submitted',
    'proof_under_review',
    'proof_accepted',
    'proof_rejected',
    'awaiting_corrected_proof',
    'disputed',
    'dispute_review',
    'released',
    'refunded',
    'split_settlement',
    'cancelled',
    'expired'
  ],
  initial_state: 'draft',
  terminal_states: ['released', 'refunded', 'cancelled', 'expired', 'split_settlement'],
  transitions: [
    { from: 'draft', to: 'awaiting_sender_confirmation', event: 'capability_configured' },
    { from: 'draft', to: 'cancelled', event: 'sender_discards_draft', guard: 'sender_authorized_draft_cancellation' },
    { from: 'awaiting_sender_confirmation', to: 'funds_locked', event: 'sender_confirms_and_funds_available', guard: 'sender_balance_sufficient' },
    { from: 'awaiting_sender_confirmation', to: 'cancelled', event: 'sender_cancels_before_funding', guard: 'sender_authorized_cancellation_before_funding' },
    { from: 'awaiting_sender_confirmation', to: 'expired', event: 'sender_confirmation_window_expired', guard: 'confirmation_deadline_expired' },
    { from: 'funds_locked', to: 'awaiting_recipient_proof', event: 'escrow_created' },
    { from: 'awaiting_recipient_proof', to: 'proof_submitted', event: 'recipient_uploads_proof' },
    { from: 'proof_submitted', to: 'proof_under_review', event: 'verification_started' },
    { from: 'proof_under_review', to: 'proof_accepted', event: 'proof_accepted', guard: 'verification_score_above_threshold' },
    { from: 'proof_accepted', to: 'released', event: 'release_executed', guard: 'release_authorized' },
    { from: 'proof_under_review', to: 'proof_rejected', event: 'proof_rejected', guard: 'proof_rejection_reason_recorded' },
    { from: 'proof_rejected', to: 'awaiting_corrected_proof', event: 'resubmission_allowed' },
    { from: 'awaiting_corrected_proof', to: 'proof_submitted', event: 'recipient_resubmits_proof' },
    { from: 'proof_under_review', to: 'disputed', event: 'sender_or_recipient_opens_dispute' },
    { from: 'disputed', to: 'dispute_review', event: 'dispute_review_started' },
    { from: 'dispute_review', to: 'released', event: 'dispute_resolved_release', guard: 'dispute_resolution_authorizes_release' },
    { from: 'dispute_review', to: 'refunded', event: 'dispute_resolved_refund', guard: 'dispute_resolution_authorizes_refund' },
    { from: 'dispute_review', to: 'split_settlement', event: 'dispute_resolved_split', guard: 'dispute_resolution_authorizes_split' },
    { from: 'awaiting_recipient_proof', to: 'refunded', event: 'timeout_reached', guard: 'deadline_expired' },
    { from: 'funds_locked', to: 'refunded', event: 'sender_cancels_before_proof_window', guard: 'refund_authorized_before_proof_started' }
  ],
  reversal_policy: {
    before_release: 'authorized_refund_transition',
    after_release: 'separate_ledger_adjustment_case_required'
  },
  event_ownership: {
    sender_discards_draft: 'sender',
    sender_confirms_and_funds_available: 'sender_and_financial_kernel',
    escrow_created: 'financial_kernel',
    sender_cancels_before_funding: 'sender',
    sender_confirmation_window_expired: 'system_timer',
    sender_cancels_before_proof_window: 'sender',
    proof_accepted: 'verification_engine',
    release_executed: 'financial_kernel',
    timeout_reached: 'system_timer',
    dispute_resolved_release: 'reviewer',
    dispute_resolved_refund: 'reviewer',
    dispute_resolved_split: 'reviewer'
  },
  concurrency_controls: {
    proof_accept_and_sender_cancel: 'proof_submission_locks_cancel_path',
    release_and_refund: 'terminal_transition_mutex',
    duplicate_event_handling: 'idempotency_key_required'
  }
})

export const RULE_POLICY_GENOME_FIELDS = Object.freeze([
  'eligibility_rules',
  'release_rules',
  'refund_rules',
  'dispute_rules',
  'operational_rules',
  'timers',
  'conflict_resolutions'
])

export const RULE_POLICY_DOCTOR_CHECKS = Object.freeze([
  'rule_conflicts',
  'timer_conflicts',
  'release_without_required_proofs',
  'refund_path_defined',
  'dispute_path_defined',
  'audit_trail_preserved',
  'fraud_lock_policy_defined'
])

export const PROOF_GATED_PAYMENT_RULE_POLICY_GENOME = Object.freeze({
  eligibility_rules: [
    'sender_must_have_verified_wallet',
    'recipient_must_have_claimable_identity',
    'transaction_must_be_within_limit',
    'jurisdiction_must_allow_conditional_payment'
  ],
  release_rules: [
    'funds_release_only_after_required_proofs_pass',
    'gps_must_be_within_radius',
    'photo_must_be_uploaded_before_deadline',
    'proof_must_match_expected_delivery_description'
  ],
  refund_rules: [
    'refund_after_timeout_if_no_valid_proof',
    'refund_if_recipient_declines',
    'refund_if_compliance_block_occurs_before_release'
  ],
  dispute_rules: [
    'sender_can_dispute_after_proof_submission',
    'recipient_can_appeal_rejected_proof',
    'human_review_required_for_high_value_dispute'
  ],
  operational_rules: [
    'notify_sender_on_proof_submission',
    'notify_recipient_on_rejection',
    'preserve_audit_trail',
    'lock_capability_if_fraud_pattern_detected'
  ],
  timers: {
    auto_refund_hours: 96,
    human_review_sla_hours: 72,
    pause_refund_timer_during_active_review: true
  },
  conflict_resolutions: [
    'pause_refund_timer_during_active_review',
    'resume_refund_timer_after_review_resolution'
  ]
})

export const IDENTITY_ENTITY_GENOME_FIELDS = Object.freeze([
  'actors',
  'relationships',
  'access_control',
  'change_control',
  'entity_safety'
])

export const IDENTITY_ENTITY_DOCTOR_CHECKS = Object.freeze([
  'wrong_person_release_risk',
  'recipient_condition_mutation_after_lock',
  'sender_proof_requirement_mutation_after_work_start',
  'reviewer_privacy_overreach',
  'child_or_guardian_policy',
  'business_entity_verification',
  'claimable_identity_safety'
])

export const PROOF_GATED_PAYMENT_IDENTITY_ENTITY_GENOME = Object.freeze({
  actors: {
    sender: {
      entity_type: 'individual',
      verification_required: 'wallet_verified',
      permissions: ['create_payment', 'fund_escrow', 'review_proof', 'open_dispute']
    },
    recipient: {
      entity_type: 'individual_or_business',
      verification_required: 'claimable_identity_or_wallet_verified',
      permissions: ['view_conditions', 'submit_proof', 'receive_release', 'appeal_rejection']
    },
    reviewer: {
      entity_type: 'human_or_ai_assisted_operator',
      verification_required: 'internal_staff',
      permissions: ['inspect_evidence', 'resolve_dispute', 'approve_release', 'approve_refund']
    }
  },
  relationships: [
    'sender_funds_recipient',
    'recipient_claims_against_escrow',
    'reviewer_mediates_dispute'
  ],
  access_control: {
    sender_can_see: ['proof_status', 'submitted_evidence_summary', 'dispute_status'],
    recipient_can_see: ['release_conditions', 'proof_requirements', 'deadline', 'rejection_reason'],
    reviewer_can_see: ['evidence_payload', 'transaction_context', 'dispute_notes'],
    reviewer_cannot_see: ['unrelated_wallet_history', 'raw_biometric_secret']
  },
  change_control: {
    recipient_can_edit_conditions_after_funds_locked: false,
    sender_can_change_proof_requirements_after_recipient_started_work: false,
    release_approval_requires_reviewer_or_policy_guard: true
  },
  entity_safety: {
    child_or_guardian_rules: 'required_if_minor_detected',
    business_entity_verification: 'verified_business_profile_required_when_business_recipient',
    claimable_identity_safety: 'claim_requires_wallet_or_equivalent_verification_before_release'
  }
})

export const VERIFICATION_GENOME_PROOF_TYPES = Object.freeze([
  'gps_proof',
  'photo_proof',
  'video_proof',
  'receipt_proof',
  'invoice_proof',
  'delivery_proof',
  'work_completion_proof',
  'counterparty_confirmation',
  'location_check_in',
  'biometric_confirmation',
  'qr_scan',
  'merchant_confirmation',
  'device_metadata',
  'timestamp_validation',
  'human_review'
])

export const VERIFICATION_DOCTOR_CHECKS = Object.freeze([
  'proof_matches_intended_outcome',
  'proof_spoofing_resistance',
  'proof_invasiveness',
  'recipient_explanation',
  'evidence_retention_minimized',
  'gps_failure_fallback',
  'camera_unavailable_fallback',
  'low_ai_confidence_human_review',
  'high_value_human_review',
  'sender_abuse_resistance',
  'recipient_weak_proof_exploit_resistance'
])

export const VERIFICATION_SKIPPED_PROVIDER_API_CHANNELS = Object.freeze([
  'third_party_api_verification'
])

export const VERIFICATION_GENOME_FIELDS = Object.freeze([
  'proof_types',
  'required_proofs',
  'proof_requirements',
  'acceptance_criteria',
  'review_path',
  'privacy_controls',
  'audit_events',
  'proof_combination_rule',
  'proof_deadline_hours',
  'evidence_retention_policy',
  'fallbacks',
  'recipient_explanation',
  'abuse_controls'
])

export const PROOF_GATED_PAYMENT_VERIFICATION_GENOME = Object.freeze({
  proof_types: ['gps_proof', 'photo_proof', 'timestamp_validation', 'counterparty_confirmation', 'human_review'],
  required_proofs: [
    {
      type: 'gps_proof',
      required: true,
      expected_location: {
        latitude: 5.6037,
        longitude: -0.1870
      },
      allowed_radius_meters: 100,
      capture_method: 'mobile_device_location',
      spoofing_controls: [
        'device_integrity_check',
        'timestamp_consistency_check',
        'impossible_travel_detection'
      ]
    },
    {
      type: 'photo_proof',
      required: true,
      expected_content: [
        'cement_bags_visible',
        'delivery_site_visible',
        'approximate_quantity_matches'
      ],
      metadata_required: ['timestamp', 'device_id_hash', 'location_if_available'],
      ai_review: {
        enabled: true,
        minimum_confidence: 0.82
      },
      human_review_required_if: [
        'ai_confidence_below_threshold',
        'transaction_amount_high',
        'sender_disputes'
      ]
    }
  ],
  proof_requirements: {
    gps_proof: {
      required: true,
      provider_api: false,
      criteria: ['within_expected_radius', 'timestamp_inside_deadline']
    },
    photo_proof: {
      required: true,
      provider_api: false,
      criteria: ['image_uploaded', 'metadata_timestamp_present', 'matches_delivery_description']
    },
    timestamp_validation: {
      required: true,
      provider_api: false,
      criteria: ['submitted_before_deadline', 'clock_tamper_not_detected']
    },
    counterparty_confirmation: {
      required: false,
      provider_api: false,
      criteria: ['sender_or_recipient_confirmation_recorded']
    },
    human_review: {
      required: false,
      provider_api: false,
      criteria: ['reviewer_records_reasoned_decision']
    }
  },
  acceptance_criteria: {
    release_requires: ['all_required_proofs_pass', 'proof_matches_expected_delivery_description'],
    reject_when: ['proof_missing', 'proof_outside_deadline', 'proof_conflicts_with_required_context'],
    manual_review_when: ['proof_conflict', 'high_value_dispute', 'low_confidence_score']
  },
  review_path: {
    automated_review: 'first_pass_policy_checks',
    human_review: 'required_for_dispute_or_high_value_conflict',
    appeal_path: 'recipient_can_appeal_rejected_proof'
  },
  privacy_controls: {
    biometric_confirmation: 'disabled_until_explicit_consent_and_policy_basis',
    device_metadata: 'limited_to_fraud_and_timestamp_checks',
    data_minimization: true
  },
  audit_events: [
    'proof_submitted',
    'proof_review_started',
    'proof_accepted_or_rejected',
    'human_review_decision_recorded'
  ],
  proof_combination_rule: 'gps_and_image_required',
  proof_deadline_hours: 48,
  evidence_retention_policy: 'retain_for_dispute_window_then_minimize',
  fallbacks: {
    gps_proof_failure: 'route_to_human_review_or_counterparty_confirmation',
    camera_unavailable: 'allow_preapproved_alternative_proof',
    low_ai_confidence: 'route_to_human_review'
  },
  recipient_explanation: [
    'proof_requirements_shown_before_acceptance',
    'proof_deadline_disclosed',
    'rejection_and_appeal_path_explained'
  ],
  abuse_controls: {
    sender_abuse: ['immutable_proof_requirements_after_funding', 'defined_dispute_reasons'],
    recipient_abuse: ['proof_confidence_threshold', 'required_evidence_match', 'reuse_detection']
  }
})

export const COMPLIANCE_JURISDICTION_GENOME_FIELDS = Object.freeze([
  'jurisdictions',
  'regulatory_classification',
  'required_controls',
  'prohibited_behaviors',
  'regulatory_resemblance'
])

export const COMPLIANCE_JURISDICTION_DOCTOR_CHECKS = Object.freeze([
  'economic_substance_over_label',
  'money_movement_resemblance',
  'stored_value_resemblance',
  'escrow_like_obligation',
  'credit_like_behavior',
  'insurance_like_behavior',
  'investment_like_behavior',
  'cross_border_remittance_resemblance'
])

export const PROOF_GATED_PAYMENT_COMPLIANCE_JURISDICTION_GENOME = Object.freeze({
  jurisdictions: {
    allowed: ['Ghana', 'United States_New_Jersey'],
    blocked: ['unknown_or_unsupported']
  },
  regulatory_classification: {
    money_movement: true,
    stored_value: 'possible',
    escrow_like_behavior: true,
    credit_like_behavior: false,
    insurance_like_behavior: false,
    investment_like_behavior: false,
    remittance_like_behavior: 'possible_if_cross_border'
  },
  required_controls: [
    'kyc_threshold_check',
    'aml_screening_if_required',
    'sanctions_screening_if_required',
    'transaction_limit_policy',
    'suspicious_activity_monitoring',
    'fee_disclosure',
    'consent_capture',
    'complaint_and_dispute_process'
  ],
  prohibited_behaviors: [
    'hidden_fee',
    'unauthorized_fund_hold',
    'indefinite_escrow_without_terms',
    'cross_border_release_without_compliance_check'
  ],
  regulatory_resemblance: [
    'money_movement',
    'stored_value_possible',
    'escrow_like_obligation',
    'cross_border_remittance_possible'
  ]
})

export const RISK_FRAUD_GENOME_FIELDS = Object.freeze([
  'risk_classes',
  'risk_controls',
  'risk_score',
  'adversarial_questions'
])

export const RISK_FRAUD_DOCTOR_QUESTIONS = Object.freeze([
  'dishonest_sender_abuse',
  'dishonest_recipient_abuse',
  'fake_account_abuse',
  'bot_farm_abuse',
  'money_laundering_abuse',
  'trapped_funds_abuse',
  'fake_gps_proof',
  'old_image_upload',
  'vulnerable_user_pressure',
  'network_outage_failure',
  'ai_evidence_misclassification'
])

export const PROOF_GATED_PAYMENT_RISK_FRAUD_GENOME = Object.freeze({
  risk_classes: [
    'counterparty_fraud',
    'fake_proof_submission',
    'gps_spoofing',
    'sender_bad_faith_dispute',
    'recipient_non_delivery',
    'evidence_manipulation',
    'account_takeover',
    'social_engineering',
    'funds_stuck_risk',
    'privacy_risk',
    'money_laundering',
    'bot_farm',
    'network_outage',
    'ai_misclassification'
  ],
  risk_controls: {
    counterparty_fraud: ['identity_verification', 'dispute_review', 'evidence_match_required'],
    fake_proof_submission: ['proof_confidence_threshold', 'metadata_cross_check', 'human_review_for_uncertain_cases'],
    gps_spoofing: ['device_integrity_check', 'location_velocity_check', 'timestamp_consistency', 'metadata_cross_check'],
    fake_photo: ['image_reuse_detection', 'ai_content_check', 'metadata_check', 'human_review_for_uncertain_cases'],
    sender_abuse: ['immutable_terms_after_funding', 'defined_dispute_reasons', 'reviewer_escalation', 'recipient_appeal_path'],
    recipient_abuse: ['proof_confidence_threshold', 'required_evidence_match', 'sender_review_window', 'dispute_option'],
    account_takeover: ['step_up_verification_for_release', 'session_anomaly_detection', 'credential_change_cooldown'],
    social_engineering: ['pressure_warning_copy', 'cooldown_for_high_pressure_changes', 'support_escalation'],
    funds_stuck_risk: ['proof_deadline', 'auto_refund_after_timeout', 'manual_recovery_queue'],
    privacy_risk: ['data_minimization', 'retention_minimization', 'reviewer_access_scope'],
    money_laundering: ['transaction_limit_policy', 'suspicious_activity_monitoring', 'sanctions_screening_if_required'],
    bot_farm: ['rate_limits', 'device_velocity_checks', 'account_reputation_signals'],
    network_outage: ['idempotent_submission_retry', 'offline_capture_queue', 'deadline_grace_policy'],
    ai_misclassification: ['confidence_threshold', 'human_review_for_uncertain_cases', 'appeal_path']
  },
  risk_score: {
    inherent_risk: 'high',
    residual_risk_after_controls: 'medium',
    release_risk_class: 'supervised'
  },
  adversarial_questions: RISK_FRAUD_DOCTOR_QUESTIONS
})

export const EXPERIENCE_GENOME_FIELDS = Object.freeze([
  'flow_type',
  'user_journey',
  'copy',
  'confirmation_points',
  'progress_states',
  'empty_states',
  'failure_states',
  'friction_points',
  'cognitive_load',
  'disclosure_placement',
  'consent_flow',
  'accessibility_behavior',
  'animations',
  'icons',
  'emotional_tone',
  'trust_cues',
  'recovery_affordances',
  'required_explanations'
])

export const EXPERIENCE_DOCTOR_CHECKS = Object.freeze([
  'funds_locked_explained',
  'recipient_terms_before_work',
  'sender_term_change_limit_explained',
  'refund_logic_explained',
  'fees_visible',
  'proof_requirement_understandable',
  'step_count_reasonable',
  'pressure_language_absent',
  'animations_not_misleading',
  'disabled_states_clear',
  'error_states_recoverable',
  'accessibility_supported'
])

export const PROOF_GATED_PAYMENT_EXPERIENCE_GENOME = Object.freeze({
  flow_type: 'guided_transaction_setup',
  user_journey: {
    sender: [
      'choose_recipient',
      'enter_amount',
      'define_proof_conditions',
      'review_terms',
      'confirm_funds_lock',
      'track_proof_status',
      'approve_or_dispute_proof',
      'receive_receipt'
    ],
    recipient: [
      'receive_notification',
      'review_conditions',
      'accept_or_decline_terms',
      'submit_gps_and_photo_proof',
      'track_review_status',
      'receive_funds_or_rejection_reason'
    ]
  },
  copy: {
    visible_terms: ['money is safely held', 'proof needed', 'release money', 'refund'],
    forbidden_terms_present: [],
    pressure_language_present: false
  },
  confirmation_points: [
    'sender_confirms_funds_lock',
    'recipient_accepts_conditions',
    'recipient_confirms_proof_submission'
  ],
  progress_states: ['money_held', 'proof_needed', 'proof_under_review', 'released_or_refunded'],
  empty_states: ['no_proof_submitted_yet', 'no_disputes_open'],
  failure_states: {
    gps_unavailable: 'offer_manual_review_or_counterparty_confirmation',
    upload_failed: 'allow_retry_and_preserve_deadline_when_system_fault',
    proof_rejected: 'show_rejection_reason_and_appeal_path'
  },
  friction_points: ['review_terms_before_lock', 'summary_every_three_steps', 'explicit_proof_acceptance'],
  cognitive_load: {
    max_steps_before_summary: 3,
    plain_language_required: true,
    complex_terms_forbidden: ['conditional escrow', 'evidentiary release'],
    preferred_terms: ['money is safely held', 'proof needed', 'release money', 'refund']
  },
  disclosure_placement: {
    funds_locked: 'before_confirmation',
    fees: 'before_confirmation',
    proof_requirements: 'before_accepting_terms'
  },
  consent_flow: [
    'sender_confirms_funds_lock',
    'recipient_accepts_conditions',
    'recipient_consents_to_location_capture',
    'recipient_consents_to_evidence_review'
  ],
  accessibility_behavior: {
    keyboard_accessible: true,
    screen_reader_labels: true,
    color_not_only_signal: true,
    reduced_motion_respected: true
  },
  animations: {
    money_movement: 'state_based_not_instant_release',
    disabled_actions: 'static_with_reason'
  },
  icons: ['lock', 'clock', 'camera', 'map_pin', 'shield_check', 'receipt'],
  emotional_tone: {
    sender: 'reassurance_without_false_guarantee',
    recipient: 'fairness_and_clarity',
    dispute: 'calm_neutrality'
  },
  trust_cues: ['held_money_status_visible', 'deadline_visible', 'review_path_visible', 'audit_receipt_available'],
  recovery_affordances: ['retry_upload', 'request_manual_review', 'appeal_rejection', 'start_dispute', 'view_refund_status'],
  required_explanations: [
    'what_happens_to_the_money',
    'when_recipient_can_access_it',
    'what_proof_is_required',
    'what_happens_if_proof_fails',
    'when_refund_happens',
    'who_can_see_the_evidence'
  ]
})

export const DISCLOSURE_CONSENT_GENOME_FIELDS = Object.freeze([
  'disclosures',
  'consents',
  'consent_rules',
  'decline_paths',
  'presentation',
  'behavior_alignment'
])

export const DISCLOSURE_CONSENT_DOCTOR_CHECKS = Object.freeze([
  'consent_before_data_collection',
  'consent_specific',
  'consent_recorded',
  'decline_outcome_explained',
  'disclosures_before_irreversible_actions',
  'disclosures_readable',
  'disclosures_not_hidden',
  'disclosure_matches_financial_behavior',
  'fees_disclosed_before_confirmation'
])

export const PROOF_GATED_PAYMENT_DISCLOSURE_CONSENT_GENOME = Object.freeze({
  disclosures: [
    {
      id: 'funds_locked_disclosure',
      audience: 'sender',
      timing: 'before_confirmation',
      required: true,
      plain_language: 'Your money will be held until the recipient submits the required proof, or until the refund condition is triggered.'
    },
    {
      id: 'proof_requirement_disclosure',
      audience: 'recipient',
      timing: 'before_accepting_terms',
      required: true,
      plain_language: 'To receive the money, you must submit a photo and location proof before the deadline.'
    },
    {
      id: 'evidence_privacy_disclosure',
      audience: 'recipient',
      timing: 'before_proof_submission',
      required: true,
      plain_language: 'Your photo and location may be reviewed to confirm delivery. They will be stored only as needed for this transaction and dispute period.'
    },
    {
      id: 'fee_disclosure',
      audience: 'sender',
      timing: 'before_confirmation',
      required: true,
      plain_language: 'Any fee is shown before you confirm and lock the money.'
    }
  ],
  consents: [
    'sender_confirms_funds_lock',
    'recipient_accepts_conditions',
    'recipient_consents_to_location_capture',
    'recipient_consents_to_evidence_review'
  ],
  consent_rules: [
    'consent_must_be_explicit',
    'consent_must_be_specific',
    'consent_must_be_recorded',
    'consent_must_be_withdrawable_before_proof_submission_where_possible'
  ],
  decline_paths: {
    sender_declines_funds_lock: 'payment_not_created',
    recipient_declines_conditions: 'sender_refund_path_starts',
    recipient_declines_evidence_capture: 'proof_submission_not_started_and_alternative_path_explained'
  },
  review_screen_fields: ['amount', 'proof_required', 'deadline', 'refund_condition', 'fee', 'dispute_path'],
  presentation: {
    plain_language_required: true,
    hidden_behind_small_links: false,
    readable_body_copy: true
  },
  behavior_alignment: 'matches_conditional_lock_release_refund_and_evidence_review'
})

export const DATA_PRIVACY_GENOME_FIELDS = Object.freeze([
  'data_collected',
  'data_purpose',
  'retention',
  'access',
  'privacy_controls',
  'privacy_safe_fallback',
  'user_notice'
])

export const DATA_PRIVACY_DOCTOR_CHECKS = Object.freeze([
  'every_data_field_justified',
  'sensitive_data_minimized',
  'location_retention_limited',
  'image_data_not_overshared',
  'users_told_who_sees_data',
  'access_logging_present',
  'ai_model_data_minimized',
  'deletion_or_minimization_defined',
  'privacy_safe_fallback_defined'
])

export const PROOF_GATED_PAYMENT_DATA_PRIVACY_GENOME = Object.freeze({
  data_collected: [
    'sender_user_id',
    'recipient_user_id',
    'amount',
    'transaction_terms',
    'gps_coordinates',
    'photo_evidence',
    'timestamp',
    'device_hash',
    'verification_score',
    'dispute_notes'
  ],
  data_purpose: {
    sender_user_id: 'identify_sender_for_transaction_and_audit',
    recipient_user_id: 'identify_recipient_for_claim_and_release',
    amount: 'execute_and_audit_money_movement',
    transaction_terms: 'enforce_release_refund_and_dispute_rules',
    gps_coordinates: 'verify_delivery_location',
    photo_evidence: 'verify_delivery_or_work_completion',
    timestamp: 'validate_deadlines_and_audit_sequence',
    device_hash: 'reduce_evidence_fraud',
    verification_score: 'determine_release_or_review',
    dispute_notes: 'resolve_dispute_and_preserve_reasoning'
  },
  retention: {
    transaction_terms: 'retain_for_audit_period',
    photo_evidence: 'retain_until_dispute_window_ends_then_minimize',
    gps_coordinates: 'retain_until_dispute_window_ends_then_minimize',
    device_hash: 'retain_as_privacy_preserving_hash',
    verification_score: 'retain_for_audit_period_then_minimize',
    dispute_notes: 'retain_for_audit_period_then_minimize'
  },
  access: {
    sender: ['evidence_summary', 'transaction_status'],
    recipient: ['submitted_evidence', 'review_result'],
    internal_reviewer: ['full_evidence_if_required'],
    ai_model: ['image_content_for_verification', 'no_unnecessary_personal_data']
  },
  privacy_controls: [
    'data_minimization',
    'encryption_at_rest',
    'encryption_in_transit',
    'audit_access',
    'role_based_access_control'
  ],
  privacy_safe_fallback: {
    gps_unavailable: 'manual_review_without_persistent_location_storage',
    camera_unavailable: 'counterparty_confirmation_or_refund_path'
  },
  user_notice: 'evidence_privacy_disclosure'
})

export const ASSET_GENOME_FIELDS = Object.freeze([
  'required_assets',
  'asset_sources',
  'motion_rules',
  'state_asset_map',
  'accessibility_rules',
  'visual_safety_rules'
])

export const ASSET_DOCTOR_CHECKS = Object.freeze([
  'icon_meaning_correct',
  'animation_not_misleading',
  'culturally_appropriate_visuals',
  'color_does_not_imply_success_early',
  'asset_matches_state',
  'dark_patterns_absent',
  'assets_accessible',
  'reduced_motion_respected'
])

export const PROOF_GATED_PAYMENT_ASSET_GENOME = Object.freeze({
  required_assets: [
    'icon_locked_funds',
    'icon_gps_pin_verified',
    'icon_photo_proof',
    'animation_funds_safely_held',
    'animation_proof_under_review',
    'illustration_sender_recipient_terms',
    'status_badge_pending_proof',
    'status_badge_released',
    'status_badge_refunded'
  ],
  asset_sources: {
    icon_locked_funds: 'semantic_asset_vault',
    icon_gps_pin_verified: 'semantic_asset_vault',
    icon_photo_proof: 'semantic_asset_vault',
    animation_funds_safely_held: 'motion_meaning_system',
    animation_proof_under_review: 'motion_meaning_system',
    disclosure_illustration: 'disclosure_template_registry'
  },
  motion_rules: {
    funds_locked_animation: {
      meaning: 'money_secured_not_lost',
      forbidden_feeling: 'money_disappeared'
    },
    release_animation: {
      meaning: 'condition_successfully_completed',
      forbidden_feeling: 'gambling_win'
    }
  },
  state_asset_map: {
    funds_locked: 'icon_locked_funds',
    awaiting_recipient_proof: 'status_badge_pending_proof',
    proof_under_review: 'animation_proof_under_review',
    released: 'status_badge_released',
    refunded: 'status_badge_refunded'
  },
  accessibility_rules: {
    all_icons_have_labels: true,
    animations_have_reduced_motion_variant: true,
    non_color_status_text_present: true
  },
  visual_safety_rules: {
    culturally_reviewed: true,
    color_does_not_imply_success_before_terminal_state: true,
    dark_patterns_absent: true
  }
})

export const ALGORITHM_INTELLIGENCE_GENOME_FIELDS = Object.freeze([
  'models_used',
  'decision_authority',
  'confidence_thresholds',
  'explainability_required',
  'forbidden_ai_actions',
  'governance_controls',
  'state_transition_links',
  'deterministic_fallbacks'
])

export const ALGORITHM_INTELLIGENCE_DOCTOR_CHECKS = Object.freeze([
  'ai_authority_limited',
  'confidence_thresholds_defined',
  'human_review_for_high_risk_cases',
  'appeal_available',
  'explanations_generated',
  'model_bias_monitored',
  'model_allowed_in_jurisdiction',
  'ai_outputs_safely_linked_to_state_transitions',
  'deterministic_fallback_defined'
])

export const PROOF_GATED_PAYMENT_ALGORITHM_INTELLIGENCE_GENOME = Object.freeze({
  models_used: [
    'gps_anomaly_detector',
    'image_content_verifier',
    'fraud_risk_scorer',
    'dispute_triage_model'
  ],
  decision_authority: {
    image_content_verifier: {
      can_auto_approve: true,
      can_auto_reject: false,
      low_confidence_requires_human_review: true
    },
    fraud_risk_scorer: {
      can_block_release: true,
      can_request_additional_verification: true,
      can_permanently_confiscate_funds: false
    },
    dispute_triage_model: {
      can_prioritize_review_queue: true,
      can_resolve_dispute_without_reviewer: false
    }
  },
  confidence_thresholds: {
    image_auto_accept: 0.82,
    human_review_below: 0.82,
    fraud_review_threshold: 0.70
  },
  explainability_required: [
    'release_decision_reason',
    'rejection_reason',
    'additional_proof_reason'
  ],
  forbidden_ai_actions: [
    'irreversible_fund_loss_without_human_review',
    'hidden_scoring_without_explanation',
    'discriminatory_persona_targeting'
  ],
  governance_controls: [
    'human_review_for_high_risk_blocks',
    'appeal_path',
    'bias_monitoring',
    'jurisdiction_allowlist',
    'state_transition_guardrails'
  ],
  state_transition_links: {
    image_auto_accept: 'proof_under_review_to_proof_accepted_guarded',
    fraud_block: 'proof_under_review_to_disputed_or_manual_review',
    low_confidence: 'proof_under_review_to_human_review'
  },
  deterministic_fallbacks: {
    model_unavailable: 'manual_review_queue',
    model_low_confidence: 'human_review',
    jurisdiction_disallows_model: 'rules_based_review_or_manual_review'
  }
})

export const OBSERVABILITY_GENOME_FIELDS = Object.freeze([
  'telemetry_events',
  'health_metrics',
  'alerts',
  'diagnostic_playbooks'
])

export const OBSERVABILITY_DOCTOR_CHECKS = Object.freeze([
  'runtime_illness_detection',
  'proof_upload_failure_diagnosis',
  'stuck_funds_detection',
  'state_machine_audit_trigger',
  'auto_refund_patch_route',
  'runtime_quarantine_route'
])

export const PROOF_GATED_PAYMENT_OBSERVABILITY_GENOME = Object.freeze({
  telemetry_events: [
    'capability_created',
    'terms_confirmed',
    'funds_locked',
    'proof_requested',
    'proof_submitted',
    'gps_check_passed',
    'gps_check_failed',
    'image_check_passed',
    'image_check_failed',
    'human_review_triggered',
    'dispute_opened',
    'funds_released',
    'funds_refunded',
    'transaction_expired'
  ],
  health_metrics: [
    'proof_submission_success_rate',
    'dispute_rate',
    'refund_rate',
    'average_time_to_release',
    'stuck_funds_count',
    'user_confusion_signals',
    'support_ticket_rate',
    'fraud_flag_rate',
    'reversal_rate',
    'abandoned_setup_rate'
  ],
  alerts: [
    'funds_locked_beyond_policy_limit',
    'abnormal_dispute_spike',
    'high_gps_failure_rate',
    'high_photo_rejection_rate',
    'release_without_required_proof',
    'ledger_state_mismatch',
    'user_dropoff_after_disclosure'
  ],
  diagnostic_playbooks: {
    proof_upload_failure_spike: {
      symptom: 'recipient_proof_upload_failure_rate_high',
      diagnosis: ['proof_instructions_confusing', 'camera_flow_broken', 'requirements_too_strict'],
      repairs: ['rewrite_instructions', 'add_preview_examples', 'reduce_cognitive_load', 'add_offline_upload_recovery']
    },
    funds_stuck_past_deadline: {
      symptom: 'funds_locked_past_deadline',
      diagnosis: ['timer_transition_failure', 'dispute_state_not_finalizing'],
      repairs: ['trigger_state_machine_audit', 'auto_refund_patch', 'runtime_quarantine']
    }
  }
})

export const SIMULATION_TESTING_GENOME_FIELDS = Object.freeze([
  'required_test_classes',
  'scenario_tests',
  'pass_criteria',
  'generated_test_cases'
])

export const SIMULATION_TESTING_DOCTOR_CHECKS = Object.freeze([
  'schema_validation_tests',
  'composition_validation_tests',
  'financial_invariant_tests',
  'state_machine_tests',
  'abuse_case_tests',
  'jurisdiction_tests',
  'consent_and_disclosure_tests',
  'accessibility_tests',
  'runtime_failure_tests',
  'migration_tests',
  'genome_generated_tests'
])

export const PROOF_GATED_PAYMENT_GENERATED_TEST_CASES = Object.freeze([
  'valid_gps',
  'invalid_gps',
  'gps_unavailable',
  'spoofed_gps',
  'timeout_before_proof',
  'timeout_after_proof',
  'refund_after_timeout',
  'release_after_valid_proof',
  'dispute_after_valid_gps',
  'impossible_travel_pattern',
  'duplicate_release_attempt'
])

export const PROOF_GATED_PAYMENT_SIMULATION_TESTING_GENOME = Object.freeze({
  required_test_classes: [
    'schema_validation',
    'composition_validation',
    'financial_invariant_tests',
    'state_machine_tests',
    'abuse_case_tests',
    'jurisdiction_tests',
    'consent_tests',
    'disclosure_tests',
    'accessibility_tests',
    'runtime_failure_tests',
    'migration_tests'
  ],
  scenario_tests: [
    'sender_has_insufficient_balance',
    'recipient_declines_terms',
    'recipient_submits_valid_proof',
    'recipient_submits_fake_photo',
    'gps_unavailable',
    'gps_spoof_attempt',
    'sender_disputes_valid_proof',
    'recipient_misses_deadline',
    'human_review_delayed',
    'network_failure_during_submission',
    'duplicate_release_attempt',
    'refund_after_expiry',
    'compliance_hold_before_release'
  ],
  pass_criteria: {
    ledger_balance_integrity: 'must_pass',
    no_stuck_funds: 'must_pass',
    disclosure_before_lock: 'must_pass',
    consent_before_gps_capture: 'must_pass',
    accessibility_core_flow: 'must_pass'
  },
  generated_test_cases: PROOF_GATED_PAYMENT_GENERATED_TEST_CASES
})

export const LIFECYCLE_VERSIONING_GENOME_FIELDS = Object.freeze([
  'version',
  'lifecycle_status',
  'previous_versions',
  'change_log',
  'migration_rules',
  'rollback'
])

export const LIFECYCLE_VERSIONING_DOCTOR_CHECKS = Object.freeze([
  'user_obligations_changed',
  'active_transactions_affected',
  'existing_users_migrate_safely',
  'disclosures_updated',
  'old_ledger_states_compatible',
  'rollback_available',
  'users_notified',
  'no_unfair_retroactive_terms'
])

export const PROOF_GATED_PAYMENT_LIFECYCLE_VERSIONING_GENOME = Object.freeze({
  version: '1.3.0',
  lifecycle_status: 'live_supervised',
  previous_versions: ['1.0.0', '1.1.0', '1.2.0'],
  change_log: [
    {
      version: '1.3.0',
      change_type: 'risk_control_upgrade',
      description: 'Added image reuse detection to proof verification.',
      migration_required: false
    }
  ],
  migration_rules: {
    active_transactions: {
      apply_new_fraud_checks: true,
      do_not_change_original_release_terms: true,
      notify_users_if_evidence_review_changes: true
    },
    disclosure_updates: ['image_reuse_detection_notice'],
    ledger_compatibility: 'preserve_existing_state_mapping'
  },
  rollback: {
    allowed: true,
    rollback_target: '1.2.0',
    preserve_ledger_state: true,
    preserve_audit_events: true
  }
})

export const GOVERNANCE_GENOME_FIELDS = Object.freeze([
  'release_authority',
  'human_review_triggers',
  'kill_switch',
  'accountability'
])

export const GOVERNANCE_DOCTOR_CHECKS = Object.freeze([
  'risk_appropriate_release_path',
  'human_review_trigger_coverage',
  'kill_switch_enabled',
  'ledger_failure_can_pause',
  'compliance_violation_can_pause',
  'fraud_spike_can_pause',
  'stuck_funds_can_pause',
  'user_harm_can_pause',
  'owner_and_reviewer_roles_defined'
])

export const PROOF_GATED_PAYMENT_GOVERNANCE_GENOME = Object.freeze({
  release_authority: {
    low_risk_capability: 'automated_certification_allowed',
    medium_risk_capability: 'internal_review_required',
    high_risk_capability: 'compliance_and_risk_review_required',
    regulated_capability: 'legal_review_required'
  },
  human_review_triggers: [
    'new_money_movement_pattern',
    'high_value_transaction',
    'new_jurisdiction',
    'credit_like_behavior',
    'insurance_like_behavior',
    'investment_like_behavior',
    'child_or_vulnerable_user_targeting',
    'high_privacy_data_collection',
    'AI_decision_affecting_funds'
  ],
  kill_switch: {
    enabled: true,
    triggers: [
      'ledger_integrity_failure',
      'compliance_violation',
      'fraud_spike',
      'stuck_funds_threshold_exceeded',
      'user_harm_report_spike'
    ]
  },
  accountability: {
    owner_team: 'capability_governance',
    reviewer_roles: ['product_risk', 'compliance', 'financial_kernel', 'experience_safety', 'security']
  }
})

export const OUTCOME_LEARNING_GENOME_FIELDS = Object.freeze([
  'success_metrics',
  'failure_signals',
  'learning_actions',
  'responsible_evolution_rules'
])

export const OUTCOME_LEARNING_DOCTOR_CHECKS = Object.freeze([
  'success_metrics_defined',
  'failure_signals_defined',
  'learning_actions_defined',
  'runtime_observation_connected',
  'simulation_updates_connected',
  'fraud_control_updates_connected',
  'financial_obligations_not_mutated_secretly'
])

export const PROOF_GATED_PAYMENT_OUTCOME_LEARNING_GENOME = Object.freeze({
  success_metrics: [
    'transaction_completion_rate',
    'valid_proof_acceptance_rate',
    'dispute_resolution_time',
    'user_trust_score',
    'reduction_in_failed_deliveries',
    'refund_correctness',
    'support_ticket_reduction'
  ],
  failure_signals: [
    'repeated_proof_confusion',
    'high_recipient_abandonment',
    'sender_abuse_disputes',
    'false_rejection_complaints',
    'excessive_human_review_load',
    'evidence_privacy_complaints'
  ],
  learning_actions: [
    'improve_proof_instructions',
    'adjust_review_threshold',
    'recommend_human_review_for_specific_risk_patterns',
    'modify_disclosure_language',
    'add_visual_example',
    'update_fraud_controls',
    'update_simulation_scenarios'
  ],
  responsible_evolution_rules: {
    learning_actions_require_governance_review: true,
    do_not_mutate_financial_obligations_without_versioning: true,
    test_updates_before_release: true
  }
})

export const CAPABILITY_DOCTOR_FULL_JOBS = Object.freeze([
  'diagnose_before_creation',
  'diagnose_during_composition',
  'diagnose_before_release',
  'diagnose_during_runtime',
  'diagnose_during_evolution'
])

export const CAPABILITY_DOCTOR_FULL_ROLES = Object.freeze([
  'product_examiner',
  'financial_invariant_checker',
  'compliance_triage_engine',
  'ux_safety_reviewer',
  'fraud_analyst',
  'state_machine_debugger',
  'ledger_consistency_auditor',
  'disclosure_inspector',
  'simulation_generator',
  'runtime_monitor',
  'version_migration_doctor',
  'governance_router',
  'repair_planner'
])

export const CAPABILITY_DOCTOR_ARCHITECTURE_MODULES = Object.freeze([
  'genome_reader',
  'genome_completeness_examiner',
  'intent_alignment_examiner',
  'capability_type_validator',
  'composition_algebra_validator',
  'financial_physics_examiner',
  'ledger_integrity_examiner',
  'state_machine_examiner',
  'rule_conflict_examiner',
  'compliance_jurisdiction_examiner',
  'risk_and_fraud_examiner',
  'identity_and_permission_examiner',
  'verification_examiner',
  'consent_and_disclosure_examiner',
  'data_privacy_examiner',
  'experience_doctor',
  'accessibility_validator',
  'asset_and_motion_doctor',
  'algorithm_authority_examiner',
  'simulation_engine_interface',
  'runtime_telemetry_doctor',
  'version_migration_doctor',
  'human_review_router',
  'repair_planner',
  'certification_engine'
])

export const GENOME_READER_CHECKS = Object.freeze([
  'schema_valid',
  'required_sections_present',
  'references_resolvable',
  'primitive_ids_valid',
  'templates_valid',
  'versions_valid',
  'dependencies_available',
  'deprecated_components_absent',
  'unsupported_components_absent'
])

export const GENOME_READER_EXAMPLE_DIAGNOSIS = Object.freeze({
  reference: 'gps_radius_check_micro_primitive:v2.1',
  issue: 'version_not_certified_for_jurisdiction',
  severity: 'critical',
  repair: 'use_v2_0_or_certify_v2_1_before_release'
})

export const ESCROW_LIKE_CONDITIONAL_PAYMENT_REQUIRED_GENOME_SECTIONS = Object.freeze([
  'financial_physics',
  'state_machine',
  'refund_logic',
  'dispute_logic',
  'consent',
  'disclosure',
  'risk_controls',
  'telemetry',
  'terminal_states',
  'ledger_invariants'
])

export const INTENT_ALIGNMENT_EXAMINER_CHECKS = Object.freeze([
  'original_intent_preserved',
  'required_condition_present',
  'proof_rule_matches_request',
  'unacceptable_outcomes_blocked',
  'runtime_behavior_matches_intent'
])

export const INTENT_ALIGNMENT_EXAMPLE = Object.freeze({
  user_intent: 'release_funds_only_after_gps_confirmed_delivery',
  draft_behavior: 'release_after_recipient_uploads_any_image',
  diagnosis: ['intent_mismatch', 'gps_condition_absent', 'image_proof_alone_does_not_satisfy_request'],
  repair: ['add_gps_verification_primitive', 'require_gps_and_image_proof_rule']
})

export const CAPABILITY_TYPE_VALIDATOR_CHECKS = Object.freeze([
  'claimed_type_matches_economic_function',
  'money_collection_detected',
  'locked_funds_detected',
  'group_governance_detected',
  'required_ledger_controls_present',
  'required_refund_rules_present',
  'required_compliance_review_present'
])

export const CAPABILITY_TYPE_MISCLASSIFICATION_EXAMPLE = Object.freeze({
  claimed_type: 'savings_reminder',
  actual_behavior: ['collects_money', 'locks_funds', 'releases_after_group_vote'],
  actual_type: 'group_finance_with_locked_funds',
  required_controls: ['ledger_locking', 'group_governance', 'refund_rules', 'compliance_review']
})

export const COMPOSITION_ALGEBRA_COMPATIBILITY_CHECKS = Object.freeze([
  'type_compatibility',
  'state_compatibility',
  'ledger_compatibility',
  'risk_compatibility',
  'jurisdiction_compatibility',
  'ux_compatibility',
  'identity_compatibility',
  'event_compatibility',
  'recovery_compatibility',
  'data_compatibility'
])

export const COMPOSITION_ALGEBRA_INVALID_EXAMPLES = Object.freeze([
  {
    parts: ['irreversible_transfer_primitive', 'conditional_release_pattern'],
    reason: 'conditional_release_requires_funds_to_remain_locked_until_condition_met',
    repair: 'replace_irreversible_transfer_primitive_with_escrow_hold_primitive'
  },
  {
    parts: ['anonymous_recipient_primitive', 'high_value_payment_release'],
    reason: 'high_value_conditional_payment_requires_verified_or_claimable_identity',
    repair: 'add_identity_verification_primitive_or_reduce_capability_limits'
  }
])

export const RULE_CONFLICT_EXAMINER_EXAMPLES = Object.freeze([
  {
    rules: ['recipient_has_48_hours_to_submit_proof', 'gps_proof_must_be_captured_within_24_hours', 'recipient_notified_after_30_hours'],
    diagnosis: 'recipient_may_be_notified_after_gps_deadline',
    repair: 'notify_recipient_immediately_or_extend_gps_proof_window'
  },
  {
    rules: ['refund_after_72_hours', 'dispute_window_lasts_5_days'],
    diagnosis: 'refund_may_occur_before_dispute_resolution',
    repair: 'pause_refund_clock_during_dispute_or_redefine_windows'
  }
])

export const COMPLIANCE_RESEMBLANCE_QUESTIONS = Object.freeze([
  'money_transmission',
  'stored_value',
  'escrow_like',
  'credit_like',
  'insurance_like',
  'investment_like',
  'remittance_like',
  'donation_related',
  'payroll_like',
  'lending',
  'group_savings',
  'gambling_like',
  'debt_collection',
  'consumer_protection_sensitive',
  'child_directed',
  'cross_border'
])

export const RISK_FRAUD_ABUSE_SCENARIOS = Object.freeze([
  {
    scenario: 'old_photo_from_another_job',
    required_controls: ['image_reuse_detection', 'metadata_timestamp_check', 'contextual_ai_review']
  },
  {
    scenario: 'recipient_spoofs_gps',
    required_controls: ['device_integrity_check', 'impossible_travel_detection', 'network_location_consistency_check']
  },
  {
    scenario: 'sender_rejects_valid_proof',
    required_controls: ['immutable_conditions', 'recipient_appeal', 'human_review', 'dispute_audit']
  },
  {
    scenario: 'collusive_fake_transactions',
    required_controls: ['suspicious_pattern_detection', 'transaction_velocity_limits', 'relationship_graph_risk_scoring']
  }
])

export const RISK_FRAUD_SCORE_FIELDS = Object.freeze([
  'inherent_risk',
  'residual_risk',
  'control_strength',
  'abuse_surface',
  'fraud_cost',
  'user_harm_potential',
  'release_mode'
])

export const FINANCIAL_PHYSICS_EXAMINER_CHECKS = Object.freeze([
  'double_entry_validity',
  'locked_funds_behavior',
  'release_behavior',
  'refund_behavior',
  'fee_behavior',
  'balance_visibility',
  'settlement_timing',
  'liability_accounting',
  'failed_transaction_handling',
  'reversal_paths',
  'stuck_fund_prevention',
  'liquidity_exposure',
  'treasury_impact',
  'platform_obligations'
])

export const FINANCIAL_PHYSICS_EXAMINER_EXAMPLES = Object.freeze([
  {
    issue: 'sender_debit_without_escrow_liability_credit',
    severity: 'fatal',
    reason: 'violates_double_entry_ledger_invariant',
    repair: ['debit_sender_wallet', 'credit_platform_escrow_liability']
  },
  {
    issue: 'release_defined_without_refund_state',
    severity: 'fatal',
    reason: 'conditional_payment_must_define_condition_failure_path',
    repair: ['add_timeout_refund_transition', 'add_refund_ledger_posting']
  }
])

export const LEDGER_INTEGRITY_GENOME_FIELDS = Object.freeze([
  'ledger_events',
  'transition_event_map',
  'idempotency_strategy',
  'audit_strategy',
  'balance_visibility'
])

export const LEDGER_INTEGRITY_DOCTOR_CHECKS = Object.freeze([
  'money_transition_has_ledger_event',
  'ledger_event_balanced',
  'ledger_event_idempotent',
  'ledger_event_replay_safe',
  'ledger_event_not_duplicate_payable',
  'reversal_defined_where_possible',
  'audit_event_present',
  'user_balance_reflects_state'
])

export const PROOF_GATED_PAYMENT_LEDGER_INTEGRITY_GENOME = Object.freeze({
  ledger_events: {
    funds_locked: {
      debit: 'sender_wallet',
      credit: 'platform_escrow_liability',
      amount: 'transfer_amount',
      idempotency_key: 'capability_id_transaction_id_lock_transition_id',
      replay_safe: true,
      audit_event: 'funds_locked_ledger_posted',
      balance_visibility: 'sender_available_balance_reduced_locked_balance_visible'
    },
    released: {
      debit: 'platform_escrow_liability',
      credit: 'recipient_wallet',
      amount: 'transfer_amount_minus_fee',
      idempotency_key: 'capability_id_transaction_id_release_transition_id',
      replay_safe: true,
      audit_event: 'funds_released_ledger_posted',
      balance_visibility: 'recipient_available_balance_increased'
    },
    refunded: {
      debit: 'platform_escrow_liability',
      credit: 'sender_wallet',
      amount: 'remaining_locked_amount',
      idempotency_key: 'capability_id_transaction_id_refund_transition_id',
      replay_safe: true,
      audit_event: 'funds_refunded_ledger_posted',
      balance_visibility: 'sender_available_balance_restored'
    },
    split_settlement: {
      debit: 'platform_escrow_liability',
      credit: 'sender_wallet_and_recipient_wallet',
      amount: 'dispute_resolution_amounts',
      idempotency_key: 'capability_id_transaction_id_split_transition_id',
      replay_safe: true,
      audit_event: 'split_settlement_ledger_posted',
      balance_visibility: 'both_parties_see_final_settlement'
    }
  },
  transition_event_map: {
    funds_locked: 'funds_locked',
    released: 'released',
    refunded: 'refunded',
    split_settlement: 'split_settlement',
    proof_accepted_to_released: 'released',
    dispute_review_to_released: 'released',
    dispute_review_to_refunded: 'refunded',
    dispute_review_to_split_settlement: 'split_settlement',
    timeout_to_refunded: 'refunded'
  },
  idempotency_strategy: 'capability_id_transaction_id_transition_id',
  audit_strategy: 'every_money_transition_emits_audit_event',
  balance_visibility: 'available_locked_released_refunded_states_are_distinct'
})

export const IDENTITY_PERMISSION_EXAMINER_CHECKS = Object.freeze([
  'who_can_create',
  'who_can_fund',
  'who_can_accept',
  'who_can_edit',
  'who_can_submit_proof',
  'who_can_approve',
  'who_can_dispute',
  'who_can_refund',
  'who_can_release',
  'who_can_view_evidence',
  'who_can_override_state',
  'who_can_migrate_version'
])

export const PROOF_GATED_PAYMENT_IDENTITY_PERMISSION_MATRIX = Object.freeze({
  sender: ['create', 'fund', 'view_evidence_summary', 'dispute'],
  recipient: ['accept', 'submit_proof', 'view_submitted_evidence', 'appeal'],
  reviewer: ['approve', 'refund', 'release_after_review', 'view_full_evidence_if_required'],
  financial_kernel: ['release', 'refund', 'post_ledger_event'],
  governance_admin: ['override_state', 'migrate_version'],
  change_rules: {
    freeze_conditions_after_recipient_acceptance_and_funds_lock: true,
    sender_can_edit_proof_requirements_after_acceptance: false
  }
})

export const VERIFICATION_EXAMINER_CHECKS = Object.freeze([
  'proof_requirements',
  'proof_thresholds',
  'proof_source',
  'evidence_integrity',
  'spoofing_risk',
  'fallback_paths',
  'human_review_rules',
  'appeal_rights',
  'proof_expiry',
  'evidence_retention',
  'proof_to_outcome_alignment'
])

export const CONSENT_DISCLOSURE_EXAMINER_CHECKS = Object.freeze([
  'consent_before_money_lock',
  'consent_before_gps_capture',
  'consent_before_photo_upload',
  'fee_disclosure',
  'refund_disclosure',
  'dispute_disclosure',
  'evidence_visibility',
  'data_retention_notice',
  'plain_language',
  'timing_of_disclosure',
  'revocability_where_possible'
])

export const EXPERIENCE_DOCTOR_EXAMINER_CHECKS = Object.freeze([
  'cognitive_load',
  'emotional_clarity',
  'step_order',
  'copy_quality',
  'confusing_language',
  'excessive_friction',
  'insufficient_friction',
  'dark_patterns',
  'accessibility',
  'error_recovery',
  'empty_states',
  'progress_clarity',
  'status_truthfulness',
  'visual_meaning',
  'persona_appropriateness'
])

export const ACCESSIBILITY_VALIDATOR_CHECKS = Object.freeze([
  'screen_reader_labels',
  'contrast',
  'focus_order',
  'keyboard_navigation',
  'reduced_motion_support',
  'plain_language_mode',
  'error_message_clarity',
  'non_visual_proof_instructions',
  'alternative_flows_where_possible',
  'touch_target_sizes',
  'low_bandwidth_behavior',
  'offline_or_poor_connectivity_recovery'
])

export const PROOF_GATED_PAYMENT_ACCESSIBILITY_CONTRACT = Object.freeze({
  screen_reader_labels: true,
  contrast: 'wcag_aa',
  focus_order: 'matches_transaction_flow',
  keyboard_navigation: true,
  reduced_motion_support: true,
  plain_language_mode: true,
  error_message_clarity: true,
  non_visual_proof_instructions: true,
  alternative_flows_where_possible: ['manual_review_for_camera_unavailable', 'counterparty_confirmation_fallback'],
  touch_target_sizes: 'minimum_44px',
  low_bandwidth_behavior: 'compressed_upload_and_retry',
  offline_or_poor_connectivity_recovery: 'offline_upload_queue'
})

export const ASSET_MOTION_DOCTOR_EXAMPLE = Object.freeze({
  state: 'funds_locked_pending_proof',
  bad_asset: 'celebration_animation',
  diagnosis: 'misleading_emotional_signal_transaction_may_seem_completed',
  repair: 'use_secure_hold_animation_not_celebration'
})

export const ALGORITHM_AUTHORITY_EXAMINER_EXAMPLE = Object.freeze({
  issue: 'ai_image_verifier_can_permanently_reject_without_appeal',
  severity: 'fatal_or_critical',
  repair: ['approve_low_risk_valid_proof', 'request_more_proof', 'route_to_human_review', 'never_permanently_deny_high_impact_claim_alone']
})

export const RUNTIME_TELEMETRY_DOCTOR_SIGNALS = Object.freeze([
  'stuck_funds',
  'excessive_disputes',
  'abnormal_fraud_attempts',
  'failed_proof_uploads',
  'user_confusion',
  'high_abandonment',
  'support_spikes',
  'state_machine_anomalies',
  'ledger_mismatches',
  'failed_notifications',
  'slow_reviews',
  'repeated_ai_misclassification',
  'jurisdiction_policy_breaches'
])

export const HUMAN_REVIEW_ROUTER_TRIGGERS = Object.freeze([
  'high_financial_value',
  'legal_classification_uncertain',
  'new_jurisdiction',
  'vulnerable_users_involved',
  'child_users_involved',
  'ai_confidence_low',
  'ambiguous_evidence',
  'severe_dispute',
  'credit_insurance_investment_or_escrow_resemblance',
  'long_money_hold_period',
  'privacy_sensitive_data_collected',
  'new_uncertified_primitive_combination',
  'runtime_anomaly_threshold_crossed'
])

export const HUMAN_REVIEW_CONSOLES = Object.freeze([
  'product_risk_console',
  'compliance_console',
  'financial_kernel_console',
  'experience_safety_console',
  'fraud_operations_console',
  'privacy_console',
  'human_dispute_review_console'
])

export const DOCTOR_REPAIR_PLAN_EXAMPLE = Object.freeze({
  issue: 'missing_refund_path',
  severity: 'fatal',
  recommended_fix: {
    add_state: ['refunded'],
    add_transition: {
      from: 'awaiting_recipient_proof',
      to: 'refunded',
      event: 'proof_deadline_expired'
    },
    add_ledger_event: {
      debit: 'escrow_liability',
      credit: 'sender_wallet'
    },
    add_disclosure: {
      audience: 'sender',
      message: 'Money returns to you if valid proof is not submitted by the deadline.'
    },
    add_telemetry: ['refund_triggered', 'refund_completed']
  }
})

export const CAPABILITY_CERTIFICATION_FIELDS = Object.freeze([
  'capability_id',
  'genome_version',
  'diagnosis_status',
  'release_eligibility',
  'risk_class',
  'permitted_jurisdictions',
  'blocked_jurisdictions',
  'required_runtime_controls',
  'unresolved_warnings',
  'stop_ship_issues',
  'certification_expiry'
])

export const PROOF_GATED_PAYMENT_CAPABILITY_CERTIFICATION = Object.freeze({
  capability_id: 'cap_gps_proof_payment_001',
  genome_version: '1.0.0',
  diagnosis_status: 'passed_with_controls',
  release_eligibility: 'supervised_release',
  risk_class: 'medium_high',
  permitted_jurisdictions: ['Ghana'],
  blocked_jurisdictions: ['unsupported_cross_border'],
  required_runtime_controls: ['stuck_funds_monitor', 'fraud_spike_monitor', 'dispute_rate_monitor', 'human_review_for_high_value'],
  unresolved_warnings: ['gps_unavailable_fallback_requires_user_testing'],
  stop_ship_issues: [],
  certification_expiry: 'policy_defined'
})

export const DIAGNOSIS_SEVERITY_LEVELS = Object.freeze({
  P0: {
    label: 'fatal_stop_ship',
    releaseImpact: 'blocked',
    examples: ['ledger_does_not_balance', 'funds_can_disappear', 'no_refund_path', 'release_without_required_proof', 'missing_gps_consent']
  },
  P1: {
    label: 'critical',
    releaseImpact: 'blocked_or_strictly_controlled',
    examples: ['sender_can_change_conditions_after_acceptance', 'ai_rejects_without_appeal', 'missing_high_value_dispute_flow']
  },
  P2: {
    label: 'high',
    releaseImpact: 'repair_before_broad_release',
    examples: ['unclear_proof_instructions', 'review_sla_conflicts_with_refund_timer', 'asset_communicates_wrong_state']
  },
  P3: {
    label: 'medium',
    releaseImpact: 'controlled_release_with_monitoring',
    examples: ['copy_could_be_simpler', 'telemetry_abandonment_tracking_incomplete']
  },
  P4: {
    label: 'low',
    releaseImpact: 'improvement_recommended',
    examples: ['animation_can_be_improved', 'optional_helper_text_recommended']
  },
  P5: {
    label: 'advisory',
    releaseImpact: 'non_blocking',
    examples: ['educational_tooltip_recommended']
  }
})

export const GENOME_HEALTH_SCORE_WEIGHTS = Object.freeze({
  financialCorrectness: 0.2,
  stateMachineIntegrity: 0.15,
  complianceReadiness: 0.15,
  riskControlStrength: 0.15,
  experienceSafety: 0.1,
  dataPrivacyReadiness: 0.1,
  simulationCoverage: 0.1,
  observabilityReadiness: 0.05
})

export const GENOME_HEALTH_HARD_GATES = Object.freeze([
  'no_p0_issues',
  'p1_issues_resolved_or_controlled',
  'financial_invariants_pass',
  'compliance_gate_passes',
  'state_machine_gate_passes',
  'consent_gate_passes',
  'simulation_gate_passes'
])

export const DOCTOR_REPORT_FORMAT_FIELDS = Object.freeze([
  'capability_id',
  'genome_version',
  'overall_status',
  'health_score',
  'summary',
  'fatal_issues',
  'certification'
])

export const DOCTOR_REPORT_EXAMPLE = Object.freeze({
  capability_id: 'cap_gps_proof_payment_001',
  genome_version: '1.0.0',
  overall_status: 'not_release_eligible',
  health_score: 71,
  summary: {
    fatal_issues: 1,
    critical_issues: 2,
    high_issues: 4,
    medium_issues: 6,
    advisory_issues: 9
  },
  fatal_issues: [
    {
      id: 'issue_001',
      title: 'Missing refund transition',
      genome_section: 'state_machine_genome',
      severity: 'P0',
      explanation: 'Funds may remain locked indefinitely if recipient never submits proof.',
      required_fix: ['add_timeout_refund_transition', 'add_refund_ledger_posting', 'add_sender_disclosure', 'add_telemetry_event']
    }
  ],
  certification: {
    release_eligible: false,
    allowed_modes: [],
    required_next_action: 'repair_and_resimulate'
  }
})

export const DOCTOR_CONTROLLED_RELEASE_MODES = Object.freeze([
  'not_release_eligible',
  'sandbox_only',
  'human_supervised_pilot',
  'limited_release',
  'certified_general_release',
  'marketplace_eligible',
  'quarantined',
  'deprecated',
  'retired'
])

export const PROOF_GATED_PAYMENT_DOCTOR_EXAMPLE_DIAGNOSIS = Object.freeze({
  capability: 'conditional_payment_with_gps_and_photo_proof',
  money_behavior: ['sender_funds_escrow', 'recipient_receives_after_proof'],
  required_proof: ['gps', 'photo'],
  recovery: 'refund_after_deadline',
  dispute: ['sender_can_dispute_proof', 'recipient_can_appeal_rejection'],
  diagnosis: {
    intent_alignment: 'pass',
    financial_physics: 'pass_if_escrow_ledger_postings_are_present',
    state_machine: ['needs_timeout_transition', 'needs_dispute_terminal_state'],
    verification: ['needs_spoofing_controls', 'needs_gps_unavailable_fallback'],
    consent: ['recipient_location_consent_before_gps_capture'],
    privacy: ['evidence_retention_period_required'],
    experience: ['button_copy_must_say_hold_money_until_proof_not_send_now'],
    compliance: ['escrow_like_behavior_detected', 'jurisdiction_review_required', 'transaction_limits_required'],
    risk: ['gps_spoofing_risk', 'fake_image_risk', 'metadata_checks_required', 'high_value_human_review_required']
  }
})

export const PROOF_GATED_PAYMENT_DOCTOR_REPAIR_PLAN = Object.freeze([
  'gps_consent_screen',
  'evidence_retention_rule',
  'timeout_refund_transition',
  'dispute_resolution_state',
  'impossible_travel_detection',
  'image_reuse_detection',
  'high_value_human_review',
  'clear_sender_and_recipient_disclosures',
  'stuck_funds_telemetry_alert'
])

export const PROOF_GATED_PAYMENT_CERTIFIED_CAPABILITY_EXAMPLE = Object.freeze({
  release_mode: 'human_supervised_limited_release',
  allowed: ['low_to_medium_value_transactions', 'supported_jurisdictions_only'],
  blocked: ['cross_border_use_until_compliance_review', 'high_value_use_without_human_review']
})

export const SUSU_GROUP_SAVINGS_GENOME_FIELDS = Object.freeze([
  'group_members',
  'contribution_amount',
  'schedule',
  'payout_order',
  'pot_size',
  'default_rules',
  'insurance_or_deposit_rules',
  'organizer_role',
  'eligibility',
  'trust_score',
  'liquidity_rules',
  'payout_fairness',
  'dispute_handling',
  'member_replacement',
  'late_payment_rules',
  'ledger_events',
  'notifications',
  'compliance_classification',
  'runtime_risk_monitoring'
])

export const SUSU_GROUP_SAVINGS_DOCTOR_CHECKS = Object.freeze([
  'pot_remains_whole',
  'contributions_and_payouts_balance',
  'post_payout_default_exposure_modeled',
  'missed_contribution_state_defined',
  'after_payout_state_defined',
  'member_exit_state_defined',
  'post_payout_bolter_risk',
  'early_payout_default_risk',
  'collusion_risk',
  'organizer_manipulation_risk',
  'rosca_group_finance_classification',
  'consumer_protection_disclosures',
  'jurisdiction_rules',
  'payout_order_explained',
  'default_consequences_explained',
  'locked_deposits_and_insurance_visible',
  'behavioral_trust_score_integration'
])

export const SUSU_GROUP_SAVINGS_REJECTION_REASONS = Object.freeze([
  'default_handling_missing',
  'payout_order_can_be_manipulated',
  'pot_shrinkage_possible',
  'late_payment_policy_undefined',
  'reserve_or_insurance_missing',
  'member_rule_consent_missing',
  'obligations_not_recorded',
  'exit_rules_missing'
])

export const PROTECTED_SUSU_GROUP_SAVINGS_GENOME = Object.freeze({
  group_members: 'ten_members',
  contribution_amount: 'weekly_fixed_amount',
  schedule: 'weekly',
  payout_order: 'pre_committed_rotating_order',
  pot_size: 'contribution_amount_times_active_members',
  default_rules: ['late_payment_grace_period', 'reserve_draw_rules', 'default_escalation'],
  insurance_or_deposit_rules: ['member_deposit_or_reserve_required'],
  organizer_role: 'cannot_reorder_payouts_unilaterally',
  eligibility: ['identity_verified_member', 'consents_to_group_rules'],
  trust_score: 'affects_eligibility_limits_and_exposure',
  liquidity_rules: ['payout_only_when_pot_fundable', 'reserve_threshold_required'],
  payout_fairness: ['immutable_order_after_start', 'member_visible_schedule'],
  dispute_handling: ['member_dispute_window', 'governance_review'],
  member_replacement: ['replacement_requires_group_consent'],
  late_payment_rules: ['grace_period', 'late_fee_disclosure', 'default_branch'],
  ledger_events: ['contribution_received', 'payout_released', 'reserve_drawn', 'refund_or_exit_settlement'],
  notifications: ['contribution_due', 'late_payment_warning', 'payout_ready', 'default_branch_notice'],
  compliance_classification: ['rosca_group_finance', 'consumer_protection_sensitive'],
  runtime_risk_monitoring: ['default_rate_monitor', 'reserve_health_monitor', 'organizer_manipulation_monitor']
})

export const AURA_CAPABILITY_CREATION_LOOP_STEPS = Object.freeze([
  'user_describes_need',
  'product_intent_interpreter_extracts_goal_constraints_actors_risks',
  'product_specification_language_creates_structured_intent',
  'capability_composer_selects_atoms_primitives_patterns_assets_rules',
  'draft_capability_genome_created',
  'capability_doctor_diagnoses_draft',
  'repair_planner_fixes_missing_or_unsafe_structures',
  'simulation_engine_stress_tests_behavior',
  'human_review_console_handles_high_risk_areas',
  'certified_capability_genome_issued',
  'runtime_system_compiles_genome_into_kernel_contracts_ui_directives_and_internal_interfaces',
  'capability_goes_live_under_approved_release_mode',
  'runtime_doctor_monitors_health',
  'outcome_learning_updates_genome_tests_and_templates'
])

export const PROOF_GATED_PAYMENT_REUSABLE_GENES = Object.freeze([
  'escrow_hold',
  'gps_proof',
  'image_proof',
  'conditional_release',
  'timeout_refund',
  'dispute_flow',
  'consent_flow',
  'evidence_retention'
])

export const CAPABILITY_REUSE_TARGETS = Object.freeze([
  'contractor_payment',
  'delivery_confirmation',
  'school_fee_sponsor_release',
  'diaspora_construction_payout',
  'marketplace_service_payment',
  'family_support_conditional_payment',
  'procurement_deposit_release',
  'rent_deposit_condition',
  'milestone_based_project_payment'
])

export const GENOME_INHERITANCE_CHAIN = Object.freeze([
  'conditional_payment',
  'gps_proof_payment',
  'construction_delivery_proof_payment',
  'cement_delivery_proof_payment_for_ghana_building_projects'
])

export const GENOME_INHERITED_TRAITS = Object.freeze([
  'base_money_locking_behavior',
  'state_machine_skeleton',
  'refund_pattern',
  'disclosure_base',
  'ledger_invariants',
  'telemetry_base'
])

export const GENOME_SPECIALIZED_VARIANT_TRAITS = Object.freeze([
  'gps_proof',
  'photo_proof',
  'construction_material_proof',
  'delivery_location_rules',
  'local_language_ux',
  'ghana_specific_compliance_review',
  'diaspora_sender_experience'
])

export const GENOME_INHERITANCE_DOCTOR_CHECKS = Object.freeze([
  'parent_invariants_preserved',
  'required_refund_logic_preserved',
  'risky_data_collection_reviewed',
  'regulatory_classification_change_detected',
  'money_movement_change_detected',
  'new_disclosures_required'
])

export const GENOME_MUTATION_RULES = Object.freeze({
  safe: ['changing_icon', 'improving_copy_clarity', 'adding_tooltip', 'adding_optional_explanation', 'improving_animation_accessibility', 'adding_telemetry_event'],
  controlled: ['changing_proof_deadline', 'changing_threshold', 'adding_verification_requirement', 'changing_dispute_window', 'changing_fee_timing', 'changing_release_mode'],
  dangerous: ['changing_who_receives_funds', 'changing_refund_rules', 'adding_new_fee', 'removing_dispute_path', 'changing_locked_funds_behavior', 'allowing_ai_to_reject_claims_automatically', 'changing_active_transaction_obligations'],
  forbidden: ['retroactively_adding_conditions_after_agreement', 'hiding_fees', 'removing_consent', 'deleting_audit_trail', 'allowing_unbalanced_ledger', 'allowing_indefinite_fund_hold', 'bypassing_compliance_gate']
})

export const CAPABILITY_DOCTOR_IMMUNE_SYSTEM_DETECTIONS = Object.freeze([
  'malformed_capabilities',
  'dangerous_combinations',
  'fraudulent_designs',
  'non_compliant_products',
  'broken_state_machines',
  'unsafe_ai_authority',
  'dark_patterns',
  'runtime_illness',
  'ecosystem_level_contagion'
])

export const GPS_PRIMITIVE_FALSE_POSITIVE_INCIDENT = Object.freeze({
  primitive: 'gps_radius_check_micro_primitive:v2.1',
  runtime_issue: 'false_positives_in_dense_urban_areas',
  affected_capabilities: [
    'proof_gated_payment',
    'delivery_escrow',
    'location_based_scholarship_claim',
    'vendor_presence_payout',
    'field_agent_task_payment'
  ],
  doctor_actions: [
    'quarantine_high_risk_uses',
    'downgrade_to_v2_0',
    'require_human_review_for_ambiguous_gps_checks',
    'update_simulation_tests',
    'issue_migration_plan'
  ]
})

export const GENOME_CONTRACT_LAYERS = Object.freeze([
  'universal_capability_contract',
  'financial_contract',
  'experience_contract',
  'state_machine_contract',
  'disclosure_contract',
  'data_contract',
  'risk_contract',
  'governance_contract',
  'runtime_health_contract'
])

export const GENOME_EXTRA_DNA_LAYERS = Object.freeze([
  'inherited_traits',
  'assets',
  'simulations',
  'risk_scores',
  'telemetry',
  'lifecycle_history',
  'diagnosis_history',
  'runtime_symptoms',
  'version_lineage',
  'learning_signals',
  'governance_status'
])

export const FINANCIAL_PHYSICS_ENGINE_LAWS = Object.freeze([
  'balanced_ledger_events',
  'locked_money_cannot_be_spendable',
  'release_consumes_escrow_liability',
  'refund_closes_escrow_liability',
  'no_indefinite_lock'
])

export const EXPERIENCE_PHYSICS_ENGINE_CHECKS = Object.freeze([
  'experience_matches_financial_reality',
  'user_knows_current_state',
  'ui_avoids_false_confidence',
  'disclosure_before_commitment',
  'confirmation_strength_matches_risk',
  'friction_appropriate_for_risk',
  'user_not_overwhelmed',
  'recovery_paths_visible',
  'motion_meaningful'
])

export const ASSET_VAULT_DOCTOR_CHECKS = Object.freeze([
  'asset_fits_capability_state',
  'asset_emotional_tone_safe',
  'asset_does_not_increase_shame_or_anxiety',
  'asset_preserves_trust'
])

export const ALGORITHM_VAULT_CAPABILITIES = Object.freeze([
  'risk_scoring',
  'fraud_detection',
  'behavioral_trust_score',
  'proof_verification',
  'prioritization',
  'affordability_scoring',
  'repayment_planning',
  'simulation_models',
  'recommendation_models'
])

export const ALGORITHM_VAULT_DOCTOR_CHECKS = Object.freeze([
  'algorithm_certified',
  'jurisdiction_allowed',
  'persona_allowed',
  'confidence_threshold_sufficient',
  'explainable',
  'final_decision_authority_limited',
  'human_review_required_when_needed',
  'bias_monitoring',
  'algorithm_failure_fallback'
])

export const RUNTIME_WATCHTOWER_EXPECTATIONS = Object.freeze({
  proof_review_sla_hours: 2,
  watched_signals: Object.freeze([
    'proof_review_duration',
    'human_review_queue_capacity',
    'delayed_access_to_funds',
    'high_risk_new_transaction_rate'
  ]),
  alert: 'sla_breach',
  diagnosis: Object.freeze([
    'human_review_queue_capacity_issue',
    'user_harm_risk_delayed_access_to_funds'
  ])
})

export const RUNTIME_WATCHTOWER_DOCTOR_ACTIONS = Object.freeze([
  'escalate_operations',
  'temporarily_lower_auto_review_threshold_only_if_safe',
  'notify_users',
  'pause_high_risk_new_transactions_if_necessary'
])

export const MARKETPLACE_HEALTH_CARD_FIELDS = Object.freeze([
  'capability',
  'health',
  'risk',
  'jurisdictions',
  'requires',
  'best_for',
  'not_for',
  'runtime_health',
  'dispute_rate',
  'last_doctor_review'
])

export const PROOF_GATED_PAYMENT_MARKETPLACE_HEALTH_CARD = Object.freeze({
  capability: 'Proof-Gated Payment',
  health: 'Certified Limited Release',
  risk: 'Medium',
  jurisdictions: ['Ghana only'],
  requires: ['verified_wallet', 'gps_consent', 'image_evidence'],
  best_for: ['delivery', 'contractor_work', 'location_based_milestones'],
  not_for: ['high_value_legal_escrow', 'cross_border_remittance', 'investment'],
  runtime_health: 'stable',
  dispute_rate: 'within_expected_range',
  last_doctor_review: 'recent'
})

export const MARKETPLACE_ELIGIBILITY_REQUIREMENTS = Object.freeze([
  'certified_genome',
  'complete_tests',
  'passed_simulations',
  'clear_disclosures',
  'version_history',
  'runtime_monitoring',
  'support_policy',
  'human_review_path_for_high_risk_capabilities'
])

export const ADMIN_DRAG_DROP_CAPABILITY_BLOCKS = Object.freeze([
  'escrow_block',
  'gps_proof_block',
  'photo_proof_block',
  'auto_refund_block',
  'dispute_block',
  'sms_notification_block'
])

export const ADMIN_DRAG_DROP_DOCTOR_REQUIRED_CONTROLS = Object.freeze([
  'gps_consent_screen',
  'evidence_retention_rule',
  'human_review_rule_for_low_confidence_photo',
  'dispute_terminal_state',
  'ledger_idempotency_rule'
])

export const ADMIN_DRAG_DROP_DOCTOR_SUGGESTIONS = Object.freeze([
  'recipient_acceptance_step_before_work_starts'
])

export const DOCTOR_BLOCK_REASONS = Object.freeze([
  'financially_impossible',
  'legally_unsupported',
  'missing_required_consent',
  'fraud_risk_too_high',
  'state_machine_incomplete',
  'unclear_user_intent',
  'forbidden_behavior',
  'unsupported_jurisdiction',
  'data_privacy_violation',
  'dark_pattern_detected',
  'requires_human_review'
])

export const UNAUTHORIZED_DEBIT_SAFE_ALTERNATIVE = Object.freeze({
  blocked_behavior: 'direct_unauthorized_debit',
  safe_alternative: Object.freeze([
    'pre_authorized_mandate',
    'clear_consent',
    'payment_reminders',
    'grace_period',
    'late_fee_if_allowed',
    'manual_or_authorized_auto_debit'
  ])
})

export const CORE_DOCTOR_INVARIANTS = Object.freeze({
  financial: Object.freeze([
    'money_must_not_disappear',
    'money_must_not_be_created_without_authority',
    'debits_and_credits_must_balance',
    'locked_funds_must_not_be_spendable',
    'fees_must_be_disclosed',
    'every_hold_must_have_release_refund_or_lawful_resolution',
    'no_indefinite_money_limbo',
    'no_duplicate_settlement',
    'no_unauthorized_fund_movement'
  ]),
  state: Object.freeze([
    'every_state_reachable_or_intentionally_reserved',
    'every_non_terminal_state_has_forward_paths',
    'money_holding_states_have_timeout_or_resolution_logic',
    'terminal_states_are_final',
    'concurrent_transitions_are_safe',
    'every_state_transition_has_authorization'
  ]),
  consent: Object.freeze([
    'consent_before_money_lock',
    'consent_before_sensitive_data_capture',
    'consent_is_specific',
    'consent_is_recorded',
    'disclosures_before_irreversible_actions'
  ]),
  experience: Object.freeze([
    'ui_must_not_misrepresent_money_state',
    'high_risk_actions_have_appropriate_friction',
    'users_understand_consequences',
    'recovery_paths_visible',
    'interface_must_not_pressure_financial_decisions'
  ]),
  compliance: Object.freeze([
    'no_operation_in_unsupported_jurisdictions',
    'regulated_resemblance_triggers_review',
    'high_risk_financial_behavior_not_hidden_by_casual_naming'
  ]),
  privacy: Object.freeze([
    'collect_only_necessary_data',
    'explain_why_data_is_collected',
    'protect_sensitive_data',
    'limit_retention',
    'log_access'
  ])
})

export const GENOME_STATUS_VALUES = Object.freeze([
  'draft',
  'diagnosed',
  'repair_required',
  'sandbox_only',
  'supervised_release',
  'limited_release',
  'certified_general_release',
  'marketplace_eligible',
  'quarantined',
  'deprecated',
  'retired'
])

export const BUILD_GRADE_CAPABILITY_GENOME_FIELDS = Object.freeze([
  'genomeId',
  'capabilityId',
  'version',
  'status',
  'identity',
  'intent',
  'persona',
  'type',
  'composition',
  'financialPhysics',
  'stateMachine',
  'rules',
  'identityEntities',
  'verification',
  'compliance',
  'risk',
  'experience',
  'disclosureConsent',
  'dataPrivacy',
  'assets',
  'algorithms',
  'integrations',
  'observability',
  'simulationTesting',
  'lifecycle',
  'governance',
  'outcomeLearning',
  'doctorHistory'
])

export const CAPABILITY_DOCTOR_REPORT_STATUS_VALUES = Object.freeze([
  'not_release_eligible',
  'sandbox_only',
  'supervised_release',
  'limited_release',
  'certified_general_release',
  'marketplace_eligible',
  'quarantined'
])

export const CAPABILITY_DOCTOR_REPORT_MODEL_FIELDS = Object.freeze([
  'reportId',
  'genomeId',
  'capabilityId',
  'genomeVersion',
  'overallStatus',
  'healthScore',
  'findings',
  'requiredRepairs',
  'simulationResults',
  'generatedAt'
])

export const DOCTOR_FINDING_CATEGORIES = Object.freeze([
  'financial_physics',
  'ledger',
  'state_machine',
  'composition',
  'compliance',
  'risk',
  'verification',
  'consent',
  'privacy',
  'experience',
  'accessibility',
  'asset',
  'algorithm',
  'runtime',
  'migration'
])

export const DOCTOR_FINDING_RELEASE_IMPACTS = Object.freeze([
  'blocks_release',
  'limits_release',
  'monitoring_required',
  'advisory'
])

export const DOCTOR_FINDING_MODEL_FIELDS = Object.freeze([
  'findingId',
  'severity',
  'category',
  'title',
  'explanation',
  'affectedGenomePath',
  'evidence',
  'releaseImpact',
  'recommendedRepair'
])

export const REPAIR_ACTION_TYPES = Object.freeze([
  'add_gene',
  'remove_gene',
  'replace_primitive',
  'add_state',
  'add_transition',
  'add_ledger_event',
  'add_disclosure',
  'add_consent',
  'add_risk_control',
  'add_telemetry',
  'route_human_review',
  'block_jurisdiction',
  'change_release_mode'
])

export const REPAIR_ACTION_MODEL_FIELDS = Object.freeze([
  'actionId',
  'actionType',
  'description',
  'targetGenomePath',
  'autoFixAllowed',
  'humanApprovalRequired'
])

export const PROOF_GATED_PAYMENT_BUILD_GRADE_REPAIR_ACTION = Object.freeze({
  actionId: 'repair_timeout_refund_transition',
  actionType: 'add_transition',
  description: 'Add timeout refund transition and matching ledger event for proof deadlines.',
  targetGenomePath: 'stateMachine.transitions.timeout_to_refunded',
  autoFixAllowed: false,
  humanApprovalRequired: true
})

export const PROOF_GATED_PAYMENT_BUILD_GRADE_FINDING = Object.freeze({
  findingId: 'finding_state_timeout_refund',
  severity: 'P0',
  category: 'state_machine',
  title: 'Missing timeout refund transition',
  explanation: 'A money-holding state must not keep funds locked after the proof deadline expires.',
  affectedGenomePath: 'stateMachine.transitions',
  evidence: ['awaiting_recipient_proof_holds_funds', 'proof_deadline_exists'],
  releaseImpact: 'blocks_release',
  recommendedRepair: [PROOF_GATED_PAYMENT_BUILD_GRADE_REPAIR_ACTION]
})

export const PROOF_GATED_PAYMENT_BUILD_GRADE_DOCTOR_REPORT = Object.freeze({
  reportId: 'doctor_report_proof_gated_payment_001',
  genomeId: 'genome_proof_gated_payment_001',
  capabilityId: 'cap_gps_proof_payment_001',
  genomeVersion: '1.0.0',
  overallStatus: 'not_release_eligible',
  healthScore: 88,
  findings: [PROOF_GATED_PAYMENT_BUILD_GRADE_FINDING],
  requiredRepairs: [PROOF_GATED_PAYMENT_BUILD_GRADE_REPAIR_ACTION],
  simulationResults: [
    {
      scenario: 'recipient_never_submits_proof',
      passed: true,
      evidence: 'timeout_refund_path_exercised'
    }
  ],
  certification: PROOF_GATED_PAYMENT_CAPABILITY_CERTIFICATION,
  generatedAt: 'policy_defined',
  reviewedBy: ['capability_doctor']
})

export const PROOF_GATED_PAYMENT_BUILD_GRADE_CAPABILITY_GENOME = Object.freeze({
  genomeId: 'genome_proof_gated_payment_001',
  capabilityId: 'cap_gps_proof_payment_001',
  version: '1.0.0',
  status: 'limited_release',
  identity: PROOF_GATED_PAYMENT_IDENTITY_GENOME,
  intent: PROOF_GATED_PAYMENT_INTENT_GENOME,
  persona: PROOF_GATED_PAYMENT_PERSONA_GENOME,
  type: PROOF_GATED_PAYMENT_TYPE_GENOME,
  composition: PROOF_GATED_PAYMENT_COMPOSITION_GENOME,
  financialPhysics: PROOF_GATED_PAYMENT_FINANCIAL_PHYSICS_GENOME,
  stateMachine: PROOF_GATED_PAYMENT_STATE_MACHINE_GENOME,
  rules: PROOF_GATED_PAYMENT_RULE_POLICY_GENOME,
  identityEntities: PROOF_GATED_PAYMENT_IDENTITY_ENTITY_GENOME,
  verification: PROOF_GATED_PAYMENT_VERIFICATION_GENOME,
  compliance: PROOF_GATED_PAYMENT_COMPLIANCE_JURISDICTION_GENOME,
  risk: PROOF_GATED_PAYMENT_RISK_FRAUD_GENOME,
  experience: PROOF_GATED_PAYMENT_EXPERIENCE_GENOME,
  disclosureConsent: PROOF_GATED_PAYMENT_DISCLOSURE_CONSENT_GENOME,
  dataPrivacy: PROOF_GATED_PAYMENT_DATA_PRIVACY_GENOME,
  assets: PROOF_GATED_PAYMENT_ASSET_GENOME,
  algorithms: PROOF_GATED_PAYMENT_ALGORITHM_INTELLIGENCE_GENOME,
  integrations: {
    mode: 'provider_neutral_interfaces_only',
    third_party_provider_apis_skipped: true
  },
  observability: PROOF_GATED_PAYMENT_OBSERVABILITY_GENOME,
  simulationTesting: PROOF_GATED_PAYMENT_SIMULATION_TESTING_GENOME,
  lifecycle: PROOF_GATED_PAYMENT_LIFECYCLE_VERSIONING_GENOME,
  governance: PROOF_GATED_PAYMENT_GOVERNANCE_GENOME,
  outcomeLearning: PROOF_GATED_PAYMENT_OUTCOME_LEARNING_GENOME,
  doctorHistory: [
    {
      reportId: PROOF_GATED_PAYMENT_BUILD_GRADE_DOCTOR_REPORT.reportId,
      overallStatus: PROOF_GATED_PAYMENT_BUILD_GRADE_DOCTOR_REPORT.overallStatus,
      healthScore: PROOF_GATED_PAYMENT_BUILD_GRADE_DOCTOR_REPORT.healthScore
    }
  ]
})

export const DOCTOR_ORCHESTRATION_STACK = Object.freeze([
  'rules',
  'type_system',
  'formal_invariants',
  'simulation',
  'static_analysis',
  'runtime_telemetry',
  'human_review',
  'ai_reasoning'
])

export const DOCTOR_DETERMINISTIC_CHECKS = Object.freeze([
  'ledger_balance_check',
  'state_reachability',
  'debit_credit_conservation',
  'duplicate_settlement_detection',
  'terminal_state_finality'
])

export const DOCTOR_HYBRID_CHECKS = Object.freeze({
  consent_completeness: ['rules', 'semantic_validation'],
  dark_pattern_detection: ['rules', 'ai_assisted_review'],
  compliance_resemblance: ['rules', 'ai_assisted_classification', 'human_review'],
  fraud_abuse_brainstorming: ['ai_assisted_review', 'known_attack_library'],
  runtime_anomaly_detection: ['metrics', 'thresholds', 'models']
})

export const AURA_CAPABILITY_DOCTOR_BENEFITS = Object.freeze([
  'inspectability',
  'composability',
  'reusability',
  'safety',
  'compliance_awareness',
  'runtime_intelligence',
  'repairability',
  'version_control',
  'marketplace_quality',
  'trust'
])

export const AURA_LIVING_CAPABILITY_ORGANISM_MODEL = Object.freeze({
  dna: 'capability_genome',
  body: 'atoms_primitives_contracts_state_machines_ui_assets',
  behavior: 'runtime_execution',
  memory: 'audit_ledger_and_telemetry',
  health: 'doctor_diagnosis',
  immune_system: 'runtime_monitoring_and_quarantine',
  evolution: 'versioning_and_outcome_learning',
  governance: 'human_review_and_release_certification'
})

export const CAPABILITY_GENOME_DOCTOR_FINAL_STATEMENTS = Object.freeze({
  genome: 'this_is_what_the_capability_is',
  doctor: 'this_is_whether_the_capability_is_healthy_enough_to_exist',
  together: 'controlled_financial_capability_operating_system'
})

export const AURA_CAPABILITY_EXISTENCE_GATES = Object.freeze([
  'anatomically_describe',
  'medically_diagnose',
  'safely_simulate',
  'legally_classify',
  'financially_verify',
  'experientially_explain',
  'continuously_monitor'
])

export const PROTECTED_NO_POT_SHRINK_SUSU_TYPE_CONTRACT = Object.freeze({
  capabilityFamily: 'group_savings',
  capabilityType: 'rotating_contribution_capability',
  subtype: 'protected_no_pot_shrink_susu_circle',
  riskClass: 'pooled_contribution_with_default_exposure',
  requiredReleaseMode: 'simulation_gated_and_governor_reviewed',
  requiredRuntimeMonitors: [
    'contribution_monitor',
    'payout_monitor',
    'reserve_monitor',
    'default_monitor'
  ],
  requiredRules: ['fundability_guard', 'member_consent', 'default_handling', 'reserve_logic'],
  requiredPrimitives: [
    'group_wallet',
    'recurring_contribution',
    'rotating_payout_queue',
    'default_handler',
    'reserve_pool'
  ]
})

export const CAPABILITY_TYPE_DIMENSIONS = Object.freeze([
  'intent_type',
  'financial_behavior_type',
  'money_state_type',
  'actor_topology_type',
  'obligation_type',
  'claim_type',
  'control_type',
  'verification_type',
  'risk_type',
  'compliance_type',
  'runtime_type',
  'ui_experience_type',
  'algorithm_type',
  'autonomy_type',
  'release_mode_type',
  'lifecycle_type'
])

export const INTENT_TYPE_EXAMPLES = Object.freeze([
  'protect_money',
  'send_money_safely',
  'split_income',
  'save_toward_goal',
  'collect_contributions',
  'run_group_savings',
  'pay_bills',
  'pay_school_fees',
  'pay_contractor',
  'manage_family_money',
  'request_payment',
  'create_obligation',
  'reduce_default_risk',
  'verify_delivery',
  'control_spending',
  'delegate_money_authority'
])

export const FINANCIAL_BEHAVIOR_TYPES = Object.freeze([
  'store',
  'lock',
  'unlock',
  'reserve',
  'split',
  'route',
  'hold',
  'escrow',
  'release',
  'refund',
  'collect',
  'pool',
  'allocate',
  'settle',
  'disburse',
  'restrict',
  'convert',
  'schedule',
  'claim',
  'advance',
  'repay',
  'reconcile'
])

export const AUTONOMY_TYPES = Object.freeze([
  'advisory_capability',
  'read_only_capability',
  'planning_capability',
  'soft_automation_capability',
  'money_movement_capability',
  'custodial_capability',
  'credit_like_capability',
  'pooled_risk_capability',
  'restricted_execution_capability'
])

export const MONEY_STATE_TYPES = Object.freeze([
  'available_funds',
  'pending_funds',
  'settled_funds',
  'reserved_funds',
  'locked_funds',
  'escrowed_funds',
  'restricted_funds',
  'claimable_funds',
  'disputed_funds',
  'refundable_funds',
  'defaulted_funds',
  'pledged_funds',
  'future_receivables',
  'obligation_bound_funds'
])

export const STATE_TRANSITION_SIGNATURES = Object.freeze({
  escrow_hold: {
    inputStates: ['available_funds'],
    outputStates: ['escrowed_funds']
  },
  conditional_release: {
    inputStates: ['escrowed_funds', 'approved_condition'],
    outputStates: ['released_funds']
  },
  school_fee_restriction: {
    inputStates: ['available_or_contributed_funds'],
    outputStates: ['purpose_restricted_funds']
  }
})

export const ACTOR_TOPOLOGY_TYPES = Object.freeze([
  'single_user',
  'two_party',
  'multi_party',
  'group',
  'family',
  'guardian_beneficiary',
  'business_vendor',
  'employer_contractor',
  'school_parent_child',
  'contributor_beneficiary_payee',
  'organizer_member',
  'platform_mediated',
  'agent_mediated',
  'verifier_mediated',
  'guarantor_supported'
])

export const CAPABILITY_ACTOR_ROLES = Object.freeze([
  'owner',
  'controller',
  'beneficiary',
  'contributor',
  'verifier',
  'approver',
  'recipient',
  'liability_bearer',
  'observer',
  'admin',
  'delegate'
])

export const OBLIGATION_TYPES = Object.freeze([
  'no_obligation',
  'one_time_obligation',
  'recurring_obligation',
  'installment_obligation',
  'conditional_obligation',
  'group_contribution_obligation',
  'post_payout_obligation',
  'debt_repayment_obligation',
  'bill_payment_obligation',
  'milestone_obligation',
  'family_support_obligation'
])

export const OBLIGATION_CONTRACT_FIELDS = Object.freeze([
  'dueDates',
  'gracePeriods',
  'defaultHandling',
  'reminders',
  'priority',
  'fundingSource',
  'consent',
  'auditTrail'
])

export const CLAIM_TYPES = Object.freeze([
  'no_claim',
  'immediate_claim',
  'conditional_claim',
  'matured_claim',
  'scheduled_claim',
  'disputed_claim',
  'revocable_claim',
  'irrevocable_claim',
  'rotating_payout_claim',
  'beneficiary_claim',
  'merchant_claim',
  'refund_claim'
])

export const CONTROL_TYPES = Object.freeze([
  'user_controlled',
  'guardian_controlled',
  'business_admin_controlled',
  'group_governed',
  'platform_supervised',
  'algorithm_controlled',
  'policy_controlled',
  'human_review_controlled',
  'multi_signature_controlled',
  'delegate_controlled'
])

export const VERIFICATION_TYPES = Object.freeze([
  'no_verification',
  'identity_verification',
  'business_verification',
  'guardian_verification',
  'school_verification',
  'merchant_verification',
  'invoice_verification',
  'gps_verification',
  'photo_verification',
  'video_verification',
  'document_verification',
  'device_verification',
  'biometric_verification',
  'human_review',
  'community_confirmation',
  'multi_party_approval',
  'approved_payee_verification',
  'payment_history',
  'bts_threshold'
])

export const RISK_TYPES = Object.freeze([
  'fraud_risk',
  'default_risk',
  'post_payout_bolting_risk',
  'counterparty_non_performance_risk',
  'chargeback_risk',
  'settlement_risk',
  'liquidity_risk',
  'reserve_depletion_risk',
  'misuse_risk',
  'unauthorized_access_risk',
  'identity_fraud_risk',
  'family_abuse_risk',
  'minor_protection_risk',
  'compliance_risk',
  'operational_risk',
  'ux_misunderstanding_risk'
])

export const COMPLIANCE_TAG_TYPES = Object.freeze([
  'payment',
  'money_movement',
  'stored_value',
  'escrow_like',
  'custody_like',
  'money_transmission',
  'bill_payment',
  'credit_like',
  'lending_like',
  'insurance_like',
  'investment_like',
  'deposit_like',
  'remittance_like',
  'payroll_like',
  'debt_collection_like',
  'charitable_fundraising_like',
  'minor_guardian_finance',
  'business_treasury',
  'tax_reportable_business_payment'
])

export const RUNTIME_TYPES = Object.freeze([
  'one_shot',
  'recurring',
  'long_lived',
  'event_driven',
  'scheduled',
  'real_time',
  'adaptive',
  'human_supervised',
  'autonomous',
  'simulation_gated',
  'governor_watched',
  'self_healing',
  'continuously_monitored'
])

export const UI_EXPERIENCE_TYPES = Object.freeze([
  'protected_money_card',
  'goal_wallet',
  'contribution_timeline',
  'payout_queue',
  'escrow_timeline',
  'proof_submission_flow',
  'consent_flow',
  'dispute_panel',
  'restricted_wallet_interface',
  'family_dashboard',
  'business_approval_queue',
  'admin_composition_canvas',
  'risk_warning_panel',
  'release_confirmation_screen'
])

export const ALGORITHM_TYPES = Object.freeze([
  'fundability_calculation',
  'reserve_sizing',
  'bts_scoring',
  'risk_scoring',
  'default_probability',
  'payout_order_ranking',
  'priority_waterfall',
  'shortfall_prediction',
  'proof_confidence_scoring',
  'fraud_detection',
  'contribution_reminder_timing',
  'dynamic_limit_setting',
  'simulation_scenario_generation'
])

export const CAPABILITY_ALGORITHM_REQUIREMENTS = Object.freeze({
  rotating_contribution_capability: [
    'fundability_calculation',
    'reserve_sizing',
    'default_probability',
    'payout_order_ranking'
  ],
  salary_split: ['priority_waterfall', 'shortfall_prediction'],
  contractor_escrow: ['proof_confidence_scoring', 'risk_scoring', 'simulation_scenario_generation']
})

export const AUTONOMY_LEVELS = Object.freeze([
  'read_only',
  'recommend_only',
  'draft_only',
  'user_confirmed_execution',
  'rule_based_auto_execution',
  'human_supervised_auto_execution',
  'fully_automated_within_limits',
  'governor_restricted_automation',
  'blocked_without_human_review'
])

export const RELEASE_MODE_TYPES = Object.freeze([
  'draft_only',
  'simulation_only',
  'internal_test',
  'admin_reviewed',
  'human_supervised_live',
  'low_limit_live',
  'limited_tenant_rollout',
  'full_live_release',
  'jurisdiction_restricted',
  'blocked',
  'deprecated',
  'retired'
])

export const LIFECYCLE_STATES = Object.freeze([
  'draft',
  'typed',
  'composed',
  'validated',
  'simulated',
  'governor_reviewed',
  'approved',
  'released',
  'running',
  'watched',
  'diagnosed',
  'patched',
  'migrated',
  'deprecated',
  'retired',
  'rolled_back'
])

export const CAPABILITY_TYPE_SIGNATURE_FIELDS = Object.freeze([
  'capability_id',
  'capability_family',
  'capability_type',
  'subtype',
  'version',
  'intent_types',
  'financial_behavior_types',
  'money_state_inputs',
  'money_state_outputs',
  'required_actors',
  'optional_actors',
  'actor_topology',
  'required_primitives',
  'required_algorithms',
  'required_ui_surfaces',
  'required_consents',
  'required_monitors',
  'compliance_tags',
  'risk_tags',
  'release_mode',
  'doctor_policy'
])

export const SAFESEND_CAPABILITY_TYPE_SIGNATURE = Object.freeze({
  capability_id: 'aura.safesend.proof_gated_payment',
  capability_family: 'payment_safety',
  capability_type: 'conditional_payment',
  subtype: 'proof_gated_escrow_payment',
  version: '1.0.0',
  intent_types: ['safe_payment', 'counterparty_risk_reduction', 'proof_based_release'],
  financial_behavior_types: ['escrow', 'conditional_release', 'refund', 'dispute'],
  money_state_inputs: ['available_funds'],
  money_state_outputs: ['escrowed_funds', 'released_funds', 'refunded_funds', 'disputed_funds'],
  required_actors: ['sender', 'recipient'],
  optional_actors: ['verifier', 'human_reviewer'],
  actor_topology: { type: 'two_party_with_optional_verifier' },
  required_primitives: ['escrow_hold', 'claimable_transfer', 'proof_gate', 'conditional_release', 'refund_timer', 'dispute_workflow'],
  required_algorithms: ['proof_confidence_scoring', 'risk_scoring', 'release_mode_selection'],
  required_ui_surfaces: ['protected_payment_card', 'proof_submission_flow', 'release_timeline', 'dispute_panel', 'refund_confirmation'],
  required_consents: ['sender_escrow_terms', 'recipient_conditional_claim_terms'],
  required_monitors: ['escrow_age_monitor', 'proof_deadline_monitor', 'suspicious_proof_monitor', 'dispute_status_monitor'],
  compliance_tags: ['payment', 'escrow_like', 'custody_review_candidate'],
  risk_tags: ['proof_fraud_risk', 'counterparty_dispute_risk', 'settlement_risk'],
  release_mode: {
    default: 'supervised_auto_release',
    max_without_review: 'low_limit_live'
  },
  doctor_policy: {
    pre_release_check_required: true,
    runtime_health_check_required: true,
    simulation_required_above_threshold: true
  }
})

export const CAPABILITY_PACK_FILES = Object.freeze([
  'manifest.yaml',
  'entities.yaml',
  'states.yaml',
  'workflows.yaml',
  'ledger.yaml',
  'rules.yaml',
  'policy-rules.yaml',
  'autonomy.yaml',
  'events.yaml',
  'ui-surfaces.json',
  'assets.yaml',
  'algorithms.yaml',
  'prompts.yaml',
  'tests.yaml',
  'simulations.yaml',
  'migrations.yaml',
  'integrations.yaml',
  'analytics.yaml',
  'explanations.yaml',
  'doctor.yaml'
])

export const CAPABILITY_PACK_SECTION_DEFINITIONS = Object.freeze({
  'manifest.yaml': ['capability_identity', 'type', 'version', 'dependencies', 'risk_class', 'release_mode', 'owner', 'status'],
  'entities.yaml': ['actors', 'roles', 'entities', 'permissions', 'relationships'],
  'states.yaml': ['money_states', 'capability_states', 'terminal_states', 'failure_states', 'dispute_states'],
  'workflows.yaml': ['user_flows', 'backend_flows', 'state_transitions', 'trigger_paths', 'fallback_paths'],
  'ledger.yaml': ['ledger_effects', 'debit_credit_mappings', 'hold_release_refund_accounting', 'fee_accounting', 'reserve_accounting'],
  'rules.yaml': ['business_rules', 'financial_physics_invariants', 'composition_constraints', 'eligibility_logic'],
  'policy-rules.yaml': ['governor_rules', 'compliance_tags', 'jurisdiction_constraints', 'consent_disclosure_requirements'],
  'autonomy.yaml': ['automatic_actions', 'user_confirmation_actions', 'human_review_actions', 'blocked_actions'],
  'events.yaml': ['events_emitted', 'events_consumed', 'audit_events', 'runtime_monitor_triggers'],
  'ui-surfaces.json': ['screens', 'cards', 'modals', 'state_displays', 'warnings', 'disabled_actions', 'consent_screens'],
  'assets.yaml': ['icons', 'animations', 'lottie_files', 'illustrations', 'sound_cues', 'motion_patterns'],
  'algorithms.yaml': ['algorithm_dependencies', 'inputs', 'outputs', 'thresholds', 'models', 'fallbacks'],
  'prompts.yaml': ['ai_interpretation_prompts', 'explanation_prompts', 'clarifying_question_prompts', 'recovery_suggestion_prompts'],
  'tests.yaml': ['unit_tests', 'integration_tests', 'invariant_tests', 'ledger_tests', 'state_tests', 'risk_tests', 'consent_tests'],
  'simulations.yaml': ['stress_scenarios', 'default_scenarios', 'fraud_scenarios', 'edge_cases', 'release_thresholds'],
  'migrations.yaml': ['upgrade_rules', 'rollback_rules', 'state_migration', 'consent_migration', 'ledger_migration'],
  'integrations.yaml': ['provider_neutral_interfaces_only'],
  'analytics.yaml': ['success_metrics', 'failure_metrics', 'risk_metrics', 'user_behavior_metrics', 'health_metrics'],
  'explanations.yaml': ['user_facing_explanations', 'admin_explanations', 'dispute_explanations', 'audit_explanations', 'consent_copy'],
  'doctor.yaml': ['diagnostic_checks', 'health_thresholds', 'known_failure_patterns', 'repair_strategies', 'escalation_rules', 'rollback_triggers']
})

export const UNIVERSAL_CAPABILITY_INTERFACE_METHODS = Object.freeze([
  'describe',
  'validate',
  'simulate',
  'explain',
  'execute',
  'monitor',
  'diagnose',
  'migrate'
])

export const CAPABILITY_EXECUTION_ACTIONS = Object.freeze([
  'create',
  'activate',
  'pause',
  'resume',
  'move_money',
  'lock_money',
  'release_money',
  'refund',
  'notify',
  'escalate'
])

export const CAPABILITY_MONITOR_SIGNALS = Object.freeze([
  'deadlines',
  'defaults',
  'proof_status',
  'reserve_health',
  'risk_drift',
  'user_behavior',
  'policy_violations'
])

export const CAPABILITY_REGISTRY_FIELDS = Object.freeze([
  'capability_id',
  'name',
  'type',
  'version',
  'dependencies',
  'status',
  'health_score',
  'release_mode',
  'compliance_status',
  'tenant_availability',
  'runtime_metrics',
  'doctor_score',
  'known_issues',
  'upgrade_path',
  'rollback_version'
])

export const PROTECTED_SUSU_REGISTRY_RECORD = Object.freeze({
  capability_id: 'aura.susu.protected_circle',
  name: 'Protected Susu Circle',
  type: 'rotating_contribution_capability',
  version: '2.3.1',
  status: 'active',
  release_mode: 'governor_reviewed_live',
  health_score: 91,
  dependencies: [
    'group_wallet@1.8.0',
    'recurring_contribution@2.1.0',
    'payout_queue@1.5.2',
    'reserve_pool@1.3.0',
    'default_handler@2.0.0',
    'member_consent@1.4.0'
  ],
  compliance_status: {
    tags: ['pooled_contribution', 'money_movement', 'default_risk'],
    governor_result: 'approved_with_limits'
  },
  tenant_availability: ['approved_tenants_only'],
  runtime_metrics: ['reserve_health', 'late_contribution_rate', 'default_rate'],
  doctor_score: 91,
  known_issues: ['reserve_depletion_warning_in_two_tenants'],
  upgrade_path: '2.4.0',
  rollback_version: '2.2.9',
  doctor_status: {
    last_check: 'continuous',
    open_findings: ['reserve_depletion_warning_in_two_tenants'],
    recommended_action: ['tighten_payout_threshold', 'increase_reserve_monitor_sensitivity']
  }
})

export const CAPABILITY_TYPE_ERROR_CATALOG = Object.freeze({
  actor_type_errors: [
    'required_actor_missing',
    'actor_has_wrong_role',
    'minor_assigned_adult_only_permission',
    'organizer_assigned_conflicting_verifier_role',
    'guardian_relationship_not_verified',
    'business_role_used_by_personal_account'
  ],
  money_state_type_errors: [
    'expected_available_received_pending',
    'tries_to_release_locked_funds',
    'escrowed_funds_treated_as_spendable',
    'tries_to_refund_already_released_funds'
  ],
  ledger_type_errors: [
    'debit_without_credit',
    'credit_without_funding_source',
    'fee_without_recipient_account',
    'reserve_use_without_reserve_account',
    'refund_path_unbalanced'
  ],
  consent_type_errors: [
    'risk_exposure_without_consent',
    'group_member_obligation_not_disclosed',
    'contributor_purpose_restriction_not_disclosed',
    'recipient_conditional_access_not_disclosed'
  ],
  policy_type_errors: [
    'credit_like_missing_governor_approval',
    'pooled_loss_missing_compliance_escalation',
    'high_risk_missing_release_limits'
  ],
  runtime_type_errors: [
    'long_lived_missing_monitors',
    'recurring_obligation_missing_scheduler',
    'conditional_release_missing_expiry_path',
    'group_product_missing_default_monitor'
  ],
  ui_type_errors: [
    'locked_funds_shown_as_available',
    'disputed_funds_shown_as_released',
    'restricted_wallet_has_unrestricted_withdrawal',
    'consent_screen_missing_key_disclosure'
  ]
})

export const DEFAULT_AUTONOMY_CONTRACT = Object.freeze({
  read: 'automatic',
  recommend: 'automatic',
  draft: 'automatic',
  configure: 'user_confirmed',
  execute_money_movement: 'user_confirmed_or_policy_approved',
  release_funds: 'guarded',
  override_restriction: 'human_review_required',
  change_group_rules: 'member_reconsent_required',
  expand_limits: 'governor_review_required'
})

export const TENANT_CAPABILITY_CONFIG_EXAMPLES = Object.freeze({
  tenant_a: {
    capability: 'safesend',
    maxAutomaticRelease: 100,
    verification: ['photo_proof'],
    humanReviewAbove: 100
  },
  tenant_b: {
    capability: 'safesend',
    maxAutomaticRelease: 1000,
    verification: ['photo_proof', 'gps_verification', 'identity_verification'],
    humanReviewAbove: 500
  },
  tenant_c: {
    capability: 'safesend',
    blockedFlows: ['escrow_like_flow']
  }
})

export const TENANT_CONFIGURATION_DIMENSIONS = Object.freeze([
  'autonomy',
  'limits',
  'proof_requirements',
  'allowed_actors',
  'supported_jurisdictions',
  'compliance_mode',
  'simulation_requirement',
  'human_review_threshold',
  'ui_wording',
  'asset_theme',
  'algorithm_thresholds',
  'runtime_monitor_sensitivity'
])

export const CAPABILITY_DOCTOR_CORE_FUNCTIONS = Object.freeze([
  'pre_creation_diagnosis',
  'pre_release_diagnosis',
  'type_completeness_diagnosis',
  'composition_diagnosis',
  'runtime_health_diagnosis',
  'outcome_diagnosis',
  'user_confusion_diagnosis',
  'compliance_drift_diagnosis',
  'repair_prescription',
  'patch_rollback_or_retirement_recommendation'
])

export const CAPABILITY_REPAIR_TYPES = Object.freeze([
  'add_missing_primitive',
  'add_missing_guard',
  'add_missing_consent',
  'add_missing_monitor',
  'add_missing_ui_state',
  'add_missing_failure_path',
  'adjust_threshold',
  'change_release_mode',
  'run_new_simulation',
  'escalate_to_governor',
  'patch_workflow',
  'rollback_dependency',
  'deprecate_capability',
  'retire_capability'
])

export const CAPABILITY_DOCTOR_INSPECTORS = Object.freeze([
  'type_contract_inspector',
  'composition_graph_inspector',
  'financial_physics_inspector',
  'ledger_integrity_inspector',
  'consent_and_disclosure_inspector',
  'compliance_drift_inspector',
  'risk_and_abuse_inspector',
  'runtime_health_inspector',
  'ux_truth_and_confusion_inspector',
  'dependency_and_version_inspector',
  'simulation_result_inspector',
  'test_coverage_inspector',
  'outcome_performance_inspector',
  'repair_planner',
  'patch_rollback_retirement_controller'
])

export const HEALTH_SIGNAL_TYPES = Object.freeze([
  'failure_rate',
  'dispute_rate',
  'refund_rate',
  'default_rate',
  'manual_review_backlog',
  'reserve_coverage',
  'state_transition_errors',
  'delayed_settlements',
  'user_abandonment',
  'support_complaints',
  'unexpected_overrides',
  'monitor_downtime',
  'dependency_failures'
])

export const SUSU_MANDATORY_SIMULATION_SCENARIOS = Object.freeze([
  'all_members_pay',
  'one_member_pays_late',
  'one_member_defaults_before_payout',
  'one_member_defaults_after_payout',
  'two_members_default',
  'reserve_depleted',
  'payment_reversal_after_payout',
  'organizer_attempts_abuse',
  'member_exits_mid_cycle'
])

export const TEST_COVERAGE_CATEGORIES = Object.freeze([
  'type_tests',
  'state_machine_tests',
  'ledger_tests',
  'consent_tests',
  'policy_tests',
  'ui_truth_tests',
  'simulation_tests',
  'runtime_monitor_tests',
  'migration_tests',
  'failure_path_tests',
  'fraud_path_tests'
])

export const LIFECYCLE_CONTROLLER_ACTIONS = Object.freeze([
  'patch_capability',
  'patch_dependency',
  'disable_unsafe_path',
  'reduce_limit',
  'switch_release_mode',
  'require_human_review',
  'pause_new_activations',
  'pause_all_active_instances',
  'rollback_version',
  'migrate_users',
  'require_reconsent',
  'escalate_to_governor',
  'retire_capability'
])

export const DOCTOR_AUDIT_FIELDS = Object.freeze([
  'doctor_scan_time',
  'capability_version',
  'findings',
  'severity',
  'recommended_repair',
  'action_taken',
  'human_reviewer',
  'governor_decision',
  'release_mode_change',
  'rollback_event',
  'user_impact'
])

export const SELF_HEALING_ALLOWED_ACTIONS = Object.freeze([
  'add_missing_monitor_from_approved_registry',
  'lower_automatic_release_limit',
  'switch_to_human_review_mode',
  'pause_unsafe_path',
  'improve_ui_explanation_from_approved_copy',
  'retry_failed_event_processing',
  'trigger_reserve_top_up_request'
])

export const SELF_HEALING_REVIEW_REQUIRED_ACTIONS = Object.freeze([
  'invent_new_default_policy_after_members_joined',
  'change_payout_order',
  'change_fee_model',
  'change_consent_terms',
  'release_funds_under_new_conditions',
  'create_new_credit_behavior'
])

export const CAPABILITY_CREATION_RELIABILITY_FLOW = Object.freeze([
  'user_request',
  'product_intent_interpreter',
  'financial_physics_engine',
  'composition_algebra',
  'capability_type_system',
  'capability_pack_generated',
  'capability_doctor_pre_release_scan',
  'simulation_engine',
  'governor_review',
  'kernel_contract_builder',
  'ui_ux_composer',
  'runtime_execution',
  'watchtower',
  'capability_doctor_runtime_diagnosis',
  'patch_improve_pause_rollback_retire'
])

export const CAPABILITY_TYPE_DOCTOR_EXAMPLES = Object.freeze({
  safesend: {
    intent: 'send_money_but_only_release_after_delivery_proof',
    classification: {
      family: 'payment_safety',
      type: 'conditional_payment',
      subtype: 'proof_gated_escrow',
      actorTopology: 'sender_recipient_with_optional_verifier',
      moneyBehavior: ['escrow', 'conditional_release', 'refund'],
      riskType: ['counterparty_non_performance', 'proof_fraud', 'dispute'],
      complianceTag: ['escrow_like', 'custody_review_candidate'],
      runtimeType: 'one_shot_monitored',
      requiredReleaseMode: 'supervised_or_low_limit_auto_release'
    },
    requiredContract: [
      'escrow_hold',
      'recipient_claim',
      'proof_submission',
      'proof_verification',
      'release_guard',
      'refund_timer',
      'dispute_workflow',
      'consent',
      'audit',
      'runtime_monitor',
      'protected_ui'
    ],
    findings: [
      'proof_verification_missing',
      'refund_timer_missing',
      'consent_incomplete',
      'payment_sent_wording_should_be_payment_protected'
    ],
    diagnosis: 'not_releasable',
    repair: ['add_proof_verification', 'add_refund_timer', 'update_consent', 'update_ui_wording', 'rerun_tests']
  },
  protected_susu: {
    intent: 'five_people_contribute_weekly_one_receives_payout_pot_should_not_shrink',
    classification: {
      family: 'group_finance',
      type: 'rotating_contribution_capability',
      subtype: 'protected_no_pot_shrink_susu_circle',
      actorTopology: 'organizer_members_payout_recipient',
      moneyBehavior: ['contribution', 'pooling', 'payout', 'reserve_support'],
      obligationType: ['recurring_contribution', 'post_payout_obligation'],
      claimType: 'rotating_payout_claim',
      riskType: ['default', 'post_payout_bolting', 'reserve_depletion'],
      complianceTag: ['pooled_contribution', 'money_movement_review'],
      runtimeType: 'long_lived_recurring_monitored',
      releaseMode: 'simulation_gated_and_governor_reviewed'
    },
    requiredContract: [
      'group_wallet',
      'member_registry',
      'contribution_obligations',
      'payout_queue',
      'fundability_guard',
      'default_handler',
      'reserve_policy',
      'member_consent',
      'dispute_workflow',
      'runtime_monitors',
      'payout_ui',
      'reserve_ui'
    ],
    findings: [
      'default_handler_missing_post_payout_default_branch',
      'consent_missing_reserve_depletion_explanation',
      'simulation_fails_two_default_scenario'
    ],
    diagnosis: 'restricted_release_only_no_full_release',
    repair: ['add_post_payout_default_branch', 'update_consent', 'increase_reserve_or_adjust_payout_eligibility', 'rerun_two_default_simulation', 'route_to_governor']
  },
  school_fee_wallet: {
    intent: 'relatives_contribute_to_child_school_fees_money_only_goes_to_school',
    classification: {
      family: 'purpose_bound_savings',
      type: 'restricted_goal_wallet',
      subtype: 'school_fee_contribution_wallet',
      actorTopology: 'guardian_child_beneficiary_contributors_school_payee',
      moneyBehavior: ['contribution', 'restriction', 'approved_payee_payment'],
      riskType: ['misuse_prevention', 'contributor_trust', 'guardian_control'],
      complianceTag: ['minor_guardian_finance', 'restricted_purpose_funds'],
      runtimeType: 'long_lived_due_date_monitored',
      releaseMode: 'user_confirmed_or_approved_payee_auto_pay'
    },
    requiredContract: [
      'guardian_role',
      'child_beneficiary',
      'contributor_links',
      'approved_school_payee',
      'invoice_verification',
      'restricted_fund_state',
      'payment_release_guard',
      'contributor_receipt',
      'emergency_override',
      'audit_trail',
      'due_date_monitor'
    ],
    findings: [
      'approved_payee_guard_missing',
      'invoice_verification_missing',
      'emergency_override_missing',
      'ui_shows_generic_cash_balance'
    ],
    diagnosis: 'invalid_restricted_wallet',
    repair: ['add_approved_payee_guard', 'add_invoice_verification', 'add_emergency_override_policy', 'change_ui_to_protected_school_fee_money', 'add_unapproved_payee_withdrawal_test']
  }
})

export const TYPE_SYSTEM_VS_DOCTOR = Object.freeze({
  capabilityTypeSystem: 'defines_what_the_capability_is_and_what_it_must_contain',
  capabilityDoctor: 'checks_whether_the_capability_satisfies_that_definition_and_remains_healthy',
  shorthand: {
    typeSystem: 'anatomy_constitution',
    doctor: 'diagnosis_repair_strategy_safety_officer'
  }
})

export const AURA_FREEDOM_SAFETY_SCALE_FOUNDATION = Object.freeze({
  freedom: 'users_describe_new_financial_products',
  safety: 'doctor_prevents_broken_or_harmful_products',
  scale: 'every_capability_is_classified_contracted_versioned_and_governed'
})

export const CAPABILITY_GENESIS_STACK = Object.freeze([
  'product_intent_interpreter',
  'aura_product_specification_language',
  'financial_physics_engine',
  'composition_algebra',
  'capability_type_system',
  'primitive_registry',
  'product_composer',
  'capability_pack_generator',
  'capability_doctor',
  'simulation_engine',
  'compliance_jurisdiction_governor',
  'kernel_contract_builder',
  'ui_ux_composer',
  'runtime_execution_engine',
  'runtime_watchtower',
  'outcome_learning_engine',
  'versioning_migration_marketplace_layer'
])

export const FINAL_CAPABILITY_TYPE_SYSTEM_DEFINITION = Object.freeze({
  role: 'formal_classification_contract_and_validation_system_for_every_capability',
  defines: [
    'capability_families',
    'subtypes',
    'required_actors',
    'money_states',
    'primitives',
    'algorithms',
    'ui_surfaces',
    'consent_rules',
    'risk_tags',
    'compliance_tags',
    'runtime_monitors',
    'autonomy_level',
    'release_mode',
    'lifecycle_requirements'
  ]
})

export const FINAL_CAPABILITY_DOCTOR_DEFINITION = Object.freeze({
  role: 'diagnostic_and_repair_engine_for_capabilities',
  checks: [
    'well_typed',
    'correctly_composed',
    'financially_valid',
    'ledger_safe',
    'consent_complete',
    'compliant_enough_for_review',
    'properly_monitored',
    'understandable_to_users',
    'healthy_at_runtime',
    'ready_for_release'
  ],
  actions: ['prescribe_repairs', 'patch', 'rollback', 'review', 'pause', 'retire']
})

export const FORMLESS_BANKING_OPERATING_MODEL = Object.freeze([
  'user_sees_freedom',
  'aura_enforces_structure',
  'user_describes_intent',
  'aura_types_the_capability',
  'aura_composes_the_parts',
  'aura_doctors_the_result',
  'aura_simulates_the_behavior',
  'aura_governs_the_risk',
  'aura_executes_through_the_kernel',
  'aura_monitors_the_runtime',
  'aura_improves_the_product_over_time'
])

export const CAPABILITY_HEALTH_SCORE_WEIGHTS = Object.freeze({
  typeCompleteness: 0.15,
  compositionValidity: 0.15,
  ledgerIntegrity: 0.15,
  consentDisclosureCompleteness: 0.1,
  riskMitigation: 0.1,
  runtimeHealth: 0.1,
  simulationPerformance: 0.1,
  complianceReadiness: 0.05,
  uxTruthfulness: 0.05,
  outcomePerformance: 0.05
})

export const DOCTOR_SEVERITY_LEVELS = Object.freeze({
  info: 'improvement_suggested_no_release_impact',
  warning: 'should_be_fixed_release_may_continue_with_monitoring',
  serious: 'release_restricted_needs_repair_or_review',
  critical: 'money_movement_or_user_harm_risk_pause_affected_path',
  fatal: 'capability_cannot_run_block_or_rollback_immediately'
})

export const SCHOOL_FEE_WALLET_TYPE_DIMENSIONS = Object.freeze({
  intent_type: 'pay_school_fees',
  financial_behavior_type: 'restricted_goal_wallet',
  actor_topology_type: 'guardian_beneficiary_contributor_payee',
  restriction_type: 'purpose_bound_funds',
  compliance_type: 'minor_guardian_financial_control',
  risk_type: 'misuse_prevention',
  ui_experience_type: 'protected_wallet_experience',
  runtime_type: 'due_date_monitored_wallet'
})

export const SAFESEND_TYPE_DIMENSIONS = Object.freeze({
  domain_type: 'payment',
  financial_behavior_type: 'conditional_transfer',
  control_type: 'escrow_claimable_transfer',
  verification_type: 'evidence_gated_release',
  risk_type: 'counterparty_non_performance_protection',
  compliance_type: 'custody_or_escrow_like_review_candidate',
  ui_experience_type: 'protected_payment_timeline',
  runtime_type: 'proof_deadline_monitored_payment'
})

export function classifyCapabilityFromIntent(intent) {
  const lower = intent.toLowerCase()

  if (lower.includes('collect money') && lower.includes('pay one person') && lower.includes('week')) {
    return {
      type: PROTECTED_NO_POT_SHRINK_SUSU_TYPE_CONTRACT.capabilityType,
      subtype: PROTECTED_NO_POT_SHRINK_SUSU_TYPE_CONTRACT.subtype,
      riskClass: PROTECTED_NO_POT_SHRINK_SUSU_TYPE_CONTRACT.riskClass,
      requiredReleaseMode: PROTECTED_NO_POT_SHRINK_SUSU_TYPE_CONTRACT.requiredReleaseMode,
      possibleTypes: [
        'contribution_collection_tool',
        'group_savings_circle',
        'rotating_payout_system',
        'pooled_financial_arrangement',
        'credit_like_product',
        'crowdfunding_arrangement',
        'cooperative_contribution_plan',
        'high_risk_default_prone_product'
      ],
      requiredRules: PROTECTED_NO_POT_SHRINK_SUSU_TYPE_CONTRACT.requiredRules,
      requiredPrimitives: PROTECTED_NO_POT_SHRINK_SUSU_TYPE_CONTRACT.requiredPrimitives,
      requiredConsent: ['member_contribution_consent', 'default_consequence_consent'],
      requiredSimulations: ['missed_contribution', 'two_defaults', 'reserve_depletion'],
      requiredComplianceChecks: ['pooled_contribution_review'],
      requiredRuntimeMonitors: PROTECTED_NO_POT_SHRINK_SUSU_TYPE_CONTRACT.requiredRuntimeMonitors,
      requiredUiWarnings: ['default_exposure_warning', 'payout_order_disclosure']
    }
  }

  if (lower.includes('school')) return { type: 'school_fee_wallet' }
  if (lower.includes('contractor') || lower.includes('proof')) return { type: 'contractor_escrow' }
  if (lower.includes('salary') || lower.includes('split')) return { type: 'salary_split' }
  if (lower.includes('advance') || lower.includes('repay')) return { type: 'liquidity_advance' }
  if (lower.includes('child')) return { type: 'child_controlled_spending_wallet' }

  return {
    type: 'unknown_capability',
    requiredClarification: ['intent_category', 'money_state', 'actors', 'risk_exposure']
  }
}

export function classifyCapabilityFromPhysics(physics) {
  const signals = new Set(physics.signals ?? physics.extracted ?? [])

  if (
    signals.has('conditional_payment') &&
    signals.has('counterparty_performance_risk') &&
    signals.has('escrowed_funds') &&
    signals.has('proof_condition')
  ) {
    return {
      capabilityFamily: 'payment_safety',
      capabilityType: 'conditional_payment',
      subtype: 'proof_gated_escrow_payment',
      possibleProduct: 'contractor_milestone_payment',
      requirements: [
        'escrow',
        'release_condition',
        'proof_submission',
        'proof_validation',
        'refund_path',
        'dispute_path',
        'consent',
        'audit'
      ]
    }
  }

  if (signals.has('restricted_funds') && signals.has('education_payee')) {
    return {
      capabilityFamily: 'education_finance',
      capabilityType: 'restricted_goal_wallet',
      subtype: 'school_fee_wallet',
      requirements: ['approved_payee', 'purpose_restriction', 'due_date_monitor', 'guardian_consent']
    }
  }

  return {
    capabilityFamily: 'unknown',
    capabilityType: 'unknown',
    subtype: 'needs_more_physics',
    requirements: ['extract_money_states', 'extract_actors', 'extract_claims', 'extract_failure_paths']
  }
}

export function assignCapabilityTypeDimensions(capabilityType) {
  if (capabilityType === 'school_fee_wallet') return SCHOOL_FEE_WALLET_TYPE_DIMENSIONS
  if (capabilityType === 'contractor_escrow' || capabilityType === 'proof_gated_escrow_payment') {
    return SAFESEND_TYPE_DIMENSIONS
  }
  if (capabilityType === 'rotating_contribution_capability') {
    return {
      intent_type: 'run_group_savings',
      financial_behavior_type: 'pooled_rotating_contribution',
      actor_topology_type: 'organizer_members_payout_recipient',
      obligation_type: 'recurring_member_contribution',
      claim_type: 'scheduled_payout_claim',
      control_type: 'payout_order_and_reserve_control',
      verification_type: 'contribution_settlement',
      risk_type: 'default_exposure',
      compliance_type: 'pooled_contribution_review',
      runtime_type: 'contribution_and_reserve_monitored',
      ui_experience_type: 'payout_timeline_with_default_disclosures',
      algorithm_type: 'payout_order_and_fundability',
      autonomy_type: 'restricted_execution_capability',
      release_mode_type: 'simulation_gated_and_governor_reviewed',
      lifecycle_type: 'recurring_cycle'
    }
  }

  return {
    intent_type: 'unknown',
    lifecycle_type: 'requires_classification'
  }
}

export function mapIntentTypeToCapabilityPrimitives(intentType) {
  const map = {
    protect_money: ['restricted_goal_wallet', 'priority_allocation', 'due_date_monitor', 'emergency_unlock', 'shortfall_alert'],
    pay_contractor: ['escrow', 'milestone_release', 'photo_gps_proof', 'dispute_workflow', 'conditional_claim'],
    send_money_safely: ['escrow', 'recipient_verification', 'refund_timer', 'dispute_workflow'],
    run_group_savings: ['group_wallet', 'recurring_contribution', 'rotating_payout_queue', 'default_handler', 'reserve_pool']
  }

  return {
    intentType,
    primitives: map[intentType] ?? ['clarify_intent', 'extract_financial_physics']
  }
}

export function validateMoneyStateContract(contract) {
  const issues = []
  const inputStates = contract.inputStates ?? []
  const outputStates = contract.outputStates ?? []
  const mutateStates = new Set(contract.mutateStates ?? [])
  const neverTouchStates = contract.neverTouchStates ?? []

  if (!inputStates.length) issues.push('missing_input_states')
  if (!outputStates.length) issues.push('missing_output_states')
  if (neverTouchStates.some((state) => mutateStates.has(state))) issues.push('mutates_forbidden_state')
  if (contract.uiState === 'available_spending_money' && inputStates.includes('escrowed_funds')) {
    issues.push('escrowed_funds_shown_as_available')
  }

  return {
    valid: issues.length === 0,
    issues,
    knownStates: MONEY_STATE_TYPES
  }
}

export function validateActorTopology(topology) {
  const requiredRoles = topology.requiredRoles ?? []
  const presentRoles = new Set(topology.roles ?? [])
  const missingRoles = requiredRoles.filter((role) => !presentRoles.has(role))

  return {
    valid: missingRoles.length === 0 && ACTOR_TOPOLOGY_TYPES.includes(topology.type),
    missingRoles,
    knownTopology: ACTOR_TOPOLOGY_TYPES.includes(topology.type),
    requiredRolesCatalog: CAPABILITY_ACTOR_ROLES
  }
}

export function validateObligationContract(obligationType, contract = {}) {
  if (obligationType === 'no_obligation') {
    return { valid: true, missing: [], obligationType }
  }

  const missing = OBLIGATION_CONTRACT_FIELDS.filter((field) => contract[field] === undefined)

  return {
    valid: missing.length === 0 && OBLIGATION_TYPES.includes(obligationType),
    missing,
    obligationType,
    knownTypes: OBLIGATION_TYPES
  }
}

export function validateClaimContract(claimType, contract = {}) {
  if (claimType === 'no_claim') {
    return { valid: true, missing: [], claimType }
  }

  const required = [
    'claimant',
    'funds',
    'maturityCondition',
    'priority',
    'canExpire',
    'canBeDisputed',
    'canBeRevoked',
    'disputePath'
  ]
  const missing = required.filter((field) => contract[field] === undefined)

  return {
    valid: missing.length === 0 && CLAIM_TYPES.includes(claimType),
    missing,
    claimType,
    knownTypes: CLAIM_TYPES
  }
}

export function validateControlContract(controlType, contract = {}) {
  const issues = []
  const actions = contract.actions ?? []

  if (!CONTROL_TYPES.includes(controlType)) issues.push('unknown_control_type')
  if (!contract.controller) issues.push('missing_controller')
  if (!actions.length) issues.push('missing_controlled_actions')
  if (
    controlType === 'group_governed' &&
    actions.includes('change_payout_rules') &&
    !contract.memberConsentRequired
  ) {
    issues.push('payout_rule_change_without_member_consent')
  }
  if (controlType === 'business_admin_controlled' && !contract.approvalPath) {
    issues.push('missing_admin_approval_path')
  }

  return {
    valid: issues.length === 0,
    issues,
    controlType,
    knownTypes: CONTROL_TYPES
  }
}

export function recommendVerificationTypes(capabilityType) {
  const recommendations = {
    contractor_escrow: ['identity_verification', 'gps_verification', 'photo_verification', 'multi_party_approval'],
    school_fee_wallet: ['school_verification', 'invoice_verification', 'approved_payee_verification'],
    rotating_contribution_capability: ['identity_verification', 'payment_history', 'bts_threshold']
  }

  return {
    capabilityType,
    requiredVerification: recommendations[capabilityType] ?? ['identity_verification']
  }
}

export function validateRiskProfile(profile = {}) {
  const missing = ['introduced', 'reduced', 'transferred', 'requiredMitigations', 'residualRisk']
    .filter((field) => profile[field] === undefined)
  const introduced = profile.introduced ?? []
  const requiredMitigations = new Set(profile.requiredMitigations ?? [])
  const unmitigated = introduced.filter((risk) => {
    return !requiredMitigations.has(risk) && !requiredMitigations.has(`${risk}_mitigation`)
  })

  return {
    valid: missing.length === 0 && unmitigated.length === 0,
    missing,
    unmitigated,
    knownTypes: RISK_TYPES
  }
}

export function classifyComplianceTagsFromComponents(components) {
  const set = new Set(components)
  const tags = []

  if (set.has('reserve_pool') && set.has('loss_coverage')) tags.push('insurance_like')
  if (set.has('advance_now') && set.has('repay_later')) tags.push('credit_like')
  if (set.has('escrow_hold') && set.has('conditional_release')) tags.push('escrow_like', 'custody_like')
  if (set.has('school_fee_restriction')) tags.push('minor_guardian_finance', 'bill_payment')

  return {
    tags: [...new Set(tags)],
    governorReviewRequired: tags.length > 0,
    knownTypes: COMPLIANCE_TAG_TYPES
  }
}

export function validateRuntimeType(runtimeType, contract = {}) {
  const issues = []

  if (!RUNTIME_TYPES.includes(runtimeType)) issues.push('unknown_runtime_type')
  if (['recurring', 'long_lived', 'adaptive', 'continuously_monitored'].includes(runtimeType)) {
    if (!contract.monitors?.length) issues.push('missing_runtime_monitors')
  }
  if (runtimeType === 'adaptive' && !contract.preapprovedBranches?.length) {
    issues.push('missing_preapproved_runtime_branches')
  }

  return {
    valid: issues.length === 0,
    issues,
    runtimeType,
    knownTypes: RUNTIME_TYPES
  }
}

export function validateUiExperienceContract(uiTypes, moneyStates = []) {
  const issues = []
  const uiSet = new Set(uiTypes)
  const states = new Set(moneyStates)

  if (states.has('locked_funds') && !uiSet.has('protected_money_card')) issues.push('locked_funds_need_protected_ui')
  if (states.has('escrowed_funds') && !uiSet.has('escrow_timeline')) issues.push('escrowed_funds_need_escrow_timeline')
  if (states.has('disputed_funds') && !uiSet.has('dispute_panel')) issues.push('disputed_funds_need_dispute_panel')
  if (states.has('restricted_funds') && !uiSet.has('restricted_wallet_interface')) {
    issues.push('restricted_funds_need_restricted_wallet_ui')
  }

  return {
    valid: issues.length === 0,
    issues,
    knownTypes: UI_EXPERIENCE_TYPES
  }
}

export function validateAlgorithmSetForCapability(capabilityType, algorithms) {
  const required = CAPABILITY_ALGORITHM_REQUIREMENTS[capabilityType] ?? []
  const present = new Set(algorithms)
  const missing = required.filter((algorithm) => !present.has(algorithm))
  const unknown = algorithms.filter((algorithm) => !ALGORITHM_TYPES.includes(algorithm))

  return {
    valid: missing.length === 0 && unknown.length === 0,
    missing,
    unknown,
    required,
    knownTypes: ALGORITHM_TYPES
  }
}

export function recommendAutonomyLevel({ capabilityType, amount = 0, riskTags = [] }) {
  if (riskTags.includes('insurance_like') || riskTags.includes('credit_like')) {
    return 'governor_restricted_automation'
  }
  if (capabilityType === 'budget_insight') return 'recommend_only'
  if (capabilityType === 'salary_split') return 'rule_based_auto_execution'
  if (capabilityType === 'contractor_escrow' && amount >= 500000) return 'human_supervised_auto_execution'
  if (capabilityType === 'rotating_contribution_capability') return 'blocked_without_human_review'
  return 'user_confirmed_execution'
}

export function recommendCapabilityReleaseMode({ capabilityType, riskTags = [], testsPassed = false, consentCaptured = false }) {
  if (riskTags.includes('insurance_like')) return 'blocked'
  if (riskTags.includes('credit_like')) return 'jurisdiction_restricted'
  if (capabilityType === 'simple_reminder') return 'full_live_release'
  if (capabilityType === 'salary_split') {
    return testsPassed && consentCaptured ? 'full_live_release' : 'internal_test'
  }
  if (capabilityType === 'contractor_escrow') return 'human_supervised_live'
  if (capabilityType === 'rotating_contribution_capability') return 'admin_reviewed'
  return 'draft_only'
}

export function validateLifecycleProgression(states) {
  const order = new Map(LIFECYCLE_STATES.map((state, index) => [state, index]))
  const issues = []

  states.forEach((state, index) => {
    if (!order.has(state)) issues.push(`unknown_state:${state}`)
    if (index > 0 && order.get(state) < order.get(states[index - 1])) {
      issues.push(`out_of_order:${state}`)
    }
  })

  return {
    valid: issues.length === 0,
    issues,
    knownStates: LIFECYCLE_STATES
  }
}

export function validateCapabilityTypeSignature(signature) {
  const missing = CAPABILITY_TYPE_SIGNATURE_FIELDS.filter((field) => signature[field] === undefined)
  const issues = [...missing]

  if (!signature.version?.match(/^\d+\.\d+\.\d+$/)) issues.push('version_must_be_semver')
  if (!signature.required_primitives?.length) issues.push('missing_required_primitives')
  if (!signature.required_monitors?.length) issues.push('missing_required_monitors')
  if (!signature.doctor_policy?.pre_release_check_required) issues.push('doctor_pre_release_check_missing')

  return {
    valid: issues.length === 0,
    issues,
    fields: CAPABILITY_TYPE_SIGNATURE_FIELDS
  }
}

export function validateCapabilityPackStructure(pack) {
  const files = new Set(pack.files ?? [])
  const missingFiles = CAPABILITY_PACK_FILES.filter((file) => !files.has(file))
  const missingSections = Object.entries(CAPABILITY_PACK_SECTION_DEFINITIONS)
    .flatMap(([file, sections]) => {
      const presentSections = new Set(pack.sections?.[file] ?? [])
      return sections
        .filter((section) => !presentSections.has(section))
        .map((section) => `${file}:${section}`)
    })

  return {
    valid: missingFiles.length === 0 && missingSections.length === 0,
    missingFiles,
    missingSections,
    requiredFiles: CAPABILITY_PACK_FILES
  }
}

export function createUniversalCapabilityInterface(capability) {
  const approvedActions = new Set(capability.approvedActions ?? ['create', 'activate', 'pause', 'resume', 'notify', 'escalate'])

  return {
    describe() {
      return {
        id: capability.id,
        type: capability.type,
        intent: capability.intent,
        actors: capability.actors ?? [],
        primitives: capability.components ?? [],
        risks: capability.riskTags ?? capability.failureModes ?? []
      }
    },
    validate() {
      const packageValidation = validateCapabilityPackage(capability)
      const health = diagnoseCapabilityHealth(capability)

      return {
        valid: packageValidation.valid && health.healthy,
        typeCompleteness: packageValidation.missing.length === 0,
        compositionCorrectness: Boolean(capability.components?.length),
        ledgerCorrectness: Boolean(capability.ledgerEffects?.length),
        consentCoverage: Boolean(capability.consentRequirements?.length),
        policyCompliance: capability.complianceTags ?? [],
        failurePaths: capability.recoveryPaths ?? [],
        uiTruthfulness: Boolean(capability.uiSurfaces?.length),
        findings: health.findings
      }
    },
    simulate() {
      return {
        normalScenarios: capability.simulationRequirements ?? [],
        failureScenarios: capability.failureModes ?? [],
        fraudScenarios: (capability.riskTags ?? []).filter((risk) => risk.includes('fraud')),
        stressScenarios: ['threshold_pressure', 'deadline_pressure'],
        edgeCases: ['missing_consent', 'state_transition_conflict']
      }
    },
    explain() {
      return {
        user: capability.explanationLogic?.[0] ?? 'explain_capability_to_user',
        admin: 'explain_type_contract_and_release_mode',
        audit: 'explain_ledger_state_and_policy_decision',
        decisionReason: 'allowed_or_blocked_by_capability_contract',
        nextStep: 'follow_release_mode_and_doctor_policy'
      }
    },
    execute(action) {
      const allowed = approvedActions.has(action)

      return {
        action,
        allowed,
        result: allowed ? 'queued_within_approved_limits' : 'blocked_by_capability_contract'
      }
    },
    monitor() {
      return {
        signals: CAPABILITY_MONITOR_SIGNALS,
        configured: capability.runtimeMonitors ?? []
      }
    },
    diagnose() {
      return diagnoseCapabilityHealth(capability)
    },
    migrate(targetVersion) {
      return {
        targetVersion,
        actions: ['version_upgrade', 'rollback_if_needed', 'policy_migration', 'consent_renewal', 'state_migration', 'ui_migration']
      }
    }
  }
}

export function validateUniversalCapabilityInterface(instance) {
  const missing = UNIVERSAL_CAPABILITY_INTERFACE_METHODS.filter((method) => typeof instance[method] !== 'function')

  return {
    valid: missing.length === 0,
    missing,
    methods: UNIVERSAL_CAPABILITY_INTERFACE_METHODS
  }
}

export function validateCapabilityRegistryRecord(record) {
  const missing = CAPABILITY_REGISTRY_FIELDS.filter((field) => record[field] === undefined)
  const issues = [...missing]

  if (record.health_score < 80) issues.push('health_score_below_release_threshold')
  if (!record.compliance_status?.governor_result) issues.push('missing_governor_result')
  if (!record.rollback_version) issues.push('missing_rollback_version')

  return {
    valid: issues.length === 0,
    issues,
    fields: CAPABILITY_REGISTRY_FIELDS
  }
}

export function compileCapability(proposal) {
  const errors = []
  const components = new Set(proposal.components ?? [])
  const consents = new Set(proposal.consents ?? [])
  const monitors = new Set(proposal.monitors ?? [])

  if (!proposal.type) errors.push({ category: 'type_error', code: 'capability_type_missing' })
  if (!proposal.inputs?.length) errors.push({ category: 'type_error', code: 'inputs_missing' })
  if (!proposal.outputs?.length) errors.push({ category: 'type_error', code: 'outputs_missing' })
  if (!proposal.actors?.length) errors.push({ category: 'actor_type_errors', code: 'required_actor_missing' })
  if (!proposal.permissions?.length) errors.push({ category: 'actor_type_errors', code: 'permissions_missing' })
  if (!proposal.ledgerBalanced) errors.push({ category: 'ledger_type_errors', code: 'refund_path_unbalanced' })
  if (!proposal.policies?.length) errors.push({ category: 'policy_type_errors', code: 'policies_missing' })
  if (!proposal.explanations?.length) errors.push({ category: 'ui_type_errors', code: 'explanations_missing' })

  if (proposal.type === 'rotating_contribution_capability') {
    if (!components.has('default_handler')) {
      errors.push({
        category: 'type_error',
        code: 'rotating_contribution_requires_default_handler'
      })
    }
    if (proposal.policies?.includes('no_pot_shrink_policy') && !components.has('reserve_pool')) {
      errors.push({
        category: 'risk_error',
        code: 'no_pot_shrink_requires_reserve_pool_or_approved_coverage'
      })
    }
    if (!consents.has('post_payout_obligation_disclosure')) {
      errors.push({
        category: 'consent_type_errors',
        code: 'member_consent_missing_post_payout_obligation_disclosure'
      })
    }
    if (!monitors.has('reserve_health_monitor')) {
      errors.push({
        category: 'runtime_type_errors',
        code: 'reserve_health_monitor_missing'
      })
    }
  }

  return {
    compiled: errors.length === 0,
    errors,
    releaseDecision: errors.length ? 'not_releasable' : 'releasable'
  }
}

export function validateAutonomyContract(contract) {
  const missing = Object.keys(DEFAULT_AUTONOMY_CONTRACT).filter((action) => contract[action] === undefined)
  const issues = [...missing]

  if (contract.release_funds === 'automatic') issues.push('release_funds_cannot_be_unrestricted_automatic')
  if (contract.override_restriction !== 'human_review_required') issues.push('restriction_override_must_require_human_review')
  if (contract.change_group_rules !== 'member_reconsent_required') issues.push('group_rule_changes_require_member_reconsent')
  if (contract.expand_limits !== 'governor_review_required') issues.push('limit_expansion_requires_governor_review')

  return {
    valid: issues.length === 0,
    issues,
    requiredContract: DEFAULT_AUTONOMY_CONTRACT
  }
}

export function evaluateTenantCapabilityConfig(config) {
  if (config.blockedFlows?.includes('escrow_like_flow')) {
    return {
      allowed: false,
      mode: 'blocked_for_tenant',
      reason: 'tenant_blocks_escrow_like_flow'
    }
  }

  return {
    allowed: true,
    mode: config.humanReviewAbove ? 'tenant_limited_live' : 'tenant_default_live',
    maxAutomaticRelease: config.maxAutomaticRelease,
    verification: config.verification ?? []
  }
}

export function diagnosePreCreationRequest(request) {
  const lower = request.toLowerCase()
  const findings = []

  if (lower.includes('pool') && lower.includes('cover')) findings.push('potential_pooled_risk')
  if (lower.includes('fails') && lower.includes('others cover')) findings.push('potential_insurance_like_behavior')
  if (lower.includes('contribute')) findings.push('default_exposure')
  if (findings.length) {
    findings.push('consent_requirement', 'reserve_fundability_requirement', 'possible_compliance_escalation')
  }

  return {
    findings,
    diagnosis: findings.length
      ? 'not_just_group_wallet_pooled_loss_sharing_behavior'
      : 'low_risk_request',
    required: findings.length
      ? ['governor_review', 'member_consent', 'default_rules', 'reserve_model', 'simulation']
      : ['standard_type_classification']
  }
}

export function diagnosePreReleaseReadiness(capability) {
  const checks = {
    fullyTyped: Boolean(capability.type),
    compositionGraphValid: capability.compositionGraphValid === true,
    dependenciesAvailable: capability.dependenciesAvailable === true,
    rulesPresent: Boolean(capability.rules?.length),
    ledgerMappingsComplete: Boolean(capability.ledgerEffects?.length),
    failurePathsComplete: Boolean(capability.recoveryPaths?.length),
    simulationsPassed: capability.simulationsPassed === true,
    consentScreensComplete: Boolean(capability.consentRequirements?.length),
    uiSurfacesTruthful: capability.uiSurfacesTruthful === true,
    runtimeMonitorsAttached: Boolean(capability.runtimeMonitors?.length),
    releaseModeAppropriate: capability.releaseMode !== 'full_live_release' || capability.riskClass !== 'high'
  }
  const failed = Object.entries(checks)
    .filter(([, passed]) => !passed)
    .map(([check]) => check)

  return {
    releasable: failed.length === 0,
    failed,
    releaseDecision: failed.length ? 'release_blocked_until_fixed' : 'release_ready'
  }
}

export function diagnoseTypeCompleteness(capability, requiredElements) {
  const present = new Set([
    ...(capability.components ?? []),
    ...(capability.consents ?? []),
    ...(capability.runtimeMonitors ?? []),
    ...(capability.recoveryPaths ?? []),
    ...(capability.rules ?? [])
  ])
  const missing = requiredElements.filter((element) => !present.has(element))
  const score = Math.round(((requiredElements.length - missing.length) / requiredElements.length) * 100)

  return {
    score,
    releaseStatus: missing.length ? 'not_releasable' : 'releasable',
    missing,
    requiredRepairs: missing.map((element) => `add_${element}`)
  }
}

export function diagnoseCompositionConnection(connection) {
  const issues = []

  if (connection.fromOutputState !== connection.toInputState) {
    issues.push('state_continuity_failed')
  }
  if (connection.ledgerBalanced === false) issues.push('ledger_conservation_failed')
  if (connection.actorRoleBound === false) issues.push('actor_role_binding_failed')
  if (connection.consentCovered === false) issues.push('consent_coverage_failed')
  if (connection.guardSufficient === false) issues.push('guard_sufficiency_failed')
  if (connection.failureComplete === false) issues.push('failure_completeness_failed')
  if (connection.riskMitigated === false) issues.push('risk_mitigation_failed')
  if (connection.monitorCovered === false) issues.push('monitor_coverage_failed')
  if (connection.uiBound === false) issues.push('ui_binding_failed')
  if (connection.dependencyHealthy === false) issues.push('dependency_health_failed')

  return {
    valid: issues.length === 0,
    issues,
    diagnosis: issues.length
      ? `${connection.fromComponent}_cannot_feed_${connection.toComponent}`
      : 'composition_connection_valid',
    suggestedRepair: issues.includes('state_continuity_failed')
      ? ['insert_proof_verification_between_photo_upload_and_conditional_release', 'add_manual_review_fallback_for_low_confidence_proof']
      : []
  }
}

export function diagnoseRuntimeHealth(metrics) {
  const findings = []

  if (metrics.eventsFlowing === false) findings.push('events_not_flowing')
  if (metrics.invalidStateTransitions > 0) findings.push('invalid_state_transitions')
  if (metrics.monitorsFiring === false) findings.push('monitors_not_firing')
  if (metrics.photoProofFirstFailureRate >= 0.3) findings.push('high_first_photo_proof_failure')
  if (metrics.disputeRateIncreasing) findings.push('disputes_increasing')
  if (metrics.manualReviewQueueOverloaded) findings.push('manual_review_queue_overloaded')
  if (metrics.consentAbandonmentRate >= 0.2) findings.push('consent_abandonment_high')
  if (metrics.supportTicketsIncreasing) findings.push('support_tickets_increasing')

  return {
    healthy: findings.length === 0,
    findings,
    likelyCause: findings.includes('high_first_photo_proof_failure')
      ? 'proof_instructions_unclear_or_confidence_threshold_too_strict'
      : 'runtime_health_within_expected_bounds',
    recommendedRepairs: findings.length
      ? [
          'improve_proof_instruction_ui',
          'add_sample_image_guide',
          'add_precheck_before_submission',
          'adjust_threshold_for_low_risk_transactions',
          'route_high_risk_cases_only_to_manual_review'
        ]
      : []
  }
}

export function diagnoseOutcomePerformance(capabilityType, metrics) {
  if (capabilityType === 'rent_shield') {
    const needsDesignChange = metrics.emergencyUnlockRate >= 0.15 || metrics.earlyUnlockMissedRentRisk === 'high'

    return {
      achievingGoal: metrics.underfundingReductionPercent >= 30 && !needsDesignChange,
      observed: {
        underfundingReductionPercent: metrics.underfundingReductionPercent,
        emergencyUnlockRate: metrics.emergencyUnlockRate,
        earlyUnlockMissedRentRisk: metrics.earlyUnlockMissedRentRisk
      },
      recommendations: needsDesignChange
        ? ['add_partial_unlock_option', 'add_consequence_preview', 'add_alternative_shortfall_plan', 'add_emergency_reason_tracking']
        : ['continue_monitoring']
    }
  }

  return {
    achievingGoal: true,
    observed: metrics,
    recommendations: ['continue_monitoring']
  }
}

export function diagnoseUserConfusion(signals) {
  const findings = []

  if (signals.consentScreenCancelsRepeated) findings.push('consent_screen_confusion')
  if (signals.asksWhatEscrowedMeans) findings.push('escrow_language_unclear')
  if (signals.restrictedWithdrawalAttempts >= 2) findings.push('purpose_restriction_not_understood')
  if (signals.pendingFundsMisreadAsAvailable) findings.push('pending_funds_confused_with_available')
  if (signals.disputesCorrectOutcomes) findings.push('correct_outcome_disputed')
  if (signals.proofSubmissionAbandoned) findings.push('proof_submission_confusing')
  if (signals.protectionOverridesTooOften) findings.push('protection_value_not_understood')

  return {
    confused: findings.length > 0,
    findings,
    diagnosis: findings.includes('purpose_restriction_not_understood')
      ? 'ui_not_clearly_communicating_purpose_restriction'
      : 'no_major_confusion_detected',
    repairs: findings.length
      ? [
          'rename_balance_to_protected_school_fee_money',
          'add_approved_payee_explanation',
          'disable_cash_withdrawal_with_clear_reason',
          'add_emergency_unlock_flow_with_consequence_explanation'
        ]
      : []
  }
}

export function diagnoseComplianceDrift(previousTags, currentComponents) {
  const previous = new Set(previousTags)
  const current = classifyComplianceTagsFromComponents(currentComponents).tags
  const currentSet = new Set(current)
  const changedToInsuranceLike = !previous.has('insurance_like') && currentSet.has('insurance_like')

  return {
    drifted: changedToInsuranceLike,
    previousTags,
    currentTags: current,
    diagnosis: changedToInsuranceLike
      ? 'classification_changed_to_insurance_like_risk_pooling_candidate'
      : 'no_material_compliance_drift',
    requiredAction: changedToInsuranceLike
      ? ['governor_review_required', 'pause_automatic_release_for_new_groups_until_reviewed']
      : []
  }
}

export function prescribeCapabilityRepair(diagnosisCode) {
  const prescriptions = {
    conditional_payment_missing_refund_path: [
      'add_refund_timer_mini_primitive',
      'bind_expiry_condition_to_escrowed_funds_state',
      'add_refund_ledger_mapping',
      'add_refund_explanation_ui',
      'add_test_case_proof_missing_after_deadline'
    ],
    missing_monitor: ['add_missing_monitor'],
    missing_consent: ['add_missing_consent'],
    missing_guard: ['add_missing_guard'],
    compliance_drift: ['escalate_to_governor', 'change_release_mode']
  }

  return {
    diagnosisCode,
    repairs: prescriptions[diagnosisCode] ?? ['run_capability_doctor_review'],
    repairTypes: CAPABILITY_REPAIR_TYPES
  }
}

export function recommendPatchRollbackOrRetire(issue) {
  if (['small_missing_ui_explanation', 'monitor_threshold_too_low', 'proof_instructions_unclear', 'non_critical_workflow_issue'].includes(issue)) {
    return 'patch'
  }
  if (['new_version_breaks_state_transition', 'ledger_mapping_regression', 'consent_migration_failed', 'dependency_update_causes_errors'].includes(issue)) {
    return 'rollback'
  }
  if (['runtime_risk_elevated', 'compliance_review_pending', 'simulation_failed_under_new_conditions'].includes(issue)) {
    return 'pause'
  }
  return 'retire'
}

export function inspectTypeContract(capability, required) {
  const present = new Set([
    ...(capability.components ?? []),
    ...(capability.states ?? []),
    ...(capability.actors ?? []),
    ...(capability.algorithms ?? []),
    ...(capability.runtimeMonitors ?? []),
    ...(capability.uiSurfaces ?? [])
  ])
  const missing = required.filter((item) => !present.has(item))

  return {
    inspector: 'type_contract_inspector',
    valid: missing.length === 0,
    missing,
    diagnosis: missing.includes('restriction_rule')
      ? 'restricted_goal_wallet_without_restriction_enforcement'
      : missing.length
        ? 'type_contract_incomplete'
        : 'type_contract_satisfied'
  }
}

export function inspectCompositionGraph(graph) {
  const nodes = new Set(graph.nodes ?? [])
  const connected = new Set((graph.edges ?? []).flatMap((edge) => [edge.from, edge.to]))
  const orphanComponents = [...nodes].filter((node) => !connected.has(node))
  const issues = []

  if (orphanComponents.length) issues.push('orphan_components')
  if (graph.hasCircularFlow) issues.push('circular_flows')
  if (!graph.allPathsTerminal) issues.push('paths_not_terminal')
  if (!graph.failedConditionsHandled) issues.push('failed_conditions_unhandled')
  if (!graph.stateOutputsValid) issues.push('invalid_state_output_to_input')
  if (!graph.guardsBeforeDangerousActions) issues.push('guards_not_before_dangerous_actions')
  if (graph.longLivedStates && !graph.monitorsAttached) issues.push('long_lived_state_missing_monitor')
  if (graph.hasEscrowReleasePath && !graph.hasEscrowRefundPath) issues.push('incomplete_terminal_coverage_escrow_can_stick')

  return {
    inspector: 'composition_graph_inspector',
    valid: issues.length === 0,
    issues,
    repair: issues.includes('incomplete_terminal_coverage_escrow_can_stick')
      ? ['add_refund_timer_or_dispute_resolution_terminal_path']
      : []
  }
}

export function inspectFinancialPhysics(capability) {
  const issues = []

  if (capability.promisesFullPayout && !capability.reservePresent) issues.push('fundability_invariant_cannot_be_guaranteed')
  if (capability.claimsValid === false) issues.push('claims_invalid')
  if (capability.obligationsDefined === false) issues.push('obligations_missing')
  if (capability.restrictionsEnforceable === false) issues.push('restrictions_not_enforceable')
  if (capability.defaultRulesPresent === false) issues.push('default_rules_missing')
  if (capability.riskExposureAssigned === false) issues.push('risk_exposure_unassigned')

  return {
    inspector: 'financial_physics_inspector',
    valid: issues.length === 0,
    issues,
    repair: issues.includes('fundability_invariant_cannot_be_guaranteed')
      ? ['add_reserve_pool', 'add_deposit', 'add_tail_lock', 'add_guarantor', 'lower_payout_guarantee', 'block_no_pot_shrink_claim']
      : []
  }
}

export function inspectLedgerIntegrity(ledger) {
  const issues = []

  if (!ledger.moneyMovementEntries) issues.push('money_movement_missing_ledger_entries')
  if (!ledger.holdReleaseRefundMapping) issues.push('hold_missing_release_refund_mapping')
  if (ledger.feeDeducted && !ledger.feeRecipientAccount) issues.push('fee_without_recipient_account')
  if (ledger.reserveDraw && !ledger.reserveSourceDestination) issues.push('reserve_draw_missing_source_destination')
  if (ledger.reversal && !ledger.compensationEntry) issues.push('reversal_missing_compensation_entry')
  if (ledger.doubleCredit) issues.push('double_credit')
  if (ledger.unbalancedDebit) issues.push('unbalanced_debit')
  if (ledger.phantomBalance) issues.push('phantom_balance')

  return {
    inspector: 'ledger_integrity_inspector',
    valid: issues.length === 0,
    issues,
    release: issues.length ? 'blocked' : 'allowed'
  }
}

export function inspectConsentDisclosure(exposures, consents) {
  const consentSet = new Set(consents)
  const missing = exposures.filter((exposure) => !consentSet.has(exposure.consent))

  return {
    inspector: 'consent_and_disclosure_inspector',
    valid: missing.length === 0,
    missing: missing.map((item) => item.consent),
    repair: missing.length ? ['update_consent_flow', 'require_reconsent_before_activation'] : []
  }
}

export function inspectCompliancePatterns(patterns) {
  const patternSet = new Set(patterns)
  const flags = []

  if (patternSet.has('advance_now_repay_later')) flags.push('credit_like_behavior')
  if (patternSet.has('pooled_loss_coverage')) flags.push('insurance_like_behavior')
  if (patternSet.has('deposit_taking_behavior')) flags.push('deposit_like_behavior')
  if (patternSet.has('investment_return_promise')) flags.push('investment_like_behavior')
  if (patternSet.has('cross_border_remittance')) flags.push('remittance_like_behavior')
  if (patternSet.has('business_payroll')) flags.push('payroll_like_behavior')
  if (patternSet.has('debt_collection')) flags.push('debt_collection_like_behavior')

  return {
    inspector: 'compliance_drift_inspector',
    valid: flags.length === 0,
    flags,
    requiredAction: flags.length ? ['governor_review_required'] : []
  }
}

export function inspectRiskAndAbuse(signals) {
  const issues = []

  if (signals.repeatedFakeDeliveryPhotos) issues.push('proof_fraud_pattern')
  if (signals.abuseSignalsIncreasing) issues.push('abuse_signals_increasing')
  if (signals.mitigationsSufficient === false) issues.push('mitigations_insufficient')
  if (signals.limitsTooHigh) issues.push('limits_too_high')
  if (signals.btsMisused) issues.push('bts_misuse')
  if (signals.exploitedPath) issues.push('bad_actor_exploiting_path')

  return {
    inspector: 'risk_and_abuse_inspector',
    valid: issues.length === 0,
    issues,
    repairs: issues.includes('proof_fraud_pattern')
      ? [
          'increase_proof_threshold',
          'require_gps_metadata',
          'add_device_consistency_check',
          'add_human_review_for_repeated_failures',
          'lower_automatic_release_limit',
          'update_bts_penalty'
        ]
      : []
  }
}

export function inspectRuntimeHealthSignals(metrics) {
  const issues = []

  if (metrics.contributionFailureRate >= 0.2 && metrics.previousContributionFailureRate <= 0.05) {
    issues.push('entering_high_default_risk_period')
  }
  if (metrics.monitorDowntime) issues.push('monitor_downtime')
  if (metrics.dependencyFailures) issues.push('dependency_failures')
  if (metrics.stateTransitionErrors) issues.push('state_transition_errors')

  return {
    inspector: 'runtime_health_inspector',
    healthy: issues.length === 0,
    issues,
    actions: issues.includes('entering_high_default_risk_period')
      ? ['warn_groups', 'tighten_payout_release', 'increase_reminders', 'delay_payout_if_fundability_risk_rises', 'route_affected_groups_to_risk_review']
      : []
  }
}

export function inspectUxTruth(uiState) {
  const issues = []

  if (uiState.lockedMoneyShownAsAvailable) issues.push('locked_money_shown_as_available')
  if (uiState.pendingFundsShownAsSettled) issues.push('pending_funds_shown_as_settled')
  if (uiState.escrowedMoneyShownAsReceived) issues.push('escrowed_money_shown_as_received')
  if (uiState.restrictedFundsShownAsCashBalance) issues.push('restricted_funds_shown_as_cash_balance')
  if (uiState.disputedPaymentShownAsComplete) issues.push('disputed_payment_shown_as_complete')
  if (uiState.consentCopyTooVague) issues.push('consent_copy_too_vague')
  if (uiState.warningHiddenTooDeeply) issues.push('warning_hidden_too_deeply')

  return {
    inspector: 'ux_truth_and_confusion_inspector',
    valid: issues.length === 0,
    issues,
    repair: issues.length
      ? ['display_total_protected_and_available_amounts_separately']
      : []
  }
}

export function inspectDependencyVersionChange(change) {
  const issues = []

  if (change.outputStateChanged) issues.push('output_state_changed')
  if (change.confidenceThresholdChanged) issues.push('confidence_threshold_changed')
  if (change.failureBehaviorChanged) issues.push('failure_behavior_changed')
  if (change.requiresNewUiCopy) issues.push('new_ui_copy_required')
  if (change.requiresNewConsent) issues.push('new_consent_required')
  if (change.breaksTests) issues.push('tests_broken')

  return {
    inspector: 'dependency_and_version_inspector',
    safe: issues.length === 0,
    issues,
    action: issues.length ? ['hold_upgrade', 'rollback', 'require_migration'] : ['allow_upgrade']
  }
}

export function inspectSimulationResults(results) {
  const passed = new Set(results.passed ?? [])
  const failed = SUSU_MANDATORY_SIMULATION_SCENARIOS.filter((scenario) => !passed.has(scenario))

  return {
    inspector: 'simulation_result_inspector',
    releaseAllowed: failed.length === 0,
    failed,
    output: failed.includes('two_members_default') || failed.includes('reserve_depleted')
      ? 'simulation_failed_under_two_default_or_reserve_depletion_scenario'
      : 'simulation_passed',
    recommendedRepair: failed.length
      ? ['increase_deposit', 'adjust_payout_order', 'reduce_group_size', 'increase_reserve_contribution', 'remove_no_pot_shrink_guarantee']
      : []
  }
}

export function inspectTestCoverage(coverage) {
  const present = new Set(coverage.categories ?? [])
  const missing = TEST_COVERAGE_CATEGORIES.filter((category) => !present.has(category))

  return {
    inspector: 'test_coverage_inspector',
    sufficient: missing.length === 0,
    missing,
    release: missing.length ? 'blocked_or_review_required' : 'allowed'
  }
}

export function inspectOutcomePerformanceSignals(capabilityType, metrics) {
  if (capabilityType === 'smart_salary_split') {
    const poorOutcome = !metrics.obligationsFundedOnTime ||
      metrics.overrideRate > 0.2 ||
      metrics.setupAbandonmentRate > 0.2 ||
      !metrics.protectedWalletsReduceMissedPayments

    return {
      inspector: 'outcome_performance_inspector',
      goodOutcome: !poorOutcome,
      recommendations: poorOutcome
        ? ['change_ux', 'change_default_rules', 'improve_explanation', 'adjust_priority_waterfall', 'add_smarter_recommendations']
        : ['continue_monitoring']
    }
  }

  return {
    inspector: 'outcome_performance_inspector',
    goodOutcome: true,
    recommendations: ['continue_monitoring']
  }
}

export function planCapabilityRepair(finding) {
  if (finding === 'restricted_wallet_allows_unrestricted_transfer') {
    return {
      severity: 'critical',
      steps: [
        'remove_generic_transfer_primitive_from_restricted_wallet_flow',
        'insert_approved_payee_guard_before_outgoing_payment',
        'add_emergency_unlock_workflow_for_exceptions',
        'add_ui_explanation_for_blocked_withdrawal',
        'add_test_restricted_funds_cannot_transfer_to_unapproved_recipient',
        'require_revalidation',
        'rerun_simulation'
      ]
    }
  }

  return {
    severity: 'review',
    steps: ['run_doctor_inspection', 'create_repair_plan']
  }
}

export function controlLifecycleForDoctorIssue(issue) {
  const actionMap = {
    proof_verification_bug: ['disable_unsafe_path', 'require_human_review', 'patch_dependency', 'rerun_tests'],
    elevated_runtime_risk: ['reduce_limit', 'pause_new_activations', 'route_to_risk_review'],
    compliance_drift: ['switch_release_mode', 'escalate_to_governor', 'pause_new_activations'],
    ledger_regression: ['pause_all_active_instances', 'rollback_version', 'migrate_users'],
    unsafe_repeated_repairs: ['retire_capability']
  }

  return {
    issue,
    actions: actionMap[issue] ?? ['patch_capability'],
    possibleActions: LIFECYCLE_CONTROLLER_ACTIONS
  }
}

export function calculateCapabilityHealthScore(scores) {
  const total = Object.entries(CAPABILITY_HEALTH_SCORE_WEIGHTS).reduce((sum, [field, weight]) => {
    const raw = scores[field]
    const normalized = typeof raw === 'number'
      ? raw
      : raw === 'review_passed'
        ? 100
        : raw === 'review_required'
          ? 60
          : 0
    return sum + (normalized * weight)
  }, 0)
  const healthScore = Math.round(total)

  return {
    healthScore,
    status: healthScore >= 90
      ? 'healthy'
      : healthScore >= 75
        ? 'restricted_or_not_full_release'
        : healthScore >= 60
          ? 'repair_required'
          : 'blocked',
    releaseMode: healthScore >= 90
      ? 'full_or_supervised_live'
      : healthScore >= 75
        ? 'restricted_live'
        : 'not_releasable'
  }
}

export function classifyDoctorSeverity(finding) {
  const map = {
    missing_icon: 'info',
    unclear_explanation: 'warning',
    missing_proof_rejection_path: 'serious',
    restricted_funds_withdrawable_as_cash: 'critical',
    ledger_imbalance: 'fatal'
  }
  const severity = map[finding] ?? 'warning'

  return {
    finding,
    severity,
    meaning: DOCTOR_SEVERITY_LEVELS[severity]
  }
}

export function generateDoctorReport({ reportId, capabilityId, version, healthScore, findings }) {
  const severeFindings = findings.filter((finding) => ['serious', 'critical', 'fatal'].includes(finding.severity))

  return {
    doctor_report_id: reportId,
    capability_id: capabilityId,
    version,
    overall_status: severeFindings.length ? 'restricted_release' : 'healthy',
    health_score: healthScore,
    findings,
    release_recommendation: {
      mode: severeFindings.length ? 'low_limit_live' : 'full_live_release',
      conditions: severeFindings.map((finding) => `repair_${finding.id}`).concat(severeFindings.length ? ['rerun_failure_path_tests'] : [])
    },
    next_actions: severeFindings.length
      ? ['patch_workflow', 'rerun_tests', 'rerun_simulation', 'regenerate_explanations']
      : ['continue_monitoring']
  }
}

export function diagnoseAdminDragDropGraph(parts) {
  const set = new Set(parts)

  if (set.has('escrow_hold') && set.has('photo_upload') && set.has('conditional_release') && !set.has('proof_verification')) {
    return {
      diagnosis: 'invalid_release_chain',
      reason: 'photo_upload_produces_submitted_proof_conditional_release_requires_approved_proof',
      missing: ['proof_verification_primitive', 'dispute_fallback', 'refund_path', 'recipient_consent'],
      suggestedFix: [
        'insert_proof_verification_between_photo_upload_and_conditional_release',
        'add_refund_timer_connected_to_escrowed_funds',
        'add_dispute_workflow_for_rejected_proof',
        'add_consent_screen_for_conditional_access'
      ]
    }
  }

  return {
    diagnosis: 'graph_passes_initial_doctor_review',
    reason: 'no_known_dangerous_chain_detected',
    missing: [],
    suggestedFix: []
  }
}

export function draftUserFacingSafeCapability(request) {
  const diagnosis = diagnosePreCreationRequest(request)

  if (diagnosis.findings.includes('potential_pooled_risk')) {
    return {
      userFacingDraft: 'protected_group_savings_plan',
      requiredPieces: [
        'member_contribution_rules',
        'payout_order',
        'late_payment_policy',
        'protection_reserve',
        'default_rule',
        'member_consent'
      ],
      behindTheScenes: diagnosis.required
    }
  }

  return {
    userFacingDraft: 'draft_capability_after_clarification',
    requiredPieces: ['clarify_goal', 'classify_capability_type'],
    behindTheScenes: diagnosis.required
  }
}

export function determineDoctorReleaseMode({ healthScore, riskLevel, fatalFinding = false, complianceTags = [], simulationPassed = true, runtimeHealthy = true, userHarmPotential = 'low' }) {
  if (fatalFinding) return 'blocked_immediately'
  if (healthScore < 70) return 'not_releasable'
  if (!simulationPassed || !runtimeHealthy) return 'simulation_only_or_admin_reviewed'
  if (complianceTags.includes('credit_like') || complianceTags.includes('insurance_like') || userHarmPotential === 'high') {
    return 'supervised_or_governor_reviewed'
  }
  if (healthScore >= 95 && riskLevel === 'low') return 'full_automated_release'
  if (healthScore >= 85) return 'low_limit_live_or_supervised_release'
  return 'admin_reviewed_or_simulation_only'
}

export function interpretWatchtowerSignal(signal) {
  if (signal.type === 'reserve_coverage_below_threshold') {
    return {
      diagnosis: 'protected_susu_circle_at_risk_of_payout_shortfall',
      actions: [
        'pause_payout_release',
        'notify_organizer_and_members',
        'require_reserve_top_up_or_adjust_payout_schedule',
        'escalate_high_risk_groups'
      ]
    }
  }

  return {
    diagnosis: 'watchtower_signal_logged',
    actions: ['continue_monitoring']
  }
}

export function recommendFromOutcomeLearning(observation) {
  if (observation.type === 'cooling_off_warning_reduces_missed_rent' && observation.effectPercent >= 30) {
    return 'make_cooling_off_warning_required_for_rent_shield_emergency_unlock'
  }
  if (observation.type === 'gps_photo_reduces_contractor_disputes' && observation.effectPercent >= 45) {
    return 'increase_proof_requirement_for_contractor_payments_above_500'
  }
  return 'keep_learning'
}

export function inspectAlgorithmVaultUsage(algorithm) {
  const issues = []

  if (!algorithm.approvedForCapabilityType) issues.push('algorithm_not_approved_for_capability_type')
  if (!algorithm.calibrated) issues.push('algorithm_not_calibrated')
  if (!algorithm.simulationPerformanceGood) issues.push('algorithm_underperforms_in_simulation')
  if (algorithm.defaultBehaviorChanged) issues.push('default_behavior_changed')
  if (algorithm.biasOrUnfairnessDetected) issues.push('bias_or_unfairness_detected')
  if (algorithm.thresholdsOutdated) issues.push('thresholds_need_update')

  return {
    valid: issues.length === 0,
    issues,
    recommendation: issues.length
      ? ['recommend_algorithm_upgrade', 'run_simulation_before_replacing', 'require_governor_review_if_risk_changes']
      : ['algorithm_current']
  }
}

export function inspectAssetVaultSupport(state, assets) {
  const required = {
    disputed_funds: ['dispute_status_panel', 'frozen_funds_icon', 'timeline_explanation', 'next_step_cta'],
    escrowed_funds: ['protected_payment_card', 'timeline_explanation'],
    restricted_funds: ['restricted_wallet_interface', 'purpose_lock_icon']
  }[state] ?? []
  const present = new Set(assets)
  const missing = required.filter((asset) => !present.has(asset))

  return {
    valid: missing.length === 0,
    missing,
    warning: missing.length ? 'ux_truth_warning' : null
  }
}

export function validateExplanationForState(state, explanation) {
  const issues = []

  if (state === 'escrowed_proof_under_review' && explanation.toLowerCase().includes('payment completed')) {
    issues.push('false_completion_promise')
  }
  if (!explanation.toLowerCase().includes('protected')) issues.push('missing_financial_truth')
  if (!explanation.toLowerCase().includes('review') && state.includes('review')) issues.push('missing_next_step')
  if (!explanation.toLowerCase().includes('release')) issues.push('missing_rights_or_release_condition')

  return {
    valid: issues.length === 0,
    issues,
    repair: issues.length
      ? 'Your money is protected. The recipient has submitted proof. AURA is reviewing it before release.'
      : explanation
  }
}

export function inspectSusuConsent(consentFields, upgrade = {}) {
  const required = [
    'contribution_amount',
    'contribution_schedule',
    'payout_order',
    'default_consequences',
    'reserve_use',
    'deposit_tail_lock_rules',
    'exit_rules',
    'dispute_process',
    'post_payout_obligation'
  ]
  const present = new Set(consentFields)
  const missing = required.filter((field) => !present.has(field))
  const materialChange = upgrade.previousGracePeriodDays !== undefined &&
    upgrade.nextGracePeriodDays !== undefined &&
    upgrade.previousGracePeriodDays !== upgrade.nextGracePeriodDays

  return {
    complete: missing.length === 0,
    missing,
    canActivate: missing.length === 0 && !materialChange,
    requiresReconsent: materialChange,
    reason: materialChange ? 'material_rule_change' : null
  }
}

export function evaluateCapabilityMigrationRisk(previousVersion, nextVersion) {
  const changed = []

  if (previousVersion.stateMachine !== nextVersion.stateMachine) changed.push('state_machine')
  if (previousVersion.ledgerBehavior !== nextVersion.ledgerBehavior) changed.push('ledger_behavior')
  if (previousVersion.actorPermissions !== nextVersion.actorPermissions) changed.push('actor_permissions')
  if (previousVersion.riskExposure !== nextVersion.riskExposure) changed.push('risk_exposure')
  if (previousVersion.fees !== nextVersion.fees) changed.push('fees')
  if (previousVersion.consent !== nextVersion.consent) changed.push('consent')
  if (previousVersion.uiTruth !== nextVersion.uiTruth) changed.push('ui_truth')
  if (nextVersion.requiresResimulation) changed.push('resimulation_required')

  return {
    risky: changed.length > 0,
    changed,
    requiredActions: changed.length
      ? ['require_migration_plan', 'check_reconsent', 'rerun_simulation', 'hold_release_until_migration_passes']
      : ['allow_migration']
  }
}

export function planHotSwapRollback({ component, badVersion, previousVersion, bug }) {
  return {
    component,
    badVersion,
    previousVersion,
    bug,
    actions: [
      `mark_${component}_${badVersion}_unhealthy`,
      `identify_all_capabilities_using_${component}_${badVersion}`,
      'pause_automatic_release_paths',
      `rollback_to_${component}_${previousVersion}_where_compatible`,
      'route_pending_high_risk_cases_to_human_review',
      `run_audit_on_releases_approved_by_${badVersion}`,
      'require_patch_and_simulation_before_reactivation'
    ]
  }
}

export function gateMarketplaceCapability(submission) {
  const checks = [
    'type_validation',
    'composition_validation',
    'ledger_validation',
    'risk_review',
    'compliance_classification',
    'test_coverage',
    'simulation_requirements',
    'ui_truth_review',
    'security_review',
    'doctor_pre_release_scan'
  ]
  const strongEnoughForMoneyMovement = submission.typeContractStrong &&
    submission.doctorScore >= 90 &&
    submission.moneyMovingCertification === true

  return {
    accepted: checks.every((check) => submission.passed?.includes(check)),
    checks,
    canTouchMoney: submission.touchesMoney ? strongEnoughForMoneyMovement : false,
    recommendationOnly: submission.thirdParty === true && !strongEnoughForMoneyMovement
  }
}

export function inspectCapabilitySecurity(capability) {
  const issues = []

  if (capability.accountTakeoverRisk) issues.push('account_takeover_risk')
  if (capability.personalFinancialDataLeakRisk) issues.push('personal_financial_data_leak_risk')
  if (capability.unauthorizedTransferRisk) issues.push('unauthorized_transfer_risk')
  if (capability.moneyLaunderingPatternRisk) issues.push('money_laundering_pattern_risk')
  if (capability.spamRisk) issues.push('spam_risk')
  if (capability.proofSpoofRisk) issues.push('proof_spoof_risk')
  if (capability.identityBypassRisk) issues.push('identity_bypass_risk')
  if (capability.privilegeEscalationRisk) issues.push('privilege_escalation_risk')

  const requiredForDelegation = [
    'delegation_scope',
    'revocation_path',
    'audit_log',
    'limit',
    'time_expiry',
    'strong_authentication',
    'notification_to_delegator'
  ]

  return {
    valid: issues.length === 0,
    issues,
    requiredForDelegation: capability.delegatedMoneyControl ? requiredForDelegation : []
  }
}

export function inspectDataContract(dataContract) {
  const issues = []

  if (dataContract.usesBts) {
    if (!dataContract.btsAvailable) issues.push('bts_missing')
    if (!dataContract.btsFresh) issues.push('bts_stale')
    if (!dataContract.btsAllowedForDecision) issues.push('bts_not_allowed_for_decision')
    if (!dataContract.btsConfidenceHighEnough) issues.push('bts_confidence_too_low')
    if (!dataContract.btsFallback) issues.push('bts_fallback_missing')
  }

  if (dataContract.usesGps) {
    if (!dataContract.gpsAvailable) issues.push('gps_missing')
    if (!dataContract.timestampAvailable) issues.push('timestamp_missing')
    if (!dataContract.confidenceAvailable) issues.push('confidence_missing')
    if (!dataContract.locationUnavailableFallback) issues.push('location_unavailable_fallback_missing')
    if (dataContract.deviceSuspicious && !dataContract.suspiciousDevicePath) issues.push('suspicious_device_path_missing')
  }

  return {
    valid: issues.length === 0,
    issues
  }
}

export function createDoctorAuditEntry(entry) {
  const missing = DOCTOR_AUDIT_FIELDS.filter((field) => entry[field] === undefined)

  return {
    valid: missing.length === 0,
    missing,
    entry
  }
}

export function evaluateSelfHealingAction(action) {
  if (SELF_HEALING_ALLOWED_ACTIONS.includes(action)) {
    return { allowed: true, route: 'auto_self_heal' }
  }
  if (SELF_HEALING_REVIEW_REQUIRED_ACTIONS.includes(action)) {
    return { allowed: false, route: 'consent_review_or_governor_required' }
  }
  return { allowed: false, route: 'unknown_action_requires_review' }
}

export function getCapabilityTypeDoctorExample(key) {
  return CAPABILITY_TYPE_DOCTOR_EXAMPLES[key] ?? null
}

export function buildCapabilityGenome(capability = {}) {
  return {
    genome_id: capability.genome_id ?? `genome.${capability.id ?? capability.capability_id ?? 'unknown'}.${capability.version ?? '0.0.0'}`,
    capability_id: capability.id ?? capability.capability_id,
    type: capability.type ?? capability.capability_type,
    user_intent: capability.intent ?? capability.user_intent,
    financial_rules: capability.rules ?? capability.financial_rules ?? [],
    money_movement_logic: capability.moneyMovementLogic ?? capability.money_movement_logic ?? capability.flows ?? [],
    ledger_behavior: capability.ledgerEffects ?? capability.ledger_behavior ?? [],
    state_transitions: capability.stateTransitions ?? capability.state_transitions ?? capability.moneyStates ?? [],
    eligibility_conditions: capability.eligibilityConditions ?? capability.eligibility_conditions ?? [],
    identity_requirements: capability.identityRequirements ?? capability.identity_requirements ?? [],
    consent_requirements: capability.consentRequirements ?? capability.consent_requirements ?? [],
    risk_controls: capability.riskControls ?? capability.risk_controls ?? capability.riskMitigations ?? [],
    fraud_controls: capability.fraudControls ?? capability.fraud_controls ?? [],
    ui_experience: capability.uiSurfaces ?? capability.ui_experience ?? [],
    disclosures: capability.disclosures ?? capability.explanationLogic ?? [],
    telemetry: capability.telemetry ?? capability.runtimeMonitors ?? [],
    permissions: capability.permissions ?? [],
    version_history: capability.versionHistory ?? capability.version_history ?? [capability.version].filter(Boolean),
    jurisdictional_constraints: capability.jurisdictionalConstraints ?? capability.jurisdictional_constraints ?? capability.complianceTags ?? [],
    runtime_monitoring_rules: capability.runtimeMonitors ?? capability.runtime_monitoring_rules ?? [],
    recovery_paths: capability.recoveryPaths ?? capability.recovery_paths ?? [],
    simulation_results: capability.simulationResults ?? capability.simulation_results ?? capability.simulationRequirements ?? [],
    release_status: capability.releaseMode ?? capability.release_status,
    human_review_requirements: capability.humanReviewRequirements ?? capability.human_review_requirements ?? []
  }
}

export function validateCapabilityGenome(genome = {}) {
  const missing = CAPABILITY_GENOME_CORE_SECTIONS.filter((section) => {
    const value = genome[section]
    if (Array.isArray(value)) return value.length === 0
    return value === undefined || value === null || value === ''
  })
  const issues = [...missing.map((section) => `missing_${section}`)]

  if (!genome.capability_id) issues.push('missing_capability_id')
  if (!genome.type) issues.push('missing_capability_type')
  if ((genome.ledger_behavior ?? []).length < 2) issues.push('ledger_behavior_too_sparse')
  if ((genome.state_transitions ?? []).length < 2) issues.push('state_machine_too_sparse')
  if ((genome.recovery_paths ?? []).length === 0) issues.push('missing_recovery_paths')
  if ((genome.runtime_monitoring_rules ?? []).length === 0) issues.push('missing_runtime_monitoring_rules')

  return {
    valid: issues.length === 0,
    issues,
    missing,
    sections: CAPABILITY_GENOME_CORE_SECTIONS,
    answeredQuestions: CAPABILITY_GENOME_ANSWERED_QUESTIONS
  }
}

export function diagnoseCapabilityGenome(genome = {}) {
  const validation = validateCapabilityGenome(genome)
  const findings = []

  if (validation.missing.includes('financial_rules')) findings.push('missing_rules')
  if (validation.missing.includes('state_transitions') || validation.issues.includes('state_machine_too_sparse')) findings.push('broken_state_transitions')
  if (validation.missing.includes('money_movement_logic')) findings.push('impossible_money_movement')
  if (validation.missing.includes('ledger_behavior') || validation.issues.includes('ledger_behavior_too_sparse')) findings.push('unbalanced_ledger_events')
  if (validation.missing.includes('consent_requirements')) findings.push('missing_consent')
  if (validation.missing.includes('risk_controls')) findings.push('user_harm')
  if (validation.missing.includes('fraud_controls')) findings.push('fraud_loopholes')
  if (validation.missing.includes('jurisdictional_constraints')) findings.push('jurisdiction_conflicts')
  if (validation.missing.includes('ui_experience')) findings.push('bad_ux')
  if (validation.missing.includes('recovery_paths')) findings.push('poor_recovery_paths')
  if (validation.missing.includes('runtime_monitoring_rules')) findings.push('runtime_anomalies')
  if (validation.missing.includes('version_history')) findings.push('version_migration_risks')
  if (validation.missing.includes('simulation_results')) findings.push('incomplete_testing')

  const uniqueFindings = [...new Set(findings)]

  return {
    healthy: uniqueFindings.length === 0,
    findings: uniqueFindings,
    validation,
    distinction: CAPABILITY_GENOME_VS_DOCTOR,
    diagnosticTargets: CAPABILITY_DOCTOR_DIAGNOSTIC_TARGETS,
    repairPlan: uniqueFindings.map((finding) => ({
      finding,
      action: {
        missing_rules: 'add_financial_rules_to_genome',
        broken_state_transitions: 'repair_state_machine_contract',
        impossible_money_movement: 'rebuild_money_movement_logic',
        unbalanced_ledger_events: 'repair_ledger_behavior',
        missing_consent: 'add_required_consent_terms',
        user_harm: 'add_risk_controls',
        fraud_loopholes: 'add_fraud_controls',
        jurisdiction_conflicts: 'route_to_governor',
        bad_ux: 'repair_ui_experience_and_explanations',
        poor_recovery_paths: 'add_recovery_paths',
        runtime_anomalies: 'attach_runtime_monitors',
        version_migration_risks: 'add_version_history_and_migration_rules',
        incomplete_testing: 'run_tests_and_simulations'
      }[finding] ?? 'run_capability_doctor_review'
    }))
  }
}

export function compileGenomeToCapabilityContracts(genome = {}) {
  const validation = validateCapabilityGenome(genome)

  return {
    valid: validation.valid,
    validation,
    sourceOfTruthRules: CAPABILITY_GENOME_SOURCE_OF_TRUTH_RULES,
    pipeline: CAPABILITY_GENOME_COMPILE_PIPELINE,
    artifacts: {
      universalCapabilityContract: {
        capability_id: genome.capability_id,
        type: genome.type,
        intent: genome.user_intent,
        permissions: genome.permissions ?? [],
        release_status: genome.release_status
      },
      financialKernelContract: {
        money_movement_logic: genome.money_movement_logic ?? [],
        ledger_behavior: genome.ledger_behavior ?? [],
        state_transitions: genome.state_transitions ?? [],
        hard_guards: [...new Set([...(genome.risk_controls ?? []), ...(genome.fraud_controls ?? [])])]
      },
      stateMachineDefinition: genome.state_transitions ?? [],
      ledgerRules: genome.ledger_behavior ?? [],
      policyRules: {
        consent: genome.consent_requirements ?? [],
        jurisdiction: genome.jurisdictional_constraints ?? []
      },
      experienceContract: genome.ui_experience ?? [],
      uiDirectives: genome.ui_experience ?? [],
      disclosureConsentFlows: [...new Set([...(genome.disclosures ?? []), ...(genome.consent_requirements ?? [])])],
      runtimeTelemetryRules: genome.runtime_monitoring_rules ?? [],
      auditLedgerEvents: genome.telemetry ?? [],
      simulationAndTestCases: genome.simulation_results ?? []
    }
  }
}

export function mapGenomeTraits({ genes = [], chromosomes = {} } = {}) {
  const skippedProviderApiAlleles = []
  const mappedGenes = genes
    .filter((entry) => {
      const skipped = CAPABILITY_GENOME_SKIPPED_PROVIDER_API_ALLELES.includes(entry.allele)
      if (skipped) skippedProviderApiAlleles.push(entry.allele)
      return !skipped
    })
    .map((entry) => ({
      gene: entry.gene,
      locus: entry.locus,
      allele: entry.allele,
      validGene: CAPABILITY_GENES.includes(entry.gene),
      validLocus: CAPABILITY_GENE_LOCI.includes(entry.locus)
    }))

  return {
    mappedGenes,
    chromosomes,
    skippedProviderApiAlleles,
    availableAlleles: PROOF_REQUIREMENT_GENE_ALLELES,
    chromosomeFamilies: CAPABILITY_CHROMOSOMES
  }
}

export function mutateCapabilityGenome(genome = {}, mutation = {}) {
  const allowed = CAPABILITY_MUTATION_TYPES.includes(mutation.type)
  const updatedGenome = {
    ...genome,
    version_history: [...new Set([...(genome.version_history ?? []), mutation.version ?? 'mutation_pending'])],
    mutation_history: [...(genome.mutation_history ?? []), mutation]
  }

  if (mutation.type === 'manual_to_automatic_release') {
    updatedGenome.release_status = 'automatic_with_review_thresholds'
    updatedGenome.consent_requirements = [...new Set([...(genome.consent_requirements ?? []), 'automatic_release_consent'])]
    updatedGenome.human_review_requirements = [...new Set([...(genome.human_review_requirements ?? []), 'threshold_or_uncertainty_review'])]
  }
  if (mutation.type === 'add_gps_verification') {
    updatedGenome.fraud_controls = [...new Set([...(genome.fraud_controls ?? []), 'gps_proof'])]
    updatedGenome.identity_requirements = [...new Set([...(genome.identity_requirements ?? []), 'location_match_required'])]
  }
  if (mutation.type === 'add_dispute_window') {
    updatedGenome.recovery_paths = [...new Set([...(genome.recovery_paths ?? []), 'dispute_window'])]
    updatedGenome.state_transitions = [...new Set([...(genome.state_transitions ?? []), 'proof_pending_to_disputed'])]
  }

  return {
    allowed,
    mutation,
    updatedGenome,
    requiresDoctorReview: true,
    requiresRevalidation: true,
    knownMutationTypes: CAPABILITY_MUTATION_TYPES
  }
}

export function recombineCapabilityGenomes(genomes = [], options = {}) {
  const combined = genomes.reduce((nextGenome, genome) => {
    for (const section of CAPABILITY_GENOME_CORE_SECTIONS) {
      const value = genome[section]
      if (Array.isArray(value)) {
        nextGenome[section] = [...new Set([...(nextGenome[section] ?? []), ...value])]
      } else if (nextGenome[section] === undefined && value !== undefined) {
        nextGenome[section] = value
      }
    }
    return nextGenome
  }, {
    genome_id: options.genomeId ?? 'genome.recombined.capability',
    capability_id: options.capabilityId ?? 'recombined_capability',
    type: options.type ?? genomes.find((genome) => genome.type)?.type
  })

  return {
    genome: combined,
    validation: validateCapabilityGenome(combined),
    sourceGenomes: genomes.map((genome) => genome.genome_id ?? genome.capability_id).filter(Boolean),
    recombinationRule: 'merge_traits_then_doctor_revalidate'
  }
}

export function deriveCapabilityPhenotype(genome = {}) {
  return {
    screens: genome.ui_experience ?? [],
    buttons: ['fund_payment', 'submit_proof', 'open_dispute', 'request_refund'],
    explanations: genome.disclosures ?? [],
    money_movement: genome.money_movement_logic ?? [],
    alerts: genome.telemetry ?? [],
    progress_state: genome.state_transitions ?? [],
    proof_upload_flow: (genome.fraud_controls ?? []).filter((control) => control.includes('proof')),
    refund_experience: (genome.recovery_paths ?? []).filter((path) => path.includes('refund')),
    receipt: genome.ledger_behavior ?? [],
    final_outcome: genome.release_status ?? 'unknown'
  }
}

export function buildGenomeArchitectureFlow(genome = {}) {
  const genomeDiagnosis = diagnoseCapabilityGenome(genome)
  return {
    lifecycle: CAPABILITY_GENOME_LIFECYCLE_ARCHITECTURE,
    doctorChecks: CAPABILITY_DOCTOR_ARCHITECTURE_CHECKS,
    compilationOutputs: CAPABILITY_COMPILATION_LAYER_OUTPUTS,
    certified: genomeDiagnosis.healthy,
    nextStep: genomeDiagnosis.healthy ? 'certified_capability_genome' : 'repair_draft_genome',
    runtimeLoop: ['runtime_doctor_monitoring', 'patch_quarantine_evolve']
  }
}

export function validateIdentityGenome(identityGenome = {}) {
  const missing = IDENTITY_GENOME_FIELDS.filter((field) => identityGenome[field] === undefined)
  const issues = [...missing.map((field) => `missing_${field}`)]

  if (identityGenome.status && !IDENTITY_GENOME_STATUS_VALUES.includes(identityGenome.status)) issues.push('unknown_identity_genome_status')
  if (!identityGenome.lineage?.parent_templates?.length) issues.push('missing_parent_templates')
  if (!identityGenome.lineage?.inherited_patterns?.length) issues.push('missing_inherited_patterns')

  return {
    valid: issues.length === 0,
    issues,
    fields: IDENTITY_GENOME_FIELDS,
    statusValues: IDENTITY_GENOME_STATUS_VALUES
  }
}

export function validateIntentGenome(intentGenome = {}) {
  const missing = INTENT_GENOME_FIELDS.filter((field) => {
    const value = intentGenome[field]
    if (Array.isArray(value)) return value.length === 0
    return value === undefined || value === null || value === ''
  })
  const issues = [...missing.map((field) => `missing_${field}`)]

  if ((intentGenome.unacceptable_outcomes ?? []).length === 0) issues.push('intent_has_no_safety_boundaries')
  if (!intentGenome.primary_goal) issues.push('missing_primary_goal')

  return {
    valid: issues.length === 0,
    issues,
    fields: INTENT_GENOME_FIELDS,
    alignmentQuestion: 'does_the_capability_still_match_the_users_original_purpose'
  }
}

export function checkIntentGenomeAlignment({ intentGenome = {}, builtGenome = {}, phenotype = {}, runtime = {} } = {}) {
  const unacceptable = new Set(intentGenome.unacceptable_outcomes ?? [])
  const findings = []
  const allBuiltTraits = [
    ...(builtGenome.financial_rules ?? []),
    ...(builtGenome.fraud_controls ?? []),
    ...(builtGenome.recovery_paths ?? []),
    ...(builtGenome.disclosures ?? [])
  ]

  if ((intentGenome.original_user_request ?? '').toLowerCase().includes('gps') && !allBuiltTraits.some((trait) => trait.includes('gps'))) {
    findings.push('user_requested_gps_but_build_lacks_gps_trait')
  }
  if (unacceptable.has('recipient_receives_money_without_proof') && !allBuiltTraits.some((trait) => trait.includes('proof'))) {
    findings.push('build_could_release_without_proof')
  }
  if (unacceptable.has('funds_disappear_or_become_stuck') && !(builtGenome.recovery_paths ?? []).length) {
    findings.push('build_lacks_recovery_path_for_stuck_funds')
  }
  if (unacceptable.has('evidence_collected_without_consent') && !(builtGenome.consent_requirements ?? []).length) {
    findings.push('evidence_consent_missing')
  }
  if ((phenotype.explanations ?? []).length === 0) findings.push('user_experience_lacks_explanation')
  if (runtime.release_without_proof) findings.push('runtime_betrays_intent_release_without_proof')

  return {
    aligned: findings.length === 0,
    findings,
    compares: ['what_user_asked_for', 'what_system_built', 'what_user_experiences', 'what_happens_at_runtime']
  }
}

export function validatePersonaGenome(personaGenome = {}) {
  const missing = PERSONA_GENOME_FIELDS.filter((field) => personaGenome[field] === undefined)
  const issues = [...missing.map((field) => `missing_${field}`)]

  if ((personaGenome.vulnerability_flags ?? []).length && personaGenome.experience_adaptation?.language_style !== 'plain') {
    issues.push('vulnerable_persona_requires_plain_language')
  }
  if (personaGenome.accessibility_needs?.screen_reader_support === 'required' && !personaGenome.accessibility_needs?.low_literacy_mode) {
    issues.push('accessibility_profile_incomplete')
  }

  return {
    valid: issues.length === 0,
    issues,
    fields: PERSONA_GENOME_FIELDS,
    personas: PERSONA_GENOME_PERSONAS
  }
}

export function validateCapabilityTypeGenome(typeGenome = {}, genome = {}) {
  const missing = CAPABILITY_TYPE_GENOME_FIELDS.filter((field) => typeGenome[field] === undefined)
  const issues = [...missing.map((field) => `missing_${field}`)]
  const constraints = typeGenome.type_constraints ?? {}

  if (constraints.requires_ledger_locking && !(genome.ledger_behavior ?? []).some((entry) => entry.includes('escrow') || entry.includes('lock'))) {
    issues.push('requires_ledger_locking_but_genome_lacks_locking')
  }
  if (constraints.requires_release_condition && !(genome.financial_rules ?? []).some((rule) => rule.includes('release'))) {
    issues.push('requires_release_condition_but_rule_missing')
  }
  if (constraints.requires_refund_path && !(genome.recovery_paths ?? []).some((path) => path.includes('refund'))) {
    issues.push('requires_refund_path_but_missing')
  }
  if (constraints.requires_dispute_path && !(genome.recovery_paths ?? []).some((path) => path.includes('dispute') || path.includes('freeze'))) {
    issues.push('requires_dispute_path_but_missing')
  }
  if (constraints.requires_evidence_policy && !(genome.fraud_controls ?? []).some((control) => control.includes('proof'))) {
    issues.push('requires_evidence_policy_but_missing')
  }
  if (constraints.requires_consent && !(genome.consent_requirements ?? []).length) {
    issues.push('requires_consent_but_missing')
  }

  return {
    valid: issues.length === 0,
    issues,
    fields: CAPABILITY_TYPE_GENOME_FIELDS,
    availableTypes: CAPABILITY_TYPE_GENOME_TYPES
  }
}

export function validateCompositionGenome(compositionGenome = {}, intentGenome = {}) {
  const missing = COMPOSITION_GENOME_FIELDS.filter((field) => compositionGenome[field] === undefined)
  const issues = [...missing.map((field) => `missing_${field}`)]
  const allPieces = [
    ...(compositionGenome.atoms ?? []),
    ...(compositionGenome.micro_primitives ?? []),
    ...(compositionGenome.primitives ?? []),
    ...(compositionGenome.patterns ?? [])
  ]

  if ((intentGenome.original_user_request ?? '').toLowerCase().includes('gps') && !allPieces.includes('gps_radius_check_micro_primitive')) {
    issues.push('intent_mismatch_missing_required_primitive:gps_radius_check_micro_primitive')
  }
  if (!allPieces.includes('proof_verification_primitive')) issues.push('missing_proof_verification_primitive')
  if (!allPieces.includes('auto_refund_primitive') && !allPieces.includes('timeout_refund_pattern')) issues.push('missing_refund_pattern')
  if (!allPieces.includes('dispute_resolution_primitive')) issues.push('missing_dispute_resolution_primitive')

  return {
    valid: issues.length === 0,
    issues,
    fields: COMPOSITION_GENOME_FIELDS,
    releaseBlocked: issues.some((issue) => (
      issue.includes('missing_required_primitive')
      || issue.includes('missing_proof')
      || issue.includes('missing_refund')
      || issue.includes('missing_dispute')
    ))
  }
}

export function validateFinancialPhysicsGenome(physicsGenome = {}, stateMachineGenome = {}) {
  const missing = FINANCIAL_PHYSICS_GENOME_FIELDS.filter((field) => physicsGenome[field] === undefined)
  const issues = [...missing.map((field) => `missing_${field}`)]
  const flows = Object.values(physicsGenome.funds_flow ?? {})
  const invariantSet = new Set(physicsGenome.invariants ?? [])
  const stateSet = new Set(stateMachineGenome.states ?? [])
  const terminalSet = new Set(stateMachineGenome.terminal_states ?? [])

  if (!flows.length) issues.push('funds_flow_undefined')
  for (const flow of flows) {
    if (!flow) {
      issues.push('unbalanced_flow:unknown')
      continue
    }
    if (!flow.debit || !flow.credit) issues.push(`unbalanced_flow:${flow.state ?? 'unknown'}`)
    if (flow.debit && flow.credit && flow.debit === flow.credit) issues.push(`self_balancing_flow_invalid:${flow.state ?? 'unknown'}`)
    if (flow.state && stateSet.size && !stateSet.has(flow.state) && !stateSet.has(`${flow.state}_funds`)) {
      issues.push(`ledger_state_not_in_state_machine:${flow.state}`)
    }
  }
  if (!invariantSet.has('total_debits_equal_total_credits')) issues.push('missing_balance_invariant')
  if (!invariantSet.has('locked_funds_cannot_be_spent')) issues.push('locked_funds_spendability_not_guarded')
  if (!invariantSet.has('funds_must_not_remain_indefinitely_locked')) issues.push('stuck_funds_not_prevented')
  if (!physicsGenome.funds_flow?.refund) issues.push('refunds_undefined')
  if (physicsGenome.fees?.fee_model && physicsGenome.fees.fee_disclosure_required !== true) issues.push('fees_hidden_or_undisclosed')
  if (!physicsGenome.limits?.max_lock_duration_days) issues.push('max_lock_duration_missing')
  if (terminalSet.size && ![...terminalSet].some((state) => ['released', 'refunded', 'cancelled', 'expired'].includes(state))) {
    issues.push('no_financial_terminal_state')
  }

  return {
    valid: issues.length === 0,
    issues,
    fields: FINANCIAL_PHYSICS_GENOME_FIELDS,
    hardGates: FINANCIAL_PHYSICS_HARD_GATES,
    releaseBlocked: issues.length > 0
  }
}

export function validateStateMachineGenome(stateMachineGenome = {}, financialPhysicsGenome = {}) {
  const missing = STATE_MACHINE_GENOME_FIELDS.filter((field) => {
    const value = stateMachineGenome[field]
    if (Array.isArray(value)) return value.length === 0
    return value === undefined || value === null || value === ''
  })
  const issues = [...missing.map((field) => `missing_${field}`)]
  const states = new Set(stateMachineGenome.states ?? [])
  const terminalStates = new Set(stateMachineGenome.terminal_states ?? [])
  const transitions = stateMachineGenome.transitions ?? []
  const outgoing = new Set(transitions.map((transition) => transition.from))
  const outgoingByState = new Map()
  const terminalTransitionSignatures = new Map()
  const transitionSignatures = new Set()
  const ledgerStates = new Set(
    Object.values(financialPhysicsGenome.funds_flow ?? {})
      .map((flow) => flow?.state)
      .filter(Boolean)
  )

  for (const transition of transitions) {
    const next = outgoingByState.get(transition.from) ?? []
    next.push(transition)
    outgoingByState.set(transition.from, next)
  }

  const reachableStates = new Set()
  if (stateMachineGenome.initial_state && states.has(stateMachineGenome.initial_state)) {
    const queue = [stateMachineGenome.initial_state]
    while (queue.length) {
      const state = queue.shift()
      if (reachableStates.has(state)) continue
      reachableStates.add(state)
      for (const transition of outgoingByState.get(state) ?? []) queue.push(transition.to)
    }
  }

  const canReachTerminal = (startState) => {
    const visited = new Set()
    const queue = [startState]
    while (queue.length) {
      const state = queue.shift()
      if (terminalStates.has(state)) return true
      if (visited.has(state)) continue
      visited.add(state)
      for (const transition of outgoingByState.get(state) ?? []) queue.push(transition.to)
    }
    return false
  }

  if (stateMachineGenome.initial_state && !states.has(stateMachineGenome.initial_state)) issues.push('initial_state_not_declared')
  for (const terminal of terminalStates) {
    if (!states.has(terminal)) issues.push(`terminal_state_not_declared:${terminal}`)
  }
  for (const transition of transitions) {
    const exactSignature = `${transition.from}:${transition.event ?? 'missing_event'}:${transition.guard ?? 'no_guard'}:${transition.to}`
    if (transitionSignatures.has(exactSignature)) issues.push(`duplicate_transition:${exactSignature}`)
    transitionSignatures.add(exactSignature)
    if (!states.has(transition.from)) issues.push(`transition_from_unknown_state:${transition.from}`)
    if (!states.has(transition.to)) issues.push(`transition_to_unknown_state:${transition.to}`)
    if (!transition.event) issues.push(`transition_missing_event:${transition.from}_to_${transition.to}`)
    if (terminalStates.has(transition.from)) issues.push(`terminal_state_has_outgoing_transition:${transition.from}`)
    if (transition.from === 'released' && (transition.to === 'cancelled' || (transition.event ?? '').includes('cancel'))) {
      issues.push('cancel_after_release_possible')
    }
    if (transition.to === 'released' && !transition.guard) issues.push('release_transition_missing_guard')
    if (transition.to === 'released' && !['proof_accepted', 'dispute_review'].includes(transition.from)) {
      issues.push(`release_without_proof_or_dispute_resolution:${transition.from}`)
    }
    if (
      ['released', 'refunded', 'split_settlement', 'cancelled'].includes(transition.to)
      && transition.from !== 'draft'
      && !transition.guard
    ) {
      issues.push(`terminal_transition_missing_authorization_guard:${transition.from}_to_${transition.to}`)
    }
    if (['funds_locked', 'released', 'refunded', 'split_settlement'].includes(transition.to) && ledgerStates.size && !ledgerStates.has(transition.to)) {
      issues.push(`ledger_change_missing_for_transition:${transition.to}`)
    }
    if (terminalStates.has(transition.to)) {
      const signature = `${transition.from}:${transition.event ?? 'missing_event'}:${transition.guard ?? 'no_guard'}`
      const destinations = terminalTransitionSignatures.get(signature) ?? new Set()
      destinations.add(transition.to)
      terminalTransitionSignatures.set(signature, destinations)
    }
  }
  for (const state of states) {
    if (reachableStates.size && !reachableStates.has(state)) issues.push(`unreachable_state:${state}`)
    if (!terminalStates.has(state) && !outgoing.has(state)) issues.push(`non_terminal_state_has_no_exit:${state}`)
    if (state === 'funds_locked' && !canReachTerminal(state)) issues.push('funds_locked_can_remain_forever')
    if (reachableStates.has(state) && !terminalStates.has(state) && !canReachTerminal(state)) {
      issues.push(`reachable_state_cannot_reach_terminal:${state}`)
    }
  }
  for (const [signature, destinations] of terminalTransitionSignatures.entries()) {
    if (destinations.size > 1) issues.push(`conflicting_terminal_transitions:${signature}`)
  }
  for (const ledgerState of ledgerStates) {
    if (!states.has(ledgerState)) issues.push(`ledger_state_not_declared:${ledgerState}`)
  }

  const transitionText = transitions.map((transition) => (
    `${transition.from} ${transition.to} ${transition.event ?? ''}`
  )).join(' ')
  const hasRecoveryTransition = /resubmit|corrected|rejected|appeal|recover/.test(transitionText)
  const hasTimerTransition = /timeout|deadline|expired|window_expired/.test(transitionText)
  const hasDisputeTransition = /dispute/.test(transitionText)
  const hasReversalPolicy = Boolean(stateMachineGenome.reversal_policy) || /reverse|reversal/.test(transitionText)

  if (!hasRecoveryTransition) issues.push('recovery_transition_missing')
  if (!hasTimerTransition) issues.push('timer_transition_missing')
  if (!hasDisputeTransition) issues.push('dispute_transition_missing')
  if (!hasReversalPolicy) issues.push('reversal_policy_missing')
  const eventOwnership = stateMachineGenome.event_ownership ?? {}
  const criticalEventNames = transitions
    .filter((transition) => (
      ['funds_locked', 'released', 'refunded', 'split_settlement', 'cancelled', 'expired'].includes(transition.to)
      || /timeout|expired|cancel|release|refund|split/.test(transition.event ?? '')
    ))
    .map((transition) => transition.event)
    .filter(Boolean)
  for (const eventName of criticalEventNames) {
    if (!eventOwnership[eventName]) issues.push(`event_owner_missing:${eventName}`)
  }
  const concurrencyControls = stateMachineGenome.concurrency_controls ?? {}
  if (!concurrencyControls.release_and_refund) issues.push('terminal_transition_mutex_missing')
  if (!concurrencyControls.duplicate_event_handling) issues.push('duplicate_event_idempotency_missing')
  if (
    criticalEventNames.some((eventName) => eventName?.includes('cancel'))
    && criticalEventNames.some((eventName) => eventName?.includes('release') || eventName?.includes('accepted'))
    && !concurrencyControls.proof_accept_and_sender_cancel
  ) {
    issues.push('proof_accept_sender_cancel_race_uncontrolled')
  }
  if (!terminalStates.size) issues.push('no_terminal_state')

  const dedupedIssues = [...new Set(issues)]

  return {
    valid: dedupedIssues.length === 0,
    issues: dedupedIssues,
    fields: STATE_MACHINE_GENOME_FIELDS,
    checks: STATE_MACHINE_DOCTOR_CHECKS,
    coverage: {
      reachableStates: [...reachableStates],
      unreachableStates: [...states].filter((state) => !reachableStates.has(state)),
      hasRecoveryTransition,
      hasTimerTransition,
      hasDisputeTransition,
      hasReversalPolicy
    },
    releaseBlocked: dedupedIssues.some((issue) => (
      issue.includes('release_transition_missing_guard')
      || issue.includes('release_without_proof')
      || issue.includes('terminal_transition_missing_authorization_guard')
      || issue.includes('funds_locked_can_remain_forever')
      || issue.includes('reachable_state_cannot_reach_terminal')
      || issue.includes('conflicting_terminal_transitions')
      || issue.includes('ledger_change_missing')
      || issue.includes('duplicate_transition')
      || issue.includes('event_owner_missing')
      || issue.includes('mutex_missing')
      || issue.includes('idempotency_missing')
      || issue.includes('race_uncontrolled')
      || issue.includes('no_terminal_state')
    ))
  }
}

export function validateRulePolicyGenome(policyGenome = {}) {
  const missing = RULE_POLICY_GENOME_FIELDS.filter((field) => {
    const value = policyGenome[field]
    if (Array.isArray(value)) return value.length === 0
    if (value && typeof value === 'object') return Object.keys(value).length === 0
    return value === undefined || value === null || value === ''
  })
  const issues = [...missing.map((field) => `missing_${field}`)]
  const includesRule = (field, fragment) => (policyGenome[field] ?? []).some((rule) => rule.includes(fragment))
  const conflictResolutions = new Set(policyGenome.conflict_resolutions ?? [])
  const autoRefundHours = Number(policyGenome.timers?.auto_refund_hours)
  const reviewSlaHours = Number(policyGenome.timers?.human_review_sla_hours)
  const pausesRefundTimer = policyGenome.timers?.pause_refund_timer_during_active_review === true
    || conflictResolutions.has('pause_refund_timer_during_active_review')

  if (!includesRule('eligibility_rules', 'verified_wallet')) issues.push('sender_wallet_verification_rule_missing')
  if (!includesRule('eligibility_rules', 'claimable_identity')) issues.push('recipient_identity_rule_missing')
  if (!includesRule('eligibility_rules', 'within_limit')) issues.push('transaction_limit_rule_missing')
  if (!includesRule('eligibility_rules', 'jurisdiction')) issues.push('jurisdiction_rule_missing')
  if (!includesRule('release_rules', 'required_proofs_pass')) issues.push('release_without_required_proof_rule')
  if (!includesRule('refund_rules', 'timeout')) issues.push('timeout_refund_rule_missing')
  if (!includesRule('refund_rules', 'declines')) issues.push('recipient_decline_refund_rule_missing')
  if (!includesRule('refund_rules', 'compliance_block')) issues.push('compliance_block_refund_rule_missing')
  if (!includesRule('dispute_rules', 'dispute')) issues.push('sender_dispute_rule_missing')
  if (!includesRule('dispute_rules', 'appeal')) issues.push('recipient_appeal_rule_missing')
  if (!includesRule('dispute_rules', 'human_review')) issues.push('high_value_human_review_rule_missing')
  if (!includesRule('operational_rules', 'preserve_audit_trail')) issues.push('audit_trail_rule_missing')
  if (!includesRule('operational_rules', 'fraud_pattern')) issues.push('fraud_lock_rule_missing')
  if (Number.isFinite(autoRefundHours) && Number.isFinite(reviewSlaHours) && autoRefundHours <= reviewSlaHours && !pausesRefundTimer) {
    issues.push('timer_conflict_auto_refund_before_human_review_completes')
  }

  const dedupedIssues = [...new Set(issues)]

  return {
    valid: dedupedIssues.length === 0,
    issues: dedupedIssues,
    fields: RULE_POLICY_GENOME_FIELDS,
    checks: RULE_POLICY_DOCTOR_CHECKS,
    releaseBlocked: dedupedIssues.some((issue) => (
      issue.includes('release_without')
      || issue.includes('refund_rule_missing')
      || issue.includes('dispute_rule_missing')
      || issue.includes('timer_conflict')
      || issue.includes('jurisdiction_rule_missing')
    ))
  }
}

export function validateIdentityEntityGenome(identityEntityGenome = {}) {
  const missing = IDENTITY_ENTITY_GENOME_FIELDS.filter((field) => {
    const value = identityEntityGenome[field]
    if (Array.isArray(value)) return value.length === 0
    if (value && typeof value === 'object') return Object.keys(value).length === 0
    return value === undefined || value === null || value === ''
  })
  const issues = [...missing.map((field) => `missing_${field}`)]
  const actors = identityEntityGenome.actors ?? {}
  const accessControl = identityEntityGenome.access_control ?? {}
  const changeControl = identityEntityGenome.change_control ?? {}
  const entitySafety = identityEntityGenome.entity_safety ?? {}
  const permissionsFor = (actorName) => new Set(actors[actorName]?.permissions ?? [])
  const forbiddenExternalReleasePermissions = ['approve_release', 'approve_refund', 'release_funds', 'release_escrow']

  for (const actorName of ['sender', 'recipient', 'reviewer']) {
    if (!actors[actorName]) issues.push(`missing_actor:${actorName}`)
  }
  for (const actorName of ['sender', 'recipient']) {
    const permissions = permissionsFor(actorName)
    for (const permission of forbiddenExternalReleasePermissions) {
      if (permissions.has(permission)) issues.push(`wrong_person_can_release_funds:${actorName}`)
    }
  }
  if (!permissionsFor('recipient').has('submit_proof')) issues.push('recipient_cannot_submit_proof')
  if (!permissionsFor('recipient').has('receive_release')) issues.push('recipient_cannot_receive_release')
  if (!permissionsFor('sender').has('open_dispute')) issues.push('sender_cannot_open_dispute')
  if (!permissionsFor('reviewer').has('resolve_dispute')) issues.push('reviewer_cannot_resolve_dispute')
  if (!permissionsFor('reviewer').has('approve_release')) issues.push('reviewer_cannot_approve_release')
  if (actors.reviewer && actors.reviewer.verification_required !== 'internal_staff') issues.push('reviewer_not_internally_verified')
  if (changeControl.recipient_can_edit_conditions_after_funds_locked !== false) {
    issues.push('recipient_can_edit_conditions_after_funds_locked')
  }
  if (changeControl.sender_can_change_proof_requirements_after_recipient_started_work !== false) {
    issues.push('sender_can_change_proof_requirements_after_work_started')
  }
  if (changeControl.release_approval_requires_reviewer_or_policy_guard !== true) {
    issues.push('release_approval_guard_missing')
  }

  const reviewerCanSee = new Set(accessControl.reviewer_can_see ?? [])
  const reviewerCannotSee = new Set([
    ...(accessControl.reviewer_cannot_see ?? []),
    'full_wallet_history',
    'raw_biometric_secret',
    'unrelated_wallet_history'
  ])
  for (const forbiddenView of reviewerCannotSee) {
    if (reviewerCanSee.has(forbiddenView)) issues.push(`reviewer_privacy_overreach:${forbiddenView}`)
  }
  if (!entitySafety.child_or_guardian_rules) issues.push('child_or_guardian_rules_missing')
  if (!entitySafety.business_entity_verification) issues.push('business_entity_verification_missing')
  if (!entitySafety.claimable_identity_safety) issues.push('claimable_identity_safety_missing')
  if (!(identityEntityGenome.relationships ?? []).includes('reviewer_mediates_dispute')) {
    issues.push('reviewer_dispute_relationship_missing')
  }

  const dedupedIssues = [...new Set(issues)]

  return {
    valid: dedupedIssues.length === 0,
    issues: dedupedIssues,
    fields: IDENTITY_ENTITY_GENOME_FIELDS,
    checks: IDENTITY_ENTITY_DOCTOR_CHECKS,
    actorCount: Object.keys(actors).length,
    releaseBlocked: dedupedIssues.some((issue) => (
      issue.includes('wrong_person')
      || issue.includes('edit_conditions')
      || issue.includes('change_proof_requirements')
      || issue.includes('release_approval_guard_missing')
      || issue.includes('claimable_identity_safety_missing')
      || issue.includes('business_entity_verification_missing')
    ))
  }
}

export function validateVerificationGenome(verificationGenome = {}, requiredProofTypes = []) {
  const missing = VERIFICATION_GENOME_FIELDS.filter((field) => {
    const value = verificationGenome[field]
    if (Array.isArray(value)) return value.length === 0
    if (value && typeof value === 'object') return Object.keys(value).length === 0
    return value === undefined || value === null || value === ''
  })
  const issues = [...missing.map((field) => `missing_${field}`)]
  const knownProofTypes = new Set(VERIFICATION_GENOME_PROOF_TYPES)
  const proofTypes = verificationGenome.proof_types ?? []
  const proofTypeSet = new Set(proofTypes)
  const requiredProofs = verificationGenome.required_proofs ?? []
  const proofRequirements = verificationGenome.proof_requirements ?? {}
  const releaseRequires = verificationGenome.acceptance_criteria?.release_requires ?? []
  const auditEvents = verificationGenome.audit_events ?? []

  for (const proofType of proofTypes) {
    if (VERIFICATION_SKIPPED_PROVIDER_API_CHANNELS.includes(proofType)) {
      issues.push(`third_party_provider_api_proof_skipped:${proofType}`)
      continue
    }
    if (!knownProofTypes.has(proofType)) issues.push(`unknown_proof_type:${proofType}`)
    const requirement = proofRequirements[proofType]
    if (!requirement) issues.push(`proof_requirement_missing:${proofType}`)
    if (requirement?.required === true && !(requirement.criteria ?? []).length) {
      issues.push(`required_proof_has_no_acceptance_criteria:${proofType}`)
    }
    if (requirement?.provider_api === true || String(requirement?.source ?? '').includes('third_party_provider_api')) {
      issues.push(`third_party_provider_api_proof_skipped:${proofType}`)
    }
  }
  for (const proof of requiredProofs) {
    if (!knownProofTypes.has(proof.type)) issues.push(`unknown_required_proof_type:${proof.type}`)
    if (proof.required === true && !proofTypeSet.has(proof.type)) issues.push(`required_proof_type_not_listed:${proof.type}`)
    if (proof.type === 'gps_proof') {
      if (!proof.expected_location?.latitude || !proof.expected_location?.longitude) issues.push('gps_expected_location_missing')
      if (!proof.allowed_radius_meters || proof.allowed_radius_meters > 500) issues.push('gps_radius_missing_or_too_loose')
      if (!(proof.spoofing_controls ?? []).includes('impossible_travel_detection')) issues.push('gps_spoofing_controls_incomplete')
      if (!verificationGenome.fallbacks?.gps_proof_failure) issues.push('gps_failure_fallback_missing')
    }
    if (proof.type === 'photo_proof') {
      if (!(proof.expected_content ?? []).length) issues.push('photo_expected_content_missing')
      if (!(proof.metadata_required ?? []).includes('timestamp')) issues.push('photo_timestamp_metadata_missing')
      if (proof.ai_review?.enabled === true && !proof.ai_review.minimum_confidence) issues.push('ai_review_confidence_threshold_missing')
      if (proof.ai_review?.enabled === true && !(proof.human_review_required_if ?? []).includes('ai_confidence_below_threshold')) {
        issues.push('low_ai_confidence_human_review_missing')
      }
      if (!(proof.human_review_required_if ?? []).includes('transaction_amount_high')) issues.push('high_value_human_review_missing')
      if (!verificationGenome.fallbacks?.camera_unavailable) issues.push('camera_unavailable_fallback_missing')
    }
  }
  for (const requiredProofType of requiredProofTypes) {
    if (!proofTypeSet.has(requiredProofType)) issues.push(`required_proof_type_missing:${requiredProofType}`)
  }
  if (!releaseRequires.includes('all_required_proofs_pass')) issues.push('release_not_gated_by_all_required_proofs')
  if (!releaseRequires.includes('proof_matches_expected_delivery_description')) issues.push('release_not_gated_by_expected_description_match')
  if (!proofTypeSet.has('human_review') && !verificationGenome.review_path?.human_review) issues.push('human_review_path_missing')
  if (proofTypeSet.has('biometric_confirmation')) {
    const biometricPolicy = String(verificationGenome.privacy_controls?.biometric_confirmation ?? '')
    if (!biometricPolicy.includes('consent') || !biometricPolicy.includes('policy_basis')) {
      issues.push('biometric_confirmation_missing_consent_and_policy_basis')
    }
  }
  if (proofTypes.length > 0 && proofTypes.every((proofType) => ['device_metadata', 'timestamp_validation'].includes(proofType))) {
    issues.push('weak_proof_set_only_metadata_or_timestamp')
  }
  if (verificationGenome.proof_combination_rule === 'gps_and_image_required' && (!proofTypeSet.has('gps_proof') || !proofTypeSet.has('photo_proof'))) {
    issues.push('gps_and_image_combination_not_satisfied')
  }
  if (!verificationGenome.proof_deadline_hours || verificationGenome.proof_deadline_hours <= 0) issues.push('proof_deadline_missing')
  if (!String(verificationGenome.evidence_retention_policy ?? '').includes('minimize')) issues.push('evidence_retention_not_minimized')
  if (!(verificationGenome.recipient_explanation ?? []).length) issues.push('recipient_proof_explanation_missing')
  if (!(verificationGenome.abuse_controls?.sender_abuse ?? []).includes('immutable_proof_requirements_after_funding')) {
    issues.push('sender_abuse_control_missing')
  }
  if (!(verificationGenome.abuse_controls?.recipient_abuse ?? []).includes('required_evidence_match')) {
    issues.push('recipient_weak_proof_control_missing')
  }
  if (!auditEvents.includes('proof_submitted')) issues.push('proof_submission_audit_event_missing')
  if (!auditEvents.includes('proof_accepted_or_rejected')) issues.push('proof_decision_audit_event_missing')

  const dedupedIssues = [...new Set(issues)]

  return {
    valid: dedupedIssues.length === 0,
    issues: dedupedIssues,
    fields: VERIFICATION_GENOME_FIELDS,
    proofTypes: VERIFICATION_GENOME_PROOF_TYPES,
    checks: VERIFICATION_DOCTOR_CHECKS,
    skippedProviderApiChannels: VERIFICATION_SKIPPED_PROVIDER_API_CHANNELS,
    releaseBlocked: dedupedIssues.some((issue) => (
      issue.includes('required_proof')
      || issue.includes('release_not_gated')
      || issue.includes('third_party_provider_api_proof_skipped')
      || issue.includes('weak_proof_set')
      || issue.includes('unknown_proof_type')
      || issue.includes('combination_not_satisfied')
      || issue.includes('spoofing_controls')
      || issue.includes('human_review_missing')
    ))
  }
}

export function validateComplianceJurisdictionGenome(complianceGenome = {}) {
  const missing = COMPLIANCE_JURISDICTION_GENOME_FIELDS.filter((field) => {
    const value = complianceGenome[field]
    if (Array.isArray(value)) return value.length === 0
    if (value && typeof value === 'object') return Object.keys(value).length === 0
    return value === undefined || value === null || value === ''
  })
  const issues = [...missing.map((field) => `missing_${field}`)]
  const jurisdictions = complianceGenome.jurisdictions ?? {}
  const classification = complianceGenome.regulatory_classification ?? {}
  const controls = new Set(complianceGenome.required_controls ?? [])
  const prohibited = new Set(complianceGenome.prohibited_behaviors ?? [])
  const resemblance = new Set(complianceGenome.regulatory_resemblance ?? [])
  const requiredControls = [
    'kyc_threshold_check',
    'aml_screening_if_required',
    'sanctions_screening_if_required',
    'transaction_limit_policy',
    'suspicious_activity_monitoring',
    'fee_disclosure',
    'consent_capture',
    'complaint_and_dispute_process'
  ]
  const requiredProhibitions = [
    'hidden_fee',
    'unauthorized_fund_hold',
    'indefinite_escrow_without_terms',
    'cross_border_release_without_compliance_check'
  ]

  if (!(jurisdictions.allowed ?? []).length) issues.push('allowed_jurisdiction_missing')
  if (!(jurisdictions.blocked ?? []).includes('unknown_or_unsupported')) issues.push('unsupported_jurisdiction_not_blocked')
  for (const control of requiredControls) {
    if (!controls.has(control)) issues.push(`required_control_missing:${control}`)
  }
  for (const behavior of requiredProhibitions) {
    if (!prohibited.has(behavior)) issues.push(`prohibited_behavior_missing:${behavior}`)
  }
  if (classification.money_movement === true && !resemblance.has('money_movement')) issues.push('money_movement_resemblance_missing')
  if (classification.escrow_like_behavior === true && !resemblance.has('escrow_like_obligation')) {
    issues.push('escrow_like_resemblance_missing')
  }
  if (classification.stored_value === 'possible' && !resemblance.has('stored_value_possible')) {
    issues.push('stored_value_resemblance_missing')
  }
  if (classification.remittance_like_behavior && !resemblance.has('cross_border_remittance_possible')) {
    issues.push('cross_border_remittance_resemblance_missing')
  }
  if (classification.credit_like_behavior === true && !controls.has('credit_policy_review')) issues.push('credit_like_behavior_requires_review')
  if (classification.insurance_like_behavior === true && !controls.has('insurance_like_policy_review')) {
    issues.push('insurance_like_behavior_requires_review')
  }
  if (classification.investment_like_behavior === true && !controls.has('investment_like_policy_review')) {
    issues.push('investment_like_behavior_requires_review')
  }

  const dedupedIssues = [...new Set(issues)]

  return {
    valid: dedupedIssues.length === 0,
    issues: dedupedIssues,
    fields: COMPLIANCE_JURISDICTION_GENOME_FIELDS,
    checks: COMPLIANCE_JURISDICTION_DOCTOR_CHECKS,
    regulatoryResemblance: [...resemblance],
    releaseBlocked: dedupedIssues.some((issue) => (
      issue.includes('required_control_missing')
      || issue.includes('prohibited_behavior_missing')
      || issue.includes('jurisdiction')
      || issue.includes('requires_review')
      || issue.includes('resemblance_missing')
    ))
  }
}

export function validateRiskFraudGenome(riskGenome = {}) {
  const missing = RISK_FRAUD_GENOME_FIELDS.filter((field) => {
    const value = riskGenome[field]
    if (Array.isArray(value)) return value.length === 0
    if (value && typeof value === 'object') return Object.keys(value).length === 0
    return value === undefined || value === null || value === ''
  })
  const issues = [...missing.map((field) => `missing_${field}`)]
  const riskClasses = riskGenome.risk_classes ?? []
  const controls = riskGenome.risk_controls ?? {}
  const answeredQuestions = new Set(riskGenome.adversarial_questions ?? [])
  const riskRank = { low: 1, medium: 2, high: 3, critical: 4 }
  const inherentRisk = riskGenome.risk_score?.inherent_risk
  const residualRisk = riskGenome.risk_score?.residual_risk_after_controls
  const releaseRiskClass = riskGenome.risk_score?.release_risk_class

  for (const riskClass of riskClasses) {
    const directControls = controls[riskClass] ?? controls[riskClass.replace('_submission', '')] ?? []
    const mappedControls = riskClass === 'evidence_manipulation'
      ? controls.fake_photo
      : riskClass === 'sender_bad_faith_dispute'
        ? controls.sender_abuse
        : riskClass === 'recipient_non_delivery'
          ? controls.recipient_abuse
          : directControls
    if (!mappedControls?.length) issues.push(`risk_controls_missing:${riskClass}`)
  }
  for (const question of RISK_FRAUD_DOCTOR_QUESTIONS) {
    if (!answeredQuestions.has(question)) issues.push(`adversarial_question_unanswered:${question}`)
  }
  if (riskRank[residualRisk] > riskRank[inherentRisk]) issues.push('residual_risk_exceeds_inherent_risk')
  if (inherentRisk === 'high' && residualRisk === 'high' && releaseRiskClass !== 'governor_review') {
    issues.push('high_residual_risk_requires_governor_review')
  }
  if (['high', 'critical'].includes(inherentRisk) && !['supervised', 'governor_review'].includes(releaseRiskClass)) {
    issues.push('high_inherent_risk_cannot_auto_release')
  }
  if (!(controls.gps_spoofing ?? []).includes('location_velocity_check')) issues.push('fake_gps_control_missing')
  if (!(controls.fake_photo ?? []).includes('image_reuse_detection')) issues.push('old_image_upload_control_missing')
  if (!(controls.social_engineering ?? []).includes('pressure_warning_copy')) issues.push('vulnerable_user_pressure_control_missing')
  if (!(controls.network_outage ?? []).includes('offline_capture_queue')) issues.push('network_outage_control_missing')
  if (!(controls.ai_misclassification ?? []).includes('human_review_for_uncertain_cases')) {
    issues.push('ai_misclassification_control_missing')
  }

  const dedupedIssues = [...new Set(issues)]

  return {
    valid: dedupedIssues.length === 0,
    issues: dedupedIssues,
    fields: RISK_FRAUD_GENOME_FIELDS,
    questions: RISK_FRAUD_DOCTOR_QUESTIONS,
    releaseBlocked: dedupedIssues.some((issue) => (
      issue.includes('risk_controls_missing')
      || issue.includes('adversarial_question_unanswered')
      || issue.includes('high_residual_risk')
      || issue.includes('cannot_auto_release')
      || issue.includes('control_missing')
    ))
  }
}

export function validateExperienceGenome(experienceGenome = {}) {
  const missing = EXPERIENCE_GENOME_FIELDS.filter((field) => {
    const value = experienceGenome[field]
    if (Array.isArray(value)) return value.length === 0
    if (value && typeof value === 'object') return Object.keys(value).length === 0
    return value === undefined || value === null || value === ''
  })
  const issues = [...missing.map((field) => `missing_${field}`)]
  const senderJourney = experienceGenome.user_journey?.sender ?? []
  const recipientJourney = experienceGenome.user_journey?.recipient ?? []
  const explanations = new Set(experienceGenome.required_explanations ?? [])
  const requiredExplanations = [
    'what_happens_to_the_money',
    'when_recipient_can_access_it',
    'what_proof_is_required',
    'what_happens_if_proof_fails',
    'when_refund_happens',
    'who_can_see_the_evidence'
  ]

  if (!senderJourney.includes('confirm_funds_lock')) issues.push('funds_locked_not_confirmed_in_sender_journey')
  if (!senderJourney.includes('review_terms')) issues.push('sender_terms_review_missing')
  if (!senderJourney.includes('approve_or_dispute_proof')) issues.push('sender_proof_review_or_dispute_missing')
  if (!recipientJourney.includes('review_conditions')) issues.push('recipient_terms_review_missing')
  if (!recipientJourney.includes('accept_or_decline_terms')) issues.push('recipient_accept_or_decline_missing')
  if (recipientJourney.indexOf('review_conditions') > recipientJourney.indexOf('submit_gps_and_photo_proof')) {
    issues.push('recipient_can_submit_proof_before_reviewing_terms')
  }
  if (recipientJourney.indexOf('accept_or_decline_terms') > recipientJourney.indexOf('submit_gps_and_photo_proof')) {
    issues.push('recipient_can_start_work_before_accepting_terms')
  }
  if ((experienceGenome.cognitive_load?.max_steps_before_summary ?? Infinity) > 3) issues.push('too_many_steps_before_summary')
  if (experienceGenome.cognitive_load?.plain_language_required !== true) issues.push('plain_language_not_required')
  if ((experienceGenome.copy?.forbidden_terms_present ?? []).length) issues.push('complex_terms_visible_to_user')
  if (experienceGenome.copy?.pressure_language_present === true) issues.push('pressure_language_present')
  for (const term of experienceGenome.cognitive_load?.preferred_terms ?? []) {
    if (!(experienceGenome.copy?.visible_terms ?? []).includes(term)) issues.push(`preferred_plain_term_missing:${term}`)
  }
  for (const explanation of requiredExplanations) {
    if (!explanations.has(explanation)) issues.push(`required_explanation_missing:${explanation}`)
  }
  if (experienceGenome.disclosure_placement?.funds_locked !== 'before_confirmation') issues.push('funds_lock_disclosure_not_before_confirmation')
  if (experienceGenome.disclosure_placement?.fees !== 'before_confirmation') issues.push('fees_not_visible_before_confirmation')
  if (experienceGenome.disclosure_placement?.proof_requirements !== 'before_accepting_terms') {
    issues.push('proof_requirements_not_shown_before_terms_acceptance')
  }
  if (!(experienceGenome.consent_flow ?? []).includes('recipient_consents_to_location_capture')) issues.push('location_capture_consent_missing')
  const accessibility = experienceGenome.accessibility_behavior ?? {}
  for (const requirement of ['keyboard_accessible', 'screen_reader_labels', 'color_not_only_signal', 'reduced_motion_respected']) {
    if (accessibility[requirement] !== true) issues.push(`accessibility_missing:${requirement}`)
  }
  const moneyAnimation = String(experienceGenome.animations?.money_movement ?? '')
  if (moneyAnimation === 'instant_release' || moneyAnimation.includes('shows_release_before_state')) {
    issues.push('misleading_money_animation')
  }
  if (!String(experienceGenome.animations?.disabled_actions ?? '').includes('reason')) issues.push('disabled_states_reason_missing')
  if (!experienceGenome.failure_states?.proof_rejected || !(experienceGenome.recovery_affordances ?? []).includes('appeal_rejection')) {
    issues.push('proof_rejection_not_recoverable')
  }
  if (!experienceGenome.failure_states?.upload_failed || !(experienceGenome.recovery_affordances ?? []).includes('retry_upload')) {
    issues.push('upload_failure_not_recoverable')
  }

  const dedupedIssues = [...new Set(issues)]

  return {
    valid: dedupedIssues.length === 0,
    issues: dedupedIssues,
    fields: EXPERIENCE_GENOME_FIELDS,
    checks: EXPERIENCE_DOCTOR_CHECKS,
    releaseBlocked: dedupedIssues.some((issue) => (
      issue.includes('funds')
      || issue.includes('recipient')
      || issue.includes('fees')
      || issue.includes('proof_requirements')
      || issue.includes('pressure_language')
      || issue.includes('misleading')
      || issue.includes('not_recoverable')
      || issue.includes('accessibility_missing')
    ))
  }
}

export function validateDisclosureConsentGenome(disclosureConsentGenome = {}) {
  const missing = DISCLOSURE_CONSENT_GENOME_FIELDS.filter((field) => {
    const value = disclosureConsentGenome[field]
    if (Array.isArray(value)) return value.length === 0
    if (value && typeof value === 'object') return Object.keys(value).length === 0
    return value === undefined || value === null || value === ''
  })
  const issues = [...missing.map((field) => `missing_${field}`)]
  const disclosures = disclosureConsentGenome.disclosures ?? []
  const disclosureById = new Map(disclosures.map((disclosure) => [disclosure.id, disclosure]))
  const consents = new Set(disclosureConsentGenome.consents ?? [])
  const consentRules = new Set(disclosureConsentGenome.consent_rules ?? [])
  const requiredDisclosureIds = [
    'funds_locked_disclosure',
    'proof_requirement_disclosure',
    'evidence_privacy_disclosure',
    'fee_disclosure'
  ]

  for (const disclosureId of requiredDisclosureIds) {
    const disclosure = disclosureById.get(disclosureId)
    if (!disclosure) {
      issues.push(`required_disclosure_missing:${disclosureId}`)
      continue
    }
    if (disclosure.required !== true) issues.push(`required_disclosure_not_marked_required:${disclosureId}`)
    if (!disclosure.plain_language || disclosure.plain_language.length < 40) issues.push(`disclosure_not_readable:${disclosureId}`)
  }
  if (disclosureById.get('funds_locked_disclosure')?.timing !== 'before_confirmation') {
    issues.push('funds_lock_disclosure_after_irreversible_action')
  }
  if (disclosureById.get('proof_requirement_disclosure')?.timing !== 'before_accepting_terms') {
    issues.push('proof_disclosure_not_before_recipient_accepts_terms')
  }
  if (disclosureById.get('evidence_privacy_disclosure')?.timing !== 'before_proof_submission') {
    issues.push('evidence_privacy_disclosure_after_data_collection')
  }
  if (disclosureById.get('fee_disclosure')?.timing !== 'before_confirmation') {
    issues.push('fee_disclosure_not_before_confirmation')
  }
  for (const consent of [
    'sender_confirms_funds_lock',
    'recipient_accepts_conditions',
    'recipient_consents_to_location_capture',
    'recipient_consents_to_evidence_review'
  ]) {
    if (!consents.has(consent)) issues.push(`consent_missing:${consent}`)
  }
  for (const rule of ['consent_must_be_explicit', 'consent_must_be_specific', 'consent_must_be_recorded']) {
    if (!consentRules.has(rule)) issues.push(`consent_rule_missing:${rule}`)
  }
  if (!disclosureConsentGenome.decline_paths?.recipient_declines_conditions) issues.push('recipient_decline_outcome_missing')
  if (!disclosureConsentGenome.decline_paths?.recipient_declines_evidence_capture) issues.push('evidence_capture_decline_outcome_missing')
  if (disclosureConsentGenome.presentation?.hidden_behind_small_links === true) issues.push('disclosures_hidden_behind_small_links')
  if (disclosureConsentGenome.presentation?.plain_language_required !== true) issues.push('disclosure_plain_language_not_required')
  if (disclosureConsentGenome.presentation?.readable_body_copy !== true) issues.push('disclosure_body_copy_not_readable')
  if (disclosureConsentGenome.behavior_alignment !== 'matches_conditional_lock_release_refund_and_evidence_review') {
    issues.push('disclosure_does_not_match_financial_behavior')
  }

  const dedupedIssues = [...new Set(issues)]

  return {
    valid: dedupedIssues.length === 0,
    issues: dedupedIssues,
    fields: DISCLOSURE_CONSENT_GENOME_FIELDS,
    checks: DISCLOSURE_CONSENT_DOCTOR_CHECKS,
    releaseBlocked: dedupedIssues.some((issue) => (
      issue.includes('required_disclosure')
      || issue.includes('after_irreversible')
      || issue.includes('after_data_collection')
      || issue.includes('fee_disclosure')
      || issue.includes('consent_missing')
      || issue.includes('consent_rule_missing')
      || issue.includes('decline_outcome_missing')
      || issue.includes('hidden')
      || issue.includes('does_not_match')
    ))
  }
}

export function validateDataPrivacyGenome(dataPrivacyGenome = {}) {
  const missing = DATA_PRIVACY_GENOME_FIELDS.filter((field) => {
    const value = dataPrivacyGenome[field]
    if (Array.isArray(value)) return value.length === 0
    if (value && typeof value === 'object') return Object.keys(value).length === 0
    return value === undefined || value === null || value === ''
  })
  const issues = [...missing.map((field) => `missing_${field}`)]
  const dataCollected = dataPrivacyGenome.data_collected ?? []
  const dataPurpose = dataPrivacyGenome.data_purpose ?? {}
  const retention = dataPrivacyGenome.retention ?? {}
  const access = dataPrivacyGenome.access ?? {}
  const controls = new Set(dataPrivacyGenome.privacy_controls ?? [])
  const sensitiveFields = ['gps_coordinates', 'photo_evidence', 'device_hash', 'verification_score', 'dispute_notes']

  for (const field of dataCollected) {
    if (!dataPurpose[field]) issues.push(`data_purpose_missing:${field}`)
  }
  for (const field of sensitiveFields) {
    if (dataCollected.includes(field) && !retention[field]) issues.push(`retention_missing:${field}`)
  }
  for (const field of ['gps_coordinates', 'photo_evidence']) {
    if (dataCollected.includes(field) && !String(retention[field] ?? '').includes('minimize')) {
      issues.push(`sensitive_data_retained_too_long:${field}`)
    }
  }
  if (dataCollected.includes('device_hash') && !String(retention.device_hash ?? '').includes('privacy_preserving_hash')) {
    issues.push('device_hash_not_privacy_preserving')
  }
  if ((access.sender ?? []).includes('submitted_evidence') || (access.sender ?? []).includes('full_evidence')) {
    issues.push('image_data_shared_unnecessarily_with_sender')
  }
  if ((access.ai_model ?? []).some((field) => ['sender_user_id', 'recipient_user_id', 'full_user_profile'].includes(field))) {
    issues.push('ai_model_receives_unnecessary_personal_data')
  }
  if (!(access.ai_model ?? []).includes('no_unnecessary_personal_data')) issues.push('ai_model_data_minimization_missing')
  for (const control of ['data_minimization', 'encryption_at_rest', 'encryption_in_transit', 'audit_access', 'role_based_access_control']) {
    if (!controls.has(control)) issues.push(`privacy_control_missing:${control}`)
  }
  if (!dataPrivacyGenome.user_notice) issues.push('user_notice_for_data_access_missing')
  if (!dataPrivacyGenome.privacy_safe_fallback?.gps_unavailable) issues.push('privacy_safe_gps_fallback_missing')
  if (!dataPrivacyGenome.privacy_safe_fallback?.camera_unavailable) issues.push('privacy_safe_camera_fallback_missing')

  const dedupedIssues = [...new Set(issues)]

  return {
    valid: dedupedIssues.length === 0,
    issues: dedupedIssues,
    fields: DATA_PRIVACY_GENOME_FIELDS,
    checks: DATA_PRIVACY_DOCTOR_CHECKS,
    releaseBlocked: dedupedIssues.some((issue) => (
      issue.includes('data_purpose_missing')
      || issue.includes('retention_missing')
      || issue.includes('retained_too_long')
      || issue.includes('unnecessarily')
      || issue.includes('ai_model')
      || issue.includes('privacy_control_missing')
      || issue.includes('user_notice')
      || issue.includes('fallback_missing')
    ))
  }
}

export function validateAssetGenome(assetGenome = {}) {
  const missing = ASSET_GENOME_FIELDS.filter((field) => {
    const value = assetGenome[field]
    if (Array.isArray(value)) return value.length === 0
    if (value && typeof value === 'object') return Object.keys(value).length === 0
    return value === undefined || value === null || value === ''
  })
  const issues = [...missing.map((field) => `missing_${field}`)]
  const requiredAssets = new Set(assetGenome.required_assets ?? [])
  const assetSources = assetGenome.asset_sources ?? {}
  const stateAssetMap = assetGenome.state_asset_map ?? {}
  const requiredStateAssets = {
    funds_locked: 'icon_locked_funds',
    awaiting_recipient_proof: 'status_badge_pending_proof',
    proof_under_review: 'animation_proof_under_review',
    released: 'status_badge_released',
    refunded: 'status_badge_refunded'
  }

  for (const asset of [
    'icon_locked_funds',
    'icon_gps_pin_verified',
    'icon_photo_proof',
    'animation_funds_safely_held',
    'animation_proof_under_review',
    'status_badge_pending_proof',
    'status_badge_released',
    'status_badge_refunded'
  ]) {
    if (!requiredAssets.has(asset)) issues.push(`required_asset_missing:${asset}`)
  }
  for (const [asset, source] of Object.entries(assetSources)) {
    if (!['semantic_asset_vault', 'motion_meaning_system', 'disclosure_template_registry'].includes(source)) {
      issues.push(`unknown_asset_source:${asset}`)
    }
  }
  for (const [state, expectedAsset] of Object.entries(requiredStateAssets)) {
    if (stateAssetMap[state] !== expectedAsset) issues.push(`state_asset_mismatch:${state}`)
  }
  if (assetGenome.motion_rules?.funds_locked_animation?.meaning !== 'money_secured_not_lost') {
    issues.push('locked_funds_motion_meaning_incorrect')
  }
  if (!assetGenome.motion_rules?.funds_locked_animation?.forbidden_feeling) issues.push('locked_funds_forbidden_feeling_missing')
  if (!assetGenome.motion_rules?.release_animation?.forbidden_feeling) issues.push('release_forbidden_feeling_missing')
  if (assetGenome.visual_safety_rules?.culturally_reviewed !== true) issues.push('cultural_review_missing')
  if (assetGenome.visual_safety_rules?.color_does_not_imply_success_before_terminal_state !== true) {
    issues.push('color_implies_success_before_success')
  }
  if (assetGenome.visual_safety_rules?.dark_patterns_absent !== true) issues.push('visual_dark_pattern_risk')
  if (assetGenome.accessibility_rules?.all_icons_have_labels !== true) issues.push('asset_accessible_labels_missing')
  if (assetGenome.accessibility_rules?.animations_have_reduced_motion_variant !== true) issues.push('reduced_motion_asset_missing')
  if (assetGenome.accessibility_rules?.non_color_status_text_present !== true) issues.push('non_color_status_text_missing')

  const dedupedIssues = [...new Set(issues)]

  return {
    valid: dedupedIssues.length === 0,
    issues: dedupedIssues,
    fields: ASSET_GENOME_FIELDS,
    checks: ASSET_DOCTOR_CHECKS,
    releaseBlocked: dedupedIssues.some((issue) => (
      issue.includes('required_asset_missing')
      || issue.includes('state_asset_mismatch')
      || issue.includes('motion_meaning')
      || issue.includes('color_implies')
      || issue.includes('dark_pattern')
      || issue.includes('accessible')
      || issue.includes('reduced_motion')
    ))
  }
}

export function validateAlgorithmIntelligenceGenome(algorithmGenome = {}) {
  const missing = ALGORITHM_INTELLIGENCE_GENOME_FIELDS.filter((field) => {
    const value = algorithmGenome[field]
    if (Array.isArray(value)) return value.length === 0
    if (value && typeof value === 'object') return Object.keys(value).length === 0
    return value === undefined || value === null || value === ''
  })
  const issues = [...missing.map((field) => `missing_${field}`)]
  const modelsUsed = algorithmGenome.models_used ?? []
  const authority = algorithmGenome.decision_authority ?? {}
  const thresholds = algorithmGenome.confidence_thresholds ?? {}
  const explanations = new Set(algorithmGenome.explainability_required ?? [])
  const forbiddenActions = new Set(algorithmGenome.forbidden_ai_actions ?? [])
  const governance = new Set(algorithmGenome.governance_controls ?? [])

  for (const model of ['gps_anomaly_detector', 'image_content_verifier', 'fraud_risk_scorer', 'dispute_triage_model']) {
    if (!modelsUsed.includes(model)) issues.push(`model_missing:${model}`)
  }
  if (authority.image_content_verifier?.can_auto_reject === true) issues.push('ai_can_auto_reject_without_human_review')
  if (authority.image_content_verifier?.low_confidence_requires_human_review !== true) {
    issues.push('low_confidence_human_review_missing')
  }
  if (authority.fraud_risk_scorer?.can_permanently_confiscate_funds === true) {
    issues.push('ai_can_permanently_confiscate_funds')
  }
  if (authority.fraud_risk_scorer?.can_block_release === true && !governance.has('human_review_for_high_risk_blocks')) {
    issues.push('ai_release_block_missing_human_review_governance')
  }
  if (authority.dispute_triage_model?.can_resolve_dispute_without_reviewer === true) {
    issues.push('ai_can_resolve_dispute_without_reviewer')
  }
  for (const [name, value] of Object.entries(thresholds)) {
    if (typeof value !== 'number' || value <= 0 || value >= 1) issues.push(`confidence_threshold_invalid:${name}`)
  }
  for (const explanation of ['release_decision_reason', 'rejection_reason', 'additional_proof_reason']) {
    if (!explanations.has(explanation)) issues.push(`explanation_missing:${explanation}`)
  }
  for (const action of [
    'irreversible_fund_loss_without_human_review',
    'hidden_scoring_without_explanation',
    'discriminatory_persona_targeting'
  ]) {
    if (!forbiddenActions.has(action)) issues.push(`forbidden_ai_action_missing:${action}`)
  }
  for (const control of ['appeal_path', 'bias_monitoring', 'jurisdiction_allowlist', 'state_transition_guardrails']) {
    if (!governance.has(control)) issues.push(`algorithm_governance_missing:${control}`)
  }
  if (!algorithmGenome.state_transition_links?.image_auto_accept) issues.push('ai_output_state_transition_link_missing')
  if (!algorithmGenome.deterministic_fallbacks?.model_unavailable) issues.push('deterministic_model_unavailable_fallback_missing')
  if (!algorithmGenome.deterministic_fallbacks?.jurisdiction_disallows_model) issues.push('jurisdiction_disallowed_model_fallback_missing')

  const dedupedIssues = [...new Set(issues)]

  return {
    valid: dedupedIssues.length === 0,
    issues: dedupedIssues,
    fields: ALGORITHM_INTELLIGENCE_GENOME_FIELDS,
    checks: ALGORITHM_INTELLIGENCE_DOCTOR_CHECKS,
    releaseBlocked: dedupedIssues.some((issue) => (
      issue.includes('ai_can')
      || issue.includes('human_review_missing')
      || issue.includes('confiscate')
      || issue.includes('threshold_invalid')
      || issue.includes('explanation_missing')
      || issue.includes('governance_missing')
      || issue.includes('state_transition_link_missing')
      || issue.includes('fallback_missing')
    ))
  }
}

export function validateObservabilityGenome(observabilityGenome = {}) {
  const missing = OBSERVABILITY_GENOME_FIELDS.filter((field) => {
    const value = observabilityGenome[field]
    if (Array.isArray(value)) return value.length === 0
    if (value && typeof value === 'object') return Object.keys(value).length === 0
    return value === undefined || value === null || value === ''
  })
  const issues = [...missing.map((field) => `missing_${field}`)]
  const telemetryEvents = new Set(observabilityGenome.telemetry_events ?? [])
  const healthMetrics = new Set(observabilityGenome.health_metrics ?? [])
  const alerts = new Set(observabilityGenome.alerts ?? [])
  const playbooks = observabilityGenome.diagnostic_playbooks ?? {}

  for (const event of [
    'capability_created',
    'terms_confirmed',
    'funds_locked',
    'proof_requested',
    'proof_submitted',
    'human_review_triggered',
    'dispute_opened',
    'funds_released',
    'funds_refunded',
    'transaction_expired'
  ]) {
    if (!telemetryEvents.has(event)) issues.push(`telemetry_event_missing:${event}`)
  }
  for (const event of ['gps_check_failed', 'image_check_failed']) {
    if (!telemetryEvents.has(event)) issues.push(`failure_telemetry_event_missing:${event}`)
  }
  for (const metric of [
    'proof_submission_success_rate',
    'stuck_funds_count',
    'user_confusion_signals',
    'support_ticket_rate',
    'fraud_flag_rate',
    'abandoned_setup_rate'
  ]) {
    if (!healthMetrics.has(metric)) issues.push(`health_metric_missing:${metric}`)
  }
  for (const alert of [
    'funds_locked_beyond_policy_limit',
    'release_without_required_proof',
    'ledger_state_mismatch',
    'user_dropoff_after_disclosure'
  ]) {
    if (!alerts.has(alert)) issues.push(`alert_missing:${alert}`)
  }
  if (!playbooks.proof_upload_failure_spike?.repairs?.includes('add_offline_upload_recovery')) {
    issues.push('proof_upload_failure_repair_playbook_missing')
  }
  if (!playbooks.funds_stuck_past_deadline?.repairs?.includes('auto_refund_patch')) {
    issues.push('stuck_funds_repair_playbook_missing')
  }
  if (!playbooks.funds_stuck_past_deadline?.repairs?.includes('runtime_quarantine')) {
    issues.push('runtime_quarantine_playbook_missing')
  }

  const dedupedIssues = [...new Set(issues)]

  return {
    valid: dedupedIssues.length === 0,
    issues: dedupedIssues,
    fields: OBSERVABILITY_GENOME_FIELDS,
    checks: OBSERVABILITY_DOCTOR_CHECKS,
    releaseBlocked: dedupedIssues.some((issue) => (
      issue.includes('telemetry_event_missing')
      || issue.includes('failure_telemetry')
      || issue.includes('health_metric_missing')
      || issue.includes('alert_missing')
      || issue.includes('playbook_missing')
    ))
  }
}

export function generateSimulationTestsFromGenome({ verificationGenome = {}, compositionGenome = {}, stateMachineGenome = {} } = {}) {
  const proofTypes = new Set(verificationGenome.proof_types ?? [])
  const compositionParts = new Set([
    ...(compositionGenome.atoms ?? []),
    ...(compositionGenome.micro_primitives ?? []),
    ...(compositionGenome.primitives ?? []),
    ...(compositionGenome.patterns ?? [])
  ])
  const states = new Set(stateMachineGenome.states ?? [])
  const generated = []

  if (proofTypes.has('gps_proof')) generated.push('valid_gps', 'invalid_gps', 'gps_unavailable', 'spoofed_gps')
  if ((verificationGenome.required_proofs ?? []).some((proof) => (proof.spoofing_controls ?? []).includes('impossible_travel_detection'))) {
    generated.push('impossible_travel_pattern')
  }
  if (compositionParts.has('auto_refund_primitive') || compositionParts.has('timeout_refund_pattern')) {
    generated.push('timeout_before_proof', 'timeout_after_proof', 'refund_after_timeout')
  }
  if (states.has('released')) generated.push('release_after_valid_proof', 'duplicate_release_attempt')
  if (states.has('disputed')) generated.push('dispute_after_valid_gps')

  return [...new Set(generated)]
}

export function validateSimulationTestingGenome(simulationGenome = {}, generatedCases = simulationGenome.generated_test_cases ?? []) {
  const missing = SIMULATION_TESTING_GENOME_FIELDS.filter((field) => {
    const value = simulationGenome[field]
    if (Array.isArray(value)) return value.length === 0
    if (value && typeof value === 'object') return Object.keys(value).length === 0
    return value === undefined || value === null || value === ''
  })
  const issues = [...missing.map((field) => `missing_${field}`)]
  const testClasses = new Set(simulationGenome.required_test_classes ?? [])
  const scenarios = new Set(simulationGenome.scenario_tests ?? [])
  const passCriteria = simulationGenome.pass_criteria ?? {}
  const generated = new Set(generatedCases)

  for (const testClass of [
    'schema_validation',
    'composition_validation',
    'financial_invariant_tests',
    'state_machine_tests',
    'abuse_case_tests',
    'jurisdiction_tests',
    'consent_tests',
    'disclosure_tests',
    'accessibility_tests',
    'runtime_failure_tests',
    'migration_tests'
  ]) {
    if (!testClasses.has(testClass)) issues.push(`test_class_missing:${testClass}`)
  }
  for (const scenario of [
    'recipient_submits_valid_proof',
    'recipient_submits_fake_photo',
    'gps_unavailable',
    'gps_spoof_attempt',
    'recipient_misses_deadline',
    'human_review_delayed',
    'network_failure_during_submission',
    'duplicate_release_attempt',
    'refund_after_expiry',
    'compliance_hold_before_release'
  ]) {
    if (!scenarios.has(scenario)) issues.push(`scenario_test_missing:${scenario}`)
  }
  for (const [criterion, requirement] of Object.entries({
    ledger_balance_integrity: 'must_pass',
    no_stuck_funds: 'must_pass',
    disclosure_before_lock: 'must_pass',
    consent_before_gps_capture: 'must_pass',
    accessibility_core_flow: 'must_pass'
  })) {
    if (passCriteria[criterion] !== requirement) issues.push(`pass_criterion_missing:${criterion}`)
  }
  for (const generatedCase of PROOF_GATED_PAYMENT_GENERATED_TEST_CASES) {
    if (!generated.has(generatedCase)) issues.push(`generated_test_case_missing:${generatedCase}`)
  }

  const dedupedIssues = [...new Set(issues)]

  return {
    valid: dedupedIssues.length === 0,
    issues: dedupedIssues,
    fields: SIMULATION_TESTING_GENOME_FIELDS,
    checks: SIMULATION_TESTING_DOCTOR_CHECKS,
    generatedCases: [...generated],
    releaseBlocked: dedupedIssues.some((issue) => (
      issue.includes('financial_invariant')
      || issue.includes('state_machine')
      || issue.includes('abuse_case')
      || issue.includes('jurisdiction')
      || issue.includes('consent')
      || issue.includes('disclosure')
      || issue.includes('accessibility')
      || issue.includes('pass_criterion')
      || issue.includes('generated_test_case_missing')
    ))
  }
}

export function validateLifecycleVersioningGenome(lifecycleGenome = {}) {
  const missing = LIFECYCLE_VERSIONING_GENOME_FIELDS.filter((field) => {
    const value = lifecycleGenome[field]
    if (Array.isArray(value)) return value.length === 0
    if (value && typeof value === 'object') return Object.keys(value).length === 0
    return value === undefined || value === null || value === ''
  })
  const issues = [...missing.map((field) => `missing_${field}`)]
  const currentVersion = lifecycleGenome.version
  const changeLog = lifecycleGenome.change_log ?? []
  const currentChange = changeLog.find((change) => change.version === currentVersion)
  const activeMigration = lifecycleGenome.migration_rules?.active_transactions ?? {}
  const rollback = lifecycleGenome.rollback ?? {}

  if (!String(currentVersion ?? '').match(/^\d+\.\d+\.\d+$/)) issues.push('version_not_semver')
  if (!['draft', 'internal_test', 'live_supervised', 'live', 'paused', 'retired'].includes(lifecycleGenome.lifecycle_status)) {
    issues.push('unknown_lifecycle_status')
  }
  if (!currentChange) issues.push('current_version_change_log_missing')
  if (currentChange?.change_type === 'user_obligation_change' && currentChange.migration_required !== true) {
    issues.push('user_obligation_change_requires_migration')
  }
  if (activeMigration.do_not_change_original_release_terms !== true) issues.push('active_transactions_terms_can_change')
  if (activeMigration.notify_users_if_evidence_review_changes !== true) issues.push('users_not_notified_of_review_change')
  if (!lifecycleGenome.migration_rules?.disclosure_updates?.length) issues.push('disclosure_updates_missing')
  if (lifecycleGenome.migration_rules?.ledger_compatibility !== 'preserve_existing_state_mapping') {
    issues.push('old_ledger_states_not_compatible')
  }
  if (rollback.allowed !== true) issues.push('rollback_not_allowed')
  if (!rollback.rollback_target) issues.push('rollback_target_missing')
  if (rollback.preserve_ledger_state !== true) issues.push('rollback_does_not_preserve_ledger_state')
  if (rollback.preserve_audit_events !== true) issues.push('rollback_does_not_preserve_audit_events')

  const dedupedIssues = [...new Set(issues)]

  return {
    valid: dedupedIssues.length === 0,
    issues: dedupedIssues,
    fields: LIFECYCLE_VERSIONING_GENOME_FIELDS,
    checks: LIFECYCLE_VERSIONING_DOCTOR_CHECKS,
    releaseBlocked: dedupedIssues.some((issue) => (
      issue.includes('obligation')
      || issue.includes('active_transactions_terms_can_change')
      || issue.includes('not_notified')
      || issue.includes('disclosure_updates_missing')
      || issue.includes('ledger_states')
      || issue.includes('rollback')
    ))
  }
}

export function validateGovernanceGenome(governanceGenome = {}) {
  const missing = GOVERNANCE_GENOME_FIELDS.filter((field) => {
    const value = governanceGenome[field]
    if (Array.isArray(value)) return value.length === 0
    if (value && typeof value === 'object') return Object.keys(value).length === 0
    return value === undefined || value === null || value === ''
  })
  const issues = [...missing.map((field) => `missing_${field}`)]
  const authority = governanceGenome.release_authority ?? {}
  const triggers = new Set(governanceGenome.human_review_triggers ?? [])
  const killSwitchTriggers = new Set(governanceGenome.kill_switch?.triggers ?? [])
  const accountability = governanceGenome.accountability ?? {}

  if (authority.low_risk_capability !== 'automated_certification_allowed') issues.push('low_risk_release_path_missing')
  if (authority.medium_risk_capability !== 'internal_review_required') issues.push('medium_risk_review_path_missing')
  if (authority.high_risk_capability !== 'compliance_and_risk_review_required') issues.push('high_risk_review_path_missing')
  if (authority.regulated_capability !== 'legal_review_required') issues.push('regulated_capability_legal_review_missing')
  for (const trigger of [
    'new_money_movement_pattern',
    'high_value_transaction',
    'new_jurisdiction',
    'credit_like_behavior',
    'insurance_like_behavior',
    'investment_like_behavior',
    'child_or_vulnerable_user_targeting',
    'high_privacy_data_collection',
    'AI_decision_affecting_funds'
  ]) {
    if (!triggers.has(trigger)) issues.push(`human_review_trigger_missing:${trigger}`)
  }
  if (governanceGenome.kill_switch?.enabled !== true) issues.push('kill_switch_not_enabled')
  for (const trigger of [
    'ledger_integrity_failure',
    'compliance_violation',
    'fraud_spike',
    'stuck_funds_threshold_exceeded',
    'user_harm_report_spike'
  ]) {
    if (!killSwitchTriggers.has(trigger)) issues.push(`kill_switch_trigger_missing:${trigger}`)
  }
  if (accountability.owner_team !== 'capability_governance') issues.push('governance_owner_team_missing')
  for (const role of ['product_risk', 'compliance', 'financial_kernel', 'experience_safety', 'security']) {
    if (!(accountability.reviewer_roles ?? []).includes(role)) issues.push(`reviewer_role_missing:${role}`)
  }

  const dedupedIssues = [...new Set(issues)]

  return {
    valid: dedupedIssues.length === 0,
    issues: dedupedIssues,
    fields: GOVERNANCE_GENOME_FIELDS,
    checks: GOVERNANCE_DOCTOR_CHECKS,
    releaseBlocked: dedupedIssues.some((issue) => (
      issue.includes('review_path_missing')
      || issue.includes('legal_review_missing')
      || issue.includes('human_review_trigger_missing')
      || issue.includes('kill_switch')
      || issue.includes('owner_team')
      || issue.includes('reviewer_role')
    ))
  }
}

export function routeGovernanceDecision({ riskClass = 'low', regulatoryTags = [], triggers = [] } = {}, governanceGenome = PROOF_GATED_PAYMENT_GOVERNANCE_GENOME) {
  const authority = governanceGenome.release_authority ?? {}
  const reviewTriggers = new Set(governanceGenome.human_review_triggers ?? [])
  const killSwitchTriggers = new Set(governanceGenome.kill_switch?.triggers ?? [])
  const incomingTriggers = new Set(triggers)
  const killSwitchActivated = [...incomingTriggers].some((trigger) => killSwitchTriggers.has(trigger))
  const regulated = regulatoryTags.some((tag) => ['credit_like_behavior', 'insurance_like_behavior', 'investment_like_behavior', 'regulated_capability'].includes(tag))
  const reviewRequired = regulated || [...incomingTriggers].some((trigger) => reviewTriggers.has(trigger))

  if (killSwitchActivated) return { route: 'kill_switch_pause', killSwitchActivated, reviewRequired: true }
  if (regulated) return { route: authority.regulated_capability ?? 'legal_review_required', killSwitchActivated, reviewRequired: true }
  if (riskClass === 'high') return { route: authority.high_risk_capability, killSwitchActivated, reviewRequired: true }
  if (riskClass === 'medium' || reviewRequired) return { route: authority.medium_risk_capability, killSwitchActivated, reviewRequired: true }
  return { route: authority.low_risk_capability, killSwitchActivated, reviewRequired: false }
}

export function validateOutcomeLearningGenome(outcomeGenome = {}) {
  const missing = OUTCOME_LEARNING_GENOME_FIELDS.filter((field) => {
    const value = outcomeGenome[field]
    if (Array.isArray(value)) return value.length === 0
    if (value && typeof value === 'object') return Object.keys(value).length === 0
    return value === undefined || value === null || value === ''
  })
  const issues = [...missing.map((field) => `missing_${field}`)]
  const successMetrics = new Set(outcomeGenome.success_metrics ?? [])
  const failureSignals = new Set(outcomeGenome.failure_signals ?? [])
  const learningActions = new Set(outcomeGenome.learning_actions ?? [])
  const rules = outcomeGenome.responsible_evolution_rules ?? {}

  for (const metric of [
    'transaction_completion_rate',
    'valid_proof_acceptance_rate',
    'dispute_resolution_time',
    'user_trust_score',
    'refund_correctness',
    'support_ticket_reduction'
  ]) {
    if (!successMetrics.has(metric)) issues.push(`success_metric_missing:${metric}`)
  }
  for (const signal of [
    'repeated_proof_confusion',
    'high_recipient_abandonment',
    'sender_abuse_disputes',
    'false_rejection_complaints',
    'excessive_human_review_load',
    'evidence_privacy_complaints'
  ]) {
    if (!failureSignals.has(signal)) issues.push(`failure_signal_missing:${signal}`)
  }
  for (const action of [
    'improve_proof_instructions',
    'adjust_review_threshold',
    'recommend_human_review_for_specific_risk_patterns',
    'modify_disclosure_language',
    'add_visual_example',
    'update_fraud_controls',
    'update_simulation_scenarios'
  ]) {
    if (!learningActions.has(action)) issues.push(`learning_action_missing:${action}`)
  }
  if (rules.learning_actions_require_governance_review !== true) issues.push('learning_actions_not_governed')
  if (rules.do_not_mutate_financial_obligations_without_versioning !== true) {
    issues.push('learning_can_mutate_obligations_secretly')
  }
  if (rules.test_updates_before_release !== true) issues.push('learning_updates_not_tested_before_release')

  const dedupedIssues = [...new Set(issues)]

  return {
    valid: dedupedIssues.length === 0,
    issues: dedupedIssues,
    fields: OUTCOME_LEARNING_GENOME_FIELDS,
    checks: OUTCOME_LEARNING_DOCTOR_CHECKS,
    releaseBlocked: dedupedIssues.some((issue) => (
      issue.includes('missing')
      || issue.includes('not_governed')
      || issue.includes('mutate_obligations')
      || issue.includes('not_tested')
    ))
  }
}

export function recommendOutcomeLearningActionsFromGenome(failureSignals = [], outcomeGenome = PROOF_GATED_PAYMENT_OUTCOME_LEARNING_GENOME) {
  const actionMap = {
    repeated_proof_confusion: ['improve_proof_instructions', 'add_visual_example'],
    high_recipient_abandonment: ['modify_disclosure_language', 'add_visual_example'],
    sender_abuse_disputes: ['update_fraud_controls', 'recommend_human_review_for_specific_risk_patterns'],
    false_rejection_complaints: ['adjust_review_threshold', 'recommend_human_review_for_specific_risk_patterns'],
    excessive_human_review_load: ['adjust_review_threshold', 'update_simulation_scenarios'],
    evidence_privacy_complaints: ['modify_disclosure_language', 'update_simulation_scenarios']
  }
  const allowedActions = new Set(outcomeGenome.learning_actions ?? [])
  return [...new Set(failureSignals.flatMap((signal) => actionMap[signal] ?? []))]
    .filter((action) => allowedActions.has(action))
}

export function validateCapabilityDoctorFullArchitecture({
  jobs = CAPABILITY_DOCTOR_FULL_JOBS,
  roles = CAPABILITY_DOCTOR_FULL_ROLES,
  modules = CAPABILITY_DOCTOR_ARCHITECTURE_MODULES
} = {}) {
  const issues = []
  for (const job of CAPABILITY_DOCTOR_FULL_JOBS) {
    if (!jobs.includes(job)) issues.push(`doctor_job_missing:${job}`)
  }
  for (const role of CAPABILITY_DOCTOR_FULL_ROLES) {
    if (!roles.includes(role)) issues.push(`doctor_role_missing:${role}`)
  }
  for (const module of CAPABILITY_DOCTOR_ARCHITECTURE_MODULES) {
    if (!modules.includes(module)) issues.push(`doctor_architecture_module_missing:${module}`)
  }

  return {
    valid: issues.length === 0,
    issues,
    jobs,
    roles,
    modules,
    releaseBlocked: issues.some((issue) => issue.includes('certification_engine') || issue.includes('financial_invariant') || issue.includes('governance_router'))
  }
}

export function inspectGenomeReaderInputs({
  schemaValid = false,
  requiredSections = [],
  references = [],
  certifiedReferences = [],
  primitiveIds = [],
  validPrimitiveIds = [],
  templatesValid = false,
  versionValid = false,
  dependenciesAvailable = false,
  deprecatedComponents = [],
  unsupportedComponents = []
} = {}) {
  const issues = []
  if (!schemaValid) issues.push('schema_invalid')
  if (!requiredSections.length) issues.push('required_sections_missing')
  for (const reference of references) {
    if (!certifiedReferences.includes(reference)) issues.push(`reference_not_certified:${reference}`)
  }
  for (const primitiveId of primitiveIds) {
    if (!validPrimitiveIds.includes(primitiveId)) issues.push(`primitive_id_invalid:${primitiveId}`)
  }
  if (!templatesValid) issues.push('templates_invalid')
  if (!versionValid) issues.push('version_invalid')
  if (!dependenciesAvailable) issues.push('dependencies_unavailable')
  for (const component of deprecatedComponents) issues.push(`deprecated_component:${component}`)
  for (const component of unsupportedComponents) issues.push(`unsupported_component:${component}`)

  return {
    valid: issues.length === 0,
    issues,
    checks: GENOME_READER_CHECKS,
    severity: issues.some((issue) => issue.includes('not_certified') || issue.includes('unsupported')) ? 'critical' : issues.length ? 'warning' : 'none',
    repair: issues.length ? ['resolve_references', 'replace_unsupported_components', 'rerun_genome_reader'] : []
  }
}

export function examineGenomeCompletenessForType(capabilityType, sections = []) {
  const required = capabilityType === 'escrow_like_conditional_payment'
    ? ESCROW_LIKE_CONDITIONAL_PAYMENT_REQUIRED_GENOME_SECTIONS
    : []
  const present = new Set(sections)
  const missing = required.filter((section) => !present.has(section))

  return {
    capabilityType,
    required,
    missing,
    releaseEligible: missing.length === 0,
    result: missing.length ? 'not_release_eligible' : 'release_eligible'
  }
}

export function diagnoseIntentAlignmentExaminer({ userIntent = '', draftBehavior = '', builtPieces = [] } = {}) {
  const issues = []
  const repairs = []
  const normalizedIntent = userIntent.toLowerCase()
  const normalizedBehavior = draftBehavior.toLowerCase()
  const pieceSet = new Set(builtPieces)

  if (normalizedIntent.includes('gps') && !pieceSet.has('gps_radius_check_micro_primitive') && !normalizedBehavior.includes('gps')) {
    issues.push('gps_condition_absent')
    repairs.push('add_gps_verification_primitive')
  }
  if (normalizedIntent.includes('gps') && normalizedBehavior.includes('any image')) {
    issues.push('image_proof_alone_does_not_satisfy_request')
    repairs.push('require_gps_and_image_proof_rule')
  }
  if (normalizedIntent.includes('only after') && normalizedBehavior.includes('release') && !normalizedBehavior.includes('after')) {
    issues.push('release_condition_not_preserved')
  }

  return {
    aligned: issues.length === 0,
    issues,
    repairs: [...new Set(repairs)],
    checks: INTENT_ALIGNMENT_EXAMINER_CHECKS
  }
}

export function validateCapabilityEconomicTypeClaim({ claimedType = '', behavior = [], controls = [] } = {}) {
  const issues = []
  const behaviorSet = new Set(behavior)
  const controlSet = new Set(controls)
  const actualType = behaviorSet.has('collects_money') && behaviorSet.has('locks_funds') && behaviorSet.has('releases_after_group_vote')
    ? 'group_finance_with_locked_funds'
    : claimedType
  const requiredControls = actualType === 'group_finance_with_locked_funds'
    ? ['ledger_locking', 'group_governance', 'refund_rules', 'compliance_review']
    : []

  if (claimedType && actualType !== claimedType) issues.push(`misclassified_capability:${claimedType}_as_${actualType}`)
  for (const control of requiredControls) {
    if (!controlSet.has(control)) issues.push(`required_control_missing:${control}`)
  }

  return {
    valid: issues.length === 0,
    issues,
    claimedType,
    actualType,
    requiredControls,
    checks: CAPABILITY_TYPE_VALIDATOR_CHECKS,
    releaseBlocked: issues.length > 0
  }
}

export function validateCompositionAlgebraGenome(parts = [], context = {}) {
  const issues = []
  const repairs = []
  const partSet = new Set(parts)

  if (partSet.has('irreversible_transfer_primitive') && partSet.has('conditional_release_pattern')) {
    issues.push('state_ledger_incompatibility:irreversible_transfer_with_conditional_release')
    repairs.push('replace_irreversible_transfer_primitive_with_escrow_hold_primitive')
  }
  if (partSet.has('anonymous_recipient_primitive') && (partSet.has('high_value_payment_release') || context.highValue === true)) {
    issues.push('identity_risk_incompatibility:anonymous_recipient_high_value_release')
    repairs.push('add_identity_verification_primitive_or_reduce_capability_limits')
  }
  if (context.requiresJurisdictionReview && !partSet.has('jurisdiction_policy_check')) {
    issues.push('jurisdiction_compatibility_missing')
    repairs.push('add_jurisdiction_policy_check')
  }
  if (context.collectsSensitiveData && !partSet.has('data_minimization_guard')) {
    issues.push('data_compatibility_missing_privacy_guard')
    repairs.push('add_data_minimization_guard')
  }
  if (context.requiresRecovery && !partSet.has('recovery_path')) {
    issues.push('recovery_compatibility_missing')
    repairs.push('add_recovery_path')
  }

  return {
    valid: issues.length === 0,
    issues,
    repairs: [...new Set(repairs)],
    checks: COMPOSITION_ALGEBRA_COMPATIBILITY_CHECKS,
    releaseBlocked: issues.length > 0
  }
}

export function examineRuleConflicts({
  proofDeadlineHours,
  gpsCaptureWindowHours,
  recipientNotificationAfterHours,
  refundAfterHours,
  disputeWindowHours,
  pausesRefundClockDuringDispute = false
} = {}) {
  const issues = []
  const repairs = []

  if (
    Number.isFinite(gpsCaptureWindowHours)
    && Number.isFinite(recipientNotificationAfterHours)
    && recipientNotificationAfterHours > gpsCaptureWindowHours
  ) {
    issues.push('recipient_notified_after_gps_proof_deadline')
    repairs.push('notify_recipient_immediately_or_extend_gps_proof_window')
  }
  if (
    Number.isFinite(proofDeadlineHours)
    && Number.isFinite(gpsCaptureWindowHours)
    && gpsCaptureWindowHours < proofDeadlineHours
  ) {
    issues.push('gps_capture_window_shorter_than_stated_proof_deadline')
    repairs.push('align_gps_capture_window_with_proof_deadline_or_explain_difference')
  }
  if (
    Number.isFinite(refundAfterHours)
    && Number.isFinite(disputeWindowHours)
    && refundAfterHours < disputeWindowHours
    && pausesRefundClockDuringDispute !== true
  ) {
    issues.push('refund_may_occur_before_dispute_resolution')
    repairs.push('pause_refund_clock_during_dispute_or_redefine_windows')
  }

  return {
    valid: issues.length === 0,
    issues,
    repairs: [...new Set(repairs)],
    examples: RULE_CONFLICT_EXAMINER_EXAMPLES,
    releaseBlocked: issues.length > 0
  }
}

export function classifyRegulatoryResemblanceFromBehavior(behavior = []) {
  const behaviorSet = new Set(behavior)
  const resemblance = []
  const required = []

  if (behaviorSet.has('moves_money') || behaviorSet.has('collects_money')) resemblance.push('money_transmission')
  if (behaviorSet.has('holds_balance') || behaviorSet.has('locks_funds')) resemblance.push('stored_value')
  if (behaviorSet.has('conditional_release') || behaviorSet.has('locks_funds')) resemblance.push('escrow_like')
  if (behaviorSet.has('advances_funds') || behaviorSet.has('repayment_obligation')) resemblance.push('credit_like')
  if (behaviorSet.has('pooled_loss_coverage')) resemblance.push('insurance_like')
  if (behaviorSet.has('investment_return')) resemblance.push('investment_like')
  if (behaviorSet.has('cross_border')) resemblance.push('remittance_like')
  if (behaviorSet.has('donation_pool')) resemblance.push('donation_related')
  if (behaviorSet.has('salary_split')) resemblance.push('payroll_like')
  if (behaviorSet.has('lending')) resemblance.push('lending')
  if (behaviorSet.has('rotating_payout_order')) resemblance.push('group_savings')
  if (behaviorSet.has('chance_based_payout')) resemblance.push('gambling_like')
  if (behaviorSet.has('debt_recovery')) resemblance.push('debt_collection')
  if (behaviorSet.has('consumer_money_movement')) resemblance.push('consumer_protection_sensitive')
  if (behaviorSet.has('child_beneficiary')) resemblance.push('child_directed')

  if (resemblance.includes('group_savings')) {
    required.push('group_rules', 'payout_fairness', 'default_handling', 'jurisdiction_review', 'fraud_controls', 'disclosures')
  }
  if (resemblance.includes('escrow_like')) required.push('refund_rules', 'ledger_locking', 'dispute_process')
  if (resemblance.includes('cross_border')) required.push('cross_border_compliance_check')

  return {
    resemblance: [...new Set(resemblance)],
    required: [...new Set(required)],
    questions: COMPLIANCE_RESEMBLANCE_QUESTIONS,
    releaseBlocked: resemblance.includes('gambling_like') || resemblance.includes('credit_like') || resemblance.includes('insurance_like')
  }
}

export function scoreRiskFraudExaminer({ controls = [], abuseScenarios = RISK_FRAUD_ABUSE_SCENARIOS } = {}) {
  const controlSet = new Set(controls)
  const missingControls = []
  for (const scenario of abuseScenarios) {
    for (const control of scenario.required_controls) {
      if (!controlSet.has(control)) missingControls.push(`${scenario.scenario}:${control}`)
    }
  }
  const totalControls = abuseScenarios.flatMap((scenario) => scenario.required_controls).length
  const presentControls = totalControls - missingControls.length
  const controlStrength = totalControls ? Math.round((presentControls / totalControls) * 100) : 0
  const score = {
    inherent_risk: 'high',
    residual_risk: controlStrength >= 80 ? 'medium' : 'high',
    control_strength: controlStrength,
    abuse_surface: abuseScenarios.length,
    fraud_cost: controlStrength >= 80 ? 'raised' : 'too_low',
    user_harm_potential: missingControls.length ? 'high' : 'medium',
    release_mode: controlStrength >= 80 ? 'supervised' : 'governor_review'
  }

  return {
    valid: missingControls.length === 0,
    missingControls,
    score,
    fields: RISK_FRAUD_SCORE_FIELDS,
    releaseBlocked: missingControls.length > 0
  }
}

export function examineFinancialPhysicsHardGates(physicsGenome = {}, stateMachineGenome = {}) {
  const review = validateFinancialPhysicsGenome(physicsGenome, stateMachineGenome)
  const issues = [...review.issues]
  const accounts = physicsGenome.accounts ?? {}

  if (!Object.values(accounts).some((account) => String(account).includes('liability'))) {
    issues.push('escrow_liability_account_missing')
  }
  if (physicsGenome.balance_visibility === 'locked_funds_shown_as_spendable') {
    issues.push('locked_funds_shown_as_spendable')
  }
  if (!physicsGenome.funds_flow?.refund) issues.push('conditional_payment_missing_refund_posting')

  const dedupedIssues = [...new Set(issues)]

  return {
    valid: dedupedIssues.length === 0,
    issues: dedupedIssues,
    checks: FINANCIAL_PHYSICS_EXAMINER_CHECKS,
    examples: FINANCIAL_PHYSICS_EXAMINER_EXAMPLES,
    hardGates: FINANCIAL_PHYSICS_HARD_GATES,
    releaseBlocked: dedupedIssues.length > 0
  }
}

export function validateLedgerIntegrityGenome(ledgerGenome = {}, stateMachineGenome = {}) {
  const missing = LEDGER_INTEGRITY_GENOME_FIELDS.filter((field) => {
    const value = ledgerGenome[field]
    if (Array.isArray(value)) return value.length === 0
    if (value && typeof value === 'object') return Object.keys(value).length === 0
    return value === undefined || value === null || value === ''
  })
  const issues = [...missing.map((field) => `missing_${field}`)]
  const ledgerEvents = ledgerGenome.ledger_events ?? {}
  const transitionMap = ledgerGenome.transition_event_map ?? {}
  const moneyStates = ['funds_locked', 'released', 'refunded', 'split_settlement']

  for (const state of moneyStates) {
    const event = ledgerEvents[state]
    if (!event) {
      issues.push(`money_transition_ledger_event_missing:${state}`)
      continue
    }
    if (!event.debit || !event.credit) issues.push(`ledger_event_unbalanced:${state}`)
    if (event.debit && event.credit && event.debit === event.credit) issues.push(`ledger_event_self_balancing:${state}`)
    if (!event.idempotency_key) issues.push(`idempotency_key_missing:${state}`)
    if (event.replay_safe !== true) issues.push(`ledger_event_not_replay_safe:${state}`)
    if (!event.audit_event) issues.push(`audit_event_missing:${state}`)
    if (!event.balance_visibility) issues.push(`balance_visibility_missing:${state}`)
  }
  for (const transition of stateMachineGenome.transitions ?? []) {
    if (moneyStates.includes(transition.to)) {
      const transitionKey = `${transition.from}_to_${transition.to}`
      if (!transitionMap[transitionKey] && !transitionMap[transition.to]) {
        issues.push(`transition_not_mapped_to_ledger_event:${transitionKey}`)
      }
    }
  }
  if (ledgerGenome.idempotency_strategy !== 'capability_id_transaction_id_transition_id') {
    issues.push('idempotency_strategy_insufficient')
  }
  if (ledgerGenome.audit_strategy !== 'every_money_transition_emits_audit_event') {
    issues.push('audit_strategy_insufficient')
  }
  if (!String(ledgerGenome.balance_visibility ?? '').includes('available_locked_released_refunded')) {
    issues.push('user_balance_state_visibility_insufficient')
  }

  const dedupedIssues = [...new Set(issues)]

  return {
    valid: dedupedIssues.length === 0,
    issues: dedupedIssues,
    fields: LEDGER_INTEGRITY_GENOME_FIELDS,
    checks: LEDGER_INTEGRITY_DOCTOR_CHECKS,
    releaseBlocked: dedupedIssues.some((issue) => (
      issue.includes('missing')
      || issue.includes('unbalanced')
      || issue.includes('idempotency')
      || issue.includes('replay_safe')
      || issue.includes('not_mapped')
      || issue.includes('insufficient')
    ))
  }
}

export function examineIdentityPermissions(permissionMatrix = PROOF_GATED_PAYMENT_IDENTITY_PERMISSION_MATRIX) {
  const issues = []
  const hasPermission = (actor, permission) => (permissionMatrix[actor] ?? []).includes(permission)

  for (const [actor, permission] of [
    ['sender', 'create'],
    ['sender', 'fund'],
    ['recipient', 'accept'],
    ['recipient', 'submit_proof'],
    ['reviewer', 'approve'],
    ['sender', 'dispute'],
    ['reviewer', 'refund'],
    ['financial_kernel', 'release'],
    ['reviewer', 'view_full_evidence_if_required'],
    ['governance_admin', 'override_state'],
    ['governance_admin', 'migrate_version']
  ]) {
    if (!hasPermission(actor, permission)) issues.push(`permission_missing:${actor}:${permission}`)
  }
  if (hasPermission('sender', 'release') || hasPermission('sender', 'refund')) issues.push('sender_has_financial_kernel_authority')
  if (hasPermission('recipient', 'approve') || hasPermission('recipient', 'release')) issues.push('recipient_can_approve_or_release_own_claim')
  if (hasPermission('sender', 'view_full_evidence')) issues.push('sender_can_view_full_private_evidence')
  if (permissionMatrix.change_rules?.freeze_conditions_after_recipient_acceptance_and_funds_lock !== true) {
    issues.push('conditions_not_frozen_after_acceptance_and_lock')
  }
  if (permissionMatrix.change_rules?.sender_can_edit_proof_requirements_after_acceptance === true) {
    issues.push('sender_can_move_goalposts_after_recipient_acceptance')
  }

  return {
    valid: issues.length === 0,
    issues,
    checks: IDENTITY_PERMISSION_EXAMINER_CHECKS,
    releaseBlocked: issues.some((issue) => (
      issue.includes('financial_kernel_authority')
      || issue.includes('approve_or_release')
      || issue.includes('move_goalposts')
      || issue.includes('conditions_not_frozen')
      || issue.includes('permission_missing')
    ))
  }
}

export function examineVerificationProofLogic(verificationGenome = {}) {
  const review = validateVerificationGenome(verificationGenome, ['gps_proof', 'photo_proof'])
  const issues = [...review.issues]
  const requiredProofs = verificationGenome.required_proofs ?? []
  const photoProof = requiredProofs.find((proof) => proof.type === 'photo_proof')

  if (photoProof && !(photoProof.expected_content ?? []).length) issues.push('photo_proof_expected_content_schema_missing')
  if (photoProof && !(photoProof.metadata_required ?? []).includes('location_if_available')) {
    issues.push('photo_proof_location_metadata_rule_missing')
  }
  if (!verificationGenome.review_path?.appeal_path) issues.push('appeal_rights_missing')

  const dedupedIssues = [...new Set(issues)]

  return {
    valid: dedupedIssues.length === 0,
    issues: dedupedIssues,
    checks: VERIFICATION_EXAMINER_CHECKS,
    severity: dedupedIssues.some((issue) => issue.includes('expected_content')) ? 'high' : dedupedIssues.length ? 'medium' : 'none',
    releaseBlocked: dedupedIssues.some((issue) => (
      issue.includes('expected_content')
      || issue.includes('release_not_gated')
      || issue.includes('required_proof')
      || issue.includes('appeal_rights_missing')
    ))
  }
}

export function examineConsentDisclosureTiming(disclosureConsentGenome = {}) {
  const review = validateDisclosureConsentGenome(disclosureConsentGenome)
  const issues = [...review.issues]
  const consents = new Set(disclosureConsentGenome.consents ?? [])
  const reviewFields = new Set(disclosureConsentGenome.review_screen_fields ?? [])

  if (!consents.has('sender_confirms_funds_lock')) issues.push('consent_before_money_lock_missing')
  if (!consents.has('recipient_consents_to_location_capture')) issues.push('consent_before_gps_capture_missing')
  if (!consents.has('recipient_consents_to_evidence_review')) issues.push('consent_before_photo_upload_missing')
  for (const field of ['amount', 'proof_required', 'deadline', 'refund_condition', 'fee', 'dispute_path']) {
    if (!reviewFields.has(field)) issues.push(`sender_review_field_missing:${field}`)
  }
  if (!disclosureConsentGenome.consent_rules?.includes('consent_must_be_withdrawable_before_proof_submission_where_possible')) {
    issues.push('revocability_rule_missing')
  }

  const dedupedIssues = [...new Set(issues)]

  return {
    valid: dedupedIssues.length === 0,
    issues: dedupedIssues,
    checks: CONSENT_DISCLOSURE_EXAMINER_CHECKS,
    releaseBlocked: dedupedIssues.some((issue) => (
      issue.includes('consent_before')
      || issue.includes('sender_review_field_missing')
      || issue.includes('fee_disclosure')
      || issue.includes('refund')
      || issue.includes('dispute')
      || issue.includes('revocability')
    ))
  }
}

export function diagnoseExperienceCopyTruth({ buttonCopy = '', actualBehavior = '' } = {}) {
  const lowerCopy = buttonCopy.toLowerCase()
  const lowerBehavior = actualBehavior.toLowerCase()
  const issues = []
  const repairs = []

  if (lowerCopy.includes('send money now') && (lowerBehavior.includes('locked') || lowerBehavior.includes('held'))) {
    issues.push('button_copy_misrepresents_locked_funds')
    repairs.push('lock_money_until_proof_is_submitted')
    repairs.push('hold_money_safely_until_delivery_is_confirmed')
  }
  if (lowerCopy.includes('instant') && lowerBehavior.includes('review')) issues.push('instant_copy_misrepresents_review_delay')
  if (lowerCopy.includes('guaranteed') && lowerBehavior.includes('dispute')) issues.push('false_guarantee_in_dispute_flow')

  return {
    truthful: issues.length === 0,
    issues,
    repairs,
    checks: EXPERIENCE_DOCTOR_EXAMINER_CHECKS,
    releaseBlocked: issues.length > 0
  }
}

export function validateAccessibilityContract(accessibilityContract = {}) {
  const issues = []
  for (const flag of [
    'screen_reader_labels',
    'keyboard_navigation',
    'reduced_motion_support',
    'plain_language_mode',
    'error_message_clarity',
    'non_visual_proof_instructions'
  ]) {
    if (accessibilityContract[flag] !== true) issues.push(`accessibility_missing:${flag}`)
  }
  if (accessibilityContract.contrast !== 'wcag_aa' && accessibilityContract.contrast !== 'wcag_aaa') {
    issues.push('contrast_below_accessibility_standard')
  }
  if (accessibilityContract.focus_order !== 'matches_transaction_flow') issues.push('focus_order_unclear')
  if (!String(accessibilityContract.touch_target_sizes ?? '').includes('44')) issues.push('touch_targets_too_small')
  if (!accessibilityContract.alternative_flows_where_possible?.length) issues.push('alternative_accessibility_flows_missing')
  if (!accessibilityContract.low_bandwidth_behavior) issues.push('low_bandwidth_behavior_missing')
  if (!accessibilityContract.offline_or_poor_connectivity_recovery) issues.push('offline_recovery_missing')

  return {
    valid: issues.length === 0,
    issues,
    checks: ACCESSIBILITY_VALIDATOR_CHECKS,
    releaseBlocked: issues.length > 0
  }
}

export function diagnoseAssetMotionMeaning({ state = '', asset = '', assetGenome = PROOF_GATED_PAYMENT_ASSET_GENOME } = {}) {
  const issues = []
  const repairs = []
  if (state.includes('funds_locked') && asset.includes('celebration')) {
    issues.push('misleading_emotional_signal_for_locked_funds')
    repairs.push('use_secure_hold_animation_not_celebration')
  }
  const expectedAsset = assetGenome.state_asset_map?.[state] ?? (state.includes('funds_locked') ? 'icon_locked_funds' : undefined)
  if (expectedAsset && asset !== expectedAsset && !asset.includes('secure_hold')) {
    issues.push(`asset_does_not_match_state:${state}`)
  }

  return {
    valid: issues.length === 0,
    issues,
    repairs,
    example: ASSET_MOTION_DOCTOR_EXAMPLE,
    releaseBlocked: issues.length > 0
  }
}

export function examineAlgorithmAuthority(algorithmGenome = {}) {
  const review = validateAlgorithmIntelligenceGenome(algorithmGenome)
  const issues = [...review.issues]
  const authority = algorithmGenome.decision_authority ?? {}
  const governance = new Set(algorithmGenome.governance_controls ?? [])

  if (authority.image_content_verifier?.can_auto_reject === true && !governance.has('appeal_path')) {
    issues.push('ai_image_rejection_without_appeal')
  }
  if (authority.image_content_verifier?.can_auto_reject === true && !governance.has('human_review_for_high_risk_blocks')) {
    issues.push('ai_permanent_adverse_decision_without_review_path')
  }

  const dedupedIssues = [...new Set(issues)]

  return {
    valid: dedupedIssues.length === 0,
    issues: dedupedIssues,
    example: ALGORITHM_AUTHORITY_EXAMINER_EXAMPLE,
    releaseBlocked: dedupedIssues.some((issue) => (
      issue.includes('ai_')
      || issue.includes('governance_missing')
      || issue.includes('without_appeal')
      || issue.includes('without_review')
    ))
  }
}

export function diagnoseRuntimeTelemetryDoctor(metrics = {}) {
  const issues = []
  const actions = []

  if ((metrics.proofUnderReviewBeyondSlaRate ?? 0) >= 0.12) {
    issues.push('proof_under_review_beyond_sla')
    actions.push('escalate_to_operations', 'pause_new_high_risk_transactions_if_threshold_exceeded', 'notify_affected_users')
  }
  if ((metrics.stuckFundsCount ?? 0) > 0) {
    issues.push('stuck_funds_detected')
    actions.push('trigger_state_machine_audit', 'run_refund_repair_playbook')
  }
  if ((metrics.ledgerMismatchCount ?? 0) > 0) {
    issues.push('ledger_mismatch_detected')
    actions.push('pause_money_movement_path', 'escalate_to_financial_kernel_console')
  }
  if ((metrics.aiMisclassificationRate ?? 0) > 0.05) {
    issues.push('repeated_ai_misclassification')
    actions.push('route_to_algorithm_authority_examiner', 'increase_human_review')
  }

  return {
    healthy: issues.length === 0,
    issues,
    actions: [...new Set(actions)],
    signals: RUNTIME_TELEMETRY_DOCTOR_SIGNALS,
    releaseBlocked: issues.some((issue) => issue.includes('ledger') || issue.includes('stuck_funds'))
  }
}

export function diagnoseVersionMigrationDoctor({ previousProofs = [], nextProofs = [], activeTransactions = false, bothPartiesConsented = false } = {}) {
  const issues = []
  const repairs = []
  const previous = new Set(previousProofs)
  const next = new Set(nextProofs)
  const addedProofs = [...next].filter((proof) => !previous.has(proof))

  if (activeTransactions && addedProofs.length && !bothPartiesConsented) {
    issues.push(`retroactive_requirement_added:${addedProofs.join(',')}`)
    repairs.push('apply_new_version_only_to_new_transactions')
    repairs.push('keep_existing_transactions_on_original_terms_unless_both_parties_consent')
  }

  return {
    valid: issues.length === 0,
    issues,
    addedProofs,
    repairs,
    releaseBlocked: issues.length > 0
  }
}

export function routeHumanReview(input = {}) {
  const triggers = []
  if ((input.amount ?? 0) >= (input.highValueThreshold ?? 1000)) triggers.push('high_financial_value')
  if (input.legalClassificationUncertain) triggers.push('legal_classification_uncertain')
  if (input.newJurisdiction) triggers.push('new_jurisdiction')
  if (input.vulnerableUsersInvolved) triggers.push('vulnerable_users_involved')
  if (input.childUsersInvolved) triggers.push('child_users_involved')
  if ((input.aiConfidence ?? 1) < 0.82) triggers.push('ai_confidence_low')
  if (input.ambiguousEvidence) triggers.push('ambiguous_evidence')
  if (input.severeDispute) triggers.push('severe_dispute')
  if ((input.resemblanceTags ?? []).some((tag) => ['credit_like', 'insurance_like', 'investment_like', 'escrow_like'].includes(tag))) {
    triggers.push('credit_insurance_investment_or_escrow_resemblance')
  }
  if ((input.holdDurationHours ?? 0) > 72) triggers.push('long_money_hold_period')
  if (input.privacySensitiveDataCollected) triggers.push('privacy_sensitive_data_collected')
  if (input.newUncertifiedPrimitiveCombination) triggers.push('new_uncertified_primitive_combination')
  if (input.runtimeAnomalyThresholdCrossed) triggers.push('runtime_anomaly_threshold_crossed')

  const consoles = new Set()
  if (triggers.some((trigger) => ['high_financial_value', 'new_uncertified_primitive_combination'].includes(trigger))) consoles.add('product_risk_console')
  if (triggers.some((trigger) => ['legal_classification_uncertain', 'new_jurisdiction', 'credit_insurance_investment_or_escrow_resemblance'].includes(trigger))) consoles.add('compliance_console')
  if (triggers.includes('long_money_hold_period')) consoles.add('financial_kernel_console')
  if (triggers.some((trigger) => ['vulnerable_users_involved', 'child_users_involved'].includes(trigger))) consoles.add('experience_safety_console')
  if (triggers.some((trigger) => ['ambiguous_evidence', 'runtime_anomaly_threshold_crossed'].includes(trigger))) consoles.add('fraud_operations_console')
  if (triggers.includes('privacy_sensitive_data_collected')) consoles.add('privacy_console')
  if (triggers.includes('severe_dispute') || triggers.includes('ai_confidence_low')) consoles.add('human_dispute_review_console')

  return {
    reviewRequired: triggers.length > 0,
    triggers,
    consoles: [...consoles],
    availableConsoles: HUMAN_REVIEW_CONSOLES
  }
}

export function buildDoctorRepairPlan(issue = 'missing_refund_path') {
  if (issue === 'missing_refund_path') return DOCTOR_REPAIR_PLAN_EXAMPLE
  return {
    issue,
    severity: 'review_required',
    recommended_fix: {
      inspect: ['genome_section', 'state_machine', 'ledger_event', 'disclosure', 'telemetry'],
      rerun: ['simulation_tests', 'doctor_certification']
    }
  }
}

export function validateCapabilityCertification(certification = {}) {
  const missing = CAPABILITY_CERTIFICATION_FIELDS.filter((field) => {
    const value = certification[field]
    if (Array.isArray(value)) return value.length === 0 && field !== 'stop_ship_issues'
    return value === undefined || value === null || value === ''
  })
  const issues = missing.map((field) => `missing_${field}`)
  if ((certification.stop_ship_issues ?? []).length && certification.release_eligibility !== 'not_release_eligible') {
    issues.push('stop_ship_issues_cannot_have_release_eligibility')
  }
  if (certification.release_eligibility !== 'not_release_eligible' && !(certification.required_runtime_controls ?? []).length) {
    issues.push('release_passport_missing_runtime_controls')
  }
  if (!certification.certification_expiry) issues.push('certification_expiry_missing')

  return {
    valid: issues.length === 0,
    issues,
    fields: CAPABILITY_CERTIFICATION_FIELDS,
    releaseBlocked: issues.some((issue) => issue.includes('stop_ship') || issue.includes('missing'))
  }
}

export function classifyGenomeIssueSeverity(issue) {
  const text = String(issue).toLowerCase()
  if (/ledger.*not.*balance|funds.*disappear|no[_ ]refund|missing[_ ]refund|release_without|required_proof|gps.*consent|consent.*missing/.test(text)) return 'P0'
  if (/change.*conditions|move_goalposts|ai.*without.*appeal|dispute.*missing|critical/.test(text)) return 'P1'
  if (/unclear|sla_conflict|asset.*wrong|timer_conflict|high/.test(text)) return 'P2'
  if (/copy|telemetry|monitoring|medium/.test(text)) return 'P3'
  if (/animation|helper/.test(text)) return 'P4'
  return 'P5'
}

export function calculateGenomeHealthScore({ hardGates = {}, scores = {}, issues = [] } = {}) {
  const severities = issues.map(classifyGenomeIssueSeverity)
  const hardGateFailures = GENOME_HEALTH_HARD_GATES.filter((gate) => hardGates[gate] === false)
  const releaseEligible = !severities.includes('P0')
    && !hardGateFailures.length
    && hardGates.p1_issues_resolved_or_controlled !== false
  const weightedScore = Math.round(Object.entries(GENOME_HEALTH_SCORE_WEIGHTS).reduce((sum, [field, weight]) => {
    const value = Number.isFinite(scores[field]) ? scores[field] : 0
    return sum + (value * weight)
  }, 0))

  return {
    releaseEligible,
    score: releaseEligible ? weightedScore : Math.min(weightedScore, 59),
    hardGateFailures,
    severities,
    weights: GENOME_HEALTH_SCORE_WEIGHTS
  }
}

export function generateStructuredDoctorReport({ capabilityId, genomeVersion, issues = [], healthScore = 0, releaseEligible = false } = {}) {
  const grouped = issues.reduce((acc, issue, index) => {
    const severity = classifyGenomeIssueSeverity(issue.title ?? issue)
    const entry = {
      id: issue.id ?? `issue_${String(index + 1).padStart(3, '0')}`,
      title: issue.title ?? String(issue),
      genome_section: issue.genome_section ?? 'unknown',
      severity,
      explanation: issue.explanation ?? 'Doctor finding requires repair before certification.',
      required_fix: issue.required_fix ?? []
    }
    acc[severity] = [...(acc[severity] ?? []), entry]
    return acc
  }, {})

  return {
    capability_id: capabilityId,
    genome_version: genomeVersion,
    overall_status: releaseEligible ? 'release_eligible' : 'not_release_eligible',
    health_score: healthScore,
    summary: {
      fatal_issues: (grouped.P0 ?? []).length,
      critical_issues: (grouped.P1 ?? []).length,
      high_issues: (grouped.P2 ?? []).length,
      medium_issues: (grouped.P3 ?? []).length,
      advisory_issues: (grouped.P4 ?? []).length + (grouped.P5 ?? []).length
    },
    fatal_issues: grouped.P0 ?? [],
    certification: {
      release_eligible: releaseEligible,
      allowed_modes: releaseEligible ? ['human_supervised_pilot', 'limited_release'] : [],
      required_next_action: releaseEligible ? 'certify_release_passport' : 'repair_and_resimulate'
    }
  }
}

export function determineDoctorControlledReleaseMode({ releaseEligible = false, healthScore = 0, riskClass = 'low', runtimeIssue = false, marketplaceReusable = false, deprecated = false, retired = false } = {}) {
  if (retired) return 'retired'
  if (deprecated) return 'deprecated'
  if (runtimeIssue) return 'quarantined'
  if (!releaseEligible) return 'not_release_eligible'
  if (healthScore < 70) return 'sandbox_only'
  if (riskClass === 'high' || riskClass === 'medium_high') return 'human_supervised_pilot'
  if (healthScore < 90) return 'limited_release'
  if (marketplaceReusable) return 'marketplace_eligible'
  return 'certified_general_release'
}

export function issueCapabilityCertification({
  capabilityId = 'capability_unknown',
  genomeVersion = '0.0.0',
  health,
  releaseMode,
  jurisdictions = {},
  runtimeControls = [],
  warnings = [],
  stopShipIssues = []
} = {}) {
  const releaseEligibility = stopShipIssues.length
    ? 'not_release_eligible'
    : releaseMode ?? determineDoctorControlledReleaseMode({
      releaseEligible: health?.releaseEligible,
      healthScore: health?.score,
      riskClass: 'medium_high'
    })

  return {
    capability_id: capabilityId,
    genome_version: genomeVersion,
    diagnosis_status: stopShipIssues.length ? 'failed_stop_ship' : warnings.length ? 'passed_with_controls' : 'passed',
    release_eligibility: releaseEligibility,
    risk_class: 'medium_high',
    permitted_jurisdictions: jurisdictions.permitted ?? [],
    blocked_jurisdictions: jurisdictions.blocked ?? [],
    required_runtime_controls: runtimeControls,
    unresolved_warnings: warnings,
    stop_ship_issues: stopShipIssues,
    certification_expiry: 'policy_defined'
  }
}

export function diagnoseProofGatedPaymentExample(diagnosis = PROOF_GATED_PAYMENT_DOCTOR_EXAMPLE_DIAGNOSIS) {
  const findings = Object.values(diagnosis.diagnosis ?? {}).flatMap((value) => Array.isArray(value) ? value : [value])
  const needsRepair = findings.filter((finding) => String(finding).startsWith('needs_') || String(finding).includes('required'))

  return {
    diagnosis,
    repairPlan: PROOF_GATED_PAYMENT_DOCTOR_REPAIR_PLAN,
    certifiedCapability: PROOF_GATED_PAYMENT_CERTIFIED_CAPABILITY_EXAMPLE,
    releaseReadyAfterRepair: needsRepair.length > 0,
    blockedBeforeRepair: needsRepair.length > 0
  }
}

export function diagnoseSusuGroupSavingsGenome(susuGenome = {}) {
  const missing = SUSU_GROUP_SAVINGS_GENOME_FIELDS.filter((field) => {
    const value = susuGenome[field]
    if (Array.isArray(value)) return value.length === 0
    return value === undefined || value === null || value === ''
  })
  const issues = missing.map((field) => `missing_${field}`)

  if (!(susuGenome.default_rules ?? []).length) issues.push('default_handling_missing')
  if (susuGenome.organizer_role !== 'cannot_reorder_payouts_unilaterally') issues.push('payout_order_can_be_manipulated')
  if (!(susuGenome.liquidity_rules ?? []).includes('payout_only_when_pot_fundable')) issues.push('pot_shrinkage_possible')
  if (!(susuGenome.late_payment_rules ?? []).length) issues.push('late_payment_policy_undefined')
  if (!(susuGenome.insurance_or_deposit_rules ?? []).length) issues.push('reserve_or_insurance_missing')
  if (!(susuGenome.eligibility ?? []).includes('consents_to_group_rules')) issues.push('member_rule_consent_missing')
  if (!(susuGenome.ledger_events ?? []).length) issues.push('obligations_not_recorded')
  if (!(susuGenome.member_replacement ?? []).length) issues.push('exit_rules_missing')
  if (!String(susuGenome.trust_score ?? '').includes('eligibility')) issues.push('behavioral_trust_score_not_connected_to_eligibility')

  const dedupedIssues = [...new Set(issues)]

  return {
    valid: dedupedIssues.length === 0,
    issues: dedupedIssues,
    fields: SUSU_GROUP_SAVINGS_GENOME_FIELDS,
    checks: SUSU_GROUP_SAVINGS_DOCTOR_CHECKS,
    releaseBlocked: dedupedIssues.some((issue) => SUSU_GROUP_SAVINGS_REJECTION_REASONS.includes(issue) || issue.startsWith('missing_'))
  }
}

export function validateCapabilityCreationLoop(steps = []) {
  const issues = []
  const stepSet = new Set(steps)
  for (const step of AURA_CAPABILITY_CREATION_LOOP_STEPS) {
    if (!stepSet.has(step)) issues.push(`creation_loop_step_missing:${step}`)
  }
  const promptIndex = steps.indexOf('user_describes_need')
  const certifiedIndex = steps.indexOf('certified_capability_genome_issued')
  const runtimeIndex = steps.indexOf('capability_goes_live_under_approved_release_mode')
  if (promptIndex !== -1 && runtimeIndex !== -1 && certifiedIndex === -1) {
    issues.push('unsafe_prompt_to_runtime_without_certified_genome')
  }
  if (steps.indexOf('simulation_engine_stress_tests_behavior') > runtimeIndex && runtimeIndex !== -1) {
    issues.push('simulation_after_runtime_is_too_late')
  }

  return {
    valid: issues.length === 0,
    issues,
    requiredSteps: AURA_CAPABILITY_CREATION_LOOP_STEPS,
    releaseBlocked: issues.length > 0
  }
}

export function buildReusableCapabilityGeneMap(genes = PROOF_GATED_PAYMENT_REUSABLE_GENES, targets = CAPABILITY_REUSE_TARGETS) {
  return targets.map((target) => ({
    target,
    reusableGenes: genes,
    requiresDoctorReview: ['diaspora_construction_payout', 'school_fee_sponsor_release', 'procurement_deposit_release', 'rent_deposit_condition'].includes(target)
  }))
}

export function validateGenomeInheritance({
  inheritedTraits = [],
  addedTraits = [],
  removedTraits = [],
  changes = []
} = {}) {
  const issues = []
  const inheritedSet = new Set(inheritedTraits)
  const addedSet = new Set(addedTraits)
  const removedSet = new Set(removedTraits)
  const changeSet = new Set(changes)

  for (const trait of GENOME_INHERITED_TRAITS) {
    if (!inheritedSet.has(trait) || removedSet.has(trait)) issues.push(`parent_invariant_removed:${trait}`)
  }
  if (!inheritedSet.has('refund_pattern')) issues.push('required_refund_logic_removed')
  if (addedSet.has('gps_proof') || addedSet.has('photo_proof')) {
    if (!changeSet.has('new_disclosures_required')) issues.push('new_proof_data_collection_without_disclosure_update')
  }
  if (addedSet.has('ghana_specific_compliance_review') && !changeSet.has('regulatory_classification_reviewed')) {
    issues.push('regulatory_classification_change_not_reviewed')
  }
  if (changeSet.has('money_movement_changed')) issues.push('money_movement_change_requires_financial_physics_review')

  return {
    valid: issues.length === 0,
    issues,
    checks: GENOME_INHERITANCE_DOCTOR_CHECKS,
    releaseBlocked: issues.length > 0
  }
}

export function classifyGenomeMutation(mutation) {
  for (const [riskClass, mutations] of Object.entries(GENOME_MUTATION_RULES)) {
    if (mutations.includes(mutation)) {
      return {
        mutation,
        riskClass,
        allowed: riskClass !== 'forbidden',
        requiredReview: riskClass === 'controlled' ? 'doctor_review_maybe_user_notification' : riskClass === 'dangerous' ? 'strict_review' : riskClass === 'forbidden' ? 'blocked' : 'low_risk_review',
        releaseBlocked: riskClass === 'forbidden'
      }
    }
  }
  return {
    mutation,
    riskClass: 'unknown',
    allowed: false,
    requiredReview: 'doctor_review_required',
    releaseBlocked: true
  }
}

export function traceAffectedGenomeDescendants({ flawedPrimitive = '', lineage = [] } = {}) {
  const affected = lineage.filter((node) => (node.primitives ?? []).includes(flawedPrimitive))
  return {
    flawedPrimitive,
    affectedCapabilityIds: affected.map((node) => node.capabilityId),
    detection: affected.length ? 'ecosystem_level_contagion' : 'no_descendants_affected',
    actions: affected.length ? ['quarantine_affected_descendants', 'repair_or_replace_flawed_primitive', 'rerun_doctor_certification'] : [],
    immuneSystemSignals: CAPABILITY_DOCTOR_IMMUNE_SYSTEM_DETECTIONS
  }
}

export function planPrimitiveIncidentResponse(incident = GPS_PRIMITIVE_FALSE_POSITIVE_INCIDENT) {
  return {
    primitive: incident.primitive,
    issue: incident.runtime_issue,
    affectedCapabilities: incident.affected_capabilities,
    actions: incident.doctor_actions,
    releaseBlocked: (incident.affected_capabilities ?? []).length > 0
  }
}

export function validateGenomeContractRelationship(genome = {}) {
  const issues = []
  const contractLayers = new Set(genome.contract_layers ?? [])
  const extraLayers = new Set(genome.extra_dna_layers ?? [])

  for (const layer of GENOME_CONTRACT_LAYERS) {
    if (!contractLayers.has(layer)) issues.push(`contract_layer_missing:${layer}`)
  }
  for (const layer of GENOME_EXTRA_DNA_LAYERS) {
    if (!extraLayers.has(layer)) issues.push(`genome_dna_layer_missing:${layer}`)
  }

  return {
    valid: issues.length === 0,
    issues,
    executablePromise: 'universal_capability_contract',
    fullDna: [...GENOME_CONTRACT_LAYERS, ...GENOME_EXTRA_DNA_LAYERS],
    releaseBlocked: issues.some((issue) => issue.includes('universal_capability_contract') || issue.includes('financial_contract') || issue.includes('state_machine_contract'))
  }
}

export function validateFinancialPhysicsEngineAlignment(physicsGenome = {}, stateMachineGenome = {}) {
  const hardGateReview = examineFinancialPhysicsHardGates(physicsGenome, stateMachineGenome)
  const ledgerReview = validateLedgerIntegrityGenome(PROOF_GATED_PAYMENT_LEDGER_INTEGRITY_GENOME, stateMachineGenome)
  const issues = [...hardGateReview.issues, ...ledgerReview.issues]

  return {
    valid: issues.length === 0,
    issues: [...new Set(issues)],
    laws: FINANCIAL_PHYSICS_ENGINE_LAWS,
    releaseBlocked: issues.length > 0
  }
}

export function validateExperiencePhysicsAlignment({ financialState = '', uiCopy = '', disclosureTiming = '', confirmationStrength = '', riskLevel = 'low', recoveryVisible = false, motionMeaning = '' } = {}) {
  const issues = []
  const lowerCopy = uiCopy.toLowerCase()
  if (financialState === 'funds_locked_proof_pending' && (lowerCopy.includes('payment successful') || lowerCopy.includes('paid'))) {
    issues.push('experience_state_mismatch_user_may_believe_recipient_paid')
  }
  if (disclosureTiming !== 'before_commitment') issues.push('disclosure_not_before_commitment')
  if (['medium', 'high'].includes(riskLevel) && confirmationStrength !== 'explicit_review_and_confirm') {
    issues.push('confirmation_too_weak_for_risk')
  }
  if (!recoveryVisible) issues.push('recovery_paths_not_visible')
  if (!motionMeaning) issues.push('motion_meaning_missing')

  return {
    valid: issues.length === 0,
    issues,
    checks: EXPERIENCE_PHYSICS_ENGINE_CHECKS,
    repair: issues.includes('experience_state_mismatch_user_may_believe_recipient_paid')
      ? 'money_is_safely_held_waiting_for_proof'
      : undefined,
    releaseBlocked: issues.length > 0
  }
}

export function validateAssetVaultFit({ capability = '', asset = '', emotionalTone = '' } = {}) {
  const issues = []
  const lowerCapability = capability.toLowerCase()
  const lowerAsset = asset.toLowerCase()
  const lowerTone = emotionalTone.toLowerCase()

  if (lowerCapability.includes('debt') && (lowerAsset.includes('aggressive') || lowerTone.includes('shame') || lowerTone.includes('anxiety'))) {
    issues.push('asset_may_increase_shame_or_anxiety')
  }
  if (lowerAsset.includes('celebration') && !lowerCapability.includes('completed')) issues.push('asset_implies_success_too_early')

  return {
    valid: issues.length === 0,
    issues,
    checks: ASSET_VAULT_DOCTOR_CHECKS,
    repair: issues.length ? 'use_calm_obligation_management_visual' : undefined,
    releaseBlocked: issues.length > 0
  }
}

export function validateAlgorithmVaultSelection({
  algorithm = '',
  certified = false,
  jurisdictionAllowed = false,
  personaAllowed = true,
  confidenceThreshold = 0,
  explainable = false,
  canMakeFinalDecision = false,
  humanReviewRequired = false,
  biasMonitoring = false,
  fallbackDefined = false
} = {}) {
  const issues = []
  if (!ALGORITHM_VAULT_CAPABILITIES.includes(algorithm)) issues.push(`unknown_algorithm:${algorithm}`)
  if (!certified) issues.push('algorithm_not_certified')
  if (!jurisdictionAllowed) issues.push('algorithm_not_allowed_in_jurisdiction')
  if (!personaAllowed) issues.push('algorithm_not_allowed_for_persona')
  if (confidenceThreshold < 0.7) issues.push('confidence_threshold_too_low')
  if (!explainable) issues.push('algorithm_not_explainable')
  if (canMakeFinalDecision && !humanReviewRequired) issues.push('final_decision_without_human_review')
  if (!biasMonitoring) issues.push('bias_monitoring_missing')
  if (!fallbackDefined) issues.push('algorithm_failure_fallback_missing')

  return {
    valid: issues.length === 0,
    issues,
    checks: ALGORITHM_VAULT_DOCTOR_CHECKS,
    releaseBlocked: issues.length > 0
  }
}

export function diagnoseRuntimeWatchtower({
  expectedReviewHours = RUNTIME_WATCHTOWER_EXPECTATIONS.proof_review_sla_hours,
  medianReviewHours = 0,
  queueCapacityHealthy = true,
  autoReviewThresholdSafeToLower = false,
  highRiskNewTransactionsActive = false
} = {}) {
  const issues = []
  const diagnosis = []
  const actions = []
  const userHarmRisks = []

  if (medianReviewHours > expectedReviewHours) {
    issues.push('proof_review_sla_breach')
    diagnosis.push('human_review_queue_capacity_issue')
    userHarmRisks.push('delayed_access_to_funds')
    actions.push('escalate_operations', 'notify_users')
  }
  if (!queueCapacityHealthy) diagnosis.push('human_review_queue_capacity_issue')
  if (autoReviewThresholdSafeToLower && issues.includes('proof_review_sla_breach')) {
    actions.push('temporarily_lower_auto_review_threshold_only_if_safe')
  }
  if (highRiskNewTransactionsActive && issues.includes('proof_review_sla_breach')) {
    actions.push('pause_high_risk_new_transactions_if_necessary')
  }

  return {
    healthy: issues.length === 0,
    issues,
    diagnosis: [...new Set(diagnosis)],
    userHarmRisks,
    actions: [...new Set(actions)],
    expectations: RUNTIME_WATCHTOWER_EXPECTATIONS,
    availableActions: RUNTIME_WATCHTOWER_DOCTOR_ACTIONS,
    runtimeInterventionRequired: issues.length > 0
  }
}

export function validateMarketplaceHealthCard(card = {}) {
  const missing = MARKETPLACE_HEALTH_CARD_FIELDS.filter((field) => {
    const value = card[field]
    if (Array.isArray(value)) return value.length === 0
    return value === undefined || value === null || value === ''
  })
  const issues = missing.map((field) => `missing_${field}`)
  const health = String(card.health ?? '').toLowerCase()
  const runtimeHealth = String(card.runtime_health ?? '').toLowerCase()

  if (health && !health.includes('certified')) issues.push('marketplace_capability_not_doctor_certified')
  if (runtimeHealth && runtimeHealth !== 'stable') issues.push(`runtime_health_not_stable:${card.runtime_health}`)

  return {
    valid: issues.length === 0,
    issues,
    fields: MARKETPLACE_HEALTH_CARD_FIELDS,
    publicCard: card,
    publishBlocked: issues.length > 0
  }
}

export function validateMarketplaceEligibility({
  certifiedGenome = false,
  completeTests = false,
  passedSimulations = false,
  clearDisclosures = false,
  versionHistory = false,
  runtimeMonitoring = false,
  supportPolicy = false,
  humanReviewPathForHighRiskCapabilities = false
} = {}) {
  const statusByRequirement = {
    certified_genome: certifiedGenome,
    complete_tests: completeTests,
    passed_simulations: passedSimulations,
    clear_disclosures: clearDisclosures,
    version_history: versionHistory,
    runtime_monitoring: runtimeMonitoring,
    support_policy: supportPolicy,
    human_review_path_for_high_risk_capabilities: humanReviewPathForHighRiskCapabilities
  }
  const missing = MARKETPLACE_ELIGIBILITY_REQUIREMENTS.filter((requirement) => statusByRequirement[requirement] !== true)

  return {
    eligible: missing.length === 0,
    missing,
    requirements: MARKETPLACE_ELIGIBILITY_REQUIREMENTS,
    doctorCertificationRequired: true,
    publishBlocked: missing.length > 0
  }
}

export function diagnoseAdminDragDropGenome({ blocks = [], genome = {} } = {}) {
  const blockSet = new Set(blocks)
  const requiredBlocks = ['escrow_block', 'gps_proof_block', 'photo_proof_block', 'auto_refund_block']
  const missingBlocks = requiredBlocks.filter((block) => !blockSet.has(block))
  const controlStatus = {
    gps_consent_screen: genome.gpsConsentScreen,
    evidence_retention_rule: genome.evidenceRetentionRule,
    human_review_rule_for_low_confidence_photo: genome.humanReviewLowConfidencePhoto,
    dispute_terminal_state: genome.disputeTerminalState,
    ledger_idempotency_rule: genome.ledgerIdempotencyRule
  }
  const missingControls = ADMIN_DRAG_DROP_DOCTOR_REQUIRED_CONTROLS.filter((control) => controlStatus[control] !== true)
  const issues = [
    ...missingBlocks.map((block) => `missing_block:${block}`),
    ...missingControls.map((control) => `missing_control:${control}`)
  ]

  return {
    valid: issues.length === 0,
    draftGenomeCreated: blocks.length > 0,
    validAssembly: missingBlocks.length === 0,
    blocks,
    missingBlocks,
    missingControls,
    suggestions: ADMIN_DRAG_DROP_DOCTOR_SUGGESTIONS,
    issues,
    releaseBlocked: issues.length > 0
  }
}

export function classifyDoctorBlock({ request = '', issues = [] } = {}) {
  const text = request.toLowerCase()
  const reasons = new Set(issues.filter((issue) => DOCTOR_BLOCK_REASONS.includes(issue)))

  if (/bank|wallet|account/.test(text) && /debit|take|withdraw/.test(text) && /without asking|without consent|automatically without/.test(text)) {
    reasons.add('missing_required_consent')
    reasons.add('forbidden_behavior')
  }
  if (/unsupported jurisdiction|cross-border/.test(text)) reasons.add('unsupported_jurisdiction')
  if (/hide|disguise|casual name/.test(text)) reasons.add('legally_unsupported')

  return {
    blocked: reasons.size > 0,
    reasons: [...reasons],
    safeAlternative: reasons.has('missing_required_consent') ? UNAUTHORIZED_DEBIT_SAFE_ALTERNATIVE : undefined,
    availableReasons: DOCTOR_BLOCK_REASONS
  }
}

export function validateCoreDoctorInvariants({ satisfied = [], violated = [] } = {}) {
  const required = Object.values(CORE_DOCTOR_INVARIANTS).flat()
  const satisfiedSet = new Set(satisfied)
  const explicitViolations = violated.map((invariant) => `invariant_violated:${invariant}`)
  const missing = required.filter((invariant) => !satisfiedSet.has(invariant) && !violated.includes(invariant))
  const issues = [
    ...explicitViolations,
    ...missing.map((invariant) => `invariant_not_enforced:${invariant}`)
  ]

  return {
    valid: issues.length === 0,
    issues,
    missing,
    violated,
    invariants: CORE_DOCTOR_INVARIANTS,
    releaseBlocked: explicitViolations.length > 0 || missing.some((invariant) => (
      invariant.includes('money')
      || invariant.includes('balance')
      || invariant.includes('unauthorized')
      || invariant.includes('consent')
      || invariant.includes('unsupported_jurisdictions')
    ))
  }
}

export function validateRepairActionModel(action = {}) {
  const missing = REPAIR_ACTION_MODEL_FIELDS.filter((field) => action[field] === undefined || action[field] === null || action[field] === '')
  const issues = missing.map((field) => `missing_${field}`)

  if (action.actionType && !REPAIR_ACTION_TYPES.includes(action.actionType)) issues.push(`unknown_repair_action_type:${action.actionType}`)
  if (action.autoFixAllowed === true && action.humanApprovalRequired === true) {
    issues.push('auto_fix_and_human_approval_require_policy_resolution')
  }
  if (typeof action.autoFixAllowed !== 'boolean') issues.push('auto_fix_allowed_must_be_boolean')
  if (typeof action.humanApprovalRequired !== 'boolean') issues.push('human_approval_required_must_be_boolean')

  return {
    valid: issues.length === 0,
    issues,
    fields: REPAIR_ACTION_MODEL_FIELDS,
    allowedTypes: REPAIR_ACTION_TYPES
  }
}

export function validateDoctorFindingModel(finding = {}) {
  const missing = DOCTOR_FINDING_MODEL_FIELDS.filter((field) => {
    const value = finding[field]
    if (Array.isArray(value)) return value.length === 0
    return value === undefined || value === null || value === ''
  })
  const issues = missing.map((field) => `missing_${field}`)

  if (finding.severity && !Object.keys(DIAGNOSIS_SEVERITY_LEVELS).includes(finding.severity)) {
    issues.push(`unknown_finding_severity:${finding.severity}`)
  }
  if (finding.category && !DOCTOR_FINDING_CATEGORIES.includes(finding.category)) {
    issues.push(`unknown_finding_category:${finding.category}`)
  }
  if (finding.releaseImpact && !DOCTOR_FINDING_RELEASE_IMPACTS.includes(finding.releaseImpact)) {
    issues.push(`unknown_release_impact:${finding.releaseImpact}`)
  }

  const repairReviews = (finding.recommendedRepair ?? []).map(validateRepairActionModel)
  const repairIssues = repairReviews.flatMap((review) => review.issues.map((issue) => `repair_${issue}`))
  issues.push(...repairIssues)

  return {
    valid: issues.length === 0,
    issues,
    fields: DOCTOR_FINDING_MODEL_FIELDS,
    categories: DOCTOR_FINDING_CATEGORIES,
    releaseImpacts: DOCTOR_FINDING_RELEASE_IMPACTS,
    releaseBlocked: finding.releaseImpact === 'blocks_release' || finding.severity === 'P0'
  }
}

export function validateCapabilityDoctorReportModel(report = {}) {
  const missing = CAPABILITY_DOCTOR_REPORT_MODEL_FIELDS.filter((field) => {
    const value = report[field]
    if (Array.isArray(value)) return value.length === 0 && !['findings', 'requiredRepairs', 'simulationResults'].includes(field)
    return value === undefined || value === null || value === ''
  })
  const issues = missing.map((field) => `missing_${field}`)

  if (report.overallStatus && !CAPABILITY_DOCTOR_REPORT_STATUS_VALUES.includes(report.overallStatus)) {
    issues.push(`unknown_report_status:${report.overallStatus}`)
  }
  if (!Number.isFinite(report.healthScore) || report.healthScore < 0 || report.healthScore > 100) {
    issues.push('health_score_must_be_between_0_and_100')
  }

  const findingReviews = (report.findings ?? []).map(validateDoctorFindingModel)
  const repairReviews = (report.requiredRepairs ?? []).map(validateRepairActionModel)
  issues.push(...findingReviews.flatMap((review) => review.issues.map((issue) => `finding_${issue}`)))
  issues.push(...repairReviews.flatMap((review) => review.issues.map((issue) => `required_repair_${issue}`)))

  return {
    valid: issues.length === 0,
    issues,
    fields: CAPABILITY_DOCTOR_REPORT_MODEL_FIELDS,
    statuses: CAPABILITY_DOCTOR_REPORT_STATUS_VALUES,
    releaseBlocked: report.overallStatus === 'not_release_eligible'
      || report.overallStatus === 'quarantined'
      || findingReviews.some((review) => review.releaseBlocked)
  }
}

export function validateBuildGradeCapabilityGenomeModel(genome = {}) {
  const missing = BUILD_GRADE_CAPABILITY_GENOME_FIELDS.filter((field) => {
    const value = genome[field]
    if (Array.isArray(value)) return value.length === 0
    return value === undefined || value === null || value === ''
  })
  const issues = missing.map((field) => `missing_${field}`)

  if (genome.status && !GENOME_STATUS_VALUES.includes(genome.status)) issues.push(`unknown_genome_status:${genome.status}`)
  if (!Array.isArray(genome.doctorHistory)) issues.push('doctor_history_must_be_array')
  if (genome.integrations?.third_party_provider_apis_required === true) issues.push('third_party_provider_api_gap_skipped')

  return {
    valid: issues.length === 0,
    issues,
    fields: BUILD_GRADE_CAPABILITY_GENOME_FIELDS,
    statuses: GENOME_STATUS_VALUES,
    releaseBlocked: issues.some((issue) => issue.includes('missing') || issue.includes('unknown_genome_status'))
  }
}

export function classifyDoctorDiagnosticMethod(check = '') {
  if (DOCTOR_DETERMINISTIC_CHECKS.includes(check)) {
    return {
      check,
      method: 'deterministic',
      components: ['formal_invariants', 'static_analysis'],
      aiDecisionAllowed: false
    }
  }
  if (DOCTOR_HYBRID_CHECKS[check]) {
    return {
      check,
      method: 'orchestrated_hybrid',
      components: DOCTOR_HYBRID_CHECKS[check],
      aiDecisionAllowed: check !== 'compliance_resemblance'
    }
  }
  return {
    check,
    method: 'unknown_requires_architecture_review',
    components: ['human_review'],
    aiDecisionAllowed: false
  }
}

export function validateDoctorOrchestration({
  components = [],
  hardFinancialChecksDeterministic = false,
  reliesOnSingleLlmDecision = false
} = {}) {
  const componentSet = new Set(components)
  const missing = DOCTOR_ORCHESTRATION_STACK.filter((component) => !componentSet.has(component))
  const issues = missing.map((component) => `missing_orchestration_component:${component}`)

  if (!hardFinancialChecksDeterministic) issues.push('hard_financial_checks_must_be_deterministic')
  if (reliesOnSingleLlmDecision) issues.push('doctor_must_not_be_single_monolithic_ai_prompt')

  return {
    valid: issues.length === 0,
    issues,
    missing,
    requiredStack: DOCTOR_ORCHESTRATION_STACK,
    deterministicChecks: DOCTOR_DETERMINISTIC_CHECKS,
    hybridChecks: DOCTOR_HYBRID_CHECKS,
    releaseBlocked: issues.some((issue) => (
      issue.includes('financial')
      || issue.includes('single_monolithic')
      || issue.includes('formal_invariants')
      || issue.includes('type_system')
    ))
  }
}

export function validateCapabilityExistenceReadiness({
  anatomicallyDescribed = false,
  medicallyDiagnosable = false,
  safelySimulatable = false,
  legallyClassifiable = false,
  financiallyVerifiable = false,
  experientiallyExplainable = false,
  continuouslyMonitorable = false
} = {}) {
  const gateStatus = {
    anatomically_describe: anatomicallyDescribed,
    medically_diagnose: medicallyDiagnosable,
    safely_simulate: safelySimulatable,
    legally_classify: legallyClassifiable,
    financially_verify: financiallyVerifiable,
    experientially_explain: experientiallyExplainable,
    continuously_monitor: continuouslyMonitorable
  }
  const missing = AURA_CAPABILITY_EXISTENCE_GATES.filter((gate) => gateStatus[gate] !== true)

  return {
    ready: missing.length === 0,
    missing,
    gates: AURA_CAPABILITY_EXISTENCE_GATES,
    finalStatements: CAPABILITY_GENOME_DOCTOR_FINAL_STATEMENTS,
    releaseBlocked: missing.length > 0
  }
}

export function inferCapabilityTypeFromComposition(parts) {
  const set = new Set(parts)

  if (set.has('escrow_hold') && set.has('photo_proof') && set.has('refund_timer')) return 'contractor_escrow'
  if (set.has('group_wallet') && set.has('rotating_payout_queue') && set.has('reserve_pool')) {
    return 'reserve_backed_group_payout'
  }
  if (set.has('school_fee_restriction')) return 'school_fee_wallet'
  if (set.has('salary_split') || set.has('priority_waterfall')) return 'salary_split'
  if (set.has('credit_advance') || set.has('repayment_obligation')) return 'liquidity_advance'

  return 'unknown_capability'
}

export function validateCapabilityPackage(capability) {
  const missing = CAPABILITY_PACKAGE_FIELDS.filter((field) => capability[field] === undefined)
  const knownType = CAPABILITY_TYPE_CATEGORIES.includes(capability.type)

  return {
    valid: missing.length === 0 && knownType,
    missing,
    knownType,
    fields: CAPABILITY_PACKAGE_FIELDS
  }
}

export function diagnoseCapabilityHealth(capability) {
  const validation = validateCapabilityPackage(capability)
  const genome = capability.genome ?? buildCapabilityGenome(capability)
  const genomeDiagnosis = diagnoseCapabilityGenome(genome)
  const findings = []

  if (validation.missing.length) findings.push('incomplete')
  if (!validation.knownType) findings.push('unknown_type')
  if (!capability.runtimeMonitors?.length) findings.push('unmonitored_runtime_risk')
  if (capability.complianceTags?.length && capability.releaseMode === 'auto') findings.push('risky_auto_release')
  if (capability.failureModes?.length && !capability.recoveryPaths?.length) findings.push('broken_failure_recovery')
  if (!capability.testCases?.length) findings.push('untested')
  if (!capability.explanationLogic?.length) findings.push('not_explainable')
  if (capability.healthStatus === 'stale') findings.push('stale_version')
  if (!genomeDiagnosis.healthy) findings.push('genome_unhealthy')

  return {
    healthy: findings.length === 0 && genomeDiagnosis.healthy,
    findings,
    genomeDiagnosis,
    canBeRepaired: findings.some((finding) => [
      'incomplete',
      'unmonitored_runtime_risk',
      'broken_failure_recovery',
      'untested',
      'not_explainable',
      'genome_unhealthy'
    ].includes(finding)),
    canBeUpgraded: capability.healthStatus === 'stale' || findings.includes('stale_version'),
    safelyReusable: findings.length === 0 && capability.releaseMode !== 'blocked',
    repairPlan: findings.map((finding) => ({
      finding,
      action: {
        incomplete: 'fill_missing_capability_contract_fields',
        unknown_type: 'route_to_type_classification',
        unmonitored_runtime_risk: 'attach_required_runtime_monitors',
        risky_auto_release: 'downgrade_to_supervised_or_governor_review',
        broken_failure_recovery: 'add_recovery_paths',
        untested: 'generate_test_cases',
        not_explainable: 'add_explanation_logic',
        stale_version: 'run_migration_review',
        genome_unhealthy: 'repair_capability_genome_findings'
      }[finding]
    }))
  }
}
