export const AURA_PERSONALIZED_RELEASE_OPS_SYSTEMS = Object.freeze([
  'personality_aware_product_defaults',
  'release_mode_classifier',
  'human_ops_review_system'
])

export const AURA_PERSONALIZED_RELEASE_PIPELINE = Object.freeze([
  'user_request',
  'intent_interpreter',
  'aura_product_specification_language',
  'personality_and_context_understanding',
  'personality_aware_product_defaults',
  'product_composer_and_financial_physics_engine',
  'simulation_lab_and_auto_test_factory',
  'release_mode_classifier',
  'human_ops_review_if_required',
  'runtime_execution_engine',
  'watchtower_and_outcome_learning_engine'
])

export const AURA_CONTROL_SYSTEM_CORE_QUESTIONS = Object.freeze({
  personality_aware_product_defaults: {
    core_job: 'configure_capability_for_user_identity_context_comfort_risk_profession_family_role_financial_behaviour_and_cognitive_style',
    question: 'what_should_this_product_default_to_for_this_particular_person'
  },
  release_mode_classifier: {
    core_job: 'decide_how_safely_the_generated_product_can_be_released',
    question: 'can_this_product_go_live_or_should_it_be_simulated_limited_blocked_or_reviewed'
  },
  human_ops_review_system: {
    core_job: 'route_sensitive_risky_unclear_disputed_or_novel_situations_to_humans_with_evidence_and_decision_tools',
    question: 'when_aura_should_not_act_alone_who_reviews_it_what_do_they_see_and_what_can_they_approve'
  }
})

export const PERSONALITY_DEFAULTS_ENGINE_POSITION = Object.freeze([
  'intent_interpreter',
  'context_builder',
  'persona_model',
  'personality_aware_product_defaults',
  'product_composer',
  'capability_contract_builder'
])

export const PERSONALITY_DEFAULT_ENGINE_INPUTS = Object.freeze([
  'user_request',
  'user_profile',
  'behavioural_signals',
  'product_type',
  'risk_category',
  'jurisdiction',
  'financial_context',
  'identity_entity_role',
  'historical_usage',
  'explicit_user_preferences'
])

export const PERSONALITY_DEFAULT_ENGINE_OUTPUTS = Object.freeze([
  'default_product_settings',
  'ux_defaults',
  'consent_defaults',
  'risk_defaults',
  'monitoring_defaults',
  'review_defaults',
  'explanation_defaults',
  'override_permissions'
])

export const PERSONALITY_DEFAULT_FORBIDDEN_BEHAVIORS = Object.freeze({
  manipulate_financial_behavior: 'exploitative_financial_design',
  hide_risk_using_personality: 'dark_pattern',
  increase_fees_for_low_literacy: 'predatory_behaviour',
  irreversible_decision_without_explicit_consent: 'financial_harm',
  reckless_sensitive_trait_inference: 'privacy_and_discrimination_risk',
  demographic_group_as_destiny: 'bias_and_stereotyping',
  strict_defaults_without_safe_override: 'loss_of_user_agency'
})

export const PERSONALITY_DEFAULT_ETHICAL_PRINCIPLE = 'protect_the_user_reduce_confusion_and_improve_fit_without_exploiting_behavioural_weakness'

export const PERSONALITY_DEFAULT_CONTEXT_FIELDS = Object.freeze([
  'age_band',
  'family_role',
  'profession',
  'income_pattern',
  'financial_role',
  'tech_comfort',
  'financial_literacy',
  'communication_style',
  'risk_tolerance',
  'cultural_context',
  'jurisdiction',
  'accessibility_needs'
])

export const PERSONALITY_BEHAVIOURAL_SIGNAL_MEANINGS = Object.freeze({
  frequently_abandons_setup_flows: 'needs_shorter_flow_and_guided_defaults',
  often_changes_settings_after_creation: 'needs_editable_defaults',
  misses_contribution_deadlines: 'needs_flexible_schedule_or_reminders',
  often_withdraws_early: 'needs_lock_cooling_period_or_emergency_bucket',
  sends_to_wrong_recipients_often: 'needs_safesend_defaults',
  frequently_disputes_payments: 'needs_proof_receipts_and_clearer_confirmation',
  uses_family_related_goals: 'needs_family_hub_defaults'
})

export const GOAL_SAVINGS_PERSONA_DEFAULTS = Object.freeze({
  salaried_worker: {
    schedule: 'monthly_after_payday',
    lockStrength: 'medium',
    reminders: 'payday_aligned',
    explanation: 'direct',
    monitoring: ['payday_arrival_monitor', 'goal_progress_monitor']
  },
  market_trader: {
    schedule: 'small_daily_or_weekly_flexible_savings',
    lockStrength: 'soft',
    reminders: 'gentle_and_cashflow_aware',
    explanation: 'conversational',
    monitoring: ['cashflow_variance_monitor', 'goal_progress_monitor']
  },
  student: {
    schedule: 'low_commitment',
    lockStrength: 'low',
    reminders: 'gentle_no_penalty',
    explanation: 'guided',
    monitoring: ['missed_deposit_monitor']
  },
  parent: {
    schedule: 'goal_date_back_scheduled',
    lockStrength: 'strong_with_emergency_protection',
    reminders: 'family_goal_visible',
    explanation: 'guided',
    monitoring: ['goal_progress_monitor', 'family_contribution_monitor']
  },
  elderly_user: {
    schedule: 'simple_confirmed_cadence',
    lockStrength: 'medium',
    reminders: 'slower_confirmation_and_fraud_warning',
    explanation: 'visual_and_guided',
    monitoring: ['fraud_warning_monitor', 'support_followup_monitor']
  },
  high_risk_spender: {
    schedule: 'automatic_small_lock',
    lockStrength: 'strong_with_cooling_period',
    reminders: 'direct_guardrail',
    explanation: 'plain_language',
    monitoring: ['early_withdrawal_monitor', 'cooling_period_monitor']
  },
  business_owner: {
    schedule: 'cashflow_aware_deposits',
    lockStrength: 'policy_based',
    reminders: 'operational_summary',
    explanation: 'direct',
    monitoring: ['cashflow_variance_monitor', 'team_permission_monitor', 'category_tagging_monitor']
  }
})

export const PERSONALITY_DEFAULT_CLARIFYING_QUESTION_POOL = Object.freeze({
  consent: 'Do you want AURA to use these defaults, or would you like to adjust them first?',
  lock: 'Should this money be locked, softly protected, or always withdrawable?',
  schedule: 'Should deposits follow payday, daily cash flow, or a custom schedule?',
  emergency: 'Should emergency withdrawals be allowed, and what should count as an emergency?',
  family_visibility: 'Who should be able to see or contribute to this goal?',
  accessibility: 'Do you want larger controls, slower confirmations, or guided explanations?',
  proof: 'Should AURA require receipts or proof before money leaves this goal?'
})

export const PERSONALITY_PRODUCT_CONTEXT_DEFAULT_AREAS = Object.freeze({
  savings_goal: ['deposit_schedule', 'lock_level', 'withdrawal_rules'],
  susu_circle: ['risk_gate', 'contribution_size', 'payout_order', 'default_insurance'],
  safesend: ['verification_method', 'refund_rule', 'claim_window'],
  family_hub: ['visibility', 'permissions', 'dependent_controls'],
  merchant_payment: ['receipt', 'settlement', 'dispute_window'],
  credit_product: ['caps', 'repayment_schedule', 'affordability_checks'],
  escrow: ['release_conditions', 'evidence_requirements'],
  intent_job: ['milestone_checks', 'procurement_rules', 'ranking_criteria'],
  school_fees: ['deadline_schedule', 'guardian_reminders', 'partial_payment_rules'],
  remittance: ['recipient_verification', 'fx_disclosure', 'proof_of_receipt']
})

export const PERSONALITY_DEFAULT_DOMAINS = Object.freeze({
  financial_defaults: {
    controls: ['amounts', 'caps', 'schedules', 'limits'],
    example: 'daily_20_ghs_savings_instead_of_monthly_600_ghs'
  },
  safety_defaults: {
    controls: ['lock_rules', 'cooling_periods', 'fraud_checks'],
    example: 'twenty_four_hour_cooling_before_large_withdrawal'
  },
  ux_defaults: {
    controls: ['setup_flow', 'screen_density', 'guidance_level'],
    example: 'guided_wizard_for_beginner'
  },
  disclosure_defaults: {
    controls: ['explanation_depth', 'risk_warnings'],
    example: 'plain_language_summary_for_low_literacy_user'
  },
  consent_defaults: {
    controls: ['consent_request', 'consent_renewal'],
    example: 'explicit_consent_before_auto_deduction'
  },
  automation_defaults: {
    controls: ['system_autonomy_level'],
    example: 'suggest_only_vs_auto_execute'
  },
  communication_defaults: {
    controls: ['reminders', 'tone', 'frequency'],
    example: 'gentle_student_reminders_or_firm_obligation_reminders'
  },
  evidence_defaults: {
    controls: ['release_proof', 'claim_proof'],
    example: 'photo_and_gps_for_delivery_payment'
  },
  privacy_defaults: {
    controls: ['visibility', 'sharing_rules'],
    example: 'private_by_default_for_personal_savings'
  },
  recovery_defaults: {
    controls: ['failure_response'],
    example: 'auto_pause_contribution_after_failed_payment'
  },
  review_defaults: {
    controls: ['human_review_triggers'],
    example: 'elderly_user_large_transfer_new_recipient_review'
  },
  monitoring_defaults: {
    controls: ['watchtower_rules'],
    example: 'stricter_monitoring_for_first_time_credit_capability'
  }
})

export const PRODUCT_DEFAULT_PROFILE_FIELDS = Object.freeze([
  'default_profile_id',
  'user_segment',
  'capability_context',
  'financial_defaults',
  'ux_defaults',
  'safety_defaults',
  'communication_defaults',
  'human_review_defaults',
  'override_policy'
])

export const PRODUCT_DEFAULT_PROFILE_EXAMPLE = Object.freeze({
  default_profile_id: 'pdp_9x72',
  user_segment: {
    age_band: 'adult',
    profession: 'market_trader',
    income_pattern: 'daily_irregular',
    financial_literacy: 'medium',
    tech_comfort: 'medium',
    family_role: 'parent'
  },
  capability_context: {
    capability_type: 'school_fee_savings',
    risk_level: 'medium',
    jurisdiction: 'GH',
    money_movement: true,
    multi_party: true
  },
  financial_defaults: {
    deposit_frequency: 'daily_or_weekly_flexible',
    minimum_recommended_deposit: 20,
    currency: 'GHS',
    lock_level: 'soft_lock',
    emergency_withdrawal_allowed: true,
    missed_deposit_policy: 'no_penalty_reminder_only'
  },
  ux_defaults: {
    setup_mode: 'guided_conversation',
    show_advanced_settings: false,
    explanation_level: 'simple_but_complete',
    visual_style: 'progress_story',
    confirmation_style: 'summary_card_before_submit'
  },
  safety_defaults: {
    large_withdrawal_cooling_period_hours: 24,
    recipient_verification_required: true,
    unusual_activity_watch: true
  },
  communication_defaults: {
    reminder_tone: 'encouraging',
    reminder_frequency: 'adaptive',
    missed_payment_message: 'supportive'
  },
  human_review_defaults: {
    review_required_for_large_withdrawal: true,
    review_required_for_guardian_change: true
  },
  override_policy: {
    user_can_override: true,
    override_requires_disclosure: true,
    unsafe_override_blocked: true
  }
})

export const PERSONA_BASED_DEFAULT_EXAMPLES = Object.freeze({
  market_trader: {
    income_assumption: 'irregular_daily_inflow',
    savings_schedule: 'flexible_daily_or_weekly_deposits',
    reminder_style: 'market_day_aware_reminders',
    locking: 'soft_lock_not_hard_lock',
    emergency_access: 'allowed_with_warning',
    ux: 'voice_friendly_simple_cards',
    product_suggestions: ['inventory_savings', 'school_fees', 'susu', 'supplier_payment'],
    risk_controls: ['cash_flow_aware_contribution_limits']
  },
  teacher: {
    income_assumption: 'monthly_salary',
    savings_schedule: 'monthly_payday_automation',
    reminder_style: 'before_and_after_salary_date',
    ux: 'structured_calm_explanatory',
    product_suggestions: ['school_fees', 'rent', 'professional_development', 'family_support'],
    risk_controls: ['avoid_over_automation_without_explicit_consent']
  },
  teen_student: {
    income_assumption: 'low_or_dependent_income',
    automation: 'suggest_only_by_default',
    spending_controls: 'soft_nudges_education_first',
    ux: 'visual_gamified_simple',
    consent: 'guardian_consent_if_required',
    product_suggestions: ['learning_savings', 'small_goals', 'allowance_tracking'],
    risk_controls: ['no_credit', 'no_complex_products', 'no_hidden_obligations']
  },
  elderly_user: {
    confirmation: 'slower_clearer_repeated_summary',
    font_interface: 'larger_text_less_dense_screens',
    fraud_protection: 'stronger_recipient_verification',
    automation: 'low_automation_unless_explicitly_chosen',
    transfer_defaults: ['safesend', 'cooling_period_for_new_recipient'],
    human_review: 'more_likely_for_unusual_large_actions',
    communication: 'direct_respectful_non_rushed'
  },
  startup_founder: {
    income_assumption: 'irregular_project_based',
    product_suggestions: ['runway_vault', 'payroll_reserve', 'vendor_escrow'],
    ux: 'advanced_settings_visible',
    automation: 'higher_configurability',
    risk_controls: ['approval_workflows_for_team_money_movement'],
    evidence: ['receipts', 'invoices', 'signed_confirmations'],
    monitoring: ['cash_flow_alerts', 'obligation_conflicts']
  },
  parent_guardian: {
    product_suggestions: ['school_fees', 'allowance', 'family_hub', 'child_wallet'],
    visibility: 'family_level_visibility_where_appropriate',
    controls: 'child_safe_spending_permissions',
    reminders: 'deadline_based',
    recovery: 'emergency_override_with_audit_trail',
    consent: 'explicit_guardian_consent',
    risk_controls: ['protect_child_funds_from_casual_withdrawal']
  }
})

export const DEFAULT_SELECTION_SCORE_COMPONENTS = Object.freeze({
  persona_fit: 0.2,
  capability_fit: 0.18,
  behavioural_fit: 0.16,
  safety_fit: 0.18,
  jurisdiction_fit: 0.08,
  past_outcome_fit: 0.08,
  harm_risk: -0.08,
  complexity_burden: -0.04
})

export const DEFAULT_CONFIDENCE_LEVELS = Object.freeze({
  high: {
    meaning: 'strong_evidence_supports_default',
    action: 'apply_quietly_and_explain_in_summary',
    threshold: 0.78
  },
  medium: {
    meaning: 'reasonable_assumption',
    action: 'apply_but_show_editable_choice',
    threshold: 0.55
  },
  low: {
    meaning: 'weak_or_incomplete_evidence',
    action: 'ask_clarifying_question',
    threshold: 0.3
  },
  unsafe: {
    meaning: 'default_may_harm_user',
    action: 'do_not_apply',
    threshold: 0
  }
})

export const PERSONALITY_OVERRIDE_RULES = Object.freeze({
  preference_override: {
    example: 'change_reminder_tone',
    defaultDecision: 'allowed',
    category: 'user_preference'
  },
  convenience_override: {
    example: 'increase_savings_frequency',
    defaultDecision: 'allowed',
    category: 'user_preference'
  },
  risky_override: {
    example: 'disable_recipient_verification_for_large_transfer',
    defaultDecision: 'review_or_block',
    category: 'user_risk'
  },
  compliance_override: {
    example: 'avoid_required_verification_for_regulated_transaction',
    defaultDecision: 'blocked',
    category: 'regulatory_violation'
  },
  harmful_override: {
    example: 'child_creates_credit_product',
    defaultDecision: 'blocked',
    category: 'user_harm'
  },
  fraud_prone_override: {
    example: 'anonymous_payout_to_unknown_recipient',
    defaultDecision: 'blocked_or_review',
    category: 'fraud_risk'
  }
})

export const EXPERIENCE_PHYSICS_DEFAULT_RESPONSES = Object.freeze({
  low_financial_literacy: ['reduce_jargon', 'add_examples'],
  high_cognitive_load: ['fewer_decisions_per_screen'],
  elderly_user: ['larger_buttons', 'slower_confirmation'],
  expert_user: ['advanced_mode_available'],
  repeated_confusion: ['switch_to_guided_flow'],
  high_risk_action: ['increase_friction'],
  low_risk_action: ['reduce_friction'],
  emotional_urgency: ['slow_down_irreversible_action'],
  frequent_successful_usage: ['allow_shortcut_mode']
})

export const RENT_LOCK_FINANCIAL_PHYSICS_DEFAULTS = Object.freeze({
  request: 'quick_savings_lock_so_i_do_not_touch_my_rent_money',
  detected_context: [
    'previously_withdrawn_early_from_goals',
    'rent_deadline_near',
    'income_is_monthly',
    'missing_rent_is_high_harm'
  ],
  defaults: {
    lock_type: 'hard_lock_until_rent_date',
    emergency_withdrawal: 'requires_reason_and_cooling_period',
    reminder: 'payday_reminder_plus_seven_day_deadline_reminder',
    overdraw_protection: 'do_not_lock_funds_needed_for_food_or_transport',
    bts_effect: 'positive_behaviour_if_completed',
    release_rule: 'personal_capability_only_no_marketplace_release'
  }
})

export const PERSONALITY_DEFAULT_INTERNAL_SUBMODULES = Object.freeze({
  persona_resolver: 'determines_user_profile_dimensions_from_explicit_and_inferred_signals',
  contextual_default_mapper: 'maps_persona_and_product_type_to_candidate_defaults',
  behavioural_evidence_evaluator: 'uses_past_behaviour_carefully_to_support_or_weaken_defaults',
  risk_sensitive_default_filter: 'removes_unsafe_or_exploitative_defaults',
  cognitive_load_adjuster: 'decides_how_much_complexity_the_user_should_see',
  automation_level_selector: 'determines_suggest_only_assisted_semi_auto_or_auto_execute',
  disclosure_depth_selector: 'determines_how_much_explanation_is_needed',
  consent_pattern_selector: 'chooses_consent_flow_based_on_product_risk',
  override_policy_engine: 'defines_what_the_user_may_edit',
  default_explanation_generator: 'explains_why_defaults_were_chosen',
  outcome_feedback_learner: 'learns_which_defaults_work_over_time'
})

export const DEFAULT_MANIFEST_FIELDS = Object.freeze([
  'capability_id',
  'default_manifest_version',
  'persona_basis',
  'defaults_applied',
  'defaults_blocked',
  'required_questions',
  'explanation'
])

export const DEFAULT_MANIFEST_EXAMPLE = Object.freeze({
  capability_id: 'cap_schoolfees_001',
  default_manifest_version: '1.0',
  persona_basis: {
    explicit: ['parent', 'school_fee_goal'],
    inferred: ['monthly_income', 'medium_tech_comfort'],
    excluded_sensitive_inferences: ['health_status', 'ethnicity']
  },
  defaults_applied: [
    {
      domain: 'deposit_schedule',
      value: 'monthly_after_payday',
      confidence: 'high',
      user_editable: true
    },
    {
      domain: 'withdrawal_rule',
      value: 'soft_lock_until_deadline',
      confidence: 'medium',
      user_editable: true,
      requires_disclosure_on_change: true
    }
  ],
  defaults_blocked: [
    {
      domain: 'auto_borrow_if_short',
      reason: 'credit_action_requires_explicit_user_request_and_affordability_assessment'
    }
  ],
  required_questions: [
    'What date are the school fees due?',
    'Should anyone else be allowed to contribute?'
  ],
  explanation: 'AURA selected a payday-based savings schedule because this goal has a fixed deadline and the income pattern appears monthly.'
})

export const HUMAN_OPS_REVIEW_PURPOSES = Object.freeze([
  'risk',
  'compliance',
  'fraud',
  'disputes',
  'novel_product_generation',
  'edge_cases',
  'user_harm',
  'governance_exceptions',
  'release_approvals'
])

export const HUMAN_OPS_REVIEW_LAYERS = Object.freeze({
  design_time_review: 'new_products_and_capabilities_before_release',
  runtime_review: 'live_transactions_disputes_exceptions_and_risky_actions',
  post_event_review: 'audits_complaints_failures_and_model_improvement'
})

export const HUMAN_OPS_REVIEW_PLACEMENT = Object.freeze([
  'capability_composer',
  'simulation_and_testing',
  'release_mode_classifier',
  'human_ops_review_if_needed',
  'runtime_engine',
  'watchtower',
  'human_ops_review_if_runtime_anomaly_appears'
])

export const HUMAN_OPS_REVIEW_CATEGORIES = Object.freeze({
  capability_release_review: {
    description: 'human_checks_whether_generated_capability_can_go_live',
    example: 'community_micro_loan_pool_product'
  },
  compliance_review: {
    description: 'checks_regulatory_obligations',
    example: 'credit_kyc_remittance_or_securities_like_product'
  },
  fraud_review: {
    description: 'reviews_suspicious_activity',
    example: 'new_recipient_large_transfer_urgency'
  },
  ledger_review: {
    description: 'checks_money_state_and_accounting_impact',
    example: 'split_escrow_and_refund_paths'
  },
  ux_dark_pattern_review: {
    description: 'checks_whether_experience_is_manipulative',
    example: 'hidden_fees_or_confusing_consent'
  },
  identity_review: {
    description: 'reviews_entity_or_person_verification_conflict',
    example: 'business_account_ownership_claim'
  },
  evidence_review: {
    description: 'reviews_uploaded_proof',
    example: 'photo_gps_delivery_evidence_unclear'
  },
  dispute_review: {
    description: 'resolves_conflict_between_parties',
    example: 'buyer_says_work_incomplete_seller_says_complete'
  },
  exception_review: {
    description: 'handles_failure_paths',
    example: 'failed_settlement_partial_payout_missing_party'
  },
  abuse_review: {
    description: 'checks_misuse_of_product_creation',
    example: 'user_tries_to_create_fraudulent_capability'
  },
  vulnerable_user_review: {
    description: 'protects_high_risk_users',
    example: 'elderly_user_repeatedly_sending_money_to_unknown_person'
  },
  marketplace_review: {
    description: 'reviews_capability_before_public_listing',
    example: 'partner_wants_to_publish_payment_product_template'
  }
})

export const HUMAN_OPS_REVIEW_TRIGGERS = Object.freeze({
  novel_financial_product: 'product_may_be_unsafe_or_regulated',
  money_movement: 'ledger_and_settlement_risk',
  multi_party_effect: 'consent_and_dispute_risk',
  verification_bypass: 'fraud_risk',
  elderly_large_new_recipient_transfer: 'scam_risk',
  child_or_teen_financial_autonomy: 'guardian_or_legal_issue',
  susu_default_or_dispute: 'operational_resolution_needed',
  unclear_escrow_release_evidence: 'human_judgment_needed',
  low_confidence_ai_product: 'uncertain_execution',
  release_classifier_review_required: 'governance_threshold_reached'
})

export const HUMAN_OPS_STRUCTURED_TRIGGER_TYPES = Object.freeze({
  risk_threshold_exceeded: 'product_risk_score_above_configured_threshold',
  compliance_tag_present: 'credit_remittance_investment_or_insurance_tag',
  novel_composition: 'new_combination_of_primitives_never_used_before',
  low_confidence: 'aura_unsure_about_intent_legality_or_execution',
  sensitive_persona: 'child_elderly_vulnerable_or_guardian_dependent_user',
  high_value: 'transaction_above_configured_threshold',
  multi_party_conflict: 'disputes_group_payout_or_consent_mismatch',
  identity_uncertainty: 'recipient_or_entity_not_verified',
  evidence_mismatch: 'gps_photo_or_invoice_does_not_align',
  unsafe_override_request: 'user_wants_to_disable_safety_guard',
  watchtower_anomaly: 'runtime_behaviour_deviates_from_expected_pattern'
})

export const HUMAN_OPS_REVIEW_TRIGGER_MATRIX = Object.freeze({
  simple_personal_savings_goal: { reviewRequired: false, reviewType: [] },
  hard_lock_no_withdrawal_savings_goal: { reviewRequired: 'maybe', reviewType: ['ux_dark_pattern_review', 'consent_review_if_high_harm'] },
  credit_like_lending_product: { reviewRequired: true, reviewType: ['compliance_review', 'risk_review'] },
  group_contribution_circle: { reviewRequired: 'conditional', reviewType: ['risk_review', 'ledger_review', 'consent_review'] },
  gps_photo_escrow: { reviewRequired: 'maybe', reviewType: ['evidence_review'] },
  child_money_movement_product: { reviewRequired: true, reviewType: ['identity_review', 'compliance_review', 'guardian_review'] },
  hide_fees_request: { reviewRequired: true, reviewType: ['abuse_review', 'ux_dark_pattern_review'], blockRecommended: true },
  bypass_verification_request: { reviewRequired: true, reviewType: ['compliance_review', 'fraud_review'], blockOrReview: true },
  marketplace_template: { reviewRequired: true, reviewType: ['marketplace_review', 'capability_release_review'] },
  elderly_large_new_recipient_transfer: { reviewRequired: true, reviewType: ['fraud_review', 'vulnerable_user_review'] },
  failed_simulation: { reviewRequired: false, reviewType: ['technical_review_optional'], releaseBlocked: true },
  unsupported_primitive: { reviewRequired: true, reviewType: ['architecture_review'] }
})

export const HUMAN_REVIEW_CASE_FIELDS = Object.freeze([
  'review_case_id',
  'case_type',
  'priority',
  'status',
  'created_at',
  'source',
  'risk_summary',
  'evidence_package',
  'review_requirements',
  'allowed_decisions'
])

export const HUMAN_REVIEW_CASE_EXAMPLE = Object.freeze({
  review_case_id: 'hrc_20491',
  case_type: 'capability_release_review',
  priority: 'high',
  status: 'pending_review',
  created_at: '2026-05-17T12:00:00Z',
  source: {
    triggered_by: 'release_mode_classifier',
    capability_id: 'cap_microloan_pool_018',
    user_id: 'usr_772'
  },
  risk_summary: {
    overall_risk_score: 86,
    risk_reasons: [
      'credit_like_behaviour_detected',
      'multi_party_money_pooling',
      'repayment_obligation_created',
      'novel_primitive_composition'
    ],
    compliance_tags: ['credit', 'multi_party_funds', 'obligation']
  },
  evidence_package: {
    user_request: 'I want people in my group to borrow from the shared wallet and pay back weekly with small interest.',
    generated_spec: 'apsl_spec_8391',
    capability_contract: 'ucc_5521',
    simulation_results: 'sim_772',
    test_results: 'test_902',
    ledger_model: 'ledger_441',
    ui_flow_preview: 'ux_336'
  },
  review_requirements: [
    'confirm_regulatory_category',
    'check_interest_fee_disclosure',
    'verify_repayment_enforcement_logic',
    'check_user_harm_risk',
    'approve_release_mode'
  ],
  allowed_decisions: [
    'approve_guarded_live',
    'approve_simulation_only',
    'request_changes',
    'block',
    'escalate_to_compliance'
  ]
})

export const HUMAN_REVIEW_STATE_MACHINE = Object.freeze({
  states: [
    'created',
    'queued',
    'assigned',
    'in_review',
    'needs_more_information',
    'waiting_on_user_or_system',
    'decision_drafted',
    'approved',
    'rejected',
    'blocked',
    'escalated',
    'returned_for_revision',
    'decision_logged',
    'capability_updated',
    'watchtower_policy_attached',
    'closed'
  ],
  transitions: {
    created: ['queued'],
    queued: ['assigned'],
    assigned: ['in_review'],
    in_review: ['needs_more_information', 'decision_drafted'],
    needs_more_information: ['waiting_on_user_or_system'],
    waiting_on_user_or_system: ['decision_drafted'],
    decision_drafted: ['approved', 'rejected', 'blocked', 'escalated', 'returned_for_revision'],
    approved: ['decision_logged'],
    rejected: ['decision_logged'],
    blocked: ['decision_logged'],
    escalated: ['decision_logged'],
    returned_for_revision: ['decision_logged'],
    decision_logged: ['capability_updated'],
    capability_updated: ['watchtower_policy_attached'],
    watchtower_policy_attached: ['closed']
  }
})

export const HUMAN_REVIEWER_ROLES = Object.freeze({
  compliance_reviewer: ['regulated_products', 'kyc', 'credit', 'remittance', 'securities_like_features'],
  risk_reviewer: ['fraud', 'user_harm', 'exposure', 'default_risk'],
  ledger_reviewer: ['double_entry_logic', 'settlement_paths', 'refund_paths'],
  ux_safety_reviewer: ['dark_patterns', 'confusing_consent', 'unfair_friction'],
  identity_reviewer: ['kyc_kyb', 'entity_claims', 'guardian_dependent_issues'],
  evidence_reviewer: ['photos', 'gps', 'invoices', 'proof_of_completion'],
  ops_resolution_specialist: ['disputes', 'failed_transactions', 'stuck_workflows'],
  marketplace_reviewer: ['public_capability_templates'],
  senior_approver: ['high_risk_releases', 'policy_exceptions'],
  audit_reviewer: ['post_event_review', 'quality_control']
})

export const HUMAN_OPS_CONSOLE_SECTIONS = Object.freeze({
  case_summary: 'what_happened_and_why_review_is_needed',
  user_request: 'original_natural_language_request',
  generated_product_spec: 'aura_interpreted_product_design',
  capability_graph: 'atoms_mini_primitives_primitives_and_capabilities_used',
  ledger_preview: 'money_movements_account_states_and_failure_paths',
  risk_explanation: 'why_risk_score_is_high',
  compliance_tags: 'detected_regulatory_areas',
  simulation_results: 'stress_tests_and_failed_cases',
  ux_preview: 'screens_disclosures_and_consent_flow',
  evidence_panel: 'uploaded_docs_gps_photo_receipts_and_identity_proofs',
  decision_options: 'approve_block_modify_or_escalate',
  policy_references: 'relevant_rules_and_internal_policies',
  audit_trail: 'who_decided_what_and_why'
})

export const HUMAN_OPS_EVIDENCE_PACKAGE_TYPES = Object.freeze([
  'original_user_request',
  'clarifying_questions',
  'product_spec',
  'capability_contract',
  'primitive_graph',
  'risk_score',
  'compliance_tags',
  'ledger_model',
  'simulation_report',
  'test_coverage',
  'ui_preview',
  'default_manifest',
  'release_recommendation',
  'watchtower_plan',
  'prior_history'
])

export const HUMAN_OPS_DECISION_TYPES = Object.freeze({
  approve_full_live: 'capability_may_go_live_without_special_restriction',
  approve_guarded_live: 'capability_may_go_live_with_limits_monitoring',
  approve_private_use_only: 'user_can_use_it_but_not_publish',
  approve_simulation_only: 'user_can_test_but_not_execute_money_movement',
  require_modification: 'product_must_change_before_release',
  require_stronger_consent: 'disclosure_or_consent_insufficient',
  require_lower_limits: 'amount_or_frequency_caps_must_be_reduced',
  require_human_approval_per_transaction: 'runtime_manual_approval_required',
  escalate: 'senior_legal_or_compliance_review_needed',
  block: 'product_or_action_cannot_proceed',
  quarantine: 'disable_existing_product_pending_investigation'
})

export const HUMAN_OPS_LEARNING_TARGETS = Object.freeze([
  'product_composer',
  'financial_physics_engine',
  'risk_composition_engine',
  'compliance_tagging_engine',
  'release_mode_classifier',
  'personality_aware_defaults'
])

export const HUMAN_OPS_SAFER_ALTERNATIVES = Object.freeze({
  interest_charging_group_lending_pool: [
    'interest_free_rotating_support_pool',
    'emergency_contribution_wallet_with_contribution_limits',
    'member_aid_fund_with_transparent_voluntary_repayment',
    'escrow_backed_obligation_tracker_without_interest'
  ],
  verification_bypass_transfer: [
    'delayed_transfer_with_recipient_confirmation',
    'lower_limit_transfer_with_manual_review',
    'safesend_with_refund_window'
  ],
  public_multi_party_money_template: [
    'private_simulation_template',
    'guarded_live_pilot_with_caps',
    'non_executable_education_template'
  ]
})

export const HUMAN_OPS_ACCOUNTABILITY_FIELDS = Object.freeze([
  'who_approved_it',
  'what_evidence_they_saw',
  'what_rule_they_applied',
  'what_risk_they_accepted',
  'what_limit_was_placed',
  'what_monitoring_was_attached',
  'what_happens_if_it_fails'
])

export const RELEASE_MODE_LADDER = Object.freeze([
  'blocked',
  'clarification_required',
  'simulation_only',
  'internal_sandbox',
  'private_draft',
  'require_modification',
  'human_review_required',
  'private_live',
  'guarded_live',
  'limited_public_release',
  'full_live',
  'marketplace_eligible',
  'quarantined',
  'rollback_required',
  'migration_review_required'
])

export const CORE_RELEASE_MODES = Object.freeze({
  blocked: {
    meaning: 'cannot_proceed',
    example: 'fraudulent_or_prohibited_capability'
  },
  clarification_required: {
    meaning: 'need_more_user_information',
    example: 'ambiguous_money_movement_request'
  },
  simulation_only: {
    meaning: 'can_be_designed_and_tested_but_no_real_money_movement',
    example: 'new_lending_like_product'
  },
  internal_sandbox: {
    meaning: 'developers_or_admins_can_test_only',
    example: 'new_primitive_combination'
  },
  private_draft: {
    meaning: 'user_can_view_or_edit_but_not_execute',
    example: 'complex_escrow_setup_pending_consent'
  },
  require_modification: {
    meaning: 'product_must_change_before_release',
    example: 'weak_disclosure_or_missing_refund_path'
  },
  human_review_required: {
    meaning: 'must_be_reviewed_before_execution',
    example: 'multi_party_regulated_flow'
  },
  private_live: {
    meaning: 'only_requesting_user_can_use_it',
    example: 'personal_savings_capsule'
  },
  guarded_live: {
    meaning: 'live_with_caps_monitors_and_limits',
    example: 'escrow_with_gps_photo_evidence'
  },
  limited_public_release: {
    meaning: 'small_controlled_rollout',
    example: 'new_group_savings_template'
  },
  full_live: {
    meaning: 'can_operate_normally',
    example: 'low_risk_well_tested_capability'
  },
  marketplace_eligible: {
    meaning: 'can_be_published_as_reusable_template',
    example: 'approved_capability_with_strong_test_history'
  },
  quarantined: {
    meaning: 'previously_live_but_paused_due_to_issue',
    example: 'runtime_anomaly_detected'
  },
  rollback_required: {
    meaning: 'must_revert_to_previous_version',
    example: 'failed_migration_or_unsafe_update'
  },
  migration_review_required: {
    meaning: 'ledger_or_state_update_needs_explicit_migration_review',
    example: 'product_update_changes_money_state_rules'
  }
})

export const RELEASE_CLASSIFIER_POSITION = Object.freeze({
  after: [
    'product_composer',
    'capability_contract_builder',
    'ledger_state_machine_system',
    'ui_ux_composer',
    'simulation_lab',
    'auto_test_factory',
    'compliance_tagging_engine',
    'risk_composition_engine'
  ],
  before: [
    'runtime_execution_engine',
    'marketplace',
    'human_ops_review',
    'watchtower_deployment'
  ],
  flow: [
    'product_composer',
    'capability_contract_builder',
    'simulation_tests_risk_compliance',
    'release_mode_classifier',
    'release_decision',
    'human_review_or_runtime_or_marketplace_or_block'
  ]
})

export const RELEASE_CLASSIFIER_INPUTS = Object.freeze([
  'capability_contract',
  'capability_graph',
  'product_spec',
  'risk_score',
  'compliance_tags',
  'simulation_results',
  'test_coverage',
  'ledger_validation',
  'consent_coverage',
  'ux_safety_score',
  'persona_impact',
  'novelty_score',
  'reversibility',
  'monetary_exposure',
  'multi_party_impact',
  'data_sensitivity',
  'human_review_history',
  'runtime_history'
])

export const RELEASE_RISK_DIMENSIONS = Object.freeze({
  financial_harm_risk: 'can_the_user_lose_money',
  regulatory_risk: 'is_this_product_regulated',
  fraud_risk: 'can_this_be_abused',
  user_harm_risk: 'can_it_pressure_confuse_or_exploit_users',
  ledger_risk: 'can_money_states_become_inconsistent',
  operational_risk: 'can_it_fail_in_real_world_workflows',
  identity_risk: 'does_it_depend_on_uncertain_identity_or_entity_claims',
  evidence_risk: 'does_it_rely_on_weak_proof',
  data_privacy_risk: 'does_it_use_sensitive_information',
  ux_risk: 'is_consent_unclear_or_friction_manipulative',
  novelty_risk: 'has_this_combination_been_tested_before',
  reversibility_risk: 'can_errors_be_undone',
  scale_risk: 'what_happens_if_many_users_adopt_it',
  jurisdiction_risk: 'are_rules_different_by_location'
})

export const RELEASE_READINESS_SCORE_COMPONENTS = Object.freeze({
  positive: {
    test_confidence: 0.12,
    simulation_confidence: 0.12,
    ledger_validity: 0.14,
    consent_completeness: 0.1,
    compliance_clearance: 0.12,
    operational_maturity: 0.1,
    prior_safe_usage: 0.08
  },
  negative: {
    financial_harm_risk: 0.08,
    fraud_risk: 0.08,
    regulatory_risk: 0.08,
    novelty_risk: 0.06,
    ledger_risk: 0.06,
    user_harm_risk: 0.05,
    data_privacy_risk: 0.04,
    reversibility_risk: 0.03
  }
})

export const RELEASE_GATED_RULES = Object.freeze([
  {
    id: 'credit_without_clearance',
    when: 'compliance_tag_credit_and_no_compliance_clearance',
    releaseMode: 'human_review_required_or_blocked'
  },
  {
    id: 'ledger_validation_failed',
    when: 'ledger_validation_fails',
    releaseMode: 'blocked'
  },
  {
    id: 'critical_simulation_failure',
    when: 'simulation_fails_critical_failure_path',
    releaseMode: 'simulation_only_or_blocked'
  },
  {
    id: 'high_user_harm_weak_disclosure',
    when: 'user_harm_risk_high_and_disclosure_weak',
    releaseMode: 'require_modification'
  },
  {
    id: 'low_risk_reversible_tested',
    when: 'low_risk_personal_reversible_fully_tested',
    releaseMode: 'private_live_or_full_live'
  }
])

export const RELEASE_DECISION_MATRIX = Object.freeze({
  personal_low_risk_reminder_no_money_movement: 'full_live',
  personal_savings_goal_tested_reversible: 'private_live',
  personal_savings_goal_with_hard_lock: 'private_live_with_stronger_consent',
  safesend_verified_known_recipient: 'full_live',
  safesend_new_recipient_large_amount: 'guarded_live_or_human_review',
  escrow_with_gps_photo_evidence: 'guarded_live',
  multi_party_group_savings: 'human_review_or_guarded_live',
  susu_circle_with_payout_risk_model: 'human_review_required',
  credit_like_product: 'human_review_required_or_blocked',
  investment_like_product: 'blocked_unless_licensed_or_compliance_approved',
  failed_ledger_validation: 'blocked',
  incomplete_consent: 'private_draft_or_require_modification',
  novel_primitive_combination: 'internal_sandbox_or_human_review',
  marketplace_template: 'human_review_required',
  runtime_anomaly_detected: 'quarantine',
  product_update_changes_ledger_rules: 'migration_review_required'
})

export const RELEASE_DECISION_OBJECT_FIELDS = Object.freeze([
  'release_decision_id',
  'capability_id',
  'recommended_release_mode',
  'confidence',
  'risk_summary',
  'blocking_issues',
  'required_guards',
  'release_limits',
  'human_review',
  'watchtower_policy',
  'explanation'
])

export const RELEASE_DECISION_EXAMPLE = Object.freeze({
  release_decision_id: 'rel_88392',
  capability_id: 'cap_4421',
  recommended_release_mode: 'guarded_live',
  confidence: 'high',
  risk_summary: {
    overall_risk: 62,
    financial_harm_risk: 55,
    fraud_risk: 48,
    regulatory_risk: 30,
    ledger_risk: 10,
    ux_harm_risk: 25,
    novelty_risk: 40
  },
  blocking_issues: [],
  required_guards: [
    'transaction_cap',
    'recipient_verification',
    'cooling_period_for_new_recipient',
    'runtime_anomaly_monitor',
    'clear_refund_disclosure'
  ],
  release_limits: {
    max_transaction_amount: 500,
    max_monthly_volume: 5000,
    allowed_users: 'requesting_user_only',
    marketplace_publishable: false
  },
  human_review: {
    required: false,
    review_if_threshold_exceeded: true,
    thresholds: ['transaction_above_500', 'recipient_unverified', 'evidence_mismatch']
  },
  watchtower_policy: {
    monitoring_level: 'elevated',
    auto_quarantine_on_anomaly: true
  },
  explanation: 'Capability may run in guarded live mode because ledger validation passed, consent is complete, and risk is moderate. Limits are required because the product includes conditional money release.'
})

export const RELEASE_LIFECYCLE_STATE_MACHINE = Object.freeze({
  states: [
    'draft',
    'validated',
    'simulated',
    'classified',
    'clarification_required',
    'blocked',
    'simulation_only',
    'internal_sandbox',
    'private_draft',
    'require_modification',
    'review_required',
    'private_live',
    'guarded_live',
    'limited_public_release',
    'full_live',
    'marketplace_eligible',
    'runtime_monitoring',
    'promoted',
    'limited',
    'quarantined',
    'rolled_back',
    'migration_review_required',
    'deprecated',
    'retired'
  ],
  transitions: {
    draft: ['validated'],
    validated: ['simulated'],
    simulated: ['classified'],
    classified: [
      'clarification_required',
      'blocked',
      'simulation_only',
      'internal_sandbox',
      'private_draft',
      'require_modification',
      'review_required',
      'private_live',
      'guarded_live',
      'limited_public_release',
      'full_live',
      'migration_review_required'
    ],
    clarification_required: ['draft', 'require_modification'],
    internal_sandbox: ['simulated', 'classified'],
    private_draft: ['validated', 'require_modification'],
    require_modification: ['draft', 'validated'],
    review_required: ['private_live', 'guarded_live', 'blocked', 'simulation_only', 'require_modification'],
    private_live: ['runtime_monitoring'],
    guarded_live: ['runtime_monitoring'],
    limited_public_release: ['runtime_monitoring', 'full_live', 'limited'],
    full_live: ['runtime_monitoring', 'marketplace_eligible'],
    marketplace_eligible: ['runtime_monitoring'],
    runtime_monitoring: ['promoted', 'limited', 'quarantined', 'rolled_back', 'migration_review_required', 'deprecated', 'retired'],
    migration_review_required: ['classified', 'rolled_back'],
    quarantined: ['rolled_back', 'limited', 'retired']
  }
})

export const RELEASE_GUARDS = Object.freeze({
  transaction_cap: 'limits_financial_exposure',
  volume_cap: 'limits_total_system_exposure',
  user_cap: 'restricts_rollout_size',
  geography_cap: 'limits_to_approved_jurisdiction',
  persona_cap: 'prevents_use_by_unsuitable_users',
  time_cap: 'temporary_trial_period',
  consent_guard: 'requires_additional_consent',
  evidence_guard: 'requires_proof_before_release',
  cooling_period_guard: 'delays_high_risk_action',
  human_approval_guard: 'requires_manual_approval',
  watchtower_guard: 'monitors_runtime_anomalies',
  auto_refund_guard: 'ensures_recovery_path',
  quarantine_guard: 'pauses_product_on_anomaly',
  rollback_guard: 'reverts_unsafe_version',
  marketplace_block: 'prevents_public_template_use',
  recipient_verification: 'verifies_the_receiving_party_before_release',
  cooling_period_for_new_recipient: 'delays_first_transfer_to_new_recipient',
  runtime_anomaly_monitor: 'monitors_live_behaviour_for_unexpected_patterns',
  clear_claim_window: 'makes_claim_deadline_visible_and_enforceable',
  refund_path: 'defines_how_money_returns_when_release_conditions_fail',
  photo_evidence_rule: 'defines_what_photo_proof_must_show',
  optional_gps_metadata: 'uses_location_metadata_only_when_supported_and_consented',
  dispute_fallback: 'routes_conflicts_to_repair_or_review',
  clear_refund_disclosure: 'explains_refund_conditions_before_execution',
  ledger_simulation_guard: 'requires_pot_payout_default_and_refund_simulation',
  payout_rules_guard: 'makes_multi_party_payout_order_transparent',
  consent_coverage_guard: 'requires_all_affected_parties_to_agree',
  strong_consent_guard: 'requires_explicit_consent_for_strict_or_irreversible_limits',
  emergency_policy_guard: 'defines_safe_emergency_exception_path',
  ux_warning_guard: 'makes_lock_or_restriction_consequences_visible',
  spending_category_limit: 'limits_spending_to_allowed_categories',
  unusual_transfer_monitor: 'flags_large_or_unusual_transfer_attempts',
  trusted_recipient_list: 'allows_only_approved_recipients_by_default',
  elder_fraud_monitor: 'adds_vulnerable_user_fraud_protection',
  emergency_override_path: 'allows_recovery_when_restrictions_create_harm',
  audit_ledger_guard: 'records_restriction_changes_and_exception_decisions'
})

export const SAFESEND_RELEASE_EXAMPLE = Object.freeze({
  request: 'send_money_claim_after_picture_proving_delivery',
  detected: ['money_movement', 'conditional_release', 'photo_evidence_required', 'external_recipient', 'moderate_risk'],
  recommended_release: 'guarded_live',
  required_guards: [
    'recipient_verification',
    'clear_claim_window',
    'refund_path',
    'photo_evidence_rule',
    'optional_gps_metadata',
    'dispute_fallback'
  ]
})

export const SUSU_RELEASE_EXAMPLE = Object.freeze({
  request: 'ten_people_contribute_weekly_one_person_takes_pot_each_week',
  detected: ['multi_party_funds', 'payout_order', 'default_risk', 'social_trust_dependency', 'possible_regulated_pooling', 'obligations', 'disputes'],
  requirements: [
    'human_review',
    'ledger_simulation',
    'consent_coverage',
    'risk_model',
    'transparent_payout_rules',
    'dispute_policy',
    'exposure_caps',
    'watchtower_missed_contribution_monitor'
  ],
  release_mode: 'human_review_required_or_guarded_live_after_approval'
})

export const PERSONAL_SAVINGS_GOAL_RELEASE_EXAMPLE = Object.freeze({
  request: 'help_me_save_1000_for_rent_by_end_of_next_month',
  detected: ['personal_goal', 'no_multi_party_exposure', 'low_regulatory_risk', 'clear_deadline'],
  default_release_mode: 'private_live',
  hard_lock_additions: [
    'strong_consent_guard',
    'emergency_policy_guard',
    'ux_warning_guard',
    'private_live_with_guard'
  ]
})

export const CREDIT_LIKE_RELEASE_EXAMPLE = Object.freeze({
  request: 'wallet_where_people_borrow_and_pay_back_with_interest',
  detected: ['credit_lending', 'interest', 'multi_party', 'regulated_risk', 'consumer_harm_risk'],
  release_mode: 'human_review_required_or_blocked_unless_licensed_or_compliance_approved',
  safer_alternatives: [
    'interest_free_aid_pool',
    'contribution_based_emergency_wallet',
    'escrow_backed_repayment_tracker',
    'family_support_wallet_without_interest'
  ]
})

export const PERSONALIZED_RELEASE_OPS_END_TO_END_FLOW = Object.freeze([
  { step: 'user_request', outputs: ['natural_language_goal'] },
  { step: 'intent_interpreter', outputs: ['goal', 'actors', 'money_movement', 'conditions', 'rules', 'constraints', 'risks'] },
  { step: 'personality_aware_product_defaults', outputs: ['deposit_defaults', 'ux_defaults', 'consent_defaults', 'safety_defaults', 'automation_level', 'review_thresholds'] },
  { step: 'product_composer', outputs: ['atoms', 'mini_primitives', 'primitives', 'capability_graph', 'ledger_state_machine', 'ui_contract'] },
  { step: 'simulation_lab', outputs: ['normal_path', 'failure_path', 'fraud_path', 'edge_cases', 'disputes', 'stress_scenarios'] },
  { step: 'release_mode_classifier', outputs: ['blocked', 'simulation_only', 'review_required', 'private_live', 'guarded_live', 'full_live', 'marketplace_eligible'] },
  { step: 'human_ops_review', outputs: ['risky', 'novel', 'regulated', 'unclear', 'disputed', 'high_impact_cases'] },
  { step: 'runtime_watchtower', outputs: ['anomalies', 'unsafe_behaviour', 'user_harm_signals', 'compliance_drift', 'ledger_mismatches'] },
  { step: 'outcome_learning', outputs: ['future_defaults', 'risk_scoring', 'release_decisions', 'human_review_routing'] }
])

export const CONTROLLED_FAMILY_SUPPORT_WALLET_EXAMPLE = Object.freeze({
  request: 'send_elderly_mother_weekly_money_limited_to_food_medicine_transport_and_block_strangers',
  intent: {
    capability_type: 'controlled_family_support_wallet',
    actors: ['sender', 'elderly_recipient'],
    money_movement: true,
    restrictions: ['merchant_category_controls', 'trusted_recipient_controls'],
    risk: 'vulnerable_user_protection'
  },
  defaults: {
    ux: ['large_buttons', 'simple_screens'],
    transfers: ['block_new_unknown_recipients_by_default'],
    spending: ['food', 'medicine', 'transport'],
    consent: ['recipient_must_understand_restrictions'],
    alerts: ['sender_gets_unusual_activity_alerts'],
    fraud: ['high_protection'],
    emergency: ['emergency_override_path'],
    review: ['human_review_if_large_unusual_transfer_attempted']
  },
  composer_components: [
    'family_support_wallet',
    'category_controls',
    'trusted_recipient_list',
    'safesend_guard',
    'elder_fraud_monitor',
    'emergency_override',
    'audit_ledger'
  ],
  release_mode: 'guarded_live',
  required_guards: [
    'recipient_verification',
    'spending_category_limit',
    'unusual_transfer_monitor',
    'consent_guard',
    'cooling_period_guard'
  ],
  human_ops_triggers: [
    'large_amount_to_new_recipient',
    'suspicious_new_recipient',
    'restriction_dispute',
    'consent_challenge'
  ]
})

export const CANONICAL_THREE_SYSTEM_RELATIONSHIP = Object.freeze({
  personality_aware_defaults: 'personal_fit',
  release_mode_classifier: 'deployment_safety',
  human_ops_review: 'accountable_governance'
})

export const DEFAULT_MANIFEST_TO_RELEASE_CONTRACT_EXAMPLE = Object.freeze({
  persona_risk_flags: ['elderly_user', 'low_tech_comfort'],
  default_safety_controls: ['cooling_period', 'recipient_verification'],
  automation_level: 'low',
  consent_depth: 'enhanced',
  release_effect: 'guarded_live_with_extra_monitoring_for_new_recipient_transfer'
})

export const RELEASE_CLASSIFIER_TO_HUMAN_OPS_CONTRACT_EXAMPLE = Object.freeze({
  release_mode: 'human_review_required',
  review_case_type: 'compliance_review',
  review_reasons: [
    'credit_like_behaviour',
    'interest_applied',
    'multi_party_repayment_obligation'
  ]
})

export const HUMAN_OPS_TO_PRODUCT_COMPOSER_CHANGE_REQUEST_EXAMPLE = Object.freeze({
  decision: 'require_modification',
  required_changes: [
    'remove_interest_bearing_repayment',
    'add_plain_language_fee_disclosure',
    'add_dispute_resolution_path',
    'reduce_max_contribution_limit'
  ]
})

export const HUMAN_OPS_TO_LEARNING_ENGINE_MEMORY_EXAMPLE = Object.freeze({
  case_outcome: 'blocked',
  reason: 'unlicensed_credit_like_product',
  future_policy_update: {
    similar_patterns: 'route_to_compliance_review',
    safe_alternative: 'interest_free_support_pool'
  }
})

export const PERSONALIZED_RELEASE_SERVICE_BOUNDARIES = Object.freeze({
  persona_defaults_service: 'generates_default_manifest',
  release_classifier_service: 'determines_release_mode',
  human_ops_service: 'manages_review_cases',
  policy_engine: 'applies_governance_rules',
  simulation_service: 'provides_test_and_simulation_evidence',
  risk_engine: 'provides_risk_scores',
  compliance_engine: 'provides_compliance_tags',
  capability_registry: 'stores_capability_versions',
  audit_ledger_service: 'stores_all_decisions_immutably',
  watchtower_service: 'runtime_monitoring_and_quarantine'
})

export const PERSONALIZED_RELEASE_KEY_DATA_OBJECTS = Object.freeze({
  persona_profile: 'user_context_and_behaviour',
  default_manifest: 'product_defaults_selected_for_user',
  capability_contract: 'what_the_generated_product_does',
  capability_graph: 'component_structure',
  risk_report: 'risk_scores_and_explanations',
  simulation_report: 'test_and_stress_results',
  release_decision: 'release_mode_and_guards',
  review_case: 'human_review_workflow',
  review_decision: 'human_final_decision',
  watchtower_policy: 'runtime_monitoring_rules',
  outcome_report: 'what_happened_after_release'
})

export const PERSONALIZED_RELEASE_STORAGE_REQUIREMENTS = Object.freeze({
  defaults_applied: 'explain_why_product_behaved_a_certain_way',
  defaults_rejected: 'show_safety_reasoning',
  release_decision: 'audit_deployment',
  release_guards: 'enforce_runtime_limits',
  human_review_case: 'accountability',
  human_decision: 'governance_evidence',
  product_version: 'reproducibility',
  simulation_results: 'safety_proof',
  runtime_anomalies: 'future_improvement',
  user_overrides: 'learn_preferences_and_detect_risk'
})

export const PERSONALITY_DEFAULT_FAILURE_MODES = Object.freeze({
  wrong_persona_inference: 'use_confidence_scoring_and_ask_clarifying_questions',
  discriminatory_default: 'bias_tests_and_fairness_constraints',
  over_automation: 'require_explicit_consent_for_money_movement',
  user_confusion: 'explain_defaults_clearly',
  harmful_lock: 'emergency_and_override_policy',
  manipulative_nudges: 'dark_pattern_detector',
  too_many_assumptions: 'default_only_where_confidence_is_sufficient'
})

export const HUMAN_OPS_FAILURE_MODES = Object.freeze({
  reviewer_inconsistency: 'policy_playbooks_and_structured_decisions',
  slow_review: 'priority_queues_and_risk_routing',
  missing_evidence: 'required_evidence_package',
  reviewer_overreach: 'permission_boundaries',
  poor_auditability: 'immutable_decision_logs',
  no_learning_loop: 'outcome_feedback_engine',
  human_bias: 'dual_review_for_sensitive_cases',
  case_overload: 'better_classifier_thresholds_and_automation'
})

export const RELEASE_CLASSIFIER_FAILURE_MODES = Object.freeze({
  unsafe_product_released: 'gated_rules_not_only_score',
  too_many_products_blocked: 'safe_alternative_generation',
  marketplace_polluted: 'marketplace_review_requirement',
  novel_composition_missed: 'novelty_scoring',
  runtime_drift: 'watchtower_monitoring',
  bad_update_breaks_live_product: 'migration_validation_and_rollback',
  jurisdiction_mismatch: 'jurisdiction_aware_compliance_tagging',
  weak_consent_ignored: 'consent_coverage_checker'
})

export const AURA_GRADE_COMPONENT_STANDARDS = Object.freeze({
  personality_aware_product_defaults: [
    'state_user_needs_simpler_safer_or_more_flexible_capability',
    'show_defaults',
    'explain_why_defaults_were_chosen',
    'state_user_override_permissions',
    'state_unsafe_overrides_that_are_blocked'
  ],
  human_ops_review: [
    'state_why_human_judgment_is_required',
    'show_full_evidence',
    'list_allowed_decisions',
    'show_policies_involved',
    'show_audit_trail',
    'show_learning_effect'
  ],
  release_mode_classifier: [
    'assign_release_mode_not_binary_approval',
    'attach_guards',
    'attach_limits',
    'define_promotion_quarantine_and_rollback_rules'
  ]
})

export const FINAL_CANONICAL_DEFINITIONS = Object.freeze({
  personality_aware_product_defaults: {
    definition: 'personalization_and_safety_default_engine_for_generated_capabilities',
    controls: ['financial_defaults', 'ux_defaults', 'automation_defaults', 'consent_defaults', 'communication_defaults', 'risk_defaults', 'privacy_defaults', 'review_defaults', 'monitoring_defaults']
  },
  human_ops_review_system: {
    definition: 'structured_human_judgment_layer_for_risky_regulated_ambiguous_disputed_novel_or_high_impact_decisions',
    controls: ['review_routing', 'case_creation', 'evidence_packaging', 'reviewer_assignment', 'decision_logging', 'policy_enforcement', 'escalation', 'release_approvals', 'dispute_resolution', 'governance_learning']
  },
  release_mode_classifier: {
    definition: 'deployment_intelligence_engine_for_release_mode_guards_limits_review_marketplace_monitoring_promotion_rollback_and_quarantine',
    controls: ['release_mode', 'release_limits', 'runtime_guards', 'human_review_requirements', 'marketplace_eligibility', 'monitoring_level', 'promotion_rules', 'rollback_rules', 'quarantine_triggers']
  }
})

export const GOVERNED_FINANCIAL_OS_CAPABILITIES = Object.freeze([
  'understand_who_this_is_for',
  'understand_risk_of_what_is_created',
  'configure_it_safely',
  'know_whether_it_can_go_live',
  'know_when_human_must_intervene',
  'monitor_after_release',
  'learn_from_what_happens'
])

function normalizeKey(value = '') {
  return String(value).trim().toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')
}

function firstPresent(values = [], fallback) {
  return values.find((value) => value !== undefined && value !== null && value !== '') ?? fallback
}

function clamp01(value) {
  const number = Number(value)
  if (!Number.isFinite(number)) return 0
  return Math.max(0, Math.min(1, number))
}

function riskFraction(value) {
  const number = Number(value)
  if (!Number.isFinite(number)) return 0
  return clamp01(number > 1 ? number / 100 : number)
}

function normalizeList(values = []) {
  return (Array.isArray(values) ? values : [values]).filter(Boolean).map(normalizeKey)
}

function includesAny(values = [], candidates = []) {
  const normalized = new Set(normalizeList(values))
  return candidates.some((candidate) => normalized.has(normalizeKey(candidate)))
}

function unique(values = []) {
  return [...new Set(values.filter(Boolean))]
}

function isWeakDisclosure(value) {
  if (typeof value === 'number') return value < 0.5
  const normalized = normalizeKey(value)
  return ['', 'weak', 'unclear', 'incomplete', 'hidden', 'confusing', 'not_present'].includes(normalized)
}

function lifecycleStateForReleaseMode(mode = '') {
  const normalized = normalizeKey(mode)
  const stateAliases = {
    human_review_required: 'review_required',
    guarded_live_after_approval: 'guarded_live',
    full_live_after_approval: 'full_live',
    quarantine: 'quarantined',
    rollback_required: 'rolled_back'
  }
  return stateAliases[normalized] ?? normalized
}

export function classifyDefaultPersona(context = {}) {
  const ageBand = normalizeKey(context.age_band ?? context.ageBand)
  const familyRole = normalizeKey(context.family_role ?? context.familyRole)
  const profession = normalizeKey(context.profession)
  const incomePattern = normalizeKey(context.income_pattern ?? context.incomePattern)
  const riskSignals = new Set((context.behavioural_signals ?? context.behavioralSignals ?? []).map(normalizeKey))

  if (ageBand === 'elderly' || context.accessibility_needs?.length) return 'elderly_user'
  if (familyRole === 'parent' || riskSignals.has('uses_family_related_goals')) return 'parent'
  if (profession === 'student' || ageBand === 'teen') return 'student'
  if (['trader', 'market_trader', 'market_woman', 'driver'].includes(profession) || ['daily', 'weekly', 'irregular', 'seasonal'].includes(incomePattern)) {
    return 'market_trader'
  }
  if (['business_owner', 'founder', 'merchant'].includes(profession)) return 'business_owner'
  if (riskSignals.has('often_withdraws_early') || normalizeKey(context.risk_tolerance ?? context.riskTolerance) === 'low_self_control') return 'high_risk_spender'
  return 'salaried_worker'
}

export function validatePersonalityDefaultEthics({
  defaults = {},
  context = {},
  explicitConsent = false,
  feeChangeReason,
  inferredSensitiveTraits = [],
  safeOverrideAvailable = true
} = {}) {
  const issues = []
  const userLiterate = ['beginner', 'low'].includes(normalizeKey(context.financial_literacy ?? context.financialLiteracy))

  if (defaults.increasesBorrowing || defaults.increasesSpending || defaults.increasesInvestingRisk) {
    issues.push('manipulate_financial_behavior')
  }
  if (defaults.hideRiskDisclosure || defaults.reduceRiskWarnings) issues.push('hide_risk_using_personality')
  if (defaults.feeMultiplier > 1 && userLiterate && !feeChangeReason) issues.push('increase_fees_for_low_literacy')
  if (defaults.irreversibleAction && !explicitConsent) issues.push('irreversible_decision_without_explicit_consent')
  if (inferredSensitiveTraits.length > 0 && !explicitConsent) issues.push('reckless_sensitive_trait_inference')
  if (defaults.demographicDeterministic === true) issues.push('demographic_group_as_destiny')
  if (!safeOverrideAvailable) issues.push('strict_defaults_without_safe_override')

  return {
    valid: issues.length === 0,
    issues,
    forbiddenBehaviors: PERSONALITY_DEFAULT_FORBIDDEN_BEHAVIORS,
    principle: PERSONALITY_DEFAULT_ETHICAL_PRINCIPLE,
    releaseBlocked: issues.length > 0
  }
}

export function classifyDefaultConfidence(score = 0, unsafe = false) {
  if (unsafe) return 'unsafe'
  const normalized = clamp01(score)
  if (normalized >= DEFAULT_CONFIDENCE_LEVELS.high.threshold) return 'high'
  if (normalized >= DEFAULT_CONFIDENCE_LEVELS.medium.threshold) return 'medium'
  if (normalized >= DEFAULT_CONFIDENCE_LEVELS.low.threshold) return 'low'
  return 'unsafe'
}

export function scoreDefaultSuitability({
  personaFit = 0.5,
  capabilityFit = 0.5,
  behaviouralFit = 0.5,
  safetyFit = 0.5,
  jurisdictionFit = 0.5,
  pastOutcomeFit = 0.5,
  harmRisk = 0,
  complexityBurden = 0
} = {}) {
  const weighted = (
    clamp01(personaFit) * DEFAULT_SELECTION_SCORE_COMPONENTS.persona_fit
    + clamp01(capabilityFit) * DEFAULT_SELECTION_SCORE_COMPONENTS.capability_fit
    + clamp01(behaviouralFit) * DEFAULT_SELECTION_SCORE_COMPONENTS.behavioural_fit
    + clamp01(safetyFit) * DEFAULT_SELECTION_SCORE_COMPONENTS.safety_fit
    + clamp01(jurisdictionFit) * DEFAULT_SELECTION_SCORE_COMPONENTS.jurisdiction_fit
    + clamp01(pastOutcomeFit) * DEFAULT_SELECTION_SCORE_COMPONENTS.past_outcome_fit
    + clamp01(harmRisk) * DEFAULT_SELECTION_SCORE_COMPONENTS.harm_risk
    + clamp01(complexityBurden) * DEFAULT_SELECTION_SCORE_COMPONENTS.complexity_burden
  )
  const normalized = clamp01(weighted / 0.88)
  const unsafe = harmRisk >= 0.8 || safetyFit < 0.25
  const confidence = classifyDefaultConfidence(normalized, unsafe)

  return {
    score: Number(normalized.toFixed(3)),
    confidence,
    confidenceAction: DEFAULT_CONFIDENCE_LEVELS[confidence].action,
    components: {
      personaFit,
      capabilityFit,
      behaviouralFit,
      safetyFit,
      jurisdictionFit,
      pastOutcomeFit,
      harmRisk,
      complexityBurden
    },
    weights: DEFAULT_SELECTION_SCORE_COMPONENTS,
    applyDefault: ['high', 'medium'].includes(confidence),
    askClarifyingQuestion: confidence === 'low',
    blockDefault: confidence === 'unsafe'
  }
}

export function validateProductDefaultProfile(profile = {}) {
  const missing = PRODUCT_DEFAULT_PROFILE_FIELDS.filter((field) => profile[field] === undefined)
  const issues = [...missing.map((field) => `missing_${field}`)]

  if (profile.override_policy?.user_can_override !== true) issues.push('override_policy_missing_user_agency')
  if (profile.override_policy?.unsafe_override_blocked !== true) issues.push('unsafe_override_not_blocked')
  if (profile.override_policy?.override_requires_disclosure !== true) issues.push('override_disclosure_missing')
  if (profile.capability_context?.money_movement && !profile.safety_defaults) issues.push('money_movement_missing_safety_defaults')
  if (profile.capability_context?.multi_party && !profile.human_review_defaults) issues.push('multi_party_missing_review_defaults')

  return {
    valid: issues.length === 0,
    issues,
    fields: PRODUCT_DEFAULT_PROFILE_FIELDS,
    releaseBlocked: issues.some((issue) => (
      issue.includes('missing')
      || issue.includes('unsafe')
      || issue.includes('money_movement')
      || issue.includes('multi_party')
    ))
  }
}

export function buildProductDefaultProfile({
  request = '',
  context = {},
  capabilityContext = {},
  explicitUserPreferences = {},
  explicitConsent = false,
  suitabilitySignals = {}
} = {}) {
  const defaultsReview = derivePersonalityAwareDefaults({
    request,
    context,
    productType: capabilityContext.capability_type ?? capabilityContext.capabilityType ?? 'goal_savings',
    explicitUserPreferences,
    explicitConsent
  })
  const productType = normalizeKey(capabilityContext.capability_type ?? capabilityContext.capabilityType ?? 'savings_goal')
  const contextAreas = PERSONALITY_PRODUCT_CONTEXT_DEFAULT_AREAS[productType] ?? PERSONALITY_PRODUCT_CONTEXT_DEFAULT_AREAS.savings_goal
  const score = scoreDefaultSuitability({
    personaFit: suitabilitySignals.personaFit ?? (defaultsReview.persona === 'market_trader' || defaultsReview.persona === 'parent' ? 0.88 : 0.7),
    capabilityFit: suitabilitySignals.capabilityFit ?? 0.84,
    behaviouralFit: suitabilitySignals.behaviouralFit ?? (context.income_pattern === 'monthly' && defaultsReview.defaults.schedule.includes('daily') ? 0.35 : 0.78),
    safetyFit: suitabilitySignals.safetyFit ?? (defaultsReview.ethicsReview.valid ? 0.82 : 0.2),
    jurisdictionFit: suitabilitySignals.jurisdictionFit ?? (capabilityContext.jurisdiction ? 0.72 : 0.52),
    pastOutcomeFit: suitabilitySignals.pastOutcomeFit ?? 0.56,
    harmRisk: suitabilitySignals.harmRisk ?? (defaultsReview.ethicsReview.releaseBlocked ? 0.9 : 0.18),
    complexityBurden: suitabilitySignals.complexityBurden ?? (defaultsReview.defaults.ux === 'short_guided_setup' ? 0.2 : 0.35)
  })
  const lockLevel = defaultsReview.defaults.lockStrength === 'soft' ? 'soft_lock' : defaultsReview.defaults.lockStrength
  const profile = {
    default_profile_id: `pdp_${defaultsReview.persona}_${productType}`,
    user_segment: Object.fromEntries(PERSONALITY_DEFAULT_CONTEXT_FIELDS.map((field) => [field, context[field] ?? context[field.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())]])),
    capability_context: {
      capability_type: productType,
      risk_level: capabilityContext.risk_level ?? capabilityContext.riskLevel ?? 'medium',
      jurisdiction: capabilityContext.jurisdiction,
      money_movement: capabilityContext.money_movement ?? capabilityContext.moneyMovement ?? true,
      multi_party: capabilityContext.multi_party ?? capabilityContext.multiParty ?? false,
      default_areas: contextAreas
    },
    financial_defaults: {
      deposit_frequency: defaultsReview.defaults.schedule,
      minimum_recommended_deposit: explicitUserPreferences.minimumRecommendedDeposit ?? 20,
      currency: explicitUserPreferences.currency ?? capabilityContext.currency ?? 'GHS',
      lock_level: lockLevel,
      emergency_withdrawal_allowed: defaultsReview.persona !== 'student' && defaultsReview.defaults.lockStrength !== 'strong_without_emergency',
      missed_deposit_policy: defaultsReview.persona === 'market_trader' ? 'no_penalty_reminder_only' : 'supportive_reminder_then_review'
    },
    ux_defaults: {
      setup_mode: defaultsReview.defaults.ux === 'short_guided_setup' ? 'guided_conversation' : 'guided_setup',
      show_advanced_settings: defaultsReview.persona === 'business_owner',
      explanation_level: ['elderly_user', 'student'].includes(defaultsReview.persona) ? 'simple_but_complete' : defaultsReview.defaults.explanation,
      visual_style: defaultsReview.persona === 'market_trader' ? 'simple_cards' : 'progress_story',
      confirmation_style: 'summary_card_before_submit'
    },
    safety_defaults: {
      large_withdrawal_cooling_period_hours: defaultsReview.persona === 'elderly_user' ? 24 : 12,
      recipient_verification_required: true,
      unusual_activity_watch: true
    },
    communication_defaults: {
      reminder_tone: defaultsReview.persona === 'student' ? 'encouraging' : 'supportive',
      reminder_frequency: defaultsReview.defaults.reminders,
      missed_payment_message: defaultsReview.persona === 'market_trader' ? 'supportive_cashflow_aware' : 'supportive'
    },
    human_review_defaults: {
      review_required_for_large_withdrawal: ['elderly_user', 'parent'].includes(defaultsReview.persona),
      review_required_for_guardian_change: defaultsReview.persona === 'parent',
      review_required_reason: defaultsReview.defaults.review.reason
    },
    override_policy: {
      user_can_override: true,
      override_requires_disclosure: true,
      unsafe_override_blocked: true
    },
    confidence: {
      default: defaultsReview.defaults.schedule,
      confidence: score.confidence,
      score: score.score,
      action: score.confidenceAction,
      reason: `${defaultsReview.persona}_and_${productType}_context`
    }
  }
  const profileReview = validateProductDefaultProfile(profile)

  return {
    valid: profileReview.valid && defaultsReview.valid && !score.blockDefault,
    profile,
    defaultsReview,
    score,
    profileReview,
    productDefaultDomains: PERSONALITY_DEFAULT_DOMAINS,
    personaExamples: PERSONA_BASED_DEFAULT_EXAMPLES,
    releaseBlocked: profileReview.releaseBlocked || defaultsReview.releaseBlocked || score.blockDefault
  }
}

export function classifyDefaultOverride({
  overrideType,
  action = '',
  actor = {},
  capabilityContext = {},
  disablesVerification = false,
  bypassesCompliance = false,
  anonymousPayout = false
} = {}) {
  const normalizedType = normalizeKey(overrideType || action)
  const actorAge = normalizeKey(actor.age_band ?? actor.ageBand)
  const productType = normalizeKey(capabilityContext.capability_type ?? capabilityContext.capabilityType)
  const largeTransfer = Number(capabilityContext.amount ?? 0) >= Number(capabilityContext.large_transfer_threshold ?? 1000)
  const creditLike = productType.includes('credit') || capabilityContext.credit_like === true || capabilityContext.creditLike === true
  let matchedType = Object.keys(PERSONALITY_OVERRIDE_RULES).find((type) => normalizedType.includes(type.replace('_override', '')))

  if (!matchedType && /tone|reminder|visual|language|summary/.test(normalizedType)) matchedType = 'preference_override'
  if (!matchedType && /frequency|schedule|cadence/.test(normalizedType)) matchedType = 'convenience_override'
  if (!matchedType && (disablesVerification || /disable.*verification|large_transfer/.test(normalizedType))) matchedType = 'risky_override'
  if (!matchedType && (bypassesCompliance || /kyc|regulated|compliance/.test(normalizedType))) matchedType = 'compliance_override'
  if (!matchedType && ((actorAge === 'child' || actorAge === 'teen') && creditLike)) matchedType = 'harmful_override'
  if (!matchedType && (anonymousPayout || /anonymous|unknown_recipient/.test(normalizedType))) matchedType = 'fraud_prone_override'
  matchedType = matchedType ?? 'preference_override'

  const rule = PERSONALITY_OVERRIDE_RULES[matchedType]
  const issues = []
  if (matchedType === 'risky_override' && disablesVerification && largeTransfer) issues.push('large_transfer_verification_cannot_be_disabled_automatically')
  if (matchedType === 'compliance_override' || bypassesCompliance) issues.push('regulated_requirement_cannot_be_overridden')
  if (matchedType === 'harmful_override' || ((actorAge === 'child' || actorAge === 'teen') && creditLike)) issues.push('minor_credit_or_hidden_obligation_blocked')
  if (matchedType === 'fraud_prone_override' || anonymousPayout) issues.push('anonymous_unknown_recipient_payout_requires_block_or_review')

  const decision = issues.some((issue) => issue.includes('cannot') || issue.includes('blocked'))
    ? 'blocked'
    : matchedType === 'fraud_prone_override' || matchedType === 'risky_override'
      ? 'review_required'
      : rule.defaultDecision

  return {
    overrideType: matchedType,
    category: rule.category,
    decision,
    allowed: decision === 'allowed',
    reviewRequired: decision === 'review_required' || decision === 'blocked_or_review',
    blocked: decision === 'blocked',
    issues,
    rule
  }
}

export function deriveExperiencePhysicsDefaults(signals = {}) {
  const normalizedSignals = new Set([
    ...(signals.signals ?? []),
    signals.lowFinancialLiteracy ? 'low_financial_literacy' : undefined,
    signals.highCognitiveLoad ? 'high_cognitive_load' : undefined,
    signals.elderlyUser ? 'elderly_user' : undefined,
    signals.expertUser ? 'expert_user' : undefined,
    signals.repeatedConfusion ? 'repeated_confusion' : undefined,
    signals.highRiskAction ? 'high_risk_action' : undefined,
    signals.lowRiskAction ? 'low_risk_action' : undefined,
    signals.emotionalUrgency ? 'emotional_urgency' : undefined,
    signals.frequentSuccessfulUsage ? 'frequent_successful_usage' : undefined
  ].filter(Boolean).map(normalizeKey))
  const responses = [...new Set([...normalizedSignals].flatMap((signal) => EXPERIENCE_PHYSICS_DEFAULT_RESPONSES[signal] ?? []))]

  return {
    signals: [...normalizedSignals],
    responses,
    setupMode: responses.includes('switch_to_guided_flow') || responses.includes('reduce_jargon') ? 'guided' : 'adaptive',
    friction: responses.includes('increase_friction') || responses.includes('slow_down_irreversible_action')
      ? 'increased'
      : responses.includes('reduce_friction') || responses.includes('allow_shortcut_mode')
        ? 'reduced'
        : 'normal',
    decisionDensity: responses.includes('fewer_decisions_per_screen') ? 'low' : 'standard'
  }
}

export function deriveRentLockFinancialDefaults({
  previouslyWithdrewEarly = false,
  rentDeadlineDays = 30,
  incomePattern = 'monthly',
  missingRentHarm = 'high',
  availableAfterEssentials = 0
} = {}) {
  const deadlineNear = Number(rentDeadlineDays) <= 14
  const highHarm = normalizeKey(missingRentHarm) === 'high'
  const hardLockRecommended = previouslyWithdrewEarly && deadlineNear && normalizeKey(incomePattern).includes('monthly') && highHarm
  const protectedAmountLimit = Math.max(0, Number(availableAfterEssentials) || 0)

  return {
    recommended: hardLockRecommended,
    context: RENT_LOCK_FINANCIAL_PHYSICS_DEFAULTS.detected_context,
    defaults: {
      ...RENT_LOCK_FINANCIAL_PHYSICS_DEFAULTS.defaults,
      lock_type: hardLockRecommended ? 'hard_lock_until_rent_date' : 'soft_lock_with_warning',
      overdraw_protection: protectedAmountLimit > 0 ? 'cap_lock_to_money_left_after_essentials' : 'ask_for_food_and_transport_floor',
      max_auto_lock_amount: protectedAmountLimit
    },
    financialRulesChanged: true,
    marketplaceReleaseAllowed: false
  }
}

export function validateDefaultManifest(manifest = {}) {
  const missing = DEFAULT_MANIFEST_FIELDS.filter((field) => manifest[field] === undefined)
  const issues = [...missing.map((field) => `missing_${field}`)]

  if (manifest.persona_basis?.excluded_sensitive_inferences?.length === 0) issues.push('sensitive_inference_exclusions_not_recorded')
  if ((manifest.defaults_applied ?? []).some((item) => item.confidence === 'unsafe')) issues.push('unsafe_default_applied')
  if ((manifest.defaults_applied ?? []).some((item) => item.user_editable === false && item.requires_disclosure_on_change !== true)) {
    issues.push('non_editable_default_missing_disclosure')
  }
  if ((manifest.defaults_blocked ?? []).some((item) => !item.reason)) issues.push('blocked_default_missing_reason')

  return {
    valid: issues.length === 0,
    issues,
    fields: DEFAULT_MANIFEST_FIELDS,
    releaseBlocked: issues.some((issue) => issue.includes('missing') || issue.includes('unsafe'))
  }
}

export function buildDefaultManifest({
  capabilityId = 'capability_draft',
  profileResult,
  explicitBasis = [],
  inferredBasis = [],
  excludedSensitiveInferences = ['health_status', 'ethnicity'],
  blockedDefaults = [],
  requiredQuestions = []
} = {}) {
  const profile = profileResult?.profile ?? PRODUCT_DEFAULT_PROFILE_EXAMPLE
  const confidence = profile.confidence?.confidence ?? 'medium'
  const manifest = {
    capability_id: capabilityId,
    default_manifest_version: '1.0',
    persona_basis: {
      explicit: explicitBasis,
      inferred: inferredBasis,
      excluded_sensitive_inferences: excludedSensitiveInferences
    },
    defaults_applied: [
      {
        domain: 'deposit_schedule',
        value: profile.financial_defaults?.deposit_frequency,
        confidence,
        user_editable: true
      },
      {
        domain: 'withdrawal_rule',
        value: profile.financial_defaults?.lock_level,
        confidence: confidence === 'high' ? 'medium' : confidence,
        user_editable: true,
        requires_disclosure_on_change: true
      }
    ].filter((item) => item.value),
    defaults_blocked: blockedDefaults,
    required_questions: requiredQuestions.length ? requiredQuestions : profileResult?.defaultsReview?.clarifyingQuestions ?? [],
    explanation: `AURA selected ${profile.financial_defaults?.deposit_frequency?.replaceAll('_', ' ')} because the default profile combines ${profile.default_profile_id?.replaceAll('_', ' ')} context with product safety rules.`
  }
  const review = validateDefaultManifest(manifest)

  return {
    valid: review.valid,
    manifest,
    review,
    releaseBlocked: review.releaseBlocked
  }
}

export function routeHumanOpsReview({
  situation = '',
  capability = {},
  actor = {},
  releaseClassifierResult = {}
} = {}) {
  const text = `${situation} ${capability.type ?? ''} ${capability.capability_type ?? ''}`.toLowerCase()
  const triggers = []
  if (/novel|new product|micro.?loan|community/.test(text) || capability.novel === true) triggers.push('novel_financial_product')
  if (capability.moneyMovement || capability.money_movement) triggers.push('money_movement')
  if (capability.multiParty || capability.multi_party) triggers.push('multi_party_effect')
  if (/bypass|avoid verification|disable verification/.test(text) || capability.verificationBypass) triggers.push('verification_bypass')
  if ((actor.age_band === 'elderly' || actor.ageBand === 'elderly') && Number(capability.amount ?? 0) >= Number(capability.largeTransferThreshold ?? 1000) && capability.newRecipient) {
    triggers.push('elderly_large_new_recipient_transfer')
  }
  if (['child', 'teen'].includes(normalizeKey(actor.age_band ?? actor.ageBand)) && capability.financialAutonomy) triggers.push('child_or_teen_financial_autonomy')
  if (/susu|default|dispute/.test(text)) triggers.push('susu_default_or_dispute')
  if (/unclear.*evidence|gps|photo|proof unclear/.test(text)) triggers.push('unclear_escrow_release_evidence')
  if (releaseClassifierResult.confidence === 'low' || capability.lowConfidence) triggers.push('low_confidence_ai_product')
  if (releaseClassifierResult.mode === 'human_review_required' || releaseClassifierResult.reviewRequired) triggers.push('release_classifier_review_required')

  const categories = []
  if (triggers.includes('novel_financial_product')) categories.push('capability_release_review')
  if (triggers.includes('verification_bypass') || /regulated|credit|remittance|securities/.test(text)) categories.push('compliance_review')
  if (triggers.includes('elderly_large_new_recipient_transfer') || triggers.includes('verification_bypass')) categories.push('fraud_review')
  if (triggers.includes('money_movement')) categories.push('ledger_review')
  if (/hidden fee|confusing consent|dark pattern/.test(text)) categories.push('ux_dark_pattern_review')
  if (/business account ownership|identity conflict/.test(text)) categories.push('identity_review')
  if (triggers.includes('unclear_escrow_release_evidence')) categories.push('evidence_review')
  if (/dispute|buyer|seller/.test(text)) categories.push('dispute_review')
  if (/failed|partial payout|missing party|settlement/.test(text)) categories.push('exception_review')

  return {
    reviewRequired: triggers.length > 0,
    triggers,
    triggerReasons: Object.fromEntries(triggers.map((trigger) => [trigger, HUMAN_OPS_REVIEW_TRIGGERS[trigger]])),
    categories: [...new Set(categories.length ? categories : ['capability_release_review'])],
    layer: capability.runtime ? 'runtime_review' : capability.postEvent ? 'post_event_review' : 'design_time_review',
    evidencePackageRequired: true,
    allowedReviewerActions: ['approve', 'reject', 'request_more_information', 'patch_and_retest', 'escalate'],
    placement: HUMAN_OPS_REVIEW_PLACEMENT
  }
}

export function evaluateHumanOpsTriggerMatrix({
  condition,
  riskScore = 0,
  complianceTags = [],
  novelComposition = false,
  confidence = 'medium',
  persona = {},
  amount = 0,
  multiPartyConflict = false,
  identityVerified = true,
  evidenceMismatch = false,
  unsafeOverrideRequest = false,
  watchtowerAnomaly = false
} = {}) {
  const normalizedCondition = normalizeKey(condition)
  const matrixMatch = HUMAN_OPS_REVIEW_TRIGGER_MATRIX[normalizedCondition]
  const triggerTypes = []

  if (riskScore >= 80) triggerTypes.push('risk_threshold_exceeded')
  if (complianceTags.length) triggerTypes.push('compliance_tag_present')
  if (novelComposition) triggerTypes.push('novel_composition')
  if (normalizeKey(confidence) === 'low') triggerTypes.push('low_confidence')
  if (['child', 'teen', 'elderly', 'vulnerable'].includes(normalizeKey(persona.age_band ?? persona.ageBand))) triggerTypes.push('sensitive_persona')
  if (Number(amount) >= 1000) triggerTypes.push('high_value')
  if (multiPartyConflict) triggerTypes.push('multi_party_conflict')
  if (!identityVerified) triggerTypes.push('identity_uncertainty')
  if (evidenceMismatch) triggerTypes.push('evidence_mismatch')
  if (unsafeOverrideRequest) triggerTypes.push('unsafe_override_request')
  if (watchtowerAnomaly) triggerTypes.push('watchtower_anomaly')

  const reviewRequired = Boolean(
    matrixMatch?.reviewRequired === true
    || matrixMatch?.reviewRequired === 'conditional'
    || triggerTypes.length
  )
  const releaseBlocked = Boolean(matrixMatch?.releaseBlocked || matrixMatch?.blockRecommended || triggerTypes.includes('unsafe_override_request'))

  return {
    reviewRequired,
    releaseBlocked,
    condition: normalizedCondition,
    matrixMatch,
    triggerTypes,
    triggerReasons: Object.fromEntries(triggerTypes.map((trigger) => [trigger, HUMAN_OPS_STRUCTURED_TRIGGER_TYPES[trigger]])),
    reviewTypes: matrixMatch?.reviewType ?? [],
    priority: releaseBlocked || riskScore >= 85 ? 'high' : reviewRequired ? 'medium' : 'low'
  }
}

export function validateHumanReviewCase(caseObject = {}) {
  const missing = HUMAN_REVIEW_CASE_FIELDS.filter((field) => caseObject[field] === undefined)
  const issues = [...missing.map((field) => `missing_${field}`)]

  if (!HUMAN_REVIEW_STATE_MACHINE.states.includes(caseObject.status)) issues.push('invalid_review_status')
  if (!(caseObject.allowed_decisions ?? []).length) issues.push('missing_allowed_decisions')
  if (!(caseObject.review_requirements ?? []).length) issues.push('missing_review_requirements')
  if (!caseObject.evidence_package || Object.keys(caseObject.evidence_package).length < 4) issues.push('evidence_package_incomplete')
  if (!caseObject.risk_summary?.risk_reasons?.length) issues.push('risk_summary_missing_reasons')

  return {
    valid: issues.length === 0,
    issues,
    fields: HUMAN_REVIEW_CASE_FIELDS,
    releaseBlocked: issues.some((issue) => issue.includes('missing') || issue.includes('invalid') || issue.includes('incomplete'))
  }
}

export function createHumanReviewCase({
  caseType = 'capability_release_review',
  source = {},
  riskSummary = {},
  evidencePackage = {},
  reviewRequirements = [],
  allowedDecisions = ['approve_guarded_live', 'approve_simulation_only', 'request_changes', 'block', 'escalate_to_compliance'],
  priority
} = {}) {
  const score = Number(riskSummary.overall_risk_score ?? riskSummary.overallRiskScore ?? 0)
  const caseObject = {
    review_case_id: `hrc_${source.capability_id ?? source.capabilityId ?? 'draft'}`,
    case_type: caseType,
    priority: priority ?? (score >= 80 ? 'high' : score >= 50 ? 'medium' : 'low'),
    status: 'created',
    created_at: '2026-05-17T12:00:00Z',
    source: {
      triggered_by: source.triggered_by ?? source.triggeredBy ?? 'release_mode_classifier',
      capability_id: source.capability_id ?? source.capabilityId ?? 'capability_draft',
      user_id: source.user_id ?? source.userId ?? 'user_unknown'
    },
    risk_summary: {
      overall_risk_score: score,
      risk_reasons: riskSummary.risk_reasons ?? riskSummary.riskReasons ?? [],
      compliance_tags: riskSummary.compliance_tags ?? riskSummary.complianceTags ?? []
    },
    evidence_package: evidencePackage,
    review_requirements: reviewRequirements,
    allowed_decisions: allowedDecisions
  }
  const review = validateHumanReviewCase(caseObject)

  return {
    valid: review.valid,
    case: caseObject,
    review,
    stateMachine: HUMAN_REVIEW_STATE_MACHINE
  }
}

export function advanceHumanReviewState(currentState = 'created', event = 'queue') {
  const normalized = normalizeKey(currentState)
  const eventKey = normalizeKey(event)
  const nextByEvent = {
    queue: 'queued',
    assign: 'assigned',
    start_review: 'in_review',
    request_information: 'needs_more_information',
    information_received: 'decision_drafted',
    draft_decision: 'decision_drafted',
    approve: 'approved',
    reject: 'rejected',
    block: 'blocked',
    escalate: 'escalated',
    return_for_revision: 'returned_for_revision',
    log_decision: 'decision_logged',
    update_capability: 'capability_updated',
    attach_watchtower_policy: 'watchtower_policy_attached',
    close: 'closed'
  }
  const next = nextByEvent[eventKey]
  const allowed = HUMAN_REVIEW_STATE_MACHINE.transitions[normalized] ?? []
  const valid = Boolean(next && allowed.includes(next))

  return {
    valid,
    from: normalized,
    event: eventKey,
    to: valid ? next : normalized,
    allowedNextStates: allowed
  }
}

export function assignHumanReviewerRoles(categories = []) {
  const set = new Set(categories.map(normalizeKey))
  const roles = new Set()

  if (set.has('compliance_review')) roles.add('compliance_reviewer')
  if (set.has('fraud_review') || set.has('vulnerable_user_review') || set.has('abuse_review')) roles.add('risk_reviewer')
  if (set.has('ledger_review')) roles.add('ledger_reviewer')
  if (set.has('ux_dark_pattern_review')) roles.add('ux_safety_reviewer')
  if (set.has('identity_review')) roles.add('identity_reviewer')
  if (set.has('evidence_review')) roles.add('evidence_reviewer')
  if (set.has('dispute_review') || set.has('exception_review')) roles.add('ops_resolution_specialist')
  if (set.has('marketplace_review')) roles.add('marketplace_reviewer')
  if (set.has('capability_release_review') || set.has('architecture_review')) roles.add('senior_approver')
  if (!roles.size) roles.add('risk_reviewer')

  return {
    roles: [...roles],
    roleResponsibilities: Object.fromEntries([...roles].map((role) => [role, HUMAN_REVIEWER_ROLES[role]]))
  }
}

export function validateHumanOpsEvidencePackage(packageObject = {}) {
  const present = new Set(Object.keys(packageObject).map(normalizeKey))
  const missing = HUMAN_OPS_EVIDENCE_PACKAGE_TYPES.filter((type) => !present.has(type))
  const criticalMissing = missing.filter((type) => [
    'original_user_request',
    'product_spec',
    'capability_contract',
    'risk_score',
    'ledger_model',
    'release_recommendation',
    'watchtower_plan'
  ].includes(type))

  return {
    valid: criticalMissing.length === 0,
    missing,
    criticalMissing,
    evidenceTypes: HUMAN_OPS_EVIDENCE_PACKAGE_TYPES,
    releaseBlocked: criticalMissing.length > 0
  }
}

export function applyHumanOpsDecisionLearning({
  decision,
  caseObject = {},
  notes = []
} = {}) {
  const normalizedDecision = normalizeKey(decision)
  const updates = HUMAN_OPS_LEARNING_TARGETS.map((target) => ({
    target,
    action: normalizedDecision === 'block'
      ? `tighten_${target}_rules`
      : normalizedDecision.includes('require') || normalizedDecision.includes('revision')
        ? `add_${target}_repair_pattern`
        : `record_${target}_approved_pattern`
  }))

  return {
    decision: normalizedDecision,
    caseId: caseObject.review_case_id,
    updates,
    notes,
    auditEvent: `human_ops_decision_${normalizedDecision}`,
    closedLoopLearning: true
  }
}

export function proposeHumanOpsSaferAlternatives(request = '') {
  const text = request.toLowerCase()
  let key = 'public_multi_party_money_template'
  if (/borrow|loan|interest|pay back/.test(text)) key = 'interest_charging_group_lending_pool'
  if (/bypass|disable verification|anonymous/.test(text)) key = 'verification_bypass_transfer'

  return {
    matchedRisk: key,
    alternatives: HUMAN_OPS_SAFER_ALTERNATIVES[key],
    explanation: key === 'interest_charging_group_lending_pool'
      ? 'cannot_release_as_interest_charging_lending_without_compliance_approval'
      : 'safer_alternative_available_before_blocking'
  }
}

export function validateHumanOpsAccountability(record = {}) {
  const missing = HUMAN_OPS_ACCOUNTABILITY_FIELDS.filter((field) => record[field] === undefined)

  return {
    valid: missing.length === 0,
    missing,
    fields: HUMAN_OPS_ACCOUNTABILITY_FIELDS,
    auditReady: missing.length === 0
  }
}

export function scoreReleaseReadiness({
  testConfidence = 0,
  simulationConfidence = 0,
  ledgerValidity = 0,
  consentCompleteness = 0,
  complianceClearance = 0,
  operationalMaturity = 0,
  priorSafeUsage = 0,
  financialHarmRisk = 0,
  fraudRisk = 0,
  regulatoryRisk = 0,
  noveltyRisk = 0,
  ledgerRisk = 0,
  userHarmRisk = 0,
  dataPrivacyRisk = 0,
  reversibilityRisk = 0
} = {}) {
  const positive = (
    clamp01(testConfidence) * RELEASE_READINESS_SCORE_COMPONENTS.positive.test_confidence
    + clamp01(simulationConfidence) * RELEASE_READINESS_SCORE_COMPONENTS.positive.simulation_confidence
    + clamp01(ledgerValidity) * RELEASE_READINESS_SCORE_COMPONENTS.positive.ledger_validity
    + clamp01(consentCompleteness) * RELEASE_READINESS_SCORE_COMPONENTS.positive.consent_completeness
    + clamp01(complianceClearance) * RELEASE_READINESS_SCORE_COMPONENTS.positive.compliance_clearance
    + clamp01(operationalMaturity) * RELEASE_READINESS_SCORE_COMPONENTS.positive.operational_maturity
    + clamp01(priorSafeUsage) * RELEASE_READINESS_SCORE_COMPONENTS.positive.prior_safe_usage
  )
  const negative = (
    clamp01(financialHarmRisk) * RELEASE_READINESS_SCORE_COMPONENTS.negative.financial_harm_risk
    + clamp01(fraudRisk) * RELEASE_READINESS_SCORE_COMPONENTS.negative.fraud_risk
    + clamp01(regulatoryRisk) * RELEASE_READINESS_SCORE_COMPONENTS.negative.regulatory_risk
    + clamp01(noveltyRisk) * RELEASE_READINESS_SCORE_COMPONENTS.negative.novelty_risk
    + clamp01(ledgerRisk) * RELEASE_READINESS_SCORE_COMPONENTS.negative.ledger_risk
    + clamp01(userHarmRisk) * RELEASE_READINESS_SCORE_COMPONENTS.negative.user_harm_risk
    + clamp01(dataPrivacyRisk) * RELEASE_READINESS_SCORE_COMPONENTS.negative.data_privacy_risk
    + clamp01(reversibilityRisk) * RELEASE_READINESS_SCORE_COMPONENTS.negative.reversibility_risk
  )
  const score = clamp01((positive - negative + 0.3) / 1.0)

  return {
    score: Number(score.toFixed(3)),
    positive: Number(positive.toFixed(3)),
    negative: Number(negative.toFixed(3)),
    components: {
      testConfidence,
      simulationConfidence,
      ledgerValidity,
      consentCompleteness,
      complianceClearance,
      operationalMaturity,
      priorSafeUsage,
      financialHarmRisk,
      fraudRisk,
      regulatoryRisk,
      noveltyRisk,
      ledgerRisk,
      userHarmRisk,
      dataPrivacyRisk,
      reversibilityRisk
    },
    formula: RELEASE_READINESS_SCORE_COMPONENTS
  }
}

export function classifyReleaseMode({
  prohibited = false,
  needsClarification = false,
  unsupportedPrimitive = false,
  consentComplete = true,
  humanReviewRequired = false,
  marketplaceRequested = false,
  publicReleaseRequested = false,
  runtimeAnomaly = false,
  rollbackSignal = false,
  moneyMovement = false,
  multiParty = false,
  complianceTags = [],
  scores = {}
} = {}) {
  const readiness = scoreReleaseReadiness(scores)
  const regulatory = complianceTags.some((tag) => ['credit', 'remittance', 'investment', 'insurance', 'securities_like', 'kyc', 'kyb'].includes(normalizeKey(tag)))
  let mode = 'private_live'
  const reasons = []

  if (rollbackSignal) {
    mode = 'rollback_required'
    reasons.push('failed_migration_or_unsafe_update')
  } else if (runtimeAnomaly) {
    mode = 'quarantined'
    reasons.push('runtime_anomaly_detected')
  } else if (prohibited || scores.fraudRisk >= 0.9 || scores.userHarmRisk >= 0.9) {
    mode = 'blocked'
    reasons.push('prohibited_or_extreme_harm_risk')
  } else if (needsClarification) {
    mode = 'clarification_required'
    reasons.push('ambiguous_money_movement_request')
  } else if (unsupportedPrimitive || scores.noveltyRisk >= 0.75) {
    mode = moneyMovement ? 'internal_sandbox' : 'simulation_only'
    reasons.push('new_or_unsupported_primitive_combination')
  } else if (!consentComplete) {
    mode = 'private_draft'
    reasons.push('consent_or_disclosure_incomplete')
  } else if (humanReviewRequired || regulatory || (moneyMovement && multiParty && readiness.score < 0.7)) {
    mode = 'human_review_required'
    reasons.push('governance_threshold_reached')
  } else if (marketplaceRequested && readiness.score >= 0.85 && !moneyMovement) {
    mode = 'marketplace_eligible'
    reasons.push('strong_test_history_and_low_money_movement_risk')
  } else if (publicReleaseRequested && readiness.score >= 0.78 && !regulatory) {
    mode = 'limited_public_release'
    reasons.push('controlled_rollout_before_full_public_release')
  } else if (readiness.score >= 0.88 && !multiParty && !regulatory) {
    mode = 'full_live'
    reasons.push('low_risk_well_tested_capability')
  } else if (moneyMovement || multiParty || scores.evidenceRisk >= 0.4) {
    mode = 'guarded_live'
    reasons.push('caps_monitors_and_limits_required')
  }

  return {
    mode,
    readiness,
    reasons,
    ladder: RELEASE_MODE_LADDER,
    modeDefinition: CORE_RELEASE_MODES[mode],
    reviewRequired: mode === 'human_review_required',
    runtimeAllowed: ['private_live', 'guarded_live', 'limited_public_release', 'full_live', 'marketplace_eligible'].includes(mode),
    marketplaceAllowed: mode === 'marketplace_eligible',
    releaseBlocked: ['blocked', 'clarification_required', 'simulation_only', 'internal_sandbox', 'private_draft', 'require_modification', 'quarantined', 'rollback_required', 'migration_review_required'].includes(mode)
  }
}

export function applyReleaseGatedRules(evidence = {}) {
  const complianceTags = normalizeList(evidence.complianceTags ?? evidence.compliance_tags)
  const complianceClearance = Boolean(firstPresent([
    evidence.complianceClearance,
    evidence.compliance_clearance,
    evidence.complianceApproved,
    evidence.compliance_approved
  ], false))
  const clearanceDenied = Boolean(evidence.complianceClearanceDenied ?? evidence.compliance_clearance_denied)
  const ledgerValidationPassed = Boolean(firstPresent([
    evidence.ledgerValidationPassed,
    evidence.ledger_validation_passed,
    evidence.ledgerValidation?.passed,
    evidence.ledger_validation?.passed
  ], true))
  const simulationCriticalFailure = Boolean(
    evidence.simulationCriticalFailure
    ?? evidence.simulation_critical_failure
    ?? evidence.simulationResults?.criticalFailure
    ?? evidence.simulation_results?.critical_failure
  )
  const userHarmRisk = riskFraction(evidence.userHarmRisk ?? evidence.user_harm_risk ?? evidence.riskSummary?.user_harm_risk)
  const disclosureWeak = Boolean(evidence.weakDisclosure ?? evidence.weak_disclosure ?? isWeakDisclosure(evidence.disclosureStrength ?? evidence.disclosure_strength))
  const testConfidence = riskFraction(evidence.testConfidence ?? evidence.test_confidence)
  const simulationConfidence = riskFraction(evidence.simulationConfidence ?? evidence.simulation_confidence)
  const overallRisk = riskFraction(evidence.overallRisk ?? evidence.overall_risk ?? evidence.riskScore ?? evidence.risk_score)
  const personal = Boolean(evidence.personal ?? evidence.personalCapability ?? evidence.personal_capability)
  const reversible = Boolean(evidence.reversible ?? normalizeKey(evidence.reversibility) === 'reversible')
  const fullyTested = Boolean(evidence.fullyTested ?? evidence.fully_tested ?? (
    testConfidence >= 0.8
    && simulationConfidence >= 0.8
    && ledgerValidationPassed
  ))
  const lowRisk = Boolean(evidence.lowRisk ?? evidence.low_risk ?? (
    overallRisk > 0
    && overallRisk <= 0.28
    && userHarmRisk <= 0.25
  ))
  const moneyMovement = Boolean(evidence.moneyMovement ?? evidence.money_movement)
  const triggeredRules = []
  const blockingIssues = []
  let selected = {
    mode: normalizeKey(evidence.proposedMode ?? evidence.proposed_mode ?? 'private_live'),
    severity: 0
  }

  const enforce = (ruleId, mode, issue, severity) => {
    triggeredRules.push(ruleId)
    blockingIssues.push(issue)
    if (severity >= selected.severity) selected = { mode, severity }
  }

  if (includesAny(complianceTags, ['credit', 'credit_like', 'lending']) && !complianceClearance) {
    enforce(
      'credit_without_clearance',
      clearanceDenied ? 'blocked' : 'human_review_required',
      clearanceDenied ? 'credit_clearance_denied' : 'credit_tag_requires_compliance_clearance',
      clearanceDenied ? 100 : 80
    )
  }

  if (!ledgerValidationPassed) {
    enforce('ledger_validation_failed', 'blocked', 'ledger_validation_failed', 100)
  }

  if (simulationCriticalFailure) {
    enforce(
      'critical_simulation_failure',
      evidence.criticalFailureBlocksRelease || moneyMovement ? 'blocked' : 'simulation_only',
      'critical_simulation_failure_path',
      evidence.criticalFailureBlocksRelease || moneyMovement ? 95 : 70
    )
  }

  if (userHarmRisk >= 0.7 && disclosureWeak) {
    enforce('high_user_harm_weak_disclosure', 'require_modification', 'stronger_disclosure_required_for_high_user_harm_risk', 65)
  }

  if (lowRisk && personal && reversible && fullyTested && triggeredRules.length === 0) {
    triggeredRules.push('low_risk_reversible_tested')
    selected = {
      mode: moneyMovement ? 'private_live' : 'full_live',
      severity: 5
    }
  }

  return {
    recommendedMode: selected.mode,
    triggeredRules,
    blockingIssues: unique(blockingIssues),
    gatedRules: RELEASE_GATED_RULES,
    releaseBlocked: ['blocked', 'simulation_only', 'require_modification', 'human_review_required'].includes(selected.mode),
    humanReviewRequired: selected.mode === 'human_review_required',
    gatesPassed: !['blocked', 'require_modification', 'human_review_required'].includes(selected.mode)
  }
}

export function recommendReleaseGuards({
  mode = 'private_live',
  moneyMovement = false,
  newRecipient = false,
  highValue = false,
  evidenceRequired = false,
  multiParty = false,
  marketplaceRequested = false,
  runtimeAnomaly = false,
  incompleteConsent = false,
  personaSensitive = false,
  jurisdictionLimited = false,
  updateChangesLedgerRules = false,
  existingGuards = []
} = {}) {
  const normalizedMode = normalizeKey(mode)
  const guards = new Set(normalizeList(existingGuards))

  if (['guarded_live', 'limited_public_release'].includes(normalizedMode)) {
    guards.add('transaction_cap')
    guards.add('volume_cap')
    guards.add('watchtower_guard')
  }
  if (normalizedMode === 'human_review_required') guards.add('human_approval_guard')
  if (normalizedMode === 'require_modification' || incompleteConsent) guards.add('consent_guard')
  if (normalizedMode === 'quarantined') guards.add('quarantine_guard')
  if (normalizedMode === 'rollback_required' || updateChangesLedgerRules) guards.add('rollback_guard')
  if (normalizedMode === 'private_live') guards.add('user_cap')
  if (normalizedMode === 'limited_public_release') {
    guards.add('user_cap')
    guards.add('time_cap')
  }

  if (moneyMovement) {
    guards.add('transaction_cap')
    guards.add('volume_cap')
    guards.add('auto_refund_guard')
    guards.add('watchtower_guard')
    guards.add('clear_refund_disclosure')
  }
  if (newRecipient) {
    guards.add('recipient_verification')
    guards.add('cooling_period_guard')
  }
  if (highValue) {
    guards.add('transaction_cap')
    guards.add('human_approval_guard')
    guards.add('cooling_period_guard')
  }
  if (evidenceRequired) {
    guards.add('evidence_guard')
    guards.add('photo_evidence_rule')
    guards.add('dispute_fallback')
  }
  if (multiParty) {
    guards.add('consent_coverage_guard')
    guards.add('ledger_simulation_guard')
    guards.add('payout_rules_guard')
    guards.add('dispute_fallback')
  }
  if (marketplaceRequested && normalizedMode !== 'marketplace_eligible') guards.add('marketplace_block')
  if (runtimeAnomaly) {
    guards.add('watchtower_guard')
    guards.add('quarantine_guard')
  }
  if (personaSensitive) guards.add('persona_cap')
  if (jurisdictionLimited) guards.add('geography_cap')
  if (incompleteConsent) guards.add('clear_refund_disclosure')

  const requiredGuards = [...guards]
  return {
    mode: normalizedMode,
    requiredGuards,
    guardDetails: Object.fromEntries(requiredGuards.map((guard) => [guard, RELEASE_GUARDS[guard] ?? 'custom_guard'])),
    releaseLimits: {
      max_transaction_amount: highValue ? 500 : moneyMovement ? 1000 : null,
      max_monthly_volume: moneyMovement ? 5000 : null,
      allowed_users: normalizedMode === 'private_live' ? 'requesting_user_only' : normalizedMode === 'limited_public_release' ? 'pilot_cohort' : 'eligible_users',
      marketplace_publishable: normalizedMode === 'marketplace_eligible' && !marketplaceRequested ? true : normalizedMode === 'marketplace_eligible'
    },
    watchtowerPolicy: {
      monitoring_level: runtimeAnomaly || highValue || multiParty ? 'elevated' : 'standard',
      auto_quarantine_on_anomaly: true
    }
  }
}

export function validateReleaseDecisionObject(decision = {}) {
  const missing = RELEASE_DECISION_OBJECT_FIELDS.filter((field) => decision[field] === undefined)
  const issues = [...missing.map((field) => `missing_${field}`)]
  const mode = normalizeKey(decision.recommended_release_mode)

  if (mode && !CORE_RELEASE_MODES[mode]) issues.push('unknown_release_mode')
  if (!decision.risk_summary || typeof decision.risk_summary !== 'object') {
    issues.push('missing_risk_summary_object')
  } else if (decision.risk_summary.overall_risk === undefined && decision.risk_summary.overallRisk === undefined) {
    issues.push('risk_summary_missing_overall_risk')
  }
  if (!Array.isArray(decision.blocking_issues)) issues.push('blocking_issues_must_be_array')
  if (!Array.isArray(decision.required_guards)) issues.push('required_guards_must_be_array')
  if (Array.isArray(decision.required_guards)) {
    const unknownGuards = decision.required_guards.filter((guard) => !RELEASE_GUARDS[normalizeKey(guard)])
    if (unknownGuards.length) issues.push(`unknown_guards_${unknownGuards.map(normalizeKey).join('_')}`)
  }
  if (decision.release_limits && typeof decision.release_limits !== 'object') issues.push('release_limits_must_be_object')
  if (typeof decision.human_review?.required !== 'boolean') issues.push('human_review_required_flag_missing')
  if (typeof decision.watchtower_policy?.auto_quarantine_on_anomaly !== 'boolean') issues.push('watchtower_auto_quarantine_flag_missing')

  return {
    valid: issues.length === 0,
    missing,
    issues,
    fields: RELEASE_DECISION_OBJECT_FIELDS,
    releaseBlocked: issues.length > 0 || ['blocked', 'require_modification', 'human_review_required', 'private_draft'].includes(mode)
  }
}

export function buildReleaseDecisionObject({
  capabilityId = 'capability_unknown',
  classification = {},
  riskSummary = {},
  requiredGuards,
  releaseLimits,
  humanReview,
  watchtowerPolicy,
  blockingIssues,
  explanation
} = {}) {
  const mode = normalizeKey(classification.mode ?? classification.recommendedMode ?? classification.recommended_release_mode ?? 'private_live')
  const readinessScore = classification.readiness?.score ?? riskFraction(classification.confidenceScore ?? classification.confidence_score)
  const confidence = classification.confidence ?? (readinessScore >= 0.78 ? 'high' : readinessScore >= 0.55 ? 'medium' : 'low')
  const guardPackage = recommendReleaseGuards({
    mode,
    moneyMovement: classification.moneyMovement,
    newRecipient: classification.newRecipient,
    highValue: classification.highValue,
    evidenceRequired: classification.evidenceRequired,
    multiParty: classification.multiParty,
    marketplaceRequested: classification.marketplaceRequested,
    runtimeAnomaly: classification.runtimeAnomaly,
    incompleteConsent: classification.incompleteConsent,
    existingGuards: requiredGuards ?? []
  })
  const normalizedRiskSummary = {
    overall_risk: riskSummary.overall_risk ?? riskSummary.overallRisk ?? Math.round((classification.readiness?.negative ?? 0.3) * 100),
    financial_harm_risk: riskSummary.financial_harm_risk ?? riskSummary.financialHarmRisk ?? 0,
    fraud_risk: riskSummary.fraud_risk ?? riskSummary.fraudRisk ?? 0,
    regulatory_risk: riskSummary.regulatory_risk ?? riskSummary.regulatoryRisk ?? 0,
    ledger_risk: riskSummary.ledger_risk ?? riskSummary.ledgerRisk ?? 0,
    ux_harm_risk: riskSummary.ux_harm_risk ?? riskSummary.uxHarmRisk ?? riskSummary.user_harm_risk ?? 0,
    novelty_risk: riskSummary.novelty_risk ?? riskSummary.noveltyRisk ?? 0
  }
  const reviewRequired = mode === 'human_review_required' || classification.reviewRequired === true
  const decision = {
    release_decision_id: `rel_${normalizeKey(capabilityId)}_${mode}`,
    capability_id: capabilityId,
    recommended_release_mode: mode,
    confidence,
    risk_summary: normalizedRiskSummary,
    blocking_issues: blockingIssues ?? classification.blockingIssues ?? classification.reasons ?? [],
    required_guards: requiredGuards ?? guardPackage.requiredGuards,
    release_limits: releaseLimits ?? guardPackage.releaseLimits,
    human_review: humanReview ?? {
      required: reviewRequired,
      review_if_threshold_exceeded: mode === 'guarded_live',
      thresholds: reviewRequired ? ['review_before_release'] : ['transaction_above_cap', 'recipient_unverified', 'evidence_mismatch']
    },
    watchtower_policy: watchtowerPolicy ?? guardPackage.watchtowerPolicy,
    explanation: explanation ?? `Release mode ${mode} selected with ${confidence} confidence; guards attach before runtime execution.`
  }
  const review = validateReleaseDecisionObject(decision)

  return {
    decision,
    review,
    valid: review.valid
  }
}

export function advanceReleaseLifecycleState(currentState = 'draft', event = 'validation_passed') {
  const from = normalizeKey(currentState)
  const eventKey = normalizeKey(typeof event === 'string' ? event : event.type ?? event.event ?? event.releaseMode ?? event.recommendedReleaseMode)
  const targetByEvent = {
    validation_passed: 'validated',
    schema_validated: 'validated',
    simulation_completed: 'simulated',
    simulation_passed: 'simulated',
    classified: 'classified',
    classification_completed: 'classified',
    blocked: 'blocked',
    release_blocked: 'blocked',
    simulation_only: 'simulation_only',
    release_simulation_only: 'simulation_only',
    review_required: 'review_required',
    human_review_required: 'review_required',
    approve_private_live: 'private_live',
    private_live: 'private_live',
    approve_guarded_live: 'guarded_live',
    guarded_live: 'guarded_live',
    approve_limited_public_release: 'limited_public_release',
    limited_public_release: 'limited_public_release',
    approve_full_live: 'full_live',
    full_live: 'full_live',
    marketplace_approved: 'marketplace_eligible',
    marketplace_eligible: 'marketplace_eligible',
    monitoring_started: 'runtime_monitoring',
    promote: 'promoted',
    limit: 'limited',
    anomaly_detected: 'quarantined',
    quarantine: 'quarantined',
    rollback: 'rolled_back',
    deprecate: 'deprecated',
    retire: 'retired',
    migration_review_required: 'migration_review_required'
  }
  const requested = lifecycleStateForReleaseMode(
    targetByEvent[eventKey]
    ?? (typeof event === 'object' ? event.recommendedReleaseMode ?? event.recommended_release_mode : undefined)
    ?? eventKey
  )
  const allowedNextStates = RELEASE_LIFECYCLE_STATE_MACHINE.transitions[from] ?? []
  const valid = allowedNextStates.includes(requested)

  return {
    valid,
    from,
    event: eventKey,
    to: valid ? requested : from,
    requested,
    allowedNextStates,
    lifecycle: RELEASE_LIFECYCLE_STATE_MACHINE,
    releaseBlocked: !valid
  }
}

export function classifySafeSendRelease({
  amount = 0,
  highValueThreshold = 500,
  recipientVerified = false,
  recipientKnown = false,
  evidenceRuleClear = true,
  refundPath = true,
  gpsSupported = true,
  jurisdictionSupported = true,
  disclosureComplete = true,
  ledgerValidationPassed = true
} = {}) {
  const highValue = Number(amount) > highValueThreshold
  let mode = 'guarded_live'
  const reasons = []

  if (!evidenceRuleClear) {
    mode = 'clarification_required'
    reasons.push('evidence_requirement_vague')
  } else if (!refundPath) {
    mode = 'require_modification'
    reasons.push('refund_path_missing')
  } else if (!gpsSupported || !jurisdictionSupported) {
    mode = 'simulation_only'
    reasons.push('gps_or_photo_verification_not_supported_in_context')
  } else if (highValue && (!recipientVerified || !recipientKnown)) {
    mode = 'human_review_required'
    reasons.push('large_amount_to_unknown_or_unverified_recipient')
  } else if (recipientVerified && recipientKnown && !highValue) {
    reasons.push('verified_known_recipient_with_clear_evidence_rules')
  }

  const gateReview = applyReleaseGatedRules({
    proposedMode: mode,
    moneyMovement: true,
    ledgerValidationPassed,
    userHarmRisk: refundPath ? 0.28 : 0.75,
    disclosureStrength: disclosureComplete ? 0.82 : 0.35,
    personal: false,
    reversible: refundPath,
    fullyTested: ledgerValidationPassed && evidenceRuleClear
  })
  if (gateReview.recommendedMode !== mode && gateReview.triggeredRules.length) {
    mode = gateReview.recommendedMode
    reasons.push(...gateReview.blockingIssues)
  }

  const guards = recommendReleaseGuards({
    mode,
    moneyMovement: true,
    newRecipient: !recipientKnown,
    highValue,
    evidenceRequired: true,
    incompleteConsent: !disclosureComplete
  })
  const decision = buildReleaseDecisionObject({
    capabilityId: 'cap_safesend_delivery_proof',
    classification: {
      mode,
      confidence: ['guarded_live', 'full_live'].includes(mode) ? 'high' : 'medium',
      moneyMovement: true,
      newRecipient: !recipientKnown,
      highValue,
      evidenceRequired: true,
      reasons
    },
    riskSummary: {
      overall_risk: highValue ? 68 : 42,
      financial_harm_risk: highValue ? 55 : 35,
      fraud_risk: recipientVerified ? 25 : 55,
      regulatory_risk: 20,
      ledger_risk: ledgerValidationPassed ? 10 : 90,
      ux_harm_risk: disclosureComplete ? 18 : 60,
      novelty_risk: 30
    },
    requiredGuards: guards.requiredGuards,
    releaseLimits: guards.releaseLimits,
    watchtowerPolicy: guards.watchtowerPolicy,
    blockingIssues: reasons,
    explanation: 'SafeSend can run only when evidence, refund, recipient, ledger, and monitoring guards are explicit.'
  })

  return {
    request: SAFESEND_RELEASE_EXAMPLE.request,
    detected: SAFESEND_RELEASE_EXAMPLE.detected,
    mode,
    reasons,
    gateReview,
    guards,
    decision
  }
}

export function classifySusuRelease({
  memberCount = 10,
  contributionFrequency = 'weekly',
  ledgerSimulationPassed = false,
  consentCoverage = 0,
  payoutRiskModel = false,
  transparentPayoutRules = false,
  disputePolicy = false,
  exposureCaps = false,
  watchtowerPlan = false,
  humanReviewApproved = false,
  regulatedPoolingPossible = true
} = {}) {
  const missingRequirements = []
  if (!ledgerSimulationPassed) missingRequirements.push('ledger_simulation')
  if (riskFraction(consentCoverage) < 1) missingRequirements.push('consent_coverage')
  if (!payoutRiskModel) missingRequirements.push('risk_model')
  if (!transparentPayoutRules) missingRequirements.push('transparent_payout_rules')
  if (!disputePolicy) missingRequirements.push('dispute_policy')
  if (!exposureCaps) missingRequirements.push('exposure_caps')
  if (!watchtowerPlan) missingRequirements.push('watchtower')

  const mode = humanReviewApproved && missingRequirements.length === 0
    ? 'guarded_live'
    : 'human_review_required'
  const gateReview = applyReleaseGatedRules({
    proposedMode: mode,
    moneyMovement: true,
    ledgerValidationPassed: true,
    simulationCriticalFailure: false,
    userHarmRisk: missingRequirements.length ? 0.64 : 0.38,
    disclosureStrength: riskFraction(consentCoverage) >= 1 ? 0.78 : 0.4,
    complianceTags: regulatedPoolingPossible ? ['multi_party_funds', 'possible_regulated_pooling'] : ['multi_party_funds']
  })
  const guards = recommendReleaseGuards({
    mode: gateReview.recommendedMode,
    moneyMovement: true,
    multiParty: true,
    highValue: memberCount > 8,
    incompleteConsent: riskFraction(consentCoverage) < 1
  })
  const decision = buildReleaseDecisionObject({
    capabilityId: 'cap_susu_circle_weekly_pot',
    classification: {
      mode: gateReview.recommendedMode,
      confidence: missingRequirements.length ? 'medium' : 'high',
      moneyMovement: true,
      multiParty: true,
      highValue: memberCount > 8,
      incompleteConsent: riskFraction(consentCoverage) < 1,
      reviewRequired: gateReview.recommendedMode === 'human_review_required',
      reasons: missingRequirements
    },
    riskSummary: {
      overall_risk: missingRequirements.length ? 78 : 54,
      financial_harm_risk: 65,
      fraud_risk: 45,
      regulatory_risk: regulatedPoolingPossible ? 55 : 25,
      ledger_risk: ledgerSimulationPassed ? 20 : 60,
      ux_harm_risk: riskFraction(consentCoverage) >= 1 ? 22 : 58,
      novelty_risk: 42
    },
    requiredGuards: guards.requiredGuards,
    releaseLimits: guards.releaseLimits,
    watchtowerPolicy: guards.watchtowerPolicy,
    blockingIssues: missingRequirements,
    explanation: 'Susu circles require explicit multi-party consent, payout rules, simulation, dispute handling, caps, and human approval before live use.'
  })

  return {
    request: SUSU_RELEASE_EXAMPLE.request,
    memberCount,
    contributionFrequency,
    detected: SUSU_RELEASE_EXAMPLE.detected,
    requirements: SUSU_RELEASE_EXAMPLE.requirements,
    missingRequirements,
    mode: gateReview.recommendedMode,
    gateReview,
    guards,
    decision
  }
}

export function classifyPersonalSavingsRelease({
  amount = 1000,
  goal = 'rent',
  deadlineClear = true,
  hardLock = false,
  noWithdrawalUnderAnyCircumstance = false,
  strongConsent = false,
  emergencyPolicy = false,
  uxWarning = false,
  fullyTested = true,
  lowRegulatoryRisk = true,
  reversible = true
} = {}) {
  const strictLock = hardLock || noWithdrawalUnderAnyCircumstance
  const requiredHardLockGuards = strictLock
    ? ['strong_consent_guard', 'emergency_policy_guard', 'ux_warning_guard']
    : []
  const missingHardLockGuards = [
    strongConsent ? undefined : 'strong_consent_guard',
    emergencyPolicy ? undefined : 'emergency_policy_guard',
    uxWarning ? undefined : 'ux_warning_guard'
  ].filter(Boolean)
  let mode = deadlineClear ? 'private_live' : 'clarification_required'
  const reasons = []

  if (!deadlineClear) reasons.push('savings_deadline_unclear')
  if (strictLock && missingHardLockGuards.length) {
    mode = 'require_modification'
    reasons.push(...missingHardLockGuards)
  }

  const gateReview = applyReleaseGatedRules({
    proposedMode: mode,
    moneyMovement: true,
    personal: true,
    reversible: reversible && !strictLock,
    fullyTested,
    lowRisk: lowRegulatoryRisk,
    ledgerValidationPassed: true,
    userHarmRisk: strictLock ? 0.58 : 0.18,
    disclosureStrength: strictLock && !strongConsent ? 0.35 : 0.82
  })
  const finalMode = gateReview.triggeredRules.length && gateReview.recommendedMode !== 'full_live'
    ? gateReview.recommendedMode
    : mode
  const guards = recommendReleaseGuards({
    mode: finalMode,
    moneyMovement: true,
    incompleteConsent: strictLock && !strongConsent,
    existingGuards: requiredHardLockGuards
  })
  const decision = buildReleaseDecisionObject({
    capabilityId: `cap_personal_${normalizeKey(goal)}_savings`,
    classification: {
      mode: finalMode,
      confidence: deadlineClear && fullyTested ? 'high' : 'medium',
      moneyMovement: true,
      incompleteConsent: strictLock && !strongConsent,
      reasons
    },
    riskSummary: {
      overall_risk: strictLock ? 38 : 22,
      financial_harm_risk: strictLock ? 24 : 12,
      fraud_risk: 8,
      regulatory_risk: lowRegulatoryRisk ? 5 : 35,
      ledger_risk: 8,
      ux_harm_risk: strictLock ? 46 : 15,
      novelty_risk: 10
    },
    requiredGuards: guards.requiredGuards,
    releaseLimits: {
      ...guards.releaseLimits,
      allowed_users: 'requesting_user_only',
      goal_amount: amount
    },
    watchtowerPolicy: guards.watchtowerPolicy,
    blockingIssues: reasons,
    explanation: strictLock
      ? 'Personal savings may stay private live only when strong consent, emergency policy, and UX warning are present.'
      : 'Personal savings is private live when the goal is personal, low risk, tested, and reversible.'
  })

  return {
    request: PERSONAL_SAVINGS_GOAL_RELEASE_EXAMPLE.request,
    detected: PERSONAL_SAVINGS_GOAL_RELEASE_EXAMPLE.detected,
    amount,
    goal,
    mode: finalMode,
    strictLock,
    requiredHardLockGuards,
    missingHardLockGuards,
    gateReview,
    guards,
    decision
  }
}

export function classifyCreditLikeRelease({
  request = CREDIT_LIKE_RELEASE_EXAMPLE.request,
  interest = true,
  multiParty = true,
  licensed = false,
  complianceApproved = false,
  complianceClearanceDenied = false,
  ledgerValidationPassed = true,
  consumerHarmRisk = 0.82,
  disclosureStrength = 0.5,
  simulationCriticalFailure = false
} = {}) {
  const complianceClearance = licensed || complianceApproved
  const gateReview = applyReleaseGatedRules({
    proposedMode: complianceClearance ? 'guarded_live' : 'human_review_required',
    complianceTags: ['credit', interest ? 'interest' : undefined, multiParty ? 'multi_party' : undefined],
    complianceClearance,
    complianceClearanceDenied,
    ledgerValidationPassed,
    simulationCriticalFailure,
    userHarmRisk: consumerHarmRisk,
    disclosureStrength,
    moneyMovement: true
  })
  const mode = gateReview.recommendedMode
  const alternatives = proposeHumanOpsSaferAlternatives(request)
  const guards = recommendReleaseGuards({
    mode,
    moneyMovement: true,
    multiParty,
    highValue: true,
    incompleteConsent: riskFraction(disclosureStrength) < 0.75,
    existingGuards: complianceClearance ? ['human_approval_guard'] : []
  })
  const decision = buildReleaseDecisionObject({
    capabilityId: 'cap_credit_like_interest_wallet',
    classification: {
      mode,
      confidence: complianceClearance ? 'medium' : 'low',
      moneyMovement: true,
      multiParty,
      highValue: true,
      incompleteConsent: riskFraction(disclosureStrength) < 0.75,
      reviewRequired: mode === 'human_review_required',
      reasons: gateReview.blockingIssues
    },
    riskSummary: {
      overall_risk: complianceClearance ? 66 : 90,
      financial_harm_risk: 82,
      fraud_risk: 55,
      regulatory_risk: complianceClearance ? 45 : 92,
      ledger_risk: ledgerValidationPassed ? 24 : 88,
      ux_harm_risk: Math.round(riskFraction(consumerHarmRisk) * 100),
      novelty_risk: 52
    },
    requiredGuards: guards.requiredGuards,
    releaseLimits: guards.releaseLimits,
    watchtowerPolicy: guards.watchtowerPolicy,
    blockingIssues: gateReview.blockingIssues,
    explanation: 'Credit-like interest products require compliance clearance and human review; otherwise safer non-interest alternatives should be suggested.'
  })

  return {
    request,
    detected: CREDIT_LIKE_RELEASE_EXAMPLE.detected,
    mode,
    complianceClearance,
    gateReview,
    saferAlternatives: unique([...CREDIT_LIKE_RELEASE_EXAMPLE.safer_alternatives, ...alternatives.alternatives]),
    guards,
    decision
  }
}

export function buildPersonalizedReleaseOpsFlow({
  request = '',
  intent = {},
  defaults = {},
  composer = {},
  simulation = {},
  releaseClassification = {},
  humanOps = {},
  watchtower = {},
  outcomeLearning = {}
} = {}) {
  const providedOutputs = {
    user_request: request ? ['natural_language_goal'] : [],
    intent_interpreter: Object.keys(intent),
    personality_aware_product_defaults: Object.keys(defaults),
    product_composer: Object.keys(composer),
    simulation_lab: Object.keys(simulation),
    release_mode_classifier: Object.keys(releaseClassification),
    human_ops_review: Object.keys(humanOps),
    runtime_watchtower: Object.keys(watchtower),
    outcome_learning: Object.keys(outcomeLearning)
  }
  const steps = PERSONALIZED_RELEASE_OPS_END_TO_END_FLOW.map((step) => ({
    ...step,
    provided: providedOutputs[step.step] ?? [],
    missing: step.outputs.filter((output) => !(providedOutputs[step.step] ?? []).map(normalizeKey).includes(normalizeKey(output)))
  }))

  return {
    request,
    steps,
    complete: steps.every((step) => step.missing.length === 0),
    canonicalRelationship: CANONICAL_THREE_SYSTEM_RELATIONSHIP
  }
}

export function evaluateDefaultManifestReleaseContract({
  defaultManifest = DEFAULT_MANIFEST_TO_RELEASE_CONTRACT_EXAMPLE,
  releaseContext = {}
} = {}) {
  const personaRiskFlags = normalizeList(defaultManifest.persona_risk_flags ?? defaultManifest.personaRiskFlags)
  const guardAliases = {
    cooling_period: 'cooling_period_guard',
    recipient_verification: 'recipient_verification',
    enhanced_consent: 'consent_guard'
  }
  const safetyControls = normalizeList(defaultManifest.default_safety_controls ?? defaultManifest.defaultSafetyControls)
    .map((control) => guardAliases[control] ?? control)
  const automationLevel = normalizeKey(defaultManifest.automation_level ?? defaultManifest.automationLevel)
  const consentDepth = normalizeKey(defaultManifest.consent_depth ?? defaultManifest.consentDepth)
  const newRecipientTransfer = Boolean(releaseContext.newRecipientTransfer ?? releaseContext.new_recipient_transfer ?? releaseContext.newRecipient)
  const moneyMovement = Boolean(releaseContext.moneyMovement ?? releaseContext.money_movement ?? true)
  const vulnerableUser = includesAny(personaRiskFlags, ['elderly_user', 'low_tech_comfort', 'vulnerable_user'])
  const requiredGuards = new Set(safetyControls)
  const reasons = []

  if (vulnerableUser) {
    requiredGuards.add('persona_cap')
    requiredGuards.add('elder_fraud_monitor')
    reasons.push('persona_risk_flags_inform_release')
  }
  if (newRecipientTransfer) {
    requiredGuards.add('recipient_verification')
    requiredGuards.add('cooling_period_guard')
    reasons.push('new_recipient_transfer_requires_guarded_release')
  }
  if (automationLevel === 'low') {
    requiredGuards.add('human_approval_guard')
    reasons.push('low_automation_prefers_manual_confirmation')
  }
  if (consentDepth === 'enhanced') {
    requiredGuards.add('consent_guard')
    reasons.push('enhanced_consent_depth_required')
  }

  const mode = vulnerableUser && newRecipientTransfer ? 'guarded_live' : 'private_live'
  const guardPackage = recommendReleaseGuards({
    mode,
    moneyMovement,
    newRecipient: newRecipientTransfer,
    personaSensitive: vulnerableUser,
    existingGuards: [...requiredGuards]
  })
  const decision = buildReleaseDecisionObject({
    capabilityId: releaseContext.capabilityId ?? 'cap_default_manifest_release_contract',
    classification: {
      mode,
      confidence: 'high',
      moneyMovement,
      newRecipient: newRecipientTransfer,
      reasons
    },
    requiredGuards: guardPackage.requiredGuards,
    releaseLimits: guardPackage.releaseLimits,
    watchtowerPolicy: {
      monitoring_level: vulnerableUser || newRecipientTransfer ? 'elevated' : 'standard',
      auto_quarantine_on_anomaly: true
    },
    blockingIssues: [],
    explanation: 'Default manifest risk flags and safety controls feed release mode, guards, monitoring, and human review thresholds.'
  })

  return {
    valid: true,
    contract: 'personality_defaults_to_release_classifier',
    personaRiskFlags,
    safetyControls,
    automationLevel,
    consentDepth,
    mode,
    reasons,
    requiredGuards: guardPackage.requiredGuards,
    decision
  }
}

export function buildControlledFamilySupportWalletRelease({
  request = CONTROLLED_FAMILY_SUPPORT_WALLET_EXAMPLE.request,
  weeklyAmount = 100,
  allowedCategories = ['food', 'medicine', 'transport'],
  recipientAgeBand = 'elderly',
  newRecipientTransfer = false,
  largeTransferAttempt = false,
  suspiciousRecipient = false,
  restrictionDispute = false,
  consentChallenged = false
} = {}) {
  const defaultsReview = derivePersonalityAwareDefaults({
    request,
    context: {
      age_band: recipientAgeBand,
      financial_literacy: 'medium',
      tech_comfort: 'low',
      accessibility_needs: ['larger_controls'],
      behavioural_signals: ['sends_to_wrong_recipients_often']
    },
    productType: 'family_hub',
    explicitConsent: true
  })
  const guardPackage = recommendReleaseGuards({
    mode: 'guarded_live',
    moneyMovement: true,
    newRecipient: true,
    highValue: largeTransferAttempt,
    personaSensitive: true,
    existingGuards: [
      'recipient_verification',
      'spending_category_limit',
      'unusual_transfer_monitor',
      'consent_guard',
      'cooling_period_guard',
      'trusted_recipient_list',
      'elder_fraud_monitor',
      'emergency_override_path',
      'audit_ledger_guard'
    ]
  })
  const releaseDecision = buildReleaseDecisionObject({
    capabilityId: 'cap_controlled_family_support_wallet',
    classification: {
      mode: 'guarded_live',
      confidence: 'high',
      moneyMovement: true,
      newRecipient: true,
      highValue: largeTransferAttempt,
      reasons: ['vulnerable_user_protection', 'category_restricted_family_support']
    },
    riskSummary: {
      overall_risk: 58,
      financial_harm_risk: 36,
      fraud_risk: 55,
      regulatory_risk: 18,
      ledger_risk: 14,
      ux_harm_risk: 26,
      novelty_risk: 25
    },
    requiredGuards: guardPackage.requiredGuards,
    releaseLimits: {
      ...guardPackage.releaseLimits,
      weekly_amount: weeklyAmount,
      allowed_categories: allowedCategories
    },
    watchtowerPolicy: {
      monitoring_level: 'elevated',
      auto_quarantine_on_anomaly: true
    },
    explanation: 'Family support wallet releases as guarded live because it combines vulnerable-user protection, category limits, trusted recipients, consent, and anomaly monitoring.'
  })
  const humanOpsTriggers = [
    largeTransferAttempt ? 'large_amount_to_new_recipient' : undefined,
    suspiciousRecipient ? 'suspicious_new_recipient' : undefined,
    restrictionDispute ? 'restriction_dispute' : undefined,
    consentChallenged ? 'consent_challenge' : undefined
  ].filter(Boolean)
  const humanOpsReview = humanOpsTriggers.length
    ? routeHumanOpsReview({
        situation: humanOpsTriggers.join(' '),
        capability: {
          moneyMovement: true,
          newRecipient: newRecipientTransfer,
          amount: largeTransferAttempt ? 2500 : weeklyAmount,
          largeTransferThreshold: 1000
        },
        user: { age_band: recipientAgeBand }
      })
    : { reviewRequired: false, categories: [], triggers: [] }

  return {
    request,
    example: CONTROLLED_FAMILY_SUPPORT_WALLET_EXAMPLE,
    defaultsReview,
    composerComponents: CONTROLLED_FAMILY_SUPPORT_WALLET_EXAMPLE.composer_components,
    mode: releaseDecision.decision.recommended_release_mode,
    guards: guardPackage.requiredGuards,
    releaseDecision,
    humanOpsTriggers,
    humanOpsReview
  }
}

export function createReleaseClassifierHumanOpsContract({
  releaseDecision = RELEASE_CLASSIFIER_TO_HUMAN_OPS_CONTRACT_EXAMPLE,
  reviewCaseType,
  reviewReasons,
  evidencePackage = {}
} = {}) {
  const mode = normalizeKey(releaseDecision.recommended_release_mode ?? releaseDecision.release_mode ?? 'human_review_required')
  const reasons = normalizeList(reviewReasons ?? releaseDecision.review_reasons ?? releaseDecision.blocking_issues ?? [])
  const inferredCaseType = reviewCaseType
    ?? releaseDecision.review_case_type
    ?? (reasons.some((reason) => reason.includes('credit') || reason.includes('interest')) ? 'compliance_review' : 'capability_release_review')
  const contract = {
    release_mode: mode,
    review_case_type: normalizeKey(inferredCaseType),
    review_reasons: reasons
  }
  const reviewCase = mode === 'human_review_required'
    ? createHumanReviewCase({
        caseType: contract.review_case_type,
        source: {
          triggered_by: 'release_mode_classifier',
          capability_id: releaseDecision.capability_id ?? 'capability_pending_review'
        },
        riskSummary: {
          overall_risk_score: releaseDecision.risk_summary?.overall_risk ?? 80,
          risk_reasons: reasons,
          compliance_tags: reasons.filter((reason) => reason.includes('credit') || reason.includes('interest'))
        },
        evidencePackage: {
          release_decision: releaseDecision,
          ...evidencePackage
        },
        reviewRequirements: ['confirm_policy_category', 'inspect_evidence', 'approve_or_modify_release_mode']
      })
    : undefined

  return {
    contract,
    reviewCase,
    valid: reasons.length > 0 && Boolean(contract.review_case_type),
    routesToHumanOps: mode === 'human_review_required'
  }
}

export function createHumanOpsComposerChangeRequest({
  decision = HUMAN_OPS_TO_PRODUCT_COMPOSER_CHANGE_REQUEST_EXAMPLE.decision,
  requiredChanges = HUMAN_OPS_TO_PRODUCT_COMPOSER_CHANGE_REQUEST_EXAMPLE.required_changes,
  reviewCaseId = 'review_case_pending',
  capabilityId = 'capability_pending_changes',
  policyReasons = []
} = {}) {
  const normalizedDecision = normalizeKey(decision)
  const changes = normalizeList(requiredChanges)
  const validDecision = Boolean(HUMAN_OPS_DECISION_TYPES[normalizedDecision])

  return {
    target: 'product_composer',
    source: 'human_ops_review',
    review_case_id: reviewCaseId,
    capability_id: capabilityId,
    decision: normalizedDecision,
    required_changes: changes,
    policy_reasons: normalizeList(policyReasons),
    composer_action: normalizedDecision === 'require_modification' ? 'revise_capability_contract_and_defaults' : 'record_decision_no_composer_change',
    valid: validDecision && changes.length > 0,
    releaseBlockedUntilApplied: ['require_modification', 'require_stronger_consent', 'require_lower_limits', 'block'].includes(normalizedDecision)
  }
}

export function recordHumanOpsLearningMemory({
  caseOutcome = HUMAN_OPS_TO_LEARNING_ENGINE_MEMORY_EXAMPLE.case_outcome,
  reason = HUMAN_OPS_TO_LEARNING_ENGINE_MEMORY_EXAMPLE.reason,
  futurePolicyUpdate = HUMAN_OPS_TO_LEARNING_ENGINE_MEMORY_EXAMPLE.future_policy_update,
  caseObject = {},
  notes = []
} = {}) {
  const normalizedOutcome = normalizeKey(caseOutcome)
  const learningLoop = applyHumanOpsDecisionLearning({
    decision: normalizedOutcome === 'blocked' ? 'block' : normalizedOutcome,
    caseObject,
    notes: [...notes, reason]
  })
  const memory = {
    case_outcome: normalizedOutcome,
    reason: normalizeKey(reason),
    future_policy_update: {
      similar_patterns: normalizeKey(futurePolicyUpdate.similar_patterns ?? futurePolicyUpdate.similarPatterns ?? 'route_to_review'),
      safe_alternative: normalizeKey(futurePolicyUpdate.safe_alternative ?? futurePolicyUpdate.safeAlternative ?? 'safe_alternative_required')
    }
  }

  return {
    memory,
    learningLoop,
    governanceMemoryReady: Boolean(memory.case_outcome && memory.reason && memory.future_policy_update.similar_patterns)
  }
}

export function validatePersonalizedReleaseArchitecture({
  services = PERSONALIZED_RELEASE_SERVICE_BOUNDARIES,
  dataObjects = PERSONALIZED_RELEASE_KEY_DATA_OBJECTS,
  storage = PERSONALIZED_RELEASE_STORAGE_REQUIREMENTS
} = {}) {
  const serviceKeys = normalizeList(Object.keys(services))
  const dataObjectKeys = normalizeList(Object.keys(dataObjects))
  const storageKeys = normalizeList(Object.keys(storage))
  const expectedServices = Object.keys(PERSONALIZED_RELEASE_SERVICE_BOUNDARIES)
  const expectedDataObjects = Object.keys(PERSONALIZED_RELEASE_KEY_DATA_OBJECTS)
  const expectedStorage = Object.keys(PERSONALIZED_RELEASE_STORAGE_REQUIREMENTS)
  const missingServices = expectedServices.filter((service) => !serviceKeys.includes(service))
  const missingDataObjects = expectedDataObjects.filter((object) => !dataObjectKeys.includes(object))
  const missingStorage = expectedStorage.filter((item) => !storageKeys.includes(item))

  return {
    valid: missingServices.length === 0 && missingDataObjects.length === 0 && missingStorage.length === 0,
    missingServices,
    missingDataObjects,
    missingStorage,
    serviceBoundaries: PERSONALIZED_RELEASE_SERVICE_BOUNDARIES,
    keyDataObjects: PERSONALIZED_RELEASE_KEY_DATA_OBJECTS,
    storageRequirements: PERSONALIZED_RELEASE_STORAGE_REQUIREMENTS
  }
}

export function evaluateFailureModeCoverage({
  personalityDefaults = [],
  humanOps = [],
  releaseClassifier = []
} = {}) {
  const coverageFor = (required, provided) => {
    const providedSet = new Set(normalizeList(Array.isArray(provided)
      ? provided
      : [...Object.keys(provided).filter((key) => provided[key]), ...Object.values(provided).filter(Boolean)]
    ))
    const missing = Object.entries(required)
      .filter(([failure, prevention]) => !providedSet.has(normalizeKey(failure)) && !providedSet.has(normalizeKey(prevention)))
      .map(([failure, prevention]) => ({ failure, prevention }))
    return {
      covered: Object.keys(required).length - missing.length,
      total: Object.keys(required).length,
      missing
    }
  }
  const personality = coverageFor(PERSONALITY_DEFAULT_FAILURE_MODES, personalityDefaults)
  const ops = coverageFor(HUMAN_OPS_FAILURE_MODES, humanOps)
  const release = coverageFor(RELEASE_CLASSIFIER_FAILURE_MODES, releaseClassifier)
  const missingTotal = personality.missing.length + ops.missing.length + release.missing.length

  return {
    valid: missingTotal === 0,
    personality,
    humanOps: ops,
    releaseClassifier: release,
    missingTotal,
    releaseBlocked: missingTotal > 0
  }
}

export function evaluateAuraGradeReadiness({
  personalityDefaultsCapabilities = [],
  humanOpsCapabilities = [],
  releaseClassifierCapabilities = []
} = {}) {
  const check = (standards, provided) => {
    const providedSet = new Set(normalizeList(provided))
    const missing = standards.filter((standard) => !providedSet.has(normalizeKey(standard)))
    return {
      score: Number(((standards.length - missing.length) / standards.length).toFixed(3)),
      missing
    }
  }
  const personality = check(AURA_GRADE_COMPONENT_STANDARDS.personality_aware_product_defaults, personalityDefaultsCapabilities)
  const ops = check(AURA_GRADE_COMPONENT_STANDARDS.human_ops_review, humanOpsCapabilities)
  const release = check(AURA_GRADE_COMPONENT_STANDARDS.release_mode_classifier, releaseClassifierCapabilities)
  const overallScore = Number(((personality.score + ops.score + release.score) / 3).toFixed(3))

  return {
    overallScore,
    auraGrade: overallScore === 1,
    personality,
    humanOps: ops,
    releaseClassifier: release,
    standards: AURA_GRADE_COMPONENT_STANDARDS
  }
}

export function buildGovernedFinancialOperatingSystemSummary({
  capabilities = GOVERNED_FINANCIAL_OS_CAPABILITIES,
  definitions = FINAL_CANONICAL_DEFINITIONS
} = {}) {
  return {
    type: 'governed_financial_capability_operating_system',
    capabilities,
    definitions,
    difference: 'governed_financial_operating_system_not_just_product_generator',
    canOperateSafely: capabilities.length === GOVERNED_FINANCIAL_OS_CAPABILITIES.length
  }
}

export function derivePersonalityAwareDefaults({
  request = '',
  context = {},
  productType = 'goal_savings',
  explicitUserPreferences = {},
  explicitConsent = false
} = {}) {
  const persona = classifyDefaultPersona(context)
  const baseDefaults = GOAL_SAVINGS_PERSONA_DEFAULTS[persona] ?? GOAL_SAVINGS_PERSONA_DEFAULTS.salaried_worker
  const behaviouralSignals = (context.behavioural_signals ?? context.behavioralSignals ?? []).map(normalizeKey)
  const defaults = {
    productType,
    persona,
    schedule: firstPresent([explicitUserPreferences.schedule], baseDefaults.schedule),
    lockStrength: firstPresent([explicitUserPreferences.lockStrength, explicitUserPreferences.lock_strength], baseDefaults.lockStrength),
    reminders: firstPresent([explicitUserPreferences.reminders], baseDefaults.reminders),
    explanation: firstPresent([explicitUserPreferences.explanation], baseDefaults.explanation),
    monitoring: [...new Set([...(baseDefaults.monitoring ?? [])])],
    consent: {
      explicit_default_acceptance_required: true,
      irreversible_actions_require_fresh_consent: true,
      risk_disclosure_must_remain_visible: true
    },
    review: {
      human_review_required: false,
      reason: undefined
    },
    overridePermissions: {
      user_can_edit_schedule: true,
      user_can_reduce_lock_strength: persona !== 'high_risk_spender',
      user_can_disable_risk_warnings: false
    }
  }

  if (behaviouralSignals.includes('frequently_abandons_setup_flows')) {
    defaults.ux = 'short_guided_setup'
  } else {
    defaults.ux = context.communication_style ?? context.communicationStyle ?? 'guided'
  }
  if (behaviouralSignals.includes('sends_to_wrong_recipients_often')) {
    defaults.monitoring.push('recipient_confirmation_monitor')
    defaults.consent.extra_recipient_confirmation_required = true
  }
  if (behaviouralSignals.includes('frequently_disputes_payments')) {
    defaults.monitoring.push('receipt_and_dispute_monitor')
    defaults.review.human_review_required = true
    defaults.review.reason = 'frequent_payment_disputes'
  }
  if (/school fee|daughter|child|family/i.test(request)) {
    defaults.monitoring.push('family_goal_monitor')
    defaults.goalVisibility = persona === 'parent' ? 'family_contribution_ready' : 'private_by_default'
  }

  const ethicsReview = validatePersonalityDefaultEthics({
    defaults,
    context,
    explicitConsent,
    inferredSensitiveTraits: context.inferred_sensitive_traits ?? context.inferredSensitiveTraits ?? [],
    safeOverrideAvailable: true
  })
  const clarifyingQuestions = []
  if (!explicitConsent) clarifyingQuestions.push(PERSONALITY_DEFAULT_CLARIFYING_QUESTION_POOL.consent)
  if (defaults.lockStrength?.includes('strong')) clarifyingQuestions.push(PERSONALITY_DEFAULT_CLARIFYING_QUESTION_POOL.emergency)
  if (persona === 'parent') clarifyingQuestions.push(PERSONALITY_DEFAULT_CLARIFYING_QUESTION_POOL.family_visibility)
  if (persona === 'elderly_user') clarifyingQuestions.push(PERSONALITY_DEFAULT_CLARIFYING_QUESTION_POOL.accessibility)

  return {
    valid: ethicsReview.valid,
    request,
    enginePosition: PERSONALITY_DEFAULTS_ENGINE_POSITION,
    inputs: PERSONALITY_DEFAULT_ENGINE_INPUTS,
    outputs: PERSONALITY_DEFAULT_ENGINE_OUTPUTS,
    persona,
    defaults,
    ethicsReview,
    clarifyingQuestions: [...new Set(clarifyingQuestions)],
    configurationBurdenReduced: true,
    releaseBlocked: ethicsReview.releaseBlocked
  }
}
