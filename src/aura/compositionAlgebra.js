export const COMPOSITION_DOMAINS = Object.freeze([
  'money_states',
  'ledger_effects',
  'actors',
  'permissions',
  'claims',
  'obligations',
  'policies',
  'risk_controls',
  'time_rules',
  'verification_rules',
  'user_experiences',
  'compliance_categories',
  'runtime_monitors'
])

export const COMPOSITION_COMPONENTS = Object.freeze([
  'atoms',
  'mini_primitives',
  'primitives',
  'capabilities',
  'policies',
  'algorithms',
  'ui_assets',
  'runtime_monitors',
  'governance_rules'
])

export const COMPOSITION_DECISIONS = Object.freeze([
  'valid',
  'invalid',
  'valid_if_requirements_added',
  'governor_review_required',
  'human_review_required',
  'warning_screen_required'
])

export const COMPOSITION_DANGERS = Object.freeze([
  'broken_money_flows',
  'illegal_product_structures',
  'unfundable_promises',
  'unsafe_pooled_risk_products',
  'double_spend_paths',
  'confusing_user_experiences',
  'missing_refund_route',
  'missing_default_handling',
  'missing_consent',
  'missing_dispute_process',
  'unfair_risk_exposure'
])

export const COMPOSITION_EXAMPLE_COMPONENTS = Object.freeze([
  'goal_wallet',
  'escrow_hold',
  'photo_verification',
  'gps_verification',
  'instant_transfer',
  'refund_timer',
  'group_wallet',
  'rotating_payout',
  'reserve_pool',
  'default_handler',
  'contribution_reminder',
  'bts_trust_score',
  'school_fee_restriction',
  'emergency_unlock',
  'dispute_workflow'
])

export const COMPOSITION_SIGNATURES = Object.freeze({
  escrow_hold: {
    component: 'escrow_hold',
    category: 'primitive',
    requires: {
      actors: ['payer', 'potential_recipient'],
      value_state: ['available_funds'],
      permissions: ['payer_can_fund'],
      consent: ['payer_understands_hold', 'recipient_understands_conditional_access']
    },
    produces: {
      value_state: ['escrowed_funds'],
      claim: ['recipient_conditional_claim'],
      ledger_effect: ['debit_payer_available', 'credit_escrow_liability']
    },
    compatible_with: ['proof_verification', 'claimable_transfer', 'refund_timer', 'dispute_workflow', 'manual_review'],
    forbidden_with: ['direct_unconditional_release_without_approval', 'duplicate_claim_release'],
    failure_modes: ['payment_funding_failed', 'escrow_expired', 'dispute_opened', 'recipient_unverified'],
    required_monitors: ['escrow_age_monitor', 'claim_status_monitor', 'dispute_status_monitor'],
    type: {
      input: 'available_funds',
      output: 'escrowed_funds'
    }
  },
  proof_verification: {
    component: 'proof_verification',
    category: 'primitive',
    requires: {
      actors: ['recipient', 'verifier'],
      value_state: ['escrowed_funds'],
      permissions: ['verifier_can_review'],
      consent: ['recipient_understands_evidence_review']
    },
    produces: {
      value_state: ['verified_claim'],
      ledger_effect: []
    },
    compatible_with: ['claimable_transfer', 'refund_timer', 'dispute_workflow'],
    forbidden_with: ['automatic_release_without_confidence_threshold'],
    failure_modes: ['proof_rejected', 'confidence_too_low', 'manual_review_required'],
    required_monitors: ['proof_deadline_monitor', 'suspicious_submission_monitor'],
    type: {
      input: 'escrowed_funds',
      output: 'verified_claim'
    }
  },
  claimable_transfer: {
    component: 'claimable_transfer',
    category: 'primitive',
    requires: {
      actors: ['recipient'],
      value_state: ['verified_claim'],
      permissions: ['recipient_can_claim'],
      consent: ['recipient_accepts_release_terms']
    },
    produces: {
      value_state: ['released_funds'],
      ledger_effect: ['debit_escrow_liability', 'credit_recipient_available']
    },
    compatible_with: ['audit_ledger', 'dispute_workflow'],
    forbidden_with: ['duplicate_claim_release'],
    failure_modes: ['claim_expired', 'recipient_unverified'],
    required_monitors: ['claim_status_monitor'],
    type: {
      input: 'verified_claim',
      output: 'released_funds'
    }
  },
  refund_timer: {
    component: 'refund_timer',
    category: 'mini_primitive',
    requires: {
      actors: ['payer'],
      value_state: ['escrowed_funds'],
      permissions: ['system_can_refund_on_expiry'],
      consent: ['payer_understands_refund_timing']
    },
    produces: {
      value_state: ['refundable_funds'],
      ledger_effect: ['debit_escrow_liability', 'credit_sender_available']
    },
    compatible_with: ['escrow_hold', 'dispute_workflow'],
    forbidden_with: [],
    failure_modes: ['timer_misconfigured'],
    required_monitors: ['expiry_monitor'],
    type: {
      input: 'escrowed_funds',
      output: 'refundable_funds'
    }
  },
  photo_upload: {
    component: 'photo_upload',
    category: 'mini_primitive',
    requires: {
      actors: ['recipient'],
      value_state: ['any'],
      permissions: ['recipient_can_submit_photo'],
      consent: []
    },
    produces: {
      value_state: ['proof_submitted'],
      ledger_effect: []
    },
    compatible_with: ['proof_verification'],
    forbidden_with: ['automatic_release_without_confidence_threshold'],
    failure_modes: ['photo_missing_metadata', 'photo_unreadable'],
    required_monitors: ['proof_deadline_monitor'],
    type: {
      input: 'any',
      output: 'proof_submitted'
    }
  },
  automatic_release: {
    component: 'automatic_release',
    category: 'primitive',
    requires: {
      actors: ['system'],
      value_state: ['verified_claim'],
      permissions: ['system_can_release'],
      consent: ['payer_and_recipient_accept_auto_release']
    },
    produces: {
      value_state: ['released_funds'],
      ledger_effect: ['debit_escrow_liability', 'credit_recipient_available']
    },
    compatible_with: ['audit_ledger'],
    forbidden_with: ['unverified_photo_proof'],
    failure_modes: ['release_blocked'],
    required_monitors: ['release_monitor'],
    type: {
      input: 'verified_claim',
      output: 'released_funds'
    }
  }
})

export const COMPOSITION_LEVELS = Object.freeze([
  {
    id: 'atomic_layer',
    examples: ['debit', 'credit', 'hold', 'release', 'refund', 'lock', 'unlock', 'split', 'route', 'verify', 'notify', 'consent', 'expire', 'escalate', 'audit'],
    questions: [
      'can_this_atom_follow_that_atom',
      'does_the_ledger_remain_balanced',
      'does_this_atom_require_an_actor',
      'does_this_atom_require_consent',
      'does_this_atom_create_state_the_next_atom_can_accept'
    ]
  },
  {
    id: 'mini_primitive_layer',
    examples: [
      'conditional_hold',
      'expiry_timer',
      'contribution_reminder',
      'proof_submission',
      'balance_reservation',
      'payee_restriction',
      'priority_allocation',
      'partial_payment',
      'grace_period',
      'auto_refund',
      'manual_review_trigger'
    ],
    questions: [
      'which_atoms_form_this_mini_primitive',
      'what_input_state_required',
      'what_output_state_created',
      'which_larger_primitives_can_use_it'
    ]
  },
  {
    id: 'primitive_layer',
    examples: [
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
    ],
    questions: [
      'can_this_primitive_combine_with_another',
      'what_rules_must_be_added',
      'what_failure_paths_are_required',
      'what_product_category_emerges'
    ]
  },
  {
    id: 'capability_layer',
    examples: [
      'safesend',
      'family_hub',
      'request2pay',
      'school_fee_wallet',
      'susu_circle',
      'smart_salary_split',
      'contractor_milestone_payment',
      'emergency_vault',
      'business_procurement_flow'
    ],
    questions: [
      'which_primitives_are_required',
      'which_physics_manifest_is_produced',
      'which_ui_flows_are_required',
      'which_runtime_monitors_are_required',
      'which_compliance_checks_are_required'
    ]
  },
  {
    id: 'product_layer',
    examples: [
      'family_school_fee_contribution_system',
      'reserve_backed_rotating_susu_group',
      'milestone_verified_contractor_payment',
      'business_procurement_with_rfq_escrow_release_conditions'
    ],
    questions: [
      'is_complete',
      'is_executable',
      'is_explainable',
      'is_legal_enough_to_route_to_release',
      'can_be_simulated',
      'can_be_versioned',
      'can_be_monitored',
      'can_be_safely_used_by_real_users'
    ]
  },
  {
    id: 'ecosystem_operating_system_layer',
    examples: ['marketplace', 'admin_studio', 'runtime_watchtower', 'governor_network'],
    questions: ['does_this_capability_fit_the_larger_system']
  }
])

export const COMPOSITION_OPERATORS = Object.freeze([
  'sequential',
  'parallel',
  'conditional',
  'guarded',
  'split',
  'join',
  'loop_recurring',
  'wrapper',
  'policy_overlay',
  'monitor_overlay',
  'fallback',
  'compensation',
  'delegation',
  'role_binding',
  'risk_adjusted',
  'ui_binding',
  'compliance_gated',
  'simulation_gated',
  'versioned',
  'runtime_adaptive'
])

export const COMPONENT_TRANSFORMATIONS = Object.freeze({
  escrow_hold: {
    input: ['available_funds'],
    output: ['escrowed_funds']
  },
  proof_gate: {
    input: ['proof_submitted'],
    output: ['proof_approved', 'proof_rejected']
  },
  conditional_release: {
    input: ['escrowed_funds', 'approved_condition'],
    output: ['released_funds']
  },
  refund_timer: {
    input: ['escrowed_funds', 'expired_condition'],
    output: ['refundable_funds', 'refunded_funds']
  }
})

export const COMPONENT_SIDE_EFFECTS = Object.freeze([
  'ledger_entries',
  'audit_events',
  'consent_requirements',
  'notifications',
  'risk_changes',
  'ui_state_changes',
  'runtime_monitor_activation'
])

export const AURA_COMPOSITION_STACK = Object.freeze([
  {
    level: 'sub_atoms',
    role: 'smallest_logical_units',
    examples: ['amount_check', 'identity_check', 'permission_check', 'state_check', 'time_check', 'balance_check', 'ledger_posting_unit', 'audit_marker']
  },
  {
    level: 'atoms',
    role: 'atomic_financial_actions',
    examples: ['debit', 'credit', 'hold', 'release', 'refund', 'lock', 'unlock', 'split', 'route', 'verify', 'notify', 'expire', 'audit', 'consent_capture']
  },
  {
    level: 'mini_primitives',
    role: 'small_reusable_mechanisms',
    examples: ['conditional_hold', 'refund_timer', 'proof_submission', 'balance_reservation', 'grace_period', 'priority_allocation', 'payee_restriction', 'manual_review_trigger']
  },
  {
    level: 'primitives',
    role: 'reusable_financial_building_blocks',
    examples: ['escrow', 'goal_wallet', 'restricted_wallet', 'group_wallet', 'recurring_contribution', 'payout_queue', 'obligation_tracker', 'claimable_transfer', 'reserve_pool', 'dispute_workflow']
  },
  {
    level: 'capabilities',
    role: 'user_facing_financial_powers',
    examples: ['SafeSend', 'School Fee Wallet', 'Protected Susu Circle', 'Smart Salary Split', 'Rent Shield', 'Contractor Milestone Payment', 'Family Hub', 'Request2Pay']
  },
  {
    level: 'products',
    role: 'fully_configured_deployable_experiences',
    examples: ['no_pot_shrink_rotating_savings_circle', 'contractor_escrow_with_gps_photo_proof', 'family_school_fee_contribution_system', 'business_procurement_with_rfq_escrow_staged_release']
  },
  {
    level: 'ecosystem_financial_operating_flows',
    role: 'cross_product_operating_system_behaviors',
    examples: ['marketplace_trust_graph', 'watchtower_governance_loop', 'tenant_policy_runtime']
  }
])

export const PARALLEL_RESULT_POLICIES = Object.freeze([
  'all_checks_must_pass',
  'any_one_check_may_pass',
  'two_of_three_checks_must_pass',
  'high_risk_requires_all_checks',
  'low_risk_allows_fewer_checks',
  'failure_triggers_manual_review',
  'failure_requests_resubmission',
  'failure_opens_dispute_or_refund'
])

export const FORMAL_CONDITION_FIELDS = Object.freeze([
  'data_source',
  'truth_rule',
  'confidence_threshold',
  'time_window',
  'failure_path',
  'audit_event'
])

export const SPLIT_REQUIREMENT_FIELDS = Object.freeze([
  'allocation_formula',
  'priority_order',
  'minimum_thresholds',
  'rounding_rules',
  'shortfall_behavior',
  'overflow_behavior',
  'protected_categories',
  'user_override_rules'
])

export const JOIN_MEANING_FIELDS = Object.freeze([
  'contributor',
  'purpose',
  'controller',
  'beneficiary',
  'visibility',
  'refundability',
  'redirectability',
  'separability',
  'reversal_behavior'
])

export const LOOP_REQUIREMENT_FIELDS = Object.freeze([
  'cadence',
  'start_date',
  'end_condition',
  'retry_rules',
  'grace_period',
  'pause_resume_logic',
  'missed_cycle_behavior',
  'default_transition',
  'state_carryover'
])

export const WRAPPER_COMPOSITION_VARIANTS = Object.freeze([
  'escrow',
  'bts_gated',
  'consent_required',
  'dispute_enabled',
  'human_reviewable',
  'location_restricted',
  'purpose_restricted',
  'child_protected',
  'merchant_restricted',
  'simulation_required'
])

export const POLICY_OVERLAY_REQUIREMENTS = Object.freeze({
  no_pot_shrink_policy: [
    'fundability_guard',
    'reserve_pool_or_approved_coverage_source',
    'default_handling',
    'payout_pause_rule',
    'member_consent',
    'runtime_reserve_monitor',
    'default_scenario_simulation'
  ],
  child_protection_policy: [
    'guardian_role',
    'beneficiary_role',
    'spending_restriction',
    'approved_payees',
    'age_sensitive_ui',
    'audit_trail',
    'emergency_override'
  ],
  purpose_bound_funds_policy: [
    'purpose_label',
    'allowed_payee_list',
    'restricted_state',
    'unlock_rules',
    'misuse_prevention',
    'disclosure'
  ]
})

export const MONITOR_OVERLAY_FIELDS = Object.freeze([
  'watches',
  'threshold',
  'trigger_event',
  'response_action',
  'notification_target',
  'escalation_path',
  'audit_event'
])

export const FALLBACK_COMPOSITION_PATTERNS = Object.freeze([
  'auto_release_else_manual_review',
  'gps_verification_else_document_review',
  'payment_retry_else_user_notification',
  'proof_rejected_else_resubmission_or_refund'
])

export const COMPENSATION_REQUIREMENT_FIELDS = Object.freeze([
  'failed_action',
  'failure_event',
  'affected_state',
  'repaired_state',
  'ledger_repair',
  'user_notification',
  'audit_event',
  'idempotency_key',
  'reversal_policy',
  'terminal_state'
])

export const COMPENSATION_EVENT_PATTERNS = Object.freeze({
  release_failed: {
    repair: 'restore_escrow_state',
    terminalState: 'escrowed_funds',
    auditEvent: 'release_compensated'
  },
  duplicate_payment: {
    repair: 'reverse_duplicate_and_adjust_ledger',
    terminalState: 'single_settled_payment',
    auditEvent: 'duplicate_reversed'
  },
  contribution_chargeback_after_payout: {
    repair: 'activate_default_policy',
    terminalState: 'default_review_open',
    auditEvent: 'chargeback_default_policy_opened'
  },
  fraudulent_proof_discovered: {
    repair: 'freeze_account_and_open_dispute',
    terminalState: 'disputed_funds',
    auditEvent: 'fraud_dispute_opened'
  },
  reserve_wrongly_applied: {
    repair: 'reverse_reserve_movement_and_adjust_ledger',
    terminalState: 'reserve_rebalanced',
    auditEvent: 'reserve_movement_reversed'
  }
})

export const DELEGATION_REQUIREMENT_FIELDS = Object.freeze([
  'delegator',
  'delegate',
  'scope',
  'limit',
  'duration',
  'revocation_path',
  'audit_trail',
  'notification_rule',
  'liability_rule',
  'consent_requirement'
])

export const DELEGATION_PERMISSION_CATALOG = Object.freeze([
  'view_balance',
  'invite_contributors',
  'upload_invoice',
  'pay_approved_school',
  'request_emergency_unlock',
  'change_approved_payee',
  'close_wallet'
])

export const ROLE_BINDING_REVIEW_FIELDS = Object.freeze([
  'required_roles_filled',
  'multi_role_allowed',
  'role_conflicts_checked',
  'identity_verification_checked',
  'business_verification_checked',
  'guardian_verification_checked',
  'legal_eligibility_checked',
  'safe_role_occupancy_checked'
])

export const ROLE_CONFLICT_PATTERNS = Object.freeze([
  {
    roles: ['organizer', 'verifier'],
    conflict: 'organizer_is_sole_verifier_of_own_payout',
    requiredMitigation: ['member_vote', 'platform_review', 'third_party_verification']
  },
  {
    roles: ['recipient', 'verifier'],
    conflict: 'recipient_is_sole_verifier_of_own_completion',
    requiredMitigation: ['sender_approval', 'photo_or_gps_proof', 'manual_review']
  },
  {
    roles: ['payer', 'recipient'],
    conflict: 'payer_and_recipient_are_same_actor',
    requiredMitigation: ['self_transfer_limit', 'disclosure', 'risk_review']
  },
  {
    roles: ['guardian', 'school_payee'],
    conflict: 'school_payee_is_controlled_by_guardian',
    requiredMitigation: ['approved_school_registry', 'independent_payee_verification', 'audit_review']
  },
  {
    roles: ['contributor', 'beneficiary_withdraw_controller'],
    conflict: 'contributor_can_withdraw_beneficiary_funds',
    requiredMitigation: ['guardian_approval', 'purpose_lock', 'contributor_disclosure']
  },
  {
    roles: ['group_member', 'default_exemption_approver'],
    conflict: 'group_member_can_approve_own_default_exemption',
    requiredMitigation: ['organizer_review', 'member_vote', 'platform_review']
  }
])

export const ACTOR_ROLE_BINDING_RECORD_FIELDS = Object.freeze([
  'role',
  'actor_id',
  'actor_type',
  'verification_required',
  'permissions',
  'forbidden_permissions'
])

export const ACTOR_ROLE_VALIDATOR_CHECKS = Object.freeze([
  'all_required_roles_filled',
  'actor_type_allowed_for_role',
  'required_identity_or_business_verification_exists',
  'delegated_authority_valid',
  'role_conflicts_detected',
  'permissions_not_excessive',
  'minor_guardian_rules_respected',
  'business_roles_not_assigned_to_personal_accounts',
  'risky_two_sided_control_requires_guard'
])

export const ACTOR_ROLE_VALIDATOR_OUTPUTS = Object.freeze([
  'actor_role_map',
  'permission_matrix',
  'role_conflict_report',
  'required_verification_plan',
  'delegation_scope',
  'role_based_ui_permissions',
  'kernel_authorization_rules'
])

export const SCHOOL_FEE_WALLET_ROLE_BINDINGS = Object.freeze([
  {
    role: 'guardian',
    actor_id: 'user_123',
    actor_type: 'individual',
    verification_required: ['identity_verified', 'guardian_relationship_verified'],
    verification_present: ['identity_verified', 'guardian_relationship_verified'],
    permissions: ['create_school_fee_wallet', 'invite_contributors', 'approve_school_payment', 'request_emergency_unlock'],
    forbidden_permissions: ['unrestricted_cash_withdrawal_without_override']
  },
  {
    role: 'child_beneficiary',
    actor_id: 'child_123',
    actor_type: 'minor',
    verification_required: ['guardian_relationship_verified'],
    verification_present: ['guardian_relationship_verified'],
    permissions: ['view_school_fee_progress'],
    forbidden_permissions: ['withdraw_funds', 'change_approved_school_payee']
  },
  {
    role: 'approved_school_payee',
    actor_id: 'school_789',
    actor_type: 'school',
    verification_required: ['school_payee_verified'],
    verification_present: ['school_payee_verified'],
    permissions: ['receive_school_fee_payment'],
    forbidden_permissions: ['cash_out_to_guardian']
  }
])

export const CONTRACTOR_ROLE_BINDING_EXAMPLE = Object.freeze({
  role: 'contractor',
  actor_id: 'vendor_456',
  actor_type: 'individual_or_business',
  verification_required: ['identity_verified'],
  verification_present: ['identity_verified'],
  permissions: ['submit_proof', 'receive_funds_after_approval'],
  forbidden_permissions: ['approve_own_proof_above_threshold']
})

export const RISK_ADJUSTMENT_SIGNAL_FIELDS = Object.freeze([
  'amount',
  'bts',
  'relationship_strength',
  'user_history',
  'recipient_history',
  'device_trust',
  'location_trust',
  'payment_method',
  'product_category',
  'jurisdiction',
  'fraud_signals',
  'failure_severity'
])

export const UI_BINDING_TRUTH_RULES = Object.freeze({
  locked_funds: {
    requiredComponent: 'locked_money_card',
    forbiddenDisplays: ['available_funds', 'available_balance', 'free_cash'],
    disabledActions: ['spend_freely', 'withdraw_cash']
  },
  escrowed_funds: {
    requiredComponent: 'protected_money_card',
    forbiddenDisplays: ['available_funds', 'available_balance', 'spendable_balance', 'paid_funds', 'free_cash'],
    disabledActions: ['spend_freely', 'withdraw_cash']
  },
  restricted_funds: {
    requiredComponent: 'restricted_money_card',
    forbiddenDisplays: ['available_funds', 'free_cash', 'general_balance'],
    disabledActions: ['cash_withdrawal', 'unrestricted_transfer']
  },
  restricted_school_fee_funds: {
    requiredComponent: 'purpose_locked_wallet',
    forbiddenDisplays: ['available_funds', 'free_cash', 'general_balance'],
    disabledActions: ['cash_withdrawal', 'unrestricted_transfer']
  },
  pending_funds: {
    requiredComponent: 'settlement_pending_display',
    forbiddenDisplays: ['settled_funds', 'settled_contribution', 'available_funds'],
    disabledActions: ['release_as_settled']
  },
  disputed_funds: {
    requiredComponent: 'dispute_panel',
    forbiddenDisplays: ['available_funds', 'claimable_funds'],
    disabledActions: ['release_without_resolution']
  }
})

export const UI_BINDING_MAP = Object.freeze({
  escrowed_funds: {
    financial_state: 'escrowed_funds',
    required_component: 'protected_money_card',
    label: 'protected_and_waiting_for_proof',
    allowed_actions: ['view_status', 'open_dispute', 'cancel_if_allowed'],
    disabled_actions: ['recipient_withdraw'],
    required_explanations: ['escrow_explanation', 'refund_condition', 'proof_deadline']
  },
  school_fee_restricted_funds: {
    financial_state: 'school_fee_restricted_funds',
    required_component: 'restricted_goal_wallet_card',
    label: 'protected_school_fee_money',
    allowed_actions: ['pay_approved_school', 'invite_contributor', 'request_emergency_unlock'],
    disabled_actions: ['cash_withdrawal', 'transfer_to_unapproved_payee'],
    required_explanations: ['school_fee_restriction', 'approved_payee_rule', 'emergency_unlock_policy']
  },
  pending_funds: {
    financial_state: 'pending_funds',
    required_component: 'settlement_pending_display',
    label: 'pending_not_available_yet',
    allowed_actions: ['view_status'],
    disabled_actions: ['release_as_settled', 'withdraw_cash'],
    required_explanations: ['settlement_delay_explanation']
  },
  disputed_funds: {
    financial_state: 'disputed_funds',
    required_component: 'dispute_panel',
    label: 'disputed_and_frozen',
    allowed_actions: ['view_dispute', 'submit_evidence'],
    disabled_actions: ['release_without_resolution'],
    required_explanations: ['dispute_status', 'resolution_timeline']
  }
})

export const UI_BINDING_VALIDATOR_CHECKS = Object.freeze([
  'every_financial_state_has_ui_representation',
  'every_restricted_state_has_restriction_explanation',
  'every_disabled_action_has_reason',
  'every_consent_screen_includes_required_disclosures',
  'every_guard_failure_has_user_facing_explanation',
  'every_dispute_freeze_hold_state_is_visually_distinct',
  'every_actor_sees_only_allowed_actions',
  'every_timeline_reflects_actual_state_transitions',
  'every_balance_display_distinguishes_available_protected_pending'
])

export const UI_BINDING_VALIDATOR_OUTPUTS = Object.freeze([
  'ui_binding_map',
  'missing_ui_state_findings',
  'required_ui_components',
  'required_explanation_copy',
  'disabled_action_rules',
  'state_specific_labels',
  'balance_display_rules',
  'ux_truth_warnings'
])

export const UI_FORBIDDEN_MISREPRESENTATIONS = Object.freeze([
  'escrowed_money_as_paid_money',
  'locked_money_as_free_money',
  'pending_money_as_settled_money',
  'restricted_funds_as_cash',
  'disputed_funds_as_completed_funds'
])

export const MONITOR_ATTACHMENT_ENGINE_QUESTIONS = Object.freeze([
  'what_must_be_watched_after_go_live',
  'which_thresholds_matter',
  'what_should_happen_when_something_goes_wrong',
  'who_should_be_notified',
  'when_should_product_pause_escalate_or_self_heal'
])

export const COMMON_RUNTIME_MONITORS = Object.freeze([
  'escrow_age_monitor',
  'proof_deadline_monitor',
  'dispute_status_monitor',
  'contribution_due_monitor',
  'member_default_monitor',
  'reserve_health_monitor',
  'payout_readiness_monitor',
  'obligation_shortfall_monitor',
  'restricted_fund_breach_monitor',
  'approved_payee_monitor',
  'settlement_delay_monitor',
  'BTS_drift_monitor',
  'fraud_signal_monitor',
  'manual_review_backlog_monitor'
])

export const MONITOR_DEFINITION_FIELDS = Object.freeze([
  'monitor_id',
  'watches',
  'thresholds',
  'on_warning',
  'on_critical',
  'audit_events'
])

export const RESERVE_HEALTH_MONITOR_DEFINITION = Object.freeze({
  monitor_id: 'reserve_health_monitor',
  watches: ['reserve_coverage_ratio', 'active_group_exposure', 'expected_default_loss'],
  thresholds: {
    warning: 'reserve_coverage_ratio_lt_1_25',
    critical: 'reserve_coverage_ratio_lt_1_0'
  },
  on_warning: ['notify_admin', 'increase_monitoring_frequency'],
  on_critical: ['pause_new_payouts', 'require_risk_review', 'notify_affected_groups'],
  audit_events: ['reserve_warning_triggered', 'reserve_critical_triggered']
})

export const MONITOR_ATTACHMENT_CHECKS = Object.freeze([
  'every_long_lived_state_has_monitor',
  'every_deadline_has_deadline_monitor',
  'every_reserve_has_health_monitor',
  'every_recurring_obligation_has_due_or_default_monitor',
  'every_escrow_has_stale_escrow_monitor',
  'every_proof_gated_release_has_proof_monitor',
  'every_high_risk_product_has_fraud_or_risk_monitor',
  'every_compliance_sensitive_capability_has_policy_drift_monitor'
])

export const MONITOR_ATTACHMENT_OUTPUTS = Object.freeze([
  'monitor_plan',
  'monitor_thresholds',
  'runtime_actions',
  'escalation_map',
  'notification_rules',
  'audit_events',
  'watchtower_subscriptions',
  'doctor_diagnostic_hooks'
])

export const COMPLIANCE_GATED_COMBINATION_RULES = Object.freeze([
  {
    parts: ['advance_now', 'repay_later'],
    category: 'credit_like',
    review: 'credit_or_lending_review'
  },
  {
    parts: ['reserve_pool', 'loss_coverage'],
    category: 'insurance_like_risk_pooling',
    review: 'insurance_or_guarantee_review'
  },
  {
    parts: ['pooled_funds', 'rotating_payout'],
    category: 'rosca_like_pooled_payout',
    review: 'pooled_funds_and_payout_order_review'
  },
  {
    parts: ['recurring_contributions', 'pooled_funds', 'payout_order'],
    category: 'susu_rosca_like_product',
    review: 'pooled_funds_and_custody_review'
  },
  {
    parts: ['funds_held', 'conditional_release'],
    category: 'escrow_money_transmission_custody',
    review: 'custody_and_escrow_review'
  },
  {
    parts: ['escrow_hold', 'conditional_release'],
    category: 'escrow_like_custody_review_candidate',
    review: 'custody_and_escrow_review'
  },
  {
    parts: ['foreign_sender', 'foreign_recipient', 'currency_conversion'],
    category: 'remittance_fx',
    review: 'remittance_and_fx_review'
  }
])

export const COMPLIANCE_TAGGING_PATTERN_RULES = Object.freeze([
  {
    pattern_id: 'credit_like_advance',
    if_components: ['advance_disbursement', 'repayment_obligation'],
    if_conditions: ['user_receives_value_before_full_funding', 'future_repayment_required'],
    tags: ['credit_like', 'lending_review_candidate'],
    required_governor_review: true,
    confidence: 'high',
    suggested_release_restriction: 'restrict_auto_release_until_governor_review',
    required_disclosure_families: ['repayment_terms', 'cost_of_credit_like_behavior']
  },
  {
    pattern_id: 'insurance_like_pooling',
    if_components: ['reserve_pool', 'loss_coverage_policy'],
    if_conditions: ['pooled_funds_cover_member_loss', 'fee_or_contribution_supports_loss_coverage'],
    tags: ['insurance_like', 'pooled_risk_review_candidate'],
    required_governor_review: true,
    confidence: 'high',
    suggested_release_restriction: 'restrict_auto_release_until_review',
    required_disclosure_families: ['loss_coverage_terms', 'reserve_policy']
  },
  {
    pattern_id: 'escrow_like_custody',
    if_components: ['escrow_hold', 'conditional_release'],
    if_conditions: ['funds_held_until_condition_satisfied'],
    tags: ['escrow_like', 'custody_review_candidate'],
    required_governor_review: true,
    confidence: 'medium',
    suggested_release_restriction: 'supervised_release_until_review',
    required_disclosure_families: ['escrow_terms', 'refund_terms', 'dispute_terms']
  },
  {
    pattern_id: 'remittance_fx',
    if_components: ['foreign_sender', 'foreign_recipient', 'currency_conversion'],
    if_conditions: ['cross_border_transfer', 'currency_conversion_applies'],
    tags: ['remittance_candidate', 'fx_review_candidate'],
    required_governor_review: true,
    confidence: 'high',
    suggested_release_restriction: 'jurisdiction_review_required',
    required_disclosure_families: ['fx_rate_disclosure', 'cross_border_transfer_terms']
  }
])

export const COMPLIANCE_TAGGING_OUTPUTS = Object.freeze([
  'compliance_tag_manifest',
  'triggering_pattern_explanation',
  'confidence_level',
  'required_governor_review',
  'suggested_release_restriction',
  'required_disclosure_families',
  'jurisdiction_specific_rule_hooks'
])

export const COMPLIANCE_TAGGING_EXAMPLE_MANIFEST = Object.freeze({
  compliance_tags: ['pooled_contribution', 'money_movement', 'default_risk', 'possible_insurance_like_pooling'],
  triggered_by: ['reserve_pool', 'no_pot_shrink_policy', 'member_default_coverage'],
  action: ['route_to_governor', 'restrict_auto_release_until_review']
})

export const COMPOSITION_SIMULATION_GATED_PRODUCTS = Object.freeze([
  'protected_susu_circle',
  'reserve_backed_payout',
  'credit_like_advance',
  'liquidity_support_tool',
  'high_value_contractor_escrow',
  'family_pooled_goal_wallet',
  'business_procurement_flow'
])

export const COMPOSITION_SIMULATION_SCENARIOS = Object.freeze({
  protected_susu_circle: [
    'all_members_pay_on_time',
    'one_member_late_before_payout',
    'one_member_pays_late',
    'one_member_defaults_before_payout',
    'one_member_defaults_after_payout',
    'two_members_default_before_round_4',
    'two_members_default',
    'reserve_depletion',
    'reserve_depleted_mid_cycle',
    'payment_reversal_after_payout',
    'organizer_attempts_payout_order_change',
    'organizer_abuse_attempt',
    'member_exit_mid_cycle',
    'replacement_member_joins',
    'BTS_low_member_requests_early_payout'
  ],
  high_value_contractor_escrow: [
    'proof_accepted',
    'proof_rejected',
    'payment_reversal',
    'deadline_expired',
    'dispute_opened',
    'fraudulent_proof_discovered'
  ],
  credit_like_advance: [
    'on_time_repayment',
    'late_repayment',
    'failed_repayment',
    'hardship_request',
    'chargeback_after_advance'
  ]
})

export const SIMULATION_SCENARIO_GENERATOR_QUESTIONS = Object.freeze([
  'what_could_happen_over_time',
  'what_adversarial_cases_should_be_tested',
  'what_edge_cases_could_break_the_product',
  'what_financial_stress_could_expose_hidden_risk'
])

export const SIMULATION_SCENARIO_TYPES = Object.freeze([
  'normal_scenarios',
  'delayed_payment_scenarios',
  'default_scenarios',
  'fraud_scenarios',
  'dispute_scenarios',
  'settlement_reversal_scenarios',
  'liquidity_stress_scenarios',
  'reserve_depletion_scenarios',
  'user_confusion_scenarios',
  'operational_failure_scenarios',
  'high_volume_scenarios',
  'timing_conflict_scenarios',
  'adversarial_abuse_scenarios'
])

export const PROTECTED_SUSU_SCENARIO_PACK = Object.freeze({
  scenario_pack: 'protected_susu_circle',
  scenarios: [
    'all_members_pay_on_time',
    'one_member_late_before_payout',
    'one_member_defaults_after_payout',
    'two_members_default_before_round_4',
    'reserve_depleted_mid_cycle',
    'payment_reversal_after_payout',
    'organizer_attempts_payout_order_change',
    'member_exits_mid_cycle',
    'replacement_member_joins',
    'BTS_low_member_requests_early_payout'
  ]
})

export const SIMULATION_PASS_CRITERIA = Object.freeze([
  'ledger_never_unbalanced',
  'promised_payout_never_released_unfunded',
  'reserve_use_audited',
  'members_notified_of_default',
  'no_unconsented_rule_change'
])

export const SAFESEND_SCENARIO_PACK = Object.freeze({
  scenario_pack: 'safesend_proof_gated_payment',
  scenarios: [
    'proof_submitted_on_time_and_approved',
    'proof_missing_until_deadline',
    'proof_rejected_twice',
    'gps_mismatch',
    'photo_looks_suspicious',
    'sender_opens_dispute_before_release',
    'recipient_identity_fails',
    'release_rail_fails_during_release',
    'funds_stale_in_escrow'
  ]
})

export const SIMULATION_SCENARIO_GENERATOR_OUTPUTS = Object.freeze([
  'simulation_scenario_pack',
  'scenario_variables',
  'adversarial_cases',
  'pass_fail_thresholds',
  'required_simulation_count',
  'stress_severity_level',
  'doctor_review_requirements',
  'release_gating_requirements'
])

export const VERSIONED_COMPOSITION_REVIEW_FIELDS = Object.freeze([
  'output_state',
  'consent_requirements',
  'risk',
  'ui_wording',
  'ledger_behavior',
  'migration_reconsent'
])

export const FINANCIAL_VERSION_DIMENSIONS = Object.freeze([
  'financial_behavior',
  'user_rights',
  'consent_requirements',
  'ledger_effects',
  'risk_exposure',
  'failure_paths',
  'ui_truth',
  'audit_events',
  'migration_requirements'
])

export const VERSION_COMPATIBILITY_CHECKS = Object.freeze([
  'state_machine_compatibility',
  'ledger_compatibility',
  'consent_compatibility',
  'risk_compatibility',
  'ui_truth_compatibility',
  'compliance_compatibility',
  'algorithm_compatibility',
  'monitor_compatibility',
  'migration_compatibility',
  'kernel_contract_compatibility'
])

export const VERSION_COMPATIBILITY_OUTPUTS = Object.freeze([
  'version_lockfile',
  'compatibility_report',
  'upgrade_plan',
  'rollback_plan',
  'migration_requirements',
  'reconsent_requirements',
  'blocked_upgrade_findings'
])

export const RUNTIME_ADAPTIVE_REQUIREMENTS = Object.freeze([
  'pre_approved_runtime_branches',
  'prior_user_consent',
  'audit_event',
  'notification_flow',
  'no_new_penalty_after_join',
  'governor_review_for_unmodeled_branch'
])

export const RUNTIME_ADAPTIVE_FORBIDDEN_MUTATIONS = Object.freeze([
  'invent_new_penalty_rule',
  'change_payout_order_after_join',
  'increase_member_liability_without_consent',
  'remove_refund_path',
  'redirect_funds_to_new_claimant'
])

export const CLAIM_PRIORITY_ORDER = Object.freeze([
  'rent',
  'school_fees',
  'debt_minimum',
  'group_contribution',
  'flexible_spending'
])

export const CLAIM_COLLISION_RESOLUTION_FIELDS = Object.freeze([
  'winning_claim',
  'waiting_claims',
  'partial_funding_claims',
  'rejected_claims',
  'notification_targets'
])

export const CONSENT_REQUIREMENTS_BY_CAPABILITY = Object.freeze({
  protected_susu_circle: [
    'contribution_amount',
    'contribution_frequency',
    'payout_order',
    'default_consequences',
    'reserve_rules',
    'deposit_rules',
    'tail_lock_rules',
    'exit_rules',
    'dispute_process',
    'post_payout_obligations'
  ],
  safesend_recipient: [
    'conditional_access',
    'proof_requirements',
    'deadline',
    'possible_dispute_delay',
    'refund_conditions'
  ],
  school_fee_contributor: [
    'purpose_bound_money',
    'approved_school_or_payee_only',
    'receipt_visibility',
    'limited_refund_rules'
  ]
})

export const CONSENT_COVERAGE_EXPOSURE_TYPES = Object.freeze([
  'risk',
  'obligation',
  'restriction',
  'cost',
  'delay',
  'data_use',
  'loss'
])

export const CONSENT_OBLIGATION_MATRIX_FIELDS = Object.freeze([
  'actor_role',
  'exposure',
  'required_disclosures',
  'required_action'
])

export const SAFESEND_CONSENT_OBLIGATION_MATRIX = Object.freeze([
  {
    actor_role: 'sender',
    exposure: ['funds_will_be_held', 'refund_only_under_conditions', 'dispute_may_delay_resolution'],
    required_disclosures: ['escrow_terms', 'refund_terms', 'dispute_terms'],
    required_action: ['explicit_acceptance']
  },
  {
    actor_role: 'recipient',
    exposure: ['access_is_conditional', 'proof_required', 'claim_can_expire'],
    required_disclosures: ['conditional_claim_terms', 'proof_requirements', 'expiry_terms'],
    required_action: ['explicit_acceptance']
  }
])

export const SUSU_CONSENT_OBLIGATION_MATRIX = Object.freeze([
  {
    actor_role: 'group_member',
    exposure: [
      'recurring_contribution_obligation',
      'default_consequence',
      'post_payout_obligation',
      'reserve_use_policy',
      'payout_order_rule',
      'exit_rule'
    ],
    required_disclosures: ['member_rules', 'payout_rules', 'default_policy', 'reserve_policy', 'dispute_policy'],
    required_action: ['explicit_acceptance']
  }
])

export const CONSENT_GAP_SEVERITIES = Object.freeze([
  'minor',
  'warning',
  'serious',
  'critical',
  'fatal'
])

export const CONSENT_COVERAGE_CHECKS = Object.freeze([
  'every_exposed_actor_has_required_disclosure',
  'every_material_obligation_has_explicit_consent',
  'every_fee_has_disclosure',
  'every_restriction_has_disclosure',
  'every_delay_or_hold_has_disclosure',
  'every_risk_sharing_rule_has_disclosure',
  'every_post_payout_obligation_has_disclosure',
  'automated_decisions_have_explanation_where_needed',
  'consent_version_matches_capability_version',
  'material_changes_trigger_reconsent'
])

export const CONSENT_COVERAGE_OUTPUTS = Object.freeze([
  'consent_matrix',
  'disclosure_requirements',
  'missing_consent_findings',
  'consent_version_requirements',
  'reconsent_triggers',
  'ui_consent_screen_requirements',
  'audit_events_for_consent_capture'
])

export const FAILURE_PATH_TYPES = Object.freeze([
  'retry',
  'resubmission',
  'manual_review',
  'refund',
  'dispute',
  'pause',
  'fallback',
  'compensation',
  'escalation'
])

export const SERIOUS_FAILURE_MODES = Object.freeze([
  'payment_failure',
  'settlement_delay',
  'payment_reversal',
  'proof_rejection',
  'gps_mismatch',
  'identity_failure',
  'recipient_no_show',
  'sender_dispute',
  'member_default',
  'reserve_depletion',
  'invoice_rejection',
  'payee_verification_failure',
  'provider_outage',
  'human_review_delay'
])

export const FAILURE_MATRIX_EXAMPLE = Object.freeze([
  {
    failure_mode: 'proof_rejected',
    affected_state: 'proof_submitted',
    required_paths: ['resubmission', 'manual_review', 'refund_or_dispute_after_final_rejection'],
    status: 'complete'
  },
  {
    failure_mode: 'deadline_expired',
    affected_state: 'escrowed_funds',
    required_paths: ['refund_sender', 'audit_expiry', 'notify_recipient'],
    status: 'missing_refund_ledger_mapping'
  }
])

export const FAILURE_COMPLETENESS_CHECKS = Object.freeze([
  'every_declared_failure_mode_is_handled',
  'every_non_terminal_state_has_exits',
  'every_conditional_branch_has_fail_behavior',
  'every_guard_failure_has_response',
  'every_held_escrowed_or_locked_fund_has_release_refund_or_dispute_path',
  'every_recurring_obligation_has_late_missed_or_default_path',
  'every_manual_review_state_has_escalation_timeout',
  'every_external_provider_failure_has_retry_or_fallback',
  'every_compensation_path_has_ledger_logic'
])

export const FAILURE_COMPLETENESS_OUTPUTS = Object.freeze([
  'failure_matrix',
  'stuck_state_report',
  'missing_recovery_paths',
  'required_compensation_paths',
  'required_timeout_policies',
  'required_dispute_paths',
  'required_user_explanations'
])

export const OWNERSHIP_PRESERVATION_FIELDS = Object.freeze([
  'contributor_identity',
  'beneficiary_identity',
  'purpose_restriction',
  'guardian_control',
  'approved_payee_restriction',
  'refund_rules',
  'usage_visibility'
])

export const DANGEROUS_ACTION_GUARDS = Object.freeze({
  release_escrowed_funds: [
    'funds_are_escrowed',
    'recipient_verified',
    'proof_approved',
    'no_active_dispute',
    'deadline_valid',
    'compliance_clear'
  ],
  release_funds: [
    'funds_are_escrowed',
    'recipient_verified',
    'proof_approved',
    'deadline_valid',
    'no_active_dispute',
    'compliance_clear'
  ],
  unlock_protected_funds: ['identity_guard', 'cooling_off_guard', 'purpose_override_reason', 'audit_guard'],
  change_payout_order: ['member_consent', 'notice_guard', 'fairness_review', 'audit_guard'],
  use_reserve: ['reserve_policy', 'fundability_guard', 'admin_or_policy_approval', 'audit_guard'],
  override_restriction: ['approved_override', 'guardian_approval', 'human_review_guard', 'audit_guard'],
  remove_member: ['member_policy', 'notice_guard', 'appeal_path', 'audit_guard'],
  approve_proof: ['proof_verification_guard', 'conflict_check', 'manual_review_threshold'],
  increase_limit: ['identity_guard', 'risk_score_guard', 'limit_guard'],
  activate_credit_like_feature: ['approval_path', 'limit_guard', 'compliance_guard', 'disclosure_consent']
})

export const RISK_MITIGATION_CATALOG = Object.freeze({
  post_payout_default_risk: ['deposit', 'reserve', 'trust_score_gate', 'default_handler', 'tail_lock', 'guarantor', 'runtime_monitor'],
  late_contribution_risk: ['grace_period', 'notification_flow', 'runtime_monitor', 'default_handler'],
  payout_fairness_risk: ['payout_order_rule', 'member_consent', 'audit_trail', 'governor_review'],
  organizer_manipulation_risk: ['member_vote', 'platform_review', 'runtime_monitor', 'audit_trail'],
  default_risk: ['deposit', 'reserve', 'trust_score_gate', 'payout_order_rule', 'default_handler'],
  fraud_risk: ['identity_verification', 'manual_review', 'proof_verification'],
  liquidity_risk: ['reserve', 'fundability_guard', 'payout_delay'],
  stale_escrow_risk: ['refund_timer', 'escrow_age_monitor'],
  dispute_resolution_risk: ['dispute_workflow', 'manual_review'],
  proof_fraud_risk: ['photo_verification', 'gps_verification', 'manual_review_threshold'],
  custody_review_risk: ['governor_review', 'escrow_disclosure', 'release_or_refund_path']
})

export const RISK_VECTOR_FIELDS = Object.freeze([
  'fraud_risk',
  'default_risk',
  'post_payout_bolting_risk',
  'settlement_risk',
  'liquidity_risk',
  'compliance_risk',
  'user_confusion_risk',
  'operational_risk',
  'dispute_risk'
])

export const SUSU_RISK_VECTOR = Object.freeze({
  fraud_risk: 'medium',
  default_risk: 'high',
  post_payout_bolting_risk: 'high',
  settlement_risk: 'medium',
  liquidity_risk: 'medium',
  compliance_risk: 'review_required',
  user_confusion_risk: 'medium',
  operational_risk: 'medium',
  dispute_risk: 'high'
})

export const SAFESEND_RISK_VECTOR = Object.freeze({
  counterparty_nonperformance_risk: 'reduced',
  proof_fraud_risk: 'medium',
  dispute_risk: 'medium',
  custody_review_risk: 'review_required',
  stale_escrow_risk: 'medium'
})

export const RISK_COMPONENT_EFFECTS = Object.freeze({
  rotating_payout_queue: {
    risks_introduced: ['post_payout_default_risk', 'payout_order_dispute_risk'],
    risks_reduced: [],
    risks_transferred: [],
    risks_amplified: ['default_risk'],
    required_mitigations: ['default_handler', 'fundability_guard', 'member_consent', 'contribution_monitor']
  },
  no_pot_shrink_policy: {
    risks_introduced: ['payout_promise_risk'],
    risks_reduced: [],
    risks_transferred: ['shortfall_loss_absorption_to_reserve_or_sponsor'],
    risks_amplified: ['liquidity_risk', 'compliance_risk'],
    required_mitigations: ['reserve_pool', 'two_default_simulation', 'governor_review']
  },
  reserve_pool: {
    risks_introduced: ['pooled_risk_concern'],
    risks_reduced: ['shortfall_risk', 'default_risk'],
    risks_transferred: ['shortfall_loss_to_reserve_pool'],
    risks_amplified: ['compliance_risk'],
    required_mitigations: ['reserve_health_monitor', 'reserve_accounting']
  },
  escrow_hold: {
    risks_introduced: ['stale_escrow_risk', 'dispute_resolution_risk'],
    risks_reduced: ['counterparty_nonperformance_risk'],
    risks_transferred: ['control_to_escrow_contract'],
    risks_amplified: [],
    required_mitigations: ['refund_timer', 'dispute_workflow', 'escrow_age_monitor']
  }
})

export const RISK_COMPOSITION_OUTPUTS = Object.freeze([
  'risk_manifest',
  'residual_risk_score',
  'required_mitigations',
  'recommended_guards',
  'recommended_monitors',
  'recommended_release_mode',
  'compliance_escalation_signals',
  'bts_based_adaptation_rules'
])

export const RISK_RESULT_EXAMPLE = Object.freeze({
  status: 'high_risk_but_mitigable',
  required_mitigations: ['reserve_pool', 'default_handler', 'fundability_guard', 'member_consent', 'two_default_simulation'],
  release_recommendation: 'simulation_gated_governor_review'
})

export const GUARD_INSERTION_EXAMPLES = Object.freeze([
  'consent_guard',
  'identity_guard',
  'fundability_guard',
  'proof_approval_guard',
  'recipient_identity_guard',
  'no_active_dispute_guard',
  'settlement_guard',
  'jurisdiction_guard',
  'BTS_threshold_guard',
  'human_review_guard',
  'limit_guard',
  'approved_payee_guard',
  'compliance_guard'
])

export const GUARD_INSERTION_OUTPUTS = Object.freeze([
  'guarded_composition_graph',
  'guard_definitions',
  'guard_placement_map',
  'failure_behavior_for_guard_failure',
  'ui_explanations_for_blocked_actions',
  'kernel_guard_predicates',
  'audit_events',
  'guarded_action_plan',
  'inserted_guards',
  'missing_guard_blockers',
  'kernel_predicates'
])

export const DANGEROUS_ACTIONS_REQUIRING_GUARDS = Object.freeze([
  'release_funds',
  'unlock_restricted_funds',
  'withdraw_money',
  'use_reserve',
  'change_payout_order',
  'approve_proof',
  'remove_group_member',
  'increase_transaction_limit',
  'activate_credit_like_behavior'
])

export const GUARD_DEFINITION_FIELDS = Object.freeze([
  'guard_id',
  'applies_to',
  'requires',
  'predicate',
  'on_pass',
  'on_fail',
  'audit_event'
])

export const GUARD_DEFINITION_CATALOG = Object.freeze({
  fundability_guard: {
    guard_id: 'fundability_guard',
    applies_to: ['payout_release', 'reserve_backed_release'],
    requires: ['required_payout_amount', 'settled_contributions', 'available_reserve', 'settlement_risk'],
    predicate: 'settled_contributions_plus_available_reserve_gte_required_payout_amount',
    on_pass: ['allow_transition'],
    on_fail: ['block_transition', 'trigger_shortfall_explanation', 'notify_organizer', 'activate_default_or_pause_policy'],
    audit_event: ['fundability_check_performed']
  },
  proof_approval_guard: {
    guard_id: 'proof_approval_guard',
    applies_to: ['conditional_release', 'escrow_release'],
    requires: ['approved_proof', 'proof_confidence_score', 'review_status'],
    predicate: 'approved_proof_exists_and_confidence_threshold_passes',
    on_pass: ['allow_release_review'],
    on_fail: ['request_resubmission', 'manual_review', 'open_dispute', 'refund_after_deadline'],
    audit_event: ['proof_approval_guard_evaluated']
  },
  approved_payee_guard: {
    guard_id: 'approved_payee_guard',
    applies_to: ['school_fee_wallet_payment', 'restricted_wallet_payment'],
    requires: ['approved_payee_registry_match', 'invoice_verification_status', 'guardian_permission'],
    predicate: 'payee_is_approved_and_invoice_matches_purpose',
    on_pass: ['allow_payment'],
    on_fail: ['block_payment', 'explain_approved_payee_requirement', 'request_payee_review'],
    audit_event: ['approved_payee_guard_evaluated']
  }
})

export const GUARD_PLACEMENT_RULES = Object.freeze({
  group_payout_release: ['fundability_guard', 'settlement_guard', 'no_active_dispute_guard', 'payout_order_guard'],
  school_fee_wallet_payment: ['approved_payee_guard', 'invoice_verification_guard', 'guardian_permission_guard'],
  escrow_release: ['proof_approval_guard', 'recipient_identity_guard', 'no_active_dispute_guard']
})

export const AUDIT_CLOSURE_FIELDS = Object.freeze([
  'created_by',
  'version_used',
  'components_assembled',
  'active_rules',
  'consented_by',
  'disclosure_shown',
  'money_moved',
  'ledger_entries_posted',
  'condition_passed',
  'condition_failed',
  'algorithm_decided',
  'human_reviewed',
  'override_occurred'
])

export const RUNTIME_MONITOR_REQUIREMENTS = Object.freeze({
  susu_circle: [
    'contribution_monitor',
    'default_monitor',
    'reserve_health_monitor',
    'payout_readiness_monitor',
    'member_risk_monitor'
  ],
  safesend_payment: [
    'proof_deadline_monitor',
    'escrow_age_monitor',
    'dispute_status_monitor',
    'suspicious_proof_monitor'
  ],
  school_fee_wallet: [
    'due_date_monitor',
    'shortfall_monitor',
    'approved_payee_monitor',
    'restriction_breach_monitor'
  ]
})

export const EXPLAINABILITY_FIELDS = Object.freeze([
  'what_was_created',
  'how_money_moves',
  'who_can_act',
  'what_can_go_wrong',
  'what_happens_next',
  'why_action_was_blocked'
])

export const SAFE_DEFAULT_RULES = Object.freeze({
  refund_deadline: 'ask_or_use_conservative_default',
  payout_order: 'do_not_activate_group',
  ownership_model: 'block_or_ask',
  reserve_source: 'no_pot_shrink_policy_cannot_activate',
  proof_rule: 'require_clarification',
  compliance_tag: 'escalate',
  failure_path: 'add_one_or_block'
})

export const CAPABILITY_CLOSURE_SIGNATURE_FIELDS = Object.freeze([
  'inputs',
  'outputs',
  'actors',
  'states',
  'risks',
  'ledger_effects',
  'failure_modes',
  'monitors',
  'ui_requirements',
  'compliance_tags'
])

export const AURA_GUARDS = Object.freeze([
  'consent_guard',
  'identity_guard',
  'fundability_guard',
  'ledger_balance_guard',
  'bts_threshold_guard',
  'compliance_guard',
  'jurisdiction_guard',
  'proof_verification_guard',
  'human_review_guard',
  'limit_guard',
  'risk_score_guard',
  'time_window_guard'
])

export const WRAPPER_TYPES = Object.freeze([
  'escrow',
  'bts_gated',
  'consent_required',
  'dispute_enabled',
  'human_reviewable',
  'location_restricted',
  'child_protected',
  'merchant_restricted',
  'jurisdiction_limited',
  'simulation_required'
])

export const POLICY_OVERLAYS = Object.freeze({
  no_pot_shrink_policy: [
    'fundability_check',
    'reserve_pool_or_coverage_source',
    'default_policy',
    'payout_block_if_underfunded',
    'member_disclosure',
    'runtime_monitor'
  ],
  child_protection_policy: [
    'guardian_role',
    'restricted_spending',
    'approved_payees',
    'age_sensitive_ui',
    'emergency_override',
    'audit_trail'
  ]
})

export const UI_STATE_BINDINGS = Object.freeze({
  available_funds: {
    component: 'spendable_balance',
    warning: null,
    enabledActions: ['spend', 'transfer', 'allocate'],
    disabledActions: [],
    explanation: 'This money is available to use.'
  },
  locked_funds: {
    component: 'locked_money_card',
    warning: 'Early unlock may affect protected obligations.',
    enabledActions: ['request_emergency_unlock'],
    disabledActions: ['spend_freely'],
    explanation: 'This money is locked for a protected purpose.'
  },
  escrowed_funds: {
    component: 'protected_money_card',
    warning: 'Recipient cannot access funds until conditions pass.',
    enabledActions: ['view_conditions', 'open_dispute'],
    disabledActions: ['spend_freely'],
    explanation: 'This money is protected while proof or review is pending.'
  },
  proof_pending: {
    component: 'waiting_timeline',
    warning: 'Release is waiting for evidence.',
    enabledActions: ['send_reminder', 'open_dispute'],
    disabledActions: ['release_without_proof'],
    explanation: 'Proof must be submitted before release.'
  },
  restricted_school_fee_funds: {
    component: 'purpose_locked_wallet',
    warning: 'Funds can only go to approved education recipients.',
    enabledActions: ['pay_approved_school', 'upload_invoice'],
    disabledActions: ['cash_withdrawal'],
    explanation: 'These funds are restricted for school fees.'
  },
  default_risk: {
    component: 'warning_banner',
    warning: 'Default risk is elevated.',
    enabledActions: ['review_plan', 'apply_reserve'],
    disabledActions: ['increase_exposure'],
    explanation: 'AURA is reducing risk before more money moves.'
  },
  reserve_depleted: {
    component: 'admin_risk_panel',
    warning: 'Reserve is below required coverage.',
    enabledActions: ['pause_product', 'increase_deposit'],
    disabledActions: ['guarantee_new_payout'],
    explanation: 'Reserve health is too low for guaranteed payouts.'
  },
  contribution_due: {
    component: 'reminder_chip',
    warning: null,
    enabledActions: ['pay_now', 'request_grace_period'],
    disabledActions: [],
    explanation: 'A contribution is due.'
  },
  payout_ready: {
    component: 'release_confirmation_screen',
    warning: 'Confirm payout rules before release.',
    enabledActions: ['release_if_guards_pass'],
    disabledActions: ['override_guarded_release'],
    explanation: 'The payout can release after final checks.'
  }
})

export const COMPOSITION_LAWS = Object.freeze([
  'closure_law',
  'state_continuity_law',
  'ledger_conservation_law',
  'no_double_claim_law',
  'consent_completeness_law',
  'failure_completeness_law',
  'ownership_preservation_law',
  'role_validity_law',
  'risk_monotonicity_law',
  'guard_sufficiency_law',
  'compliance_escalation_law',
  'explainability_law',
  'audit_closure_law',
  'reversibility_compensation_law',
  'runtime_monitor_law',
  'ui_truth_law',
  'version_compatibility_law',
  'safe_default_law'
])

export const GOVERNOR_DECISIONS = Object.freeze([
  'allowed',
  'requires_disclosure',
  'allowed_with_disclosures',
  'allowed_with_limits',
  'requires_license',
  'requires_human_review',
  'blocked'
])

export const REVERSIBILITY_STATES = Object.freeze({
  escrowed_funds: 'reversible',
  released_funds: 'partially_reversible',
  closed: 'terminal',
  disputed: 'disputable',
  charged_back: 'compensatable',
  settled_merchant_payment: 'refund_process_required',
  cash_withdrawal: 'largely_irreversible',
  settled_final: 'irreversible'
})

export const proofGatedSafeSendCompositionGraph = Object.freeze({
  components: [
    'sender_wallet',
    'debit_atom',
    'escrow_hold_primitive',
    'escrowed_funds',
    'proof_gate',
    'gps_verification',
    'photo_verification',
    'identity_verification',
    'conditional_release',
    'recipient_wallet'
  ],
  connections: [
    ['sender_wallet', 'debit_atom'],
    ['debit_atom', 'escrow_hold_primitive'],
    ['escrow_hold_primitive', 'escrowed_funds'],
    ['escrowed_funds', 'proof_gate'],
    ['proof_gate', 'conditional_release'],
    ['conditional_release', 'recipient_wallet']
  ],
  states: ['available', 'escrowed', 'proof_pending', 'approved', 'released', 'refunded', 'disputed'],
  flows: ['fund', 'verify', 'release', 'refund', 'dispute'],
  actors: ['sender', 'recipient', 'verifier'],
  guards: ['consent_guard', 'identity_guard', 'proof_confidence_guard', 'no_active_dispute_guard', 'fundability_guard'],
  policies: ['refund_on_expiry', 'manual_review_on_suspicion'],
  ledgerEntries: [
    { account: 'sender_available', amount: -100000 },
    { account: 'escrow_liability', amount: 100000 },
    { account: 'escrow_liability', amount: -100000 },
    { account: 'recipient_available', amount: 100000 }
  ],
  failurePaths: [
    ['escrowed_funds', 'expiry_timer', 'refund_sender'],
    ['proof_failed', 'resubmission_or_manual_review'],
    ['dispute_opened', 'freeze', 'resolution'],
    ['deadline_expired', 'refund_sender']
  ],
  runtimeMonitors: ['escrow_age_monitor', 'proof_submission_monitor', 'dispute_status_monitor'],
  uiBindings: {
    escrowed_funds: 'protected_money_card',
    proof_pending: 'proof_timeline',
    rejected: 'resubmission_prompt',
    disputed: 'dispute_status_panel',
    refunded: 'refund_confirmation_card'
  },
  algorithms: ['proof_confidence_scoring', 'risk_threshold_review'],
  complianceTags: ['payment', 'escrow_like', 'custody_review_candidate'],
  requiredTests: [
    'cannot_release_before_proof',
    'refund_after_deadline',
    'dispute_freezes_release',
    'ledger_balances_after_release',
    'ledger_balances_after_refund'
  ]
})

export const safeSendProductCompositionManifest = Object.freeze({
  product_id: 'aura.safesend.proof_gated_delivery_payment',
  composition_version: '1.0.0',
  capability_type: 'proof_gated_escrow_payment',
  release_mode: 'supervised_auto_release',
  components: [
    { id: 'debit_sender', type: 'atom', name: 'debit', version: '1.0.0' },
    { id: 'escrow_hold', type: 'primitive', name: 'escrow_hold', version: '2.1.0' },
    { id: 'proof_gate', type: 'primitive', name: 'multi_proof_gate', version: '1.4.0' },
    { id: 'gps_check', type: 'mini_primitive', name: 'gps_verification', version: '1.2.0' },
    { id: 'photo_check', type: 'mini_primitive', name: 'photo_proof', version: '1.3.0' },
    { id: 'release', type: 'atom', name: 'conditional_release', version: '1.0.0' },
    { id: 'refund_timer', type: 'mini_primitive', name: 'refund_timer', version: '1.1.0' },
    { id: 'dispute_workflow', type: 'primitive', name: 'dispute_workflow', version: '1.0.0' }
  ],
  connections: [
    { from: 'debit_sender.output.available_debited', to: 'escrow_hold.input.funded_value' },
    { from: 'escrow_hold.output.escrowed_funds', to: 'proof_gate.input.controlled_funds' },
    { from: 'proof_gate.output.approved', to: 'release.input.release_authorization' },
    { from: 'proof_gate.output.rejected', to: 'dispute_workflow.input.review_case' },
    { from: 'refund_timer.output.expired', to: 'refund.input.refund_authorization' }
  ],
  actors: [
    { role: 'sender' },
    { role: 'recipient' },
    { role: 'verifier' }
  ],
  states: ['draft', 'funded', 'escrowed', 'proof_pending', 'approved', 'released', 'refunded', 'disputed', 'closed'],
  guards: ['consent_guard', 'identity_guard', 'proof_approval_guard', 'proof_confidence_guard', 'no_active_dispute_guard', 'fundability_guard'],
  ledger_templates: ['escrow_hold', 'escrow_release', 'escrow_refund'],
  failure_paths: [
    'escrowed_funds_to_refund_timer_to_sender_refund',
    'proof_rejected_to_resubmission_to_review',
    'dispute_opened_to_freeze_to_resolution',
    'deadline_expired_to_refund'
  ],
  monitors: ['escrow_age_monitor', 'proof_submission_monitor', 'dispute_status_monitor', 'suspicious_activity_monitor'],
  ui_bindings: {
    escrowed_funds: 'protected_money_card',
    proof_pending: 'proof_timeline',
    rejected: 'resubmission_prompt',
    disputed: 'dispute_status_panel',
    refunded: 'refund_confirmation_card'
  },
  algorithms: ['proof_confidence_scoring', 'risk_score'],
  compliance_tags: ['payment', 'escrow_like', 'custody_review_candidate'],
  required_tests: [
    'cannot_release_before_proof',
    'refund_after_deadline',
    'refund_after_expiry',
    'dispute_blocks_release',
    'dispute_freezes_release',
    'ledger_balances_after_release',
    'ledger_balances_after_refund'
  ]
})

export const SAFESEND_COMPOSITION_LOCKFILE = Object.freeze({
  composition_lockfile: {
    product_id: 'aura.safesend.proof_gated_payment',
    components: {
      escrow_hold: '2.1.0',
      proof_gate: '1.4.0',
      refund_timer: '1.1.0',
      dispute_workflow: '1.0.0',
      protected_payment_ui: '1.3.2'
    },
    algorithms: {
      proof_confidence_scoring: '1.2.0',
      risk_score: '2.0.1'
    },
    guards: {
      consent_guard: '1.0.0',
      no_active_dispute_guard: '1.0.0'
    }
  }
})

export const CONTRACTOR_PAYMENT_GRAPH_CANDIDATES = Object.freeze([
  {
    id: 'simple_escrow',
    label: 'Simple escrow',
    components: ['escrow_hold', 'conditional_release', 'refund_timer', 'dispute_workflow'],
    safety: 76,
    friction: 24,
    cost: 18,
    compliance_burden: 30,
    user_trust: 70
  },
  {
    id: 'milestone_escrow',
    label: 'Milestone escrow',
    components: ['escrow_hold', 'milestone_schedule', 'conditional_release', 'refund_timer', 'dispute_workflow'],
    safety: 84,
    friction: 42,
    cost: 28,
    compliance_burden: 38,
    user_trust: 78
  },
  {
    id: 'photo_proof_safesend',
    label: 'Photo-proof SafeSend',
    components: ['escrow_hold', 'photo_proof', 'proof_gate', 'conditional_release', 'refund_timer', 'dispute_workflow'],
    safety: 82,
    friction: 36,
    cost: 22,
    compliance_burden: 34,
    user_trust: 76
  },
  {
    id: 'gps_photo_proof_safesend',
    label: 'GPS + photo proof SafeSend',
    components: ['escrow_hold', 'photo_proof', 'gps_verification', 'proof_gate', 'conditional_release', 'refund_timer', 'dispute_workflow'],
    safety: 88,
    friction: 50,
    cost: 30,
    compliance_burden: 42,
    user_trust: 82
  },
  {
    id: 'third_party_verified_milestone_payment',
    label: 'Third-party verified milestone payment',
    components: ['escrow_hold', 'milestone_schedule', 'external_verifier_attestation', 'conditional_release'],
    safety: 90,
    friction: 64,
    cost: 55,
    compliance_burden: 62,
    user_trust: 86,
    requiresThirdPartyProviderApi: true
  },
  {
    id: 'deposit_final_release_flow',
    label: 'Deposit + final release flow',
    components: ['deposit_hold', 'final_acceptance_gate', 'conditional_release', 'refund_timer'],
    safety: 78,
    friction: 32,
    cost: 24,
    compliance_burden: 34,
    user_trust: 72
  }
])

export const PRIMITIVE_REGISTRY = Object.freeze({
  escrow_hold: {
    primitive: 'escrow_hold',
    component_id: 'primitive.escrow_hold',
    name: 'Escrow Hold',
    level: 'primitive',
    version: '2.1.0',
    status: 'approved',
    input_ports: [
      { name: 'source_funds', type: 'money_state.available_settled_funds', required: true }
    ],
    output_ports: [
      { name: 'escrowed_funds', type: 'money_state.escrowed_funds' }
    ],
    requires: {
      actors: ['payer', 'conditional_recipient'],
      states: ['available_settled_funds'],
      permissions: ['payer.can_fund', 'system.can_hold_funds'],
      guards: ['consent_guard', 'fundability_guard', 'identity_guard']
    },
    produces: {
      state: ['escrowed_funds'],
      claims: ['recipient_conditional_claim'],
      ledgerEffects: ['debit_payer_available_balance', 'credit_escrow_liability']
    },
    required_actors: ['payer', 'conditional_recipient'],
    optional_actors: ['verifier', 'human_reviewer'],
    required_permissions: ['payer.can_fund', 'system.can_hold_funds'],
    ledger_effects: [
      { debit: 'payer_available_balance', credit: 'escrow_liability', amount: 'principal_amount' }
    ],
    introduced_risks: ['stale_escrow_risk', 'dispute_risk', 'custody_review_risk'],
    reduced_risks: ['counterparty_nonperformance_risk'],
    required_guards: ['consent_guard', 'fundability_guard', 'identity_guard'],
    required_failure_handlers: ['refund_path', 'dispute_path', 'expiry_path'],
    required_monitors: ['escrow_age_monitor', 'dispute_status_monitor'],
    ui_requirements: ['protected_money_card', 'escrow_status_timeline', 'refund_explanation'],
    compliance_tags: ['payment', 'escrow_like', 'custody_review_candidate'],
    test_templates: [
      'cannot_release_without_condition',
      'refund_after_expiry',
      'ledger_balances_after_release',
      'ledger_balances_after_refund'
    ],
    signatureFields: [
      'component_id',
      'input_ports',
      'output_ports',
      'ledger_effects',
      'introduced_risks',
      'required_failure_handlers',
      'required_monitors',
      'ui_requirements',
      'test_templates'
    ]
  },
  rotating_payout_queue: {
    primitive: 'rotating_payout_queue',
    version: '1.5.0',
    requires: {
      actors: ['group_member', 'payout_recipient'],
      states: ['group_active', 'contribution_round_funded'],
      policies: ['payout_order_rule'],
      guards: ['fundability_guard']
    },
    produces: {
      state: ['payout_ready', 'payout_released'],
      claims: ['member_payout_claim']
    },
    requires_if: {
      no_pot_shrink_policy: ['reserve_pool', 'default_handler', 'contribution_settlement_check', 'reserve_health_monitor']
    },
    failure_modes: ['contribution_missing', 'payout_blocked', 'member_default', 'reserve_insufficient'],
    ui_requirements: ['payout_queue_visual', 'contribution_status_timeline', 'payout_blocked_explanation'],
    signatureFields: ['primitive', 'version', 'requires', 'produces', 'requires_if', 'failure_modes', 'ui_requirements']
  }
})

export const ADMIN_CANVAS_STATES = Object.freeze([
  'valid_connection',
  'invalid_connection',
  'missing_dependency',
  'risk_increase',
  'compliance_escalation',
  'simulation_required',
  'consent_missing',
  'monitor_missing',
  'ui_truth_warning',
  'required_disclosure',
  'recommended_monitor'
])

export const safeSendCompositionRecipe = Object.freeze({
  name: 'SafeSend',
  physicsNeeds: [
    'money_must_be_protected',
    'recipient_conditional_access',
    'proof_submitted',
    'proof_approved',
    'release_or_refund',
    'disputes_possible'
  ],
  composition: [
    'debit_sender',
    'escrow_hold',
    'claimable_transfer',
    'proof_gate_photo_gps_optional_identity',
    'conditional_release',
    'refund_timer',
    'dispute_workflow',
    'consent_capture',
    'runtime_monitor'
  ],
  states: ['available_funds', 'debited_funds', 'escrowed_funds', 'approved_escrowed_funds', 'recipient_available_funds'],
  failurePaths: [
    'proof_missing_refund',
    'proof_rejected_resubmission_or_dispute',
    'gps_mismatch_manual_review',
    'deadline_expired_refund',
    'sender_dispute_freeze'
  ],
  checks: [
    'escrow_exists_before_proof_release',
    'recipient_cannot_claim_before_approval',
    'refund_path_exists',
    'dispute_path_exists',
    'consent_exists',
    'ledger_balances',
    'ui_shows_protected_status',
    'runtime_monitor_watches_deadline'
  ],
  invalidVersion: {
    parts: ['send_money', 'photo_upload', 'instant_release'],
    reasons: [
      'photo_upload_does_not_equal_verified_proof',
      'instant_release_removes_control_before_condition_satisfied',
      'no_escrow',
      'no_refund_path',
      'no_dispute_path',
      'no_guard'
    ]
  }
})

export const susuCompositionRecipe = Object.freeze({
  name: 'SusuCircle',
  physicsNeeds: [
    'recurring_obligations',
    'pooled_funds',
    'rotating_payout_claims',
    'default_risk',
    'post_payout_bolting_risk',
    'fundability_requirement',
    'member_consent',
    'reserve_or_protection_requirement'
  ],
  composition: [
    'group_entity',
    'member_registry',
    'recurring_contribution',
    'contribution_obligation_tracker',
    'group_wallet',
    'payout_queue',
    'fundability_guard',
    'no_pot_shrink_policy',
    'reserve_pool',
    'default_handler',
    'member_consent',
    'dispute_workflow',
    'runtime_monitors',
    'payout_queue_ui',
    'reserve_health_ui'
  ],
  roundLoop: [
    'open_contribution_window',
    'collect_contributions',
    'verify_settlement',
    'update_obligations',
    'check_fundability',
    'release_payout_if_fundable',
    'apply_reserve_default_or_pause_policy_if_not_fundable',
    'update_bts',
    'move_to_next_round'
  ],
  fundabilityGuard:
    'release_payout_only_if_settled_contributions_plus_approved_reserve_support_gte_promised_payout',
  checks: [
    'every_member_has_obligation',
    'every_payout_recipient_has_claim',
    'payout_order_exists',
    'no_pot_shrink_policy_has_reserve_source',
    'default_handler_exists',
    'member_consent_covers_default_rules',
    'reserve_use_has_ledger_path',
    'post_payout_default_path_defined',
    'runtime_monitors_exist',
    'simulation_required',
    'governor_review_required'
  ],
  invalidVersion: {
    parts: ['group_wallet', 'rotating_payout'],
    reasons: [
      'no_contribution_obligation',
      'no_default_policy',
      'no_fundability_guard',
      'no_consent',
      'no_reserve',
      'no_failure_path',
      'no_runtime_monitoring',
      'no_payout_fairness_rule'
    ]
  }
})

export const smartSalarySplitCompositionRecipe = Object.freeze({
  name: 'SmartSalarySplit',
  composition: [
    'income_detector',
    'priority_waterfall',
    'goal_wallets',
    'obligation_tracker',
    'protected_allocation_policy',
    'shortfall_detector',
    'user_override_policy',
    'notification_engine',
    'runtime_monitor'
  ],
  flow: [
    'salary_arrives',
    'income_detector',
    'priority_waterfall',
    'rent_wallet',
    'school_fee_wallet',
    'debt_minimum',
    'food_wallet',
    'emergency_savings',
    'spending_wallet'
  ],
  rules: [
    'protected_obligations_fund_before_discretionary_spending',
    'shortfall_triggers_user_notification',
    'override_shows_consequence',
    'locked_funds_not_freely_spendable'
  ],
  invalidVersion: {
    parts: ['salary_split_by_percentages_only'],
    reasons: [
      'no_priority_logic',
      'no_shortfall_handling',
      'no_obligation_awareness',
      'no_protected_fund_state',
      'no_consequence_explanation'
    ]
  }
})

export const schoolFeeWalletCompositionRecipe = Object.freeze({
  name: 'SchoolFeeWallet',
  composition: [
    'goal_wallet',
    'beneficiary_role_child',
    'guardian_control_parent',
    'contribution_links',
    'approved_payee_restriction_school',
    'invoice_verification',
    'restricted_fund_state',
    'contributor_receipts',
    'emergency_override_policy',
    'audit_trail',
    'due_date_monitor',
    'protected_wallet_ui'
  ],
  checks: [
    'child_beneficiary_defined',
    'guardian_role_defined',
    'contributors_identified',
    'school_approved_payee',
    'funds_leave_only_through_approved_routes',
    'emergency_override_defined',
    'usage_visibility_defined',
    'refund_policy_defined',
    'invoice_change_policy_defined',
    'ui_does_not_show_free_cash'
  ],
  invalidVersion: {
    parts: ['goal_wallet', 'contribution_link'],
    reasons: [
      'purpose_restriction_not_enforced',
      'no_approved_payee_rule',
      'no_invoice_verification',
      'no_guardian_control',
      'no_usage_receipts',
      'no_refund_policy',
      'no_misuse_prevention'
    ]
  }
})

export const RESTRICTION_TYPES = Object.freeze([
  'purpose_restriction',
  'payee_restriction',
  'time_restriction',
  'location_restriction',
  'role_restriction',
  'amount_restriction',
  'risk_restriction',
  'consent_restriction',
  'jurisdiction_restriction',
  'device_restriction',
  'proof_restriction'
])

export const OBLIGATION_COMPOSITION_FIELDS = Object.freeze([
  'debtor',
  'creditor',
  'amount',
  'due_date',
  'cadence',
  'priority',
  'grace_period',
  'default_consequence',
  'funding_path'
])

export const CLAIM_COMPOSITION_FIELDS = Object.freeze([
  'claimant',
  'amount',
  'target_funds',
  'conditions',
  'priority',
  'expiry',
  'dispute_status',
  'revocability'
])

export const RISK_EFFECT_TYPES = Object.freeze([
  'introduces',
  'reduces',
  'transfers',
  'concentrates',
  'distributes',
  'hides',
  'reveals'
])

export const OBLIGATION_MECHANISMS = Object.freeze([
  'reminder',
  'auto_allocation',
  'penalty',
  'grace_period',
  'default_handler',
  'trust_score_update',
  'reserve_draw',
  'payout_eligibility'
])

export const TIME_RULE_FIELDS = Object.freeze([
  'due_dates',
  'grace_periods',
  'claim_windows',
  'refund_deadlines',
  'maturity_dates',
  'contribution_windows',
  'payout_schedules',
  'contribution_cycles',
  'settlement_delays',
  'recurring_schedules',
  'income_cycles',
  'expiry_times',
  'cooling_off_periods'
])

export const IDENTITY_LEVELS = Object.freeze([
  'simple_wallet_user',
  'verified_user',
  'verified_business',
  'verified_school',
  'verified_guardian',
  'verified_contractor',
  'verified_agent',
  'verified_merchant'
])

export const UI_ASSET_REQUIREMENTS = Object.freeze({
  escrow_hold: ['protected_money_icon', 'escrow_timeline', 'release_condition_card', 'refund_explanation_animation'],
  proof_gate: ['photo_upload_ui', 'gps_capture_ui', 'proof_confidence_indicator', 'resubmission_ui'],
  susu_circle: ['member_contribution_timeline', 'payout_queue_visual', 'reserve_health_indicator', 'default_warning_card'],
  restricted_wallet: ['lock_badge', 'purpose_label', 'approved_payee_list', 'emergency_unlock_screen']
})

export const ALGORITHM_SIGNATURES = Object.freeze({
  fundability_check: {
    algorithm: 'fundability_check',
    algorithm_id: 'algo.fundability_check.v1',
    type: 'deterministic_calculation',
    version: '1.0.0',
    status: 'active',
    inputs: ['required_payout_amount', 'settled_contributions', 'available_reserve', 'pending_contributions', 'settlement_risk_score'],
    outputs: ['fundability_ratio', 'payout_allowed', 'shortfall_amount'],
    valid_for: ['group_payout', 'reserve_backed_release', 'milestone_payout'],
    not_valid_for: ['investment_return_guarantee', 'insurance_claim_approval'],
    constraints: ['cannot_ignore_unsettled_funds', 'cannot_count_pending_funds_as_settled'],
    requires_human_review_above: ['shortfall_amount_gt_configured_threshold'],
    tests: ['payout_blocked_when_fundability_below_one', 'pending_funds_excluded_from_settled_total'],
    autonomy_ceiling: 'guarded_execution'
  },
  priority_waterfall: {
    algorithm: 'priority_waterfall',
    inputs: ['income_amount', 'priority_rules', 'minimum_thresholds'],
    outputs: ['allocations', 'shortfalls', 'remaining_amount'],
    valid_for: ['salary_split', 'goal_routing'],
    not_valid_for: ['investment_return_guarantee']
  },
  proof_confidence_scoring: {
    algorithm: 'proof_confidence_scoring',
    algorithm_id: 'algo.proof_confidence_scoring.v1',
    type: 'risk_signal',
    version: '1.0.0',
    status: 'active',
    inputs: ['submitted_photo', 'gps_ping', 'timestamp', 'recipient_identity_status'],
    outputs: ['proof_confidence_score', 'likely_valid_photo'],
    valid_for: ['proof_gated_payment', 'milestone_payout'],
    not_valid_for: ['automatic_money_release_without_review'],
    constraints: ['cannot_directly_output_approved_proof'],
    requires_human_review_above: ['release_amount_gt_manual_review_threshold'],
    tests: ['low_confidence_blocks_release', 'manual_review_required_for_high_value_release'],
    autonomy_ceiling: 'supervised_automation'
  },
  risk_score: {
    algorithm: 'risk_score',
    algorithm_id: 'algo.risk_score.v2',
    type: 'risk_signal',
    version: '2.0.1',
    status: 'active',
    inputs: ['amount', 'recipient_trust', 'BTS', 'dispute_history', 'settlement_risk_score'],
    outputs: ['risk_level', 'review_required', 'risk_reasons'],
    valid_for: ['proof_gated_payment', 'group_payout', 'milestone_payout'],
    not_valid_for: ['automatic_money_release_without_guard'],
    constraints: ['cannot_override_hard_guards', 'cannot_replace_consent'],
    requires_human_review_above: ['risk_level_high'],
    tests: ['high_risk_routes_to_review', 'risk_reason_logged'],
    autonomy_ceiling: 'guarded_execution'
  }
})

export const ALGORITHM_BINDING_SIGNATURE_FIELDS = Object.freeze([
  'algorithm_id',
  'type',
  'version',
  'valid_for',
  'inputs',
  'outputs',
  'constraints',
  'requires_human_review_above',
  'tests'
])

export const ALGORITHM_BINDING_USE_CASES = Object.freeze([
  'fundability_checks',
  'risk_scoring',
  'BTS_scoring',
  'reserve_sizing',
  'payout_ordering',
  'proof_confidence_scoring',
  'priority_allocation',
  'shortfall_prediction',
  'fraud_detection',
  'release_mode_selection'
])

export const ALGORITHM_BINDING_CHECKS = Object.freeze([
  'algorithm_approved_for_capability_type',
  'algorithm_version_active',
  'inputs_exist_in_graph',
  'outputs_match_downstream_types',
  'thresholds_configured',
  'fallback_exists_if_data_missing',
  'human_review_exists_where_needed',
  'algorithm_does_not_exceed_autonomy_level',
  'algorithm_result_is_auditable',
  'algorithm_use_disclosed_where_required'
])

export const ALGORITHM_BINDING_OUTPUTS = Object.freeze([
  'algorithm_binding_plan',
  'input_output_mapping',
  'threshold_configuration',
  'fallback_requirements',
  'human_review_requirements',
  'algorithm_audit_events',
  'doctor_warnings'
])

export const COMPOSITION_COMPILER_PIPELINE = Object.freeze([
  'receive_product_physics_manifest',
  'identify_required_capability_type',
  'pull_candidate_components_from_primitive_registry',
  'read_component_signatures',
  'build_draft_composition_graph',
  'validate_state_compatibility',
  'validate_ledger_compatibility',
  'validate_actor_role_compatibility',
  'validate_consent_coverage',
  'validate_failure_completeness',
  'validate_risk_mitigation',
  'validate_ui_truth',
  'detect_compliance_tags',
  'attach_required_guards',
  'attach_required_monitors',
  'attach_required_algorithms',
  'attach_required_assets_and_ui_surfaces',
  'generate_product_composition_manifest',
  'generate_test_cases',
  'generate_simulation_scenarios',
  'send_to_capability_doctor',
  'send_to_governor_if_needed',
  'send_to_kernel_contract_builder',
  'send_to_ui_ux_composer'
])

export const COMPOSITION_NORMAL_FORM_FIELDS = Object.freeze([
  'actors',
  'roles',
  'value_objects',
  'money_states',
  'states',
  'rules',
  'flows',
  'obligations',
  'claims',
  'conditions',
  'triggers',
  'guards',
  'policies',
  'ledger_effects',
  'failure_paths',
  'monitors',
  'ui',
  'ui_bindings',
  'disclosures',
  'audit_events',
  'tests',
  'simulations'
])

export const INVALID_COMPOSITION_EXAMPLES = Object.freeze({
  proof_upload_instant_transfer: {
    parts: ['proof_upload', 'instant_transfer'],
    problems: ['proof_upload_not_verification', 'no_escrow', 'no_release_guard', 'no_refund_path'],
    fix: ['escrow_hold', 'proof_verification', 'conditional_release', 'refund_timer', 'dispute_workflow']
  },
  group_wallet_payout_queue: {
    parts: ['group_wallet', 'payout_queue'],
    problems: ['no_contribution_obligations', 'no_fundability_guard', 'no_default_handler', 'no_member_consent'],
    fix: ['recurring_contribution', 'obligation_tracker', 'default_policy', 'fundability_guard', 'consent_flow']
  },
  school_fee_wallet_cash_withdrawal: {
    parts: ['school_fee_wallet', 'cash_withdrawal'],
    problems: ['purpose_restriction_violated'],
    fix: ['emergency_unlock_policy', 'guardian_approval', 'contributor_disclosure', 'audit_event_or_block']
  },
  reserve_pool_loss_coverage_automatic_claims: {
    parts: ['reserve_pool', 'loss_coverage', 'automatic_claims'],
    problems: ['may_resemble_insurance_like_risk_pooling', 'compliance_escalation_required'],
    fix: ['route_to_compliance_governor', 'restrict_redesign_or_require_approved_structure']
  },
  salary_split_percentage_only: {
    parts: ['salary_split', 'percentage_only_allocation'],
    problems: ['no_obligation_priority', 'no_shortfall_logic', 'no_protected_fund_behavior'],
    fix: ['priority_waterfall', 'obligation_tracker', 'shortfall_detector', 'user_override_policy']
  }
})

export const COMPOSITION_ERROR_CATALOG = Object.freeze({
  missing_state_transition: {
    error: 'ConditionalRelease requires approved_proof but graph only produces submitted_proof.',
    repair: ['insert_proof_verification_primitive']
  },
  missing_refund_path: {
    error: 'Escrowed funds have a release path but no expiry or refund path.',
    repair: ['add_refund_timer', 'add_refund_ledger_mapping']
  },
  consent_incomplete: {
    error: 'Member is exposed to post-payout obligation without disclosed consent.',
    repair: ['update_member_consent_flow', 'require_acceptance_before_joining']
  },
  ledger_imbalance: {
    error: 'Platform fee deducted without destination account.',
    repair: ['add_fee_ledger_account', 'add_fee_disclosure']
  },
  ui_truth_violation: {
    error: 'Escrowed funds are displayed as completed payment.',
    repair: ['use_protected_and_waiting_for_proof_state']
  },
  compliance_escalation_required: {
    error: 'Reserve pool plus loss coverage may create insurance-like behavior.',
    repair: ['route_to_governor', 'restrict_or_redesign']
  }
})

export const SIMULATION_ENGINE_SCENARIOS = Object.freeze([
  'late_payments',
  'defaults',
  'payment_reversals',
  'proof_failures',
  'reserve_depletion',
  'member_exit',
  'identity_failure',
  'fraud_attempts',
  'timing_conflicts',
  'shortfalls',
  'disputes',
  'user_overrides'
])

export const SIMULATION_IMPORTANT_PRODUCTS = Object.freeze([
  'susu_circles',
  'reserve_backed_products',
  'credit_like_products',
  'liquidity_support',
  'escrow_products',
  'contractor_payments',
  'family_pooled_wallets',
  'business_procurement_flows'
])

export const CAPABILITY_DOCTOR_COMPOSITION_REPAIR_PRESCRIPTION = Object.freeze({
  invalidComposition: ['escrow_hold', 'photo_upload', 'release'],
  diagnosis: [
    'photo_upload_produces_submitted_proof',
    'release_requires_approved_proof',
    'missing_proof_verification',
    'missing_refund_timer',
    'missing_dispute_workflow',
    'missing_recipient_consent'
  ],
  repairs: [
    'insert_proof_verification',
    'add_refund_timer',
    'add_dispute_workflow',
    'add_consent_capture',
    'update_ui_labels',
    'run_release_blocking_tests'
  ]
})

export const OUTCOME_LEARNING_COMPOSITION_RULES = Object.freeze([
  {
    discovery: 'gps_photo_proof_reduces_contractor_disputes',
    update: 'contractor_payments_above_500_include_gps_and_photo_proof_by_default'
  },
  {
    discovery: 'school_fee_setup_abandonment_from_complex_contributor_rules',
    update: 'simplify_user_facing_flow_preserve_backend_constraints'
  },
  {
    discovery: 'low_bts_early_payout_recipients_default_more_often',
    update: 'low_bts_members_require_later_payout_position_or_extra_deposit'
  }
])

export const FORMLESS_BANKING_INTERNAL_FIELDS = Object.freeze([
  'actors',
  'states',
  'flows',
  'claims',
  'obligations',
  'guards',
  'policies',
  'primitives',
  'algorithms',
  'ui_bindings',
  'monitors',
  'compliance_tags'
])

export const CANONICAL_AURA_COMPOSITION_PIPELINE = Object.freeze([
  'user_describes_intent',
  'product_intent_interpreter_extracts_goal',
  'financial_physics_engine_identifies_reality',
  'apsl_drafts_product_specification',
  'composition_algebra_assembles_valid_graph',
  'capability_type_system_classifies_result',
  'capability_doctor_diagnoses_completeness_and_safety',
  'simulation_engine_stress_tests_behavior',
  'compliance_governor_reviews_regulated_or_risky_categories',
  'kernel_contract_builder_creates_deterministic_execution_contract',
  'ui_ux_composer_builds_truthful_experience',
  'asset_vault_supplies_visual_components',
  'algorithm_vault_supplies_approved_formulas_or_models',
  'runtime_execution_engine_activates_product',
  'watchtower_monitors_live_behavior',
  'outcome_learning_improves_future_compositions'
])

export const FORMAL_COMPONENT_TRANSFORMATION_FIELDS = Object.freeze([
  'inputs',
  'outputs',
  'input_financial_state',
  'output_financial_state',
  'actors',
  'permissions',
  'ledger_effects',
  'claims',
  'obligations',
  'risk_changes',
  'guards',
  'policies',
  'failure_modes',
  'events',
  'ui',
  'ui_bindings',
  'monitors',
  'tests',
  'compliance_tags',
  'version'
])

export const FORMAL_COMPOSITION_VALIDITY_RULES = Object.freeze([
  'output_c1_matches_input_c2',
  'ledger_c1_plus_c2_balances',
  'actors_c1_plus_c2_are_valid',
  'claims_c1_plus_c2_do_not_conflict',
  'obligations_c1_plus_c2_are_consented',
  'risks_c1_plus_c2_are_mitigated',
  'failures_c1_plus_c2_are_handled',
  'ui_c1_plus_c2_is_truthful',
  'compliance_c1_plus_c2_is_cleared_or_escalated'
])

export const COMPOSITION_ALGEBRA_INTERNAL_MODULES = Object.freeze([
  'component_signature_registry',
  'type_compatibility_checker',
  'state_transition_validator',
  'ledger_compatibility_validator',
  'actor_role_binding_validator',
  'consent_coverage_checker',
  'risk_composition_engine',
  'guard_insertion_engine',
  'failure_path_completeness_checker',
  'compliance_tagging_engine',
  'ui_binding_validator',
  'monitor_attachment_engine',
  'algorithm_binding_validator',
  'version_compatibility_engine',
  'composition_graph_builder',
  'composition_manifest_generator',
  'test_generator',
  'simulation_scenario_generator',
  'capability_doctor_interface',
  'kernel_contract_exporter'
])

export const COMPOSITION_ALGEBRA_GOVERNED_DOMAINS = Object.freeze([
  'states',
  'actors',
  'roles',
  'money_flows',
  'ledger_effects',
  'claims',
  'obligations',
  'permissions',
  'guards',
  'conditions',
  'risks',
  'consent',
  'compliance',
  'failure_paths',
  'ui_truth',
  'runtime_monitoring',
  'versioning',
  'simulation',
  'testing'
])

export const COMPOSITION_DECISION_TYPES = Object.freeze([
  'valid',
  'invalid',
  'incomplete',
  'needs_guard',
  'needs_consent',
  'needs_simulation',
  'needs_governor_review',
  'supervised_mode_only',
  'safe_to_release'
])

export const AURA_ARCHITECTURE_INSIGHT_STACK = Object.freeze([
  'component_library_provides_parts',
  'composition_algebra_provides_architecture',
  'financial_physics_provides_laws',
  'capability_type_system_provides_classification',
  'capability_doctor_provides_diagnosis_and_repair',
  'kernel_contract_builder_provides_enforcement',
  'governor_provides_safety',
  'ui_composer_provides_human_experience'
])

export const COMPLETENESS_SCORE_FIELDS = Object.freeze([
  'stateCompleteness',
  'ledgerCompleteness',
  'actorRoleCompleteness',
  'consentCompleteness',
  'failureCompleteness',
  'riskMitigationCompleteness',
  'complianceReadiness',
  'uiTruthfulness',
  'runtimeMonitoringCompleteness',
  'explainabilityCompleteness',
  'testCoverage',
  'simulationReadiness'
])

export const MARKETPLACE_COMPONENT_REQUIREMENTS = Object.freeze([
  'signature',
  'input_types',
  'output_types',
  'ledger_effects',
  'risk_effects',
  'failure_modes',
  'required_guards',
  'required_consent',
  'compliance_tags',
  'tests',
  'version',
  'allowed_composition_families',
  'forbidden_composition_families'
])

export const DAILY_ROSCA_DEFAULT_PROTECTED_COMPOSITION = Object.freeze({
  product: 'daily_rosca_default_protected_group',
  userIntent: 'daily_rosca_like_contribution_group_with_default_protection',
  components: [
    'group_wallet',
    'member_registry',
    'daily_contribution',
    'obligation_tracker',
    'rotating_payout_queue',
    'bts_gate',
    'deposit_requirement',
    'tail_lock',
    'reserve_pool',
    'default_handler',
    'consent_flow',
    'runtime_monitor',
    'payout_ui',
    'contribution_reminder_ui'
  ],
  simulationTests: [
    'late_payment',
    'default_after_payout',
    'two_defaults',
    'reserve_depletion'
  ],
  governorChecks: ['pooled_contribution_category', 'jurisdiction_rules'],
  kernelEnforcements: ['ledger', 'states', 'transitions', 'locks', 'releases', 'defaults'],
  uiComposerOutputs: ['group_setup_flow', 'contribution_timeline', 'payout_status', 'warning_screens']
})

export const HIERARCHICAL_COMPOSITION_EXAMPLES = Object.freeze([
  {
    level: 'atomic_layer',
    parts: ['hold', 'expiry', 'audit'],
    signature: 'conditional_hold_signature'
  },
  {
    level: 'mini_primitive_layer',
    parts: ['conditional_hold', 'claim', 'refund_timer'],
    signature: 'escrow_signature'
  },
  {
    level: 'primitive_layer',
    parts: ['escrow', 'proof_gate', 'dispute'],
    signature: 'safesend_signature'
  },
  {
    level: 'capability_layer',
    parts: ['safesend', 'milestone_schedule', 'contractor_profile'],
    signature: 'contractor_milestone_payment_signature'
  },
  {
    level: 'product_layer',
    parts: ['contractor_payment', 'business_procurement', 'vendor_trust_graph'],
    signature: 'business_intent_job_signature'
  }
])

export const AURA_COMPOSITION_PRINCIPLE_GUARDS = Object.freeze({
  hidden_fee_component: {
    principle: 'do_not_hide_fees',
    violation: 'transparency_violation',
    remedy: 'show_fee_disclosure_and_net_amount_before_consent'
  },
  undisclosed_fee: {
    principle: 'do_not_hide_fees',
    violation: 'transparency_violation',
    remedy: 'add_fee_schedule_to_ui_and_manifest'
  },
  locked_money_as_available_balance: {
    principle: 'do_not_make_locked_money_look_available',
    violation: 'ui_truth_violation',
    remedy: 'bind_ui_to_locked_or_escrowed_state'
  },
  member_pays_loss_without_consent: {
    principle: 'do_not_expose_actor_to_risk_without_consent',
    violation: 'consent_and_fairness_violation',
    remedy: 'add_loss_consent_disclosure_or_remove_loss_shift'
  },
  fraudulent_financial_structure: {
    principle: 'do_not_allow_fraudulent_financial_structures',
    violation: 'fraud_structure_violation',
    remedy: 'block_or_route_to_governor_review'
  },
  regulatory_product_without_review: {
    principle: 'do_not_create_regulatory_products_without_review',
    violation: 'governor_review_violation',
    remedy: 'send_to_compliance_governor'
  },
  exploitative_default: {
    principle: 'do_not_allow_exploitative_defaults',
    violation: 'fairness_violation',
    remedy: 'replace_with_grace_period_and_clear_consequence'
  },
  unfundable_promise: {
    principle: 'do_not_create_products_that_are_impossible_to_fund',
    violation: 'fundability_violation',
    remedy: 'add_fundability_guard_or_lower_promise'
  }
})

export const GOVERNOR_REVIEW_LEVELS = Object.freeze([
  'auto_release',
  'policy_review',
  'governor_review',
  'restricted_or_licensed_mode',
  'block'
])

export const VERSION_MIGRATION_QUESTIONS = Object.freeze([
  'changes_state_transitions',
  'changes_output_state',
  'changes_user_rights',
  'changes_release_conditions',
  'changes_refund_behavior',
  'changes_fees',
  'changes_user_obligations',
  'changes_risk_exposure',
  'changes_ui_wording',
  'changes_ledger_behavior',
  'requires_new_simulation',
  'requires_governor_review',
  'requires_reconsent',
  'affects_audit_trails'
])

export const COMPOSITION_FOUNDATION_LAYERS = Object.freeze([
  {
    id: 'component_signature_layer',
    responsibility: 'define_component_requirements_outputs_risks_and_states'
  },
  {
    id: 'type_and_state_compatibility_layer',
    responsibility: 'check_component_connections_and_state_transitions'
  },
  {
    id: 'operator_layer',
    responsibility: 'define_sequence_parallel_split_join_loop_guard_fallback_and_overlays'
  },
  {
    id: 'constraint_and_invariant_layer',
    responsibility: 'enforce_ledger_consent_failure_risk_ownership_and_compliance_laws'
  },
  {
    id: 'compilation_and_manifest_layer',
    responsibility: 'produce_graph_manifest_kernel_contract_ui_binding_simulation_and_monitors'
  }
])

export const COMPONENT_SIGNATURE_SCHEMA_FIELDS = Object.freeze([
  'id',
  'name',
  'level',
  'version',
  'inputStates',
  'outputStates',
  'requiredActors',
  'optionalActors',
  'requiredPermissions',
  'requiredConsents',
  'ledgerEffects',
  'introducedRisks',
  'reducedRisks',
  'requiredMitigations',
  'failureModes',
  'requiredFailureHandlers',
  'compatibleWith',
  'forbiddenWith',
  'requiredGuards',
  'requiredMonitors',
  'complianceTags',
  'uiBindings',
  'testTemplates'
])

export const COMPONENT_SIGNATURE_REGISTRY_ITEM_TYPES = Object.freeze([
  'sub_atom',
  'atom',
  'mini_primitive',
  'primitive',
  'capability',
  'policy',
  'guard',
  'algorithm',
  'ui_component',
  'asset',
  'runtime_monitor',
  'disclosure_template',
  'consent_pattern',
  'recovery_pattern',
  'compliance_pattern'
])

export const COMPONENT_SIGNATURE_REGISTRY_FACT_FIELDS = Object.freeze([
  'what_component_does',
  'what_it_requires',
  'what_it_produces',
  'states_it_can_touch',
  'ledger_effects_it_causes',
  'actors_it_needs',
  'risks_it_introduces',
  'risks_it_mitigates',
  'ui_it_requires',
  'monitors_it_needs',
  'tests_that_prove_safety',
  'compatible_versions'
])

export const COMPONENT_SIGNATURE_REGISTRY_RECORD_FIELDS = Object.freeze([
  'component_id',
  'name',
  'level',
  'version',
  'status',
  'input_ports',
  'output_ports',
  'required_actors',
  'optional_actors',
  'required_permissions',
  'ledger_effects',
  'introduced_risks',
  'reduced_risks',
  'required_guards',
  'required_failure_handlers',
  'required_monitors',
  'ui_requirements',
  'compliance_tags',
  'test_templates'
])

export const COMPONENT_SIGNATURE_SUB_REGISTRIES = Object.freeze([
  { id: 'atom_registry', question: 'which_financial_or_behavioral_atoms_exist' },
  { id: 'primitive_registry', question: 'which_financial_mechanisms_exist' },
  { id: 'capability_registry', question: 'which_complete_financial_behaviors_exist' },
  { id: 'policy_registry', question: 'which_rules_can_constrain_components' },
  { id: 'guard_registry', question: 'which_predicates_can_protect_dangerous_actions' },
  { id: 'algorithm_registry', question: 'which_approved_calculations_can_be_bound' },
  { id: 'ui_component_registry', question: 'which_truthful_surfaces_can_explain_state' },
  { id: 'asset_registry', question: 'which_reusable_visual_or_copy_assets_exist' },
  { id: 'monitor_registry', question: 'which_runtime_watchers_are_available' },
  { id: 'compliance_pattern_registry', question: 'which_review_patterns_apply' },
  { id: 'consent_template_registry', question: 'which_consent_patterns_are_approved' },
  { id: 'failure_recovery_pattern_registry', question: 'which_recovery_paths_close_failures' }
])

export const COMPONENT_SIGNATURE_REGISTRY_INDEXES = Object.freeze([
  'input_money_state',
  'output_money_state',
  'actor_topology',
  'financial_behavior',
  'risk_reduced',
  'risk_introduced',
  'required_guard',
  'compliance_tag',
  'capability_family',
  'ui_state',
  'monitor_requirement',
  'algorithm_requirement',
  'release_mode',
  'jurisdiction_availability',
  'version_compatibility'
])

export const COMPONENT_SIGNATURE_REGISTRY_OUTPUTS = Object.freeze([
  'candidate_components',
  'exact_component_signatures',
  'version_metadata',
  'compatibility_metadata',
  'required_dependencies',
  'known_risks',
  'known_required_guards',
  'known_failure_paths',
  'known_tests',
  'known_ui_requirements'
])

export const COMPONENT_SIGNATURE_REGISTRY_EXAMPLE_QUERY = Object.freeze({
  inputMoneyState: 'available_settled_funds',
  outputMoneyState: 'escrowed_funds',
  riskReduced: 'counterparty_nonperformance_risk',
  expectedCandidates: ['escrow_hold', 'conditional_hold', 'milestone_escrow_hold', 'claimable_transfer_hold']
})

export const ESCROW_HOLD_COMPONENT_SIGNATURE_RECORD = Object.freeze({
  component_id: 'primitive.escrow_hold',
  name: 'Escrow Hold',
  level: 'primitive',
  version: '2.1.0',
  status: 'approved',
  input_ports: [
    { name: 'source_funds', type: 'money_state.available_settled_funds', required: true }
  ],
  output_ports: [
    { name: 'escrowed_funds', type: 'money_state.escrowed_funds' }
  ],
  required_actors: ['payer', 'conditional_recipient'],
  optional_actors: ['verifier', 'human_reviewer'],
  required_permissions: ['payer.can_fund', 'system.can_hold_funds'],
  ledger_effects: [
    { debit: 'payer_available_balance', credit: 'escrow_liability', amount: 'principal_amount' }
  ],
  introduced_risks: ['stale_escrow_risk', 'dispute_risk', 'custody_review_risk'],
  reduced_risks: ['counterparty_nonperformance_risk'],
  required_guards: ['consent_guard', 'fundability_guard', 'identity_guard'],
  required_failure_handlers: ['refund_path', 'dispute_path', 'expiry_path'],
  required_monitors: ['escrow_age_monitor', 'dispute_status_monitor'],
  ui_requirements: ['protected_money_card', 'escrow_status_timeline', 'refund_explanation'],
  compliance_tags: ['payment', 'escrow_like', 'custody_review_candidate'],
  test_templates: [
    'cannot_release_without_condition',
    'refund_after_expiry',
    'ledger_balances_after_release',
    'ledger_balances_after_refund'
  ]
})

export const TYPE_COMPATIBILITY_FAMILIES = Object.freeze([
  'MoneyStateType',
  'ActorRoleType',
  'EvidenceType',
  'ClaimType',
  'ObligationType',
  'ConditionType',
  'PermissionType',
  'LedgerEffectType',
  'RiskType',
  'PolicyType',
  'UIStateType',
  'MonitorType',
  'AlgorithmType',
  'ComplianceTagType'
])

export const TYPE_COMPATIBILITY_EXAMPLES = Object.freeze({
  MoneyStateType: [
    'available_funds',
    'available_settled_funds',
    'pending_funds',
    'settled_funds',
    'locked_funds',
    'escrowed_funds',
    'restricted_funds',
    'claimable_funds',
    'disputed_funds',
    'refunded_funds',
    'released_funds'
  ],
  EvidenceType: [
    'submitted_photo',
    'verified_photo',
    'gps_ping',
    'verified_location',
    'invoice_document',
    'verified_invoice',
    'proof_submitted',
    'verified_claim'
  ],
  ActorRoleType: [
    'sender',
    'recipient',
    'guardian',
    'beneficiary',
    'contributor',
    'school_payee',
    'contractor',
    'verifier',
    'group_member',
    'organizer'
  ]
})

export const TYPE_COMPATIBILITY_DECISIONS = Object.freeze([
  'compatible',
  'compatible_with_adapter',
  'compatible_with_guard',
  'compatible_with_policy',
  'compatible_with_human_review',
  'incompatible',
  'forbidden'
])

export const TYPE_COMPATIBILITY_ADAPTERS = Object.freeze({
  'proof_submitted->verified_claim': {
    decision: 'compatible_with_adapter',
    adapter: 'proof_verification',
    reason: 'submitted_proof_must_be_verified_before_release'
  },
  'submitted_photo->verified_photo': {
    decision: 'compatible_with_adapter',
    adapter: 'photo_verification',
    reason: 'photo_upload_is_evidence_submission_not_approval'
  },
  'gps_ping->verified_location': {
    decision: 'compatible_with_adapter',
    adapter: 'location_verification',
    reason: 'raw_location_signal_must_be_verified'
  },
  'invoice_document->verified_invoice': {
    decision: 'compatible_with_adapter',
    adapter: 'invoice_verification',
    reason: 'document_upload_must_be_checked_before_it_can_satisfy_payment_conditions'
  },
  'pending_funds->settled_funds': {
    decision: 'compatible_with_guard',
    adapter: 'settlement_wait_or_confirmation',
    requiredGuard: 'settlement_guard',
    reason: 'pending_funds_cannot_pay_out_until_settlement_is_confirmed'
  },
  'pending_funds->payout_release': {
    decision: 'compatible_with_guard',
    adapter: 'settlement_wait_or_confirmation',
    requiredGuard: 'settlement_guard',
    reason: 'payout_release_requires_settled_funds'
  },
  'available_funds->restricted_school_fee_funds': {
    decision: 'compatible_with_adapter',
    adapter: 'purpose_restriction_lock',
    requiredPolicy: 'approved_school_payee_only',
    reason: 'available_funds_need_a_purpose_lock_before_school_fee_release'
  },
  'restricted_school_fee_funds->unrestricted_cash_withdrawal': {
    decision: 'forbidden',
    requiredPolicy: 'emergency_unlock_policy',
    requiredConsent: 'restricted_fund_emergency_unlock_consent',
    auditPath: 'purpose_unlock_audit_path',
    reason: 'restricted_school_fee_funds_cannot_become_free_cash_without_override_controls'
  }
})

export const TYPE_COMPATIBILITY_OUTPUT_FIELDS = Object.freeze([
  'from',
  'to',
  'status',
  'reason',
  'required_adapter',
  'severity'
])

export const STATE_TRANSITION_STATE_LAYERS = Object.freeze([
  'capability_state',
  'money_state',
  'claim_state',
  'obligation_state'
])

export const STATE_TRANSITION_RECORD_FIELDS = Object.freeze([
  'transition_id',
  'from_state',
  'to_state',
  'trigger',
  'guards',
  'allowed_actors',
  'ledger_effect',
  'audit_event'
])

export const STATE_TRANSITION_VALIDATOR_CHECKS = Object.freeze([
  'initial_state_exists',
  'terminal_states_exist',
  'every_non_terminal_state_has_allowed_exits',
  'every_failure_state_has_recovery_or_terminal_path',
  'dangerous_transitions_cannot_bypass_required_guards',
  'money_state_never_becomes_ambiguous',
  'claim_and_obligation_state_remain_consistent',
  'loops_cannot_trap_funds_forever',
  'closed_state_cannot_mutate_without_reopening_protocol'
])

export const STATE_TRANSITION_VALIDATOR_OUTPUTS = Object.freeze([
  'validated_state_machine',
  'transition_table',
  'blocking_transition_errors',
  'missing_terminal_paths',
  'required_guards_per_transition',
  'state_invariants'
])

export const PROOF_APPROVED_TO_RELEASE_READY_TRANSITION = Object.freeze({
  transition_id: 'proof_approved_to_release_ready',
  from_state: {
    capability: 'under_review',
    money: 'escrowed_funds',
    proof: 'under_review',
    claim: 'conditional_claim_pending'
  },
  to_state: {
    capability: 'approved',
    money: 'approved_for_release',
    proof: 'approved',
    claim: 'matured_claim'
  },
  trigger: {
    event: 'proof_review.approved'
  },
  guards: ['proof_confidence_guard', 'no_active_dispute_guard', 'recipient_identity_guard'],
  allowed_actors: ['system', 'human_reviewer'],
  ledger_effect: ['none_until_release'],
  audit_event: ['proof_approved']
})

export const PROOF_GATED_PAYMENT_STATE_MACHINE = Object.freeze({
  machine_id: 'proof_gated_payment_state_machine',
  initialState: 'draft',
  terminalStates: ['released', 'refunded', 'closed'],
  failureStates: ['disputed', 'proof_rejected', 'expired'],
  states: [
    'draft',
    'funded',
    'escrowed',
    'proof_pending',
    'proof_submitted',
    'under_review',
    'approved',
    'released',
    'refunded',
    'disputed',
    'closed',
    'proof_rejected',
    'expired'
  ],
  requiredReleaseGuards: ['proof_confidence_guard', 'no_active_dispute_guard', 'recipient_identity_guard'],
  transitions: [
    {
      transition_id: 'draft_to_funded',
      from_state: 'draft',
      to_state: 'funded',
      trigger: { event: 'payer.funds' },
      guards: ['fundability_guard', 'payer_identity_guard'],
      allowed_actors: ['payer'],
      ledger_effect: ['reserve_authorization'],
      audit_event: ['payment_funded']
    },
    {
      transition_id: 'funded_to_escrowed',
      from_state: 'funded',
      to_state: 'escrowed',
      trigger: { event: 'escrow.hold_created' },
      guards: ['consent_guard', 'fundability_guard'],
      allowed_actors: ['system'],
      ledger_effect: ['escrow_hold'],
      audit_event: ['escrow_created']
    },
    {
      transition_id: 'escrowed_to_proof_pending',
      from_state: 'escrowed',
      to_state: 'proof_pending',
      trigger: { event: 'proof_window.opened' },
      guards: ['no_active_dispute_guard'],
      allowed_actors: ['system'],
      ledger_effect: ['none_until_release'],
      audit_event: ['proof_window_opened']
    },
    {
      transition_id: 'proof_pending_to_proof_submitted',
      from_state: 'proof_pending',
      to_state: 'proof_submitted',
      trigger: { event: 'recipient.uploads_proof' },
      guards: ['recipient_identity_guard'],
      allowed_actors: ['recipient'],
      ledger_effect: ['none_until_release'],
      audit_event: ['proof_submitted']
    },
    {
      transition_id: 'proof_submitted_to_under_review',
      from_state: 'proof_submitted',
      to_state: 'under_review',
      trigger: { event: 'review.started' },
      guards: ['proof_format_guard'],
      allowed_actors: ['system', 'human_reviewer'],
      ledger_effect: ['none_until_release'],
      audit_event: ['proof_review_started']
    },
    PROOF_APPROVED_TO_RELEASE_READY_TRANSITION,
    {
      transition_id: 'approved_to_released',
      from_state: 'approved',
      to_state: 'released',
      trigger: { event: 'release.executed' },
      guards: ['proof_confidence_guard', 'no_active_dispute_guard', 'recipient_identity_guard'],
      allowed_actors: ['system'],
      ledger_effect: ['escrow_release'],
      audit_event: ['funds_released']
    },
    {
      transition_id: 'proof_rejected_to_proof_pending',
      from_state: 'proof_rejected',
      to_state: 'proof_pending',
      trigger: { event: 'resubmission.window_opened' },
      guards: ['resubmission_limit_guard'],
      allowed_actors: ['system', 'human_reviewer'],
      ledger_effect: ['none_until_release'],
      audit_event: ['proof_resubmission_opened']
    },
    {
      transition_id: 'disputed_to_refunded',
      from_state: 'disputed',
      to_state: 'refunded',
      trigger: { event: 'dispute.resolved_for_payer' },
      guards: ['dispute_resolution_guard'],
      allowed_actors: ['human_reviewer'],
      ledger_effect: ['escrow_refund'],
      audit_event: ['dispute_refund']
    },
    {
      transition_id: 'expired_to_refunded',
      from_state: 'expired',
      to_state: 'refunded',
      trigger: { event: 'refund_timer.expired' },
      guards: ['refund_timer_guard'],
      allowed_actors: ['system'],
      ledger_effect: ['escrow_refund'],
      audit_event: ['escrow_refunded']
    },
    {
      transition_id: 'released_to_closed',
      from_state: 'released',
      to_state: 'closed',
      trigger: { event: 'settlement.closed' },
      guards: ['ledger_balanced_guard'],
      allowed_actors: ['system'],
      ledger_effect: ['close_contract'],
      audit_event: ['contract_closed']
    },
    {
      transition_id: 'refunded_to_closed',
      from_state: 'refunded',
      to_state: 'closed',
      trigger: { event: 'refund.closed' },
      guards: ['ledger_balanced_guard'],
      allowed_actors: ['system'],
      ledger_effect: ['close_contract'],
      audit_event: ['contract_closed']
    }
  ]
})

export const LEDGER_COMPATIBILITY_FORBIDDEN_PATTERNS = Object.freeze([
  'credit_recipient_without_debiting_source',
  'debit_user_without_crediting_destination',
  'release_escrow_without_clearing_escrow_liability',
  'deduct_fee_without_fee_recipient',
  'reserve_draw_without_reserve_account',
  'refund_without_source'
])

export const LEDGER_COMPATIBILITY_CHECKS = Object.freeze([
  'debit_credit_balance',
  'correct_account_ownership',
  'correct_asset_currency',
  'pending_vs_settled_money_treatment',
  'hold_release_refund_mapping',
  'fee_destination_defined',
  'reserve_accounting_defined',
  'reversal_compensation_entries_defined',
  'no_double_credit',
  'no_double_debit',
  'no_phantom_balance',
  'no_unclosed_liability',
  'no_unaccounted_claim'
])

export const LEDGER_FUND_STATES = Object.freeze([
  'available',
  'pending',
  'held',
  'escrowed',
  'restricted',
  'reserved',
  'released',
  'refunded',
  'disputed',
  'written_off'
])

export const LEDGER_COMPATIBILITY_OUTPUTS = Object.freeze([
  'ledger_plan',
  'journal_templates',
  'ledger_invariants',
  'blocking_ledger_errors',
  'reversal_compensation_requirements',
  'fee_accounting_requirements',
  'reserve_accounting_requirements'
])

export const LEDGER_FATAL_DIAGNOSTIC_EXAMPLE = Object.freeze({
  finding: {
    category: 'ledger',
    severity: 'fatal',
    message: 'platform_fee_deducted_from_recipient_payout_but_no_fee_destination_account_is_defined',
    repair: ['add_platform_fee_revenue_account', 'add_fee_disclosure', 'add_fee_ledger_template']
  }
})

export const LEDGER_TEMPLATES = Object.freeze({
  escrow_hold: {
    ledger_template: 'escrow_hold',
    entries: [
      { account: 'payer_available_balance', direction: 'debit', amount: 'principal_amount' },
      { account: 'escrow_liability', direction: 'credit', amount: 'principal_amount' }
    ]
  },
  escrow_release: {
    ledger_template: 'escrow_release',
    entries: [
      { account: 'escrow_liability', direction: 'debit', amount: 'principal_amount' },
      { account: 'recipient_available_balance', direction: 'credit', amount: 'principal_amount' }
    ]
  },
  escrow_refund: {
    ledger_template: 'escrow_refund',
    entries: [
      { account: 'escrow_liability', direction: 'debit', amount: 'principal_amount' },
      { account: 'payer_available_balance', direction: 'credit', amount: 'principal_amount' }
    ]
  }
})

export const COMPOSITION_EDGE_SCHEMA_FIELDS = Object.freeze([
  'fromComponent',
  'fromPort',
  'toComponent',
  'toPort',
  'operator'
])

export const PRODUCT_COMPOSITION_GRAPH_SCHEMA_FIELDS = Object.freeze([
  'productId',
  'components',
  'edges',
  'actors',
  'states',
  'guards',
  'policies',
  'flows',
  'failurePaths',
  'monitors',
  'uiBindings',
  'algorithms',
  'invariants',
  'complianceTags',
  'requiredTests',
  'releaseMode'
])

export const COMPOSITION_GRAPH_BUILDER_INPUTS = Object.freeze([
  'product_physics_manifest',
  'component_signature_registry',
  'capability_type_requirements',
  'risk_requirements',
  'user_admin_constraints',
  'jurisdiction_context',
  'tenant_configuration',
  'available_component_versions'
])

export const COMPOSITION_GRAPH_BUILDER_CANDIDATE_TYPES = Object.freeze([
  'simple_escrow',
  'milestone_escrow',
  'photo_proof_safesend',
  'gps_photo_proof_safesend',
  'third_party_verified_milestone_payment',
  'deposit_final_release_flow'
])

export const COMPOSITION_GRAPH_BUILDER_RANKING_SIGNALS = Object.freeze([
  'safety',
  'friction',
  'cost',
  'compliance_burden',
  'user_trust',
  'transaction_amount',
  'BTS',
  'context'
])

export const COMPOSITION_GRAPH_BUILDER_OUTPUTS = Object.freeze([
  'draft_composition_graph',
  'candidate_alternatives',
  'required_missing_information',
  'initial_dependency_list',
  'initial_type_risk_assumptions'
])

export const COMPOSITION_GRAPH_REQUIRED_SECTIONS = Object.freeze([
  'components',
  'connections',
  'states',
  'actors',
  'guards',
  'policies',
  'flows',
  'failurePaths',
  'runtimeMonitors',
  'uiBindings',
  'algorithms',
  'complianceTags'
])

export const COMPOSITION_GRAPH_VALIDATION_CHECKS = Object.freeze([
  'every_money_path_balances',
  'every_failure_path_terminates',
  'dangerous_actions_guarded',
  'required_roles_present',
  'required_consents_captured',
  'required_monitors_attached',
  'ui_represents_every_state'
])

export const PRODUCT_COMPOSITION_MANIFEST_FIELDS = Object.freeze([
  'product_id',
  'composition_version',
  'capability_type',
  'release_mode',
  'components',
  'connections',
  'actors',
  'states',
  'guards',
  'ledger_templates',
  'monitors',
  'ui_bindings',
  'algorithms',
  'compliance_tags',
  'failure_paths',
  'required_tests'
])

export const COMPOSITION_MANIFEST_DOWNSTREAM_CONSUMERS = Object.freeze([
  'capability_doctor',
  'simulation_engine',
  'test_generator',
  'kernel_contract_exporter',
  'ui_ux_composer',
  'runtime_watchtower',
  'audit_ledger',
  'versioning_system'
])

export const COMPOSITION_MANIFEST_GENERATOR_OUTPUTS = Object.freeze([
  'product_composition_manifest',
  'composition_lockfile',
  'dependency_list',
  'audit_ready_explanation',
  'kernel_export_package_input',
  'doctor_scan_input'
])

export const TEST_GENERATOR_CATEGORIES = Object.freeze([
  'type_compatibility_tests',
  'state_transition_tests',
  'ledger_balance_tests',
  'actor_permission_tests',
  'consent_coverage_tests',
  'guard_enforcement_tests',
  'failure_path_tests',
  'recovery_compensation_tests',
  'ui_truth_tests',
  'monitor_trigger_tests',
  'algorithm_binding_tests',
  'version_migration_tests',
  'compliance_routing_tests'
])

export const TEST_GENERATOR_OUTPUTS = Object.freeze([
  'test_suite_specification',
  'unit_test_templates',
  'integration_test_templates',
  'ledger_test_templates',
  'state_machine_test_templates',
  'ui_truth_test_cases',
  'monitor_trigger_test_cases',
  'migration_test_cases'
])

export const SAFESEND_GENERATED_TEST_EXAMPLES = Object.freeze([
  {
    name: 'cannot_release_before_proof',
    setup: { money_state: 'escrowed_funds', proof_state: 'proof_pending' },
    action: { actor: 'recipient', command: 'claim_funds' },
    expected: { result: 'blocked', reason: 'proof_approval_guard_failed' }
  },
  {
    name: 'release_after_proof_approval',
    setup: { money_state: 'escrowed_funds', proof_state: 'approved', dispute_state: 'none' },
    action: { command: 'release_funds' },
    expected: { money_state: 'released_funds', ledger_balanced: true }
  },
  {
    name: 'refund_after_deadline',
    setup: { money_state: 'escrowed_funds', proof_state: 'missing', deadline: 'expired' },
    action: { command: 'process_expiry' },
    expected: { money_state: 'refunded_funds', ledger_balanced: true }
  }
])

export const SUSU_GENERATED_TEST_EXAMPLES = Object.freeze([
  'all_members_contribute_to_payout_release',
  'one_member_misses_contribution_to_grace_default_path',
  'reserve_insufficient_to_payout_pause',
  'member_defaults_after_payout_to_post_payout_default_branch',
  'organizer_changes_payout_order_without_consent_to_blocked'
])

export const CAPABILITY_DOCTOR_INTERFACE_INPUTS = Object.freeze([
  'product_physics_manifest',
  'product_composition_manifest',
  'composition_graph',
  'type_compatibility_results',
  'state_validation_results',
  'ledger_validation_results',
  'consent_coverage_results',
  'risk_manifest',
  'compliance_tags',
  'ui_binding_results',
  'monitor_plan',
  'algorithm_bindings',
  'version_lockfile',
  'generated_tests',
  'simulation_scenarios',
  'simulation_results',
  'open_findings',
  'repair_candidates'
])

export const CAPABILITY_DOCTOR_REPORT_FIELDS = Object.freeze([
  'capability_id',
  'health_score',
  'status',
  'findings',
  'release_recommendation'
])

export const CAPABILITY_DOCTOR_FINDING_ROUTES = Object.freeze({
  failure_path: 'composition_graph_builder',
  manifest: 'manifest_generator',
  ui_truth: 'ui_composer',
  missing_guard: 'guard_insertion_engine',
  monitor_gap: 'monitor_attachment_engine',
  compliance: 'governor',
  kernel_rule: 'kernel_exporter'
})

export const CAPABILITY_DOCTOR_INTERFACE_OUTPUTS = Object.freeze([
  'doctor_scan_package',
  'doctor_report',
  'repair_plan',
  'release_recommendation',
  'block_pause_approve_status',
  'required_revalidation_actions'
])

export const SAFESEND_DOCTOR_REPORT_EXAMPLE = Object.freeze({
  doctor_report: {
    capability_id: 'aura.safesend.proof_gated_payment',
    health_score: 88,
    status: 'restricted_release'
  },
  findings: [
    {
      severity: 'serious',
      category: 'failure_path',
      message: 'proof_rejection_path_lacks_final_resolution_after_repeated_rejection',
      repair: ['add_max_resubmission_count', 'add_final_refund_or_dispute_path']
    },
    {
      severity: 'warning',
      category: 'ui_truth',
      message: 'escrowed_funds_label_may_imply_payment_is_complete',
      repair: ['change_label_to_protected_and_waiting_for_proof']
    }
  ],
  release_recommendation: {
    mode: 'low_limit_live',
    required_repairs: ['failure_path_fix']
  }
})

export const KERNEL_CONTRACT_BUNDLE_TYPES = Object.freeze([
  'state_machine_contract',
  'ledger_contract',
  'permission_contract',
  'guard_contract',
  'invariant_contract',
  'event_contract',
  'failure_recovery_contract',
  'audit_contract',
  'monitor_hook_contract',
  'ui_state_contract',
  'migration_contract'
])

export const KERNEL_ENFORCED_SURFACES = Object.freeze([
  'state_transitions',
  'ledger_entries',
  'permissions',
  'guards',
  'invariants',
  'failure_paths',
  'audit_events'
])

export const SAFESEND_RELEASE_KERNEL_COMMAND = Object.freeze({
  command: 'release_escrowed_funds',
  allowed_from: {
    money_state: 'escrowed_funds',
    proof_state: 'approved',
    dispute_state: 'none'
  },
  required_guards: [
    'recipient_identity_verified',
    'proof_approved',
    'no_active_dispute',
    'deadline_not_expired',
    'compliance_clear'
  ],
  ledger_template: [
    { debit: 'escrow_liability' },
    { credit: 'recipient_available_balance' }
  ],
  new_state: {
    money_state: 'released_funds',
    claim_state: 'satisfied',
    capability_state: 'closed'
  },
  audit_events: ['release_guard_checked', 'escrow_released', 'claim_satisfied'],
  on_guard_failure: {
    block_transition: true,
    emit_event: 'release_blocked',
    reason_code: 'guard_failure',
    expose_to_ui: true
  }
})

export const KERNEL_GUARD_FAILURE_POLICY = Object.freeze({
  block_transition: true,
  emit_event: 'release_blocked',
  reason_code: 'guard_failure',
  expose_to_ui: true
})

export const KERNEL_INVARIANTS = Object.freeze([
  'no_release_from_escrow_without_approved_condition',
  'no_payout_above_fundability',
  'no_unrestricted_withdrawal_from_restricted_funds',
  'no_ledger_imbalance',
  'no_actor_action_without_permission',
  'no_state_transition_outside_state_machine',
  'no_reserve_use_without_reserve_policy',
  'no_rule_change_after_consent_without_reconsent'
])

export const KERNEL_CONTRACT_EXPORTER_OUTPUTS = Object.freeze([
  'kernel_execution_contract',
  'state_machine_definitions',
  'ledger_templates',
  'guard_predicates',
  'permission_matrix',
  'invariant_set',
  'event_schemas',
  'audit_requirements',
  'runtime_monitor_hooks',
  'migration_hooks'
])

export const CONTRACTOR_PHOTO_PROOF_AURA_FLOW = Object.freeze([
  {
    module: 'financial_physics_engine',
    output: ['conditional_payment', 'counterparty_performance_risk', 'held_money', 'conditional_claim', 'proof_required', 'refund_and_dispute_paths_required']
  },
  {
    module: 'component_signature_registry',
    output: ['escrow_hold', 'photo_proof', 'gps_verification', 'proof_gate', 'conditional_release', 'refund_timer', 'dispute_workflow', 'consent_capture']
  },
  { module: 'composition_graph_builder', output: ['builds_draft_graph'] },
  { module: 'type_compatibility_checker', output: ['photo_upload_alone_insufficient', 'insert_proof_verification'] },
  { module: 'state_transition_validator', output: ['draft_to_funded_to_escrowed_to_proof_pending_to_approved_rejected_to_released_refunded_disputed'] },
  { module: 'ledger_validator', output: ['escrow_hold_release_refund_entries_balance'] },
  { module: 'actor_role_validator', output: ['sender', 'contractor', 'optional_verifier'] },
  { module: 'consent_checker', output: ['sender_escrow_consent', 'contractor_conditional_access_consent'] },
  { module: 'risk_engine', output: ['proof_fraud', 'dispute_risk', 'custody_review_candidate'] },
  { module: 'guard_insertion_engine', output: ['proof_approval_guard', 'no_active_dispute_guard', 'identity_guard'] },
  { module: 'failure_checker', output: ['proof_rejection', 'resubmission', 'refund', 'dispute', 'expiry'] },
  { module: 'compliance_tagging_engine', output: ['payment', 'escrow_like', 'custody_review_candidate'] },
  { module: 'ui_binding_validator', output: ['protected_and_waiting_for_proof_not_paid'] },
  { module: 'monitor_attachment_engine', output: ['proof_deadline_monitor', 'escrow_age_monitor', 'dispute_monitor'] },
  { module: 'algorithm_binding_validator', output: ['proof_confidence_scoring_validated', 'human_review_fallback'] },
  { module: 'version_compatibility_engine', output: ['component_versions_locked'] },
  { module: 'composition_manifest_generator', output: ['final_manifest'] },
  { module: 'test_generator', output: ['release_refund_dispute_ledger_tests'] },
  { module: 'simulation_scenario_generator', output: ['proof_failure', 'gps_mismatch', 'stale_escrow', 'dispute_scenarios'] },
  { module: 'capability_doctor_interface', output: ['health_diagnosis_package'] },
  { module: 'kernel_contract_exporter', output: ['deterministic_execution_contract'] }
])

export const AURA_COMPOSITION_FINAL_DOCTRINE = Object.freeze([
  'no_component_without_a_signature',
  'no_connection_without_type_compatibility',
  'no_money_movement_without_ledger_validation',
  'no_role_without_binding',
  'no_exposure_without_consent',
  'no_risk_without_mitigation',
  'no_dangerous_action_without_guard',
  'no_failure_without_recovery',
  'no_regulated_pattern_without_tagging',
  'no_state_without_truthful_ui',
  'no_long_lived_product_without_monitors',
  'no_algorithm_without_approval',
  'no_version_change_without_compatibility',
  'no_graph_without_manifest',
  'no_manifest_without_tests',
  'no_high_risk_product_without_simulation',
  'no_release_without_doctor_review',
  'no_execution_without_kernel_contract'
])

export const AURA_CAPABILITY_COMPILER_PROMISE = Object.freeze({
  user_request: 'send_1000_to_contractor_after_photo_at_job_site',
  user_truth: [
    'your_money_is_protected',
    'contractor_cannot_withdraw_until_proof_is_approved',
    'money_returns_if_proof_is_not_approved_before_deadline'
  ],
  internal_result: 'complete_governed_tested_executable_financial_capability'
})

export const INTERLOCK_COMPATIBILITY_CHECKS = Object.freeze([
  'state_compatibility',
  'ledger_compatibility',
  'actor_compatibility',
  'ownership_compatibility',
  'risk_compatibility',
  'consent_compatibility',
  'time_compatibility',
  'jurisdiction_compatibility',
  'failure_compatibility',
  'ui_compatibility',
  'runtime_compatibility',
  'explainability'
])

export const COMPOSITION_CREATION_OUTCOMES = Object.freeze([
  'can_be_created',
  'cannot_be_created',
  'needs_missing_pieces',
  'must_be_simulated',
  'must_go_to_governor',
  'supervised_release_only',
  'safe_for_automated_release'
])

export const AURA_CREATION_ENGINE_PIPELINE = Object.freeze([
  'user_intent',
  'financial_meaning',
  'safe_composition',
  'simulation',
  'governance',
  'kernel_enforcement',
  'beautiful_user_experience',
  'runtime_monitoring'
])

export const COMPOSITION_ALGEBRA_ASSEMBLY_EQUATION = Object.freeze({
  inputs: ['atoms', 'mini_primitives', 'primitives', 'policies', 'algorithms', 'ui', 'monitors'],
  output: 'safe_typed_governed_executable_financial_capabilities',
  condition: 'all_required_conditions_are_satisfied'
})

export const COMPOSITION_ALGEBRA_SAFE_ASSEMBLY_PROMISE = Object.freeze({
  definition: 'aura_law_of_safe_assembly',
  tellsAura: [
    'what_can_combine',
    'what_cannot_combine',
    'what_must_be_added_before_two_things_can_combine',
    'what_risk_is_created_by_the_combination',
    'what_new_capability_emerges',
    'what_must_be_monitored_after_the_combination_goes_live'
  ]
})

export const DANGEROUS_DYNAMIC_COMPOSITION_FAILURES = Object.freeze([
  'unfundable_products',
  'unbalanced_ledgers',
  'missing_refund_paths',
  'unclear_ownership',
  'unconsented_obligations',
  'unregulated_lending_like_tools',
  'insurance_like_risk_pools',
  'broken_group_savings_flows',
  'misleading_ui',
  'double_spend_paths',
  'unmonitored_risk'
])

export const FINANCIAL_INTERLOCK_TYPES = Object.freeze([
  'state_compatibility',
  'ledger_compatibility',
  'actor_compatibility',
  'permission_compatibility',
  'ownership_compatibility',
  'claim_compatibility',
  'obligation_compatibility',
  'risk_compatibility',
  'consent_compatibility',
  'time_compatibility',
  'verification_compatibility',
  'jurisdiction_compatibility',
  'ui_truth_compatibility',
  'runtime_monitor_compatibility',
  'version_compatibility'
])

export const AURA_FOUNDATION_BOUNDARIES = Object.freeze({
  financialPhysicsEngine: 'laws_of_money',
  compositionAlgebra: 'laws_of_combining_money_components',
  capabilityTypeSystem: 'names_and_contracts_the_resulting_capability',
  capabilityDoctor: 'diagnoses_whether_the_final_capability_is_healthy'
})

export const ESCROW_HOLD_FORMAL_SIGNATURE = Object.freeze({
  component_id: 'primitive.escrow_hold',
  component_level: 'primitive',
  version: '1.0.0',
  requires: {
    money_state: ['available_funds'],
    actors: ['payer', 'potential_recipient'],
    permissions: ['payer_can_fund'],
    consent: ['payer_understands_funds_are_held', 'recipient_understands_access_is_conditional']
  },
  produces: {
    money_state: ['escrowed_funds'],
    claim: ['recipient_conditional_claim'],
    ledger_effects: ['debit_payer_available_balance', 'credit_escrow_liability']
  },
  compatible_with: ['proof_gate', 'conditional_release', 'refund_timer', 'dispute_workflow', 'manual_review'],
  forbidden_with: ['instant_unconditional_release_without_guard', 'duplicate_claim_release'],
  failure_modes: ['funding_failed', 'escrow_expired', 'dispute_opened', 'recipient_unverified'],
  required_monitors: ['escrow_age_monitor', 'claim_status_monitor', 'dispute_status_monitor'],
  ui_requirements: ['protected_money_card', 'escrow_status_timeline', 'refund_explanation']
})

export function evaluateComposition(parts) {
  const set = new Set(parts)

  if (hasAll(set, ['goal_wallet', 'school_fee_restriction'])) {
    return {
      decision: 'valid',
      emergentProduct: 'restricted_school_fee_wallet',
      reason: 'Goal funds are purpose-bound by an education restriction.'
    }
  }

  if (hasAll(set, ['school_fee_restriction', 'unrestricted_cash_withdrawal']) && !set.has('approved_override_path')) {
    return {
      decision: 'invalid',
      emergentProduct: null,
      reason: 'Restricted school fee funds cannot route to unrestricted withdrawal without an approved override.'
    }
  }

  if (hasAll(set, ['group_wallet', 'rotating_payout'])) {
    const required = [
      'contribution_obligation',
      'payout_order_rule',
      'default_policy',
      'consent_capture',
      'fundability_check',
      'dispute_rule'
    ]
    const missing = required.filter((part) => !set.has(part))
    if (missing.length) {
      return {
        decision: 'valid_if_requirements_added',
        emergentProduct: 'rotating_contribution_group',
        missing,
        reason: 'Group payout composition needs obligations, defaults, consent, fundability, and dispute handling.'
      }
    }
  }

  if (hasAll(set, ['escrow', 'gps_verification', 'photo_proof', 'refund_timer'])) {
    return {
      decision: 'valid',
      emergentProduct: 'proof_gated_safesend',
      reason: 'Escrow, evidence checks, and refund timing produce a condition-gated payment.'
    }
  }

  if (hasAll(set, ['instant_irreversible_release', 'unverified_photo_proof'])) {
    return {
      decision: 'invalid',
      emergentProduct: null,
      reason: 'Money would release before the condition is satisfied.'
    }
  }

  if (hasAll(set, ['pooled_risk', 'loss_coverage'])) {
    return {
      decision: 'governor_review_required',
      emergentProduct: 'insurance_like_risk_pool',
      reason: 'Pooled loss coverage can create insurance-like behavior.'
    }
  }

  if (hasAll(set, ['credit_advance', 'repayment_obligation'])) {
    return {
      decision: 'governor_review_required',
      emergentProduct: 'credit_like_product',
      reason: 'Advance plus repayment creates credit-like behavior.'
    }
  }

  const missing = []
  if (parts.some((part) => part.includes('release')) && !set.has('consent_capture')) missing.push('consent_capture')
  if (parts.some((part) => part.includes('proof')) && !set.has('dispute_workflow')) missing.push('dispute_workflow')
  if (parts.some((part) => part.includes('conditional')) && !set.has('refund_logic')) missing.push('refund_logic')

  if (missing.length) {
    return {
      decision: 'valid_if_requirements_added',
      emergentProduct: 'conditional_financial_capability',
      missing,
      reason: 'The composition needs consent, dispute, or refund logic before activation.'
    }
  }

  return {
    decision: 'warning_screen_required',
    emergentProduct: 'unknown_composition',
    reason: 'Composition must be explained and checked against financial physics before activation.'
  }
}

export function validateFormalCompositionSignature(signature) {
  const requiredTopLevel = [
    'component_id',
    'component_level',
    'version',
    'requires',
    'produces',
    'compatible_with',
    'forbidden_with',
    'failure_modes',
    'required_monitors',
    'ui_requirements'
  ]
  const missing = requiredTopLevel.filter((field) => signature[field] === undefined)
  const nestedMissing = []

  for (const field of ['money_state', 'actors', 'permissions', 'consent']) {
    if (!signature.requires?.[field]?.length) nestedMissing.push(`requires.${field}`)
  }
  for (const field of ['money_state', 'ledger_effects']) {
    if (!signature.produces?.[field]?.length) nestedMissing.push(`produces.${field}`)
  }

  return {
    valid: missing.length === 0 && nestedMissing.length === 0,
    missing,
    nestedMissing
  }
}

export function assembleProofDeliveryPaymentComposition() {
  return {
    physicsTruths: [
      'conditional_payment',
      'money_must_be_held',
      'recipient_has_conditional_claim',
      'release_requires_proof',
      'refund_path_required',
      'dispute_path_required'
    ],
    composition: [
      'escrow_hold',
      'proof_gate',
      'conditional_release',
      'refund_timer',
      'dispute_workflow',
      'consent_capture',
      'protected_payment_ui',
      'runtime_monitor'
    ]
  }
}

export function connectPhysicsToComposition(physicsTruths, candidateParts) {
  const composition = evaluateComposition(candidateParts)

  return {
    physicsTruths,
    candidateParts,
    composition,
    relationship: {
      financialPhysicsEngine: 'what_must_be_true_about_money_obligations_risk_claims_ownership_settlement_and_ledger_states',
      compositionAlgebra:
        'which_atoms_primitives_policies_algorithms_ui_pieces_and_monitors_can_combine_to_produce_a_valid_product'
    }
  }
}

export function compileCompositionGraph(requirements) {
  const pieces = []
  if (requirements.needsEscrow) pieces.push('escrow_hold')
  if (requirements.needsProofVerification) pieces.push('proof_verification')
  if (requirements.needsConditionalRelease) pieces.push('claimable_transfer')
  if (requirements.needsRefundPath) pieces.push('refund_timer')
  if (requirements.needsConsent) pieces.push('consent_capture')
  if (requirements.needsRuntimeMonitoring) pieces.push('runtime_monitor')

  const order = ['escrow_hold', 'proof_verification', 'claimable_transfer', 'refund_timer']
    .filter((piece) => pieces.includes(piece))
  const guards = [
    'state_compatibility',
    'ledger_balance',
    'consent_before_release',
    'refund_on_expiry',
    'runtime_monitor_attached'
  ]
  const required = ['escrow_hold', 'proof_verification', 'claimable_transfer', 'refund_timer', 'consent_capture']
  const missing = required.filter((piece) => !pieces.includes(piece))

  return {
    pieces,
    order,
    guards,
    missing,
    finalGraph: order.map((piece, index) => ({
      from: piece,
      to: order[index + 1] ?? 'terminal_state'
    })),
    valid: missing.length === 0
  }
}

export function typeCheckComposition(sequence) {
  const errors = []

  for (let i = 0; i < sequence.length - 1; i++) {
    const left = COMPOSITION_SIGNATURES[sequence[i]]
    const right = COMPOSITION_SIGNATURES[sequence[i + 1]]
    if (!left || !right) continue
    const compatibility = checkTypeCompatibility(left.type.output, right.type.input, {
      fromComponent: sequence[i],
      toComponent: sequence[i + 1]
    })
    if (compatibility.decision !== 'compatible') {
      errors.push({
        from: sequence[i],
        to: sequence[i + 1],
        expected: right.type.input,
        actual: left.type.output,
        decision: compatibility.decision,
        adapter: compatibility.adapter,
        required: compatibility.required,
        reason: compatibility.reason
      })
    }
  }

  return {
    sequence,
    valid: errors.length === 0,
    errors
  }
}

export function applySequentialComposition(first, second, context = {}) {
  if (first === 'hold' && second === 'release') {
    return {
      operator: 'sequential',
      valid: Boolean(context.fundsHeld ?? true),
      reason: 'Held funds can be released when release conditions pass.'
    }
  }

  if (first === 'release' && second === 'hold') {
    return {
      operator: 'sequential',
      valid: false,
      reason: 'Funds that already left controlled state cannot be held without a new source.'
    }
  }

  const typeCheck = typeCheckComposition([first, second])
  return {
    operator: 'sequential',
    valid: typeCheck.valid,
    reason: typeCheck.valid ? 'Output type can feed next input type.' : 'Output type does not match next input type.'
  }
}

export function validateSequentialCompositionChain(chain) {
  const issues = []

  for (let index = 0; index < chain.length - 1; index += 1) {
    const current = chain[index]
    const next = chain[index + 1]
    const outputStates = new Set(current.outputStates ?? COMPONENT_TRANSFORMATIONS[current.id]?.output ?? [])
    const inputStates = next.inputStates ?? COMPONENT_TRANSFORMATIONS[next.id]?.input ?? []

    if (!inputStates.some((state) => outputStates.has(state))) {
      issues.push(`${current.id}_output_does_not_match_${next.id}_input`)
    }
    if (current.ledgerConflictWith?.includes(next.id)) issues.push(`${current.id}_ledger_conflicts_with_${next.id}`)
    if (current.actorConflictWith?.includes(next.id)) issues.push(`${current.id}_actors_conflict_with_${next.id}`)
    if (current.failurePathsHandled === false) issues.push(`${current.id}_failure_paths_unhandled_before_${next.id}`)
  }

  return {
    valid: issues.length === 0,
    issues,
    operator: 'sequential'
  }
}

export function diagnoseInvalidSequentialWorkflow(workflow) {
  const steps = new Set(workflow)

  if (steps.has('photo_upload') && steps.has('release_funds') && !steps.has('escrow_hold')) {
    return {
      valid: false,
      reasons: [
        'photo_upload_does_not_create_escrow',
        'photo_upload_does_not_verify_proof',
        'photo_upload_does_not_authorize_release',
        'no_refund_path_exists',
        'no_dispute_path_exists'
      ],
      repair: ['add_escrow_hold', 'add_proof_verification', 'add_conditional_release_guard', 'add_refund_timer', 'add_dispute_workflow']
    }
  }

  return {
    valid: true,
    reasons: [],
    repair: []
  }
}

export function resolveParallelCompositionOutcome(checks, context = {}) {
  const highRisk = context.risk === 'high'
  const mode = highRisk ? 'all' : context.mode ?? 'at_least'
  const result = applyParallelComposition(checks, mode, {
    count: context.count ?? 2,
    onFailure: highRisk ? 'block_or_manual_review' : 'manual_review_or_resubmission'
  })

  return {
    ...result,
    policy: highRisk ? 'high_risk_requires_all_checks' : 'two_of_three_checks_must_pass',
    possiblePolicies: PARALLEL_RESULT_POLICIES
  }
}

export function applyParallelComposition(checks, mode = 'all', options = {}) {
  const passed = checks.filter((check) => check.status === 'passed')
  const failed = checks.filter((check) => check.status === 'failed')
  const inconclusive = checks.filter((check) => check.status === 'inconclusive')
  const weightedScore = checks.reduce((total, check) => total + (check.status === 'passed' ? check.weight ?? 1 : 0), 0)
  const requiredScore = options.requiredScore ?? checks.reduce((total, check) => total + (check.weight ?? 1), 0)

  let releaseDecision = false
  if (mode === 'all') releaseDecision = failed.length === 0 && inconclusive.length === 0
  if (mode === 'at_least') releaseDecision = passed.length >= (options.count ?? checks.length)
  if (mode === 'weighted') releaseDecision = weightedScore >= requiredScore

  return {
    operator: 'parallel',
    mode,
    releaseDecision,
    failureAction: failed.length
      ? options.onFailure ?? 'manual_review'
      : inconclusive.length
        ? options.onInconclusive ?? 'request_resubmission'
        : 'continue',
    passed: passed.map((check) => check.id),
    failed: failed.map((check) => check.id),
    inconclusive: inconclusive.map((check) => check.id)
  }
}

export function defineCondition(condition) {
  const required = ['dataSource', 'truthDefinition', 'confidenceThreshold', 'timeWindow', 'failurePath', 'auditRecord']
  const missing = required.filter((field) => condition[field] === undefined)

  return {
    ...condition,
    valid: missing.length === 0,
    missing
  }
}

export function applyConditionalComposition(condition, component) {
  const formalCondition = defineCondition(condition)

  return {
    operator: 'conditional',
    component,
    canRun: formalCondition.valid && Boolean(condition.satisfied),
    condition: formalCondition,
    ifFalse: condition.failurePath ?? 'block_and_review'
  }
}

export function applyGuardedComposition(guard, component, context = {}) {
  const guardChecks = {
    consent_guard: () => Boolean(context.consentCaptured),
    identity_guard: () => Boolean(context.identityVerified),
    fundability_guard: () => Boolean(context.fundable),
    ledger_balance_guard: () => Boolean(context.ledgerBalanced),
    bts_threshold_guard: () => (context.bts ?? 0) >= (context.requiredBts ?? 0.5),
    compliance_guard: () => Boolean(context.complianceAllowed),
    jurisdiction_guard: () => Boolean(context.jurisdictionAllowed),
    proof_verification_guard: () => Boolean(context.proofVerified),
    human_review_guard: () => Boolean(context.humanReviewApproved),
    limit_guard: () => (context.amount ?? 0) <= (context.limit ?? Infinity),
    risk_score_guard: () => (context.riskScore ?? 1) <= (context.maxRiskScore ?? 0.5),
    time_window_guard: () => Boolean(context.withinTimeWindow)
  }
  const passed = guardChecks[guard] ? guardChecks[guard]() : false

  return {
    operator: 'guarded',
    guard,
    component,
    canRun: passed,
    reason: passed ? `${guard} satisfied.` : `${component} blocked by ${guard}.`
  }
}

export function applySplitComposition(sourceAmount, branches) {
  let remaining = sourceAmount
  const sorted = [...branches].sort((a, b) => a.priority - b.priority)

  const allocations = sorted.map((branch) => {
    const target = branch.formula === 'percentage'
      ? Math.floor(sourceAmount * branch.value)
      : branch.value
    const minimum = branch.minimum ?? 0
    const required = Math.max(target, minimum)
    const allocated = Math.min(required, Math.max(remaining, 0))
    remaining -= allocated

    return {
      ...branch,
      allocated,
      shortfall: required - allocated,
      protected: Boolean(branch.protected),
      overrideAllowed: Boolean(branch.overrideAllowed)
    }
  })

  return {
    operator: 'split',
    sourceAmount,
    allocations,
    overflow: Math.max(remaining, 0),
    insufficientFunds: allocations.some((allocation) => allocation.shortfall > 0),
    roundingRule: 'floor_to_minor_unit'
  }
}

export function validateSplitCompositionPlan(plan) {
  const missing = SPLIT_REQUIREMENT_FIELDS.filter((field) => plan[field] === undefined)

  return {
    valid: missing.length === 0,
    missing,
    fields: SPLIT_REQUIREMENT_FIELDS
  }
}

export function applyJoinComposition(contributions, output) {
  return {
    operator: 'join',
    output,
    totalAmount: contributions.reduce((total, contribution) => total + contribution.amount, 0),
    contributors: contributions.map((contribution) => contribution.from),
    ownershipModel: output.ownershipModel ?? 'purpose_bound_pool',
    controlModel: output.controller ?? 'designated_controller',
    refundableContributors: contributions
      .filter((contribution) => contribution.refundable)
      .map((contribution) => contribution.from),
    usageVisibility: output.usageVisibility ?? 'contributors_can_see_receipts',
    canSeparateLater: Boolean(output.canSeparateLater),
    reversalBehavior: output.reversalBehavior ?? 'reverse_specific_contribution_and_rebalance_pool',
    purposeRestriction: output.purposeRestriction ?? 'none',
    preservesContributionMeaning: true
  }
}

export function validateJoinCompositionMeaning(join) {
  const missing = JOIN_MEANING_FIELDS.filter((field) => join[field] === undefined)

  return {
    valid: missing.length === 0,
    missing,
    fields: JOIN_MEANING_FIELDS,
    preservesMeaning: missing.length === 0 && join.redirectability === 'restricted'
  }
}

export function propagateJoinPurposeRestriction(join) {
  return {
    inputPurpose: join.purpose,
    outputState: join.purpose === 'school_fees'
      ? 'school_fee_restricted_funds'
      : join.outputState ?? 'purpose_bound_pool',
    invalidOutputStates: join.purpose === 'school_fees' ? ['available_cash'] : [],
    preservesRestriction: join.purpose === 'school_fees' ? join.outputState !== 'available_cash' : true
  }
}

export function applyLoopComposition(action, schedule) {
  const required = [
    'cadence',
    'startDate',
    'endDate',
    'gracePeriod',
    'skippedCycleBehavior',
    'retryBehavior',
    'failureBehavior',
    'pauseResumeRules',
    'stateCarryover',
    'accumulatedRisk'
  ]
  const missing = required.filter((field) => schedule[field] === undefined)

  return {
    operator: 'loop_recurring',
    action,
    schedule,
    valid: missing.length === 0,
    missing,
    weeklySusuRound: [
      'collect_contributions',
      'check_settlement',
      'update_obligation_status',
      'check_fundability',
      'release_payout_if_safe',
      'update_member_history',
      'move_to_next_round'
    ]
  }
}

export function validateLoopCompositionSchedule(schedule) {
  const missing = LOOP_REQUIREMENT_FIELDS.filter((field) => schedule[field] === undefined)

  return {
    valid: missing.length === 0,
    missing,
    fields: LOOP_REQUIREMENT_FIELDS
  }
}

export function applyWrapperComposition(wrapper, target) {
  const variants = {
    escrow: {
      result: `${target}_with_escrow_protection`,
      addedComponents: ['escrow_hold', 'claimable_transfer', 'refund_timer']
    },
    child_protected: {
      result: `${target}_with_child_protection`,
      addedComponents: ['guardian_role', 'restricted_spending', 'approved_payees']
    },
    merchant_restricted: {
      result: `${target}_with_merchant_restriction`,
      addedComponents: ['payee_restriction', 'invoice_verification']
    }
  }

  return {
    operator: 'wrapper',
    wrapper,
    target,
    ...(variants[wrapper] ?? { result: `${target}_wrapped_by_${wrapper}`, addedComponents: [wrapper] })
  }
}

export function buildWrapperVariation(base, wrappers) {
  return {
    base,
    wrappers,
    valid: wrappers.every((wrapper) => WRAPPER_COMPOSITION_VARIANTS.includes(wrapper)),
    emergentCapability: wrappers.includes('purpose_restricted') && base === 'goal_wallet'
      ? 'school_fee_wallet_candidate'
      : wrappers.includes('escrow') && base === 'send_money'
        ? 'safesend_candidate'
        : `${base}_wrapped`
  }
}

export function applyPolicyOverlay(target, policy) {
  const requirements = POLICY_OVERLAYS[policy] ?? []

  return {
    operator: 'policy_overlay',
    target,
    policy,
    requirements,
    createsStricterProduct: requirements.length > 0
  }
}

export function validatePolicyOverlayRequirements(policy, present) {
  const required = POLICY_OVERLAY_REQUIREMENTS[policy] ?? []
  const presentSet = new Set(present)
  const missing = required.filter((item) => !presentSet.has(item))

  return {
    valid: missing.length === 0,
    policy,
    missing,
    required
  }
}

export function applyMonitorOverlay(target, monitors) {
  const normalized = monitors.map((monitor) => typeof monitor === 'string'
    ? {
        id: monitor,
        watches: monitor.replace('_monitor', ''),
        threshold: 'defined_by_policy',
        trigger: 'threshold_crossed',
        action: 'warn_or_review',
        notify: ['user_or_admin'],
        pausesProduct: false,
        escalatesToHumanReview: monitor.includes('suspicious'),
        modifiesUserLimits: false,
        updatesBts: monitor.includes('default') || monitor.includes('late')
      }
    : monitor)

  return {
    operator: 'monitor_overlay',
    target,
    monitors: normalized,
    runtimeWatched: normalized.length > 0
  }
}

export function validateMonitorOverlayDefinition(monitor) {
  const missing = MONITOR_OVERLAY_FIELDS.filter((field) => monitor[field] === undefined)

  return {
    valid: missing.length === 0,
    missing,
    fields: MONITOR_OVERLAY_FIELDS
  }
}

export function applyFallbackComposition(primary, fallback, context = {}) {
  return {
    operator: 'fallback',
    primary,
    fallback,
    shouldFallback: Boolean(context.primaryFailed),
    nextAction: context.primaryFailed ? fallback : primary,
    preventsStuckFunds: true
  }
}

export function validateFallbackComposition(fallback) {
  const hasTerminalPath = Boolean(fallback.resubmission || fallback.manualReview || fallback.refund || fallback.dispute)

  return {
    valid: Boolean(fallback.primary && fallback.fallback) && hasTerminalPath,
    pattern: fallback.pattern,
    preventsStuckFunds: hasTerminalPath,
    patterns: FALLBACK_COMPOSITION_PATTERNS
  }
}

export function applyCompensationComposition(action, compensation, context = {}) {
  const failureEvent = context.failureEvent
    ?? (context.reversed ? 'money_movement_reversed' : context.fraudDiscovered ? 'fraudulent_proof_discovered' : 'release_failed')
  const pattern = COMPENSATION_EVENT_PATTERNS[failureEvent]

  return {
    operator: 'compensation',
    action,
    compensation,
    failureEvent,
    repairAction: pattern?.repair ?? compensation,
    terminalState: pattern?.terminalState ?? context.terminalState ?? 'state_repaired',
    shouldCompensate: Boolean(context.failed || context.reversed || context.fraudDiscovered),
    examples: [
      'restore_escrow_state',
      'adjust_ledger_and_notify_users',
      'apply_default_policy',
      'reverse_duplicate',
      'freeze_account_and_open_dispute'
    ]
  }
}

export function validateCompensationPlan(plan) {
  const missing = COMPENSATION_REQUIREMENT_FIELDS.filter((field) => plan[field] === undefined)
  const pattern = COMPENSATION_EVENT_PATTERNS[plan.failure_event]
  const repairsState = Boolean(plan.affected_state && plan.repaired_state && plan.ledger_repair)
  const reachesTerminalState = Boolean(plan.terminal_state)

  return {
    valid: missing.length === 0 && repairsState && reachesTerminalState,
    missing,
    pattern,
    repairsState,
    reachesTerminalState,
    fields: COMPENSATION_REQUIREMENT_FIELDS
  }
}

export function requireCompensationCoverage(actions) {
  const missingCompensation = actions
    .filter((action) => action.canFail && !action.compensation && !action.compensationPlan)
    .map((action) => action.action)

  return {
    valid: missingCompensation.length === 0,
    missingCompensation,
    checkedActions: actions.map((action) => action.action)
  }
}

export function applyDelegationComposition({
  delegator,
  delegate,
  scope,
  limit,
  duration,
  revocation,
  auditTrail,
  notificationRule,
  consent,
  liability
}) {
  const requiredFields = {
    delegator,
    delegate,
    scope,
    limit,
    duration,
    revocation_path: revocation,
    audit_trail: auditTrail,
    notification_rule: notificationRule,
    liability_rule: liability,
    consent_requirement: consent
  }
  const missing = Object.entries(requiredFields)
    .filter(([, value]) => value === undefined || value === null || value === '')
    .map(([key]) => key)
  const normalizedScope = Array.isArray(scope) ? scope : scope ? [scope] : []
  const vaguePermissions = normalizedScope.filter((permission) => ['manage', 'admin', 'all', 'full_access'].includes(permission))

  return {
    operator: 'delegation',
    delegator,
    delegate,
    scope: normalizedScope,
    limit,
    duration,
    revocation,
    auditTrail,
    notificationRule,
    consent,
    liability,
    permissions: [
      'view_balance',
      'invite_contributors',
      'approve_school_payment',
      'upload_invoice',
      'request_emergency_unlock'
    ],
    forbiddenPermissions: normalizedScope.includes('cash_withdrawal') ? [] : ['withdraw_cash', 'change_payee'],
    vaguePermissions,
    valid: missing.length === 0 && vaguePermissions.length === 0,
    missing
  }
}

export function applyRoleBindingComposition(requiredRoles, bindings, roleRequirements = {}) {
  const missing = requiredRoles.filter((role) => !bindings[role])
  const actorToRoles = Object.entries(bindings).reduce((map, [role, actor]) => {
    map[actor] = [...(map[actor] ?? []), role]
    return map
  }, {})
  const conflicts = Object.entries(actorToRoles).flatMap(([actor, roles]) =>
    ROLE_CONFLICT_PATTERNS
      .filter((rule) => rule.roles.every((role) => roles.includes(role)))
      .map((rule) => ({
        actor,
        conflict: rule.conflict,
        requiredMitigation: rule.requiredMitigation
      }))
  )
  const verificationGaps = Object.entries(roleRequirements)
    .flatMap(([role, requirement]) => {
      const gaps = []
      if (requirement.identityRequired && !requirement.identityVerified) gaps.push(`${role}:identity_verification`)
      if (requirement.businessRequired && !requirement.businessVerified) gaps.push(`${role}:business_verification`)
      if (requirement.guardianRequired && !requirement.guardianVerified) gaps.push(`${role}:guardian_verification`)
      if (requirement.legalEligibilityRequired && !requirement.legalEligibilityVerified) gaps.push(`${role}:legal_eligibility`)
      return gaps
    })

  return {
    operator: 'role_binding',
    requiredRoles,
    bindings,
    missing,
    conflicts,
    verificationGaps,
    reviewFields: ROLE_BINDING_REVIEW_FIELDS,
    valid: missing.length === 0 && conflicts.length === 0 && verificationGaps.length === 0
  }
}

export function validateActorRoleBindings({
  requiredRoles = [],
  roleBindings = [],
  roleRequirements = {},
  delegations = [],
  guards = [],
  riskContext = 'standard'
} = {}) {
  const bindingsByRole = roleBindings.reduce((map, binding) => {
    map[binding.role] = binding.actor_id
    return map
  }, {})
  const basicReview = applyRoleBindingComposition(requiredRoles, bindingsByRole, roleRequirements)
  const issues = [
    ...basicReview.missing.map((role) => `missing_role:${role}`),
    ...basicReview.conflicts.map((conflict) => conflict.conflict),
    ...basicReview.verificationGaps
  ]
  const permissionMatrix = roleBindings.reduce((matrix, binding) => {
    matrix[binding.role] = {
      actor: binding.actor_id,
      actorType: binding.actor_type,
      permissions: binding.permissions ?? [],
      forbiddenPermissions: binding.forbidden_permissions ?? []
    }
    return matrix
  }, {})
  const verificationPlan = []

  for (const binding of roleBindings) {
    const requirement = roleRequirements[binding.role] ?? {}
    const allowedTypes = requirement.allowedActorTypes ?? []
    const presentVerification = new Set(binding.verification_present ?? [])
    const excessivePermissions = (binding.permissions ?? []).filter((permission) => (binding.forbidden_permissions ?? []).includes(permission))
    const missingVerification = (binding.verification_required ?? []).filter((verification) => !presentVerification.has(verification))

    if (allowedTypes.length && !allowedTypes.includes(binding.actor_type)) issues.push(`${binding.role}:invalid_actor_type`)
    if (missingVerification.length) issues.push(`${binding.role}:missing_verification:${missingVerification.join(',')}`)
    if (excessivePermissions.length) issues.push(`${binding.role}:excessive_permission:${excessivePermissions.join(',')}`)
    if (binding.actor_type === 'minor' && !['child_beneficiary', 'beneficiary'].includes(binding.role)) {
      issues.push(`${binding.role}:minor_assigned_to_control_role`)
    }
    if (requirement.businessRequired && binding.actor_type === 'individual') issues.push(`${binding.role}:business_role_assigned_to_personal_account`)
    verificationPlan.push({
      role: binding.role,
      actor: binding.actor_id,
      required: binding.verification_required ?? [],
      missing: missingVerification
    })
  }

  for (const delegation of delegations) {
    const binding = roleBindings.find((record) => record.actor_id === delegation.delegate)
    const allowed = new Set(binding?.permissions ?? [])
    const outOfScope = (delegation.scope ?? []).filter((permission) => !allowed.has(permission))
    if (outOfScope.length) issues.push(`delegation_out_of_scope:${delegation.delegate}:${outOfScope.join(',')}`)
  }

  const actorToRoles = roleBindings.reduce((map, binding) => {
    map[binding.actor_id] = [...(map[binding.actor_id] ?? []), binding.role]
    return map
  }, {})
  for (const [actor, roles] of Object.entries(actorToRoles)) {
    const controlsBothSides = roles.includes('payer') && roles.includes('recipient')
    const riskyVerifier = roles.includes('contractor') && roles.includes('verifier')
    if ((controlsBothSides || riskyVerifier) && riskContext !== 'low' && !guards.includes('two_sided_control_guard')) {
      issues.push(`risky_two_sided_control_without_guard:${actor}`)
    }
  }

  return {
    valid: issues.length === 0,
    issues,
    actorRoleMap: bindingsByRole,
    permissionMatrix,
    roleConflictReport: basicReview.conflicts,
    requiredVerificationPlan: verificationPlan,
    delegationScope: delegations,
    roleBasedUiPermissions: Object.fromEntries(Object.entries(permissionMatrix).map(([role, matrix]) => [role, matrix.permissions])),
    kernelAuthorizationRules: roleBindings.map((binding) => `${binding.actor_id}:${binding.role}:${(binding.permissions ?? []).join('|')}`),
    checks: ACTOR_ROLE_VALIDATOR_CHECKS,
    outputs: ACTOR_ROLE_VALIDATOR_OUTPUTS,
    recordFields: ACTOR_ROLE_BINDING_RECORD_FIELDS
  }
}

export function applyRiskAdjustedComposition({
  amount,
  bts,
  relationshipStrength,
  userHistory,
  recipientHistory,
  accountAgeDays,
  deviceTrust,
  locationTrust,
  paymentMethod,
  productCategory,
  failureCost,
  failureSeverity,
  fraudExposure,
  fraudSignals = [],
  jurisdiction
}) {
  const severeFailure = failureSeverity === 'high' || failureCost === 'high'
  const weakTrust = relationshipStrength === 'new' || recipientHistory === 'new' || deviceTrust === 'low' || locationTrust === 'low'
  const extremeRisk = amount > 1000000 || bts < 0.25 || fraudExposure === 'extreme' || fraudSignals.length >= 3
  const highRisk = amount > 100000 || bts < 0.5 || weakTrust || fraudExposure === 'high' || severeFailure
  const mediumRisk = amount > 25000 || bts < 0.7 || deviceTrust === 'medium' || locationTrust === 'medium'
  const band = extremeRisk ? 'extreme' : highRisk ? 'high' : mediumRisk ? 'medium' : 'low'

  return {
    operator: 'risk_adjusted',
    riskBand: band,
    signals: {
      amount,
      bts,
      relationshipStrength,
      userHistory,
      recipientHistory,
      accountAgeDays,
      deviceTrust,
      locationTrust,
      paymentMethod,
      productCategory,
      failureCost,
      failureSeverity,
      fraudExposure,
      fraudSignals,
      jurisdiction
    },
    signalFields: RISK_ADJUSTMENT_SIGNAL_FIELDS,
    requiredComponents: band === 'extreme'
      ? ['block_or_human_review']
      : highRisk
      ? ['escrow', 'identity_verification', 'gps_proof', 'photo_proof', 'manual_review', 'dispute_workflow', 'delayed_release']
      : mediumRisk
        ? ['guarded_composition', 'limit_guard', 'risk_warning']
      : ['simple_transfer'],
    releaseMode: band === 'extreme'
      ? 'blocked_or_human_review'
      : highRisk
        ? 'human_supervised_execution'
        : mediumRisk
          ? 'guarded_execution'
          : 'full_automated_release'
  }
}

export function applyUiBindingComposition(financialState) {
  return {
    operator: 'ui_binding',
    financialState,
    binding: UI_STATE_BINDINGS[financialState] ?? {
      component: 'generic_state_panel',
      warning: 'State needs design review.',
      enabledActions: ['view_details'],
      disabledActions: [],
      explanation: 'AURA is reviewing how to represent this financial state.'
    }
  }
}

export function validateUiBindingTruth(financialState, displayedAs) {
  const binding = applyUiBindingComposition(financialState)
  const truthRule = UI_BINDING_TRUTH_RULES[financialState]
  const forbidden = truthRule?.forbiddenDisplays ?? []
  const truthfulComponent = displayedAs === binding.binding.component || displayedAs === financialState
  const valid = Boolean(truthRule) && truthfulComponent && !forbidden.includes(displayedAs)

  return {
    financialState,
    displayedAs,
    valid,
    requiredComponent: truthRule?.requiredComponent ?? binding.binding.component,
    forbiddenDisplays: forbidden,
    disabledActions: truthRule?.disabledActions ?? binding.binding.disabledActions
  }
}

export function validateUiBindingMap({
  financialStates = [],
  bindings = UI_BINDING_MAP,
  actorPermissions = {},
  consentScreens = {},
  guardFailures = [],
  transitions = []
} = {}) {
  const missingUiStateFindings = []
  const requiredUiComponents = []
  const requiredExplanationCopy = []
  const disabledActionRules = []
  const stateSpecificLabels = {}
  const balanceDisplayRules = []
  const uxTruthWarnings = []

  for (const state of financialStates) {
    const binding = bindings[state]
    if (!binding) {
      missingUiStateFindings.push(state)
      continue
    }
    requiredUiComponents.push(binding.required_component)
    requiredExplanationCopy.push(...binding.required_explanations)
    disabledActionRules.push(...binding.disabled_actions.map((action) => `${state}:${action}`))
    stateSpecificLabels[state] = binding.label
    if (['available_funds', 'escrowed_funds', 'pending_funds', 'restricted_funds', 'school_fee_restricted_funds'].includes(state)) {
      balanceDisplayRules.push(`${state}_must_have_distinct_balance_label`)
    }
    if (state.includes('restricted') && !binding.required_explanations.some((explanation) => explanation.includes('restriction') || explanation.includes('approved_payee'))) {
      uxTruthWarnings.push(`${state}:missing_restriction_explanation`)
    }
  }

  for (const [actor, permissions] of Object.entries(actorPermissions)) {
    for (const state of financialStates) {
      const binding = bindings[state]
      if (!binding) continue
      const forbiddenVisible = (permissions.visibleActions ?? []).filter((action) => binding.disabled_actions.includes(action))
      if (forbiddenVisible.length) uxTruthWarnings.push(`${actor}:sees_disabled_action:${forbiddenVisible.join(',')}`)
    }
  }

  for (const [screen, disclosures] of Object.entries(consentScreens)) {
    if (!disclosures?.length) uxTruthWarnings.push(`${screen}:missing_required_disclosures`)
  }
  for (const failure of guardFailures) {
    if (!failure.explanation) uxTruthWarnings.push(`${failure.guard}:missing_guard_failure_explanation`)
  }
  for (const transition of transitions) {
    if (!transition.timelineState) uxTruthWarnings.push(`${transition.id}:missing_timeline_state`)
  }

  return {
    valid: missingUiStateFindings.length === 0 && uxTruthWarnings.length === 0,
    uiBindingMap: bindings,
    missingUiStateFindings,
    requiredUiComponents: [...new Set(requiredUiComponents)],
    requiredExplanationCopy: [...new Set(requiredExplanationCopy)],
    disabledActionRules: [...new Set(disabledActionRules)],
    stateSpecificLabels,
    balanceDisplayRules: [...new Set(balanceDisplayRules)],
    uxTruthWarnings,
    checks: UI_BINDING_VALIDATOR_CHECKS,
    outputs: UI_BINDING_VALIDATOR_OUTPUTS,
    forbiddenMisrepresentations: UI_FORBIDDEN_MISREPRESENTATIONS,
    downstreamFeeds: ['ui_ux_composer', 'capability_doctor']
  }
}

export function applyComplianceGatedComposition(parts) {
  const set = new Set(parts)
  const matchedRules = COMPLIANCE_GATED_COMBINATION_RULES.filter((rule) => hasAll(set, rule.parts))
  const categories = matchedRules.flatMap((rule) => {
    if (rule.category === 'susu_rosca_like_product') {
      return [rule.category, 'pooled_funds', 'potential_money_transmission', 'custodial_wallet_concerns']
    }
    return [rule.category]
  })

  return {
    operator: 'compliance_gated',
    categories: [...new Set(categories)],
    matchedRules,
    sendToGovernor: categories.length > 0,
    reason: categories.length
      ? 'Component combination creates a regulated product category candidate.'
      : 'No regulated category candidate detected from this composition.'
  }
}

export function tagCompliancePatterns({ components = [], conditions = [], jurisdiction = 'global' } = {}) {
  const componentSet = new Set(components)
  const conditionSet = new Set(conditions)
  const triggeredPatterns = COMPLIANCE_TAGGING_PATTERN_RULES.filter((rule) => {
    const componentsMatch = rule.if_components.every((component) => componentSet.has(component))
    const conditionsMatch = rule.if_conditions.every((condition) => conditionSet.has(condition))
    return componentsMatch && conditionsMatch
  })
  const complianceTags = [...new Set(triggeredPatterns.flatMap((rule) => rule.tags))]
  const requiredGovernorReview = triggeredPatterns.some((rule) => rule.required_governor_review)
  const confidenceRank = { low: 1, medium: 2, high: 3 }
  const confidenceLevel = triggeredPatterns.reduce((highest, rule) => {
    return confidenceRank[rule.confidence] > confidenceRank[highest] ? rule.confidence : highest
  }, 'low')

  return {
    complianceTagManifest: {
      compliance_tags: complianceTags,
      triggered_by: [...new Set(triggeredPatterns.flatMap((rule) => rule.if_components))],
      action: requiredGovernorReview ? ['route_to_governor', 'restrict_auto_release_until_review'] : []
    },
    triggeringPatternExplanation: triggeredPatterns.map((rule) => ({
      pattern_id: rule.pattern_id,
      tags: rule.tags,
      reason: `${rule.if_components.join('+')}_with_${rule.if_conditions.join('+')}`
    })),
    confidenceLevel,
    requiredGovernorReview,
    suggestedReleaseRestriction: triggeredPatterns.map((rule) => rule.suggested_release_restriction),
    requiredDisclosureFamilies: [...new Set(triggeredPatterns.flatMap((rule) => rule.required_disclosure_families))],
    jurisdictionSpecificRuleHooks: complianceTags.map((tag) => `${jurisdiction}:${tag}`),
    outputs: COMPLIANCE_TAGGING_OUTPUTS,
    example: COMPLIANCE_TAGGING_EXAMPLE_MANIFEST,
    boundary: 'tag_and_route_not_final_legal_decision'
  }
}

export function applySimulationGatedComposition(parts, simulationResult = {}) {
  const set = new Set(parts)
  const mandatoryScenarios = []

  if (hasAll(set, ['susu_circle', 'no_pot_shrink_policy', 'reserve_pool'])) {
    mandatoryScenarios.push(...COMPOSITION_SIMULATION_SCENARIOS.protected_susu_circle)
  }
  if (hasAll(set, ['contractor_escrow', 'high_value', 'proof_gate'])) {
    mandatoryScenarios.push(...COMPOSITION_SIMULATION_SCENARIOS.high_value_contractor_escrow)
  }
  if (hasAll(set, ['advance_now', 'repay_later'])) {
    mandatoryScenarios.push(...COMPOSITION_SIMULATION_SCENARIOS.credit_like_advance)
  }

  const passThreshold = simulationResult.passRate ?? 0
  const passed = mandatoryScenarios.length === 0 || passThreshold >= 0.95

  return {
    operator: 'simulation_gated',
    requiresSimulation: mandatoryScenarios.length > 0,
    mandatoryScenarios: [...new Set(mandatoryScenarios)],
    passed,
    passThreshold: 0.95,
    gatedProducts: COMPOSITION_SIMULATION_GATED_PRODUCTS,
    ifFails: ['do_not_activate', 'increase_reserve', 'lower_limits', 'require_review']
  }
}

export function applyClosureLaw(parts) {
  const composition = evaluateComposition(parts)
  const valid = composition.decision === 'valid'

  return {
    law: 'closure_law',
    valid,
    productSignature: valid
      ? {
          component: composition.emergentProduct,
          category: 'capability',
          inputs: ['available_funds', 'proof_evidence'],
          outputs: ['released_funds_or_refunded_funds'],
          states: ['draft', 'escrowed', 'proof_pending', 'released', 'refunded'],
          actors: ['sender', 'recipient', 'verifier'],
          ledgerEffects: ['debit_available', 'credit_escrow_liability', 'debit_escrow_liability', 'credit_recipient_available'],
          risks: ['proof_failure', 'dispute', 'expiry'],
          failureModes: ['proof_rejected', 'deadline_expired', 'sender_dispute'],
          monitors: ['proof_deadline_monitor', 'escrow_age_monitor'],
          uiRequirements: ['protected_money_card', 'waiting_timeline', 'refund_explanation'],
          complianceTags: ['escrow_like_custody_review_candidate'],
          signatureFields: CAPABILITY_CLOSURE_SIGNATURE_FIELDS
        }
      : null
  }
}

export function checkStateContinuity(states) {
  const gaps = []
  for (let i = 0; i < states.length - 1; i++) {
    if (!states[i].output || !states[i + 1].input || states[i].output !== states[i + 1].input) {
      gaps.push({
        from: states[i].component,
        to: states[i + 1].component,
        output: states[i].output,
        expectedInput: states[i + 1].input
      })
    }
  }

  return {
    law: 'state_continuity_law',
    valid: gaps.length === 0,
    gaps
  }
}

export function checkCompositionLedger(entries, requirements = {}) {
  const total = entries.reduce((sum, entry) => sum + entry.amount, 0)
  const hasDebit = entries.some((entry) => entry.amount < 0)
  const hasCredit = entries.some((entry) => entry.amount > 0)
  const invalidReasons = []

  if (total !== 0) invalidReasons.push('ledger_not_balanced')
  if (!hasDebit) invalidReasons.push('missing_debit')
  if (!hasCredit) invalidReasons.push('missing_credit')
  if (requirements.hold && !requirements.releaseOrRefundPath) invalidReasons.push('hold_without_release_or_refund_path')
  if (requirements.fee && !requirements.feeOwner) invalidReasons.push('fee_without_fee_owner')
  if (requirements.reserveDeduction && !requirements.reserveAccount) invalidReasons.push('reserve_deduction_without_reserve_account')
  if (requirements.refund && !requirements.refundSource) invalidReasons.push('refund_without_source')

  return {
    law: 'ledger_conservation_law',
    valid: invalidReasons.length === 0,
    invalidReasons
  }
}

export function resolveClaimCollision(claims) {
  const byValue = claims.reduce((map, claim) => {
    map[claim.valueObjectId] = [...(map[claim.valueObjectId] ?? []), claim]
    return map
  }, {})
  const collisions = Object.entries(byValue)
    .filter(([, valueClaims]) => valueClaims.filter((claim) => claim.exclusive).length > 1)
    .map(([valueObjectId, valueClaims]) => {
      const orderedClaims = [...valueClaims].sort((a, b) => a.priority - b.priority)
      const [winner, ...lowerPriorityClaims] = orderedClaims
      const partialFundingClaims = lowerPriorityClaims.filter((claim) => claim.partialAllowed)
      const rejectedClaims = lowerPriorityClaims.filter((claim) => !claim.partialAllowed && !claim.canWait)

      return {
        valueObjectId,
        orderedClaims,
        winningClaim: winner,
        waitingClaims: lowerPriorityClaims.filter((claim) => claim.canWait),
        partialFundingClaims,
        rejectedClaims,
        notificationTargets: [...new Set(orderedClaims.map((claim) => claim.owner ?? claim.claimant))],
        priorityOrder: CLAIM_PRIORITY_ORDER,
        resolutionFields: CLAIM_COLLISION_RESOLUTION_FIELDS,
        resolution: ['winner_by_priority', 'lower_priority_waits', 'partial_funding_if_allowed', 'notify_affected_users']
      }
    })

  return {
    law: 'no_double_claim_law',
    valid: collisions.length === 0,
    collisions
  }
}

export function checkConsentCompleteness(requiredConsents, capturedConsents) {
  const captured = new Set(capturedConsents)
  const missing = requiredConsents.filter((consent) => !captured.has(consent))

  return {
    law: 'consent_completeness_law',
    valid: missing.length === 0,
    missing,
    hiddenObligationsBlocked: missing.length === 0
  }
}

export function checkConsentCoverageMatrix(matrix, captured = {}, context = {}) {
  const findings = []
  const disclosureRequirements = []
  const uiConsentScreenRequirements = []
  const auditEvents = []

  for (const row of matrix) {
    const capturedForRole = new Set(captured[row.actor_role] ?? [])
    disclosureRequirements.push(...row.required_disclosures.map((disclosure) => ({
      actor_role: row.actor_role,
      disclosure
    })))
    uiConsentScreenRequirements.push(`${row.actor_role}_consent_screen`)
    auditEvents.push(`${row.actor_role}_consent_captured`)

    for (const disclosure of row.required_disclosures) {
      if (!capturedForRole.has(disclosure)) {
        const isPostPayout = row.exposure.includes('post_payout_obligation')
        const severity = isPostPayout ? 'critical' : row.exposure.some((exposure) => ['risk', 'loss', 'default_consequence'].includes(exposure)) ? 'serious' : 'warning'
        findings.push({
          actor_role: row.actor_role,
          missing: disclosure,
          severity,
          message: `${row.actor_role}_missing_${disclosure}`
        })
      }
    }

    if ((row.required_action ?? []).includes('explicit_acceptance') && !capturedForRole.has('explicit_acceptance')) {
      findings.push({
        actor_role: row.actor_role,
        missing: 'explicit_acceptance',
        severity: 'fatal',
        message: `${row.actor_role}_missing_explicit_acceptance`
      })
    }
  }

  if (context.capabilityVersion && context.consentVersion && context.capabilityVersion !== context.consentVersion) {
    findings.push({
      actor_role: 'all',
      missing: 'current_consent_version',
      severity: 'serious',
      message: 'consent_version_does_not_match_capability_version'
    })
  }
  if (context.materialChanges?.length) {
    findings.push({
      actor_role: 'all',
      missing: 'reconsent_after_material_change',
      severity: 'critical',
      message: 'material_change_requires_reconsent'
    })
  }

  return {
    valid: findings.length === 0,
    consentMatrix: matrix,
    disclosureRequirements,
    missingConsentFindings: findings,
    consentVersionRequirements: ['consent_version_matches_capability_version'],
    reconsentTriggers: context.materialChanges ?? [],
    uiConsentScreenRequirements,
    auditEventsForConsentCapture: auditEvents,
    checks: CONSENT_COVERAGE_CHECKS,
    outputs: CONSENT_COVERAGE_OUTPUTS,
    severityScale: CONSENT_GAP_SEVERITIES,
    downstreamFeeds: ['ui_composer', 'capability_doctor', 'governor', 'kernel_authorization']
  }
}

export function checkFailureCompleteness(components) {
  const missing = components
    .filter((component) => (component.failureModes ?? []).length > 0)
    .filter((component) => (component.failurePaths ?? []).length === 0)
    .map((component) => component.id)
  const happyPathOnly = components
    .filter((component) => (component.failureModes ?? []).length === 0 && (component.failurePaths ?? []).length === 0)
    .map((component) => component.id)

  return {
    law: 'failure_completeness_law',
    valid: missing.length === 0 && happyPathOnly.length === 0,
    missing,
    happyPathOnly,
    productionReady: missing.length === 0 && happyPathOnly.length === 0,
    requiredPaths: FAILURE_PATH_TYPES
  }
}

export function checkFailurePathCompletenessMatrix({
  failureMatrix = [],
  states = [],
  terminalStates = [],
  conditionalBranches = [],
  guardFailures = [],
  heldFundStates = [],
  recurringObligations = [],
  manualReviewStates = [],
  providerFailures = [],
  compensationPaths = []
} = {}) {
  const terminal = new Set(terminalStates)
  const missingRecoveryPaths = []
  const stuckStateReport = []
  const requiredCompensationPaths = []
  const requiredTimeoutPolicies = []
  const requiredDisputePaths = []
  const requiredUserExplanations = []

  for (const row of failureMatrix) {
    const paths = row.required_paths ?? []
    if (!paths.length || row.status?.startsWith('missing')) {
      missingRecoveryPaths.push(row.failure_mode)
    }
    if (['escrowed_funds', 'held_funds', 'locked_funds'].includes(row.affected_state)) {
      const hasTerminalPath = paths.some((path) => ['release', 'refund', 'refund_sender', 'dispute', 'refund_or_dispute_after_final_rejection'].includes(path))
      if (!hasTerminalPath) {
        stuckStateReport.push({
          severity: 'fatal',
          state: row.affected_state,
          failure_mode: row.failure_mode,
          repair: ['add_resubmission_path', 'add_final_rejection_path', 'add_refund_or_dispute_resolution_path', 'add_timeout']
        })
      }
    }
  }

  for (const state of states) {
    if (!terminal.has(state.id) && !state.exits?.length) missingRecoveryPaths.push(`state_without_exit:${state.id}`)
  }
  for (const branch of conditionalBranches) {
    if (!branch.failBehavior?.length) missingRecoveryPaths.push(`conditional_branch_without_fail_behavior:${branch.id}`)
  }
  for (const guard of guardFailures) {
    if (!guard.response?.length) missingRecoveryPaths.push(`guard_failure_without_response:${guard.guard}`)
    if (!guard.userExplanation) requiredUserExplanations.push(`${guard.guard}_blocked_explanation`)
  }
  for (const fundState of heldFundStates) {
    const hasExit = failureMatrix.some((row) => row.affected_state === fundState && (row.required_paths ?? []).some((path) => ['release', 'refund', 'refund_sender', 'dispute', 'refund_or_dispute_after_final_rejection'].includes(path)))
    if (!hasExit) {
      stuckStateReport.push({
        severity: 'fatal',
        state: fundState,
        failure_mode: 'unresolved_held_funds',
        repair: ['add_release_path', 'add_refund_path', 'add_dispute_path', 'add_timeout']
      })
    }
  }
  for (const obligation of recurringObligations) {
    if (!obligation.latePath || !obligation.defaultPath) missingRecoveryPaths.push(`recurring_obligation_without_late_or_default_path:${obligation.id}`)
  }
  for (const reviewState of manualReviewStates) {
    if (!reviewState.escalationTimeout) requiredTimeoutPolicies.push(`${reviewState.id}_escalation_timeout`)
  }
  for (const providerFailure of providerFailures) {
    if (!providerFailure.retry && !providerFailure.fallback) missingRecoveryPaths.push(`provider_failure_without_retry_or_fallback:${providerFailure.id}`)
  }
  for (const compensation of compensationPaths) {
    if (!compensation.ledgerLogic) requiredCompensationPaths.push(`${compensation.id}_ledger_logic`)
  }

  return {
    valid: missingRecoveryPaths.length === 0
      && stuckStateReport.length === 0
      && requiredCompensationPaths.length === 0
      && requiredTimeoutPolicies.length === 0,
    failureMatrix,
    stuckStateReport,
    missingRecoveryPaths: [...new Set(missingRecoveryPaths)],
    requiredCompensationPaths,
    requiredTimeoutPolicies,
    requiredDisputePaths,
    requiredUserExplanations,
    checks: FAILURE_COMPLETENESS_CHECKS,
    outputs: FAILURE_COMPLETENESS_OUTPUTS,
    seriousFailureModes: SERIOUS_FAILURE_MODES
  }
}

export function checkOwnershipPreservation(joinResult) {
  const preserved = Boolean(
    joinResult.preservesContributionMeaning
    && joinResult.purposeRestriction !== 'none'
    && joinResult.contributors?.length
    && joinResult.usageVisibility
    && joinResult.reversalBehavior
  )

  return {
    law: 'ownership_preservation_law',
    valid: preserved,
    fields: OWNERSHIP_PRESERVATION_FIELDS,
    requiredQuestions: OWNERSHIP_PRESERVATION_FIELDS
  }
}

export function checkRoleValidity(requiredRoles, bindings, roleRequirements = {}) {
  const binding = applyRoleBindingComposition(requiredRoles, bindings, roleRequirements)

  return {
    law: 'role_validity_law',
    valid: binding.valid,
    missing: binding.missing,
    conflicts: binding.conflicts,
    verificationGaps: binding.verificationGaps
  }
}

export function checkRiskMonotonicity({ introducedRisks = [], reducingComponents = [] }) {
  const unresolvedRisks = introducedRisks.filter((risk) => {
    const reducers = RISK_MITIGATION_CATALOG[risk] ?? []
    return reducers.length === 0 || !reducers.some((reducer) => reducingComponents.includes(reducer))
  })

  return {
    law: 'risk_monotonicity_law',
    valid: unresolvedRisks.length === 0,
    unresolvedRisks,
    mitigationCatalog: RISK_MITIGATION_CATALOG
  }
}

export function checkGuardSufficiency(action, guards) {
  const required = DANGEROUS_ACTION_GUARDS[action] ?? []
  const present = new Set(guards)
  const missing = required.filter((guard) => !present.has(guard))

  return {
    law: 'guard_sufficiency_law',
    action,
    valid: missing.length === 0,
    missing,
    dangerousActions: Object.keys(DANGEROUS_ACTION_GUARDS)
  }
}

export function checkComplianceEscalation(parts) {
  const gate = applyComplianceGatedComposition(parts)

  return {
    law: 'compliance_escalation_law',
    valid: gate.sendToGovernor,
    categories: gate.categories,
    matchedRules: gate.matchedRules,
    governorDecisions: GOVERNOR_DECISIONS
  }
}

export function checkExplainability(composition) {
  const hasExplanation = Boolean(composition.userExplanation)
  const coveredFields = EXPLAINABILITY_FIELDS.filter((field) => composition[field])
  const missing = EXPLAINABILITY_FIELDS.filter((field) => !composition[field])

  return {
    law: 'explainability_law',
    valid: hasExplanation && missing.length === 0,
    missing,
    coveredFields,
    requirement: 'valid_composition_must_be_understandable_before_activation'
  }
}

export function checkAuditClosure(auditFields) {
  const required = AUDIT_CLOSURE_FIELDS
  const present = new Set(auditFields)
  const missing = required.filter((field) => !present.has(field))

  return {
    law: 'audit_closure_law',
    valid: missing.length === 0,
    missing,
    required
  }
}

export function markReversibility(states) {
  return {
    law: 'reversibility_compensation_law',
    states: states.map((state) => ({
      state,
      reversibility: REVERSIBILITY_STATES[state] ?? 'unknown_requires_policy'
    }))
  }
}

export function checkRuntimeMonitorLaw(productType, monitors) {
  const required = RUNTIME_MONITOR_REQUIREMENTS[productType] ?? []
  const present = new Set(monitors)
  const missing = required.filter((monitor) => !present.has(monitor))

  return {
    law: 'runtime_monitor_law',
    valid: missing.length === 0,
    missing,
    required
  }
}

export function attachRuntimeMonitors({
  productType,
  states = [],
  deadlines = [],
  reserves = [],
  recurringObligations = [],
  escrows = [],
  proofGatedReleases = [],
  riskLevel = 'medium',
  complianceSensitive = false,
  existingMonitors = []
} = {}) {
  const required = new Set(RUNTIME_MONITOR_REQUIREMENTS[productType] ?? [])
  if (states.some((state) => ['escrowed_funds', 'locked_funds', 'restricted_funds', 'reserved_funds'].includes(state))) required.add('escrow_age_monitor')
  if (deadlines.length) required.add('proof_deadline_monitor')
  if (reserves.length) required.add('reserve_health_monitor')
  if (recurringObligations.length) {
    required.add('contribution_due_monitor')
    required.add('member_default_monitor')
  }
  if (escrows.length) required.add('escrow_age_monitor')
  if (proofGatedReleases.length) required.add('proof_deadline_monitor')
  if (riskLevel === 'high') {
    required.add('fraud_signal_monitor')
    required.add('BTS_drift_monitor')
  }
  if (complianceSensitive) required.add('policy_drift_monitor')

  const present = new Set(existingMonitors)
  const missing = [...required].filter((monitor) => !present.has(monitor))
  const monitorPlan = [...new Set([...existingMonitors, ...missing])]
  const monitorDefinitions = monitorPlan.map((monitor) => {
    if (monitor === 'reserve_health_monitor') return RESERVE_HEALTH_MONITOR_DEFINITION
    return {
      monitor_id: monitor,
      watches: [monitor.replace('_monitor', '')],
      thresholds: { warning: 'configured_warning_threshold', critical: 'configured_critical_threshold' },
      on_warning: ['notify_owner'],
      on_critical: ['pause_or_escalate', 'notify_affected_actors'],
      audit_events: [`${monitor}_warning`, `${monitor}_critical`]
    }
  })

  return {
    valid: missing.length === 0,
    missing,
    monitorPlan,
    monitorThresholds: Object.fromEntries(monitorDefinitions.map((monitor) => [monitor.monitor_id, monitor.thresholds])),
    runtimeActions: [...new Set(monitorDefinitions.flatMap((monitor) => [...monitor.on_warning, ...monitor.on_critical]))],
    escalationMap: Object.fromEntries(monitorDefinitions.map((monitor) => [monitor.monitor_id, monitor.on_critical])),
    notificationRules: monitorDefinitions.map((monitor) => `${monitor.monitor_id}:notify_affected_actors`),
    auditEvents: [...new Set(monitorDefinitions.flatMap((monitor) => monitor.audit_events))],
    watchtowerSubscriptions: monitorPlan.map((monitor) => `watchtower.${monitor}`),
    doctorDiagnosticHooks: monitorPlan.map((monitor) => `doctor.${monitor}.health`),
    definitions: monitorDefinitions,
    checks: MONITOR_ATTACHMENT_CHECKS,
    outputs: MONITOR_ATTACHMENT_OUTPUTS
  }
}

export function checkUiTruth(financialState, uiState) {
  const forbidden = UI_BINDING_TRUTH_RULES[financialState]?.forbiddenDisplays ?? []
  const invalid = forbidden.includes(uiState)

  return {
    law: 'ui_truth_law',
    valid: !invalid,
    financialState,
    uiState,
    forbiddenDisplays: forbidden
  }
}

function normalizeVersionComparableList(value) {
  if (!value) return []
  const list = Array.isArray(value) ? value : Object.entries(value).map(([id, version]) => ({ id, version }))
  return list
    .map((item) => {
      if (typeof item === 'string') return item
      return [item.id, item.name, item.algorithm, item.version, item.status].filter(Boolean).join(':')
    })
    .sort()
}

function versionListsMatch(previousValue, nextValue) {
  return JSON.stringify(normalizeVersionComparableList(previousValue)) === JSON.stringify(normalizeVersionComparableList(nextValue))
}

export function checkVersionCompatibility(previousComponent, nextComponent) {
  const changes = []
  if (previousComponent.outputState !== nextComponent.outputState) changes.push('output_state')
  if (previousComponent.risk !== nextComponent.risk) changes.push('risk')
  if (previousComponent.consent !== nextComponent.consent) changes.push('consent')
  if (previousComponent.uiWording !== nextComponent.uiWording) changes.push('ui_wording')
  if (previousComponent.ledgerBehavior !== nextComponent.ledgerBehavior) changes.push('ledger_behavior')
  if (previousComponent.defaultHandling !== nextComponent.defaultHandling) changes.push('default_handling')
  if (previousComponent.approvalMode !== nextComponent.approvalMode) changes.push('approval_mode')
  if (previousComponent.riskLimits !== nextComponent.riskLimits) changes.push('risk_limits')
  if (previousComponent.releaseMode !== nextComponent.releaseMode) changes.push('release_mode')
  if (!versionListsMatch(previousComponent.stateMachine ?? previousComponent.stateTransitions, nextComponent.stateMachine ?? nextComponent.stateTransitions)) {
    changes.push('state_machine')
  }
  if (!versionListsMatch(previousComponent.complianceTags, nextComponent.complianceTags)) changes.push('compliance')
  if (!versionListsMatch(previousComponent.algorithms, nextComponent.algorithms)) changes.push('algorithm')
  if (!versionListsMatch(previousComponent.monitors, nextComponent.monitors)) changes.push('monitor')
  if (previousComponent.migrationPlan !== nextComponent.migrationPlan) changes.push('migration')
  if (previousComponent.kernelContract !== nextComponent.kernelContract) changes.push('kernel_contract')

  return {
    law: 'version_compatibility_law',
    compatible: changes.length === 0,
    changes,
    reviewFields: VERSIONED_COMPOSITION_REVIEW_FIELDS,
    dimensions: FINANCIAL_VERSION_DIMENSIONS,
    checks: VERSION_COMPATIBILITY_CHECKS,
    requiresReconsent: changes.includes('consent') || changes.includes('default_handling') || changes.includes('output_state'),
    requiresMigration: changes.some((change) => ['ledger_behavior', 'output_state', 'state_machine', 'migration', 'kernel_contract'].includes(change)),
    requiresSimulation: changes.some((change) => ['approval_mode', 'risk', 'risk_limits', 'release_mode', 'algorithm', 'monitor'].includes(change)),
    requiresGovernorReview: changes.some((change) => [
      'approval_mode',
      'risk',
      'risk_limits',
      'release_mode',
      'ledger_behavior',
      'compliance',
      'algorithm',
      'kernel_contract'
    ].includes(change))
  }
}

export function buildHierarchicalCompositionSignature(layers = HIERARCHICAL_COMPOSITION_EXAMPLES) {
  const levelOrder = COMPOSITION_LEVELS.map((level) => level.id)
  const issues = []
  let previousLevelIndex = -1

  const signatures = layers.map((layer) => {
    const levelIndex = levelOrder.indexOf(layer.level)
    const parts = layer.parts ?? layer.components ?? []
    const signature = layer.signature ?? layer.produces ?? null

    if (levelIndex === -1) issues.push(`unknown_level:${layer.level}`)
    if (levelIndex <= previousLevelIndex) issues.push(`non_ascending_level:${layer.level}`)
    if (!parts.length) issues.push(`missing_parts:${layer.level}`)
    if (!signature) issues.push(`missing_signature:${layer.level}`)

    previousLevelIndex = Math.max(previousLevelIndex, levelIndex)

    return {
      level: layer.level,
      parts,
      signature,
      canPromote: levelIndex !== -1 && parts.length > 0 && Boolean(signature)
    }
  })

  return {
    valid: issues.length === 0,
    issues,
    signatures,
    finalSignature: signatures.at(-1)?.signature ?? null
  }
}

export function checkPrincipleAlignment(composition) {
  const components = Array.isArray(composition)
    ? composition
    : composition.components ?? composition.parts ?? []
  const context = Array.isArray(composition) ? {} : composition
  const violations = []

  for (const component of components) {
    if (AURA_COMPOSITION_PRINCIPLE_GUARDS[component]) {
      violations.push({
        component,
        ...AURA_COMPOSITION_PRINCIPLE_GUARDS[component]
      })
    }
  }

  if (context.feesVisible === false) {
    violations.push({
      component: 'fee_visibility',
      ...AURA_COMPOSITION_PRINCIPLE_GUARDS.undisclosed_fee
    })
  }

  if (context.lockedFundsShownAsAvailable) {
    violations.push({
      component: 'ui_binding',
      ...AURA_COMPOSITION_PRINCIPLE_GUARDS.locked_money_as_available_balance
    })
  }

  if (context.actorRiskWithoutConsent) {
    violations.push({
      component: 'risk_transfer',
      ...AURA_COMPOSITION_PRINCIPLE_GUARDS.member_pays_loss_without_consent
    })
  }

  return {
    valid: violations.length === 0,
    violations,
    requiredGuards: [...new Set(violations.map((violation) => violation.remedy))]
  }
}

export function classifyCompositionForGovernor(composition) {
  const components = new Set(composition.components ?? composition.parts ?? [])
  const tags = new Set(composition.complianceTags ?? composition.compliance_tags ?? [])
  let riskScore = 0
  let userHarmPotential = 'low'
  let fraudPotential = 'low'
  let operationalComplexity = 'low'

  if (components.has('school_fee_restriction') || components.has('restricted_wallet')) {
    riskScore += 2
    tags.add('restricted_funds')
    userHarmPotential = 'medium'
  }

  if (components.has('group_wallet') || components.has('rotating_payout_queue') || components.has('daily_contribution')) {
    riskScore += 3
    tags.add('pooled_contributions')
    operationalComplexity = 'high'
  }

  if (components.has('reserve_pool') || components.has('pooled_risk') || components.has('loss_coverage')) {
    riskScore += 4
    tags.add('pooled_loss_or_reserve')
    userHarmPotential = 'high'
  }

  if (components.has('credit_advance') || components.has('repayment_obligation') || components.has('advance_now_repay_later')) {
    riskScore += 5
    tags.add('credit_like')
    userHarmPotential = 'high'
  }

  if (components.has('proof_gate') || components.has('photo_proof') || components.has('gps_verification')) {
    riskScore += 1
    tags.add('evidence_verification')
    fraudPotential = 'medium'
  }

  if (components.has('fraudulent_financial_structure')) {
    riskScore += 8
    tags.add('fraud_structure')
    fraudPotential = 'high'
  }

  const riskClass = riskScore >= 8 ? 'critical' : riskScore >= 5 ? 'high' : riskScore >= 3 ? 'medium' : 'low'
  const requiredReviewLevel = riskScore >= 10
    ? 'block'
    : riskScore >= 8
      ? 'restricted_or_licensed_mode'
      : riskScore >= 5
        ? 'governor_review'
        : riskScore >= 3
          ? 'policy_review'
          : 'auto_release'

  return {
    riskClass,
    complianceTags: [...tags],
    userHarmPotential,
    fraudPotential,
    operationalComplexity,
    requiredReviewLevel,
    releaseModeRecommendation: requiredReviewLevel === 'auto_release'
      ? 'auto_release_possible'
      : requiredReviewLevel,
    reviewLevels: GOVERNOR_REVIEW_LEVELS
  }
}

export function evaluateRuntimeCompositionEvolution(manifest, event) {
  const eventKey = typeof event === 'string' ? event : event.event
  const requestedMutation = typeof event === 'string' ? [] : event.requestedMutation ?? []
  const branches = manifest.runtimeBranches ?? manifest.runtime_branches ?? {}
  const branch = branches[eventKey]
  const forbiddenMutations = requestedMutation.filter((component) => RUNTIME_ADAPTIVE_FORBIDDEN_MUTATIONS.includes(component))

  if (!branch) {
    return {
      allowed: false,
      event: eventKey,
      activatedComponents: [],
      route: 'governor_review',
      reason: 'runtime_branch_not_preapproved',
      forbiddenMutations,
      requirements: RUNTIME_ADAPTIVE_REQUIREMENTS
    }
  }

  const activatedComponents = branch.activate ?? branch.activatedComponents ?? []
  const allowedMutation = requestedMutation.every((component) => activatedComponents.includes(component))
  const priorConsent = branch.priorConsent ?? branch.preConsented ?? false
  const fairMutation = forbiddenMutations.length === 0

  return {
    allowed: allowedMutation && priorConsent && fairMutation,
    event: eventKey,
    activatedComponents,
    route: allowedMutation && priorConsent && fairMutation ? 'activate_preapproved_branch' : 'governor_review',
    reason: allowedMutation && priorConsent && fairMutation
      ? 'runtime_branch_pre_modeled'
      : !priorConsent
        ? 'runtime_branch_missing_prior_consent'
        : !fairMutation
          ? 'runtime_mutation_forbidden_after_join'
          : 'requested_mutation_not_in_preapproved_branch',
    forbiddenMutations,
    requirements: RUNTIME_ADAPTIVE_REQUIREMENTS
  }
}

export function reviewVersionMigration(previousComponent, nextComponent) {
  const compatibility = checkVersionCompatibility(previousComponent, nextComponent)
  const changed = []

  if (!versionListsMatch(previousComponent.stateTransitions ?? previousComponent.stateMachine, nextComponent.stateTransitions ?? nextComponent.stateMachine)) {
    changed.push('changes_state_transitions')
  }
  if (previousComponent.outputState !== nextComponent.outputState) changed.push('changes_output_state')
  if (previousComponent.userRights !== nextComponent.userRights) changed.push('changes_user_rights')
  if (previousComponent.releaseConditions !== nextComponent.releaseConditions) changed.push('changes_release_conditions')
  if (previousComponent.refundBehavior !== nextComponent.refundBehavior) changed.push('changes_refund_behavior')
  if (previousComponent.fees !== nextComponent.fees) changed.push('changes_fees')
  if (previousComponent.userObligations !== nextComponent.userObligations) changed.push('changes_user_obligations')
  if (previousComponent.riskExposure !== nextComponent.riskExposure) changed.push('changes_risk_exposure')
  if (previousComponent.uiWording !== nextComponent.uiWording) changed.push('changes_ui_wording')
  if (previousComponent.ledgerBehavior !== nextComponent.ledgerBehavior) changed.push('changes_ledger_behavior')
  if (previousComponent.auditTrail !== nextComponent.auditTrail) changed.push('affects_audit_trails')
  if (compatibility.requiresSimulation) changed.push('requires_new_simulation')
  if (compatibility.requiresGovernorReview) changed.push('requires_governor_review')
  if (compatibility.requiresReconsent || changed.some((field) => [
    'changes_state_transitions',
    'changes_output_state',
    'changes_user_rights',
    'changes_release_conditions',
    'changes_refund_behavior',
    'changes_fees',
    'changes_user_obligations',
    'changes_ui_wording'
  ].includes(field))) {
    changed.push('requires_reconsent')
  }

  const uniqueChanges = [...new Set(changed)]

  return {
    questions: VERSION_MIGRATION_QUESTIONS,
    changed: uniqueChanges,
    compatibleWithoutReconsent: compatibility.compatible && uniqueChanges.length === 0,
    requiresReconsent: uniqueChanges.includes('requires_reconsent'),
    requiresAuditMigration: uniqueChanges.includes('affects_audit_trails') || compatibility.requiresMigration,
    requiresSimulation: uniqueChanges.includes('requires_new_simulation'),
    requiresGovernorReview: uniqueChanges.includes('requires_governor_review'),
    decision: uniqueChanges.length ? 'migration_review_required' : 'compatible'
  }
}

function compositionPartId(part) {
  if (typeof part === 'string') return part
  return part.id ?? part.name ?? part.algorithm ?? part.guard_id ?? 'unnamed_component'
}

function compositionPartVersion(part, fallbackVersions = {}) {
  if (typeof part === 'string') return fallbackVersions[part] ?? ALGORITHM_SIGNATURES[part]?.version ?? '1.0.0'
  return part.version ?? fallbackVersions[compositionPartId(part)] ?? '1.0.0'
}

export function createCompositionLockfile(manifest = safeSendProductCompositionManifest, options = {}) {
  const componentVersions = options.componentVersions ?? {}
  const algorithmVersions = options.algorithmVersions ?? {}
  const guardVersions = options.guardVersions ?? {}
  const components = Object.fromEntries(
    (manifest.components ?? []).map((component) => [
      compositionPartId(component),
      compositionPartVersion(component, componentVersions)
    ])
  )
  const algorithms = Object.fromEntries(
    (manifest.algorithms ?? []).map((algorithm) => [
      compositionPartId(algorithm),
      algorithmVersions[compositionPartId(algorithm)] ?? compositionPartVersion(algorithm, algorithmVersions)
    ])
  )
  const guards = Object.fromEntries(
    (manifest.guards ?? []).map((guard) => [compositionPartId(guard), guardVersions[compositionPartId(guard)] ?? '1.0.0'])
  )

  return {
    composition_lockfile: {
      product_id: manifest.product_id ?? manifest.productId,
      composition_version: manifest.composition_version ?? manifest.compositionVersion ?? '1.0.0',
      components,
      algorithms,
      guards
    },
    purpose: 'reproducibility_and_audit'
  }
}

export function planVersionedCompositionUpgrade(previousComponent, nextComponent, options = {}) {
  const compatibilityReport = checkVersionCompatibility(previousComponent, nextComponent)
  const migrationReview = reviewVersionMigration(previousComponent, nextComponent)
  const versionLockfile = createCompositionLockfile(options.manifest ?? safeSendProductCompositionManifest, options.lockfileOptions)
  const blockedUpgradeFindings = []

  if (nextComponent.refundBehavior === 'removed') blockedUpgradeFindings.push('refund_rule_removed')
  if (nextComponent.releaseMode === 'auto_release' && !compatibilityReport.requiresReconsent) {
    blockedUpgradeFindings.push('auto_release_upgrade_without_reconsent')
  }
  if (nextComponent.requiresThirdPartyProviderApi) blockedUpgradeFindings.push('third_party_provider_api_skipped')

  return {
    versionLockfile,
    compatibilityReport,
    upgradePlan: blockedUpgradeFindings.length
      ? ['hold_current_version', 'send_to_governor_review', 'repair_blocked_findings']
      : ['freeze_previous_lockfile', 'simulate_new_version', 'migrate_if_compatible', 'publish_new_lockfile'],
    rollbackPlan: [
      'restore_previous_lockfile',
      'disable_new_component_versions',
      'restore_previous_kernel_contract',
      'emit_rollback_audit_event'
    ],
    migrationRequirements: migrationReview.changed.filter((change) => ![
      'requires_reconsent',
      'requires_new_simulation',
      'requires_governor_review'
    ].includes(change)),
    reConsentRequirements: migrationReview.requiresReconsent ? ['capture_new_user_consent_before_activation'] : [],
    blockedUpgradeFindings,
    outputs: VERSION_COMPATIBILITY_OUTPUTS
  }
}

export function generateCompositionGraphCandidates({
  intent = 'contractor_payment',
  amount = 0,
  bts = 50,
  context = {},
  includeProviderApiCandidates = false
} = {}) {
  const skippedCandidates = CONTRACTOR_PAYMENT_GRAPH_CANDIDATES
    .filter((candidate) => candidate.requiresThirdPartyProviderApi && !includeProviderApiCandidates)
    .map((candidate) => ({ ...candidate, skippedReason: 'third_party_provider_api' }))
  const candidates = CONTRACTOR_PAYMENT_GRAPH_CANDIDATES
    .filter((candidate) => includeProviderApiCandidates || !candidate.requiresThirdPartyProviderApi)
    .map((candidate) => {
      const amountRisk = amount > 250000 ? 8 : amount > 100000 ? 4 : 0
      const btsPenalty = bts < 45 ? 8 : bts < 60 ? 4 : 0
      const contextBonus = context.requiresLocationProof && candidate.components.includes('gps_verification') ? 6 : 0
      const rankScore = candidate.safety + candidate.user_trust + contextBonus - candidate.friction - candidate.cost - candidate.compliance_burden - amountRisk - btsPenalty
      return { ...candidate, intent, rankScore }
    })
    .sort((a, b) => b.rankScore - a.rankScore)

  return {
    candidates,
    skippedCandidates,
    rankingSignals: COMPOSITION_GRAPH_BUILDER_RANKING_SIGNALS,
    requiredMissingInformation: ['transaction_amount', 'proof_type', 'refund_deadline', 'dispute_policy'],
    initialDependencyList: [...new Set(candidates.flatMap((candidate) => candidate.components))],
    initialTypeRiskAssumptions: ['escrowed_funds_must_feed_controlled_funds', 'release_authorization_must_be_guarded'],
    outputs: COMPOSITION_GRAPH_BUILDER_OUTPUTS
  }
}

export function buildDraftCompositionGraph({
  productId = 'aura.safesend.proof_gated_payment',
  manifest = safeSendProductCompositionManifest,
  intent = 'contractor_payment',
  jurisdictionContext = 'global',
  tenantConfiguration = {},
  availableComponentVersions = {}
} = {}) {
  const candidateReview = generateCompositionGraphCandidates({
    intent,
    amount: tenantConfiguration.amount ?? 0,
    bts: tenantConfiguration.bts ?? 50,
    context: tenantConfiguration
  })
  const graphComponents = (manifest.components ?? []).map((component) => compositionPartId(component))
  const nodes = [...new Set([
    ...graphComponents,
    'photo_proof',
    'gps_verification',
    'conditional_release',
    'refund_timer',
    'dispute_workflow'
  ])]
  const edges = (manifest.connections ?? []).map((connection) => ({
    from: connection.from,
    to: connection.to
  }))
  const componentVersions = Object.fromEntries(nodes.map((node) => [
    node,
    availableComponentVersions[node] ?? (manifest.components ?? []).find((component) => compositionPartId(component) === node)?.version ?? '1.0.0'
  ]))

  const draftCompositionGraph = {
    product_id: productId,
    nodes,
    edges,
    states: manifest.states ?? ['draft', 'funded', 'escrowed', 'proof_pending', 'released', 'refunded', 'disputed'],
    actors: manifest.actors ?? [{ role: 'sender' }, { role: 'recipient' }, { role: 'verifier' }],
    guards: manifest.guards ?? [],
    ledger_templates: manifest.ledger_templates ?? [],
    policies: manifest.policies ?? ['refund_on_expiry', 'manual_review_on_suspicion'],
    monitors: manifest.monitors ?? [],
    algorithms: manifest.algorithms ?? [],
    ui_bindings: manifest.ui_bindings ?? {},
    compliance_tags: manifest.compliance_tags ?? [],
    failure_paths: manifest.failure_paths ?? [],
    required_tests: manifest.required_tests ?? [],
    component_versions: componentVersions,
    jurisdiction_context: jurisdictionContext
  }

  return {
    draftCompositionGraph,
    candidateAlternatives: candidateReview.candidates,
    skippedCandidates: candidateReview.skippedCandidates,
    requiredMissingInformation: candidateReview.requiredMissingInformation,
    initialDependencyList: candidateReview.initialDependencyList,
    initialTypeRiskAssumptions: candidateReview.initialTypeRiskAssumptions,
    inputs: COMPOSITION_GRAPH_BUILDER_INPUTS,
    outputs: COMPOSITION_GRAPH_BUILDER_OUTPUTS
  }
}

export function generateProductCompositionManifest(graph, options = {}) {
  const components = (graph.components ?? graph.nodes ?? []).map((component) => {
    if (typeof component !== 'string') return component
    return {
      id: component,
      type: component.includes('timer') || component.includes('proof') ? 'mini_primitive' : 'primitive',
      version: graph.component_versions?.[component] ?? options.componentVersions?.[component] ?? '1.0.0'
    }
  })

  return {
    product_id: options.productId ?? graph.product_id ?? graph.productId,
    composition_version: options.compositionVersion ?? '1.0.0',
    capability_type: options.capabilityType ?? 'proof_gated_escrow_payment',
    release_mode: options.releaseMode ?? 'supervised_auto_release',
    components,
    connections: graph.connections ?? graph.edges ?? [],
    actors: graph.actors ?? [],
    states: graph.states ?? [],
    guards: graph.guards ?? [],
    ledger_templates: graph.ledger_templates ?? graph.ledgerTemplates ?? [],
    monitors: graph.monitors ?? graph.runtimeMonitors ?? [],
    ui_bindings: graph.ui_bindings ?? graph.uiBindings ?? {},
    algorithms: graph.algorithms ?? [],
    compliance_tags: graph.compliance_tags ?? graph.complianceTags ?? [],
    failure_paths: graph.failure_paths ?? graph.failurePaths ?? [],
    required_tests: graph.required_tests ?? graph.requiredTests ?? [],
    downstreamConsumers: COMPOSITION_MANIFEST_DOWNSTREAM_CONSUMERS,
    fields: PRODUCT_COMPOSITION_MANIFEST_FIELDS
  }
}

export function generateCompositionTestCases(productType, composition = {}) {
  const components = new Set(composition.components ?? composition.parts ?? [])
  const tests = []

  if (productType === 'safesend' || components.has('escrow') || components.has('proof_gate')) {
    tests.push(
      {
        id: 'recipient_claim_before_proof',
        expected: 'blocked',
        covers: ['proof_gate', 'conditional_release']
      },
      {
        id: 'proof_approved_before_deadline',
        expected: 'release',
        covers: ['proof_gate', 'deadline']
      },
      {
        id: 'proof_deadline_expired',
        expected: 'refund',
        covers: ['refund_timer', 'failure_path']
      },
      {
        id: 'gps_mismatch',
        expected: 'manual_review_or_rejection',
        covers: ['gps_verification', 'proof_gate']
      },
      {
        id: 'dispute_opened_before_release',
        expected: 'freeze',
        covers: ['dispute_workflow', 'escrow_hold']
      },
      {
        id: 'refund_ledger_balances',
        expected: 'balanced',
        covers: ['ledger_contract', 'refund_path']
      }
    )
  }

  if (productType === 'daily_rosca_default_protected_group' || components.has('rotating_payout_queue')) {
    tests.push(
      {
        id: 'all_members_contribute',
        expected: 'payout_release',
        covers: ['daily_contribution', 'rotating_payout_queue']
      },
      {
        id: 'late_daily_contribution',
        expected: 'grace_then_default_review',
        covers: ['daily_contribution', 'obligation_tracker']
      },
      {
        id: 'one_member_misses_contribution',
        expected: 'grace_default_path',
        covers: ['default_handler', 'member_consent']
      },
      {
        id: 'default_after_payout',
        expected: 'activate_default_branch',
        covers: ['default_handler', 'tail_lock', 'reserve_pool']
      },
      {
        id: 'two_member_defaults',
        expected: 'pause_or_reserve_review',
        covers: ['reserve_pool', 'payout_pause']
      },
      {
        id: 'reserve_depletion',
        expected: 'block_next_payout_until_fundable',
        covers: ['fundability_guard', 'reserve_health_monitor']
      },
      {
        id: 'organizer_attempts_unauthorized_payout_change',
        expected: 'blocked',
        covers: ['payout_order_rule', 'permission_contract']
      }
    )
  }

  if (components.has('school_fee_restriction')) {
    tests.push(
      {
        id: 'funds_sent_to_approved_school',
        expected: 'allowed',
        covers: ['approved_payee', 'restricted_release']
      },
      {
        id: 'funds_sent_to_unapproved_recipient',
        expected: 'blocked',
        covers: ['purpose_restriction', 'approved_payee']
      },
      {
        id: 'emergency_unlock_requested',
        expected: 'approval_disclosure_path',
        covers: ['emergency_unlock_policy', 'guardian_approval']
      },
      {
        id: 'contributor_receipt_generated',
        expected: 'visible_receipt',
        covers: ['contributor_receipts', 'audit_trail']
      },
      {
        id: 'restricted_funds_to_cash_withdrawal',
        expected: 'blocked',
        covers: ['purpose_restriction', 'approved_payee']
      }
    )
  }

  return {
    productType,
    tests,
    generated: tests.length,
    categories: TEST_GENERATOR_CATEGORIES,
    outputs: TEST_GENERATOR_OUTPUTS,
    completeEnoughForRelease: tests.length > 0
  }
}

export function generateCompositionTestSuite(productType, composition = {}) {
  const base = generateCompositionTestCases(productType, composition)
  const isSafeSend = productType === 'safesend' || productType === 'proof_gated_escrow_payment'
  const isSusu = productType === 'daily_rosca_default_protected_group' || productType === 'protected_susu_circle'
  const exampleTests = [
    ...(isSafeSend ? SAFESEND_GENERATED_TEST_EXAMPLES : []),
    ...(isSusu ? SUSU_GENERATED_TEST_EXAMPLES.map((name) => ({ name, expected: { result: name.split('_to_').at(-1) } })) : [])
  ]
  const unitTestTemplates = base.tests.filter((test) => test.covers.some((cover) => ['proof_gate', 'fundability_guard', 'permission_contract'].includes(cover)))
  const ledgerTestTemplates = base.tests.filter((test) => test.covers.some((cover) => cover.includes('ledger') || cover.includes('refund_path')))
  const stateMachineTestTemplates = exampleTests.filter((test) => test.setup?.money_state || test.expected?.money_state)
  const uiTruthTestCases = base.tests.filter((test) => test.covers.some((cover) => ['ui_binding', 'protected_money_card'].includes(cover)))
  const monitorTriggerTestCases = base.tests.filter((test) => test.covers.some((cover) => cover.includes('monitor')))
  const migrationTestCases = ['version_change_requires_compatibility_report', 'reconsent_required_for_obligation_change']

  return {
    testSuiteSpecification: {
      productType,
      categories: TEST_GENERATOR_CATEGORIES,
      generatedFrom: ['composition_graph', 'type_rules', 'invariants', 'failure_paths', 'ledger_templates', 'capability_type_contract']
    },
    unitTestTemplates,
    integrationTestTemplates: exampleTests,
    ledgerTestTemplates,
    stateMachineTestTemplates,
    uiTruthTestCases,
    monitorTriggerTestCases,
    migrationTestCases,
    outputs: TEST_GENERATOR_OUTPUTS
  }
}

export function generateSimulationScenarioPack(productType, composition = {}) {
  const components = new Set(composition.components ?? composition.parts ?? [])
  const isSusu = productType === 'protected_susu_circle' || components.has('rotating_payout_queue')
  const isSafeSend = productType === 'safesend' || productType === 'safesend_proof_gated_payment' || components.has('proof_gate')
  const scenarioPack = isSusu
    ? PROTECTED_SUSU_SCENARIO_PACK
    : isSafeSend
      ? SAFESEND_SCENARIO_PACK
      : {
          scenario_pack: productType,
          scenarios: [
            ...new Set([
              ...(COMPOSITION_SIMULATION_SCENARIOS[productType] ?? []),
              ...SIMULATION_SCENARIO_TYPES.map((type) => type.replace('_scenarios', ''))
            ])
          ]
        }

  return {
    ...scenarioPack,
    questions: SIMULATION_SCENARIO_GENERATOR_QUESTIONS,
    scenarioTypes: SIMULATION_SCENARIO_TYPES,
    scenarioVariables: ['amount', 'deadline', 'BTS', 'reserve_ratio', 'dispute_state', 'settlement_state'],
    adversarialCases: (scenarioPack.scenarios ?? []).filter((scenario) => (
      scenario.includes('fraud')
      || scenario.includes('suspicious')
      || scenario.includes('manipulate')
      || scenario.includes('dispute')
      || scenario.includes('default')
    )),
    passFailThresholds: isSusu
      ? SIMULATION_PASS_CRITERIA
      : ['ledger_never_unbalanced', 'no_release_without_approved_proof', 'refund_path_executes_after_deadline'],
    requiredSimulationCount: Math.max(25, (scenarioPack.scenarios ?? []).length * 5),
    stressSeverityLevel: isSusu || isSafeSend ? 'high' : 'medium',
    doctorReviewRequirements: ['doctor_review_required_for_failed_thresholds'],
    releaseGatingRequirements: ['block_release_until_required_simulations_pass'],
    outputs: SIMULATION_SCENARIO_GENERATOR_OUTPUTS,
    stressTargets: [
      'time',
      'adversarial_behavior',
      'edge_cases',
      'financial_stress',
      'operational_load'
    ]
  }
}

export function buildCapabilityDoctorScanPackage({
  productPhysicsManifest,
  productCompositionManifest,
  compositionGraph,
  typeCompatibilityResults,
  stateValidationResults,
  ledgerValidationResults,
  consentCoverageResults,
  riskManifest,
  complianceTags,
  uiBindingResults,
  monitorPlan,
  algorithmBindings,
  versionLockfile,
  generatedTests,
  simulationScenarios,
  simulationResults,
  openFindings = [],
  repairCandidates = []
} = {}) {
  const doctorScanPackage = {
    product_physics_manifest: productPhysicsManifest,
    product_composition_manifest: productCompositionManifest,
    composition_graph: compositionGraph,
    type_compatibility_results: typeCompatibilityResults,
    state_validation_results: stateValidationResults,
    ledger_validation_results: ledgerValidationResults,
    consent_coverage_results: consentCoverageResults,
    risk_manifest: riskManifest,
    compliance_tags: complianceTags,
    ui_binding_results: uiBindingResults,
    monitor_plan: monitorPlan,
    algorithm_bindings: algorithmBindings,
    version_lockfile: versionLockfile,
    generated_tests: generatedTests,
    simulation_scenarios: simulationScenarios,
    simulation_results: simulationResults,
    open_findings: openFindings,
    repair_candidates: repairCandidates
  }
  const missing = CAPABILITY_DOCTOR_INTERFACE_INPUTS.filter((field) => doctorScanPackage[field] === undefined)

  return {
    valid: missing.length === 0,
    missing,
    doctorScanPackage,
    inputs: CAPABILITY_DOCTOR_INTERFACE_INPUTS,
    outputs: CAPABILITY_DOCTOR_INTERFACE_OUTPUTS
  }
}

export function routeDoctorReport(report = SAFESEND_DOCTOR_REPORT_EXAMPLE) {
  const findings = report.findings ?? []
  const routes = findings.map((finding) => ({
    category: finding.category,
    route: CAPABILITY_DOCTOR_FINDING_ROUTES[finding.category] ?? 'capability_doctor_triage',
    repair: finding.repair ?? []
  }))
  const requiredRevalidationActions = [
    ...new Set(routes.flatMap((route) => [
      route.route === 'composition_graph_builder' ? 'revalidate_composition_graph' : null,
      route.route === 'manifest_generator' ? 'regenerate_manifest_and_lockfile' : null,
      route.route === 'ui_composer' ? 'rerun_ui_truth_validation' : null,
      route.route === 'guard_insertion_engine' ? 'rerun_guard_sufficiency' : null,
      route.route === 'monitor_attachment_engine' ? 'rerun_monitor_attachment' : null,
      route.route === 'governor' ? 'rerun_governor_review' : null,
      route.route === 'kernel_exporter' ? 'regenerate_kernel_contract' : null
    ].filter(Boolean)))
  ]

  return {
    doctorReport: report,
    routes,
    repairPlan: [...new Set(routes.flatMap((route) => route.repair))],
    releaseRecommendation: report.release_recommendation ?? {},
    blockPauseApproveStatus: report.doctor_report?.status ?? 'unknown',
    requiredRevalidationActions,
    outputs: CAPABILITY_DOCTOR_INTERFACE_OUTPUTS
  }
}

export function buildSimulationBriefFromComposition(composition) {
  const components = composition.components ?? composition.parts ?? []
  const componentSet = new Set(components)
  const failureModes = [
    ...(composition.failureModes ?? composition.failure_modes ?? []),
    ...(componentSet.has('proof_gate') ? ['proof_fraudulent', 'gps_fails'] : []),
    ...(componentSet.has('rotating_payout_queue') ? ['two_members_default', 'reserve_depleted'] : []),
    ...(componentSet.has('restricted_wallet') || componentSet.has('school_fee_restriction') ? ['restriction_override_attempt'] : [])
  ]

  return {
    movingParts: components,
    actors: composition.actors ?? ['user', 'counterparty', 'system'],
    moneyStates: composition.moneyStates ?? composition.money_states ?? composition.states ?? ['available_funds', 'held_funds', 'released_or_refunded_funds'],
    moneyFlows: composition.flows ?? composition.moneyFlows ?? ['fund', 'hold_or_route', 'release_or_refund'],
    obligations: composition.obligations ?? [],
    claims: composition.claims ?? [],
    failureModes: [...new Set(failureModes)],
    guards: composition.guards ?? [],
    riskPoints: [
      ...(componentSet.has('reserve_pool') ? ['reserve_depletion'] : []),
      ...(componentSet.has('rotating_payout_queue') ? ['post_payout_default'] : []),
      ...(componentSet.has('proof_gate') ? ['fraudulent_evidence'] : []),
      ...(componentSet.has('restricted_wallet') ? ['restriction_bypass'] : [])
    ],
    runtimeBranches: Object.keys(composition.runtimeBranches ?? composition.runtime_branches ?? {}),
    invariants: composition.invariants ?? [
      'ledger_must_balance',
      'locked_funds_cannot_be_spent',
      'release_requires_satisfied_conditions',
      'consent_required_for_risk'
    ],
    scenarios: [
      ...new Set([
        ...SIMULATION_ENGINE_SCENARIOS,
        ...generateCompositionTestCases(composition.product ?? 'composition', composition).tests.map((test) => test.id)
      ])
    ],
    importantFor: SIMULATION_IMPORTANT_PRODUCTS
  }
}

export function compileKernelContractsFromComposition(composition) {
  const missing = []
  const allowedStates = composition.states ?? composition.allowedStates ?? []
  const allowedTransitions = composition.transitions ?? composition.allowedTransitions ?? []
  const ledgerEntries = composition.ledgerEntries ?? composition.ledger_effects ?? []
  const invariants = composition.invariants ?? []
  const guards = composition.guards ?? []
  const permissions = composition.permissions ?? []
  const failurePaths = composition.failurePaths ?? composition.failure_paths ?? []
  const auditEvents = composition.auditEvents ?? composition.audit_events ?? []
  const monitorHooks = composition.monitorHooks ?? composition.monitors ?? composition.runtimeMonitors ?? []
  const uiStateContract = composition.uiStateContract ?? composition.ui_bindings ?? composition.uiBindings ?? {}
  const migrationRules = composition.migrationRules ?? composition.migration_contract ?? []
  const commandContracts = composition.commandContracts ?? [SAFESEND_RELEASE_KERNEL_COMMAND]
  const guardFailurePolicy = composition.guardFailurePolicy ?? KERNEL_GUARD_FAILURE_POLICY
  const invariantSet = [...new Set([...KERNEL_INVARIANTS, ...invariants])]

  if (!allowedStates.length) missing.push('allowed_states')
  if (!allowedTransitions.length) missing.push('allowed_transitions')
  if (!ledgerEntries.length) missing.push('ledger_entries')
  if (!invariants.length) missing.push('invariants')
  if (!guards.length) missing.push('guards')
  if (!permissions.length) missing.push('permissions')
  if (!failurePaths.length) missing.push('failure_paths')
  if (!auditEvents.length) missing.push('audit_events')

  return {
    deterministic: true,
    executable: missing.length === 0,
    missing,
    trustBoundary: 'llm_may_propose_kernel_enforces',
    bundleTypes: KERNEL_CONTRACT_BUNDLE_TYPES,
    enforcedSurfaces: KERNEL_ENFORCED_SURFACES,
    outputs: KERNEL_CONTRACT_EXPORTER_OUTPUTS,
    contracts: {
      stateMachineContract: { allowedStates, allowedTransitions },
      ledgerContract: {
        entries: ledgerEntries,
        templates: composition.ledger_templates ?? composition.ledgerTemplates ?? [],
        invariant: 'balanced_debits_and_credits'
      },
      permissionContract: { permissions },
      guardContract: { guards, onGuardFailure: guardFailurePolicy },
      invariantContract: { invariants: invariantSet },
      eventContract: { auditEvents, failurePaths },
      failureRecoveryContract: { failurePaths },
      auditContract: { auditEvents },
      monitorHookContract: { monitorHooks },
      uiStateContract,
      migrationContract: { migrationRules },
      commandContracts,
      deterministicRule:
        'if_state_escrowed_and_proof_approved_and_no_active_dispute_then_release_else_block'
    }
  }
}

export function exportKernelContractBundle(composition, commandContracts = [SAFESEND_RELEASE_KERNEL_COMMAND]) {
  const bundle = compileKernelContractsFromComposition({ ...composition, commandContracts })
  return {
    kernelExportPackageInput: bundle,
    commandContracts,
    deterministicOnly: true,
    aiBoundary: 'ai_may_interpret_draft_explain_and_suggest_but_never_directly_move_money',
    outputs: KERNEL_CONTRACT_EXPORTER_OUTPUTS
  }
}

export function compileContractorPhotoProofCapabilityExample() {
  const graphBuilderOutput = buildDraftCompositionGraph({
    manifest: safeSendProductCompositionManifest,
    tenantConfiguration: { amount: 100000, requiresLocationProof: true }
  })
  const manifest = generateProductCompositionManifest(graphBuilderOutput.draftCompositionGraph, {
    productId: 'aura.safesend.contractor_photo_proof_payment',
    compositionVersion: '1.0.0',
    capabilityType: 'proof_gated_escrow_payment',
    releaseMode: 'supervised_auto_release'
  })
  const tests = generateCompositionTestSuite('safesend', {
    components: ['escrow', 'proof_gate', 'refund_timer', 'dispute_workflow']
  })
  const simulations = generateSimulationScenarioPack('safesend', {
    components: ['escrow_hold', 'proof_gate', 'refund_timer', 'dispute_workflow']
  })
  const kernel = exportKernelContractBundle({
    states: manifest.states,
    transitions: [['draft', 'funded'], ['funded', 'escrowed'], ['escrowed', 'proof_pending'], ['proof_pending', 'released'], ['proof_pending', 'refunded']],
    ledgerEntries: ['escrow_hold', 'escrow_release', 'escrow_refund'],
    ledger_templates: manifest.ledger_templates,
    invariants: KERNEL_INVARIANTS,
    guards: ['proof_approval_guard', 'no_active_dispute_guard', 'identity_guard'],
    permissions: ['sender_can_fund', 'recipient_can_submit_proof', 'kernel_can_release_after_guards'],
    failurePaths: manifest.failure_paths,
    auditEvents: SAFESEND_RELEASE_KERNEL_COMMAND.audit_events,
    monitors: manifest.monitors,
    uiBindings: manifest.ui_bindings,
    migrationRules: ['version_change_requires_compatibility_report']
  })

  return {
    request: AURA_CAPABILITY_COMPILER_PROMISE.user_request,
    userTruth: AURA_CAPABILITY_COMPILER_PROMISE.user_truth,
    flow: CONTRACTOR_PHOTO_PROOF_AURA_FLOW,
    graph: graphBuilderOutput.draftCompositionGraph,
    manifest,
    tests,
    simulations,
    kernel,
    doctrine: AURA_COMPOSITION_FINAL_DOCTRINE
  }
}

export function mapFormlessIntentToCompositionStructure(intent) {
  const lower = intent.toLowerCase()
  const hiddenStructure = {
    actors: [],
    states: [],
    flows: [],
    claims: [],
    obligations: [],
    guards: [],
    policies: [],
    primitives: [],
    algorithms: [],
    uiBindings: [],
    monitors: [],
    complianceTags: []
  }

  if (lower.includes('rent')) {
    hiddenStructure.actors.push('user', 'landlord')
    hiddenStructure.states.push('protected_rent_funds', 'due_soon', 'released_to_landlord')
    hiddenStructure.flows.push('salary_to_rent_wallet', 'rent_wallet_to_landlord')
    hiddenStructure.obligations.push('rent_due_obligation')
    hiddenStructure.guards.push('due_date_guard')
    hiddenStructure.primitives.push('goal_wallet', 'restricted_release')
    hiddenStructure.uiBindings.push('protected_not_available_balance')
    hiddenStructure.monitors.push('rent_due_monitor')
  }

  if (lower.includes('contractor')) {
    hiddenStructure.actors.push('payer', 'contractor', 'verifier')
    hiddenStructure.states.push('escrowed_funds', 'proof_pending', 'released_or_refunded')
    hiddenStructure.claims.push('contractor_conditional_claim')
    hiddenStructure.guards.push('proof_verification_guard')
    hiddenStructure.primitives.push('escrow', 'proof_gate', 'dispute_workflow')
    hiddenStructure.monitors.push('proof_deadline_monitor')
  }

  if (lower.includes('school')) {
    hiddenStructure.actors.push('parent', 'child', 'school', 'contributors')
    hiddenStructure.states.push('school_fee_restricted_funds')
    hiddenStructure.policies.push('approved_school_payee_only')
    hiddenStructure.primitives.push('goal_wallet', 'school_fee_restriction')
    hiddenStructure.complianceTags.push('restricted_funds')
  }

  if (lower.includes('group') || lower.includes('savings')) {
    hiddenStructure.actors.push('organizer', 'members')
    hiddenStructure.obligations.push('recurring_contribution')
    hiddenStructure.primitives.push('group_wallet', 'rotating_payout_queue')
    hiddenStructure.algorithms.push('payout_order')
    hiddenStructure.monitors.push('contribution_monitor', 'reserve_health_monitor')
    hiddenStructure.complianceTags.push('pooled_contributions')
  }

  if (lower.includes('split')) {
    hiddenStructure.flows.push('priority_waterfall')
    hiddenStructure.primitives.push('smart_split')
    hiddenStructure.policies.push('protected_obligations_before_discretionary')
  }

  return {
    userIntent: intent,
    hiddenStructure,
    userExperience: 'freedom',
    systemBehavior: 'disciplined_structure'
  }
}

export function validateComponentSignature(signature) {
  const missing = COMPONENT_SIGNATURE_SCHEMA_FIELDS.filter((field) => signature[field] === undefined)
  const validLevels = [...COMPONENT_SIGNATURE_REGISTRY_ITEM_TYPES, 'product']
  const issues = [...missing]

  if (signature.level && !validLevels.includes(signature.level)) issues.push('invalid_level')
  if (signature.inputStates?.length && signature.outputStates?.length === 0) issues.push('missing_output_state')
  if (signature.requiredPermissions?.length && !signature.requiredActors?.length) {
    issues.push('permissions_without_required_actor')
  }

  return {
    valid: issues.length === 0,
    issues,
    schemaFields: COMPONENT_SIGNATURE_SCHEMA_FIELDS
  }
}

export function normalizeComponentSignatureRegistryRecord(record) {
  return {
    id: record.id ?? record.component_id,
    name: record.name,
    level: record.level ?? record.component_level,
    version: record.version,
    inputStates: (record.inputStates ?? record.input_ports ?? []).map((port) => port.type ?? port),
    outputStates: (record.outputStates ?? record.output_ports ?? []).map((port) => port.type ?? port),
    requiredActors: record.requiredActors ?? record.required_actors ?? record.requires?.actors ?? [],
    optionalActors: record.optionalActors ?? record.optional_actors ?? [],
    requiredPermissions: record.requiredPermissions ?? record.required_permissions ?? record.requires?.permissions ?? [],
    requiredConsents: record.requiredConsents ?? record.required_consents ?? [],
    ledgerEffects: record.ledgerEffects ?? record.ledger_effects ?? record.produces?.ledgerEffects ?? [],
    introducedRisks: record.introducedRisks ?? record.introduced_risks ?? [],
    reducedRisks: record.reducedRisks ?? record.reduced_risks ?? [],
    requiredMitigations: record.requiredMitigations ?? record.required_mitigations ?? record.required_guards ?? [],
    failureModes: record.failureModes ?? record.failure_modes ?? [],
    requiredFailureHandlers: record.requiredFailureHandlers ?? record.required_failure_handlers ?? [],
    compatibleWith: record.compatibleWith ?? record.compatible_with ?? [],
    forbiddenWith: record.forbiddenWith ?? record.forbidden_with ?? [],
    requiredGuards: record.requiredGuards ?? record.required_guards ?? record.requires?.guards ?? [],
    requiredMonitors: record.requiredMonitors ?? record.required_monitors ?? [],
    complianceTags: record.complianceTags ?? record.compliance_tags ?? [],
    uiBindings: record.uiBindings ?? record.ui_requirements ?? [],
    testTemplates: record.testTemplates ?? record.test_templates ?? []
  }
}

export function validateComponentSignatureRegistryRecord(record) {
  const missing = COMPONENT_SIGNATURE_REGISTRY_RECORD_FIELDS.filter((field) => record[field] === undefined)
  const issues = [...missing]
  const validLevels = [...COMPONENT_SIGNATURE_REGISTRY_ITEM_TYPES, 'product']
  const validStatuses = ['draft', 'approved', 'deprecated', 'blocked', 'experimental']
  const ledgerEffects = record.ledger_effects ?? []

  if (record.level && !validLevels.includes(record.level)) issues.push('invalid_registry_level')
  if (record.status && !validStatuses.includes(record.status)) issues.push('invalid_registry_status')
  if (!record.input_ports?.length) issues.push('missing_input_port')
  if (!record.output_ports?.length) issues.push('missing_output_port')
  if (record.required_permissions?.length && !record.required_actors?.length) issues.push('permissions_without_required_actors')
  if (ledgerEffects.some((effect) => !effect.debit || !effect.credit || !effect.amount)) {
    issues.push('ledger_effect_without_debit_credit_amount')
  }
  if (record.introduced_risks?.length && !record.required_guards?.length) issues.push('introduced_risk_without_guard')
  if (!record.required_failure_handlers?.length) issues.push('missing_required_failure_handlers')
  if (!record.required_monitors?.length) issues.push('missing_required_monitors')
  if (!record.ui_requirements?.length) issues.push('missing_ui_requirements')
  if (!record.test_templates?.length) issues.push('missing_test_templates')

  return {
    valid: issues.length === 0,
    issues,
    missing,
    normalForm: normalizeComponentSignatureRegistryRecord(record),
    recordFields: COMPONENT_SIGNATURE_REGISTRY_RECORD_FIELDS,
    itemTypes: COMPONENT_SIGNATURE_REGISTRY_ITEM_TYPES,
    subRegistries: COMPONENT_SIGNATURE_SUB_REGISTRIES
  }
}

export function findComponentsByRegistryMeaning(query = {}) {
  const matches = Object.entries(PRIMITIVE_REGISTRY)
    .filter(([, signature]) => {
      const inputTypes = (signature.input_ports ?? []).map((port) => port.type ?? port)
      const outputTypes = (signature.output_ports ?? []).map((port) => port.type ?? port)
      const hasInputState = !query.inputMoneyState || inputTypes.some((type) => type.includes(query.inputMoneyState))
      const hasOutputState = !query.outputMoneyState || outputTypes.some((type) => type.includes(query.outputMoneyState))
      const hasReducedRisk = !query.riskReduced || (signature.reduced_risks ?? []).includes(query.riskReduced)
      const hasIntroducedRisk = !query.riskIntroduced || (signature.introduced_risks ?? []).includes(query.riskIntroduced)
      const hasGuard = !query.requiredGuard || (signature.required_guards ?? signature.requires?.guards ?? []).includes(query.requiredGuard)
      const hasCompliance = !query.complianceTag || (signature.compliance_tags ?? []).includes(query.complianceTag)
      const hasMonitor = !query.monitorRequirement || (signature.required_monitors ?? []).includes(query.monitorRequirement)

      return hasInputState && hasOutputState && hasReducedRisk && hasIntroducedRisk && hasGuard && hasCompliance && hasMonitor
    })
    .map(([id, signature]) => ({
      id,
      component: signature.component_id ?? signature.primitive ?? id,
      signature,
      version: signature.version,
      compatibility: signature.compatible_with ?? [],
      requiredDependencies: [
        ...(signature.required_guards ?? signature.requires?.guards ?? []),
        ...(signature.required_failure_handlers ?? []),
        ...(signature.required_monitors ?? [])
      ],
      knownRisks: [...new Set([...(signature.introduced_risks ?? []), ...(signature.failure_modes ?? [])])],
      knownRequiredGuards: signature.required_guards ?? signature.requires?.guards ?? [],
      knownFailurePaths: signature.required_failure_handlers ?? [],
      knownTests: signature.test_templates ?? [],
      knownUiRequirements: signature.ui_requirements ?? []
    }))

  return {
    query,
    indexes: COMPONENT_SIGNATURE_REGISTRY_INDEXES,
    outputs: COMPONENT_SIGNATURE_REGISTRY_OUTPUTS,
    candidates: matches
  }
}

export function checkTypeCompatibility(sourceType, targetType, context = {}) {
  const key = `${sourceType}->${targetType}`
  const adapter = TYPE_COMPATIBILITY_ADAPTERS[key]
  const contextPolicies = new Set(context.policies ?? [])
  const contextGuards = new Set(context.guards ?? [])
  const contextConsents = new Set(context.consents ?? [])
  const contextAuditPaths = new Set(context.auditPaths ?? [])

  if (targetType === 'any' || sourceType === targetType) {
    return {
      sourceType,
      targetType,
      decision: 'compatible',
      compatible: true,
      required: []
    }
  }

  if (!adapter) {
    return {
      sourceType,
      targetType,
      decision: 'incompatible',
      compatible: false,
      required: [],
      reason: 'no_declared_type_adapter_or_policy'
    }
  }

  const missing = [
    adapter.requiredGuard && !contextGuards.has(adapter.requiredGuard) ? adapter.requiredGuard : null,
    adapter.requiredPolicy && !contextPolicies.has(adapter.requiredPolicy) ? adapter.requiredPolicy : null,
    adapter.requiredConsent && !contextConsents.has(adapter.requiredConsent) ? adapter.requiredConsent : null,
    adapter.auditPath && !contextAuditPaths.has(adapter.auditPath) ? adapter.auditPath : null
  ].filter(Boolean)

  if (adapter.decision === 'forbidden' && missing.length === 0) {
    return {
      sourceType,
      targetType,
      decision: 'compatible_with_policy',
      compatible: true,
      adapter: adapter.adapter,
      required: [],
      reason: 'forbidden_route_unlocked_by_policy_consent_and_audit_path'
    }
  }

  return {
    sourceType,
    targetType,
    decision: adapter.decision,
    compatible: adapter.decision !== 'forbidden',
    adapter: adapter.adapter,
    required: missing.length
      ? missing
      : [adapter.adapter, adapter.requiredGuard, adapter.requiredPolicy, adapter.requiredConsent, adapter.auditPath].filter(Boolean),
    reason: adapter.reason
  }
}

export function buildTypeCompatibilityResult({ from, to, sourceType, targetType, context = {} }) {
  const compatibility = checkTypeCompatibility(sourceType, targetType, context)
  const requiredAdapter = compatibility.adapter ? [compatibility.adapter] : []
  const requiredControls = (compatibility.required ?? []).filter((item) => item !== compatibility.adapter)

  return {
    compatibility_result: {
      from,
      to,
      status: compatibility.decision,
      reason: compatibility.reason ?? `${to} requires ${targetType}, but ${from} produces ${sourceType}`,
      required_adapter: requiredAdapter,
      required_controls: requiredControls,
      severity: compatibility.decision === 'compatible' ? 'none' : 'blocking'
    },
    outputFields: TYPE_COMPATIBILITY_OUTPUT_FIELDS,
    feeds: ['composition_graph_builder', 'capability_doctor']
  }
}

function transitionStateKey(state) {
  if (typeof state === 'string') return state
  return state?.capability ?? state?.money ?? state?.proof ?? state?.claim ?? state?.obligation ?? JSON.stringify(state)
}

export function validateStateTransitionMachine(machine) {
  const transitions = machine.transitions ?? []
  const terminalStates = new Set(machine.terminalStates ?? [])
  const states = new Set([
    ...(machine.states ?? []),
    machine.initialState,
    ...terminalStates,
    ...transitions.flatMap((transition) => [
      transitionStateKey(transition.from_state ?? transition.from),
      transitionStateKey(transition.to_state ?? transition.to)
    ])
  ].filter(Boolean))
  const exits = transitions.reduce((map, transition) => {
    const from = transitionStateKey(transition.from_state ?? transition.from)
    map[from] = [...(map[from] ?? []), transition]
    return map
  }, {})
  const errors = []
  const requiredGuardsPerTransition = {}

  if (!machine.initialState || !states.has(machine.initialState)) errors.push('initial_state_missing')
  if (!terminalStates.size) errors.push('terminal_states_missing')

  for (const state of states) {
    if (!terminalStates.has(state) && !exits[state]?.length) errors.push(`state_without_exit:${state}`)
  }

  for (const failureState of machine.failureStates ?? []) {
    const hasRecovery = (exits[failureState] ?? []).some((transition) => {
      const to = transitionStateKey(transition.to_state ?? transition.to)
      return terminalStates.has(to) || ['proof_pending', 'under_review', 'manual_review', 'refunded', 'closed'].includes(to)
    })
    if (!hasRecovery) errors.push(`failure_state_without_recovery:${failureState}`)
  }

  for (const transition of transitions) {
    const from = transitionStateKey(transition.from_state ?? transition.from)
    const to = transitionStateKey(transition.to_state ?? transition.to)
    const guards = transition.guards ?? []
    requiredGuardsPerTransition[transition.transition_id] = guards

    if ((to === 'released' || transition.to_state?.money === 'released_funds') && machine.requiredReleaseGuards) {
      const missingGuards = machine.requiredReleaseGuards.filter((guard) => !guards.includes(guard))
      if (missingGuards.length) errors.push(`${transition.transition_id}:missing_release_guards:${missingGuards.join(',')}`)
    }

    if (transition.from_state?.money && !transition.to_state?.money) {
      errors.push(`${transition.transition_id}:money_state_becomes_ambiguous`)
    }

    if (transition.to_state?.claim === 'matured_claim' && transition.to_state?.proof !== 'approved') {
      errors.push(`${transition.transition_id}:claim_matures_without_approved_proof`)
    }

    if (from === to && !transition.maxAttempts && !transition.timeout) {
      errors.push(`${transition.transition_id}:loop_can_trap_funds`)
    }

    if (terminalStates.has(from) && !terminalStates.has(to) && !transition.reopening_protocol) {
      errors.push(`${transition.transition_id}:closed_state_mutates_without_reopening_protocol`)
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    outputs: STATE_TRANSITION_VALIDATOR_OUTPUTS,
    checks: STATE_TRANSITION_VALIDATOR_CHECKS,
    stateLayers: STATE_TRANSITION_STATE_LAYERS,
    transitionTable: transitions.map((transition) => ({
      id: transition.transition_id,
      from: transitionStateKey(transition.from_state ?? transition.from),
      to: transitionStateKey(transition.to_state ?? transition.to),
      trigger: transition.trigger?.event,
      guards: transition.guards ?? []
    })),
    missingTerminalPaths: errors.filter((error) => error.includes('failure_state_without_recovery') || error.includes('state_without_exit')),
    requiredGuardsPerTransition,
    stateInvariants: [
      'money_state_must_be_defined_on_money_transitions',
      'release_requires_approved_proof_no_dispute_and_verified_recipient',
      'failure_states_must_recover_or_terminally_close',
      'closed_states_require_reopening_protocol_before_mutation'
    ]
  }
}

export function validateLedgerTemplate(template) {
  const entries = template.entries ?? []
  const debits = entries.filter((entry) => entry.direction === 'debit')
  const credits = entries.filter((entry) => entry.direction === 'credit')
  const debitAmounts = new Set(debits.map((entry) => entry.amount))
  const creditAmounts = new Set(credits.map((entry) => entry.amount))
  const errors = []

  if (!debits.length) errors.push('missing_debit_entry')
  if (!credits.length) errors.push('missing_credit_entry')
  for (const amount of debitAmounts) {
    if (!creditAmounts.has(amount)) errors.push(`debit_amount_without_matching_credit:${amount}`)
  }
  for (const amount of creditAmounts) {
    if (!debitAmounts.has(amount)) errors.push(`credit_amount_without_matching_debit:${amount}`)
  }
  if (template.ledger_template === 'escrow_release' && !entries.some((entry) => entry.account === 'escrow_liability' && entry.direction === 'debit')) {
    errors.push('release_escrow_without_clearing_escrow_liability')
  }
  if (template.ledger_template === 'escrow_refund' && !entries.some((entry) => entry.account === 'payer_available_balance' && entry.direction === 'credit')) {
    errors.push('refund_without_source')
  }

  return {
    valid: errors.length === 0,
    errors,
    template: template.ledger_template,
    checks: LEDGER_COMPATIBILITY_CHECKS,
    fundStates: LEDGER_FUND_STATES,
    forbiddenPatterns: LEDGER_COMPATIBILITY_FORBIDDEN_PATTERNS
  }
}

export function validateLedgerPlan(plan = {}) {
  const templates = plan.templates ?? []
  const allEntries = templates.flatMap((template) => template.entries ?? [])
  const templateReviews = templates.map(validateLedgerTemplate)
  const errors = templateReviews.flatMap((review) => review.errors.map((error) => `${review.template}:${error}`))
  const diagnostics = []
  const entriesByAccountDirectionAmount = allEntries.reduce((map, entry) => {
    const key = `${entry.account}:${entry.direction}:${entry.amount}`
    map[key] = (map[key] ?? 0) + 1
    return map
  }, {})

  for (const [key, count] of Object.entries(entriesByAccountDirectionAmount)) {
    if (count > 1 && !plan.allowedDuplicateEntries?.includes(key)) {
      const direction = key.split(':')[1]
      errors.push(direction === 'credit' ? `double_credit:${key}` : `double_debit:${key}`)
    }
  }

  for (const entry of allEntries) {
    if (plan.accountOwnership && !plan.accountOwnership[entry.account]) errors.push(`missing_account_owner:${entry.account}`)
    if (plan.asset && entry.asset && entry.asset !== plan.asset) errors.push(`asset_mismatch:${entry.account}`)
    if (plan.currency && entry.currency && entry.currency !== plan.currency) errors.push(`currency_mismatch:${entry.account}`)
  }

  if ((plan.fundStates ?? []).includes('pending_funds') && (plan.fundStates ?? []).includes('settled_available_funds') && !plan.settlementTransition) {
    errors.push('pending_funds_treated_as_settled_without_settlement_transition')
  }
  if (plan.feeDeducted && !plan.feeDestinationAccount) {
    errors.push('fee_destination_account_missing')
    diagnostics.push(LEDGER_FATAL_DIAGNOSTIC_EXAMPLE.finding)
  }
  if (plan.reserveDraw && !plan.reserveAccount) errors.push('reserve_draw_without_reserve_account')
  if (plan.reversalRequired && !plan.reversalTemplates?.length) errors.push('reversal_entries_missing')
  if (plan.compensationRequired && !plan.compensationEntries?.length) errors.push('compensation_entries_missing')
  if (plan.claims?.length && !plan.claimLedgerEntries?.length) errors.push('unaccounted_claim')
  if (templates.some((template) => template.ledger_template === 'escrow_hold')) {
    const closesEscrow = templates.some((template) => ['escrow_release', 'escrow_refund'].includes(template.ledger_template))
    if (!closesEscrow) errors.push('unclosed_escrow_liability')
  }

  return {
    valid: errors.length === 0,
    errors,
    diagnostics,
    outputs: LEDGER_COMPATIBILITY_OUTPUTS,
    checks: LEDGER_COMPATIBILITY_CHECKS,
    fundStates: LEDGER_FUND_STATES,
    templateReviews,
    ledgerInvariants: [
      'money_cannot_appear_or_disappear',
      'every_money_movement_has_debit_and_credit',
      'pending_money_needs_settlement_before_release',
      'fees_reserves_reversals_and_claims_must_have_accounts'
    ],
    fatalUntilRepaired: diagnostics.some((diagnostic) => diagnostic.severity === 'fatal')
  }
}

export function validateCompositionEdge(edge) {
  const missing = COMPOSITION_EDGE_SCHEMA_FIELDS.filter((field) => edge[field] === undefined)
  const allowedOperators = ['sequence', 'parallel', 'guard', 'split', 'join', 'fallback']
  const issues = [...missing]

  if (edge.operator && !allowedOperators.includes(edge.operator)) issues.push('invalid_operator')
  if (edge.fromComponent === edge.toComponent) issues.push('self_edge_requires_loop_operator')

  return {
    valid: issues.length === 0,
    issues,
    allowedOperators
  }
}

export function validateProductCompositionGraphShape(graph) {
  const missing = PRODUCT_COMPOSITION_GRAPH_SCHEMA_FIELDS.filter((field) => graph[field] === undefined)
  const componentReviews = (graph.components ?? []).map(validateComponentSignature)
  const edgeReviews = (graph.edges ?? []).map(validateCompositionEdge)
  const issues = [
    ...missing,
    ...componentReviews.flatMap((review, index) => review.valid ? [] : [`component_${index}_invalid`]),
    ...edgeReviews.flatMap((review, index) => review.valid ? [] : [`edge_${index}_invalid`])
  ]

  if (!graph.invariants?.length) issues.push('missing_invariants')
  if (!graph.monitors?.length) issues.push('missing_monitors')
  if (!graph.uiBindings?.length) issues.push('missing_ui_bindings')

  return {
    valid: issues.length === 0,
    issues,
    componentReviews,
    edgeReviews,
    schemaFields: PRODUCT_COMPOSITION_GRAPH_SCHEMA_FIELDS
  }
}

export function evaluateInterlockCompatibility(source, target, context = {}) {
  const sourceOutputs = new Set(source.outputStates ?? [])
  const targetInputs = target.inputStates ?? []
  const stateCompatible = targetInputs.length === 0 || targetInputs.some((state) => sourceOutputs.has(state))
  const requiredActors = [...new Set([...(source.requiredActors ?? []), ...(target.requiredActors ?? [])])]
  const requiredConsents = [...new Set([...(source.requiredConsents ?? []), ...(target.requiredConsents ?? [])])]
  const presentActors = new Set(context.actors ?? requiredActors)
  const capturedConsents = new Set(context.consents ?? [])
  const introducedRisks = [...new Set([...(source.introducedRisks ?? []), ...(target.introducedRisks ?? [])])]
  const mitigations = new Set([
    ...(source.requiredMitigations ?? []),
    ...(target.requiredMitigations ?? []),
    ...(context.mitigations ?? [])
  ])
  const failureModes = [...new Set([...(source.failureModes ?? []), ...(target.failureModes ?? [])])]
  const failureHandlers = new Set([
    ...(source.requiredFailureHandlers ?? []),
    ...(target.requiredFailureHandlers ?? []),
    ...(context.failureHandlers ?? [])
  ])
  const complianceTags = [...new Set([...(source.complianceTags ?? []), ...(target.complianceTags ?? [])])]
  const escalatedTags = new Set(context.escalatedComplianceTags ?? [])

  const checks = {
    state_compatibility: stateCompatible,
    ledger_compatibility: context.ledgerBalanced ?? true,
    actor_compatibility: requiredActors.every((actor) => presentActors.has(actor)),
    ownership_compatibility: context.ownershipCompatible ?? true,
    risk_compatibility: introducedRisks.every((risk) => mitigations.has(risk) || mitigations.has(`${risk}_mitigation`)),
    consent_compatibility: requiredConsents.every((consent) => capturedConsents.has(consent)),
    time_compatibility: context.timeCompatible ?? true,
    jurisdiction_compatibility: complianceTags.every((tag) => escalatedTags.has(tag) || context.allowedComplianceTags?.includes(tag)),
    failure_compatibility: failureModes.length === 0 || failureHandlers.size > 0,
    ui_compatibility: context.uiTruthful ?? true,
    runtime_compatibility: Boolean((source.requiredMonitors ?? []).length || (target.requiredMonitors ?? []).length)
      ? Boolean(context.monitors?.length)
      : true,
    explainability: context.explainable ?? true
  }

  const failed = Object.entries(checks)
    .filter(([, passed]) => !passed)
    .map(([check]) => check)

  return {
    valid: failed.length === 0,
    failed,
    checks,
    requiredChecks: INTERLOCK_COMPATIBILITY_CHECKS
  }
}

export function decideCompositionCreationOutcome(review) {
  if (review.blocked) return 'cannot_be_created'
  if (review.missing?.length) return 'needs_missing_pieces'
  if (review.governorReviewLevel === 'block') return 'cannot_be_created'
  if (['governor_review', 'restricted_or_licensed_mode'].includes(review.governorReviewLevel)) {
    return 'must_go_to_governor'
  }
  if (review.mustSimulate) return 'must_be_simulated'
  if (review.supervised) return 'supervised_release_only'
  if (review.graphValid && review.interlockValid && review.releaseMode === 'auto') {
    return 'safe_for_automated_release'
  }
  if (review.graphValid && review.interlockValid) return 'can_be_created'
  return 'needs_missing_pieces'
}

export function chooseSafeDefault(missingDetail) {
  return {
    law: 'safe_default_law',
    missingDetail,
    safeDefault: SAFE_DEFAULT_RULES[missingDetail] ?? 'route_to_review',
    rules: SAFE_DEFAULT_RULES
  }
}

export function validateCompositionGraph(graph) {
  const failures = []
  const missingSections = COMPOSITION_GRAPH_REQUIRED_SECTIONS.filter((section) => {
    const value = graph[section]
    if (Array.isArray(value)) return value.length === 0
    if (value && typeof value === 'object') return Object.keys(value).length === 0
    return value === undefined || value === null
  })

  failures.push(...missingSections.map((section) => `missing_${section}`))
  if (!graph.failurePaths?.length) failures.push('missing_failure_paths')
  if (!graph.runtimeMonitors?.length) failures.push('missing_runtime_monitors')
  if (!graph.guards?.includes('consent_guard')) failures.push('missing_consent_guard')
  if (!graph.guards?.includes('fundability_guard')) failures.push('missing_fundability_guard')
  if (!graph.actors?.length) failures.push('missing_authorized_actors')
  if (!graph.flows?.includes('refund')) failures.push('missing_refund_flow')
  if (!graph.states?.some((state) => ['released', 'refunded', 'closed'].includes(state))) {
    failures.push('missing_terminal_state')
  }
  if (graph.ledgerEntries) {
    const ledgerReview = checkCompositionLedger(graph.ledgerEntries)
    if (!ledgerReview.valid) failures.push(...ledgerReview.invalidReasons)
  } else {
    failures.push('missing_ledger_entries')
  }
  const terminalWords = new Set(['refund_sender', 'resolution', 'released', 'refunded', 'closed', 'review', 'resubmission_or_manual_review'])
  const danglingFailurePaths = (graph.failurePaths ?? [])
    .filter((path) => {
      const terminal = Array.isArray(path) ? path[path.length - 1] : path
      return !terminalWords.has(terminal)
    })
  if (danglingFailurePaths.length) failures.push('failure_path_without_terminal_resolution')
  const unboundUiStates = (graph.states ?? [])
    .filter((state) => ['escrowed_funds', 'proof_pending', 'rejected', 'disputed', 'refunded'].includes(state))
    .filter((state) => !graph.uiBindings?.[state])
  if (unboundUiStates.length) failures.push('ui_state_without_binding')

  return {
    valid: failures.length === 0,
    failures,
    checks: COMPOSITION_GRAPH_VALIDATION_CHECKS,
    missingSections
  }
}

export function getPrimitiveSignature(name) {
  return PRIMITIVE_REGISTRY[name] ?? null
}

export function composeFromPrimitiveRegistry(parts, policies = []) {
  const set = new Set(parts)
  const missing = []

  if (set.has('group_wallet') && set.has('rotating_payout_queue')) {
    missing.push('payout_order_rule', 'fundability_guard', 'default_handler', 'member_consent', 'runtime_monitor')
  }

  for (const policy of policies) {
    const signature = PRIMITIVE_REGISTRY.rotating_payout_queue
    const conditional = signature.requires_if?.[policy] ?? []
    for (const requirement of conditional) {
      if (!set.has(requirement)) missing.push(requirement)
    }
  }

  return {
    parts,
    policies,
    missing: [...new Set(missing)],
    canAutoAdd: ['fundability_guard', 'contribution_settlement_check', 'reserve_health_monitor', 'runtime_monitor'],
    shouldAsk: ['payout_order_rule', 'member_consent', 'default_handler', 'reserve_pool']
  }
}

export function validateAdminCanvasComposition(parts) {
  const registryResult = composeFromPrimitiveRegistry(parts, parts.includes('no_pot_shrink_policy') ? ['no_pot_shrink_policy'] : [])
  const warnings = []

  if (parts.includes('no_pot_shrink_policy')) {
    warnings.push('No Pot Shrink Policy requires fundability simulation before release.')
  }
  if (parts.includes('reserve_pool') && !parts.includes('reserve_funding_source')) {
    warnings.push('Reserve Pool has no funding source. Add deposit, platform reserve, coverage source, or member-funded reserve.')
  }
  if (parts.includes('rotating_payout_queue') && !parts.includes('default_handler')) {
    warnings.push('Rotating Payout creates post-payout default risk. Add Default Handler.')
  }
  if (!parts.includes('member_consent')) {
    warnings.push('Members are exposed to contribution obligations. Add Member Consent Flow.')
  }
  if (parts.includes('pooled_funds') || parts.includes('no_pot_shrink_policy')) {
    warnings.push('This composition may resemble a pooled financial arrangement. Send to Compliance Governor.')
  }
  if (!parts.includes('runtime_reserve_monitor') && parts.includes('no_pot_shrink_policy')) {
    warnings.push('Monitor missing: No Pot Shrink requires runtime reserve monitoring.')
  }
  if (!parts.includes('payout_pause_ui') && parts.includes('no_pot_shrink_policy')) {
    warnings.push('UI truth warning: payout pause must be explained before launch.')
  }

  return {
    canvasStates: ADMIN_CANVAS_STATES,
    liveFeedback: [
      'valid_connection',
      ...registryResult.missing.map((item) => `missing_dependency:${item}`),
      ...(warnings.length ? ['risk_increase', 'compliance_escalation_required'] : [])
    ],
    warnings,
    missing: registryResult.missing
  }
}

export function buildUserFacingSavingsComposition() {
  return {
    userRequest: 'I want to create a savings group where nobody loses money if someone defaults.',
    internalComposition: [
      'group_wallet',
      'recurring_contribution',
      'rotating_payout_queue',
      'contribution_obligation_tracker',
      'fundability_guard',
      'reserve_pool',
      'default_handler',
      'member_consent',
      'dispute_workflow',
      'runtime_monitor',
      'payout_ui',
      'contribution_reminder_ui'
    ],
    userSees: [
      'A protected group savings plan.',
      'Everyone contributes weekly.',
      'Payout only happens when the pot is safely funded.',
      'If someone misses payment, AURA applies the group protection rules.',
      'Every member sees and agrees to the rules before joining.'
    ]
  }
}

export function propagateRestriction({ sourceState, destination, overrideComponents = [] }) {
  if (sourceState === 'school_fee_restricted_funds' && destination === 'unrestricted_transfer') {
    const required = ['emergency_unlock_policy', 'guardian_approval', 'contributor_disclosure_rules', 'audit_event']
    const missing = required.filter((component) => !overrideComponents.includes(component))

    return {
      valid: missing.length === 0,
      restrictionPropagates: true,
      missing,
      reason: missing.length
        ? 'Restricted funds cannot move to unrestricted transfer without override controls.'
        : 'Override path satisfies restriction propagation.'
    }
  }

  return {
    valid: true,
    restrictionPropagates: false,
    missing: [],
    reason: 'No restriction conflict detected.'
  }
}

export function composeObligationWithMoneyFlow(obligation, flow) {
  const missing = OBLIGATION_COMPOSITION_FIELDS.filter((field) => obligation[field] === undefined)
  const connected = obligation.funding_path === flow.id || flow.required_conditions?.includes(obligation.id)

  return {
    obligation,
    flow,
    valid: missing.length === 0 && connected,
    missing,
    connected,
    mustFundBeforePriorityLowerThan: obligation.priority
  }
}

export function composeObligationWithMechanisms(obligation, mechanisms) {
  const missing = OBLIGATION_MECHANISMS.filter((mechanism) => !mechanisms.includes(mechanism))

  return {
    obligation,
    mechanisms,
    proactive: mechanisms.includes('reminder') && mechanisms.includes('auto_allocation'),
    defaultAware: mechanisms.includes('default_handler') && mechanisms.includes('trust_score_update'),
    missing
  }
}

export function composeClaimWithCondition(claim, condition) {
  const normalizedClaim = {
    ...claim,
    target_funds: claim.target_funds ?? claim.funds,
    conditions: claim.conditions ?? (condition ? [condition.id ?? 'condition'] : undefined),
    expiry: claim.expiry ?? claim.expiresAt,
    dispute_status: claim.dispute_status ?? claim.disputeStatus,
    revocability: claim.revocability ?? claim.revocable
  }
  const missing = CLAIM_COMPOSITION_FIELDS.filter((field) => normalizedClaim[field] === undefined)

  return {
    claim: normalizedClaim,
    condition,
    valid: missing.length === 0 && Boolean(condition),
    missing,
    canReceive: Boolean(condition?.satisfied),
    checks: [
      'who_has_claim',
      'against_which_funds',
      'when_claim_matures',
      'conditions_apply',
      'can_expire',
      'can_be_disputed',
      'can_transfer',
      'priority_defined'
    ]
  }
}

export function calculateRiskEffects(components) {
  const signatures = {
    rotating_payout: {
      introduces: ['post_payout_default_risk', 'payout_order_dispute_risk'],
      reduces: [],
      transfers: [],
      concentrates: ['group_liquidity_pressure'],
      distributes: [],
      hides: [],
      reveals: ['payout_order_exposure'],
      requiresMitigation: ['default_handler', 'fundability_guard', 'member_consent', 'runtime_monitor']
    },
    reserve_pool: {
      introduces: [],
      reduces: ['shortfall_risk'],
      transfers: [],
      concentrates: [],
      distributes: ['shortfall_loss_absorption'],
      hides: [],
      reveals: ['reserve_coverage_ratio'],
      requiresMitigation: ['reserve_health_monitor']
    },
    instant_release: {
      introduces: ['irreversibility_risk'],
      reduces: [],
      transfers: [],
      concentrates: ['recipient_control'],
      distributes: [],
      hides: ['sender_recovery_risk'],
      reveals: [],
      requiresMitigation: ['limit_guard', 'dispute_workflow']
    },
    escrow: {
      introduces: ['dispute_resolution_complexity'],
      reduces: ['counterparty_nonperformance_risk'],
      transfers: [{ from: 'payer', to: 'escrow_system' }],
      concentrates: [],
      distributes: [],
      hides: [],
      reveals: ['conditional_claim_state'],
      requiresMitigation: ['refund_path', 'dispute_workflow', 'proof_gate']
    }
  }

  return components.reduce((effect, component) => {
    const signature = signatures[component]
    if (!signature) return effect
    effect.introduces.push(...signature.introduces)
    effect.reduces.push(...signature.reduces)
    effect.transfers.push(...signature.transfers)
    effect.concentrates.push(...signature.concentrates)
    effect.distributes.push(...signature.distributes)
    effect.hides.push(...signature.hides)
    effect.reveals.push(...signature.reveals)
    effect.requiresMitigation.push(...signature.requiresMitigation)
    return effect
  }, {
    introduces: [],
    reduces: [],
    transfers: [],
    concentrates: [],
    distributes: [],
    hides: [],
    reveals: [],
    effectTypes: RISK_EFFECT_TYPES,
    requiresMitigation: []
  })
}

function riskScoreValue(level) {
  if (level === 'high') return 85
  if (level === 'review_required') return 80
  if (level === 'medium') return 55
  if (level === 'low') return 25
  if (level === 'reduced') return 10
  return 35
}

export function composeRiskManifest(components, context = {}) {
  const effects = components.reduce((summary, component) => {
    const effect = RISK_COMPONENT_EFFECTS[component]
    if (!effect) return summary
    summary.risksIntroduced.push(...effect.risks_introduced)
    summary.risksReduced.push(...effect.risks_reduced)
    summary.risksTransferred.push(...effect.risks_transferred)
    summary.risksAmplified.push(...effect.risks_amplified)
    summary.requiredMitigations.push(...effect.required_mitigations)
    return summary
  }, {
    risksIntroduced: [],
    risksReduced: [],
    risksTransferred: [],
    risksAmplified: [],
    requiredMitigations: []
  })
  const uniqueMitigations = [...new Set(effects.requiredMitigations)]
  const mitigationSet = new Set(context.presentMitigations ?? [])
  const missingMitigations = uniqueMitigations.filter((mitigation) => !mitigationSet.has(mitigation))
  const btsRules = applyBtsCompositionRules({
    bts: context.bts ?? 50,
    amount: context.amount ?? 0,
    recipientTrust: context.recipientTrust ?? 'new',
    productType: context.productType
  })
  const baseVector = context.productType === 'safesend_payment' ? SAFESEND_RISK_VECTOR : SUSU_RISK_VECTOR
  const vectorScore = Math.round(
    Object.values(baseVector).reduce((sum, level) => sum + riskScoreValue(level), 0) / Object.values(baseVector).length
  )
  const mitigationPenalty = missingMitigations.length * 6
  const btsAdjustment = (context.bts ?? 50) >= 80 ? -12 : (context.bts ?? 50) < 40 ? 14 : 0
  const residualRiskScore = Math.max(0, Math.min(100, vectorScore + mitigationPenalty + btsAdjustment))
  const complianceEscalationSignals = [
    ...(effects.risksAmplified.includes('compliance_risk') ? ['compliance_risk_amplified'] : []),
    ...(baseVector.compliance_risk === 'review_required' ? ['compliance_review_required'] : []),
    ...(effects.risksIntroduced.includes('pooled_risk_concern') ? ['pooled_risk_concern'] : [])
  ]
  const recommendedReleaseMode = residualRiskScore >= 75 || complianceEscalationSignals.length
    ? 'simulation_gated_governor_review'
    : residualRiskScore >= 55
      ? 'supervised_release'
      : 'automated_release_with_runtime_monitoring'

  return {
    status: residualRiskScore >= 75 ? 'high_risk_but_mitigable' : residualRiskScore >= 55 ? 'medium_risk_requires_controls' : 'low_risk_standard_controls',
    riskManifest: {
      vector: baseVector,
      effects: {
        introduced: [...new Set(effects.risksIntroduced)],
        reduced: [...new Set(effects.risksReduced)],
        transferred: [...new Set(effects.risksTransferred)],
        amplified: [...new Set(effects.risksAmplified)]
      }
    },
    residualRiskScore,
    requiredMitigations: missingMitigations,
    recommendedGuards: [...new Set(missingMitigations.filter((mitigation) => mitigation.includes('guard')))],
    recommendedMonitors: [...new Set(missingMitigations.filter((mitigation) => mitigation.includes('monitor')))],
    recommendedReleaseMode,
    complianceEscalationSignals: [...new Set(complianceEscalationSignals)],
    btsBasedAdaptationRules: btsRules,
    outputs: RISK_COMPOSITION_OUTPUTS,
    example: RISK_RESULT_EXAMPLE
  }
}

export function insertRequiredGuards(actions, existingGuards = []) {
  const present = new Set(existingGuards)
  const guardedActionPlan = actions.map((action) => {
    const placementKey = action === 'payout_release'
      ? 'group_payout_release'
      : action === 'school_fee_wallet_payment'
        ? 'school_fee_wallet_payment'
        : action === 'release_escrowed_funds'
          ? 'escrow_release'
          : action
    const required = GUARD_PLACEMENT_RULES[placementKey] ?? DANGEROUS_ACTION_GUARDS[action] ?? []
    const inserted = required.filter((guard) => !present.has(guard))
    inserted.forEach((guard) => present.add(guard))
    return {
      action,
      placement: `before_${action}`,
      required,
      inserted,
      guardDefinitions: required.map((guard) => GUARD_DEFINITION_CATALOG[guard]).filter(Boolean),
      failureBehavior: required.flatMap((guard) => GUARD_DEFINITION_CATALOG[guard]?.on_fail ?? [`${guard}_failure_blocks_and_explains`]),
      uiExplanation: `${action}_blocked_explanation`,
      auditEvents: required.flatMap((guard) => GUARD_DEFINITION_CATALOG[guard]?.audit_event ?? [`${guard}_evaluated`]),
      kernelPredicates: required.map((guard) => `${guard}_must_pass_before_${action}`)
    }
  })
  const insertedGuards = [...new Set(guardedActionPlan.flatMap((step) => step.inserted))]

  return {
    guardedCompositionGraph: guardedActionPlan,
    guardDefinitions: Object.values(GUARD_DEFINITION_CATALOG),
    guardPlacementMap: Object.fromEntries(guardedActionPlan.map((step) => [step.action, step.placement])),
    failureBehaviorForGuardFailure: [...new Set(guardedActionPlan.flatMap((step) => step.failureBehavior))],
    uiExplanationsForBlockedActions: [...new Set(guardedActionPlan.map((step) => step.uiExplanation))],
    auditEvents: [...new Set(guardedActionPlan.flatMap((step) => step.auditEvents))],
    guardedActionPlan,
    insertedGuards,
    missingGuardBlockers: [],
    kernelPredicates: guardedActionPlan.flatMap((step) => step.kernelPredicates),
    examples: GUARD_INSERTION_EXAMPLES,
    outputs: GUARD_INSERTION_OUTPUTS
  }
}

export function applyBtsCompositionRules({ bts, amount, recipientTrust = 'new', productType }) {
  if (bts >= 80 && amount <= 50000 && recipientTrust === 'trusted') {
    return {
      band: 'high_bts',
      requirements: ['fast_release_up_to_limit'],
      susuEffect: 'may_receive_earlier_payout',
      contractorEffect: 'lighter_proof'
    }
  }

  if (bts >= 50) {
    return {
      band: 'medium_bts',
      requirements: ['proof_gate_for_selected_products'],
      susuEffect: 'standard_payout_order',
      contractorEffect: 'standard_proof'
    }
  }

  return {
    band: 'low_bts',
    requirements: ['escrow', 'identity_verification', 'proof_gate', 'manual_review', 'lower_limits', 'delayed_release'],
    susuEffect: 'deposit_guarantor_later_payout_or_lower_exposure',
    contractorEffect: 'gps_photo_milestone_approval'
  }
}

export function checkTimeRuleConflicts(timeRules) {
  const conflicts = []

  if (timeRules.proofDeadlineDays !== undefined && timeRules.refundTimerDays !== undefined) {
    if (timeRules.refundTimerDays < timeRules.proofDeadlineDays) {
      conflicts.push('refund_happens_before_proof_deadline_ends')
    }
  }

  if (timeRules.contributionDue && timeRules.payoutScheduled && timeRules.settlementAvailable) {
    if (timeRules.payoutScheduled < timeRules.settlementAvailable) {
      conflicts.push('payout_happens_before_contributions_settle')
    }
  }
  if (timeRules.claimExpiryDays !== undefined && timeRules.refundTimerDays !== undefined) {
    if (timeRules.refundTimerDays < timeRules.claimExpiryDays) conflicts.push('refund_happens_before_claim_expires')
  }

  if (timeRules.gracePeriodEnds && timeRules.defaultDeclaredAt && timeRules.defaultDeclaredAt < timeRules.gracePeriodEnds) {
    conflicts.push('default_declared_before_grace_period_ends')
  }
  if (timeRules.recurringCycle && timeRules.incomeCycle && timeRules.recurringCycle !== timeRules.incomeCycle) {
    conflicts.push('recurring_cycle_mismatch_with_income_cycle')
  }

  if (!timeRules.timezone) conflicts.push('timezone_missing')

  return {
    valid: conflicts.length === 0,
    conflicts,
    checkedFields: TIME_RULE_FIELDS
  }
}

export function determineIdentityRequirements(productType, roles = []) {
  const requirements = []
  if (productType === 'school_fee_wallet' || roles.includes('school')) requirements.push('verified_school')
  if (productType === 'business_procurement' || roles.includes('business')) requirements.push('verified_business')
  if (roles.includes('contractor')) requirements.push('verified_contractor')
  if (roles.includes('guardian')) requirements.push('verified_guardian')
  if (roles.includes('merchant')) requirements.push('verified_merchant')
  if (roles.includes('agent') || roles.includes('delegate')) requirements.push('verified_agent')
  if (productType === 'business_procurement') requirements.push('invoice_verification', 'tax_profile')
  if (productType === 'school_fee_wallet') requirements.push('approved_school_payee_verification')

  return {
    productType,
    roles,
    requirements: requirements.length ? requirements : ['verified_user'],
    availableLevels: IDENTITY_LEVELS
  }
}

export function getUiAssetRequirements(components) {
  return {
    components,
    assets: [...new Set(components.flatMap((component) => UI_ASSET_REQUIREMENTS[component] ?? []))]
  }
}

export function validateAlgorithmForProduct(algorithmName, productUse) {
  const signature = ALGORITHM_SIGNATURES[algorithmName]
  if (!signature) return { valid: false, reason: 'unknown_algorithm_signature' }
  if (signature.not_valid_for.includes(productUse)) return { valid: false, reason: 'algorithm_not_valid_for_product_use' }

  return {
    valid: signature.valid_for.includes(productUse),
    reason: signature.valid_for.includes(productUse) ? 'algorithm_valid_for_product_use' : 'product_use_not_declared',
    signature
  }
}

export function validateAlgorithmBinding({
  algorithmName,
  capabilityType,
  graphInputs = [],
  expectedOutputs = [],
  thresholds = {},
  fallback,
  humanReview,
  autonomyLevel = 'guarded_execution',
  disclosed = false,
  auditable = false
} = {}) {
  const signature = ALGORITHM_SIGNATURES[algorithmName]
  const issues = []
  const inputSet = new Set(graphInputs)
  const outputSet = new Set(signature?.outputs ?? [])
  const autonomyRank = {
    manual_only: 0,
    guarded_execution: 1,
    supervised_automation: 2,
    automated_execution: 3
  }

  if (!signature) issues.push('unknown_algorithm_signature')
  if (signature && !signature.valid_for.includes(capabilityType)) issues.push('algorithm_not_approved_for_capability_type')
  if (signature?.status && signature.status !== 'active') issues.push('algorithm_version_not_active')
  for (const input of signature?.inputs ?? []) {
    if (!inputSet.has(input)) issues.push(`missing_input:${input}`)
  }
  for (const output of expectedOutputs) {
    if (!outputSet.has(output)) issues.push(`missing_expected_output:${output}`)
  }
  if (signature?.requires_human_review_above?.length && !humanReview) issues.push('human_review_required')
  if (!Object.keys(thresholds).length) issues.push('thresholds_not_configured')
  if (!fallback) issues.push('missing_fallback_for_missing_data')
  if (!auditable) issues.push('algorithm_result_not_auditable')
  if (!disclosed) issues.push('algorithm_use_not_disclosed')
  if (signature?.autonomy_ceiling && autonomyRank[autonomyLevel] > autonomyRank[signature.autonomy_ceiling]) {
    issues.push('algorithm_exceeds_autonomy_level')
  }

  const weakProofSignal = algorithmName === 'proof_confidence_scoring'
    && expectedOutputs.includes('approved_proof')
    && !humanReview
  if (weakProofSignal) issues.push('proof_confidence_signal_insufficient_for_automatic_release')

  return {
    valid: issues.length === 0,
    issues,
    algorithmBindingPlan: {
      algorithmName,
      capabilityType,
      version: signature?.version,
      status: signature?.status ?? 'unknown'
    },
    inputOutputMapping: {
      inputs: signature?.inputs ?? [],
      outputs: signature?.outputs ?? [],
      expectedOutputs
    },
    thresholdConfiguration: thresholds,
    fallbackRequirements: fallback ? [] : ['define_missing_data_fallback'],
    humanReviewRequirements: signature?.requires_human_review_above ?? [],
    algorithmAuditEvents: [`${algorithmName}_evaluated`, `${algorithmName}_result_recorded`],
    doctorWarnings: issues,
    checks: ALGORITHM_BINDING_CHECKS,
    outputs: ALGORITHM_BINDING_OUTPUTS,
    signatureFields: ALGORITHM_BINDING_SIGNATURE_FIELDS,
    useCases: ALGORITHM_BINDING_USE_CASES
  }
}

export function compileProductComposition(physicsManifest) {
  const requiredComponents = physicsManifest.required_primitives ?? physicsManifest.requiredPrimitives ?? []
  const graph = {
    components: requiredComponents,
    actors: physicsManifest.actors ?? [],
    states: physicsManifest.fund_states ?? physicsManifest.moneyStates ?? [],
    flows: physicsManifest.flows ?? [],
    guards: ['consent_guard', 'fundability_guard'],
    policies: physicsManifest.policies ?? [],
    runtimeMonitors: physicsManifest.runtime_monitors ?? physicsManifest.runtimeMonitors ?? [],
    failurePaths: physicsManifest.failure_modes ?? physicsManifest.failurePaths ?? [],
    uiBindings: physicsManifest.ui_bindings ?? {},
    algorithms: physicsManifest.algorithms ?? [],
    complianceTags: physicsManifest.compliance_tags ?? physicsManifest.complianceTags ?? []
  }

  return {
    pipeline: COMPOSITION_COMPILER_PIPELINE,
    requiredComponents,
    graph,
    normalForm: normalizeCompositionToNormalForm({
      actors: physicsManifest.actors ?? [],
      roles: physicsManifest.roles ?? [],
      value_objects: physicsManifest.value_objects ?? [],
      money_states: physicsManifest.fund_states ?? physicsManifest.moneyStates ?? [],
      states: physicsManifest.fund_states ?? physicsManifest.moneyStates ?? [],
      rules: physicsManifest.rules ?? physicsManifest.policies ?? [],
      flows: physicsManifest.flows ?? [],
      obligations: physicsManifest.obligations ?? [],
      claims: physicsManifest.claims ?? [],
      conditions: physicsManifest.conditions ?? [],
      triggers: [],
      guards: graph.guards,
      policies: [],
      ledger_effects: [],
      failure_paths: graph.failurePaths,
      monitors: graph.runtimeMonitors,
      ui: physicsManifest.ui ?? physicsManifest.ui_bindings ?? [],
      ui_bindings: graph.uiBindings,
      disclosures: physicsManifest.required_disclosures ?? [],
      audit_events: [],
      tests: physicsManifest.required_tests ?? physicsManifest.requiredTests ?? [],
      simulations: physicsManifest.simulations ?? []
    })
  }
}

export function normalizeCompositionToNormalForm(input) {
  return COMPOSITION_NORMAL_FORM_FIELDS.reduce((normalForm, field) => {
    normalForm[field] = input[field] ?? []
    return normalForm
  }, {})
}

export function explainInvalidComposition(key) {
  return INVALID_COMPOSITION_EXAMPLES[key] ?? null
}

export function scoreCompositionCompleteness(scores) {
  const numericScores = COMPLETENESS_SCORE_FIELDS
    .filter((field) => typeof scores[field] === 'number')
    .map((field) => scores[field])
  const average = numericScores.length
    ? Math.round(numericScores.reduce((sum, score) => sum + score, 0) / numericScores.length)
    : 0
  const blockers = []

  if (scores.ledgerCompleteness < 100) blockers.push('ledger_completeness_below_100')
  if (scores.stateCompleteness < 100) blockers.push('state_completeness_below_100')
  if (scores.failureCompleteness < 80) blockers.push('failure_completeness_below_threshold')
  if (scores.consentCompleteness < 90) blockers.push('consent_completeness_below_threshold')
  if (scores.testCoverage < 80) blockers.push('test_coverage_below_threshold')
  if (scores.simulationReadiness < 80) blockers.push('simulation_readiness_below_threshold')
  if (scores.complianceReadiness === 'blocked') blockers.push('compliance_blocked')
  if (scores.complianceReadiness === 'review_required') blockers.push('compliance_review_required')
  const releaseRecommendation = blockers.includes('compliance_blocked')
    ? 'blocked'
    : blockers.length
      ? 'restricted'
      : 'release_review_ready'

  return {
    average,
    releasable: blockers.length === 0,
    blockers,
    releaseRecommendation,
    requiredRepairs: blockers.length
      ? ['complete_default_failure_path', 'add_reserve_depletion_monitor', 'update_member_consent', 'run_two_default_simulation']
      : [],
    releaseAdvice: blockers.length
      ? 'Add member default consent, reserve depletion policy, and two-default simulation.'
      : 'Composition can proceed to release review.'
  }
}

export function rankCompositionCandidates(candidates, context) {
  const weights = {
    safety: 3,
    simplicity: 1.3,
    cost: 1,
    userFriction: -1,
    complianceBurden: -1.4,
    trustLevel: 1.1,
    amountFit: 1,
    contextFit: 1.4,
    speed: 0.8,
    disputeLikelihood: -1.6
  }

  return candidates
    .map((candidate) => {
      const score = Object.entries(weights).reduce((sum, [field, weight]) => {
        return sum + ((candidate[field] ?? 0) * weight)
      }, 0)
      return { ...candidate, score, context }
    })
    .sort((a, b) => b.score - a.score)
}

export function validateMarketplaceComponent(component) {
  const missing = MARKETPLACE_COMPONENT_REQUIREMENTS.filter((field) => component[field] === undefined)
  const canTouchMoney = component.ledger_effects?.length > 0 && component.tests?.includes('ledger_balance_test')
  const allowed = new Set(component.allowed_compositions ?? component.allowed_composition_families ?? [])
  const forbidden = new Set(component.forbidden_compositions ?? component.forbidden_composition_families ?? [])
  const riskEffects = component.risk_effects ?? []
  const complianceTags = component.compliance_tags ?? []

  return {
    valid: missing.length === 0,
    missing,
    canTouchMoney,
    requiresReview: riskEffects.length > 0 || complianceTags.length > 0,
    recommendationOnly: !canTouchMoney,
    highRiskAllowed: allowed.has('high_risk_products') && !forbidden.has('high_risk_products'),
    minorsAllowed: allowed.has('minor_or_child_beneficiary_products') && !forbidden.has('minor_or_child_beneficiary_products'),
    crossJurisdictionAllowed: allowed.has('cross_jurisdiction') && !forbidden.has('cross_jurisdiction'),
    automaticUseAllowed: canTouchMoney && allowed.has('automatic_execution') && !forbidden.has('automatic_execution'),
    requiresHumanReview: riskEffects.length > 0 || complianceTags.length > 0 || !allowed.has('automatic_execution')
  }
}

function hasAll(set, required) {
  return required.every((item) => set.has(item))
}
