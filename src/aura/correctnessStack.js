export const AURA_CORRECTNESS_STACK_ENGINES = Object.freeze([
  'assumption_manager',
  'conflict_resolver',
  'ledger_compiler',
  'invariant_proof_engine'
])

export const AURA_FINANCIAL_TRUTH_PIPELINE = Object.freeze([
  'interpret_product_intent',
  'extract_and_govern_assumptions',
  'resolve_rule_policy_risk_consent_conflicts',
  'compile_account_graph_postings_state_machine_events_and_guards',
  'prove_financial_invariants',
  'emit_release_package'
])

export const CORRECTNESS_STACK_LAYER_PURPOSES = Object.freeze({
  assumption_manager: 'what_do_we_know_assume_or_need_to_ask',
  conflict_resolver: 'do_all_rules_agree_or_need_correction',
  ledger_compiler: 'can_this_become_deterministic_money_logic',
  invariant_proof_engine: 'can_this_be_proven_safe'
})

export const AURA_ITERATIVE_CORRECTNESS_LOOP = Object.freeze([
  'interpret_intent',
  'extract_assumptions',
  'resolve_conflicts',
  'compile_ledger',
  'prove_invariants',
  'return_counterexample_if_proof_fails',
  'ask_or_repair',
  'recompile',
  'reprove',
  'release_only_when_safe'
])

export const PROOF_GATED_MASON_PAYMENT_HIDDEN_QUESTIONS = Object.freeze([
  'who_is_sender',
  'who_is_recipient',
  'what_amount',
  'what_currency',
  'what_gps_radius_counts_as_valid',
  'what_if_photo_is_fake',
  'what_if_gps_is_unavailable',
  'can_sender_cancel_after_proof_submission',
  'where_money_sits_before_release',
  'which_conditional_payment_type_applies',
  'can_funds_release_twice',
  'can_money_disappear_during_refund',
  'can_third_party_modify_proof',
  'does_local_law_treat_this_as_regulated_escrow',
  'is_user_request_fraudulent',
  'is_proof_condition_verifiable'
])

export const ASSUMPTION_MANAGER_PURPOSES = Object.freeze([
  'identify_assumptions',
  'record_assumptions',
  'classify_assumptions',
  'validate_assumptions',
  'govern_assumptions',
  'prevent_silent_dangerous_guessing'
])

export const ASSUMPTION_TYPES = Object.freeze({
  identity: { riskLevel: 'high', example: 'recipient_is_the_mason_mentioned_by_user' },
  role: { riskLevel: 'high', example: 'sender_is_also_fund_owner' },
  amount: { riskLevel: 'high', example: 'contribution_is_500_ghs' },
  currency: { riskLevel: 'high', example: 'user_means_ghanaian_cedis' },
  timing: { riskLevel: 'medium', example: 'three_days_means_calendar_days' },
  location: { riskLevel: 'high', example: 'gps_site_is_delivery_site' },
  verification: { riskLevel: 'high', example: 'one_photo_is_enough_proof' },
  consent: { riskLevel: 'critical', example: 'recipient_consents_to_gps_and_photo_verification' },
  jurisdiction: { riskLevel: 'critical', example: 'product_allowed_in_user_region' },
  fee: { riskLevel: 'critical', example: 'platform_fee_is_one_percent' },
  refund: { riskLevel: 'high', example: 'refund_returns_to_original_source_wallet' },
  risk: { riskLevel: 'high', example: 'user_is_low_risk' },
  rail: { riskLevel: 'high', example: 'payment_rail_supports_hold_release_refund' },
  experience: { riskLevel: 'low', example: 'user_wants_simple_flow_not_advanced_controls' },
  language: { riskLevel: 'medium', example: 'user_understands_disclosure_language' },
  family_minor: { riskLevel: 'critical', example: 'beneficiary_is_an_adult' },
  business: { riskLevel: 'high', example: 'seller_is_registered_business' },
  availability: { riskLevel: 'medium', example: 'recipient_can_claim_funds_through_app' },
  template: { riskLevel: 'medium', example: 'use_standard_conditional_payment_template' }
})

export const UNSAFE_SILENT_ASSUMPTIONS = Object.freeze([
  'on_time_means_24_hours',
  'refund_goes_to_original_wallet',
  'weekends_count',
  'receiver_has_no_appeal_right',
  'sender_can_cancel_at_any_moment',
  'photo_proof_alone_is_enough',
  'gps_is_always_available',
  'user_is_legally_allowed_to_create_conditional_payment'
])

export const ASSUMPTION_LIFECYCLE_STAGES = Object.freeze([
  'detected',
  'classified',
  'risk_scored',
  'source_tagged',
  'resolution_selected',
  'confirmed',
  'promoted',
  'bound',
  'monitored',
  'expired_or_updated_or_revoked'
])

export const ASSUMPTION_RESOLUTION_METHODS = Object.freeze([
  'user_confirmation',
  'safe_default',
  'template_rule',
  'external_verification',
  'runtime_observation',
  'human_review',
  'rejection_or_block'
])

export const ASSUMPTION_SOURCES = Object.freeze({
  explicit_user_statement: { trustLevel: 'high', example: 'refund_after_3_days' },
  user_confirmation: { trustLevel: 'very_high', example: 'yes_use_3_calendar_days' },
  product_template_default: { trustLevel: 'medium', example: 'standard_refund_path' },
  jurisdiction_rule: { trustLevel: 'very_high', example: 'consumer_disclosure_required' },
  platform_policy: { trustLevel: 'very_high', example: 'no_unauthorized_debits' },
  historical_user_preference: { trustLevel: 'medium', example: 'user_prefers_simple_flows' },
  runtime_signal: { trustLevel: 'medium_high', example: 'gps_coordinates_captured' },
  ai_inference: { trustLevel: 'low', example: 'probably_means_rent_payment' },
  external_provider: { trustLevel: 'variable', example: 'external_entity_verification_skipped' },
  human_reviewer: { trustLevel: 'high', example: 'compliance_approved' },
  system_safe_default: { trustLevel: 'medium', example: 'use_stricter_consent_requirement' }
})

export const ASSUMPTION_RISK_LEVELS = Object.freeze({
  0: { label: 'cosmetic', action: 'can_default_silently_or_disclose_lightly' },
  1: { label: 'experience', action: 'can_default_with_user_editable_setting' },
  2: { label: 'material', action: 'must_disclose_or_confirm' },
  3: { label: 'financial', action: 'must_confirm_explicitly' },
  4: { label: 'legal_consent', action: 'must_confirm_and_or_verify' },
  5: { label: 'prohibited_unsafe', action: 'block_or_redirect' }
})

export const ASSUMPTION_MANAGER_SUBSYSTEMS = Object.freeze([
  'missing_fact_detector',
  'ambiguity_detector',
  'implied_rule_extractor',
  'default_policy_engine',
  'assumption_risk_scorer',
  'assumption_source_tracker',
  'clarification_question_generator',
  'confirmation_binder',
  'expiry_manager',
  'runtime_assumption_monitor',
  'assumption_audit_log',
  'assumption_to_invariant_mapper',
  'assumption_to_ui_mapper',
  'assumption_conflict_feeder',
  'confidence_model'
])

export const DEADLINE_INTERPRETATION_ASSUMPTION_EXAMPLE = Object.freeze({
  assumption_id: 'asm_00192',
  capability_id: 'cap_conditional_payment_8841',
  type: 'deadline_interpretation',
  statement: 'three_day_deadline_means_three_calendar_days_from_funds_locked',
  source: 'system_inference',
  source_confidence: 0.72,
  risk_level: 3,
  status: 'requires_user_confirmation',
  affected_components: ['ledger_state_machine', 'refund_rule', 'ui_disclosure', 'runtime_timer'],
  possible_alternatives: ['three_business_days', 'seventy_two_hours_exact', 'until_end_of_third_day_local_time'],
  recommended_resolution: 'ask_user',
  question: 'Should the 3-day deadline mean exactly 72 hours, 3 calendar days, or 3 business days?'
})

export const NO_SILENT_CRITICAL_ASSUMPTION_FIELDS = Object.freeze([
  'fund_ownership',
  'debit_authorization',
  'refunds',
  'fees',
  'consent',
  'legal_eligibility',
  'identity',
  'rights_of_appeal',
  'dispute_handling',
  'minors',
  'escrow_holding_behavior',
  'obligation_enforcement',
  'debt_creation',
  'recurring_deductions'
])

export const ASSUMPTION_VISIBLE_TO_ENGINES = Object.freeze([
  'ledger_compiler',
  'invariant_proof_engine',
  'conflict_resolver',
  'ui_composer',
  'runtime_governor',
  'audit_ledger'
])

export const CONFLICT_RESOLVER_PURPOSES = Object.freeze([
  'detect_contradictions',
  'classify_conflicts',
  'prioritize_safety_over_preference',
  'resolve_or_redirect_conflicts'
])

export const CONFLICT_TYPES = Object.freeze([
  'user_intent_vs_platform_policy',
  'user_intent_vs_jurisdiction_rule',
  'financial_invariant_conflict',
  'consent_conflict',
  'risk_control_conflict',
  'template_rule_conflict',
  'mathematical_impossibility',
  'user_vs_law',
  'user_vs_ledger_invariant',
  'rule_vs_rule',
  'assumption_vs_fact',
  'risk_vs_experience',
  'role_conflict',
  'state_machine_conflict',
  'jurisdiction_conflict',
  'currency_conflict',
  'timing_conflict',
  'verification_conflict',
  'ui_conflict',
  'version_conflict',
  'runtime_conflict'
])

export const CONFLICT_PRIORITY_HIERARCHY = Object.freeze([
  'law_jurisdiction_regulatory_prohibition',
  'platform_constitution_and_safety_principles',
  'ledger_invariants_and_money_conservation',
  'identity_authorization_consent_and_ownership',
  'fraud_prevention_and_abuse_controls',
  'user_rights_disclosures_reversibility_dispute_paths',
  'product_specific_rules',
  'user_preferences',
  'ux_convenience',
  'optimization_goals'
])

export const CONFLICT_RESOLVER_PIPELINE = Object.freeze([
  'normalize_rules_into_constraints',
  'build_conflict_graph',
  'detect_contradictions',
  'classify_conflict_type',
  'score_severity',
  'determine_priority_winner',
  'generate_resolution_options',
  'apply_automatic_safe_resolution_if_allowed',
  'ask_user_or_human_reviewer_if_needed',
  'send_patched_contract_back_to_compiler_and_proof_engine'
])

export const CONFLICT_GRAPH_EDGE_TYPES = Object.freeze([
  'supports',
  'contradicts',
  'depends_on',
  'overrides',
  'weakens',
  'duplicates'
])

export const CONFLICT_RESOLUTION_ACTIONS = Object.freeze({
  block: 'product_cannot_be_created',
  redirect: 'offer_safer_legal_alternative',
  ask_user: 'missing_preference_affects_safety',
  insert_guard: 'add_safety_rule_automatically',
  rewrite_rule: 'convert_vague_rule_to_safe_formal_version',
  split_flow: 'separate_incompatible_actions',
  sequence_actions: 'reorder_events_safely',
  degrade_mode: 'use_safer_less_powerful_version',
  escalate: 'send_to_human_review',
  reject_assumption: 'remove_unsafe_inferred_assumption',
  add_disclosure: 'make_hidden_consequence_visible',
  add_fallback: 'handle_failure_path',
  add_runtime_monitor: 'watch_for_conflict_after_release',
  add_cap: 'limit_risk_exposure',
  add_cooling_period: 'reduce_fraud_or_coercion_risk'
})

export const DOUBLE_OUTCOME_CONFLICT_EXAMPLE = Object.freeze({
  conflict_id: 'conf_4428',
  capability_id: 'cap_conditional_payment_8841',
  type: 'state_machine_conflict',
  severity: 'critical',
  description: 'funds_can_be_both_released_to_recipient_and_refunded_to_sender_after_proof_near_deadline',
  conflicting_items: [
    {
      id: 'rule_release_001',
      statement: 'release_funds_immediately_after_proof_approval'
    },
    {
      id: 'rule_refund_003',
      statement: 'refund_funds_automatically_at_deadline'
    }
  ],
  priority_winner: 'ledger_invariant_no_double_spend',
  recommended_resolution: {
    action: 'insert_guard',
    guard: 'deadline_refund_lock',
    logic: 'when_refund_process_begins_proof_submissions_enter_appeal_review_and_cannot_trigger_direct_release'
  },
  requires_user_confirmation: false,
  requires_human_review: false,
  downstream_effects: ['ledger_state_machine', 'runtime_monitor', 'ui_disclosure', 'proof_obligation']
})

export const PAYOUT_MATH_SAFE_ALTERNATIVES = Object.freeze([
  'require_deposit',
  'require_insurance_pool',
  'add_reserve',
  'reduce_maximum_default_tolerance',
  'delay_payout',
  'add_guarantor',
  'lower_circle_size',
  'use_platform_backed_credit',
  'reject_product'
])

export const LEDGER_COMPILER_OUTPUTS = Object.freeze([
  'account_topology',
  'posting_recipes',
  'state_machine',
  'event_contract',
  'guard_rules',
  'authorization_model',
  'balance_policy',
  'refund_paths',
  'failure_handling',
  'reconciliation_plan',
  'fee_tax_rules',
  'runtime_monitors',
  'audit_map',
  'kernel_contract',
  'proof_obligations'
])

export const LEDGER_COMPILER_INPUTS = Object.freeze([
  'universal_capability_contract',
  'product_intent',
  'product_grammar_rules',
  'primitive_composition_graph',
  'assumption_set',
  'resolved_conflict_patches',
  'actor_role_model',
  'jurisdiction_policy',
  'risk_policy',
  'ux_requirements',
  'verification_requirements',
  'algorithm_bindings',
  'asset_ui_bindings',
  'existing_app_constraints',
  'ledger_kernel_capabilities',
  'release_mode'
])

export const LEDGER_COMPILER_PIPELINE = Object.freeze([
  'contract_ingestion',
  'rule_normalization',
  'actor_and_role_binding',
  'value_object_extraction',
  'account_topology_generation',
  'state_machine_synthesis',
  'event_schema_generation',
  'posting_recipe_generation',
  'guard_insertion',
  'consent_and_authorization_binding',
  'risk_and_limit_binding',
  'failure_path_generation',
  'reconciliation_mapping',
  'audit_event_mapping',
  'runtime_monitor_attachment',
  'invariant_obligation_emission',
  'kernel_contract_export',
  'ui_directive_binding',
  'simulation_scenario_generation',
  'version_migration_manifest_generation'
])

export const LEDGER_COMPILER_SUBSYSTEMS = Object.freeze([
  'ledger_intent_translator',
  'account_graph_builder',
  'posting_recipe_generator',
  'state_machine_binder',
  'balance_classifier',
  'event_compiler',
  'authorization_binder',
  'consent_binder',
  'hold_reserve_compiler',
  'refund_path_builder',
  'fee_compiler',
  'reversal_compiler',
  'settlement_rail_mapper',
  'reconciliation_compiler',
  'idempotency_compiler',
  'temporal_rule_compiler',
  'verification_binding_compiler',
  'risk_limit_compiler',
  'audit_compiler',
  'monitor_attachment_compiler',
  'proof_obligation_emitter',
  'kernel_exporter'
])

export const LEDGER_CORE_CONCEPTS = Object.freeze({
  account: 'container_of_value_owned_by_entity',
  subaccount: 'segmented_balance_for_specific_purpose',
  ledger_entry: 'atomic_record_of_debit_credit_movement',
  journal: 'ordered_list_of_ledger_entries',
  posting: 'debit_credit_instruction',
  balance_state: 'available_pending_locked_reserved_escrowed_settled_failed_reversed',
  hold: 'funds_cannot_be_spent_but_not_yet_transferred',
  escrow_like_state: 'funds_held_pending_condition',
  claim: 'recipient_has_possible_right_but_not_final_ownership',
  obligation: 'actor_owes_amount_under_rules',
  reserve: 'pool_set_aside_to_absorb_risk',
  fee_account: 'platform_revenue_account',
  refund_route: 'path_back_to_sender_or_source',
  settlement_rail: 'provider_neutral_external_money_movement_channel',
  reconciliation_marker: 'link_between_internal_ledger_and_external_rail_event',
  idempotency_key: 'prevents_duplicate_execution',
  state_transition: 'movement_from_one_product_state_to_another',
  guard: 'condition_required_before_transition',
  invariant: 'rule_that_must_always_be_true'
})

export const CONDITIONAL_PAYMENT_LEDGER_ACTORS = Object.freeze({
  sender: 'funds_owner',
  mason: 'conditional_recipient',
  aura: 'capability_operator',
  verification_engine: 'proof_evaluator',
  payment_rail: 'provider_neutral_external_settlement_channel',
  human_reviewer: 'optional_dispute_reviewer'
})

export const CONDITIONAL_PAYMENT_BALANCE_STATES = Object.freeze({
  sender_available: 'spendable_money_before_capability_starts',
  sender_locked: 'money_deducted_from_sender_spendable_balance',
  hold_pending_proof: 'funds_held_pending_verification',
  recipient_claim_pending: 'recipient_has_conditional_claim',
  release_committed: 'release_to_recipient_final_internally',
  refund_committed: 'refund_to_sender_final_internally',
  settled: 'external_rail_completed_movement',
  disputed: 'human_review_required',
  reversed: 'corrective_reversal_applied'
})

export const CONDITIONAL_PAYMENT_ACCOUNT_TOPOLOGY = Object.freeze([
  { account: 'sender_main_wallet', owner: 'sender', balanceState: 'sender_available' },
  { account: 'conditional_payment_hold_account', owner: 'aura', balanceState: 'hold_pending_proof' },
  { account: 'recipient_claimable_wallet', owner: 'mason', balanceState: 'recipient_claim_pending' },
  { account: 'sender_refund_wallet', owner: 'sender', balanceState: 'refund_committed' },
  { account: 'platform_fee_account', owner: 'aura', balanceState: 'settled' }
])

export const CONDITIONAL_PAYMENT_POSTING_RECIPES = Object.freeze({
  fund_hold: [
    { account: 'sender_main_wallet', direction: 'debit', amount: 'principal_amount' },
    { account: 'conditional_payment_hold_account', direction: 'credit', amount: 'principal_amount' }
  ],
  release_to_recipient: [
    { account: 'conditional_payment_hold_account', direction: 'debit', amount: 'principal_amount_minus_fee' },
    { account: 'recipient_claimable_wallet', direction: 'credit', amount: 'principal_amount_minus_fee' }
  ],
  refund_sender: [
    { account: 'conditional_payment_hold_account', direction: 'debit', amount: 'remaining_principal' },
    { account: 'sender_refund_wallet', direction: 'credit', amount: 'remaining_principal' }
  ],
  fee_capture: [
    { account: 'conditional_payment_hold_account', direction: 'debit', amount: 'disclosed_fee' },
    { account: 'platform_fee_account', direction: 'credit', amount: 'disclosed_fee' }
  ]
})

export const CONDITIONAL_PAYMENT_COMPILED_STATES = Object.freeze([
  'draft',
  'awaiting_sender_confirmation',
  'awaiting_recipient_consent',
  'funds_locked',
  'pending_proof',
  'proof_submitted',
  'proof_under_review',
  'approved_for_release',
  'released',
  'deadline_expired',
  'refund_pending',
  'refunded',
  'rejected',
  'ambiguous',
  'manual_review',
  'settled'
])

export const CONDITIONAL_PAYMENT_COMPILED_TRANSITIONS = Object.freeze([
  { from: 'draft', to: 'awaiting_sender_confirmation', event: 'terms_completed' },
  { from: 'awaiting_sender_confirmation', to: 'awaiting_recipient_consent', event: 'sender_confirmed' },
  { from: 'awaiting_recipient_consent', to: 'funds_locked', event: 'recipient_consented' },
  { from: 'funds_locked', to: 'pending_proof', event: 'funds_successfully_locked' },
  { from: 'pending_proof', to: 'proof_submitted', event: 'proof_received_before_deadline' },
  { from: 'proof_submitted', to: 'proof_under_review', event: 'proof_metadata_present' },
  { from: 'proof_under_review', to: 'approved_for_release', event: 'proof_accepted_before_deadline' },
  { from: 'approved_for_release', to: 'released', event: 'release_committed' },
  { from: 'released', to: 'settled', event: 'external_settlement_recorded' },
  { from: 'pending_proof', to: 'deadline_expired', event: 'deadline_expired_without_valid_proof' },
  { from: 'deadline_expired', to: 'refund_pending', event: 'refund_started' },
  { from: 'refund_pending', to: 'refunded', event: 'refund_committed' },
  { from: 'refunded', to: 'settled', event: 'refund_settlement_recorded' },
  { from: 'proof_under_review', to: 'rejected', event: 'proof_rejected' },
  { from: 'rejected', to: 'refund_pending', event: 'refund_after_rejection' },
  { from: 'proof_under_review', to: 'ambiguous', event: 'proof_ambiguous' },
  { from: 'ambiguous', to: 'manual_review', event: 'manual_review_required' },
  { from: 'manual_review', to: 'approved_for_release', event: 'review_approves_release' },
  { from: 'manual_review', to: 'refund_pending', event: 'review_approves_refund' }
])

export const CONDITIONAL_PAYMENT_CRITICAL_GUARDS = Object.freeze({
  'draft->awaiting_sender_confirmation': 'product_terms_complete',
  'awaiting_sender_confirmation->awaiting_recipient_consent': 'sender_identity_verified',
  'awaiting_recipient_consent->funds_locked': 'recipient_consents_to_verification_terms',
  'funds_locked->pending_proof': 'funds_successfully_locked',
  'pending_proof->proof_submitted': 'proof_received_before_deadline',
  'proof_submitted->proof_under_review': 'photo_gps_metadata_present',
  'proof_under_review->approved_for_release': 'verification_score_above_threshold',
  'approved_for_release->released': 'no_refund_lock_active',
  'pending_proof->refund_pending': 'deadline_expired',
  'refund_pending->refunded': 'no_release_lock_active'
})

export const TERMINAL_COMMITMENT_OUTCOMES = Object.freeze([
  'release_committed',
  'refund_committed',
  'cancelled_committed',
  'reversed_committed'
])

export const ATOMIC_TERMINAL_LOCK_INVARIANT = 'not_release_committed_and_refund_committed'

export const COMPILED_LEDGER_PROGRAM_FIELDS = Object.freeze([
  'compiled_ledger_program_id',
  'capability_id',
  'version',
  'currency',
  'actors',
  'accounts',
  'states',
  'posting_recipes',
  'invariants_required',
  'runtime_monitors'
])

export const LEDGER_COMPILER_FAILURE_MODES = Object.freeze({
  missing_actor: 'ask_user_or_block',
  missing_amount: 'ask_user',
  unsupported_currency: 'offer_supported_alternatives',
  no_refund_path: 'block_release',
  no_terminal_state: 'add_terminal_path',
  double_terminal_possibility: 'add_atomic_commitment_guard',
  unfunded_guarantee: 'add_reserve_insurance_credit_or_reject',
  unauthorized_debit_path: 'insert_consent_guard_or_block',
  unsupported_external_rail: 'use_internal_hold_or_different_provider_neutral_rail',
  unclear_ownership: 'require_identity_ownership_confirmation',
  compliance_conflict: 'escalate_or_block',
  proof_dependency_impossible: 'add_fallback_or_reject_condition'
})

export const INVARIANT_PROOF_ENGINE_SCOPE = Object.freeze([
  'mathematical_verification',
  'logical_verification',
  'operational_verification',
  'financial_rules',
  'legal_rules',
  'safety_rules',
  'state_machine_rules',
  'runtime_monitoring'
])

export const INVARIANT_EXAMPLES = Object.freeze([
  'total_money_debited_equals_total_money_credited',
  'recipient_cannot_receive_funds_before_required_proof_is_accepted',
  ATOMIC_TERMINAL_LOCK_INVARIANT
])

export const CORE_FINANCIAL_INVARIANTS = Object.freeze([
  'conservation_of_funds',
  'double_entry_balance',
  'non_negative_spendable_balance',
  'no_unauthorized_debit',
  'account_ownership_integrity',
  'hold_isolation',
  'escrow_conditional_isolation',
  'single_terminal_outcome',
  'refund_reachability',
  'release_condition_integrity',
  'fee_disclosure_consistency',
  'fee_posting_correctness',
  'idempotency',
  'state_transition_validity',
  'no_dead_end_state',
  'temporal_correctness',
  'consent_validity',
  'role_separation',
  'risk_cap_enforcement',
  'jurisdiction_compliance_binding',
  'audit_completeness',
  'reconciliation_completeness',
  'reversal_correctness',
  'dispute_path_availability',
  'minor_guardian_protection',
  'bts_risk_binding',
  'capability_version_safety'
])

export const PROOF_ENGINE_INPUTS = Object.freeze([
  'compiled_ledger_program',
  'state_machine',
  'posting_recipes',
  'assumption_registry',
  'conflict_patches',
  'jurisdiction_rules',
  'risk_rules',
  'actor_role_model',
  'consent_rules',
  'product_template_invariants',
  'capability_contract',
  'runtime_monitor_requirements',
  'simulation_scenarios',
  'historical_failure_patterns'
])

export const PROOF_ENGINE_OUTPUTS = Object.freeze([
  'proof_certificate',
  'counterexample',
  'required_patch',
  'residual_risk_report',
  'release_decision',
  'runtime_monitor_manifest',
  'test_suite',
  'simulation_scenarios',
  'audit_proof_map',
  'assumption_dependency_map'
])

export const INVARIANT_PROOF_PIPELINE = Object.freeze([
  'load_compiled_ledger_program',
  'load_assumptions_and_proof_obligations',
  'normalize_ledger_state_machine',
  'build_formal_state_graph',
  'build_money_flow_graph',
  'validate_double_entry_structure',
  'validate_actor_permission_guards',
  'validate_consent_preconditions',
  'validate_terminal_outcomes',
  'symbolically_execute_all_state_paths',
  'search_for_counterexamples',
  'run_property_based_tests',
  'run_adversarial_simulations',
  'check_jurisdiction_compliance_invariants',
  'check_runtime_monitor_coverage',
  'produce_proof_certificate_or_failure_report',
  'send_failures_to_conflict_resolver_or_ledger_compiler'
])

export const INVARIANT_PROOF_METHODS = Object.freeze({
  static_rule_checking: 'fast_validation_of_obvious_violations',
  type_checking: 'ensures_incompatible_financial_types_do_not_combine',
  state_machine_validation: 'checks_legal_transitions_and_terminal_states',
  money_flow_graph_validation: 'ensures_conservation_and_correct_paths',
  symbolic_execution: 'explores_all_possible_event_paths_abstractly',
  model_checking: 'verifies_invariants_across_reachable_states',
  smt_style_constraint_solving: 'finds_contradictions_in_rules',
  property_based_testing: 'generates_many_randomized_scenarios',
  simulation_testing: 'runs_realistic_and_adversarial_scenarios',
  runtime_invariant_monitoring: 'detects_violations_during_live_execution',
  differential_testing: 'compares_generated_product_behavior_against_known_templates',
  mutation_testing: 'alters_rules_to_see_if_tests_catch_failures',
  proof_replay: 'revalidates_after_version_changes_or_migration'
})

export const SINGLE_TERMINAL_OUTCOME_INVARIANT_SCHEMA = Object.freeze({
  invariant_id: 'inv_single_terminal_outcome',
  name: 'Single Terminal Financial Outcome',
  scope: 'capability',
  severity: 'critical',
  statement: 'conditional_payment_cannot_be_released_to_recipient_and_refunded_to_sender',
  formal_expression: 'not(state.release_committed == true && state.refund_committed == true)',
  applies_to: ['conditional_payment', 'escrow_like_payment', 'safe_send', 'proof_based_release'],
  required_guards: ['terminal_commit_lock', 'idempotency_key', 'refund_release_mutex'],
  proof_method: ['state_machine_validation', 'symbolic_execution', 'property_based_testing'],
  runtime_monitor_required: true
})

export const DOUBLE_COMMIT_COUNTEREXAMPLE = Object.freeze({
  initial_state: 'pending_proof',
  hold_account_locked: 2000,
  event_a: 'proof_accepted',
  event_b: 'deadline_expired',
  race_condition: ['event_a_releases_2000_to_recipient', 'event_b_refunds_2000_to_sender'],
  invariants_violated: ['conservation_of_funds', 'single_terminal_outcome'],
  required_patch: 'add_terminal_commit_lock_compare_and_set_terminal_outcome_from_null_to_release_or_refund'
})

export const PROOF_CERTIFICATE_EXAMPLE = Object.freeze({
  proof_certificate_id: 'proof_9910',
  compiled_ledger_program_id: 'ledger_prog_8841',
  status: 'passed_with_runtime_monitors',
  checked_invariants: [
    { id: 'money_conservation', status: 'passed' },
    { id: 'no_negative_available_balance', status: 'passed' },
    { id: 'single_terminal_outcome', status: 'passed' },
    { id: 'release_requires_verified_proof', status: 'passed' },
    { id: 'refund_reachability', status: 'passed' },
    { id: 'debit_requires_authorization', status: 'passed' }
  ],
  assumption_dependencies: ['asm_deadline_calendar_days', 'asm_gps_radius_100m', 'asm_photo_verification_threshold_0_85'],
  runtime_monitors_required: ['terminal_outcome_mutex_monitor', 'deadline_monitor', 'proof_provider_availability_monitor'],
  release_gate: 'restricted_live'
})

export const PROOF_TRUTH_CLASSES = Object.freeze({
  internally_provable: 'ledger_state_machine_and_kernel_logic_can_be_proven_under_declared_assumptions',
  externally_assumed: 'external_reality_or_evidence_truth_is_assumed_from_verification_layer',
  runtime_monitored: 'must_be_watched_live_because_static_proof_is_insufficient',
  human_review_dependent: 'requires_reasoned_human_judgment_or_approval',
  unprovable_blocked: 'cannot_be_safely_proven_or_monitored_and_must_block'
})

export const FOUR_ENGINE_CREATION_FLOW = Object.freeze({
  product_intent_interpreter: [
    'conditional_payment',
    'recipient_mason',
    'condition_gps_photo_proof',
    'deadline_maybe_missing',
    'fallback_refund'
  ],
  assumption_manager: [
    'gps_radius_missing',
    'proof_quality_threshold_missing',
    'deadline_unit_unclear',
    'consent_requirement_needed',
    'refund_destination_assumed',
    'jurisdiction_unknown'
  ],
  conflict_resolver: [
    'recipient_proof_collection_requires_consent',
    'auto_refund_and_manual_dispute_may_conflict',
    'proof_near_deadline_can_race_with_refund',
    'gps_failure_needs_fallback'
  ],
  ledger_compiler: [
    'hold_account',
    'pending_proof_state',
    'release_posting',
    'refund_posting',
    'proof_review_states',
    'deadline_timer',
    'terminal_outcome_lock',
    'audit_events'
  ],
  invariant_proof_engine: [
    'no_double_spend',
    'release_requires_proof',
    'refund_is_reachable',
    'sender_debit_requires_authorization',
    'recipient_cannot_claim_twice',
    'funds_cannot_get_trapped'
  ],
  runtime: [
    'deadline',
    'proof_submission',
    'gps_confidence',
    'terminal_lock',
    'rail_settlement',
    'dispute_state'
  ]
})

export const COMBINED_CORRECTNESS_ARCHITECTURE = Object.freeze([
  'aura_capability_genesis_stack',
  'assumption_manager',
  'conflict_resolver',
  'ledger_compiler',
  'invariant_proof_engine',
  'release_and_runtime_watchtower'
])

export const ATOM_TO_CAPABILITY_ENGINE_ROLES = Object.freeze({
  atom: {
    example: 'debit_account_atom',
    assumption_manager: 'what_account_what_amount_what_currency',
    conflict_resolver: 'does_debit_conflict_with_account_restrictions',
    ledger_compiler: 'emits_debit_posting_fragment',
    invariant_proof_engine: 'proves_debit_has_matching_credit_and_authorization'
  },
  primitive: {
    example: 'hold_funds_primitive',
    assumption_manager: 'how_long_is_hold_and_who_can_release',
    conflict_resolver: 'does_hold_conflict_with_available_balance',
    ledger_compiler: 'creates_hold_account_and_lock_transition',
    invariant_proof_engine: 'proves_locked_funds_cannot_be_double_spent'
  },
  capability: {
    example: 'proof_based_conditional_payment',
    assumption_manager: 'proof_type_deadline_dispute_path',
    conflict_resolver: 'gps_photo_consent_refund_conflicts',
    ledger_compiler: 'full_account_graph_state_machine_postings',
    invariant_proof_engine: 'full_capability_safety_proof'
  }
})

export const FINANCIAL_CODE_GENERATOR_STAGES = Object.freeze([
  'product_intent',
  'product_rules',
  'ledger_semantics',
  'executable_kernel_contract'
])

export const SCHOOL_FEES_FINANCIAL_COMPILATION_EXAMPLE = Object.freeze({
  natural_language: 'save_small_amounts_toward_school_fees',
  product_grammar: 'goal_wallet_target_amount_deadline_funding_rules_withdrawal_policy',
  ledger_semantics: [
    'source_wallet_to_goal_wallet_locked',
    'goal_wallet_locked_to_school_fee_payee',
    'early_withdrawal_requires_policy_check'
  ],
  kernel_contract: 'deterministic_state_machine_posting_recipes_invariant_set'
})

export const WORST_REASONABLE_EVENT_SEQUENCES = Object.freeze([
  'race_conditions',
  'duplicate_events',
  'missing_consent',
  'failed_settlement',
  'partial_refund',
  'stale_assumptions',
  'wrong_recipient',
  'currency_mismatch',
  'deadline_ambiguity',
  'unavailable_rail',
  'manual_override_abuse',
  'actor_conflict',
  'template_drift',
  'version_migration_errors',
  'unbalanced_postings',
  'missing_audit_events',
  'unreachable_terminal_states'
])

export const CONFLICT_REASONING_COURT_QUESTIONS = Object.freeze([
  'which_rule_wins',
  'what_must_be_changed',
  'can_system_fix_automatically',
  'does_user_need_to_answer',
  'does_human_need_to_review',
  'should_request_be_blocked'
])

export const GUARD_INSERTION_PATCH_EXAMPLE = Object.freeze({
  patch_type: 'guard_insertion',
  target: 'release_transition',
  inserted_guard: 'proof_accepted_before_deadline_and_no_refund_lock',
  reason: 'prevents_release_refund_race_condition'
})

export const ASSUMPTION_UNCERTAINTY_LEDGER_FIELDS = Object.freeze([
  'what_aura_believes',
  'why_it_believes_it',
  'confidence',
  'affects_money',
  'user_confirmed',
  'can_expire',
  'dependent_engines',
  'wrongness_response'
])

export const ASSUMPTION_TO_CONFLICT_CONTRACT = Object.freeze({
  assumption_id: 'asm_gps_radius',
  status: 'unresolved',
  risk_level: 3,
  affected_rule: 'proof_acceptance_condition',
  possible_conflict: 'gps_radius_too_loose_may_allow_fraudulent_proof_too_strict_may_cause_false_rejection',
  requires_resolution: true
})

export const CONFLICT_TO_LEDGER_PATCH_CONTRACT = Object.freeze({
  conflict_id: 'conf_release_refund_race',
  resolution: 'insert_terminal_mutex',
  patch: {
    state_variable: 'terminal_outcome',
    allowed_values: ['none', 'release', 'refund', 'cancelled', 'reversed'],
    transition_rule: 'terminal_outcome_can_move_from_none_to_one_terminal_value_only_once'
  }
})

export const LEDGER_TO_PROOF_CONTRACT = Object.freeze({
  ledger_program_id: 'ledger_prog_8841',
  state_machine: 'conditional_payment_state_machine_v1',
  posting_recipes: ['lock_funds', 'release_funds', 'refund_funds'],
  required_invariants: ['money_conservation', 'no_unauthorized_debit', 'single_terminal_outcome', 'refund_reachability', 'release_requires_verified_proof'],
  assumptions: ['asm_deadline_calendar_days', 'asm_gps_radius_100m', 'asm_recipient_consent_required']
})

export const PROOF_FAILURE_TO_CONFLICT_CONTRACT = Object.freeze({
  proof_status: 'failed',
  failed_invariant: 'refund_reachability',
  counterexample: {
    path: ['funds_locked', 'pending_proof', 'proof_provider_unavailable', 'deadline_expired', 'manual_review_required'],
    problem: 'no_transition_exists_from_manual_review_required_to_refunded_if_reviewer_does_not_act'
  },
  recommended_resolution: {
    action: 'add_fallback_transition',
    logic: 'if_manual_review_exceeds_48_hours_after_deadline_auto_refund_unless_fraud_hold_active'
  }
})

export const REQUIRED_RELEASE_GATES = Object.freeze({
  critical_assumptions_resolved: 'assumption_manager',
  no_unresolved_critical_conflict: 'conflict_resolver',
  ledger_postings_balanced: 'ledger_compiler_and_proof_engine',
  state_machine_has_terminal_paths: 'ledger_compiler_and_proof_engine',
  refund_reversal_paths_valid: 'ledger_compiler_and_proof_engine',
  consent_guards_bound: 'conflict_resolver_and_ledger_compiler',
  jurisdiction_rules_attached: 'conflict_resolver_and_compliance_governor',
  invariants_passed: 'invariant_proof_engine',
  runtime_monitors_attached: 'proof_engine_and_watchtower',
  ui_disclosures_generated: 'experience_physics_and_consent_engine',
  audit_events_mapped: 'ledger_compiler',
  simulation_scenarios_passed: 'simulation_lab',
  human_review_completed_if_required: 'human_review_console'
})

export const FORMLESS_BANKING_WITHOUT_CORRECTNESS_STACK = Object.freeze([
  'ai_generated_fintech_screens',
  'fragile_logic',
  'hidden_assumptions',
  'dangerous_money_movement',
  'unclear_liability'
])

export const FORMLESS_BANKING_WITH_CORRECTNESS_STACK = Object.freeze([
  'natural_language_financial_creation',
  'explicit_assumptions',
  'conflict_resolution',
  'deterministic_ledger_compilation',
  'mathematical_safety_checks',
  'runtime_monitoring',
  'accountable_release'
])

export const SUSU_ROSCA_CORRECTNESS_EXAMPLE = Object.freeze({
  request: 'create_susu_circle_10_people_500_monthly_full_payout_even_if_one_defaults_after_collecting',
  assumption_manager_findings: {
    currency: 'missing',
    contribution_date: 'missing',
    payout_order: 'missing',
    default_tolerance: 'user_implies_one',
    insurance_pool: 'missing',
    deposit: 'missing',
    default_absorber: 'missing',
    platform_guarantee: 'critical_unknown',
    member_verification: 'missing',
    payout_delay: 'missing'
  },
  conflict_findings: [
    'full_payout_guarantee_vs_no_risk_fund',
    'default_after_payout_vs_future_pot_integrity',
    'user_expectation_vs_ledger_math',
    'payout_order_vs_risk'
  ],
  ledger_accounts: [
    'member_wallets',
    'circle_contribution_pool',
    'circle_payout_pool',
    'personal_deposit_hold',
    'pool_insurance_reserve',
    'platform_fee_account',
    'default_recovery_account'
  ],
  proof_requirements: [
    'payout_amount_lte_available_contributions_plus_reserve_plus_approved_credit',
    'all_member_contribution_obligations_tracked',
    'remaining_scheduled_payouts_fundable_or_full_payout_promise_removed'
  ]
})

export const SUSU_ROSCA_RELEASE_REPAIR_MECHANISMS = Object.freeze([
  'deposit',
  'insurance',
  'retained_seed_payout',
  'reserve',
  'guarantor',
  'credit_facility',
  'payout_delay',
  'reduced_guarantee',
  'risk_based_payout_ordering',
  'bts_based_eligibility'
])

export const SAVE2PAY_GOAL_WALLET_EXAMPLE = Object.freeze({
  request: 'whenever_i_receive_money_split_20_percent_rent_10_percent_school_fees_5_percent_emergency_and_spend_the_rest',
  assumption_manager_findings: {
    all_incoming_money: 'needs_confirmation',
    before_or_after_fees: 'needs_rule',
    tiny_amount_threshold: 'needs_threshold',
    user_override: 'missing',
    goal_wallet_locks: 'missing',
    full_target_handling: 'missing',
    negative_spendable_balance: 'must_prevent'
  },
  conflict_findings: [
    'spend_the_rest_vs_locked_obligations',
    'multiple_goals_may_exceed_one_hundred_percent',
    'different_wallet_lock_policies_required',
    'incoming_reversal_requires_proportional_reversal'
  ],
  ledger_routes: [
    'incoming_wallet.pending_to_rent_wallet.locked_20_percent',
    'incoming_wallet.pending_to_school_fees_wallet.locked_10_percent',
    'incoming_wallet.pending_to_emergency_wallet.available_or_locked_5_percent',
    'incoming_wallet.pending_to_main_wallet.available_remainder'
  ],
  invariant_checks: [
    'sum_allocations_lte_incoming_amount',
    'no_negative_remainder',
    'reversal_restores_all_affected_wallets',
    'locked_wallets_cannot_spend_outside_policy',
    'allocation_is_idempotent'
  ]
})

export const SAVE2PAY_DEFAULT_ALLOCATIONS = Object.freeze([
  { id: 'rent', wallet: 'rent_wallet.locked', percentage: 0.2, lockPolicy: 'locked_until_rent_due' },
  { id: 'school_fees', wallet: 'school_fees_wallet.locked', percentage: 0.1, lockPolicy: 'locked_until_school_fee_due' },
  { id: 'emergency', wallet: 'emergency_wallet.available_or_locked', percentage: 0.05, lockPolicy: 'user_configurable' }
])

export const RUNTIME_ASSUMPTION_DRIFT_ACTIONS = Object.freeze([
  'pause_future_releases',
  'require_additional_proof',
  'notify_user',
  'trigger_conflict_resolver',
  'rerun_proof_if_product_logic_changes'
])

export const RUNTIME_CONFLICT_PRIORITY_RULES = Object.freeze([
  {
    id: 'fraud_or_legal_hold',
    priority: 1,
    wins_over: ['auto_release', 'proof_approval', 'user_convenience'],
    action: 'pause_release_and_route_to_human_review'
  },
  {
    id: 'sender_dispute_before_proof_approval',
    priority: 2,
    wins_over: ['auto_release_after_proof_approval'],
    action: 'pause_auto_release_until_dispute_resolved'
  },
  {
    id: 'verified_proof_without_open_dispute',
    priority: 3,
    wins_over: ['manual_delay_without_reason'],
    action: 'allow_release_after_invariant_checks'
  }
])

export const DUPLICATE_TERMINAL_EVENT_MONITOR = Object.freeze({
  match_fields: ['idempotency_key', 'terminal_outcome', 'amount', 'capability_id'],
  provider_api_details_skipped: true,
  actions: [
    'do_not_post_duplicate_ledger_entry',
    'log_duplicate_event',
    'raise_monitor_alert_if_repeated'
  ]
})

export const OPERATIONAL_CONSOLE_SECTIONS = Object.freeze({
  assumption_console: [
    'unresolved_assumptions',
    'risk_level',
    'affected_product_areas',
    'required_user_questions',
    'stale_assumptions',
    'assumptions_promoted_to_rules',
    'assumptions_overridden_by_policy'
  ],
  conflict_console: [
    'active_conflicts',
    'severity',
    'affected_invariants',
    'suggested_patches',
    'blocked_products',
    'human_review_queue',
    'conflict_history',
    'repeated_conflict_patterns'
  ],
  ledger_compiler_console: [
    'generated_account_graph',
    'posting_recipes',
    'state_machine',
    'event_flows',
    'refund_paths',
    'fee_flows',
    'reconciliation_rules',
    'kernel_export_status'
  ],
  proof_engine_console: [
    'proof_status',
    'failed_invariants',
    'counterexamples',
    'proof_certificate',
    'residual_risks',
    'monitor_requirements',
    'release_decision'
  ]
})

export const INTERNAL_ENGINE_INTERFACES = Object.freeze({
  assumption_manager: [
    { method: 'detect_assumptions', input: ['capability_contract'], output: 'assumption_set' },
    { method: 'classify_assumption', input: ['assumption'], output: 'category_and_risk_level' },
    { method: 'resolve_assumption', input: ['assumption', 'method'], output: 'confirmed_rule_or_default_rule_or_unresolved' },
    { method: 'emit_clarifying_questions', input: ['assumption_set'], output: 'question_set' },
    { method: 'promote_to_rule', input: ['confirmed_assumption'], output: 'formal_rule' }
  ],
  conflict_resolver: [
    { method: 'detect_conflicts', input: ['contract', 'assumptions', 'policies', 'ledger_draft'], output: 'conflict_set' },
    { method: 'rank_conflicts', input: ['conflict_set'], output: 'prioritized_conflicts' },
    { method: 'resolve_conflict', input: ['conflict'], output: 'patch_or_question_or_block_or_human_review' },
    { method: 'apply_patch', input: ['contract', 'patch'], output: 'updated_contract' },
    { method: 'emit_resolution_report', input: ['conflict_set'], output: 'report' }
  ],
  ledger_compiler: [
    { method: 'compile_ledger', input: ['contract', 'assumptions', 'conflict_patches'], output: 'ledger_program' },
    { method: 'generate_account_graph', input: ['contract'], output: 'account_graph' },
    { method: 'generate_posting_recipes', input: ['account_graph', 'state_machine'], output: 'posting_recipes' },
    { method: 'generate_state_machine', input: ['contract'], output: 'state_machine' },
    { method: 'emit_proof_obligations', input: ['ledger_program'], output: 'invariant_set' },
    { method: 'export_kernel_contract', input: ['ledger_program'], output: 'kernel_contract' }
  ],
  invariant_proof_engine: [
    { method: 'load_ledger_program', input: ['ledger_program'], output: 'loaded_ledger_program' },
    { method: 'prove_invariants', input: ['ledger_program', 'invariant_set'], output: 'proof_result' },
    { method: 'generate_counterexamples', input: ['failed_invariant'], output: 'counterexample_set' },
    { method: 'emit_runtime_monitors', input: ['proof_result'], output: 'monitor_manifest' },
    { method: 'issue_proof_certificate', input: ['proof_result'], output: 'proof_certificate' }
  ]
})

export const AURA_FORBIDDEN_SHORTCUT_PATH = Object.freeze([
  'user_request',
  'generated_capability',
  'live_execution'
])

export const AURA_CORRECTNESS_ENFORCED_PATH = Object.freeze([
  'user_request',
  'assumptions_made_explicit',
  'conflicts_resolved',
  'ledger_compiled',
  'invariants_proven',
  'runtime_monitors_attached',
  'release_gated',
  'live_execution'
])

export const AURA_CORRECTNESS_STACK_DESIGN_PRINCIPLES = Object.freeze([
  'correctness_engines_are_core_os_not_optional_helpers',
  'no_live_execution_without_explicit_assumptions',
  'no_live_execution_without_conflict_resolution',
  'no_live_execution_without_compiled_ledger_logic',
  'no_live_execution_without_proof_certificate_or_counterexample_review',
  'no_live_execution_without_runtime_monitors',
  'release_gate_is_mandatory'
])

export const AURA_FINAL_TECHNICAL_SUMMARY = Object.freeze({
  assumption_manager: {
    core_question: 'what_are_we_assuming_and_is_it_safe_to_assume',
    main_artifact: 'assumption_registry',
    control_role: 'uncertainty_control'
  },
  conflict_resolver: {
    core_question: 'which_rules_contradict_and_how_do_we_fix_them',
    main_artifact: 'conflict_graph_and_resolution_patches',
    control_role: 'contradiction_control'
  },
  ledger_compiler: {
    core_question: 'how_does_this_product_become_executable_money_logic',
    main_artifact: 'compiled_ledger_program',
    control_role: 'executable_money_logic'
  },
  invariant_proof_engine: {
    core_question: 'can_we_prove_this_product_cannot_break_financial_truth',
    main_artifact: 'proof_certificate_and_counterexamples',
    control_role: 'safety_proof'
  }
})

function finiteNumber(value, fallback = 0) {
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : fallback
}

export function createAssumptionRecord({
  id,
  type,
  statement,
  source = 'inferred',
  value,
  confidence = 0,
  explicitlyConfirmed = false
} = {}) {
  const typeDefinition = ASSUMPTION_TYPES[type] ?? { riskLevel: 'unknown', example: undefined }
  const riskLevel = typeDefinition.riskLevel
  const requiresUserConfirmation = ['high', 'critical'].includes(riskLevel) && !explicitlyConfirmed
  const requiresHumanReview = riskLevel === 'critical' && !explicitlyConfirmed

  return {
    id: id ?? `${type ?? 'unknown'}_assumption`,
    type: type ?? 'unknown',
    statement: statement ?? typeDefinition.example ?? 'unspecified_assumption',
    source,
    value,
    confidence,
    riskLevel,
    explicitlyConfirmed,
    requiresUserConfirmation,
    requiresHumanReview,
    safeToSilentlyAssume: !requiresUserConfirmation && confidence >= 0.8
  }
}

export function numericRiskLevelForAssumption(assumption = {}) {
  if (Number.isFinite(assumption.risk_level)) return assumption.risk_level
  if (Number.isFinite(assumption.riskLevelNumber)) return assumption.riskLevelNumber
  if (assumption.prohibitedUnsafe) return 5
  if (['critical', 'legal_consent'].includes(assumption.riskLevel)) return 4
  if (assumption.riskLevel === 'high') return 3
  if (assumption.riskLevel === 'medium') return 2
  if (assumption.riskLevel === 'low') return 1
  return 0
}

export function classifyAssumptionType(text = '') {
  const normalized = text.toLowerCase()
  if (/who|recipient|sender|mason|person|identity/.test(normalized)) return 'identity'
  if (/owner|role|controls|beneficiary|payer/.test(normalized)) return 'role'
  if (/amount|price|contribution|500|value/.test(normalized)) return 'amount'
  if (/currency|ghs|cedi|usd|money unit/.test(normalized)) return 'currency'
  if (/day|hour|deadline|time|weekend|calendar|business/.test(normalized)) return 'timing'
  if (/gps|location|site|radius|place/.test(normalized)) return 'location'
  if (/proof|photo|picture|evidence|verify/.test(normalized)) return 'verification'
  if (/consent|permission|agree|accept/.test(normalized)) return 'consent'
  if (/law|legal|jurisdiction|region|regulated/.test(normalized)) return 'jurisdiction'
  if (/fee|charge|percent/.test(normalized)) return 'fee'
  if (/refund|return|back/.test(normalized)) return 'refund'
  if (/risk|fraud|trust|low risk/.test(normalized)) return 'risk'
  return 'unknown'
}

export function extractAssumptionsFromRequest(request = '', knownFacts = {}) {
  const text = request.toLowerCase()
  const assumptions = []

  if (/mason|contractor|recipient/.test(text)) {
    assumptions.push(createAssumptionRecord({
      id: 'recipient_identity',
      type: 'identity',
      statement: 'recipient_identity_must_match_named_worker',
      value: knownFacts.recipient,
      confidence: knownFacts.recipient ? 1 : 0.45,
      explicitlyConfirmed: Boolean(knownFacts.recipient)
    }))
  }
  if (/money|send|pay|payment|amount/.test(text)) {
    assumptions.push(createAssumptionRecord({
      id: 'payment_amount',
      type: 'amount',
      statement: 'payment_amount_must_be_explicit_before_funding',
      value: knownFacts.amount,
      confidence: Number.isFinite(knownFacts.amount) ? 1 : 0.25,
      explicitlyConfirmed: Number.isFinite(knownFacts.amount)
    }))
  }
  if (/3 days|three days|deadline|on time|within/.test(text)) {
    assumptions.push(createAssumptionRecord({
      id: 'deadline_calendar_basis',
      type: 'timing',
      statement: 'deadline_calendar_basis_must_be_defined',
      value: knownFacts.deadlineBasis,
      confidence: knownFacts.deadlineBasis ? 1 : 0.55,
      explicitlyConfirmed: Boolean(knownFacts.deadlineBasis)
    }))
  }
  if (/gps|location|site/.test(text)) {
    assumptions.push(createAssumptionRecord({
      id: 'gps_location_match',
      type: 'location',
      statement: 'gps_radius_and_site_anchor_must_be_defined',
      value: knownFacts.gpsRadiusMeters,
      confidence: Number.isFinite(knownFacts.gpsRadiusMeters) ? 1 : 0.35,
      explicitlyConfirmed: Number.isFinite(knownFacts.gpsRadiusMeters)
    }))
  }
  if (/photo|picture|proof|completed/.test(text)) {
    assumptions.push(createAssumptionRecord({
      id: 'photo_proof_sufficiency',
      type: 'verification',
      statement: 'photo_proof_may_need_additional_checks',
      value: knownFacts.proofRule,
      confidence: knownFacts.proofRule ? 1 : 0.4,
      explicitlyConfirmed: Boolean(knownFacts.proofRule)
    }))
  }
  if (/gps|photo|picture|proof/.test(text)) {
    assumptions.push(createAssumptionRecord({
      id: 'recipient_evidence_consent',
      type: 'consent',
      statement: 'recipient_must_consent_before_gps_or_photo_verification',
      value: knownFacts.recipientConsent,
      confidence: knownFacts.recipientConsent === true ? 1 : 0.2,
      explicitlyConfirmed: knownFacts.recipientConsent === true
    }))
  }

  return assumptions
}

export function decideAssumptionHandling(assumption) {
  if (assumption.riskLevel === 'critical' && !assumption.explicitlyConfirmed) return 'block_or_human_review_until_confirmed'
  if (assumption.riskLevel === 'high' && !assumption.explicitlyConfirmed) return 'ask_user_or_apply_recorded_safe_default'
  if (assumption.riskLevel === 'medium' && assumption.confidence < 0.8) return 'show_default_and_allow_edit'
  if (assumption.riskLevel === 'unknown') return 'route_to_assumption_review'
  return 'proceed_with_recorded_assumption'
}

export function evaluateAssumptionSet(assumptions = []) {
  const decisions = assumptions.map((assumption) => {
    const riskLevelNumber = numericRiskLevelForAssumption(assumption)
    return {
      ...assumption,
      riskLevelNumber,
      riskAction: ASSUMPTION_RISK_LEVELS[riskLevelNumber]?.action,
      handling: decideAssumptionHandling(assumption)
    }
  })
  const blockers = decisions.filter((assumption) => assumption.handling === 'block_or_human_review_until_confirmed')
  const questions = decisions.filter((assumption) => assumption.requiresUserConfirmation)

  return {
    valid: blockers.length === 0,
    assumptions: decisions,
    blockers,
    questions,
    safeToCompile: blockers.length === 0 && questions.length === 0,
    assumptionTypes: ASSUMPTION_TYPES
  }
}

export function advanceAssumptionLifecycle(assumption = {}, event = '') {
  const currentIndex = ASSUMPTION_LIFECYCLE_STAGES.indexOf(assumption.lifecycleStage ?? 'detected')
  const nextByEvent = {
    classify: 'classified',
    score: 'risk_scored',
    tag_source: 'source_tagged',
    select_resolution: 'resolution_selected',
    confirm: 'confirmed',
    promote: 'promoted',
    bind: 'bound',
    monitor: 'monitored',
    expire: 'expired_or_updated_or_revoked',
    revoke: 'expired_or_updated_or_revoked',
    update: 'expired_or_updated_or_revoked'
  }
  const requested = nextByEvent[event]
  const requestedIndex = ASSUMPTION_LIFECYCLE_STAGES.indexOf(requested)
  const lifecycleStage = requestedIndex > currentIndex ? requested : assumption.lifecycleStage ?? 'detected'

  return {
    ...assumption,
    lifecycleStage,
    lifecycleIndex: ASSUMPTION_LIFECYCLE_STAGES.indexOf(lifecycleStage)
  }
}

export function validateAssumptionGovernance(assumption = {}) {
  const issues = []
  const affected = new Set(assumption.affected_components ?? assumption.affectedComponents ?? [])
  const source = assumption.source ?? ''
  const riskLevelNumber = assumption.risk_level ?? assumption.riskLevelNumber ?? numericRiskLevelForAssumption(assumption)
  const status = assumption.status ?? assumption.handling ?? ''

  if (riskLevelNumber >= 4 && source === 'ai_inference') issues.push('ai_inference_not_enough_for_critical_financial_decision')
  if (riskLevelNumber >= 3 && !String(status).includes('confirm') && !assumption.explicitlyConfirmed) {
    issues.push('high_risk_assumption_requires_confirmation')
  }
  if (!source) issues.push('assumption_missing_source')
  for (const engine of ASSUMPTION_VISIBLE_TO_ENGINES) {
    if (!affected.has(engine) && !affected.has('all_correctness_engines')) {
      issues.push(`assumption_not_visible_to:${engine}`)
    }
  }

  return {
    valid: issues.length === 0,
    issues,
    visibleToEngines: ASSUMPTION_VISIBLE_TO_ENGINES,
    releaseBlocked: issues.some((issue) => issue.includes('critical') || issue.includes('requires_confirmation') || issue.includes('missing_source'))
  }
}

export function mapAssumptionsToProofObligations(assumptions = []) {
  return assumptions
    .filter((assumption) => numericRiskLevelForAssumption(assumption) >= 3)
    .map((assumption) => {
      if (assumption.type === 'timing' || assumption.type === 'deadline_interpretation') {
        return {
          assumptionId: assumption.id ?? assumption.assumption_id,
          proofObligation: 'pending_states_reach_refund_after_deadline_without_indefinite_block'
        }
      }
      if (assumption.type === 'refund') {
        return {
          assumptionId: assumption.id ?? assumption.assumption_id,
          proofObligation: 'refund_debits_and_credits_balance_and_return_to_authorized_source'
        }
      }
      if (assumption.type === 'consent') {
        return {
          assumptionId: assumption.id ?? assumption.assumption_id,
          proofObligation: 'sensitive_data_and_money_lock_require_recorded_consent_before_action'
        }
      }
      return {
        assumptionId: assumption.id ?? assumption.assumption_id,
        proofObligation: `${assumption.type ?? 'assumption'}_must_be_bound_to_invariant_or_policy_check`
      }
    })
}

export function detectInitialCapabilityConflicts({ userIntent = {}, platformPolicy = {}, jurisdiction = {}, financialConstraints = {} } = {}) {
  const conflicts = []

  if (userIntent.childReceivesMoneyAutomatically && userIntent.parentApprovalRequired === false && (jurisdiction.minorRequiresGuardianApproval || platformPolicy.guardianApprovalForMinors)) {
    conflicts.push({
      type: 'user_intent_vs_platform_policy',
      severity: 'critical',
      issue: 'minor_auto_payment_without_guardian_approval',
      winner: 'guardian_approval_required',
      resolution: 'require_guardian_approval_or_block'
    })
  }
  if (
    userIntent.fullPayoutForAllMembers
    && financialConstraints.defaultAllowed
    && !financialConstraints.deposit
    && !financialConstraints.insurance
    && !financialConstraints.payoutReduction
    && !financialConstraints.payoutDelay
    && !financialConstraints.externalReserve
  ) {
    conflicts.push({
      type: 'mathematical_impossibility',
      severity: 'fatal',
      issue: 'full_payout_with_defaults_and_no_loss_absorber',
      winner: 'financial_invariant',
      resolution: 'add_reserve_deposit_insurance_delay_or_reduce_payout'
    })
  }

  return {
    valid: conflicts.length === 0,
    conflicts,
    purposes: CONFLICT_RESOLVER_PURPOSES,
    conflictTypes: CONFLICT_TYPES,
    releaseBlocked: conflicts.some((conflict) => ['critical', 'fatal'].includes(conflict.severity))
  }
}

export function buildConflictGraph(nodes = [], edges = []) {
  const nodeIds = new Set(nodes.map((node) => node.id))
  const invalidEdges = edges.filter((edge) => (
    !nodeIds.has(edge.from)
    || !nodeIds.has(edge.to)
    || !CONFLICT_GRAPH_EDGE_TYPES.includes(edge.type)
  ))
  const contradictions = edges.filter((edge) => edge.type === 'contradicts')

  return {
    valid: invalidEdges.length === 0,
    nodes,
    edges,
    invalidEdges,
    contradictions,
    hasConflicts: contradictions.length > 0
  }
}

export function determineConflictPriorityWinner(conflict = {}) {
  const text = `${conflict.type ?? ''} ${conflict.issue ?? ''} ${conflict.description ?? ''}`.toLowerCase()
  if (/law|jurisdiction|kyc|regulat|illegal/.test(text)) return CONFLICT_PRIORITY_HIERARCHY[0]
  if (/platform|hidden_fee|safety/.test(text)) return CONFLICT_PRIORITY_HIERARCHY[1]
  if (/ledger|double|funding|conservation|payout|refund|release/.test(text)) return CONFLICT_PRIORITY_HIERARCHY[2]
  if (/identity|authorization|consent|ownership|mandate|minor|guardian/.test(text)) return CONFLICT_PRIORITY_HIERARCHY[3]
  if (/fraud|abuse|coercion/.test(text)) return CONFLICT_PRIORITY_HIERARCHY[4]
  if (/rights|disclosure|dispute|revers/.test(text)) return CONFLICT_PRIORITY_HIERARCHY[5]
  if (/product|template/.test(text)) return CONFLICT_PRIORITY_HIERARCHY[6]
  if (/preference|user/.test(text)) return CONFLICT_PRIORITY_HIERARCHY[7]
  if (/ux|experience|simple/.test(text)) return CONFLICT_PRIORITY_HIERARCHY[8]
  return CONFLICT_PRIORITY_HIERARCHY[9]
}

export function recommendConflictResolution(conflict = {}) {
  const priorityWinner = conflict.priority_winner ?? conflict.winner ?? determineConflictPriorityWinner(conflict)
  const type = conflict.type ?? ''
  const issue = conflict.issue ?? ''
  let action = 'escalate'
  let resolution = 'send_to_human_review'

  if (['user_vs_law', 'user_intent_vs_jurisdiction_rule'].includes(type) || /illegal|hidden_fee/.test(issue)) {
    action = 'block'
    resolution = 'block_or_redirect_to_legal_disclosed_alternative'
  } else if (type === 'state_machine_conflict' || /double|released_and_refunded/.test(issue)) {
    action = 'insert_guard'
    resolution = 'insert_atomic_commit_lock_and_terminal_mutex'
  } else if (type === 'consent_conflict' || /mandate|unauthorized/.test(issue)) {
    action = 'insert_guard'
    resolution = 'require_identity_verified_active_mandate_before_automation'
  } else if (type === 'mathematical_impossibility') {
    action = 'redirect'
    resolution = PAYOUT_MATH_SAFE_ALTERNATIVES.slice(0, 4)
  } else if (type === 'timing_conflict') {
    action = 'sequence_actions'
    resolution = 'ensure_funds_available_before_deadline_starts'
  }

  return {
    action,
    meaning: CONFLICT_RESOLUTION_ACTIONS[action],
    priorityWinner,
    resolution,
    patchedContractRequired: true
  }
}

export function detectDoubleOutcomeConflict({ proofAcceptedAtDeadline = false, releaseTransition = true, refundTransition = true, atomicCommitLock = false } = {}) {
  const conflict = proofAcceptedAtDeadline && releaseTransition && refundTransition && !atomicCommitLock
    ? {
        ...DOUBLE_OUTCOME_CONFLICT_EXAMPLE,
        issue: 'release_and_refund_can_commit_for_same_funds'
      }
    : null

  return {
    valid: conflict === null,
    conflict,
    resolution: conflict ? recommendConflictResolution(conflict) : undefined,
    releaseBlocked: Boolean(conflict)
  }
}

export function detectConsentAutomationConflict({
  recurringDebit = false,
  payerIdentityVerified = false,
  payerMandateSigned = false,
  mandateActive = false,
  mandateLimit = 0,
  debitAmount = 0
} = {}) {
  const missing = []
  if (recurringDebit && !payerIdentityVerified) missing.push('payer_identity_verified')
  if (recurringDebit && !payerMandateSigned) missing.push('payer_mandate_signed')
  if (recurringDebit && !mandateActive) missing.push('mandate_active')
  if (recurringDebit && mandateLimit < debitAmount) missing.push('mandate_limit_covers_debit_amount')
  const conflict = missing.length
    ? {
        type: 'consent_conflict',
        severity: 'critical',
        issue: 'recurring_debit_without_active_authorized_mandate',
        missing,
        winner: 'identity_authorization_consent_and_ownership',
        resolution: 'require_active_payer_mandate_before_recurring_debit'
      }
    : null

  return {
    valid: conflict === null,
    conflict,
    missing,
    resolution: conflict ? recommendConflictResolution(conflict) : undefined,
    releaseBlocked: Boolean(conflict)
  }
}

export function evaluateConflictSet(conflicts = []) {
  const resolutions = conflicts.map((conflict) => ({
    conflict,
    resolution: recommendConflictResolution(conflict)
  }))
  const releaseBlocked = conflicts.some((conflict) => ['critical', 'fatal'].includes(conflict.severity))

  return {
    valid: conflicts.length === 0,
    conflicts,
    resolutions,
    priorityHierarchy: CONFLICT_PRIORITY_HIERARCHY,
    pipeline: CONFLICT_RESOLVER_PIPELINE,
    releaseBlocked
  }
}

export function compileConditionalPaymentLedgerDraft({
  amount = 0,
  currency = 'GHS',
  fee = 0,
  deadlineHours = 72,
  proofRequired = ['photo_proof', 'gps_proof'],
  includeExternalRailProvider = false
} = {}) {
  const issues = []
  if (!Number.isFinite(amount) || amount <= 0) issues.push('amount_must_be_positive')
  if (!currency) issues.push('currency_required')
  if (fee < 0 || fee >= amount) issues.push('fee_must_be_non_negative_and_less_than_amount')
  if (deadlineHours <= 0) issues.push('deadline_hours_must_be_positive')
  if (!proofRequired.length) issues.push('proof_requirement_missing')
  if (includeExternalRailProvider) issues.push('third_party_provider_api_details_skipped')

  const netAmount = Math.max(amount - fee, 0)
  const postingRecipes = {
    fund_hold: CONDITIONAL_PAYMENT_POSTING_RECIPES.fund_hold.map((entry) => ({
      ...entry,
      amount: amount
    })),
    release_to_recipient: CONDITIONAL_PAYMENT_POSTING_RECIPES.release_to_recipient.map((entry) => ({
      ...entry,
      amount: netAmount
    })),
    refund_sender: CONDITIONAL_PAYMENT_POSTING_RECIPES.refund_sender.map((entry) => ({
      ...entry,
      amount
    })),
    fee_capture: CONDITIONAL_PAYMENT_POSTING_RECIPES.fee_capture.map((entry) => ({
      ...entry,
      amount: fee
    }))
  }

  return {
    valid: issues.filter((issue) => issue !== 'third_party_provider_api_details_skipped').length === 0,
    issues,
    actors: CONDITIONAL_PAYMENT_LEDGER_ACTORS,
    accountTopology: CONDITIONAL_PAYMENT_ACCOUNT_TOPOLOGY,
    balanceStates: CONDITIONAL_PAYMENT_BALANCE_STATES,
    postingRecipes,
    eventContract: ['funds_locked', 'proof_submitted', 'proof_accepted', 'proof_rejected', 'deadline_expired', 'release_committed', 'refund_committed'],
    guardRules: ['sender_authorized_funding', 'recipient_accepts_terms', 'proof_meets_requirements', 'deadline_not_expired_for_release', 'refund_lock_not_active'],
    authorizationModel: {
      sender: ['fund', 'open_dispute'],
      mason: ['accept_terms', 'submit_proof', 'appeal'],
      verification_engine: ['score_proof'],
      money_kernel: ['commit_release', 'commit_refund'],
      human_reviewer: ['resolve_dispute']
    },
    refundPaths: ['deadline_expired_to_refund_sender', 'proof_rejected_to_refund_or_dispute'],
    runtimeMonitors: ['deadline_timer', 'proof_submission_monitor', 'double_outcome_monitor', 'stuck_hold_monitor'],
    auditMap: ['funds_locked_audit', 'proof_submitted_audit', 'release_or_refund_commit_audit'],
    kernelContract: 'conditional_payment_hold_release_refund_contract',
    proofObligations: [
      'fund_hold_postings_balance',
      'release_and_refund_are_mutually_exclusive',
      'held_funds_have_release_refund_or_dispute_path',
      'no_release_without_required_proof',
      'deadline_refund_reachable',
      ATOMIC_TERMINAL_LOCK_INVARIANT
    ],
    compiledProgram: {
      compiled_ledger_program_id: 'ledger_prog_conditional_payment_draft',
      capability_id: 'cap_conditional_payment_8841',
      version: '1.0.0',
      currency,
      actors: [
        { role: 'sender', entity_id: 'ent_sender_001', permissions: ['fund', 'cancel_before_lock', 'dispute'] },
        { role: 'recipient', entity_id: 'ent_mason_002', permissions: ['consent', 'submit_proof', 'appeal_rejection'] }
      ],
      accounts: [
        { account_id: 'sender_main_wallet', owner_role: 'sender', balance_classes: ['available', 'locked'] },
        { account_id: 'conditional_payment_hold', owner_role: 'platform_trust_structure', balance_classes: ['locked'] },
        { account_id: 'recipient_wallet', owner_role: 'recipient', balance_classes: ['pending_settlement', 'available'] }
      ],
      states: CONDITIONAL_PAYMENT_COMPILED_STATES,
      posting_recipes: [
        {
          event: 'funds_lock_requested',
          debit: 'sender_main_wallet.available',
          credit: 'conditional_payment_hold.locked',
          amount: 'capability.amount',
          guards: ['sender_authorized', 'funds_available', 'recipient_consent_required']
        }
      ],
      invariants_required: [
        'money_conservation',
        'no_negative_available_balance',
        'single_terminal_outcome',
        'refund_reachability',
        'release_requires_verified_proof',
        'debit_requires_authorization'
      ],
      runtime_monitors: ['deadline_monitor', 'proof_submission_monitor', 'double_commit_monitor', 'rail_settlement_monitor']
    },
    stateMachine: {
      states: CONDITIONAL_PAYMENT_COMPILED_STATES,
      transitions: CONDITIONAL_PAYMENT_COMPILED_TRANSITIONS,
      guards: CONDITIONAL_PAYMENT_CRITICAL_GUARDS,
      terminalCommitmentOutcomes: TERMINAL_COMMITMENT_OUTCOMES,
      atomicLockInvariant: ATOMIC_TERMINAL_LOCK_INVARIANT
    },
    currency,
    deadlineHours
  }
}

export function validateCompiledLedgerProgram(program = {}) {
  const missing = COMPILED_LEDGER_PROGRAM_FIELDS.filter((field) => {
    const value = program[field]
    if (Array.isArray(value)) return value.length === 0
    return value === undefined || value === null || value === ''
  })
  const issues = missing.map((field) => `missing_${field}`)

  if (!program.invariants_required?.includes('single_terminal_outcome')) issues.push('missing_single_terminal_outcome_invariant')
  if (!program.invariants_required?.includes('refund_reachability')) issues.push('missing_refund_reachability_invariant')
  if (!program.invariants_required?.includes('debit_requires_authorization')) issues.push('missing_debit_authorization_invariant')
  if (!program.runtime_monitors?.includes('double_commit_monitor')) issues.push('missing_double_commit_monitor')

  return {
    valid: issues.length === 0,
    issues,
    fields: COMPILED_LEDGER_PROGRAM_FIELDS,
    failureModes: LEDGER_COMPILER_FAILURE_MODES,
    releaseBlocked: issues.some((issue) => issue.includes('missing'))
  }
}

export function validateAtomicTerminalLock({ committedOutcomes = [] } = {}) {
  const selected = committedOutcomes.filter((outcome) => TERMINAL_COMMITMENT_OUTCOMES.includes(outcome))
  const valid = selected.length <= 1

  return {
    valid,
    selected,
    invariant: ATOMIC_TERMINAL_LOCK_INVARIANT,
    releaseBlocked: !valid,
    repair: valid ? undefined : 'add_atomic_commitment_guard_and_terminal_mutex'
  }
}

export function findDoubleCommitCounterexample({ atomicCommitLock = false, proofAcceptedAtDeadline = true } = {}) {
  if (atomicCommitLock || !proofAcceptedAtDeadline) {
    return {
      found: false,
      counterexample: undefined
    }
  }

  return {
    found: true,
    counterexample: DOUBLE_COMMIT_COUNTEREXAMPLE
  }
}

export function runInvariantProofEngine({
  compiledProgram = {},
  stateMachine = {},
  assumptions = [],
  atomicCommitLock = true,
  runtimeMonitors = compiledProgram.runtime_monitors ?? []
} = {}) {
  const programReview = validateCompiledLedgerProgram(compiledProgram)
  const doubleCommit = findDoubleCommitCounterexample({ atomicCommitLock })
  const issues = [...programReview.issues]

  if (doubleCommit.found) issues.push('counterexample_found:single_terminal_outcome')
  if (!runtimeMonitors.includes('double_commit_monitor') && !runtimeMonitors.includes('terminal_outcome_mutex_monitor')) {
    issues.push('missing_terminal_outcome_runtime_monitor')
  }
  if (!stateMachine.states?.length) issues.push('state_machine_missing')

  const checked = PROOF_CERTIFICATE_EXAMPLE.checked_invariants.map((invariant) => ({
    ...invariant,
    status: issues.some((issue) => issue.includes(invariant.id) || (invariant.id === 'single_terminal_outcome' && doubleCommit.found))
      ? 'failed'
      : 'passed'
  }))
  const passed = issues.length === 0

  return {
    passed,
    issues,
    inputs: PROOF_ENGINE_INPUTS,
    outputs: PROOF_ENGINE_OUTPUTS,
    pipeline: INVARIANT_PROOF_PIPELINE,
    methods: INVARIANT_PROOF_METHODS,
    certificate: passed
      ? {
          ...PROOF_CERTIFICATE_EXAMPLE,
          compiled_ledger_program_id: compiledProgram.compiled_ledger_program_id,
          checked_invariants: checked,
          assumption_dependencies: assumptions.map((assumption) => assumption.id ?? assumption.assumption_id).filter(Boolean),
          runtime_monitors_required: runtimeMonitors,
          release_gate: 'restricted_live'
        }
      : undefined,
    counterexample: doubleCommit.counterexample,
    requiredPatch: doubleCommit.counterexample?.required_patch,
    releaseDecision: passed ? 'restricted_pass' : 'fail'
  }
}

export function classifyProofTruthClaim(claim = '') {
  const text = claim.toLowerCase()
  if (/ledger|state machine|posting|kernel|debit|credit|refund reachability|terminal/.test(text)) return 'internally_provable'
  if (/photo|gps|construction|external reality|provider/.test(text)) return 'externally_assumed'
  if (/deadline|settlement|runtime|availability|monitor/.test(text)) return 'runtime_monitored'
  if (/ambiguous|dispute|human|manual/.test(text)) return 'human_review_dependent'
  return 'unprovable_blocked'
}

export function runFourEngineCreationFlow({ request = '', knownFacts = {} } = {}) {
  const assumptions = runFinancialTruthPipelineDraft({ request, knownFacts })
  const conflicts = detectInitialCapabilityConflicts({
    userIntent: { fullPayoutForAllMembers: /full payout/i.test(request) },
    financialConstraints: {
      defaultAllowed: /default/i.test(request),
      deposit: /deposit/i.test(request),
      insurance: /insurance/i.test(request),
      payoutReduction: /reduce payout/i.test(request),
      payoutDelay: /delay/i.test(request),
      externalReserve: /reserve/i.test(request)
    }
  })
  const ledgerDraft = compileConditionalPaymentLedgerDraft({
    amount: knownFacts.amount ?? 2000,
    currency: knownFacts.currency ?? 'GHS',
    fee: knownFacts.fee ?? 0,
    deadlineHours: knownFacts.deadlineHours ?? 72
  })
  const proof = runInvariantProofEngine({
    compiledProgram: ledgerDraft.compiledProgram,
    stateMachine: ledgerDraft.stateMachine,
    assumptions: assumptions.assumptionReview.assumptions,
    atomicCommitLock: true,
    runtimeMonitors: ledgerDraft.compiledProgram.runtime_monitors
  })

  return {
    request,
    architecture: COMBINED_CORRECTNESS_ARCHITECTURE,
    flow: FOUR_ENGINE_CREATION_FLOW,
    assumptions: assumptions.assumptionReview,
    conflicts,
    ledgerDraft,
    proof,
    runtimeWatchpoints: FOUR_ENGINE_CREATION_FLOW.runtime,
    releaseAllowed: assumptions.assumptionReview.safeToCompile && conflicts.valid && ledgerDraft.valid && proof.passed
  }
}

export function generateConflictResolutionPatch(conflict = DOUBLE_OUTCOME_CONFLICT_EXAMPLE) {
  const resolution = recommendConflictResolution(conflict)
  if (resolution.action === 'insert_guard') {
    return {
      ...GUARD_INSERTION_PATCH_EXAMPLE,
      target: conflict.target ?? GUARD_INSERTION_PATCH_EXAMPLE.target,
      reason: conflict.issue ?? GUARD_INSERTION_PATCH_EXAMPLE.reason
    }
  }
  return {
    patch_type: resolution.action,
    target: conflict.type ?? 'capability_contract',
    resolution: resolution.resolution,
    reason: conflict.issue ?? conflict.description ?? 'conflict_resolution_required'
  }
}

export function createUncertaintyLedgerEntry(assumption = {}) {
  return {
    what_aura_believes: assumption.statement ?? assumption.what_aura_believes ?? 'unspecified_belief',
    why_it_believes_it: assumption.source ?? 'unknown_source',
    confidence: assumption.confidence ?? assumption.source_confidence ?? 0,
    affects_money: numericRiskLevelForAssumption(assumption) >= 3,
    user_confirmed: assumption.explicitlyConfirmed ?? assumption.user_confirmed ?? false,
    can_expire: assumption.can_expire ?? true,
    dependent_engines: assumption.affected_components ?? ASSUMPTION_VISIBLE_TO_ENGINES,
    wrongness_response: numericRiskLevelForAssumption(assumption) >= 4 ? 'block_or_human_review' : 'ask_repair_or_monitor'
  }
}

export function validateCrossEngineContracts({
  assumptionToConflict = ASSUMPTION_TO_CONFLICT_CONTRACT,
  conflictToLedger = CONFLICT_TO_LEDGER_PATCH_CONTRACT,
  ledgerToProof = LEDGER_TO_PROOF_CONTRACT,
  proofFailureToConflict = PROOF_FAILURE_TO_CONFLICT_CONTRACT
} = {}) {
  const issues = []
  if (!assumptionToConflict.assumption_id || !assumptionToConflict.requires_resolution) issues.push('assumption_to_conflict_contract_incomplete')
  if (!conflictToLedger.conflict_id || !conflictToLedger.patch?.state_variable) issues.push('conflict_to_ledger_patch_incomplete')
  if (!ledgerToProof.ledger_program_id || !ledgerToProof.required_invariants?.length) issues.push('ledger_to_proof_contract_incomplete')
  if (proofFailureToConflict.proof_status === 'failed' && !proofFailureToConflict.recommended_resolution?.action) {
    issues.push('proof_failure_missing_recommended_resolution')
  }

  return {
    valid: issues.length === 0,
    issues,
    contracts: { assumptionToConflict, conflictToLedger, ledgerToProof, proofFailureToConflict }
  }
}

export function validateRequiredReleaseGates(gates = {}) {
  const missing = Object.keys(REQUIRED_RELEASE_GATES).filter((gate) => gates[gate] !== true)
  const critical = missing.filter((gate) => [
    'critical_assumptions_resolved',
    'no_unresolved_critical_conflict',
    'ledger_postings_balanced',
    'state_machine_has_terminal_paths',
    'invariants_passed',
    'runtime_monitors_attached'
  ].includes(gate))

  return {
    releaseAllowed: missing.length === 0,
    missing,
    critical,
    gateEngines: REQUIRED_RELEASE_GATES,
    releaseBlocked: critical.length > 0
  }
}

export function detectSusuRoscaConflicts({
  memberCount = 10,
  contributionAmount = 500,
  promisedFullPayout = true,
  defaultTolerance = 1,
  insurancePool,
  depositPerMember,
  reserve,
  retainedSeedPayout,
  creditFacility,
  guarantor = false,
  platformGuarantee,
  membersVerified,
  payoutDelayAllowed,
  reducedGuaranteeAllowed,
  riskBasedPayoutOrdering = false,
  btsEligibility = false,
  payoutOrder
} = {}) {
  const members = finiteNumber(memberCount, 10)
  const contribution = finiteNumber(contributionAmount, 500)
  const toleratedDefaults = finiteNumber(defaultTolerance, 1)
  const roundPayout = members * contribution
  const defaultLoss = toleratedDefaults * contribution
  const depositCapacity = finiteNumber(depositPerMember, 0) * members
  const financialAbsorberCapacity = [
    finiteNumber(insurancePool, 0),
    depositCapacity,
    finiteNumber(reserve, 0),
    finiteNumber(retainedSeedPayout, 0),
    finiteNumber(creditFacility, 0),
    guarantor ? defaultLoss : 0,
    platformGuarantee === true ? defaultLoss : 0
  ].reduce((sum, amount) => sum + amount, 0)
  const availableContributions = Math.max(0, members - toleratedDefaults) * contribution
  const availableForRound = availableContributions + financialAbsorberCapacity
  const hasFinancialAbsorber = financialAbsorberCapacity > 0
  const hasNonFundingMitigation = Boolean(
    payoutDelayAllowed || reducedGuaranteeAllowed || riskBasedPayoutOrdering || btsEligibility
  )
  const missingAssumptions = []

  if (insurancePool === undefined) missingAssumptions.push('insurance_pool')
  if (depositPerMember === undefined) missingAssumptions.push('deposit')
  if (platformGuarantee === undefined) missingAssumptions.push('platform_guarantee')
  if (membersVerified === undefined) missingAssumptions.push('member_verification')
  if (payoutDelayAllowed === undefined) missingAssumptions.push('payout_delay')
  if (!payoutOrder) missingAssumptions.push('payout_order')

  const conflicts = []
  if (promisedFullPayout && toleratedDefaults > 0 && !hasFinancialAbsorber) {
    conflicts.push({
      id: 'full_payout_guarantee_vs_no_risk_fund',
      type: 'financial_impossibility',
      severity: hasNonFundingMitigation ? 'high' : 'critical',
      explanation: 'full payout under default requires reserve deposit insurance guarantor or approved credit',
      affected_invariants: ['payout_amount_lte_available_contributions_plus_reserve_plus_approved_credit'],
      suggested_patch: hasNonFundingMitigation ? 'change_product_promise_or_delay_payout' : 'add_default_absorber',
      blocksRelease: !hasNonFundingMitigation
    })
  }
  if (promisedFullPayout && toleratedDefaults > 0 && availableForRound < roundPayout) {
    conflicts.push({
      id: 'default_after_payout_vs_future_pot_integrity',
      type: 'ledger_invariant_conflict',
      severity: 'critical',
      explanation: 'a member default after receiving payout can shrink remaining scheduled payouts',
      affected_invariants: ['remaining_scheduled_payouts_fundable_or_full_payout_promise_removed'],
      suggested_patch: 'fund_default_gap_or_remove_full_payout_guarantee',
      blocksRelease: !reducedGuaranteeAllowed && !payoutDelayAllowed
    })
  }
  if (promisedFullPayout && toleratedDefaults > 0 && platformGuarantee !== true && !hasFinancialAbsorber) {
    conflicts.push({
      id: 'user_expectation_vs_ledger_math',
      type: 'disclosure_and_ledger_math_conflict',
      severity: 'critical',
      explanation: 'the product needs an explicit default absorber before promising full payout',
      affected_invariants: ['money_conservation', 'no_hidden_platform_liability'],
      suggested_patch: 'ask_who_covers_default',
      blocksRelease: true
    })
  }
  if (promisedFullPayout && toleratedDefaults > 0 && (!payoutOrder || payoutOrder === 'early_first') && !riskBasedPayoutOrdering && !btsEligibility) {
    conflicts.push({
      id: 'payout_order_vs_risk',
      type: 'risk_policy_conflict',
      severity: 'medium',
      explanation: 'early payout members create higher exposure unless order is risk aware',
      affected_invariants: ['remaining_scheduled_payouts_fundable_or_full_payout_promise_removed'],
      suggested_patch: 'bind_risk_based_payout_ordering_or_bts_eligibility',
      blocksRelease: false
    })
  }

  return {
    valid: conflicts.every((conflict) => !conflict.blocksRelease),
    conflicts,
    missingAssumptions,
    roundPayout,
    defaultLoss,
    availableContributions,
    financialAbsorberCapacity,
    availableForRound,
    repairMechanisms: SUSU_ROSCA_RELEASE_REPAIR_MECHANISMS
  }
}

export function compileSusuRoscaLedgerDraft(options = {}) {
  const conflictReview = detectSusuRoscaConflicts(options)

  return {
    valid: conflictReview.valid,
    providerApiDetailsSkipped: true,
    accounts: SUSU_ROSCA_CORRECTNESS_EXAMPLE.ledger_accounts,
    postingRecipes: [
      {
        id: 'collect_member_contribution',
        debit: 'member_wallets.available',
        credit: 'circle_contribution_pool.locked',
        amount: 'member_contribution_amount',
        guards: ['member_verified', 'contribution_obligation_active', 'debit_authorized']
      },
      {
        id: 'fund_round_payout_pool',
        debit: 'circle_contribution_pool.locked',
        credit: 'circle_payout_pool.available',
        amount: 'round_payout_amount',
        guards: ['round_fundable', 'default_absorber_bound_if_guaranteed']
      },
      {
        id: 'pay_current_recipient',
        debit: 'circle_payout_pool.available',
        credit: 'member_wallets.available',
        amount: 'payout_amount',
        guards: ['recipient_turn_active', 'single_payout_for_round']
      },
      {
        id: 'recover_default_gap',
        debit: 'personal_deposit_hold_or_pool_insurance_reserve_or_approved_credit',
        credit: 'default_recovery_account',
        amount: 'default_gap',
        guards: ['default_event_confirmed', 'absorber_capacity_available']
      }
    ],
    stateMachine: [
      'circle_configured',
      'members_verified',
      'round_collecting',
      'round_fundable',
      'payout_released',
      'default_recovery_active',
      'circle_completed_or_repaired'
    ],
    invariantsRequired: SUSU_ROSCA_CORRECTNESS_EXAMPLE.proof_requirements,
    runtimeMonitors: ['contribution_obligation_monitor', 'reserve_health_monitor', 'default_gap_monitor'],
    conflicts: conflictReview.conflicts,
    missingAssumptions: conflictReview.missingAssumptions,
    releaseBlocked: !conflictReview.valid
  }
}

export function proveSusuRoscaInvariants(options = {}) {
  const conflictReview = detectSusuRoscaConflicts(options)
  const promisedFullPayout = options.promisedFullPayout ?? true
  const obligationsTracked = options.contributionObligationsTracked !== false
  const fullPayoutFundable = !promisedFullPayout || conflictReview.availableForRound >= conflictReview.roundPayout
  const defaultAbsorbed = !promisedFullPayout || conflictReview.defaultLoss === 0 || conflictReview.financialAbsorberCapacity >= conflictReview.defaultLoss
  const productPromiseCanChange = Boolean(options.payoutDelayAllowed || options.reducedGuaranteeAllowed)

  const checks = [
    {
      id: 'payout_amount_lte_available_contributions_plus_reserve_plus_approved_credit',
      passed: fullPayoutFundable,
      observed: conflictReview.availableForRound,
      required: conflictReview.roundPayout
    },
    {
      id: 'all_member_contribution_obligations_tracked',
      passed: obligationsTracked,
      observed: obligationsTracked ? 'tracked' : 'missing',
      required: 'tracked'
    },
    {
      id: 'remaining_scheduled_payouts_fundable_or_full_payout_promise_removed',
      passed: defaultAbsorbed || productPromiseCanChange,
      observed: defaultAbsorbed ? 'funded_default_absorber' : 'promise_requires_change',
      required: 'funded_default_absorber_or_changed_product_promise'
    }
  ]
  const failed = checks.filter((check) => !check.passed)
  const guaranteedFullPayoutAllowed = checks.every((check) => check.passed) && promisedFullPayout && defaultAbsorbed
  const mechanismsPresent = SUSU_ROSCA_RELEASE_REPAIR_MECHANISMS.filter((mechanism) => {
    if (mechanism === 'deposit') return finiteNumber(options.depositPerMember, 0) > 0
    if (mechanism === 'insurance') return finiteNumber(options.insurancePool, 0) > 0
    if (mechanism === 'retained_seed_payout') return finiteNumber(options.retainedSeedPayout, 0) > 0
    if (mechanism === 'reserve') return finiteNumber(options.reserve, 0) > 0
    if (mechanism === 'guarantor') return options.guarantor === true
    if (mechanism === 'credit_facility') return finiteNumber(options.creditFacility, 0) > 0
    if (mechanism === 'payout_delay') return options.payoutDelayAllowed === true
    if (mechanism === 'reduced_guarantee') return options.reducedGuaranteeAllowed === true
    if (mechanism === 'risk_based_payout_ordering') return options.riskBasedPayoutOrdering === true
    if (mechanism === 'bts_based_eligibility') return options.btsEligibility === true
    return false
  })
  const variantReleaseAllowed = !guaranteedFullPayoutAllowed && mechanismsPresent.length > 0 && obligationsTracked

  return {
    passed: guaranteedFullPayoutAllowed,
    guaranteedFullPayoutAllowed,
    variantReleaseAllowed,
    checks,
    failed,
    counterexample: failed.length
      ? {
          path: ['member_defaults_after_receiving_payout', 'future_contribution_missing', 'remaining_payout_promise_unfunded'],
          failed_invariants: failed.map((check) => check.id)
        }
      : undefined,
    repairMechanismsRequired: guaranteedFullPayoutAllowed ? [] : SUSU_ROSCA_RELEASE_REPAIR_MECHANISMS,
    mechanismsPresent,
    releaseDecision: guaranteedFullPayoutAllowed
      ? 'guaranteed_full_payout_release_allowed'
      : variantReleaseAllowed
        ? 'release_only_as_modified_risk_disclosed_circle'
        : 'block_guaranteed_full_payout'
  }
}

export function runSusuRoscaCorrectnessReview(options = {}) {
  const conflictReview = detectSusuRoscaConflicts(options)
  const ledgerDraft = compileSusuRoscaLedgerDraft(options)
  const proof = proveSusuRoscaInvariants(options)

  return {
    example: SUSU_ROSCA_CORRECTNESS_EXAMPLE,
    assumptionFindings: SUSU_ROSCA_CORRECTNESS_EXAMPLE.assumption_manager_findings,
    conflictReview,
    ledgerDraft,
    proof,
    releaseAllowed: conflictReview.valid && (proof.guaranteedFullPayoutAllowed || proof.variantReleaseAllowed),
    releaseDecision: proof.releaseDecision
  }
}

export function compileSave2PayGoalWalletPlan({
  incomingAmount = 0,
  feeAmount = 0,
  allocations = SAVE2PAY_DEFAULT_ALLOCATIONS,
  applyAfterFees = true,
  minimumIncomingAmount = 0,
  eventId = 'incoming_event_001',
  processedEventIds = [],
  targetCaps = {},
  reversal = false
} = {}) {
  const incoming = finiteNumber(incomingAmount, 0)
  const fee = finiteNumber(feeAmount, 0)
  const allocationBase = Math.max(0, incoming - (applyAfterFees ? fee : 0))
  const belowThreshold = incoming < finiteNumber(minimumIncomingAmount, 0)
  const duplicateEvent = processedEventIds.includes(eventId)
  const allocationRows = belowThreshold || duplicateEvent
    ? []
    : allocations.map((allocation) => {
        const rawAmount = allocationBase * finiteNumber(allocation.percentage, 0)
        const cap = targetCaps[allocation.id]
        const capRemaining = cap ? Math.max(0, finiteNumber(cap.target, 0) - finiteNumber(cap.current, 0)) : rawAmount
        const amount = Math.min(rawAmount, capRemaining)

        return {
          id: allocation.id,
          wallet: allocation.wallet,
          percentage: finiteNumber(allocation.percentage, 0),
          amount: Number(amount.toFixed(2)),
          lockPolicy: allocation.lockPolicy ?? 'policy_required'
        }
      })
  const allocatedTotal = Number(allocationRows.reduce((sum, row) => sum + row.amount, 0).toFixed(2))
  const remainder = Number((incoming - (applyAfterFees ? fee : 0) - allocatedTotal - (applyAfterFees ? 0 : fee)).toFixed(2))
  const totalPercentage = allocations.reduce((sum, allocation) => sum + finiteNumber(allocation.percentage, 0), 0)
  const lockedPoliciesBound = allocations.every((allocation) => !allocation.wallet.includes('.locked') || Boolean(allocation.lockPolicy))
  const ledgerEntries = duplicateEvent
    ? []
    : [
        ...allocationRows.map((row) => ({
          eventId,
          debit: reversal ? row.wallet : 'incoming_wallet.pending',
          credit: reversal ? 'incoming_wallet.reversal_pending' : row.wallet,
          amount: row.amount,
          reason: reversal ? 'proportional_reversal' : 'goal_allocation'
        })),
        {
          eventId,
          debit: reversal ? 'main_wallet.available' : 'incoming_wallet.pending',
          credit: reversal ? 'incoming_wallet.reversal_pending' : 'main_wallet.available',
          amount: Math.max(0, remainder),
          reason: reversal ? 'remainder_reversal' : 'spendable_remainder'
        }
      ]
  const proofChecks = [
    { id: 'sum_allocations_lte_incoming_amount', passed: allocatedTotal <= incoming },
    { id: 'no_negative_remainder', passed: remainder >= 0 },
    { id: 'reversal_restores_all_affected_wallets', passed: reversal ? ledgerEntries.every((entry) => entry.reason.includes('reversal')) : true },
    { id: 'locked_wallets_cannot_spend_outside_policy', passed: lockedPoliciesBound },
    { id: 'allocation_is_idempotent', passed: duplicateEvent ? ledgerEntries.length === 0 : Boolean(eventId) }
  ]
  const issues = proofChecks.filter((check) => !check.passed).map((check) => check.id)
  if (totalPercentage > 1) issues.push('multiple_goals_exceed_one_hundred_percent')
  if (belowThreshold) issues.push('incoming_amount_below_allocation_threshold')

  return {
    example: SAVE2PAY_GOAL_WALLET_EXAMPLE,
    valid: issues.filter((issue) => issue !== 'incoming_amount_below_allocation_threshold').length === 0,
    duplicateEvent,
    belowThreshold,
    allocationBase,
    allocations: allocationRows,
    allocatedTotal,
    remainder,
    ledgerEntries,
    proofChecks,
    issues,
    releaseDecision: issues.filter((issue) => issue !== 'incoming_amount_below_allocation_threshold').length === 0
      ? 'split_wallet_plan_safe'
      : 'block_until_split_rules_repaired'
  }
}

function runtimeMonitorValue(record = {}, field = '') {
  if (record[field] !== undefined) return record[field]
  const camel = field.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())
  return record[camel]
}

export function evaluateRuntimeCorrectnessEvent({ event = {}, priorEvents = [] } = {}) {
  const eventType = event.type ?? event.eventType

  if (eventType === 'assumption_drift') {
    const previousBts = finiteNumber(event.previousBtsScore ?? event.previousScore, 0)
    const currentBts = finiteNumber(event.currentBtsScore ?? event.currentScore, previousBts)
    const drifted = event.riskIncreased === true || currentBts < previousBts - finiteNumber(event.dropThreshold, 10)

    return {
      type: eventType,
      drifted,
      actions: drifted ? RUNTIME_ASSUMPTION_DRIFT_ACTIONS : ['continue_monitoring'],
      triggers: drifted ? ['assumption_manager', 'conflict_resolver', 'invariant_proof_engine'] : ['runtime_assumption_monitor']
    }
  }

  if (eventType === 'runtime_conflict_emergence') {
    const disputeBeforeProofApproval = event.senderDisputeOpen === true && event.proofApprovalComplete !== true
    const selectedRule = disputeBeforeProofApproval
      ? RUNTIME_CONFLICT_PRIORITY_RULES.find((rule) => rule.id === 'sender_dispute_before_proof_approval')
      : RUNTIME_CONFLICT_PRIORITY_RULES.find((rule) => rule.id === 'verified_proof_without_open_dispute')

    return {
      type: eventType,
      conflictDetected: disputeBeforeProofApproval,
      selectedRule,
      actions: selectedRule ? [selectedRule.action, 'record_runtime_conflict_decision'] : ['route_to_human_review'],
      priorityRules: RUNTIME_CONFLICT_PRIORITY_RULES
    }
  }

  if (eventType === 'terminal_event_received' || eventType === 'duplicate_terminal_event_attempt') {
    const duplicate = priorEvents.some((priorEvent) => DUPLICATE_TERMINAL_EVENT_MONITOR.match_fields.every((field) => {
      const nextValue = runtimeMonitorValue(event, field)
      return nextValue !== undefined && runtimeMonitorValue(priorEvent, field) === nextValue
    }))

    return {
      type: eventType,
      duplicate,
      providerApiDetailsSkipped: DUPLICATE_TERMINAL_EVENT_MONITOR.provider_api_details_skipped,
      matchedFields: duplicate ? DUPLICATE_TERMINAL_EVENT_MONITOR.match_fields : [],
      actions: duplicate ? DUPLICATE_TERMINAL_EVENT_MONITOR.actions : ['allow_event_to_continue_to_invariant_checks']
    }
  }

  return {
    type: eventType ?? 'unknown_runtime_event',
    actions: ['log_event', 'continue_monitoring']
  }
}

export function buildOperationalConsoleSnapshot({
  assumptions = [],
  conflicts = [],
  ledgerDraft = {},
  proofResult = {}
} = {}) {
  const unresolvedAssumptions = assumptions.filter((assumption) => {
    if (assumption.status) return !['confirmed', 'promoted', 'bound'].includes(assumption.status)
    return assumption.requiresUserConfirmation || assumption.explicitlyConfirmed === false
  })
  const activeConflicts = conflicts.filter(Boolean)
  const blockedProducts = activeConflicts
    .filter((conflict) => conflict.blocksRelease || conflict.severity === 'critical')
    .map((conflict) => conflict.capability_id ?? conflict.capabilityId ?? 'draft_capability')

  return {
    sections: OPERATIONAL_CONSOLE_SECTIONS,
    assumption_console: {
      unresolved_assumptions: unresolvedAssumptions.map((assumption) => assumption.id ?? assumption.assumption_id ?? assumption.statement),
      risk_level: unresolvedAssumptions.map((assumption) => numericRiskLevelForAssumption(assumption)),
      affected_product_areas: [...new Set(unresolvedAssumptions.flatMap((assumption) => assumption.affected_components ?? []))],
      required_user_questions: unresolvedAssumptions.map((assumption) => assumption.question).filter(Boolean),
      stale_assumptions: unresolvedAssumptions.filter((assumption) => assumption.status === 'expired_or_updated_or_revoked').length,
      assumptions_promoted_to_rules: assumptions.filter((assumption) => assumption.status === 'promoted').length,
      assumptions_overridden_by_policy: assumptions.filter((assumption) => assumption.source === 'platform_policy').length
    },
    conflict_console: {
      active_conflicts: activeConflicts.map((conflict) => conflict.id ?? conflict.type),
      severity: activeConflicts.map((conflict) => conflict.severity ?? 'unknown'),
      affected_invariants: [...new Set(activeConflicts.flatMap((conflict) => conflict.affected_invariants ?? []))],
      suggested_patches: activeConflicts.map((conflict) => conflict.suggested_patch ?? conflict.repair).filter(Boolean),
      blocked_products: [...new Set(blockedProducts)],
      human_review_queue: activeConflicts.filter((conflict) => conflict.severity === 'critical').length,
      conflict_history: activeConflicts.length,
      repeated_conflict_patterns: [...new Set(activeConflicts.map((conflict) => conflict.id ?? conflict.type).filter(Boolean))]
    },
    ledger_compiler_console: {
      generated_account_graph: ledgerDraft.accounts ?? ledgerDraft.accountGraph ?? ledgerDraft.accountTopology ?? [],
      posting_recipes: ledgerDraft.postingRecipes ?? ledgerDraft.postings ?? [],
      state_machine: ledgerDraft.stateMachine ?? {},
      event_flows: ledgerDraft.eventFlows ?? ledgerDraft.runtimeMonitors ?? [],
      refund_paths: ledgerDraft.refundPaths ?? [],
      fee_flows: ledgerDraft.feeFlows ?? [],
      reconciliation_rules: ledgerDraft.reconciliationRules ?? [],
      kernel_export_status: ledgerDraft.valid ? 'ready_for_kernel_export' : 'blocked_before_kernel_export'
    },
    proof_engine_console: {
      proof_status: proofResult.passed === true ? 'passed' : proofResult.passed === false ? 'failed' : 'not_run',
      failed_invariants: [
        ...(proofResult.failed ?? []).map((failure) => failure.id ?? failure.failed_invariant).filter(Boolean),
        ...(proofResult.issues ?? []).filter((issue) => issue.includes('invariant') || issue.includes('counterexample'))
      ],
      counterexamples: proofResult.counterexample ? [proofResult.counterexample] : [],
      proof_certificate: proofResult.certificate ?? proofResult.proofCertificate ?? undefined,
      residual_risks: proofResult.residualRisks ?? (proofResult.passed ? [] : proofResult.issues ?? []),
      monitor_requirements: proofResult.runtimeMonitors
        ?? proofResult.runtime_monitors_required
        ?? proofResult.certificate?.runtime_monitors_required
        ?? [],
      release_decision: proofResult.releaseDecision ?? (proofResult.passed ? 'release_gate_passed' : 'release_blocked')
    }
  }
}

export function createCorrectnessEngineInterfaceManifest() {
  return {
    interfaces: INTERNAL_ENGINE_INTERFACES,
    forbiddenShortcutPath: AURA_FORBIDDEN_SHORTCUT_PATH,
    enforcedPath: AURA_CORRECTNESS_ENFORCED_PATH,
    designPrinciples: AURA_CORRECTNESS_STACK_DESIGN_PRINCIPLES,
    finalSummary: AURA_FINAL_TECHNICAL_SUMMARY
  }
}

export function validateInternalEngineInterfaces(implementations = {}) {
  const missingByEngine = Object.fromEntries(
    Object.entries(INTERNAL_ENGINE_INTERFACES).map(([engine, methods]) => {
      const implementation = implementations[engine] ?? {}
      const missing = methods
        .map((contract) => contract.method)
        .filter((method) => typeof implementation[method] !== 'function')

      return [engine, missing]
    })
  )
  const missing = Object.entries(missingByEngine)
    .flatMap(([engine, methods]) => methods.map((method) => `${engine}.${method}`))

  return {
    valid: missing.length === 0,
    missing,
    missingByEngine,
    requiredInterfaces: INTERNAL_ENGINE_INTERFACES
  }
}

export function validateCorrectnessOperatingPath(path = []) {
  const normalizedPath = path.map((step) => String(step).toLowerCase())
  const shortcutBlocked = normalizedPath.length === AURA_FORBIDDEN_SHORTCUT_PATH.length
    && AURA_FORBIDDEN_SHORTCUT_PATH.every((step, index) => normalizedPath[index] === step)
  const missing = AURA_CORRECTNESS_ENFORCED_PATH.filter((requiredStep) => !normalizedPath.includes(requiredStep))
  let previousIndex = -1
  const outOfOrder = AURA_CORRECTNESS_ENFORCED_PATH.filter((requiredStep) => {
    const index = normalizedPath.indexOf(requiredStep)
    if (index === -1) return false
    const violatesOrder = index < previousIndex
    previousIndex = index
    return violatesOrder
  })

  return {
    valid: !shortcutBlocked && missing.length === 0 && outOfOrder.length === 0,
    shortcutBlocked,
    missing,
    outOfOrder,
    requiredPath: AURA_CORRECTNESS_ENFORCED_PATH,
    forbiddenPath: AURA_FORBIDDEN_SHORTCUT_PATH,
    releaseGateMandatory: normalizedPath.includes('release_gated') && normalizedPath.indexOf('release_gated') < normalizedPath.indexOf('live_execution')
  }
}

export function runFinancialTruthPipelineDraft({ request = '', knownFacts = {} } = {}) {
  const assumptions = extractAssumptionsFromRequest(request, knownFacts)
  const assumptionReview = evaluateAssumptionSet(assumptions)
  const currentStage = assumptionReview.safeToCompile ? 'ready_for_conflict_resolver' : 'assumption_manager_requires_attention'

  return {
    request,
    stack: AURA_CORRECTNESS_STACK_ENGINES,
    pipeline: AURA_FINANCIAL_TRUTH_PIPELINE,
    loop: AURA_ITERATIVE_CORRECTNESS_LOOP,
    currentStage,
    assumptionReview,
    releasePackageAllowed: false
  }
}
