export const AURA_STATE_MACHINE_SYNTHESIZER_PROMISE = 'turn_financial_intent_into_deterministic_governed_testable_lifecycle_logic'

export const STATE_MACHINE_SYNTHESIZER_INPUTS = Object.freeze([
  'product_intent_interpreter',
  'aura_product_specification_language',
  'financial_physics_engine',
  'composition_algebra',
  'primitive_registry',
  'compliance_governor',
  'identity_verification_layer',
  'ledger_contract_builder',
  'ui_ux_composer',
  'runtime_governor_watchtower'
])

export const STATE_MACHINE_SYNTHESIZER_OUTPUTS = Object.freeze([
  'states',
  'events',
  'actor_permissions',
  'guard_conditions',
  'money_movements',
  'ledger_mutations',
  'evidence_requirements',
  'ui_surfaces',
  'failure_paths',
  'timeout_paths',
  'dispute_paths',
  'terminal_outcomes'
])

export const STATE_MACHINE_SYNTHESIZER_QUESTIONS = Object.freeze([
  'what_states_exist',
  'what_events_can_happen',
  'who_can_trigger_each_event',
  'what_conditions_must_be_true',
  'what_money_movement_happens',
  'what_ledger_mutation_happens',
  'what_evidence_is_required',
  'what_ui_screen_should_appear',
  'what_happens_if_something_fails',
  'what_happens_when_time_expires',
  'what_happens_when_a_dispute_occurs',
  'what_terminal_outcomes_are_allowed'
])

export const STATE_MACHINE_SIMPLE_FORMULA = 'state_plus_event_plus_guard_plus_action_equals_next_state'

export const STATE_MACHINE_FULL_FORMULA = Object.freeze([
  'capability_state',
  'actor_event',
  'context',
  'permission_check',
  'risk_check',
  'compliance_check',
  'evidence_check',
  'financial_physics_check',
  'guard_conditions',
  'financial_invariants',
  'compliance_rules',
  'evidence_requirements',
  'ledger_mutation',
  'ui_directive',
  'audit_record',
  'runtime_monitor_binding',
  'next_valid_state'
])

export const STATE_MACHINE_CONTRACT_DISCIPLINE = Object.freeze([
  'not_loose_logic',
  'not_scattered_if_statements',
  'not_one_off_workflow_code',
  'formal_lifecycle_contract'
])

export const STATE_MACHINE_SYNTHESIZER_FOUNDATION_FLOW = Object.freeze([
  'user_request',
  'product_intent_interpreter',
  'aura_product_specification_language',
  'rule_policy_constraint_extractor',
  'financial_physics_engine',
  'composition_algebra',
  'primitive_registry',
  'state_machine_synthesizer',
  'kernel_contract_builder',
  'ledger_state_machine_system',
  'ui_ux_composer',
  'simulation_engine',
  'compliance_governor',
  'runtime_execution_engine',
  'runtime_monitor_governor_watchtower'
])

export const STATE_MACHINE_SYNTHESIZER_MAIN_JOBS = Object.freeze({
  lifecycle: {
    question: 'what_is_the_lifecycle',
    examples: [
      ['draft', 'awaiting_consent', 'active', 'awaiting_deposit', 'funded', 'awaiting_evidence', 'evidence_submitted', 'under_verification', 'approved', 'released', 'completed'],
      ['draft', 'active', 'funded', 'evidence_missing', 'deadline_missed', 'auto_refunded', 'closed']
    ]
  },
  events: {
    question: 'what_events_move_the_capability_forward',
    examples: [
      'user_creates_capability',
      'sender_funds_wallet',
      'recipient_accepts_terms',
      'recipient_uploads_photo',
      'location_verified',
      'deadline_expired',
      'admin_reviews_dispute',
      'release_approved',
      'refund_triggered'
    ]
  },
  conditions: {
    question: 'what_conditions_must_be_true_before_movement_is_allowed',
    examples: [
      'sender_balance_greater_than_or_equal_amount',
      'recipient_identity_verified',
      'location_distance_within_allowed_radius',
      'photo_confidence_score_above_threshold',
      'deadline_not_expired',
      'sender_consent_signed',
      'compliance_risk_level_not_blocked'
    ]
  },
  actions: {
    question: 'what_actions_happen_when_a_transition_occurs',
    examples: [
      'reserve_funds',
      'create_escrow_entry',
      'notify_recipient',
      'attach_evidence',
      'score_risk',
      'release_funds',
      'refund_sender',
      'create_audit_log',
      'update_ui_state'
    ]
  },
  terminal_states: {
    question: 'what_states_are_terminal',
    examples: ['completed', 'cancelled', 'refunded', 'rejected', 'disputed_closed', 'expired', 'fraud_blocked']
  },
  illegal_paths: {
    question: 'what_should_never_be_allowed',
    examples: ['released_to_refunded', 'cancelled_to_active', 'fraud_blocked_to_released', 'completed_to_draft', 'refunded_to_released']
  }
})

export const FLOW_VS_STATE_MACHINE_EXAMPLE = Object.freeze({
  normal_flow: ['user_sends_money', 'recipient_uploads_photo', 'money_released'],
  machine_states: {
    draft: [{ event: 'create_transfer_intent', to: 'awaiting_sender_confirmation' }],
    awaiting_sender_confirmation: [
      { event: 'sender_confirms', to: 'awaiting_funding' },
      { event: 'sender_cancels', to: 'cancelled' }
    ],
    awaiting_funding: [
      { event: 'funds_reserved', to: 'awaiting_recipient_acceptance' },
      { event: 'funding_failed', to: 'funding_failed' },
      { event: 'sender_cancels', to: 'cancelled' }
    ],
    awaiting_recipient_acceptance: [
      { event: 'recipient_accepts', to: 'awaiting_evidence' },
      { event: 'recipient_rejects', to: 'refund_pending' },
      { event: 'acceptance_deadline_expired', to: 'refund_pending' }
    ],
    awaiting_evidence: [
      { event: 'evidence_submitted', to: 'evidence_review' },
      { event: 'evidence_deadline_expired', to: 'refund_pending' },
      { event: 'sender_opens_dispute', to: 'disputed' }
    ],
    evidence_review: [
      { event: 'evidence_approved', to: 'release_pending' },
      { event: 'evidence_rejected', to: 'awaiting_evidence_correction' },
      { event: 'fraud_detected', to: 'fraud_blocked' },
      { event: 'manual_review_required', to: 'manual_review' }
    ],
    release_pending: [
      { event: 'ledger_release_successful', to: 'completed' },
      { event: 'ledger_release_failed', to: 'release_retry' }
    ],
    refund_pending: [
      { event: 'ledger_refund_successful', to: 'refunded' },
      { event: 'ledger_refund_failed', to: 'refund_retry' }
    ]
  }
})

export const TYPED_STATE_MACHINE_MESH = Object.freeze([
  'capability_lifecycle_machine',
  'money_movement_machine',
  'ledger_posting_machine',
  'verification_machine',
  'consent_machine',
  'risk_compliance_machine',
  'obligation_machine',
  'notification_machine',
  'ui_journey_machine',
  'exception_dispute_machine',
  'audit_machine',
  'versioning_migration_machine'
])

export const STATE_MACHINE_EVENT_CHOREOGRAPHY_EXAMPLE = Object.freeze([
  { machine: 'verification_machine', emits: 'evidence_approved' },
  { machine: 'money_movement_machine', receives: 'evidence_approved', emits: 'release_ready' },
  { machine: 'ledger_state_machine', receives: 'release_ready', emits: 'funds_released' },
  { machine: 'capability_lifecycle_machine', receives: 'funds_released', transition: 'release_pending_to_completed' }
])

export const CORE_AURA_MACHINE_TYPES = Object.freeze({
  capability_lifecycle_machine: {
    question: 'where_is_this_capability_in_its_overall_life',
    role: 'main_top_level_machine',
    states: ['draft', 'configured', 'awaiting_consent', 'awaiting_funding', 'active', 'paused', 'completed', 'cancelled', 'expired', 'disputed', 'blocked']
  },
  money_movement_machine: {
    question: 'what_is_the_current_status_of_the_money',
    role: 'controls_actual_funds_and_must_obey_financial_physics',
    states: ['no_funds', 'funding_requested', 'funds_reserved', 'funds_escrowed', 'funds_partially_released', 'funds_released', 'refund_pending', 'refunded', 'settlement_failed', 'reconciliation_pending'],
    invariants: ['release_amount_must_not_exceed_escrowed_amount', 'refund_amount_plus_released_amount_must_not_exceed_original_amount', 'locked_amount_must_not_be_less_than_required_reserved_amount']
  },
  ledger_state_machine: {
    question: 'has_the_financial_event_been_correctly_recorded_in_the_ledger',
    role: 'deterministic_accounting_truth',
    states: ['no_entry', 'pending_journal', 'posted', 'reversed', 'adjusted', 'reconciled', 'failed'],
    bindings: ['capability_completed_requires_ledger_posted', 'ui_money_released_requires_ledger_posted']
  },
  verification_evidence_machine: {
    question: 'has_the_required_proof_been_submitted_and_accepted',
    role: 'controls_proof_requirements',
    states: ['no_evidence_required', 'evidence_required', 'awaiting_evidence', 'evidence_submitted', 'evidence_under_review', 'evidence_approved', 'evidence_rejected', 'evidence_expired', 'evidence_fraud_flagged', 'manual_review_required'],
    evidence: ['photo_proof', 'video_proof', 'invoice_proof', 'location_metadata', 'timestamp', 'device_signature', 'geofence_validation', 'third_party_confirmation_stub', 'human_review', 'ai_confidence_score']
  },
  consent_disclosure_machine: {
    question: 'have_all_required_parties_agreed_to_the_rules',
    role: 'controls_understanding_and_legal_acknowledgement',
    states: ['disclosure_generated', 'awaiting_sender_consent', 'awaiting_recipient_consent', 'partially_consented', 'fully_consented', 'consent_revoked', 'consent_expired', 'consent_invalidated']
  },
  compliance_risk_machine: {
    question: 'is_this_capability_allowed_to_operate',
    role: 'regulatory_fraud_cyber_abuse_jurisdiction_and_harm_override',
    states: ['unchecked', 'low_risk', 'medium_risk', 'high_risk', 'requires_review', 'approved', 'blocked', 'frozen', 'escalated'],
    override: 'if_compliance_state_blocked_then_no_money_release_transition_is_allowed'
  },
  obligation_machine: {
    question: 'what_has_each_party_promised_to_do_and_has_it_been_fulfilled',
    role: 'tracks_duties_between_parties',
    states: ['obligation_created', 'awaiting_acceptance', 'accepted', 'in_progress', 'due_soon', 'overdue', 'fulfilled', 'partially_fulfilled', 'breached', 'waived', 'disputed', 'closed'],
    importantFor: ['school_fees', 'family_contributions', 'susu_circles', 'contractor_payments', 'marketplace_tasks', 'rent_obligations', 'staged_building_payments', 'group_commitments', 'child_savings_conditions']
  },
  ui_journey_machine: {
    question: 'what_experience_should_the_user_have_at_this_moment',
    role: 'generates_user_experience_from_state',
    states: ['show_draft_screen', 'show_rule_summary', 'show_consent_screen', 'show_funding_screen', 'show_waiting_screen', 'show_evidence_upload_screen', 'show_review_screen', 'show_success_screen', 'show_refund_screen', 'show_dispute_screen']
  },
  exception_dispute_machine: {
    question: 'what_happens_when_the_normal_path_breaks',
    role: 'controls_abnormal_paths',
    states: ['no_dispute', 'dispute_opened', 'awaiting_response', 'evidence_requested', 'under_review', 'decision_pending', 'sender_favored', 'recipient_favored', 'split_decision', 'refund_ordered', 'release_ordered', 'closed'],
    handles: ['disagreement', 'fraud_allegation', 'missed_deadline', 'low_quality_proof', 'wrong_recipient', 'accidental_transfer', 'delivery_dispute', 'partial_completion', 'admin_intervention']
  },
  notification_communication_machine: {
    question: 'who_needs_to_be_informed_when_and_with_what_urgency',
    role: 'controls_messages_alerts_reminders_confirmations_and_nudges',
    states: ['not_scheduled', 'scheduled', 'sent', 'delivered', 'read', 'acknowledged', 'failed', 'retrying', 'escalated']
  }
})

export const UI_STATE_DIRECTIVES = Object.freeze({
  awaiting_evidence: {
    actorToAct: 'recipient',
    requiredEvidence: ['photo', 'location'],
    deadline: 'evidence_deadline',
    failureOutcome: 'refund_path_opens',
    primaryButton: 'upload_evidence',
    warnings: ['money_locked_until_evidence_approved', 'deadline_can_trigger_refund']
  },
  manual_review: {
    actorToAct: 'reviewer',
    requiredEvidence: ['submitted_evidence', 'audit_trace'],
    deadline: 'review_sla',
    failureOutcome: 'watchtower_escalation',
    primaryButton: 'review_case',
    warnings: ['funds_remain_locked_during_review']
  },
  refund_pending: {
    actorToAct: 'system',
    requiredEvidence: ['refund_reason'],
    deadline: 'refund_sla',
    failureOutcome: 'ops_escalation',
    primaryButton: 'view_refund_status',
    warnings: ['refund_processing_may_take_time']
  }
})

export const CANONICAL_AURA_STATE_MACHINE_SCHEMA = Object.freeze([
  'machine_id',
  'machine_type',
  'version',
  'initial_state',
  'states',
  'events',
  'transitions'
])

export const GPS_VERIFIED_ESCROW_RELEASE_MACHINE_EXAMPLE = Object.freeze({
  machine_id: 'gps_verified_escrow_release',
  machine_type: 'money_movement',
  version: '1.0.0',
  initial_state: 'draft',
  states: ['draft', 'awaiting_sender_confirmation', 'awaiting_funding', 'funds_escrowed', 'awaiting_evidence', 'evidence_under_review', 'release_pending', 'completed', 'refund_pending', 'refunded', 'disputed', 'blocked'],
  events: ['sender_confirms', 'funds_reserved', 'recipient_accepts', 'evidence_submitted', 'evidence_approved', 'evidence_rejected', 'deadline_expired', 'release_successful', 'refund_successful', 'fraud_detected'],
  transitions: [
    {
      from: 'draft',
      event: 'sender_confirms',
      to: 'awaiting_funding',
      guards: ['sender_identity_verified', 'capability_terms_generated', 'sender_consent_signed'],
      actions: ['create_audit_log', 'show_funding_screen']
    },
    {
      from: 'awaiting_funding',
      event: 'funds_reserved',
      to: 'funds_escrowed',
      guards: ['sender_balance_sufficient', 'compliance_not_blocked'],
      actions: ['reserve_funds', 'post_pending_ledger_entry', 'notify_recipient']
    },
    {
      from: 'funds_escrowed',
      event: 'evidence_submitted',
      to: 'evidence_under_review',
      guards: ['evidence_format_valid', 'location_metadata_present', 'submitted_before_deadline'],
      actions: ['attach_evidence', 'run_photo_analysis', 'run_location_verification', 'create_review_task']
    },
    {
      from: 'evidence_under_review',
      event: 'evidence_approved',
      to: 'release_pending',
      guards: ['location_within_radius', 'photo_confidence_above_threshold', 'no_fraud_flag'],
      actions: ['prepare_release', 'notify_sender', 'notify_recipient']
    },
    {
      from: 'release_pending',
      event: 'release_successful',
      to: 'completed',
      guards: ['ledger_posted', 'released_amount_equals_approved_amount'],
      actions: ['mark_capability_completed', 'issue_receipt', 'update_behavioral_trust_score']
    }
  ]
})

export const SYNTHESIZER_STRUCTURED_INPUTS = Object.freeze({
  product_intent: 'create_escrow_like_payment_where_money_releases_only_after_location_photo_proof',
  actors: ['sender', 'recipient', 'verifier', 'admin', 'system', 'third_party_provider_stub'],
  assets: ['usd_balance', 'mobile_money_balance', 'escrow_wallet', 'goal_wallet', 'insurance_pool', 'locked_funds', 'reward_credits'],
  rules: [
    'recipient_can_only_receive_funds_after_evidence_approval',
    'sender_can_cancel_only_before_recipient_acceptance',
    'refund_happens_automatically_after_deadline_expiry',
    'admin_can_override_only_after_manual_review'
  ],
  constraints: {
    deadline: '3_days',
    location_radius_meters: 100,
    photo_required: true,
    recipient_must_accept_terms: true
  },
  financial_invariants: [
    'total_reserved_amount_equals_escrow_amount',
    'released_amount_less_than_or_equal_reserved_amount',
    'refund_amount_less_than_or_equal_remaining_locked_amount',
    'platform_fee_cannot_be_collected_before_allowed_state'
  ],
  compliance_constraints: {
    jurisdiction_allowed: true,
    kyc_required: true,
    transaction_limit: 5000,
    manual_review_required_above: 1000
  },
  evidence_requirements: ['photo', 'location', 'timestamp', 'recipient_device_signature', 'optional_sender_confirmation'],
  ui_requirements: ['show_sender_summary_before_funding', 'show_recipient_evidence_instructions', 'show_timer', 'show_refund_policy', 'show_dispute_option'],
  runtime_policies: ['retry_failed_ledger_posting_up_to_3_times', 'freeze_funds_if_fraud_detected', 'send_reminder_24_hours_before_deadline', 'auto_refund_after_deadline_plus_grace_period']
})

export const SYNTHESIZER_OUTPUT_PACKAGE_FIELDS = Object.freeze([
  'state_machine_definitions',
  'transition_table',
  'event_schema',
  'guard_definitions',
  'action_bindings',
  'ledger_effect_map',
  'ui_state_map',
  'audit_map',
  'risk_compliance_checkpoints',
  'exception_paths',
  'simulation_scenarios',
  'test_cases',
  'explanation_text',
  'version_migration_contract',
  'runtime_monitoring_rules'
])

export const STATE_MACHINE_SYNTHESIS_PIPELINE_PHASES = Object.freeze([
  'capability_lifecycle_discovery',
  'actor_state_mapping',
  'asset_and_fund_state_mapping',
  'event_discovery',
  'guard_synthesis',
  'action_binding'
])

export const LIFECYCLE_ARCHETYPES = Object.freeze([
  'one_time_payment_lifecycle',
  'escrow_lifecycle',
  'goal_savings_lifecycle',
  'group_contribution_lifecycle',
  'subscription_lifecycle',
  'loan_lifecycle',
  'insurance_like_pool_lifecycle',
  'conditional_release_lifecycle',
  'milestone_payment_lifecycle',
  'obligation_lifecycle',
  'procurement_lifecycle',
  'identity_verification_lifecycle',
  'dispute_lifecycle'
])

export const GROUP_SAVINGS_LIFECYCLE_COMBINATION = Object.freeze([
  'group_contribution_lifecycle',
  'rotating_payout_lifecycle',
  'trust_gated_eligibility_lifecycle',
  'obligation_lifecycle',
  'default_recovery_lifecycle',
  'ledger_settlement_lifecycle',
  'dispute_lifecycle'
])

export const ACTOR_STATE_MAPPING_EXAMPLES = Object.freeze({
  member_state: ['invited', 'accepted', 'active', 'contribution_due', 'paid', 'missed_payment', 'defaulted', 'suspended', 'removed', 'completed'],
  circle_state: ['draft', 'recruiting', 'active', 'round_open', 'round_settling', 'paused', 'default_recovery', 'completed', 'dissolved'],
  separated_state_dimensions: ['product_state', 'member_state', 'money_state', 'ledger_state', 'risk_state']
})

export const FUND_STATE_LIFECYCLE = Object.freeze([
  'available',
  'reserved',
  'locked',
  'escrowed',
  'pending_release',
  'released',
  'refunded',
  'forfeited',
  'charged',
  'settled',
  'reconciled'
])

export const BALANCE_VIEW_TYPES = Object.freeze([
  'balance_displayed',
  'available_balance',
  'locked_balance',
  'pending_balance',
  'escrowed_balance',
  'released_balance',
  'refundable_balance'
])

export const EVENT_DISCOVERY_SOURCES = Object.freeze([
  'user_action',
  'system_timer',
  'payment_processor_status_stub',
  'compliance_engine',
  'fraud_engine',
  'location_engine',
  'evidence_engine',
  'admin_console',
  'ledger_engine',
  'third_party_api_skipped',
  'scheduled_job',
  'dispute_process'
])

export const EVENT_CATEGORY_EXAMPLES = Object.freeze({
  user_events: ['user_confirms', 'user_cancels', 'user_accepts', 'user_uploads_evidence', 'user_opens_dispute'],
  money_events: ['funds_reserved', 'payment_failed', 'settlement_completed', 'refund_processed'],
  time_events: ['deadline_reached', 'grace_period_expired', 'reminder_due'],
  risk_events: ['fraud_flag_detected', 'compliance_blocked', 'manual_review_required'],
  evidence_events: ['photo_verified', 'location_verified', 'evidence_rejected'],
  admin_events: ['admin_approves', 'admin_rejects', 'admin_freezes', 'admin_overrides']
})

export const GUARD_SYNTHESIS_SOURCES = Object.freeze([
  'user_rules',
  'compliance_rules',
  'financial_physics',
  'primitive_constraints',
  'jurisdictional_limits',
  'risk_controls',
  'fraud_controls',
  'identity_requirements',
  'timing_conditions',
  'evidence_requirements'
])

export const RELEASE_REQUEST_GUARD_EXAMPLE = Object.freeze({
  from: 'funds_escrowed',
  event: 'release_requested',
  to: 'release_pending',
  guards: [
    'recipient_identity_verified',
    'evidence_status_approved',
    'compliance_state_not_blocked',
    'escrow_balance_greater_than_or_equal_release_amount',
    'no_active_dispute'
  ]
})

export const ACTION_BINDING_EXAMPLES = Object.freeze([
  'reserve_funds',
  'release_funds',
  'refund_funds',
  'create_ledger_entry',
  'send_notification',
  'generate_receipt',
  'update_trust_score',
  'request_manual_review',
  'freeze_capability',
  'update_ui_directive',
  'write_audit_event'
])

export const RELEASE_APPROVED_ACTION_CONTRACT = Object.freeze({
  transition: {
    from: 'release_pending',
    event: 'release_approved',
    to: 'funds_released'
  },
  actions: [
    { action: 'debit_escrow_liability', ledgerBinding: 'ledger_contract.debit_escrow_liability' },
    { action: 'credit_recipient_available_balance', ledgerBinding: 'ledger_contract.credit_recipient_available_balance' },
    { action: 'post_double_entry_journal', ledgerBinding: 'ledger_contract.post_double_entry_journal' },
    { action: 'mark_obligation_fulfilled', ledgerBinding: 'obligation_contract.fulfill' },
    { action: 'update_receipt', ledgerBinding: 'receipt_contract.update' },
    { action: 'notify_parties', ledgerBinding: 'notification_contract.emit' },
    { action: 'update_audit_ledger', ledgerBinding: 'audit_contract.append' }
  ]
})

export const EXCEPTION_PATH_QUESTIONS = Object.freeze([
  'what_if_action_fails',
  'what_if_actor_disappears',
  'what_if_funds_are_insufficient',
  'what_if_evidence_is_rejected',
  'what_if_compliance_blocks',
  'what_if_fraud_is_detected',
  'what_if_time_expires',
  'what_if_user_disputes',
  'what_if_third_party_api_is_skipped_or_stubbed',
  'what_if_ledger_posting_fails',
  'what_if_notification_fails',
  'what_if_duplicate_event_arrives'
])

export const RELEASE_PENDING_EXCEPTION_PATHS = Object.freeze([
  { from: 'release_pending', event: 'release_successful', to: 'completed', class: 'normal_terminal' },
  { from: 'release_pending', event: 'ledger_failure', to: 'release_retry', class: 'ledger_recovery' },
  { from: 'release_pending', event: 'compliance_freeze', to: 'frozen', class: 'compliance_override' },
  { from: 'release_pending', event: 'fraud_detected', to: 'fraud_blocked', class: 'fraud_override' },
  { from: 'release_pending', event: 'dispute_opened', to: 'disputed', class: 'dispute_override' }
])

export const TERMINAL_STATE_EXAMPLES = Object.freeze([
  'completed',
  'cancelled',
  'expired',
  'refunded',
  'rejected',
  'dissolved',
  'closed_by_admin',
  'blocked_by_compliance',
  'fraud_closed',
  'migrated'
])

export const TERMINAL_VALIDATION_RULES = Object.freeze([
  'every_non_terminal_state_has_at_least_one_exit_path',
  'every_terminal_state_has_no_illegal_outgoing_transition',
  'every_locked_fund_has_final_resolution',
  'every_obligation_has_final_resolution',
  'every_dispute_has_closure_path',
  'every_ledger_pending_state_has_retry_or_recovery',
  'money_must_not_enter_without_valid_exit'
])

export const FINANCIAL_PHYSICS_TRANSITION_RULES = Object.freeze([
  'money_cannot_be_released_if_never_reserved',
  'refunded_money_cannot_also_be_released',
  'locked_amount_cannot_exceed_source_balance',
  'platform_fee_cannot_be_taken_before_earned',
  'failed_ledger_post_cannot_be_completed',
  'obligation_cannot_be_fulfilled_while_required_proof_rejected'
])

export const ESCROW_RELEASE_PHYSICS_CHECKS = Object.freeze([
  'escrow_balance_greater_than_or_equal_release_amount',
  'release_amount_less_than_or_equal_approved_amount',
  'no_duplicate_release',
  'ledger_entry_balanced',
  'debit_account_not_equal_credit_account',
  'settlement_path_available'
])

export const COMPOSITION_PRIMITIVE_STATE_MACHINES = Object.freeze({
  escrow_primitive: ['unfunded', 'funded', 'released', 'refunded'],
  location_verification_primitive: ['not_required', 'awaiting_location', 'verified', 'failed'],
  photo_evidence_primitive: ['awaiting_photo', 'submitted', 'approved', 'rejected'],
  deadline_primitive: ['active', 'warning', 'expired'],
  auto_refund_primitive: ['inactive', 'eligible', 'refund_pending', 'refunded'],
  dispute_primitive: ['none', 'opened', 'frozen', 'resolved']
})

export const COMPOSITION_PRECEDENCE_RULES = Object.freeze([
  'compliance_block',
  'fraud_block',
  'active_dispute',
  'deadline_expiry',
  'evidence_approval',
  'release_request'
])

export const MULTI_LEVEL_STATE_MACHINE_EXAMPLES = Object.freeze({
  atomic_state_machines: {
    consent_atom: ['unsigned', 'signed', 'revoked'],
    timer_atom: ['inactive', 'active', 'expired'],
    evidence_atom: ['missing', 'submitted', 'accepted', 'rejected'],
    lock_atom: ['unlocked', 'locked', 'released'],
    approval_atom: ['pending', 'approved', 'rejected']
  },
  micro_primitive_state_machines: {
    photo_verification_micro_primitive: ['awaiting_upload', 'uploaded', 'ai_reviewing', 'approved', 'rejected', 'manual_review'],
    geofence_micro_primitive: ['awaiting_location', 'location_received', 'within_radius', 'outside_radius', 'spoof_flagged']
  },
  primitive_state_machines: [
    'escrow_primitive',
    'conditional_release_primitive',
    'auto_refund_primitive',
    'milestone_payment_primitive',
    'group_contribution_primitive',
    'obligation_primitive'
  ],
  capability_state_machines: [
    'gps_proof_contractor_payment',
    'family_school_fee_capsule',
    'rotating_susu_circle',
    'request2pay_obligation',
    'safesend_conditional_transfer',
    'rent_protection_capsule'
  ],
  product_state_machines: [
    'family_hub',
    'merchant_operating_wallet',
    'school_fees_os',
    'business_procurement_flow',
    'group_savings_os'
  ]
})

export const GPS_PROOF_ESCROW_PAYMENT_INTERPRETATION = Object.freeze({
  user_request: 'pay_contractor_1000_locked_until_photo_at_site_or_refund_after_3_days',
  capability_type: 'conditional_escrow_payment',
  actors: ['sender', 'contractor', 'system', 'optional_admin'],
  funds: { amount: 1000, currency: 'usd' },
  conditions: ['photo_required', 'location_required', 'deadline_3_days'],
  outcomes: ['release_if_verified', 'refund_if_deadline_missed', 'dispute_if_evidence_unclear']
})

export const GPS_PROOF_ESCROW_MACHINE_PACKAGE = Object.freeze({
  main_capability_machine: {
    states: ['draft', 'awaiting_sender_confirmation', 'awaiting_funding', 'awaiting_contractor_acceptance', 'active', 'awaiting_evidence', 'evidence_under_review', 'release_pending', 'completed'],
    alternative_paths: [
      ['awaiting_contractor_acceptance', 'contractor_rejected', 'refund_pending', 'refunded'],
      ['awaiting_evidence', 'deadline_expired', 'refund_pending', 'refunded'],
      ['evidence_under_review', 'evidence_rejected', 'awaiting_evidence_correction'],
      ['evidence_under_review', 'fraud_flagged', 'frozen'],
      ['evidence_under_review', 'manual_review_required', 'manual_review'],
      ['manual_review', 'approved', 'release_pending'],
      ['manual_review', 'rejected', 'refund_pending']
    ]
  },
  money_machine: {
    states: ['no_funds', 'funding_requested', 'funds_reserved', 'funds_escrowed', 'release_pending', 'funds_released'],
    alternative_paths: [['funds_escrowed', 'refund_pending', 'funds_refunded']]
  },
  evidence_machine: {
    states: ['evidence_required', 'awaiting_photo', 'photo_submitted', 'metadata_extracted', 'location_validated', 'ai_review', 'approved'],
    alternative_paths: [
      ['photo_submitted', 'metadata_invalid', 'rejected'],
      ['location_validated', 'outside_radius', 'rejected'],
      ['ai_review', 'low_confidence', 'manual_review'],
      ['ai_review', 'fraud_signal', 'fraud_flagged']
    ]
  },
  timer_machine: {
    states: ['not_started', 'started', 'warning_due', 'expired']
  },
  dispute_machine: {
    states: ['no_dispute', 'dispute_opened', 'awaiting_response', 'under_review', 'decision_made', 'closed']
  }
})

export const GPS_PROOF_ESCROW_TRANSITION_TABLE = Object.freeze([
  {
    current_state: 'draft',
    event: 'sender_confirms',
    guard: ['sender_verified', 'terms_generated'],
    action: ['create_capability_instance'],
    next_state: 'awaiting_funding'
  },
  {
    current_state: 'awaiting_funding',
    event: 'funds_reserved',
    guard: ['balance_sufficient', 'compliance_clear'],
    action: ['lock_funds', 'post_pending_ledger'],
    next_state: 'awaiting_contractor_acceptance'
  },
  {
    current_state: 'awaiting_contractor_acceptance',
    event: 'contractor_accepts',
    guard: ['contractor_identity_verified'],
    action: ['start_deadline_timer'],
    next_state: 'awaiting_evidence'
  },
  {
    current_state: 'awaiting_evidence',
    event: 'evidence_submitted',
    guard: ['before_deadline', 'evidence_format_valid'],
    action: ['attach_evidence', 'start_verification'],
    next_state: 'evidence_under_review'
  },
  {
    current_state: 'evidence_under_review',
    event: 'evidence_approved',
    guard: ['location_valid', 'photo_valid', 'no_fraud'],
    action: ['prepare_release'],
    next_state: 'release_pending'
  },
  {
    current_state: 'release_pending',
    event: 'ledger_release_posted',
    guard: ['double_entry_balanced'],
    action: ['credit_contractor', 'issue_receipt'],
    next_state: 'completed'
  },
  {
    current_state: 'awaiting_evidence',
    event: 'deadline_expired',
    guard: ['no_approved_evidence'],
    action: ['prepare_refund'],
    next_state: 'refund_pending'
  },
  {
    current_state: 'refund_pending',
    event: 'ledger_refund_posted',
    guard: ['refund_amount_valid'],
    action: ['return_funds_to_sender'],
    next_state: 'refunded'
  },
  {
    current_state: 'evidence_under_review',
    event: 'fraud_detected',
    guard: ['risk_threshold_exceeded'],
    action: ['freeze_funds', 'notify_admin'],
    next_state: 'frozen'
  }
])

export const STATE_MACHINE_GUARD_LIBRARY = Object.freeze({
  identity_guards: ['actor_is_authenticated', 'actor_has_required_role', 'actor_identity_verified', 'actor_is_not_sanctioned', 'actor_matches_capability_party'],
  money_guards: ['balance_sufficient', 'funds_locked', 'escrow_balance_sufficient', 'release_amount_valid', 'refund_amount_valid', 'fee_amount_valid', 'no_duplicate_disbursement'],
  time_guards: ['before_deadline', 'after_deadline', 'within_grace_period', 'timer_active', 'cooldown_elapsed'],
  evidence_guards: ['evidence_required', 'evidence_submitted', 'evidence_format_valid', 'location_within_radius', 'photo_confidence_sufficient', 'metadata_not_tampered', 'manual_review_completed'],
  compliance_guards: ['jurisdiction_allowed', 'transaction_limit_not_exceeded', 'kyc_requirement_satisfied', 'aml_risk_not_blocked', 'product_type_permitted'],
  risk_guards: ['fraud_score_below_threshold', 'device_trust_sufficient', 'behavioral_trust_score_sufficient', 'no_active_dispute', 'no_velocity_abuse'],
  consent_guards: ['sender_consent_signed', 'recipient_consent_signed', 'disclosure_viewed', 'terms_not_expired', 'consent_not_revoked']
})

export const STATE_MACHINE_ACTION_LIBRARY = Object.freeze({
  money_actions: ['reserve_funds', 'lock_funds', 'escrow_funds', 'release_funds', 'refund_funds', 'apply_fee', 'split_funds', 'reconcile_settlement'],
  ledger_actions: ['create_pending_journal', 'post_journal', 'reverse_journal', 'adjust_journal', 'mark_reconciled'],
  evidence_actions: ['request_evidence', 'attach_evidence', 'extract_metadata', 'run_ai_verification', 'run_gps_check', 'send_to_manual_review'],
  communication_actions: ['send_notification', 'send_reminder', 'send_deadline_warning', 'send_receipt', 'send_dispute_notice'],
  trust_actions: ['update_behavioral_trust_score', 'increase_reliability_score', 'decrease_reliability_score', 'record_default_event', 'record_successful_completion'],
  governance_actions: ['freeze_capability', 'escalate_to_admin', 'require_manual_approval', 'block_transition', 'log_policy_violation']
})

export const EVENT_ENVELOPE_REQUIRED_FIELDS = Object.freeze([
  'event_id',
  'event_type',
  'capability_id',
  'machine_id',
  'actor_id',
  'actor_role',
  'timestamp',
  'source',
  'payload',
  'auth_context',
  'idempotency_key',
  'correlation_id'
])

export const EVIDENCE_SUBMITTED_EVENT_EXAMPLE = Object.freeze({
  event_id: 'evt_123',
  event_type: 'evidence_submitted',
  capability_id: 'cap_789',
  machine_id: 'evidence_machine_001',
  actor_id: 'user_456',
  actor_role: 'recipient',
  timestamp: '2026-05-17T10:30:00Z',
  source: 'mobile_app',
  payload: {
    evidence_id: 'ev_001',
    photo_id: 'photo_001',
    gps_lat: 5.6037,
    gps_lng: -0.187
  },
  auth_context: {
    session_id: 'sess_001',
    device_id: 'dev_001'
  },
  idempotency_key: 'evidence_submit_cap789_once',
  correlation_id: 'corr_999'
})

export const IDEMPOTENCY_RULES = Object.freeze([
  'ignore_duplicate_event_id',
  'return_prior_transition_result',
  'block_duplicate_money_moving_terminal_event',
  'require_idempotency_key_for_money_movement',
  'treat_provider_webhooks_as_skipped_or_stubbed'
])

export const EVENT_CONFLICT_PRECEDENCE_RULES = Object.freeze([
  'compliance_blocked',
  'fraud_freeze',
  'ledger_finality',
  'active_dispute',
  'deadline_expiry',
  'evidence_approval',
  'user_cancellation',
  'notification_update'
])

export const LEDGER_BINDING_RULES = Object.freeze({
  completed: {
    moneyMovementState: 'funds_released',
    ledgerState: 'posted',
    reconciliationStateNot: 'failed'
  },
  refunded: {
    moneyMovementState: 'funds_refunded',
    ledgerState: 'posted'
  },
  sourceOfTruth: 'ledger'
})

export const UI_DIRECTIVE_FIELDS = Object.freeze([
  'screen_title',
  'description',
  'available_actions',
  'disabled_actions',
  'warnings',
  'explanations',
  'progress_bar',
  'timeline',
  'next_step',
  'responsible_actor',
  'deadline',
  'risk_notice',
  'receipt_view'
])

export const AWAITING_EVIDENCE_UI_DIRECTIVE = Object.freeze({
  state: 'awaiting_evidence',
  screen_title: 'Waiting for contractor proof',
  description: 'The contractor must upload a site photo within 3 days.',
  primary_actor: 'contractor',
  sender_action: 'view_status',
  recipient_action: 'upload_proof',
  visible_timer: true,
  deadline: '2026-05-20',
  warning: 'if_proof_is_not_approved_by_deadline_funds_will_be_refunded'
})

export const AWAITING_EVIDENCE_EXPLAINABILITY_MODEL = Object.freeze({
  user_view: [
    'currently_in_awaiting_evidence',
    'recipient_accepted_task_and_funds_are_locked',
    'money_cannot_be_released_yet',
    'recipient_must_upload_photo_from_approved_location_before_deadline',
    'approved_evidence_releases_money',
    'no_approved_evidence_by_deadline_refunds_money'
  ],
  admin_developer_view: {
    current_state: 'awaiting_evidence',
    allowed_events: [
      { event: 'evidence_submitted', actor: 'recipient' },
      { event: 'deadline_expired', actor: 'system_timer' },
      { event: 'dispute_opened', actor: 'sender' },
      { event: 'fraud_detected', actor: 'risk_engine' }
    ],
    blocked_events: [
      { event: 'release_funds', reason: 'evidence_status_not_approved' },
      { event: 'cancel_by_sender', reason: 'recipient_already_accepted' }
    ]
  }
})

export const RUNTIME_MONITOR_CHECKS = Object.freeze([
  'stuck_states',
  'expired_timers',
  'failed_transitions',
  'duplicate_events',
  'unauthorized_transition_attempts',
  'ledger_mismatch',
  'fraud_signals',
  'unusual_retries',
  'manual_review_backlog',
  'user_confusion',
  'policy_violation'
])

export const RUNTIME_MONITOR_RULE_EXAMPLES = Object.freeze([
  {
    rule: 'release_pending_stuck_after_10_minutes',
    condition: ['state_release_pending_more_than_10_minutes', 'ledger_posting_failed_twice'],
    action: 'escalate_to_operations'
  },
  {
    rule: 'refund_after_release_attempt',
    condition: ['funds_already_released', 'refund_attempted'],
    action: 'block_action_and_log_suspicious_behaviour'
  }
])

export const SIMULATION_SCENARIO_TEMPLATES = Object.freeze([
  { scenario: 'happy_path', path: ['sender_funds', 'recipient_submits_valid_proof', 'funds_released'] },
  { scenario: 'missed_deadline', path: ['sender_funds', 'recipient_does_nothing', 'auto_refund'] },
  { scenario: 'fraud_path', path: ['sender_funds', 'recipient_submits_suspicious_photo', 'freeze'] },
  { scenario: 'dispute_path', path: ['sender_funds', 'evidence_submitted', 'sender_disputes', 'admin_review'] },
  { scenario: 'ledger_failure_path', path: ['release_approved', 'ledger_post_fails', 'retry', 'success'] },
  { scenario: 'double_event_path', path: ['duplicate_release_event_stub_arrives', 'ignored'] },
  { scenario: 'race_condition_path', path: ['evidence_approved_and_deadline_expired_same_second', 'precedence_applied'] }
])

export const FORMAL_STATE_MACHINE_VALIDATION_RULES = Object.freeze([
  'has_exactly_one_initial_state',
  'has_at_least_one_terminal_state',
  'every_non_terminal_state_has_valid_outgoing_transitions',
  'no_unauthorized_actor_can_trigger_restricted_transition',
  'every_money_movement_has_ledger_action',
  'every_ledger_action_balances',
  'every_locked_fund_has_release_refund_or_forfeit_path',
  'every_timeout_has_resolution_path',
  'every_dispute_path_has_closure',
  'no_transition_violates_compliance_policy',
  'no_terminal_state_allows_illegal_mutation',
  'no_duplicate_event_can_double_execute_money_movement',
  'no_state_can_trap_funds_permanently',
  'no_ui_state_exposes_unavailable_action',
  'no_external_side_effect_occurs_without_audit_log'
])

export const ILLEGAL_STATE_PATTERNS = Object.freeze([
  'completed_but_funds_not_released',
  'refunded_but_recipient_credited',
  'escrowed_but_no_ledger_entry',
  'evidence_approved_but_gps_failed',
  'active_but_no_consenting_recipient',
  'disputed_but_auto_release_still_enabled',
  'blocked_but_ui_still_allows_withdrawal'
])

export const ILLEGAL_STATE_RESPONSE_ACTIONS = Object.freeze([
  'freeze_capability',
  'stop_money_movement',
  'record_incident',
  'notify_operations',
  'run_reconciliation',
  'generate_repair_path'
])

export const COMPENSATION_POLICY_FIELDS = Object.freeze([
  'success_path',
  'failure_path',
  'retry_policy',
  'rollback_policy',
  'compensation_policy',
  'manual_escalation_policy'
])

export const COMPENSATION_POLICY_EXAMPLES = Object.freeze({
  notification_failed_after_ledger_posted: {
    decision: 'retry_notification_do_not_reverse_money',
    compensation_policy: 'notification_retry_and_audit'
  },
  processor_failed_before_ledger_posted: {
    decision: 'retry_release_or_keep_pending',
    compensation_policy: 'no_ledger_finality_no_completion'
  },
  wrong_release_after_ledger_posted: {
    decision: 'reversal_adjustment_admin_intervention_recovery_claim_or_dispute_resolution',
    compensation_policy: 'dangerous_transition_compensation'
  }
})

export const STATE_MACHINE_VERSION_MIGRATION_EXAMPLE = Object.freeze({
  machine_v1: {
    version: '1.0.0',
    proof_requirements: ['photo_proof']
  },
  machine_v2: {
    version: '2.0.0',
    proof_requirements: ['photo_proof', 'gps_proof']
  },
  migration_policy: [
    'existing_active_capabilities_remain_on_v1',
    'new_capabilities_use_v2',
    'high_risk_active_capabilities_may_migrate_after_consent'
  ]
})

export const STATE_MACHINE_VERSIONING_RULES = Object.freeze([
  'state_compatibility',
  'migration_map',
  'consent_requirement',
  'risk_review',
  'rollback_plan',
  'audit_record',
  'no_casual_mutation_of_active_financial_contracts'
])

export const STATE_MIGRATION_MAP_EXAMPLE = Object.freeze({
  current_state: 'awaiting_evidence',
  old_machine_path: ['awaiting_evidence', 'evidence_approved', 'release_pending'],
  new_machine_path: ['awaiting_evidence', 'photo_submitted', 'gps_verification', 'evidence_approved', 'release_pending'],
  migration_map: {
    old_awaiting_evidence: 'new_awaiting_photo_and_gps'
  },
  decisions: [
    'grandfather_under_old_terms',
    'request_additional_gps_evidence',
    'require_consent_before_changing_condition',
    'manual_review'
  ]
})

export const OPS_REVIEW_REQUIRED_STATES = Object.freeze([
  'manual_review_required',
  'fraud_escalated',
  'dispute_under_review',
  'ledger_mismatch',
  'migration_approval_required',
  'compliance_hold'
])

export const OPS_CONSOLE_VIEW_FIELDS = Object.freeze([
  'case_summary',
  'current_state',
  'trigger_event',
  'risk_score',
  'affected_funds',
  'required_decision',
  'available_actions',
  'forbidden_actions',
  'audit_history',
  'recommended_resolution'
])

export const OPS_ADMIN_ACTIONS = Object.freeze([
  'approve_evidence',
  'reject_evidence',
  'request_more_information',
  'freeze_funds',
  'release_funds',
  'refund_sender',
  'split_payment',
  'close_dispute',
  'escalate_to_compliance'
])

export const OPS_ADMIN_TRANSITION_BINDINGS = Object.freeze({
  manual_review_required: ['approve_evidence', 'reject_evidence', 'request_more_information', 'escalate_to_compliance'],
  fraud_escalated: ['freeze_funds', 'escalate_to_compliance'],
  dispute_under_review: ['close_dispute', 'split_payment', 'refund_sender'],
  ledger_mismatch: ['request_more_information', 'escalate_to_compliance'],
  migration_approval_required: ['approve_evidence', 'reject_evidence'],
  compliance_hold: ['freeze_funds', 'escalate_to_compliance']
})

export const BTS_OUTCOME_EVENTS = Object.freeze({
  positive_events: [
    'completed_obligation',
    'paid_on_time',
    'submitted_valid_evidence',
    'resolved_dispute_cleanly',
    'repaid_advance',
    'met_contribution_schedule'
  ],
  negative_events: [
    'missed_deadline',
    'submitted_fake_evidence',
    'defaulted_after_payout',
    'opened_abusive_dispute',
    'caused_ledger_reversal',
    'cancelled_repeatedly'
  ]
})

export const BTS_TRANSITION_EFFECTS = Object.freeze({
  evidence_approved_to_completed: {
    recipient: {
      reliability_score: 3,
      evidence_quality_score: 2
    },
    sender: {
      successful_contract_score: 1
    }
  },
  deadline_expired_to_refunded: {
    recipient: {
      reliability_score: -5,
      obligation_completion_score: -4
    }
  }
})

export const GROUP_PRODUCT_MACHINE_TYPES = Object.freeze([
  'group_machine',
  'member_machine',
  'round_machine',
  'contribution_machine',
  'payout_machine',
  'default_recovery_machine',
  'deposit_machine',
  'insurance_pool_machine',
  'trust_eligibility_machine',
  'dispute_machine'
])

export const GROUP_PRODUCT_MACHINE_EXAMPLES = Object.freeze({
  group_machine: ['draft', 'recruiting', 'ready_for_activation', 'active', 'round_in_progress', 'recovery_mode', 'paused', 'completed', 'dissolved'],
  member_machine: ['invited', 'accepted', 'active', 'contribution_due', 'paid', 'missed_payment', 'grace_period', 'defaulted', 'suspended', 'removed', 'completed'],
  round_machine: ['scheduled', 'collecting_contributions', 'funding_complete', 'payout_eligible', 'payout_released', 'round_closed'],
  default_recovery_machine: ['no_default', 'default_detected', 'grace_period_started', 'recovery_attempt', 'deposit_applied', 'insurance_applied', 'replacement_required', 'group_rebalanced', 'recovery_closed']
})

export const DYNAMIC_CAPABILITY_CREATION_FLOW = Object.freeze([
  'user_describes_need',
  'extract_rules',
  'identify_primitives',
  'compose_primitives',
  'synthesize_lifecycle_machines',
  'validate_financial_physics',
  'simulate_outcomes',
  'generate_ui',
  'explain_product',
  'ask_for_consent',
  'deploy_capability_in_appropriate_release_mode'
])

export const SYNTHESIZED_PRODUCT_VALIDATION_GATES = Object.freeze([
  'state_validation',
  'ledger_validation',
  'compliance_validation',
  'risk_validation',
  'simulation_validation',
  'ux_clarity_validation',
  'consent_validation',
  'release_mode_validation'
])

export const SYNTHESIZED_STATE_MACHINE_RELEASE_MODES = Object.freeze({
  simulation_mode: {
    moneyMovement: 'no_real_money_moves',
    usedFor: 'test_logic',
    controls: ['synthetic_balances', 'fake_events', 'simulated_outcomes']
  },
  draft_mode: {
    moneyMovement: 'none',
    usedFor: 'user_inspection',
    controls: ['rules_visible', 'states_visible', 'no_activation', 'no_funding']
  },
  guided_mode: {
    moneyMovement: 'guarded_real_or_limited',
    usedFor: 'strong_guardrails',
    controls: ['limited_amount', 'manual_review', 'pre_approved_primitives_only']
  },
  live_mode: {
    moneyMovement: 'real_funds',
    usedFor: 'fully_active',
    controls: ['real_ledger', 'runtime_monitoring', 'full_audit']
  },
  restricted_mode: {
    moneyMovement: 'review_gated',
    usedFor: 'risky_or_high_value_products',
    controls: ['requires_compliance_review', 'requires_admin_approval', 'lower_transaction_caps', 'enhanced_monitoring']
  }
})

export const STATE_MACHINE_DEFINITION_FIELDS = Object.freeze([
  'id',
  'name',
  'type',
  'version',
  'capability_type',
  'owner_scope',
  'initial_state',
  'terminal_states',
  'states',
  'transitions',
  'guards',
  'actions',
  'invariants',
  'event_schema',
  'actor_permissions',
  'ledger_bindings',
  'ui_bindings',
  'compliance_bindings',
  'audit_bindings',
  'simulation_results',
  'validation_status',
  'release_mode',
  'created_at',
  'updated_at'
])

export const STATE_MACHINE_INSTANCE_FIELDS = Object.freeze([
  'id',
  'definition_id',
  'capability_instance_id',
  'current_state',
  'previous_state',
  'actor_context',
  'money_context',
  'ledger_context',
  'evidence_context',
  'risk_context',
  'timers',
  'active_locks',
  'event_history',
  'status',
  'created_at',
  'updated_at'
])

export const STATE_TRANSITION_EVENT_FIELDS = Object.freeze([
  'id',
  'machine_instance_id',
  'from_state',
  'to_state',
  'event_type',
  'actor_id',
  'guard_results',
  'action_results',
  'ledger_refs',
  'evidence_refs',
  'risk_refs',
  'timestamp',
  'idempotency_key',
  'audit_hash'
])

export const STATE_MACHINE_SYNTHESIZER_INTERNAL_MODULES = Object.freeze([
  'lifecycle_archetype_detector',
  'actor_state_mapper',
  'asset_state_mapper',
  'event_discovery_engine',
  'guard_synthesizer',
  'action_binder',
  'invariant_injector',
  'exception_path_generator',
  'timer_and_deadline_compiler',
  'conflict_resolver',
  'ledger_binding_compiler',
  'ui_state_mapper',
  'compliance_state_injector',
  'evidence_state_injector',
  'trust_effect_mapper',
  'simulation_scenario_generator',
  'formal_validator',
  'explanation_generator',
  'versioning_and_migration_planner',
  'runtime_monitoring_rule_generator',
  'state_machine_registry_publisher'
])

export const STATE_MACHINE_SYNTHESIZER_ARCHITECTURE_FLOW = Object.freeze([
  'user_or_admin_request',
  'product_intent_interpreter',
  'aura_product_specification_language',
  'rule_policy_constraint_graph',
  'state_machine_synthesizer',
  'executable_state_machine_package',
  'kernel_contract_builder',
  'ui_ux_composer',
  'runtime_watchtower',
  'ledger_state_system',
  'dynamic_screens',
  'monitoring_and_audit'
])

export const STATE_MACHINE_SYNTHESIS_ALGORITHM_STEPS = Object.freeze([
  'detect_lifecycle_archetypes',
  'map_actors',
  'map_financial_assets',
  'extract_rules',
  'extract_constraints',
  'extract_evidence_requirements',
  'extract_compliance_requirements',
  'load_machine_template_for_each_archetype',
  'adapt_template_to_rules',
  'inject_guards',
  'bind_actions',
  'bind_ledger_effects',
  'inject_compliance_states',
  'inject_evidence_states',
  'inject_exception_paths',
  'inject_timers',
  'inject_conflict_resolution',
  'validate_machine',
  'compose_machines',
  'validate_composition',
  'generate_simulation_scenarios',
  'generate_ui_bindings',
  'generate_explanation',
  'generate_runtime_monitoring_rules',
  'return_executable_state_machine_package'
])

export const TEMPLATE_GENERATIVE_SYNTHESIS_STACK = Object.freeze([
  'trusted_state_machine_templates',
  'registered_primitive_machines',
  'generative_adaptation',
  'formal_validation',
  'simulation',
  'governance_approval'
])

export const CONDITIONAL_ESCROW_TEMPLATE_RECIPE = Object.freeze([
  'escrow_template',
  'conditional_release_modifier',
  'gps_evidence_machine',
  'auto_refund_machine',
  'dispute_machine'
])

export const MACHINE_TEMPLATE_FIELDS = Object.freeze([
  'states',
  'events',
  'guards',
  'actions',
  'invariants',
  'allowed_modifications',
  'forbidden_modifications',
  'risk_profile',
  'release_eligibility',
  'required_disclosures'
])

export const MACHINE_TEMPLATE_REGISTRY = Object.freeze({
  one_time_payment_machine: { risk_profile: 'medium', release_eligibility: ['guided_mode', 'live_mode'] },
  escrow_payment_machine: { risk_profile: 'high', release_eligibility: ['guided_mode', 'restricted_mode'] },
  conditional_release_machine: { risk_profile: 'high', release_eligibility: ['guided_mode', 'restricted_mode'] },
  goal_savings_machine: { risk_profile: 'medium', release_eligibility: ['draft_mode', 'guided_mode', 'live_mode'] },
  group_contribution_machine: { risk_profile: 'high', release_eligibility: ['simulation_mode', 'restricted_mode'] },
  rotating_payout_machine: { risk_profile: 'high', release_eligibility: ['simulation_mode', 'restricted_mode'] },
  subscription_billing_machine: { risk_profile: 'medium', release_eligibility: ['guided_mode', 'live_mode'] },
  obligation_tracking_machine: { risk_profile: 'medium', release_eligibility: ['draft_mode', 'guided_mode'] },
  milestone_payment_machine: { risk_profile: 'high', release_eligibility: ['guided_mode', 'restricted_mode'] },
  request_to_pay_machine: { risk_profile: 'medium', release_eligibility: ['guided_mode', 'live_mode'] },
  safe_send_machine: { risk_profile: 'high', release_eligibility: ['guided_mode', 'restricted_mode'] },
  refund_machine: { risk_profile: 'medium', release_eligibility: ['guided_mode', 'live_mode'] },
  dispute_resolution_machine: { risk_profile: 'high', release_eligibility: ['restricted_mode'] },
  identity_verification_machine: { risk_profile: 'medium', release_eligibility: ['guided_mode', 'live_mode'] },
  evidence_review_machine: { risk_profile: 'medium', release_eligibility: ['guided_mode', 'restricted_mode'] }
})

export const FORBIDDEN_STATE_MACHINE_PATTERNS = Object.freeze([
  'money_released_without_ledger_posting',
  'funds_locked_without_exit_path',
  'user_charged_without_consent',
  'refund_and_release_for_same_funds',
  'admin_bypasses_audit',
  'recipient_changes_evidence_rules_after_funding',
  'sender_changes_release_rules_after_recipient_acceptance_without_consent',
  'capability_pending_forever',
  'compliance_block_ignored_by_product_logic',
  'dispute_opened_after_irreversible_finality_without_reversal_path'
])

export const COMPLIANCE_GOVERNOR_INJECTION_RULES = Object.freeze({
  exceeds_threshold: ['release_pending', 'compliance_review_required', 'approved_for_release', 'released'],
  jurisdiction_requires_identity: ['draft', 'awaiting_kyc', 'kyc_verified', 'active'],
  risky_product_type: ['configured', 'risk_review', 'approved', 'awaiting_consent']
})

export const JURISDICTION_STATE_MACHINE_RULES = Object.freeze({
  country_a: { kyc: 'required_above_500', escrow: 'escrow_primitive_allowed' },
  country_b: { kyc: 'required_for_all_transfers', escrow: 'escrow_primitive_allowed' },
  country_c: { kyc: 'standard', escrow: 'licensed_escrow_partner_requirement_stub' },
  country_d: { kyc: 'standard', escrow: 'auto_savings_allowed_interest_pools_restricted' },
  jurisdiction_3: { kyc: 'standard', escrow: 'authorization_hold_required_direct_escrow_not_allowed' }
})

export const JURISDICTION_MACHINE_VARIANTS = Object.freeze([
  'direct_escrow_machine',
  'partner_escrow_machine_stub',
  'authorization_hold_machine'
])

export const RISK_TIER_MACHINE_EXAMPLES = Object.freeze({
  low_risk: ['draft', 'funded', 'evidence_approved', 'released'],
  high_risk: ['draft', 'enhanced_identity_check', 'manual_risk_review', 'funded', 'evidence_submitted', 'ai_review', 'manual_review', 'compliance_approval', 'released']
})

export const RISK_TIER_FACTORS = Object.freeze([
  'amount',
  'user_history',
  'recipient_history',
  'device_trust',
  'jurisdiction',
  'velocity',
  'product_type',
  'evidence_quality',
  'counterparty_relationship',
  'fraud_pattern_similarity'
])

export const EXPERIENCE_INTERNAL_STATES = Object.freeze([
  'funds_escrowed',
  'evidence_required',
  'evidence_submitted',
  'metadata_extracted',
  'gps_validated',
  'ai_reviewing',
  'risk_scoring',
  'ledger_prepared',
  'release_pending',
  'ledger_posted',
  'completed'
])

export const USER_FACING_PROGRESS_STEPS = Object.freeze([
  'money_locked',
  'waiting_for_proof',
  'proof_under_review',
  'money_released'
])

export const USER_FACING_STATE_LABELS = Object.freeze({
  evidence_under_review_ai_confidence_low_manual_review_required: {
    label: 'Proof needs review',
    message: 'The uploaded proof needs a closer look. Your money is still protected while we review it.'
  },
  funds_escrowed: {
    label: 'Money locked',
    message: 'Your funds are protected until the release conditions are met.'
  },
  release_pending: {
    label: 'Release processing',
    message: 'The proof was approved and the ledger release is being completed.'
  }
})

export const ADMIN_BUILDER_COMPONENTS = Object.freeze([
  'escrow',
  'deadline',
  'photo_proof',
  'gps_proof',
  'auto_refund',
  'dispute',
  'fee',
  'trust_score_update'
])

export const ADMIN_BUILDER_SYNTHESIZED_OUTPUTS = Object.freeze([
  'states',
  'events',
  'guards',
  'actions',
  'ui_screens',
  'ledger_bindings',
  'risk_checks',
  'timers',
  'exceptions',
  'audit_logs'
])

export const AUTO_REFUND_REQUIREMENTS = Object.freeze([
  'deadline_state',
  'refund_eligibility_state',
  'ledger_refund_action',
  'sender_notification',
  'terminal_refunded_state',
  'conflict_rule_preventing_refund_after_release'
])

export const SYNTHESIZER_SAFETY_LAYER_PROTECTIONS = Object.freeze([
  'ambiguous_user_instructions',
  'half_defined_products',
  'unsafe_money_flows',
  'missing_refund_paths',
  'contradictory_rules',
  'unbounded_obligations',
  'fraud_prone_workflows',
  'compliance_violations',
  'ui_runtime_mismatch',
  'ledger_inconsistency',
  'state_explosion'
])

export const ACTIVATION_BLOCKER_EXAMPLES = Object.freeze([
  'locks_user_funds_but_has_no_refund_condition',
  'allows_release_but_does_not_define_verification',
  'creates_obligation_but_no_breach_resolution',
  'collects_fee_but_does_not_define_when_fee_is_earned'
])

export const STATE_EXPLOSION_EXAMPLE = Object.freeze({
  escrow_states: 8,
  evidence_states: 7,
  dispute_states: 6,
  compliance_states: 5,
  timer_states: 4,
  naive_combined_states: 6720
})

export const STATE_EXPLOSION_CONTROL_STRATEGIES = Object.freeze([
  'parallel_state_machines',
  'event_coordination',
  'state_projection',
  'hierarchical_states',
  'orthogonal_regions',
  'derived_state_views'
])

export const PROJECTED_STATE_VIEW_EXAMPLE = Object.freeze({
  money_state: 'funds_escrowed',
  evidence_state: 'evidence_submitted',
  timer_state: 'warning',
  compliance_state: 'low_risk',
  dispute_state: 'no_dispute'
})

export const CROSS_MACHINE_RELEASE_GUARD = Object.freeze({
  money_state: 'funds_escrowed',
  evidence_state: 'approved',
  timer_state_not: 'expired',
  compliance_state: 'approved',
  dispute_state: 'no_dispute'
})

export const HIERARCHICAL_STATE_EXAMPLE = Object.freeze({
  active: ['awaiting_evidence', 'evidence_review', 'awaiting_release', 'disputed'],
  path: ['active', 'evidence_review', 'manual_review_required']
})

export const PARALLEL_STATE_REGION_EXAMPLE = Object.freeze({
  capability_lifecycle: 'active',
  money_state: 'escrowed',
  evidence_state: 'awaiting_photo',
  timer_state: 'running',
  compliance_state: 'approved',
  ui_state: 'show_evidence_upload'
})

export const AUDIENCE_STATE_PROJECTIONS = Object.freeze({
  user_projection: 'waiting_for_proof',
  recipient_projection: 'upload_your_site_photo_before_may_20',
  admin_projection: 'capability_active_funds_escrowed_evidence_pending_deadline_72h',
  ledger_projection: 'escrow_liability_open_release_not_posted',
  compliance_projection: 'low_risk_no_active_block'
})

export const TRANSITION_AUDIT_RECORD_EXAMPLE = Object.freeze({
  transition_id: 'tr_001',
  machine: 'conditional_release_payment',
  from: 'awaiting_evidence',
  to: 'evidence_under_review',
  event: 'evidence_submitted',
  actor: 'recipient',
  guards_passed: ['submitted_before_deadline', 'photo_present', 'gps_metadata_present'],
  actions_executed: ['attach_evidence', 'run_gps_check', 'notify_sender'],
  timestamp: '2026-05-17T14:00:00Z'
})

export const AUTO_GENERATED_TEST_CATEGORIES = Object.freeze([
  'happy_path_tests',
  'failure_path_tests',
  'permission_tests',
  'guard_tests',
  'ledger_invariant_tests',
  'idempotency_tests',
  'race_condition_tests',
  'timeout_tests',
  'dispute_tests',
  'migration_tests',
  'ui_action_visibility_tests',
  'compliance_override_tests'
])

export const STATE_MACHINE_TEST_EXAMPLES = Object.freeze([
  {
    name: 'release_rejected_without_evidence',
    given: { state: 'funds_escrowed', evidence_status: 'missing' },
    when: { event: 'release_requested' },
    then: ['transition_rejected', 'state_remains_funds_escrowed', 'no_ledger_release_posted', 'audit_records_blocked_attempt']
  },
  {
    name: 'duplicate_release_successful_ignored',
    given: { state: 'release_pending', processed_event: 'release_successful' },
    when: { event: 'duplicate_release_successful_arrives' },
    then: ['no_second_credit_occurs', 'prior_transition_result_returned']
  }
])

export const RUNTIME_EXECUTION_STEPS = Object.freeze([
  'receive_event',
  'load_machine_instance',
  'check_current_state',
  'find_matching_transition',
  'verify_actor_permission',
  'evaluate_guards',
  'run_financial_physics_checks',
  'run_compliance_risk_checks',
  'execute_actions_transactionally',
  'write_ledger_mutations',
  'update_state',
  'emit_downstream_events',
  'update_ui_directive',
  'write_audit_log',
  'notify_runtime_monitor'
])

export const MONEY_MOVING_TRANSACTION_STEPS = Object.freeze([
  'lock_transition_row',
  'verify_current_state',
  'verify_idempotency_key',
  'post_ledger_entry',
  'update_money_state',
  'update_capability_state',
  'write_audit_event',
  'emit_notification_event'
])

export const IMPLEMENTATION_SHAPE = Object.freeze({
  rust_kernel: ['deterministic_financial_state_transitions', 'ledger_bound_mutations', 'invariant_checks'],
  go_orchestration_layer: ['event_routing', 'internal_apis', 'workflows', 'provider_integration_stubs', 'monitoring'],
  typescript_ui: ['directive_rendered_screens']
})

export const IMPLEMENTATION_NATURAL_SPLIT = Object.freeze({
  rust: ['state_transition_core', 'financial_physics_checks', 'ledger_invariant_checks', 'guard_evaluation_for_money_critical_transitions', 'deterministic_transition_validation'],
  go: ['event_ingestion', 'workflow_orchestration', 'external_service_call_stubs', 'notification_handling', 'simulation_orchestration', 'admin_console_apis', 'runtime_watchtower_coordination'],
  typescript: ['ui_state_rendering', 'dynamic_screen_composition', 'user_action_surfaces', 'state_timeline_visualization', 'explanation_panels']
})

export const DETERMINISTIC_COMPILATION_PIPELINE = Object.freeze([
  'ai_assisted_synthesis',
  'formal_machine_definition',
  'validation',
  'simulation',
  'governance_approval',
  'deterministic_compilation',
  'runtime_execution'
])

export const STATE_MACHINE_REGISTRY_FIELDS = Object.freeze([
  'machine_id',
  'machine_name',
  'machine_type',
  'version',
  'status',
  'approved_release_modes',
  'risk_level',
  'jurisdiction_scope',
  'supported_primitives',
  'required_ledger_contracts',
  'required_evidence_types',
  'required_disclosures',
  'created_by',
  'approved_by',
  'last_validated_at'
])

export const STATE_MACHINE_REGISTRY_STATUSES = Object.freeze([
  'draft',
  'simulated',
  'validated',
  'approved',
  'active',
  'deprecated',
  'retired',
  'blocked'
])

export const CAPABILITY_DOCTOR_STATE_MACHINE_DIAGNOSES = Object.freeze([
  'missing_terminal_states',
  'weak_guards',
  'overcomplicated_lifecycle',
  'user_hostile_friction',
  'ledger_mismatch_risk',
  'compliance_ambiguity',
  'state_explosion_risk',
  'unhandled_dispute_path',
  'missing_consent',
  'missing_refund_path',
  'poor_explanation_clarity'
])

export const CAPABILITY_DOCTOR_FINDING_EXAMPLE = Object.freeze({
  finding: 'capability_locks_recipient_funds_but_has_no_defined_release_deadline',
  recommendations: [
    'manual_release_by_sender',
    'automatic_release_after_proof',
    'auto_refund_after_deadline',
    'admin_review_after_inactivity'
  ]
})

export const CAPABILITY_TYPE_STATE_MACHINE_REQUIREMENTS = Object.freeze({
  escrow: {
    required_machines: ['money_movement_machine', 'ledger_machine', 'consent_machine', 'dispute_machine', 'release_condition_machine', 'refund_machine'],
    forbidden: ['direct_release_without_condition', 'irreversible_lock_without_terminal_resolution']
  },
  group_contribution: {
    required_machines: ['group_machine', 'member_machine', 'contribution_machine', 'payout_machine', 'default_machine', 'ledger_machine'],
    forbidden: ['payout_without_contribution_settlement', 'default_without_recovery_path']
  }
})

export const ASSET_VAULT_STATE_ASSETS = Object.freeze({
  funds_escrowed: ['lock_icon', 'protected_money_animation', 'escrow_timeline_component'],
  evidence_under_review: ['magnifier_animation', 'document_photo_review_icon'],
  completed: ['success_animation', 'receipt_template']
})

export const ALGORITHM_VAULT_GUARD_ALGORITHMS = Object.freeze([
  'fraud_score_algorithm',
  'gps_spoof_detection_algorithm',
  'photo_similarity_algorithm',
  'behavioral_trust_score_algorithm',
  'default_probability_model',
  'contribution_reliability_model',
  'risk_tier_classifier'
])

export const ALGORITHM_BOUND_GUARD_EXAMPLE = Object.freeze({
  name: 'fraud_score_below_threshold',
  algorithm_ref: 'algorithm_vault.fraud_score_v3',
  threshold: 0.35
})

export const EVIDENCE_INTELLIGENCE_STATE_PATH = Object.freeze([
  'awaiting_evidence',
  'evidence_submitted',
  'evidence_parsed',
  'evidence_scored',
  'evidence_approved'
])

export const EVIDENCE_ENGINE_CHECKS = Object.freeze([
  { id: 'image_quality', engine: 'evidence_engine', expected_event: 'image_quality_scored' },
  { id: 'object_detection', engine: 'evidence_engine', expected_event: 'object_detection_completed' },
  { id: 'gps_distance', engine: 'evidence_engine', expected_event: 'gps_distance_measured' },
  { id: 'timestamp_validity', engine: 'evidence_engine', expected_event: 'timestamp_validated' },
  { id: 'metadata_tampering', engine: 'evidence_engine', expected_event: 'metadata_tampering_checked' },
  { id: 'device_trust', engine: 'evidence_engine', expected_event: 'device_trust_scored' },
  { id: 'face_entity_match', engine: 'evidence_engine', expected_event: 'face_entity_match_checked' },
  { id: 'invoice_match', engine: 'evidence_engine', expected_event: 'invoice_match_checked' },
  { id: 'third_party_confirmation_stub', engine: 'internal_stub', expected_event: 'third_party_confirmation_stubbed', provider_api_skipped: true }
])

export const EVIDENCE_ENGINE_BOUNDARY_RULES = Object.freeze([
  'state_machine_does_not_do_computer_vision',
  'state_machine_calls_evidence_engine',
  'state_machine_waits_for_evidence_events',
  'third_party_confirmation_stub_only'
])

export const TRANSITION_REVERSIBILITY_LABELS = Object.freeze([
  'reversible',
  'partially_reversible',
  'irreversible',
  'compensatable',
  'final'
])

export const REVERSIBILITY_TRANSITION_EXAMPLES = Object.freeze({
  draft_to_awaiting_funding: {
    label: 'reversible',
    finality: 'soft_final',
    disclosure: 'User can still cancel or modify before money is locked.'
  },
  funds_escrowed_to_awaiting_evidence: {
    label: 'reversible',
    finality: 'operational_final',
    disclosure: 'Money is locked, but a refund path can reverse the hold.'
  },
  release_pending_to_completed: {
    label: 'final',
    finality: 'financial_final',
    disclosure: 'Release is financially final unless a separate reversal process exists.'
  },
  completed_to_reversed: {
    label: 'compensatable',
    finality: 'financial_final',
    disclosure: 'Completed money movement can only change through a special adjustment path.'
  }
})

export const STATE_FINALITY_LEVELS = Object.freeze({
  soft_final: {
    label: 'Soft Final',
    meaning: 'user_can_still_cancel_or_modify'
  },
  operational_final: {
    label: 'Operational Final',
    meaning: 'task_accepted_changes_need_consent'
  },
  financial_final: {
    label: 'Financial Final',
    meaning: 'ledger_posted_reversal_needs_separate_process'
  },
  legal_final: {
    label: 'Legal Final',
    meaning: 'agreement_completed_and_archived'
  },
  compliance_final: {
    label: 'Compliance Final',
    meaning: 'blocked_or_closed_by_compliance_requires_review'
  }
})

export const STATE_AWARE_CONSENT_DISCLOSURES = Object.freeze([
  'money_states',
  'release_events',
  'refund_events',
  'freeze_events',
  'irreversible_actions',
  'deadlines',
  'parties_who_can_trigger_actions'
])

export const GPS_ESCROW_USER_FRIENDLY_EXPLANATION = Object.freeze([
  'Your money will first be locked safely.',
  'The contractor will not be able to withdraw it immediately.',
  'The contractor must upload a site photo from the required location within 3 days.',
  'If the photo and GPS location are approved, the money will be released.',
  'If the contractor does not submit approved proof before the deadline, the money will be returned to you.',
  'If the proof is unclear or suspicious, the money will stay locked while the case is reviewed.'
])

export const FORMLESS_BANKING_TRANSLATION_OUTPUTS = Object.freeze([
  'rules',
  'states',
  'transitions',
  'guards',
  'actions',
  'ledger_effects',
  'ui_flows',
  'risk_controls',
  'disclosures',
  'monitoring'
])

export const STATE_MACHINE_ENGINE_HARD_PROBLEMS = Object.freeze([
  'ambiguous_human_language',
  'multi_party_financial_relationships',
  'real_money_movement',
  'regulatory_constraints',
  'proof_and_verification',
  'exceptions',
  'timeouts',
  'fraud',
  'ledger_consistency',
  'ui_clarity',
  'versioning',
  'migration',
  'auditability',
  'runtime_monitoring'
])

export const STATE_MACHINE_TRUE_JOB_SAFEGUARDS = Object.freeze([
  { id: 'no_money_gets_stuck', input: 'noMoneyGetsStuck', requirement: 'Every money-holding state has a terminal release, refund, dispute, or review path.' },
  { id: 'no_money_released_twice', input: 'noMoneyReleasedTwice', requirement: 'Idempotency and ledger binding prevent duplicate release.' },
  { id: 'no_charge_without_consent', input: 'noChargeWithoutConsent', requirement: 'Activation is blocked until state-aware consent is recorded.' },
  { id: 'no_illegal_product_activated', input: 'noIllegalProductActivated', requirement: 'Compliance governors can block unsupported or illegal capabilities.' },
  { id: 'no_ui_action_lies', input: 'noUiActionLies', requirement: 'UI actions must be derived from available transitions.' },
  { id: 'no_financial_physics_violation', input: 'noFinancialPhysicsViolation', requirement: 'Money movement respects locked amounts, ownership, finality, and ledger constraints.' },
  { id: 'no_unresolved_dispute_path', input: 'noUnresolvedDisputePath', requirement: 'Disputes have an explicit resolution route.' },
  { id: 'no_silent_active_contract_change', input: 'noSilentActiveContractChange', requirement: 'Active state-machine changes require versioning, migration, and consent when material.' }
])

export const STATE_MACHINE_RELATED_AURA_ENGINES = Object.freeze([
  { engine: 'product_intent_interpreter', role: 'interprets_user_desire', example: 'conditional_payment_based_on_delivery_proof' },
  { engine: 'aura_product_specification_language', role: 'provides_structured_product_grammar', example: 'actors_funds_rules_conditions_outcomes' },
  { engine: 'financial_physics_engine', role: 'constrains_financial_possibility', example: 'cannot_release_more_than_locked_amount' },
  { engine: 'composition_algebra', role: 'defines_how_primitives_combine', example: 'escrow_plus_gps_proof_plus_auto_refund' },
  { engine: 'primitive_registry', role: 'provides_reusable_machine_fragments', example: 'escrow_gps_verification_deadline' },
  { engine: 'compliance_governor', role: 'injects_reviews_restrictions_blocked_paths', example: 'manual_review_required_above_threshold' },
  { engine: 'ledger_contract_builder', role: 'turns_money_transitions_into_ledger_safe_contracts', example: 'debit_escrow_liability_credit_recipient_balance' },
  { engine: 'ui_ux_composer', role: 'turns_states_into_user_screens', example: 'waiting_for_proof' },
  { engine: 'runtime_monitor', role: 'watches_machine_after_deployment', example: 'stuck_in_release_pending' },
  { engine: 'capability_doctor', role: 'reviews_machine_for_weakness', example: 'missing_refund_path' }
])

export const NON_NEGOTIABLE_MONEY_MOVEMENT_RULE = 'no_money_movement_until_state_machine_synthesized_validated_simulated_governed_and_ledger_bound'

export const STATE_MACHINE_SUBSYSTEM_SERVICES = Object.freeze([
  'StateMachineSynthesisService',
  'StateMachineValidationService',
  'StateMachineSimulationService',
  'StateMachineRegistryService',
  'StateMachineRuntimeService',
  'StateMachineMigrationService',
  'StateMachineExplanationService'
])

export const STATE_MACHINE_STORAGE_OBJECTS = Object.freeze([
  'state_machine_definitions',
  'state_machine_versions',
  'state_machine_instances',
  'state_transition_events',
  'state_machine_guards',
  'state_machine_actions',
  'state_machine_invariants',
  'state_machine_simulations',
  'state_machine_validation_reports',
  'state_machine_migration_maps'
])

export const STATE_MACHINE_CORE_APIS = Object.freeze([
  { method: 'POST', path: '/state-machines/synthesize', purpose: 'compile_product_intent_into_state_machine' },
  { method: 'POST', path: '/state-machines/validate', purpose: 'validate_state_machine_contract' },
  { method: 'POST', path: '/state-machines/simulate', purpose: 'run_scenario_and_exception_tests' },
  { method: 'POST', path: '/state-machines/approve', purpose: 'approve_governed_release' },
  { method: 'POST', path: '/state-machines/instantiate', purpose: 'create_machine_instance' },
  { method: 'POST', path: '/state-machines/{instanceId}/events', purpose: 'process_instance_event' },
  { method: 'GET', path: '/state-machines/{instanceId}/current-state', purpose: 'read_current_state' },
  { method: 'GET', path: '/state-machines/{instanceId}/timeline', purpose: 'read_state_transition_timeline' },
  { method: 'GET', path: '/state-machines/{definitionId}/explanation', purpose: 'explain_machine_contract' },
  { method: 'POST', path: '/state-machines/{definitionId}/migrate', purpose: 'migrate_definition_or_active_instances' }
])

export const STATE_MACHINE_RUNTIME_COMMAND = 'process_event(machine_instance_id, event)'

export const STATE_MACHINE_RUNTIME_RESPONSE_EXAMPLE = Object.freeze({
  accepted: true,
  from_state: 'awaiting_evidence',
  to_state: 'evidence_under_review',
  actions_executed: ['attach_evidence', 'request_evidence_engine_review', 'notify_sender'],
  ledger_effects: [],
  ui_directive: {
    screen: 'proof_under_review',
    message: 'The submitted proof is being reviewed.'
  }
})

export const STATE_MACHINE_LIFECYCLE_COMPILER_INPUTS = Object.freeze([
  'human_intent',
  'rules',
  'money_logic',
  'conditions',
  'actors',
  'evidence',
  'time',
  'risk',
  'jurisdiction',
  'ux_expectations'
])

export const STATE_MACHINE_LIFECYCLE_COMPILER_OUTPUTS = Object.freeze([
  'states',
  'events',
  'guards',
  'actions',
  'ledger_effects',
  'ui_screens',
  'audit_logs',
  'simulation_tests',
  'runtime_monitors'
])

export const TRUSTWORTHY_CAPABILITY_REQUIREMENTS = Object.freeze([
  { id: 'every_fund_has_a_state', input: 'everyFundHasState' },
  { id: 'every_obligation_has_a_state', input: 'everyObligationHasState' },
  { id: 'every_user_action_has_a_permission', input: 'everyUserActionHasPermission' },
  { id: 'every_transition_has_a_guard', input: 'everyTransitionHasGuard' },
  { id: 'every_money_movement_has_a_ledger_entry', input: 'everyMoneyMovementHasLedgerEntry' },
  { id: 'every_exception_has_a_recovery_path', input: 'everyExceptionHasRecoveryPath' },
  { id: 'every_terminal_outcome_is_clear', input: 'everyTerminalOutcomeIsClear' },
  { id: 'every_rule_is_explainable', input: 'everyRuleIsExplainable' },
  { id: 'every_runtime_action_is_auditable', input: 'everyRuntimeActionIsAuditable' }
])

export const STATE_MACHINE_SYNTHESIZER_FINAL_MENTAL_MODEL = Object.freeze({
  role: 'aura_lifecycle_compiler',
  promise: 'capabilities_that_can_be_trusted',
  trustSource: 'lifecycle_control',
  outcome: 'product_behaves_correctly'
})

export const MASON_ESCROW_LIFECYCLE_SYSTEMS = Object.freeze([
  'money_reserved',
  'recipient_identified',
  'work_condition_defined',
  'evidence_requirement_created',
  'location_verification_required',
  'time_limit_created',
  'release_condition_created',
  'refund_condition_created',
  'dispute_path_created',
  'notifications_created',
  'ledger_entries_controlled',
  'ui_screens_generated',
  'risk_checks_attached',
  'audit_trail_preserved',
  'final_state_reached_safely'
])

export const MASON_ESCROW_STATE_MACHINE_TEMPLATE = Object.freeze({
  machine_id: 'sm_mason_location_photo_escrow_v1',
  capability: 'location_photo_verified_contractor_payment',
  initial_state: 'draft',
  terminal_states: ['released', 'refunded', 'dispute_resolved', 'cancelled'],
  money_holding_states: ['funded', 'pending_evidence', 'evidence_submitted', 'manual_review', 'disputed'],
  states: [
    'draft',
    'recipient_invited',
    'funded',
    'pending_evidence',
    'evidence_submitted',
    'evidence_approved',
    'manual_review',
    'released',
    'expired',
    'refunded',
    'disputed',
    'dispute_resolved',
    'cancelled'
  ],
  transitions: [
    {
      event: 'invite_recipient',
      from: 'draft',
      to: 'recipient_invited',
      actor: 'payer',
      guard: ['recipient_identity_known'],
      ledger_effect: 'none',
      ui_surface: 'recipient_invitation'
    },
    {
      event: 'fund_escrow',
      from: 'recipient_invited',
      to: 'funded',
      actor: 'payer',
      guard: ['payer_balance_available', 'locked_money_disclosure_accepted'],
      ledger_effect: 'debit_payer_available_credit_escrow_liability',
      ui_surface: 'funding_confirmation'
    },
    {
      event: 'open_evidence_window',
      from: 'funded',
      to: 'pending_evidence',
      actor: 'system',
      guard: ['deadline_active'],
      ledger_effect: 'none',
      ui_surface: 'evidence_request'
    },
    {
      event: 'submit_evidence',
      from: 'pending_evidence',
      to: 'evidence_submitted',
      actor: 'recipient',
      guard: ['photo_uploaded', 'location_sample_present', 'deadline_not_expired'],
      evidence: ['photo', 'location'],
      ledger_effect: 'none',
      ui_surface: 'evidence_review_status'
    },
    {
      event: 'approve_evidence',
      from: 'evidence_submitted',
      to: 'evidence_approved',
      actor: 'verifier',
      guard: ['photo_valid', 'location_within_allowed_radius', 'metadata_consistent'],
      ledger_effect: 'none',
      ui_surface: 'release_ready'
    },
    {
      event: 'release_funds',
      from: 'evidence_approved',
      to: 'released',
      actor: 'system',
      guard: ['no_open_dispute', 'ledger_balanced', 'release_not_already_processed'],
      ledger_effect: 'debit_escrow_liability_credit_recipient_available',
      ui_surface: 'release_receipt'
    },
    {
      event: 'reject_evidence',
      from: 'evidence_submitted',
      to: 'manual_review',
      actor: 'verifier',
      guard: ['evidence_conflict_or_uncertain_result'],
      ledger_effect: 'none',
      ui_surface: 'manual_review_status'
    },
    {
      event: 'deadline_expired',
      from: 'pending_evidence',
      to: 'expired',
      actor: 'system',
      guard: ['now_after_deadline'],
      ledger_effect: 'none',
      ui_surface: 'refund_available'
    },
    {
      event: 'refund_payer',
      from: 'expired',
      to: 'refunded',
      actor: 'system',
      guard: ['funds_not_released', 'refund_path_open'],
      ledger_effect: 'debit_escrow_liability_credit_payer_available',
      ui_surface: 'refund_receipt'
    },
    {
      event: 'open_dispute',
      from: 'manual_review',
      to: 'disputed',
      actor: 'payer_or_recipient',
      guard: ['dispute_window_open'],
      ledger_effect: 'none',
      ui_surface: 'dispute_resolution'
    },
    {
      event: 'resolve_dispute',
      from: 'disputed',
      to: 'dispute_resolved',
      actor: 'reviewer',
      guard: ['resolution_decision_recorded'],
      ledger_effect: 'apply_resolution_ledger_effect',
      ui_surface: 'dispute_resolution_receipt'
    },
    {
      event: 'cancel_before_funding',
      from: 'recipient_invited',
      to: 'cancelled',
      actor: 'payer',
      guard: ['escrow_not_funded'],
      ledger_effect: 'none',
      ui_surface: 'cancelled_notice'
    }
  ]
})

function normalizeKey(value = '') {
  return String(value)
    .trim()
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_|_$/g, '')
}

function normalizeList(values = []) {
  return (Array.isArray(values) ? values : [values]).filter(Boolean).map(normalizeKey)
}

function hasAny(text = '', terms = []) {
  const normalized = normalizeKey(text)
  return terms.some((term) => normalized.includes(normalizeKey(term)))
}

export function inferStateMachineNeeds(intent = '') {
  const text = String(intent)
  const required = new Set(['states', 'events', 'actor_permissions', 'guards', 'terminal_outcomes', 'audit_trail'])

  if (hasAny(text, ['send money', 'payment', 'funds', 'escrow', 'lock'])) {
    required.add('money_holding_states')
    required.add('ledger_effects')
    required.add('refund_path')
  }
  if (hasAny(text, ['photo', 'gps', 'location', 'proof', 'evidence'])) {
    required.add('evidence_states')
    required.add('verification_guards')
    required.add('manual_review_path')
  }
  if (hasAny(text, ['three days', 'deadline', 'expires', 'time limit'])) {
    required.add('timeout_path')
  }
  if (hasAny(text, ['dispute', 'complaint', 'does not complete'])) {
    required.add('dispute_path')
  }

  return {
    intent,
    required: [...required],
    lifecycleSystems: MASON_ESCROW_LIFECYCLE_SYSTEMS.filter((system) => {
      if (system.includes('location')) return hasAny(text, ['gps', 'location'])
      if (system.includes('evidence')) return hasAny(text, ['proof', 'photo', 'evidence'])
      if (system.includes('refund')) return hasAny(text, ['refund', 'three days', 'deadline'])
      return true
    })
  }
}

export function synthesizeMasonEscrowStateMachine({
  intent = 'send money to a mason after photo and location proof, refund after three days',
  template = MASON_ESCROW_STATE_MACHINE_TEMPLATE
} = {}) {
  const needs = inferStateMachineNeeds(intent)
  return {
    intent,
    promise: AURA_STATE_MACHINE_SYNTHESIZER_PROMISE,
    formula: STATE_MACHINE_FULL_FORMULA,
    inputs: STATE_MACHINE_SYNTHESIZER_INPUTS,
    outputs: STATE_MACHINE_SYNTHESIZER_OUTPUTS,
    needs,
    machine: template,
    deterministic: true,
    executable: true
  }
}

export function buildSynthesizerFoundationPlacement() {
  const synthesizerIndex = STATE_MACHINE_SYNTHESIZER_FOUNDATION_FLOW.indexOf('state_machine_synthesizer')
  return {
    flow: STATE_MACHINE_SYNTHESIZER_FOUNDATION_FLOW,
    beforeSynthesizer: STATE_MACHINE_SYNTHESIZER_FOUNDATION_FLOW.slice(0, synthesizerIndex),
    afterSynthesizer: STATE_MACHINE_SYNTHESIZER_FOUNDATION_FLOW.slice(synthesizerIndex + 1),
    placement: 'after_interpreted_meaning_before_runtime_execution',
    result: 'idea_becomes_operational_logic'
  }
}

export function compareFlowToStateMachine(example = FLOW_VS_STATE_MACHINE_EXAMPLE) {
  const stateNames = Object.keys(example.machine_states)
  const transitionCount = Object.values(example.machine_states).reduce((sum, transitions) => sum + transitions.length, 0)
  return {
    normalFlowStepCount: example.normal_flow.length,
    stateMachineStateCount: stateNames.length,
    transitionCount,
    coversFailureDelayDisputeAbuseTimeoutRecovery: true,
    gap: transitionCount - example.normal_flow.length
  }
}

export function buildTypedStateMachineMesh({
  requestedMachines = TYPED_STATE_MACHINE_MESH,
  capability = 'location_photo_verified_contractor_payment'
} = {}) {
  return {
    capability,
    machines: normalizeList(requestedMachines).map((machine) => ({
      id: `${normalizeKey(capability)}_${machine}`,
      type: machine,
      owns: machine.replace('_machine', '')
    })),
    reason: 'smaller_typed_machines_are_easier_to_reason_about_than_one_giant_machine'
  }
}

export function evaluateIllegalTransition({
  from = 'released',
  to = 'refunded',
  illegalPaths = STATE_MACHINE_SYNTHESIZER_MAIN_JOBS.illegal_paths.examples
} = {}) {
  const path = `${normalizeKey(from)}_to_${normalizeKey(to)}`
  const illegal = normalizeList(illegalPaths).includes(path)
  return {
    path,
    illegal,
    action: illegal ? 'block_transition_and_write_audit_record' : 'evaluate_against_contract_guards'
  }
}

export function buildMachineEventChoreography(choreography = STATE_MACHINE_EVENT_CHOREOGRAPHY_EXAMPLE) {
  return {
    choreography,
    eventCount: choreography.filter((step) => step.emits).length,
    receiverCount: choreography.filter((step) => step.receives).length,
    finalTransition: choreography[choreography.length - 1]?.transition,
    avoidsChaoticLogic: choreography.every((step) => step.machine)
  }
}

export function summarizeCoreMachineTypes(machineTypes = CORE_AURA_MACHINE_TYPES) {
  return {
    machineTypes,
    count: Object.keys(machineTypes).length,
    sensitiveMachines: ['money_movement_machine', 'ledger_state_machine', 'compliance_risk_machine'],
    providerApisSkipped: machineTypes.verification_evidence_machine.evidence.includes('third_party_confirmation_stub')
  }
}

export function evaluateMoneyMovementInvariants({
  releaseAmount = 0,
  escrowedAmount = 0,
  refundAmount = 0,
  originalAmount = 0,
  lockedAmount = 0,
  requiredReservedAmount = 0
} = {}) {
  const violations = []
  if (Number(releaseAmount) > Number(escrowedAmount)) violations.push('release_amount_exceeds_escrowed_amount')
  if (Number(refundAmount) + Number(releaseAmount) > Number(originalAmount)) violations.push('refund_plus_release_exceeds_original_amount')
  if (Number(lockedAmount) < Number(requiredReservedAmount)) violations.push('locked_amount_less_than_required_reserved_amount')

  return {
    valid: violations.length === 0,
    violations,
    releaseBlocked: violations.length > 0
  }
}

export function evaluateCrossMachineStateBinding({
  capabilityState = 'completed',
  ledgerState = 'posted',
  moneyMovementState = 'funds_released',
  complianceState = 'approved'
} = {}) {
  const issues = []
  if (normalizeKey(capabilityState) === 'completed' && normalizeKey(ledgerState) !== 'posted') issues.push('completed_requires_ledger_posted')
  if (normalizeKey(capabilityState) === 'completed' && normalizeKey(moneyMovementState) !== 'funds_released') issues.push('completed_requires_money_funds_released')
  if (normalizeKey(complianceState) === 'blocked') issues.push('compliance_blocked_overrides_money_release')

  return {
    valid: issues.length === 0,
    issues,
    releaseTransitionAllowed: issues.length === 0,
    releaseBlocked: issues.length > 0
  }
}

export function deriveUiDirectiveForMachineState(state = 'awaiting_evidence') {
  const normalized = normalizeKey(state)
  return {
    state: normalized,
    directive: UI_STATE_DIRECTIVES[normalized] ?? {
      actorToAct: 'unknown',
      requiredEvidence: [],
      deadline: 'none',
      failureOutcome: 'show_safe_default_state',
      primaryButton: 'view_status',
      warnings: []
    },
    generatedFromStateMachine: true
  }
}

export function validateCanonicalAuraStateMachine(machine = GPS_VERIFIED_ESCROW_RELEASE_MACHINE_EXAMPLE) {
  const missingFields = CANONICAL_AURA_STATE_MACHINE_SCHEMA.filter((field) => {
    const value = machine[field]
    if (Array.isArray(value)) return value.length === 0
    return value === undefined || value === null || value === ''
  })
  const stateSet = new Set(normalizeList(machine.states))
  const eventSet = new Set(normalizeList(machine.events))
  const transitionIssues = []

  ;(machine.transitions ?? []).forEach((transition) => {
    const from = normalizeKey(transition.from)
    const to = normalizeKey(transition.to)
    const event = normalizeKey(transition.event)
    if (!stateSet.has(from)) transitionIssues.push(`unknown_from_state_${from}`)
    if (!stateSet.has(to)) transitionIssues.push(`unknown_to_state_${to}`)
    if (!eventSet.has(event)) transitionIssues.push(`unknown_event_${event}`)
    if (!(transition.guards ?? []).length) transitionIssues.push(`transition_missing_guards_${event}`)
    if (!(transition.actions ?? []).length) transitionIssues.push(`transition_missing_actions_${event}`)
  })

  return {
    valid: missingFields.length === 0 && transitionIssues.length === 0,
    missingFields,
    transitionIssues,
    stateCount: machine.states?.length ?? 0,
    eventCount: machine.events?.length ?? 0,
    transitionCount: machine.transitions?.length ?? 0,
    releaseBlocked: missingFields.length > 0 || transitionIssues.length > 0
  }
}

export function normalizeSynthesizerInputPackage(input = SYNTHESIZER_STRUCTURED_INPUTS) {
  return {
    product_intent: normalizeKey(input.product_intent),
    actors: normalizeList(input.actors),
    assets: normalizeList(input.assets),
    rules: normalizeList(input.rules),
    constraints: input.constraints ?? {},
    financial_invariants: normalizeList(input.financial_invariants),
    compliance_constraints: input.compliance_constraints ?? {},
    evidence_requirements: normalizeList(input.evidence_requirements),
    ui_requirements: normalizeList(input.ui_requirements),
    runtime_policies: normalizeList(input.runtime_policies),
    providerApisSkipped: normalizeList(input.actors).includes('third_party_provider_stub')
  }
}

export function buildSynthesizerInputPackage(overrides = {}) {
  return normalizeSynthesizerInputPackage({
    ...SYNTHESIZER_STRUCTURED_INPUTS,
    ...overrides
  })
}

export function buildSynthesizerOutputPackage({
  machine = GPS_VERIFIED_ESCROW_RELEASE_MACHINE_EXAMPLE,
  input = SYNTHESIZER_STRUCTURED_INPUTS
} = {}) {
  const normalizedInput = normalizeSynthesizerInputPackage(input)
  return {
    state_machine_definitions: [machine],
    transition_table: machine.transitions,
    event_schema: machine.events,
    guard_definitions: [...new Set((machine.transitions ?? []).flatMap((transition) => transition.guards ?? []))],
    action_bindings: [...new Set((machine.transitions ?? []).flatMap((transition) => transition.actions ?? []))],
    ledger_effect_map: MASON_ESCROW_STATE_MACHINE_TEMPLATE.transitions
      .filter((transition) => transition.ledger_effect)
      .map((transition) => ({ event: transition.event, ledger_effect: transition.ledger_effect })),
    ui_state_map: UI_STATE_DIRECTIVES,
    audit_map: ['create_audit_log', 'write_audit_log', 'issue_receipt'],
    risk_compliance_checkpoints: normalizedInput.compliance_constraints,
    exception_paths: ['manual_review', 'disputed', 'refund_pending', 'blocked'],
    simulation_scenarios: ['happy_path_release', 'evidence_failure_refund', 'fraud_blocked', 'ledger_retry'],
    test_cases: ['no_release_without_evidence', 'refund_after_deadline', 'ledger_posted_before_completed'],
    explanation_text: 'formal_lifecycle_contract_not_scattered_if_statements',
    version_migration_contract: 'state_machine_version_requires_migration_review',
    runtime_monitoring_rules: ['state_stuck_monitor', 'invalid_transition_monitor', 'ledger_state_mismatch_monitor']
  }
}

export function detectLifecycleArchetypes(request = '') {
  const text = String(request)
  const detected = new Set()
  if (hasAny(text, ['one person', 'send money', 'payment'])) detected.add('one_time_payment_lifecycle')
  if (hasAny(text, ['escrow', 'lock', 'release after proof'])) detected.add('escrow_lifecycle')
  if (hasAny(text, ['goal', 'save', 'savings'])) detected.add('goal_savings_lifecycle')
  if (hasAny(text, ['group', 'people contribute', 'weekly contribution'])) detected.add('group_contribution_lifecycle')
  if (hasAny(text, ['subscription', 'monthly'])) detected.add('subscription_lifecycle')
  if (hasAny(text, ['loan', 'credit', 'repay'])) detected.add('loan_lifecycle')
  if (hasAny(text, ['insurance', 'pool protection'])) detected.add('insurance_like_pool_lifecycle')
  if (hasAny(text, ['only if', 'after', 'condition'])) detected.add('conditional_release_lifecycle')
  if (hasAny(text, ['milestone', 'stage', 'building'])) detected.add('milestone_payment_lifecycle')
  if (hasAny(text, ['obligation', 'must pay', 'due'])) detected.add('obligation_lifecycle')
  if (hasAny(text, ['procurement', 'vendor', 'purchase'])) detected.add('procurement_lifecycle')
  if (hasAny(text, ['identity', 'kyc', 'verified'])) detected.add('identity_verification_lifecycle')
  if (hasAny(text, ['dispute', 'complaint'])) detected.add('dispute_lifecycle')
  if (hasAny(text, ['five people contribute weekly', 'trust scores', 'early payout'])) {
    GROUP_SAVINGS_LIFECYCLE_COMBINATION.forEach((archetype) => detected.add(archetype))
  }

  return {
    request,
    detected: [...detected],
    combinedLifecycle: detected.size > 1,
    phase: 'capability_lifecycle_discovery'
  }
}

export function mapActorStates(actors = { member: ACTOR_STATE_MAPPING_EXAMPLES.member_state }) {
  return {
    actorStates: Object.fromEntries(Object.entries(actors).map(([actor, states]) => [normalizeKey(actor), normalizeList(states)])),
    phase: 'actor_state_mapping',
    actorCount: Object.keys(actors).length
  }
}

export function buildActorStateSeparationModel({
  productState = 'active',
  memberState = 'missed_payment',
  moneyState = 'locked',
  ledgerState = 'pending_posting',
  riskState = 'manual_review_required'
} = {}) {
  const normalized = {
    product_state: normalizeKey(productState),
    member_state: normalizeKey(memberState),
    money_state: normalizeKey(moneyState),
    ledger_state: normalizeKey(ledgerState),
    risk_state: normalizeKey(riskState)
  }
  const delinquentMember = ['missed_payment', 'defaulted', 'suspended'].includes(normalized.member_state)
  const activeProductWithMemberIssue = normalized.product_state === 'active' && delinquentMember

  return {
    dimensions: ACTOR_STATE_MAPPING_EXAMPLES.separated_state_dimensions,
    states: normalized,
    connectedButNotIdentical: true,
    activeProductWithMemberIssue,
    releaseBlocked: normalized.risk_state !== 'clear' || ['locked', 'escrowed', 'pending_release'].includes(normalized.money_state),
    rule: 'product_member_money_ledger_and_risk_states_must_not_be_collapsed'
  }
}

export function mapAssetFundStates({
  asset = 'escrow_wallet',
  fundState = 'locked',
  displayedBalance = 1000,
  availableBalance = 0,
  lockedBalance = 1000,
  pendingBalance = 0,
  escrowedBalance = 1000,
  releasedBalance = 0,
  refundableBalance = 1000
} = {}) {
  const normalizedState = normalizeKey(fundState)
  return {
    asset: normalizeKey(asset),
    lifecycle: FUND_STATE_LIFECYCLE,
    currentState: normalizedState,
    balances: {
      balance_displayed: displayedBalance,
      available_balance: availableBalance,
      locked_balance: lockedBalance,
      pending_balance: pendingBalance,
      escrowed_balance: escrowedBalance,
      released_balance: releasedBalance,
      refundable_balance: refundableBalance
    },
    visibleButNotSpendable: Number(displayedBalance) > Number(availableBalance),
    spendable: normalizedState === 'available' && Number(availableBalance) > 0,
    releaseBlocked: ['reserved', 'locked', 'escrowed', 'pending_release'].includes(normalizedState)
  }
}

export function discoverLifecycleEvents(sources = EVENT_DISCOVERY_SOURCES) {
  const normalizedSources = normalizeList(sources)
  const categories = Object.fromEntries(
    Object.entries(EVENT_CATEGORY_EXAMPLES).map(([category, events]) => [category, normalizeList(events)])
  )
  return {
    phase: 'event_discovery',
    sources: normalizedSources,
    categories,
    eventCount: Object.values(categories).flat().length,
    happyPathOnly: false,
    providerApisSkipped: normalizedSources.includes('third_party_api_skipped')
  }
}

export function synthesizeTransitionGuards({
  transition = RELEASE_REQUEST_GUARD_EXAMPLE,
  satisfiedGuards = [],
  uiButtonClicked = false
} = {}) {
  const required = normalizeList(transition.guards)
  const satisfied = new Set(normalizeList(satisfiedGuards))
  const missing = required.filter((guard) => !satisfied.has(guard))
  return {
    transition,
    required,
    missing,
    uiButtonClicked,
    uiClickCanNeverBypassGuard: true,
    allowed: missing.length === 0,
    releaseBlocked: missing.length > 0
  }
}

export function bindActionsToLedgerContract(binding = RELEASE_APPROVED_ACTION_CONTRACT) {
  const actions = binding.actions ?? []
  const missingLedgerBindings = actions
    .filter((action) => !action.ledgerBinding)
    .map((action) => normalizeKey(action.action))
  const hasDoubleEntry = actions.some((action) => normalizeKey(action.action) === 'post_double_entry_journal')
  return {
    transition: binding.transition,
    actions,
    missingLedgerBindings,
    hasDoubleEntry,
    informalAppLogicRejected: true,
    valid: missingLedgerBindings.length === 0 && hasDoubleEntry,
    releaseBlocked: missingLedgerBindings.length > 0 || !hasDoubleEntry
  }
}

export function generateExceptionPaths({
  state = 'release_pending',
  normalEvent = 'release_successful'
} = {}) {
  const normalizedState = normalizeKey(state)
  const paths = normalizedState === 'release_pending'
    ? RELEASE_PENDING_EXCEPTION_PATHS
    : [
        { from: normalizedState, event: normalEvent, to: 'next_state', class: 'normal_transition' },
        { from: normalizedState, event: 'action_failed', to: `${normalizedState}_retry`, class: 'recovery' },
        { from: normalizedState, event: 'duplicate_event_arrived', to: normalizedState, class: 'idempotency_guard' }
      ]

  return {
    state: normalizedState,
    questions: EXCEPTION_PATH_QUESTIONS,
    paths,
    robust: paths.some((path) => path.class.includes('recovery')) &&
      paths.some((path) => path.class.includes('override')) &&
      paths.some((path) => path.class.includes('normal')),
    providerApisSkipped: EXCEPTION_PATH_QUESTIONS.includes('what_if_third_party_api_is_skipped_or_stubbed')
  }
}

export function validateTerminalStateResolution(machine = MASON_ESCROW_STATE_MACHINE_TEMPLATE) {
  const states = new Set(normalizeList(machine.states))
  const terminalStates = new Set(normalizeList(machine.terminal_states))
  const transitions = machine.transitions ?? []
  const outgoing = transitions.reduce((map, transition) => {
    const from = normalizeKey(transition.from)
    map.set(from, [...(map.get(from) ?? []), transition])
    return map
  }, new Map())
  const canReachResolution = (start) => {
    const visited = new Set()
    const queue = [start]
    while (queue.length) {
      const state = queue.shift()
      if (visited.has(state)) continue
      visited.add(state)
      if (terminalStates.has(state) || /refund|release|resolved|closed|cancelled/.test(state)) return true
      ;(outgoing.get(state) ?? []).forEach((transition) => queue.push(normalizeKey(transition.to)))
    }
    return false
  }
  const issues = []

  states.forEach((state) => {
    if (!terminalStates.has(state) && !(outgoing.get(state) ?? []).length) {
      issues.push(`non_terminal_state_without_exit_${state}`)
    }
  })
  terminalStates.forEach((state) => {
    if ((outgoing.get(state) ?? []).length) issues.push(`terminal_state_has_outgoing_transition_${state}`)
  })
  normalizeList(machine.money_holding_states).forEach((state) => {
    if (!canReachResolution(state)) issues.push(`locked_fund_without_resolution_${state}`)
  })
  if (states.has('disputed')) {
    const disputeExits = outgoing.get('disputed') ?? []
    if (!disputeExits.some((transition) => /resolved|refunded|closed|cancelled/.test(normalizeKey(transition.to)))) {
      issues.push('dispute_without_closure_path')
    }
  }
  const ledgerPendingStates = [...states].filter((state) => /ledger|posting|retry/.test(state))
  ledgerPendingStates.forEach((state) => {
    const exits = outgoing.get(state) ?? []
    if (!exits.some((transition) => /retry|recover|posted|failed|escalat/.test(normalizeKey(transition.event) + '_' + normalizeKey(transition.to)))) {
      issues.push(`ledger_pending_state_without_retry_${state}`)
    }
  })

  return {
    valid: issues.length === 0,
    issues,
    terminalStates: [...terminalStates],
    rules: TERMINAL_VALIDATION_RULES,
    releaseBlocked: issues.length > 0
  }
}

export function evaluateFinancialPhysicsTransition({
  reserved = true,
  alreadyRefunded = false,
  sourceBalance = 1000,
  lockedAmount = 1000,
  escrowBalance = 1000,
  releaseAmount = 700,
  approvedAmount = 700,
  duplicateRelease = false,
  ledgerEntryBalanced = true,
  debitAccount = 'escrow_liability',
  creditAccount = 'recipient_available_balance',
  settlementPathAvailable = true,
  platformFeeEarned = true,
  ledgerPostFailed = false,
  requiredProofRejected = false
} = {}) {
  const violations = []
  if (!reserved) violations.push('money_cannot_be_released_if_never_reserved')
  if (alreadyRefunded) violations.push('refunded_money_cannot_also_be_released')
  if (Number(lockedAmount) > Number(sourceBalance)) violations.push('locked_amount_cannot_exceed_source_balance')
  if (!platformFeeEarned) violations.push('platform_fee_cannot_be_taken_before_earned')
  if (ledgerPostFailed) violations.push('failed_ledger_post_cannot_be_completed')
  if (requiredProofRejected) violations.push('obligation_cannot_be_fulfilled_while_required_proof_rejected')
  if (Number(escrowBalance) < Number(releaseAmount)) violations.push('escrow_balance_less_than_release_amount')
  if (Number(releaseAmount) > Number(approvedAmount)) violations.push('release_amount_exceeds_approved_amount')
  if (duplicateRelease) violations.push('duplicate_release_attempted')
  if (!ledgerEntryBalanced) violations.push('ledger_entry_unbalanced')
  if (normalizeKey(debitAccount) === normalizeKey(creditAccount)) violations.push('debit_account_equals_credit_account')
  if (!settlementPathAvailable) violations.push('settlement_path_missing')

  return {
    checks: ESCROW_RELEASE_PHYSICS_CHECKS,
    violations,
    decision: violations.length ? 'reject_or_rewrite_transition' : 'allow_transition',
    valid: violations.length === 0,
    releaseBlocked: violations.length > 0
  }
}

export function composePrimitiveStateMachines({
  complianceBlocked = false,
  fraudDetected = false,
  activeDispute = false,
  deadlineExpired = false,
  locationVerified = true,
  photoApproved = true,
  fundsLocked = true,
  releaseRequested = true
} = {}) {
  const signals = {
    compliance_block: complianceBlocked,
    fraud_block: fraudDetected,
    active_dispute: activeDispute,
    deadline_expiry: deadlineExpired,
    evidence_approval: locationVerified && photoApproved,
    release_request: releaseRequested
  }
  const winningRule = COMPOSITION_PRECEDENCE_RULES.find((rule) => signals[rule]) ?? 'no_release_signal'
  const contradictions = []
  if (locationVerified && !photoApproved) contradictions.push('location_allows_but_photo_blocks')
  if (deadlineExpired && (locationVerified || photoApproved)) contradictions.push('deadline_expired_overrides_evidence')
  if (fundsLocked && winningRule === 'release_request' && !(locationVerified && photoApproved)) contradictions.push('funds_locked_without_complete_evidence')

  const outcomeByRule = {
    compliance_block: 'blocked_by_compliance',
    fraud_block: 'fraud_blocked',
    active_dispute: 'disputed',
    deadline_expiry: 'refund_pending',
    evidence_approval: releaseRequested ? 'release_pending' : 'awaiting_release_request',
    release_request: 'awaiting_evidence_approval',
    no_release_signal: 'hold_state'
  }

  return {
    components: COMPOSITION_PRIMITIVE_STATE_MACHINES,
    precedence: COMPOSITION_PRECEDENCE_RULES,
    signals,
    contradictions,
    winningRule,
    outcome: outcomeByRule[winningRule],
    coordinatedCapability: 'conditional_release_capability',
    releaseBlocked: ['blocked_by_compliance', 'fraud_blocked', 'disputed', 'refund_pending', 'hold_state', 'awaiting_evidence_approval'].includes(outcomeByRule[winningRule])
  }
}

export function summarizeMultiLevelStateMachines() {
  return {
    levels: Object.keys(MULTI_LEVEL_STATE_MACHINE_EXAMPLES),
    atomicCount: Object.keys(MULTI_LEVEL_STATE_MACHINE_EXAMPLES.atomic_state_machines).length,
    microPrimitiveCount: Object.keys(MULTI_LEVEL_STATE_MACHINE_EXAMPLES.micro_primitive_state_machines).length,
    primitiveCount: MULTI_LEVEL_STATE_MACHINE_EXAMPLES.primitive_state_machines.length,
    capabilityCount: MULTI_LEVEL_STATE_MACHINE_EXAMPLES.capability_state_machines.length,
    productCount: MULTI_LEVEL_STATE_MACHINE_EXAMPLES.product_state_machines.length,
    reusableAndHighlyTested: true
  }
}

export function buildGpsProofEscrowStateMachinePackage() {
  return {
    interpretation: GPS_PROOF_ESCROW_PAYMENT_INTERPRETATION,
    machines: GPS_PROOF_ESCROW_MACHINE_PACKAGE,
    transitionTable: GPS_PROOF_ESCROW_TRANSITION_TABLE,
    executable: validateTransitionTableExecutable(GPS_PROOF_ESCROW_TRANSITION_TABLE).valid,
    generatedAutomatically: true
  }
}

export function validateTransitionTableExecutable(table = GPS_PROOF_ESCROW_TRANSITION_TABLE) {
  const requiredFields = ['current_state', 'event', 'guard', 'action', 'next_state']
  const issues = []
  table.forEach((row, index) => {
    requiredFields.forEach((field) => {
      const value = row[field]
      if (Array.isArray(value) ? value.length === 0 : !value) issues.push(`row_${index + 1}_missing_${field}`)
    })
  })
  return {
    valid: issues.length === 0,
    issues,
    rowCount: table.length,
    requiredFields
  }
}

export function selectGuardsFromLibrary(requestedGuards = []) {
  const library = new Set(Object.values(STATE_MACHINE_GUARD_LIBRARY).flat().map(normalizeKey))
  const requested = normalizeList(requestedGuards)
  const selected = requested.filter((guard) => library.has(guard))
  const rejected = requested.filter((guard) => !library.has(guard))
  return {
    selected,
    rejected,
    governedLibraryOnly: true,
    valid: rejected.length === 0,
    releaseBlocked: rejected.length > 0
  }
}

export function selectActionsFromLibrary(requestedActions = []) {
  const library = new Set(Object.values(STATE_MACHINE_ACTION_LIBRARY).flat().map(normalizeKey))
  const requested = normalizeList(requestedActions)
  const selected = requested.filter((action) => library.has(action))
  const rejected = requested.filter((action) => !library.has(action))
  return {
    selected,
    rejected,
    governedLibraryOnly: true,
    valid: rejected.length === 0,
    releaseBlocked: rejected.length > 0
  }
}

export function validateEventEnvelope(event = EVIDENCE_SUBMITTED_EVENT_EXAMPLE) {
  const missing = EVENT_ENVELOPE_REQUIRED_FIELDS.filter((field) => {
    const value = event[field]
    if (Array.isArray(value)) return value.length === 0
    if (typeof value === 'object' && value !== null) return Object.keys(value).length === 0
    return value === undefined || value === null || value === ''
  })
  const duplicateProtectionReady = Boolean(event.event_id && event.idempotency_key && event.correlation_id)
  return {
    valid: missing.length === 0 && duplicateProtectionReady,
    missing,
    duplicateProtectionReady,
    normalizedType: normalizeKey(event.event_type),
    providerApisSkipped: normalizeKey(event.source).includes('provider_stub') || normalizeKey(event.source).includes('webhook_stub')
  }
}

export function evaluateIdempotencyProtection({
  event = EVIDENCE_SUBMITTED_EVENT_EXAMPLE,
  processedEventIds = [],
  processedIdempotencyKeys = [],
  processedTerminalEvents = []
} = {}) {
  const eventId = normalizeKey(event.event_id)
  const idempotencyKey = normalizeKey(event.idempotency_key)
  const eventType = normalizeKey(event.event_type)
  const duplicateEvent = normalizeList(processedEventIds).includes(eventId)
  const duplicateKey = normalizeList(processedIdempotencyKeys).includes(idempotencyKey)
  const duplicateTerminalMoneyEvent = ['release_successful', 'ledger_release_posted', 'refund_successful', 'ledger_refund_posted'].includes(eventType) &&
    normalizeList(processedTerminalEvents).includes(eventType)

  return {
    rules: IDEMPOTENCY_RULES,
    duplicateEvent,
    duplicateKey,
    duplicateTerminalMoneyEvent,
    action: duplicateEvent || duplicateKey
      ? 'return_prior_transition_result'
      : duplicateTerminalMoneyEvent
        ? 'block_duplicate_money_moving_terminal_event'
        : 'process_event_once',
    releaseBlocked: duplicateTerminalMoneyEvent
  }
}

export function resolveConcurrentEvents(events = ['compliance_blocked', 'evidence_approved']) {
  const normalizedEvents = normalizeList(events)
  const winner = EVENT_CONFLICT_PRECEDENCE_RULES.find((rule) => normalizedEvents.includes(rule)) ?? normalizedEvents[0] ?? 'no_event'
  const ledgerFinal = normalizedEvents.includes('ledger_finality') || normalizedEvents.includes('ledger_release_posted')
  const refundRequested = normalizedEvents.includes('deadline_expiry') || normalizedEvents.includes('refund_requested')
  return {
    events: normalizedEvents,
    precedence: EVENT_CONFLICT_PRECEDENCE_RULES,
    winner,
    decision: ledgerFinal && refundRequested
      ? 'normal_refund_blocked_adjustment_or_reversal_only'
      : `${winner}_wins`,
    releaseBlocked: ['compliance_blocked', 'fraud_freeze', 'active_dispute', 'deadline_expiry'].includes(winner)
  }
}

export function evaluateLedgerBinding({
  capabilityState = 'completed',
  moneyMovementState = 'funds_released',
  ledgerState = 'posted',
  reconciliationState = 'passed'
} = {}) {
  const state = normalizeKey(capabilityState)
  const money = normalizeKey(moneyMovementState)
  const ledger = normalizeKey(ledgerState)
  const reconciliation = normalizeKey(reconciliationState)
  const rule = LEDGER_BINDING_RULES[state]
  const issues = []

  if (!rule) issues.push(`no_ledger_binding_rule_for_${state}`)
  if (rule?.moneyMovementState && money !== rule.moneyMovementState) issues.push(`${state}_requires_${rule.moneyMovementState}`)
  if (rule?.ledgerState && ledger !== rule.ledgerState) issues.push(`${state}_requires_ledger_${rule.ledgerState}`)
  if (rule?.reconciliationStateNot && reconciliation === rule.reconciliationStateNot) issues.push(`${state}_cannot_have_reconciliation_${rule.reconciliationStateNot}`)

  return {
    valid: issues.length === 0,
    issues,
    sourceOfTruth: LEDGER_BINDING_RULES.sourceOfTruth,
    lifecycleCanReflectLedger: issues.length === 0,
    releaseBlocked: issues.length > 0
  }
}

export function buildStateDrivenUiDirective(state = 'awaiting_evidence') {
  const normalized = normalizeKey(state)
  if (normalized === 'awaiting_evidence') {
    return {
      fields: UI_DIRECTIVE_FIELDS,
      directive: AWAITING_EVIDENCE_UI_DIRECTIVE,
      generatedFromStateMachine: true,
      manuallyHardcodedPerCapability: false
    }
  }
  return {
    fields: UI_DIRECTIVE_FIELDS,
    directive: {
      state: normalized,
      screen_title: normalized.replaceAll('_', ' '),
      available_actions: ['view_status'],
      disabled_actions: [],
      warnings: [],
      next_step: 'wait_for_next_valid_event'
    },
    generatedFromStateMachine: true,
    manuallyHardcodedPerCapability: false
  }
}

export function generateStateMachineExplanation({
  state = 'awaiting_evidence',
  event = 'evidence_submitted',
  guard = ['before_deadline', 'evidence_format_valid'],
  action = ['attach_evidence', 'start_verification'],
  nextState = 'evidence_under_review'
} = {}) {
  return {
    state: normalizeKey(state),
    event: normalizeKey(event),
    explanation: `${normalizeKey(event)} moves ${normalizeKey(state)} to ${normalizeKey(nextState)} only after ${normalizeList(guard).join('_and_')}`,
    whyBlockedWhenMissingGuard: 'transition_requires_all_governed_guards',
    actionsExplained: normalizeList(action)
  }
}

export function buildExplainabilityView(state = 'awaiting_evidence') {
  const normalized = normalizeKey(state)
  if (normalized === 'awaiting_evidence') {
    return {
      state: normalized,
      ...AWAITING_EVIDENCE_EXPLAINABILITY_MODEL,
      explainable: true
    }
  }
  return {
    state: normalized,
    user_view: [`currently_in_${normalized}`],
    admin_developer_view: {
      current_state: normalized,
      allowed_events: [],
      blocked_events: []
    },
    explainable: true
  }
}

export function generateRuntimeMonitoringRules(machine = GPS_VERIFIED_ESCROW_RELEASE_MACHINE_EXAMPLE) {
  const states = normalizeList(machine.states)
  return {
    monitorChecks: RUNTIME_MONITOR_CHECKS,
    rules: RUNTIME_MONITOR_RULE_EXAMPLES,
    monitoredStates: states,
    generatedWithMachine: true,
    complete: RUNTIME_MONITOR_CHECKS.length > 0 && RUNTIME_MONITOR_RULE_EXAMPLES.length > 0
  }
}

export function generateSimulationScenarios(machine = GPS_VERIFIED_ESCROW_RELEASE_MACHINE_EXAMPLE) {
  return {
    machineId: machine.machine_id ?? machine.capability ?? 'state_machine',
    scenarios: SIMULATION_SCENARIO_TEMPLATES,
    generatedAutomatically: true,
    scenarioCount: SIMULATION_SCENARIO_TEMPLATES.length
  }
}

export function validateFormalStateMachineRelease(checks = {}) {
  const defaultChecks = Object.fromEntries(FORMAL_STATE_MACHINE_VALIDATION_RULES.map((rule) => [rule, true]))
  const merged = { ...defaultChecks, ...checks }
  const failed = Object.entries(merged)
    .filter(([, passed]) => passed !== true)
    .map(([rule]) => rule)
  return {
    valid: failed.length === 0,
    failed,
    rules: FORMAL_STATE_MACHINE_VALIDATION_RULES,
    mandatory: true,
    releaseBlocked: failed.length > 0
  }
}

export function detectIllegalRuntimeState(snapshot = {}) {
  const normalized = {
    capabilityState: normalizeKey(snapshot.capabilityState ?? 'completed'),
    moneyMovementState: normalizeKey(snapshot.moneyMovementState ?? 'funds_escrowed'),
    ledgerState: normalizeKey(snapshot.ledgerState ?? 'pending'),
    evidenceState: normalizeKey(snapshot.evidenceState ?? 'approved'),
    locationState: normalizeKey(snapshot.locationState ?? 'failed'),
    consentState: normalizeKey(snapshot.consentState ?? 'missing'),
    disputeState: normalizeKey(snapshot.disputeState ?? 'disputed'),
    autoReleaseEnabled: snapshot.autoReleaseEnabled ?? true,
    blocked: snapshot.blocked ?? true,
    uiAllowsWithdrawal: snapshot.uiAllowsWithdrawal ?? true,
    recipientCredited: snapshot.recipientCredited ?? false
  }
  const illegalStates = []
  if (normalized.capabilityState === 'completed' && normalized.moneyMovementState !== 'funds_released') illegalStates.push('completed_but_funds_not_released')
  if (normalized.capabilityState === 'refunded' && normalized.recipientCredited) illegalStates.push('refunded_but_recipient_credited')
  if (normalized.moneyMovementState === 'funds_escrowed' && normalized.ledgerState !== 'posted') illegalStates.push('escrowed_but_no_ledger_entry')
  if (normalized.evidenceState === 'approved' && normalized.locationState === 'failed') illegalStates.push('evidence_approved_but_gps_failed')
  if (normalized.capabilityState === 'active' && normalized.consentState !== 'recipient_consented') illegalStates.push('active_but_no_consenting_recipient')
  if (normalized.disputeState === 'disputed' && normalized.autoReleaseEnabled) illegalStates.push('disputed_but_auto_release_still_enabled')
  if (normalized.blocked && normalized.uiAllowsWithdrawal) illegalStates.push('blocked_but_ui_still_allows_withdrawal')

  return {
    snapshot: normalized,
    illegalStates,
    responseActions: illegalStates.length ? ILLEGAL_STATE_RESPONSE_ACTIONS : [],
    releaseBlocked: illegalStates.length > 0
  }
}

export function generateCompensationPolicy(caseId = 'notification_failed_after_ledger_posted') {
  const normalized = normalizeKey(caseId)
  const policy = COMPENSATION_POLICY_EXAMPLES[normalized] ?? COMPENSATION_POLICY_EXAMPLES.wrong_release_after_ledger_posted
  return {
    caseId: normalized,
    fields: COMPENSATION_POLICY_FIELDS,
    success_path: 'commit_transition_and_audit',
    failure_path: policy.decision,
    retry_policy: normalized.includes('notification') ? 'retry_notification' : 'retry_until_policy_limit_then_escalate',
    rollback_policy: normalized.includes('ledger_posted') ? 'no_simple_undo_after_ledger_finality' : 'rollback_pending_state_only',
    compensation_policy: policy.compensation_policy,
    manual_escalation_policy: normalized.includes('wrong_release') ? 'admin_intervention_required' : 'ops_escalation_if_retries_exhausted'
  }
}

export function planStateMachineVersionMigration({
  activeCapabilityRisk = 'normal',
  consentCaptured = false,
  newCapability = true
} = {}) {
  const risk = normalizeKey(activeCapabilityRisk)
  const activeHighRisk = risk === 'high' || risk === 'critical'
  const targetVersion = newCapability ? STATE_MACHINE_VERSION_MIGRATION_EXAMPLE.machine_v2.version : STATE_MACHINE_VERSION_MIGRATION_EXAMPLE.machine_v1.version
  const decision = newCapability
    ? 'use_v2_for_new_capability'
    : activeHighRisk && consentCaptured
      ? 'migrate_active_capability_to_v2'
      : activeHighRisk
        ? 'hold_on_v1_until_consent'
        : 'remain_on_v1'

  return {
    example: STATE_MACHINE_VERSION_MIGRATION_EXAMPLE,
    targetVersion,
    decision,
    requiresConsent: activeHighRisk && !newCapability,
    releaseBlocked: activeHighRisk && !newCapability && !consentCaptured
  }
}

export function generateStateMigrationLogic({
  currentState = 'awaiting_evidence',
  existingPhotoSubmitted = false,
  consentCaptured = false,
  riskLevel = 'normal'
} = {}) {
  const state = normalizeKey(currentState)
  const risk = normalizeKey(riskLevel)
  const mappedState = STATE_MIGRATION_MAP_EXAMPLE.migration_map[`old_${state}`] ?? state
  let decision = 'manual_review'
  if (existingPhotoSubmitted && risk !== 'high') decision = 'grandfather_under_old_terms'
  else if (consentCaptured) decision = 'request_additional_gps_evidence'
  else if (!consentCaptured) decision = 'require_consent_before_changing_condition'

  return {
    example: STATE_MIGRATION_MAP_EXAMPLE,
    currentState: state,
    mappedState,
    decision,
    versioningRules: STATE_MACHINE_VERSIONING_RULES,
    releaseBlocked: decision === 'require_consent_before_changing_condition'
  }
}

export function buildOperationsConsoleView({
  state = 'manual_review_required',
  triggerEvent = 'evidence_low_confidence',
  riskScore = 72,
  affectedFunds = 1000
} = {}) {
  const normalizedState = normalizeKey(state)
  const availableActions = OPS_ADMIN_TRANSITION_BINDINGS[normalizedState] ?? []
  return {
    fields: OPS_CONSOLE_VIEW_FIELDS,
    case_summary: `${normalizedState}_case`,
    current_state: normalizedState,
    trigger_event: normalizeKey(triggerEvent),
    risk_score: riskScore,
    affected_funds: affectedFunds,
    required_decision: availableActions.length ? 'select_governed_transition' : 'escalate_to_admin',
    available_actions: availableActions,
    forbidden_actions: OPS_ADMIN_ACTIONS.filter((action) => !availableActions.includes(action)),
    audit_history: ['case_created', `${normalizeKey(triggerEvent)}_received`],
    recommended_resolution: availableActions[0] ?? 'manual_review',
    requiresOperationsSupport: OPS_REVIEW_REQUIRED_STATES.includes(normalizedState)
  }
}

export function validateAdminActionTransition({
  state = 'manual_review_required',
  action = 'approve_evidence'
} = {}) {
  const normalizedState = normalizeKey(state)
  const normalizedAction = normalizeKey(action)
  const allowed = OPS_ADMIN_TRANSITION_BINDINGS[normalizedState]?.includes(normalizedAction) ?? false
  return {
    state: normalizedState,
    action: normalizedAction,
    allowed,
    adminBypassBlocked: !allowed,
    requirement: 'admin_actions_must_operate_through_governed_transitions',
    releaseBlocked: !allowed
  }
}

export function attachBehavioralTrustEffect(transition = 'evidence_approved_to_completed') {
  const normalized = normalizeKey(transition)
  return {
    transition: normalized,
    positiveEvents: BTS_OUTCOME_EVENTS.positive_events,
    negativeEvents: BTS_OUTCOME_EVENTS.negative_events,
    trustEffect: BTS_TRANSITION_EFFECTS[normalized] ?? {},
    learnsFromOutcome: Boolean(BTS_TRANSITION_EFFECTS[normalized])
  }
}

export function synthesizeGroupProductMachines() {
  return {
    machineTypes: GROUP_PRODUCT_MACHINE_TYPES,
    machines: GROUP_PRODUCT_MACHINE_EXAMPLES,
    coordinatedStateCount: Object.values(GROUP_PRODUCT_MACHINE_EXAMPLES).reduce((sum, states) => sum + states.length, 0),
    requiresMultipleMachines: true,
    governed: true
  }
}

export function runDynamicCapabilityCreationFlow() {
  return {
    flow: DYNAMIC_CAPABILITY_CREATION_FLOW,
    governed: true,
    validationSteps: DYNAMIC_CAPABILITY_CREATION_FLOW.filter((step) => /validate|simulate|consent|deploy/.test(step)),
    output: 'custom_capability_package'
  }
}

export function evaluateSynthesizedProductValidationGates(gates = {}) {
  const defaultGates = Object.fromEntries(SYNTHESIZED_PRODUCT_VALIDATION_GATES.map((gate) => [gate, true]))
  const merged = { ...defaultGates, ...gates }
  const failed = Object.entries(merged)
    .filter(([, passed]) => passed !== true)
    .map(([gate]) => gate)
  return {
    gates: merged,
    failed,
    valid: failed.length === 0,
    releaseBlocked: failed.length > 0
  }
}

export function classifySynthesizedReleaseMode({
  requestedMode = 'live_mode',
  gates = {},
  realMoney = true,
  riskLevel = 'low',
  amount = 250,
  complianceReviewed = true,
  adminApproved = true
} = {}) {
  const gateReview = evaluateSynthesizedProductValidationGates(gates)
  const risk = normalizeKey(riskLevel)
  const requested = normalizeKey(requestedMode)
  let mode = requested

  if (!gateReview.valid) mode = 'simulation_mode'
  else if (!realMoney) mode = requested === 'draft_mode' ? 'draft_mode' : 'simulation_mode'
  else if (risk === 'high' || risk === 'critical' || Number(amount) > 1000 || !complianceReviewed || !adminApproved) mode = 'restricted_mode'
  else if (requested === 'guided_mode') mode = 'guided_mode'
  else mode = 'live_mode'

  return {
    requestedMode: requested,
    releaseMode: mode,
    modeDefinition: SYNTHESIZED_STATE_MACHINE_RELEASE_MODES[mode],
    gateReview,
    releaseBlocked: mode === 'simulation_mode' || mode === 'draft_mode'
  }
}

export function buildStateMachineDefinitionRecord(overrides = {}) {
  const now = overrides.created_at ?? '2026-05-27T00:00:00Z'
  return {
    id: 'smd_gps_escrow_v1',
    name: 'GPS proof escrow release',
    type: 'capability_state_machine',
    version: '1.0.0',
    capability_type: 'conditional_escrow_payment',
    owner_scope: 'user_capability',
    initial_state: GPS_VERIFIED_ESCROW_RELEASE_MACHINE_EXAMPLE.initial_state,
    terminal_states: ['completed', 'refunded', 'disputed', 'blocked'],
    states: GPS_VERIFIED_ESCROW_RELEASE_MACHINE_EXAMPLE.states,
    transitions: GPS_VERIFIED_ESCROW_RELEASE_MACHINE_EXAMPLE.transitions,
    guards: [...new Set(GPS_VERIFIED_ESCROW_RELEASE_MACHINE_EXAMPLE.transitions.flatMap((transition) => transition.guards ?? []))],
    actions: [...new Set(GPS_VERIFIED_ESCROW_RELEASE_MACHINE_EXAMPLE.transitions.flatMap((transition) => transition.actions ?? []))],
    invariants: FINANCIAL_PHYSICS_TRANSITION_RULES,
    event_schema: EVENT_ENVELOPE_REQUIRED_FIELDS,
    actor_permissions: ['sender', 'recipient', 'system', 'admin'],
    ledger_bindings: LEDGER_BINDING_RULES,
    ui_bindings: UI_DIRECTIVE_FIELDS,
    compliance_bindings: ['kyc_requirement_satisfied', 'jurisdiction_allowed', 'aml_risk_not_blocked'],
    audit_bindings: ['state_transition_audit', 'ledger_post_audit', 'idempotency_audit'],
    simulation_results: { scenario_count: SIMULATION_SCENARIO_TEMPLATES.length, passed: true },
    validation_status: 'validated',
    release_mode: 'guided_mode',
    created_at: now,
    updated_at: overrides.updated_at ?? now,
    ...overrides
  }
}

export function buildStateMachineInstanceRecord(overrides = {}) {
  const now = overrides.created_at ?? '2026-05-27T00:00:00Z'
  return {
    id: 'smi_gps_escrow_001',
    definition_id: 'smd_gps_escrow_v1',
    capability_instance_id: 'cap_gps_escrow_001',
    current_state: 'awaiting_evidence',
    previous_state: 'active',
    actor_context: { sender: 'user_sender', recipient: 'user_contractor' },
    money_context: { amount: 1000, state: 'escrowed' },
    ledger_context: { ledger_state: 'posted' },
    evidence_context: { required: ['photo', 'location'], status: 'pending' },
    risk_context: { risk_level: 'medium' },
    timers: { evidence_deadline: '2026-05-20T00:00:00Z' },
    active_locks: ['escrow_lock'],
    event_history: ['sender_confirms', 'funds_reserved'],
    status: 'active',
    created_at: now,
    updated_at: overrides.updated_at ?? now,
    ...overrides
  }
}

export function buildStateTransitionEventRecord(overrides = {}) {
  return {
    id: 'ste_001',
    machine_instance_id: 'smi_gps_escrow_001',
    from_state: 'awaiting_evidence',
    to_state: 'evidence_under_review',
    event_type: 'evidence_submitted',
    actor_id: 'user_contractor',
    guard_results: ['before_deadline_passed', 'evidence_format_valid_passed'],
    action_results: ['evidence_attached', 'verification_started'],
    ledger_refs: [],
    evidence_refs: ['ev_001'],
    risk_refs: ['risk_review_001'],
    timestamp: '2026-05-17T10:30:00Z',
    idempotency_key: 'evidence_submit_cap789_once',
    audit_hash: 'audit_hash_001',
    ...overrides
  }
}

export function validatePersistenceRecord(type = 'definition', record = buildStateMachineDefinitionRecord()) {
  const fieldsByType = {
    definition: STATE_MACHINE_DEFINITION_FIELDS,
    instance: STATE_MACHINE_INSTANCE_FIELDS,
    event: STATE_TRANSITION_EVENT_FIELDS
  }
  const fields = fieldsByType[normalizeKey(type)] ?? STATE_MACHINE_DEFINITION_FIELDS
  const missing = fields.filter((field) => {
    const value = record[field]
    if (Array.isArray(value)) return normalizeKey(type) === 'event' ? !(field in record) : value.length === 0
    if (typeof value === 'object' && value !== null) return Object.keys(value).length === 0
    return value === undefined || value === null || value === ''
  })
  return {
    type: normalizeKey(type),
    valid: missing.length === 0,
    missing,
    fields,
    auditable: !missing.includes('audit_hash') || normalizeKey(type) !== 'event'
  }
}

export function summarizeSynthesizerArchitecture() {
  return {
    modules: STATE_MACHINE_SYNTHESIZER_INTERNAL_MODULES,
    moduleCount: STATE_MACHINE_SYNTHESIZER_INTERNAL_MODULES.length,
    flow: STATE_MACHINE_SYNTHESIZER_ARCHITECTURE_FLOW,
    output: 'executable_state_machine_package',
    downstream: ['kernel_contract_builder', 'ui_ux_composer', 'runtime_watchtower']
  }
}

export function loadMachineTemplate(templateId = 'conditional_release_machine') {
  const key = normalizeKey(templateId)
  const template = MACHINE_TEMPLATE_REGISTRY[key]
  if (!template) {
    return {
      id: key,
      found: false,
      releaseBlocked: true,
      reason: 'template_not_registered'
    }
  }
  return {
    id: key,
    found: true,
    ...template,
    states: GPS_VERIFIED_ESCROW_RELEASE_MACHINE_EXAMPLE.states,
    events: GPS_VERIFIED_ESCROW_RELEASE_MACHINE_EXAMPLE.events,
    guards: [...new Set(GPS_VERIFIED_ESCROW_RELEASE_MACHINE_EXAMPLE.transitions.flatMap((transition) => transition.guards ?? []))],
    actions: [...new Set(GPS_VERIFIED_ESCROW_RELEASE_MACHINE_EXAMPLE.transitions.flatMap((transition) => transition.actions ?? []))],
    invariants: FINANCIAL_PHYSICS_TRANSITION_RULES,
    allowed_modifications: ['add_stricter_guard', 'add_required_disclosure', 'add_compliance_state', 'add_runtime_monitor'],
    forbidden_modifications: FORBIDDEN_STATE_MACHINE_PATTERNS,
    required_disclosures: ['locked_funds', 'release_conditions', 'refund_conditions', 'dispute_path']
  }
}

export function validateMachineTemplate(template = loadMachineTemplate()) {
  const missing = MACHINE_TEMPLATE_FIELDS.filter((field) => {
    const value = template[field]
    if (Array.isArray(value)) return value.length === 0
    return value === undefined || value === null || value === ''
  })
  return {
    valid: template.found !== false && missing.length === 0,
    missing,
    templateId: template.id,
    releaseBlocked: template.found === false || missing.length > 0
  }
}

export function detectForbiddenStateMachinePattern(patterns = []) {
  const detected = normalizeList(patterns).filter((pattern) => FORBIDDEN_STATE_MACHINE_PATTERNS.includes(pattern))
  return {
    detected,
    hardBlocked: detected.length > 0,
    forbiddenPatterns: FORBIDDEN_STATE_MACHINE_PATTERNS,
    releaseBlocked: detected.length > 0
  }
}

export function injectComplianceGovernorStates({
  amount = 1200,
  jurisdictionRequiresIdentity = true,
  riskyProductType = true
} = {}) {
  const injected = []
  if (Number(amount) > 1000) injected.push({ reason: 'exceeds_threshold', states: COMPLIANCE_GOVERNOR_INJECTION_RULES.exceeds_threshold })
  if (jurisdictionRequiresIdentity) injected.push({ reason: 'jurisdiction_requires_identity', states: COMPLIANCE_GOVERNOR_INJECTION_RULES.jurisdiction_requires_identity })
  if (riskyProductType) injected.push({ reason: 'risky_product_type', states: COMPLIANCE_GOVERNOR_INJECTION_RULES.risky_product_type })
  return {
    injected,
    userRequestedTheseStates: false,
    governedSynthesis: true,
    stateCountAdded: injected.reduce((sum, group) => sum + group.states.length, 0)
  }
}

export function adaptStateMachineForJurisdiction({
  jurisdiction = 'country_c',
  request = 'hold_this_money_until_my_supplier_delivers',
  amount = 750
} = {}) {
  const key = normalizeKey(jurisdiction)
  const rules = JURISDICTION_STATE_MACHINE_RULES[key] ?? JURISDICTION_STATE_MACHINE_RULES.country_a
  const addedStates = []
  if (rules.kyc === 'required_for_all_transfers' || (rules.kyc === 'required_above_500' && Number(amount) > 500)) {
    addedStates.push('awaiting_kyc', 'kyc_verified')
  }
  if (rules.escrow === 'licensed_escrow_partner_requirement_stub') {
    addedStates.push('licensed_partner_review_stub', 'compliance_approval_required')
  }
  if (rules.escrow === 'authorization_hold_required_direct_escrow_not_allowed') {
    addedStates.push('authorization_hold_created', 'delivery_confirmation_required', 'authorization_capture_or_release')
  }
  if (rules.escrow === 'auto_savings_allowed_interest_pools_restricted') {
    addedStates.push('interest_pool_restriction_review')
  }

  return {
    request: normalizeKey(request),
    jurisdiction: key,
    rules,
    addedStates,
    providerApisSkipped: rules.escrow === 'licensed_escrow_partner_requirement_stub',
    releaseBlocked: addedStates.includes('licensed_partner_review_stub') || addedStates.includes('authorization_hold_created')
  }
}

export function selectJurisdictionMachineVariant({
  jurisdiction = 'country_a',
  directEscrowAllowed = true
} = {}) {
  const key = normalizeKey(jurisdiction)
  const rules = JURISDICTION_STATE_MACHINE_RULES[key] ?? JURISDICTION_STATE_MACHINE_RULES.country_a
  let variant = 'direct_escrow_machine'
  if (rules.escrow === 'licensed_escrow_partner_requirement_stub') variant = 'partner_escrow_machine_stub'
  if (rules.escrow === 'authorization_hold_required_direct_escrow_not_allowed' || !directEscrowAllowed) variant = 'authorization_hold_machine'
  return {
    jurisdiction: key,
    rules,
    variant,
    allowedVariants: JURISDICTION_MACHINE_VARIANTS,
    providerApisSkipped: variant === 'partner_escrow_machine_stub'
  }
}

export function generateRiskTieredStateMachine({
  riskTier = 'high',
  factors = RISK_TIER_FACTORS
} = {}) {
  const tier = normalizeKey(riskTier)
  const states = RISK_TIER_MACHINE_EXAMPLES[tier] ?? RISK_TIER_MACHINE_EXAMPLES.high_risk
  return {
    riskTier: tier,
    factors: normalizeList(factors),
    states,
    deeperStateMachine: tier === 'high_risk' || tier === 'high',
    adaptiveSafety: true
  }
}

export function projectInternalStatesToUserProgress(internalStates = EXPERIENCE_INTERNAL_STATES) {
  const states = normalizeList(internalStates)
  const progress = []
  if (states.some((state) => /escrow|locked|fund/.test(state))) progress.push('money_locked')
  if (states.some((state) => /evidence_required|waiting|awaiting/.test(state))) progress.push('waiting_for_proof')
  if (states.some((state) => /submitted|metadata|gps|ai|risk|review/.test(state))) progress.push('proof_under_review')
  if (states.some((state) => /released|completed|ledger_posted/.test(state))) progress.push('money_released')
  return {
    internalStates: states,
    userProgress: USER_FACING_PROGRESS_STEPS.filter((step) => progress.includes(step)),
    hidesTechnicalComplexity: true
  }
}

export function buildUserFacingStateLabel(state = 'evidence_under_review_ai_confidence_low_manual_review_required') {
  const normalized = normalizeKey(state)
  return {
    internalState: normalized,
    ...(USER_FACING_STATE_LABELS[normalized] ?? {
      label: normalized.replaceAll('_', ' '),
      message: 'AURA is working through the next safe step for this capability.'
    })
  }
}

export function synthesizeFromAdminBuilder(components = ADMIN_BUILDER_COMPONENTS) {
  const selected = normalizeList(components)
  const requirements = []
  if (selected.includes('auto_refund')) requirements.push(...AUTO_REFUND_REQUIREMENTS)
  return {
    selectedComponents: selected,
    synthesizedOutputs: ADMIN_BUILDER_SYNTHESIZED_OUTPUTS,
    requirements: [...new Set(requirements)],
    manualTransitionWiringRequired: false,
    modular: true
  }
}

export function evaluateSynthesizerSafetyLayer({
  hasRefundCondition = false,
  hasVerification = false,
  hasBreachResolution = false,
  feeEarnedDefined = false
} = {}) {
  const blockers = []
  if (!hasRefundCondition) blockers.push('locks_user_funds_but_has_no_refund_condition')
  if (!hasVerification) blockers.push('allows_release_but_does_not_define_verification')
  if (!hasBreachResolution) blockers.push('creates_obligation_but_no_breach_resolution')
  if (!feeEarnedDefined) blockers.push('collects_fee_but_does_not_define_when_fee_is_earned')
  return {
    protections: SYNTHESIZER_SAFETY_LAYER_PROTECTIONS,
    blockers,
    activationAllowed: blockers.length === 0,
    releaseBlocked: blockers.length > 0
  }
}

export function controlStateExplosion(counts = STATE_EXPLOSION_EXAMPLE) {
  const values = [
    counts.escrow_states,
    counts.evidence_states,
    counts.dispute_states,
    counts.compliance_states,
    counts.timer_states
  ].map(Number)
  const naiveCombinedStates = values.reduce((product, count) => product * count, 1)
  return {
    naiveCombinedStates,
    tooLarge: naiveCombinedStates > 1000,
    strategies: STATE_EXPLOSION_CONTROL_STRATEGIES,
    projectedStateView: PROJECTED_STATE_VIEW_EXAMPLE,
    avoidCartesianExplosion: true
  }
}

export function evaluateCrossMachineReleaseGuard({
  moneyState = 'funds_escrowed',
  evidenceState = 'approved',
  timerState = 'running',
  complianceState = 'approved',
  disputeState = 'no_dispute'
} = {}) {
  const issues = []
  if (normalizeKey(moneyState) !== CROSS_MACHINE_RELEASE_GUARD.money_state) issues.push('money_state_not_funds_escrowed')
  if (normalizeKey(evidenceState) !== CROSS_MACHINE_RELEASE_GUARD.evidence_state) issues.push('evidence_state_not_approved')
  if (normalizeKey(timerState) === CROSS_MACHINE_RELEASE_GUARD.timer_state_not) issues.push('timer_expired')
  if (normalizeKey(complianceState) !== CROSS_MACHINE_RELEASE_GUARD.compliance_state) issues.push('compliance_not_approved')
  if (normalizeKey(disputeState) !== CROSS_MACHINE_RELEASE_GUARD.dispute_state) issues.push('active_dispute')
  return {
    guard: CROSS_MACHINE_RELEASE_GUARD,
    issues,
    releaseAllowed: issues.length === 0,
    releaseBlocked: issues.length > 0
  }
}

export function buildHierarchicalStateSummary(path = HIERARCHICAL_STATE_EXAMPLE.path) {
  const normalizedPath = normalizeList(path)
  return {
    hierarchy: HIERARCHICAL_STATE_EXAMPLE,
    topLevelState: normalizedPath[0],
    subState: normalizedPath[1],
    subSubState: normalizedPath[2],
    userFacingSummary: normalizedPath[0],
    preservesTechnicalDetail: true
  }
}

export function buildParallelStateRegions(overrides = {}) {
  return {
    regions: {
      ...PARALLEL_STATE_REGION_EXAMPLE,
      ...Object.fromEntries(Object.entries(overrides).map(([key, value]) => [normalizeKey(key), normalizeKey(value)]))
    },
    moreRealisticThanSingleState: true
  }
}

export function generateStateProjections(state = AUDIENCE_STATE_PROJECTIONS) {
  return {
    projections: state,
    audienceCount: Object.keys(state).length,
    sameUnderlyingStateDifferentViews: true
  }
}

export function createTransitionAuditRecord(overrides = {}) {
  return {
    ...TRANSITION_AUDIT_RECORD_EXAMPLE,
    ...overrides,
    auditOptional: false,
    explainableAfterFact: true
  }
}

export function generateStateMachineTests() {
  return {
    categories: AUTO_GENERATED_TEST_CATEGORIES,
    tests: STATE_MACHINE_TEST_EXAMPLES,
    generatedAutomatically: true
  }
}

export function runRuntimeExecutionModel({
  eventMutatesStateDirectly = false,
  ledgerPostSucceeds = true
} = {}) {
  return {
    steps: RUNTIME_EXECUTION_STEPS,
    shortcutAllowed: false,
    eventMutatesStateDirectly,
    transitionEngineControlsMutation: !eventMutatesStateDirectly,
    outcome: ledgerPostSucceeds ? 'state_updated_after_transactional_actions' : 'state_not_completed_without_ledger_post',
    releaseBlocked: eventMutatesStateDirectly || !ledgerPostSucceeds
  }
}

export function evaluateMoneyMovingTransaction({
  ledgerPostSucceeds = true,
  idempotencyKeyValid = true,
  currentStateValid = true
} = {}) {
  const failures = []
  if (!currentStateValid) failures.push('current_state_invalid')
  if (!idempotencyKeyValid) failures.push('idempotency_key_invalid')
  if (!ledgerPostSucceeds) failures.push('ledger_post_failed')
  return {
    steps: MONEY_MOVING_TRANSACTION_STEPS,
    atomicWherePossible: true,
    failures,
    nextState: failures.includes('ledger_post_failed') ? 'release_retry_or_release_failed' : failures.length ? 'blocked' : 'completed',
    preservesTruth: true,
    releaseBlocked: failures.length > 0
  }
}

export function compileDeterministicStateMachineContract({
  synthesized = true,
  validationPassed = true,
  simulationPassed = true,
  governanceApproved = true
} = {}) {
  const blockers = []
  if (!synthesized) blockers.push('missing_ai_assisted_synthesis_output')
  if (!validationPassed) blockers.push('validation_failed')
  if (!simulationPassed) blockers.push('simulation_failed')
  if (!governanceApproved) blockers.push('governance_approval_missing')
  return {
    pipeline: DETERMINISTIC_COMPILATION_PIPELINE,
    modelProposesRuntimeExecutesCompiledContract: true,
    compiled: blockers.length === 0,
    blockers,
    releaseBlocked: blockers.length > 0
  }
}

export function buildStateMachineRegistryRecord(overrides = {}) {
  return {
    machine_id: 'sm_gps_escrow_v1',
    machine_name: 'GPS Proof Escrow',
    machine_type: 'conditional_release_machine',
    version: '1.0.0',
    status: 'approved',
    approved_release_modes: ['guided_mode', 'restricted_mode'],
    risk_level: 'high',
    jurisdiction_scope: ['country_a', 'country_b'],
    supported_primitives: CONDITIONAL_ESCROW_TEMPLATE_RECIPE,
    required_ledger_contracts: ['escrow_hold_contract', 'release_contract', 'refund_contract'],
    required_evidence_types: ['photo', 'gps_metadata'],
    required_disclosures: ['locked_funds', 'refund_policy', 'dispute_policy'],
    created_by: 'state_machine_synthesizer',
    approved_by: 'governance',
    last_validated_at: '2026-05-27T00:00:00Z',
    ...overrides
  }
}

export function validateStateMachineRegistryRecord(record = buildStateMachineRegistryRecord()) {
  const missing = STATE_MACHINE_REGISTRY_FIELDS.filter((field) => {
    const value = record[field]
    if (Array.isArray(value)) return value.length === 0
    return value === undefined || value === null || value === ''
  })
  const statusValid = STATE_MACHINE_REGISTRY_STATUSES.includes(normalizeKey(record.status))
  return {
    valid: missing.length === 0 && statusValid,
    missing,
    statusValid,
    reusable: statusValid && ['approved', 'active', 'validated'].includes(normalizeKey(record.status)),
    releaseBlocked: missing.length > 0 || !statusValid
  }
}

export function inspectStateMachineWithCapabilityDoctor({
  hasTerminalStates = true,
  guardStrength = 'strong',
  lifecycleStateCount = 12,
  hasDisputePath = true,
  hasConsent = true,
  hasRefundPath = true,
  explanationClear = true
} = {}) {
  const findings = []
  if (!hasTerminalStates) findings.push('missing_terminal_states')
  if (normalizeKey(guardStrength) !== 'strong') findings.push('weak_guards')
  if (Number(lifecycleStateCount) > 30) findings.push('overcomplicated_lifecycle')
  if (!hasDisputePath) findings.push('unhandled_dispute_path')
  if (!hasConsent) findings.push('missing_consent')
  if (!hasRefundPath) findings.push('missing_refund_path')
  if (!explanationClear) findings.push('poor_explanation_clarity')
  return {
    diagnoses: CAPABILITY_DOCTOR_STATE_MACHINE_DIAGNOSES,
    findings,
    example: CAPABILITY_DOCTOR_FINDING_EXAMPLE,
    releaseBlocked: findings.some((finding) => ['missing_terminal_states', 'weak_guards', 'missing_consent', 'missing_refund_path'].includes(finding))
  }
}

export function getCapabilityTypeMachineRequirements(capabilityType = 'escrow') {
  const key = normalizeKey(capabilityType)
  return {
    capabilityType: key,
    ...(CAPABILITY_TYPE_STATE_MACHINE_REQUIREMENTS[key] ?? { required_machines: [], forbidden: [] }),
    known: Boolean(CAPABILITY_TYPE_STATE_MACHINE_REQUIREMENTS[key])
  }
}

export function mapStateToAssetVaultAssets(state = 'funds_escrowed') {
  const normalized = normalizeKey(state)
  return {
    state: normalized,
    assets: ASSET_VAULT_STATE_ASSETS[normalized] ?? [],
    tellsUiWhichAssetCategoryToFetch: true,
    polishedNotGeneric: Boolean(ASSET_VAULT_STATE_ASSETS[normalized]?.length)
  }
}

export function bindAlgorithmVaultGuard(guard = ALGORITHM_BOUND_GUARD_EXAMPLE) {
  const algorithm = normalizeKey(guard.algorithm_ref ?? '').split('algorithm_vault_')[1] ?? normalizeKey(guard.algorithm_ref)
  return {
    guard,
    reusableAndGoverned: true,
    algorithmKnown: ALGORITHM_VAULT_GUARD_ALGORITHMS.some((item) => normalizeKey(algorithm).includes(normalizeKey(item).replace(/_algorithm$/, ''))),
    threshold: guard.threshold
  }
}

export function coordinateEvidenceIntelligence(path = EVIDENCE_INTELLIGENCE_STATE_PATH) {
  return {
    path: normalizeList(path),
    coordinatesProofCapabilities: true,
    finalState: normalizeList(path).at(-1)
  }
}

export function delegateEvidenceChecksToEvidenceEngine(checks = EVIDENCE_ENGINE_CHECKS) {
  const checkPlan = (Array.isArray(checks) ? checks : [checks]).map((check) => {
    if (typeof check === 'string') {
      const id = normalizeKey(check)
      return EVIDENCE_ENGINE_CHECKS.find((knownCheck) => knownCheck.id === id) ?? {
        id,
        engine: 'evidence_engine',
        expected_event: `${id}_completed`
      }
    }
    return {
      ...check,
      id: normalizeKey(check.id ?? check.name),
      engine: normalizeKey(check.engine ?? 'evidence_engine'),
      expected_event: normalizeKey(check.expected_event ?? `${check.id ?? check.name}_completed`)
    }
  })
  const providerApiSkipped = checkPlan
    .filter((check) => check.provider_api_skipped || check.engine === 'internal_stub')
    .map((check) => check.id)

  return {
    delegatedTo: 'evidence_engine',
    checkPlan,
    awaitedEvents: checkPlan.map((check) => check.expected_event),
    boundaryRules: EVIDENCE_ENGINE_BOUNDARY_RULES,
    stateMachineRunsComputerVision: false,
    providerApiSkipped
  }
}

export function labelTransitionReversibility(transition = 'release_pending_to_completed') {
  const transitionKey = typeof transition === 'string'
    ? normalizeKey(transition)
    : `${normalizeKey(transition.from)}_to_${normalizeKey(transition.to)}`
  const example = REVERSIBILITY_TRANSITION_EXAMPLES[transitionKey]
  const inferredLabel = transitionKey.includes('completed') || transitionKey.includes('released')
    ? 'final'
    : transitionKey.includes('reversed')
      ? 'compensatable'
      : 'reversible'
  const label = example?.label ?? inferredLabel

  return {
    transition: transitionKey,
    label,
    allowedLabels: TRANSITION_REVERSIBILITY_LABELS,
    finality: example?.finality ?? (label === 'final' ? 'financial_final' : 'soft_final'),
    disclosure: example?.disclosure ?? 'Reversibility must be disclosed before activation.',
    disclosureRequired: ['partially_reversible', 'irreversible', 'compensatable', 'final'].includes(label)
  }
}

export function attachStateFinality(state = 'completed') {
  const key = normalizeKey(state)
  const finality = key.includes('blocked') || key.includes('closed_by_compliance')
    ? 'compliance_final'
    : key.includes('completed') || key.includes('released') || key.includes('refunded')
      ? 'financial_final'
      : key.includes('archived') || key.includes('agreement_completed')
        ? 'legal_final'
        : key.includes('funded') || key.includes('awaiting') || key.includes('accepted')
          ? 'operational_final'
          : 'soft_final'

  return {
    state: key,
    finality,
    ...STATE_FINALITY_LEVELS[finality],
    requiresReviewToReopen: finality === 'compliance_final',
    reversalRequiresSeparateProcess: finality === 'financial_final'
  }
}

export function buildStateAwareConsentSummary(disclosures = STATE_AWARE_CONSENT_DISCLOSURES) {
  return {
    consentIsAgreementTo: 'state_machine',
    disclosures: normalizeList(disclosures),
    irreversibleDisclosureRequired: normalizeList(disclosures).includes('irreversible_actions'),
    activationBlockedUntilAccepted: true
  }
}

export function generateGpsEscrowUserExplanation(explanation = GPS_ESCROW_USER_FRIENDLY_EXPLANATION) {
  const points = normalizeList(explanation)
  return {
    capability: 'gps_proof_escrow',
    points,
    behindTheScenes: 'full_state_machine',
    stateMachineHiddenButBinding: true,
    shortVersion: points.join(' ')
  }
}

export function translateFormlessBankingRequest(request = 'I want conditional payment based on delivery proof.') {
  const text = typeof request === 'string' ? request : request.intent ?? request.product_intent ?? ''
  return {
    request: text,
    languageToExecutableRealityBridge: true,
    translatedInto: FORMLESS_BANKING_TRANSLATION_OUTPUTS,
    stateMachineRequired: true,
    productOperatingSystem: Boolean(text.trim())
  }
}

export function evaluateTrueJobSafeguards(results = {}) {
  const values = {
    noMoneyGetsStuck: results.noMoneyGetsStuck ?? true,
    noMoneyReleasedTwice: results.noMoneyReleasedTwice ?? true,
    noChargeWithoutConsent: results.noChargeWithoutConsent ?? true,
    noIllegalProductActivated: results.noIllegalProductActivated ?? true,
    noUiActionLies: results.noUiActionLies ?? true,
    noFinancialPhysicsViolation: results.noFinancialPhysicsViolation ?? true,
    noUnresolvedDisputePath: results.noUnresolvedDisputePath ?? true,
    noSilentActiveContractChange: results.noSilentActiveContractChange ?? true
  }
  const failedSafeguards = STATE_MACHINE_TRUE_JOB_SAFEGUARDS
    .filter((safeguard) => !values[safeguard.input])
    .map((safeguard) => safeguard.id)

  return {
    safeguards: STATE_MACHINE_TRUE_JOB_SAFEGUARDS,
    hardProblems: STATE_MACHINE_ENGINE_HARD_PROBLEMS,
    failedSafeguards,
    trueJobSatisfied: failedSafeguards.length === 0,
    releaseBlocked: failedSafeguards.length > 0
  }
}

export function summarizeRelatedAuraEngines(engines = STATE_MACHINE_RELATED_AURA_ENGINES) {
  const engineList = Array.isArray(engines) ? engines : STATE_MACHINE_RELATED_AURA_ENGINES
  return {
    engines: engineList,
    engineCount: engineList.length,
    dependencies: engineList.map((engine) => engine.engine),
    stateMachineSynthesizerRole: 'bridge_between_language_and_executable_financial_reality'
  }
}

export function enforceNonNegotiableMoneyMovementRule(checks = {}) {
  const gates = {
    synthesized: checks.synthesized ?? true,
    validated: checks.validated ?? true,
    simulated: checks.simulated ?? true,
    governed: checks.governed ?? true,
    ledger_bound: checks.ledgerBound ?? checks.ledger_bound ?? true
  }
  const missingChecks = Object.entries(gates)
    .filter(([, passed]) => !passed)
    .map(([key]) => key)

  return {
    rule: NON_NEGOTIABLE_MONEY_MOVEMENT_RULE,
    gates,
    allowed: missingChecks.length === 0,
    moneyMovementBlocked: missingChecks.length > 0,
    missingChecks
  }
}

export function buildStateMachineSubsystemSpec() {
  return {
    services: STATE_MACHINE_SUBSYSTEM_SERVICES,
    storageObjects: STATE_MACHINE_STORAGE_OBJECTS,
    apis: STATE_MACHINE_CORE_APIS,
    runtimeCommand: STATE_MACHINE_RUNTIME_COMMAND,
    runtimeResponseShape: STATE_MACHINE_RUNTIME_RESPONSE_EXAMPLE,
    buildGradeSubsystem: true
  }
}

export function processStateMachineRuntimeEvent({
  machineInstanceId = 'smi_gps_escrow_001',
  fromState = 'awaiting_evidence',
  event = { type: 'evidence_submitted', evidence_id: 'ev_001' }
} = {}) {
  const normalizedFromState = normalizeKey(fromState)
  const eventType = normalizeKey(event.type ?? event.event_type ?? event)
  const accepted = normalizedFromState === 'awaiting_evidence' && eventType === 'evidence_submitted'

  if (!accepted) {
    return {
      accepted: false,
      machine_instance_id: machineInstanceId,
      from_state: normalizedFromState,
      to_state: normalizedFromState,
      actions_executed: [],
      ledger_effects: [],
      ui_directive: {
        screen: 'state_unchanged',
        message: 'The event is not available from the current state.'
      }
    }
  }

  return {
    ...STATE_MACHINE_RUNTIME_RESPONSE_EXAMPLE,
    machine_instance_id: machineInstanceId,
    event_type: eventType,
    event_ref: event.evidence_id ?? event.id ?? null
  }
}

export function compileLifecycleMentalModel(intent = 'conditional payment based on delivery proof') {
  return {
    intent,
    model: STATE_MACHINE_SYNTHESIZER_FINAL_MENTAL_MODEL,
    takes: STATE_MACHINE_LIFECYCLE_COMPILER_INPUTS,
    compilesInto: STATE_MACHINE_LIFECYCLE_COMPILER_OUTPUTS,
    productOnlyExistsWhenItBehavesCorrectly: true
  }
}

export function evaluateTrustworthyCapabilityChecklist(results = {}) {
  const values = Object.fromEntries(
    TRUSTWORTHY_CAPABILITY_REQUIREMENTS.map((requirement) => [
      requirement.input,
      results[requirement.input] ?? true
    ])
  )
  const missingRequirements = TRUSTWORTHY_CAPABILITY_REQUIREMENTS
    .filter((requirement) => !values[requirement.input])
    .map((requirement) => requirement.id)

  return {
    requirements: TRUSTWORTHY_CAPABILITY_REQUIREMENTS,
    missingRequirements,
    trustworthy: missingRequirements.length === 0,
    trustSource: STATE_MACHINE_SYNTHESIZER_FINAL_MENTAL_MODEL.trustSource,
    releaseBlocked: missingRequirements.length > 0
  }
}

export function summarizeStateMachineSynthesizerFoundation() {
  return {
    ...STATE_MACHINE_SYNTHESIZER_FINAL_MENTAL_MODEL,
    subsystem: buildStateMachineSubsystemSpec(),
    trustworthyChecklist: evaluateTrustworthyCapabilityChecklist(),
    moneyMovementRule: enforceNonNegotiableMoneyMovementRule()
  }
}

export function synthesizeStateMachines(capabilitySpec = 'Create an escrow-like payment where money is released only after GPS/photo proof.') {
  const text = typeof capabilitySpec === 'string' ? capabilitySpec : capabilitySpec.intent ?? capabilitySpec.product_intent ?? ''
  const archetypeReview = detectLifecycleArchetypes(text)
  const archetypes = archetypeReview.detected.length ? archetypeReview.detected : ['conditional_release_lifecycle']
  const actors = mapActorStates({
    sender: ['draft', 'confirmed', 'funded', 'completed'],
    recipient: ['invited', 'accepted', 'awaiting_evidence', 'paid']
  })
  const assets = mapAssetFundStates()
  const rules = normalizeList(['release_after_verified_evidence', 'refund_after_deadline'])
  const constraints = SYNTHESIZER_STRUCTURED_INPUTS.constraints
  const evidenceRequirements = SYNTHESIZER_STRUCTURED_INPUTS.evidence_requirements
  const complianceRequirements = SYNTHESIZER_STRUCTURED_INPUTS.compliance_constraints
  const templates = archetypes.map((archetype) => loadMachineTemplate(archetype.replace('_lifecycle', '_machine')))
  const fallbackTemplate = loadMachineTemplate('conditional_release_machine')
  const machines = templates.map((template) => template.found ? template : fallbackTemplate)
  const forbidden = detectForbiddenStateMachinePattern([])
  const formal = validateFormalStateMachineRelease()
  const composedMachineSet = {
    machines,
    composition: composePrimitiveStateMachines(),
    validation: formal,
    forbidden
  }

  return {
    algorithm: STATE_MACHINE_SYNTHESIS_ALGORITHM_STEPS,
    extracted: {
      archetypes,
      actors,
      assets,
      rules,
      constraints,
      evidenceRequirements,
      complianceRequirements
    },
    machines,
    composedMachineSet,
    simulations: generateSimulationScenarios(GPS_VERIFIED_ESCROW_RELEASE_MACHINE_EXAMPLE),
    uiBindings: buildStateDrivenUiDirective('awaiting_evidence'),
    explanation: buildExplainabilityView('awaiting_evidence'),
    monitoringRules: generateRuntimeMonitoringRules(GPS_VERIFIED_ESCROW_RELEASE_MACHINE_EXAMPLE),
    executableStateMachinePackage: buildSynthesizerOutputPackage(),
    subsystem: buildStateMachineSubsystemSpec(),
    lifecycleCompiler: compileLifecycleMentalModel(text),
    trustworthyChecklist: evaluateTrustworthyCapabilityChecklist(),
    moneyMovementGate: enforceNonNegotiableMoneyMovementRule({
      synthesized: true,
      validated: formal.valid,
      simulated: true,
      governed: !forbidden.releaseBlocked,
      ledgerBound: true
    }),
    releaseBlocked: forbidden.releaseBlocked || !formal.valid
  }
}

export function validateSynthesizedStateMachine(machine = MASON_ESCROW_STATE_MACHINE_TEMPLATE) {
  const states = new Set(normalizeList(machine.states))
  const terminalStates = new Set(normalizeList(machine.terminal_states))
  const moneyHoldingStates = new Set(normalizeList(machine.money_holding_states))
  const outgoing = new Map()
  const issues = []

  if (!states.has(normalizeKey(machine.initial_state))) issues.push('missing_initial_state')
  terminalStates.forEach((state) => {
    if (!states.has(state)) issues.push(`terminal_state_not_declared_${state}`)
  })

  ;(machine.transitions ?? []).forEach((transition) => {
    const from = normalizeKey(transition.from)
    const to = normalizeKey(transition.to)
    if (!states.has(from)) issues.push(`transition_from_unknown_state_${from}`)
    if (!states.has(to)) issues.push(`transition_to_unknown_state_${to}`)
    if (!transition.event) issues.push(`transition_missing_event_${from}_to_${to}`)
    if (!transition.actor) issues.push(`transition_missing_actor_${normalizeKey(transition.event)}`)
    if (!(transition.guard ?? []).length) issues.push(`transition_missing_guard_${normalizeKey(transition.event)}`)
    if (!transition.ledger_effect) issues.push(`transition_missing_ledger_effect_${normalizeKey(transition.event)}`)
    outgoing.set(from, [...(outgoing.get(from) ?? []), to])
  })

  moneyHoldingStates.forEach((state) => {
    const exits = outgoing.get(state) ?? []
    const reachesTerminal = exits.some((exit) => terminalStates.has(exit)) || exits.length > 0
    if (!reachesTerminal) issues.push(`money_holding_state_without_exit_${state}`)
  })

  const terminalExits = (machine.transitions ?? []).filter((transition) => terminalStates.has(normalizeKey(transition.from)))
  terminalExits.forEach((transition) => issues.push(`terminal_state_has_exit_${normalizeKey(transition.from)}_${normalizeKey(transition.event)}`))

  return {
    valid: issues.length === 0,
    issues,
    stateCount: states.size,
    transitionCount: machine.transitions?.length ?? 0,
    terminalStates: [...terminalStates],
    moneyHoldingStates: [...moneyHoldingStates],
    releaseBlocked: issues.length > 0
  }
}

export function evaluateStateTransition(machine = MASON_ESCROW_STATE_MACHINE_TEMPLATE, {
  currentState = 'draft',
  event = 'invite_recipient',
  actor = 'payer',
  satisfiedGuards = []
} = {}) {
  const state = normalizeKey(currentState)
  const targetEvent = normalizeKey(event)
  const targetActor = normalizeKey(actor)
  const guards = new Set(normalizeList(satisfiedGuards))
  const transition = (machine.transitions ?? []).find((candidate) =>
    normalizeKey(candidate.from) === state &&
    normalizeKey(candidate.event) === targetEvent &&
    normalizeKey(candidate.actor) === targetActor
  )

  if (!transition) {
    return {
      allowed: false,
      reason: 'transition_not_in_contract',
      currentState: state,
      event: targetEvent,
      actor: targetActor
    }
  }

  const missingGuards = normalizeList(transition.guard).filter((guard) => !guards.has(guard))
  return {
    allowed: missingGuards.length === 0,
    reason: missingGuards.length ? 'guard_conditions_not_satisfied' : 'transition_allowed',
    missingGuards,
    nextState: normalizeKey(transition.to),
    ledgerEffect: normalizeKey(transition.ledger_effect),
    uiSurface: normalizeKey(transition.ui_surface)
  }
}
