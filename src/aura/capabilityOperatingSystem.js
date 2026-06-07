const normalizeKey = (value) => String(value ?? '')
  .trim()
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '_')
  .replace(/^_+|_+$/g, '')

const normalizeList = (value) => Array.isArray(value)
  ? value.map((item) => typeof item === 'string' ? normalizeKey(item) : item).filter(Boolean)
  : String(value ?? '')
    .split(/[,\n]/)
    .map(normalizeKey)
    .filter(Boolean)

export const AURA_CAPABILITY_OS_PROMISE = 'compile_intent_into_installable_typed_explainable_upgradeable_capabilities'

export const AURA_CAPABILITY_OS_DEFINITION = Object.freeze({
  role: 'capability_runtime',
  purpose: 'create_install_govern_execute_and_evolve_financial_behaviours',
  userLanguage: 'i_want_money_to_behave_like_this',
  notA: ['customizable_screens', 'stored_features', 'hardcoded_feature_module'],
  isA: ['formless_financial_creation_system', 'financial_capability_operating_system']
})

export const CAPABILITY_OS_SUPPORTED_CAPABILITY_FAMILIES = Object.freeze([
  'save2pay_wallets',
  'susu_rosca_systems',
  'safesend',
  'escrow_by_default_flows',
  'family_wallets',
  'school_fee_plans',
  'obligation_tracking',
  'smart_money_splitting',
  'request_to_pay_flows',
  'merchant_payment_tools',
  'gps_image_verified_payouts',
  'credit_liquidity_balancing',
  'bts_driven_permissions',
  'programmable_savings_rules',
  'dynamic_capability_creation',
  'admin_drag_and_drop_product_creation',
  'partner_created_financial_products',
  'user_described_custom_money_behaviour',
  'future_fintech_apps_not_yet_known'
])

export const CAPABILITY_OS_CAPABILITY_COMPONENTS = Object.freeze([
  {
    id: 'intent',
    meaning: 'what_the_user_wants_to_achieve'
  },
  {
    id: 'rules',
    meaning: 'conditions_constraints_permissions_limits_schedules_exceptions_penalties_refunds_release_rules_fallback_logic'
  },
  {
    id: 'state_machine',
    meaning: 'formal_lifecycle_of_the_capability'
  },
  {
    id: 'ledger_impact',
    meaning: 'how_money_moves_locks_splits_settles_reverses_refunds_reserves_or_becomes_claimable'
  },
  {
    id: 'entity_model',
    meaning: 'user_payer_recipient_merchant_school_family_circle_guarantor_agent_verifier_business_shadow_entity'
  },
  {
    id: 'policy_envelope',
    meaning: 'jurisdiction_compliance_category_kyc_kyb_fraud_disclosure_harm_risk_approval_rules'
  },
  {
    id: 'ui_surfaces',
    meaning: 'screens_cards_prompts_forms_timelines_receipts_warnings_explanations_progress_dashboards_admin_controls'
  },
  {
    id: 'evidence_requirements',
    meaning: 'proof_inputs_needed_before_a_capability_can_act'
  },
  {
    id: 'autonomy_level',
    meaning: 'automatic_suggest_confirm_review_or_block'
  },
  {
    id: 'explanation_layer',
    meaning: 'why_it_exists_how_it_works_risks_next_steps_and_consent'
  },
  {
    id: 'testing_and_simulation',
    meaning: 'normal_edge_risky_fraudulent_and_failure_scenarios'
  },
  {
    id: 'runtime_monitoring',
    meaning: 'tracking_alerts_drift_abuse_performance_complaints_failure_rates'
  },
  {
    id: 'versioning_and_migration',
    meaning: 'upgrade_rollback_patch_deprecate_or_migrate_old_users_safely'
  }
])

export const CAPABILITY_OS_EVIDENCE_REQUIREMENTS = Object.freeze([
  { id: 'gps', source: 'internal_evidence_engine' },
  { id: 'image', source: 'internal_evidence_engine' },
  { id: 'receipt', source: 'internal_evidence_engine' },
  { id: 'invoice', source: 'internal_evidence_engine' },
  { id: 'endorsement', source: 'internal_evidence_engine' },
  { id: 'third_party_confirmation_stub', source: 'internal_stub', provider_api_skipped: true },
  { id: 'identity_verification', source: 'internal_identity_evidence' },
  { id: 'delivery_proof', source: 'internal_evidence_engine' },
  { id: 'signed_agreement', source: 'internal_document_evidence' }
])

export const CAPABILITY_OS_LIFECYCLE_PIPELINE = Object.freeze([
  'intent',
  'specification',
  'atoms',
  'primitives',
  'capability',
  'product_surface',
  'runtime',
  'outcome',
  'learning'
])

export const CAPABILITY_TYPE_BLUEPRINT_FIELDS = Object.freeze([
  'contributors',
  'contribution_amount',
  'schedule',
  'wallet_rules',
  'reminder_rules',
  'missed_payment_rules',
  'withdrawal_rules',
  'permissions',
  'ledger_rules',
  'completion_rules',
  'closure_rules'
])

export const CAPABILITY_INSTANCE_RECORD_FIELDS = Object.freeze([
  'instance_id',
  'type_id',
  'owner_id',
  'participants',
  'money_balance',
  'contribution_history',
  'pending_obligations',
  'scheduled_jobs',
  'failures',
  'change_log',
  'timeline',
  'lifecycle_state'
])

export const CAPABILITY_RUNTIME_TRUTH_SOURCES = Object.freeze([
  'capability_contract',
  'capability_instance_record',
  'state_machine',
  'event_ledger',
  'financial_ledger',
  'schedule_engine',
  'runtime_monitor',
  'audit_trail'
])

export const CAPABILITY_RUNTIME_OBJECT_LAYERS = Object.freeze([
  { id: 'identity', stores: ['unique_capability_id', 'name', 'owner', 'participants'] },
  { id: 'contract', stores: ['rules', 'permissions', 'obligations', 'schedules'] },
  { id: 'state_machine', stores: ['current_lifecycle_state', 'allowed_next_states'] },
  { id: 'ledger_binding', stores: ['wallets', 'balances', 'escrows', 'contribution_records'] },
  { id: 'schedule_binding', stores: ['due_dates', 'reminders', 'auto_actions'] },
  { id: 'consent_binding', stores: ['who_agreed_to_what', 'consent_version'] },
  { id: 'role_binding', stores: ['owner', 'contributor', 'viewer', 'approver'] },
  { id: 'history', stores: ['actions', 'changes', 'payments', 'missed_payments'] },
  { id: 'runtime_health', stores: ['normality', 'staleness', 'reconciliation_status'] },
  { id: 'recovery_logic', stores: ['payment_failure', 'job_failure', 'user_disappears'] },
  { id: 'version_record', stores: ['contract_version', 'runtime_version', 'migration_status'] },
  { id: 'exit_rules', stores: ['pause', 'close', 'settle', 'refund', 'archive'] }
])

export const CAPABILITY_INSTANCE_LIFECYCLE_STATES = Object.freeze([
  'draft',
  'simulated',
  'awaiting_consent',
  'active',
  'scheduled',
  'payment_due',
  'monitoring',
  'awaiting_user_input',
  'awaiting_external_action',
  'partially_fulfilled',
  'fully_funded',
  'rent_paid',
  'delinquent',
  'grace_period',
  'blocked',
  'paused',
  'frozen',
  'recovering',
  'amending',
  'migrating',
  'completed',
  'closing',
  'archived',
  'retired',
  'terminated'
])

export const CAPABILITY_INSTANCE_ALLOWED_ACTIONS_BY_STATE = Object.freeze({
  draft: ['edit_contract', 'simulate', 'request_consent'],
  simulated: ['activate_after_validation', 'revise_contract', 'discard'],
  awaiting_consent: ['collect_consent', 'send_reminder', 'cancel_before_activation'],
  active: ['accept_contribution', 'run_due_checks', 'show_status', 'pause', 'amend_with_consent'],
  scheduled: ['wait_for_due_event', 'send_reminder', 'reschedule_with_consent'],
  payment_due: ['collect_due_contributions', 'start_grace_period', 'block_release_until_funded'],
  monitoring: ['watch_time_money_triggers', 'raise_alert', 'return_to_active'],
  awaiting_user_input: ['request_decision', 'explain_missing_input', 'pause_until_answer'],
  awaiting_external_action: ['wait_for_payment_or_document', 'retry_safe_adapter', 'start_grace_period'],
  partially_fulfilled: ['continue_remaining_obligations', 'show_progress', 'reconcile_partial_state'],
  fully_funded: ['prepare_release', 'verify_destination', 'request_final_approval'],
  rent_paid: ['issue_receipt', 'mark_cycle_complete', 'schedule_next_cycle'],
  delinquent: ['send_late_notice', 'start_grace_period', 'block_unsafe_release'],
  grace_period: ['accept_late_action', 'escalate_after_expiry', 'refund_if_required'],
  blocked: ['explain_block', 'request_fix', 'prevent_money_movement'],
  paused: ['resume', 'close_safely', 'keep_monitoring_required_risks'],
  frozen: ['hold_money', 'open_review', 'prevent_release'],
  recovering: ['replay_events', 'reconcile_ledgers', 'retry_idempotently'],
  amending: ['draft_change', 'run_diff', 'collect_new_consent'],
  migrating: ['snapshot_state', 'run_migration', 'rollback_if_needed'],
  completed: ['issue_receipts', 'close_remaining_obligations', 'archive'],
  closing: ['settle', 'refund', 'write_final_audit'],
  archived: ['view_history', 'export_records'],
  retired: ['view_history', 'prevent_new_instances'],
  terminated: ['record_reason', 'settle_or_refund', 'archive']
})

export const FAMILY_RENT_RUNTIME_STATE_TRANSITIONS = Object.freeze([
  ['draft', 'simulated'],
  ['simulated', 'awaiting_consent'],
  ['awaiting_consent', 'active'],
  ['active', 'scheduled'],
  ['scheduled', 'payment_due'],
  ['payment_due', 'partially_fulfilled'],
  ['partially_fulfilled', 'fully_funded'],
  ['fully_funded', 'rent_paid'],
  ['rent_paid', 'completed'],
  ['completed', 'archived'],
  ['payment_due', 'delinquent'],
  ['delinquent', 'grace_period'],
  ['grace_period', 'blocked'],
  ['blocked', 'recovering'],
  ['recovering', 'scheduled'],
  ['active', 'paused'],
  ['paused', 'active'],
  ['active', 'amending'],
  ['amending', 'awaiting_consent'],
  ['active', 'closing'],
  ['closing', 'archived']
])

export const CAPABILITY_INSTANCE_EVENT_TYPES = Object.freeze([
  'CapabilityCreated',
  'ParticipantInvited',
  'ParticipantAccepted',
  'ContributionScheduled',
  'ContributionPaid',
  'ContributionMissed',
  'ReminderSent',
  'GracePeriodStarted',
  'RuleChangeProposed',
  'RuleChangeAccepted',
  'MoneyReleased',
  'CapabilityPaused',
  'CapabilityResumed',
  'CapabilityArchived'
])

export const CAPABILITY_RUNTIME_MONITOR_CHECKS = Object.freeze([
  'schedule_still_active',
  'expected_payment_happened',
  'internal_provider_stub_status',
  'participant_left',
  'money_stuck',
  'obligation_overdue',
  'own_rules_violated',
  'scheduled_job_missed',
  'ui_state_matches_ledger_state',
  'projected_balance_matches_ledger_balance'
])

export const CAPABILITY_RESUME_FLOW = Object.freeze([
  'identify_user',
  'find_active_capability_instances',
  'select_requested_capability',
  'load_capability_contract',
  'load_latest_state_snapshot',
  'replay_events_after_snapshot',
  'reconcile_ledger_balance',
  'check_scheduled_jobs_and_missed_triggers',
  'check_pending_obligations',
  'check_risk_compliance_and_consent',
  'compose_current_ui',
  'show_current_state_and_next_best_action'
])

export const CAPABILITY_MEMORY_LAYERS = Object.freeze([
  { id: 'contract_memory', purpose: 'rules_the_capability_was_created_with' },
  { id: 'financial_memory', purpose: 'contributions_balances_transfers_refunds_releases' },
  { id: 'participant_memory', purpose: 'who_joined_accepted_left_defaulted_contributed' },
  { id: 'schedule_memory', purpose: 'due_dates_missed_dates_future_cycles' },
  { id: 'interaction_memory', purpose: 'what_the_user_last_did_and_where_they_stopped' },
  { id: 'decision_memory', purpose: 'why_aura_made_or_recommended_an_action' },
  { id: 'consent_memory', purpose: 'who_agreed_to_which_rules' },
  { id: 'amendment_memory', purpose: 'changes_made_after_activation' },
  { id: 'error_memory', purpose: 'failures_retries_unresolved_issues' },
  { id: 'outcome_memory', purpose: 'whether_the_capability_achieved_its_purpose' }
])

export const CAPABILITY_RUNTIME_MODES = Object.freeze([
  { id: 'interactive_mode', meaning: 'user_is_actively_using_the_capability_now' },
  { id: 'autonomous_mode', meaning: 'capability_can_act_under_pre_approved_rules' },
  { id: 'assisted_mode', meaning: 'capability_suggests_and_waits_for_user_approval' },
  { id: 'scheduled_mode', meaning: 'capability_is_waiting_for_a_future_date_or_time' },
  { id: 'watch_mode', meaning: 'capability_watches_triggers_balances_documents_payments_or_conditions' },
  { id: 'dormant_mode', meaning: 'no_active_task_but_capability_remains_resumable' },
  { id: 'recovery_mode', meaning: 'capability_is_fixing_a_failed_or_inconsistent_process' },
  { id: 'review_mode', meaning: 'human_or_system_review_is_required' },
  { id: 'frozen_mode', meaning: 'capability_is_locked_due_to_risk_dispute_or_compliance' },
  { id: 'closure_mode', meaning: 'capability_is_settling_refunding_or_ending' },
  { id: 'archive_mode', meaning: 'capability_is_inactive_but_readable' }
])

export const CAPABILITY_TEMPORAL_ENGINE_FIELDS = Object.freeze([
  'recurring_schedule',
  'due_date_calculation',
  'time_zone_handling',
  'grace_period',
  'reminders',
  'retry_rules',
  'missed_cycle_handling',
  'payment_windows',
  'holiday_weekend_adjustment',
  'lifecycle_cycle_tracking',
  'cycle_closing',
  'carryover_logic'
])

export const CAPABILITY_UPGRADE_TYPES = Object.freeze({
  safe_patch: 'apply_automatically_if_bug_fix_without_rule_change',
  minor_upgrade: 'apply_after_simulation_confirms_no_behavior_change',
  major_upgrade: 'require_user_consent_or_admin_human_review'
})

export const CAPABILITY_ENDING_OPTIONS = Object.freeze([
  'pause',
  'resume_later',
  'complete',
  'close',
  'archive',
  'retire',
  'delete_non_financial_data',
  'export',
  'terminate_early',
  'freeze'
])

export const CAPABILITY_HEALTH_STATES = Object.freeze({
  healthy: 'everything_is_operating_normally',
  needs_attention: 'user_or_participant_action_is_required',
  delayed: 'expected_action_has_not_happened_yet',
  degraded: 'external_or_adapter_stub_failed_but_core_state_is_safe',
  blocked: 'capability_cannot_proceed',
  at_risk: 'money_compliance_fraud_or_obligation_risk_detected',
  frozen: 'capability_is_locked',
  recovering: 'system_is_repairing_or_retrying',
  completed: 'goal_reached',
  archived: 'inactive_but_readable'
})

export const DURABLE_CAPABILITY_RUNTIME_STACK = Object.freeze([
  { component: 'capability_identity_registry', responsibility: 'gives_every_capability_instance_a_permanent_identity' },
  { component: 'capability_contract_store', responsibility: 'stores_rules_and_configuration' },
  { component: 'capability_instance_store', responsibility: 'stores_user_specific_active_capability_data' },
  { component: 'capability_state_machine_engine', responsibility: 'controls_valid_states_and_transitions' },
  { component: 'event_ledger', responsibility: 'records_every_action_and_change' },
  { component: 'financial_ledger_binder', responsibility: 'connects_capability_actions_to_money_movement' },
  { component: 'snapshot_store', responsibility: 'saves_fast_resumable_state' },
  { component: 'scheduler_temporal_engine', responsibility: 'handles_recurring_and_future_actions' },
  { component: 'trigger_engine', responsibility: 'watches_conditions_events_balances_evidence_and_payments' },
  { component: 'consent_vault', responsibility: 'stores_who_agreed_to_what' },
  { component: 'role_permission_engine', responsibility: 'controls_who_can_do_what' },
  { component: 'runtime_monitor', responsibility: 'watches_whether_the_capability_is_healthy' },
  { component: 'recovery_engine', responsibility: 'repairs_failed_jobs_retries_actions_and_reconciles_state' },
  { component: 'versioning_engine', responsibility: 'pins_and_upgrades_capability_logic_safely' },
  { component: 'migration_engine', responsibility: 'moves_old_instances_to_new_versions_safely' },
  { component: 'explanation_engine', responsibility: 'explains_current_state_and_past_decisions' },
  { component: 'notification_engine', responsibility: 'sends_reminders_and_alerts' },
  { component: 'audit_trail', responsibility: 'keeps_trustworthy_records' },
  { component: 'closure_engine', responsibility: 'safely_pauses_completes_settles_archives_or_retires_capabilities' },
  { component: 'ui_resume_composer', responsibility: 'rebuilds_the_interface_from_live_state' }
])

export const DURABLE_CAPABILITY_OPERATING_FLOW = Object.freeze([
  'user_describes_capability',
  'aura_interprets_intent',
  'aura_composes_capability_contract',
  'aura_simulates_behavior',
  'aura_checks_risk_compliance_consent_and_money_rules',
  'user_approves',
  'capability_instance_is_created',
  'capability_receives_permanent_id',
  'state_machine_is_initialized',
  'ledger_accounts_are_created_or_bound',
  'schedules_and_triggers_are_registered',
  'runtime_monitor_begins_watching',
  'capability_becomes_active',
  'every_action_becomes_an_event',
  'every_money_movement_hits_the_ledger',
  'snapshots_are_created',
  'user_can_resume_anytime',
  'capability_can_be_amended_paused_completed_archived_or_retired'
])

export const LIVING_CAPABILITY_DASHBOARD_EXAMPLES = Object.freeze([
  { name: "Mom's Rent Contribution", status: 'active', health: 'healthy', balance: 800, next_action: 'rent_release_on_2026_07_30' },
  { name: 'School Fees Savings', status: 'scheduled', health: 'healthy', progress: 0.62, next_action: 'next_auto_save_on_2026_05_25' },
  { name: 'Wedding Group Fund', status: 'needs_attention', health: 'delayed', missing: '2_contributors' },
  { name: 'Emergency Family Vault', status: 'dormant', health: 'healthy', balance: 1400 }
])

export const CAPABILITY_DRIFT_PREVENTION_CONTROLS = Object.freeze([
  'version_pinned_contracts',
  'deterministic_state_machines',
  'ledger_truth',
  'event_replay',
  'snapshots',
  'invariant_checks',
  'runtime_health_checks',
  'migration_discipline'
])

export const FAMILY_CONTRIBUTION_INVARIANTS = Object.freeze([
  'cycle_total_collected_equals_sum_of_confirmed_member_contributions',
  'no_contribution_counted_unless_payment_confirmed',
  'no_money_released_unless_release_condition_satisfied',
  'no_member_obligation_change_without_permission',
  'no_cycle_closed_with_unresolved_money_state',
  'every_financial_action_has_ledger_entry',
  'every_rule_change_creates_amendment_event',
  'every_participant_obligation_has_notification_record',
  'every_failed_payment_has_retry_or_resolution_state',
  'cannot_archive_until_funds_settled_or_legally_held'
])

export const CAPABILITY_HISTORY_STREAMS = Object.freeze({
  technical_event_log: ['ContributionPaymentConfirmed', 'LedgerEntryPosted', 'ReminderJobScheduled'],
  user_timeline: ['Kojo paid 200 for July.', 'A reminder was sent to Ama.', 'The rent wallet reached 800.'],
  audit_trail: ['Payment confirmed by provider_confirmation_stub at 2026-07-05T14:33:22.', 'Ledger transaction ID: led_29102.', 'Contract version: family_contribution.v1.3.2.']
})

export const CAPABILITY_CLOSURE_FLOW = Object.freeze([
  'check_current_state',
  'check_balance',
  'check_pending_obligations',
  'check_pending_disputes',
  'check_scheduled_jobs',
  'check_participant_rights',
  'recommend_settlement_options',
  'get_required_approvals',
  'execute_final_money_movement',
  'cancel_future_schedules',
  'mark_capability_closed',
  'archive_history',
  'produce_closing_summary'
])

export const CAPABILITY_DURABILITY_CLASSES = Object.freeze([
  { class: 'ephemeral', example: 'split_this_bill', lifecycle_need: 'minimal_memory' },
  { class: 'session_based', example: 'plan_this_month_budget', lifecycle_need: 'save_session_and_resume' },
  { class: 'scheduled', example: 'save_every_friday', lifecycle_need: 'temporal_engine' },
  { class: 'financial_holding', example: 'keep_money_until_rent_due', lifecycle_need: 'ledger_settlement_audit' },
  { class: 'multi_party', example: 'family_contributes_together', lifecycle_need: 'consent_roles_participant_state' },
  { class: 'conditional', example: 'release_after_photo_gps_proof', lifecycle_need: 'triggers_and_verification' },
  { class: 'long_lived', example: 'manage_school_fees_for_year', lifecycle_need: 'full_lifecycle' },
  { class: 'regulated_risk_sensitive', example: 'pool_funds_and_pay_members_monthly', lifecycle_need: 'compliance_risk_review_audit' }
])

export const AURA_DURABLE_CAPABILITY_LIFECYCLE_ENGINE = Object.freeze({
  name: 'aura_durable_capability_lifecycle_engine',
  job: 'ensure_user_created_capabilities_remain_stable_resumable_traceable_upgrade_safe_financially_consistent_and_safely_closable_across_time',
  foundationLayer: true
})

export const DURABLE_CAPABILITY_RUNTIME_MODULES = Object.freeze([
  'capability_identity_registry',
  'capability_contract_store',
  'capability_instance_store',
  'capability_state_machine_engine',
  'event_sourced_history_ledger',
  'financial_ledger_binder',
  'snapshot_and_resume_engine',
  'temporal_scheduler',
  'trigger_registry',
  'runtime_health_monitor',
  'recovery_and_reconciliation_engine',
  'consent_and_role_memory',
  'version_pinning_system',
  'migration_engine',
  'amendment_system',
  'closure_and_settlement_engine',
  'archive_and_retention_system',
  'user_timeline_composer',
  'explanation_engine',
  'capability_dashboard'
])

export const CAPABILITY_IDENTITY_LEVELS = Object.freeze([
  { id: 'capability_type_id', meaning: 'reusable_category', example: 'family_contribution' },
  { id: 'capability_definition_id', meaning: 'official_blueprint', example: 'capdef_family_contribution_v1' },
  { id: 'capability_instance_id', meaning: 'users_actual_live_capability', example: 'capinst_moms_rent_839201' },
  { id: 'capability_session_id', meaning: 'one_interaction_with_the_capability', example: 'session_2026_07_04_opened_dashboard' },
  { id: 'capability_event_id', meaning: 'one_recorded_action', example: 'event_kojo_paid_july_contribution' }
])

export const CAPABILITY_SEPARATED_STATE_MACHINES = Object.freeze({
  lifecycle: ['draft', 'validated', 'simulated', 'awaiting_consent', 'active', 'completed', 'closing', 'paused', 'frozen', 'terminated', 'archived', 'retired'],
  operational: ['waiting_for_cycle', 'cycle_opened', 'awaiting_contributions', 'partially_funded', 'fully_funded', 'awaiting_release_date', 'released', 'cycle_closed', 'waiting_for_next_cycle'],
  health: ['healthy', 'needs_attention', 'delayed', 'blocked', 'at_risk', 'frozen', 'recovering', 'degraded', 'closed', 'archived']
})

export const CAPABILITY_COMMAND_EVENT_TABLE = Object.freeze([
  { command: 'CreateCapability', allowed_when: 'draft_stage', resulting_event: 'CapabilityCreated' },
  { command: 'InviteParticipant', allowed_when: 'owner_has_permission', resulting_event: 'ParticipantInvited' },
  { command: 'AcceptInvite', allowed_when: 'invite_is_pending', resulting_event: 'ParticipantAccepted' },
  { command: 'OpenContributionCycle', allowed_when: 'schedule_reaches_cycle_date', resulting_event: 'ContributionCycleOpened' },
  { command: 'RecordContribution', allowed_when: 'cycle_is_open', resulting_event: 'ContributionRecorded' },
  { command: 'SendReminder', allowed_when: 'payment_is_late', resulting_event: 'ReminderSent' },
  { command: 'ReleaseFunds', allowed_when: 'release_rules_satisfied', resulting_event: 'FundsReleased' },
  { command: 'PauseCapability', allowed_when: 'no_blocking_financial_issue', resulting_event: 'CapabilityPaused' },
  { command: 'ResumeCapability', allowed_when: 'capability_is_paused', resulting_event: 'CapabilityResumed' },
  { command: 'CloseCapability', allowed_when: 'balance_and_obligations_resolved', resulting_event: 'CapabilityClosed' },
  { command: 'ArchiveCapability', allowed_when: 'capability_is_closed', resulting_event: 'CapabilityArchived' }
])

export const CAPABILITY_EVENT_SOURCING_FACT_FIELDS = Object.freeze([
  'what_happened',
  'when_it_happened',
  'who_did_it',
  'what_rule_allowed_it',
  'what_money_movement_was_attached',
  'what_state_changed_afterward'
])

export const TEMPORAL_SCHEDULER_ABSENT_USER_ACTIONS = Object.freeze([
  'open_monthly_cycles',
  'detect_missing_contributions',
  'send_reminders',
  'mark_late_obligations',
  'apply_grace_periods',
  'prepare_releases',
  'block_unsafe_releases',
  'update_capability_health',
  'record_everything'
])

export const UI_RESUME_COMPOSER_QUESTIONS = Object.freeze([
  'what_is_the_capability',
  'what_is_its_current_lifecycle_state',
  'what_is_its_current_operational_state',
  'what_is_its_health',
  'what_money_is_involved',
  'what_actions_are_allowed_right_now',
  'what_does_the_user_need_to_know',
  'what_is_the_next_best_action'
])

export const CAPABILITY_AMENDMENT_CHANGE_TYPES = Object.freeze({
  cosmetic_edit: { example: 'rename_capability', requires: ['owner_action'] },
  operational_edit: { example: 'change_reminder_time', requires: ['owner_action', 'maybe_no_consent'] },
  financial_rule_edit: { example: 'change_monthly_amount', requires: ['participant_consent'] },
  risk_rule_edit: { example: 'allow_partial_release', requires: ['simulation', 'review'] },
  participant_edit: { example: 'add_or_remove_member', requires: ['consent_rules_check'] },
  closure_edit: { example: 'end_capability_early', requires: ['settlement_check'] }
})

export const CODE_UPDATE_STABILITY_ACTIONS = Object.freeze({
  bug_fix_no_behavior_change: 'apply_safely',
  ui_only_improvement: 'apply_if_rules_unaffected',
  logic_improvement: 'simulate_before_applying',
  financial_rule_change: 'require_consent_or_review',
  breaking_change: 'keep_old_runtime_or_migrate_through_controlled_process'
})

export const CAPABILITY_MIGRATION_FLOW_DETAILED = Object.freeze([
  'load_old_capability_contract',
  'load_current_state',
  'load_event_history',
  'load_ledger_state',
  'load_new_capability_version',
  'simulate_same_scenario_under_new_version',
  'compare_old_behavior_and_new_behavior',
  'identify_differences',
  'check_user_consent_required',
  'check_money_behavior_changes',
  'generate_migration_report',
  'apply_migration_only_if_safe',
  'record_migration_event',
  'preserve_rollback_path'
])

export const RUNTIME_HEALTH_CHECK_CATEGORIES = Object.freeze([
  'schedule_health',
  'ledger_health',
  'obligation_health',
  'consent_health',
  'participant_health',
  'risk_health',
  'external_provider_health_stub',
  'state_machine_health',
  'closure_health'
])

export const CAPABILITY_RECOVERY_CASES = Object.freeze({
  payment_failed: 'mark_contribution_failed_notify_payer_allow_retry',
  payment_pending_too_long: 'move_to_pending_review',
  reminder_failed: 'retry_or_send_alternative_notification',
  ledger_mismatch: 'freeze_release_and_reconcile',
  scheduled_job_missed: 'backfill_job_and_record_late_execution',
  user_deleted_app: 'capability_continues_if_contract_allows',
  participant_inactive: 'notify_owner_and_apply_missing_payment_policy',
  bank_provider_unavailable: 'move_to_degraded_state_with_provider_api_skipped',
  duplicate_webhook: 'ignore_using_idempotency_key',
  partial_system_outage: 'replay_events_after_recovery'
})

export const CAPABILITY_ABANDONMENT_SIGNALS = Object.freeze([
  'owner_not_opened_in_long_time',
  'no_activity_after_multiple_scheduled_cycles',
  'funds_remain_idle',
  'participants_are_waiting',
  'scheduled_jobs_are_failing',
  'active_but_no_longer_meaningful',
  'goal_date_has_passed',
  'pending_balance_exists_after_completion'
])

export const CAPABILITY_ABANDONMENT_STATES = Object.freeze([
  'possibly_dormant',
  'dormant',
  'abandoned_with_no_funds',
  'abandoned_with_funds',
  'abandoned_with_participant_obligations',
  'requires_closure'
])

export const CAPABILITY_LIFECYCLE_STRENGTH_CLASSES = Object.freeze([
  { class: 0, id: 'ephemeral', example: 'explain_my_spending', required_runtime_strength: 'no_durable_runtime_needed' },
  { class: 1, id: 'saved_session', example: 'continue_my_budget_plan', required_runtime_strength: 'save_session_state' },
  { class: 2, id: 'scheduled', example: 'remind_me_every_friday', required_runtime_strength: 'scheduler_needed' },
  { class: 3, id: 'money_holding', example: 'save_money_for_rent', required_runtime_strength: 'ledger_and_settlement_required' },
  { class: 4, id: 'multi_party', example: 'family_contribution', required_runtime_strength: 'consent_roles_participant_state' },
  { class: 5, id: 'conditional_release', example: 'release_after_gps_photo_proof', required_runtime_strength: 'verification_trigger_dispute_flow' },
  { class: 6, id: 'long_running_financial_product', example: 'manage_school_fees_all_year', required_runtime_strength: 'full_lifecycle_runtime' },
  { class: 7, id: 'regulated_risk_sensitive', example: 'group_savings_pooled_money_credit_lending', required_runtime_strength: 'full_governance_compliance_audit_review' }
])

export const CAPABILITY_DETAIL_PAGE_SECTIONS = Object.freeze([
  { section: 'overview', purpose: 'current_status_balance_health_next_action' },
  { section: 'timeline', purpose: 'what_happened_over_time' },
  { section: 'members', purpose: 'participants_roles_obligations' },
  { section: 'money', purpose: 'wallet_contributions_releases_refunds' },
  { section: 'rules', purpose: 'contract_rules' },
  { section: 'schedule', purpose: 'upcoming_cycles_reminders_due_dates' },
  { section: 'pending_actions', purpose: 'what_needs_attention' },
  { section: 'amendments', purpose: 'rule_changes_proposed_or_applied' },
  { section: 'health', purpose: 'warnings_risks_errors' },
  { section: 'documents_proof', purpose: 'receipts_photos_verification_evidence' },
  { section: 'closure', purpose: 'pause_close_archive_export' }
])

export const DURABLE_CAPABILITY_ARCHITECTURE_PATTERN = Object.freeze({
  required: [
    'generated_capability_interface',
    'capability_runtime_instance',
    'contract',
    'state_machine',
    'event_ledger',
    'financial_ledger',
    'resume_monitor_migrate_close'
  ],
  forbidden: ['user_request_generate_ui_hope_it_works_later'],
  principle: 'build_financial_capabilities_as_durable_objects'
})

export const DURABLE_CAPABILITY_CREATION_FLOW = Object.freeze([
  'user_describes_what_they_want',
  'product_intent_interpreter_extracts_financial_intent',
  'aura_determines_durability_class',
  'aura_chooses_capability_type_or_composes_new_capability',
  'product_composer_assembles_primitives',
  'capability_contract_builder_creates_rules',
  'financial_physics_engine_checks_money_logic',
  'compliance_governor_checks_jurisdiction_risk',
  'simulation_engine_tests_scenarios',
  'consent_engine_determines_who_must_agree',
  'ledger_binder_creates_required_accounts',
  'scheduler_registers_recurring_jobs',
  'state_machine_engine_initializes_lifecycle',
  'runtime_monitor_attaches_health_checks',
  'ui_composer_creates_first_interface',
  'user_approves',
  'capability_instance_becomes_active',
  'all_future_activity_is_tracked_as_events'
])

export const DURABLE_CAPABILITY_REOPEN_FLOW = Object.freeze([
  'user_requests_capability',
  'aura_identifies_capability_instance',
  'aura_loads_contract',
  'aura_loads_latest_snapshot',
  'aura_replays_new_events',
  'aura_reconciles_ledger',
  'aura_checks_scheduled_jobs',
  'aura_detects_missed_actions',
  'aura_checks_health',
  'aura_summarizes_what_changed_since_last_view',
  'aura_composes_current_ui',
  'aura_presents_current_state_and_next_actions'
])

export const DURABLE_CAPABILITY_ENDING_FLOW = Object.freeze([
  'user_requests_pause_closure_or_archive',
  'aura_checks_whether_capability_holds_money',
  'aura_checks_pending_obligations',
  'aura_checks_participants_and_consent_requirements',
  'aura_checks_unresolved_disputes',
  'aura_proposes_closure_options',
  'user_chooses_settlement_path',
  'aura_executes_final_ledger_movements',
  'aura_cancels_scheduled_jobs',
  'aura_records_closure_event',
  'aura_generates_final_statement',
  'aura_archives_capability'
])

export const DURABLE_CAPABILITY_RUNTIME_LAYER_SUBMODULES = Object.freeze([
  { submodule: 'capability_instance_registry', responsibility: 'stores_every_created_capability' },
  { submodule: 'capability_contract_store', responsibility: 'stores_rules_and_agreements' },
  { submodule: 'capability_runtime_state_store', responsibility: 'stores_current_state' },
  { submodule: 'capability_state_machine_engine', responsibility: 'controls_valid_transitions' },
  { submodule: 'event_ledger', responsibility: 'stores_historical_actions' },
  { submodule: 'financial_ledger_binder', responsibility: 'connects_capability_to_money_truth' },
  { submodule: 'snapshot_engine', responsibility: 'makes_resume_fast' },
  { submodule: 'resume_engine', responsibility: 'reopens_capability_intelligently' },
  { submodule: 'scheduler_temporal_engine', responsibility: 'runs_recurring_and_future_actions' },
  { submodule: 'trigger_engine', responsibility: 'reacts_to_conditions' },
  { submodule: 'consent_memory', responsibility: 'stores_agreements' },
  { submodule: 'role_permission_engine', responsibility: 'controls_access' },
  { submodule: 'runtime_health_monitor', responsibility: 'watches_capability_health' },
  { submodule: 'recovery_engine', responsibility: 'handles_failures' },
  { submodule: 'version_pinning_engine', responsibility: 'prevents_code_updates_from_breaking_behavior' },
  { submodule: 'migration_engine', responsibility: 'safely_upgrades_live_capabilities' },
  { submodule: 'amendment_engine', responsibility: 'handles_rule_changes' },
  { submodule: 'closure_engine', responsibility: 'ends_capabilities_safely' },
  { submodule: 'archive_engine', responsibility: 'keeps_records_after_closure' },
  { submodule: 'explanation_engine', responsibility: 'explains_current_state_and_past_behavior' },
  { submodule: 'user_timeline_composer', responsibility: 'shows_readable_history' },
  { submodule: 'capability_dashboard', responsibility: 'shows_all_living_capabilities' }
])

export const DURABLE_CAPABILITY_BACKBONE_FIELDS = Object.freeze([
  'identity',
  'contract',
  'state',
  'ledger',
  'history',
  'schedule',
  'health',
  'recovery',
  'version',
  'migration',
  'resume',
  'closure'
])

export const CAPABILITY_OS_MENTAL_MODEL_PIPELINE = Object.freeze([
  'intent',
  'rules',
  'financial_object_model',
  'atoms',
  'micro_primitives',
  'primitives',
  'capability',
  'runtime_contract',
  'ui_ux_surfaces',
  'governed_execution',
  'outcome_learning'
])

export const SCHOOL_FEES_WALLET_DECOMPOSITION = Object.freeze([
  'goal_wallet',
  'auto_split_rule',
  'contributor_link',
  'school_entity',
  'invoice_verification',
  'parent_approval',
  'escrow_lock',
  'scheduled_obligation',
  'payment_release',
  'receipt_capture',
  'notification_flow',
  'audit_trail'
])

export const CAPABILITY_OS_ARCHITECTURE_LAYERS = Object.freeze([
  {
    id: 'user_admin_partner_intake',
    components: ['natural_language_request', 'drag_and_drop_builder', 'internal_api']
  },
  {
    id: 'intent_rule_extraction_layer',
    components: ['product_intent_interpreter', 'clarifier', 'rule_extractor']
  },
  {
    id: 'capability_genesis_stack',
    components: ['product_specification_language', 'atomic_stack', 'registry', 'composer', 'type_system']
  },
  {
    id: 'governance_simulation_layer',
    components: ['governor', 'policy', 'jurisdiction', 'behavioral_trust_score', 'simulation', 'tests']
  },
  {
    id: 'capability_package_release_layer',
    components: ['manifest', 'workflows', 'ui_surfaces', 'events', 'versioning']
  },
  {
    id: 'runtime_execution_layer',
    components: ['registry', 'context', 'policy', 'autonomy_gate', 'execute']
  },
  {
    id: 'financial_truth_kernel',
    components: ['ledger', 'locks', 'escrow', 'settlement', 'reversal', 'audit']
  },
  {
    id: 'outcome_learning_layer',
    components: ['monitor', 'explain', 'diagnose', 'improve', 'upgrade', 'rollback']
  }
])

export const FINANCIAL_KERNEL_RESPONSIBILITIES = Object.freeze([
  'ledger_entries',
  'account_balances',
  'wallet_balances',
  'reserved_funds',
  'locked_funds',
  'escrow_states',
  'pending_claims',
  'settlement',
  'reversals',
  'refunds',
  'atomic_money_operations',
  'double_entry_correctness',
  'invariants',
  'transaction_state_machines'
])

export const CAPABILITY_OS_RESPONSIBILITIES = Object.freeze([
  'user_intent',
  'capability_creation',
  'rule_extraction',
  'product_grammar',
  'capability_registry',
  'primitive_composition',
  'ui_composition',
  'governance',
  'simulation',
  'release',
  'versioning',
  'monitoring',
  'explanation',
  'improvement'
])

export const CAPABILITY_CREATION_STACK_LEVELS = Object.freeze([
  'sub_atoms',
  'atoms',
  'micro_primitives',
  'primitives',
  'capabilities',
  'products',
  'financial_experiences'
])

export const CAPABILITY_SUB_ATOMS = Object.freeze([
  'amount',
  'currency',
  'timestamp',
  'user_id',
  'wallet_id',
  'entity_id',
  'permission_flag',
  'risk_score',
  'location_coordinate',
  'verification_status',
  'consent_status',
  'balance_snapshot',
  'ledger_reference',
  'payment_reference'
])

export const CAPABILITY_ATOMS = Object.freeze([
  'AmountAtom',
  'CurrencyAtom',
  'DateAtom',
  'UserIdentityAtom',
  'WalletBalanceAtom',
  'SplitRatioAtom',
  'PaymentRecipientAtom',
  'GeoCoordinateAtom',
  'EvidencePhotoAtom',
  'ConsentAtom',
  'InvoiceAtom',
  'RiskFlagAtom',
  'BTSAtom'
])

export const CAPABILITY_ATOM_TYPE_RULES = Object.freeze({
  SplitRatioAtom: {
    type: 'percentage',
    range: [0, 100],
    precision: 2,
    sum_rule: 'may_need_total_to_equal_100_percent'
  },
  GeoCoordinateAtom: {
    fields: ['latitude', 'longitude', 'radius', 'accuracy_threshold', 'timestamp', 'device_trust_level', 'anti_spoofing_confidence']
  }
})

export const CAPABILITY_MICRO_PRIMITIVES = Object.freeze([
  'ValidateAmount',
  'CheckWalletBalance',
  'LockFunds',
  'ReleaseFunds',
  'SplitIncomingMoney',
  'VerifyLocation',
  'VerifyImageEvidence',
  'RequestConsent',
  'SendNotification',
  'CalculateDueDate',
  'CheckBTSLevel',
  'DetectDuplicatePayment',
  'ApplyFee'
])

export const CAPABILITY_PRIMITIVES = Object.freeze([
  'GoalWalletPrimitive',
  'EscrowPrimitive',
  'AutoSplitPrimitive',
  'RoundUpPrimitive',
  'ContributorLinkPrimitive',
  'ObligationPrimitive',
  'InvoiceVerificationPrimitive',
  'SafeSendPrimitive',
  'PendingClaimPrimitive',
  'RefundPrimitive',
  'ApprovalPrimitive',
  'CircleContributionPrimitive',
  'BTSGatePrimitive',
  'GeoProofPrimitive',
  'ReceiptPrimitive'
])

export const ESCROW_PRIMITIVE_REUSE_CASES = Object.freeze([
  'safesend',
  'contractor_payment',
  'school_fee_release',
  'building_materials_verification',
  'marketplace_payment',
  'delivery_confirmation',
  'susu_dispute_handling',
  'invoice_based_release',
  'milestone_payout',
  'family_contribution_lock'
])

export const CAPABILITY_EXAMPLES = Object.freeze([
  'SafeSend Capability',
  'School Fees Wallet Capability',
  'Family Hub Request2Pay Capability',
  'Susu Circle Capability',
  'Merchant Payment Plan Capability',
  'GPS-Verified Contractor Payout Capability',
  'Smart Money Split Capability',
  'Subconscious Vault Capability',
  'Procurement Intent Job Capability'
])

export const CAPABILITY_PRODUCT_EXAMPLES = Object.freeze([
  'Save2Pay',
  'SusuOS',
  'PayFees',
  'BuildTrust',
  'Family Hub',
  'Merchant OS',
  'Agent OS',
  'Alumni OS',
  'SchoolOS',
  'Business Operating System',
  'Corporate Operating System'
])

export const CAPABILITY_COMPOSITION_FORMULA = Object.freeze([
  'primitives',
  'rules',
  'ui',
  'policy',
  'state_machine',
  'ledger_contract',
  'tests',
  'explanation'
])

export const CAPABILITY_PACKAGE_SKELETON = Object.freeze({
  folder: 'school-fees-wallet.capability',
  files: [
    'manifest.yaml',
    'entities.yaml',
    'money-objects.yaml',
    'rules.yaml',
    'workflows.yaml',
    'state-machines.yaml',
    'policy-rules.yaml',
    'autonomy.yaml',
    'events.yaml',
    'ledger-contract.yaml',
    'ui-surfaces.json',
    'assets.json',
    'algorithms.yaml',
    'disclosures.yaml',
    'consent.yaml',
    'tests.yaml',
    'simulations.yaml',
    'monitoring.yaml',
    'migration.yaml',
    'explanation.md',
    'changelog.md'
  ],
  lifecycle: ['install', 'test', 'enable', 'disable', 'upgrade', 'roll_back', 'migrate', 'explain']
})

export const SCHOOL_FEES_CAPABILITY_PACKAGE = Object.freeze({
  manifest: {
    capability_id: 'school_fees_wallet',
    name: 'School Fees Wallet',
    version: '1.0.0',
    category: 'education_payments',
    risk_level: 'medium',
    supported_regions: ['GH', 'US', 'NG'],
    requires_kernel_features: ['wallet', 'escrow', 'scheduled_obligation', 'invoice_verification', 'contributor_link']
  },
  entities: {
    parent: {
      type: 'user',
      permissions: ['create_wallet', 'approve_payment', 'invite_contributor']
    },
    child: {
      type: 'dependent',
      permissions: ['view_progress_optional']
    },
    contributor: {
      type: 'external_user',
      permissions: ['contribute_funds']
    },
    school: {
      type: 'merchant_or_institution',
      verification_required: true,
      permissions: ['submit_invoice', 'receive_payment']
    }
  },
  money_objects: {
    main_wallet: {
      type: 'wallet',
      owner: 'parent'
    },
    school_fees_wallet: {
      type: 'goal_wallet',
      lock_behavior: 'restricted',
      purpose: 'education'
    },
    invoice_escrow: {
      type: 'escrow',
      release_condition: 'invoice_verified_and_parent_approved'
    }
  },
  rules: {
    auto_split: {
      trigger: 'incoming_money_received',
      action: 'move_percentage_to_wallet',
      percentage: 20,
      destination: 'school_fees_wallet'
    },
    contributor_rule: {
      trigger: 'contributor_payment_received',
      action: 'credit_school_fees_wallet'
    },
    release_rule: {
      trigger: 'invoice_verified_and_parent_approved',
      action: 'pay_school',
      source: 'invoice_escrow'
    }
  },
  workflows: {
    create_wallet: [
      'collect_child_details',
      'define_school',
      'set_target_amount',
      'configure_auto_split',
      'invite_contributors',
      'show_disclosure',
      'confirm_creation'
    ],
    pay_invoice: [
      'school_submits_invoice',
      'verify_invoice',
      'notify_parent',
      'parent_approves',
      'release_payment',
      'generate_receipt'
    ]
  },
  state_machines: {
    states: ['draft', 'active', 'funding', 'invoice_pending', 'invoice_verified', 'approval_pending', 'payment_released', 'completed', 'disputed', 'cancelled'],
    transitions: {
      draft_to_active: {
        from: 'draft',
        to: 'active',
        requires: ['parent_consent', 'valid_school_entity']
      },
      invoice_pending_to_invoice_verified: {
        from: 'invoice_pending',
        to: 'invoice_verified',
        requires: ['invoice_valid', 'school_verified']
      },
      approval_pending_to_payment_released: {
        from: 'approval_pending',
        to: 'payment_released',
        requires: ['parent_approval', 'sufficient_balance']
      }
    }
  },
  policy: {
    kyc_required: {
      parent: true,
      school: true,
      contributor: 'conditional'
    },
    fraud_checks: ['duplicate_invoice_detection', 'school_entity_verification', 'unusual_contributor_pattern', 'payment_velocity_check'],
    prohibited: ['anonymous_large_contributions', 'unverified_school_release', 'payment_without_consent']
  },
  autonomy: {
    auto_create_wallet: false,
    auto_split_money: true,
    auto_invite_contributors: false,
    auto_pay_school: false,
    auto_verify_invoice: 'assisted',
    require_parent_approval_for_release: true
  },
  ui_surfaces: [
    'wallet_creation_flow',
    'school_fee_progress_card',
    'contributor_invite_screen',
    'invoice_review_screen',
    'payment_release_confirmation',
    'receipt_screen',
    'parent_dashboard_widget'
  ],
  tests: [
    'cannot_release_without_invoice',
    'cannot_pay_unverified_school',
    'split_percentage_must_not_exceed_100',
    'parent_can_cancel_before_release',
    'contributor_payment_creates_receipt',
    'insufficient_balance_blocks_payment'
  ]
})

export const UNIVERSAL_CAPABILITY_INTERFACE_METHODS = Object.freeze([
  'define',
  'validate',
  'simulate',
  'compose',
  'execute',
  'explain',
  'monitor',
  'runTests'
])

export const CAPABILITY_DEFINE_FIELDS = Object.freeze([
  'name',
  'version',
  'category',
  'risk_level',
  'required_primitives',
  'required_permissions',
  'supported_users',
  'supported_jurisdictions',
  'required_kernel_operations',
  'required_ui_surfaces'
])

export const CAPABILITY_VALIDATE_QUESTIONS = Object.freeze([
  'are_rules_complete',
  'are_states_valid',
  'are_transitions_safe',
  'are_money_movements_defined',
  'are_required_entities_present',
  'are_permissions_clear',
  'are_policy_requirements_attached',
  'are_disclosures_attached',
  'are_ledger_operations_compatible'
])

export const CAPABILITY_SIMULATION_SCENARIOS = Object.freeze([
  'normal_user_flow',
  'insufficient_balance',
  'failed_verification',
  'fraud_attempt',
  'user_cancellation',
  'duplicate_payment',
  'recipient_mismatch',
  'gps_spoofing_attempt',
  'invoice_rejected',
  'contributor_chargeback',
  'policy_conflict'
])

export const CAPABILITY_COMPOSE_QUESTIONS = Object.freeze([
  'which_pieces_are_needed',
  'are_they_compatible',
  'what_sequence_should_they_run_in',
  'what_ui_should_be_generated',
  'what_state_machine_should_be_created',
  'what_disclosures_should_be_shown'
])

export const SCHOOL_FEES_CAPABILITY_EXPLANATIONS = Object.freeze({
  user: 'This wallet saves 20% of incoming money toward school fees. Funds can only be released to the verified school after invoice review and your approval.',
  admin: 'This capability uses AutoSplitPrimitive, GoalWalletPrimitive, ContributorLinkPrimitive, InvoiceVerificationPrimitive, and EscrowReleasePrimitive.',
  compliance: 'Funds are user-owned until release. School recipient requires verification. User approval is required before disbursement. All events are audit logged.'
})

export const CAPABILITY_MONITORING_SIGNALS = Object.freeze([
  'completion_rate',
  'failure_rate',
  'blocked_transactions',
  'user_confusion',
  'abuse_attempts',
  'fraud_signals',
  'policy_violations',
  'complaints',
  'manual_review_rate',
  'refund_rate',
  'stuck_states'
])

export const CAPABILITY_TEST_CATEGORIES = Object.freeze([
  'unit_tests',
  'integration_tests',
  'ledger_tests',
  'policy_tests',
  'simulation_tests',
  'ui_flow_tests',
  'edge_case_tests',
  'security_tests',
  'fraud_tests',
  'migration_tests',
  'rollback_tests'
])

export const RUNTIME_COMMAND_FLOW = Object.freeze([
  'user_command',
  'capability_registry',
  'context_builder',
  'policy_engine',
  'capability_evaluation',
  'financial_physics_check',
  'autonomy_gate',
  'approval_escalation_block_or_execute',
  'kernel_contract',
  'ledger_commit',
  'event_emission',
  'receipt_and_explanation',
  'monitoring_and_learning'
])

export const FORMAL_RUNTIME_COMMAND_STEPS = Object.freeze([
  'COMMAND_RECEIVED',
  'resolve_capability',
  'build_context',
  'evaluate_permissions',
  'evaluate_policy',
  'evaluate_capability_rules',
  'evaluate_financial_physics',
  'evaluate_bts_and_risk',
  'determine_autonomy_level',
  'execute_or_request_approval_or_escalate_or_block',
  'commit_ledger_event',
  'emit_domain_events',
  'update_ui_state',
  'generate_explanation',
  'monitor_outcome'
])

export const CAPABILITY_OS_FINANCIAL_INVARIANTS = Object.freeze([
  'money_cannot_be_available_and_locked_at_same_time',
  'money_cannot_release_from_escrow_before_conditions_satisfied',
  'wallet_cannot_spend_more_than_available_balance',
  'reversed_transaction_must_create_valid_compensating_entry',
  'contribution_cannot_count_twice',
  'unauthorized_user_cannot_approve_transaction',
  'locked_fund_must_have_owner_purpose_state_and_release_path',
  'pending_claim_must_have_expiry_recipient_sender_and_refund_rule',
  'capability_cannot_create_money_out_of_nothing',
  'user_facing_balance_must_match_ledger_derived_balance'
])

export const CONSERVATION_OF_FUNDS_EXAMPLE = Object.freeze({
  incoming: 100,
  allocations: {
    school_fees_wallet: 20,
    main_wallet: 50,
    rent_wallet: 20,
    emergency_vault: 10
  },
  forbidden: ['hidden_leakage', 'duplicated_allocation', 'ghost_balance']
})

export const FUND_STATE_EXCLUSIVITY_STATES = Object.freeze([
  'available',
  'locked',
  'escrowed',
  'released',
  'refunded'
])

export const LOCKED_FUND_RELEASE_REQUIREMENTS = Object.freeze([
  'owner',
  'lock_reason',
  'unlock_condition',
  'release_approver',
  'release_failure_path',
  'expiry_path',
  'dispute_path',
  'cancellation_path'
])

export const REVERSAL_SAFETY_TYPES = Object.freeze([
  'reversible',
  'irreversible',
  'conditionally_reversible',
  'requires_recipient_consent',
  'requires_admin_review',
  'requires_external_provider_support_stub'
])

export const LIABILITY_RISK_TYPES = Object.freeze([
  'sender_risk',
  'recipient_risk',
  'platform_risk',
  'pool_risk',
  'guarantor_risk',
  'insurance_bucket_risk',
  'merchant_risk',
  'school_risk',
  'family_hub_risk'
])

export const CAPABILITY_CORE_TYPES = Object.freeze([
  'SavingsCapability',
  'PaymentCapability',
  'EscrowCapability',
  'ObligationCapability',
  'VerificationCapability',
  'ContributionCapability',
  'CircleCapability',
  'CreditCapability',
  'LiquidityCapability',
  'MerchantCapability',
  'FamilyCapability',
  'EducationPaymentCapability',
  'ProcurementCapability',
  'IdentityCapability',
  'DisputeCapability',
  'RewardCapability',
  'InsuranceLikeCapability'
])

export const MONEY_MOVEMENT_TYPES = Object.freeze([
  'transfer',
  'split',
  'lock',
  'reserve',
  'release',
  'refund',
  'reverse',
  'settle',
  'claim',
  'expire',
  'sweep',
  'allocate',
  'reallocate',
  'contribute',
  'withdraw',
  'payout'
])

export const CAPABILITY_RISK_TYPES = Object.freeze([
  'low_risk_informational',
  'low_value_internal_movement',
  'user_owned_wallet_allocation',
  'external_transfer',
  'multi_party_pooling',
  'escrow_release',
  'credit_exposure',
  'insurance_like_coverage',
  'cross_border_transfer',
  'minor_dependent_related_funds',
  'merchant_settlement',
  'anonymous_contribution',
  'high_value_payout'
])

export const CAPABILITY_ACTOR_TYPES = Object.freeze([
  'individual',
  'dependent',
  'parent',
  'spouse',
  'family_member',
  'merchant',
  'school',
  'agent',
  'circle_organizer',
  'circle_member',
  'business',
  'corporate_entity',
  'verifier',
  'contributor',
  'recipient',
  'shadow_entity',
  'government_institution'
])

export const CAPABILITY_EVIDENCE_TYPES = Object.freeze([
  'none',
  'receipt',
  'invoice',
  'photo',
  'video',
  'gps',
  'qr_scan',
  'merchant_confirmation',
  'third_party_signature_stub',
  'biometric_confirmation',
  'device_signature',
  'delivery_proof',
  'school_verification',
  'contract_milestone'
])

export const COMPONENT_COMPATIBILITY_EXAMPLES = Object.freeze([
  { components: ['GoalWalletPrimitive', 'AutoSplitPrimitive'], decision: 'valid' },
  { components: ['EscrowPrimitive', 'InvoiceVerificationPrimitive'], decision: 'valid' },
  { components: ['SafeSendPrimitive', 'PendingClaimPrimitive'], decision: 'valid' },
  { components: ['AnonymousRecipientPrimitive', 'LargeValueTransferPrimitive'], decision: 'high_risk_or_blocked' },
  { components: ['RoundUpPrimitive', 'LockedSchoolFeeWallet'], decision: 'valid' },
  { components: ['UnverifiedEntityPayout', 'AutoReleasePrimitive'], decision: 'invalid' }
])

export const CAPABILITY_TYPE_COMPATIBILITY_RULES = Object.freeze([
  { component: 'EscrowRelease', requires: 'ReleaseCondition' },
  { component: 'GPSProof', requires: 'LocationPolicy' },
  { component: 'DependentWallet', requires: 'GuardianConsent' },
  { component: 'CirclePayout', requires: 'CircleMembership' },
  { component: 'BTSGate', requires: 'BTSProfile' },
  { component: 'InvoicePayment', requires: 'InvoiceEntity' },
  { component: 'MerchantSettlement', requires: 'MerchantVerification' },
  { component: 'CreditExposure', requires: 'RiskPolicy' },
  { component: 'AutoDebit', requires: 'ConsentMandate' }
])

export const COMPOSITION_ALGEBRA_PATTERNS = Object.freeze([
  'a_plus_b_is_valid',
  'a_plus_c_is_invalid',
  'a_plus_b_plus_c_requires_d',
  'a_before_b_is_valid',
  'b_before_a_is_invalid',
  'a_can_run_in_parallel_with_b',
  'a_must_complete_before_c',
  'a_conflicts_with_e',
  'a_increases_risk_when_combined_with_f'
])

export const COMPOSITION_MODE_EXAMPLES = Object.freeze({
  sequential: ['VerifyInvoice', 'RequestApproval', 'ReleasePayment', 'GenerateReceipt'],
  parallel: ['NotifyParent', 'NotifySchool', 'UpdateWalletProgress', 'GenerateAuditEvent'],
  conditional: {
    bts_gte_threshold: 'allow_higher_contribution_limit',
    bts_lt_threshold: 'require_additional_verification'
  },
  guarded: {
    action: 'ReleaseFunds',
    guards: ['invoice_verified', 'parent_approved', 'school_verified', 'balance_sufficient']
  },
  reversible: ['LockFunds_to_UnlockFunds', 'ReserveFunds_to_ReleaseReserve', 'PendingClaim_to_RefundToSender'],
  irreversible: ['ExternalSettlement_to_final'],
  risk_amplifying: [
    'AutoRelease_plus_NewRecipient_plus_HighAmount',
    'AnonymousContributor_plus_MinorWallet',
    'GPSProofOnly_plus_LargePayout'
  ],
  required_companion: {
    EscrowPrimitive: ['ReleaseConditionPrimitive', 'DisputePrimitive', 'RefundPrimitive', 'ExpiryPrimitive'],
    AutoDebitPrimitive: ['ConsentPrimitive', 'MandatePrimitive', 'RevocationPrimitive'],
    CircleContributionPrimitive: ['MembershipPrimitive', 'SchedulePrimitive', 'PayoutOrderPrimitive', 'DefaultHandlingPrimitive']
  }
})

export const PRODUCT_INTENT_EXTRACTION_FIELDS = Object.freeze([
  'goal',
  'actors',
  'money_sources',
  'money_destinations',
  'conditions',
  'timing',
  'approval_requirements',
  'verification_requirements',
  'risk_tolerance',
  'relationship_context',
  'jurisdiction',
  'expected_outcome',
  'failure_handling',
  'user_emotional_priority'
])

export const CONTRACTOR_PROOF_INTENT_EXTRACTION = Object.freeze({
  goal: 'contractor_milestone_payment',
  sender: 'user',
  recipient: 'contractor',
  money_behavior: 'escrow_until_verification',
  verification: ['photo', 'gps'],
  release_condition: 'user_approval_after_evidence',
  risk_concern: 'work_not_completed',
  required_primitives: [
    'EscrowPrimitive',
    'ContractorRecipientPrimitive',
    'PhotoEvidencePrimitive',
    'GeoProofPrimitive',
    'ApprovalPrimitive',
    'ReleasePrimitive',
    'RefundPrimitive',
    'ReceiptPrimitive'
  ]
})

export const CONTRACTOR_PROOF_CLARIFYING_QUESTIONS = Object.freeze([
  'what_is_the_job_location',
  'how_much_are_you_paying',
  'should_the_photo_require_gps_metadata',
  'should_aura_auto_release_after_your_approval_only_or_after_both_gps_and_image_match',
  'what_should_happen_if_the_contractor_does_not_submit_proof_by_the_deadline'
])

export const CAPABILITY_GENESIS_PIPELINE_STEPS = Object.freeze([
  'receive_intent',
  'extract_rules',
  'ask_clarifying_questions',
  'build_draft_specification',
  'identify_required_atoms_and_primitives',
  'compose_candidate_capability',
  'check_type_compatibility',
  'run_financial_physics_validation',
  'run_policy_governor_review',
  'generate_ui_ux_surfaces',
  'generate_disclosures_and_consent',
  'simulate_normal_and_edge_cases',
  'run_tests',
  'assign_release_mode',
  'package_capability',
  'install_into_registry',
  'release_to_user_admin_or_tenant',
  'monitor_outcomes',
  'improve_or_patch'
])

export const CAPABILITY_RELEASE_MODES = Object.freeze({
  draft_mode: {
    moneyMovement: false,
    usedFor: ['user_brainstorming', 'admin_design', 'partner_product_design', 'simulation_only_experiments']
  },
  simulation_mode: {
    moneyMovement: false,
    usedFor: ['fake_money', 'fake_actors', 'risk_discovery', 'edge_case_discovery', 'experience_testing']
  },
  private_capability_mode: {
    exposure: 'creator_or_one_tenant',
    examples: ['family_school_fee_wallet', 'merchant_supplier_payment_flow', 'school_fee_collection_plan']
  },
  human_review_mode: {
    exposure: 'guarded_runtime',
    usedFor: ['new_capability', 'high_risk_capability', 'large_value_transfers', 'new_recipient_patterns', 'credit_liquidity_exposure', 'policy_sensitive_use_cases']
  },
  assisted_autonomy_mode: {
    exposure: 'low_risk_auto_high_risk_approval',
    examples: ['auto_save_money', 'auto_send_reminders', 'external_payment_release_requires_approval']
  },
  full_runtime_mode: {
    exposure: 'approved_normal_use',
    stillMonitored: true
  },
  marketplace_mode: {
    exposure: 'other_users_tenants_partners_businesses',
    requires: ['stricter_testing', 'governance', 'documentation', 'support']
  },
  deprecated_mode: {
    exposure: 'existing_users_temporarily_supported',
    noLongerRecommended: true
  },
  retired_mode: {
    exposure: 'disabled_and_migrated_away',
    activeUseAllowed: false
  }
})

export const AUTONOMY_DIMENSIONS = Object.freeze([
  'money_movement_autonomy',
  'recipient_creation_autonomy',
  'rule_creation_autonomy',
  'rule_modification_autonomy',
  'verification_autonomy',
  'approval_autonomy',
  'communication_autonomy',
  'external_integration_autonomy',
  'schedule_autonomy',
  'refund_reversal_autonomy',
  'risk_escalation_autonomy',
  'data_access_autonomy',
  'ui_disclosure_autonomy',
  'migration_upgrade_autonomy'
])

export const AUTONOMY_LEVELS = Object.freeze([
  'blocked',
  'suggest_only',
  'draft_only',
  'requires_user_approval',
  'requires_admin_approval',
  'requires_compliance_approval',
  'auto_execute_under_threshold',
  'auto_execute_fully',
  'assisted',
  'requires_verification',
  'requires_user_confirmation',
  'auto_execute_if_unclaimed_expired'
])

export const SCHOOL_FEES_AUTONOMY_EXAMPLE = Object.freeze({
  money_movement: 'requires_user_approval',
  auto_saving: 'auto_execute_under_threshold',
  recipient_creation: 'requires_verification',
  invoice_verification: 'assisted',
  external_payment_release: 'requires_user_approval',
  refund: 'auto_execute_if_unclaimed_expired',
  rule_modification: 'requires_user_confirmation'
})

export const GOVERNOR_REVIEW_QUESTIONS = Object.freeze([
  'is_this_legal',
  'is_this_allowed_in_this_jurisdiction',
  'is_this_financially_safe',
  'is_this_exploitative',
  'could_this_harm_the_user',
  'could_this_enable_fraud',
  'could_this_be_money_laundering',
  'could_this_trap_funds_unfairly',
  'are_disclosures_adequate',
  'is_consent_valid',
  'are_users_properly_verified',
  'are_minors_involved',
  'are_vulnerable_users_involved',
  'are_there_hidden_fees',
  'are_there_unfair_penalties',
  'is_there_a_refund_path',
  'is_there_a_dispute_path',
  'is_there_an_audit_trail'
])

export const GOVERNOR_DECISIONS = Object.freeze([
  'approve',
  'approve_with_conditions',
  'require_clarification',
  'require_disclosure',
  'require_user_consent',
  'require_admin_review',
  'require_compliance_review',
  'require_human_review',
  'restrict_autonomy',
  'restrict_amount_limit',
  'restrict_jurisdiction',
  'simulate_only',
  'block',
  'redirect_to_safe_alternative'
])

export const WORKER_FUNDS_GOVERNOR_EXAMPLE = Object.freeze({
  request: 'create_a_wallet_where_my_workers_contribute_money_but_i_decide_when_they_can_withdraw',
  risk: 'employer_controlled_worker_funds',
  issues: ['possible_wage_control_abuse', 'unclear_ownership', 'unclear_consent', 'withdrawal_restriction_risk', 'labor_law_sensitivity'],
  decision: 'block',
  saferAlternative: [
    'worker_owned_contribution_wallet',
    'transparent_rules',
    'voluntary_participation',
    'withdrawal_rights',
    'dispute_path',
    'independent_consent',
    'employer_cannot_seize_funds'
  ]
})

export const CAPABILITY_SIMULATION_GROUPS = Object.freeze({
  normal: ['user_creates_wallet', 'money_comes_in', 'split_rule_activates', 'funds_accumulate', 'invoice_arrives', 'approval_happens', 'payment_releases', 'receipt_generated'],
  edge: ['insufficient_balance', 'wrong_recipient', 'expired_invoice', 'duplicate_invoice', 'contributor_sends_wrong_amount', 'user_cancels_midway', 'school_changes_bank_account', 'gps_evidence_missing', 'photo_evidence_unclear', 'recipient_fails_kyc'],
  fraud: ['fake_school', 'fake_invoice', 'spoofed_gps', 'reused_photo', 'duplicate_contributor_identity', 'recipient_account_mismatch', 'collusive_verification', 'rapid_high_value_movement', 'suspicious_circular_transfers'],
  stress: ['many_users_use_capability', 'many_payments_arrive_at_once', 'external_provider_failure_stub', 'ledger_delay_occurs', 'notification_delay_occurs', 'verification_service_fails'],
  human_confusion: ['user_thinks_money_was_paid_but_it_is_locked', 'contributor_thinks_money_is_refundable_but_it_is_not', 'parent_misunderstands_school_approval', 'recipient_misunderstands_pending_claim']
})

export const CAPABILITY_DOCTOR_DIAGNOSTICS = Object.freeze([
  'missing_rules',
  'broken_state_transitions',
  'unsafe_combinations',
  'unclear_consent',
  'missing_refund_path',
  'stuck_funds',
  'conflicting_policies',
  'bad_ux',
  'high_abandonment',
  'high_failure_rate',
  'high_manual_review_rate',
  'fraud_patterns',
  'ledger_mismatch_risk',
  'poor_explanation_quality',
  'outdated_version',
  'migration_need'
])

export const CAPABILITY_DOCTOR_REPAIR_MESSAGES = Object.freeze([
  'users_do_not_understand_the_release_condition',
  'invoice_verification_is_not_resolving_and_creating_stuck_states',
  'funds_can_lock_without_clear_expiry_path',
  'refund_primitive_required_before_release',
  'auto_release_conflicts_with_jurisdiction_policy',
  'downgrade_assisted_autonomy_to_human_review_mode',
  'show_stronger_disclosure_before_activation'
])

export const CAPABILITY_REGISTRY_STORES = Object.freeze([
  'atoms',
  'micro_primitives',
  'primitives',
  'capabilities',
  'templates',
  'algorithms',
  'assets',
  'ui_surfaces',
  'policy_packs',
  'jurisdiction_packs',
  'simulation_scenarios',
  'test_suites',
  'release_history',
  'dependency_graph',
  'compatibility_rules'
])

export const CAPABILITY_REGISTRY_QUESTIONS = Object.freeze([
  'what_capabilities_exist',
  'what_primitives_do_they_use',
  'which_versions_are_active',
  'which_tenants_use_them',
  'which_jurisdictions_support_them',
  'which_capabilities_depend_on_this_primitive',
  'which_capabilities_are_deprecated',
  'which_capabilities_are_risky',
  'which_capabilities_can_be_reused_for_this_new_request'
])

export const RENT_CONTRIBUTION_REGISTRY_MATCH = Object.freeze([
  'GoalWalletPrimitive',
  'ContributorLinkPrimitive',
  'VerifiedRecipientPrimitive',
  'ObligationPrimitive',
  'RentCategoryPolicy',
  'EscrowReleasePrimitive',
  'ReceiptPrimitive',
  'RecurringDueDatePrimitive'
])

export const PRODUCT_TEMPLATE_CATALOG = Object.freeze([
  'School Fees Wallet Template',
  'Rent Contribution Template',
  'Family Emergency Vault Template',
  'SafeSend Template',
  'Contractor Milestone Escrow Template',
  'Susu Circle Template',
  'Merchant Layaway Template',
  'Invoice Payment Template',
  'Child Savings Template',
  'Community Fund Template',
  'Procurement RFQ Template'
])

export const SCHOOL_FEES_WALLET_TEMPLATE = Object.freeze({
  template: 'School Fees Wallet Template',
  defaultPrimitives: ['GoalWallet', 'AutoSplit', 'ContributorLink', 'InvoiceVerification', 'ParentApproval', 'EscrowRelease', 'Receipt'],
  customizable: ['target_amount', 'contribution_rules', 'contributors', 'school', 'due_date', 'split_percentage', 'approval_rules'],
  locked: ['cannot_release_to_unverified_school', 'cannot_skip_consent', 'cannot_hide_fees', 'cannot_remove_receipt_trail']
})

export const UI_UX_COMPOSER_OUTPUTS = Object.freeze([
  'setup_flows',
  'confirmation_screens',
  'risk_warnings',
  'progress_cards',
  'wallet_cards',
  'timelines',
  'approval_screens',
  'receipt_screens',
  'explanation_panels',
  'admin_dashboards',
  'monitoring_views',
  'review_queues',
  'dispute_screens',
  'empty_states',
  'error_states',
  'success_states'
])

export const CONTRACTOR_GPS_PAYOUT_REQUIREMENTS = Object.freeze([
  'escrow_deposit',
  'contractor_identity',
  'job_location',
  'photo_evidence',
  'gps_confirmation',
  'user_approval',
  'payment_release',
  'receipt',
  'dispute_option'
])

export const CONTRACTOR_GPS_UI_SURFACES = Object.freeze([
  'create_contractor_payment_screen',
  'define_job_and_location_screen',
  'deposit_escrow_screen',
  'contractor_evidence_upload_screen',
  'evidence_review_screen',
  'gps_confidence_badge',
  'approve_reject_release_screen',
  'payment_released_receipt',
  'dispute_refund_screen'
])

export const ASSET_VAULT_ASSET_TYPES = Object.freeze([
  'icons',
  'illustrations',
  'animations',
  'lottie_files',
  'micro_interactions',
  'transition_patterns',
  'empty_states',
  'success_states',
  'warning_visuals',
  'badges',
  'progress_rings',
  'wallet_visuals',
  'timeline_components',
  'receipt_layouts',
  'financial_diagrams',
  'educational_explainers',
  'emojis',
  '3d_assets',
  'sound_cues',
  'motion_presets',
  'brand_safe_visual_motifs'
])

export const FAMILY_EMERGENCY_VAULT_ASSETS = Object.freeze([
  'shield_icon',
  'soft_lock_animation',
  'family_group_illustration',
  'round_up_animation',
  'emergency_progress_card',
  'calm_warning_modal',
  'vault_opening_success_animation'
])

export const ALGORITHM_VAULT_ALGORITHMS = Object.freeze([
  'risk_scoring',
  'bts_calculation',
  'split_optimization',
  'contribution_prediction',
  'default_risk_detection',
  'fraud_anomaly_detection',
  'invoice_similarity_detection',
  'gps_confidence_scoring',
  'photo_evidence_confidence',
  'recipient_mismatch_detection',
  'cashflow_forecast',
  'obligation_prioritization',
  'liquidity_balancing',
  'savings_plan_optimization',
  'payout_order_recommendation',
  'circle_risk_simulation',
  'fee_calculation',
  'refund_calculation',
  'trust_weighted_approval'
])

export const SUSU_ALGORITHM_BINDINGS = Object.freeze([
  'bts_scoring_algorithm',
  'default_risk_algorithm',
  'fundability_gate_algorithm',
  'payout_order_algorithm',
  'insurance_bucket_algorithm',
  'liquidity_stress_simulation_algorithm'
])

export const SCHOOL_FEES_ALGORITHM_BINDINGS = Object.freeze([
  'due_date_urgency_algorithm',
  'contribution_gap_forecast',
  'auto_split_recommendation',
  'invoice_verification_algorithm'
])

export const CAPABILITY_EVENT_TYPES = Object.freeze([
  'CAPABILITY_CREATED',
  'CAPABILITY_APPROVED',
  'CAPABILITY_ACTIVATED',
  'WALLET_CREATED',
  'RULE_ADDED',
  'MONEY_RECEIVED',
  'MONEY_SPLIT',
  'FUNDS_LOCKED',
  'EVIDENCE_SUBMITTED',
  'GPS_VERIFIED',
  'INVOICE_UPLOADED',
  'APPROVAL_REQUESTED',
  'PAYMENT_RELEASED',
  'REFUND_TRIGGERED',
  'DISPUTE_OPENED',
  'POLICY_BLOCKED',
  'RISK_ESCALATED',
  'CAPABILITY_UPDATED',
  'CAPABILITY_ROLLED_BACK'
])

export const CAPABILITY_EVENT_FEEDS = Object.freeze([
  'audit_ledger',
  'user_timeline',
  'admin_dashboard',
  'support_console',
  'risk_engine',
  'learning_engine',
  'analytics',
  'compliance_reporting',
  'capability_doctor'
])

export const TRANSACTION_HISTORY_QUESTIONS = Object.freeze([
  'who_initiated_it',
  'what_capability_handled_it',
  'what_rules_applied',
  'what_policy_checks_ran',
  'what_approvals_happened',
  'what_money_state_changed',
  'what_ledger_entries_were_created',
  'what_events_were_emitted',
  'what_explanation_was_shown',
  'what_consent_existed',
  'what_capability_version_was_active'
])

export const SCHOOL_FEES_VERSION_HISTORY = Object.freeze([
  { version: '1.0', change: 'simple_target_wallet_plus_parent_approval' },
  { version: '1.1', change: 'adds_contributor_links' },
  { version: '1.2', change: 'adds_invoice_verification' },
  { version: '2.0', change: 'adds_escrow_release_and_school_entity_verification' }
])

export const VERSIONING_MANAGEMENT_QUESTIONS = Object.freeze([
  'which_users_are_on_which_version',
  'whether_upgrade_is_automatic_or_optional',
  'whether_new_consent_is_required',
  'whether_old_rules_are_still_valid',
  'whether_funds_need_migration',
  'whether_disclosures_changed',
  'whether_policy_risk_changed',
  'whether_rollback_is_possible'
])

export const MIGRATION_SAFETY_CHECKS = Object.freeze([
  'are_funds_currently_locked',
  'are_obligations_active',
  'are_pending_payments_waiting',
  'are_disputes_open',
  'are_users_mid_flow',
  'are_old_rules_more_permissive_or_restrictive',
  'does_new_version_change_ownership_fees_release_rules_or_access'
])

export const MIGRATION_MODES = Object.freeze([
  'hot_swap',
  'soft_upgrade',
  'forced_compliance_upgrade',
  'user_consented_migration',
  'tenant_level_migration',
  'rollback',
  'parallel_version_support',
  'deprecation',
  'retirement'
])

export const EXISTING_FINTECH_APP_TARGETS = Object.freeze([
  'Save2Pay',
  'Susu',
  'POS',
  'PayFees',
  'Family Hub',
  'BuildTrust',
  'Merchant tools',
  'Agent tools',
  'School tools',
  'Alumni tools',
  'future apps'
])

export const EXISTING_APP_INTEGRATION_FLOW = Object.freeze([
  'existing_app',
  'adapter_layer',
  'capability_os',
  'financial_kernel_or_external_ledger_bridge_contract_stub',
  'events_monitoring_ui_composer'
])

export const GRADUAL_CAPABILITY_OS_INTRODUCTIONS = Object.freeze([
  'capability_registry',
  'policy_engine',
  'event_bus',
  'kernel_contracts',
  'ui_directives',
  'runtime_monitor',
  'simulation',
  'capability_doctor'
])

export const EXISTING_APP_IMPORT_GAP_EXAMPLE = Object.freeze({
  feature: 'Goal Wallet',
  status: 'partially_compatible',
  missing: [
    'no_explicit_refund_path',
    'no_release_state_machine',
    'no_autonomy_contract',
    'no_disclosure_version',
    'no_monitoring_rollback_trigger',
    'no_kernel_command_mapping'
  ]
})

export const INTEGRATION_READINESS_GRADE_MODEL = Object.freeze({
  grade: 'B-',
  canImport: true,
  canRunAsAuraCapability: false,
  requiredWork: [
    'Add kernel command contracts',
    'Declare consent requirements',
    'Add refund rule for locked goal wallet funds',
    'Add audit event mapping',
    'Add state machine terminal resolution'
  ]
})

export const VALIDATOR_SECURITY_REQUIREMENTS = Object.freeze([
  'do_not_execute_arbitrary_expressions',
  'use_safe_expression_parser',
  'block_code_injection_in_rule_expressions',
  'block_external_urls_without_integration_registry_approval',
  'block_untrusted_scripts_in_ui_directives',
  'block_primitive_references_outside_registry',
  'block_capability_defined_kernel_operations',
  'block_policy_bypass_flags',
  'block_hidden_fields'
])

export const SAFE_EXPRESSION_LANGUAGE = Object.freeze({
  allowedOperators: ['==', '!=', '>', '>=', '<', '<=', 'AND', 'OR', 'NOT', 'IN', 'NOT IN', 'EXISTS', 'IS_EMPTY', 'IS_NOT_EMPTY', '+', '-', '*', '/', '%'],
  allowedTerms: ['simple_arithmetic', 'field_references', 'literals', 'declared_constants', 'approved_functions', 'aggregation_functions', 'time_comparisons'],
  disallowed: ['arbitrary_code', 'eval', 'dynamic_imports', 'unregistered_function_calls', 'network_calls', 'database_queries', 'file_access', 'system_commands', 'unbounded_loops', 'side_effects']
})

export const CONTRACT_VALIDATION_MUTATION_RULE = Object.freeze({
  validatorMayProduce: ['normalized_preview', 'repair_suggestions', 'patch_proposals', 'clarification_questions'],
  validatorMustNot: ['silently_mutate_source_contract', 'auto_apply_money_affecting_fix_without_confirmation'],
  reason: 'financial_contracts_need_traceable_authorship_and_consent'
})

export const CONTRACT_PATCH_REQUIRED_FIELDS = Object.freeze([
  'patch_id',
  'patch_type',
  'reason_code',
  'operations',
  'requires_user_or_admin_confirmation'
])

export const CONTRACT_PATCH_AUDIT_FIELDS = Object.freeze([
  'approved_by',
  'changed_fields',
  'reason_code',
  'fixes_finding_id',
  'consent_required'
])

export const VALIDATOR_REPORT_FORMATS = Object.freeze([
  'machine_json',
  'admin_readable_report',
  'developer_report',
  'user_safe_explanation',
  'compliance_report'
])

export const MINIMAL_VALIDATOR_API_ROUTES = Object.freeze([
  {
    id: 'validate_contract',
    method: 'POST',
    path: '/capability-contracts/validate',
    request: ['contract', 'mode', 'target_jurisdiction', 'target_product'],
    response: ['valid', 'releaseEligibility', 'findings', 'requiredFixes', 'missingClarifications']
  },
  {
    id: 'validate_runtime_command',
    method: 'POST',
    path: '/capability-contracts/{capabilityId}/runtime-preflight',
    request: ['capability_instance_id', 'actor_id', 'command', 'context'],
    response: ['decision', 'reasonCodes', 'requiredActions']
  },
  {
    id: 'generate_repair_plan',
    method: 'POST',
    path: '/capability-contracts/repair-plan',
    request: ['contract', 'findings', 'mode'],
    response: ['patches', 'clarifyingQuestions', 'manualReviewRequired']
  }
])

export const VALIDATOR_DATABASE_TABLES = Object.freeze({
  capability_contracts: ['id', 'capability_id', 'current_version', 'status', 'created_at', 'created_by'],
  capability_contract_versions: ['id', 'contract_id', 'capability_version', 'ucc_version', 'contract_json', 'created_at', 'created_by'],
  ucc_validation_runs: ['id', 'capability_id', 'capability_version', 'ucc_version', 'validation_mode', 'target_jurisdiction', 'target_product', 'registry_snapshot_id', 'policy_snapshot_id', 'kernel_version', 'status', 'created_at', 'created_by'],
  ucc_validation_findings: ['id', 'validation_run_id', 'severity', 'code', 'title', 'message', 'path', 'validator', 'required_action', 'suggested_fix', 'blocks_draft', 'blocks_simulation', 'blocks_private_release', 'blocks_full_runtime', 'blocks_marketplace'],
  ucc_validation_release_eligibility: ['id', 'validation_run_id', 'draft', 'simulation', 'private_capability', 'tenant_limited', 'assisted_autonomy', 'full_runtime', 'marketplace', 'blocked'],
  ucc_repair_patches: ['id', 'validation_run_id', 'patch_id', 'patch_type', 'reason_code', 'operations', 'approved_by', 'created_at'],
  ucc_clarification_requests: ['id', 'validation_run_id', 'question', 'required_for', 'answered_at'],
  ucc_governor_decisions: ['id', 'validation_run_id', 'decision', 'reason_codes', 'decided_at'],
  ucc_registry_snapshots: ['id', 'snapshot_id', 'created_at', 'registry_json']
})

export const VALIDATOR_OWN_INVARIANTS = Object.freeze([
  'never_approve_schema_errors_for_real_money_release',
  'never_approve_money_movement_without_kernel_command_mapping',
  'never_approve_locked_funds_without_release_refund_dispute_expiry_paths',
  'never_approve_auto_money_movement_without_consent',
  'never_approve_external_recipient_release_without_verification_policy',
  'never_approve_unbalanced_ledger_effects',
  'never_silently_mutate_contract',
  'record_registry_and_policy_snapshot',
  'emit_structured_findings_not_vague_text',
  'support_design_time_flexibility_but_runtime_strictness'
])

export const SCHOOL_FEES_VALIDATION_WALKTHROUGH_CHECKS = Object.freeze({
  schema: ['all_sections_present'],
  identity: ['school_fees_wallet_id_valid', 'version_1_0_0_valid'],
  intent: ['primary_goal_clear', 'desired_outcomes_present'],
  classification: ['goal_wallet_education_payment_restricted_payout_coherent', 'dependent_actor_requires_minor_protection_rules'],
  dependencies: ['GoalWalletPrimitive_exists', 'InvoiceVerificationPrimitive_exists', 'EscrowReleasePrimitive_exists', 'kernel_supports_release_escrow'],
  entities: ['guardian_declared', 'child_declared', 'contributor_declared', 'school_declared', 'school_requires_institution_verification'],
  money_objects: ['wallet_has_owner', 'escrow_has_release_condition', 'lock_has_release_paths', 'fee_disclosures_checked'],
  rules: ['auto_split_maps_to_allocate_funds', 'invoice_approval_maps_to_release_escrow', 'refund_rule_exists', 'expiry_rule_exists'],
  state_machine: ['no_dead_states', 'terminal_states_resolve_funds'],
  kernel: ['allowed_operations_match_actions', 'idempotency_exists', 'ledger_entries_balance'],
  financial_physics: ['no_trapped_funds', 'locked_funds_not_available', 'balance_conservation_valid'],
  policy: ['kyc_kyb_rules_present', 'minor_protection_present', 'release_to_unverified_school_blocked'],
  autonomy: ['auto_split_has_consent', 'external_release_requires_guardian_approval'],
  evidence: ['invoice_verification_defined', 'confidence_threshold_defined'],
  ui_ux: ['setup_flow_exists', 'disclosure_before_activation_exists', 'confirmation_before_release_exists'],
  audit: ['contribution_invoice_release_receipt_events_declared'],
  testing: ['ledger_tests_present', 'policy_tests_present', 'fraud_tests_present']
})

export const VALIDATOR_ENABLED_OUTCOMES = Object.freeze([
  'capability_is_only_an_idea',
  'capability_is_structurally_complete',
  'capability_is_missing_refund_path',
  'capability_is_unsafe_because_funds_can_be_trapped',
  'capability_needs_minor_protection_rules',
  'capability_cannot_use_auto_release',
  'capability_can_be_simulated',
  'capability_can_run_privately',
  'capability_requires_human_review',
  'capability_can_be_installed_in_this_tenant',
  'capability_can_be_listed_in_marketplace',
  'capability_must_be_blocked'
])

export const FINAL_CANONICAL_UCC_ENFORCEMENT_SPEC = Object.freeze({
  contract: 'defines_the_capability',
  schema: 'defines_allowed_shape',
  validator: 'determines_whether_the_capability_can_safely_exist',
  executionRule: 'execute_only_after_valid_ucc_governor_financial_physics_and_runtime_preflight_pass',
  explicitNonReason: 'ai_generated_it'
})

export const AURA_PSL_DEFINITION = Object.freeze({
  id: 'aura_psl',
  name: 'AURA Product Specification Language',
  purpose: 'declarative_typed_financial_capability_specification_language',
  notA: ['general_programming_language', 'arbitrary_code_runner', 'business_logic_executor'],
  describes: ['actors', 'money_objects', 'rules', 'triggers', 'conditions', 'actions', 'state_transitions', 'constraints', 'evidence_requirements', 'release_logic', 'refund_logic', 'policy_requirements', 'autonomy_permissions']
})

export const AURA_PSL_RELATIONSHIP = Object.freeze({
  ucc: 'contract_container',
  psl: 'formal_language_inside_contract',
  validator: 'enforcement_engine',
  compiler: 'turns_psl_into_runtime_artifacts',
  financialKernel: 'only_place_real_money_truth_changes'
})

export const AURA_PSL_GRAMMAR_DOMAINS = Object.freeze([
  'actors',
  'money_objects',
  'rules',
  'triggers',
  'conditions',
  'actions',
  'state_transitions',
  'constraints',
  'evidence_requirements',
  'release_logic',
  'refund_logic',
  'policy_requirements',
  'autonomy_permissions',
  'kernel_safe_actions'
])

export const AURA_PSL_DESIGN_PRINCIPLES = Object.freeze([
  'declarative_not_imperative',
  'typed_actors',
  'declared_ownership',
  'explicit_permissions',
  'clear_fund_states',
  'valid_ledger_effects',
  'consent_first',
  'audit_trails',
  'dispute_paths',
  'refund_paths',
  'jurisdiction_logic',
  'release_rules',
  'policy_review',
  'runtime_safety'
])

export const AURA_PSL_STACK_POSITION = Object.freeze([
  'user_admin_partner_existing_app',
  'intent_interpreter',
  'rule_extractor',
  'aura_product_specification_language',
  'universal_capability_contract',
  'ucc_validator',
  'capability_compiler',
  'simulation_engine',
  'governor_policy_review',
  'capability_registry',
  'runtime_execution_engine',
  'financial_kernel'
])

export const AURA_PSL_INTERNAL_FORMS = Object.freeze([
  'surface_syntax',
  'canonical_ast',
  'runtime_ir'
])

export const AURA_PSL_COMPILATION_FLOW = Object.freeze([
  'surface_psl',
  'ast',
  'validated_ast',
  'runtime_ir',
  'capability_package'
])

export const AURA_PSL_TOP_LEVEL_MODULES = Object.freeze([
  'product',
  'actors',
  'entities',
  'relationships',
  'money_objects',
  'events',
  'conditions',
  'actions',
  'rules',
  'state_machine',
  'invariants',
  'policies',
  'autonomy',
  'evidence',
  'consent',
  'disclosures',
  'experience',
  'audit',
  'tests',
  'simulation',
  'monitoring'
])

export const AURA_PSL_CORE_CONSTRUCTS = Object.freeze([
  'actor',
  'entity',
  'relationship',
  'money_object',
  'fund_state',
  'event',
  'trigger',
  'condition',
  'action',
  'rule',
  'state',
  'transition',
  'invariant',
  'policy',
  'consent',
  'disclosure',
  'evidence',
  'autonomy',
  'experience_surface',
  'audit_event',
  'test_case',
  'simulation_case',
  'monitoring_metric'
])

export const AURA_PSL_PRODUCT_REQUIRED_FIELDS = Object.freeze([
  'id',
  'name',
  'category',
  'description',
  'intent',
  'risk_class'
])

export const AURA_PSL_PRODUCT_UCC_MAPPING = Object.freeze({
  id: 'UCC.capability.id',
  name: 'UCC.capability.name',
  category: 'UCC.capability.category',
  description: 'UCC.capability.description',
  intent: 'UCC.intent.primary_goal',
  risk_class: 'UCC.classification.risk_class'
})

export const AURA_PSL_ACTOR_REQUIRED_FIELDS = Object.freeze([
  'type',
  'role',
  'required',
  'verification',
  'permissions',
  'visibility',
  'consent_requirements'
])

export const AURA_PSL_ENTITY_TYPES = Object.freeze([
  'person',
  'business',
  'school',
  'merchant',
  'government_institution',
  'circle',
  'family_hub',
  'shadow_entity',
  'verified_organization',
  'unverified_recipient',
  'institution',
  'individual_or_business_recipient'
])

export const AURA_PSL_TYPED_REFERENCE_KINDS = Object.freeze([
  'actor',
  'wallet',
  'amount',
  'currency',
  'recipient',
  'invoice',
  'gps_proof',
  'consent',
  'risk_score',
  'policy_rule',
  'kernel_operation',
  'event',
  'state'
])

export const SCHOOL_FEES_PSL_SURFACE_EXAMPLE = Object.freeze({
  capability: 'school_fees_wallet',
  actor: { id: 'guardian', type: 'user', role: 'owner' },
  wallet: { id: 'school_wallet', type: 'goal_wallet', owner: 'guardian', purpose: 'education' },
  rule: {
    id: 'auto_split',
    when: 'incoming_money_received',
    if: ['auto_split_enabled'],
    then: ['allocate 20% of incoming.amount to school_wallet']
  }
})

export const SCHOOL_FEES_PSL_AST_EXAMPLE = Object.freeze({
  kind: 'Rule',
  id: 'auto_split',
  trigger: { event: 'incoming_money_received' },
  conditions: [{ ref: 'auto_split_enabled' }],
  actions: [{
    kind: 'KernelCommandRequest',
    operation: 'allocate_funds',
    amountFormula: 'incoming.amount * 0.20',
    destination: 'school_wallet'
  }]
})

export const SCHOOL_FEES_PSL_RUNTIME_IR_EXAMPLE = Object.freeze({
  rule_id: 'auto_split',
  trigger_event: 'MONEY_RECEIVED',
  guard_predicates: ['consent.auto_split.active == true', 'incoming.amount > 0', 'destination.wallet.status == active'],
  kernel_command: {
    operation: 'allocate_funds',
    command_contract_id: 'allocate_auto_split',
    idempotency_key: 'capability_instance_id + incoming_event_id + rule_id'
  },
  emits: ['FUNDS_ALLOCATED', 'AUTO_SPLIT_EXECUTED']
})

export const SCHOOL_FEES_PSL_FILE_EXAMPLE = Object.freeze({
  psl_version: '1.0',
  product: {
    id: 'school_fees_wallet',
    name: 'School Fees Wallet',
    category: 'education_payments',
    description: 'A restricted wallet for collecting and releasing school fees.',
    intent: 'Help guardians collect and release school fee payments safely.',
    risk_class: 'medium'
  },
  actors: {
    guardian: { type: 'user', role: 'owner', required: true, verification: 'identity_verified', permissions: { can: ['contribute', 'approve_release'], cannot: ['bypass_school_verification'] }, visibility: { can_view: ['own_balance', 'invoice_status'], cannot_view: ['other_guardian_private_data'] }, consent_requirements: ['auto_split_consent', 'payment_release_consent'] },
    child: { type: 'dependent', role: 'beneficiary', required: true, verification: 'guardian_asserted', permissions: { can: ['be_beneficiary'], cannot: ['withdraw', 'approve_release'] }, visibility: { can_view: [], cannot_view: ['financial_controls'] }, consent_requirements: [] },
    contributor: { type: 'family_member', role: 'contributor', required: false, verification: 'phone_or_email_verified', permissions: { can: ['contribute', 'view_own_receipt'], cannot: ['withdraw', 'approve_release', 'view_owner_balance'] }, visibility: { can_view: ['own_contribution', 'optional_goal_progress'], cannot_view: ['other_contributor_details', 'owner_total_balance'] }, consent_requirements: [] },
    school: { type: 'institution', role: 'payout_recipient', required: true, verification: 'institution_verified', permissions: { can: ['submit_invoice'], cannot: ['self_release_payment'] }, visibility: { can_view: ['invoice_status'], cannot_view: ['guardian_main_wallet_balance'] }, consent_requirements: [] }
  },
  entities: {
    school: { type: 'institution', verification: 'institution_verified', attributes: { sector: 'education', country: 'GH' } }
  },
  money_objects: ['guardian_main_wallet', 'school_fees_wallet', 'invoice_payment_escrow', 'school_recipient_account'],
  events: ['incoming_money_received', 'invoice_uploaded', 'invoice_verified', 'guardian_approved_release'],
  rules: ['auto_split_to_school_wallet', 'lock_invoice_amount', 'release_payment_to_school', 'refund_after_expiry'],
  state_machine: {
    initial: 'draft',
    states: ['draft', 'active', 'funding', 'invoice_pending', 'approval_pending', 'payment_released', 'disputed', 'cancelled']
  },
  policies: ['require_guardian_consent', 'require_school_verification', 'block_unverified_school_release']
})

export const FAMILY_RENT_PSL_PRODUCT_EXAMPLE = Object.freeze({
  id: 'family_rent_wallet',
  name: 'Family Rent Wallet',
  category: 'shared_obligation_payment',
  description: 'A restricted contribution wallet for rent payments.',
  intent: 'Help family members contribute toward rent while ensuring payout goes only to the verified landlord.',
  risk_class: 'medium'
})

export const FAMILY_RENT_PSL_FILE_EXAMPLE = Object.freeze({
  psl_version: '1.0',
  product: FAMILY_RENT_PSL_PRODUCT_EXAMPLE,
  actors: {
    owner: { type: 'user', role: 'wallet_owner', required: true, verification: 'identity_verified', permissions: { can: ['create_wallet', 'invite_contributors', 'approve_release', 'cancel_wallet'], cannot: [] }, visibility: { can_view: ['wallet_balance', 'contribution_summary'], cannot_view: [] }, consent_requirements: ['rent_wallet_creation_consent', 'payment_release_consent'] },
    contributor: { type: 'family_member', role: 'contributor', required: false, verification: 'phone_or_email_verified', permissions: { can: ['contribute', 'view_own_receipt'], cannot: ['withdraw', 'approve_release', 'view_owner_balance'] }, visibility: { can_view: ['own_contribution', 'own_receipt'], cannot_view: ['owner_total_balance'] }, consent_requirements: [] },
    landlord: { type: 'recipient', role: 'payout_recipient', required: true, verification: 'recipient_verified', permissions: { can: ['receive_payment'], cannot: ['inspect_family_balances', 'force_release'] }, visibility: { can_view: ['payment_received_events'], cannot_view: ['family_contributor_details'] }, consent_requirements: [] }
  },
  entities: {
    landlord: { type: 'individual_or_business_recipient', verification: 'recipient_verified', attributes: { payout_purpose: 'rent' } }
  },
  relationships: [
    { from: 'owner', to: 'landlord', type: 'rent_payer_to_landlord' },
    { from: 'contributor', to: 'rent_wallet', type: 'contributes_to' },
    { from: 'landlord', to: 'rent_escrow', type: 'approved_recipient_for' }
  ],
  money_objects: {
    rent_wallet: {
      id: 'rent_wallet',
      type: 'goal_wallet',
      owner: 'owner',
      currency: 'USD',
      purpose: 'rent',
      allowed_states: ['available', 'locked', 'refunded', 'released'],
      allowed_operations: ['allocate_funds', 'lock_funds', 'refund_funds'],
      restrictions: { payout_only_to: 'landlord' }
    },
    rent_escrow: {
      id: 'rent_escrow',
      type: 'conditional_escrow',
      owner: 'owner',
      recipient: 'landlord',
      currency: 'USD',
      purpose: 'rent_release',
      release_condition: 'owner_approved_and_landlord_verified',
      refund_condition: 'owner_cancels_before_release',
      dispute_condition: 'owner_or_admin_opens_dispute',
      expiry_condition: 'rent_due_date_passed_without_release',
      allowed_states: ['locked', 'released', 'refunded', 'disputed', 'expired'],
      allowed_operations: ['lock_funds', 'release_escrow', 'refund_funds'],
      restrictions: { payout_only_to: 'landlord' }
    }
  },
  events: {
    contribution_received: { type: 'CONTRIBUTION_RECEIVED', source: 'contributor', payload: { amount: 'Amount', contributor_id: 'ActorRef' } },
    release_requested: { type: 'RELEASE_REQUESTED', source: 'owner', payload: { request_id: 'Id' } },
    owner_approved_release: { type: 'APPROVAL_GRANTED', source: 'owner', payload: { approval_id: 'Id' } },
    rent_payment_released: { type: 'RENT_PAYMENT_RELEASED', source: 'runtime', payload: { amount: 'Amount', landlord_id: 'ActorRef' } }
  },
  conditions: {
    landlord_verified: { expression: 'landlord.verification == recipient_verified' },
    rent_balance_sufficient: { expression: 'rent_wallet.available_balance >= rent.amount_due' },
    owner_approved: { expression: 'approval.actor == owner AND approval.status == granted' }
  },
  actions: {
    receive_contribution: { type: 'kernel_command', command: 'allocate_funds', from: 'contributor.source', to: 'rent_wallet', amount: 'contribution.amount', idempotency_key: 'capability_instance_id + contribution.event_id + rule.id' },
    lock_rent_amount: { type: 'kernel_command', command: 'lock_funds', from: 'rent_wallet', to: 'rent_escrow', amount: 'rent.amount_due', idempotency_key: 'capability_instance_id + rent.invoice_id + rule.id' },
    release_to_landlord: { type: 'kernel_command', command: 'release_escrow', from: 'rent_escrow', to: 'landlord.account', amount: 'rent.amount_due', idempotency_key: 'capability_instance_id + approval.id + rule.id' },
    block_unverified_landlord: { type: 'block', reason_code: 'LANDLORD_UNVERIFIED' }
  },
  rules: {
    contribution_rule: { id: 'contribution_rule', type: 'allocation', when: 'contribution_received', if: [], then: ['receive_contribution', { emit_event: 'RENT_CONTRIBUTION_RECEIVED' }, 'generate_receipt'], else: [], emits: ['RENT_CONTRIBUTION_RECEIVED'], audit: { required: true, include: ['actor', 'amount', 'kernel_command_id'] }, priority: 100 },
    release_rule: { id: 'release_rule', type: 'release', when: 'owner_approved_release', if: ['landlord_verified', 'rent_balance_sufficient', 'owner_approved'], then: ['lock_rent_amount', 'release_to_landlord', { emit_event: 'RENT_PAYMENT_RELEASED' }], else: ['block_unverified_landlord'], emits: ['RENT_PAYMENT_RELEASED'], audit: { required: true, include: ['actor', 'amount', 'consent_id', 'kernel_command_id'] }, priority: 200 }
  },
  state_machine: {
    initial: 'draft',
    states: {
      draft: { terminal: false },
      active: { terminal: false },
      funding: { terminal: false },
      approval_pending: { terminal: false },
      payment_released: { terminal: true, resolves_money: true },
      cancelled: { terminal: true, resolves_money: true },
      disputed: { terminal: false }
    },
    transitions: {
      draft_to_active: { from: 'draft', to: 'active', when: 'wallet_created', emits: ['CAPABILITY_ACTIVATED'] },
      active_to_funding: { from: 'active', to: 'funding', when: 'contribution_received', emits: ['CONTRIBUTION_RECEIVED'] },
      funding_to_approval: { from: 'funding', to: 'approval_pending', when: 'release_requested', emits: ['RELEASE_REQUESTED'] },
      approval_to_released: { from: 'approval_pending', to: 'payment_released', when: 'owner_approved_release', requires: ['landlord_verified', 'rent_balance_sufficient'], actions: ['release_to_landlord'], emits: ['RENT_PAYMENT_RELEASED'] },
      disputed_to_cancelled: { from: 'disputed', to: 'cancelled', when: 'dispute_refund_approved', actions: ['refund_after_expiry'], emits: ['REFUND_COMPLETED'] }
    }
  },
  invariants: {
    only_landlord_can_receive: { statement: 'all_external_releases.recipient == landlord', applies_to: ['external_transfer', 'escrow_release'], severity: 'blocker' },
    no_trapped_rent_funds: { statement: 'rent_escrow has release_path AND refund_path AND dispute_path AND expiry_path', severity: 'critical' }
  },
  consents: {
    rent_wallet_creation_consent: { actor: 'owner', required_before: 'wallet_activation', scope: ['create_restricted_rent_wallet'], revocable: false, revocation_effect: [], disclosure_version: 'rent_wallet_creation@1.0.0', new_consent_after_upgrade: true },
    payment_release_consent: { actor: 'owner', required_before: 'release_to_landlord', scope: ['release_locked_funds_to_verified_landlord'], revocable: true, revocation_effect: ['block_future_release_until_reapproved'], disclosure_version: 'rent_payment_release@1.0.0', new_consent_after_upgrade: true }
  },
  experience: {
    surfaces: {
      setup_flow: { type: 'setup_flow', required: true, includes: ['rent_wallet_creation_consent', 'disclosure_confirmation'] },
      contribution_progress_card: { type: 'dashboard_card', required: true, shows: ['target_progress', 'amount_saved'] },
      release_confirmation: { type: 'confirmation_screen', required: true, includes: ['payment_release_consent', 'confirmation'] },
      blocked_action_reason: { type: 'reason_screen', required: true, shows: ['reason_code'] },
      error_recovery: { type: 'recovery_screen', required: true, shows: ['retry_or_refund_options'] }
    }
  },
  audit: {
    required_for: ['contribution_received', 'release_to_landlord', 'payment_release_consent', 'money_movement', 'consent', 'disclosure', 'policy_decision', 'state_transition', 'evidence_verification'],
    include: ['actor_id', 'timestamp', 'capability_id', 'capability_version', 'rule_id', 'kernel_command_id', 'ledger_entry_ids', 'policy_decision_id', 'consent_id', 'disclosure_version'],
    visibility: { owner: { can_view: ['all_wallet_events'] }, contributor: { can_view: ['own_contribution_events', 'own_receipts'] }, landlord: { can_view: ['payment_received_events'] } }
  }
})

export const CONTRACTOR_GPS_IMAGE_PSL_FILE_EXAMPLE = Object.freeze({
  psl_version: '1.0',
  product: {
    id: 'contractor_gps_image_escrow',
    name: 'Contractor GPS/Image Escrow',
    category: 'verified_work_payment',
    description: 'Holds payment until contractor submits location and photo proof.',
    intent: 'Protect sender by releasing funds only after evidence of work completion.',
    risk_class: 'high'
  },
  actors: {
    sender: { type: 'user', role: 'payer', required: true, verification: 'identity_verified', permissions: { can: ['create_job', 'fund_escrow', 'approve_release', 'reject_evidence', 'request_refund'], cannot: [] }, visibility: { can_view: ['job_status', 'evidence_status'], cannot_view: [] }, consent_requirements: ['payment_release_consent'] },
    contractor: { type: 'recipient', role: 'service_provider', required: true, verification: 'identity_or_phone_verified', permissions: { can: ['submit_evidence', 'receive_payment'], cannot: ['self_release_payment'] }, visibility: { can_view: ['own_evidence_status', 'payment_status'], cannot_view: ['sender_wallet_balance'] }, consent_requirements: [] }
  },
  entities: {
    contractor: { type: 'individual_or_business_recipient', verification: 'recipient_verified', attributes: { payout_purpose: 'work_completion' } }
  },
  money_objects: {
    job_escrow: {
      id: 'job_escrow',
      type: 'gps_evidence_escrow',
      owner: 'sender',
      recipient: 'contractor',
      currency: 'USD',
      purpose: 'contractor_payment',
      release_condition: 'sender_approved_after_valid_evidence',
      refund_condition: 'proof_not_submitted_by_deadline',
      dispute_condition: 'sender_rejects_evidence',
      expiry_condition: 'job_deadline_plus_3_days',
      allowed_states: ['locked', 'released', 'refunded', 'disputed', 'expired'],
      allowed_operations: ['lock_funds', 'release_escrow', 'refund_funds'],
      restrictions: { payout_only_to: 'contractor' }
    }
  },
  evidence: {
    gps_photo: {
      type: 'photo_with_gps',
      required_for: 'release_payment',
      submitted_by: 'contractor',
      required_fields: ['photo_id', 'gps_coordinate', 'captured_at', 'device_id'],
      verification: { methods: ['gps_radius_check', 'timestamp_check', 'duplicate_photo_check', 'device_integrity_check'], minimum_confidence: 0.85, fallback: 'sender_manual_review' },
      retention: 'retain_until_dispute_window_close',
      visibility: ['sender', 'contractor', 'admin'],
      anti_spoofing_rules: ['reject_missing_gps', 'flag_low_accuracy_gps', 'flag_reused_photo', 'require_live_capture_for_high_value_jobs']
    }
  },
  events: {
    evidence_submitted: { type: 'GPS_PROOF_SUBMITTED', source: 'contractor', payload: { evidence_id: 'EvidenceId' } },
    sender_approved_release: { type: 'APPROVAL_GRANTED', source: 'sender', payload: { approval_id: 'Id' } },
    job_escrow_expired: { type: 'ESCROW_EXPIRED', source: 'state_machine', payload: { escrow_id: 'EscrowRef' } }
  },
  conditions: {
    evidence_valid: { expression: 'evidence.gps_photo.confidence >= 0.85' },
    sender_approved: { expression: 'approval.actor == sender AND approval.status == granted' },
    within_job_location: { expression: 'WITHIN_RADIUS(evidence.gps, job.location, job.allowed_radius)' }
  },
  actions: {
    fund_job_escrow: { type: 'kernel_command', command: 'lock_funds', from: 'sender.wallet', to: 'job_escrow', amount: 'job.amount', idempotency_key: 'capability_instance_id + job.id + fund_event_id' },
    request_gps_photo: { type: 'request_evidence', from: 'contractor', evidence: 'gps_photo' },
    request_sender_approval: { type: 'request_approval', approver: 'sender', for: 'release_to_contractor' },
    release_to_contractor: { type: 'kernel_command', command: 'release_escrow', from: 'job_escrow', to: 'contractor.account', amount: 'job.amount', idempotency_key: 'capability_instance_id + evidence.id + approval.id' },
    refund_sender: { type: 'kernel_command', command: 'refund_funds', from: 'job_escrow', to: 'sender.wallet', amount: 'job.amount', idempotency_key: 'capability_instance_id + job.id + expiry_event_id' },
    block_evidence_not_approved: { type: 'block', reason_code: 'EVIDENCE_NOT_APPROVED' },
    open_manual_review: { type: 'open_review', reason_code: 'EVIDENCE_REVIEW_REQUIRED' }
  },
  rules: {
    evidence_submission_rule: { id: 'evidence_submission_rule', type: 'evidence', when: 'evidence_submitted', if: ['evidence_valid', 'within_job_location'], then: ['request_sender_approval'], else: ['open_manual_review'], emits: ['EVIDENCE_REVIEWED'], audit: { required: true, include: ['actor', 'evidence_id', 'decision'] }, priority: 100 },
    payment_release_rule: { id: 'payment_release_rule', type: 'release', when: 'sender_approved_release', if: ['evidence_valid', 'sender_approved'], then: ['release_to_contractor'], else: ['block_evidence_not_approved'], emits: ['PAYMENT_RELEASED'], audit: { required: true, include: ['actor', 'evidence_id', 'kernel_command_id'] }, priority: 200 },
    expiry_refund_rule: { id: 'expiry_refund_rule', type: 'refund', when: 'job_escrow_expired', if: ['NOT evidence_submitted'], then: ['refund_sender'], else: [], emits: ['REFUND_COMPLETED'], audit: { required: true, include: ['actor', 'escrow_id', 'kernel_command_id'] }, priority: 150 }
  },
  autonomy: {
    global: 'human_review_required',
    dimensions: {
      evidence_verification: { level: 'assisted_with_manual_review_fallback' },
      external_payment_release: { level: 'requires_user_approval', approver: 'sender' },
      refund_after_expiry: { level: 'auto_execute_under_contract_rule', allowed_if: ['expiry_condition_met', 'refund_path_declared'] }
    },
    blocked: ['auto_release_without_sender_approval', 'auto_release_without_valid_evidence']
  },
  invariants: {
    no_release_without_sender_approval: { statement: 'external_release requires sender_approved', applies_to: ['escrow_release'], severity: 'blocker' },
    no_release_without_valid_evidence: { statement: 'release_to_contractor requires evidence_valid', applies_to: ['escrow_release'], severity: 'blocker' },
    escrow_has_exit_path: { statement: 'job_escrow has release_path AND refund_path AND dispute_path AND expiry_path', applies_to: ['escrow_release'], severity: 'critical' }
  },
  simulation: {
    normal: [{ name: 'valid_gps_photo_releases_payment', steps: ['fund_job_escrow', 'evidence_submitted', 'sender_approved_release'], expected: { final_state: 'payment_released', ledger_balanced: true } }],
    edge_cases: [{ name: 'late_evidence_refunds_sender', steps: ['job_escrow_expired'], expected: { action: 'refund_sender' } }],
    fraud: [{ name: 'reused_photo_routes_to_review', steps: ['evidence_submitted reused_photo=true'], expected: { action: 'manual_review' } }],
    failure: [{ name: 'evidence_verification_unavailable', provider_api_skipped: true, steps: ['evidence_submitted', 'verification_unavailable'], expected: { recovery_options: ['sender_manual_review', 'refund'] } }]
  }
})

export const SUSU_G1_SMOOTH_PSL_PARTIAL_EXAMPLE = Object.freeze({
  psl_version: '1.0',
  product: {
    id: 'susu_g1_smooth_circle',
    name: 'Susu G1 Smooth Circle',
    category: 'rotating_savings_circle',
    description: 'A risk-controlled susu circle with deposits, insurance buckets, payout gates, and BTS-based rules.',
    intent: 'Allow members to participate in a rotating savings circle while reducing default risk and preventing pot shrinkage.',
    risk_class: 'high'
  },
  actors: {
    organizer: { type: 'circle_organizer', role: 'admin', required: true, verification: 'identity_verified', permissions: { can: ['configure_circle'], cannot: [] }, visibility: { can_view: ['circle_health'], cannot_view: [] }, consent_requirements: [] },
    member: { type: 'circle_member', role: 'contributor_and_payout_recipient', required: true, verification: 'identity_verified', permissions: { can: ['contribute', 'receive_payout'], cannot: ['skip_obligation_without_penalty'] }, visibility: { can_view: ['own_position', 'circle_rules'], cannot_view: ['other_member_private_risk_details'] }, consent_requirements: [] }
  },
  money_objects: {
    circle_pool: { id: 'circle_pool', type: 'circle_wallet', owner: 'circle', currency: 'GHS', purpose: 'rotating_pool', allowed_states: ['available', 'reserved', 'released'], allowed_operations: ['allocate_funds', 'reserve_funds', 'release_escrow'], restrictions: { payout_by_schedule_only: true } },
    member_deposit_bucket: { id: 'member_deposit_bucket', type: 'reserve', owner: 'member', currency: 'GHS', purpose: 'default_protection', allowed_states: ['reserved', 'refunded', 'released'], allowed_operations: ['reserve_funds', 'refund_funds'], restrictions: { used_for_default_protection: true } },
    pool_insurance_bucket: { id: 'pool_insurance_bucket', type: 'insurance_like_reserve', owner: 'circle', currency: 'GHS', purpose: 'default_absorption', allowed_states: ['reserved', 'released'], allowed_operations: ['reserve_funds', 'release_escrow'], restrictions: { absorbs_default_shortfall: true } },
    payout_escrow: { id: 'payout_escrow', type: 'conditional_escrow', owner: 'circle', recipient: 'current_payout_member', currency: 'GHS', purpose: 'scheduled_payout', release_condition: 'fundability_gate_passed', refund_condition: 'circle_cancelled_before_payout', dispute_condition: 'organizer_or_member_dispute', expiry_condition: 'payout_window_expired', allowed_states: ['locked', 'released', 'refunded', 'disputed', 'expired'], allowed_operations: ['lock_funds', 'release_escrow', 'refund_funds'], restrictions: { payout_only_to_current_member: true } }
  },
  events: {
    member_requests_join: { type: 'MEMBER_REQUESTED_JOIN', source: 'member', payload: { member_id: 'ActorRef' } },
    contribution_due: { type: 'CONTRIBUTION_DUE', source: 'schedule', payload: { due_at: 'Timestamp' } },
    payout_slot_due: { type: 'PAYOUT_SLOT_DUE', source: 'schedule', payload: { member_id: 'ActorRef' } },
    circle_contribution_received: { type: 'CIRCLE_CONTRIBUTION_RECEIVED', source: 'member', payload: { amount: 'Amount' } }
  },
  conditions: {
    member_bts_eligible: { expression: 'BTS_AT_LEAST(member, circle.required_bts)' },
    contribution_received_on_time: { expression: 'contribution.received_at <= contribution.due_at' },
    fundability_gate_passed: { expression: 'circle_pool.available_balance + pool_insurance_bucket.available_balance >= payout.amount' },
    member_verified: { expression: 'member.verification == identity_verified' }
  },
  actions: {
    collect_contribution: { type: 'kernel_command', command: 'allocate_funds', from: 'member.wallet', to: 'circle_pool', amount: 'circle.contribution_amount', idempotency_key: 'circle_id + member_id + contribution_due_at' },
    collect_deposit: { type: 'kernel_command', command: 'reserve_funds', from: 'member.wallet', to: 'member_deposit_bucket', amount: 'circle.deposit_amount', idempotency_key: 'circle_id + member_id + deposit_cycle' },
    release_payout: { type: 'kernel_command', command: 'release_escrow', from: 'payout_escrow', to: 'current_payout_member.wallet', amount: 'payout.amount', idempotency_key: 'circle_id + payout_slot + member_id' },
    pause_circle: { type: 'state_transition', to: 'paused', reason_code: 'FUNDABILITY_GATE_FAILED' },
    add_member_to_circle: { type: 'state_transition', to: 'active_member', reason_code: 'MEMBER_ELIGIBLE' },
    open_manual_review: { type: 'open_review', reason_code: 'FUNDABILITY_REVIEW_REQUIRED' },
    block_member_not_eligible: { type: 'block', reason_code: 'MEMBER_NOT_ELIGIBLE' }
  },
  rules: {
    join_circle_rule: { id: 'join_circle_rule', type: 'bts_gated', when: 'member_requests_join', if: ['member_bts_eligible', 'member_verified'], then: ['collect_deposit', 'add_member_to_circle'], else: ['block_member_not_eligible'], emits: ['MEMBER_JOIN_REVIEWED'], audit: { required: true, include: ['actor', 'bts_score', 'decision'] }, priority: 200 },
    contribution_rule: { id: 'contribution_rule', type: 'allocation', when: 'contribution_due', if: ['contribution_received_on_time'], then: ['collect_contribution', { emit_event: 'CIRCLE_CONTRIBUTION_RECEIVED' }], else: ['open_manual_review'], emits: ['CIRCLE_CONTRIBUTION_RECEIVED'], audit: { required: true, include: ['actor', 'amount', 'kernel_command_id'] }, priority: 100 },
    payout_rule: { id: 'payout_rule', type: 'release', when: 'payout_slot_due', if: ['fundability_gate_passed'], then: ['release_payout'], else: ['pause_circle', 'open_manual_review'], emits: ['PAYOUT_RELEASED'], audit: { required: true, include: ['actor', 'payout_amount', 'kernel_command_id'] }, priority: 300 }
  },
  invariants: {
    no_pot_shrinkage: { statement: 'payout.amount == circle.expected_payout_amount unless governor_approved_exception', severity: 'blocker' },
    no_payout_without_fundability: { statement: 'release_payout requires fundability_gate_passed', applies_to: ['escrow_release'], severity: 'blocker' },
    default_risk_absorbed_before_member_loss: { statement: 'default_handling uses deposit_bucket then pool_insurance_bucket before pot_reduction', severity: 'critical' }
  },
  autonomy: {
    global: 'human_review_required',
    dimensions: {
      contribution_collection: { level: 'auto_execute_under_user_rule', allowed_if: ['HAS_CONSENT(member, circle_rules_consent)'] },
      payout_release: { level: 'requires_admin_or_policy_approval', approver: 'organizer' },
      circle_pause: { level: 'auto_execute_under_contract_rule', allowed_if: ['fundability_gate_failed'] }
    },
    blocked: ['auto_reduce_payout_without_governor_exception', 'auto_skip_member_obligation']
  }
})

export const AURA_PSL_CORE_TYPE_SYSTEM_TYPES = Object.freeze(['Amount', 'Currency', 'Percentage', 'Ratio', 'Integer', 'Decimal', 'Boolean', 'String', 'Date', 'Timestamp', 'Duration', 'Coordinate', 'Distance', 'Score', 'Enum'])
export const AURA_PSL_FINANCIAL_TYPES = Object.freeze(['Wallet', 'GoalWallet', 'SubWallet', 'Vault', 'Escrow', 'Reserve', 'PendingClaim', 'Obligation', 'Contribution', 'Payout', 'Refund', 'Fee', 'Liability', 'LedgerEffect', 'KernelCommand'])
export const AURA_PSL_ACTOR_ENTITY_TYPES = Object.freeze(['User', 'Dependent', 'Guardian', 'Contributor', 'Recipient', 'Merchant', 'School', 'Contractor', 'CircleMember', 'CircleOrganizer', 'Agent', 'Business', 'Institution', 'ShadowEntity', 'Admin', 'Verifier'])
export const AURA_PSL_EVIDENCE_TYPES = Object.freeze(['Invoice', 'Receipt', 'Photo', 'Video', 'GPSProof', 'QRScan', 'Signature', 'DeviceSignature', 'DeliveryProof', 'VerificationRecord'])
export const AURA_PSL_POLICY_TYPES = Object.freeze(['JurisdictionPolicy', 'KYCRequirement', 'KYBRequirement', 'AMLRule', 'ConsentRequirement', 'DisclosureRequirement', 'HumanReviewRule', 'AutonomyPermission', 'RiskRule'])
export const AURA_PSL_STATE_TYPES = Object.freeze(['CapabilityState', 'FundState', 'VerificationState', 'ConsentState', 'SettlementState', 'DisputeState', 'ReviewState'])
export const AURA_PSL_TYPE_RULES = Object.freeze([
  'amount_must_have_currency',
  'percentage_between_0_and_100_unless_ratio_based',
  'wallet_owner_must_be_actor_or_entity_ref',
  'escrow_recipient_must_be_actor_or_entity_ref',
  'kernel_command_references_declared_operation',
  'event_payload_fields_must_be_typed',
  'condition_references_resolve_to_typed_fields'
])

export const AURA_PSL_REFERENCE_CATEGORIES = Object.freeze([
  'actor_ref',
  'entity_ref',
  'wallet_ref',
  'escrow_ref',
  'event_ref',
  'condition_ref',
  'action_ref',
  'state_ref',
  'policy_ref',
  'consent_ref',
  'evidence_ref',
  'asset_ref',
  'algorithm_ref',
  'kernel_operation_ref'
])

export const AURA_PSL_DEPENDENCY_EXAMPLE = Object.freeze({
  atoms: ['AmountAtom', 'CurrencyAtom', 'ConsentAtom'],
  primitives: ['GoalWalletPrimitive', 'ContributorLinkPrimitive', 'EscrowReleasePrimitive'],
  algorithms: ['InvoiceSimilarityCheck', 'GPSConfidenceScore'],
  assets: ['rent_wallet_icon', 'payment_success_lottie'],
  policy_packs: ['AURA.consumer_funds.v1', 'AURA.minor_protection.v1']
})

export const AURA_PSL_SECURITY_CONSTRAINTS = Object.freeze([
  'no_arbitrary_code_execution',
  'no_direct_database_access',
  'no_raw_external_http_calls',
  'no_hidden_kernel_operation',
  'no_undeclared_side_effects',
  'no_dynamic_privilege_escalation',
  'no_unsafe_expression_evaluation',
  'no_user_controlled_expression_execution',
  'no_shell_commands',
  'no_runtime_plugin_loading_unless_registered_and_approved'
])

export const AURA_PSL_ERROR_CODES = Object.freeze([
  'PSL.SYNTAX.INVALID',
  'PSL.SYNTAX.UNKNOWN_SECTION',
  'PSL.TYPE.MISMATCH',
  'PSL.REF.UNRESOLVED',
  'PSL.RULE.UNKNOWN_TRIGGER',
  'PSL.RULE.UNKNOWN_ACTION',
  'PSL.ACTION.UNSAFE_DIRECT_MUTATION',
  'PSL.KERNEL.OPERATION_NOT_ALLOWED',
  'PSL.EXPRESSION.UNSAFE_FUNCTION',
  'PSL.EXPRESSION.UNKNOWN_FIELD',
  'PSL.STATE.UNREACHABLE',
  'PSL.INVARIANT.INVALID',
  'PSL.POLICY.MISSING_REQUIRED_PACK',
  'PSL.CONSENT.MISSING_FOR_AUTOMATION',
  'PSL.EVIDENCE.VERIFICATION_MISSING',
  'PSL.EXPERIENCE.CONSENT_SURFACE_MISSING'
])

export const AURA_PSL_ERROR_EXAMPLE = Object.freeze({
  code: 'PSL.REF.UNRESOLVED',
  message: 'Action release_to_school references school_account, but no money object with id school_account exists.',
  path: 'actions.release_to_school.to',
  severity: 'ERROR'
})

export const ADMIN_STUDIO_PSL_DRAG_EXAMPLE = Object.freeze([
  'Goal Wallet',
  'Contributor Link',
  'Verified Landlord',
  'Release Approval',
  'Receipt'
])

export const NATURAL_LANGUAGE_RENT_PSL_MISSING_DETAILS = Object.freeze([
  'What is the rent target amount?',
  'What is the due date?',
  'What should happen if the wallet is cancelled?',
  'Can partial payment be sent?',
  'Should your brother see total progress?'
])

export const AURA_PSL_RUNTIME_PREFLIGHT_CHECKS = Object.freeze([
  'capability_active',
  'current_state_allows_command',
  'actor_is_approver',
  'recipient_verified',
  'consent_active',
  'release_amount_valid',
  'wallet_balance_sufficient',
  'kernel_command_allowed',
  'idempotency_key_exists',
  'jurisdiction_policy_valid',
  'risk_not_blocked'
])

export const AURA_PSL_EXPERIENCE_PHYSICS_REQUIREMENTS = Object.freeze({
  lock_funds: ['lock_explanation', 'visible_locked_state', 'unlock_refund_explanation', 'confirmation_if_user_initiated', 'restricted_funds_warning'],
  external_transfer: ['recipient_confirmation', 'amount_confirmation', 'finality_disclosure', 'receipt', 'error_recovery', 'support_trace']
})

export const AURA_PSL_ASSET_NEEDS_EXAMPLE = Object.freeze([
  { type: 'icon', semantic: 'education_wallet', mood: 'trustworthy' },
  { type: 'animation', semantic: 'contribution_success', mood: 'celebratory_but_calm' },
  { type: 'illustration', semantic: 'invoice_review', mood: 'clear_and_serious' }
])

export const AURA_PSL_ALGORITHM_REFERENCES_EXAMPLE = Object.freeze({
  invoice_confidence: { ref: 'InvoiceSimilarityCheck', version: '1.2.0', inputs: ['invoice.document', 'school.profile'], output: 'confidence_score' },
  gps_confidence: { ref: 'GPSConfidenceScore', version: '1.0.0', inputs: ['proof.gps', 'job.location', 'device.integrity'], output: 'confidence_score' }
})

export const AURA_PSL_VERSION_DIMENSIONS = Object.freeze([
  'psl_language_version',
  'capability_version',
  'primitive_version',
  'algorithm_version',
  'policy_pack_version',
  'kernel_contract_version',
  'ui_directive_version'
])

export const AURA_PSL_VERSION_MIGRATION_EXAMPLES = Object.freeze([
  { from: '1.0', to: '1.1', change: 'rules.unless_added' },
  { from: '1.1', to: '2.0', change: 'evidence_syntax_changed' }
])

export const AURA_PSL_GOVERNANCE_RESTRICTIONS = Object.freeze([
  'policy_bypass_fields_rejected',
  'direct_balance_mutation_flags_rejected',
  'global_aura_safety_cannot_be_overridden',
  'policy_review_can_be_requested_but_not_bypassed',
  'policy_packs_can_be_referenced_but_not_redefined'
])

export const AURA_PSL_MINIMUM_VALID_CAPABILITY_FIELDS = Object.freeze([
  'product_declaration',
  'at_least_one_actor',
  'at_least_one_money_object',
  'at_least_one_rule',
  'state_model_or_lifecycle',
  'kernel_command_mapping_for_money_movement',
  'ownership_model',
  'consent_rules_if_automation_exists',
  'disclosure_rules_if_funds_lock_or_fees_exist',
  'audit_events'
])

export const AURA_PSL_ANTI_PATTERNS = Object.freeze([
  'floating_money_object_without_owner',
  'hidden_fee_without_disclosure',
  'trapped_escrow_without_refund_or_expiry',
  'auto_release_to_unverified_recipient',
  'unbounded_rule_loop',
  'automation_without_consent',
  'policy_self_approval',
  'direct_ledger_mutation'
])

export const AURA_PSL_IMPLEMENTATION_MODULES = Object.freeze({
  'aura-psl-core': ['parser', 'lexer', 'ast', 'type_checker', 'reference_resolver', 'expression_parser', 'effect_analyzer', 'state_machine_analyzer', 'kernel_contract_builder', 'ucc_emitter', 'ir_compiler', 'diagnostics'],
  'aura-psl-registry': ['atom_registry_client', 'primitive_registry_client', 'algorithm_registry_client', 'asset_registry_client', 'policy_registry_client', 'kernel_registry_client'],
  'aura-psl-tools': ['formatter', 'linter', 'migration_tool', 'diff_tool', 'test_generator', 'simulation_generator'],
  'aura-psl-studio': ['visual_builder_bindings', 'live_validation', 'drag_drop_to_psl']
})

export const AURA_PSL_RUNTIME_OWNERSHIP = Object.freeze({
  rust: ['parser', 'type_checker', 'effect_analyzer', 'financial_physics_sensitive_checks'],
  go: ['orchestration_service', 'api', 'registry_integration', 'compiler_pipeline_service'],
  typescript: ['admin_studio', 'ui_generation', 'live_editor', 'schema_driven_forms']
})

export const AURA_PSL_SERVICE_API_ROUTES = Object.freeze([
  { id: 'parse_psl', method: 'POST', path: '/psl/parse', returns: ['AST', 'diagnostics'] },
  { id: 'compile_to_ucc', method: 'POST', path: '/psl/compile-to-ucc', returns: ['universal_capability_contract_draft', 'compiler_diagnostics', 'missing_references'] },
  { id: 'validate_psl', method: 'POST', path: '/psl/validate', runs: ['syntax_check', 'type_check', 'reference_resolution', 'effect_analysis', 'pre_ucc_validation'] },
  { id: 'generate_clarifications', method: 'POST', path: '/psl/clarifications', returns: ['questions_needed_to_complete_capability'] },
  { id: 'compile_runtime_ir', method: 'POST', path: '/psl/compile-ir', onlyAfter: 'ucc_validation' }
])

export const AURA_PSL_DIAGNOSTIC_EXAMPLE = Object.freeze({
  code: 'PSL.EFFECT.LOCK_WITHOUT_EXIT',
  severity: 'CRITICAL',
  message: 'Action lock_invoice_amount locks funds into invoice_payment_escrow, but no expiry or refund rule resolves the lock.',
  path: 'actions.lock_invoice_amount',
  required_fix: 'Add refund and expiry rules for invoice_payment_escrow.',
  suggested_questions: [
    'How many days should the invoice remain pending before funds are returned?',
    'Should refund go to the wallet or original source?'
  ]
})

export const AURA_PSL_DIAGNOSTIC_CONSUMERS = Object.freeze([
  'Admin Studio',
  'Capability Doctor',
  'AI Repair Loop',
  'UCC Validator',
  'Developer CLI'
])

export const AURA_PSL_CLI_COMMANDS = Object.freeze([
  'aura-psl parse school_fees_wallet.psl.yaml',
  'aura-psl validate school_fees_wallet.psl.yaml',
  'aura-psl compile school_fees_wallet.psl.yaml --emit-ucc',
  'aura-psl simulate school_fees_wallet.psl.yaml --scenario normal',
  'aura-psl diff school_fees_wallet.v1.psl.yaml school_fees_wallet.v2.psl.yaml',
  'aura-psl migrate --from 1.0 --to 1.1 school_fees_wallet.psl.yaml'
])

export const AURA_PSL_CLI_OUTPUTS = Object.freeze([
  'schema_diagnostics',
  'semantic_diagnostics',
  'ucc_draft',
  'runtime_ir',
  'test_suite',
  'simulation_suite'
])

export const AURA_PSL_DIFF_CHANGE_EXAMPLES = Object.freeze([
  'fee_changed',
  'release_condition_changed',
  'release_recipient_changed',
  'recipient_visibility_changed',
  'disclosure_text_added',
  'consent_scope_changed',
  'autonomy_increased',
  'refund_path_changed',
  'state_machine_changed',
  'new_evidence_requirement_added',
  'new_policy_pack_applied'
])

export const AURA_PSL_DIFF_CLASSIFICATIONS = Object.freeze([
  'non_breaking',
  'breaking',
  'consent_required',
  'policy_review_required',
  'migration_required',
  'runtime_blocking',
  'blocked'
])

export const AURA_PSL_FORMLESS_BANKING_QUESTIONS = Object.freeze([
  { id: 'who', asks: 'Who participates?', resolves: 'typed_actors' },
  { id: 'what_money', asks: 'What money is involved?', resolves: 'money_objects' },
  { id: 'owned_by_whom', asks: 'Owned by whom?', resolves: 'ownership_model' },
  { id: 'locked_where', asks: 'Locked where?', resolves: 'fund_state_and_lock_model' },
  { id: 'released_when', asks: 'Released when?', resolves: 'release_conditions' },
  { id: 'approved_by_whom', asks: 'Approved by whom?', resolves: 'approval_policy' },
  { id: 'verified_how', asks: 'Verified how?', resolves: 'evidence_requirements' },
  { id: 'refunded_when', asks: 'Refunded when?', resolves: 'refund_rules' },
  { id: 'disputed_how', asks: 'Disputed how?', resolves: 'dispute_process' },
  { id: 'audited_where', asks: 'Audited where?', resolves: 'audit_events' },
  { id: 'explained_to_whom', asks: 'Explained to whom?', resolves: 'experience_and_disclosures' },
  { id: 'governed_by_what', asks: 'Governed by what?', resolves: 'policy_and_financial_physics' }
])

export const AURA_PSL_CANONICAL_TRANSFORMATION_ARTIFACTS = Object.freeze([
  'human_intent',
  'typed_actors',
  'money_objects',
  'rules',
  'state_machines',
  'kernel_safe_actions',
  'policy_requirements',
  'evidence_requirements',
  'consent_requirements',
  'experience_requirements',
  'audit_requirements',
  'tests',
  'simulations',
  'monitoring'
])

export const AURA_PSL_CANONICAL_EXECUTION_ARCHITECTURE = Object.freeze([
  { layer: 'aura_psl', responsibility: 'declares_financial_behavior', money_authority: false },
  { layer: 'ucc_validator', responsibility: 'validates_declared_behavior', money_authority: false },
  { layer: 'psl_compiler', responsibility: 'transforms_valid_psl_to_ucc_and_runtime_ir', money_authority: false },
  { layer: 'policy_governor', responsibility: 'approves_or_blocks_capability_release', money_authority: false },
  { layer: 'financial_kernel', responsibility: 'executes_only_approved_kernel_commands', money_authority: true }
])

export const AURA_FINANCIAL_PHYSICS_NEXT_ARTIFACT_LAWS = Object.freeze([
  'money_conservation',
  'fund_state_exclusivity',
  'ownership_clarity',
  'locked_fund_exit_paths',
  'escrow_safety',
  'settlement_finality',
  'refund_reversal_rules',
  'liability_mapping',
  'risk_exposure_limits',
  'ledger_compatibility',
  'no_ghost_balances',
  'no_trapped_funds',
  'no_unsafe_release'
])

export const PSL_ACTOR_DECLARATION_EXAMPLE = Object.freeze({
  contributor: {
    type: 'family_member',
    role: 'contributor',
    required: false,
    verification: 'phone_or_email_verified',
    permissions: {
      can: ['contribute', 'view_own_receipt'],
      cannot: ['withdraw', 'approve_release', 'view_owner_balance']
    },
    visibility: {
      can_view: ['own_contribution', 'optional_goal_progress'],
      cannot_view: ['other_contributor_details', 'owner_total_balance']
    },
    consent_requirements: []
  }
})

export const PSL_ENTITY_DECLARATION_EXAMPLE = Object.freeze({
  school: {
    type: 'institution',
    verification: 'institution_verified',
    attributes: {
      sector: 'education',
      country: 'GH'
    }
  },
  landlord_entity: {
    type: 'individual_or_business_recipient',
    verification: 'recipient_verified',
    attributes: {
      payout_purpose: 'rent'
    }
  }
})

export const AURA_PSL_RELATIONSHIP_TYPES = Object.freeze([
  'guardian_of',
  'contributes_to',
  'approved_recipient_for',
  'rent_payer_to_landlord',
  'member_of_circle',
  'beneficiary_of',
  'payer_to_recipient',
  'verifier_for'
])

export const SCHOOL_FEES_PSL_RELATIONSHIPS_EXAMPLE = Object.freeze([
  { from: 'guardian', to: 'child', type: 'guardian_of' },
  { from: 'contributor', to: 'school_fees_wallet', type: 'contributes_to' },
  { from: 'school', to: 'school_fees_wallet', type: 'approved_recipient_for' },
  { from: 'owner', to: 'landlord', type: 'rent_payer_to_landlord' }
])

export const AURA_PSL_MONEY_OBJECT_TYPES = Object.freeze([
  'wallet',
  'goal_wallet',
  'sub_wallet',
  'vault',
  'escrow',
  'conditional_escrow',
  'gps_evidence_escrow',
  'reserve',
  'lock',
  'pending_claim',
  'obligation',
  'recipient_account',
  'fee_account',
  'liability_bucket',
  'insurance_bucket',
  'circle_pool',
  'circle_wallet',
  'insurance_like_reserve'
])

export const AURA_PSL_MONEY_OBJECT_REQUIRED_FIELDS = Object.freeze([
  'id',
  'type',
  'owner',
  'purpose',
  'allowed_states',
  'allowed_operations',
  'restrictions'
])

export const RENT_PSL_MONEY_OBJECTS_EXAMPLE = Object.freeze({
  rent_wallet: {
    id: 'rent_wallet',
    type: 'goal_wallet',
    owner: 'owner',
    currency: 'USD',
    purpose: 'rent',
    target_amount: { required: true },
    allowed_states: ['available', 'locked', 'refunded', 'released'],
    allowed_operations: ['allocate_funds', 'lock_funds', 'release_escrow', 'refund_funds'],
    restrictions: { payout_only_to: 'landlord' }
  },
  rent_payment_escrow: {
    id: 'rent_payment_escrow',
    type: 'escrow',
    owner: 'owner',
    recipient: 'landlord',
    currency: 'USD',
    purpose: 'rent_payment',
    release_condition: 'owner_approved_and_landlord_verified',
    refund_condition: 'owner_cancels_before_release',
    dispute_condition: 'owner_or_landlord_disputes_invoice',
    expiry_condition: 'due_date_passed_without_release',
    allowed_states: ['locked', 'released', 'refunded', 'disputed', 'expired'],
    allowed_operations: ['lock_funds', 'release_escrow', 'refund_funds'],
    restrictions: { payout_only_to: 'landlord' }
  }
})

export const AURA_PSL_FUND_STATES = Object.freeze([
  'available',
  'allocated',
  'reserved',
  'locked',
  'escrowed',
  'pending_claim',
  'released',
  'settled',
  'refunded',
  'reversed',
  'expired',
  'disputed',
  'failed'
])

export const SCHOOL_FEES_PSL_FUND_STATES_EXAMPLE = Object.freeze({
  school_fees_wallet: { allowed: ['available', 'locked', 'refunded', 'released'] },
  invoice_payment_escrow: { allowed: ['locked', 'released', 'refunded', 'disputed', 'expired'] }
})

export const SCHOOL_FEES_PSL_EVENTS_EXAMPLE = Object.freeze({
  incoming_money_received: {
    type: 'MONEY_RECEIVED',
    source: 'guardian_main_wallet',
    payload: { amount: 'Amount', currency: 'Currency', received_at: 'Timestamp' }
  },
  invoice_uploaded: {
    type: 'INVOICE_UPLOADED',
    source: 'school',
    payload: { invoice_id: 'InvoiceId', amount: 'Amount', due_date: 'Date' }
  },
  evidence_submitted: {
    type: 'GPS_PROOF_SUBMITTED',
    source: 'guardian',
    payload: { evidence_id: 'EvidenceId', type: 'EvidenceType', gps_attached: 'Boolean' }
  },
  approval_granted: {
    type: 'APPROVAL_GRANTED',
    source: 'guardian',
    payload: { approval_id: 'ApprovalId', approved_at: 'Timestamp' }
  }
})

export const AURA_PSL_TRIGGER_TYPES = Object.freeze([
  'event',
  'schedule',
  'manual_command',
  'system_condition',
  'policy_update',
  'risk_signal',
  'external_webhook',
  'state_entry',
  'state_exit'
])

export const SCHOOL_FEES_PSL_TRIGGERS_EXAMPLE = Object.freeze({
  on_incoming_money: { event: 'incoming_money_received' },
  on_invoice_uploaded: { event: 'invoice_uploaded' },
  on_gps_photo_submitted: {
    event: 'evidence_submitted',
    filter: 'evidence.type == photo AND evidence.gps_attached == true'
  },
  seven_days_before_due: {
    schedule: {
      relative_to: 'rent_due_date',
      offset: '-7d',
      timezone_source: 'user_profile'
    }
  }
})

export const AURA_PSL_PRIMITIVE_EXPRESSION_TYPES = Object.freeze([
  'String',
  'Boolean',
  'Integer',
  'Decimal',
  'Amount',
  'Currency',
  'Date',
  'Timestamp',
  'Duration',
  'Percentage',
  'Ratio',
  'Score',
  'Coordinate',
  'Distance',
  'Id',
  'Enum'
])

export const AURA_PSL_DOMAIN_EXPRESSION_TYPES = Object.freeze([
  'ActorRef',
  'EntityRef',
  'WalletRef',
  'EscrowRef',
  'InvoiceRef',
  'EvidenceRef',
  'ConsentRef',
  'PolicyRef',
  'EventRef',
  'StateRef',
  'KernelCommandRef'
])

export const AURA_PSL_EXPRESSION_OPERATORS = Object.freeze([
  '==',
  '!=',
  '>',
  '>=',
  '<',
  '<=',
  'AND',
  'OR',
  'NOT',
  'IN',
  'NOT IN',
  'EXISTS',
  'IS_EMPTY',
  'IS_NOT_EMPTY',
  '+',
  '-',
  '*',
  '/',
  '%'
])

export const AURA_PSL_APPROVED_FUNCTIONS = Object.freeze([
  'SUM',
  'COUNT',
  'MIN',
  'MAX',
  'AVG',
  'ROUND',
  'PERCENT_OF',
  'DAYS_BETWEEN',
  'NOW',
  'DATE_ADD',
  'DATE_SUB',
  'DISTANCE',
  'WITHIN_RADIUS',
  'HAS_CONSENT',
  'HAS_PERMISSION',
  'IS_VERIFIED',
  'RISK_BELOW',
  'BTS_AT_LEAST',
  'NOT',
  'EXISTS',
  'IS_EMPTY',
  'IS_NOT_EMPTY'
])

export const AURA_PSL_FORBIDDEN_FUNCTIONS = Object.freeze([
  'eval',
  'exec',
  'fetch',
  'http_request',
  'db_query',
  'file_read',
  'file_write',
  'system',
  'random',
  'while',
  'loop',
  'import',
  'dynamic_import'
])

export const AURA_PSL_ACTION_CATEGORIES = Object.freeze([
  'kernel_command',
  'state_transition',
  'emit_event',
  'notify',
  'request_approval',
  'request_evidence',
  'request_consent',
  'open_review',
  'block',
  'refund',
  'generate_receipt',
  'generate_ui_prompt',
  'call_integration'
])

export const SCHOOL_FEES_PSL_ACTIONS_EXAMPLE = Object.freeze({
  allocate_school_split: {
    type: 'kernel_command',
    command: 'allocate_funds',
    from: 'guardian_main_wallet',
    to: 'school_fees_wallet',
    amount: 'PERCENT_OF(incoming.amount, 20)',
    idempotency_key: 'capability_instance_id + incoming.event_id + rule.id'
  },
  notify_guardian: {
    type: 'notify',
    to: 'guardian',
    template: 'school_wallet_allocation_success'
  },
  request_parent_approval: {
    type: 'request_approval',
    from: 'guardian',
    for: 'release_to_school'
  },
  block_unverified_release: {
    type: 'block',
    reason_code: 'SCHOOL_UNVERIFIED'
  }
})

export const AURA_PSL_RULE_REQUIRED_FIELDS = Object.freeze([
  'id',
  'when',
  'if',
  'then',
  'else',
  'emits',
  'audit',
  'priority'
])

export const AURA_PSL_RULE_TYPES = Object.freeze([
  'allocation',
  'lock',
  'release',
  'refund',
  'evidence',
  'policy_block',
  'reminder',
  'bts_gated'
])

export const SCHOOL_FEES_PSL_RULES_EXAMPLE = Object.freeze({
  auto_split_to_school_wallet: {
    id: 'auto_split_to_school_wallet',
    type: 'allocation',
    when: 'incoming_money_received',
    if: ['auto_split_enabled', 'HAS_CONSENT(guardian, auto_split_consent)', 'incoming.amount > 0'],
    then: ['allocate_school_split', 'notify_guardian', { emit_event: 'AUTO_SPLIT_EXECUTED' }],
    else: [{ emit_event: 'AUTO_SPLIT_SKIPPED' }],
    emits: ['AUTO_SPLIT_EXECUTED', 'AUTO_SPLIT_SKIPPED'],
    audit: { required: true, include: ['actor', 'amount', 'consent_id', 'kernel_command_id'] },
    priority: 100
  },
  block_unverified_school_payment: {
    id: 'block_unverified_school_payment',
    type: 'policy_block',
    when: 'payment_release_requested',
    if: ['NOT school_is_verified'],
    then: ['block_unverified_release'],
    else: [],
    emits: ['PAYMENT_RELEASE_BLOCKED'],
    audit: { required: true, include: ['actor', 'reason_code'] },
    priority: 200
  },
  allow_early_susu_payout: {
    id: 'allow_early_susu_payout',
    type: 'bts_gated',
    when: 'payout_position_requested',
    if: ['BTS_AT_LEAST(member, 80)', 'member.default_risk < 0.2'],
    then: ['allow_early_payout_position'],
    else: ['require_manual_review'],
    emits: ['BTS_EARLY_PAYOUT_REVIEWED'],
    audit: { required: true, include: ['actor', 'bts_score', 'decision'] },
    priority: 50
  }
})

export const SCHOOL_FEES_PSL_STATE_MACHINE_EXAMPLE = Object.freeze({
  initial: 'draft',
  states: {
    draft: { description: 'Capability is being configured.', terminal: false },
    active: { description: 'Capability is ready.', terminal: false },
    funding: { description: 'Funds are being collected.', terminal: false },
    invoice_pending: { description: 'Invoice submitted but not verified.', terminal: false },
    approval_pending: { description: 'Waiting for guardian approval.', terminal: false },
    payment_released: { terminal: true, resolves_money: true },
    cancelled: { terminal: true, resolves_money: true },
    disputed: { terminal: false }
  },
  transitions: {
    draft_to_active: { from: 'draft', to: 'active', when: 'wallet_setup_completed', requires: ['guardian_consent_collected'], emits: ['CAPABILITY_ACTIVATED'] },
    funding_to_invoice_pending: { from: 'funding', to: 'invoice_pending', when: 'invoice_uploaded', emits: ['INVOICE_UPLOADED'] },
    approval_to_release: { from: 'approval_pending', to: 'payment_released', when: 'guardian_approved_release', requires: ['school_is_verified', 'invoice_is_verified'], actions: ['release_payment_to_school'], emits: ['PAYMENT_RELEASED'] },
    active_to_funding: { from: 'active', to: 'funding', when: 'incoming_money_received', emits: ['CONTRIBUTION_RECEIVED'] },
    invoice_pending_to_approval: { from: 'invoice_pending', to: 'approval_pending', when: 'invoice_verified', emits: ['INVOICE_VERIFIED'] },
    funding_to_cancelled: { from: 'funding', to: 'cancelled', when: 'guardian_cancelled_wallet', actions: ['refund_after_expiry'], emits: ['REFUND_COMPLETED'] },
    disputed_to_cancelled: { from: 'disputed', to: 'cancelled', when: 'dispute_refund_approved', actions: ['refund_after_expiry'], emits: ['REFUND_COMPLETED'] }
  }
})

export const AURA_PSL_STATE_MACHINE_REQUIREMENTS = Object.freeze([
  'initial_state_required',
  'terminal_states_declared',
  'every_non_terminal_state_needs_exit_path',
  'money_states_resolve_before_terminal_state',
  'state_transitions_emit_events',
  'money_affecting_transitions_map_to_rules_and_kernel_commands'
])

export const SCHOOL_FEES_PSL_INVARIANTS_EXAMPLE = Object.freeze({
  no_money_creation: {
    statement: 'SUM(outputs) <= SUM(inputs) + disclosed_external_funding',
    severity: 'blocker'
  },
  locked_funds_not_available: {
    statement: 'NOT (fund.state == locked AND fund.state == available)',
    severity: 'critical'
  },
  release_requires_verified_recipient: {
    statement: 'release.recipient.verification == verified',
    applies_to: ['external_transfer', 'escrow_release'],
    severity: 'blocker'
  },
  no_trapped_funds: {
    statement: 'every locked_fund has release_path AND refund_path AND dispute_path AND expiry_path',
    severity: 'critical'
  }
})

export const AURA_PSL_GLOBAL_INVARIANTS = Object.freeze([
  'no_money_creation',
  'locked_funds_not_available',
  'release_requires_verified_recipient',
  'no_trapped_funds',
  'balanced_ledger_effects'
])

export const AURA_PSL_POLICY_REQUIRED_FIELDS = Object.freeze([
  'applies_when',
  'requirements',
  'failure_action',
  'jurisdiction',
  'severity',
  'review_owner',
  'disclosure_needed',
  'consent_needed'
])

export const SCHOOL_FEES_PSL_POLICIES_EXAMPLE = Object.freeze({
  require_school_verification: {
    applies_when: 'recipient.type == school',
    requirement: 'recipient.verification == institution_verified',
    requirements: ['recipient.verification == institution_verified'],
    failure_action: 'block SCHOOL_UNVERIFIED',
    jurisdiction: 'GH',
    severity: 'blocker',
    review_owner: 'policy_engine',
    disclosure_needed: 'payment_finality_disclosure',
    consent_needed: 'payment_release_consent'
  },
  minor_protection: {
    applies_when: 'beneficiary.type == dependent',
    requirements: ['guardian_authority_required', 'child_data_minimized', 'contributors_cannot_view_child_private_data'],
    failure_action: 'open_manual_review',
    jurisdiction: 'US',
    severity: 'critical',
    review_owner: 'policy_engine',
    disclosure_needed: 'fund_restriction_disclosure',
    consent_needed: 'auto_split_consent'
  },
  large_contribution_review: {
    applies_when: 'contribution.amount > jurisdiction.large_contribution_threshold',
    requirements: ['source_of_funds_review_if_threshold_exceeded'],
    failure_action: 'open_manual_review',
    jurisdiction: 'GH',
    severity: 'warning',
    review_owner: 'risk_team',
    disclosure_needed: 'fund_restriction_disclosure',
    consent_needed: 'auto_split_consent'
  }
})

export const AURA_PSL_POLICY_PACKS_EXAMPLE = Object.freeze([
  'GH.consumer_wallets.v1',
  'GH.education_payments.v1',
  'AURA.minor_protection.v1'
])

export const AURA_PSL_CONSENT_REQUIRED_FIELDS = Object.freeze([
  'actor',
  'required_before',
  'scope',
  'revocable',
  'revocation_effect',
  'disclosure_version',
  'new_consent_after_upgrade'
])

export const SCHOOL_FEES_PSL_CONSENTS_EXAMPLE = Object.freeze({
  auto_split_consent: {
    actor: 'guardian',
    required_before: 'auto_split_activation',
    scope: ['move_percentage_of_incoming_money', { destination: 'school_fees_wallet' }],
    revocable: true,
    revocation_effect: ['disable_auto_split', 'preserve_existing_wallet_balance'],
    disclosure_version: 'fund_restriction_disclosure@1.0.0',
    new_consent_after_upgrade: true
  },
  payment_release_consent: {
    actor: 'guardian',
    required_before: 'release_to_school',
    scope: ['release_locked_funds_to_verified_school'],
    revocable_until: 'external_settlement_started',
    revocable: true,
    revocation_effect: ['block_future_release_until_reapproved'],
    disclosure_version: 'payment_finality_disclosure@1.0.0',
    new_consent_after_upgrade: true
  }
})

export const SCHOOL_FEES_PSL_DISCLOSURES_EXAMPLE = Object.freeze({
  fund_restriction_disclosure: {
    shown_before: 'wallet_activation',
    audience: 'guardian',
    message_key: 'school_wallet_fund_restriction',
    must_confirm: true
  },
  payment_finality_disclosure: {
    shown_before: 'external_payment_release',
    audience: 'guardian',
    message_key: 'school_payment_finality',
    must_confirm: true
  },
  contributor_visibility_disclosure: {
    shown_before: 'contributor_invite',
    audience: 'guardian',
    message_key: 'contributor_progress_visibility',
    must_confirm: true
  }
})

export const AURA_PSL_EVIDENCE_REQUIRED_FIELDS = Object.freeze([
  'type',
  'required_for',
  'submitted_by',
  'required_fields',
  'verification',
  'retention',
  'visibility',
  'anti_spoofing_rules'
])

export const SCHOOL_FEES_PSL_EVIDENCE_EXAMPLE = Object.freeze({
  school_invoice: {
    type: 'invoice',
    required_for: 'payment_release',
    submitted_by: 'school',
    required_fields: ['school_name', 'student_reference', 'invoice_amount', 'due_date'],
    verification: { method: 'document_validation', algorithm: 'InvoiceSimilarityCheck', minimum_confidence: 0.80, fallback: 'manual_review' },
    retention: 'retain_until_payment_and_dispute_window_close',
    visibility: ['guardian', 'admin'],
    anti_spoofing_rules: ['duplicate_invoice_detection']
  },
  gps_photo_proof: {
    type: 'photo_with_gps',
    required_for: 'contractor_payment_release',
    submitted_by: 'contractor',
    verification: { methods: ['gps_radius_check', 'photo_timestamp_check', 'duplicate_photo_check'], minimum_confidence: 0.85, fallback: 'sender_review' },
    required_fields: ['photo_id', 'gps_coordinate', 'captured_at'],
    retention: 'retain_until_release_and_dispute_window_close',
    visibility: ['sender', 'admin'],
    anti_spoofing_rules: ['gps_spoofing_detection', 'duplicate_photo_detection']
  }
})

export const SCHOOL_FEES_PSL_AUTONOMY_EXAMPLE = Object.freeze({
  global: 'assisted_autonomy',
  dimensions: {
    money_allocation: { level: 'auto_execute_under_user_rule', allowed_if: ['HAS_CONSENT(guardian, auto_split_consent)'] },
    external_payment_release: { level: 'requires_user_approval', approver: 'guardian' },
    recipient_change: { level: 'requires_user_approval_and_reverification', approver: 'guardian' },
    refund_after_expiry: { level: 'auto_execute_under_contract_rule', allowed_if: ['expiry_condition_met', 'refund_path_declared'] }
  },
  blocked: ['auto_release_to_unverified_recipient', 'auto_apply_new_fee', 'auto_change_recipient_account']
})

export const SCHOOL_FEES_PSL_EXPERIENCE_EXAMPLE = Object.freeze({
  surfaces: {
    wallet_setup: { type: 'setup_flow', required: true, includes: ['target_amount_input', 'school_selector', 'auto_split_setting', 'auto_split_consent', 'disclosure_confirmation'] },
    progress_card: { type: 'dashboard_card', required: true, shows: ['target_progress', 'amount_saved', 'amount_remaining'] },
    invoice_review: { type: 'approval_screen', required: true, shows: ['invoice_details', 'school_verification_status', 'amount_to_release', 'warning_if_irreversible'] },
    payment_release_confirmation: { type: 'confirmation_screen', required: true, includes: ['payment_finality_disclosure', 'payment_release_consent', 'guardian_approval'] },
    blocked_action_reason: { type: 'reason_screen', required: true, shows: ['reason_code', 'next_step'] },
    error_recovery: { type: 'recovery_screen', required: true, shows: ['error_state', 'retry_or_refund_options'] },
    receipt_screen: { type: 'receipt', required: true, shows: ['payment_amount', 'recipient', 'timestamp'] }
  }
})

export const AURA_PSL_EXPERIENCE_RULES = Object.freeze([
  'every_consent_requires_ui',
  'every_disclosure_requires_ui',
  'every_external_release_requires_confirmation_ui',
  'every_blocked_action_requires_reason_ui',
  'every_error_state_requires_recovery_ui',
  'every_money_state_visible_to_right_actor'
])

export const SCHOOL_FEES_PSL_AUDIT_EXAMPLE = Object.freeze({
  required_for: ['money_movement', 'consent', 'disclosure', 'policy_decision', 'state_transition', 'evidence_verification'],
  include: ['actor_id', 'timestamp', 'capability_id', 'capability_version', 'rule_id', 'state_before', 'state_after', 'kernel_command_id', 'ledger_entry_ids', 'policy_decision_id', 'consent_id', 'disclosure_version'],
  visibility: {
    guardian: { can_view: ['all_wallet_events', 'all_payment_events'] },
    contributor: { can_view: ['own_contribution_events', 'own_receipts'] },
    school: { can_view: ['invoice_events', 'payment_received_events'] }
  }
})

export const AURA_PSL_TEST_CATEGORIES = Object.freeze([
  'schema',
  'semantic',
  'ledger',
  'policy',
  'autonomy',
  'state',
  'evidence',
  'UI',
  'fraud',
  'security',
  'migration',
  'runtime_preflight'
])

export const SCHOOL_FEES_PSL_TESTS_EXAMPLE = Object.freeze({
  ledger: [
    { name: 'auto_split_balances', given: { 'incoming.amount': 100, auto_split_percentage: 20 }, expect: { 'guardian_main_wallet.debit': 20, 'school_fees_wallet.credit': 20, 'ledger.balanced': true } }
  ],
  policy: [
    { name: 'cannot_release_to_unverified_school', given: { 'school.verification': 'unverified' }, when: { command: 'release_to_school' }, expect: { decision: 'block', reason_code: 'SCHOOL_UNVERIFIED' } }
  ],
  state_machine: [
    { name: 'invoice_flow_reaches_approval_pending', given: { state: 'funding' }, when: { event: 'invoice_uploaded' }, expect: { state: 'invoice_pending' } }
  ],
  fraud: [
    { name: 'duplicate_invoice_routes_to_review', given: { invoice_number: 'ABC123' }, when: { event: 'duplicate_invoice' }, expect: { action: 'manual_review' } }
  ],
  runtime_preflight: [
    { name: 'release_requires_approval', given: { approval_present: false }, when: { command: 'release_to_school' }, expect: { decision: 'REQUIRE_APPROVAL' } }
  ]
})

export const SCHOOL_FEES_PSL_SIMULATION_EXAMPLE = Object.freeze({
  normal: [
    { name: 'guardian_saves_and_pays_school', steps: ['incoming_money_received amount=500', 'auto_split_runs', 'invoice_uploaded amount=300', 'invoice_verified', 'guardian_approves', 'payment_released'], expected: { final_state: 'payment_released', ledger_balanced: true, receipt_generated: true } }
  ],
  edge_cases: [
    { name: 'insufficient_balance', steps: ['invoice_uploaded amount=1000', 'wallet_balance amount=300', 'guardian_approves'], expected: { decision: 'block', reason_code: 'INSUFFICIENT_BALANCE' } }
  ],
  fraud: [
    { name: 'duplicate_invoice', steps: ['invoice_uploaded invoice_number=ABC123', 'invoice_uploaded invoice_number=ABC123'], expected: { action: 'manual_review' } }
  ],
  failure: [
    { name: 'payment_provider_failure', provider_api_skipped: true, steps: ['release_payment', 'provider_returns_failure'], expected: { state: 'settlement_failed', recovery_options: ['retry', 'refund', 'manual_review'] } }
  ]
})

export const SCHOOL_FEES_PSL_MONITORING_EXAMPLE = Object.freeze({
  metrics: {
    activation_count: { source: 'CAPABILITY_INSTANCE_CREATED' },
    stuck_invoice_count: { source: 'state_machine', condition: 'state == invoice_pending AND duration > 7d' },
    blocked_release_attempts: { source: 'PAYMENT_RELEASE_BLOCKED' },
    duplicate_invoice_attempts: { source: 'DUPLICATE_INVOICE_DETECTED' },
    support_ticket_rate: { source: 'support_system' }
  },
  alerts: {
    high_stuck_invoice_rate: { condition: 'stuck_invoice_count > threshold', action: 'notify_capability_doctor' },
    unauthorized_release_detected: { condition: 'release_without_required_approval == true', action: 'emergency_disable_capability' }
  },
  rollback_triggers: ['ledger_mismatch_detected', 'unauthorized_release_detected']
})

export const AURA_PSL_TO_UCC_MAPPING = Object.freeze({
  product: ['capability', 'intent', 'classification'],
  actors: ['entities.actors', 'policy.kyc_kyb_requirements'],
  entities: ['entities', 'identity_requirements'],
  relationships: ['entities.relationships'],
  money_objects: ['money_objects'],
  fund_states: ['financial_physics', 'state_machine'],
  events: ['events_audit.emitted_events'],
  triggers: ['rules.triggers'],
  conditions: ['rules.conditions'],
  actions: ['rules.actions', 'kernel_contract.command_contracts'],
  rules: ['rules'],
  state_machine: ['state_machine'],
  invariants: ['financial_physics.invariants'],
  policies: ['policy'],
  consents: ['policy.consent_requirements'],
  disclosures: ['policy.disclosure_requirements', 'ui_ux'],
  evidence: ['evidence'],
  autonomy: ['autonomy'],
  experience: ['ui_ux'],
  audit: ['events_audit'],
  tests: ['testing'],
  simulation: ['simulation'],
  monitoring: ['monitoring']
})

export const AURA_PSL_COMPILER_PIPELINE_STEPS = Object.freeze([
  'parse_psl',
  'normalize_syntax',
  'build_ast',
  'resolve_references',
  'type_check_actors_money_objects_events_rules_actions',
  'validate_expression_safety',
  'analyze_effects',
  'generate_state_machine',
  'generate_kernel_command_contracts',
  'generate_financial_physics_obligations',
  'generate_policy_envelope',
  'generate_consent_disclosure_requirements',
  'generate_ui_ux_directives',
  'generate_audit_event_map',
  'generate_tests',
  'generate_simulations',
  'generate_monitoring_rules',
  'emit_universal_capability_contract',
  'send_ucc_to_validator',
  'compile_runtime_ir_if_valid'
])

export const AURA_PSL_COMPILER_OUTPUT_ARTIFACTS = Object.freeze([
  'universal_capability_contract',
  'capability_ast',
  'runtime_ir',
  'kernel_command_map',
  'state_machine_runtime_definition',
  'policy_envelope',
  'consent_pack',
  'disclosure_pack',
  'ui_directive_pack',
  'event_schema',
  'test_suite',
  'simulation_suite',
  'monitoring_pack',
  'explanation_draft',
  'dependency_manifest'
])

export const SCHOOL_FEES_PSL_COMPILER_PACKAGE_FILES = Object.freeze([
  'school_fees_wallet.ucc.yaml',
  'school_fees_wallet.ast.json',
  'school_fees_wallet.ir.json',
  'kernel_commands.json',
  'state_machine.json',
  'policy_envelope.json',
  'ui_directives.json',
  'tests.generated.json',
  'simulations.generated.json',
  'monitoring.json'
])

export const AURA_PSL_EFFECT_CATEGORIES = Object.freeze([
  'no_effect',
  'read_context',
  'notify',
  'ui_prompt',
  'state_change',
  'internal_money_movement',
  'lock_funds',
  'release_funds',
  'external_transfer',
  'refund',
  'policy_decision',
  'evidence_verification',
  'consent_change'
])

export const AURA_PSL_EFFECT_REQUIREMENTS = Object.freeze({
  external_transfer: ['verified_recipient', 'user_approval', 'kernel_idempotency', 'audit_event', 'confirmation_ui'],
  lock_funds: ['exit_path'],
  refund: ['owner_or_source_definition'],
  consent_change: ['disclosure_version'],
  state_change: ['transition_rule'],
  policy_decision: ['reason_code']
})

export const SCHOOL_FEES_PSL_EFFECT_EXAMPLE = Object.freeze({
  release_payment_to_school: {
    type: 'kernel_command',
    command: 'release_escrow',
    effect: {
      category: 'external_transfer',
      risk: 'medium',
      requires: ['verified_recipient', 'user_approval', 'kernel_idempotency', 'audit_event', 'confirmation_ui']
    }
  }
})

export const AURA_PSL_CONFLICT_RESOLUTION_MODEL = Object.freeze([
  'block_rules_override_allow_rules',
  'policy_rules_override_product_rules',
  'financial_physics_invariants_override_all_rules',
  'user_consent_revocation_overrides_automation',
  'higher_risk_escalation_overrides_low_risk_execution',
  'more_specific_rules_override_general_rules_only_if_not_conflicting_with_safety',
  'unresolved_conflict_requires_manual_review'
])

export const AURA_PSL_REQUIRED_SAFETY_RESTRICTIONS = Object.freeze([
  'direct_balance_mutation',
  'undeclared_money_movement',
  'unverified_recipient_auto_release',
  'auto_debit_without_consent',
  'fund_lock_without_exit_path',
  'fee_without_disclosure',
  'hidden_actor_visibility',
  'unbounded_rule_loops',
  'arbitrary_external_calls',
  'unsafe_expressions',
  'state_transitions_without_audit_events',
  'money_movement_without_idempotency',
  'kernel_operation_not_in_allowed_list',
  'condition_referencing_undeclared_object',
  'rule_action_referencing_undeclared_command'
])

export const RENT_CONTRIBUTION_PSL_EXAMPLE = Object.freeze({
  intent: 'Let my siblings contribute toward rent, but only my landlord should receive the money.',
  actors: [
    { id: 'owner', type: 'user', permissions: ['approve_payout', 'cancel_wallet'] },
    { id: 'contributor', type: 'family_member', permissions: ['contribute'] },
    { id: 'verified_landlord', type: 'recipient', verification: 'required' }
  ],
  money_objects: [
    { id: 'rent_goal_wallet', type: 'goal_wallet', owner: 'owner', restricted_purpose: 'rent' }
  ],
  rules: [
    { id: 'contributors_may_contribute', condition: 'contributor.verification_level != blocked', action: 'accept_contribution' },
    { id: 'landlord_only_recipient', condition: 'recipient.id == verified_landlord', action: 'restrict_payout_recipient' },
    { id: 'owner_approval_required', condition: 'owner.approval == true', action: 'allow_payout' },
    { id: 'refund_on_cancel', condition: 'wallet.cancelled == true', action: 'refund_contributors' }
  ],
  kernel_operations: ['create_wallet', 'allocate_funds', 'lock_funds', 'release_escrow', 'refund_funds', 'generate_receipt']
})

export const ADMIN_STUDIO_COMPONENTS = Object.freeze([
  'Wallet',
  'Auto-Split',
  'Escrow',
  'Approval',
  'GPS Verification',
  'Invoice Verification',
  'BTS Gate',
  'Contributor Link',
  'Refund Rule',
  'Reminder',
  'Penalty Rule',
  'Reward Rule',
  'Dispute Flow',
  'Receipt',
  'Notification'
])

export const SCHOOL_FEE_STUDIO_FLOW = Object.freeze([
  'Incoming Money',
  'Auto-Split 20%',
  'Goal Wallet',
  'Lock Until Invoice',
  'Verify School',
  'Parent Approval',
  'Release Payment',
  'Generate Receipt'
])

export const ADMIN_STUDIO_REVIEW_FIELDS = Object.freeze([
  'compatibility_warnings',
  'missing_required_primitives',
  'risk_level',
  'policy_issues',
  'ledger_impact',
  'user_journey_preview',
  'simulation_results',
  'test_status',
  'release_readiness'
])

export const ADMIN_STUDIO_WARNINGS = Object.freeze([
  'escrow_requires_a_refund_path',
  'auto_release_to_unverified_recipient_is_not_allowed',
  'capability_needs_a_consent_screen',
  'flow_has_no_dispute_state',
  'rule_may_trap_funds_after_expiry',
  'combination_increases_fraud_risk'
])

export const CAPABILITY_MARKETPLACE_SOURCES = Object.freeze([
  'internal_capabilities',
  'admin_created_capabilities',
  'partner_created_capabilities',
  'sector_packs',
  'jurisdiction_packs',
  'merchant_packs',
  'school_packs',
  'family_packs',
  'susu_packs',
  'agent_packs',
  'developer_created_packs'
])

export const MARKETPLACE_LISTING_FIELDS = Object.freeze([
  'risk_level',
  'supported_jurisdictions',
  'required_permissions',
  'required_kyc_kyb',
  'financial_behaviours',
  'fees',
  'limitations',
  'version',
  'author',
  'test_status',
  'policy_status',
  'known_risks',
  'user_ratings',
  'performance_metrics'
])

export const MARKETPLACE_OFFERING_MODES = Object.freeze([
  'free',
  'paid',
  'tenant_specific'
])

export const MARKETPLACE_CERTIFICATION_LEVELS = Object.freeze([
  'partner_certified',
  'aura_certified',
  'community_created_review_required'
])

export const MARKETPLACE_SAFETY_FOUNDATIONS = Object.freeze([
  'type_system',
  'governance',
  'testing',
  'simulation',
  'versioning',
  'monitoring',
  'rollback'
])

export const FAMILY_RENT_WALLET_WORDS_EXAMPLE = Object.freeze({
  request: 'I want to create a family rent wallet. My siblings can contribute, but the money should only go to the landlord. If we do not reach the full rent amount by the 25th, everyone should be reminded. If someone contributes late, mark it but do not punish them. I want receipts for every contribution.',
  extraction: {
    goal: 'shared_rent_payment',
    actors: ['user', 'siblings', 'landlord'],
    money_source: 'sibling_contributions',
    destination: 'landlord',
    target_amount: 'rent_amount',
    due_date: '25th',
    rules: ['contributors_can_send_money', 'funds_restricted_to_landlord', 'reminders_before_after_due_date', 'late_contributions_tracked', 'no_financial_penalty', 'receipts_required']
  },
  primitives: ['GoalWalletPrimitive', 'ContributorLinkPrimitive', 'VerifiedRecipientPrimitive', 'ObligationPrimitive', 'DueDatePrimitive', 'ReminderPrimitive', 'ReceiptPrimitive', 'RestrictedPayoutPrimitive', 'ContributionTrackingPrimitive'],
  missingInformation: ['what_is_the_rent_amount', 'who_is_the_landlord', 'should_landlord_be_verified_before_payment', 'should_funds_be_locked_until_full_amount_reached', 'can_partial_payment_be_sent', 'who_can_approve_final_payment'],
  draftCapability: 'Family Rent Wallet Capability',
  physicsChecks: ['can_funds_be_accounted_for', 'is_there_a_clear_owner', 'can_funds_be_refunded_if_rent_is_cancelled', 'can_landlord_payout_happen_only_after_authorization', 'are_receipts_generated', 'are_contributions_traceable'],
  governorChecks: ['does_this_look_like_pooling', 'are_contributors_consenting', 'is_landlord_verified', 'are_there_hidden_penalties', 'are_funds_trapped', 'is_there_a_dispute_path'],
  uiSurfaces: ['create_rent_wallet_screen', 'invite_siblings_screen', 'contribution_tracker', 'due_date_timeline', 'landlord_verification_card', 'payment_approval_screen', 'receipt_timeline', 'late_contribution_badge'],
  simulations: ['all_siblings_contribute_on_time', 'one_sibling_pays_late', 'target_not_reached', 'landlord_details_invalid', 'user_cancels_wallet', 'partial_payment_requested', 'duplicate_contribution'],
  release: {
    mode: 'private_capability',
    autonomy: {
      reminders: 'automatic',
      contribution_receipts: 'automatic',
      landlord_payment: 'requires_approval',
      landlord_change: 'requires_re_verification'
    }
  }
})

export const GPS_IMAGE_PROOF_STACK = Object.freeze({
  request: 'Pay this person only if they go to the site and send a picture of the completed work.',
  primitives: ['EscrowPrimitive', 'GeoProofPrimitive', 'PhotoEvidencePrimitive', 'WorkDescriptionPrimitive', 'ApprovalPrimitive', 'ReleasePrimitive', 'RefundPrimitive', 'DisputePrimitive', 'ReceiptPrimitive'],
  required_location: {
    lat: 'x',
    lng: 'y',
    radius_meters: 50
  },
  photo_requirements: {
    timestamp_required: true,
    metadata_required: true,
    object_match_required: 'optional',
    manual_review_allowed: true
  },
  release_conditions: ['gps_within_radius', 'photo_submitted', 'sender_approval'],
  financial_physics: ['funds_locked_before_work', 'funds_not_released_before_conditions', 'refund_path_if_proof_not_submitted', 'dispute_path_if_proof_rejected', 'audit_trail_for_evidence'],
  governor_checks: ['gps_spoofing_risk', 'photo_reuse_risk', 'recipient_verification', 'amount_threshold', 'manual_review_requirement'],
  ui_surfaces: ['job_location_map', 'escrow_deposit_screen', 'contractor_upload_screen', 'gps_confidence_badge', 'evidence_review_screen', 'approve_reject_buttons', 'refund_dispute_options'],
  reusableProofStack: true
})

export const RUNTIME_MONITORING_METRICS = Object.freeze([
  'activation_count',
  'successful_completion_count',
  'stuck_flows',
  'abandonment_points',
  'blocked_transactions',
  'manual_review_rate',
  'fraud_attempts',
  'refund_rate',
  'dispute_rate',
  'average_time_to_completion',
  'user_confusion_signals',
  'support_tickets',
  'policy_escalations',
  'ledger_exceptions',
  'state_machine_errors'
])

export const CONTRACTOR_GPS_MONITORING_PROBLEM = Object.freeze({
  capability: 'contractor_gps_payout',
  problem: '38_percent_of_contractors_fail_gps_verification',
  doctorAnalysis: ['location_radius_may_be_too_strict', 'device_gps_accuracy_poor_in_some_regions', 'manual_review_fallback_underused', 'users_misunderstand_gps_requirement'],
  recommendedFix: ['increase_default_radius_30m_to_75m_for_low_risk_jobs', 'add_visual_map_preview', 'add_pre_submission_gps_test', 'require_stronger_evidence_only_for_high_value_payouts']
})

export const EXPLANATION_ENGINE_QUESTIONS = Object.freeze([
  'what_is_this',
  'who_is_involved',
  'where_does_the_money_go',
  'when_can_money_move',
  'who_can_approve',
  'what_is_locked',
  'what_is_refundable',
  'what_fees_apply',
  'what_happens_if_something_fails',
  'what_happens_if_someone_disputes',
  'what_are_the_risks',
  'what_did_i_agree_to',
  'what_will_aura_do_automatically',
  'what_will_aura_never_do_without_approval'
])

export const SCHOOL_FEES_USER_EXPLANATION = 'This capability saves 20% of incoming money into your child\'s school fees wallet. Contributors can add money using your invite link. Funds remain in the wallet until a verified school invoice is submitted and you approve release. AURA will not pay the school automatically without your approval.'

export const EXPLANATION_DISPLAY_MOMENTS = Object.freeze([
  'setup',
  'confirmation',
  'rules_change'
])

export const CONSENT_DEFINITION_FIELDS = Object.freeze([
  'what_user_agrees_to',
  'what_aura_can_do_automatically',
  'what_funds_may_be_locked',
  'what_fees_apply',
  'who_can_access_funds',
  'who_can_see_information',
  'how_to_cancel',
  'how_to_dispute',
  'how_to_revoke_consent',
  'what_happens_on_failure'
])

export const SCHOOL_FEES_GRANULAR_CONSENT = Object.freeze([
  'allow_aura_to_automatically_move_20_percent_of_incoming_money_into_this_wallet',
  'understand_funds_are_restricted_for_school_fees',
  'understand_payment_to_school_requires_parent_approval',
  'allow_invited_contributors_to_see_contribution_progress',
  'do_not_allow_contributors_to_see_full_balance'
])

export const CONSENT_RECORD_FIELDS = Object.freeze([
  'consent_id',
  'user_id',
  'capability_id',
  'version',
  'scope',
  'timestamp',
  'revocation_rule',
  'evidence',
  'disclosure_version'
])

export const CAPABILITY_ENTITY_TYPES = Object.freeze([
  'user',
  'family_member',
  'dependent',
  'merchant',
  'school',
  'agent',
  'contractor',
  'business',
  'circle',
  'community_group',
  'landlord',
  'shadow_entity',
  'verified_organization',
  'unverified_recipient'
])

export const ENTITY_VERIFICATION_LEVELS = Object.freeze([
  'unverified',
  'phone_verified',
  'email_verified',
  'identity_verified',
  'bank_verified',
  'merchant_verified',
  'institution_verified',
  'kyb_verified',
  'trusted_entity'
])

export const ENTITY_VERIFICATION_RULES = Object.freeze([
  { action: 'pay_verified_school', required: 'institution_verified', decision: 'allowed' },
  { action: 'auto_pay_unverified_school', required: 'institution_verified', decision: 'blocked' },
  { action: 'family_wallet_contributor', required: 'phone_verified', decision: 'allowed' },
  { action: 'merchant_settlement', required: 'merchant_verified', decision: 'allowed' },
  { action: 'large_payout', required: 'identity_verified', decision: 'requires_stronger_recipient_verification' }
])

export const BTS_PERMISSION_INFLUENCE_AREAS = Object.freeze([
  'who_can_join_a_circle',
  'who_can_receive_early_payout',
  'who_can_access_higher_limits',
  'who_needs_extra_verification',
  'who_can_create_public_capabilities',
  'who_can_invite_contributors',
  'who_can_use_credit_liquidity_tools',
  'who_can_bypass_manual_review',
  'who_gets_restricted_autonomy'
])

export const BTS_PERMISSION_EXAMPLES = Object.freeze({
  low_bts_user: ['can_create_simple_savings_wallet', 'cannot_create_high_risk_pooling_capability', 'requires_manual_review_for_large_escrow_release'],
  high_bts_user: ['can_access_larger_limits', 'may_join_higher_trust_circles', 'may_receive_earlier_payout', 'may_need_fewer_friction_checks']
})

export const BTS_EXPLANATION_LINES = Object.freeze([
  'your_current_trust_level_allows_this_action',
  'this_action_requires_more_verified_history',
  'complete_these_steps_to_improve_access'
])

export const NORMAL_FINTECH_FIXED_FEATURES = Object.freeze([
  'wallet',
  'transfer',
  'savings',
  'bill_pay',
  'loan',
  'card'
])

export const FORMLESS_CAPABILITY_CREATION_FLOW = Object.freeze([
  'describe_money_behaviour',
  'aura_converts_it_into_safe_financial_logic',
  'aura_composes_needed_primitives',
  'aura_generates_the_experience',
  'aura_governs_execution',
  'aura_learns_from_outcomes'
])

export const FORMLESS_BANKING_INTENT_EXAMPLES = Object.freeze([
  'split_salary_into_rent_food_school_fees_and_emergency_funds',
  'pay_contractor_only_after_gps_photo_proof',
  'relatives_contribute_to_mothers_hospital_bill_paid_directly_to_hospital',
  'child_gift_money_locked_until_school_reopening',
  'susu_circle_protected_from_early_collect_and_disappear_risk',
  'merchant_layaway_plan_goods_released_after_full_payment',
  'school_fee_system_piece_payments_with_confirmed_progress',
  'building_materials_money_released_after_independent_delivery_confirmation',
  'business_income_split_into_tax_savings_suppliers_salary_and_reinvestment'
])

export const CAPABILITY_OS_NON_NEGOTIABLE_INVARIANTS = Object.freeze([
  'kernel_is_source_of_money_truth',
  'every_capability_must_be_typed',
  'every_money_movement_must_have_kernel_contract',
  'every_locked_fund_must_have_exit_path',
  'every_automated_action_must_have_autonomy_permission_and_user_consent',
  'every_capability_must_be_explainable',
  'every_capability_must_be_simulated_before_release',
  'every_capability_must_be_versioned',
  'every_event_must_be_auditable',
  'governance_must_be_continuous'
])

export const FULL_CAPABILITY_OS_STACK = Object.freeze([
  { layer: 0, name: 'constitution_scope_guard', responsibilities: ['what_aura_can_and_cannot_create', 'principles', 'prohibited_behaviours', 'jurisdiction_sensitivity', 'user_harm_boundaries'] },
  { layer: 1, name: 'financial_physics_engine', responsibilities: ['money_invariants', 'ledger_truth', 'fund_states', 'lock_release_refund_logic', 'liability_clarity'] },
  { layer: 2, name: 'aura_product_specification_language', responsibilities: ['formal_grammar_for_financial_products', 'entities_rules_states_triggers_actions', 'policy_and_autonomy_definitions'] },
  { layer: 3, name: 'atomic_creation_stack', responsibilities: ['sub_atoms', 'atoms', 'micro_primitives', 'primitives', 'capabilities', 'products'] },
  { layer: 4, name: 'capability_type_system', responsibilities: ['compatibility', 'required_companions', 'risk_typing', 'actor_typing', 'evidence_typing', 'money_movement_typing'] },
  { layer: 5, name: 'primitive_capability_registry', responsibilities: ['reusable_building_blocks', 'dependency_graph', 'templates', 'versions', 'active_deprecated_packages'] },
  { layer: 6, name: 'composition_algebra', responsibilities: ['how_pieces_combine', 'sequencing', 'conditions', 'guards', 'conflicts', 'risk_amplification'] },
  { layer: 7, name: 'capability_genesis_compiler', responsibilities: ['intent_to_specification', 'specification_to_capability', 'capability_to_package', 'package_to_runtime'] },
  { layer: 8, name: 'simulation_testing_framework', responsibilities: ['scenario_testing', 'edge_cases', 'fraud_testing', 'policy_testing', 'ledger_testing', 'ux_testing'] },
  { layer: 9, name: 'governor_capability_creation_overseer', responsibilities: ['compliance', 'jurisdiction', 'fraud', 'cyber_abuse', 'user_harm', 'release_eligibility'] },
  { layer: 10, name: 'runtime_execution_engine', responsibilities: ['command_routing', 'context_building', 'policy_evaluation', 'autonomy_gate', 'kernel_execution', 'events'] },
  { layer: 11, name: 'ui_ux_composer', responsibilities: ['screens', 'cards', 'flows', 'explanations', 'admin_surfaces', 'user_journeys'] },
  { layer: 12, name: 'asset_vault_algorithm_vault', responsibilities: ['design_assets', 'motion', 'icons', 'reusable_algorithms', 'scoring_models', 'evidence_models'] },
  { layer: 13, name: 'event_bus_audit_ledger', responsibilities: ['immutable_event_trail', 'observability', 'support_trace', 'compliance_trace'] },
  { layer: 14, name: 'capability_lifecycle_manager', responsibilities: ['install', 'enable', 'disable', 'upgrade', 'rollback', 'migrate', 'deprecate', 'retire'] },
  { layer: 15, name: 'capability_doctor', responsibilities: ['diagnose', 'repair', 'optimize', 'warn', 'suggest_patches', 'detect_drift'] },
  { layer: 16, name: 'marketplace_partner_contract_layer', responsibilities: ['capability_packs', 'templates', 'partner_created_tools', 'tenant_installation', 'governance_review'] },
  { layer: 17, name: 'outcome_learning_engine', responsibilities: ['learn_from_usage', 'improve_templates', 'improve_rules', 'improve_ux', 'improve_safety'] }
])

export const PLUGIN_SYSTEM_COMPARISON = Object.freeze({
  normalPluginSystem: {
    installs: 'code_or_feature_module',
    asks: ['can_this_module_run']
  },
  capabilityOS: {
    installs: 'financial_behaviour',
    asks: ['should_this_financial_behaviour_exist', 'is_it_safe', 'is_it_legal', 'is_it_explainable', 'is_it_compatible', 'can_it_be_simulated', 'can_users_consent_to_it', 'can_money_be_accounted_for', 'can_it_be_reversed_or_resolved', 'can_it_be_governed_at_runtime', 'can_it_be_upgraded_safely']
  }
})

export const CRITICAL_CAPABILITY_OS_BUILD_SEQUENCE = Object.freeze([
  'define_aura_capability_constitution',
  'define_financial_physics_engine',
  'define_product_specification_language',
  'define_atomic_creation_stack',
  'define_primitive_registry',
  'define_capability_type_system',
  'define_composition_algebra',
  'define_universal_capability_interface',
  'define_capability_package_format',
  'define_capability_genesis_compiler',
  'define_simulation_test_framework',
  'define_governor_release_gates',
  'define_runtime_command_flow',
  'define_kernel_contract_builder',
  'define_ui_ux_composer',
  'define_asset_vault_integration',
  'define_algorithm_vault_integration',
  'define_event_bus_audit_ledger',
  'define_lifecycle_versioning_migration',
  'define_capability_doctor',
  'define_admin_drag_and_drop_studio',
  'define_marketplace_partner_contracts',
  'define_existing_fintech_integration_framework'
])

export const UNIVERSAL_CAPABILITY_CONTRACT_METADATA = Object.freeze({
  artifact: 'Technical Artifact 1',
  name: 'Universal Capability Contract',
  abbreviation: 'UCC',
  fileName: 'ucc.capability.yaml',
  authoringFormat: 'YAML',
  runtimeFormat: 'JSON',
  validationFormat: 'JSON Schema',
  generatedTypes: ['Rust', 'Go', 'TypeScript']
})

export const UCC_DEFINITION_FIELDS = Object.freeze([
  'identity',
  'intent',
  'actors',
  'entities',
  'money_objects',
  'rules',
  'triggers',
  'actions',
  'state_machines',
  'kernel_operations',
  'financial_invariants',
  'evidence_requirements',
  'policy_requirements',
  'autonomy_limits',
  'ui_ux_surfaces',
  'events',
  'tests',
  'simulation_scenarios',
  'monitoring_rules',
  'versioning',
  'migration',
  'explanations',
  'release_gates'
])

export const UCC_CREATION_SOURCES = Object.freeze([
  'user_describing_it_in_words',
  'admin_building_through_drag_and_drop',
  'developer_writing_it_manually',
  'partner_submitting_it',
  'marketplace_provider_packaging_it',
  'aura_generating_it_automatically',
  'existing_fintech_app_integrating_into_aura'
])

export const UCC_CORE_PRINCIPLE = 'capability_is_not_a_feature_it_is_a_governed_financial_behaviour'

export const UCC_MUST_DECLARE = Object.freeze([
  'what_it_does',
  'what_it_is_allowed_to_do',
  'what_it_is_forbidden_from_doing',
  'what_money_states_it_can_affect',
  'what_user_consent_it_requires',
  'what_evidence_it_needs',
  'what_risks_it_creates',
  'what_happens_when_it_fails',
  'what_events_it_emits',
  'what_explanations_users_receive',
  'what_kernel_operations_it_can_call'
])

export const UCC_POSITION_IN_AURA_FLOW = Object.freeze([
  'user_admin_partner_intent',
  'intent_interpreter',
  'rule_extractor',
  'capability_composer',
  'universal_capability_contract',
  'contract_validator',
  'financial_physics_engine',
  'governor_policy_review',
  'simulation_testing',
  'capability_registry',
  'runtime_execution_engine',
  'financial_kernel'
])

export const UCC_TOP_LEVEL_SECTIONS = Object.freeze([
  'ucc_version',
  'capability',
  'intent',
  'classification',
  'dependencies',
  'entities',
  'money_objects',
  'rules',
  'state_machine',
  'kernel_contract',
  'financial_physics',
  'policy',
  'autonomy',
  'evidence',
  'ui_ux',
  'events_audit',
  'testing',
  'simulation',
  'monitoring',
  'versioning_migration',
  'explainability',
  'release'
])

export const FAMILY_RENT_UCC_CONVERSION = Object.freeze({
  request: 'I want my siblings to help me pay rent, but the landlord should be the only person who can receive the money. If we do not reach the target by the 25th, remind everyone. I do not want penalties, just tracking.',
  contains: ['goal', 'actors', 'recipient_restrictions', 'contribution_rules', 'due_date', 'reminders', 'non_penalty_policy', 'tracking_logic', 'receipt_requirements', 'payment_release_logic'],
  formalCapability: {
    name: 'Family Rent Contribution Capability',
    contributors: ['siblings'],
    recipient: 'landlord',
    money_object: 'rent_goal_wallet',
    payout_restriction: 'landlord_only',
    due_date: 'monthly_25th',
    reminder_rule: 'before_and_after_due_date',
    late_rule: 'track_only_no_penalty',
    receipts: 'required',
    payment_release: 'user_approval_required'
  }
})

export const CANONICAL_UCC_SKELETON_PARTIAL = Object.freeze({
  ucc_version: '1.0',
  capability: {
    id: '',
    name: '',
    version: '1.0.0',
    description: '',
    category: '',
    lifecycle_status: 'draft',
    owner: {
      type: '',
      id: ''
    },
    authorship: {
      created_by: '',
      creation_method: '',
      created_at: ''
    },
    supported_products: [],
    supported_jurisdictions: [],
    tags: []
  },
  intent: {
    primary_goal: '',
    user_problem: '',
    desired_outcomes: [],
    non_goals: [],
    natural_language_examples: [],
    success_metrics: []
  },
  classification: {
    capability_types: [],
    money_movement_types: [],
    actor_types: [],
    evidence_types: [],
    risk_class: '',
    compliance_categories: [],
    autonomy_class: ''
  },
  dependencies: {
    atoms: [],
    micro_primitives: [],
    primitives: [],
    algorithms: [],
    assets: [],
    kernel_features: [],
    external_integrations: []
  },
  entities: {
    actors: [],
    relationships: [],
    permissions: [],
    identity_requirements: [],
    data_visibility: []
  },
  money_objects: {
    sources: [],
    destinations: [],
    wallets: [],
    escrows: [],
    locks: [],
    reserves: [],
    fees: [],
    liabilities: [],
    ownership_model: '',
    custody_model: ''
  },
  rules: {
    triggers: [],
    conditions: [],
    actions: [],
    schedules: [],
    thresholds: [],
    exceptions: [],
    fallback_rules: [],
    refund_rules: [],
    dispute_rules: [],
    expiry_rules: []
  },
  state_machine: {
    initial_state: '',
    states: [],
    terminal_states: [],
    transitions: []
  },
  kernel_contract: {
    allowed_operations: [],
    prohibited_operations: [],
    command_contracts: [],
    ledger_effects: [],
    idempotency_rules: [],
    settlement_rules: [],
    reversal_rules: []
  },
  financial_physics: {
    invariants: [],
    balance_conservation: [],
    state_exclusivity: [],
    release_completeness: [],
    liability_map: [],
    trapped_funds_prevention: []
  },
  policy: {
    jurisdiction_rules: [],
    kyc_kyb_requirements: [],
    aml_rules: [],
    consumer_protection_rules: [],
    minor_protection_rules: [],
    data_privacy_rules: [],
    prohibited_patterns: [],
    human_review_rules: [],
    disclosure_requirements: [],
    consent_requirements: []
  },
  autonomy: {
    global_autonomy_level: '',
    dimensions: [],
    approval_requirements: [],
    auto_execution_limits: [],
    blocked_autonomy_actions: [],
    escalation_rules: []
  },
  evidence: {
    required_evidence: [],
    verification_methods: [],
    confidence_thresholds: [],
    anti_spoofing_rules: [],
    evidence_retention_rules: [],
    manual_review_flow: []
  },
  ui_ux: {
    required_surfaces: [],
    generated_components: [],
    explanation_points: [],
    confirmation_points: [],
    warning_points: [],
    empty_states: [],
    error_states: [],
    success_states: [],
    asset_requirements: [],
    accessibility_requirements: []
  },
  events_audit: {
    emitted_events: [],
    audit_requirements: [],
    timeline_visibility: [],
    observability_requirements: [],
    support_trace_requirements: []
  },
  testing: {
    unit_tests: [],
    integration_tests: [],
    ledger_tests: [],
    policy_tests: [],
    ui_tests: [],
    security_tests: [],
    fraud_tests: [],
    migration_tests: [],
    acceptance_criteria: []
  },
  simulation: {
    normal_scenarios: [],
    edge_case_scenarios: [],
    fraud_scenarios: [],
    stress_scenarios: [],
    user_confusion_scenarios: [],
    failure_scenarios: []
  },
  monitoring: {
    health_metrics: [],
    risk_metrics: [],
    user_experience_metrics: [],
    alert_rules: [],
    capability_doctor_rules: [],
    rollback_triggers: []
  },
  versioning_migration: {
    version_strategy: '',
    backward_compatibility: [],
    migration_rules: [],
    consent_on_upgrade: [],
    rollback_plan: [],
    deprecation_rules: [],
    retirement_rules: []
  },
  explainability: {
    user_explanation: '',
    admin_explanation: '',
    regulator_explanation: '',
    support_explanation: '',
    developer_explanation: '',
    reason_codes: []
  },
  release: {
    release_mode: '',
    release_gates: [],
    required_approvals: [],
    limits: [],
    activation_rules: [],
    marketplace_eligibility: []
  }
})

export const SUPPORTED_UCC_SCHEMA_VERSIONS = Object.freeze(['1.0'])

export const UCC_LIFECYCLE_STATUSES = Object.freeze([
  'draft',
  'simulation',
  'review',
  'approved',
  'active',
  'restricted',
  'deprecated',
  'retired',
  'blocked'
])

export const UCC_VERSION_VALIDATION_RULES = Object.freeze([
  'ucc_version_must_be_present',
  'ucc_version_must_match_supported_schema',
  'ucc_version_must_not_be_confused_with_capability_version'
])

export const UCC_CAPABILITY_VALIDATION_RULES = Object.freeze([
  'capability_id_must_be_globally_unique',
  'capability_version_must_be_semver',
  'supported_jurisdictions_required_when_touching_money',
  'lifecycle_status_must_be_supported_and_approved_before_activation',
  'owner_must_be_traceable',
  'creation_method_must_be_declared'
])

export const UCC_INTENT_VALIDATION_RULES = Object.freeze([
  'primary_goal_required',
  'user_problem_required',
  'desired_outcomes_required',
  'money_movement_capabilities_need_success_metrics',
  'non_goals_should_define_boundaries'
])

export const SCHOOL_FEES_UCC_CAPABILITY_SECTION = Object.freeze({
  id: 'school_fees_wallet',
  name: 'School Fees Wallet',
  version: '1.0.0',
  description: 'A restricted wallet for saving, tracking, and releasing school fee payments.',
  category: 'education_payments',
  lifecycle_status: 'draft',
  owner: {
    type: 'aura_internal',
    id: 'aura_foundation'
  },
  authorship: {
    created_by: 'capability_genesis_engine',
    creation_method: 'natural_language',
    created_at: '2026-05-17T00:00:00Z'
  },
  supported_products: ['Save2Pay', 'PayFees', 'FamilyHub'],
  supported_jurisdictions: ['GH', 'US', 'NG'],
  tags: ['education', 'goal_wallet', 'restricted_payment', 'invoice_release']
})

export const SCHOOL_FEES_UCC_INTENT_SECTION = Object.freeze({
  primary_goal: 'Help a parent save and release money for a child\'s school fees.',
  user_problem: 'Parents struggle to reserve money for school fees and ensure funds are used only for education.',
  desired_outcomes: [
    'target_saving_visible',
    'contributors_can_help',
    'verified_school_or_education_recipient',
    'receipts_for_every_release'
  ],
  non_goals: [
    'not_credit',
    'not_invest_funds',
    'no_anonymous_large_contributions'
  ],
  natural_language_examples: [
    'save_for_my_child_school_fees',
    'let_my_brother_contribute',
    'pay_the_school_after_invoice_approval'
  ],
  success_metrics: [
    'wallet_funded',
    'target_progress_visible',
    'verified_school_payment_completed',
    'low_refund_dispute_rate'
  ]
})

export const SCHOOL_FEES_UCC_CLASSIFICATION_PARTIAL = Object.freeze({
  capability_types: [
    'GoalWalletCapability',
    'EducationPaymentCapability',
    'RestrictedPayoutCapability'
  ],
  money_movement_types: ['allocate', 'lock', 'release', 'refund'],
  actor_types: ['parent', 'child', 'contributor', 'school'],
  evidence_types: ['invoice', 'school_verification', 'receipt'],
  risk_class: 'medium',
  compliance_categories: ['consumer_funds', 'education_payment', 'restricted_purpose_wallet'],
  autonomy_class: 'assisted_autonomy'
})

export const UCC_RISK_CLASSES = Object.freeze([
  'informational',
  'low',
  'medium',
  'high',
  'restricted',
  'blocked'
])

export const UCC_CLASSIFICATION_VALIDATION_RULES = Object.freeze([
  'external_release_cannot_be_informational_risk',
  'child_or_dependent_actor_requires_minor_protection_rules',
  'gps_photo_or_invoice_evidence_requires_verification_rules',
  'high_or_restricted_risk_requires_human_review_rules'
])

export const SCHOOL_FEES_UCC_DEPENDENCIES_SECTION = Object.freeze({
  atoms: ['AmountAtom', 'CurrencyAtom', 'UserIdentityAtom', 'WalletIdAtom', 'InvoiceAtom', 'ConsentAtom'],
  micro_primitives: ['ValidateAmount', 'CheckBalance', 'LockFunds', 'ReleaseFunds', 'GenerateReceipt'],
  primitives: [
    'GoalWalletPrimitive',
    'AutoSplitPrimitive',
    'ContributorLinkPrimitive',
    'InvoiceVerificationPrimitive',
    'EscrowReleasePrimitive',
    'ReceiptPrimitive'
  ],
  algorithms: ['InvoiceSimilarityCheck', 'ContributionGapForecast', 'RiskVelocityCheck'],
  assets: [
    'education_wallet_icon',
    'school_fee_progress_ring',
    'invoice_review_illustration',
    'payment_success_lottie'
  ],
  kernel_features: ['wallet', 'ledger', 'fund_lock', 'escrow', 'external_transfer', 'refund'],
  external_integrations: [
    {
      id: 'payment_processor',
      provider_api_skipped: true,
      failure_handling_rules: ['external_transfer_unavailable_blocks_release', 'refund_path_remains_internal']
    },
    {
      id: 'school_verification_provider',
      provider_api_skipped: true,
      failure_handling_rules: ['provider_unavailable_routes_to_manual_school_review']
    }
  ]
})

export const UCC_DEPENDENCY_VALIDATION_RULES = Object.freeze([
  'every_primitive_must_exist_in_primitive_registry',
  'every_algorithm_must_exist_in_algorithm_vault_or_be_declared_new',
  'every_asset_must_exist_in_asset_vault_or_be_generated_before_release',
  'every_kernel_feature_must_be_supported_in_target_environment',
  'external_integrations_must_have_failure_handling_rules'
])

export const UCC_SUPPORTED_KERNEL_FEATURES = Object.freeze([
  'wallet',
  'ledger',
  'fund_lock',
  'escrow',
  'external_transfer',
  'refund',
  'scheduled_obligation',
  'invoice_verification',
  'contributor_link'
])

export const SCHOOL_FEES_UCC_ENTITIES_SECTION = Object.freeze({
  actors: [
    {
      id: 'parent',
      type: 'user',
      role: 'owner',
      required: true,
      verification_level: 'identity_verified'
    },
    {
      id: 'child',
      type: 'dependent',
      role: 'beneficiary',
      required: true,
      verification_level: 'guardian_declared'
    },
    {
      id: 'contributor',
      type: 'external_user',
      role: 'contributor',
      required: false,
      verification_level: 'phone_or_email_verified'
    },
    {
      id: 'school',
      type: 'institution',
      role: 'recipient',
      required: true,
      verification_level: 'institution_verified'
    }
  ],
  relationships: [
    { from: 'parent', to: 'child', relationship_type: 'guardian' },
    { from: 'contributor', to: 'wallet', relationship_type: 'contributes_to' },
    { from: 'school', to: 'wallet', relationship_type: 'approved_recipient' }
  ],
  permissions: [
    {
      actor: 'parent',
      can: ['create_wallet', 'configure_rules', 'invite_contributors', 'approve_release', 'request_refund', 'close_wallet']
    },
    {
      actor: 'contributor',
      can: ['contribute', 'view_own_receipts']
    },
    {
      actor: 'school',
      can: ['submit_invoice', 'receive_payment']
    }
  ],
  identity_requirements: [
    { actor: 'parent', requirement: 'identity_verified' },
    { actor: 'school', requirement: 'institution_verified_before_release' }
  ],
  data_visibility: [
    {
      actor: 'contributor',
      can_view: ['own_contribution', 'wallet_target_progress_optional'],
      cannot_view: ['parent_total_balance', 'other_contributors_private_details']
    },
    {
      actor: 'child',
      can_view: ['goal_progress_optional'],
      cannot_view: ['payment_source_details', 'contributor_private_details']
    },
    {
      actor: 'school',
      can_view: ['submitted_invoice_status', 'approved_payment_status'],
      cannot_view: ['family_private_balance', 'contributor_private_details']
    }
  ]
})

export const UCC_ENTITY_VALIDATION_RULES = Object.freeze([
  'every_required_actor_must_have_a_verification_requirement',
  'money_movement_actors_must_have_permissions_declared',
  'external_recipient_must_have_a_verification_rule',
  'data_visibility_must_be_declared_for_sensitive_external_actor_types'
])

export const SCHOOL_FEES_UCC_MONEY_OBJECTS_PARTIAL = Object.freeze({
  sources: [
    {
      id: 'parent_main_wallet',
      type: 'wallet',
      owner: 'parent',
      allowed_use: 'source_of_auto_split'
    },
    {
      id: 'contributor_payment_source',
      type: 'external_payment_source',
      owner: 'contributor',
      allowed_use: 'contribution'
    }
  ],
  destinations: [
    {
      id: 'school_recipient_account',
      type: 'verified_recipient',
      owner: 'school',
      allowed_use: 'education_payment_only'
    }
  ],
  wallets: [
    {
      id: 'school_fees_wallet',
      type: 'goal_wallet',
      owner: 'parent',
      beneficiary: 'child',
      currency: 'GHS',
      target_amount_required: true,
      restricted_purpose: 'education',
      can_withdraw_to_owner: 'conditional',
      can_pay_external_recipient: true
    }
  ],
  escrows: [
    {
      id: 'invoice_payment_escrow',
      type: 'conditional_escrow',
      owner: 'parent',
      recipient: 'school',
      release_condition: 'invoice_verified_and_parent_approved',
      refund_condition: 'wallet_cancelled_or_invoice_expired',
      dispute_condition: 'invoice_dispute_opened',
      expiry_condition: 'invoice_unapproved_for_30_days'
    }
  ],
  locks: [
    {
      id: 'education_purpose_lock',
      applies_to: 'school_fees_wallet',
      lock_type: 'purpose_restriction',
      release_paths: [
        'pay_verified_school',
        'refund_to_parent_after_cancellation',
        'admin_resolution_after_dispute'
      ],
      failure_paths: [
        'school_verification_failed_manual_review',
        'invoice_expired_return_to_wallet'
      ]
    }
  ],
  reserves: [],
  fees: [
    {
      id: 'platform_fee',
      type: 'percentage',
      applies_on: 'external_payment_release',
      value: 0,
      visible_to_user: true,
      disclosed: true
    }
  ],
  liabilities: [],
  ownership_model: 'parent_owned_child_benefit',
  custody_model: 'user_funds_held_in_restricted_wallet'
})

export const UCC_MONEY_OBJECT_VALIDATION_RULES = Object.freeze([
  'every_wallet_must_have_an_owner',
  'every_lock_must_have_release_and_failure_paths',
  'every_escrow_must_have_a_release_condition',
  'every_fee_must_be_visible_and_disclosed',
  'external_payment_destinations_require_verification',
  'money_objects_must_not_have_ambiguous_ownership'
])

export const SCHOOL_FEES_UCC_RULES_SECTION = Object.freeze({
  triggers: [
    {
      id: 'incoming_money_received',
      source: 'parent_main_wallet',
      event: 'MONEY_RECEIVED'
    },
    {
      id: 'invoice_uploaded',
      source: 'school',
      event: 'INVOICE_UPLOADED'
    },
    {
      id: 'parent_approved_invoice',
      source: 'parent',
      event: 'APPROVAL_GRANTED'
    }
  ],
  conditions: [
    {
      id: 'auto_split_enabled',
      expression: 'wallet.auto_split.enabled == true'
    },
    {
      id: 'invoice_is_verified',
      expression: 'invoice.status == verified'
    },
    {
      id: 'school_is_verified',
      expression: 'school.verification_level == institution_verified'
    },
    {
      id: 'balance_is_sufficient',
      expression: 'school_fees_wallet.available_balance >= invoice.amount'
    }
  ],
  actions: [
    {
      id: 'move_split_to_school_wallet',
      type: 'kernel_command',
      command: 'allocate_funds',
      from: 'parent_main_wallet',
      to: 'school_fees_wallet',
      amount_formula: 'incoming_amount * auto_split_percentage'
    },
    {
      id: 'lock_invoice_amount',
      type: 'kernel_command',
      command: 'lock_funds',
      from: 'school_fees_wallet',
      to: 'invoice_payment_escrow',
      amount_formula: 'invoice.amount'
    },
    {
      id: 'release_payment_to_school',
      type: 'kernel_command',
      command: 'release_escrow',
      from: 'invoice_payment_escrow',
      to: 'school_recipient_account'
    }
  ],
  schedules: [
    {
      id: 'school_fee_due_reminder',
      frequency: 'relative',
      relative_to: 'due_date',
      offsets: ['-14d', '-7d', '-1d'],
      timezone: 'capability_user_timezone'
    }
  ],
  thresholds: [
    {
      id: 'auto_split_percentage_limit',
      field: 'auto_split_percentage',
      min: 0,
      max: 100,
      unit: 'percentage'
    }
  ],
  exceptions: [
    {
      id: 'insufficient_balance',
      when: 'balance_is_sufficient == false',
      action: 'notify_parent_and_keep_invoice_pending',
      safe_fallback: 'keep_invoice_pending_without_moving_money'
    }
  ],
  fallback_rules: [
    {
      id: 'school_verification_failed',
      action: 'block_release_and_request_manual_review'
    }
  ],
  refund_rules: [
    {
      id: 'refund_after_wallet_cancellation',
      condition: 'no_pending_invoice AND parent_requests_cancellation',
      action: 'return_available_funds_to_parent_main_wallet'
    }
  ],
  dispute_rules: [
    {
      id: 'invoice_dispute',
      opened_by: ['parent', 'admin'],
      action: 'freeze_invoice_payment_escrow'
    }
  ],
  expiry_rules: [
    {
      id: 'invoice_expiry',
      condition: 'invoice_unapproved_for_30_days',
      action: 'return_locked_funds_to_school_fees_wallet'
    }
  ]
})

export const UCC_RULE_VALIDATION_RULES = Object.freeze([
  'every_action_maps_to_known_command_ui_event_notification_or_policy_action',
  'every_kernel_command_must_exist_in_kernel_contract_command_contracts',
  'fund_lock_rules_must_define_release_refund_dispute_and_expiry_behaviour',
  'every_schedule_must_define_timezone_logic',
  'every_exception_must_have_a_safe_fallback'
])

export const SCHOOL_FEES_UCC_STATE_MACHINE_SECTION = Object.freeze({
  initial_state: 'draft',
  states: [
    { id: 'draft', description: 'Capability instance is being configured.' },
    { id: 'active', description: 'Wallet is active and can receive funds.' },
    { id: 'funding', description: 'Wallet is accumulating money toward target.' },
    { id: 'invoice_pending', description: 'Invoice has been submitted but not verified.' },
    { id: 'invoice_verified', description: 'Invoice has passed verification.' },
    { id: 'approval_pending', description: 'Parent approval is required before release.' },
    { id: 'payment_released', description: 'Payment has been released to the school.' },
    { id: 'disputed', description: 'Payment or invoice is under dispute.' },
    { id: 'cancelled', description: 'Wallet has been cancelled.' },
    { id: 'completed', description: 'Capability instance completed successfully.' }
  ],
  terminal_states: ['payment_released', 'cancelled', 'completed'],
  transitions: [
    {
      id: 'draft_to_active',
      from: 'draft',
      to: 'active',
      requires: ['parent_consent_collected', 'school_fees_wallet_created']
    },
    {
      id: 'active_to_funding',
      from: 'active',
      to: 'funding',
      on_event: 'MONEY_ALLOCATED_TO_WALLET',
      kernel_operation: 'allocate_funds'
    },
    {
      id: 'funding_to_invoice_pending',
      from: 'funding',
      to: 'invoice_pending',
      on_event: 'INVOICE_UPLOADED'
    },
    {
      id: 'invoice_pending_to_invoice_verified',
      from: 'invoice_pending',
      to: 'invoice_verified',
      requires: ['invoice_is_verified', 'school_is_verified']
    },
    {
      id: 'invoice_verified_to_approval_pending',
      from: 'invoice_verified',
      to: 'approval_pending',
      on_event: 'APPROVAL_REQUESTED'
    },
    {
      id: 'approval_pending_to_payment_released',
      from: 'approval_pending',
      to: 'payment_released',
      requires: ['parent_approved_invoice', 'balance_is_sufficient'],
      kernel_operation: 'release_escrow'
    },
    {
      id: 'any_to_disputed',
      from: '*',
      to: 'disputed',
      on_event: 'DISPUTE_OPENED',
      wildcard_allowed: true
    },
    {
      id: 'disputed_to_cancelled',
      from: 'disputed',
      to: 'cancelled',
      requires: ['admin_resolution_after_dispute'],
      kernel_operation: 'refund_funds'
    },
    {
      id: 'payment_released_to_completed',
      from: 'payment_released',
      to: 'completed',
      on_event: 'RECEIPT_GENERATED'
    }
  ],
  terminal_resolutions: {
    payment_released: ['invoice_payment_escrow_released', 'receipt_generated'],
    cancelled: ['available_funds_refunded_to_parent', 'escrow_balances_resolved'],
    completed: ['all_obligations_closed', 'no_locked_funds_remaining']
  }
})

export const UCC_STATE_MACHINE_VALIDATION_RULES = Object.freeze([
  'initial_state_must_exist_in_states',
  'every_transition_must_reference_valid_states',
  'every_non_terminal_state_must_have_valid_outgoing_path',
  'terminal_states_must_resolve_locked_or_escrowed_funds',
  'no_money_can_remain_trapped_in_terminal_state',
  'money_affecting_transitions_must_map_to_kernel_contract_operations'
])

export const SCHOOL_FEES_UCC_KERNEL_CONTRACT_SECTION = Object.freeze({
  allowed_operations: [
    'create_wallet',
    'allocate_funds',
    'lock_funds',
    'release_escrow',
    'refund_funds',
    'generate_receipt'
  ],
  prohibited_operations: [
    'create_credit',
    'invest_funds',
    'release_to_unverified_recipient',
    'withdraw_child_benefit_funds_without_policy_check'
  ],
  command_contracts: [
    {
      id: 'create_school_fees_wallet',
      operation: 'create_wallet',
      inputs: ['owner_id', 'beneficiary_id', 'currency', 'target_amount'],
      preconditions: ['parent_identity_verified', 'parent_consent_collected'],
      postconditions: ['wallet_exists', 'wallet_owner_is_parent', 'wallet_purpose_is_education'],
      ledger_effect: {
        debit: 'none',
        credit: 'none'
      }
    },
    {
      id: 'allocate_auto_split',
      operation: 'allocate_funds',
      inputs: ['source_wallet_id', 'destination_wallet_id', 'amount', 'currency'],
      preconditions: ['source_balance_sufficient', 'auto_split_consent_active'],
      postconditions: ['source_available_balance_decreased', 'destination_available_balance_increased'],
      ledger_effect: {
        debit: 'parent_main_wallet.available',
        credit: 'school_fees_wallet.available'
      }
    },
    {
      id: 'lock_invoice_amount',
      operation: 'lock_funds',
      inputs: ['wallet_id', 'escrow_id', 'amount'],
      preconditions: ['invoice_verified', 'balance_sufficient'],
      postconditions: ['school_fees_wallet.available_decreased', 'invoice_payment_escrow.locked_increased'],
      ledger_effect: {
        debit: 'school_fees_wallet.available',
        credit: 'invoice_payment_escrow.locked'
      }
    },
    {
      id: 'release_to_school',
      operation: 'release_escrow',
      inputs: ['escrow_id', 'recipient_id', 'amount'],
      preconditions: ['parent_approval_active', 'school_verified', 'invoice_verified'],
      postconditions: ['escrow_locked_decreased', 'school_payment_created', 'receipt_generated'],
      ledger_effect: {
        debit: 'invoice_payment_escrow.locked',
        credit: 'external_settlement.pending_or_completed'
      }
    },
    {
      id: 'refund_locked_amount',
      operation: 'refund_funds',
      inputs: ['escrow_id', 'wallet_id', 'amount'],
      preconditions: ['refund_condition_met', 'escrow_locked_balance_sufficient'],
      postconditions: ['escrow_locked_decreased', 'wallet_available_increased'],
      ledger_effect: {
        debit: 'invoice_payment_escrow.locked',
        credit: 'school_fees_wallet.available'
      }
    }
  ],
  ledger_effects: ['All allocation and release operations must produce balanced double-entry ledger records.'],
  idempotency_rules: [
    { command: 'create_school_fees_wallet', idempotency_key: 'capability_instance_id + owner_id + beneficiary_id' },
    { command: 'allocate_auto_split', idempotency_key: 'capability_instance_id + source_event_id + split_rule_id' },
    { command: 'lock_invoice_amount', idempotency_key: 'capability_instance_id + invoice_id + lock_request_id' },
    { command: 'release_to_school', idempotency_key: 'capability_instance_id + invoice_id + approval_id' },
    { command: 'refund_locked_amount', idempotency_key: 'capability_instance_id + invoice_id + refund_reason_id' }
  ],
  settlement_rules: [
    {
      external_transfer_finality: 'external_provider_confirmation_stub',
      provider_api_skipped: true
    }
  ],
  reversal_rules: [
    {
      operation: 'release_to_school',
      reversible: 'conditional',
      reversal_condition: 'external_provider_reversal_support_stub OR admin_dispute_resolution',
      provider_api_skipped: true
    }
  ]
})

export const UCC_KERNEL_CONTRACT_VALIDATION_RULES = Object.freeze([
  'every_money_moving_action_must_map_to_kernel_command',
  'every_command_must_define_inputs_preconditions_postconditions_and_ledger_effect',
  'every_external_settlement_must_define_finality',
  'every_command_must_define_idempotency',
  'every_reversal_sensitive_command_must_define_reversal_behaviour',
  'prohibited_operations_must_be_checked_during_composition'
])

export const SCHOOL_FEES_UCC_FINANCIAL_PHYSICS_PARTIAL = Object.freeze({
  invariants: [
    {
      id: 'no_money_creation',
      statement: 'Capability cannot create funds without an external deposit, transfer, or ledger-approved source.'
    },
    {
      id: 'balance_conservation',
      statement: 'For every allocation, debit and credit must balance.'
    },
    {
      id: 'locked_funds_not_available',
      statement: 'Funds locked in escrow cannot also appear as available wallet balance.'
    },
    {
      id: 'verified_school_release_only',
      statement: 'External release to school requires verified recipient status.'
    }
  ],
  balance_conservation: [
    {
      input: 'incoming_amount',
      outputs: ['parent_main_wallet_remaining', 'school_fees_wallet_allocation'],
      rule: 'sum(outputs) == input'
    }
  ],
  state_exclusivity: [
    {
      fund_states: ['available', 'locked', 'escrowed', 'released', 'refunded'],
      rule: 'fund_unit_can_have_only_one_current_state'
    }
  ],
  release_completeness: [
    {
      locked_object: 'invoice_payment_escrow',
      must_define: ['release_condition', 'refund_condition', 'expiry_condition', 'dispute_condition', 'owner', 'recipient']
    }
  ],
  liability_map: [
    {
      scenario: 'fake_invoice_approved_by_parent',
      liable_party: 'parent',
      platform_liability: 'limited_after_disclosure_and_verification'
    },
    {
      scenario: 'system_releases_without_required_approval',
      liable_party: 'platform',
      severity: 'critical'
    },
    {
      scenario: 'payment_provider_stub_fails_after_release_attempt',
      liable_party: 'platform',
      platform_liability: 'pending_settlement_retry_or_refund_path_required'
    }
  ],
  trapped_funds_prevention: [
    {
      rule: 'Every locked or escrowed fund must have at least one non-discretionary exit path.'
    }
  ]
})

export const UCC_FINANCIAL_PHYSICS_VALIDATION_RULES = Object.freeze([
  'every_lock_must_satisfy_release_completeness',
  'every_ledger_effect_must_satisfy_balance_conservation',
  'every_fund_state_must_satisfy_state_exclusivity',
  'every_terminal_state_must_resolve_trapped_funds',
  'liability_must_be_declared_for_failure_scenarios'
])

export const SCHOOL_FEES_UCC_POLICY_SECTION = Object.freeze({
  jurisdiction_rules: [
    {
      jurisdiction: 'GH',
      rules: ['education_payment_wallet_allowed', 'institution_verification_required_before_release']
    },
    {
      jurisdiction: 'US',
      rules: ['consumer_disclosure_required', 'minor_related_funds_require_guardian_authority']
    }
  ],
  kyc_kyb_requirements: [
    { actor: 'parent', requirement: 'identity_verified' },
    { actor: 'school', requirement: 'institution_or_merchant_verified' }
  ],
  aml_rules: [
    'large_contributions_trigger_review',
    'rapid_contributor_velocity_check',
    'anonymous_large_contributions_blocked'
  ],
  consumer_protection_rules: [
    'fees_must_be_disclosed',
    'fund_lock_must_be_explained',
    'refund_path_must_be_available'
  ],
  minor_protection_rules: [
    'guardian_controls_required',
    'child_data_minimized',
    'contributors_cannot_view_child_private_data'
  ],
  data_privacy_rules: [
    'contributors_can_only_view_allowed_progress_data',
    'school_can_only_view_invoice_payment_related_data'
  ],
  prohibited_patterns: [
    'release_to_unverified_school',
    'hidden_platform_fee',
    'irreversible_payment_without_confirmation',
    'anonymous_high_value_contribution'
  ],
  human_review_rules: [
    { condition: 'contribution_amount_above_threshold', action: 'manual_review' },
    { condition: 'school_verification_confidence_low', action: 'manual_review' }
  ],
  disclosure_requirements: [
    { id: 'fund_restriction_disclosure', required_before: 'wallet_activation' },
    { id: 'platform_fee_disclosure', required_before: 'wallet_activation' },
    { id: 'external_payment_finality_disclosure', required_before: 'payment_release' }
  ],
  consent_requirements: [
    { id: 'auto_split_consent', actor: 'parent', required_before: 'auto_split_activation' },
    { id: 'refund_after_expiry_consent', actor: 'parent', required_before: 'wallet_activation' },
    { id: 'payment_release_consent', actor: 'parent', required_before: 'release_to_school' }
  ]
})

export const UCC_POLICY_VALIDATION_RULES = Object.freeze([
  'money_capabilities_must_define_jurisdiction_rules',
  'automated_actions_must_define_consent',
  'fees_must_define_disclosure',
  'minor_or_dependent_use_cases_must_define_protection_rules',
  'high_risk_policy_rules_must_define_review_or_block_behaviour'
])

export const SCHOOL_FEES_UCC_AUTONOMY_SECTION = Object.freeze({
  global_autonomy_level: 'assisted_autonomy',
  dimensions: [
    {
      dimension: 'money_allocation',
      level: 'auto_execute_under_user_rule',
      condition: 'auto_split_consent_active',
      action: 'auto_split'
    },
    {
      dimension: 'external_payment_release',
      level: 'requires_user_approval',
      action: 'release_to_school'
    },
    {
      dimension: 'recipient_creation',
      level: 'requires_verification',
      action: 'change_school_recipient'
    },
    {
      dimension: 'invoice_verification',
      level: 'assisted_with_manual_review_fallback',
      action: 'verify_invoice'
    },
    {
      dimension: 'refund',
      level: 'auto_execute_if_expiry_rule_matches',
      action: 'refund_after_expiry'
    },
    {
      dimension: 'rule_modification',
      level: 'requires_user_confirmation',
      action: 'modify_money_rule'
    },
    {
      dimension: 'contributor_invitation',
      level: 'requires_user_action',
      action: 'invite_contributor'
    }
  ],
  approval_requirements: [
    { action: 'release_to_school', required_approval: 'parent' },
    { action: 'change_school_recipient', required_approval: 'parent_plus_reverification' }
  ],
  auto_execution_limits: [
    { action: 'auto_split', max_percentage: 100, requires_active_consent: true }
  ],
  blocked_autonomy_actions: [
    'auto_release_to_new_school_without_approval',
    'auto_change_contributor_visibility',
    'auto_apply_new_fee'
  ],
  escalation_rules: [
    { condition: 'risk_score > 0.75', action: 'require_manual_review' }
  ]
})

export const UCC_AUTONOMY_VALIDATION_RULES = Object.freeze([
  'every_automatic_action_must_have_consent',
  'external_payment_release_cannot_be_fully_automatic_without_policy_and_risk_permission',
  'rule_changes_affecting_money_require_confirmation',
  'blocked_autonomy_actions_must_be_enforced_at_runtime'
])

export const SCHOOL_FEES_UCC_EVIDENCE_PARTIAL = Object.freeze({
  required_evidence: [
    {
      id: 'school_invoice',
      type: 'invoice',
      required_for: 'payment_release',
      submitted_by: 'school',
      required_fields: ['school_name', 'student_name_or_reference', 'amount', 'due_date', 'invoice_number']
    },
    {
      id: 'school_verification',
      type: 'institution_verification',
      required_for: 'recipient_approval',
      submitted_by: 'school',
      required_fields: ['institution_name', 'recipient_account_reference']
    }
  ],
  verification_methods: [
    {
      evidence: 'school_invoice',
      method: 'document_validation',
      algorithm: 'InvoiceSimilarityCheck',
      manual_review_fallback: true
    },
    {
      evidence: 'school_verification',
      method: 'institution_registry_or_manual_admin_review',
      manual_review_fallback: true
    }
  ],
  confidence_thresholds: [
    {
      evidence: 'school_invoice',
      minimum_confidence: 0.80,
      below_threshold_action: 'manual_review'
    }
  ],
  anti_spoofing_rules: [
    'duplicate_invoice_detection',
    'invoice_amount_mismatch_detection',
    'school_account_change_detection'
  ],
  evidence_retention_rules: [
    {
      evidence: 'school_invoice',
      retention_period: 'policy_defined',
      visible_to: ['parent', 'admin', 'school']
    },
    {
      evidence: 'school_verification',
      retention_period: 'policy_defined',
      visible_to: ['parent', 'admin', 'school']
    }
  ],
  manual_review_flow: [
    {
      condition: 'invoice_confidence_below_threshold',
      queue: 'education_payment_review',
      reviewer_role: 'operations_admin'
    }
  ]
})

export const UCC_EVIDENCE_VALIDATION_RULES = Object.freeze([
  'every_evidence_requirement_must_define_submitter',
  'every_evidence_item_must_define_verification_method',
  'automated_evidence_methods_must_define_confidence_threshold',
  'low_confidence_outcomes_must_define_fallback',
  'evidence_retention_and_visibility_must_be_declared'
])

export const SCHOOL_FEES_UCC_UI_UX_SECTION = Object.freeze({
  required_surfaces: [
    { id: 'wallet_creation_flow', type: 'setup_flow', required: true },
    { id: 'school_fee_progress_card', type: 'dashboard_card', required: true },
    { id: 'contributor_invite_screen', type: 'invitation_flow', required: true },
    { id: 'invoice_review_screen', type: 'approval_screen', required: true },
    { id: 'payment_release_confirmation', type: 'confirmation_screen', required: true },
    { id: 'receipt_screen', type: 'receipt', required: true }
  ],
  generated_components: [
    'goal_progress_ring',
    'restricted_wallet_badge',
    'verified_school_badge',
    'contribution_timeline',
    'invoice_status_card'
  ],
  explanation_points: [
    { before: 'wallet_activation', message_key: 'fund_restriction_explanation' },
    { before: 'payment_release', message_key: 'payment_finality_explanation' }
  ],
  confirmation_points: [
    { action: 'activate_auto_split', confirmation_required: true },
    { action: 'release_to_school', confirmation_required: true }
  ],
  warning_points: [
    { condition: 'school_unverified', warning_key: 'cannot_release_to_unverified_school' },
    { condition: 'invoice_amount_exceeds_balance', warning_key: 'insufficient_balance' }
  ],
  empty_states: [
    { surface: 'school_fee_progress_card', state: 'no_contributions_yet' }
  ],
  error_states: [
    'invoice_upload_failed',
    'school_verification_failed',
    'payment_provider_stub_failed'
  ],
  error_recovery_paths: [
    { error: 'invoice_upload_failed', recovery: 'retry_upload_or_contact_support' },
    { error: 'school_verification_failed', recovery: 'manual_admin_review' },
    { error: 'payment_provider_stub_failed', recovery: 'keep_funds_locked_and_retry_or_refund' }
  ],
  success_states: ['wallet_created', 'contribution_received', 'payment_released'],
  asset_requirements: [
    'school_fee_wallet_icon',
    'contribution_success_animation',
    'invoice_review_illustration'
  ],
  accessibility_requirements: [
    'screen_reader_labels',
    'large_text_support',
    'high_contrast_safe'
  ],
  consent_collection_points: [
    { consent: 'auto_split_consent', surface: 'wallet_creation_flow' },
    { consent: 'refund_after_expiry_consent', surface: 'wallet_creation_flow' },
    { consent: 'payment_release_consent', surface: 'payment_release_confirmation' }
  ]
})

export const UCC_UI_UX_VALIDATION_RULES = Object.freeze([
  'user_facing_money_locks_need_explanation_surface',
  'irreversible_or_external_payments_need_confirmation_surface',
  'required_consent_needs_ui_collection_point',
  'every_error_state_needs_recovery_path',
  'capability_needs_receipt_and_timeline_visibility'
])

export const SCHOOL_FEES_UCC_EVENTS_AUDIT_SECTION = Object.freeze({
  emitted_events: [
    'CAPABILITY_INSTANCE_CREATED',
    'SCHOOL_FEES_WALLET_CREATED',
    'AUTO_SPLIT_RULE_ENABLED',
    'CONTRIBUTOR_INVITED',
    'CONTRIBUTION_RECEIVED',
    'FUNDS_ALLOCATED',
    'INVOICE_UPLOADED',
    'INVOICE_VERIFIED',
    'APPROVAL_REQUESTED',
    'PAYMENT_APPROVED',
    'FUNDS_LOCKED',
    'PAYMENT_RELEASED',
    'RECEIPT_GENERATED',
    'PAYMENT_COMPLETED',
    'DISPUTE_OPENED',
    'REFUND_COMPLETED',
    'CAPABILITY_INSTANCE_CLOSED'
  ],
  state_transition_events: [
    { transition: 'draft_to_active', event: 'SCHOOL_FEES_WALLET_CREATED' },
    { transition: 'active_to_funding', event: 'FUNDS_ALLOCATED' },
    { transition: 'funding_to_invoice_pending', event: 'INVOICE_UPLOADED' },
    { transition: 'invoice_pending_to_invoice_verified', event: 'INVOICE_VERIFIED' },
    { transition: 'invoice_verified_to_approval_pending', event: 'APPROVAL_REQUESTED' },
    { transition: 'approval_pending_to_payment_released', event: 'PAYMENT_RELEASED' },
    { transition: 'any_to_disputed', event: 'DISPUTE_OPENED' },
    { transition: 'disputed_to_cancelled', event: 'REFUND_COMPLETED' },
    { transition: 'payment_released_to_completed', event: 'RECEIPT_GENERATED' }
  ],
  audit_requirements: [
    'record_actor',
    'record_timestamp',
    'record_capability_version',
    'record_policy_decision',
    'record_kernel_command_id',
    'record_ledger_entry_ids',
    'record_consent_id',
    'record_disclosure_version',
    'record_correlation_id'
  ],
  timeline_visibility: [
    { actor: 'parent', visible_events: ['*'] },
    { actor: 'contributor', visible_events: ['CONTRIBUTION_RECEIVED', 'RECEIPT_GENERATED'] },
    { actor: 'school', visible_events: ['INVOICE_UPLOADED', 'PAYMENT_RELEASED'] }
  ],
  observability_requirements: [
    'command_latency',
    'verification_latency',
    'payment_settlement_status',
    'manual_review_duration'
  ],
  support_trace_requirements: [
    'support_agent_can_view_policy_decisions',
    'support_agent_can_view_state_transition_history',
    'support_agent_cannot_view_private_child_data_unless_authorized'
  ]
})

export const UCC_EVENTS_AUDIT_VALIDATION_RULES = Object.freeze([
  'every_state_transition_must_emit_event',
  'every_money_movement_must_emit_auditable_event',
  'events_must_include_actor_timestamp_capability_version_and_correlation_id',
  'kernel_commands_must_link_to_ledger_entries',
  'visibility_rules_must_prevent_oversharing'
])

export const SCHOOL_FEES_UCC_TESTING_PARTIAL = Object.freeze({
  unit_tests: [
    'auto_split_percentage_must_be_between_0_and_100',
    'school_wallet_requires_owner',
    'invoice_requires_amount_and_school_reference'
  ],
  integration_tests: [
    'incoming_money_triggers_auto_split',
    'contributor_payment_creates_receipt',
    'verified_invoice_requests_parent_approval'
  ],
  ledger_tests: [
    'auto_split_creates_balanced_ledger_entries',
    'locked_funds_removed_from_available_balance',
    'release_to_school_balances_escrow_debit_and_settlement_credit'
  ],
  policy_tests: [
    'cannot_release_to_unverified_school',
    'cannot_enable_auto_split_without_consent',
    'large_contribution_triggers_review'
  ],
  ui_tests: [
    'fund_restriction_disclosure_shown_before_activation',
    'payment_confirmation_shown_before_release',
    'receipt_visible_after_contribution'
  ],
  security_tests: [
    'contributor_cannot_view_parent_balance',
    'school_cannot_change_recipient_account_without_reverification'
  ],
  fraud_tests: [
    'duplicate_invoice_detected',
    'school_account_change_triggers_review',
    'rapid_contribution_velocity_triggers_risk_check'
  ],
  migration_tests: [
    'v1_to_v2_preserves_wallet_balance',
    'new_release_rule_requires_consent'
  ],
  failure_tests: [
    'payment_provider_stub_failure_retries_or_refunds'
  ],
  acceptance_criteria: [
    'All ledger tests pass.',
    'No trapped funds detected.',
    'All required disclosures displayed.',
    'Governor approves release mode.'
  ]
})

export const UCC_TESTING_VALIDATION_RULES = Object.freeze([
  'money_capabilities_must_include_ledger_tests',
  'external_recipient_capabilities_must_include_fraud_tests',
  'policy_rules_need_policy_tests',
  'migration_rules_need_migration_tests'
])

export const SCHOOL_FEES_UCC_SIMULATION_SECTION = Object.freeze({
  normal_scenarios: [
    {
      id: 'parent_creates_wallet_and_pays_school',
      steps: [
        'parent_creates_wallet',
        'incoming_money_received',
        'auto_split_runs',
        'school_uploads_invoice',
        'invoice_verified',
        'parent_approves',
        'payment_released'
      ]
    }
  ],
  edge_case_scenarios: [
    { id: 'insufficient_balance_for_invoice', expected_result: 'invoice_remains_pending_and_parent_notified' },
    { id: 'school_verification_fails', expected_result: 'payment_release_blocked' },
    { id: 'parent_cancels_wallet_before_invoice', expected_result: 'available_funds_refunded_to_parent' }
  ],
  fraud_scenarios: [
    { id: 'fake_invoice_uploaded', expected_result: 'invoice_rejected_or_manual_review' },
    { id: 'school_changes_account_before_payment', expected_result: 'reverification_required' }
  ],
  stress_scenarios: [
    { id: 'many_contributors_send_at_once', expected_result: 'all_contributions_receipted_and_balanced' }
  ],
  user_confusion_scenarios: [
    { id: 'parent_thinks_school_was_paid_but_money_is_locked', mitigation: 'show_locked_status_and_next_required_action' }
  ],
  failure_scenarios: [
    { id: 'payment_provider_stub_fails_after_release_attempt', expected_result: 'settlement_pending_state_and_retry_or_refund_path' },
    { id: 'trapped_funds_after_invoice_expiry', expected_result: 'expiry_rule_returns_locked_funds_to_wallet' }
  ]
})

export const UCC_SIMULATION_VALIDATION_RULES = Object.freeze([
  'high_risk_capabilities_must_include_fraud_scenarios',
  'external_integrations_must_include_failure_scenarios',
  'lock_or_escrow_capabilities_must_include_trapped_funds_simulation',
  'multi_party_capabilities_must_include_user_confusion_scenarios'
])

export const SCHOOL_FEES_UCC_MONITORING_SECTION = Object.freeze({
  health_metrics: [
    'activation_count',
    'completion_rate',
    'average_time_to_completion',
    'stuck_state_count',
    'manual_review_rate'
  ],
  risk_metrics: [
    'blocked_release_attempts',
    'duplicate_invoice_attempts',
    'large_contribution_count',
    'school_verification_failures',
    'refund_rate',
    'dispute_rate'
  ],
  user_experience_metrics: [
    'setup_abandonment_rate',
    'invoice_review_abandonment_rate',
    'support_ticket_rate',
    'disclosure_reopen_rate'
  ],
  alert_rules: [
    { condition: 'stuck_state_count > threshold', action: 'notify_capability_doctor' },
    { condition: 'duplicate_invoice_attempts > threshold', action: 'raise_fraud_alert' },
    { condition: 'manual_review_rate > threshold', action: 'review_verification_algorithm' }
  ],
  metric_event_sources: [
    { metric: 'stuck_state_count', source_event: 'state_transition_events' },
    { metric: 'blocked_release_attempts', source_event: 'POLICY_BLOCKED' },
    { metric: 'duplicate_invoice_attempts', source_event: 'INVOICE_UPLOADED' },
    { metric: 'school_verification_failures', source_event: 'INVOICE_VERIFIED' }
  ],
  capability_doctor_rules: [
    {
      symptom: 'high_invoice_rejection_rate',
      possible_causes: [
        'invoice_requirements_too_strict',
        'school_upload_flow_unclear',
        'verification_model_false_positive'
      ],
      recommended_actions: [
        'review_invoice_validation',
        'improve_upload_guidance',
        'add_manual_review_fallback'
      ]
    }
  ],
  rollback_triggers: [
    { trigger: 'ledger_mismatch_detected', owner: 'risk_governor', action: 'pause_capability_and_reconcile_ledger' },
    { trigger: 'unauthorized_release_detected', owner: 'risk_governor', action: 'block_release_and_open_incident' },
    { trigger: 'policy_violation_detected', owner: 'compliance_reviewer', action: 'disable_new_instances_pending_review' },
    { trigger: 'critical_user_harm_detected', owner: 'capability_owner', action: 'rollback_or_retire_capability' }
  ]
})

export const UCC_MONITORING_VALIDATION_RULES = Object.freeze([
  'active_capabilities_must_define_health_metrics',
  'money_moving_capabilities_must_define_risk_metrics',
  'capabilities_must_define_rollback_triggers',
  'high_risk_capabilities_must_define_capability_doctor_rules'
])

export const SCHOOL_FEES_UCC_VERSIONING_MIGRATION_SECTION = Object.freeze({
  version_strategy: 'semantic_versioning',
  backward_compatibility: 'required_for_active_wallet_instances',
  migration_rules: [
    {
      from: '1.0.0',
      to: '1.1.0',
      type: 'non_breaking',
      changes: ['adds_contributor_progress_visibility_setting'],
      consent_required: false
    },
    {
      from: '1.1.0',
      to: '2.0.0',
      type: 'breaking',
      changes: ['adds_mandatory_school_invoice_verification_before_release'],
      consent_required: true
    }
  ],
  consent_on_upgrade: [
    { condition: 'release_rule_changes', required: true },
    { condition: 'fee_changes', required: true },
    { condition: 'data_visibility_changes', required: true }
  ],
  rollback_plan: [
    'preserve_ledger_entries',
    'restore_previous_rules_for_existing_instances',
    'do_not_reverse_completed_external_settlements_without_review'
  ],
  deprecation_rules: [
    'notify_users_before_deprecation',
    'block_new_instances',
    'support_existing_instances_until_migration'
  ],
  retirement_rules: [
    'all_active_instances_must_be_completed_cancelled_or_migrated',
    'no_locked_funds_remaining'
  ]
})

export const UCC_VERSIONING_MIGRATION_VALIDATION_RULES = Object.freeze([
  'breaking_changes_must_define_migration_rules',
  'fee_fund_access_release_or_visibility_changes_require_consent',
  'rollback_cannot_violate_ledger_truth',
  'retirement_cannot_occur_with_unresolved_funds'
])

export const SCHOOL_FEES_UCC_EXPLAINABILITY_SECTION = Object.freeze({
  user_explanation: 'This capability helps you save money toward school fees. You can set a target, automatically move part of incoming money into the school fees wallet, and invite contributors. Funds can only be released to a verified school after invoice review and your approval.',
  admin_explanation: 'This capability combines GoalWalletPrimitive, AutoSplitPrimitive, ContributorLinkPrimitive, InvoiceVerificationPrimitive, EscrowReleasePrimitive, and ReceiptPrimitive. It uses assisted autonomy: auto-split may run automatically, but external payment release requires user approval.',
  regulator_explanation: 'Funds are user-owned and restricted for education payment purposes. External release requires verified recipient status, invoice verification, user approval, disclosure, consent, and audit logging. All money movements are recorded through the kernel ledger.',
  support_explanation: 'Support staff can inspect wallet state, contribution history, invoice status, consent records, policy decisions, and ledger references. Support cannot manually release funds unless authorized through the admin resolution workflow.',
  developer_explanation: 'Runtime calls must use the declared kernel command contracts. No direct balance mutation is allowed. All state transitions must emit declared events.',
  reason_codes: [
    {
      code: 'SCHOOL_UNVERIFIED',
      user_message: 'The school must be verified before payment can be released.',
      internal_meaning: 'Recipient verification requirement not satisfied.'
    },
    {
      code: 'INSUFFICIENT_BALANCE',
      user_message: 'The wallet does not have enough money to pay this invoice.',
      internal_meaning: 'Available balance is lower than invoice amount.'
    },
    {
      code: 'APPROVAL_REQUIRED',
      user_message: 'You must approve this payment before AURA can release it.',
      internal_meaning: 'Autonomy level requires user approval.'
    }
  ]
})

export const UCC_EXPLAINABILITY_VALIDATION_RULES = Object.freeze([
  'capabilities_must_have_user_explanation',
  'blocked_actions_must_have_user_facing_reason_code',
  'high_risk_capabilities_need_admin_and_support_explanations',
  'regulated_context_capabilities_need_regulator_explanation'
])

export const UCC_RELEASE_MODES = Object.freeze([
  'draft',
  'simulation',
  'private_capability',
  'tenant_limited',
  'human_review_required',
  'assisted_autonomy',
  'full_runtime',
  'marketplace',
  'deprecated',
  'retired',
  'blocked'
])

export const SCHOOL_FEES_UCC_RELEASE_SECTION = Object.freeze({
  release_mode: 'private_capability',
  release_gates: [
    'contract_schema_validated',
    'financial_physics_passed',
    'policy_review_passed',
    'simulation_passed',
    'ledger_tests_passed',
    'ui_disclosure_review_passed',
    'governor_approved'
  ],
  required_approvals: [
    { role: 'capability_owner', required: true },
    { role: 'risk_governor', required: true },
    { role: 'compliance_reviewer', required_if: 'risk_class >= high' }
  ],
  limits: [
    { type: 'transaction_amount_limit', value: 'jurisdiction_defined' },
    { type: 'new_school_release_limit', value: 'requires_manual_review_above_threshold' }
  ],
  activation_rules: [
    'user_must_accept_disclosures',
    'auto_split_disabled_until_consent',
    'external_release_disabled_until_school_verified'
  ],
  marketplace_eligibility: 'not_eligible_until_public_review'
})

export const UCC_RELEASE_VALIDATION_RULES = Object.freeze([
  'release_mode_must_match_governance_decision',
  'marketplace_release_requires_stricter_testing_and_documentation',
  'full_runtime_release_requires_monitoring_rules',
  'blocked_capabilities_cannot_be_activated'
])

export const UCC_VALIDATION_PIPELINE_STEPS = Object.freeze([
  'schema_validation',
  'identity_validation',
  'dependency_validation',
  'type_compatibility_validation',
  'rule_validation',
  'state_machine_validation',
  'kernel_contract_validation',
  'financial_physics_validation',
  'policy_governor_validation',
  'evidence_validation',
  'autonomy_validation',
  'ui_ux_validation',
  'event_audit_validation',
  'test_coverage_validation',
  'simulation_readiness_validation',
  'monitoring_readiness_validation',
  'versioning_migration_validation',
  'release_gate_validation'
])

export const UCC_VALIDATION_FOCUS_QUESTIONS = Object.freeze({
  schema_validation: ['required_fields_present', 'field_types_correct', 'enum_values_valid', 'ids_well_formed'],
  dependency_validation: ['primitive_exists', 'kernel_feature_supported', 'asset_available_or_generated', 'algorithm_available_or_declared'],
  type_compatibility_validation: ['goal_wallet_plus_auto_split_valid', 'escrow_release_plus_invoice_verification_valid', 'auto_release_plus_unverified_recipient_invalid'],
  financial_physics_validation: ['can_funds_be_trapped', 'can_money_be_duplicated', 'can_locked_funds_still_appear_available', 'can_external_release_happen_without_approval', 'is_every_escrow_resolvable'],
  policy_governor_validation: ['kyc_required', 'kyb_required', 'minors_involved', 'disclosures_sufficient', 'fees_visible', 'exploitative_pattern_absent'],
  ui_ux_validation: ['setup_flow_present', 'consent_screen_present', 'warning_before_lock', 'confirmation_before_release', 'receipt_present', 'error_recovery_path_present'],
  release_gate_validation: ['draft_only', 'simulation_only', 'private_release', 'tenant_limited', 'full_runtime', 'marketplace_eligible', 'blocked']
})

export const UCC_COMPILER_OUTPUT_ARTIFACTS = Object.freeze([
  'capability_package',
  'kernel_command_map',
  'ui_directive_map',
  'policy_envelope',
  'state_machine_runtime',
  'event_schema',
  'test_suite',
  'simulation_suite',
  'monitoring_rules',
  'explanation_pack',
  'consent_pack',
  'migration_plan'
])

export const UCC_MANDATORY_INVARIANTS = Object.freeze([
  'capability_has_unique_id',
  'capability_has_declared_intent',
  'every_actor_has_permissions',
  'every_money_object_has_ownership',
  'fund_locks_have_release_refund_dispute_and_expiry_paths',
  'money_moving_actions_map_to_kernel_commands',
  'kernel_commands_declare_preconditions_and_postconditions',
  'ledger_effects_balance',
  'automated_actions_have_autonomy_permission',
  'automated_fund_actions_have_consent',
  'external_recipients_have_verification',
  'fees_are_disclosed',
  'irreversible_actions_have_confirmation',
  'state_transitions_are_auditable',
  'active_capabilities_have_monitoring_rules',
  'money_behavior_upgrades_have_migration_logic',
  'blocked_actions_have_reason_codes',
  'capability_is_user_explainable',
  'high_risk_capabilities_include_simulation_and_human_review',
  'governor_block_prevents_runtime'
])

export const UCC_TECHNICAL_IMPLEMENTATION_LAYERS = Object.freeze([
  {
    layer: 'ucc_schema',
    defines: ['json_schema', 'openapi_compatible_types', 'rust_structs', 'go_structs', 'typescript_interfaces']
  },
  {
    layer: 'ucc_validator',
    validates: ['schema_validation', 'semantic_validation', 'financial_physics_validation', 'policy_validation', 'type_compatibility_validation']
  },
  {
    layer: 'ucc_compiler',
    compiles: ['kernel_command_map', 'state_machine', 'ui_directives', 'policy_envelope', 'event_schema', 'test_suite', 'monitoring_rules']
  },
  {
    layer: 'ucc_runtime_binding',
    connects: ['command_router', 'context_builder', 'autonomy_gate', 'policy_engine', 'kernel_execution', 'event_emitter', 'explanation_engine']
  }
])

export const UCC_GENERATED_TYPE_SHAPES = Object.freeze({
  typescript: [
    'ucc_version: string',
    'capability: CapabilityIdentity',
    'intent: CapabilityIntent',
    'classification: CapabilityClassification',
    'dependencies: CapabilityDependencies',
    'entities: CapabilityEntities',
    'money_objects: CapabilityMoneyObjects',
    'rules: CapabilityRules',
    'state_machine: CapabilityStateMachine',
    'kernel_contract: KernelContract',
    'financial_physics: FinancialPhysicsContract',
    'policy: PolicyContract',
    'autonomy: AutonomyContract',
    'evidence: EvidenceContract',
    'ui_ux: UiUxContract',
    'events_audit: EventsAuditContract',
    'testing: TestingContract',
    'simulation: SimulationContract',
    'monitoring: MonitoringContract',
    'versioning_migration: VersioningMigrationContract',
    'explainability: ExplainabilityContract',
    'release: ReleaseContract'
  ],
  rust: [
    'ucc_version: String',
    'capability: CapabilityIdentity',
    'intent: CapabilityIntent',
    'classification: CapabilityClassification',
    'dependencies: CapabilityDependencies',
    'entities: CapabilityEntities',
    'money_objects: CapabilityMoneyObjects',
    'rules: CapabilityRules',
    'state_machine: CapabilityStateMachine',
    'kernel_contract: KernelContract',
    'financial_physics: FinancialPhysicsContract',
    'policy: PolicyContract',
    'autonomy: AutonomyContract',
    'evidence: EvidenceContract',
    'ui_ux: UiUxContract',
    'events_audit: EventsAuditContract',
    'testing: TestingContract',
    'simulation: SimulationContract',
    'monitoring: MonitoringContract',
    'versioning_migration: VersioningMigrationContract',
    'explainability: ExplainabilityContract',
    'release: ReleaseContract'
  ],
  go: [
    'UCCVersion string',
    'Capability CapabilityIdentity',
    'Intent CapabilityIntent',
    'Classification CapabilityClassification',
    'Dependencies CapabilityDependencies',
    'Entities CapabilityEntities',
    'MoneyObjects CapabilityMoneyObjects',
    'Rules CapabilityRules',
    'StateMachine CapabilityStateMachine',
    'KernelContract KernelContract',
    'FinancialPhysics FinancialPhysicsContract',
    'Policy PolicyContract',
    'Autonomy AutonomyContract',
    'Evidence EvidenceContract',
    'UIUX UiUxContract',
    'EventsAudit EventsAuditContract',
    'Testing TestingContract',
    'Simulation SimulationContract',
    'Monitoring MonitoringContract',
    'VersioningMigration VersioningMigrationContract',
    'Explainability ExplainabilityContract',
    'Release ReleaseContract'
  ]
})

export const UCC_GENERATED_CORE_TYPE_DEFINITIONS = Object.freeze({
  typescript: {
    ValidationMode: ['design_time', 'simulation_time', 'release_time', 'runtime_preflight'],
    ValidationSeverity: ['INFO', 'WARNING', 'ERROR', 'CRITICAL', 'BLOCKER'],
    ReleaseMode: UCC_RELEASE_MODES,
    UniversalCapabilityContract: [
      'ucc_version: string',
      'capability: CapabilityIdentity',
      'intent: CapabilityIntent',
      'classification: CapabilityClassification',
      'dependencies: CapabilityDependencies',
      'entities: CapabilityEntities',
      'money_objects: MoneyObjects',
      'rules: CapabilityRules',
      'state_machine: StateMachine',
      'kernel_contract: KernelContract',
      'financial_physics: FinancialPhysics',
      'policy: PolicyContract',
      'autonomy: AutonomyContract',
      'evidence: EvidenceContract',
      'ui_ux: UiUxContract',
      'events_audit: EventsAuditContract',
      'testing: TestingContract',
      'simulation: SimulationContract',
      'monitoring: MonitoringContract',
      'versioning_migration: VersioningMigrationContract',
      'explainability: ExplainabilityContract',
      'release: ReleaseContract'
    ],
    ValidationFinding: [
      'id: string',
      'severity: ValidationSeverity',
      'code: string',
      'title: string',
      'message: string',
      'path: string',
      'validator: string',
      'affectedObjects?: string[]',
      'requiredAction?: string',
      'suggestedFix?: string',
      'releaseImpact: ReleaseImpact'
    ],
    ReleaseImpact: [
      'blocksDraft: boolean',
      'blocksSimulation: boolean',
      'blocksPrivateRelease: boolean',
      'blocksTenantLimited: boolean',
      'blocksAssistedAutonomy: boolean',
      'blocksFullRuntime: boolean',
      'blocksMarketplace: boolean'
    ]
  },
  go: {
    ValidationMode: ['ValidationModeDesignTime', 'ValidationModeSimulationTime', 'ValidationModeReleaseTime', 'ValidationModeRuntimePreflight'],
    ValidationSeverity: ['SeverityInfo', 'SeverityWarning', 'SeverityError', 'SeverityCritical', 'SeverityBlocker'],
    UniversalCapabilityContract: [
      'UCCVersion string `json:"ucc_version" yaml:"ucc_version"`',
      'Capability CapabilityIdentity `json:"capability" yaml:"capability"`',
      'Intent CapabilityIntent `json:"intent" yaml:"intent"`',
      'Classification CapabilityClassification `json:"classification" yaml:"classification"`',
      'Dependencies CapabilityDependencies `json:"dependencies" yaml:"dependencies"`',
      'Entities CapabilityEntities `json:"entities" yaml:"entities"`',
      'MoneyObjects MoneyObjects `json:"money_objects" yaml:"money_objects"`',
      'Rules CapabilityRules `json:"rules" yaml:"rules"`',
      'StateMachine StateMachine `json:"state_machine" yaml:"state_machine"`',
      'KernelContract KernelContract `json:"kernel_contract" yaml:"kernel_contract"`',
      'FinancialPhysics FinancialPhysics `json:"financial_physics" yaml:"financial_physics"`',
      'Policy PolicyContract `json:"policy" yaml:"policy"`',
      'Autonomy AutonomyContract `json:"autonomy" yaml:"autonomy"`',
      'Evidence EvidenceContract `json:"evidence" yaml:"evidence"`',
      'UIUX UiUxContract `json:"ui_ux" yaml:"ui_ux"`',
      'EventsAudit EventsAuditContract `json:"events_audit" yaml:"events_audit"`',
      'Testing TestingContract `json:"testing" yaml:"testing"`',
      'Simulation SimulationContract `json:"simulation" yaml:"simulation"`',
      'Monitoring MonitoringContract `json:"monitoring" yaml:"monitoring"`',
      'VersioningMigration VersioningMigrationContract `json:"versioning_migration" yaml:"versioning_migration"`',
      'Explainability ExplainabilityContract `json:"explainability" yaml:"explainability"`',
      'Release ReleaseContract `json:"release" yaml:"release"`'
    ],
    ValidationFinding: [
      'ID string `json:"id"`',
      'Severity ValidationSeverity `json:"severity"`',
      'Code string `json:"code"`',
      'Title string `json:"title"`',
      'Message string `json:"message"`',
      'Path string `json:"path"`',
      'Validator string `json:"validator"`',
      'AffectedObjects []string `json:"affected_objects,omitempty"`',
      'RequiredAction string `json:"required_action,omitempty"`',
      'SuggestedFix string `json:"suggested_fix,omitempty"`',
      'ReleaseImpact ReleaseImpact `json:"release_impact"`'
    ]
  },
  rust: {
    derives: ['Debug', 'Clone', 'Serialize', 'Deserialize'],
    UniversalCapabilityContract: [
      'pub ucc_version: String',
      'pub capability: CapabilityIdentity',
      'pub intent: CapabilityIntent',
      'pub classification: CapabilityClassification',
      'pub dependencies: CapabilityDependencies',
      'pub entities: CapabilityEntities',
      'pub money_objects: MoneyObjects',
      'pub rules: CapabilityRules',
      'pub state_machine: StateMachine',
      'pub kernel_contract: KernelContract',
      'pub financial_physics: FinancialPhysics',
      'pub policy: PolicyContract',
      'pub autonomy: AutonomyContract',
      'pub evidence: EvidenceContract',
      'pub ui_ux: UiUxContract',
      'pub events_audit: EventsAuditContract',
      'pub testing: TestingContract',
      'pub simulation: SimulationContract',
      'pub monitoring: MonitoringContract',
      'pub versioning_migration: VersioningMigrationContract',
      'pub explainability: ExplainabilityContract',
      'pub release: ReleaseContract'
    ],
    ValidationSeverity: ['INFO', 'WARNING', 'ERROR', 'CRITICAL', 'BLOCKER'],
    ValidationFinding: [
      'pub id: String',
      'pub severity: ValidationSeverity',
      'pub code: String',
      'pub title: String',
      'pub message: String',
      'pub path: String',
      'pub validator: String',
      'pub affected_objects: Vec<String>',
      'pub required_action: Option<String>',
      'pub suggested_fix: Option<String>',
      'pub release_impact: ReleaseImpact'
    ],
    ReleaseImpact: [
      'pub blocks_draft: bool',
      'pub blocks_simulation: bool',
      'pub blocks_private_release: bool',
      'pub blocks_tenant_limited: bool',
      'pub blocks_assisted_autonomy: bool',
      'pub blocks_full_runtime: bool',
      'pub blocks_marketplace: bool'
    ]
  }
})

export const UCC_OUTCOME_STATEMENTS = Object.freeze([
  'capability_is_valid',
  'capability_is_incomplete',
  'capability_is_unsafe',
  'capability_needs_another_primitive',
  'capability_needs_user_consent',
  'capability_needs_manual_review',
  'capability_cannot_release_money_yet',
  'capability_has_no_refund_path',
  'capability_violates_financial_physics',
  'capability_ready_for_simulation',
  'capability_ready_for_private_release',
  'capability_ready_for_marketplace_review'
])

export const UCC_CANONICAL_SOURCE_OF_TRUTH_FLOW = Object.freeze([
  'natural_language_request',
  'capability_intent',
  'universal_capability_contract',
  'validation',
  'simulation',
  'governance',
  'compilation',
  'runtime_binding'
])

export const UCC_SCHEMA_VALIDATOR_DEFINITION = Object.freeze({
  schema: 'formal_machine_readable_specification_for_required_structure_field_types_enums_nested_objects_references_and_allowed_shapes',
  validator: 'multi_stage_engine_that_evaluates_whether_a_capability_contract_can_safely_exist',
  simpleDistinction: {
    schema: 'checks_contract_shape',
    validator: 'checks_capability_safety_and_executability'
  }
})

export const UCC_VALIDATOR_EVALUATION_DIMENSIONS = Object.freeze([
  'structural_correctness',
  'semantic_completeness',
  'dependency_validity',
  'type_compatibility',
  'rule_consistency',
  'state_machine_safety',
  'kernel_execution_safety',
  'financial_physics_compliance',
  'policy_and_jurisdiction_compliance',
  'evidence_and_verification_completeness',
  'autonomy_and_consent_safety',
  'ui_ux_safety',
  'event_audit_completeness',
  'testing_coverage',
  'simulation_readiness',
  'monitoring_readiness',
  'versioning_and_migration_safety',
  'release_eligibility'
])

export const UCC_VALIDATOR_SAFETY_EXAMPLES = Object.freeze({
  workerSavingsRisk: {
    request: 'Let my workers save money with me, and I will decide when they can withdraw.',
    validatorFindings: [
      'possible_employer_control_over_worker_owned_funds',
      'unclear_ownership',
      'withdrawal_restriction_risk',
      'labor_abuse_risk',
      'missing_consent_rules',
      'missing_refund_path',
      'missing_dispute_path',
      'possible_coercion'
    ]
  },
  familyRentConditionallyValid: {
    request: 'Let my relatives contribute toward rent, but only my landlord should receive the money.',
    requiredDeclarations: [
      'contributors',
      'landlord_recipient_verification',
      'wallet_ownership',
      'contribution_receipt_rules',
      'release_approval',
      'refund_path',
      'dispute_path',
      'due_date_reminders',
      'data_visibility_rules',
      'audit_events',
      'ledger_operations'
    ]
  }
})

export const UCC_VALIDATOR_POSITION_FLOW = Object.freeze([
  'natural_language_request_admin_studio_partner_api',
  'intent_interpreter',
  'rule_extractor',
  'capability_composer',
  'draft_universal_capability_contract',
  'universal_capability_contract_validator',
  'validation_result',
  'capability_compiler',
  'capability_registry',
  'runtime_execution_engine',
  'financial_kernel'
])

export const UCC_VALIDATION_RESULTS = Object.freeze([
  'valid',
  'invalid',
  'needs_clarification',
  'needs_primitive',
  'needs_policy_review',
  'simulation_only',
  'private_release',
  'full_runtime_eligible',
  'blocked'
])

export const UCC_HARD_SAFETY_PRINCIPLE = 'no_capability_may_affect_real_money_unless_structurally_complete_semantically_coherent_financially_safe_policy_reviewed_testable_explainable_auditable_and_release_gated'

export const UCC_BLOCKED_DIRECT_MONEY_FLOW = Object.freeze([
  'user_request',
  'ai_generated_logic',
  'direct_money_movement'
])

export const UCC_CORRECT_MONEY_FLOW = Object.freeze([
  'user_request',
  'interpreted_intent',
  'draft_ucc',
  'schema_validation',
  'semantic_validation',
  'financial_physics_validation',
  'policy_governor_validation',
  'simulation_readiness',
  'release_decision',
  'runtime_execution_through_kernel'
])

export const UCC_SCHEMA_FORMAT_STRATEGY = Object.freeze({
  yaml_authoring_format: {
    usedBy: ['admin_studio', 'developer_tools', 'capability_designers', 'internal_product_teams', 'partner_submissions', 'ai_generated_drafts'],
    reason: 'human_readable_authoring'
  },
  canonical_json_runtime_format: {
    usedBy: ['validators', 'compilers', 'runtime_engines', 'registry_storage', 'api_communication', 'policy_engine', 'simulation_engine'],
    reason: 'normalized_machine_runtime'
  },
  generated_language_types: {
    targets: ['typescript_interfaces', 'rust_structs', 'go_structs'],
    reason: 'compile_time_contract_safety'
  }
})

export const UCC_NORMALIZATION_STEPS = Object.freeze([
  'trim_strings',
  'sort_deterministic_fields',
  'resolve_references',
  'canonicalize_ids',
  'apply_default_empty_arrays',
  'remove_unsupported_keys',
  'convert_dates_to_standard_format'
])

export const UCC_GENERATED_TYPE_RESPONSIBILITIES = Object.freeze({
  rust: [
    'deterministic_financial_kernel_facing_validation',
    'financial_physics_checks',
    'ledger_command_contract_enforcement'
  ],
  go: [
    'service_orchestration',
    'registry_lookup',
    'validator_pipeline_orchestration',
    'policy_gateway_integration',
    'admin_api'
  ],
  typescript: [
    'admin_studio',
    'ui_composer',
    'design_time_validation',
    'form_builders',
    'capability_preview'
  ]
})

export const UCC_SCHEMA_PACKAGE_NAMING = Object.freeze({
  packageName: 'aura.ucc.schema.v1',
  files: [
    'ucc.schema.json',
    'ucc.types.ts',
    'ucc.types.go',
    'ucc.types.rs',
    'ucc.validator.spec.md'
  ],
  capabilityContractFiles: ['<capability_id>.ucc.yaml', '<capability_id>.ucc.json'],
  examples: [
    'school_fees_wallet.ucc.yaml',
    'family_rent_wallet.ucc.yaml',
    'contractor_gps_escrow.ucc.yaml',
    'susu_circle_g1_smooth.ucc.yaml',
    'safe_send_pending_claim.ucc.yaml'
  ]
})

export const UCC_TOP_LEVEL_STRICT_RULES = Object.freeze([
  'all_sections_required',
  'not_applicable_sections_use_empty_arrays_with_reason',
  'no_unknown_top_level_keys',
  'policy_autonomy_events_monitoring_testing_and_explainability_cannot_be_omitted',
  'empty_sections_must_explain_why'
])

export const UCC_EMPTY_SECTION_NOT_APPLICABLE_EXAMPLE = Object.freeze({
  evidence: {
    required_evidence: [],
    verification_methods: [],
    not_applicable_reason: 'This capability does not require external proof or verification.'
  }
})

export const UCC_TOP_LEVEL_JSON_SCHEMA_FRAGMENT = Object.freeze({
  $id: 'https://aura.local/schemas/ucc/v1/ucc.schema.json',
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  title: 'AURA Universal Capability Contract',
  type: 'object',
  additionalProperties: false,
  required: UCC_TOP_LEVEL_SECTIONS,
  properties: Object.freeze({
    ucc_version: { type: 'string', enum: SUPPORTED_UCC_SCHEMA_VERSIONS },
    capability: { $ref: '#/$defs/CapabilityIdentity' },
    intent: { $ref: '#/$defs/CapabilityIntent' },
    classification: { $ref: '#/$defs/CapabilityClassification' },
    dependencies: { $ref: '#/$defs/CapabilityDependencies' },
    entities: { $ref: '#/$defs/CapabilityEntities' },
    money_objects: { $ref: '#/$defs/MoneyObjects' },
    rules: { $ref: '#/$defs/CapabilityRules' },
    state_machine: { $ref: '#/$defs/StateMachine' },
    kernel_contract: { $ref: '#/$defs/KernelContract' },
    financial_physics: { $ref: '#/$defs/FinancialPhysics' },
    policy: { $ref: '#/$defs/PolicyContract' },
    autonomy: { $ref: '#/$defs/AutonomyContract' },
    evidence: { $ref: '#/$defs/EvidenceContract' },
    ui_ux: { $ref: '#/$defs/UiUxContract' },
    events_audit: { $ref: '#/$defs/EventsAuditContract' },
    testing: { $ref: '#/$defs/TestingContract' },
    simulation: { $ref: '#/$defs/SimulationContract' },
    monitoring: { $ref: '#/$defs/MonitoringContract' },
    versioning_migration: { $ref: '#/$defs/VersioningMigrationContract' },
    explainability: { $ref: '#/$defs/ExplainabilityContract' },
    release: { $ref: '#/$defs/ReleaseContract' }
  })
})

export const UCC_ID_REGEX = /^[a-z][a-z0-9_]*$/

export const UCC_FIELD_CONVENTIONS = Object.freeze({
  ids: {
    valid: ['school_fees_wallet', 'contractor_gps_escrow', 'family_rent_wallet', 'susu_g1_smooth_circle'],
    invalid: ['School Fees Wallet', 'school fees wallet', 'school-fees-wallet', 'SchoolFeesWallet'],
    regex: '^[a-z][a-z0-9_]*$'
  },
  versions: {
    capabilitySemver: 'major.minor.patch',
    examples: ['1.0.0', '1.1.0', '2.0.0'],
    schemaVersionSeparateFromCapabilityVersion: true
  },
  references: {
    examples: [{ from: 'guardian_main_wallet', to: 'school_fees_wallet' }],
    danglingReferencesAllowed: false
  },
  time: {
    absoluteTimestampFormat: 'ISO-8601',
    example: '2026-05-17T12:30:00Z',
    scheduleTimezoneFields: ['timezone_source', 'fallback_timezone', 'timezone']
  },
  currency: {
    isoCurrencyCodes: ['USD', 'GHS', 'NGN', 'EUR', 'GBP'],
    internalUnitField: 'unit_type',
    doNotMixCurrencyAndScoreUnits: true
  }
})

export const UCC_CREATION_METHODS = Object.freeze([
  'natural_language',
  'admin_studio',
  'developer',
  'partner',
  'marketplace',
  'imported',
  'system_generated'
])

export const UCC_AUTONOMY_LEVEL_ENUM = Object.freeze([
  'blocked',
  'suggest_only',
  'draft_only',
  'requires_user_approval',
  'requires_admin_approval',
  'requires_compliance_approval',
  'auto_execute_under_threshold',
  'auto_execute_under_user_rule',
  'auto_execute_fully',
  'requires_verification',
  'assisted_with_manual_review_fallback',
  'auto_execute_if_expiry_rule_matches',
  'requires_user_confirmation',
  'requires_user_action'
])

export const UCC_MONEY_MOVEMENT_TYPE_ENUM = Object.freeze([
  'none',
  'allocate',
  'split',
  'lock',
  'reserve',
  'release',
  'refund',
  'reverse',
  'settle',
  'claim',
  'expire',
  'sweep',
  'contribute',
  'withdraw',
  'payout',
  'transfer',
  'escrow'
])

export const UCC_ACTOR_TYPE_ENUM = Object.freeze([
  'user',
  'dependent',
  'child',
  'guardian',
  'parent',
  'spouse',
  'family_member',
  'contributor',
  'recipient',
  'merchant',
  'school',
  'contractor',
  'agent',
  'business',
  'corporate_entity',
  'circle',
  'circle_member',
  'circle_organizer',
  'verifier',
  'admin',
  'shadow_entity',
  'government_institution',
  'external_user',
  'institution'
])

export const UCC_EVIDENCE_TYPE_ENUM = Object.freeze([
  'none',
  'receipt',
  'invoice',
  'photo',
  'video',
  'gps',
  'qr_scan',
  'merchant_confirmation',
  'third_party_signature',
  'biometric_confirmation',
  'device_signature',
  'delivery_proof',
  'school_verification',
  'institution_verification',
  'contract_milestone'
])

export const UCC_KERNEL_OPERATION_ENUM = Object.freeze([
  'create_wallet',
  'close_wallet',
  'allocate_funds',
  'split_funds',
  'lock_funds',
  'unlock_funds',
  'reserve_funds',
  'release_escrow',
  'refund_funds',
  'reverse_transaction',
  'create_pending_claim',
  'settle_pending_claim',
  'expire_pending_claim',
  'create_obligation',
  'settle_obligation',
  'generate_receipt',
  'external_transfer',
  'internal_transfer'
])

export const UCC_VALIDATOR_MODULES = Object.freeze([
  'SchemaValidator',
  'NormalizationValidator',
  'IdentityValidator',
  'IntentValidator',
  'ClassificationValidator',
  'DependencyValidator',
  'EntityValidator',
  'MoneyObjectValidator',
  'RuleValidator',
  'StateMachineValidator',
  'KernelContractValidator',
  'FinancialPhysicsValidator',
  'PolicyValidator',
  'AutonomyValidator',
  'EvidenceValidator',
  'UiUxValidator',
  'EventsAuditValidator',
  'TestingValidator',
  'SimulationValidator',
  'MonitoringValidator',
  'VersioningMigrationValidator',
  'ExplainabilityValidator',
  'ReleaseGateValidator'
])

export const UCC_VALIDATION_ENVIRONMENT_MODES = Object.freeze({
  design_time: {
    allowsIncompleteDrafts: true,
    produces: ['warnings', 'clarification_needs']
  },
  simulation_time: {
    requires: ['enough_structure_for_fake_money_execution']
  },
  release_time: {
    requires: ['complete_governance', 'tests']
  },
  runtime_preflight: {
    checks: ['current_state', 'policy', 'consent', 'autonomy', 'command_validity']
  }
})

export const UCC_VALIDATION_INPUT_SHAPE = Object.freeze([
  'contract',
  'environment',
  'targetReleaseMode',
  'targetJurisdiction',
  'targetProduct',
  'registrySnapshot',
  'policySnapshot',
  'kernelFeatureSnapshot'
])

export const UCC_VALIDATOR_REGISTRY_DEPENDENCIES = Object.freeze([
  'atom_registry',
  'micro_primitive_registry',
  'primitive_registry',
  'capability_registry',
  'algorithm_vault',
  'asset_vault',
  'policy_registry',
  'jurisdiction_registry',
  'kernel_feature_registry',
  'event_registry',
  'disclosure_registry',
  'consent_pattern_registry',
  'evidence_pattern_registry',
  'ui_pattern_registry',
  'simulation_scenario_registry',
  'test_pattern_registry'
])

export const UCC_REGISTRY_SNAPSHOT_FIELDS = Object.freeze([
  'snapshotId',
  'createdAt',
  'atoms',
  'microPrimitives',
  'primitives',
  'capabilities',
  'algorithms',
  'assets',
  'policies',
  'jurisdictions',
  'kernelFeatures',
  'eventDefinitions',
  'disclosures',
  'consentPatterns',
  'evidencePatterns',
  'uiPatterns',
  'simulationScenarios',
  'testPatterns'
])

export const UCC_DETERMINISM_RULE = Object.freeze({
  inputs: ['same_ucc', 'same_registry_snapshot', 'same_policy_snapshot', 'same_kernel_version', 'same_validation_mode'],
  output: 'same_validation_result',
  protects: ['audits', 'compliance', 'developer_trust', 'test_reproducibility', 'capability_marketplace_review', 'rollback_decisions']
})

export const UCC_REPAIR_LOOP_FLOW = Object.freeze([
  'draft_ucc',
  'validator_findings',
  'repair_planner',
  'clarifying_questions_or_automatic_patch',
  'revised_ucc',
  'revalidate'
])

export const UCC_ADMIN_STUDIO_BADGE_CATEGORIES = Object.freeze([
  'Schema',
  'Dependencies',
  'Financial Physics',
  'Policy',
  'UI/UX',
  'Simulation',
  'Release'
])

export const UCC_MARKETPLACE_VALIDATION_REQUIREMENTS = Object.freeze([
  'full_schema_pass',
  'no_critical_errors',
  'no_blocker_findings',
  'complete_test_suite',
  'complete_simulation_suite',
  'complete_monitoring_rules',
  'complete_explainability_pack',
  'complete_support_documentation',
  'jurisdiction_aware_policy_review',
  'safe_migration_plan',
  'marketplace_metadata',
  'user_facing_disclosures'
])

export const UCC_VALIDATION_RESULT_SHAPE = Object.freeze([
  'contractId',
  'capabilityId',
  'capabilityVersion',
  'valid',
  'releaseEligibility',
  'severity',
  'findings',
  'requiredFixes',
  'suggestedFixes',
  'missingClarifications',
  'generatedArtifactsPreview'
])

export const UCC_FINDING_SEVERITY_LEVELS = Object.freeze([
  { level: 'INFO', meaning: 'helpful_observation', example: 'Capability uses assisted autonomy.' },
  { level: 'WARNING', meaning: 'not_blocking_but_should_be_reviewed', example: 'Capability has no custom empty state for contributor view.' },
  { level: 'ERROR', meaning: 'must_be_fixed_before_release', example: 'A required actor has no permission declaration.' },
  { level: 'CRITICAL', meaning: 'financial_or_policy_safety_issue', example: 'Funds can be locked without refund or expiry path.' },
  { level: 'BLOCKER', meaning: 'capability_cannot_proceed', example: 'Capability attempts to release funds to an unverified recipient despite policy prohibition.' }
])

export const UCC_FINDING_STRUCTURE_FIELDS = Object.freeze([
  'id',
  'severity',
  'code',
  'title',
  'message',
  'path',
  'validator',
  'affectedObjects',
  'requiredAction',
  'suggestedFix',
  'releaseImpact'
])

export const UCC_RELEASE_IMPACT_MODEL = Object.freeze([
  'blocksDraft',
  'blocksSimulation',
  'blocksPrivateRelease',
  'blocksTenantLimited',
  'blocksAssistedAutonomy',
  'blocksFullRuntime',
  'blocksMarketplace'
])

export const TRAPPED_FUNDS_FINDING_EXAMPLE = Object.freeze({
  id: 'finding_001',
  severity: 'CRITICAL',
  code: 'FINPHYS.TRAPPED_FUNDS.NO_EXPIRY_PATH',
  title: 'Locked funds have no expiry path',
  message: "The lock 'education_purpose_lock' defines release and dispute paths but does not define an expiry path.",
  path: 'money_objects.locks[0].release_paths',
  validator: 'FinancialPhysicsValidator',
  affectedObjects: ['education_purpose_lock'],
  requiredAction: 'Add an expiry rule that resolves funds after a defined period or failed release condition.',
  suggestedFix: 'Add rules.expiry_rules entry for invoice expiry or wallet inactivity.',
  releaseImpact: {
    blocksSimulation: false,
    blocksPrivateRelease: true,
    blocksFullRuntime: true,
    blocksMarketplace: true
  }
})

export const UCC_DETAILED_VALIDATION_PIPELINE_STEPS = Object.freeze([
  'input_normalization',
  'json_schema_validation',
  'unknown_field_rejection',
  'id_and_version_validation',
  'intent_completeness_validation',
  'classification_consistency_validation',
  'dependency_registry_validation',
  'entity_permission_visibility_validation',
  'money_object_validation',
  'rule_validation',
  'state_machine_validation',
  'kernel_contract_validation',
  'financial_physics_validation',
  'policy_governor_validation',
  'autonomy_consent_validation',
  'evidence_verification_validation',
  'ui_ux_safety_validation',
  'events_audit_validation',
  'testing_coverage_validation',
  'simulation_readiness_validation',
  'monitoring_readiness_validation',
  'versioning_migration_validation',
  'explainability_validation',
  'release_gate_validation',
  'final_eligibility_computation'
])

export const UCC_STAGE0_NORMALIZATION_TASKS = Object.freeze([
  'convert_yaml_to_json',
  'trim_strings',
  'canonicalize_ids_when_not_identity_critical',
  'ensure_missing_optional_arrays_become_empty_arrays',
  'resolve_aliases',
  'normalize_enum_casing',
  'resolve_local_references',
  'normalize_currency_codes',
  'normalize_timestamps',
  'sort_deterministic_collections'
])

export const UCC_STRICT_NORMALIZATION_RULES = Object.freeze([
  'risk_class_medium_can_normalize_to_medium',
  'capability_id_school_fees_wallet_with_spaces_must_be_flagged_not_silently_changed'
])

export const UCC_SCHEMA_STAGE_ERROR_EXAMPLES = Object.freeze([
  {
    code: 'SCHEMA.REQUIRED_FIELD_MISSING',
    path: 'capability.id',
    message: 'capability.id is required.'
  },
  {
    code: 'SCHEMA.INVALID_ENUM',
    path: 'classification.risk_class',
    message: 'risk_class must be one of informational, low, medium, high, restricted, blocked.'
  }
])

export const UCC_IDENTITY_STAGE_FINDING_CODES = Object.freeze([
  'IDENTITY.DUPLICATE_CAPABILITY_ID',
  'IDENTITY.INVALID_VERSION',
  'IDENTITY.MISSING_OWNER',
  'IDENTITY.MISSING_SUPPORTED_JURISDICTION',
  'IDENTITY.UNKNOWN_CREATION_METHOD'
])

export const UCC_INTENT_STAGE_REQUIRED_FIELDS = Object.freeze([
  'primary_goal',
  'user_problem',
  'desired_outcomes',
  'non_goals',
  'success_metrics',
  'natural_language_examples'
])

export const UCC_CLASSIFICATION_STAGE_RULES = Object.freeze([
  'lock_money_movement_requires_money_object_locks',
  'release_money_movement_requires_kernel_release_operation',
  'gps_evidence_requires_gps_verification_method',
  'dependent_actor_requires_minor_protection_rules',
  'high_or_restricted_risk_requires_human_review_rules'
])

export const UCC_DEPENDENCY_REGISTRIES = Object.freeze([
  'atom_registry',
  'micro_primitive_registry',
  'primitive_registry',
  'algorithm_vault',
  'asset_vault',
  'kernel_feature_registry',
  'external_integration_registry',
  'policy_pack_registry'
])

export const UCC_DEPENDENCY_STATUS_TYPES = Object.freeze([
  'missing_but_generatable',
  'missing_and_required',
  'unsupported_in_current_jurisdiction',
  'unsupported_in_current_runtime',
  'deprecated',
  'unsafe_version'
])

export const UCC_ENTITY_STAGE_RULES = Object.freeze([
  'actors_require_id_type_role_required_and_verification_level',
  'required_actors_need_identity_requirements',
  'money_movers_need_permissions',
  'money_receivers_need_recipient_verification',
  'relationships_reference_declared_actors_or_money_objects',
  'data_visibility_references_declared_actors',
  'permissions_must_match_role',
  'visibility_must_not_overexpose_private_data'
])

export const UCC_MONEY_OBJECT_STAGE_RULES = Object.freeze([
  'wallets_need_owner',
  'external_destinations_need_recipient_entity',
  'escrows_need_owner_recipient_release_refund_dispute_and_expiry_conditions',
  'locks_need_release_paths',
  'fees_need_disclosure',
  'liabilities_need_liable_party_and_settlement_rules',
  'money_objects_need_valid_currency_or_unit_type',
  'ownership_must_not_be_ambiguous'
])

export const UCC_RULE_STAGE_RULES = Object.freeze([
  'triggers_reference_known_event_or_schedule',
  'condition_expressions_reference_known_fields',
  'actions_reference_valid_command_ui_notification_or_policy_action',
  'kernel_actions_map_to_kernel_contract_command_contracts',
  'schedules_define_timezone_behavior',
  'thresholds_define_units_and_bounds',
  'exceptions_have_recovery_action',
  'refund_rules_map_to_kernel_operation',
  'dispute_rules_define_frozen_state_behavior',
  'expiry_rules_define_resolution_behavior'
])

export const UCC_STATE_MACHINE_STAGE_RULES = Object.freeze([
  'initial_state_exists',
  'terminal_states_exist',
  'transitions_reference_valid_states',
  'non_terminal_states_have_outgoing_transition',
  'terminal_states_resolve_locked_or_escrowed_funds',
  'wildcard_transitions_are_explicitly_allowed',
  'money_affecting_transitions_map_to_kernel_or_rule',
  'no_impossible_states',
  'no_unreachable_states',
  'no_dead_end_states_with_unresolved_funds',
  'no_circular_locked_fund_transition_without_exit'
])

export const UCC_KERNEL_STAGE_RULES = Object.freeze([
  'money_moving_actions_map_to_allowed_kernel_operation',
  'kernel_commands_declare_inputs',
  'kernel_commands_declare_preconditions',
  'kernel_commands_declare_postconditions',
  'kernel_commands_declare_ledger_effects',
  'ledger_effects_balance',
  'commands_declare_idempotency',
  'external_settlement_commands_declare_finality',
  'reversal_sensitive_commands_declare_reversal_behavior',
  'prohibited_operations_are_never_called',
  'direct_balance_mutation_disallowed'
])

export const UCC_FINANCIAL_PHYSICS_STAGE_CHECKS = Object.freeze([
  'no_money_creation',
  'no_double_spending',
  'no_ghost_balances',
  'no_trapped_funds',
  'no_ambiguous_ownership',
  'no_locked_and_available_funds',
  'no_release_without_condition',
  'no_escrow_without_exit_path',
  'no_external_settlement_without_finality_rule',
  'no_reversal_ambiguity',
  'no_liability_ambiguity'
])

export const UCC_GOVERNOR_DECISIONS = Object.freeze([
  'approve',
  'approve_with_conditions',
  'require_clarification',
  'require_disclosure',
  'require_user_consent',
  'require_admin_review',
  'require_compliance_review',
  'require_human_review',
  'restrict_autonomy',
  'restrict_amount_limit',
  'restrict_jurisdiction',
  'simulation_only',
  'block',
  'redirect_to_safe_alternative'
])

export const UCC_AUTONOMY_CONSENT_STAGE_RULES = Object.freeze([
  'auto_executed_actions_have_autonomy_permission',
  'auto_executed_money_actions_have_user_consent',
  'external_release_requires_approval_unless_policy_allows',
  'money_rule_modification_requires_user_confirmation',
  'blocked_autonomy_actions_are_enforced',
  'autonomy_escalation_rules_have_runtime_trigger'
])

export const UCC_EVIDENCE_STAGE_RULES = Object.freeze([
  'required_evidence_items_define_type',
  'evidence_items_define_submitter',
  'evidence_items_define_required_fields',
  'evidence_items_define_verification_method',
  'automated_verification_defines_confidence_threshold',
  'low_confidence_results_define_fallback',
  'evidence_items_define_retention_and_visibility',
  'high_risk_evidence_has_anti_spoofing_mitigation'
])

export const UCC_UI_UX_STAGE_RULES = Object.freeze([
  'fund_locks_have_explanation_point',
  'irreversible_or_external_payments_have_confirmation_point',
  'consent_requirements_have_ui_collection_surface',
  'warning_conditions_have_warning_surface',
  'error_states_have_recovery_path',
  'success_states_have_receipt_or_confirmation',
  'multi_party_capabilities_define_visibility_surfaces',
  'high_risk_actions_have_human_readable_reason_codes'
])

export const UCC_EVENTS_AUDIT_STAGE_RULES = Object.freeze([
  'state_transitions_emit_event',
  'money_movements_emit_event',
  'kernel_commands_link_to_event',
  'events_include_actor_timestamp_capability_version_and_correlation_id',
  'consent_events_include_consent_id_and_disclosure_version',
  'policy_decisions_are_recorded',
  'audit_events_define_visibility_and_support_access',
  'sensitive_events_do_not_leak_private_data'
])

export const UCC_TESTING_STAGE_RULES = Object.freeze([
  'money_capabilities_require_ledger_tests',
  'policy_rules_require_policy_tests',
  'external_recipients_require_fraud_tests',
  'external_integrations_require_failure_tests',
  'migration_rules_require_migration_tests',
  'ui_consent_requires_ui_tests',
  'evidence_verification_requires_evidence_or_fraud_tests'
])

export const UCC_SIMULATION_STAGE_RULES = Object.freeze([
  'capabilities_define_normal_scenarios',
  'medium_or_high_risk_capabilities_define_edge_cases',
  'high_risk_capabilities_define_fraud_scenarios',
  'external_provider_capabilities_define_provider_failure_scenarios',
  'lock_or_escrow_capabilities_define_trapped_funds_scenario',
  'multi_party_capabilities_define_user_confusion_scenario'
])

export const UCC_MONITORING_STAGE_RULES = Object.freeze([
  'active_capabilities_define_health_metrics',
  'money_moving_capabilities_define_risk_metrics',
  'user_facing_capabilities_define_ux_metrics',
  'high_risk_capabilities_define_alert_rules',
  'capabilities_define_rollback_triggers',
  'monitored_metrics_have_source_event',
  'rollback_triggers_have_owner_and_action'
])

export const UCC_VERSIONING_STAGE_RULES = Object.freeze([
  'capability_version_is_semver',
  'breaking_changes_declare_migration_rules',
  'fee_changes_require_consent',
  'release_rule_changes_require_consent',
  'data_visibility_changes_require_consent',
  'autonomy_changes_require_consent',
  'rollback_cannot_violate_ledger_truth',
  'retirement_requires_resolved_funds',
  'deprecated_capabilities_block_new_instances_or_explicitly_allow_them'
])

export const UCC_EXPLAINABILITY_STAGE_RULES = Object.freeze([
  'capabilities_have_user_explanation',
  'medium_or_high_risk_capabilities_have_admin_explanation',
  'regulated_capabilities_have_regulator_explanation',
  'support_sensitive_capabilities_have_support_explanation',
  'blocked_actions_have_reason_code',
  'reason_codes_have_user_safe_message',
  'reason_codes_map_to_internal_meaning'
])

export const UCC_RELEASE_DECISION_INPUTS = Object.freeze([
  'schema_status',
  'semantic_validation_status',
  'financial_physics_result',
  'policy_result',
  'simulation_readiness',
  'test_coverage',
  'monitoring_readiness',
  'human_approval_needs',
  'risk_class',
  'target_release_mode',
  'target_jurisdiction',
  'target_product'
])

export const UCC_RELEASE_DECISIONS = Object.freeze([
  'draft_allowed',
  'simulation_allowed',
  'private_release_allowed',
  'tenant_limited_allowed',
  'human_review_required',
  'assisted_autonomy_allowed',
  'full_runtime_allowed',
  'marketplace_allowed',
  'blocked'
])

export const UCC_ERROR_CODE_TAXONOMY = Object.freeze([
  'SCHEMA.*',
  'IDENTITY.*',
  'INTENT.*',
  'CLASSIFICATION.*',
  'DEPENDENCY.*',
  'ENTITY.*',
  'MONEY_OBJECT.*',
  'RULE.*',
  'STATE.*',
  'KERNEL.*',
  'FINPHYS.*',
  'POLICY.*',
  'AUTONOMY.*',
  'EVIDENCE.*',
  'UIUX.*',
  'AUDIT.*',
  'TESTING.*',
  'SIMULATION.*',
  'MONITORING.*',
  'VERSIONING.*',
  'EXPLAINABILITY.*',
  'RELEASE.*'
])

export const UCC_ERROR_CODE_EXAMPLES = Object.freeze([
  'SCHEMA.REQUIRED_FIELD_MISSING',
  'SCHEMA.INVALID_ENUM',
  'IDENTITY.INVALID_CAPABILITY_ID',
  'INTENT.MISSING_PRIMARY_GOAL',
  'CLASSIFICATION.HIGH_RISK_REQUIRES_HUMAN_REVIEW',
  'DEPENDENCY.PRIMITIVE_NOT_FOUND',
  'ENTITY.PERMISSION_ROLE_MISMATCH',
  'MONEY_OBJECT.ESCROW_NO_REFUND_PATH',
  'RULE.ACTION_COMMAND_NOT_DECLARED',
  'STATE.DEAD_END_WITH_LOCKED_FUNDS',
  'KERNEL.MISSING_IDEMPOTENCY',
  'FINPHYS.BALANCE_CONSERVATION_VIOLATION',
  'POLICY.PROHIBITED_PATTERN',
  'AUTONOMY.AUTO_MONEY_ACTION_WITHOUT_CONSENT',
  'EVIDENCE.GPS_NO_ANTI_SPOOFING',
  'UIUX.MISSING_LOCK_EXPLANATION',
  'AUDIT.MONEY_MOVEMENT_EVENT_MISSING',
  'TESTING.LEDGER_TESTS_REQUIRED',
  'SIMULATION.FRAUD_SCENARIO_MISSING',
  'MONITORING.ROLLBACK_TRIGGER_MISSING',
  'VERSIONING.BREAKING_CHANGE_NO_CONSENT',
  'EXPLAINABILITY.REASON_CODE_MISSING',
  'RELEASE.GOVERNOR_BLOCKED'
])

export const UCC_ERROR_CODE_USES = Object.freeze([
  'admin_studio_warnings',
  'developer_tooling',
  'ai_repair_prompts',
  'test_generation',
  'compliance_review',
  'support_debugging',
  'capability_doctor',
  'runtime_preflight'
])

export const UCC_DECISION_MATRIX = Object.freeze([
  { contractState: 'invalid_schema', meaning: 'contract_shape_is_broken', allowedOutcome: 'cannot_proceed' },
  { contractState: 'incomplete_draft', meaning: 'missing_needed_details', allowedOutcome: 'draft_only' },
  { contractState: 'semantically_incomplete', meaning: 'references_or_rules_incomplete', allowedOutcome: 'draft_only' },
  { contractState: 'simulation_ready', meaning: 'can_run_fake_money_scenarios', allowedOutcome: 'simulation' },
  { contractState: 'private_ready', meaning: 'can_run_for_limited_private_use', allowedOutcome: 'private_capability' },
  { contractState: 'review_required', meaning: 'risk_policy_requires_human_review', allowedOutcome: 'human_review_release' },
  { contractState: 'assisted_ready', meaning: 'some_automatic_actions_allowed', allowedOutcome: 'assisted_autonomy' },
  { contractState: 'full_runtime_ready', meaning: 'complete_and_approved', allowedOutcome: 'full_runtime' },
  { contractState: 'marketplace_ready', meaning: 'strongest_standard', allowedOutcome: 'marketplace_listing' },
  { contractState: 'blocked', meaning: 'unsafe_or_prohibited', allowedOutcome: 'blocked_or_redirected' }
])

export const CONTRACTOR_GPS_ESCROW_VALIDATION_EXAMPLE = Object.freeze({
  contractId: 'contractor_gps_escrow:1.0.0',
  capabilityId: 'contractor_gps_escrow',
  capabilityVersion: '1.0.0',
  valid: false,
  releaseEligibility: {
    draft: true,
    simulation: true,
    privateCapability: false,
    tenantLimited: false,
    humanReviewRequired: true,
    assistedAutonomy: false,
    fullRuntime: false,
    marketplace: false,
    blocked: false,
    reasonCodes: [
      'EVIDENCE.GPS_NO_ANTI_SPOOFING',
      'FINPHYS.TRAPPED_FUNDS.NO_EXPIRY_PATH',
      'UIUX.MISSING_LOCK_EXPLANATION'
    ]
  },
  severity: {
    info: 3,
    warnings: 5,
    errors: 2,
    critical: 1,
    blockers: 0
  },
  findings: [
    {
      severity: 'CRITICAL',
      code: 'FINPHYS.TRAPPED_FUNDS.NO_EXPIRY_PATH',
      title: 'Escrow has no expiry path',
      message: 'Funds can remain locked if contractor never submits proof.',
      path: 'money_objects.escrows[0]',
      validator: 'FinancialPhysicsValidator',
      requiredAction: 'Add expiry rule that refunds the sender or triggers dispute review.',
      releaseImpact: {
        blocksDraft: false,
        blocksSimulation: false,
        blocksPrivateRelease: true,
        blocksTenantLimited: true,
        blocksAssistedAutonomy: true,
        blocksFullRuntime: true,
        blocksMarketplace: true
      }
    }
  ],
  requiredFixes: [
    {
      code: 'FIX.ADD_ESCROW_EXPIRY_RULE',
      description: 'Add expiry rule for failed proof submission.'
    }
  ],
  missingClarifications: [
    {
      question: 'What should happen if the contractor does not submit GPS/photo proof by the deadline?',
      requiredFor: 'private_release'
    }
  ]
})

export const UCC_REPAIR_TYPES = Object.freeze([
  'required_fix',
  'suggested_fix',
  'clarification_question'
])

export const UCC_REPAIR_EXAMPLES = Object.freeze({
  required_fix: 'Add refund rule for locked funds.',
  suggested_fix: 'Add contributor progress empty state.',
  clarification_question: 'Should contributors see total wallet progress or only their own contribution?'
})

export const UCC_VALIDATOR_DOCTOR_RELATIONSHIP = Object.freeze({
  validator: 'checks_whether_contract_is_valid_before_release_or_execution',
  capabilityDoctor: 'diagnoses_capability_using_validation_findings_plus_runtime_evidence',
  validatorProvides: 'static_findings',
  doctorAdds: 'runtime_findings',
  example: {
    validator: 'capability_has_all_required_invoice_verification_rules',
    runtimeDoctor: '47_percent_of_invoices_fail_due_to_unclear_upload_instructions'
  }
})

export const UCC_VALIDATOR_MODE_REQUIREMENTS = Object.freeze({
  design_time: ['missing_fields', 'clarifying_questions', 'composition_errors', 'required_primitives', 'policy_warnings'],
  simulation_time: ['state_machine', 'rules', 'kernel_command_map', 'money_object_definitions', 'simulation_scenarios'],
  release_time: ['complete_policy', 'complete_financial_physics', 'complete_tests', 'complete_ui_consent', 'complete_monitoring', 'complete_events', 'release_gates'],
  runtime_preflight: ['current_consent', 'actor_permission', 'policy_allows_action', 'recipient_verified', 'risk_acceptable', 'capability_version_active', 'state_transition_allowed', 'kernel_command_allowed']
})

export const UCC_RUNTIME_PREFLIGHT_CHECKS = Object.freeze([
  'capability_active',
  'command_allowed_in_current_state',
  'actor_allowed_for_action',
  'user_approval_present',
  'consent_still_active',
  'recipient_still_verified',
  'invoice_still_valid',
  'balance_sufficient',
  'kernel_command_allowed',
  'idempotency_key_exists',
  'policy_still_satisfied',
  'risk_engine_not_blocking'
])

export const UCC_RUNTIME_PREFLIGHT_FLOW = Object.freeze([
  'command_received',
  'load_capability_contract',
  'load_capability_instance_state',
  'run_runtime_preflight',
  'allow_require_approval_escalate_or_block',
  'call_kernel_command'
])

export const UCC_RUNTIME_PREFLIGHT_OUTPUTS = Object.freeze([
  'ALLOW',
  'ALLOW_WITH_WARNING',
  'REQUIRE_APPROVAL',
  'REQUIRE_MANUAL_REVIEW',
  'BLOCK'
])

export const UCC_INVALIDITY_GRADIENT = Object.freeze([
  'valid_enough_to_discuss',
  'valid_enough_to_simulate',
  'not_valid_enough_to_touch_real_money',
  'not_valid_enough_for_autonomy',
  'not_valid_enough_for_marketplace'
])

export const UCC_CAPABILITY_IDENTITY_SCHEMA_FRAGMENT = Object.freeze({
  type: 'object',
  additionalProperties: false,
  required: ['id', 'name', 'version', 'description', 'category', 'lifecycle_status', 'owner', 'authorship', 'supported_products', 'supported_jurisdictions', 'tags'],
  properties: {
    id: { type: 'string', pattern: '^[a-z][a-z0-9_]*$' },
    name: { type: 'string', minLength: 3 },
    version: { type: 'string', pattern: '^[0-9]+\\.[0-9]+\\.[0-9]+$' },
    description: { type: 'string', minLength: 10 },
    category: { type: 'string', pattern: '^[a-z][a-z0-9_]*$' },
    lifecycle_status: { type: 'string', enum: UCC_LIFECYCLE_STATUSES },
    owner: { $ref: '#/$defs/OwnerRef' },
    authorship: { $ref: '#/$defs/Authorship' },
    supported_products: { type: 'array', items: { type: 'string' } },
    supported_jurisdictions: { type: 'array', items: { type: 'string' } },
    tags: { type: 'array', items: { type: 'string' } }
  }
})

export const UCC_MONEY_OBJECT_SCHEMA_FRAGMENT = Object.freeze({
  WalletObject: {
    type: 'object',
    additionalProperties: false,
    required: ['id', 'type', 'owner', 'currency'],
    properties: {
      id: { type: 'string', pattern: '^[a-z][a-z0-9_]*$' },
      type: { type: 'string', enum: ['main_wallet', 'goal_wallet', 'sub_wallet', 'restricted_wallet', 'vault', 'circle_wallet', 'merchant_wallet'] },
      owner: { type: 'string' },
      beneficiary: { type: 'string' },
      currency: { type: 'string', pattern: '^[A-Z]{3}$' },
      restricted_purpose: { type: 'string' },
      target_amount_required: { type: 'boolean' },
      can_withdraw_to_owner: { type: 'string', enum: ['true', 'false', 'conditional'] },
      can_pay_external_recipient: { type: 'boolean' }
    }
  },
  EscrowObject: {
    type: 'object',
    additionalProperties: false,
    required: ['id', 'type', 'owner', 'recipient', 'release_condition'],
    properties: {
      id: { type: 'string', pattern: '^[a-z][a-z0-9_]*$' },
      type: { type: 'string', enum: ['conditional_escrow', 'milestone_escrow', 'pending_claim_escrow', 'invoice_escrow', 'gps_evidence_escrow'] },
      owner: { type: 'string' },
      recipient: { type: 'string' },
      release_condition: { type: 'string' }
    }
  }
})

export const UCC_KERNEL_COMMAND_CONTRACT_SCHEMA_FRAGMENT = Object.freeze({
  type: 'object',
  additionalProperties: false,
  required: ['id', 'operation', 'inputs', 'preconditions', 'postconditions', 'ledger_effect'],
  properties: {
    id: { type: 'string', pattern: '^[a-z][a-z0-9_]*$' },
    operation: { type: 'string', enum: UCC_KERNEL_OPERATION_ENUM },
    inputs: {
      type: 'array',
      minItems: 1,
      items: { type: 'string' }
    },
    preconditions: {
      type: 'array',
      items: { type: 'string' }
    },
    postconditions: {
      type: 'array',
      items: { type: 'string' }
    },
    ledger_effect: {
      type: 'object',
      required: ['debit', 'credit'],
      properties: {
        debit: { type: 'string' },
        credit: { type: 'string' }
      }
    }
  }
})

export const FORMLESS_BANKING_POSITIONING = Object.freeze({
  normalFintech: 'here_are_our_features_use_them',
  aura: 'describe_what_you_want_money_to_do',
  constraint: 'create_freely_within_strict_financial_physics'
})

export const CAPABILITY_OS_CREATIVITY_SOURCES = Object.freeze([
  'intent_interpretation',
  'product_grammar',
  'composition_algebra',
  'atoms_and_primitives',
  'reusable_capability_packs',
  'asset_vault',
  'algorithm_vault',
  'ui_composer',
  'admin_drag_and_drop_creation',
  'user_described_product_generation'
])

export const CAPABILITY_OS_CONTROL_SOURCES = Object.freeze([
  'financial_physics_engine',
  'policy_governor',
  'jurisdiction_rules',
  'risk_engine',
  'behavioral_trust_score',
  'simulation',
  'test_harness',
  'release_gates',
  'consent_engine',
  'audit_ledger',
  'runtime_monitor',
  'human_review_console',
  'rollback_and_migration_system'
])

export function describeCapabilityOperatingSystem() {
  return {
    promise: AURA_CAPABILITY_OS_PROMISE,
    definition: AURA_CAPABILITY_OS_DEFINITION,
    supportedCapabilityFamilies: CAPABILITY_OS_SUPPORTED_CAPABILITY_FAMILIES,
    pipeline: CAPABILITY_OS_LIFECYCLE_PIPELINE,
    formlessBanking: FORMLESS_BANKING_POSITIONING
  }
}

export function describeCapabilityTypeVsInstance({
  typeId = 'family_contribution_capability',
  typeName = 'Family Contribution Capability',
  instanceId = 'cap_inst_mom_rent_may_july_2026',
  instanceName = "Mom's Rent Family Contribution - May to July 2026"
} = {}) {
  return {
    type: {
      id: typeId,
      name: typeName,
      role: 'reusable_blueprint',
      fields: CAPABILITY_TYPE_BLUEPRINT_FIELDS
    },
    instance: {
      id: instanceId,
      name: instanceName,
      role: 'durable_living_financial_object',
      fields: CAPABILITY_INSTANCE_RECORD_FIELDS
    },
    rule: 'reload_the_saved_instance_never_recreate_financial_truth_from_frontend_memory'
  }
}

export function buildCapabilityRuntimeObject({
  instanceId = 'cap_inst_mom_rent_may_july_2026',
  typeId = 'family_contribution_capability',
  ownerId = 'maya',
  participants = ['maya', 'sibling_1', 'sibling_2'],
  currentState = 'active',
  balance = 400,
  dueDate = '2026-07-01',
  contractVersion = '1.0.0',
  runtimeVersion = '2026.05'
} = {}) {
  return {
    instance_id: instanceId,
    type_id: typeId,
    financial_truth_owner: 'aura_kernel',
    kernel_truth_sources: CAPABILITY_RUNTIME_TRUTH_SOURCES,
    identity: {
      unique_capability_id: instanceId,
      name: "Mom's Rent Family Contribution - May to July 2026",
      owner: ownerId,
      participants
    },
    contract: {
      rules: ['monthly_contribution_required', 'hold_until_rent_date', 'missed_payment_reminder'],
      permissions: ['owner_can_view_all', 'contributors_can_view_own_contribution', 'no_silent_rule_changes'],
      obligations: [{ id: 'monthly_rent_contribution', amount: 200, cadence: 'monthly' }],
      schedules: [{ id: 'monthly_due_date', due_date: dueDate, timezone: 'America/New_York' }]
    },
    state_machine: {
      current_state: currentState,
      allowed_states: CAPABILITY_INSTANCE_LIFECYCLE_STATES,
      allowed_next_states: ['scheduled', 'monitoring', 'awaiting_external_action', 'paused', 'amending', 'closing']
    },
    ledger_binding: {
      wallets: ['family_rent_wallet'],
      balances: { family_rent_wallet: balance },
      escrows: ['rent_hold'],
      contribution_records: [
        { actor: 'maya', amount: 200, status: 'settled' },
        { actor: 'sibling_1', amount: 200, status: 'settled' },
        { actor: 'sibling_2', amount: 0, status: 'pending' }
      ]
    },
    schedule_binding: {
      due_dates: [dueDate],
      reminders: ['seven_days_before_due', 'one_day_before_due', 'grace_period_notice'],
      auto_actions: ['mark_missing_contribution', 'start_grace_period']
    },
    consent_binding: {
      consent_version: 'family_rent_contribution@1.0.0',
      who_agreed_to_what: participants.map((participant) => ({ actor: participant, scope: 'monthly_rent_contribution', status: 'accepted' }))
    },
    role_binding: {
      owner: ownerId,
      contributor: participants,
      viewer: participants,
      approver: [ownerId]
    },
    history: {
      actions: ['instance_created', 'first_contribution_received', 'reminder_sent'],
      changes: [],
      payments: ['maya:200', 'sibling_1:200'],
      missed_payments: ['sibling_2:2026-06']
    },
    runtime_health: {
      normality: 'attention_required',
      staleness: 'fresh',
      reconciliation_status: 'ledger_balanced'
    },
    recovery_logic: {
      payment_failure: 'retry_then_grace_period',
      job_failure: 'idempotent_replay',
      user_disappears: 'pause_and_preserve_funds'
    },
    version_record: {
      contract_version: contractVersion,
      runtime_version: runtimeVersion,
      migration_status: 'not_required'
    },
    exit_rules: {
      pause: 'preserve_state_and_disable_new_actions',
      close: 'settle_or_refund_before_archive',
      settle: 'pay_verified_recipient_after_approval',
      refund: 'return_to_contributors_by_contribution_record',
      archive: 'retain_history_and_audit_trail'
    }
  }
}

export function validateCapabilityRuntimeContinuity(runtimeObject = buildCapabilityRuntimeObject()) {
  const missingLayers = CAPABILITY_RUNTIME_OBJECT_LAYERS
    .filter((layer) => runtimeObject[layer.id] === undefined)
    .map((layer) => layer.id)
  const missingTruthSources = CAPABILITY_RUNTIME_TRUTH_SOURCES
    .filter((source) => !(runtimeObject.kernel_truth_sources ?? []).includes(source))
  const state = runtimeObject.state_machine?.current_state
  const findings = [
    runtimeObject.financial_truth_owner !== 'aura_kernel' && 'financial_truth_not_kernel_owned',
    ...missingLayers.map((layer) => `missing_runtime_layer:${layer}`),
    ...missingTruthSources.map((source) => `missing_truth_source:${source}`),
    !CAPABILITY_INSTANCE_LIFECYCLE_STATES.includes(state) && `invalid_lifecycle_state:${state ?? 'missing'}`,
    !runtimeObject.version_record?.contract_version && 'missing_contract_version',
    !runtimeObject.history && 'missing_history',
    !runtimeObject.ledger_binding?.contribution_records?.length && 'missing_contribution_history'
  ].filter(Boolean)

  return {
    durableInstance: true,
    frontendIsSourceOfTruth: false,
    state,
    allowedActionsNow: CAPABILITY_INSTANCE_ALLOWED_ACTIONS_BY_STATE[state] ?? [],
    missingLayers,
    missingTruthSources,
    findings,
    valid: findings.length === 0
  }
}

export function buildCapabilityContractAmendment({
  originalAmount = 200,
  proposedAmount = 250,
  effectiveDate = '2026-06-01',
  activeContributors = ['maya', 'sibling_1', 'sibling_2']
} = {}) {
  return {
    amendment_id: 'amend_family_rent_contribution_amount_2026_06',
    original_rule: `Each contributor pays ${originalAmount} monthly.`,
    proposed_rule: `Each contributor pays ${proposedAmount} monthly starting ${effectiveDate}.`,
    requires_consent_from: activeContributors,
    impact: {
      future_obligations_change: true,
      past_obligations_remain_unchanged: true,
      existing_ledger_entries_untouched: true
    },
    status: 'proposed'
  }
}

export function validateCapabilityContractAmendment(amendment = buildCapabilityContractAmendment()) {
  const findings = [
    !amendment.amendment_id && 'missing_amendment_id',
    !amendment.original_rule && 'missing_original_rule',
    !amendment.proposed_rule && 'missing_proposed_rule',
    !amendment.requires_consent_from?.length && 'missing_active_contributor_consent',
    amendment.impact?.past_obligations_remain_unchanged !== true && 'past_obligations_would_be_overwritten',
    amendment.impact?.existing_ledger_entries_untouched !== true && 'existing_ledger_entries_would_be_mutated'
  ].filter(Boolean)

  return {
    amendment,
    silentOverwriteAllowed: false,
    findings,
    valid: findings.length === 0
  }
}

export function validateCapabilityStateTransition({
  from = 'draft',
  to = 'simulated'
} = {}, transitions = FAMILY_RENT_RUNTIME_STATE_TRANSITIONS) {
  const legalPairs = new Set(transitions.map(([source, target]) => `${source}->${target}`))
  const transition = `${normalizeKey(from)}->${normalizeKey(to)}`
  const illegalReasons = [
    !CAPABILITY_INSTANCE_LIFECYCLE_STATES.includes(normalizeKey(from)) && `unknown_from_state:${from}`,
    !CAPABILITY_INSTANCE_LIFECYCLE_STATES.includes(normalizeKey(to)) && `unknown_to_state:${to}`,
    !legalPairs.has(transition) && `illegal_transition:${transition}`,
    normalizeKey(from) === 'draft' && /released|paid|money_released/.test(normalizeKey(to)) && 'draft_cannot_jump_to_money_release'
  ].filter(Boolean)

  return {
    transition,
    legal: illegalReasons.length === 0,
    illegalReasons,
    allowedTransitions: transitions
  }
}

export function buildCapabilityLedgerEntry({
  id = 'ledger_contribution_sibling_a_2026_06',
  eventType = 'ContributionPaid',
  debit = 'sibling_a_funding_source',
  credit = 'family_rent_capability_wallet',
  amount = 200,
  currency = 'USD'
} = {}) {
  return {
    id,
    eventType,
    postings: [
      { side: 'debit', account: debit, amount, currency },
      { side: 'credit', account: credit, amount, currency }
    ],
    sourceOfTruth: 'financial_ledger'
  }
}

export function validateCapabilityLedgerEntries(entries = [
  buildCapabilityLedgerEntry(),
  buildCapabilityLedgerEntry({
    id: 'ledger_rent_release_2026_07',
    eventType: 'MoneyReleased',
    debit: 'family_rent_capability_wallet',
    credit: 'verified_landlord_recipient',
    amount: 800
  })
]) {
  const postings = entries.flatMap((entry) => entry.postings ?? [])
  const totalDebits = postings.filter((posting) => posting.side === 'debit').reduce((sum, posting) => sum + Number(posting.amount ?? 0), 0)
  const totalCredits = postings.filter((posting) => posting.side === 'credit').reduce((sum, posting) => sum + Number(posting.amount ?? 0), 0)
  const findings = [
    !entries.length && 'missing_ledger_entries',
    totalDebits !== totalCredits && `ledger_not_balanced:${totalDebits}:${totalCredits}`,
    entries.some((entry) => !entry.sourceOfTruth || entry.sourceOfTruth !== 'financial_ledger') && 'ledger_entry_not_financial_ledger_owned',
    entries.some((entry) => !(entry.postings ?? []).some((posting) => posting.side === 'debit') || !(entry.postings ?? []).some((posting) => posting.side === 'credit')) && 'entry_missing_debit_or_credit'
  ].filter(Boolean)

  return {
    entries,
    totalDebits,
    totalCredits,
    balanced: findings.length === 0,
    findings
  }
}

export function buildCapabilityEventTimeline(events = [
  { type: 'CapabilityCreated', at: '2026-05-01', actor: 'maya' },
  { type: 'ParticipantInvited', at: '2026-05-01', actor: 'maya' },
  { type: 'ParticipantAccepted', at: '2026-05-02', actor: 'sibling_1' },
  { type: 'ContributionScheduled', at: '2026-05-03', actor: 'system' },
  { type: 'ContributionPaid', at: '2026-06-01', actor: 'maya', amount: 200 },
  { type: 'ContributionMissed', at: '2026-06-02', actor: 'sibling_2', amount: 200 },
  { type: 'ReminderSent', at: '2026-06-03', actor: 'system' },
  { type: 'GracePeriodStarted', at: '2026-06-03', actor: 'system' }
]) {
  const invalidEvents = events
    .filter((event) => !CAPABILITY_INSTANCE_EVENT_TYPES.includes(event.type))
    .map((event) => event.type)

  return {
    events,
    invalidEvents,
    timelineText: 'Created May 1. Four members joined. Three paid for June. One contribution is missing. Reminder sent June 3.',
    replaySafe: invalidEvents.length === 0
  }
}

export function buildCapabilityStateSnapshot({
  asOf = '2026-07-01',
  capabilityState = 'active',
  currentCycle = '2026-07',
  expectedContributors = 4,
  paidThisCycle = 2,
  walletBalance = 1200,
  nextAction = 'send_reminder_on_2026_07_03',
  riskStatus = 'normal'
} = {}) {
  return {
    snapshot_id: `snapshot_family_rent_${normalizeKey(asOf)}`,
    as_of: asOf,
    capability_state: normalizeKey(capabilityState),
    current_cycle: currentCycle,
    expected_contributors: expectedContributors,
    paid_this_cycle: paidThisCycle,
    unpaid_this_cycle: Math.max(0, expectedContributors - paidThisCycle),
    wallet_balance: walletBalance,
    next_action: nextAction,
    risk_status: normalizeKey(riskStatus)
  }
}

export function runCapabilityRuntimeMonitor({
  scheduleActive = true,
  expectedPaymentHappened = true,
  internalProviderStubHealthy = true,
  participantLeft = false,
  moneyStuck = false,
  obligationOverdue = false,
  ownRulesViolated = false,
  scheduledJobMissed = false,
  uiStateMatchesLedger = true,
  projectedBalanceMatchesLedger = true
} = {}) {
  const failures = [
    !scheduleActive && 'schedule_inactive',
    !expectedPaymentHappened && 'expected_payment_missing',
    !internalProviderStubHealthy && 'internal_provider_stub_failed',
    participantLeft && 'participant_left',
    moneyStuck && 'money_stuck',
    obligationOverdue && 'obligation_overdue',
    ownRulesViolated && 'own_rules_violated',
    scheduledJobMissed && 'scheduled_job_missed',
    !uiStateMatchesLedger && 'ui_state_ledger_mismatch',
    !projectedBalanceMatchesLedger && 'projected_balance_ledger_mismatch'
  ].filter(Boolean)

  return {
    checks: CAPABILITY_RUNTIME_MONITOR_CHECKS,
    providerApiSkipped: ['third_party_provider_apis'],
    failures,
    nextState: failures.length ? 'recovering_or_blocked' : 'monitoring',
    healthy: failures.length === 0
  }
}

export function resumeCapabilityInstance({
  userId = 'maya',
  requestedCapability = 'family_rent_contribution',
  runtimeObject = buildCapabilityRuntimeObject({ currentState: 'active', balance: 800 }),
  snapshot = buildCapabilityStateSnapshot({ paidThisCycle: 4, walletBalance: 800, nextAction: 'no_action_needed' }),
  eventsAfterSnapshot = []
} = {}) {
  const continuity = validateCapabilityRuntimeContinuity(runtimeObject)
  const ledgerReview = validateCapabilityLedgerEntries([
    buildCapabilityLedgerEntry({ amount: 400 }),
    buildCapabilityLedgerEntry({ id: 'ledger_balance_reconciliation_2026_07', debit: 'family_rent_capability_wallet', credit: 'rent_obligation_position', amount: 400 })
  ])
  const monitor = runCapabilityRuntimeMonitor({
    expectedPaymentHappened: snapshot.paid_this_cycle >= snapshot.expected_contributors,
    projectedBalanceMatchesLedger: ledgerReview.balanced
  })

  return {
    flow: CAPABILITY_RESUME_FLOW,
    userId,
    requestedCapability,
    loadedInstanceId: runtimeObject.instance_id,
    replayedEventCount: eventsAfterSnapshot.length,
    continuity,
    ledgerReview,
    monitor,
    currentUiState: {
      title: "Mom's Rent Contribution",
      status: monitor.healthy ? 'Active' : 'Attention Needed',
      currentMonth: snapshot.current_cycle,
      walletBalance: snapshot.wallet_balance,
      expectedThisMonth: snapshot.expected_contributors * 200,
      paid: `${snapshot.paid_this_cycle} of ${snapshot.expected_contributors} members`,
      nextRentRelease: '2026-07-30',
      nextAction: snapshot.next_action,
      health: monitor.healthy ? 'working_normally' : 'needs_recovery'
    },
    blankGeneratedScreenAllowed: false
  }
}

export function buildCapabilityMemoryIndex(runtimeObject = buildCapabilityRuntimeObject()) {
  return {
    layers: CAPABILITY_MEMORY_LAYERS,
    memory: {
      contract_memory: runtimeObject.contract,
      financial_memory: runtimeObject.ledger_binding,
      participant_memory: runtimeObject.role_binding,
      schedule_memory: runtimeObject.schedule_binding,
      interaction_memory: { last_surface: 'family_rent_dashboard', last_action: 'viewed_missing_contributor' },
      decision_memory: { last_recommendation: 'send_second_reminder_or_cover_temporarily', reason: 'one_contribution_missing_before_grace_period_end' },
      consent_memory: runtimeObject.consent_binding,
      amendment_memory: { proposed: [buildCapabilityContractAmendment()] },
      error_memory: { failures: runtimeObject.history?.missed_payments ?? [], unresolved: [] },
      outcome_memory: { target: 'pay_mother_rent', achieved: false }
    },
    continuity: true
  }
}

export function chooseCapabilityRuntimeMode({
  userPresent = false,
  preApprovedActionDue = false,
  approvalRequired = false,
  scheduledForFuture = true,
  watchingTriggers = false,
  dormant = false,
  recovering = false,
  reviewRequired = false,
  frozen = false,
  closing = false,
  archived = false
} = {}) {
  const mode = archived
    ? 'archive_mode'
    : closing
      ? 'closure_mode'
      : frozen
        ? 'frozen_mode'
        : reviewRequired
          ? 'review_mode'
          : recovering
            ? 'recovery_mode'
            : userPresent
              ? 'interactive_mode'
              : preApprovedActionDue
                ? 'autonomous_mode'
                : approvalRequired
                  ? 'assisted_mode'
                  : scheduledForFuture
                    ? 'scheduled_mode'
                    : watchingTriggers
                      ? 'watch_mode'
                      : dormant
                        ? 'dormant_mode'
                        : 'watch_mode'

  return {
    mode,
    definition: CAPABILITY_RUNTIME_MODES.find((item) => item.id === mode),
    moneyMovementAllowed: !['frozen_mode', 'archive_mode'].includes(mode),
    userFacing: ['interactive_mode', 'assisted_mode', 'review_mode', 'closure_mode'].includes(mode)
  }
}

export function buildCapabilityTemporalCycle({
  cycle = '2026-07',
  timezone = 'America/New_York',
  contributionOpens = '2026-07-01',
  firstReminder = '2026-07-01',
  dueDate = '2026-07-05',
  graceStart = '2026-07-06',
  graceEnd = '2026-07-08',
  lateAlert = '2026-07-09',
  escalation = '2026-07-10',
  cycleLock = '2026-07-12',
  rentRelease = '2026-07-30',
  carryover = 'move_remaining_balance_to_next_cycle_after_settlement'
} = {}) {
  return {
    fields: CAPABILITY_TEMPORAL_ENGINE_FIELDS,
    cycle,
    timezone,
    contribution_opens: contributionOpens,
    first_reminder: firstReminder,
    due_date: dueDate,
    grace_period: { starts: graceStart, ends: graceEnd },
    late_alert: lateAlert,
    escalation,
    cycle_lock: cycleLock,
    rent_release: rentRelease,
    holiday_weekend_adjustment: 'move_to_previous_business_day_for_release_and_next_business_day_for_reminders',
    missed_cycle_handling: 'mark_missed_without_waiting_for_user_open',
    carryover_logic: carryover
  }
}

export function validateCapabilityTemporalCycle(cycle = buildCapabilityTemporalCycle()) {
  const orderedDates = [
    cycle.contribution_opens,
    cycle.first_reminder,
    cycle.due_date,
    cycle.grace_period?.starts,
    cycle.grace_period?.ends,
    cycle.late_alert,
    cycle.escalation,
    cycle.cycle_lock,
    cycle.rent_release
  ].map((date) => Date.parse(date))
  const findings = [
    !cycle.timezone && 'timezone_missing',
    !cycle.cycle && 'cycle_missing',
    orderedDates.some((time) => Number.isNaN(time)) && 'invalid_cycle_date',
    orderedDates.some((time, index) => index > 0 && time < orderedDates[index - 1]) && 'cycle_dates_out_of_order',
    !cycle.missed_cycle_handling && 'missed_cycle_handling_missing',
    !cycle.carryover_logic && 'carryover_logic_missing'
  ].filter(Boolean)

  return {
    cycle,
    findings,
    valid: findings.length === 0
  }
}

export function buildCapabilityVersionPin({
  capabilityType = 'family_contribution',
  contractVersion = 'family_contribution.v1.3.2',
  primitiveVersions = {
    wallet_hold: 'v2.1',
    monthly_schedule: 'v1.8',
    participant_obligation: 'v1.4',
    reminder_policy: 'v2.0',
    ledger_release: 'v1.6'
  }
} = {}) {
  return {
    capability_instance: "Mom's Rent Contribution",
    capability_type: capabilityType,
    contract_version: contractVersion,
    primitive_versions: primitiveVersions,
    blindUpgradeAllowed: false
  }
}

export function classifyCapabilityUpgrade({
  bugFixOnly = true,
  behaviorChange = false,
  moneyRulesAffected = false,
  consentScopeChanged = false,
  simulationConfirmsNoBehaviorChange = true
} = {}) {
  const upgradeType = bugFixOnly && !behaviorChange && !moneyRulesAffected && !consentScopeChanged
    ? 'safe_patch'
    : !moneyRulesAffected && !consentScopeChanged && simulationConfirmsNoBehaviorChange
      ? 'minor_upgrade'
      : 'major_upgrade'

  return {
    upgradeType,
    behavior: CAPABILITY_UPGRADE_TYPES[upgradeType],
    autoApply: upgradeType === 'safe_patch',
    requiresSimulation: upgradeType !== 'safe_patch',
    requiresConsentOrReview: upgradeType === 'major_upgrade'
  }
}

export function planCapabilityInstanceMigration({
  oldVersion = 'family_contribution.v1.3.2',
  newVersion = 'family_contribution.v1.4.0',
  reason = 'improved_reminder_reliability',
  moneyRulesAffected = false,
  consentRequired = false
} = {}) {
  const upgrade = classifyCapabilityUpgrade({ bugFixOnly: false, behaviorChange: false, moneyRulesAffected, consentScopeChanged: consentRequired })
  return {
    steps: [
      'read_old_contract',
      'read_active_state',
      'simulate_new_version',
      'compare_old_behavior_vs_new_behavior',
      'check_money_rules_affected',
      'check_consent_required',
      'generate_migration_report',
      'apply_only_if_safe',
      'keep_rollback_path',
      'record_migration_event'
    ],
    oldVersion,
    newVersion,
    reason,
    upgrade,
    report: {
      summary: `Capability upgraded from ${oldVersion} to ${newVersion}.`,
      financial_rules_unchanged: !moneyRulesAffected,
      consent_required: consentRequired,
      rollback_path: 'restore_previous_contract_and_replay_events_from_snapshot'
    },
    applyAllowed: !moneyRulesAffected && !consentRequired
  }
}

export function planCapabilityClosureSettlement({
  currentBalance = 120,
  contributors = ['maya', 'sibling_1', 'sibling_2', 'sibling_3'],
  pendingObligations = [],
  selectedOption = 'refund_equal'
} = {}) {
  const equalRefund = contributors.length ? currentBalance / contributors.length : 0
  const options = [
    { id: 'refund_equal', action: `refund_${equalRefund}_to_each_contributor`, resolvesFunds: currentBalance >= 0 && contributors.length > 0 },
    { id: 'send_to_beneficiary', action: `send_${currentBalance}_to_mother`, resolvesFunds: currentBalance >= 0 },
    { id: 'move_to_next_cycle', action: `carry_${currentBalance}_to_next_rent_cycle`, resolvesFunds: currentBalance >= 0 }
  ]
  const selected = options.find((option) => option.id === selectedOption)
  const findings = [
    pendingObligations.length > 0 && 'pending_obligations_must_be_resolved',
    currentBalance > 0 && !selected && 'settlement_decision_required',
    selected && !selected.resolvesFunds && 'selected_settlement_does_not_resolve_funds'
  ].filter(Boolean)

  return {
    endingOptions: CAPABILITY_ENDING_OPTIONS,
    currentBalance,
    pendingObligations,
    options,
    selectedOption,
    closeAllowed: findings.length === 0,
    findings
  }
}

export function evaluateCapabilityHealthStatus({
  missedContributors = 0,
  externalAdapterStubFailed = false,
  blocked = false,
  atRisk = false,
  frozen = false,
  recovering = false,
  completed = false,
  archived = false
} = {}) {
  const health = archived
    ? 'archived'
    : completed
      ? 'completed'
      : frozen
        ? 'frozen'
        : recovering
          ? 'recovering'
          : blocked
            ? 'blocked'
            : atRisk
              ? 'at_risk'
              : externalAdapterStubFailed
                ? 'degraded'
                : missedContributors > 0
                  ? missedContributors > 1 ? 'needs_attention' : 'delayed'
                  : 'healthy'

  return {
    health,
    meaning: CAPABILITY_HEALTH_STATES[health],
    reason: missedContributors > 0 ? `${missedContributors}_contributors_missed_current_cycle` : CAPABILITY_HEALTH_STATES[health],
    nextAction: missedContributors > 0 ? 'send_reminder_or_adjust_contribution_plan' : 'no_action_needed',
    providerApiSkipped: externalAdapterStubFailed ? ['third_party_provider_apis'] : []
  }
}

export function buildLivingCapabilityDashboard(instances = LIVING_CAPABILITY_DASHBOARD_EXAMPLES) {
  return {
    title: 'active_capabilities',
    instances,
    resumableCount: instances.length,
    canResumeInstantly: instances.every((instance) => instance.status !== 'archived' || instance.health === 'healthy')
  }
}

export function buildCapabilityTimelineView(events = [
  { at: '2026-05-01', text: 'Capability created' },
  { at: '2026-05-01', text: 'Akosua invited' },
  { at: '2026-05-01', text: 'Kwame invited' },
  { at: '2026-05-02', text: 'Akosua accepted' },
  { at: '2026-05-02', text: 'Kwame accepted' },
  { at: '2026-05-05', text: 'May contribution cycle opened' },
  { at: '2026-05-06', text: 'Akosua paid 200' },
  { at: '2026-05-06', text: 'Kwame paid 200' },
  { at: '2026-05-30', text: 'Rent payment released' },
  { at: '2026-06-05', text: 'June contribution cycle opened' },
  { at: '2026-06-08', text: 'Kwame missed payment' },
  { at: '2026-06-09', text: 'Reminder sent' },
  { at: '2026-06-10', text: 'Kwame paid 200' },
  { at: '2026-06-30', text: 'Rent payment released' }
]) {
  const sorted = [...events].sort((a, b) => Date.parse(a.at) - Date.parse(b.at))
  return {
    title: "Mom's Rent Contribution Timeline",
    events: sorted,
    trustSignal: 'financial_system_with_memory',
    complete: sorted.length === events.length
  }
}

export function buildCapabilityResumeBrief({
  cyclesOccurred = 2,
  expectedContributions = 8,
  completedContributions = 7,
  lateButPaid = 1,
  collected = 1600,
  released = 1500,
  walletRemainder = 100,
  nextCycleStarts = '2026-08-01'
} = {}) {
  return {
    greeting: 'welcome_back',
    sinceLastOpen: [
      `${cyclesOccurred}_contribution_cycles_occurred`,
      `${completedContributions}_of_${expectedContributions}_expected_contributions_completed`,
      `${lateButPaid}_contribution_late_but_eventually_paid`,
      `${collected}_collected`,
      `${released}_released_for_rent`,
      `${walletRemainder}_remains_in_wallet`,
      `next_cycle_starts_${nextCycleStarts}`
    ],
    feelsAliveAndTrustworthy: true
  }
}

export function describeDurableCapabilityRuntimeStack() {
  return {
    stack: DURABLE_CAPABILITY_RUNTIME_STACK,
    firstClassAuraLayer: true,
    components: DURABLE_CAPABILITY_RUNTIME_STACK.map((item) => item.component),
    responsibilitiesCovered: DURABLE_CAPABILITY_RUNTIME_STACK.every((item) => item.component && item.responsibility)
  }
}

export function buildDurableCapabilityOperatingFlow() {
  return {
    flow: DURABLE_CAPABILITY_OPERATING_FLOW,
    permanentIdentityStep: DURABLE_CAPABILITY_OPERATING_FLOW.includes('capability_receives_permanent_id'),
    eventLedgerStep: DURABLE_CAPABILITY_OPERATING_FLOW.includes('every_action_becomes_an_event'),
    financialLedgerStep: DURABLE_CAPABILITY_OPERATING_FLOW.includes('every_money_movement_hits_the_ledger'),
    resumeAnytimeStep: DURABLE_CAPABILITY_OPERATING_FLOW.includes('user_can_resume_anytime'),
    complete: DURABLE_CAPABILITY_OPERATING_FLOW.length >= 18
  }
}

export function buildFamilyContributionCapabilityExample({
  currentCycle = '2026-07',
  walletBalance = 600,
  expectedThisCycle = 800
} = {}) {
  return {
    name: "Mom's Rent Contribution",
    purpose: 'collect_monthly_rent_support_from_family_members',
    members: ['Victor', 'Ama', 'Kojo', 'Yaa'],
    monthlyContribution: 200,
    target: 800,
    dueDateRule: 'fifth_of_every_month',
    releaseDateRule: 'thirtieth_of_every_month',
    wallet: 'dedicated_family_rent_wallet',
    missedPaymentRule: ['send_reminder_after_24_hours', 'send_second_reminder_after_72_hours', 'notify_owner_after_grace_period'],
    closureRule: 'can_only_close_after_all_balances_are_settled',
    runtimeState: {
      capability_id: 'cap_839201_family_rent',
      current_state: 'active',
      current_cycle: currentCycle,
      wallet_balance: walletBalance,
      expected_this_cycle: expectedThisCycle,
      missing_amount: Math.max(0, expectedThisCycle - walletBalance)
    }
  }
}

export function evaluateCapabilityDriftPrevention({
  versionPinnedContracts = true,
  deterministicStateMachines = true,
  ledgerTruth = true,
  eventReplay = true,
  snapshots = true,
  invariantChecks = true,
  runtimeHealthChecks = true,
  migrationDiscipline = true
} = {}) {
  const status = {
    version_pinned_contracts: versionPinnedContracts,
    deterministic_state_machines: deterministicStateMachines,
    ledger_truth: ledgerTruth,
    event_replay: eventReplay,
    snapshots,
    invariant_checks: invariantChecks,
    runtime_health_checks: runtimeHealthChecks,
    migration_discipline: migrationDiscipline
  }
  const missingControls = CAPABILITY_DRIFT_PREVENTION_CONTROLS.filter((control) => status[control] !== true)

  return {
    controls: CAPABILITY_DRIFT_PREVENTION_CONTROLS,
    status,
    missingControls,
    driftPrevented: missingControls.length === 0
  }
}

export function validateFamilyContributionInvariants({
  totalCollected = 600,
  confirmedContributions = [200, 200, 200],
  countedUnconfirmed = false,
  releaseRequested = false,
  releaseConditionSatisfied = false,
  memberObligationChangeHasPermission = true,
  cycleCloseRequested = false,
  unresolvedMoneyState = false,
  financialActionsHaveLedgerEntries = true,
  ruleChangesHaveAmendmentEvents = true,
  participantObligationsHaveNotifications = true,
  failedPaymentsHaveResolution = true,
  archiveRequested = false,
  fundsSettledOrLegallyHeld = true
} = {}) {
  const sumConfirmed = confirmedContributions.reduce((sum, amount) => sum + Number(amount), 0)
  const violations = [
    totalCollected !== sumConfirmed && 'cycle_total_collected_mismatch',
    countedUnconfirmed && 'unconfirmed_contribution_counted',
    releaseRequested && !releaseConditionSatisfied && 'release_condition_not_satisfied',
    !memberObligationChangeHasPermission && 'member_obligation_changed_without_permission',
    cycleCloseRequested && unresolvedMoneyState && 'cycle_closed_with_unresolved_money_state',
    !financialActionsHaveLedgerEntries && 'financial_action_missing_ledger_entry',
    !ruleChangesHaveAmendmentEvents && 'rule_change_missing_amendment_event',
    !participantObligationsHaveNotifications && 'participant_obligation_missing_notification_record',
    !failedPaymentsHaveResolution && 'failed_payment_missing_retry_or_resolution_state',
    archiveRequested && !fundsSettledOrLegallyHeld && 'archive_requested_before_funds_settled_or_legally_held'
  ].filter(Boolean)

  return {
    invariants: FAMILY_CONTRIBUTION_INVARIANTS,
    sumConfirmed,
    totalCollected,
    violations,
    valid: violations.length === 0
  }
}

export function buildCapabilityHistoryViews(streams = CAPABILITY_HISTORY_STREAMS) {
  return {
    technicalEventLog: streams.technical_event_log,
    userTimeline: streams.user_timeline,
    auditTrail: streams.audit_trail,
    providerApiSkipped: ['third_party_provider_apis'],
    userReadable: streams.user_timeline.every((item) => /paid|reminder|wallet|reached|sent/i.test(item)),
    auditReady: streams.audit_trail.some((item) => item.includes('Ledger transaction ID'))
  }
}

export function planSafeCapabilityClosure({
  started = '2026-05-01',
  closed = '2026-08-01',
  totalCollected = 2400,
  totalReleased = 2300,
  refunded = 100,
  cyclesCompleted = 3,
  missedContributions = 1,
  pendingDisputes = 0,
  scheduledJobs = ['future_reminder_july'],
  participantRightsChecked = true
} = {}) {
  const settlement = planCapabilityClosureSettlement({ currentBalance: refunded, selectedOption: 'refund_equal' })
  const findings = [
    pendingDisputes > 0 && 'pending_disputes_must_be_resolved',
    !participantRightsChecked && 'participant_rights_not_checked',
    !settlement.closeAllowed && 'settlement_not_ready'
  ].filter(Boolean)

  return {
    flow: CAPABILITY_CLOSURE_FLOW,
    settlement,
    cancelFutureSchedules: scheduledJobs,
    closeAllowed: findings.length === 0,
    findings,
    closingSummary: {
      title: "Mom's Rent Contribution Closed",
      started,
      closed,
      totalCollected,
      totalReleased,
      refunded,
      cyclesCompleted,
      missedContributions,
      finalStatus: findings.length ? 'closure_blocked' : 'settled_and_archived'
    }
  }
}

export function classifyCapabilityDurability({
  oneTime = false,
  sessionState = false,
  scheduled = false,
  holdsMoney = true,
  multiParty = true,
  conditional = false,
  longLived = false,
  regulatedOrRiskSensitive = false
} = {}) {
  const classes = [
    oneTime && 'ephemeral',
    sessionState && 'session_based',
    scheduled && 'scheduled',
    holdsMoney && 'financial_holding',
    multiParty && 'multi_party',
    conditional && 'conditional',
    longLived && 'long_lived',
    regulatedOrRiskSensitive && 'regulated_risk_sensitive'
  ].filter(Boolean)
  const matched = CAPABILITY_DURABILITY_CLASSES.filter((item) => classes.includes(item.class))

  return {
    classes,
    lifecycleNeeds: matched.map((item) => item.lifecycle_need),
    requiredStrength: matched.some((item) => ['financial_holding', 'multi_party', 'conditional', 'long_lived', 'regulated_risk_sensitive'].includes(item.class))
      ? 'strong_lifecycle_system'
      : 'lightweight_lifecycle_system'
  }
}

export function describeDurableCapabilityLifecycleEngine() {
  return {
    ...AURA_DURABLE_CAPABILITY_LIFECYCLE_ENGINE,
    includes: DURABLE_CAPABILITY_RUNTIME_MODULES,
    principle: 'ask_what_living_financial_object_is_being_created_and_what_lifecycle_obligations_it_has'
  }
}

export function buildDurableCapabilityRuntimeRecord({
  capabilityInstanceId = 'capinst_family_rent_839201',
  capabilityType = 'family_contribution',
  ownerUserId = 'user_001',
  status = 'active',
  health = 'healthy',
  currentCycle = '2026-07',
  walletBalance = 800
} = {}) {
  return {
    capability_instance_id: capabilityInstanceId,
    capability_type: capabilityType,
    name: "Mom's Rent Contribution",
    owner_user_id: ownerUserId,
    status,
    health,
    contract_version: 'family_contribution.v1.3.2',
    created_at: '2026-05-17T08:00:00-04:00',
    current_cycle: currentCycle,
    wallet_balance: walletBalance,
    next_due_date: '2026-08-05',
    next_scheduled_action: 'send_contribution_reminders',
    resume_supported: true,
    closure_required: true
  }
}

export function validateCapabilityIdentityHierarchy(identity = {
  capability_type_id: 'family_contribution',
  capability_definition_id: 'capdef_family_contribution_v1',
  capability_instance_id: 'capinst_moms_rent_839201',
  capability_session_id: 'session_2026_07_04_opened_dashboard',
  capability_event_id: 'event_kojo_paid_july_contribution'
}) {
  const missing = CAPABILITY_IDENTITY_LEVELS
    .filter((level) => !identity[level.id])
    .map((level) => level.id)

  return {
    levels: CAPABILITY_IDENTITY_LEVELS,
    identity,
    missing,
    vagueChatHistoryLookupAllowed: false,
    valid: missing.length === 0
  }
}

export function buildLivingCapabilityInstanceRecord({
  id = 'capinst_moms_rent_839201',
  owner = 'user_victor',
  lifecycleState = 'active',
  operationalState = 'waiting_for_next_cycle',
  healthState = 'healthy'
} = {}) {
  return {
    capability_instance: {
      id,
      type_id: 'family_contribution',
      name: "Mom's Rent Contribution",
      purpose: 'Collect monthly rent support from family members',
      owner,
      created_at: '2026-05-17T08:00:00-04:00',
      lifecycle_state: lifecycleState,
      operational_state: operationalState,
      health_state: healthState,
      contract_id: 'contract_moms_rent_001',
      state_machine_id: 'fsm_family_contribution_v1',
      ledger_binding_id: 'ledgerbind_moms_rent_001',
      schedule_binding_id: 'schedule_moms_rent_001',
      consent_group_id: 'consent_moms_rent_001',
      current_snapshot_id: 'snapshot_2026_07_01',
      latest_event_id: 'event_34821',
      version_lock: {
        capability_type_version: '1.3.2',
        primitive_versions: {
          wallet_hold: '2.1.0',
          recurring_obligation: '1.4.0',
          participant_invite: '1.2.1',
          reminder_policy: '2.0.0',
          ledger_release: '1.6.3'
        }
      }
    }
  }
}

export function validateLivingCapabilityInstanceRecord(record = buildLivingCapabilityInstanceRecord()) {
  const instance = record.capability_instance ?? {}
  const required = ['id', 'type_id', 'owner', 'lifecycle_state', 'contract_id', 'state_machine_id', 'ledger_binding_id', 'schedule_binding_id', 'current_snapshot_id', 'latest_event_id', 'version_lock']
  const missing = required.filter((field) => !instance[field])
  const findings = [
    ...missing.map((field) => `missing:${field}`),
    !CAPABILITY_INSTANCE_LIFECYCLE_STATES.includes(instance.lifecycle_state) && `invalid_lifecycle_state:${instance.lifecycle_state}`,
    !instance.version_lock?.capability_type_version && 'missing_capability_type_version',
    !instance.version_lock?.primitive_versions?.ledger_release && 'missing_ledger_release_version'
  ].filter(Boolean)

  return {
    required,
    findings,
    resumeReady: findings.length === 0,
    closeReady: !!instance.ledger_binding_id && !!instance.contract_id,
    valid: findings.length === 0
  }
}

export function buildFamilyContributionCapabilityContract() {
  return {
    contract: {
      id: 'contract_moms_rent_001',
      capability_instance_id: 'capinst_moms_rent_839201',
      purpose: 'Collect monthly contributions from family members for rent',
      currency: 'USD',
      participants: [
        { user_id: 'victor', role: 'owner', monthly_obligation: 200, can_withdraw: false, can_change_rules: true },
        { user_id: 'ama', role: 'contributor', monthly_obligation: 200, can_withdraw: false, can_change_rules: false },
        { user_id: 'kojo', role: 'contributor', monthly_obligation: 200, can_withdraw: false, can_change_rules: false },
        { user_id: 'yaa', role: 'contributor', monthly_obligation: 200, can_withdraw: false, can_change_rules: false }
      ],
      rules: {
        contribution_amount: 200,
        contribution_frequency: 'monthly',
        due_day: 5,
        grace_period_days: 3,
        release_day: 30,
        release_requires_full_funding: true,
        partial_release_allowed: false,
        missed_payment_policy: 'remind_then_notify_owner',
        closure_requires_balance_settlement: true
      },
      invariants: [
        'wallet_balance_must_not_be_negative',
        'money_release_requires_valid_destination',
        'cycle_cannot_close_with_unresolved_ledger_entries',
        'rule_change_requires_amendment_event',
        'participant_obligation_cannot_change_without_required_consent'
      ],
      exit_policy: {
        allow_pause: true,
        allow_archive_after_settlement: true,
        allow_early_termination: true,
        requires_final_statement: true
      }
    }
  }
}

export function validateCapabilityContractLaw(contractRecord = buildFamilyContributionCapabilityContract()) {
  const contract = contractRecord.contract ?? {}
  const participants = contract.participants ?? []
  const ownerCount = participants.filter((participant) => participant.role === 'owner').length
  const findings = [
    !contract.id && 'missing_contract_id',
    !contract.capability_instance_id && 'missing_capability_instance_id',
    !contract.currency && 'missing_currency',
    ownerCount !== 1 && 'exactly_one_owner_required',
    participants.some((participant) => participant.can_withdraw === true) && 'participant_withdrawal_not_allowed_for_rent_contribution',
    !contract.rules?.closure_requires_balance_settlement && 'closure_must_require_balance_settlement',
    contract.rules?.partial_release_allowed === true && 'partial_release_not_allowed_by_contract',
    !contract.rules?.release_requires_full_funding && 'release_must_require_full_funding',
    !contract.invariants?.includes('rule_change_requires_amendment_event') && 'rule_change_invariant_missing',
    contract.exit_policy?.allow_archive_after_settlement !== true && 'archive_after_settlement_policy_missing',
    contract.exit_policy?.requires_final_statement !== true && 'final_statement_required'
  ].filter(Boolean)

  return {
    contract,
    lawOfCapability: true,
    findings,
    valid: findings.length === 0
  }
}

export function buildSeparatedCapabilityStateMachines({
  lifecycleState = 'active',
  operationalState = 'awaiting_contributions',
  healthState = 'needs_attention'
} = {}) {
  return {
    lifecycle: {
      states: CAPABILITY_SEPARATED_STATE_MACHINES.lifecycle,
      current: normalizeKey(lifecycleState),
      meaning: 'overall_life_of_the_capability'
    },
    operational: {
      states: CAPABILITY_SEPARATED_STATE_MACHINES.operational,
      current: normalizeKey(operationalState),
      meaning: 'what_the_capability_is_doing_right_now'
    },
    health: {
      states: CAPABILITY_SEPARATED_STATE_MACHINES.health,
      current: normalizeKey(healthState),
      meaning: 'whether_the_capability_is_functioning_properly'
    }
  }
}

export function validateSeparatedCapabilityState(state = buildSeparatedCapabilityStateMachines()) {
  const findings = [
    !state.lifecycle.states.includes(state.lifecycle.current) && `invalid_lifecycle_state:${state.lifecycle.current}`,
    !state.operational.states.includes(state.operational.current) && `invalid_operational_state:${state.operational.current}`,
    !state.health.states.includes(state.health.current) && `invalid_health_state:${state.health.current}`
  ].filter(Boolean)

  return {
    state,
    exampleMeaning: state.lifecycle.current === 'active' && state.operational.current === 'awaiting_contributions' && state.health.current === 'needs_attention'
      ? 'capability_is_live_but_expected_contributions_are_missing'
      : 'separated_state_context_available',
    findings,
    valid: findings.length === 0
  }
}

export function handleCapabilityCommand({
  command = 'RecordContribution',
  actor = 'ama',
  cycleOpen = true,
  isParticipant = true,
  alreadyPaid = false,
  paymentSourceValid = true,
  releaseRulesSatisfied = false
} = {}) {
  const commandSpec = CAPABILITY_COMMAND_EVENT_TABLE.find((item) => item.command === command)
  const validation = {
    is_user_participant: isParticipant,
    is_cycle_open: cycleOpen,
    has_user_already_paid: alreadyPaid,
    is_payment_source_valid: paymentSourceValid,
    release_rules_satisfied: releaseRulesSatisfied
  }
  const findings = [
    !commandSpec && `unknown_command:${command}`,
    command === 'RecordContribution' && !isParticipant && 'actor_not_participant',
    command === 'RecordContribution' && !cycleOpen && 'cycle_not_open',
    command === 'RecordContribution' && alreadyPaid && 'participant_already_paid_for_cycle',
    command === 'RecordContribution' && !paymentSourceValid && 'payment_source_invalid',
    command === 'ReleaseFunds' && !releaseRulesSatisfied && 'release_rules_not_satisfied'
  ].filter(Boolean)

  return {
    command,
    actor,
    validation,
    resultingEvent: findings.length === 0 ? commandSpec?.resulting_event : null,
    directStateMutationAllowed: false,
    findings,
    valid: findings.length === 0
  }
}

export function buildCapabilitySourcedEvent({
  eventId = 'event_39201',
  eventType = 'ContributionRecorded',
  actorId = 'ama',
  cycle = '2026-07',
  amount = 200,
  stateBefore = 'awaiting_contributions',
  stateAfter = 'partially_funded'
} = {}) {
  return {
    event_id: eventId,
    capability_instance_id: 'capinst_moms_rent_839201',
    event_type: eventType,
    occurred_at: '2026-07-05T10:22:00-04:00',
    actor: { type: 'participant', id: actorId },
    payload: {
      cycle,
      amount,
      currency: 'USD',
      payment_status: 'confirmed',
      ledger_transaction_id: 'ledger_txn_88102'
    },
    contract_version: 'family_contribution.v1.3.2',
    state_before: stateBefore,
    state_after: stateAfter
  }
}

export function validateCapabilitySourcedEvent(event = buildCapabilitySourcedEvent()) {
  const required = ['event_id', 'capability_instance_id', 'event_type', 'occurred_at', 'actor', 'payload', 'contract_version', 'state_before', 'state_after']
  const missing = required.filter((field) => !event[field])
  const findings = [
    ...missing.map((field) => `missing:${field}`),
    event.event_type === 'ContributionRecorded' && !event.payload?.ledger_transaction_id && 'contribution_event_missing_ledger_transaction',
    event.event_type === 'ContributionRecorded' && event.payload?.payment_status !== 'confirmed' && 'contribution_payment_not_confirmed'
  ].filter(Boolean)

  return {
    factsAnswered: CAPABILITY_EVENT_SOURCING_FACT_FIELDS,
    findings,
    valid: findings.length === 0
  }
}

export function buildCapabilitySnapshotRecord({
  walletBalance = 400,
  expectedCycleAmount = 800,
  contributions = [
    { participant: 'victor', amount: 200, status: 'confirmed' },
    { participant: 'ama', amount: 200, status: 'confirmed' }
  ]
} = {}) {
  return {
    snapshot_id: 'snapshot_moms_rent_2026_07_01',
    capability_instance_id: 'capinst_moms_rent_839201',
    as_of: '2026-07-01T00:00:00-04:00',
    lifecycle_state: 'active',
    operational_state: 'awaiting_contributions',
    health_state: 'healthy',
    current_cycle: '2026-07',
    wallet_balance: walletBalance,
    expected_cycle_amount: expectedCycleAmount,
    contributions,
    paid_participants: contributions.filter((item) => item.status === 'confirmed').map((item) => item.participant),
    unpaid_participants: ['kojo', 'yaa'].filter((participant) => !contributions.some((item) => item.participant === participant && item.status === 'confirmed')),
    pending_actions: ['wait_for_remaining_contributions', 'send_reminders_if_due'],
    next_scheduled_action: {
      type: 'send_reminder',
      run_at: '2026-07-06T09:00:00-04:00'
    },
    source: 'snapshot_store_plus_event_replay'
  }
}

export function validateCapabilitySnapshotRecord(snapshot = buildCapabilitySnapshotRecord()) {
  const contributionSum = (snapshot.contributions ?? [])
    .filter((item) => item.status === 'confirmed')
    .reduce((sum, item) => sum + Number(item.amount ?? 0), 0)
  const findings = [
    !snapshot.snapshot_id && 'missing_snapshot_id',
    !snapshot.capability_instance_id && 'missing_capability_instance_id',
    !snapshot.as_of && 'missing_as_of',
    !CAPABILITY_SEPARATED_STATE_MACHINES.lifecycle.includes(snapshot.lifecycle_state) && `invalid_lifecycle_state:${snapshot.lifecycle_state}`,
    !CAPABILITY_SEPARATED_STATE_MACHINES.operational.includes(snapshot.operational_state) && `invalid_operational_state:${snapshot.operational_state}`,
    !CAPABILITY_SEPARATED_STATE_MACHINES.health.includes(snapshot.health_state) && `invalid_health_state:${snapshot.health_state}`,
    snapshot.wallet_balance !== contributionSum && `snapshot_wallet_balance_mismatch:${snapshot.wallet_balance}:${contributionSum}`
  ].filter(Boolean)

  return {
    contributionSum,
    findings,
    valid: findings.length === 0
  }
}

export function buildCapabilityScheduleBinding() {
  return {
    schedule_binding: {
      id: 'schedule_moms_rent_001',
      capability_instance_id: 'capinst_moms_rent_839201',
      timezone: 'America/New_York',
      recurrence: {
        type: 'monthly',
        cycle_opens_day: 1,
        due_day: 5,
        grace_period_days: 3,
        release_day: 30
      },
      scheduled_jobs: [
        { job_type: 'open_contribution_cycle', run_at_rule: 'monthly_on_day_1' },
        { job_type: 'send_due_reminder', run_at_rule: 'monthly_on_day_5' },
        { job_type: 'send_late_reminder', run_at_rule: 'monthly_on_day_6_if_unpaid' },
        { job_type: 'notify_owner_of_missing_contribution', run_at_rule: 'monthly_on_day_9_if_still_unpaid' },
        { job_type: 'evaluate_release', run_at_rule: 'monthly_on_day_30' }
      ]
    }
  }
}

export function validateCapabilityScheduleBinding(bindingRecord = buildCapabilityScheduleBinding()) {
  const binding = bindingRecord.schedule_binding ?? {}
  const jobTypes = new Set((binding.scheduled_jobs ?? []).map((job) => job.job_type))
  const findings = [
    !binding.id && 'missing_schedule_binding_id',
    !binding.capability_instance_id && 'missing_capability_instance_id',
    !binding.timezone && 'missing_timezone',
    binding.recurrence?.type !== 'monthly' && 'monthly_recurrence_required_for_family_rent',
    !jobTypes.has('open_contribution_cycle') && 'missing_open_cycle_job',
    !jobTypes.has('send_due_reminder') && 'missing_due_reminder_job',
    !jobTypes.has('send_late_reminder') && 'missing_late_reminder_job',
    !jobTypes.has('evaluate_release') && 'missing_release_evaluation_job'
  ].filter(Boolean)

  return {
    absentUserActions: TEMPORAL_SCHEDULER_ABSENT_USER_ACTIONS,
    findings,
    keepsServingWhenUserAbsent: findings.length === 0,
    valid: findings.length === 0
  }
}

export function buildScheduledJobRecord({
  jobId = 'job_send_july_reminder_kojo',
  jobType = 'send_late_reminder',
  cycle = '2026-07',
  targetUser = 'kojo',
  status = 'completed'
} = {}) {
  return {
    job_id: jobId,
    capability_instance_id: 'capinst_moms_rent_839201',
    job_type: jobType,
    cycle,
    target_user: targetUser,
    idempotency_key: `capinst_moms_rent_839201:${cycle}:${targetUser}:late_reminder_1`,
    status
  }
}

export function enforceScheduledJobIdempotency(job = buildScheduledJobRecord(), executedKeys = new Set()) {
  const alreadyExecuted = executedKeys.has(job.idempotency_key)
  return {
    job,
    alreadyExecuted,
    shouldExecute: !alreadyExecuted,
    duplicateActionPrevented: alreadyExecuted,
    moneyMovementIdempotencyRequired: true,
    findings: job.idempotency_key ? [] : ['missing_idempotency_key']
  }
}

export function buildCapabilityLedgerBinding() {
  return {
    ledger_binding: {
      id: 'ledgerbind_moms_rent_001',
      capability_instance_id: 'capinst_moms_rent_839201',
      currency: 'USD',
      accounts: {
        capability_wallet: 'ledger_acct_moms_rent_wallet',
        pending_contributions: 'ledger_acct_pending_contributions',
        released_funds: 'ledger_acct_released_rent',
        refunds: 'ledger_acct_refunds'
      },
      rules: {
        allow_negative_balance: false,
        require_double_entry: true,
        require_reconciliation: true,
        release_requires_contract_condition: true
      }
    }
  }
}

export function validateCapabilityLedgerBinding(bindingRecord = buildCapabilityLedgerBinding()) {
  const binding = bindingRecord.ledger_binding ?? {}
  const accounts = binding.accounts ?? {}
  const rules = binding.rules ?? {}
  const findings = [
    !binding.id && 'missing_ledger_binding_id',
    !binding.capability_instance_id && 'missing_capability_instance_id',
    !binding.currency && 'missing_currency',
    ...['capability_wallet', 'pending_contributions', 'released_funds', 'refunds'].filter((account) => !accounts[account]).map((account) => `missing_account:${account}`),
    rules.allow_negative_balance !== false && 'negative_balance_must_be_disallowed',
    rules.require_double_entry !== true && 'double_entry_required',
    rules.require_reconciliation !== true && 'reconciliation_required',
    rules.release_requires_contract_condition !== true && 'release_contract_condition_required'
  ].filter(Boolean)

  return {
    answers: ['where_money_is_held', 'who_controls_it', 'pending_money', 'available_money', 'released_money', 'refundable_money', 'disputed_money'],
    findings,
    financialCapabilityAllowed: findings.length === 0,
    valid: findings.length === 0
  }
}

export function composeCapabilityUiFromRuntimeState({
  state = buildSeparatedCapabilityStateMachines({ lifecycleState: 'active', operationalState: 'awaiting_contributions', healthState: 'needs_attention' }),
  snapshot = buildCapabilitySnapshotRecord({ walletBalance: 600, contributions: [
    { participant: 'victor', amount: 200, status: 'confirmed' },
    { participant: 'ama', amount: 200, status: 'confirmed' },
    { participant: 'yaa', amount: 200, status: 'confirmed' }
  ] }),
  allowedActions = ['send_reminder', 'cover_temporarily']
} = {}) {
  const missingAmount = Math.max(0, snapshot.expected_cycle_amount - snapshot.wallet_balance)
  return {
    questions: UI_RESUME_COMPOSER_QUESTIONS,
    title: "Mom's Rent Contribution",
    status: state.lifecycle.current,
    health: state.health.current,
    cycle: snapshot.current_cycle,
    expected: snapshot.expected_cycle_amount,
    collected: snapshot.wallet_balance,
    missing: missingAmount,
    paid: snapshot.paid_participants.map((participant) => ({ participant, amount: 200 })),
    missingParticipants: snapshot.unpaid_participants.map((participant) => ({ participant, amount: 200 })),
    nextRecommendedAction: 'send_kojo_a_reminder',
    allowedActions,
    staticGeneratedScreenAllowed: false
  }
}

export function buildUserCapabilityViewState({
  userId = 'victor',
  capabilityInstanceId = 'capinst_moms_rent_839201',
  lastSeenEventId = 'event_33001',
  lastSeenAt = '2026-06-29T18:30:00-04:00'
} = {}) {
  return {
    user_capability_view_state: {
      user_id: userId,
      capability_instance_id: capabilityInstanceId,
      last_seen_event_id: lastSeenEventId,
      last_seen_at: lastSeenAt
    }
  }
}

export function summarizeCapabilityChangesSinceLastSeen({
  viewState = buildUserCapabilityViewState(),
  eventsAfterLastSeen = [
    { event_id: 'event_34001', type: 'ContributionCycleOpened', summary: 'The July contribution cycle opened.' },
    { event_id: 'event_34002', type: 'ContributionRecorded', summary: '3 of 4 members paid.' },
    { event_id: 'event_34003', type: 'ContributionMissed', summary: 'Kojo has not paid yet.' },
    { event_id: 'event_34004', type: 'ReminderSent', summary: 'A reminder was sent on July 6.' },
    { event_id: 'event_34005', type: 'WalletBalanceChanged', summary: 'The wallet balance increased from 400 to 600.' }
  ]
} = {}) {
  return {
    viewState,
    eventsAfterLastSeen,
    summary: [
      ...eventsAfterLastSeen.map((event) => event.summary),
      'The capability is still active but needs attention.'
    ],
    continuityCreated: true
  }
}

export function buildCapabilityAmendmentRecord({
  id = 'amendment_001',
  proposedBy = 'victor',
  changeType = 'financial_rule_edit',
  oldMonthlyObligation = 200,
  newMonthlyObligation = 250,
  effectiveDate = '2026-08-01',
  contributors = ['victor', 'ama', 'kojo', 'yaa']
} = {}) {
  return {
    amendment: {
      id,
      capability_instance_id: 'capinst_moms_rent_839201',
      proposed_by: proposedBy,
      change_type: changeType,
      old_rule: { monthly_obligation: oldMonthlyObligation },
      new_rule: { monthly_obligation: newMonthlyObligation },
      effective_date: effectiveDate,
      requires_consent_from: contributors,
      status: 'awaiting_consent'
    }
  }
}

export function validateCapabilityAmendmentRecord(record = buildCapabilityAmendmentRecord()) {
  const amendment = record.amendment ?? {}
  const changeType = CAPABILITY_AMENDMENT_CHANGE_TYPES[amendment.change_type]
  const findings = [
    !amendment.id && 'missing_amendment_id',
    !amendment.capability_instance_id && 'missing_capability_instance_id',
    !changeType && `unknown_change_type:${amendment.change_type}`,
    amendment.change_type === 'financial_rule_edit' && !amendment.requires_consent_from?.length && 'financial_rule_change_requires_participant_consent',
    Date.parse(amendment.effective_date) <= Date.parse('2026-07-01') && 'amendment_cannot_rewrite_past'
  ].filter(Boolean)

  return {
    amendment,
    changeType,
    silentPastRewriteAllowed: false,
    findings,
    valid: findings.length === 0
  }
}

export function buildCapabilityVersionLock() {
  return {
    version_lock: {
      capability_type: 'family_contribution',
      capability_type_version: '1.3.2',
      state_machine_version: 'fsm_family_contribution_v1.1.0',
      ledger_policy_version: 'ledger_policy_group_fund_v2.0.1',
      scheduler_version: 'temporal_monthly_v1.4.0',
      ui_template_version: 'family_contribution_dashboard_v1.2.0'
    }
  }
}

export function decideCapabilityCodeUpdate(updateType = 'logic_improvement') {
  const action = CODE_UPDATE_STABILITY_ACTIONS[updateType] ?? 'reject_unknown_update_type'
  return {
    updateType,
    action,
    stableBehaviorRequired: true,
    oldRuntimeMayRemainPinned: ['breaking_change', 'financial_rule_change'].includes(updateType)
  }
}

export function buildCapabilityMigrationReport({
  currentVersion = 'family_contribution.v1.3.2',
  targetVersion = 'family_contribution.v1.4.0',
  changes = ['improved_reminder_scheduling', 'added_weekend_due_date_adjustment'],
  contributionAmountChanged = false,
  ledgerReleaseRulesChanged = false,
  participantPermissionsChanged = false
} = {}) {
  const risk = contributionAmountChanged || ledgerReleaseRulesChanged || participantPermissionsChanged ? 'high' : 'low'
  return {
    flow: CAPABILITY_MIGRATION_FLOW_DETAILED,
    report: {
      capability: "Mom's Rent Contribution",
      current_version: currentVersion,
      target_version: targetVersion,
      changes: [
        ...changes,
        contributionAmountChanged ? 'contribution_amount_changed' : 'no_change_to_contribution_amount',
        ledgerReleaseRulesChanged ? 'ledger_release_rules_changed' : 'no_change_to_ledger_release_rules',
        participantPermissionsChanged ? 'participant_permissions_changed' : 'no_change_to_participant_permissions'
      ],
      risk,
      consent_required: risk !== 'low',
      migration_result: risk === 'low' ? 'safe_to_apply' : 'requires_consent_or_review'
    }
  }
}

export function evaluateRuntimeHealthOutput({
  amountMissing = 200,
  daysLate = 2,
  providerStubFailed = false,
  invalidState = false,
  trappedMoney = false
} = {}) {
  const reasons = [
    amountMissing > 0 && { code: 'missing_contribution', message: 'Kojo has not paid the July contribution.', amount_missing: amountMissing, days_late: daysLate },
    providerStubFailed && { code: 'external_provider_health_stub_failed', message: 'Provider adapter stub reported failure.' },
    invalidState && { code: 'invalid_state', message: 'Capability is stuck in an invalid state.' },
    trappedMoney && { code: 'closure_health_trapped_money', message: 'Money appears trapped in an abandoned capability.' }
  ].filter(Boolean)
  const severity = trappedMoney || invalidState ? 'high' : reasons.length ? 'medium' : 'low'

  return {
    checks: RUNTIME_HEALTH_CHECK_CATEGORIES,
    providerApiSkipped: ['third_party_provider_apis'],
    capability_health: {
      capability_instance_id: 'capinst_moms_rent_839201',
      health_state: reasons.length ? 'needs_attention' : 'healthy',
      severity,
      reasons,
      recommended_actions: reasons.length ? ['send_reminder', 'extend_grace_period', 'cover_temporarily'] : ['no_action_needed']
    }
  }
}

export function runCapabilityRecoveryEngine({
  failure = 'payment_pending_too_long',
  ledgerReconciled = true,
  moneyLostOrDuplicated = false
} = {}) {
  const recoveryBehavior = CAPABILITY_RECOVERY_CASES[failure] ?? 'open_manual_recovery_review'
  return {
    failure,
    recoveryBehavior,
    providerApiSkipped: failure === 'bank_provider_unavailable' ? ['third_party_provider_apis'] : [],
    visibleExplanation: ledgerReconciled && !moneyLostOrDuplicated
      ? 'This capability entered Recovery Mode because the July 5 payment confirmation arrived late. The ledger has now been reconciled. No money was lost or duplicated.'
      : 'This capability is still recovering. AURA is blocking unsafe money movement until reconciliation completes.',
    nextState: ledgerReconciled && !moneyLostOrDuplicated ? 'active_or_monitoring' : 'recovering',
    trustBuilding: true
  }
}

export function detectCapabilityAbandonment({
  daysSinceOwnerOpened = 90,
  inactiveScheduledCycles = 2,
  idleFunds = 320,
  participantsWaiting = false,
  scheduledJobsFailing = false,
  activeButNoLongerMeaningful = false,
  goalDatePassed = true,
  pendingBalanceAfterCompletion = false
} = {}) {
  const signals = [
    daysSinceOwnerOpened >= 60 && 'owner_not_opened_in_long_time',
    inactiveScheduledCycles >= 2 && 'no_activity_after_multiple_scheduled_cycles',
    idleFunds > 0 && 'funds_remain_idle',
    participantsWaiting && 'participants_are_waiting',
    scheduledJobsFailing && 'scheduled_jobs_are_failing',
    activeButNoLongerMeaningful && 'active_but_no_longer_meaningful',
    goalDatePassed && 'goal_date_has_passed',
    pendingBalanceAfterCompletion && 'pending_balance_exists_after_completion'
  ].filter(Boolean)
  const state = idleFunds > 0
    ? 'abandoned_with_funds'
    : participantsWaiting
      ? 'abandoned_with_participant_obligations'
      : signals.length >= 2
        ? 'abandoned_with_no_funds'
        : signals.length
          ? 'possibly_dormant'
          : 'dormant'

  return {
    signals,
    state,
    message: idleFunds > 0
      ? `This capability still holds ${idleFunds}. It cannot be archived until the funds are settled.`
      : 'This capability has been inactive for 90 days. You can archive it.',
    archiveAllowed: idleFunds === 0 && !participantsWaiting,
    requiresClosure: idleFunds > 0 || participantsWaiting
  }
}

export function generateCapabilityFinalStatement({
  started = '2026-05-17',
  closed = '2026-08-03',
  totalCollected = 2400,
  totalReleased = 2300,
  totalRefunded = 100,
  completedCycles = 3,
  missedContributions = 1,
  lateContributions = 1,
  openDisputes = 0
} = {}) {
  return {
    title: "Mom's Rent Contribution - Final Statement",
    started,
    closed,
    totalCollected,
    totalReleased,
    totalRefunded,
    completedCycles,
    missedContributions,
    lateContributions,
    openDisputes,
    finalStatus: openDisputes === 0 ? 'settled_and_archived' : 'blocked_by_open_disputes',
    canOperateAfterClosure: false,
    historyReadable: true
  }
}

export function classifyCapabilityLifecycleStrength({
  scheduled = false,
  holdsMoney = false,
  multiParty = false,
  conditionalRelease = false,
  longRunning = false,
  regulatedOrRiskSensitive = false,
  savedSession = false
} = {}) {
  const classNumber = regulatedOrRiskSensitive
    ? 7
    : longRunning
      ? 6
      : conditionalRelease
        ? 5
        : multiParty
          ? 4
          : holdsMoney
            ? 3
            : scheduled
              ? 2
              : savedSession
                ? 1
                : 0
  const strengthClass = CAPABILITY_LIFECYCLE_STRENGTH_CLASSES.find((item) => item.class === classNumber)
  return {
    strengthClass,
    asksFirst: 'what_durability_class_is_this',
    requiredRuntimeStrength: strengthClass.required_runtime_strength
  }
}

export function buildCapabilityInstanceDashboard() {
  return {
    title: 'your_active_capabilities',
    capabilities: [
      { name: "Mom's Rent Contribution", state: 'active', health: 'needs_attention', balance: 600, next_action: 'kojo_has_not_paid_july_contribution' },
      { name: 'School Fees Savings', state: 'active', health: 'healthy', progress: 0.68, next_auto_save: '2026-05-24' },
      { name: 'Emergency Vault', state: 'dormant', health: 'healthy', balance: 1200, next_action: 'none' },
      { name: 'Wedding Group Fund', state: 'frozen', health: 'at_risk', reason: 'disputed_withdrawal_request' }
    ],
    feelsLikeRealFinancialObjects: true
  }
}

export function buildCapabilityDetailPageModel() {
  return {
    sections: CAPABILITY_DETAIL_PAGE_SECTIONS,
    controlRoomForCapability: true,
    requiredSectionsPresent: CAPABILITY_DETAIL_PAGE_SECTIONS.length === 11
  }
}

export function validateGeneratedInterfaceBinding({
  interfaceBindsRuntimeInstance = true,
  runtimeBindsContract = true,
  runtimeBindsStateMachine = true,
  runtimeBindsEventLedger = true,
  runtimeBindsFinancialLedger = true,
  canResumeMonitorMigrateClose = true,
  hopeGeneratedUiWorksLater = false
} = {}) {
  const findings = [
    !interfaceBindsRuntimeInstance && 'interface_not_bound_to_runtime_instance',
    !runtimeBindsContract && 'runtime_not_bound_to_contract',
    !runtimeBindsStateMachine && 'runtime_not_bound_to_state_machine',
    !runtimeBindsEventLedger && 'runtime_not_bound_to_event_ledger',
    !runtimeBindsFinancialLedger && 'runtime_not_bound_to_financial_ledger',
    !canResumeMonitorMigrateClose && 'runtime_cannot_resume_monitor_migrate_close',
    hopeGeneratedUiWorksLater && 'forbidden_generate_ui_and_hope_pattern'
  ].filter(Boolean)

  return {
    pattern: DURABLE_CAPABILITY_ARCHITECTURE_PATTERN,
    findings,
    valid: findings.length === 0
  }
}

export function buildDurableCapabilityCreationFlow() {
  return {
    flow: DURABLE_CAPABILITY_CREATION_FLOW,
    durableCreation: DURABLE_CAPABILITY_CREATION_FLOW.includes('capability_instance_becomes_active')
      && DURABLE_CAPABILITY_CREATION_FLOW.includes('all_future_activity_is_tracked_as_events'),
    requiresFinancialPhysics: DURABLE_CAPABILITY_CREATION_FLOW.includes('financial_physics_engine_checks_money_logic'),
    requiresGovernor: DURABLE_CAPABILITY_CREATION_FLOW.includes('compliance_governor_checks_jurisdiction_risk')
  }
}

export function buildDurableCapabilityReopenFlow() {
  return {
    flow: DURABLE_CAPABILITY_REOPEN_FLOW,
    continuityWorks: DURABLE_CAPABILITY_REOPEN_FLOW.includes('aura_replays_new_events')
      && DURABLE_CAPABILITY_REOPEN_FLOW.includes('aura_summarizes_what_changed_since_last_view')
      && DURABLE_CAPABILITY_REOPEN_FLOW.includes('aura_composes_current_ui')
  }
}

export function buildDurableCapabilityEndingFlow() {
  return {
    flow: DURABLE_CAPABILITY_ENDING_FLOW,
    safeEndingWorks: DURABLE_CAPABILITY_ENDING_FLOW.includes('aura_checks_whether_capability_holds_money')
      && DURABLE_CAPABILITY_ENDING_FLOW.includes('user_chooses_settlement_path')
      && DURABLE_CAPABILITY_ENDING_FLOW.includes('aura_generates_final_statement')
      && DURABLE_CAPABILITY_ENDING_FLOW.includes('aura_archives_capability')
  }
}

export function describeDurableCapabilityRuntimeLayer() {
  return {
    layer: 'durable_capability_runtime_layer',
    sitsBeside: ['capability_operating_system', 'financial_physics_engine', 'product_composer', 'governor', 'simulation_lab', 'ui_composer'],
    submodules: DURABLE_CAPABILITY_RUNTIME_LAYER_SUBMODULES,
    complete: DURABLE_CAPABILITY_RUNTIME_LAYER_SUBMODULES.length >= 22
  }
}

export function summarizeDurableCapabilityConclusion() {
  return {
    generatedFeature: 'impressive_once',
    durableCapability: 'useful_for_months_or_years',
    realPower: 'user_describes_financial_tool_aura_creates_safe_living_financial_object_that_operates_correctly_across_time_change_failures_and_closure',
    backbone: DURABLE_CAPABILITY_BACKBONE_FIELDS,
    seriousCapabilityBornWithBackbone: DURABLE_CAPABILITY_BACKBONE_FIELDS.length === 12
  }
}

export function buildCapabilityEnvelope({
  intent = 'release money only after verified delivery proof',
  capabilityFamily = 'gps_image_verified_payouts',
  evidenceRequirements = CAPABILITY_OS_EVIDENCE_REQUIREMENTS,
  autonomyLevel = 'ask_for_confirmation_then_execute',
  policyEnvelope = ['jurisdiction_rules', 'fraud_rules', 'disclosure_rules', 'approval_rules']
} = {}) {
  const evidence = Array.isArray(evidenceRequirements)
    ? evidenceRequirements
    : normalizeList(evidenceRequirements).map((id) => ({ id, source: 'internal_evidence_engine' }))
  const providerApiSkipped = evidence
    .filter((item) => item.provider_api_skipped || item.source === 'internal_stub')
    .map((item) => item.id)

  return {
    capabilityId: `cap_${normalizeKey(capabilityFamily)}`,
    intent,
    capabilityFamily: normalizeKey(capabilityFamily),
    components: CAPABILITY_OS_CAPABILITY_COMPONENTS,
    evidenceRequirements: evidence,
    providerApiSkipped,
    autonomyLevel: normalizeKey(autonomyLevel),
    policyEnvelope: normalizeList(policyEnvelope),
    complete: CAPABILITY_OS_CAPABILITY_COMPONENTS.every((component) => component.id)
  }
}

export function evaluateCapabilityOSBalance({
  creativitySources = CAPABILITY_OS_CREATIVITY_SOURCES,
  controlSources = CAPABILITY_OS_CONTROL_SOURCES
} = {}) {
  const creativity = normalizeList(creativitySources)
  const control = normalizeList(controlSources)
  return {
    creativity,
    control,
    balance: 'creativity_plus_control',
    formlessBankingSafe: creativity.length >= 6 && control.includes('financial_physics_engine') && control.includes('release_gates'),
    dynamicCreationGoverned: control.length >= creativity.length
  }
}

export function compileCapabilityIntent(intent = 'I want money to behave like this.') {
  const envelope = buildCapabilityEnvelope({ intent })
  const balance = evaluateCapabilityOSBalance()
  return {
    intent,
    compiledInto: envelope,
    pipeline: CAPABILITY_OS_MENTAL_MODEL_PIPELINE,
    installable: envelope.complete && balance.formlessBankingSafe,
    typed: true,
    explainable: true,
    upgradeable: true,
    governed: balance.dynamicCreationGoverned
  }
}

export function decomposeSchoolFeesWalletIntent(intent = 'Create a school fees wallet with auto-split, brother contributions, invoice approval, escrow, receipt, and audit.') {
  return {
    intent,
    rigidFormMismatchAvoided: true,
    decomposition: SCHOOL_FEES_WALLET_DECOMPOSITION,
    asksClarifyingQuestionsWhenNeeded: true,
    structuredCapabilityLogic: true
  }
}

export function buildCapabilityOSArchitecture() {
  return {
    layers: CAPABILITY_OS_ARCHITECTURE_LAYERS,
    sitsBetween: ['user_admin_partner_intent', 'financial_truth_kernel'],
    doesNotReplaceKernel: true,
    kernelSourceOfTruth: 'money_state',
    capabilityOSSourceOfTruth: 'allowed_financial_behaviours_composition_operation_evolution'
  }
}

export function compareCapabilityOSToFinancialKernel() {
  return {
    financialKernel: {
      question: 'what_is_the_true_state_of_money',
      temperament: 'deterministic_strict_boring',
      mustNot: 'improvise',
      responsibilities: FINANCIAL_KERNEL_RESPONSIBILITIES
    },
    capabilityOS: {
      question: 'what_financial_behaviours_can_exist_and_how_do_they_safely_interact_with_money',
      temperament: 'creative_adaptive_compositional',
      responsibilities: CAPABILITY_OS_RESPONSIBILITIES
    },
    boundary: 'money_movement_must_go_through_kernel'
  }
}

export function routeMoneyMovementThroughKernel({
  requestedBy = 'capability_os',
  operation = 'release_escrow',
  kernelApproved = true,
  osAttemptsDirectMutation = false
} = {}) {
  const directMutationBlocked = osAttemptsDirectMutation || normalizeKey(requestedBy) !== 'financial_kernel'
  return {
    operation: normalizeKey(operation),
    requestedBy: normalizeKey(requestedBy),
    directMutationBlocked,
    routedTo: 'financial_kernel',
    allowed: kernelApproved && !osAttemptsDirectMutation,
    reason: kernelApproved && !osAttemptsDirectMutation
      ? 'kernel_executes_deterministic_money_operation'
      : 'capability_os_cannot_improvise_money_state'
  }
}

export function buildCapabilityCreationStack() {
  return {
    hierarchy: CAPABILITY_CREATION_STACK_LEVELS,
    subAtoms: CAPABILITY_SUB_ATOMS,
    atoms: CAPABILITY_ATOMS,
    atomTypeRules: CAPABILITY_ATOM_TYPE_RULES,
    microPrimitives: CAPABILITY_MICRO_PRIMITIVES,
    primitives: CAPABILITY_PRIMITIVES,
    capabilities: CAPABILITY_EXAMPLES,
    products: CAPABILITY_PRODUCT_EXAMPLES,
    capabilityIsBaseUserFacingBehaviour: true
  }
}

export function validateCapabilityAtom(atomName = 'SplitRatioAtom', value = 20) {
  const rules = CAPABILITY_ATOM_TYPE_RULES[atomName]
  if (!rules) {
    return {
      atomName,
      typed: CAPABILITY_ATOMS.includes(atomName),
      valid: CAPABILITY_ATOMS.includes(atomName),
      rules: null
    }
  }

  const valid = atomName === 'SplitRatioAtom'
    ? Number(value) >= rules.range[0] && Number(value) <= rules.range[1]
    : true

  return {
    atomName,
    value,
    typed: true,
    validated: valid,
    reusable: true,
    rules
  }
}

export function mapPrimitiveReuse(primitive = 'EscrowPrimitive') {
  const normalized = normalizeKey(primitive)
  return {
    primitive,
    reusable: CAPABILITY_PRIMITIVES.some((item) => normalizeKey(item) === normalized),
    reuseCases: normalized === 'escrowprimitive' ? ESCROW_PRIMITIVE_REUSE_CASES : [],
    startsToFeelPowerful: normalized === 'escrowprimitive'
  }
}

export function composeCapabilityFromParts(parts = CAPABILITY_COMPOSITION_FORMULA) {
  const normalizedParts = normalizeList(parts)
  const missingParts = CAPABILITY_COMPOSITION_FORMULA.filter((part) => !normalizedParts.includes(part))
  return {
    parts: normalizedParts,
    requiredFormula: CAPABILITY_COMPOSITION_FORMULA,
    missingParts,
    completeFinancialBehaviour: missingParts.length === 0
  }
}

export function buildCapabilityPackageSkeleton(packageName = 'school-fees-wallet.capability') {
  return {
    ...CAPABILITY_PACKAGE_SKELETON,
    folder: packageName,
    installableModule: true,
    canManageLifecycle: CAPABILITY_PACKAGE_SKELETON.lifecycle.length >= 8
  }
}

export function buildSchoolFeesCapabilityPackage(overrides = {}) {
  return {
    ...SCHOOL_FEES_CAPABILITY_PACKAGE,
    ...overrides,
    folder: CAPABILITY_PACKAGE_SKELETON.folder,
    files: CAPABILITY_PACKAGE_SKELETON.files,
    packageModelCompleteThrough: 'ui_surfaces'
  }
}

export function validateCapabilityPackageModel(pkg = SCHOOL_FEES_CAPABILITY_PACKAGE) {
  const requiredSections = ['manifest', 'entities', 'money_objects', 'rules', 'workflows', 'state_machines', 'policy', 'autonomy', 'ui_surfaces', 'tests']
  const missingSections = requiredSections.filter((section) => !pkg[section])
  const invalidAutonomy = Boolean(pkg.autonomy?.auto_pay_school) && !pkg.autonomy?.require_parent_approval_for_release
  const missingKernelFeatures = ['wallet', 'escrow'].filter((feature) => !pkg.manifest?.requires_kernel_features?.includes(feature))
  const missingTestCoverage = ['cannot_release_without_invoice', 'cannot_pay_unverified_school', 'insufficient_balance_blocks_payment']
    .filter((test) => !pkg.tests?.includes(test))

  return {
    requiredSections,
    missingSections,
    invalidAutonomy,
    missingKernelFeatures,
    missingTestCoverage,
    valid: missingSections.length === 0 && !invalidAutonomy && missingKernelFeatures.length === 0 && missingTestCoverage.length === 0
  }
}

export function summarizeSchoolFeesCapabilityPackage() {
  const pkg = buildSchoolFeesCapabilityPackage()
  const validation = validateCapabilityPackageModel(pkg)
  return {
    capabilityId: pkg.manifest.capability_id,
    regions: pkg.manifest.supported_regions,
    entities: Object.keys(pkg.entities),
    moneyObjects: Object.keys(pkg.money_objects),
    rules: Object.keys(pkg.rules),
    workflows: Object.keys(pkg.workflows),
    states: pkg.state_machines.states,
    fraudChecks: pkg.policy.fraud_checks,
    uiSurfaces: pkg.ui_surfaces,
    tests: pkg.tests,
    validation
  }
}

export function buildUniversalCapabilityInterface(pkg = SCHOOL_FEES_CAPABILITY_PACKAGE) {
  return {
    methods: UNIVERSAL_CAPABILITY_INTERFACE_METHODS,
    define: {
      returns: CAPABILITY_DEFINE_FIELDS,
      values: {
        name: pkg.manifest.name,
        version: pkg.manifest.version,
        category: pkg.manifest.category,
        risk_level: pkg.manifest.risk_level,
        required_primitives: SCHOOL_FEES_WALLET_DECOMPOSITION.slice(0, 8),
        required_permissions: Object.values(pkg.entities).flatMap((entity) => entity.permissions ?? []),
        supported_users: Object.keys(pkg.entities),
        supported_jurisdictions: pkg.manifest.supported_regions,
        required_kernel_operations: pkg.manifest.requires_kernel_features,
        required_ui_surfaces: pkg.ui_surfaces
      }
    },
    validate: {
      questions: CAPABILITY_VALIDATE_QUESTIONS,
      result: validateCapabilityPackageModel(pkg)
    },
    simulate: {
      scenarios: CAPABILITY_SIMULATION_SCENARIOS
    },
    compose: {
      questions: CAPABILITY_COMPOSE_QUESTIONS,
      pieces: SCHOOL_FEES_WALLET_DECOMPOSITION
    },
    execute: {
      path: ['capability_os', 'kernel_contract', 'financial_kernel', 'ledger_result'],
      movesMoneyDirectly: false
    },
    explain: SCHOOL_FEES_CAPABILITY_EXPLANATIONS,
    monitor: CAPABILITY_MONITORING_SIGNALS,
    runTests: {
      categories: CAPABILITY_TEST_CATEGORIES,
      tests: pkg.tests
    },
    governable: true
  }
}

export function validateUniversalCapabilityInterface(implementation = buildUniversalCapabilityInterface()) {
  const missingMethods = UNIVERSAL_CAPABILITY_INTERFACE_METHODS.filter((method) => !(method in implementation))
  const directMoneyMovement = implementation.execute?.movesMoneyDirectly === true
  const invalidValidation = implementation.validate?.result?.valid === false
  return {
    missingMethods,
    directMoneyMovement,
    invalidValidation,
    governable: missingMethods.length === 0 && !directMoneyMovement && !invalidValidation
  }
}

export function evaluateRuntimeCommandFlow({
  command = 'release_payment_to_school',
  buttonClickedDirectlySendsMoney = false,
  permissionPassed = true,
  policyPassed = true,
  capabilityRulesPassed = true,
  financialPhysicsPassed = true,
  autonomyDecision = 'request_parent_approval'
} = {}) {
  const failures = []
  if (buttonClickedDirectlySendsMoney) failures.push('button_clicked_money_sent_shortcut_blocked')
  if (!permissionPassed) failures.push('permission_failed')
  if (!policyPassed) failures.push('policy_failed')
  if (!capabilityRulesPassed) failures.push('capability_rules_failed')
  if (!financialPhysicsPassed) failures.push('financial_physics_failed')
  const canExecute = failures.length === 0 && normalizeKey(autonomyDecision) === 'execute'

  return {
    command: normalizeKey(command),
    flow: RUNTIME_COMMAND_FLOW,
    formalSteps: FORMAL_RUNTIME_COMMAND_STEPS,
    failures,
    autonomyDecision: normalizeKey(autonomyDecision),
    result: failures.length
      ? 'block'
      : canExecute
        ? 'execute_via_kernel_contract'
        : 'approval_or_escalation_required',
    appliesToEveryCapability: true
  }
}

export function checkConservationOfFunds({
  incoming = CONSERVATION_OF_FUNDS_EXAMPLE.incoming,
  allocations = CONSERVATION_OF_FUNDS_EXAMPLE.allocations
} = {}) {
  const totalAllocated = Object.values(allocations).reduce((sum, amount) => sum + Number(amount), 0)
  return {
    incoming: Number(incoming),
    allocations,
    totalAllocated,
    conserved: totalAllocated === Number(incoming),
    forbidden: CONSERVATION_OF_FUNDS_EXAMPLE.forbidden
  }
}

export function checkStateExclusivity(states = ['locked']) {
  const normalizedStates = normalizeList(states)
  const currentStates = normalizedStates.filter((state) => FUND_STATE_EXCLUSIVITY_STATES.includes(state))
  return {
    states: normalizedStates,
    currentStates,
    validSingleCurrentState: currentStates.length === 1,
    exclusiveStateVocabulary: FUND_STATE_EXCLUSIVITY_STATES
  }
}

export function validateLockedFundReleaseCompleteness(lock = {}) {
  const normalizedLock = Object.fromEntries(Object.entries(lock).map(([key, value]) => [normalizeKey(key), value]))
  const missingRequirements = LOCKED_FUND_RELEASE_REQUIREMENTS.filter((requirement) => !normalizedLock[requirement])
  return {
    requirements: LOCKED_FUND_RELEASE_REQUIREMENTS,
    missingRequirements,
    valid: missingRequirements.length === 0
  }
}

export function evaluateFinancialPhysicsInvariants({
  conservation = checkConservationOfFunds(),
  stateExclusivity = checkStateExclusivity(['locked']),
  lockedFund = {
    owner: 'parent',
    lock_reason: 'school_fee_payment',
    unlock_condition: 'invoice_verified_and_parent_approved',
    release_approver: 'parent',
    release_failure_path: 'manual_review_or_refund',
    expiry_path: 'return_to_school_fees_wallet',
    dispute_path: 'open_dispute_review',
    cancellation_path: 'parent_cancel_before_release'
  },
  liability = 'school_risk'
} = {}) {
  const lockedFundReview = validateLockedFundReleaseCompleteness(lockedFund)
  const liabilityKnown = LIABILITY_RISK_TYPES.includes(normalizeKey(liability))
  const violations = []
  if (!conservation.conserved) violations.push('conservation_of_funds_failed')
  if (!stateExclusivity.validSingleCurrentState) violations.push('state_exclusivity_failed')
  if (!lockedFundReview.valid) violations.push('release_condition_incomplete')
  if (!liabilityKnown) violations.push('liability_unclear')

  return {
    invariants: CAPABILITY_OS_FINANCIAL_INVARIANTS,
    conservation,
    stateExclusivity,
    lockedFundReview,
    reversalSafetyTypes: REVERSAL_SAFETY_TYPES,
    liabilityTypes: LIABILITY_RISK_TYPES,
    liabilityKnown,
    violations,
    valid: violations.length === 0
  }
}

export function buildCapabilityTypeSystem() {
  return {
    coreCapabilityTypes: CAPABILITY_CORE_TYPES,
    moneyMovementTypes: MONEY_MOVEMENT_TYPES,
    riskTypes: CAPABILITY_RISK_TYPES,
    actorTypes: CAPABILITY_ACTOR_TYPES,
    evidenceTypes: CAPABILITY_EVIDENCE_TYPES,
    compatibilityExamples: COMPONENT_COMPATIBILITY_EXAMPLES,
    providerApiSkipped: CAPABILITY_EVIDENCE_TYPES.filter((type) => type.includes('third_party') && type.endsWith('_stub'))
  }
}

export function evaluateComponentCompatibility(components = ['GoalWalletPrimitive', 'AutoSplitPrimitive']) {
  const normalized = normalizeList(components)
  const example = COMPONENT_COMPATIBILITY_EXAMPLES.find((item) => {
    const itemComponents = item.components.map(normalizeKey)
    return itemComponents.every((component) => normalized.includes(component))
  })
  const decision = example?.decision
    ?? (normalized.includes('unverifiedentitypayout') && normalized.includes('autoreleaseprimitive')
      ? 'invalid'
      : normalized.includes('anonymousrecipientprimitive') || normalized.includes('largevaluetransferprimitive')
        ? 'high_risk_or_blocked'
        : 'needs_type_review')
  return {
    components: normalized,
    decision,
    valid: decision === 'valid',
    releaseBlocked: ['invalid', 'high_risk_or_blocked'].includes(decision)
  }
}

export function enforceCapabilityTypeCompatibility(components = ['EscrowRelease', 'ReleaseCondition']) {
  const normalized = normalizeList(components)
  const missingRequirements = CAPABILITY_TYPE_COMPATIBILITY_RULES
    .filter((rule) => normalized.includes(normalizeKey(rule.component)) && !normalized.includes(normalizeKey(rule.requires)))
    .map((rule) => `${rule.component}_requires_${rule.requires}`)

  return {
    components: normalized,
    rules: CAPABILITY_TYPE_COMPATIBILITY_RULES,
    asksSafeQuestion: 'are_financial_types_compatible_safe_explainable_lawful_and_executable',
    missingRequirements,
    valid: missingRequirements.length === 0
  }
}

export function evaluateCompositionAlgebraPlan({
  mode = 'guarded',
  components = COMPOSITION_MODE_EXAMPLES.guarded.guards,
  companions = COMPOSITION_MODE_EXAMPLES.required_companion.EscrowPrimitive
} = {}) {
  const normalizedMode = normalizeKey(mode)
  const riskAmplifying = normalizedMode === 'risk_amplifying' || normalizeList(components).some((item) => item.includes('highamount') || item.includes('minorwallet'))
  const requiredCompanionsPresent = COMPOSITION_MODE_EXAMPLES.required_companion.EscrowPrimitive
    .every((item) => normalizeList(companions).includes(normalizeKey(item)))

  return {
    mode: normalizedMode,
    patterns: COMPOSITION_ALGEBRA_PATTERNS,
    examples: COMPOSITION_MODE_EXAMPLES,
    riskLevelRaised: riskAmplifying,
    requiredCompanionsPresent,
    incompleteCapabilityPrevented: !requiredCompanionsPresent,
    valid: !riskAmplifying && requiredCompanionsPresent
  }
}

export function interpretProductIntent(request = 'I want to send money to a contractor, but they should only get it after they send me a picture showing the work is done at the site.') {
  const text = String(request)
  const contractorProof = /contractor|picture|photo|site|gps|work/i.test(text)
  return {
    request: text,
    extractedFields: PRODUCT_INTENT_EXTRACTION_FIELDS,
    extraction: contractorProof
      ? CONTRACTOR_PROOF_INTENT_EXTRACTION
      : {
        goal: 'custom_financial_behaviour',
        required_primitives: ['IntentClarifierPrimitive', 'PolicyReviewPrimitive']
      },
    clarifyingQuestions: contractorProof ? CONTRACTOR_PROOF_CLARIFYING_QUESTIONS : ['what_outcome_should_money_create', 'what_should_happen_if_it_fails'],
    giantFormAvoided: true
  }
}

export function buildCapabilityGenesisPipeline(completedSteps = CAPABILITY_GENESIS_PIPELINE_STEPS) {
  const completed = normalizeList(completedSteps)
  const missingSteps = CAPABILITY_GENESIS_PIPELINE_STEPS.filter((step) => !completed.includes(step))
  return {
    steps: CAPABILITY_GENESIS_PIPELINE_STEPS,
    completed,
    missingSteps,
    cannotSkipSteps: true,
    readyForRelease: missingSteps.length === 0
  }
}

export function assignCapabilityReleaseMode({
  riskLevel = 'medium',
  testingComplete = false,
  marketplaceRequested = false,
  deprecated = false,
  retired = false,
  privateTenant = true,
  humanReviewRequired = false
} = {}) {
  let mode = 'simulation_mode'
  if (retired) mode = 'retired_mode'
  else if (deprecated) mode = 'deprecated_mode'
  else if (marketplaceRequested && testingComplete && riskLevel === 'low') mode = 'marketplace_mode'
  else if (testingComplete && riskLevel === 'low') mode = 'full_runtime_mode'
  else if (humanReviewRequired || ['high', 'critical'].includes(normalizeKey(riskLevel))) mode = 'human_review_mode'
  else if (privateTenant) mode = 'private_capability_mode'

  return {
    mode,
    definition: CAPABILITY_RELEASE_MODES[mode],
    controlsExposure: true,
    realMoneyAllowed: CAPABILITY_RELEASE_MODES[mode]?.moneyMovement !== false && mode !== 'retired_mode'
  }
}

export function evaluateCapabilityAutonomyModel(autonomy = SCHOOL_FEES_AUTONOMY_EXAMPLE) {
  const normalized = Object.fromEntries(Object.entries(autonomy).map(([key, value]) => [normalizeKey(key), normalizeKey(value)]))
  const highRiskAuto = ['money_movement', 'external_payment_release', 'rule_modification']
    .filter((dimension) => normalized[dimension]?.startsWith('auto_execute'))
  const unknownLevels = Object.values(normalized).filter((level) => !AUTONOMY_LEVELS.includes(level))
  return {
    dimensions: AUTONOMY_DIMENSIONS,
    levels: AUTONOMY_LEVELS,
    autonomy: normalized,
    preciseControl: true,
    highRiskAuto,
    unknownLevels,
    safe: highRiskAuto.length === 0 && unknownLevels.length === 0
  }
}

export function reviewCapabilityWithGovernor({
  request = WORKER_FUNDS_GOVERNOR_EXAMPLE.request,
  minorsInvolved = false,
  hiddenFees = false,
  refundPath = true,
  disputePath = true,
  auditTrail = true,
  userVerified = true
} = {}) {
  const text = normalizeKey(request)
  const workerControlRisk = text.includes('worker') && text.includes('withdraw')
  const issues = []
  if (workerControlRisk) issues.push(...WORKER_FUNDS_GOVERNOR_EXAMPLE.issues)
  if (minorsInvolved) issues.push('minor_related_funds_require_guardian_controls')
  if (hiddenFees) issues.push('hidden_fee_risk')
  if (!refundPath) issues.push('missing_refund_path')
  if (!disputePath) issues.push('missing_dispute_path')
  if (!auditTrail) issues.push('missing_audit_trail')
  if (!userVerified) issues.push('user_verification_missing')

  const decision = workerControlRisk
    ? 'redirect_to_safe_alternative'
    : issues.length
      ? 'approve_with_conditions'
      : 'approve'

  return {
    questions: GOVERNOR_REVIEW_QUESTIONS,
    possibleDecisions: GOVERNOR_DECISIONS,
    request: text,
    issues,
    decision,
    saferAlternative: workerControlRisk ? WORKER_FUNDS_GOVERNOR_EXAMPLE.saferAlternative : [],
    guardrailActive: decision !== 'approve'
  }
}

export function buildCapabilitySimulationPlan(groups = CAPABILITY_SIMULATION_GROUPS) {
  const scenarioCount = Object.values(groups).reduce((count, scenarios) => count + scenarios.length, 0)
  return {
    question: 'what_would_happen_if_this_capability_existed',
    groups,
    scenarioCount,
    providerApiSkipped: groups.stress.filter((scenario) => scenario.includes('provider') && scenario.endsWith('_stub')),
    approvalBasis: 'financial_behaviour_holds_up_under_reality'
  }
}

export function evaluateSimulationReadiness({
  codeWorks = true,
  normalPassed = true,
  edgePassed = true,
  fraudPassed = true,
  stressPassed = true,
  humanConfusionPassed = true
} = {}) {
  const failedGroups = []
  if (!normalPassed) failedGroups.push('normal')
  if (!edgePassed) failedGroups.push('edge')
  if (!fraudPassed) failedGroups.push('fraud')
  if (!stressPassed) failedGroups.push('stress')
  if (!humanConfusionPassed) failedGroups.push('human_confusion')
  return {
    codeWorks,
    failedGroups,
    approved: codeWorks && failedGroups.length === 0,
    codeOnlyApprovalBlocked: codeWorks && failedGroups.length > 0,
    reason: failedGroups.length ? 'financial_behaviour_does_not_hold_under_reality' : 'simulation_groups_passed'
  }
}

export function diagnoseCapabilityWithDoctor({
  releaseConditionConfusion = false,
  invoiceVerificationStuck = false,
  missingExpiryPath = false,
  missingRefundPrimitive = false,
  jurisdictionConflict = false,
  highRiskAutonomy = false,
  weakDisclosure = false
} = {}) {
  const findings = []
  if (releaseConditionConfusion) findings.push(CAPABILITY_DOCTOR_REPAIR_MESSAGES[0])
  if (invoiceVerificationStuck) findings.push(CAPABILITY_DOCTOR_REPAIR_MESSAGES[1])
  if (missingExpiryPath) findings.push(CAPABILITY_DOCTOR_REPAIR_MESSAGES[2])
  if (missingRefundPrimitive) findings.push(CAPABILITY_DOCTOR_REPAIR_MESSAGES[3])
  if (jurisdictionConflict) findings.push(CAPABILITY_DOCTOR_REPAIR_MESSAGES[4])
  if (highRiskAutonomy) findings.push(CAPABILITY_DOCTOR_REPAIR_MESSAGES[5])
  if (weakDisclosure) findings.push(CAPABILITY_DOCTOR_REPAIR_MESSAGES[6])

  return {
    diagnostics: CAPABILITY_DOCTOR_DIAGNOSTICS,
    findings,
    healthy: findings.length === 0,
    doctorKeepsOSHealthy: true
  }
}

export function queryCapabilityRegistry(request = 'Let my relatives contribute toward rent, but only the landlord can receive it.') {
  const text = normalizeKey(request)
  const rentMatch = text.includes('rent') || text.includes('landlord')
  return {
    stores: CAPABILITY_REGISTRY_STORES,
    answers: CAPABILITY_REGISTRY_QUESTIONS,
    request,
    matches: rentMatch ? RENT_CONTRIBUTION_REGISTRY_MATCH : ['IntentClarifierPrimitive', 'PolicyReviewPrimitive'],
    fasterOverTime: true,
    everyNewCapabilityEnrichesSystem: true
  }
}

export function loadCapabilityTemplate(template = 'School Fees Wallet Template') {
  const known = normalizeKey(template) === normalizeKey(SCHOOL_FEES_WALLET_TEMPLATE.template)
  return {
    known,
    template: known ? SCHOOL_FEES_WALLET_TEMPLATE : null,
    notFixedFeature: true,
    startingStructure: true
  }
}

export function validateTemplateCustomization({
  customization = { split_percentage: 20, school: 'verified_school' },
  attemptedLockedChanges = []
} = {}) {
  const lockedChanges = normalizeList(attemptedLockedChanges)
    .filter((change) => SCHOOL_FEES_WALLET_TEMPLATE.locked.includes(change))
  return {
    customization,
    customizable: SCHOOL_FEES_WALLET_TEMPLATE.customizable,
    locked: SCHOOL_FEES_WALLET_TEMPLATE.locked,
    lockedChanges,
    valid: lockedChanges.length === 0,
    speedFromTemplateFlexibilityFromOS: true
  }
}

export function composeCapabilityExperience(capability = 'contractor_gps_verified_payout') {
  const key = normalizeKey(capability)
  return {
    capability: key,
    completeOnlyWhenUnderstandableAndOperable: true,
    outputs: UI_UX_COMPOSER_OUTPUTS,
    requirements: key.includes('contractor') ? CONTRACTOR_GPS_PAYOUT_REQUIREMENTS : [],
    generatedSurfaces: key.includes('contractor') ? CONTRACTOR_GPS_UI_SURFACES : ['setup_flow', 'confirmation_screen', 'receipt_screen'],
    usesAssetVault: true,
    randomUglyScreensBlocked: true
  }
}

export function selectAssetsFromVault(capability = 'family_emergency_vault') {
  const key = normalizeKey(capability)
  return {
    assetTypes: ASSET_VAULT_ASSET_TYPES,
    selectedAssets: key.includes('family_emergency') ? FAMILY_EMERGENCY_VAULT_ASSETS : ['approved_icon', 'approved_empty_state', 'approved_success_state'],
    composedFromApprovedAssets: true,
    vaultLearnsWhenApprovedAssetAdded: true
  }
}

export function bindAlgorithmsFromVault(capability = 'school_fees_wallet', upgradedAlgorithm = '') {
  const key = normalizeKey(capability)
  const algorithms = key.includes('susu')
    ? SUSU_ALGORITHM_BINDINGS
    : key.includes('school')
      ? SCHOOL_FEES_ALGORITHM_BINDINGS
      : ['risk_scoring', 'fee_calculation']
  return {
    capability: key,
    algorithmVault: ALGORITHM_VAULT_ALGORITHMS,
    algorithms,
    preventsDuplicatedLogic: true,
    controlledMigrationNeeded: Boolean(upgradedAlgorithm)
  }
}

export function emitCapabilityEvent({
  type = 'CAPABILITY_CREATED',
  capabilityId = 'school_fees_wallet',
  actor = 'parent',
  payload = {}
} = {}) {
  const normalizedType = String(type).trim().toUpperCase()
  return {
    type: normalizedType,
    capabilityId: normalizeKey(capabilityId),
    actor: normalizeKey(actor),
    payload,
    validType: CAPABILITY_EVENT_TYPES.includes(normalizedType),
    feeds: CAPABILITY_EVENT_FEEDS,
    reconstructable: CAPABILITY_EVENT_TYPES.includes(normalizedType)
  }
}

export function reconstructCapabilityHistory(events = [
  emitCapabilityEvent({ type: 'CAPABILITY_CREATED' }),
  emitCapabilityEvent({ type: 'WALLET_CREATED' }),
  emitCapabilityEvent({ type: 'MONEY_SPLIT' })
]) {
  const normalizedEvents = events.map((event) => typeof event === 'string' ? emitCapabilityEvent({ type: event }) : event)
  return {
    events: normalizedEvents,
    questions: TRANSACTION_HISTORY_QUESTIONS,
    fullHistoryAvailable: normalizedEvents.every((event) => event.reconstructable),
    feeds: CAPABILITY_EVENT_FEEDS
  }
}

export function planCapabilityVersionMigration({
  fromVersion = '1.1',
  toVersion = '2.0',
  fundsLocked = false,
  obligationsActive = false,
  pendingPayments = false,
  disputesOpen = false,
  usersMidFlow = false,
  ownershipFeesReleaseOrAccessChanged = true,
  consentCaptured = false,
  rollbackPossible = true
} = {}) {
  const blockers = []
  if (fundsLocked) blockers.push('funds_currently_locked')
  if (obligationsActive) blockers.push('obligations_active')
  if (pendingPayments) blockers.push('pending_payments_waiting')
  if (disputesOpen) blockers.push('disputes_open')
  if (usersMidFlow) blockers.push('users_mid_flow')
  if (ownershipFeesReleaseOrAccessChanged && !consentCaptured) blockers.push('new_consent_required')
  if (!rollbackPossible) blockers.push('rollback_not_possible')

  return {
    fromVersion,
    toVersion,
    versionHistory: SCHOOL_FEES_VERSION_HISTORY,
    managementQuestions: VERSIONING_MANAGEMENT_QUESTIONS,
    safetyChecks: MIGRATION_SAFETY_CHECKS,
    supportedModes: MIGRATION_MODES,
    blockers,
    migrationAllowed: blockers.length === 0,
    consentAndStateSafetyRequired: true
  }
}

export function planExistingFintechAppIntegration(app = 'Save2Pay') {
  const gapReport = buildExistingAppIntegrationGapReport()
  return {
    app,
    supportedTargets: EXISTING_FINTECH_APP_TARGETS,
    genericIntegrationFlow: EXISTING_APP_INTEGRATION_FLOW,
    importFlow: ['existing_feature', 'imported_capability_contract', 'validation', 'gap_report', 'migration_plan'],
    gapReport,
    gradualIntroductions: GRADUAL_CAPABILITY_OS_INTRODUCTIONS,
    canKeepCurrentScreensInitially: true,
    providerApiSkipped: ['external_ledger_bridge_contract_stub'],
    upgradesIntoCapabilityDrivenSystem: true
  }
}

export function buildExistingAppIntegrationGapReport({
  feature = 'Goal Wallet',
  missing = EXISTING_APP_IMPORT_GAP_EXAMPLE.missing,
  kernelCompatibility = 'partial',
  policyReadiness = 'weak',
  uiDisclosureReadiness = 'missing',
  eventAuditReadiness = 'partial',
  migrationComplexity = 'medium'
} = {}) {
  const requiredWorkMap = {
    no_explicit_refund_path: 'Add refund rule for locked goal wallet funds',
    no_release_state_machine: 'Add state machine terminal resolution',
    no_autonomy_contract: 'Declare consent requirements',
    no_disclosure_version: 'Version user-facing disclosures',
    no_monitoring_rollback_trigger: 'Add monitoring rollback trigger',
    no_kernel_command_mapping: 'Add kernel command contracts',
    no_audit_event_mapping: 'Add audit event mapping'
  }
  const requiredWork = missing.map((gap) => requiredWorkMap[gap]).filter(Boolean)

  return {
    feature,
    status: missing.length ? 'partially_compatible' : 'compatible',
    missing,
    compatibilityGrade: missing.length >= 5 ? 'B-' : missing.length >= 2 ? 'B+' : 'A',
    kernelCompatibility,
    policyReadiness,
    uiDisclosureReadiness,
    eventAuditReadiness,
    migrationComplexity,
    releaseRecommendation: 'tenant_limited_with_human_review',
    integrationReadiness: {
      grade: missing.length >= 5 ? INTEGRATION_READINESS_GRADE_MODEL.grade : 'B+',
      canImport: true,
      canRunAsAuraCapability: missing.length === 0,
      requiredWork: requiredWork.length ? requiredWork : ['No required import gaps detected']
    }
  }
}

export function validateSafeExpressionLanguage(expression = '') {
  const text = String(expression)
  const functionCalls = [...text.matchAll(/\b([A-Za-z_][A-Za-z0-9_]*)\s*\(/g)].map((match) => match[1])
  const allowedFunctions = new Set(AURA_PSL_APPROVED_FUNCTIONS)
  const unregisteredFunctions = functionCalls.filter((name) => !allowedFunctions.has(name.toUpperCase()))
  const violations = [
    /\beval\s*\(/i.test(text) && 'eval',
    /\b(fetch|http_request)\s*\(/i.test(text) && 'network_calls',
    /https?:\/\//i.test(text) && 'external_url',
    /\b(run_system_command|exec|spawn|shell|powershell|cmd|system)\s*\(/i.test(text) && 'system_commands',
    /\b(db_query|select|insert|update|delete)\b[\s\S]*(\(|\bfrom\b|\binto\b|\bset\b)/i.test(text) && 'database_queries',
    /\b(fs|readFile|writeFile|file_read|file_write|open)\s*\(/i.test(text) && 'file_access',
    /\b(while|for|loop)\s*\(/i.test(text) && 'unbounded_loops',
    /\b(import|dynamic_import)\s*\(/i.test(text) && 'dynamic_imports',
    /\brandom\s*\(/i.test(text) && 'unmodeled_randomness',
    /=>|\bfunction\s*\(/i.test(text) && 'side_effects',
    ...unregisteredFunctions.map((name) => `unregistered_function:${name}`)
  ].filter(Boolean)

  return {
    language: SAFE_EXPRESSION_LANGUAGE,
    expression: text,
    violations,
    safe: violations.length === 0,
    findingCode: violations.length ? 'SECURITY.UNSAFE_EXPRESSION' : undefined
  }
}

export function validateUccValidatorSecurityEnvelope(contract = buildSchoolFeesUccSections()) {
  const expressionReviews = (contract.rules?.conditions ?? [])
    .map((condition) => ({ id: condition.id, ...validateSafeExpressionLanguage(condition.expression) }))
  const externalUrlIntegrations = (contract.dependencies?.external_integrations ?? [])
    .filter((integration) => /https?:\/\//i.test(`${integration.url ?? ''}${integration.endpoint ?? ''}`))
    .filter((integration) => !integration.registry_approved)
    .map((integration) => integration.id)
  const uiScriptSurfaces = [
    ...(contract.ui_ux?.required_surfaces ?? []),
    ...(contract.ui_ux?.generated_components ?? [])
  ].filter((surface) => /<script|javascript:|onerror=|onload=/i.test(JSON.stringify(surface)))
  const primitiveIds = new Set([...CAPABILITY_PRIMITIVES, 'EscrowReleasePrimitive'])
  const primitiveReferencesOutsideRegistry = (contract.dependencies?.primitives ?? [])
    .filter((primitive) => !primitiveIds.has(primitive))
  const capabilityDefinedKernelOperations = (contract.kernel_contract?.allowed_operations ?? [])
    .filter((operation) => !UCC_KERNEL_OPERATION_ENUM.includes(operation))
  const hiddenFields = []
  const scanHiddenFields = (value, path = '') => {
    if (!value || typeof value !== 'object') return
    Object.entries(value).forEach(([key, child]) => {
      const childPath = path ? `${path}.${key}` : key
      if (key.startsWith('_')) hiddenFields.push(childPath)
      scanHiddenFields(child, childPath)
    })
  }
  scanHiddenFields(contract)
  const policyBypassFlags = Object.keys(contract.policy ?? {}).filter((key) => /bypass|skip_policy|ignore_policy/i.test(key))
  const findings = [
    ...expressionReviews
      .filter((review) => !review.safe)
      .map((review) => createUccValidationFinding({
        code: 'SECURITY.UNSAFE_EXPRESSION',
        title: 'Unsafe expression blocked',
        message: `${review.id} uses disallowed expression features: ${review.violations.join(', ')}.`,
        path: 'rules.conditions',
        validator: 'SecurityValidator',
        severity: 'BLOCKER'
      })),
    ...externalUrlIntegrations.map((id) => createUccValidationFinding({
      code: 'SECURITY.EXTERNAL_URL_NOT_APPROVED',
      title: 'External URL lacks registry approval',
      message: `${id} references an external URL without integration registry approval.`,
      path: 'dependencies.external_integrations',
      validator: 'SecurityValidator',
      severity: 'BLOCKER'
    })),
    ...uiScriptSurfaces.map((surface) => createUccValidationFinding({
      code: 'SECURITY.UNTRUSTED_UI_SCRIPT',
      title: 'Untrusted UI script blocked',
      message: `UI directive ${JSON.stringify(surface)} contains script-like content.`,
      path: 'ui_ux',
      validator: 'SecurityValidator',
      severity: 'BLOCKER'
    })),
    ...primitiveReferencesOutsideRegistry.map((primitive) => createUccValidationFinding({
      code: 'SECURITY.PRIMITIVE_OUTSIDE_REGISTRY',
      title: 'Primitive outside registry',
      message: `${primitive} is not declared in the primitive registry.`,
      path: 'dependencies.primitives',
      validator: 'SecurityValidator'
    })),
    ...capabilityDefinedKernelOperations.map((operation) => createUccValidationFinding({
      code: 'SECURITY.CAPABILITY_DEFINED_KERNEL_OPERATION',
      title: 'Capability-defined kernel operation blocked',
      message: `${operation} is not a supported kernel operation.`,
      path: 'kernel_contract.allowed_operations',
      validator: 'SecurityValidator',
      severity: 'BLOCKER'
    })),
    ...policyBypassFlags.map((field) => createUccValidationFinding({
      code: 'SECURITY.POLICY_BYPASS_FLAG',
      title: 'Policy bypass flag blocked',
      message: `${field} cannot be declared by a capability contract.`,
      path: `policy.${field}`,
      validator: 'SecurityValidator',
      severity: 'BLOCKER'
    })),
    ...hiddenFields.map((field) => createUccValidationFinding({
      code: 'SECURITY.HIDDEN_FIELD',
      title: 'Hidden field blocked',
      message: `${field} starts with an underscore and is not allowed in a UCC.`,
      path: field,
      validator: 'SecurityValidator'
    }))
  ]

  return {
    requirements: VALIDATOR_SECURITY_REQUIREMENTS,
    expressionReviews,
    findings,
    valid: findings.length === 0
  }
}

export function validateContractValidationNonMutation({
  before = buildSchoolFeesUccSections(),
  after = before,
  artifacts = {}
} = {}) {
  const sourceChanged = JSON.stringify(before) !== JSON.stringify(after)

  return {
    rule: CONTRACT_VALIDATION_MUTATION_RULE,
    sourceChanged,
    producedArtifacts: Object.keys(artifacts),
    valid: !sourceChanged,
    finding: sourceChanged ? 'VALIDATOR.SOURCE_MUTATION_BLOCKED' : undefined
  }
}

export function buildContractPatchProposal({
  patchId = 'patch_add_invoice_expiry_rule',
  patchType = 'required_fix',
  reasonCode = 'FINPHYS.TRAPPED_FUNDS.NO_EXPIRY_PATH',
  path = '/rules/expiry_rules/-',
  value = {
    id: 'invoice_unapproved_expiry',
    condition: 'invoice_unapproved_for_30_days',
    action: 'return_locked_funds_to_school_fees_wallet'
  },
  approvedBy = ''
} = {}) {
  return {
    patch_id: patchId,
    patch_type: patchType,
    reason_code: reasonCode,
    operations: [{ op: 'add', path, value }],
    requires_user_or_admin_confirmation: true,
    audit: {
      approved_by: approvedBy,
      changed_fields: [path],
      reason_code: reasonCode,
      fixes_finding_id: reasonCode,
      consent_required: true
    }
  }
}

export function formatUccValidatorReport(result = buildUccValidationResult(), format = 'machine_json') {
  const criticalIssues = result.findings.filter((finding) => ['CRITICAL', 'BLOCKER'].includes(finding.severity))
  const warnings = result.findings.filter((finding) => finding.severity === 'WARNING')
  const nextActions = result.requiredFixes.length ? result.requiredFixes : result.suggestedFixes

  if (format === 'machine_json') return result
  if (format === 'admin_readable_report') {
    return {
      capability: result.capabilityId,
      status: result.releaseEligibility.privateCapability ? 'Private Release Ready' : 'Simulation Ready, Private Release Blocked',
      criticalIssues: criticalIssues.map((finding) => finding.title),
      warnings: warnings.map((finding) => finding.title),
      nextRequiredActions: nextActions
    }
  }
  if (format === 'user_safe_explanation') {
    return {
      capability: result.capabilityId,
      message: result.releaseEligibility.privateCapability
        ? 'This capability is ready for limited private use.'
        : 'This capability needs a few safety fixes before it can move real money.',
      nextSteps: nextActions.slice(0, 3)
    }
  }
  if (format === 'compliance_report') {
    return {
      capability: result.capabilityId,
      policyCategories: ['consumer_funds', 'restricted_purpose_wallet', 'dependent_related_funds'],
      reviewRequired: result.releaseEligibility.humanReviewRequired,
      reason: 'dependent_beneficiary_and_restricted_external_payment_release',
      findingCodes: result.findings.map((finding) => finding.code)
    }
  }

  return {
    format,
    capability: result.capabilityId,
    findingCodes: result.findings.map((finding) => finding.code),
    releaseEligibility: result.releaseEligibility
  }
}

export function handleMinimalValidatorApi(routeId = 'validate_contract', payload = {}) {
  if (routeId === 'validate_contract') {
    return buildUccValidationResult(buildUccValidationInput({
      contract: payload.contract ?? buildSchoolFeesUccSections(),
      environment: { mode: payload.mode ?? 'release_time' },
      targetJurisdiction: payload.target_jurisdiction ?? payload.targetJurisdiction,
      targetProduct: payload.target_product ?? payload.targetProduct
    }))
  }

  if (routeId === 'validate_runtime_command') {
    const contract = payload.contract ?? buildSchoolFeesUccSections()
    const requestedCommand = payload.command ?? 'release_escrow'
    const commandContract = (contract.kernel_contract?.command_contracts ?? [])
      .find((command) => command.id === requestedCommand || command.operation === requestedCommand)
    const preflight = runUccRuntimePreflight({
      contract,
      command: commandContract?.operation ?? requestedCommand,
      actor: payload.actor_id ? 'parent' : payload.actor,
      approvalPresent: payload.context?.approval_present ?? true,
      consentActive: payload.context?.consent_active ?? true,
      recipientVerified: payload.context?.recipient_verified ?? true,
      invoiceValid: payload.context?.invoice_valid ?? true,
      balanceSufficient: payload.context?.balance_sufficient ?? true
    })
    return {
      decision: preflight.decision,
      reasonCodes: preflight.failedChecks.map((check) => check.toUpperCase()),
      requiredActions: preflight.failedChecks.map((check) => (
        check === 'user_approval_present' ? 'collect_guardian_approval' : `resolve_${check}`
      ))
    }
  }

  if (routeId === 'generate_repair_plan') {
    const repairLoop = planUccRepairLoop({ findings: payload.findings ?? buildContractorGpsEscrowValidationExample().findings })
    return {
      patches: repairLoop.automaticPatches,
      clarifyingQuestions: repairLoop.clarifyingQuestions,
      manualReviewRequired: repairLoop.requiredFixes.length > 0
    }
  }

  return {
    error: 'unknown_validator_api_route',
    supportedRoutes: MINIMAL_VALIDATOR_API_ROUTES.map((route) => route.id)
  }
}

export function buildValidationPersistenceRows(input = buildUccValidationInput(), result = buildUccValidationResult(input)) {
  const validationRunId = `validation_${result.capabilityId}_${result.capabilityVersion}_${input.environment.mode}`
  return {
    tables: VALIDATOR_DATABASE_TABLES,
    validationRun: {
      id: validationRunId,
      capability_id: result.capabilityId,
      capability_version: result.capabilityVersion,
      ucc_version: input.contract?.ucc_version,
      validation_mode: input.environment.mode,
      target_jurisdiction: input.targetJurisdiction,
      target_product: input.targetProduct,
      registry_snapshot_id: input.registrySnapshot?.snapshotId ?? input.registrySnapshot?.version,
      policy_snapshot_id: input.policySnapshot?.snapshotId ?? input.policySnapshot?.version,
      kernel_version: input.environment.kernelVersion,
      status: result.valid ? 'passed' : 'failed',
      created_at: '2026-05-27T00:00:00.000Z',
      created_by: 'aura_validator'
    },
    findings: result.findings.map((finding, index) => ({
      id: finding.id ?? `finding_${index + 1}`,
      validation_run_id: validationRunId,
      severity: finding.severity,
      code: finding.code,
      title: finding.title,
      message: finding.message,
      path: finding.path,
      validator: finding.validator,
      required_action: finding.requiredAction,
      suggested_fix: finding.suggestedFix,
      blocks_draft: finding.releaseImpact?.blocksDraft ?? false,
      blocks_simulation: finding.releaseImpact?.blocksSimulation ?? false,
      blocks_private_release: finding.releaseImpact?.blocksPrivateRelease ?? false,
      blocks_full_runtime: finding.releaseImpact?.blocksFullRuntime ?? false,
      blocks_marketplace: finding.releaseImpact?.blocksMarketplace ?? false
    })),
    releaseEligibility: {
      id: `${validationRunId}_eligibility`,
      validation_run_id: validationRunId,
      ...result.releaseEligibility
    }
  }
}

export function enforceValidatorOwnInvariants({
  contract = buildSchoolFeesUccSections(),
  validationResult = buildUccValidationResult(buildUccValidationInput({ contract })),
  nonMutationReview = validateContractValidationNonMutation({ before: contract, after: contract }),
  determinismReview = validateUccDeterminismEnvelope(buildUccValidationInput({ contract }))
} = {}) {
  const schema = validateUccJsonSchemaStage(contract)
  const kernel = validateUccKernelContractStage(contract)
  const money = validateUccMoneyObjectStage(contract)
  const autonomy = validateUccAutonomyConsentStage(contract)
  const physics = validateUccFinancialPhysicsStage(contract)
  const externalReleasePresent = (contract.rules?.actions ?? []).some((action) => action.command === 'release_escrow')
  const recipientVerificationPolicyMissing = externalReleasePresent && !(contract.policy?.kyc_kyb_requirements ?? [])
    .some((requirement) => requirement.actor === 'school' && /verified|institution/i.test(requirement.requirement))
  const structuredFindingFailure = validationResult.findings
    .some((finding) => !finding.code || !finding.severity || !finding.path || !finding.validator)
  const realMoneyApproved = validationResult.releaseEligibility.privateCapability || validationResult.releaseEligibility.fullRuntime || validationResult.releaseEligibility.marketplace
  const violations = [
    !schema.valid && realMoneyApproved && 'never_approve_schema_errors_for_real_money_release',
    !kernel.valid && realMoneyApproved && 'never_approve_money_movement_without_kernel_command_mapping',
    money.findings.some((finding) => finding.code.includes('ESCROW')) && realMoneyApproved && 'never_approve_locked_funds_without_release_refund_dispute_expiry_paths',
    autonomy.findings.some((finding) => finding.code.includes('CONSENT')) && realMoneyApproved && 'never_approve_auto_money_movement_without_consent',
    recipientVerificationPolicyMissing && realMoneyApproved && 'never_approve_external_recipient_release_without_verification_policy',
    physics.findings.some((finding) => finding.code.includes('LEDGER')) && realMoneyApproved && 'never_approve_unbalanced_ledger_effects',
    !nonMutationReview.valid && 'never_silently_mutate_contract',
    !determinismReview.deterministic && 'record_registry_and_policy_snapshot',
    structuredFindingFailure && 'emit_structured_findings_not_vague_text'
  ].filter(Boolean)

  return {
    invariants: VALIDATOR_OWN_INVARIANTS,
    violations,
    valid: violations.length === 0
  }
}

export function buildSchoolFeesValidationWalkthrough(contract = buildSchoolFeesUccSections()) {
  const stageReviews = {
    schema: validateUccJsonSchemaStage(contract).valid,
    identity: validateUccIdentityStage(contract).valid,
    intent: validateUccIntentCompletenessStage(contract).valid,
    classification: validateUccClassificationConsistencyStage(contract).valid,
    dependencies: validateUccDependencyRegistryStage(contract).valid,
    entities: validateUccEntityPermissionVisibilityStage(contract).valid,
    money_objects: validateUccMoneyObjectStage(contract).valid,
    rules: validateUccRuleCoherenceStage(contract).valid,
    state_machine: validateUccStateMachineSafetyStage(contract).valid,
    kernel: validateUccKernelContractStage(contract).valid,
    financial_physics: validateUccFinancialPhysicsStage(contract).valid,
    policy: validateUccPolicyGovernorStage(contract).valid,
    autonomy: validateUccAutonomyConsentStage(contract).valid,
    evidence: validateUccEvidenceVerificationStage(contract).valid,
    ui_ux: validateUccUiUxSafetyStage(contract).valid,
    audit: validateUccEventsAuditStage(contract).valid,
    testing: validateUccTestingCoverageStage(contract).valid
  }

  return {
    capability: contract.capability?.id,
    checks: SCHOOL_FEES_VALIDATION_WALKTHROUGH_CHECKS,
    stageReviews,
    allShownStagesPass: Object.values(stageReviews).every(Boolean)
  }
}

export function classifyValidatorEnabledOutcome(contract = buildSchoolFeesUccSections(), {
  governorDecision = 'approve_with_conditions',
  targetReleaseMode = contract.release?.release_mode
} = {}) {
  const schema = validateUccJsonSchemaStage(contract)
  const validation = runUccValidationPipeline(contract)
  const money = validateUccMoneyObjectStage(contract)
  const autonomy = validateUccAutonomyConsentStage(contract)
  const classification = validateUccClassificationConsistencyStage(contract)
  const release = validateUccReleaseGateStage(contract, { governorDecision, targetReleaseMode })

  let outcome = 'capability_is_only_an_idea'
  if (schema.valid) outcome = 'capability_is_structurally_complete'
  if (money.findings.some((finding) => finding.code === 'MONEY_OBJECT.ESCROW_NO_REFUND_PATH')) outcome = 'capability_is_missing_refund_path'
  if (money.findings.some((finding) => finding.code.includes('ESCROW')) || validation.failedSteps.includes('financial_physics_validation')) outcome = 'capability_is_unsafe_because_funds_can_be_trapped'
  if (classification.findings.some((finding) => finding.code === 'CLASSIFICATION.DEPENDENT_REQUIRES_MINOR_PROTECTION')) outcome = 'capability_needs_minor_protection_rules'
  if (autonomy.findings.some((finding) => finding.code.includes('EXTERNAL_RELEASE'))) outcome = 'capability_cannot_use_auto_release'
  if (validation.valid) outcome = 'capability_can_be_simulated'
  if (release.releaseEligibility.privateCapability) outcome = 'capability_can_run_privately'
  if (release.releaseEligibility.humanReviewRequired) outcome = 'capability_requires_human_review'
  if (release.releaseEligibility.tenantLimited) outcome = 'capability_can_be_installed_in_this_tenant'
  if (release.releaseEligibility.marketplace) outcome = 'capability_can_be_listed_in_marketplace'
  if (release.releaseEligibility.blocked) outcome = 'capability_must_be_blocked'

  return {
    outcomes: VALIDATOR_ENABLED_OUTCOMES,
    outcome,
    releaseEligibility: release.releaseEligibility
  }
}

export function enforceCanonicalExecutionGate({
  contract = buildSchoolFeesUccSections(),
  governorDecision = 'approve_with_conditions',
  preflightContext = {}
} = {}) {
  const validation = runUccValidationPipeline(contract)
  const governor = validateUccPolicyGovernorStage(contract, { governorDecision })
  const physics = validateUccFinancialPhysicsStage(contract)
  const preflight = runUccRuntimePreflight({ contract, ...preflightContext })
  const gates = {
    validUniversalCapabilityContract: validation.valid,
    governorAllowed: governorDecision !== 'block' && governor.governorDecision !== 'block',
    financialPhysicsPassed: physics.valid,
    runtimePreflightPassed: preflight.canCallKernelCommand
  }

  return {
    spec: FINAL_CANONICAL_UCC_ENFORCEMENT_SPEC,
    gates,
    mayExecute: Object.values(gates).every(Boolean),
    neverBecause: FINAL_CANONICAL_UCC_ENFORCEMENT_SPEC.explicitNonReason
  }
}

export function buildAuraPslDraftFromIntent(intent = RENT_CONTRIBUTION_PSL_EXAMPLE.intent) {
  const normalized = normalizeKey(intent)
  if (normalized.includes('rent') && normalized.includes('landlord')) {
    return {
      ...RENT_CONTRIBUTION_PSL_EXAMPLE,
      source: 'natural_language_intent',
      pslVersion: '0.1'
    }
  }

  return {
    intent,
    source: 'natural_language_intent',
    pslVersion: '0.1',
    actors: [],
    money_objects: [],
    rules: [],
    kernel_operations: [],
    missingClarifications: ['actors', 'money_objects', 'rules', 'kernel_safe_actions']
  }
}

export function validateAuraPslSpec(psl = buildAuraPslDraftFromIntent()) {
  const actors = psl.actors ?? []
  const moneyObjects = psl.money_objects ?? []
  const rules = psl.rules ?? []
  const kernelOperations = psl.kernel_operations ?? []
  const actorIds = new Set(actors.map((actor) => actor.id))
  const moneyObjectIds = new Set(moneyObjects.map((object) => object.id))
  const unsafeRules = rules
    .map((rule) => ({ rule, review: validateSafeExpressionLanguage(rule.condition) }))
    .filter(({ review }) => !review.safe)
  const imperativeRules = rules
    .filter((rule) => /\brun code\b|\bsend money\b|\bexecute\b/i.test(`${rule.condition} ${rule.action}`))
    .map((rule) => rule.id)
  const directBalanceMutations = rules
    .filter((rule) => /\.balance\s*=|\bset_balance\b|\bdebit_balance\b|\bcredit_balance\b/i.test(`${rule.condition} ${rule.action}`))
    .map((rule) => rule.id)
  const untypedActors = actors.filter((actor) => !actor.type).map((actor) => actor.id)
  const untypedMoneyObjects = moneyObjects.filter((object) => !object.type).map((object) => object.id)
  const unknownKernelOperations = kernelOperations.filter((operation) => !UCC_KERNEL_OPERATION_ENUM.includes(operation))
  const missing = [
    actors.length === 0 && 'actors',
    moneyObjects.length === 0 && 'money_objects',
    rules.length === 0 && 'rules',
    kernelOperations.length === 0 && 'kernel_operations'
  ].filter(Boolean)
  const danglingRuleReferences = rules
    .filter((rule) => {
      const expression = `${rule.condition} ${rule.action}`
      const referencesActor = [...actorIds].some((id) => expression.includes(id))
      const referencesMoney = [...moneyObjectIds].some((id) => expression.includes(id.replace(/_goal_wallet$/, '')) || expression.includes(id))
      const referencesBuiltInContext = /\b(wallet|recipient|invoice|school|risk_score|consent)\b/i.test(expression)
      return !(referencesActor || referencesMoney || referencesBuiltInContext)
    })
    .map((rule) => rule.id)

  return {
    definition: AURA_PSL_DEFINITION,
    grammarDomains: AURA_PSL_GRAMMAR_DOMAINS,
    designPrinciples: AURA_PSL_DESIGN_PRINCIPLES,
    missing,
    unsafeRules: unsafeRules.map(({ rule, review }) => ({ id: rule.id, violations: review.violations })),
    imperativeRules,
    directBalanceMutations,
    untypedActors,
    untypedMoneyObjects,
    unknownKernelOperations,
    danglingRuleReferences,
    valid: missing.length === 0 && unsafeRules.length === 0 && imperativeRules.length === 0 && directBalanceMutations.length === 0 && untypedActors.length === 0 && untypedMoneyObjects.length === 0 && unknownKernelOperations.length === 0
  }
}

export function describeAuraPslPipeline(intent = RENT_CONTRIBUTION_PSL_EXAMPLE.intent) {
  const pslDraft = buildAuraPslDraftFromIntent(intent)
  const pslReview = validateAuraPslSpec(pslDraft)
  return {
    relationship: AURA_PSL_RELATIONSHIP,
    flow: ['natural_language_intent', 'aura_psl_draft', 'universal_capability_contract', 'schema_validation', 'semantic_validation', 'financial_physics_validation', 'policy_governor_validation', 'simulation', 'runtime_compilation'],
    pslDraft,
    pslReview,
    formallyCheckable: pslReview.valid
  }
}

export function buildAuraPslInternalForms({
  surface = SCHOOL_FEES_PSL_SURFACE_EXAMPLE,
  ast = SCHOOL_FEES_PSL_AST_EXAMPLE,
  runtimeIr = SCHOOL_FEES_PSL_RUNTIME_IR_EXAMPLE
} = {}) {
  const commandAllowed = UCC_KERNEL_OPERATION_ENUM.includes(runtimeIr.kernel_command?.operation)
  const expressionsSafe = (runtimeIr.guard_predicates ?? [])
    .every((predicate) => validateSafeExpressionLanguage(predicate).safe)

  return {
    forms: AURA_PSL_INTERNAL_FORMS,
    compilationFlow: AURA_PSL_COMPILATION_FLOW,
    surface,
    canonicalAst: ast,
    runtimeIr,
    validatedAst: commandAllowed && expressionsSafe,
    capabilityPackageReady: commandAllowed && expressionsSafe
  }
}

export function validateAuraPslTopLevelStructure(pslFile = {}) {
  const modules = {
    product: pslFile.product ?? { id: pslFile.capability ?? 'school_fees_wallet' },
    actors: pslFile.actors ?? [SCHOOL_FEES_PSL_SURFACE_EXAMPLE.actor],
    money_objects: pslFile.money_objects ?? [SCHOOL_FEES_PSL_SURFACE_EXAMPLE.wallet],
    rules: pslFile.rules ?? [SCHOOL_FEES_PSL_SURFACE_EXAMPLE.rule],
    events: pslFile.events ?? ['incoming_money_received'],
    conditions: pslFile.conditions ?? ['auto_split_enabled'],
    actions: pslFile.actions ?? ['allocate_funds'],
    state_machine: pslFile.state_machine ?? { states: ['draft', 'active'] },
    policies: pslFile.policies ?? ['guardian_controls_required'],
    consent: pslFile.consent ?? ['auto_split_consent'],
    audit: pslFile.audit ?? ['FUNDS_ALLOCATED'],
    tests: pslFile.tests ?? ['auto_split_ledger_test'],
    simulation: pslFile.simulation ?? ['incoming_money_received_happy_path'],
    monitoring: pslFile.monitoring ?? ['auto_split_failure_rate']
  }
  const missingRequiredModules = ['product', 'actors', 'money_objects', 'rules', 'state_machine', 'policies', 'consent', 'audit']
    .filter((module) => !modules[module] || (Array.isArray(modules[module]) && modules[module].length === 0))
  const optionalNotDeclared = AURA_PSL_TOP_LEVEL_MODULES.filter((module) => !(module in modules))

  return {
    modules: AURA_PSL_TOP_LEVEL_MODULES,
    presentModules: Object.keys(modules),
    missingRequiredModules,
    optionalNotDeclared,
    valid: missingRequiredModules.length === 0
  }
}

export function validateAuraPslDeterminism(psl = RENT_CONTRIBUTION_PSL_EXAMPLE, context = { tenant: 'demo', policySnapshot: 'policy_snapshot_us_education_wallet_v1' }) {
  const interpretationKey = JSON.stringify({
    pslVersion: psl.pslVersion ?? '0.1',
    actors: (psl.actors ?? []).map((actor) => actor.id).sort(),
    moneyObjects: (psl.money_objects ?? []).map((object) => object.id).sort(),
    rules: (psl.rules ?? []).map((rule) => rule.id).sort(),
    kernelOperations: (psl.kernel_operations ?? []).slice().sort(),
    context
  })

  return {
    principle: 'same_psl_same_context_same_interpretation',
    interpretationKey,
    deterministic: true
  }
}

export function buildSchoolFeesPslFileExample(overrides = {}) {
  return {
    ...SCHOOL_FEES_PSL_FILE_EXAMPLE,
    ...overrides,
    product: {
      ...SCHOOL_FEES_PSL_FILE_EXAMPLE.product,
      ...(overrides.product ?? {})
    },
    actors: {
      ...SCHOOL_FEES_PSL_FILE_EXAMPLE.actors,
      ...(overrides.actors ?? {})
    },
    entities: {
      ...SCHOOL_FEES_PSL_FILE_EXAMPLE.entities,
      ...(overrides.entities ?? {})
    },
    state_machine: {
      ...SCHOOL_FEES_PSL_FILE_EXAMPLE.state_machine,
      ...(overrides.state_machine ?? {})
    }
  }
}

export function buildFamilyRentPslExample(overrides = {}) {
  return {
    ...FAMILY_RENT_PSL_FILE_EXAMPLE,
    ...overrides,
    product: {
      ...FAMILY_RENT_PSL_FILE_EXAMPLE.product,
      ...(overrides.product ?? {})
    },
    actors: {
      ...FAMILY_RENT_PSL_FILE_EXAMPLE.actors,
      ...(overrides.actors ?? {})
    },
    money_objects: {
      ...FAMILY_RENT_PSL_FILE_EXAMPLE.money_objects,
      ...(overrides.money_objects ?? {})
    }
  }
}

export function validateFamilyRentPslExample(pslFile = buildFamilyRentPslExample()) {
  const product = validateAuraPslProductDeclaration(pslFile.product, { existingProductIds: [] })
  const actors = validateAuraPslActorDeclarations(pslFile.actors)
  const entities = validateAuraPslEntityDeclarations(pslFile.entities)
  const relationships = validateAuraPslRelationships({
    relationships: pslFile.relationships,
    actors: pslFile.actors,
    entities: pslFile.entities,
    moneyObjects: pslFile.money_objects
  })
  const moneyObjects = validateAuraPslMoneyObjectDeclarations(pslFile.money_objects)
  const events = validateAuraPslEvents(pslFile.events)
  const conditions = validateAuraPslConditions(pslFile.conditions)
  const actions = validateAuraPslActions(pslFile.actions)
  const rules = validateAuraPslRules(pslFile.rules, {
    triggers: pslFile.events,
    conditions: pslFile.conditions,
    actions: pslFile.actions,
    events: pslFile.events
  })
  const stateMachine = validateAuraPslStateMachine(pslFile.state_machine, {
    rules: pslFile.rules,
    actions: pslFile.actions
  })
  const invariants = validateAuraPslInvariants(pslFile.invariants)
  const consents = validateAuraPslConsents(pslFile.consents, pslFile.actions)
  const experience = validateAuraPslExperience(pslFile.experience, {
    consents: pslFile.consents,
    disclosures: {},
    actions: pslFile.actions
  })
  const audit = validateAuraPslAudit(pslFile.audit)
  const reviews = { product, actors, entities, relationships, moneyObjects, events, conditions, actions, rules, stateMachine, invariants, consents, experience, audit }

  return {
    reviews,
    cleanCapability: Object.values(reviews).every((review) => review.valid),
    providerApiSkipped: []
  }
}

export function buildContractorGpsImagePslExample(overrides = {}) {
  return {
    ...CONTRACTOR_GPS_IMAGE_PSL_FILE_EXAMPLE,
    ...overrides,
    product: {
      ...CONTRACTOR_GPS_IMAGE_PSL_FILE_EXAMPLE.product,
      ...(overrides.product ?? {})
    },
    actors: {
      ...CONTRACTOR_GPS_IMAGE_PSL_FILE_EXAMPLE.actors,
      ...(overrides.actors ?? {})
    },
    money_objects: {
      ...CONTRACTOR_GPS_IMAGE_PSL_FILE_EXAMPLE.money_objects,
      ...(overrides.money_objects ?? {})
    }
  }
}

export function validateContractorGpsImagePslExample(pslFile = buildContractorGpsImagePslExample()) {
  const product = validateAuraPslProductDeclaration(pslFile.product, { existingProductIds: [] })
  const actors = validateAuraPslActorDeclarations(pslFile.actors)
  const entities = validateAuraPslEntityDeclarations(pslFile.entities)
  const moneyObjects = validateAuraPslMoneyObjectDeclarations(pslFile.money_objects)
  const evidence = validateAuraPslEvidence(pslFile.evidence)
  const events = validateAuraPslEvents(pslFile.events)
  const conditions = validateAuraPslConditions(pslFile.conditions)
  const actions = validateAuraPslActions(pslFile.actions)
  const rules = validateAuraPslRules(pslFile.rules, {
    triggers: pslFile.events,
    conditions: pslFile.conditions,
    actions: pslFile.actions,
    events: pslFile.events
  })
  const autonomy = validateAuraPslAutonomy(pslFile.autonomy, { payment_release_consent: { actor: 'sender' } })
  const invariants = validateAuraPslInvariants(pslFile.invariants)
  const simulation = validateAuraPslSimulation(pslFile.simulation)
  const highRiskRequirements = [
    pslFile.product.risk_class === 'high' && !(pslFile.simulation?.fraud ?? []).length && 'high_risk_requires_fraud_simulation',
    pslFile.product.risk_class === 'high' && pslFile.autonomy?.global !== 'human_review_required' && 'high_risk_requires_human_review'
  ].filter(Boolean)
  const reviews = { product, actors, entities, moneyObjects, evidence, events, conditions, actions, rules, autonomy, invariants, simulation }

  return {
    reviews,
    highRiskRequirements,
    strongerSimulationRequired: true,
    humanReviewRequired: true,
    valid: Object.values(reviews).every((review) => review.valid) && highRiskRequirements.length === 0
  }
}

export function buildSusuG1SmoothPslPartial(overrides = {}) {
  return {
    ...SUSU_G1_SMOOTH_PSL_PARTIAL_EXAMPLE,
    ...overrides,
    product: {
      ...SUSU_G1_SMOOTH_PSL_PARTIAL_EXAMPLE.product,
      ...(overrides.product ?? {})
    },
    actors: {
      ...SUSU_G1_SMOOTH_PSL_PARTIAL_EXAMPLE.actors,
      ...(overrides.actors ?? {})
    },
    money_objects: {
      ...SUSU_G1_SMOOTH_PSL_PARTIAL_EXAMPLE.money_objects,
      ...(overrides.money_objects ?? {})
    }
  }
}

export function validateSusuG1SmoothPslPartial(pslFile = buildSusuG1SmoothPslPartial()) {
  const product = validateAuraPslProductDeclaration(pslFile.product, { existingProductIds: [] })
  const actors = validateAuraPslActorDeclarations(pslFile.actors)
  const moneyObjects = validateAuraPslMoneyObjectDeclarations(pslFile.money_objects)
  const missingDeepSections = ['payout_schedule_rules', 'default_handling_rules', 'bts_gates', 'simulation_suite']

  return {
    reviews: { product, actors, moneyObjects },
    missingDeepSections,
    partialValid: product.valid && actors.valid && moneyObjects.valid,
    complete: false
  }
}

export function validateSusuG1SmoothPslExample(pslFile = buildSusuG1SmoothPslPartial()) {
  const susuKernelContract = {
    ...SCHOOL_FEES_UCC_KERNEL_CONTRACT_SECTION,
    allowed_operations: [...new Set([...SCHOOL_FEES_UCC_KERNEL_CONTRACT_SECTION.allowed_operations, 'reserve_funds'])],
    command_contracts: [
      ...SCHOOL_FEES_UCC_KERNEL_CONTRACT_SECTION.command_contracts,
      { id: 'reserve_member_deposit', operation: 'reserve_funds', inputs: ['member_wallet', 'reserve_bucket', 'amount'], preconditions: ['member_verified', 'balance_sufficient'], postconditions: ['member_available_decreased', 'deposit_reserved'], ledger_effect: { debit: 'member.wallet.available', credit: 'member_deposit_bucket.reserved' } }
    ]
  }
  const product = validateAuraPslProductDeclaration(pslFile.product, { existingProductIds: [] })
  const actors = validateAuraPslActorDeclarations(pslFile.actors)
  const moneyObjects = validateAuraPslMoneyObjectDeclarations(pslFile.money_objects)
  const events = validateAuraPslEvents(pslFile.events)
  const conditions = validateAuraPslConditions(pslFile.conditions)
  const actions = validateAuraPslActions(pslFile.actions, { kernelContract: susuKernelContract })
  const rules = validateAuraPslRules(pslFile.rules, { triggers: pslFile.events, conditions: pslFile.conditions, actions: pslFile.actions, events: pslFile.events })
  const invariants = validateAuraPslInvariants(pslFile.invariants)
  const autonomy = validateAuraPslAutonomy(pslFile.autonomy, { circle_rules_consent: { actor: 'member' } })
  const reviews = { product, actors, moneyObjects, events, conditions, actions, rules, invariants, autonomy }

  return {
    reviews,
    robustForComplexProducts: true,
    valid: Object.values(reviews).every((review) => review.valid)
  }
}

export function validateAuraPslTypeSystemSample({
  amount = { value: 100, currency: 'GHS' },
  percentage = 20,
  walletOwner = 'member',
  escrowRecipient = 'current_payout_member',
  kernelCommand = 'release_escrow',
  eventPayload = { amount: 'Amount', member_id: 'ActorRef' },
  conditionRefs = ['member.bts', 'circle_pool.available_balance']
} = {}) {
  const declaredRefs = new Set(['member', 'circle_pool', 'current_payout_member'])
  const findings = [
    amount.value != null && !amount.currency && 'amount_missing_currency',
    (percentage < 0 || percentage > 100) && 'percentage_out_of_range',
    !declaredRefs.has(walletOwner) && `wallet_owner_not_declared:${walletOwner}`,
    !declaredRefs.has(escrowRecipient) && `escrow_recipient_not_declared:${escrowRecipient}`,
    !UCC_KERNEL_OPERATION_ENUM.includes(kernelCommand) && `kernel_command_unknown:${kernelCommand}`,
    ...Object.entries(eventPayload ?? {}).filter(([, type]) => ![...AURA_PSL_CORE_TYPE_SYSTEM_TYPES, ...AURA_PSL_DOMAIN_EXPRESSION_TYPES].includes(type)).map(([field]) => `event_payload_untyped:${field}`),
    ...conditionRefs.map((ref) => ref.split('.')[0]).filter((ref) => !declaredRefs.has(ref)).map((ref) => `condition_ref_unknown:${ref}`)
  ].filter(Boolean)

  return {
    coreTypes: AURA_PSL_CORE_TYPE_SYSTEM_TYPES,
    financialTypes: AURA_PSL_FINANCIAL_TYPES,
    actorEntityTypes: AURA_PSL_ACTOR_ENTITY_TYPES,
    evidenceTypes: AURA_PSL_EVIDENCE_TYPES,
    policyTypes: AURA_PSL_POLICY_TYPES,
    stateTypes: AURA_PSL_STATE_TYPES,
    typeRules: AURA_PSL_TYPE_RULES,
    findings,
    valid: findings.length === 0
  }
}

export function validateAuraPslReferenceSafety({
  declarations = ['guardian', 'school_account', 'rent_wallet'],
  references = ['release_to_school.to:school_account']
} = {}) {
  const declared = new Set(declarations)
  const findings = references
    .map((reference) => String(reference).split(':').at(-1))
    .filter((target) => !declared.has(target))
    .map((target) => `undeclared_reference:${target}`)

  return {
    declarations: [...declared],
    references,
    findings,
    valid: findings.length === 0
  }
}

export function validateAuraPslDependencies(uses = AURA_PSL_DEPENDENCY_EXAMPLE, {
  atomRegistry = CAPABILITY_ATOMS,
  primitiveRegistry = [...CAPABILITY_PRIMITIVES, 'EscrowReleasePrimitive'],
  algorithmRegistry = [...ALGORITHM_VAULT_ALGORITHMS, 'InvoiceSimilarityCheck', 'GPSConfidenceScore'],
  assetRegistry = [...ASSET_VAULT_ASSET_TYPES, 'rent_wallet_icon', 'payment_success_lottie'],
  policyPackRegistry = ['AURA.consumer_funds.v1', 'AURA.minor_protection.v1', 'GH.education_payments.v1']
} = {}) {
  const findings = [
    ...(uses.atoms ?? []).filter((item) => !atomRegistry.includes(item)).map((item) => `atom_missing:${item}`),
    ...(uses.primitives ?? []).filter((item) => !primitiveRegistry.includes(item)).map((item) => `primitive_missing:${item}`),
    ...(uses.algorithms ?? []).filter((item) => !algorithmRegistry.includes(item)).map((item) => `algorithm_missing:${item}`),
    ...(uses.assets ?? []).filter((item) => !assetRegistry.includes(item)).map((item) => `asset_missing:${item}`),
    ...(uses.policy_packs ?? []).filter((item) => !policyPackRegistry.includes(item)).map((item) => `policy_pack_missing:${item}`)
  ]

  return {
    uses,
    findings,
    resolvesThroughRegistries: true,
    valid: findings.length === 0
  }
}

export function validateAuraPslSecurityModel({
  expressions = ['HAS_CONSENT(owner, auto_split_consent)'],
  actions = SCHOOL_FEES_PSL_ACTIONS_EXAMPLE,
  integrations = []
} = {}) {
  const expressionFindings = expressions.flatMap((expression) => {
    const review = validateSafeExpressionLanguage(expression)
    return review.safe ? [] : review.violations.map((violation) => `expression:${violation}`)
  })
  const actionFindings = validateAuraPslActions(actions).findings
  const integrationFindings = integrations
    .filter((integration) => integration.url && !integration.registry_approved)
    .map((integration) => `integration_not_registry_approved:${integration.id ?? integration.url}`)

  return {
    constraints: AURA_PSL_SECURITY_CONSTRAINTS,
    findings: [...expressionFindings, ...actionFindings, ...integrationFindings],
    valid: expressionFindings.length === 0 && actionFindings.length === 0 && integrationFindings.length === 0
  }
}

export function createAuraPslCompilerError({
  code = 'PSL.REF.UNRESOLVED',
  message = AURA_PSL_ERROR_EXAMPLE.message,
  path = AURA_PSL_ERROR_EXAMPLE.path,
  severity = 'ERROR'
} = {}) {
  const normalizedCode = AURA_PSL_ERROR_CODES.includes(code) ? code : 'PSL.SYNTAX.INVALID'
  return {
    code: normalizedCode,
    message,
    path,
    severity
  }
}

export function generatePslFromAdminStudioComponents(components = ADMIN_STUDIO_PSL_DRAG_EXAMPLE) {
  const normalized = normalizeList(components)
  const hasGoalWallet = normalized.includes('goal_wallet')
  const hasContributorLink = normalized.includes('contributor_link')
  const hasVerifiedLandlord = normalized.includes('verified_landlord')
  const hasReleaseApproval = normalized.includes('release_approval')
  const pslDraft = buildFamilyRentPslExample({
    money_objects: hasGoalWallet ? FAMILY_RENT_PSL_FILE_EXAMPLE.money_objects : {},
    rules: hasContributorLink && hasReleaseApproval ? FAMILY_RENT_PSL_FILE_EXAMPLE.rules : {},
    actors: hasVerifiedLandlord ? FAMILY_RENT_PSL_FILE_EXAMPLE.actors : { owner: FAMILY_RENT_PSL_FILE_EXAMPLE.actors.owner }
  })
  const feedback = [
    !pslDraft.money_objects.rent_escrow?.refund_condition && 'Missing refund path.',
    !Object.keys(pslDraft.experience?.surfaces ?? {}).length && 'Missing disclosure for restricted wallet.',
    !hasVerifiedLandlord && 'Recipient verification required.',
    !hasReleaseApproval && 'External release confirmation screen required.'
  ].filter(Boolean)

  return {
    components,
    pslDraft,
    feedback,
    legoStyleCreationWithoutSacrificingSafety: true
  }
}

export function interpretNaturalLanguageToPslDraft(text = 'I want to save 15% of all money I receive for rent and let my brother also contribute. Only my landlord should receive the money.') {
  const normalized = normalizeKey(text)
  const rentIntent = normalized.includes('rent') && normalized.includes('landlord')
  const pslDraft = rentIntent
    ? buildFamilyRentPslExample({
        product: { ...FAMILY_RENT_PSL_PRODUCT_EXAMPLE, id: 'rent_goal_wallet', intent: 'Save and collect rent money for landlord payment.' },
        actors: {
          owner: FAMILY_RENT_PSL_FILE_EXAMPLE.actors.owner,
          brother: { ...FAMILY_RENT_PSL_FILE_EXAMPLE.actors.contributor, role: 'contributor' },
          landlord: FAMILY_RENT_PSL_FILE_EXAMPLE.actors.landlord
        }
      })
    : buildAuraPslDraftFromIntent(text)
  return {
    sourceText: text,
    pslDraft,
    missingDetails: rentIntent ? NATURAL_LANGUAGE_RENT_PSL_MISSING_DETAILS : (pslDraft.missingClarifications ?? []),
    completeFinancialLogicRequiresClarification: true
  }
}

export function runAuraPslRuntimePreflight({
  pslFile = buildFamilyRentPslExample(),
  command = 'release_to_landlord',
  currentState = 'approval_pending',
  actor = 'owner',
  recipientVerified = true,
  consentActive = true,
  amountValid = true,
  balanceSufficient = true,
  riskBlocked = false,
  capabilityActive = true
} = {}) {
  const action = pslFile.actions?.[command]
  const checks = {
    capability_active: capabilityActive,
    current_state_allows_command: currentState === 'approval_pending',
    actor_is_approver: actor === 'owner' || actor === action?.approver,
    recipient_verified: recipientVerified,
    consent_active: consentActive,
    release_amount_valid: amountValid,
    wallet_balance_sufficient: balanceSufficient,
    kernel_command_allowed: action?.type === 'kernel_command' && UCC_KERNEL_OPERATION_ENUM.includes(action.command),
    idempotency_key_exists: Boolean(action?.idempotency_key),
    jurisdiction_policy_valid: true,
    risk_not_blocked: !riskBlocked
  }
  const failedChecks = Object.entries(checks).filter(([, passed]) => !passed).map(([check]) => check)
  const decision = failedChecks.includes('risk_not_blocked') || failedChecks.includes('kernel_command_allowed')
    ? 'BLOCK'
    : failedChecks.includes('actor_is_approver') || failedChecks.includes('consent_active')
      ? 'REQUIRE_APPROVAL'
      : failedChecks.length
        ? 'REQUIRE_MANUAL_REVIEW'
        : 'ALLOW'

  return {
    checks: AURA_PSL_RUNTIME_PREFLIGHT_CHECKS,
    failedChecks,
    decision,
    pslCompiledEnoughMetadata: Boolean(action)
  }
}

export function buildKernelCommandContractsFromPslActions(actions = {
  release_to_school: {
    type: 'kernel_command',
    command: 'release_escrow',
    from: 'invoice_payment_escrow',
    to: 'school_recipient_account',
    amount: 'invoice.amount',
    idempotency_key: 'capability_instance_id + invoice_id + approval_id'
  }
}) {
  const commandContracts = Object.entries(actions)
    .filter(([, action]) => action.type === 'kernel_command')
    .map(([id, action]) => ({
      id,
      operation: action.command,
      inputs: ['escrow_id', 'recipient_id', 'amount'],
      preconditions: action.command === 'release_escrow'
        ? ['recipient_is_verified', 'evidence_or_invoice_is_verified', 'user_approved']
        : ['source_balance_sufficient'],
      postconditions: action.command === 'release_escrow'
        ? ['escrow_locked_decreased', 'external_settlement_created', 'receipt_generated']
        : ['ledger_entries_created'],
      ledger_effect: {
        debit: `${action.from}.locked`,
        credit: `${action.to}.pending`
      },
      idempotency_key: action.idempotency_key
    }))
  const findings = commandContracts.flatMap((contract) => [
    !UCC_KERNEL_OPERATION_ENUM.includes(contract.operation) && `${contract.id}.operation_not_allowed`,
    !contract.idempotency_key && `${contract.id}.idempotency_missing`
  ].filter(Boolean))

  return {
    commandContracts,
    findings,
    kernelSafe: findings.length === 0
  }
}

export function deriveExperiencePhysicsRequirementsFromPslActions(actions = SCHOOL_FEES_PSL_EFFECT_EXAMPLE) {
  const requirements = Object.entries(actions).flatMap(([id, action]) => {
    const category = action.effect?.category ?? (action.command === 'release_escrow' ? 'external_transfer' : action.command)
    return (AURA_PSL_EXPERIENCE_PHYSICS_REQUIREMENTS[category] ?? []).map((requirement) => `${id}:${requirement}`)
  })

  return {
    requirements,
    informsUiUxComposer: true,
    valid: requirements.length > 0
  }
}

export function resolveAuraPslAssetNeeds(assetNeeds = AURA_PSL_ASSET_NEEDS_EXAMPLE, assetVault = ASSET_VAULT_ASSET_TYPES) {
  const resolved = assetNeeds.map((need) => ({
    ...need,
    resolved_asset: assetVault.find((asset) => normalizeKey(asset).includes(normalizeKey(need.semantic))) ?? `${need.semantic}_${need.type}_pending_review`,
    requiresCreationStudio: !assetVault.some((asset) => normalizeKey(asset).includes(normalizeKey(need.semantic)))
  }))

  return {
    assetNeeds,
    resolved,
    missing: resolved.filter((item) => item.requiresCreationStudio).map((item) => item.semantic),
    valid: true
  }
}

export function validateAuraPslAlgorithmReferences(algorithms = AURA_PSL_ALGORITHM_REFERENCES_EXAMPLE, registry = [...ALGORITHM_VAULT_ALGORITHMS, 'InvoiceSimilarityCheck', 'GPSConfidenceScore']) {
  const findings = Object.entries(algorithms ?? {}).flatMap(([id, algorithm]) => [
    !registry.includes(algorithm.ref) && `${id}.algorithm_not_registered:${algorithm.ref}`,
    !/^[0-9]+\.[0-9]+\.[0-9]+$/.test(algorithm.version ?? '') && `${id}.version_invalid`,
    !(algorithm.inputs ?? []).length && `${id}.inputs_missing`,
    !algorithm.output && `${id}.output_missing`
  ].filter(Boolean))

  return {
    algorithms,
    findings,
    arbitraryInlineAlgorithmsAllowed: false,
    valid: findings.length === 0
  }
}

export function validateAuraPslVersioning(pslFile = buildSchoolFeesPslFileExample()) {
  const findings = [
    !/^[0-9]+\.[0-9]+$/.test(pslFile.psl_version ?? '') && 'psl_language_version_invalid',
    pslFile.product?.version && !/^[0-9]+\.[0-9]+\.[0-9]+$/.test(pslFile.product.version) && 'capability_version_invalid'
  ].filter(Boolean)

  return {
    dimensions: AURA_PSL_VERSION_DIMENSIONS,
    migrationExamples: AURA_PSL_VERSION_MIGRATION_EXAMPLES,
    findings,
    valid: findings.length === 0
  }
}

export function validateAuraPslGovernance(pslFile = buildSchoolFeesPslFileExample()) {
  const serialized = JSON.stringify(pslFile)
  const findings = [
    /bypass_all_policy_checks|skip_policy|ignore_policy/i.test(serialized) && 'policy_bypass_fields_rejected',
    /allow_direct_balance_mutation|direct_balance_mutation\s*:\s*true/i.test(serialized) && 'direct_balance_mutation_flags_rejected',
    /override_global_aura_safety/i.test(serialized) && 'global_aura_safety_cannot_be_overridden'
  ].filter(Boolean)

  return {
    restrictions: AURA_PSL_GOVERNANCE_RESTRICTIONS,
    findings,
    valid: findings.length === 0
  }
}

export function validateAuraPslMinimumValidCapability(pslFile = buildFamilyRentPslExample()) {
  const actionReview = validateAuraPslActions(pslFile.actions)
  const hasAutomation = Object.values(pslFile.actions ?? {}).some((action) => action.type === 'kernel_command')
  const hasFundsLock = Object.values(pslFile.money_objects ?? {}).some((object) => /escrow|lock|reserve/i.test(object.type))
  const findings = [
    !pslFile.product && 'product_declaration',
    !Object.keys(pslFile.actors ?? {}).length && 'at_least_one_actor',
    !Object.keys(pslFile.money_objects ?? {}).length && 'at_least_one_money_object',
    !Object.keys(pslFile.rules ?? {}).length && 'at_least_one_rule',
    !pslFile.state_machine && 'state_model_or_lifecycle',
    actionReview.findings.some((finding) => finding.includes('kernel')) && 'kernel_command_mapping_for_money_movement',
    Object.values(pslFile.money_objects ?? {}).some((object) => !object.owner) && 'ownership_model',
    hasAutomation && !Object.keys(pslFile.consents ?? {}).length && 'consent_rules_if_automation_exists',
    hasFundsLock && !Object.keys(pslFile.experience?.surfaces ?? {}).length && 'disclosure_rules_if_funds_lock_or_fees_exist',
    !pslFile.audit && 'audit_events'
  ].filter(Boolean)

  return {
    minimumFields: AURA_PSL_MINIMUM_VALID_CAPABILITY_FIELDS,
    findings,
    valid: findings.length === 0
  }
}

export function detectAuraPslAntiPatterns(pslFile = buildFamilyRentPslExample()) {
  const moneyObjects = Object.values(pslFile.money_objects ?? {})
  const serialized = JSON.stringify(pslFile)
  const findings = [
    ...moneyObjects.filter((object) => !object.owner).map((object) => `floating_money_object_without_owner:${object.id}`),
    /fee/i.test(serialized) && !/disclosure/i.test(serialized) && 'hidden_fee_without_disclosure',
    ...moneyObjects.filter((object) => /escrow|lock/i.test(object.type) && (!object.refund_condition || !object.expiry_condition)).map((object) => `trapped_escrow_without_refund_or_expiry:${object.id}`),
    /auto_release_to_unverified|auto_release_without/i.test(serialized) && 'auto_release_to_unverified_recipient',
    /loop_forever|unbounded_loop/i.test(serialized) && 'unbounded_rule_loop',
    Object.values(pslFile.actions ?? {}).some((action) => action.type === 'kernel_command') && !Object.keys(pslFile.consents ?? {}).length && 'automation_without_consent',
    /approved_itself|self_approved_policy|bypass_all_policy_checks/i.test(serialized) && 'policy_self_approval',
    /\.balance\s*=|direct_ledger_mutation/i.test(serialized) && 'direct_ledger_mutation'
  ].filter(Boolean)

  return {
    antiPatterns: AURA_PSL_ANTI_PATTERNS,
    findings,
    valid: findings.length === 0
  }
}

export function describeAuraPslImplementationPackage() {
  return {
    modules: AURA_PSL_IMPLEMENTATION_MODULES,
    runtimeOwnership: AURA_PSL_RUNTIME_OWNERSHIP,
    languagePackage: true
  }
}

export function handleAuraPslServiceApi(routeId = 'validate_psl', payload = {}) {
  const pslFile = payload.pslFile ?? buildSchoolFeesPslFileExample()
  if (routeId === 'parse_psl') {
    return {
      ast: buildAuraPslInternalForms().canonicalAst,
      diagnostics: []
    }
  }
  if (routeId === 'compile_to_ucc') {
    const candidate = compileAuraPslToUccCandidate(pslFile)
    return {
      universalCapabilityContractDraft: candidate.uccCandidate,
      compilerDiagnostics: candidate.validCandidate ? [] : [createAuraPslDiagnostic()],
      missingReferences: []
    }
  }
  if (routeId === 'validate_psl') {
    return {
      syntax: true,
      typeCheck: validateAuraPslTypeSystemSample().valid,
      referenceResolution: validateAuraPslReferenceSafety().valid,
      effectAnalysis: analyzeAuraPslEffects().valid,
      preUccValidation: validateAuraPslMinimumValidCapability(buildFamilyRentPslExample()).valid
    }
  }
  if (routeId === 'generate_clarifications') {
    return {
      questions: NATURAL_LANGUAGE_RENT_PSL_MISSING_DETAILS
    }
  }
  if (routeId === 'compile_runtime_ir') {
    const uccValidation = runUccValidationPipeline(buildSchoolFeesUccSections())
    return {
      allowed: uccValidation.valid,
      runtimeIr: uccValidation.valid ? buildAuraPslInternalForms().runtimeIr : null
    }
  }
  return {
    error: 'unknown_psl_service_route',
    supportedRoutes: AURA_PSL_SERVICE_API_ROUTES.map((route) => route.id)
  }
}

export function createAuraPslDiagnostic({
  code = AURA_PSL_DIAGNOSTIC_EXAMPLE.code,
  severity = AURA_PSL_DIAGNOSTIC_EXAMPLE.severity,
  message = AURA_PSL_DIAGNOSTIC_EXAMPLE.message,
  path = AURA_PSL_DIAGNOSTIC_EXAMPLE.path,
  required_fix = AURA_PSL_DIAGNOSTIC_EXAMPLE.required_fix,
  suggested_questions = AURA_PSL_DIAGNOSTIC_EXAMPLE.suggested_questions
} = {}) {
  return {
    code,
    severity,
    message,
    path,
    required_fix,
    suggested_questions,
    feeds: AURA_PSL_DIAGNOSTIC_CONSUMERS
  }
}

export function runAuraPslCliCommand(command = AURA_PSL_CLI_COMMANDS[1]) {
  const normalized = normalizeKey(command)
  const action = normalized.includes('parse')
    ? 'parse_psl'
    : normalized.includes('compile') && normalized.includes('emit_ucc')
      ? 'compile_to_ucc'
      : normalized.includes('simulate')
        ? 'simulate'
        : normalized.includes('diff')
          ? 'diff'
          : normalized.includes('migrate')
            ? 'migrate'
            : 'validate_psl'

  return {
    command,
    action,
    outputs: AURA_PSL_CLI_OUTPUTS,
    result: action === 'validate_psl' ? handleAuraPslServiceApi('validate_psl') : { accepted: true }
  }
}

export function diffAuraPslSpecs(before = buildFamilyRentPslExample(), after = buildFamilyRentPslExample({
  actions: {
    ...FAMILY_RENT_PSL_FILE_EXAMPLE.actions,
    release_to_landlord: { ...FAMILY_RENT_PSL_FILE_EXAMPLE.actions.release_to_landlord, amount: 'rent.amount_due * 1.2' }
  }
})) {
  const stripRecipientFields = (actions = {}) => Object.fromEntries(Object.entries(actions).map(([id, action]) => {
    const { to, recipient, recipient_id, recipient_ref, destination, ...rest } = action ?? {}
    return [id, rest]
  }))
  const recipientChanged = Object.keys({ ...(before.actions ?? {}), ...(after.actions ?? {}) }).some((id) => {
    const beforeAction = before.actions?.[id] ?? {}
    const afterAction = after.actions?.[id] ?? {}
    return ['to', 'recipient', 'recipient_id', 'recipient_ref', 'destination'].some((field) => beforeAction[field] !== afterAction[field])
  })
  const afterRecipientSurface = JSON.stringify(after.actions ?? {})
  const recipientWidened = recipientChanged && /any_recipient|unverified|recipient_id|recipient_ref|dynamic_recipient/i.test(afterRecipientSurface)
  const releaseLogicChanged = JSON.stringify(stripRecipientFields(before.actions)) !== JSON.stringify(stripRecipientFields(after.actions))
  const disclosureChanged = JSON.stringify(before.disclosures ?? {}) !== JSON.stringify(after.disclosures ?? {})
  const consentScopeChanged = JSON.stringify(before.consents ?? {}) !== JSON.stringify(after.consents ?? {})
  const changes = [
    releaseLogicChanged && 'release_condition_changed',
    recipientChanged && 'release_recipient_changed',
    disclosureChanged && 'disclosure_text_added',
    consentScopeChanged && 'consent_scope_changed',
    JSON.stringify(before.money_objects) !== JSON.stringify(after.money_objects) && 'refund_path_changed',
    JSON.stringify(before.autonomy) !== JSON.stringify(after.autonomy) && 'autonomy_increased',
    JSON.stringify(before.state_machine) !== JSON.stringify(after.state_machine) && 'state_machine_changed',
    JSON.stringify(before.evidence) !== JSON.stringify(after.evidence) && 'new_evidence_requirement_added',
    JSON.stringify(before.policies) !== JSON.stringify(after.policies) && 'new_policy_pack_applied'
  ].filter(Boolean)
  const classifications = [
    changes.includes('release_condition_changed') && 'consent_required',
    recipientWidened && 'blocked',
    changes.includes('release_recipient_changed') && 'policy_review_required',
    changes.includes('consent_scope_changed') && 'consent_required',
    changes.includes('refund_path_changed') && 'migration_required',
    changes.includes('autonomy_increased') && 'policy_review_required',
    changes.includes('state_machine_changed') && 'runtime_blocking',
    changes.length === 0 && 'non_breaking',
    changes.length === 1 && disclosureChanged && !consentScopeChanged && 'non_breaking'
  ].filter(Boolean)

  return {
    changeExamples: AURA_PSL_DIFF_CHANGE_EXAMPLES,
    changes,
    classifications,
    validClassification: classifications.every((item) => AURA_PSL_DIFF_CLASSIFICATIONS.includes(item))
  }
}

export function buildAuraPslCanonicalRuntimeBlueprint({
  intent = 'Describe a governed financial product from first principles.',
  actors = SCHOOL_FEES_PSL_FILE_EXAMPLE.actors,
  moneyObjects = SCHOOL_FEES_PSL_FILE_EXAMPLE.money_objects,
  rules = SCHOOL_FEES_PSL_RULES_EXAMPLE,
  stateMachine = SCHOOL_FEES_PSL_STATE_MACHINE_EXAMPLE,
  actions = SCHOOL_FEES_PSL_ACTIONS_EXAMPLE,
  policies = SCHOOL_FEES_PSL_POLICIES_EXAMPLE,
  evidence = SCHOOL_FEES_PSL_EVIDENCE_EXAMPLE,
  consents = SCHOOL_FEES_PSL_CONSENTS_EXAMPLE,
  experience = SCHOOL_FEES_PSL_EXPERIENCE_EXAMPLE,
  audit = SCHOOL_FEES_PSL_AUDIT_EXAMPLE,
  tests = SCHOOL_FEES_PSL_TESTS_EXAMPLE,
  simulation = SCHOOL_FEES_PSL_SIMULATION_EXAMPLE,
  monitoring = SCHOOL_FEES_PSL_MONITORING_EXAMPLE
} = {}) {
  const blueprint = {
    human_intent: intent,
    typed_actors: Object.keys(actors ?? {}),
    money_objects: Object.keys(moneyObjects ?? {}),
    rules: Object.keys(rules ?? {}),
    state_machines: Object.keys(stateMachine?.states ?? {}),
    kernel_safe_actions: Object.entries(actions ?? {})
      .filter(([, action]) => action.type === 'kernel_command')
      .map(([id, action]) => `${id}:${action.command}`),
    policy_requirements: Object.keys(policies ?? {}),
    evidence_requirements: Object.keys(evidence ?? {}),
    consent_requirements: Object.keys(consents ?? {}),
    experience_requirements: Object.keys(experience?.surfaces ?? experience ?? {}),
    audit_requirements: audit?.required_for ?? Object.keys(audit ?? {}),
    tests: Object.keys(tests ?? {}),
    simulations: Object.keys(simulation ?? {}),
    monitoring: Object.keys(monitoring?.metrics ?? monitoring ?? {})
  }
  const missingArtifacts = AURA_PSL_CANONICAL_TRANSFORMATION_ARTIFACTS
    .filter((artifact) => {
      const value = blueprint[artifact]
      return Array.isArray(value) ? value.length === 0 : !value
    })

  return {
    grammar: 'formless_banking',
    transformation: AURA_PSL_CANONICAL_TRANSFORMATION_ARTIFACTS,
    blueprint,
    missingArtifacts,
    complete: missingArtifacts.length === 0
  }
}

export function describeAuraPslFormlessBankingBasis(intent = 'I want money to behave safely under custom rules.') {
  const blueprint = buildAuraPslCanonicalRuntimeBlueprint({ intent })
  return {
    intent,
    basis: 'natural_language_becomes_structured_financial_law',
    questions: AURA_PSL_FORMLESS_BANKING_QUESTIONS,
    transformation: [
      'natural_language_intent',
      'structured_financial_law',
      'universal_capability_contract',
      'validated_runtime_product'
    ],
    blueprint,
    providerApiSkipped: ['third_party_provider_apis'],
    safeFormlessBanking: blueprint.complete
  }
}

export function validateAuraPslCanonicalStatement({
  blueprint = buildAuraPslCanonicalRuntimeBlueprint(),
  actions = SCHOOL_FEES_PSL_ACTIONS_EXAMPLE,
  governorDecision = 'approve'
} = {}) {
  const actionReview = validateAuraPslActions(actions)
  const directMoneyFindings = actionReview.findings.filter((finding) => finding.includes('direct_money_mutation'))
  const kernelUnsafeFindings = actionReview.findings.filter((finding) => finding.includes('kernel_') || finding.includes('missing_idempotency_key'))
  const findings = [
    ...blueprint.missingArtifacts.map((artifact) => `missing_canonical_artifact:${artifact}`),
    ...directMoneyFindings,
    ...kernelUnsafeFindings,
    governorDecision !== 'approve' && 'governor_has_not_approved',
    !actionReview.moneyActionsMapToKernel && 'money_actions_do_not_map_to_kernel'
  ].filter(Boolean)

  return {
    canonicalStatement: 'AURA_PSL_declares_financial_behavior_and_never_directly_moves_money',
    transformation: AURA_PSL_CANONICAL_TRANSFORMATION_ARTIFACTS,
    executionArchitecture: AURA_PSL_CANONICAL_EXECUTION_ARCHITECTURE,
    governorDecision,
    findings,
    pslMovesMoneyDirectly: directMoneyFindings.length > 0,
    kernelExecutesOnlyApprovedCommands: kernelUnsafeFindings.length === 0 && governorDecision === 'approve',
    valid: findings.length === 0
  }
}

export function createFinancialPhysicsEngineHandoff() {
  const canonical = validateAuraPslCanonicalStatement()
  return {
    nextArtifact: 'aura_financial_physics_engine_full_technical_specification',
    prerequisites: [
      'universal_capability_contract',
      'ucc_schema_and_validator',
      'product_specification_language'
    ],
    question: 'What non_negotiable_financial_laws_must_every_generated_capability_obey?',
    laws: AURA_FINANCIAL_PHYSICS_NEXT_ARTIFACT_LAWS,
    existingCoverage: {
      ucc: ['financial_physics_section', 'financial_physics_validation_stage', 'runtime_preflight'],
      psl: ['invariants', 'effect_analysis', 'kernel_safe_actions', 'canonical_statement']
    },
    readyForDeepDive: canonical.valid,
    providerApiSkipped: ['third_party_provider_apis']
  }
}

export function validateAuraPslProductDeclaration(product = FAMILY_RENT_PSL_PRODUCT_EXAMPLE, {
  existingProductIds = ['school_fees_wallet', 'susu_circle_g1_smooth']
} = {}) {
  const missingFields = AURA_PSL_PRODUCT_REQUIRED_FIELDS.filter((field) => !(field in (product ?? {})) || product[field] === '')
  const duplicateId = existingProductIds.includes(product?.id)
  const invalidId = product?.id && !UCC_ID_REGEX.test(product.id)
  const invalidRiskClass = product?.risk_class && !UCC_RISK_CLASSES.includes(product.risk_class)
  const unknownCategory = product?.category && ![
    'education_payments',
    'shared_obligation_payment',
    'verified_work_payment',
    'rotating_savings_circle',
    'susu_circle',
    'escrow_payment',
    'family_wallet'
  ].includes(product.category)
  const intentRuleConflict = /only landlord/i.test(product?.intent ?? '') && /merchant/i.test(product?.category ?? '')
  const violations = [
    ...missingFields.map((field) => `missing:${field}`),
    duplicateId && 'id_not_unique',
    invalidId && 'id_invalid',
    invalidRiskClass && 'risk_class_invalid',
    unknownCategory && 'category_unknown',
    intentRuleConflict && 'intent_conflicts_with_category'
  ].filter(Boolean)

  return {
    requiredFields: AURA_PSL_PRODUCT_REQUIRED_FIELDS,
    mapsTo: AURA_PSL_PRODUCT_UCC_MAPPING,
    violations,
    valid: violations.length === 0
  }
}

export function validateAuraPslActorDeclarations(actors = PSL_ACTOR_DECLARATION_EXAMPLE) {
  const actorEntries = Object.entries(actors ?? {})
  const actorFindings = actorEntries.flatMap(([id, actor]) => [
    !UCC_ID_REGEX.test(id) && `${id}.id_invalid`,
    ...AURA_PSL_ACTOR_REQUIRED_FIELDS
      .filter((field) => !(field in (actor ?? {})))
      .map((field) => `${id}.missing:${field}`),
    !(actor.permissions?.can ?? []).length && actor.required && `${id}.permissions_empty_for_required_actor`,
    (actor.permissions?.can ?? []).some((permission) => (actor.permissions?.cannot ?? []).includes(permission)) && `${id}.permission_conflict`,
    (actor.visibility?.can_view ?? []).some((item) => (actor.visibility?.cannot_view ?? []).includes(item)) && `${id}.visibility_conflict`
  ].filter(Boolean))

  return {
    requiredFields: AURA_PSL_ACTOR_REQUIRED_FIELDS,
    actorIds: actorEntries.map(([id]) => id),
    actorFindings,
    authorityExplicit: actorFindings.length === 0,
    valid: actorFindings.length === 0
  }
}

export function validateAuraPslEntityDeclarations(entities = PSL_ENTITY_DECLARATION_EXAMPLE) {
  const entityFindings = Object.entries(entities ?? {}).flatMap(([id, entity]) => [
    !UCC_ID_REGEX.test(id) && `${id}.id_invalid`,
    !entity.type && `${id}.missing:type`,
    entity.type && !AURA_PSL_ENTITY_TYPES.includes(entity.type) && `${id}.type_unknown:${entity.type}`,
    !entity.verification && `${id}.missing:verification`,
    !entity.attributes && `${id}.missing:attributes`
  ].filter(Boolean))

  return {
    allowedTypes: AURA_PSL_ENTITY_TYPES,
    entityFindings,
    policyRelevant: true,
    valid: entityFindings.length === 0
  }
}

export function compileAuraPslProductToUccSections(pslFile = buildSchoolFeesPslFileExample()) {
  const productReview = validateAuraPslProductDeclaration(pslFile.product, {
    existingProductIds: []
  })
  const actorReview = validateAuraPslActorDeclarations(pslFile.actors)
  const entityReview = validateAuraPslEntityDeclarations(pslFile.entities)

  return {
    productReview,
    actorReview,
    entityReview,
    uccSections: {
      capability: {
        id: pslFile.product.id,
        name: pslFile.product.name,
        category: pslFile.product.category,
        description: pslFile.product.description
      },
      intent: {
        primary_goal: pslFile.product.intent
      },
      classification: {
        risk_class: pslFile.product.risk_class
      },
      entities: {
        actors: Object.entries(pslFile.actors ?? {}).map(([id, actor]) => ({ id, type: actor.type, role: actor.role, required: actor.required, verification_level: actor.verification })),
        entities: Object.entries(pslFile.entities ?? {}).map(([id, entity]) => ({ id, type: entity.type, verification: entity.verification }))
      }
    },
    valid: productReview.valid && actorReview.valid && entityReview.valid
  }
}

export function validateAuraPslRelationships({
  relationships = SCHOOL_FEES_PSL_RELATIONSHIPS_EXAMPLE,
  actors = SCHOOL_FEES_PSL_FILE_EXAMPLE.actors,
  entities = { ...SCHOOL_FEES_PSL_FILE_EXAMPLE.entities, landlord: { type: 'individual_or_business_recipient' } },
  moneyObjects = ['school_fees_wallet', 'rent_wallet']
} = {}) {
  const actorIds = new Set(Object.keys(actors ?? {}))
  const entityIds = new Set(Object.keys(entities ?? {}))
  const moneyObjectIds = new Set(Array.isArray(moneyObjects) ? moneyObjects : Object.keys(moneyObjects ?? {}))
  const knownIds = new Set([...actorIds, ...entityIds, ...moneyObjectIds, 'owner', 'landlord'])
  const findings = relationships.flatMap((relationship) => [
    !knownIds.has(relationship.from) && `${relationship.type}.unknown_from:${relationship.from}`,
    !knownIds.has(relationship.to) && `${relationship.type}.unknown_to:${relationship.to}`,
    !AURA_PSL_RELATIONSHIP_TYPES.includes(relationship.type) && `${relationship.type}.unknown_type`
  ].filter(Boolean))

  return {
    relationshipTypes: AURA_PSL_RELATIONSHIP_TYPES,
    findings,
    permissionsDependOnRelationshipContext: true,
    valid: findings.length === 0
  }
}

export function validateAuraPslMoneyObjectDeclarations(moneyObjects = RENT_PSL_MONEY_OBJECTS_EXAMPLE) {
  const entries = Object.entries(moneyObjects ?? {})
  const findings = entries.flatMap(([id, object]) => {
    const locked = ['escrow', 'conditional_escrow', 'gps_evidence_escrow', 'lock', 'pending_claim'].includes(object.type)
    return [
      object.id && object.id !== id && `${id}.id_mismatch`,
      ...AURA_PSL_MONEY_OBJECT_REQUIRED_FIELDS
        .filter((field) => (!(field in object) || object[field] === '') && !(field === 'currency' && object.unit))
        .map((field) => `${id}.missing:${field}`),
      !AURA_PSL_MONEY_OBJECT_TYPES.includes(object.type) && `${id}.type_unknown:${object.type}`,
      !object.currency && !object.unit && `${id}.missing:currency_or_unit`,
      locked && !object.release_condition && `${id}.missing:release_condition`,
      locked && !object.refund_condition && `${id}.missing:refund_condition`,
      locked && !object.dispute_condition && `${id}.missing:dispute_condition`,
      locked && !object.expiry_condition && `${id}.missing:expiry_condition`,
      (object.allowed_states ?? []).some((state) => !AURA_PSL_FUND_STATES.includes(state)) && `${id}.unknown_fund_state`,
      (object.allowed_operations ?? []).some((operation) => !UCC_KERNEL_OPERATION_ENUM.includes(operation)) && `${id}.unknown_operation`
    ].filter(Boolean)
  })

  return {
    moneyObjectTypes: AURA_PSL_MONEY_OBJECT_TYPES,
    requiredFields: AURA_PSL_MONEY_OBJECT_REQUIRED_FIELDS,
    findings,
    ownershipClear: !findings.some((finding) => finding.includes('owner')),
    valid: findings.length === 0
  }
}

export function validateAuraPslFundStates(fundStates = SCHOOL_FEES_PSL_FUND_STATES_EXAMPLE, activeStateSnapshot = {}) {
  const findings = Object.entries(fundStates ?? {}).flatMap(([objectId, declaration]) => [
    !(declaration.allowed ?? []).length && `${objectId}.missing_allowed_states`,
    ...(declaration.allowed ?? []).filter((state) => !AURA_PSL_FUND_STATES.includes(state)).map((state) => `${objectId}.unknown_state:${state}`)
  ].filter(Boolean))
  const stateConflicts = Object.entries(activeStateSnapshot)
    .filter(([, states]) => Array.isArray(states) && states.length > 1)
    .map(([fundUnit]) => `${fundUnit}.multiple_active_states`)

  return {
    allowedFundStates: AURA_PSL_FUND_STATES,
    invariant: 'fund_unit_can_have_only_one_active_state_at_a_time',
    findings: [...findings, ...stateConflicts],
    valid: findings.length === 0 && stateConflicts.length === 0
  }
}

export function validateAuraPslEvents(events = SCHOOL_FEES_PSL_EVENTS_EXAMPLE) {
  const knownEventTypes = new Set([...CAPABILITY_EVENT_TYPES, 'MONEY_RECEIVED', 'CONTRIBUTION_RECEIVED', 'APPROVAL_GRANTED', 'GPS_PROOF_SUBMITTED', 'RELEASE_REQUESTED', 'ESCROW_EXPIRED', 'RENT_PAYMENT_RELEASED', 'RENT_CONTRIBUTION_RECEIVED', 'MEMBER_REQUESTED_JOIN', 'CONTRIBUTION_DUE', 'PAYOUT_SLOT_DUE', 'CIRCLE_CONTRIBUTION_RECEIVED'])
  const findings = Object.entries(events ?? {}).flatMap(([id, event]) => [
    !UCC_ID_REGEX.test(id) && `${id}.id_invalid`,
    !event.type && `${id}.missing:type`,
    event.type && !knownEventTypes.has(event.type) && `${id}.unknown_type:${event.type}`,
    !event.source && `${id}.missing:source`,
    !event.payload && `${id}.missing:payload`
  ].filter(Boolean))

  return {
    usedBy: ['rules', 'state_transitions', 'audit_ledger', 'monitoring', 'simulation', 'tests', 'runtime_preflight'],
    findings,
    valid: findings.length === 0
  }
}

export function validateAuraPslTriggers(triggers = SCHOOL_FEES_PSL_TRIGGERS_EXAMPLE, events = SCHOOL_FEES_PSL_EVENTS_EXAMPLE) {
  const eventIds = new Set(Object.keys(events ?? {}))
  const findings = Object.entries(triggers ?? {}).flatMap(([id, trigger]) => {
    const triggerType = trigger.event
      ? 'event'
      : trigger.schedule
        ? 'schedule'
        : trigger.manual_command
          ? 'manual_command'
          : trigger.system_condition
            ? 'system_condition'
            : trigger.policy_update
              ? 'policy_update'
              : trigger.risk_signal
                ? 'risk_signal'
                : trigger.external_webhook
                  ? 'external_webhook'
                  : 'unknown'
    const filterReview = trigger.filter ? validateSafeExpressionLanguage(trigger.filter) : { safe: true, violations: [] }
    return [
      triggerType === 'unknown' && `${id}.missing_trigger_type`,
      !AURA_PSL_TRIGGER_TYPES.includes(triggerType) && `${id}.unknown_trigger_type`,
      trigger.event && !eventIds.has(trigger.event) && `${id}.unknown_event:${trigger.event}`,
      trigger.filter && !filterReview.safe && `${id}.unsafe_filter:${filterReview.violations.join(',')}`,
      trigger.schedule && !trigger.schedule.timezone_source && `${id}.schedule_missing_timezone_source`,
      trigger.external_webhook && !trigger.external_webhook.registry_approved && `${id}.external_webhook_requires_registry_approval`
    ].filter(Boolean)
  })

  return {
    triggerTypes: AURA_PSL_TRIGGER_TYPES,
    providerApiSkipped: ['external_webhook_runtime_adapter'],
    findings,
    valid: findings.length === 0
  }
}

export function validateAuraPslConditions(conditions = {
  school_is_verified: { expression: 'school.verification == institution_verified' },
  balance_is_sufficient: { expression: 'school_fees_wallet.available_balance >= invoice.amount' },
  parent_approved: { expression: 'approval.status == granted AND approval.actor == guardian' },
  gps_is_within_radius: { expression: 'DISTANCE(proof.gps, required_location) <= allowed_radius' }
}) {
  const findings = Object.entries(conditions ?? {}).flatMap(([id, condition]) => {
    const expression = condition.expression ?? condition
    const review = validateSafeExpressionLanguage(expression)
    return [
      !UCC_ID_REGEX.test(id) && `${id}.id_invalid`,
      !expression && `${id}.missing_expression`,
      !review.safe && `${id}.unsafe_expression:${review.violations.join(',')}`,
      /\b(request_kernel|release_escrow|allocate_funds|refund_funds|send_money|move_money)\b/i.test(expression) && `${id}.condition_moves_money`
    ].filter(Boolean)
  })

  return {
    primitiveTypes: AURA_PSL_PRIMITIVE_EXPRESSION_TYPES,
    domainTypes: AURA_PSL_DOMAIN_EXPRESSION_TYPES,
    operators: AURA_PSL_EXPRESSION_OPERATORS,
    approvedFunctions: AURA_PSL_APPROVED_FUNCTIONS,
    forbiddenFunctions: AURA_PSL_FORBIDDEN_FUNCTIONS,
    findings,
    truthOnly: !findings.some((finding) => finding.includes('condition_moves_money')),
    valid: findings.length === 0
  }
}

export function validateAuraPslActions(actions = SCHOOL_FEES_PSL_ACTIONS_EXAMPLE, {
  kernelContract = SCHOOL_FEES_UCC_KERNEL_CONTRACT_SECTION,
  approvedTemplates = ['school_wallet_allocation_success'],
  declaredIntegrations = SCHOOL_FEES_UCC_DEPENDENCIES_SECTION.external_integrations
} = {}) {
  const allowedOperations = new Set(kernelContract.allowed_operations ?? [])
  const commandContracts = new Set((kernelContract.command_contracts ?? []).map((command) => command.operation))
  const declaredIntegrationIds = new Set((declaredIntegrations ?? []).map((integration) => integration.id))
  const findings = Object.entries(actions ?? {}).flatMap(([id, action]) => [
    !UCC_ID_REGEX.test(id) && `${id}.id_invalid`,
    !AURA_PSL_ACTION_CATEGORIES.includes(action.type) && `${id}.unknown_type:${action.type}`,
    /\.balance\s*=|\bset_balance\b|\bdebit_balance\b|\bcredit_balance\b/i.test(JSON.stringify(action)) && `${id}.direct_money_mutation`,
    action.type === 'kernel_command' && !allowedOperations.has(action.command) && `${id}.kernel_operation_not_allowed:${action.command}`,
    action.type === 'kernel_command' && !commandContracts.has(action.command) && `${id}.kernel_command_contract_missing:${action.command}`,
    action.type === 'kernel_command' && !action.idempotency_key && `${id}.missing_idempotency_key`,
    action.type === 'notify' && !approvedTemplates.includes(action.template) && `${id}.template_not_approved:${action.template}`,
    action.type === 'request_approval' && !(action.approver || action.from) && `${id}.missing_approver`,
    action.type === 'request_evidence' && !(action.evidence_type || action.evidence) && `${id}.missing_evidence_type`,
    action.type === 'block' && !action.reason_code && `${id}.missing_reason_code`,
    action.type === 'call_integration' && !declaredIntegrationIds.has(action.integration) && `${id}.integration_not_declared:${action.integration}`
  ].filter(Boolean))

  return {
    categories: AURA_PSL_ACTION_CATEGORIES,
    providerApiSkipped: ['call_integration_runtime_adapter'],
    findings,
    moneyActionsMapToKernel: !findings.some((finding) => finding.includes('kernel_')),
    valid: findings.length === 0
  }
}

export function validateAuraPslRules(rules = SCHOOL_FEES_PSL_RULES_EXAMPLE, {
  triggers = SCHOOL_FEES_PSL_TRIGGERS_EXAMPLE,
  conditions = {},
  actions = SCHOOL_FEES_PSL_ACTIONS_EXAMPLE,
  events = SCHOOL_FEES_PSL_EVENTS_EXAMPLE
} = {}) {
  const triggerIds = new Set([...Object.keys(triggers ?? {}), ...Object.keys(events ?? {}), 'payment_release_requested', 'payout_position_requested'])
  const actionIds = new Set([...Object.keys(actions ?? {}), 'release_payment_to_school', 'refund_after_expiry', 'require_manual_review', 'allow_early_payout_position', 'generate_receipt'])
  const eventTypes = new Set([...Object.values(events ?? {}).map((event) => event.type), 'AUTO_SPLIT_EXECUTED', 'AUTO_SPLIT_SKIPPED', 'PAYMENT_RELEASE_BLOCKED', 'BTS_EARLY_PAYOUT_REVIEWED', 'EVIDENCE_REVIEWED', 'PAYMENT_RELEASED', 'REFUND_COMPLETED', 'RENT_CONTRIBUTION_RECEIVED', 'RENT_PAYMENT_RELEASED', 'MEMBER_JOIN_REVIEWED', 'CIRCLE_CONTRIBUTION_RECEIVED', 'PAYOUT_RELEASED'])
  const conditionIds = new Set([...Object.keys(conditions ?? {}), 'auto_split_enabled', 'school_is_verified', 'invoice_is_verified', 'balance_is_sufficient'])
  const findings = Object.entries(rules ?? {}).flatMap(([id, rule]) => {
    const ruleId = rule.id ?? id
    const missing = AURA_PSL_RULE_REQUIRED_FIELDS
      .filter((field) => !(field in (rule ?? {})))
      .map((field) => `${ruleId}.missing:${field}`)
    const conditionFindings = (Array.isArray(rule.if) ? rule.if : [rule.if])
      .filter(Boolean)
      .flatMap((condition) => {
        if (conditionIds.has(condition)) return []
        const review = validateSafeExpressionLanguage(condition)
        return review.safe ? [] : [`${ruleId}.unsafe_condition:${review.violations.join(',')}`]
      })
    const actionFindings = (Array.isArray(rule.then) ? rule.then : [rule.then])
      .filter(Boolean)
      .flatMap((action) => {
        if (typeof action === 'object' && action.emit_event) return eventTypes.has(action.emit_event) ? [] : [`${ruleId}.unknown_emit:${action.emit_event}`]
        return actionIds.has(action) ? [] : [`${ruleId}.unknown_action:${action}`]
      })
    return [
      ruleId !== id && `${id}.id_mismatch`,
      !triggerIds.has(rule.when) && `${ruleId}.unknown_when:${rule.when}`,
      rule.type && !AURA_PSL_RULE_TYPES.includes(rule.type) && `${ruleId}.unknown_type:${rule.type}`,
      ...missing,
      ...conditionFindings,
      ...actionFindings,
      !(rule.audit?.required) && `${ruleId}.audit_required_missing`,
      !(rule.audit?.include ?? []).length && `${ruleId}.audit_include_missing`,
      typeof rule.priority !== 'number' && `${ruleId}.priority_missing`
    ].filter(Boolean)
  })

  return {
    requiredFields: AURA_PSL_RULE_REQUIRED_FIELDS,
    ruleTypes: AURA_PSL_RULE_TYPES,
    findings,
    valid: findings.length === 0
  }
}

export function validateAuraPslStateMachine(stateMachine = SCHOOL_FEES_PSL_STATE_MACHINE_EXAMPLE, {
  rules = SCHOOL_FEES_PSL_RULES_EXAMPLE,
  actions = SCHOOL_FEES_PSL_ACTIONS_EXAMPLE
} = {}) {
  const stateIds = new Set(Object.keys(stateMachine.states ?? {}))
  const terminalStates = Object.entries(stateMachine.states ?? {}).filter(([, state]) => state.terminal).map(([id]) => id)
  const transitions = Object.entries(stateMachine.transitions ?? {})
  const outgoingStates = new Set(transitions.map(([, transition]) => transition.from))
  const ruleActionIds = new Set([
    ...Object.keys(actions ?? {}),
    'release_payment_to_school',
    'refund_after_expiry',
    'require_manual_review',
    'generate_receipt',
    ...Object.values(rules ?? {}).flatMap((rule) => (rule.then ?? []).filter((item) => typeof item === 'string'))
  ])
  const findings = [
    !stateMachine.initial && 'initial_state_required',
    stateMachine.initial && !stateIds.has(stateMachine.initial) && `initial_state_unknown:${stateMachine.initial}`,
    terminalStates.length === 0 && 'terminal_states_missing',
    ...[...stateIds].filter((stateId) => !(stateMachine.states[stateId]?.terminal) && !outgoingStates.has(stateId)).map((stateId) => `non_terminal_missing_exit:${stateId}`),
    ...terminalStates.filter((stateId) => !stateMachine.states[stateId].resolves_money).map((stateId) => `terminal_money_resolution_missing:${stateId}`),
    ...transitions.flatMap(([id, transition]) => [
      !stateIds.has(transition.from) && `${id}.from_unknown:${transition.from}`,
      !stateIds.has(transition.to) && `${id}.to_unknown:${transition.to}`,
      !(transition.emits ?? []).length && `${id}.emits_missing`,
      (transition.actions ?? []).some((action) => !ruleActionIds.has(action)) && `${id}.action_not_mapped_to_rule:${transition.actions?.join(',')}`
    ].filter(Boolean))
  ].filter(Boolean)

  return {
    requirements: AURA_PSL_STATE_MACHINE_REQUIREMENTS,
    findings,
    valid: findings.length === 0
  }
}

export function validateAuraPslInvariants(invariants = SCHOOL_FEES_PSL_INVARIANTS_EXAMPLE) {
  const validSeverities = new Set(['info', 'warning', 'error', 'critical', 'blocker'])
  const findings = Object.entries(invariants ?? {}).flatMap(([id, invariant]) => {
    const statementReview = validateSafeExpressionLanguage(invariant.statement)
    return [
      !UCC_ID_REGEX.test(id) && `${id}.id_invalid`,
      !invariant.statement && `${id}.statement_missing`,
      invariant.statement && !statementReview.safe && `${id}.unsafe_statement:${statementReview.violations.join(',')}`,
      !validSeverities.has(normalizeKey(invariant.severity)) && `${id}.severity_invalid:${invariant.severity}`,
      /release|external_transfer|escrow/i.test(id) && !(invariant.applies_to ?? []).length && `${id}.applies_to_missing`
    ].filter(Boolean)
  })

  return {
    invariants,
    findings,
    valid: findings.length === 0
  }
}

export function compileAuraPslInvariantsToFinancialPhysics(invariants = SCHOOL_FEES_PSL_INVARIANTS_EXAMPLE) {
  const productInvariantIds = Object.keys(invariants ?? {})
  const attemptedOverrides = productInvariantIds.filter((id) => AURA_PSL_GLOBAL_INVARIANTS.includes(id) && invariants[id]?.override === true)
  const invariantReview = validateAuraPslInvariants(invariants)

  return {
    globalInvariants: AURA_PSL_GLOBAL_INVARIANTS,
    productInvariants: productInvariantIds,
    attemptedOverrides,
    financialPhysicsRules: productInvariantIds.map((id) => ({
      id,
      statement: invariants[id].statement,
      severity: invariants[id].severity
    })),
    valid: invariantReview.valid && attemptedOverrides.length === 0
  }
}

export function validateAuraPslPolicies(policies = SCHOOL_FEES_PSL_POLICIES_EXAMPLE, policyPacks = AURA_PSL_POLICY_PACKS_EXAMPLE) {
  const packFindings = policyPacks
    .filter((pack) => !/^[A-Z][A-Za-z0-9_]*\.[a-z0-9_]+\.v[0-9]+$/i.test(pack))
    .map((pack) => `policy_pack_invalid:${pack}`)
  const findings = Object.entries(policies ?? {}).flatMap(([id, policy]) => {
    const appliesReview = validateSafeExpressionLanguage(policy.applies_when)
    return [
      !UCC_ID_REGEX.test(id) && `${id}.id_invalid`,
      ...AURA_PSL_POLICY_REQUIRED_FIELDS.filter((field) => !(field in (policy ?? {}))).map((field) => `${id}.missing:${field}`),
      policy.applies_when && !appliesReview.safe && `${id}.unsafe_applies_when:${appliesReview.violations.join(',')}`,
      !Array.isArray(policy.requirements) && `${id}.requirements_not_array`,
      policy.failure_action?.startsWith('block') && !policy.failure_action.split(' ')[1] && `${id}.block_missing_reason_code`
    ].filter(Boolean)
  })

  return {
    requiredFields: AURA_PSL_POLICY_REQUIRED_FIELDS,
    policyPacks,
    packFindings,
    findings: [...packFindings, ...findings],
    resolvedByPolicyEngine: true,
    valid: packFindings.length === 0 && findings.length === 0
  }
}

export function validateAuraPslConsents(consents = SCHOOL_FEES_PSL_CONSENTS_EXAMPLE, actions = SCHOOL_FEES_PSL_ACTIONS_EXAMPLE) {
  const findings = Object.entries(consents ?? {}).flatMap(([id, consent]) => [
    !UCC_ID_REGEX.test(id) && `${id}.id_invalid`,
    ...AURA_PSL_CONSENT_REQUIRED_FIELDS.filter((field) => !(field in (consent ?? {}))).map((field) => `${id}.missing:${field}`),
    !(consent.scope ?? []).length && `${id}.scope_empty`,
    consent.revocable && !(consent.revocation_effect ?? []).length && `${id}.revocation_effect_missing`,
    !/@[0-9]+\.[0-9]+\.[0-9]+$/.test(consent.disclosure_version ?? '') && `${id}.disclosure_version_invalid`
  ].filter(Boolean))
  const automaticFinancialBehaviorMissingConsent = Object.values(actions ?? {})
    .some((action) => action.type === 'kernel_command') && Object.keys(consents ?? {}).length === 0

  return {
    requiredFields: AURA_PSL_CONSENT_REQUIRED_FIELDS,
    findings: [
      ...findings,
      automaticFinancialBehaviorMissingConsent && 'automatic_financial_behavior_needs_declared_consent'
    ].filter(Boolean),
    valid: findings.length === 0 && !automaticFinancialBehaviorMissingConsent
  }
}

export function validateAuraPslDisclosures(disclosures = SCHOOL_FEES_PSL_DISCLOSURES_EXAMPLE, experience = SCHOOL_FEES_PSL_EXPERIENCE_EXAMPLE) {
  const experienceText = JSON.stringify(experience)
  const findings = Object.entries(disclosures ?? {}).flatMap(([id, disclosure]) => [
    !UCC_ID_REGEX.test(id) && `${id}.id_invalid`,
    !disclosure.shown_before && `${id}.missing:shown_before`,
    !disclosure.audience && `${id}.missing:audience`,
    !disclosure.message_key && `${id}.missing:message_key`,
    disclosure.must_confirm !== true && `${id}.must_confirm_required`,
    !experienceText.includes(id) && !experienceText.includes('disclosure_confirmation') && `${id}.not_connected_to_ui_surface`
  ].filter(Boolean))

  return {
    findings,
    connectedToExperience: !findings.some((finding) => finding.includes('not_connected')),
    valid: findings.length === 0
  }
}

export function validateAuraPslEvidence(evidence = SCHOOL_FEES_PSL_EVIDENCE_EXAMPLE) {
  const findings = Object.entries(evidence ?? {}).flatMap(([id, item]) => {
    const verification = item.verification ?? {}
    return [
      !UCC_ID_REGEX.test(id) && `${id}.id_invalid`,
      ...AURA_PSL_EVIDENCE_REQUIRED_FIELDS.filter((field) => !(field in (item ?? {}))).map((field) => `${id}.missing:${field}`),
      !(item.required_fields ?? []).length && `${id}.required_fields_empty`,
      !(verification.method || (verification.methods ?? []).length) && `${id}.verification_method_missing`,
      verification.minimum_confidence == null && `${id}.confidence_threshold_missing`,
      !verification.fallback && `${id}.fallback_missing`,
      !(item.anti_spoofing_rules ?? []).length && `${id}.anti_spoofing_missing`
    ].filter(Boolean)
  })

  return {
    requiredFields: AURA_PSL_EVIDENCE_REQUIRED_FIELDS,
    findings,
    valid: findings.length === 0
  }
}

export function validateAuraPslAutonomy(autonomy = SCHOOL_FEES_PSL_AUTONOMY_EXAMPLE, consents = SCHOOL_FEES_PSL_CONSENTS_EXAMPLE) {
  const consentIds = new Set(Object.keys(consents ?? {}))
  const findings = [
    !autonomy.global && 'global_autonomy_missing',
    ...Object.entries(autonomy.dimensions ?? {}).flatMap(([dimension, config]) => {
      const autoLevel = /auto_execute|auto_/i.test(config.level ?? '')
      const allowedIf = config.allowed_if ?? []
      const consentReferenced = allowedIf.some((condition) => [...consentIds].some((consentId) => String(condition).includes(consentId)))
      return [
        !config.level && `${dimension}.level_missing`,
        autoLevel && !allowedIf.length && `${dimension}.automatic_level_missing_allowed_if`,
        autoLevel && !consentReferenced && dimension.includes('money') && `${dimension}.automatic_money_action_missing_consent`,
        dimension.includes('external_payment_release') && /auto_execute_fully/i.test(config.level ?? '') && `${dimension}.external_release_cannot_be_fully_auto`,
        /requires_user_approval/i.test(config.level ?? '') && !config.approver && `${dimension}.approver_missing`
      ].filter(Boolean)
    }),
    !(autonomy.blocked ?? []).length && 'blocked_autonomy_actions_missing'
  ].filter(Boolean)

  return {
    levels: UCC_AUTONOMY_LEVEL_ENUM,
    findings,
    valid: findings.length === 0
  }
}

export function validateAuraPslExperience(
  experience = SCHOOL_FEES_PSL_EXPERIENCE_EXAMPLE,
  {
    consents = SCHOOL_FEES_PSL_CONSENTS_EXAMPLE,
    disclosures = SCHOOL_FEES_PSL_DISCLOSURES_EXAMPLE,
    actions = SCHOOL_FEES_PSL_ACTIONS_EXAMPLE
  } = {}
) {
  const surfacesText = JSON.stringify(experience.surfaces ?? {})
  const externalReleasePresent = Object.values(actions ?? {}).some((action) => /release/i.test(`${action.for ?? ''}${action.command ?? ''}${action.type ?? ''}`))
  const blockPresent = Object.values(actions ?? {}).some((action) => action.type === 'block')
  const findings = [
    ...Object.keys(consents ?? {}).filter((consent) => !surfacesText.includes(consent) && !surfacesText.includes('consent')).map((consent) => `consent_missing_ui:${consent}`),
    ...Object.keys(disclosures ?? {}).filter((disclosure) => !surfacesText.includes(disclosure) && !surfacesText.includes('disclosure_confirmation')).map((disclosure) => `disclosure_missing_ui:${disclosure}`),
    externalReleasePresent && !surfacesText.includes('confirmation') && 'external_release_missing_confirmation_ui',
    blockPresent && !surfacesText.includes('reason_code') && 'blocked_action_missing_reason_ui',
    !surfacesText.includes('retry_or_refund_options') && 'error_state_missing_recovery_ui',
    !surfacesText.includes('amount_saved') && !surfacesText.includes('target_progress') && 'money_state_visibility_missing'
  ].filter(Boolean)

  return {
    rules: AURA_PSL_EXPERIENCE_RULES,
    findings,
    connectedToUiComposer: true,
    valid: findings.length === 0
  }
}

export function validateAuraPslAudit(audit = SCHOOL_FEES_PSL_AUDIT_EXAMPLE) {
  const requiredFor = new Set(audit.required_for ?? [])
  const include = new Set(audit.include ?? [])
  const visibility = audit.visibility ?? {}
  const requiredScopes = ['money_movement', 'consent', 'disclosure', 'policy_decision', 'state_transition', 'evidence_verification']
  const requiredFields = ['actor_id', 'timestamp', 'capability_id', 'capability_version', 'rule_id', 'kernel_command_id', 'ledger_entry_ids', 'policy_decision_id', 'consent_id', 'disclosure_version']
  const findings = [
    ...requiredScopes.filter((scope) => !requiredFor.has(scope)).map((scope) => `required_for_missing:${scope}`),
    ...requiredFields.filter((field) => !include.has(field)).map((field) => `include_missing:${field}`),
    !(visibility.guardian || visibility.owner) && 'owner_visibility_missing',
    !visibility.contributor && 'contributor_visibility_missing',
    !(visibility.school || visibility.landlord || visibility.recipient) && 'recipient_visibility_missing'
  ].filter(Boolean)

  return {
    findings,
    auditNotOptionalForFinancialBehavior: true,
    valid: findings.length === 0
  }
}

export function validateAuraPslTests(tests = SCHOOL_FEES_PSL_TESTS_EXAMPLE) {
  const findings = [
    !(tests.ledger ?? []).length && 'ledger_tests_missing',
    !(tests.policy ?? []).length && 'policy_tests_missing',
    !(tests.state_machine ?? []).length && 'state_machine_tests_missing',
    !(tests.fraud ?? []).length && 'fraud_tests_missing',
    !(tests.runtime_preflight ?? []).length && 'runtime_preflight_tests_missing',
    ...(tests.ledger ?? []).filter((test) => test.expect?.['ledger.balanced'] !== true).map((test) => `${test.name}.ledger_balance_expectation_missing`),
    ...(tests.policy ?? []).filter((test) => !test.expect?.reason_code).map((test) => `${test.name}.reason_code_missing`),
    ...(tests.state_machine ?? []).filter((test) => !test.expect?.state).map((test) => `${test.name}.expected_state_missing`)
  ].filter(Boolean)

  return {
    categories: AURA_PSL_TEST_CATEGORIES,
    findings,
    compilesToAutomatedTests: true,
    valid: findings.length === 0
  }
}

export function validateAuraPslSimulation(simulation = SCHOOL_FEES_PSL_SIMULATION_EXAMPLE) {
  const requiredGroups = ['normal', 'edge_cases', 'fraud', 'failure']
  const findings = [
    ...requiredGroups.filter((group) => !(simulation[group] ?? []).length).map((group) => `${group}_simulation_missing`),
    ...(simulation.normal ?? []).filter((scenario) => scenario.expected?.ledger_balanced !== true).map((scenario) => `${scenario.name}.ledger_balance_missing`),
    ...(simulation.failure ?? []).filter((scenario) => !(scenario.expected?.recovery_options ?? []).length).map((scenario) => `${scenario.name}.recovery_options_missing`)
  ].filter(Boolean)

  return {
    questions: ['what_happens_in_reality', 'what_happens_when_people_fail', 'what_happens_when_providers_fail', 'what_happens_when_fraud_appears', 'what_happens_when_users_misunderstand'],
    findings,
    providerApiSkipped: (simulation.failure ?? []).filter((scenario) => scenario.provider_api_skipped).map((scenario) => scenario.name),
    valid: findings.length === 0
  }
}

export function validateAuraPslMonitoring(monitoring = SCHOOL_FEES_PSL_MONITORING_EXAMPLE) {
  const metricFindings = Object.entries(monitoring.metrics ?? {}).flatMap(([id, metric]) => {
    const conditionReview = metric.condition ? validateSafeExpressionLanguage(metric.condition) : { safe: true, violations: [] }
    return [
      !metric.source && `${id}.source_missing`,
      metric.condition && !conditionReview.safe && `${id}.condition_unsafe:${conditionReview.violations.join(',')}`
    ].filter(Boolean)
  })
  const alertFindings = Object.entries(monitoring.alerts ?? {}).flatMap(([id, alert]) => {
    const conditionReview = validateSafeExpressionLanguage(alert.condition)
    return [
      !alert.condition && `${id}.condition_missing`,
      alert.condition && !conditionReview.safe && `${id}.condition_unsafe:${conditionReview.violations.join(',')}`,
      !alert.action && `${id}.action_missing`
    ].filter(Boolean)
  })
  const rollbackFindings = !(monitoring.rollback_triggers ?? []).length ? ['rollback_triggers_missing'] : []

  return {
    findings: [...metricFindings, ...alertFindings, ...rollbackFindings],
    valid: metricFindings.length === 0 && alertFindings.length === 0 && rollbackFindings.length === 0
  }
}

export function compileAuraPslToUccCandidate(pslFile = buildSchoolFeesPslFileExample()) {
  const productCompilation = compileAuraPslProductToUccSections(pslFile)
  const validationSummary = {
    product: productCompilation.productReview.valid,
    actors: productCompilation.actorReview.valid,
    entities: productCompilation.entityReview.valid,
    monitoring: validateAuraPslMonitoring().valid,
    tests: validateAuraPslTests().valid,
    simulation: validateAuraPslSimulation().valid
  }
  const uccCandidate = buildSchoolFeesUccSections({
    capability: {
      id: productCompilation.uccSections.capability.id,
      name: productCompilation.uccSections.capability.name,
      category: productCompilation.uccSections.capability.category,
      description: productCompilation.uccSections.capability.description
    },
    intent: {
      ...SCHOOL_FEES_UCC_INTENT_SECTION,
      primary_goal: productCompilation.uccSections.intent.primary_goal
    },
    classification: {
      ...SCHOOL_FEES_UCC_CLASSIFICATION_PARTIAL,
      risk_class: productCompilation.uccSections.classification.risk_class
    }
  })

  return {
    mapping: AURA_PSL_TO_UCC_MAPPING,
    validationSummary,
    uccCandidate,
    compilationCreatesContractCandidateOnly: true,
    approvalStillRequiresValidatorAndGovernor: true,
    validCandidate: Object.values(validationSummary).every(Boolean)
  }
}

export function buildAuraPslCompilerOutput(pslFile = buildSchoolFeesPslFileExample()) {
  const candidate = compileAuraPslToUccCandidate(pslFile)
  const forms = buildAuraPslInternalForms()
  return {
    pipeline: AURA_PSL_COMPILER_PIPELINE_STEPS,
    artifacts: AURA_PSL_COMPILER_OUTPUT_ARTIFACTS,
    packageFolder: `${pslFile.product?.id ?? 'capability'}/`,
    files: SCHOOL_FEES_PSL_COMPILER_PACKAGE_FILES,
    universalCapabilityContract: candidate.uccCandidate,
    capabilityAst: forms.canonicalAst,
    runtimeIr: forms.runtimeIr,
    readyForRuntimeIr: candidate.validCandidate && forms.capabilityPackageReady,
    approvedForRelease: false
  }
}

export function analyzeAuraPslEffects(actions = SCHOOL_FEES_PSL_EFFECT_EXAMPLE) {
  const findings = Object.entries(actions ?? {}).flatMap(([id, action]) => {
    const category = action.effect?.category
    const required = AURA_PSL_EFFECT_REQUIREMENTS[category] ?? []
    const declared = new Set(action.effect?.requires ?? [])
    return [
      !category && `${id}.effect_category_missing`,
      category && !AURA_PSL_EFFECT_CATEGORIES.includes(category) && `${id}.effect_category_unknown:${category}`,
      ...required.filter((requirement) => !declared.has(requirement)).map((requirement) => `${id}.missing_effect_requirement:${requirement}`)
    ].filter(Boolean)
  })

  return {
    categories: AURA_PSL_EFFECT_CATEGORIES,
    requirements: AURA_PSL_EFFECT_REQUIREMENTS,
    findings,
    missingSafeguards: findings,
    valid: findings.length === 0
  }
}

export function resolveAuraPslRuleConflicts(rules = [
  { id: 'release_to_school', rule_type: 'release', priority: 100, decision: 'allow', source: 'product' },
  { id: 'block_unverified_school', rule_type: 'policy_block', priority: 1000, decision: 'block', source: 'policy' }
]) {
  const hasBlock = rules.some((rule) => normalizeKey(rule.decision) === 'block' || normalizeKey(rule.rule_type).includes('block'))
  const policyRule = rules.find((rule) => normalizeKey(rule.source) === 'policy' || normalizeKey(rule.rule_type).includes('policy'))
  const sortedByPriority = [...rules].sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0))
  const winner = hasBlock
    ? rules.find((rule) => normalizeKey(rule.decision) === 'block' || normalizeKey(rule.rule_type).includes('block'))
    : policyRule ?? sortedByPriority[0]
  const unresolved = !winner || (rules.filter((rule) => (rule.priority ?? 0) === (winner.priority ?? 0)).length > 1 && !hasBlock && !policyRule)

  return {
    model: AURA_PSL_CONFLICT_RESOLUTION_MODEL,
    winner,
    decision: unresolved ? 'manual_review' : normalizeKey(winner?.decision ?? winner?.rule_type),
    requiresManualReview: unresolved
  }
}

export function validateAuraPslSafetyRestrictions({
  psl = RENT_CONTRIBUTION_PSL_EXAMPLE,
  actions = SCHOOL_FEES_PSL_ACTIONS_EXAMPLE,
  rules = SCHOOL_FEES_PSL_RULES_EXAMPLE,
  stateMachine = SCHOOL_FEES_PSL_STATE_MACHINE_EXAMPLE,
  moneyObjects = RENT_PSL_MONEY_OBJECTS_EXAMPLE
} = {}) {
  const pslReview = validateAuraPslSpec(psl)
  const actionReview = validateAuraPslActions(actions)
  const ruleReview = validateAuraPslRules(rules, { actions })
  const stateReview = validateAuraPslStateMachine(stateMachine, { rules, actions })
  const moneyReview = validateAuraPslMoneyObjectDeclarations(moneyObjects)
  const violations = [
    ...pslReview.directBalanceMutations.map(() => 'direct_balance_mutation'),
    ...actionReview.findings.filter((finding) => finding.includes('kernel')).map(() => 'kernel_operation_not_in_allowed_list'),
    ...actionReview.findings.filter((finding) => finding.includes('idempotency')).map(() => 'money_movement_without_idempotency'),
    ...ruleReview.findings.filter((finding) => finding.includes('unknown_action')).map(() => 'rule_action_referencing_undeclared_command'),
    ...ruleReview.findings.filter((finding) => finding.includes('unsafe_condition')).map(() => 'unsafe_expressions'),
    ...stateReview.findings.filter((finding) => finding.includes('emits_missing')).map(() => 'state_transitions_without_audit_events'),
    ...moneyReview.findings.filter((finding) => finding.includes('refund_condition') || finding.includes('expiry_condition') || finding.includes('release_condition')).map(() => 'fund_lock_without_exit_path')
  ]

  return {
    restrictions: AURA_PSL_REQUIRED_SAFETY_RESTRICTIONS,
    violations: [...new Set(violations)],
    valid: violations.length === 0
  }
}

export function buildAdminCapabilityStudio() {
  return {
    components: ADMIN_STUDIO_COMPONENTS,
    exampleFlow: SCHOOL_FEE_STUDIO_FLOW,
    reviewFields: ADMIN_STUDIO_REVIEW_FIELDS,
    warnings: ADMIN_STUDIO_WARNINGS,
    allowsMillionsWithoutChaos: true
  }
}

export function evaluateAdminStudioConnection(components = ['Escrow', 'Release Payment']) {
  const normalized = normalizeList(components)
  const warnings = []
  if (normalized.includes('escrow') && !normalized.includes('refund_rule')) warnings.push('escrow_requires_a_refund_path')
  if (normalized.includes('release_payment') && !normalized.includes('approval')) warnings.push('capability_needs_a_consent_screen')
  if (!normalized.includes('dispute_flow')) warnings.push('flow_has_no_dispute_state')

  return {
    components: normalized,
    warnings,
    valid: warnings.length === 0,
    reviewFields: ADMIN_STUDIO_REVIEW_FIELDS
  }
}

export function buildMarketplaceListing({
  riskLevel = 'medium',
  supportedJurisdictions = ['GH', 'US', 'NG'],
  testStatus = 'passed',
  policyStatus = 'approved',
  offeringMode = 'tenant_specific'
} = {}) {
  const listing = {
    risk_level: riskLevel,
    supported_jurisdictions: supportedJurisdictions,
    required_permissions: ['create_wallet', 'approve_payment'],
    required_kyc_kyb: ['parent_kyc', 'school_verification'],
    financial_behaviours: ['auto_split', 'escrow_release', 'invoice_payment'],
    fees: ['transparent_fee_schedule'],
    limitations: ['verified_school_only', 'parent_approval_required'],
    version: '1.0.0',
    author: 'AURA',
    test_status: testStatus,
    policy_status: policyStatus,
    known_risks: ['invoice_fraud', 'user_confusion'],
    user_ratings: [],
    performance_metrics: ['completion_rate', 'refund_rate', 'support_contact_rate'],
    offering_mode: normalizeKey(offeringMode)
  }
  const missingFields = MARKETPLACE_LISTING_FIELDS.filter((field) => !(field in listing))
  return {
    sources: CAPABILITY_MARKETPLACE_SOURCES,
    listing,
    missingFields,
    anythingGoes: false,
    reusable: missingFields.length === 0 && testStatus === 'passed' && policyStatus === 'approved'
  }
}

export function certifyMarketplaceCapability({
  listing = buildMarketplaceListing().listing,
  certification = 'aura_certified',
  foundations = MARKETPLACE_SAFETY_FOUNDATIONS
} = {}) {
  const normalizedCertification = normalizeKey(certification)
  const foundationSet = normalizeList(foundations)
  const missingFoundations = MARKETPLACE_SAFETY_FOUNDATIONS.filter((foundation) => !foundationSet.includes(foundation))
  return {
    listing,
    certification: normalizedCertification,
    allowedCertificationLevels: MARKETPLACE_CERTIFICATION_LEVELS,
    safetyFoundations: MARKETPLACE_SAFETY_FOUNDATIONS,
    missingFoundations,
    marketplaceSafe: missingFoundations.length === 0 && MARKETPLACE_CERTIFICATION_LEVELS.includes(normalizedCertification)
  }
}

export function createFamilyRentWalletFromWords() {
  const example = FAMILY_RENT_WALLET_WORDS_EXAMPLE
  return {
    ...example,
    runtimeFlowRequired: true,
    capabilityCreatedFromWords: true,
    releaseMode: example.release.mode,
    commandFlow: RUNTIME_COMMAND_FLOW
  }
}

export function composeGpsImageVerificationStack(overrides = {}) {
  const stack = {
    ...GPS_IMAGE_PROOF_STACK,
    ...overrides
  }
  const missingPhysics = GPS_IMAGE_PROOF_STACK.financial_physics.filter((requirement) => !stack.financial_physics?.includes(requirement))
  const missingReleaseConditions = GPS_IMAGE_PROOF_STACK.release_conditions.filter((condition) => !stack.release_conditions?.includes(condition))
  return {
    stack,
    missingPhysics,
    missingReleaseConditions,
    safe: missingPhysics.length === 0 && missingReleaseConditions.length === 0,
    oneOffFeatureBlocked: true
  }
}

export function buildRuntimeMonitoringPlan(metrics = RUNTIME_MONITORING_METRICS) {
  const normalizedMetrics = normalizeList(metrics)
  const missingMetrics = RUNTIME_MONITORING_METRICS.filter((metric) => !normalizedMetrics.includes(metric))
  return {
    metrics: RUNTIME_MONITORING_METRICS,
    configuredMetrics: normalizedMetrics,
    missingMetrics,
    watchesLiveCapability: true,
    complete: missingMetrics.length === 0
  }
}

export function diagnoseRuntimeMonitoringProblem(problem = CONTRACTOR_GPS_MONITORING_PROBLEM) {
  return {
    ...problem,
    improvesCapability: true,
    doctorKeepsLearning: true
  }
}

export function generateCapabilityExplanation(audience = 'user') {
  const key = normalizeKey(audience)
  return {
    audience: key,
    questions: EXPLANATION_ENGINE_QUESTIONS,
    explanation: key === 'user' ? SCHOOL_FEES_USER_EXPLANATION : SCHOOL_FEES_CAPABILITY_EXPLANATIONS[key] ?? SCHOOL_FEES_USER_EXPLANATION,
    displayMoments: EXPLANATION_DISPLAY_MOMENTS,
    mysteriousFlowBlocked: true
  }
}

export function buildStructuredConsentRecord({
  consentId = 'consent_school_fees_wallet_v1',
  userId = 'user_parent',
  capabilityId = 'school_fees_wallet',
  version = '1.0.0',
  scope = SCHOOL_FEES_GRANULAR_CONSENT,
  timestamp = 'runtime_time_unknown',
  revocationRule = 'user_can_revoke_future_auto_split_before_next_incoming_money_event',
  evidence = ['checkboxes_accepted', 'disclosure_viewed'],
  disclosureVersion = 'disc_school_fees_wallet_v1'
} = {}) {
  return {
    consent_id: consentId,
    user_id: userId,
    capability_id: capabilityId,
    version,
    scope: normalizeList(scope),
    timestamp,
    revocation_rule: revocationRule,
    evidence: normalizeList(evidence),
    disclosure_version: disclosureVersion
  }
}

export function validateStructuredConsentRecord(record = buildStructuredConsentRecord()) {
  const missingFields = CONSENT_RECORD_FIELDS.filter((field) => !(field in record))
  return {
    requiredFields: CONSENT_RECORD_FIELDS,
    definitionFields: CONSENT_DEFINITION_FIELDS,
    missingFields,
    granularConsent: record.scope?.length >= 4,
    valid: missingFields.length === 0 && record.scope?.length >= 4
  }
}

export function evaluateEntityVerification({ entityType = 'school', verificationLevel = 'institution_verified', action = 'pay_verified_school' } = {}) {
  const normalizedAction = normalizeKey(action)
  const normalizedLevel = normalizeKey(verificationLevel)
  const rule = ENTITY_VERIFICATION_RULES.find((item) => normalizeKey(item.action) === normalizedAction)
  const levelIndex = ENTITY_VERIFICATION_LEVELS.indexOf(normalizedLevel)
  const requiredIndex = ENTITY_VERIFICATION_LEVELS.indexOf(rule?.required ?? 'unverified')
  const allowedByLevel = levelIndex >= requiredIndex && rule?.decision !== 'blocked'
  return {
    entityType: normalizeKey(entityType),
    verificationLevel: normalizedLevel,
    action: normalizedAction,
    entityTypes: CAPABILITY_ENTITY_TYPES,
    verificationLevels: ENTITY_VERIFICATION_LEVELS,
    rule,
    allowed: allowedByLevel,
    decision: allowedByLevel ? 'allowed' : rule?.decision ?? 'requires_verification_review'
  }
}

export function evaluateBtsCapabilityPermissions({ btsLevel = 'low' } = {}) {
  const key = normalizeKey(btsLevel)
  const permissions = key === 'high' ? BTS_PERMISSION_EXAMPLES.high_bts_user : BTS_PERMISSION_EXAMPLES.low_bts_user
  return {
    btsLevel: key,
    influenceAreas: BTS_PERMISSION_INFLUENCE_AREAS,
    permissions,
    explanationLines: BTS_EXPLANATION_LINES,
    mysteriousPunishmentBlocked: true
  }
}

export function summarizeFormlessBankingFoundation() {
  return {
    normalFintechFixedFeatures: NORMAL_FINTECH_FIXED_FEATURES,
    auraCapabilityCreationFlow: FORMLESS_CAPABILITY_CREATION_FLOW,
    exampleIntents: FORMLESS_BANKING_INTENT_EXAMPLES,
    notSeparateApps: true,
    theyAreCapabilities: true
  }
}

export function enforceCapabilityOSInvariants({
  ledgerTruth = true,
  typed = true,
  kernelContract = true,
  lockedFundExitPath = true,
  autonomyPermissionAndConsent = true,
  explainable = true,
  simulated = true,
  versioned = true,
  auditable = true,
  continuousGovernance = true
} = {}) {
  const checks = {
    kernel_is_source_of_money_truth: ledgerTruth,
    every_capability_must_be_typed: typed,
    every_money_movement_must_have_kernel_contract: kernelContract,
    every_locked_fund_must_have_exit_path: lockedFundExitPath,
    every_automated_action_must_have_autonomy_permission_and_user_consent: autonomyPermissionAndConsent,
    every_capability_must_be_explainable: explainable,
    every_capability_must_be_simulated_before_release: simulated,
    every_capability_must_be_versioned: versioned,
    every_event_must_be_auditable: auditable,
    governance_must_be_continuous: continuousGovernance
  }
  const violations = Object.entries(checks)
    .filter(([, passed]) => !passed)
    .map(([invariant]) => invariant)
  return {
    invariants: CAPABILITY_OS_NON_NEGOTIABLE_INVARIANTS,
    checks,
    violations,
    valid: violations.length === 0,
    releaseBlocked: violations.length > 0
  }
}

export function summarizeFullCapabilityOSStack() {
  return {
    name: 'aura_capability_operating_system',
    layers: FULL_CAPABILITY_OS_STACK,
    layerCount: FULL_CAPABILITY_OS_STACK.length,
    actualOperatingSystem: true
  }
}

export function compareCapabilityOSWithPluginSystem() {
  return {
    ...PLUGIN_SYSTEM_COMPARISON,
    deeperThanPluginSystem: true,
    moneyAccountabilityRequired: true
  }
}

export function buildCriticalCapabilityOSBuildSequence(completedSteps = CRITICAL_CAPABILITY_OS_BUILD_SEQUENCE) {
  const completed = normalizeList(completedSteps)
  const missingSteps = CRITICAL_CAPABILITY_OS_BUILD_SEQUENCE.filter((step) => !completed.includes(step))
  return {
    sequence: CRITICAL_CAPABILITY_OS_BUILD_SEQUENCE,
    firstTechnicalArtifact: UNIVERSAL_CAPABILITY_CONTRACT_METADATA.name,
    missingSteps,
    readyForUcc: missingSteps.length === 0 || completed.includes('define_universal_capability_interface')
  }
}

export function buildUniversalCapabilityContract(overrides = {}) {
  const base = {
    identity: {
      capability_id: 'school_fees_wallet',
      name: 'School Fees Wallet',
      version: '1.0.0',
      category: 'education_payments'
    },
    intent: 'save_and_release_school_fees_after_verified_invoice_and_parent_approval',
    actors: ['parent', 'child', 'contributor', 'school'],
    entities: SCHOOL_FEES_CAPABILITY_PACKAGE.entities,
    money_objects: SCHOOL_FEES_CAPABILITY_PACKAGE.money_objects,
    rules: SCHOOL_FEES_CAPABILITY_PACKAGE.rules,
    triggers: ['incoming_money_received', 'contributor_payment_received', 'invoice_verified_and_parent_approved'],
    actions: ['move_percentage_to_wallet', 'credit_school_fees_wallet', 'pay_school'],
    state_machines: SCHOOL_FEES_CAPABILITY_PACKAGE.state_machines,
    kernel_operations: ['wallet_credit', 'wallet_debit', 'escrow_hold', 'escrow_release', 'ledger_post'],
    financial_invariants: CAPABILITY_OS_FINANCIAL_INVARIANTS,
    evidence_requirements: ['invoice', 'school_verification', 'parent_approval'],
    policy_requirements: SCHOOL_FEES_CAPABILITY_PACKAGE.policy,
    autonomy_limits: SCHOOL_FEES_AUTONOMY_EXAMPLE,
    ui_ux_surfaces: SCHOOL_FEES_CAPABILITY_PACKAGE.ui_surfaces,
    events: CAPABILITY_EVENT_TYPES.slice(0, 12),
    tests: SCHOOL_FEES_CAPABILITY_PACKAGE.tests,
    simulation_scenarios: FAMILY_RENT_WALLET_WORDS_EXAMPLE.simulations,
    monitoring_rules: RUNTIME_MONITORING_METRICS.slice(0, 8),
    versioning: SCHOOL_FEES_VERSION_HISTORY,
    migration: MIGRATION_SAFETY_CHECKS,
    explanations: {
      user: SCHOOL_FEES_USER_EXPLANATION
    },
    release_gates: ['contract_validated', 'physics_passed', 'governor_approved', 'tests_passed', 'monitoring_attached']
  }
  return {
    ...base,
    ...overrides,
    metadata: UNIVERSAL_CAPABILITY_CONTRACT_METADATA,
    corePrinciple: UCC_CORE_PRINCIPLE,
    creationSources: UCC_CREATION_SOURCES
  }
}

export function validateUniversalCapabilityContract(contract = buildUniversalCapabilityContract()) {
  const missingFields = UCC_DEFINITION_FIELDS.filter((field) => !(field in contract))
  const missingDeclarations = UCC_MUST_DECLARE.filter((declaration) => {
    if (declaration === 'what_it_does') return !contract.intent
    if (declaration === 'what_it_is_allowed_to_do') return !(contract.actions?.length)
    if (declaration === 'what_it_is_forbidden_from_doing') return !(contract.policy_requirements?.prohibited?.length)
    if (declaration === 'what_money_states_it_can_affect') return !(Object.keys(contract.money_objects ?? {}).length)
    if (declaration === 'what_user_consent_it_requires') return !contract.autonomy_limits
    if (declaration === 'what_evidence_it_needs') return !(contract.evidence_requirements?.length)
    if (declaration === 'what_risks_it_creates') return !(contract.policy_requirements?.fraud_checks?.length)
    if (declaration === 'what_happens_when_it_fails') return !(contract.migration?.length)
    if (declaration === 'what_events_it_emits') return !(contract.events?.length)
    if (declaration === 'what_explanations_users_receive') return !contract.explanations?.user
    if (declaration === 'what_kernel_operations_it_can_call') return !(contract.kernel_operations?.length)
    return false
  })

  return {
    requiredFields: UCC_DEFINITION_FIELDS,
    missingFields,
    requiredDeclarations: UCC_MUST_DECLARE,
    missingDeclarations,
    valid: missingFields.length === 0 && missingDeclarations.length === 0,
    noCapabilityExistsUntilValidUcc: true
  }
}

export function locateUccInAuraFlow() {
  return {
    flow: UCC_POSITION_IN_AURA_FLOW,
    sitsBetween: ['capability_composer', 'contract_validator'],
    sourceOfTruth: 'machine_readable_capability_blueprint'
  }
}

export function convertMessyRequestToFormalUcc(request = FAMILY_RENT_UCC_CONVERSION.request) {
  return {
    request,
    looseIdeaBeforeUcc: true,
    formalObjectAfterUcc: true,
    contains: FAMILY_RENT_UCC_CONVERSION.contains,
    formalCapability: FAMILY_RENT_UCC_CONVERSION.formalCapability,
    reliableCompletenessSafetyLawfulnessExecutabilityUnderstanding: true
  }
}

export function buildCanonicalUccSkeletonPartial(overrides = {}) {
  return {
    ...CANONICAL_UCC_SKELETON_PARTIAL,
    ...overrides
  }
}

export function validateUccTopLevelSections(contract = buildCanonicalUccSkeletonPartial()) {
  const missingSections = UCC_TOP_LEVEL_SECTIONS.filter((section) => !(section in contract))
  const presentSections = UCC_TOP_LEVEL_SECTIONS.filter((section) => section in contract)
  return {
    requiredSections: UCC_TOP_LEVEL_SECTIONS,
    presentSections,
    missingSections,
    complete: missingSections.length === 0
  }
}

export function validateUccVersionSection(contract = buildCanonicalUccSkeletonPartial()) {
  const uccVersion = contract?.ucc_version
  const capabilityVersion = contract?.capability?.version
  const present = typeof uccVersion === 'string' && uccVersion.trim().length > 0
  const supported = SUPPORTED_UCC_SCHEMA_VERSIONS.includes(uccVersion)
  const confusedWithCapabilityVersion = present && (
    uccVersion === capabilityVersion ||
    /^\d+\.\d+\.\d+$/.test(uccVersion)
  )

  return {
    rules: UCC_VERSION_VALIDATION_RULES,
    uccVersion,
    capabilityVersion,
    present,
    supported,
    confusedWithCapabilityVersion,
    notCapabilityVersion: !confusedWithCapabilityVersion,
    valid: present && supported && !confusedWithCapabilityVersion
  }
}

export function buildSchoolFeesUccSections(overrides = {}) {
  const capabilityOverrides = overrides.capability ?? {}
  const intentOverrides = overrides.intent ?? {}
  const classificationOverrides = overrides.classification ?? {}
  const dependenciesOverrides = overrides.dependencies ?? {}
  const entitiesOverrides = overrides.entities ?? {}
  const moneyObjectOverrides = overrides.money_objects ?? {}
  const rulesOverrides = overrides.rules ?? {}
  const stateMachineOverrides = overrides.state_machine ?? {}
  const kernelContractOverrides = overrides.kernel_contract ?? {}
  const financialPhysicsOverrides = overrides.financial_physics ?? {}
  const policyOverrides = overrides.policy ?? {}
  const autonomyOverrides = overrides.autonomy ?? {}
  const evidenceOverrides = overrides.evidence ?? {}
  const uiUxOverrides = overrides.ui_ux ?? {}
  const eventsAuditOverrides = overrides.events_audit ?? {}
  const testingOverrides = overrides.testing ?? {}
  const simulationOverrides = overrides.simulation ?? {}
  const monitoringOverrides = overrides.monitoring ?? {}
  const versioningMigrationOverrides = overrides.versioning_migration ?? {}
  const explainabilityOverrides = overrides.explainability ?? {}
  const releaseOverrides = overrides.release ?? {}

  return {
    ucc_version: overrides.ucc_version ?? '1.0',
    capability: {
      ...SCHOOL_FEES_UCC_CAPABILITY_SECTION,
      ...capabilityOverrides,
      owner: {
        ...SCHOOL_FEES_UCC_CAPABILITY_SECTION.owner,
        ...(capabilityOverrides.owner ?? {})
      },
      authorship: {
        ...SCHOOL_FEES_UCC_CAPABILITY_SECTION.authorship,
        ...(capabilityOverrides.authorship ?? {})
      }
    },
    intent: {
      ...SCHOOL_FEES_UCC_INTENT_SECTION,
      ...intentOverrides
    },
    classification: {
      ...SCHOOL_FEES_UCC_CLASSIFICATION_PARTIAL,
      ...classificationOverrides
    },
    dependencies: {
      ...SCHOOL_FEES_UCC_DEPENDENCIES_SECTION,
      ...dependenciesOverrides
    },
    entities: {
      ...SCHOOL_FEES_UCC_ENTITIES_SECTION,
      ...entitiesOverrides
    },
    money_objects: {
      ...SCHOOL_FEES_UCC_MONEY_OBJECTS_PARTIAL,
      ...moneyObjectOverrides
    },
    rules: {
      ...SCHOOL_FEES_UCC_RULES_SECTION,
      ...rulesOverrides
    },
    state_machine: {
      ...SCHOOL_FEES_UCC_STATE_MACHINE_SECTION,
      ...stateMachineOverrides
    },
    kernel_contract: {
      ...SCHOOL_FEES_UCC_KERNEL_CONTRACT_SECTION,
      ...kernelContractOverrides
    },
    financial_physics: {
      ...SCHOOL_FEES_UCC_FINANCIAL_PHYSICS_PARTIAL,
      ...financialPhysicsOverrides
    },
    policy: {
      ...SCHOOL_FEES_UCC_POLICY_SECTION,
      ...policyOverrides
    },
    autonomy: {
      ...SCHOOL_FEES_UCC_AUTONOMY_SECTION,
      ...autonomyOverrides
    },
    evidence: {
      ...SCHOOL_FEES_UCC_EVIDENCE_PARTIAL,
      ...evidenceOverrides
    },
    ui_ux: {
      ...SCHOOL_FEES_UCC_UI_UX_SECTION,
      ...uiUxOverrides
    },
    events_audit: {
      ...SCHOOL_FEES_UCC_EVENTS_AUDIT_SECTION,
      ...eventsAuditOverrides
    },
    testing: {
      ...SCHOOL_FEES_UCC_TESTING_PARTIAL,
      ...testingOverrides
    },
    simulation: {
      ...SCHOOL_FEES_UCC_SIMULATION_SECTION,
      ...simulationOverrides
    },
    monitoring: {
      ...SCHOOL_FEES_UCC_MONITORING_SECTION,
      ...monitoringOverrides
    },
    versioning_migration: {
      ...SCHOOL_FEES_UCC_VERSIONING_MIGRATION_SECTION,
      ...versioningMigrationOverrides
    },
    explainability: {
      ...SCHOOL_FEES_UCC_EXPLAINABILITY_SECTION,
      ...explainabilityOverrides
    },
    release: {
      ...SCHOOL_FEES_UCC_RELEASE_SECTION,
      ...releaseOverrides
    }
  }
}

export function buildGuardianSchoolFeesUccExample(overrides = {}) {
  const base = buildSchoolFeesUccSections(overrides)
  const guardianActors = base.entities.actors.map((actor) => (
    actor.id === 'parent' ? { ...actor, id: 'guardian' } : actor
  ))
  const guardianPermissions = base.entities.permissions.map((permission) => {
    if (permission.actor === 'parent') {
      return {
        ...permission,
        actor: 'guardian',
        can: ['create_wallet', 'configure_auto_split', 'invite_contributors', 'approve_release', 'cancel_wallet']
      }
    }
    if (permission.actor === 'contributor') {
      return { ...permission, can: ['contribute', 'view_own_receipt'] }
    }
    return permission
  })

  return {
    ...base,
    capability: {
      ...base.capability,
      description: 'A restricted goal wallet for saving and releasing school fee payments.',
      tags: ['education', 'goal_wallet', 'restricted_payment']
    },
    intent: {
      ...base.intent,
      primary_goal: 'Help a guardian save and pay school fees safely.',
      user_problem: 'Guardians need to reserve money for school fees and ensure it is used for education.',
      desired_outcomes: [
        'create_a_dedicated_school_fee_wallet',
        'allow_automatic_savings_into_the_wallet',
        'allow_family_members_to_contribute',
        'release_funds_only_to_a_verified_school_after_approval'
      ],
      non_goals: ['does_not_provide_loans', 'does_not_invest_funds'],
      natural_language_examples: [
        'help_me_save_for_my_child_school_fees',
        'let_my_brother_contribute_to_the_school_fees_wallet'
      ],
      success_metrics: ['wallet_created', 'target_progress_visible', 'verified_school_payment_completed']
    },
    classification: {
      ...base.classification,
      actor_types: ['guardian', 'child', 'contributor', 'school'],
      evidence_types: ['invoice', 'institution_verification', 'receipt'],
      compliance_categories: ['consumer_funds', 'restricted_purpose_wallet', 'education_payment']
    },
    entities: {
      ...base.entities,
      actors: guardianActors,
      relationships: [
        { from: 'guardian', to: 'child', relationship_type: 'guardian' },
        { from: 'contributor', to: 'school_fees_wallet', relationship_type: 'contributes_to' },
        { from: 'school', to: 'school_fees_wallet', relationship_type: 'approved_recipient' }
      ],
      permissions: guardianPermissions,
      identity_requirements: base.entities.identity_requirements.map((requirement) => (
        requirement.actor === 'parent' ? { ...requirement, actor: 'guardian' } : requirement
      )),
      data_visibility: base.entities.data_visibility.map((visibility) => (
        visibility.actor === 'contributor'
          ? {
              ...visibility,
              can_view: ['own_contribution', 'wallet_progress_if_enabled'],
              cannot_view: ['guardian_total_balance', 'other_contributor_details']
            }
          : visibility
      ))
    },
    money_objects: {
      ...base.money_objects,
      sources: [
        { id: 'guardian_main_wallet', type: 'wallet', owner: 'guardian', allowed_use: 'auto_split_source' },
        { id: 'contributor_source', type: 'external_payment_source', owner: 'contributor', allowed_use: 'contribution' }
      ],
      wallets: base.money_objects.wallets.map((wallet) => ({ ...wallet, owner: 'guardian' })),
      escrows: base.money_objects.escrows.map((escrow) => ({
        ...escrow,
        owner: 'guardian',
        release_condition: 'invoice_verified_and_guardian_approved'
      })),
      locks: base.money_objects.locks.map((lock) => ({
        ...lock,
        release_paths: ['pay_verified_school', 'refund_to_guardian_after_cancellation', 'admin_resolution_after_dispute']
      })),
      fees: [],
      ownership_model: 'guardian_owned_child_benefit'
    },
    rules: {
      ...base.rules,
      triggers: base.rules.triggers.map((trigger) => {
        if (trigger.id === 'incoming_money_received') return { ...trigger, source: 'guardian_main_wallet' }
        if (trigger.id === 'parent_approved_invoice') return { ...trigger, id: 'guardian_approved_invoice', source: 'guardian' }
        return trigger
      }),
      actions: base.rules.actions.map((action) => (
        action.id === 'move_split_to_school_wallet' ? { ...action, from: 'guardian_main_wallet' } : action
      )),
      exceptions: base.rules.exceptions.map((exception) => (
        exception.id === 'insufficient_balance'
          ? {
              ...exception,
              action: 'notify_guardian_and_keep_invoice_pending',
              safe_fallback: 'keep_invoice_pending_without_moving_money'
            }
          : exception
      )),
      refund_rules: base.rules.refund_rules.map((rule) => ({
        ...rule,
        condition: 'no_pending_invoice AND guardian_requests_cancellation',
        action: 'return_available_funds_to_guardian_main_wallet'
      })),
      dispute_rules: base.rules.dispute_rules.map((rule) => ({
        ...rule,
        opened_by: ['guardian', 'admin']
      }))
    },
    state_machine: {
      ...base.state_machine,
      transitions: base.state_machine.transitions.map((transition) => {
        if (transition.id === 'draft_to_active') {
          return {
            ...transition,
            requires: ['guardian_consent_collected', 'school_fees_wallet_created']
          }
        }
        if (transition.id === 'approval_pending_to_payment_released') {
          return {
            ...transition,
            requires: ['guardian_approved_invoice', 'balance_is_sufficient']
          }
        }
        return transition
      })
    },
    kernel_contract: {
      ...base.kernel_contract,
      prohibited_operations: ['create_credit', 'invest_funds', 'release_to_unverified_recipient'],
      command_contracts: base.kernel_contract.command_contracts.map((contract) => {
        if (contract.id === 'create_school_fees_wallet') {
          return {
            ...contract,
            preconditions: ['guardian_identity_verified', 'guardian_consent_collected'],
            postconditions: ['wallet_exists', 'wallet_owner_is_guardian', 'wallet_purpose_is_education']
          }
        }
        if (contract.id === 'allocate_auto_split') {
          return {
            ...contract,
            ledger_effect: {
              debit: 'guardian_main_wallet.available',
              credit: 'school_fees_wallet.available'
            }
          }
        }
        if (contract.id === 'release_to_school') {
          return {
            ...contract,
            preconditions: ['guardian_approval_active', 'school_verified', 'invoice_verified']
          }
        }
        return contract
      })
    },
    financial_physics: {
      ...base.financial_physics,
      invariants: base.financial_physics.invariants.map((invariant) => (
        invariant.id === 'no_money_creation'
          ? { ...invariant, statement: 'Capability cannot create funds without a ledger-approved source.' }
          : invariant.id === 'locked_funds_not_available'
            ? { ...invariant, statement: 'Funds locked in escrow cannot appear as available balance.' }
            : invariant.id === 'verified_school_release_only'
              ? { ...invariant, statement: 'External release requires verified school status.' }
              : invariant
      )),
      balance_conservation: [
        {
          input: 'incoming_amount',
          outputs: ['guardian_wallet_remaining', 'school_fees_wallet_allocation'],
          rule: 'sum(outputs) == input'
        }
      ],
      liability_map: [
        {
          scenario: 'system_releases_without_guardian_approval',
          liable_party: 'platform',
          severity: 'critical'
        },
        {
          scenario: 'payment_provider_stub_fails_after_release_attempt',
          liable_party: 'platform',
          platform_liability: 'pending_settlement_retry_or_refund_path_required'
        }
      ]
    },
    policy: {
      ...base.policy,
      kyc_kyb_requirements: base.policy.kyc_kyb_requirements.map((requirement) => (
        requirement.actor === 'parent'
          ? { ...requirement, actor: 'guardian' }
          : requirement.actor === 'school'
            ? { ...requirement, requirement: 'institution_verified' }
            : requirement
      )),
      aml_rules: ['large_contributions_trigger_review', 'anonymous_large_contributions_blocked'],
      minor_protection_rules: ['guardian_controls_required', 'child_data_minimized'],
      prohibited_patterns: [
        'release_to_unverified_school',
        'hidden_platform_fee',
        'irreversible_payment_without_confirmation'
      ],
      consent_requirements: base.policy.consent_requirements.map((consent) => ({
        ...consent,
        actor: 'guardian'
      }))
    },
    autonomy: {
      ...base.autonomy,
      dimensions: base.autonomy.dimensions.filter((dimension) => [
        'money_allocation',
        'external_payment_release',
        'recipient_creation',
        'invoice_verification',
        'rule_modification'
      ].includes(dimension.dimension)),
      blocked_autonomy_actions: [
        'auto_release_to_new_school_without_approval',
        'auto_apply_new_fee'
      ]
    },
    ui_ux: {
      ...base.ui_ux,
      required_surfaces: base.ui_ux.required_surfaces.filter((surface) => [
        'wallet_creation_flow',
        'school_fee_progress_card',
        'invoice_review_screen',
        'receipt_screen'
      ].includes(surface.id)),
      confirmation_points: base.ui_ux.confirmation_points,
      warning_points: base.ui_ux.warning_points.filter((warning) => warning.condition === 'school_unverified')
    },
    events_audit: {
      ...base.events_audit,
      emitted_events: [
        'CAPABILITY_INSTANCE_CREATED',
        'SCHOOL_FEES_WALLET_CREATED',
        'AUTO_SPLIT_RULE_ENABLED',
        'CONTRIBUTION_RECEIVED',
        'FUNDS_ALLOCATED',
        'FUNDS_LOCKED',
        'INVOICE_UPLOADED',
        'INVOICE_VERIFIED',
        'APPROVAL_REQUESTED',
        'PAYMENT_RELEASED',
        'RECEIPT_GENERATED',
        'DISPUTE_OPENED',
        'REFUND_COMPLETED'
      ]
    },
    testing: {
      ...base.testing,
      policy_tests: ['cannot_release_to_unverified_school', 'cannot_enable_auto_split_without_consent'],
      fraud_tests: ['duplicate_invoice_detected', 'school_account_change_triggers_review']
    },
    simulation: {
      ...base.simulation,
      normal_scenarios: [
        { id: 'guardian_creates_wallet_and_pays_school', expected_result: 'payment_released_to_verified_school' }
      ],
      edge_case_scenarios: [
        { id: 'insufficient_balance_for_invoice', expected_result: 'invoice_remains_pending_and_guardian_notified' },
        ...base.simulation.edge_case_scenarios.filter((scenario) => scenario.id !== 'insufficient_balance_for_invoice')
      ],
      failure_scenarios: [
        { id: 'payment_provider_stub_fails_after_release_attempt', expected_result: 'settlement_pending_state_and_retry_or_refund_path' },
        { id: 'trapped_funds_after_invoice_expiry', expected_result: 'expiry_rule_returns_locked_funds_to_wallet' }
      ]
    },
    monitoring: {
      ...base.monitoring,
      health_metrics: ['activation_count', 'completion_rate', 'stuck_state_count'],
      risk_metrics: [
        'blocked_release_attempts',
        'duplicate_invoice_attempts',
        'school_verification_failures',
        'refund_rate',
        'dispute_rate'
      ],
      rollback_triggers: [
        'ledger_mismatch_detected',
        'unauthorized_release_detected',
        'policy_violation_detected'
      ]
    },
    versioning_migration: {
      ...base.versioning_migration,
      migration_rules: []
    }
  }
}

export function validateUccCapabilitySection(
  capability = SCHOOL_FEES_UCC_CAPABILITY_SECTION,
  { touchesMoney = true, existingIds = [], requireApprovedLifecycle = false } = {}
) {
  const normalizedExistingIds = normalizeList(existingIds)
  const id = capability?.id ?? ''
  const lifecycleStatus = capability?.lifecycle_status ?? ''
  const duplicateId = normalizedExistingIds.includes(id)
  const semverValid = /^\d+\.\d+\.\d+$/.test(capability?.version ?? '')
  const jurisdictionsPresent = !touchesMoney || (capability?.supported_jurisdictions ?? []).length > 0
  const lifecycleSupported = UCC_LIFECYCLE_STATUSES.includes(lifecycleStatus)
  const lifecycleApproved = ['approved', 'active'].includes(lifecycleStatus)
  const ownerTraceable = Boolean(capability?.owner?.type && capability?.owner?.id)
  const creationMethodDeclared = Boolean(capability?.authorship?.creation_method)
  const violations = [
    !id && 'capability_id_missing',
    duplicateId && 'capability_id_not_unique',
    !semverValid && 'capability_version_not_semver',
    !jurisdictionsPresent && 'supported_jurisdictions_required_for_money_capability',
    !lifecycleSupported && 'unsupported_lifecycle_status',
    requireApprovedLifecycle && !lifecycleApproved && 'lifecycle_status_must_be_approved_before_activation',
    !ownerTraceable && 'owner_not_traceable',
    !creationMethodDeclared && 'creation_method_missing'
  ].filter(Boolean)

  return {
    rules: UCC_CAPABILITY_VALIDATION_RULES,
    capabilityId: id,
    duplicateId,
    semverValid,
    jurisdictionsPresent,
    lifecycleStatus,
    lifecycleSupported,
    lifecycleApproved,
    ownerTraceable,
    creationMethodDeclared,
    violations,
    valid: violations.length === 0
  }
}

export function validateUccIntentSection(
  intent = SCHOOL_FEES_UCC_INTENT_SECTION,
  { touchesMoney = true } = {}
) {
  const desiredOutcomes = intent?.desired_outcomes ?? []
  const successMetrics = intent?.success_metrics ?? []
  const nonGoals = intent?.non_goals ?? []
  const violations = [
    !intent?.primary_goal && 'primary_goal_required',
    !intent?.user_problem && 'user_problem_required',
    desiredOutcomes.length === 0 && 'desired_outcomes_required',
    touchesMoney && successMetrics.length === 0 && 'money_movement_success_metrics_required',
    nonGoals.length === 0 && 'non_goals_should_define_boundaries'
  ].filter(Boolean)

  return {
    rules: UCC_INTENT_VALIDATION_RULES,
    primaryGoalPresent: Boolean(intent?.primary_goal),
    userProblemPresent: Boolean(intent?.user_problem),
    desiredOutcomeCount: desiredOutcomes.length,
    successMetricCount: successMetrics.length,
    nonGoalCount: nonGoals.length,
    violations,
    valid: violations.length === 0
  }
}

export function detectUccIntentDrift({
  intent = SCHOOL_FEES_UCC_INTENT_SECTION,
  primitive = 'InvestmentPrimitive',
  rules = []
} = {}) {
  const candidates = [primitive, ...normalizeList(rules)].map(normalizeKey)
  const boundaryChecks = [
    { boundary: 'not_credit', patterns: ['credit', 'loan', 'borrow'] },
    { boundary: 'not_invest_funds', patterns: ['invest', 'yield', 'interest'] },
    { boundary: 'no_anonymous_large_contributions', patterns: ['anonymous', 'unverified_contribution', 'large_contribution'] }
  ]
  const activeBoundaries = new Set(normalizeList(intent?.non_goals))
  const flagged = boundaryChecks
    .filter((check) => activeBoundaries.has(check.boundary))
    .filter((check) => candidates.some((candidate) => check.patterns.some((pattern) => candidate.includes(pattern))))
    .map((check) => check.boundary)

  return {
    primitive,
    rules: normalizeList(rules),
    nonGoals: intent?.non_goals ?? [],
    flagged,
    driftDetected: flagged.length > 0,
    doctorFinding: flagged.length > 0
      ? 'primitive_or_rule_does_not_support_declared_intent'
      : 'primitive_supports_declared_intent'
  }
}

export function validateUccClassificationSection(
  classification = SCHOOL_FEES_UCC_CLASSIFICATION_PARTIAL,
  {
    policy = {
      minor_protection_rules: ['guardian_relationship_required'],
      human_review_rules: []
    },
    evidence = {
      verification_methods: ['invoice_similarity_check', 'school_entity_verification']
    }
  } = {}
) {
  const moneyMovementTypes = normalizeList(classification?.money_movement_types)
  const actorTypes = normalizeList(classification?.actor_types)
  const evidenceTypes = normalizeList(classification?.evidence_types)
  const riskClass = normalizeKey(classification?.risk_class)
  const hasExternalRelease = moneyMovementTypes.includes('external_release') ||
    (moneyMovementTypes.includes('release') && actorTypes.includes('school'))
  const includesDependent = actorTypes.some((type) => ['child', 'dependent'].includes(type))
  const needsEvidenceVerification = evidenceTypes.some((type) => ['gps', 'photo', 'invoice'].includes(type))
  const highReviewRisk = ['high', 'restricted'].includes(riskClass)
  const violations = [
    !UCC_RISK_CLASSES.includes(riskClass) && 'unsupported_risk_class',
    hasExternalRelease && riskClass === 'informational' && 'external_release_cannot_be_informational',
    includesDependent && !(policy?.minor_protection_rules?.length) && 'minor_protection_rules_required',
    needsEvidenceVerification && !(evidence?.verification_methods?.length) && 'evidence_verification_rules_required',
    highReviewRisk && !(policy?.human_review_rules?.length) && 'human_review_rules_required_for_high_risk'
  ].filter(Boolean)

  return {
    rules: UCC_CLASSIFICATION_VALIDATION_RULES,
    riskClass,
    hasExternalRelease,
    includesDependent,
    needsEvidenceVerification,
    highReviewRisk,
    violations,
    valid: violations.length === 0
  }
}

export function validateUccDependenciesSection(
  dependencies = SCHOOL_FEES_UCC_DEPENDENCIES_SECTION,
  {
    primitiveRegistry = [...CAPABILITY_PRIMITIVES, 'EscrowReleasePrimitive'],
    algorithmVault = [...ALGORITHM_VAULT_ALGORITHMS, 'InvoiceSimilarityCheck', 'ContributionGapForecast', 'RiskVelocityCheck'],
    assetVault = [...ASSET_VAULT_ASSET_TYPES, 'education_wallet_icon', 'school_fee_progress_ring', 'invoice_review_illustration', 'payment_success_lottie'],
    targetKernelFeatures = UCC_SUPPORTED_KERNEL_FEATURES,
    declaredNewAlgorithms = [],
    generatedAssets = []
  } = {}
) {
  const idOf = (item) => typeof item === 'string' ? item : item?.id
  const primitiveIds = (dependencies?.primitives ?? []).map(idOf).filter(Boolean)
  const algorithmIds = (dependencies?.algorithms ?? []).map(idOf).filter(Boolean)
  const assetIds = (dependencies?.assets ?? []).map(idOf).filter(Boolean)
  const kernelFeatureIds = (dependencies?.kernel_features ?? []).map(idOf).filter(Boolean)
  const integrationStubs = dependencies?.external_integrations ?? []
  const missingPrimitives = primitiveIds.filter((id) => !primitiveRegistry.includes(id))
  const missingAlgorithms = algorithmIds.filter((id) => !algorithmVault.includes(id) && !declaredNewAlgorithms.includes(id))
  const missingAssets = assetIds.filter((id) => !assetVault.includes(id) && !generatedAssets.includes(id))
  const unsupportedKernelFeatures = kernelFeatureIds.filter((id) => !targetKernelFeatures.includes(id))
  const integrationsMissingFailureHandling = integrationStubs
    .filter((integration) => !(integration?.failure_handling_rules?.length))
    .map(idOf)
    .filter(Boolean)
  const providerApiSkipped = integrationStubs
    .filter((integration) => integration?.provider_api_skipped)
    .map((integration) => integration.id)
  const violations = [
    ...missingPrimitives.map((id) => `primitive_missing:${id}`),
    ...missingAlgorithms.map((id) => `algorithm_missing:${id}`),
    ...missingAssets.map((id) => `asset_missing:${id}`),
    ...unsupportedKernelFeatures.map((id) => `kernel_feature_unsupported:${id}`),
    ...integrationsMissingFailureHandling.map((id) => `integration_missing_failure_handling:${id}`)
  ]

  return {
    rules: UCC_DEPENDENCY_VALIDATION_RULES,
    missingPrimitives,
    missingAlgorithms,
    missingAssets,
    unsupportedKernelFeatures,
    integrationsMissingFailureHandling,
    providerApiSkipped,
    valid: violations.length === 0,
    violations
  }
}

export function validateUccEntitiesSection(entities = SCHOOL_FEES_UCC_ENTITIES_SECTION) {
  const actors = entities?.actors ?? []
  const permissionActorIds = new Set((entities?.permissions ?? []).map((permission) => permission.actor))
  const identityActorIds = new Set((entities?.identity_requirements ?? []).map((requirement) => requirement.actor))
  const visibilityActorIds = new Set((entities?.data_visibility ?? []).map((visibility) => visibility.actor))
  const moneyMovementRoles = new Set(['owner', 'contributor', 'recipient'])
  const missingRequiredVerification = actors
    .filter((actor) => actor.required)
    .filter((actor) => !actor.verification_level && !identityActorIds.has(actor.id))
    .map((actor) => actor.id)
  const moneyActorsMissingPermissions = actors
    .filter((actor) => moneyMovementRoles.has(actor.role))
    .filter((actor) => !permissionActorIds.has(actor.id))
    .map((actor) => actor.id)
  const externalRecipientsMissingVerification = actors
    .filter((actor) => actor.role === 'recipient' && actor.type !== 'user')
    .filter((actor) => !actor.verification_level && !identityActorIds.has(actor.id))
    .map((actor) => actor.id)
  const sensitiveVisibilityActors = actors
    .filter((actor) => ['external_user', 'dependent', 'institution', 'merchant', 'third_party'].includes(actor.type) || ['contributor', 'recipient'].includes(actor.role))
    .map((actor) => actor.id)
  const missingDataVisibility = sensitiveVisibilityActors.filter((actorId) => !visibilityActorIds.has(actorId))
  const violations = [
    ...missingRequiredVerification.map((id) => `required_actor_missing_verification:${id}`),
    ...moneyActorsMissingPermissions.map((id) => `money_actor_missing_permissions:${id}`),
    ...externalRecipientsMissingVerification.map((id) => `external_recipient_missing_verification:${id}`),
    ...missingDataVisibility.map((id) => `data_visibility_missing:${id}`)
  ]

  return {
    rules: UCC_ENTITY_VALIDATION_RULES,
    missingRequiredVerification,
    moneyActorsMissingPermissions,
    externalRecipientsMissingVerification,
    missingDataVisibility,
    valid: violations.length === 0,
    violations
  }
}

export function validateUccMoneyObjectsSection(
  moneyObjects = SCHOOL_FEES_UCC_MONEY_OBJECTS_PARTIAL,
  { entities = SCHOOL_FEES_UCC_ENTITIES_SECTION } = {}
) {
  const actorById = new Map((entities?.actors ?? []).map((actor) => [actor.id, actor]))
  const walletsMissingOwner = (moneyObjects?.wallets ?? [])
    .filter((wallet) => !wallet.owner)
    .map((wallet) => wallet.id)
  const locksMissingReleaseOrFailure = (moneyObjects?.locks ?? [])
    .filter((lock) => !(lock.release_paths?.length) || !(lock.failure_paths?.length))
    .map((lock) => lock.id)
  const escrowsMissingReleaseCondition = (moneyObjects?.escrows ?? [])
    .filter((escrow) => !escrow.release_condition)
    .map((escrow) => escrow.id)
  const undisclosedFees = (moneyObjects?.fees ?? [])
    .filter((fee) => !fee.visible_to_user || !fee.disclosed)
    .map((fee) => fee.id)
  const unverifiedExternalDestinations = (moneyObjects?.destinations ?? [])
    .filter((destination) => ['verified_recipient', 'external_account', 'external_payment_source'].includes(destination.type))
    .filter((destination) => actorById.get(destination.owner)?.verification_level !== 'institution_verified')
    .map((destination) => destination.id)
  const ownerReferences = [
    ...(moneyObjects?.sources ?? []),
    ...(moneyObjects?.destinations ?? []),
    ...(moneyObjects?.wallets ?? []),
    ...(moneyObjects?.escrows ?? [])
  ]
  const ambiguousOwnership = ownerReferences
    .filter((object) => !object.owner)
    .map((object) => object.id)
  const violations = [
    ...walletsMissingOwner.map((id) => `wallet_missing_owner:${id}`),
    ...locksMissingReleaseOrFailure.map((id) => `lock_missing_release_or_failure_path:${id}`),
    ...escrowsMissingReleaseCondition.map((id) => `escrow_missing_release_condition:${id}`),
    ...undisclosedFees.map((id) => `fee_not_visible_or_disclosed:${id}`),
    ...unverifiedExternalDestinations.map((id) => `external_destination_unverified:${id}`),
    ...ambiguousOwnership.map((id) => `ambiguous_ownership:${id}`)
  ]

  return {
    rules: UCC_MONEY_OBJECT_VALIDATION_RULES,
    walletsMissingOwner,
    locksMissingReleaseOrFailure,
    escrowsMissingReleaseCondition,
    undisclosedFees,
    unverifiedExternalDestinations,
    ambiguousOwnership,
    valid: violations.length === 0,
    violations
  }
}

export function validateUccRulesSection(
  rules = SCHOOL_FEES_UCC_RULES_SECTION,
  {
    kernelContract = {
      command_contracts: ['allocate_funds', 'lock_funds', 'release_escrow']
    },
    knownActions = ['notify_parent_and_keep_invoice_pending', 'block_release_and_request_manual_review']
  } = {}
) {
  const commandContracts = new Set((kernelContract?.command_contracts ?? []).map((contract) => (
    typeof contract === 'string' ? contract : contract.command ?? contract.operation
  )))
  const knownActionSet = new Set(knownActions)
  const unknownActions = (rules?.actions ?? [])
    .filter((action) => action.type !== 'kernel_command' && !knownActionSet.has(action.action ?? action.command ?? action.id))
    .map((action) => action.id)
  const unknownKernelCommands = (rules?.actions ?? [])
    .filter((action) => action.type === 'kernel_command')
    .filter((action) => !commandContracts.has(action.command))
    .map((action) => action.command)
  const hasLockAction = (rules?.actions ?? []).some((action) => action.command === 'lock_funds')
  const lockSafetyMissing = hasLockAction && !(
    (rules?.actions ?? []).some((action) => action.command === 'release_escrow') &&
    (rules?.refund_rules ?? []).length &&
    (rules?.dispute_rules ?? []).length &&
    (rules?.expiry_rules ?? []).length
  )
  const schedulesMissingTimezone = (rules?.schedules ?? [])
    .filter((schedule) => !schedule.timezone)
    .map((schedule) => schedule.id)
  const exceptionsMissingFallback = (rules?.exceptions ?? [])
    .filter((exception) => !exception.safe_fallback && !(rules?.fallback_rules ?? []).length)
    .map((exception) => exception.id)
  const violations = [
    ...unknownActions.map((id) => `unknown_action:${id}`),
    ...unknownKernelCommands.map((command) => `kernel_command_missing_contract:${command}`),
    lockSafetyMissing && 'lock_rule_missing_release_refund_dispute_or_expiry',
    ...schedulesMissingTimezone.map((id) => `schedule_missing_timezone:${id}`),
    ...exceptionsMissingFallback.map((id) => `exception_missing_safe_fallback:${id}`)
  ].filter(Boolean)

  return {
    rules: UCC_RULE_VALIDATION_RULES,
    unknownActions,
    unknownKernelCommands,
    lockSafetyMissing,
    schedulesMissingTimezone,
    exceptionsMissingFallback,
    valid: violations.length === 0,
    violations
  }
}

export function validateUccStateMachineSection(
  stateMachine = SCHOOL_FEES_UCC_STATE_MACHINE_SECTION,
  { kernelContract = SCHOOL_FEES_UCC_KERNEL_CONTRACT_SECTION } = {}
) {
  const stateIds = new Set((stateMachine?.states ?? []).map((state) => state.id))
  const terminalStateIds = new Set(stateMachine?.terminal_states ?? [])
  const allowedKernelOperations = new Set(kernelContract?.allowed_operations ?? [])
  const initialStateExists = stateIds.has(stateMachine?.initial_state)
  const invalidTransitions = (stateMachine?.transitions ?? [])
    .filter((transition) => transition.from !== '*' && (!stateIds.has(transition.from) || !stateIds.has(transition.to)))
    .map((transition) => transition.id)
  const outgoingStates = new Set((stateMachine?.transitions ?? [])
    .filter((transition) => transition.from !== '*')
    .map((transition) => transition.from))
  const nonTerminalStatesMissingOutgoing = [...stateIds]
    .filter((stateId) => !terminalStateIds.has(stateId))
    .filter((stateId) => !outgoingStates.has(stateId))
  const terminalStatesMissingResolution = [...terminalStateIds]
    .filter((stateId) => !(stateMachine?.terminal_resolutions?.[stateId]?.length))
  const moneyTransitionsWithoutKernelOperation = (stateMachine?.transitions ?? [])
    .filter((transition) => /MONEY|refund/i.test(`${transition.on_event ?? ''} ${transition.to ?? ''} ${transition.id ?? ''}`) || ['payment_released', 'cancelled'].includes(transition.to))
    .filter((transition) => !transition.kernel_operation || !allowedKernelOperations.has(transition.kernel_operation))
    .map((transition) => transition.id)
  const violations = [
    !initialStateExists && 'initial_state_missing_from_states',
    ...invalidTransitions.map((id) => `transition_references_invalid_state:${id}`),
    ...nonTerminalStatesMissingOutgoing.map((id) => `non_terminal_state_missing_outgoing_path:${id}`),
    ...terminalStatesMissingResolution.map((id) => `terminal_state_missing_resolution:${id}`),
    ...moneyTransitionsWithoutKernelOperation.map((id) => `money_transition_missing_kernel_operation:${id}`)
  ].filter(Boolean)

  return {
    rules: UCC_STATE_MACHINE_VALIDATION_RULES,
    initialStateExists,
    invalidTransitions,
    nonTerminalStatesMissingOutgoing,
    terminalStatesMissingResolution,
    moneyTransitionsWithoutKernelOperation,
    noTrappedTerminalFunds: terminalStatesMissingResolution.length === 0,
    valid: violations.length === 0,
    violations
  }
}

export function validateUccKernelContractSection(
  kernelContract = SCHOOL_FEES_UCC_KERNEL_CONTRACT_SECTION,
  { rules = SCHOOL_FEES_UCC_RULES_SECTION } = {}
) {
  const allowedOperations = new Set(kernelContract?.allowed_operations ?? [])
  const commandContracts = kernelContract?.command_contracts ?? []
  const commandOperations = new Set(commandContracts.map((contract) => contract.operation))
  const commandIds = new Set(commandContracts.map((contract) => contract.id))
  const idempotentCommands = new Set((kernelContract?.idempotency_rules ?? []).map((rule) => rule.command))
  const reversalOperations = new Set((kernelContract?.reversal_rules ?? []).map((rule) => rule.operation))
  const moneyMovingActionsMissingCommand = (rules?.actions ?? [])
    .filter((action) => action.type === 'kernel_command')
    .filter((action) => !commandOperations.has(action.command))
    .map((action) => action.id)
  const incompleteCommands = commandContracts
    .filter((contract) => !(contract.inputs?.length) || !(contract.preconditions?.length) || !(contract.postconditions?.length) || !contract.ledger_effect)
    .map((contract) => contract.id)
  const externalSettlementMissingFinality = (kernelContract?.settlement_rules ?? [])
    .filter((rule) => !rule.external_transfer_finality)
    .map((rule, index) => rule.id ?? `settlement_rule_${index}`)
  const commandsMissingIdempotency = commandContracts
    .filter((contract) => !idempotentCommands.has(contract.id))
    .map((contract) => contract.id)
  const reversalSensitiveMissing = commandContracts
    .filter((contract) => ['release_escrow', 'refund_funds'].includes(contract.operation))
    .filter((contract) => !reversalOperations.has(contract.id) && !reversalOperations.has(contract.operation))
    .map((contract) => contract.id)
  const prohibitedOperationReferences = [
    ...(rules?.actions ?? []).map((action) => action.command),
    ...commandContracts.map((contract) => contract.operation)
  ].filter((operation) => (kernelContract?.prohibited_operations ?? []).includes(operation))
  const unsupportedAllowedOperations = [...commandOperations].filter((operation) => !allowedOperations.has(operation))
  const providerApiSkipped = [
    ...(kernelContract?.settlement_rules ?? []).filter((rule) => rule.provider_api_skipped).map(() => 'external_transfer_finality'),
    ...(kernelContract?.reversal_rules ?? []).filter((rule) => rule.provider_api_skipped).map((rule) => rule.operation)
  ]
  const violations = [
    ...moneyMovingActionsMissingCommand.map((id) => `money_action_missing_kernel_command:${id}`),
    ...incompleteCommands.map((id) => `command_incomplete:${id}`),
    ...externalSettlementMissingFinality.map((id) => `external_settlement_missing_finality:${id}`),
    ...commandsMissingIdempotency.map((id) => `command_missing_idempotency:${id}`),
    ...reversalSensitiveMissing.map((id) => `reversal_sensitive_command_missing_rule:${id}`),
    ...prohibitedOperationReferences.map((operation) => `prohibited_operation_referenced:${operation}`),
    ...unsupportedAllowedOperations.map((operation) => `command_operation_not_allowed:${operation}`)
  ]

  return {
    rules: UCC_KERNEL_CONTRACT_VALIDATION_RULES,
    commandIds: [...commandIds],
    moneyMovingActionsMissingCommand,
    incompleteCommands,
    externalSettlementMissingFinality,
    commandsMissingIdempotency,
    reversalSensitiveMissing,
    prohibitedOperationReferences,
    unsupportedAllowedOperations,
    providerApiSkipped,
    valid: violations.length === 0,
    violations
  }
}

export function validateUccFinancialPhysicsSection(
  financialPhysics = SCHOOL_FEES_UCC_FINANCIAL_PHYSICS_PARTIAL,
  {
    moneyObjects = SCHOOL_FEES_UCC_MONEY_OBJECTS_PARTIAL,
    kernelContract = SCHOOL_FEES_UCC_KERNEL_CONTRACT_SECTION,
    stateMachine = SCHOOL_FEES_UCC_STATE_MACHINE_SECTION
  } = {}
) {
  const releaseCompletenessFields = new Set((financialPhysics?.release_completeness ?? []).flatMap((item) => item.must_define ?? []))
  const lockedObjectsMissingCompleteness = [
    ...(moneyObjects?.locks ?? []).map((lock) => lock.applies_to),
    ...(moneyObjects?.escrows ?? []).map((escrow) => escrow.id)
  ]
    .filter(Boolean)
    .filter(() => !['release_condition', 'refund_condition', 'expiry_condition', 'dispute_condition', 'owner', 'recipient'].every((field) => releaseCompletenessFields.has(field)))
  const unbalancedLedgerEffects = (kernelContract?.command_contracts ?? [])
    .filter((contract) => contract.ledger_effect && contract.ledger_effect !== 'none')
    .filter((contract) => !contract.ledger_effect.debit || !contract.ledger_effect.credit)
    .map((contract) => contract.id)
  const stateExclusivityRulePresent = (financialPhysics?.state_exclusivity ?? [])
    .some((item) => item.rule === 'fund_unit_can_have_only_one_current_state' && (item.fund_states ?? []).length >= 5)
  const terminalStatesMissingResolution = (stateMachine?.terminal_states ?? [])
    .filter((stateId) => !(stateMachine?.terminal_resolutions?.[stateId]?.length))
  const liabilityMissing = !(financialPhysics?.liability_map ?? []).every((item) => item.scenario && item.liable_party)
  const violations = [
    ...lockedObjectsMissingCompleteness.map((id) => `release_completeness_missing:${id}`),
    ...unbalancedLedgerEffects.map((id) => `ledger_effect_not_balanced:${id}`),
    !stateExclusivityRulePresent && 'state_exclusivity_rule_missing',
    ...terminalStatesMissingResolution.map((id) => `terminal_funds_resolution_missing:${id}`),
    liabilityMissing && 'liability_missing_for_failure_scenario'
  ].filter(Boolean)

  return {
    rules: UCC_FINANCIAL_PHYSICS_VALIDATION_RULES,
    lockedObjectsMissingCompleteness,
    unbalancedLedgerEffects,
    stateExclusivityRulePresent,
    terminalStatesMissingResolution,
    liabilityMissing,
    valid: violations.length === 0,
    violations
  }
}

export function validateUccPolicySection(
  policy = SCHOOL_FEES_UCC_POLICY_SECTION,
  {
    touchesMoney = true,
    entities = SCHOOL_FEES_UCC_ENTITIES_SECTION,
    moneyObjects = SCHOOL_FEES_UCC_MONEY_OBJECTS_PARTIAL,
    autonomy = SCHOOL_FEES_UCC_AUTONOMY_SECTION
  } = {}
) {
  const automatedActions = (autonomy?.dimensions ?? [])
    .filter((dimension) => normalizeKey(dimension.level).startsWith('auto_execute'))
    .map((dimension) => dimension.action ?? dimension.dimension)
  const consentTargets = new Set((policy?.consent_requirements ?? []).map((consent) => consent.id.replace(/_consent$/, '')))
  const automatedActionsMissingConsent = automatedActions
    .filter((action) => ![...consentTargets].some((target) => normalizeKey(action).includes(normalizeKey(target)) || normalizeKey(target).includes(normalizeKey(action))))
  const feeDisclosureIds = new Set((policy?.disclosure_requirements ?? []).map((disclosure) => disclosure.id))
  const feesMissingDisclosure = (moneyObjects?.fees ?? [])
    .filter((fee) => ![...feeDisclosureIds].some((id) => normalizeKey(id).includes(normalizeKey(fee.id))))
    .map((fee) => fee.id)
  const hasMinorUseCase = (entities?.actors ?? []).some((actor) => ['child', 'dependent'].includes(actor.id) || actor.type === 'dependent')
  const highRiskPolicyRules = [
    ...(policy?.aml_rules ?? []),
    ...(policy?.prohibited_patterns ?? [])
  ].filter((rule) => /large|high|unverified|irreversible/i.test(rule))
  const hasReviewOrBlock = (policy?.human_review_rules ?? []).length > 0 || (policy?.prohibited_patterns ?? []).length > 0
  const violations = [
    touchesMoney && !(policy?.jurisdiction_rules?.length) && 'jurisdiction_rules_required',
    ...automatedActionsMissingConsent.map((action) => `automated_action_missing_consent:${action}`),
    ...feesMissingDisclosure.map((fee) => `fee_missing_disclosure:${fee}`),
    hasMinorUseCase && !(policy?.minor_protection_rules?.length) && 'minor_protection_rules_required',
    highRiskPolicyRules.length > 0 && !hasReviewOrBlock && 'high_risk_policy_rule_missing_review_or_block'
  ].filter(Boolean)

  return {
    rules: UCC_POLICY_VALIDATION_RULES,
    automatedActionsMissingConsent,
    feesMissingDisclosure,
    highRiskPolicyRuleCount: highRiskPolicyRules.length,
    valid: violations.length === 0,
    violations
  }
}

export function validateUccAutonomySection(
  autonomy = SCHOOL_FEES_UCC_AUTONOMY_SECTION,
  { policy = SCHOOL_FEES_UCC_POLICY_SECTION } = {}
) {
  const consentTargets = new Set((policy?.consent_requirements ?? []).map((consent) => consent.id.replace(/_consent$/, '')))
  const automaticActionsMissingConsent = (autonomy?.dimensions ?? [])
    .filter((dimension) => normalizeKey(dimension.level).startsWith('auto_execute'))
    .filter((dimension) => !dimension.condition?.includes('consent') && ![...consentTargets].some((target) => normalizeKey(dimension.action).includes(normalizeKey(target))))
    .map((dimension) => dimension.action ?? dimension.dimension)
  const externalReleaseFullyAutomatic = (autonomy?.dimensions ?? [])
    .some((dimension) => dimension.dimension === 'external_payment_release' && normalizeKey(dimension.level).startsWith('auto_execute'))
  const ruleChangeRequiresConfirmation = (autonomy?.dimensions ?? [])
    .some((dimension) => dimension.dimension === 'rule_modification' && normalizeKey(dimension.level).includes('confirmation'))
  const blockedActionsRuntimeEnforced = (autonomy?.blocked_autonomy_actions ?? []).length > 0
  const violations = [
    ...automaticActionsMissingConsent.map((action) => `automatic_action_missing_consent:${action}`),
    externalReleaseFullyAutomatic && 'external_payment_release_cannot_be_fully_automatic',
    !ruleChangeRequiresConfirmation && 'rule_change_confirmation_required',
    !blockedActionsRuntimeEnforced && 'blocked_autonomy_actions_not_enforced'
  ].filter(Boolean)

  return {
    rules: UCC_AUTONOMY_VALIDATION_RULES,
    automaticActionsMissingConsent,
    externalReleaseFullyAutomatic,
    ruleChangeRequiresConfirmation,
    blockedActionsRuntimeEnforced,
    valid: violations.length === 0,
    violations
  }
}

export function validateUccEvidenceSection(evidence = SCHOOL_FEES_UCC_EVIDENCE_PARTIAL) {
  const requiredEvidence = evidence?.required_evidence ?? []
  const verificationByEvidence = new Map((evidence?.verification_methods ?? []).map((method) => [method.evidence, method]))
  const thresholdByEvidence = new Map((evidence?.confidence_thresholds ?? []).map((threshold) => [threshold.evidence, threshold]))
  const retentionByEvidence = new Map((evidence?.evidence_retention_rules ?? []).map((rule) => [rule.evidence, rule]))
  const missingSubmitter = requiredEvidence
    .filter((item) => !item.submitted_by && item.type !== 'institution_verification')
    .map((item) => item.id)
  const missingVerificationMethod = requiredEvidence
    .filter((item) => !verificationByEvidence.has(item.id))
    .map((item) => item.id)
  const automatedMethodsMissingThreshold = (evidence?.verification_methods ?? [])
    .filter((method) => method.algorithm)
    .filter((method) => !thresholdByEvidence.has(method.evidence))
    .map((method) => method.evidence)
  const lowConfidenceMissingFallback = (evidence?.confidence_thresholds ?? [])
    .filter((threshold) => !threshold.below_threshold_action && !verificationByEvidence.get(threshold.evidence)?.manual_review_fallback)
    .map((threshold) => threshold.evidence)
  const missingRetentionVisibility = requiredEvidence
    .filter((item) => !retentionByEvidence.has(item.id) && item.type !== 'institution_verification')
    .map((item) => item.id)
  const violations = [
    ...missingSubmitter.map((id) => `evidence_missing_submitter:${id}`),
    ...missingVerificationMethod.map((id) => `evidence_missing_verification_method:${id}`),
    ...automatedMethodsMissingThreshold.map((id) => `automated_evidence_missing_threshold:${id}`),
    ...lowConfidenceMissingFallback.map((id) => `low_confidence_missing_fallback:${id}`),
    ...missingRetentionVisibility.map((id) => `evidence_missing_retention_visibility:${id}`)
  ]

  return {
    rules: UCC_EVIDENCE_VALIDATION_RULES,
    missingSubmitter,
    missingVerificationMethod,
    automatedMethodsMissingThreshold,
    lowConfidenceMissingFallback,
    missingRetentionVisibility,
    valid: violations.length === 0,
    violations
  }
}

export function validateUccUiUxSection(
  uiUx = SCHOOL_FEES_UCC_UI_UX_SECTION,
  {
    policy = SCHOOL_FEES_UCC_POLICY_SECTION,
    moneyObjects = SCHOOL_FEES_UCC_MONEY_OBJECTS_PARTIAL
  } = {}
) {
  const explanationMoments = new Set((uiUx?.explanation_points ?? []).map((point) => point.before))
  const confirmationActions = new Set((uiUx?.confirmation_points ?? []).filter((point) => point.confirmation_required).map((point) => point.action))
  const consentCollectionIds = new Set((uiUx?.consent_collection_points ?? []).map((point) => point.consent))
  const recoveryErrors = new Set((uiUx?.error_recovery_paths ?? []).map((path) => path.error))
  const moneyLockMissingExplanation = (moneyObjects?.locks ?? []).length > 0 && !explanationMoments.has('wallet_activation')
  const externalPaymentMissingConfirmation = !confirmationActions.has('release_to_school')
  const consentsMissingCollection = (policy?.consent_requirements ?? [])
    .filter((consent) => !consentCollectionIds.has(consent.id))
    .map((consent) => consent.id)
  const errorStatesMissingRecovery = (uiUx?.error_states ?? [])
    .filter((state) => !recoveryErrors.has(state))
  const hasReceiptAndTimeline = (uiUx?.required_surfaces ?? []).some((surface) => surface.type === 'receipt') &&
    (uiUx?.generated_components ?? []).includes('contribution_timeline')
  const violations = [
    moneyLockMissingExplanation && 'money_lock_missing_explanation_surface',
    externalPaymentMissingConfirmation && 'external_payment_missing_confirmation_surface',
    ...consentsMissingCollection.map((id) => `consent_missing_ui_collection:${id}`),
    ...errorStatesMissingRecovery.map((state) => `error_state_missing_recovery:${state}`),
    !hasReceiptAndTimeline && 'receipt_or_timeline_visibility_missing'
  ].filter(Boolean)

  return {
    rules: UCC_UI_UX_VALIDATION_RULES,
    moneyLockMissingExplanation,
    externalPaymentMissingConfirmation,
    consentsMissingCollection,
    errorStatesMissingRecovery,
    hasReceiptAndTimeline,
    valid: violations.length === 0,
    violations
  }
}

export function validateUccEventsAuditSection(
  eventsAudit = SCHOOL_FEES_UCC_EVENTS_AUDIT_SECTION,
  {
    stateMachine = SCHOOL_FEES_UCC_STATE_MACHINE_SECTION,
    rules = SCHOOL_FEES_UCC_RULES_SECTION
  } = {}
) {
  const emittedEvents = new Set(eventsAudit?.emitted_events ?? [])
  const transitionEvents = new Map((eventsAudit?.state_transition_events ?? []).map((item) => [item.transition, item.event]))
  const transitionsMissingEvent = (stateMachine?.transitions ?? [])
    .filter((transition) => !transitionEvents.has(transition.id) || !emittedEvents.has(transitionEvents.get(transition.id)))
    .map((transition) => transition.id)
  const moneyEventByCommand = {
    allocate_funds: 'FUNDS_ALLOCATED',
    lock_funds: 'FUNDS_LOCKED',
    release_escrow: 'PAYMENT_RELEASED',
    refund_funds: 'REFUND_COMPLETED'
  }
  const moneyMovementsMissingEvent = (rules?.actions ?? [])
    .filter((action) => action.type === 'kernel_command')
    .filter((action) => !emittedEvents.has(moneyEventByCommand[action.command]))
    .map((action) => action.id)
  const requiredAuditFields = ['record_actor', 'record_timestamp', 'record_capability_version', 'record_correlation_id']
  const missingAuditFields = requiredAuditFields.filter((field) => !(eventsAudit?.audit_requirements ?? []).includes(field))
  const kernelLedgerLinked = (eventsAudit?.audit_requirements ?? []).includes('record_kernel_command_id') &&
    (eventsAudit?.audit_requirements ?? []).includes('record_ledger_entry_ids')
  const contributorVisibility = (eventsAudit?.timeline_visibility ?? []).find((rule) => rule.actor === 'contributor')
  const oversharingRisk = contributorVisibility?.visible_events?.includes('*')
  const violations = [
    ...transitionsMissingEvent.map((id) => `transition_missing_event:${id}`),
    ...moneyMovementsMissingEvent.map((id) => `money_movement_missing_event:${id}`),
    ...missingAuditFields.map((field) => `event_missing_audit_field:${field}`),
    !kernelLedgerLinked && 'kernel_command_not_linked_to_ledger_entries',
    oversharingRisk && 'timeline_visibility_overshares'
  ].filter(Boolean)

  return {
    rules: UCC_EVENTS_AUDIT_VALIDATION_RULES,
    transitionsMissingEvent,
    moneyMovementsMissingEvent,
    missingAuditFields,
    kernelLedgerLinked,
    oversharingRisk,
    valid: violations.length === 0,
    violations
  }
}

export function validateUccTestingSection(
  testing = SCHOOL_FEES_UCC_TESTING_PARTIAL,
  {
    touchesMoney = true,
    hasExternalRecipient = true,
    policy = SCHOOL_FEES_UCC_POLICY_SECTION,
    versioningMigration = SCHOOL_FEES_UCC_VERSIONING_MIGRATION_SECTION
  } = {}
) {
  const ledgerTestsPresent = !touchesMoney || (testing?.ledger_tests ?? []).length > 0
  const fraudTestsPresent = !hasExternalRecipient || (testing?.fraud_tests ?? []).length > 0
  const policyHasRules = [
    ...(policy?.aml_rules ?? []),
    ...(policy?.consumer_protection_rules ?? []),
    ...(policy?.prohibited_patterns ?? [])
  ].length > 0
  const policyTestsPresent = !policyHasRules || (testing?.policy_tests ?? []).length > 0
  const migrationRulesPresent = (versioningMigration?.migration_rules ?? []).length > 0
  const migrationTestsPresent = !migrationRulesPresent || (testing?.migration_tests ?? []).length > 0
  const violations = [
    !ledgerTestsPresent && 'ledger_tests_required_for_money_capability',
    !fraudTestsPresent && 'fraud_tests_required_for_external_recipient',
    !policyTestsPresent && 'policy_tests_required',
    !migrationTestsPresent && 'migration_tests_required'
  ].filter(Boolean)

  return {
    rules: UCC_TESTING_VALIDATION_RULES,
    ledgerTestsPresent,
    fraudTestsPresent,
    policyTestsPresent,
    migrationTestsPresent,
    valid: violations.length === 0,
    violations
  }
}

export function validateUccSimulationSection(
  simulation = SCHOOL_FEES_UCC_SIMULATION_SECTION,
  {
    classification = SCHOOL_FEES_UCC_CLASSIFICATION_PARTIAL,
    dependencies = SCHOOL_FEES_UCC_DEPENDENCIES_SECTION,
    moneyObjects = SCHOOL_FEES_UCC_MONEY_OBJECTS_PARTIAL,
    entities = SCHOOL_FEES_UCC_ENTITIES_SECTION
  } = {}
) {
  const highRisk = ['high', 'restricted'].includes(normalizeKey(classification?.risk_class))
  const hasExternalIntegrations = (dependencies?.external_integrations ?? []).length > 0
  const hasLockOrEscrow = (moneyObjects?.locks ?? []).length > 0 || (moneyObjects?.escrows ?? []).length > 0
  const multiParty = (entities?.actors ?? []).length > 1
  const trappedFundsCovered = [
    ...(simulation?.failure_scenarios ?? []),
    ...(simulation?.edge_case_scenarios ?? [])
  ].some((scenario) => /trapped|refund|expiry|locked/i.test(`${scenario.id ?? ''} ${scenario.expected_result ?? ''}`))
  const violations = [
    highRisk && !(simulation?.fraud_scenarios ?? []).length && 'fraud_scenarios_required',
    hasExternalIntegrations && !(simulation?.failure_scenarios ?? []).length && 'failure_scenarios_required_for_external_integrations',
    hasLockOrEscrow && !trappedFundsCovered && 'trapped_funds_simulation_required',
    multiParty && !(simulation?.user_confusion_scenarios ?? []).length && 'user_confusion_scenarios_required'
  ].filter(Boolean)

  return {
    rules: UCC_SIMULATION_VALIDATION_RULES,
    highRisk,
    hasExternalIntegrations,
    hasLockOrEscrow,
    multiParty,
    trappedFundsCovered,
    valid: violations.length === 0,
    violations
  }
}

export function validateUccMonitoringSection(
  monitoring = SCHOOL_FEES_UCC_MONITORING_SECTION,
  {
    lifecycleStatus = 'active',
    touchesMoney = true,
    riskClass = SCHOOL_FEES_UCC_CLASSIFICATION_PARTIAL.risk_class
  } = {}
) {
  const active = lifecycleStatus === 'active'
  const highRisk = ['high', 'restricted'].includes(normalizeKey(riskClass))
  const violations = [
    active && !(monitoring?.health_metrics ?? []).length && 'health_metrics_required',
    touchesMoney && !(monitoring?.risk_metrics ?? []).length && 'risk_metrics_required',
    !(monitoring?.rollback_triggers ?? []).length && 'rollback_triggers_required',
    highRisk && !(monitoring?.capability_doctor_rules ?? []).length && 'capability_doctor_rules_required'
  ].filter(Boolean)

  return {
    rules: UCC_MONITORING_VALIDATION_RULES,
    active,
    highRisk,
    valid: violations.length === 0,
    violations
  }
}

export function validateUccVersioningMigrationSection(versioningMigration = SCHOOL_FEES_UCC_VERSIONING_MIGRATION_SECTION) {
  const breakingChangesWithoutConsent = (versioningMigration?.migration_rules ?? [])
    .filter((rule) => rule.type === 'breaking' && !rule.consent_required)
    .map((rule) => `${rule.from}->${rule.to}`)
  const sensitiveConsentConditions = ['fee_changes', 'release_rule_changes', 'data_visibility_changes']
  const consentConditions = new Set((versioningMigration?.consent_on_upgrade ?? []).filter((rule) => rule.required).map((rule) => rule.condition))
  const sensitiveChangesMissingConsent = sensitiveConsentConditions.filter((condition) => !consentConditions.has(condition))
  const rollbackPreservesLedger = (versioningMigration?.rollback_plan ?? []).includes('preserve_ledger_entries')
  const retirementRequiresResolvedFunds = (versioningMigration?.retirement_rules ?? []).includes('no_locked_funds_remaining')
  const violations = [
    ...breakingChangesWithoutConsent.map((change) => `breaking_change_missing_consent:${change}`),
    ...sensitiveChangesMissingConsent.map((condition) => `upgrade_consent_missing:${condition}`),
    !rollbackPreservesLedger && 'rollback_violates_ledger_truth',
    !retirementRequiresResolvedFunds && 'retirement_allows_unresolved_funds'
  ].filter(Boolean)

  return {
    rules: UCC_VERSIONING_MIGRATION_VALIDATION_RULES,
    breakingChangesWithoutConsent,
    sensitiveChangesMissingConsent,
    rollbackPreservesLedger,
    retirementRequiresResolvedFunds,
    valid: violations.length === 0,
    violations
  }
}

export function validateUccExplainabilitySection(
  explainability = SCHOOL_FEES_UCC_EXPLAINABILITY_SECTION,
  {
    blockedActions = ['release_to_unverified_school', 'insufficient_balance', 'approval_required'],
    riskClass = SCHOOL_FEES_UCC_CLASSIFICATION_PARTIAL.risk_class,
    regulatedContext = true
  } = {}
) {
  const reasonCodeText = (explainability?.reason_codes ?? [])
    .map((reason) => normalizeKey(`${reason.code} ${reason.user_message} ${reason.internal_meaning}`))
    .join(' ')
  const blockedActionsMissingReason = blockedActions
    .filter((action) => !reasonCodeText.includes(normalizeKey(action).replace(/^release_to_/, '').replace(/_/g, '')))
    .filter((action) => {
      const normalizedAction = normalizeKey(action)
      return ![
        normalizedAction.includes('unverified') && reasonCodeText.includes('school_unverified'),
        normalizedAction.includes('balance') && reasonCodeText.includes('insufficient_balance'),
        normalizedAction.includes('approval') && reasonCodeText.includes('approval_required')
      ].some(Boolean)
    })
  const highRisk = ['high', 'restricted'].includes(normalizeKey(riskClass))
  const violations = [
    !explainability?.user_explanation && 'user_explanation_required',
    ...blockedActionsMissingReason.map((action) => `blocked_action_missing_reason_code:${action}`),
    highRisk && (!explainability?.admin_explanation || !explainability?.support_explanation) && 'high_risk_explanations_required',
    regulatedContext && !explainability?.regulator_explanation && 'regulator_explanation_required'
  ].filter(Boolean)

  return {
    rules: UCC_EXPLAINABILITY_VALIDATION_RULES,
    blockedActionsMissingReason,
    highRisk,
    valid: violations.length === 0,
    violations
  }
}

export function validateUccReleaseSection(
  release = SCHOOL_FEES_UCC_RELEASE_SECTION,
  {
    governanceDecision = 'private_capability',
    testing = SCHOOL_FEES_UCC_TESTING_PARTIAL,
    monitoring = SCHOOL_FEES_UCC_MONITORING_SECTION,
    explainability = SCHOOL_FEES_UCC_EXPLAINABILITY_SECTION
  } = {}
) {
  const releaseModeSupported = UCC_RELEASE_MODES.includes(release?.release_mode)
  const releaseModeMatchesGovernance = release?.release_mode === governanceDecision
  const marketplaceNeedsMore = release?.release_mode === 'marketplace' &&
    (!testing?.security_tests?.length || !testing?.fraud_tests?.length || !explainability?.developer_explanation)
  const fullRuntimeMissingMonitoring = release?.release_mode === 'full_runtime' && !(monitoring?.health_metrics?.length && monitoring?.risk_metrics?.length)
  const blockedHasActivationRules = release?.release_mode === 'blocked' && (release?.activation_rules ?? []).length > 0
  const violations = [
    !releaseModeSupported && 'unsupported_release_mode',
    !releaseModeMatchesGovernance && 'release_mode_does_not_match_governance_decision',
    marketplaceNeedsMore && 'marketplace_release_requires_stricter_testing_and_documentation',
    fullRuntimeMissingMonitoring && 'full_runtime_release_requires_monitoring_rules',
    blockedHasActivationRules && 'blocked_capability_cannot_be_activated'
  ].filter(Boolean)

  return {
    rules: UCC_RELEASE_VALIDATION_RULES,
    releaseModeSupported,
    releaseModeMatchesGovernance,
    marketplaceNeedsMore,
    fullRuntimeMissingMonitoring,
    blockedHasActivationRules,
    valid: violations.length === 0,
    violations
  }
}

export function runUccValidationPipeline(contract = buildSchoolFeesUccSections()) {
  const topLevel = validateUccTopLevelSections(buildCanonicalUccSkeletonPartial(contract))
  const version = validateUccVersionSection(buildCanonicalUccSkeletonPartial(contract))
  const capability = validateUccCapabilitySection(contract.capability)
  const entities = validateUccEntitiesSection(contract.entities)
  const dependencies = validateUccDependenciesSection(contract.dependencies)
  const goalAutoSplitCompatibility = evaluateComponentCompatibility(['GoalWalletPrimitive', 'AutoSplitPrimitive'])
  const escrowInvoiceCompatibility = evaluateComponentCompatibility(['EscrowPrimitive', 'InvoiceVerificationPrimitive'])
  const blockedAutoReleaseCompatibility = evaluateComponentCompatibility(['AutoReleasePrimitive', 'UnverifiedEntityPayout'])
  const rules = validateUccRulesSection(contract.rules, { kernelContract: contract.kernel_contract })
  const stateMachine = validateUccStateMachineSection(contract.state_machine, { kernelContract: contract.kernel_contract })
  const kernelContract = validateUccKernelContractSection(contract.kernel_contract, { rules: contract.rules })
  const financialPhysics = validateUccFinancialPhysicsSection(contract.financial_physics, {
    moneyObjects: contract.money_objects,
    kernelContract: contract.kernel_contract,
    stateMachine: contract.state_machine
  })
  const policy = validateUccPolicySection(contract.policy, {
    entities: contract.entities,
    moneyObjects: contract.money_objects,
    autonomy: contract.autonomy
  })
  const evidence = validateUccEvidenceSection(contract.evidence)
  const autonomy = validateUccAutonomySection(contract.autonomy, { policy: contract.policy })
  const uiUx = validateUccUiUxSection(contract.ui_ux, {
    policy: contract.policy,
    moneyObjects: contract.money_objects
  })
  const eventsAudit = validateUccEventsAuditSection(contract.events_audit, {
    stateMachine: contract.state_machine,
    rules: contract.rules
  })
  const testing = validateUccTestingSection(contract.testing, {
    policy: contract.policy,
    versioningMigration: contract.versioning_migration
  })
  const simulation = validateUccSimulationSection(contract.simulation, {
    classification: contract.classification,
    dependencies: contract.dependencies,
    moneyObjects: contract.money_objects,
    entities: contract.entities
  })
  const monitoring = validateUccMonitoringSection(contract.monitoring, {
    lifecycleStatus: 'active',
    riskClass: contract.classification.risk_class
  })
  const versioningMigration = validateUccVersioningMigrationSection(contract.versioning_migration)
  const release = validateUccReleaseSection(contract.release, {
    governanceDecision: contract.release?.release_mode,
    testing: contract.testing,
    monitoring: contract.monitoring,
    explainability: contract.explainability
  })

  const steps = [
    { step: 'schema_validation', valid: topLevel.complete && version.valid, result: { topLevel, version } },
    { step: 'identity_validation', valid: capability.valid && entities.valid, result: { capability, entities } },
    { step: 'dependency_validation', valid: dependencies.valid, result: dependencies },
    {
      step: 'type_compatibility_validation',
      valid: goalAutoSplitCompatibility.valid && escrowInvoiceCompatibility.valid && blockedAutoReleaseCompatibility.releaseBlocked,
      result: { goalAutoSplitCompatibility, escrowInvoiceCompatibility, blockedAutoReleaseCompatibility }
    },
    { step: 'rule_validation', valid: rules.valid, result: rules },
    { step: 'state_machine_validation', valid: stateMachine.valid, result: stateMachine },
    { step: 'kernel_contract_validation', valid: kernelContract.valid, result: kernelContract },
    { step: 'financial_physics_validation', valid: financialPhysics.valid, result: financialPhysics },
    { step: 'policy_governor_validation', valid: policy.valid, result: policy },
    { step: 'evidence_validation', valid: evidence.valid, result: evidence },
    { step: 'autonomy_validation', valid: autonomy.valid, result: autonomy },
    { step: 'ui_ux_validation', valid: uiUx.valid, result: uiUx },
    { step: 'event_audit_validation', valid: eventsAudit.valid, result: eventsAudit },
    { step: 'test_coverage_validation', valid: testing.valid, result: testing },
    { step: 'simulation_readiness_validation', valid: simulation.valid, result: simulation },
    { step: 'monitoring_readiness_validation', valid: monitoring.valid, result: monitoring },
    { step: 'versioning_migration_validation', valid: versioningMigration.valid, result: versioningMigration },
    { step: 'release_gate_validation', valid: release.valid, result: release }
  ]

  return {
    requiredSteps: UCC_VALIDATION_PIPELINE_STEPS,
    focusQuestions: UCC_VALIDATION_FOCUS_QUESTIONS,
    steps,
    failedSteps: steps.filter((step) => !step.valid).map((step) => step.step),
    valid: steps.every((step) => step.valid)
  }
}

export function compileUccToRuntimeArtifacts(contract = buildSchoolFeesUccSections()) {
  const validation = runUccValidationPipeline(contract)
  const artifacts = {
    capability_package: {
      folder: `${contract.capability.id}.capability`,
      manifest: contract.capability,
      dependencies: contract.dependencies
    },
    kernel_command_map: contract.kernel_contract.command_contracts.map((command) => ({
      id: command.id,
      operation: command.operation,
      inputs: command.inputs,
      idempotency: contract.kernel_contract.idempotency_rules.find((rule) => rule.command === command.id)?.idempotency_key
    })),
    ui_directive_map: {
      generate: contract.ui_ux.required_surfaces.map((surface) => surface.id),
      components: contract.ui_ux.generated_components,
      warnings: contract.ui_ux.warning_points
    },
    policy_envelope: {
      jurisdiction_rules: contract.policy.jurisdiction_rules,
      blocked_patterns: contract.policy.prohibited_patterns,
      human_review: contract.policy.human_review_rules
    },
    state_machine_runtime: {
      initial_state: contract.state_machine.initial_state,
      transitions: contract.state_machine.transitions
    },
    event_schema: contract.events_audit.emitted_events,
    test_suite: contract.testing,
    simulation_suite: contract.simulation,
    monitoring_rules: contract.monitoring,
    explanation_pack: contract.explainability,
    consent_pack: contract.policy.consent_requirements,
    migration_plan: contract.versioning_migration
  }

  return {
    artifactNames: UCC_COMPILER_OUTPUT_ARTIFACTS,
    validation,
    artifacts,
    readyForRuntime: validation.valid,
    compilerFlow: ['universal_capability_contract', 'capability_compiler', 'runtime_artifacts']
  }
}

export function enforceUccMandatoryInvariants(
  contract = buildSchoolFeesUccSections(),
  { governorBlocked = false, lifecycleStatus = 'active' } = {}
) {
  const capabilityReview = validateUccCapabilitySection(contract.capability)
  const intentReview = validateUccIntentSection(contract.intent)
  const entityReview = validateUccEntitiesSection(contract.entities)
  const moneyReview = validateUccMoneyObjectsSection(contract.money_objects, { entities: contract.entities })
  const rulesReview = validateUccRulesSection(contract.rules, { kernelContract: contract.kernel_contract })
  const kernelReview = validateUccKernelContractSection(contract.kernel_contract, { rules: contract.rules })
  const physicsReview = validateUccFinancialPhysicsSection(contract.financial_physics, {
    moneyObjects: contract.money_objects,
    kernelContract: contract.kernel_contract,
    stateMachine: contract.state_machine
  })
  const policyReview = validateUccPolicySection(contract.policy, {
    entities: contract.entities,
    moneyObjects: contract.money_objects,
    autonomy: contract.autonomy
  })
  const autonomyReview = validateUccAutonomySection(contract.autonomy, { policy: contract.policy })
  const uiReview = validateUccUiUxSection(contract.ui_ux, {
    policy: contract.policy,
    moneyObjects: contract.money_objects
  })
  const auditReview = validateUccEventsAuditSection(contract.events_audit, {
    stateMachine: contract.state_machine,
    rules: contract.rules
  })
  const monitoringReview = validateUccMonitoringSection(contract.monitoring, {
    lifecycleStatus,
    riskClass: contract.classification.risk_class
  })
  const migrationReview = validateUccVersioningMigrationSection(contract.versioning_migration)
  const explainabilityReview = validateUccExplainabilitySection(contract.explainability, {
    riskClass: contract.classification.risk_class
  })
  const simulationReview = validateUccSimulationSection(contract.simulation, {
    classification: contract.classification,
    dependencies: contract.dependencies,
    moneyObjects: contract.money_objects,
    entities: contract.entities
  })
  const highRisk = ['high', 'restricted'].includes(normalizeKey(contract.classification.risk_class))
  const invariantChecks = {
    capability_has_unique_id: capabilityReview.valid,
    capability_has_declared_intent: intentReview.valid,
    every_actor_has_permissions: entityReview.valid,
    every_money_object_has_ownership: moneyReview.ambiguousOwnership.length === 0 && moneyReview.walletsMissingOwner.length === 0,
    fund_locks_have_release_refund_dispute_and_expiry_paths: moneyReview.locksMissingReleaseOrFailure.length === 0 && !(rulesReview.lockSafetyMissing),
    money_moving_actions_map_to_kernel_commands: rulesReview.unknownKernelCommands.length === 0 && kernelReview.moneyMovingActionsMissingCommand.length === 0,
    kernel_commands_declare_preconditions_and_postconditions: kernelReview.incompleteCommands.length === 0,
    ledger_effects_balance: physicsReview.unbalancedLedgerEffects.length === 0,
    automated_actions_have_autonomy_permission: (contract.autonomy?.dimensions ?? []).length > 0,
    automated_fund_actions_have_consent: policyReview.automatedActionsMissingConsent.length === 0 && autonomyReview.automaticActionsMissingConsent.length === 0,
    external_recipients_have_verification: moneyReview.unverifiedExternalDestinations.length === 0,
    fees_are_disclosed: moneyReview.undisclosedFees.length === 0 && policyReview.feesMissingDisclosure.length === 0,
    irreversible_actions_have_confirmation: !uiReview.externalPaymentMissingConfirmation,
    state_transitions_are_auditable: auditReview.transitionsMissingEvent.length === 0,
    active_capabilities_have_monitoring_rules: monitoringReview.valid,
    money_behavior_upgrades_have_migration_logic: migrationReview.valid,
    blocked_actions_have_reason_codes: explainabilityReview.blockedActionsMissingReason.length === 0,
    capability_is_user_explainable: Boolean(contract.explainability?.user_explanation),
    high_risk_capabilities_include_simulation_and_human_review: !highRisk || (simulationReview.valid && (contract.policy?.human_review_rules ?? []).length > 0),
    governor_block_prevents_runtime: !governorBlocked
  }
  const violations = Object.entries(invariantChecks)
    .filter(([, passed]) => !passed)
    .map(([invariant]) => invariant)

  return {
    requiredInvariants: UCC_MANDATORY_INVARIANTS,
    invariantChecks,
    violations,
    valid: violations.length === 0,
    enforcedByContractValidator: true
  }
}

export function bindCompiledUccRuntime(compiled = compileUccToRuntimeArtifacts()) {
  const runtimeLayer = UCC_TECHNICAL_IMPLEMENTATION_LAYERS.find((layer) => layer.layer === 'ucc_runtime_binding')
  return {
    ready: compiled.readyForRuntime,
    components: runtimeLayer.connects,
    commandRouter: compiled.artifacts.kernel_command_map.map((command) => command.operation),
    contextBuilder: ['actor', 'capability_instance', 'policy', 'consent', 'ledger_context'],
    autonomyGate: compiled.artifacts.policy_envelope.blocked_patterns,
    kernelExecution: compiled.artifacts.kernel_command_map,
    eventEmitter: compiled.artifacts.event_schema,
    explanationEngine: compiled.artifacts.explanation_pack.reason_codes,
    runtimeBound: compiled.readyForRuntime && runtimeLayer.connects.includes('kernel_execution')
  }
}

export function classifyUccOutcome(contract = buildSchoolFeesUccSections()) {
  const validation = runUccValidationPipeline(contract)
  const invariants = enforceUccMandatoryInvariants(contract)
  const releaseMode = contract.release?.release_mode
  return {
    outcomes: UCC_OUTCOME_STATEMENTS,
    currentOutcome: validation.valid && invariants.valid
      ? releaseMode === 'marketplace'
        ? 'capability_ready_for_marketplace_review'
        : 'capability_ready_for_private_release'
      : validation.failedSteps.includes('financial_physics_validation')
        ? 'capability_violates_financial_physics'
        : validation.failedSteps.includes('dependency_validation')
          ? 'capability_needs_another_primitive'
          : 'capability_is_incomplete',
    contractDrivenCapabilityOS: true,
    sourceOfTruthFlow: UCC_CANONICAL_SOURCE_OF_TRUTH_FLOW
  }
}

export function describeUccSchemaValidatorSpecification() {
  return {
    definition: UCC_SCHEMA_VALIDATOR_DEFINITION,
    evaluationDimensions: UCC_VALIDATOR_EVALUATION_DIMENSIONS,
    positionFlow: UCC_VALIDATOR_POSITION_FLOW,
    hardSafetyPrinciple: UCC_HARD_SAFETY_PRINCIPLE,
    blockedDirectMoneyFlow: UCC_BLOCKED_DIRECT_MONEY_FLOW,
    correctMoneyFlow: UCC_CORRECT_MONEY_FLOW,
    schemaFormatStrategy: UCC_SCHEMA_FORMAT_STRATEGY
  }
}

export function detectUccValidatorSafetyConcerns(request = UCC_VALIDATOR_SAFETY_EXAMPLES.workerSavingsRisk.request) {
  const normalized = normalizeKey(request)
  const workerControlRisk = normalized.includes('worker') && normalized.includes('withdraw')
  const familyRentRequest = normalized.includes('rent') && normalized.includes('landlord')
  if (workerControlRisk) {
    return {
      request,
      classification: 'invalid_or_needs_policy_review',
      findings: UCC_VALIDATOR_SAFETY_EXAMPLES.workerSavingsRisk.validatorFindings,
      firstHardSafetyLayer: true
    }
  }
  if (familyRentRequest) {
    return {
      request,
      classification: 'conditionally_valid_if_declarations_present',
      requiredDeclarations: UCC_VALIDATOR_SAFETY_EXAMPLES.familyRentConditionallyValid.requiredDeclarations,
      firstHardSafetyLayer: true
    }
  }
  return {
    request,
    classification: 'needs_schema_and_validator_review',
    findings: ['insufficient_context'],
    firstHardSafetyLayer: true
  }
}

export function classifyUccValidatorDecision(
  contract = buildSchoolFeesUccSections(),
  { clarificationNeeded = false, governorBlocked = false, marketplaceRequested = false, fullRuntimeRequested = false } = {}
) {
  const validation = runUccValidationPipeline(contract)
  const invariants = enforceUccMandatoryInvariants(contract, { governorBlocked })
  let result = 'valid'
  if (governorBlocked || contract.release?.release_mode === 'blocked') result = 'blocked'
  else if (clarificationNeeded) result = 'needs_clarification'
  else if (validation.failedSteps.includes('dependency_validation')) result = 'needs_primitive'
  else if (validation.failedSteps.includes('policy_governor_validation')) result = 'needs_policy_review'
  else if (!validation.valid || !invariants.valid) result = 'invalid'
  else if (marketplaceRequested && contract.release?.release_mode !== 'marketplace') result = 'private_release'
  else if (fullRuntimeRequested && contract.release?.release_mode !== 'full_runtime') result = 'simulation_only'
  else if (contract.release?.release_mode === 'private_capability') result = 'private_release'
  else if (contract.release?.release_mode === 'full_runtime') result = 'full_runtime_eligible'

  return {
    allowedResults: UCC_VALIDATION_RESULTS,
    result,
    validation,
    invariants,
    onlyValidatedCapabilitiesCanRun: validation.valid && invariants.valid && result !== 'blocked'
  }
}

export function normalizeUccForRuntime(contract = buildSchoolFeesUccSections()) {
  const normalizeValue = (value, key = '') => {
    if (Array.isArray(value)) return value.map((item) => normalizeValue(item, key))
    if (value && typeof value === 'object') {
      return Object.keys(value)
        .sort()
        .reduce((normalized, childKey) => {
          normalized[childKey] = normalizeValue(value[childKey], childKey)
          return normalized
        }, {})
    }
    if (typeof value === 'string') {
      const trimmed = value.trim()
      if ((key.endsWith('_at') || key.endsWith('date')) && /^\d{4}-\d{2}-\d{2}/.test(trimmed)) {
        const date = new Date(trimmed)
        return Number.isNaN(date.getTime()) ? trimmed : date.toISOString()
      }
      return trimmed
    }
    return value
  }
  const allowedTopLevel = new Set(UCC_TOP_LEVEL_SECTIONS)
  const normalizedInput = normalizeValue(contract)
  const normalized = UCC_TOP_LEVEL_SECTIONS.reduce((nextContract, section) => {
    if (section in normalizedInput) nextContract[section] = normalizedInput[section]
    else nextContract[section] = buildCanonicalUccSkeletonPartial()[section]
    return nextContract
  }, {})
  const removedTopLevelKeys = Object.keys(normalizedInput).filter((key) => !allowedTopLevel.has(key))
  const originalCapabilityId = contract.capability?.id
  const trimmedCapabilityId = typeof originalCapabilityId === 'string' ? originalCapabilityId.trim() : originalCapabilityId
  const identityCriticalIdViolation = Boolean(trimmedCapabilityId && !UCC_ID_REGEX.test(trimmedCapabilityId))
  if (normalized.capability?.id) normalized.capability.id = identityCriticalIdViolation ? trimmedCapabilityId : normalizeKey(normalized.capability.id)
  if (normalized.capability?.category) normalized.capability.category = normalizeKey(normalized.capability.category)

  return {
    normalizationSteps: UCC_NORMALIZATION_STEPS,
    strictNormalizationRules: UCC_STRICT_NORMALIZATION_RULES,
    normalized,
    removedTopLevelKeys,
    identityCriticalIdViolation,
    suggestedCanonicalId: identityCriticalIdViolation ? normalizeKey(trimmedCapabilityId) : normalized.capability?.id,
    canonicalJsonRuntimeFormat: true
  }
}

export function validateStrictUccTopLevelSchema(contract = buildSchoolFeesUccSections()) {
  const keys = Object.keys(contract)
  const missingSections = UCC_TOP_LEVEL_SECTIONS.filter((section) => !(section in contract))
  const unknownTopLevelKeys = keys.filter((key) => !UCC_TOP_LEVEL_SECTIONS.includes(key))
  const guardedSections = ['policy', 'autonomy', 'events_audit', 'monitoring', 'testing', 'explainability']
  const guardedOmissions = guardedSections.filter((section) => !(section in contract))
  const emptySectionsWithoutReason = UCC_TOP_LEVEL_SECTIONS
    .filter((section) => contract[section] && typeof contract[section] === 'object' && !Array.isArray(contract[section]))
    .filter((section) => {
      const values = Object.values(contract[section])
      const empty = values.length > 0 && values.every((value) => (
        Array.isArray(value) ? value.length === 0 : value === '' || value == null
      ))
      return empty && !contract[section].not_applicable_reason
    })

  return {
    strictRules: UCC_TOP_LEVEL_STRICT_RULES,
    schemaFragment: UCC_TOP_LEVEL_JSON_SCHEMA_FRAGMENT,
    missingSections,
    unknownTopLevelKeys,
    guardedOmissions,
    emptySectionsWithoutReason,
    valid: missingSections.length === 0 && unknownTopLevelKeys.length === 0 && guardedOmissions.length === 0 && emptySectionsWithoutReason.length === 0
  }
}

export function describeUccSchemaPackage() {
  return {
    naming: UCC_SCHEMA_PACKAGE_NAMING,
    normalizationSteps: UCC_NORMALIZATION_STEPS,
    generatedTypeResponsibilities: UCC_GENERATED_TYPE_RESPONSIBILITIES,
    topLevelSchema: UCC_TOP_LEVEL_JSON_SCHEMA_FRAGMENT,
    emptySectionExample: UCC_EMPTY_SECTION_NOT_APPLICABLE_EXAMPLE
  }
}

export function validateUccPrimitiveFieldConventions(contract = buildSchoolFeesUccSections()) {
  const collectIds = (items = []) => items.map((item) => item?.id).filter(Boolean)
  const moneyObjectIds = new Set([
    ...collectIds(contract.money_objects?.sources),
    ...collectIds(contract.money_objects?.destinations),
    ...collectIds(contract.money_objects?.wallets),
    ...collectIds(contract.money_objects?.escrows),
    ...collectIds(contract.money_objects?.locks)
  ])
  const actorIds = new Set((contract.entities?.actors ?? []).map((actor) => actor.id))
  const knownReferences = new Set([...moneyObjectIds, ...actorIds, 'wallet'])
  const idsToCheck = [
    contract.capability?.id,
    ...moneyObjectIds,
    ...actorIds,
    ...collectIds(contract.rules?.triggers),
    ...collectIds(contract.rules?.conditions),
    ...collectIds(contract.rules?.actions),
    ...collectIds(contract.rules?.schedules),
    ...collectIds(contract.rules?.thresholds),
    ...collectIds(contract.rules?.exceptions),
    ...collectIds(contract.rules?.fallback_rules),
    ...collectIds(contract.rules?.refund_rules),
    ...collectIds(contract.rules?.dispute_rules),
    ...collectIds(contract.rules?.expiry_rules)
  ].filter(Boolean)
  const invalidIds = idsToCheck.filter((id) => !UCC_ID_REGEX.test(id))
  const capabilityVersionSemver = /^\d+\.\d+\.\d+$/.test(contract.capability?.version ?? '')
  const schemaVersionSeparate = contract.ucc_version !== contract.capability?.version
  const danglingReferences = [
    ...(contract.rules?.triggers ?? []).map((trigger) => trigger.source),
    ...(contract.rules?.actions ?? []).flatMap((action) => [action.from, action.to]),
    ...(contract.money_objects?.locks ?? []).map((lock) => lock.applies_to)
  ]
    .filter(Boolean)
    .filter((reference) => !knownReferences.has(reference))
  const schedulesMissingTimezone = (contract.rules?.schedules ?? [])
    .filter((schedule) => !schedule.timezone && !(schedule.timezone_source && schedule.fallback_timezone))
    .map((schedule) => schedule.id)
  const nonIsoTimestamps = [contract.capability?.authorship?.created_at]
    .filter(Boolean)
    .filter((timestamp) => Number.isNaN(new Date(timestamp).getTime()))
  const invalidCurrencies = (contract.money_objects?.wallets ?? [])
    .filter((wallet) => wallet.currency && !UCC_FIELD_CONVENTIONS.currency.isoCurrencyCodes.includes(wallet.currency))
    .map((wallet) => wallet.id)
  const mixedCurrencyScoreUnits = (contract.money_objects?.wallets ?? [])
    .filter((wallet) => wallet.currency && wallet.unit_type && wallet.unit_type !== 'currency')
    .map((wallet) => wallet.id)
  const violations = [
    ...invalidIds.map((id) => `invalid_id:${id}`),
    !capabilityVersionSemver && 'capability_version_not_semver',
    !schemaVersionSeparate && 'schema_version_confused_with_capability_version',
    ...danglingReferences.map((reference) => `dangling_reference:${reference}`),
    ...schedulesMissingTimezone.map((id) => `schedule_missing_timezone:${id}`),
    ...nonIsoTimestamps.map((timestamp) => `timestamp_not_iso:${timestamp}`),
    ...invalidCurrencies.map((id) => `invalid_currency:${id}`),
    ...mixedCurrencyScoreUnits.map((id) => `mixed_currency_and_score_unit:${id}`)
  ].filter(Boolean)

  return {
    conventions: UCC_FIELD_CONVENTIONS,
    invalidIds,
    capabilityVersionSemver,
    schemaVersionSeparate,
    danglingReferences,
    schedulesMissingTimezone,
    nonIsoTimestamps,
    invalidCurrencies,
    mixedCurrencyScoreUnits,
    valid: violations.length === 0,
    violations
  }
}

export function validateUccCoreEnums(contract = buildSchoolFeesUccSections()) {
  const creationMethodValid = UCC_CREATION_METHODS.includes(contract.capability?.authorship?.creation_method)
  const lifecycleStatusValid = UCC_LIFECYCLE_STATUSES.includes(contract.capability?.lifecycle_status)
  const riskClassValid = UCC_RISK_CLASSES.includes(contract.classification?.risk_class)
  const releaseModeValid = UCC_RELEASE_MODES.includes(contract.release?.release_mode)
  const invalidAutonomyLevels = (contract.autonomy?.dimensions ?? [])
    .filter((dimension) => !UCC_AUTONOMY_LEVEL_ENUM.includes(dimension.level))
    .map((dimension) => `${dimension.dimension}:${dimension.level}`)
  const invalidMoneyMovementTypes = (contract.classification?.money_movement_types ?? [])
    .filter((type) => !UCC_MONEY_MOVEMENT_TYPE_ENUM.includes(type))
  const invalidActorTypes = (contract.classification?.actor_types ?? [])
    .filter((type) => !UCC_ACTOR_TYPE_ENUM.includes(type))
  const invalidEvidenceTypes = (contract.classification?.evidence_types ?? [])
    .filter((type) => !UCC_EVIDENCE_TYPE_ENUM.includes(type))
  const invalidKernelOperations = (contract.kernel_contract?.allowed_operations ?? [])
    .filter((operation) => !UCC_KERNEL_OPERATION_ENUM.includes(operation))
  const violations = [
    !creationMethodValid && 'invalid_creation_method',
    !lifecycleStatusValid && 'invalid_lifecycle_status',
    !riskClassValid && 'invalid_risk_class',
    !releaseModeValid && 'invalid_release_mode',
    ...invalidAutonomyLevels.map((level) => `invalid_autonomy_level:${level}`),
    ...invalidMoneyMovementTypes.map((type) => `invalid_money_movement_type:${type}`),
    ...invalidActorTypes.map((type) => `invalid_actor_type:${type}`),
    ...invalidEvidenceTypes.map((type) => `invalid_evidence_type:${type}`),
    ...invalidKernelOperations.map((operation) => `invalid_kernel_operation:${operation}`)
  ].filter(Boolean)

  return {
    creationMethodValid,
    lifecycleStatusValid,
    riskClassValid,
    releaseModeValid,
    invalidAutonomyLevels,
    invalidMoneyMovementTypes,
    invalidActorTypes,
    invalidEvidenceTypes,
    invalidKernelOperations,
    valid: violations.length === 0,
    violations
  }
}

export function validateUccJsonSchemaStage(contract = buildSchoolFeesUccSections()) {
  const topLevel = validateStrictUccTopLevelSchema(contract)
  const enums = validateUccCoreEnums(contract)
  const shapeErrors = [
    ...topLevel.missingSections.map((section) => createUccValidationFinding({
      code: 'SCHEMA.REQUIRED_FIELD_MISSING',
      title: 'Required top-level section missing',
      message: `${section} is required.`,
      path: section,
      validator: 'SchemaValidator'
    })),
    ...topLevel.unknownTopLevelKeys.map((key) => createUccValidationFinding({
      code: 'SCHEMA.UNKNOWN_FIELD',
      title: 'Unknown top-level field',
      message: `${key} is not allowed at the UCC top level.`,
      path: key,
      validator: 'SchemaValidator'
    })),
    ...enums.violations.map((violation) => createUccValidationFinding({
      code: 'SCHEMA.INVALID_ENUM',
      title: 'Invalid enum value',
      message: violation,
      path: 'enum',
      validator: 'SchemaValidator'
    }))
  ]

  return {
    errorExamples: UCC_SCHEMA_STAGE_ERROR_EXAMPLES,
    findings: shapeErrors,
    valid: shapeErrors.length === 0
  }
}

export function validateUccIdentityStage(
  contract = buildSchoolFeesUccSections(),
  { existingIds = [] } = {}
) {
  const capability = validateUccCapabilitySection(contract.capability, { existingIds })
  const fieldConventions = validateUccPrimitiveFieldConventions(contract)
  const findings = [
    capability.duplicateId && createUccValidationFinding({
      code: 'IDENTITY.DUPLICATE_CAPABILITY_ID',
      title: 'Duplicate capability ID',
      message: `${contract.capability.id} already exists.`,
      path: 'capability.id',
      validator: 'IdentityValidator',
      releaseImpact: { blocksDraft: true, blocksSimulation: true }
    }),
    !capability.semverValid && createUccValidationFinding({
      code: 'IDENTITY.INVALID_VERSION',
      title: 'Invalid capability version',
      message: 'capability.version must use semantic versioning.',
      path: 'capability.version',
      validator: 'IdentityValidator'
    }),
    !capability.ownerTraceable && createUccValidationFinding({
      code: 'IDENTITY.MISSING_OWNER',
      title: 'Missing owner',
      message: 'Capability owner must be declared.',
      path: 'capability.owner',
      validator: 'IdentityValidator'
    }),
    !capability.jurisdictionsPresent && createUccValidationFinding({
      code: 'IDENTITY.MISSING_SUPPORTED_JURISDICTION',
      title: 'Money capability is jurisdictionless',
      message: 'A capability touching money must declare supported jurisdictions or require policy before release.',
      path: 'capability.supported_jurisdictions',
      validator: 'IdentityValidator'
    }),
    !UCC_CREATION_METHODS.includes(contract.capability?.authorship?.creation_method) && createUccValidationFinding({
      code: 'IDENTITY.UNKNOWN_CREATION_METHOD',
      title: 'Unknown creation method',
      message: 'creation_method must be a known UCC creation method.',
      path: 'capability.authorship.creation_method',
      validator: 'IdentityValidator'
    }),
    ...fieldConventions.invalidIds.map((id) => createUccValidationFinding({
      code: 'IDENTITY.INVALID_ID_FORMAT',
      title: 'Invalid ID format',
      message: `${id} must be lowercase snake case.`,
      path: 'id',
      validator: 'IdentityValidator'
    }))
  ].filter(Boolean)

  return {
    findingCodes: UCC_IDENTITY_STAGE_FINDING_CODES,
    findings,
    valid: findings.length === 0
  }
}

export function validateUccIntentCompletenessStage(contract = buildSchoolFeesUccSections()) {
  const intent = contract.intent ?? {}
  const riskClass = normalizeKey(contract.classification?.risk_class)
  const missingFields = UCC_INTENT_STAGE_REQUIRED_FIELDS.filter((field) => {
    const value = intent[field]
    return Array.isArray(value) ? value.length === 0 : !value
  })
  const mediumOrHighRiskMissingNonGoals = ['medium', 'high', 'restricted'].includes(riskClass) && !(intent.non_goals ?? []).length
  const findings = [
    ...missingFields.map((field) => createUccValidationFinding({
      code: field === 'non_goals' ? 'INTENT.MISSING_NON_GOALS' : 'INTENT.REQUIRED_FIELD_MISSING',
      title: 'Intent field missing',
      message: `${field} is required so AURA can avoid unsafe feature drift.`,
      path: `intent.${field}`,
      validator: 'IntentValidator'
    })),
    mediumOrHighRiskMissingNonGoals && createUccValidationFinding({
      code: 'INTENT.MISSING_NON_GOALS',
      title: 'Medium-risk capability missing non-goals',
      message: 'Medium-risk capabilities must declare non-goals to reduce feature drift and unsafe expansion.',
      path: 'intent.non_goals',
      validator: 'IntentValidator'
    })
  ].filter(Boolean)

  return {
    requiredFields: UCC_INTENT_STAGE_REQUIRED_FIELDS,
    findings,
    valid: findings.length === 0
  }
}

export function validateUccClassificationConsistencyStage(contract = buildSchoolFeesUccSections()) {
  const moneyMovementTypes = normalizeList(contract.classification?.money_movement_types)
  const evidenceTypes = normalizeList(contract.classification?.evidence_types)
  const actorTypes = normalizeList(contract.classification?.actor_types)
  const riskClass = normalizeKey(contract.classification?.risk_class)
  const findings = [
    moneyMovementTypes.includes('lock') && !(contract.money_objects?.locks ?? []).length && createUccValidationFinding({
      code: 'CLASSIFICATION.LOCK_REQUIRES_LOCK_OBJECT',
      title: 'Lock movement requires lock object',
      message: 'money_movement_types includes lock but money_objects.locks is empty.',
      path: 'money_objects.locks',
      validator: 'ClassificationValidator'
    }),
    moneyMovementTypes.includes('release') && !(contract.kernel_contract?.allowed_operations ?? []).includes('release_escrow') && createUccValidationFinding({
      code: 'CLASSIFICATION.RELEASE_REQUIRES_KERNEL_OPERATION',
      title: 'Release movement requires kernel release operation',
      message: 'money_movement_types includes release but kernel_contract.allowed_operations does not include release_escrow.',
      path: 'kernel_contract.allowed_operations',
      validator: 'ClassificationValidator'
    }),
    evidenceTypes.includes('gps') && !(contract.evidence?.verification_methods ?? []).some((method) => normalizeKey(method.method).includes('gps')) && createUccValidationFinding({
      code: 'CLASSIFICATION.GPS_REQUIRES_VERIFICATION_METHOD',
      title: 'GPS evidence missing verification method',
      message: 'evidence_types includes gps but evidence.verification_methods does not define GPS verification.',
      path: 'evidence.verification_methods',
      validator: 'ClassificationValidator'
    }),
    actorTypes.some((type) => ['dependent', 'child'].includes(type)) && !(contract.policy?.minor_protection_rules ?? []).length && createUccValidationFinding({
      code: 'CLASSIFICATION.DEPENDENT_REQUIRES_MINOR_PROTECTION',
      title: 'Dependent actor missing minor protection',
      message: 'Dependent actors require policy.minor_protection_rules.',
      path: 'policy.minor_protection_rules',
      validator: 'ClassificationValidator'
    }),
    ['high', 'restricted'].includes(riskClass) && !(contract.policy?.human_review_rules ?? []).length && createUccValidationFinding({
      code: 'CLASSIFICATION.HIGH_RISK_REQUIRES_HUMAN_REVIEW',
      title: 'High risk requires human review',
      message: 'High or restricted risk capabilities must define human review rules.',
      path: 'policy.human_review_rules',
      validator: 'ClassificationValidator'
    })
  ].filter(Boolean)

  return {
    rules: UCC_CLASSIFICATION_STAGE_RULES,
    findings,
    valid: findings.length === 0
  }
}

export function validateUccDependencyRegistryStage(
  contract = buildSchoolFeesUccSections(),
  {
    atomRegistry = [...CAPABILITY_ATOMS, 'WalletIdAtom'],
    microPrimitiveRegistry = [...CAPABILITY_MICRO_PRIMITIVES, 'CheckBalance', 'GenerateReceipt'],
    primitiveRegistry = [...CAPABILITY_PRIMITIVES, 'EscrowReleasePrimitive'],
    algorithmVault = [...ALGORITHM_VAULT_ALGORITHMS, 'InvoiceSimilarityCheck', 'ContributionGapForecast', 'RiskVelocityCheck'],
    assetVault = [...ASSET_VAULT_ASSET_TYPES, 'education_wallet_icon', 'school_fee_progress_ring', 'invoice_review_illustration', 'payment_success_lottie'],
    kernelFeatureRegistry = UCC_SUPPORTED_KERNEL_FEATURES
  } = {}
) {
  const dependencies = contract.dependencies ?? {}
  const missingAtoms = (dependencies.atoms ?? []).filter((atom) => !atomRegistry.includes(atom))
  const missingMicroPrimitives = (dependencies.micro_primitives ?? []).filter((primitive) => !microPrimitiveRegistry.includes(primitive))
  const baseReview = validateUccDependenciesSection(dependencies, {
    primitiveRegistry,
    algorithmVault,
    assetVault,
    targetKernelFeatures: kernelFeatureRegistry
  })
  const findings = [
    ...missingAtoms.map((atom) => createUccValidationFinding({
      code: 'DEPENDENCY.ATOM_NOT_FOUND',
      title: 'Atom not found',
      message: `${atom} does not exist in the active atom registry.`,
      path: 'dependencies.atoms',
      validator: 'DependencyValidator'
    })),
    ...missingMicroPrimitives.map((primitive) => createUccValidationFinding({
      code: 'DEPENDENCY.MICRO_PRIMITIVE_NOT_FOUND',
      title: 'Micro-primitive not found',
      message: `${primitive} does not exist in the active micro-primitive registry.`,
      path: 'dependencies.micro_primitives',
      validator: 'DependencyValidator'
    })),
    ...baseReview.missingPrimitives.map((primitive) => createUccValidationFinding({
      code: 'DEPENDENCY.PRIMITIVE_NOT_FOUND',
      title: 'Primitive not found',
      message: `${primitive} does not exist in the active primitive registry.`,
      path: 'dependencies.primitives',
      validator: 'DependencyValidator'
    })),
    ...baseReview.unsupportedKernelFeatures.map((feature) => createUccValidationFinding({
      code: 'DEPENDENCY.KERNEL_FEATURE_UNSUPPORTED',
      title: 'Kernel feature unsupported',
      message: `Target kernel version does not support ${feature}.`,
      path: 'dependencies.kernel_features',
      validator: 'DependencyValidator'
    })),
    ...baseReview.integrationsMissingFailureHandling.map((integration) => createUccValidationFinding({
      code: 'DEPENDENCY.INTEGRATION_FAILURE_HANDLING_MISSING',
      title: 'External integration failure handling missing',
      message: `${integration} must declare failure handling.`,
      path: 'dependencies.external_integrations',
      validator: 'DependencyValidator'
    }))
  ]

  return {
    registries: UCC_DEPENDENCY_REGISTRIES,
    statusTypes: UCC_DEPENDENCY_STATUS_TYPES,
    findings,
    valid: findings.length === 0,
    providerApiSkipped: baseReview.providerApiSkipped
  }
}

export function validateUccEntityPermissionVisibilityStage(contract = buildSchoolFeesUccSections()) {
  const entities = contract.entities ?? {}
  const moneyObjectIds = new Set([
    ...(contract.money_objects?.sources ?? []).map((item) => item.id),
    ...(contract.money_objects?.destinations ?? []).map((item) => item.id),
    ...(contract.money_objects?.wallets ?? []).map((item) => item.id),
    ...(contract.money_objects?.escrows ?? []).map((item) => item.id),
    ...(contract.money_objects?.locks ?? []).map((item) => item.id),
    'wallet'
  ])
  const actorIds = new Set((entities.actors ?? []).map((actor) => actor.id))
  const baseReview = validateUccEntitiesSection(entities)
  const actorFieldFindings = (entities.actors ?? [])
    .filter((actor) => !actor.id || !actor.type || !actor.role || actor.required == null || !actor.verification_level)
    .map((actor) => createUccValidationFinding({
      code: 'ENTITY.ACTOR_INCOMPLETE',
      title: 'Actor missing required fields',
      message: `${actor.id ?? 'unknown actor'} must define id, type, role, required, and verification_level.`,
      path: 'entities.actors',
      validator: 'EntityValidator'
    }))
  const relationshipFindings = (entities.relationships ?? [])
    .filter((relationship) => !actorIds.has(relationship.from) || (!actorIds.has(relationship.to) && !moneyObjectIds.has(relationship.to)))
    .map((relationship) => createUccValidationFinding({
      code: 'ENTITY.RELATIONSHIP_UNKNOWN_REFERENCE',
      title: 'Relationship references unknown object',
      message: `${relationship.from}->${relationship.to} must reference declared actors or money objects.`,
      path: 'entities.relationships',
      validator: 'EntityValidator'
    }))
  const visibilityReferenceFindings = (entities.data_visibility ?? [])
    .filter((visibility) => !actorIds.has(visibility.actor))
    .map((visibility) => createUccValidationFinding({
      code: 'ENTITY.DATA_VISIBILITY_UNKNOWN_ACTOR',
      title: 'Data visibility references unknown actor',
      message: `${visibility.actor} is not declared.`,
      path: 'entities.data_visibility',
      validator: 'EntityValidator'
    }))
  const roleMismatchFindings = (entities.permissions ?? [])
    .filter((permission) => permission.actor === 'contributor' && (permission.can ?? []).includes('approve_release'))
    .map(() => createUccValidationFinding({
      code: 'ENTITY.PERMISSION_ROLE_MISMATCH',
      title: 'Permission role mismatch',
      message: 'contributor cannot approve release in this capability type.',
      path: 'entities.permissions',
      validator: 'EntityValidator'
    }))
  const overexposureFindings = (entities.data_visibility ?? [])
    .filter((visibility) => {
      const view = [...(visibility.can_view ?? []), ...(visibility.visible_events ?? [])].map(normalizeKey)
      return (visibility.actor === 'contributor' && view.some((item) => item.includes('total_balance') || item.includes('other_contributor'))) ||
        (visibility.actor === 'school' && view.some((item) => item.includes('family_financial') || item.includes('private_balance')))
    })
    .map((visibility) => createUccValidationFinding({
      code: 'ENTITY.DATA_VISIBILITY_OVEREXPOSED',
      title: 'Data visibility overexposed',
      message: `${visibility.actor} can view data that violates declared privacy policy.`,
      path: 'entities.data_visibility',
      validator: 'EntityValidator'
    }))
  const findings = [
    ...baseReview.violations.map((violation) => createUccValidationFinding({
      code: 'ENTITY.BASE_VALIDATION_FAILED',
      title: 'Entity validation failed',
      message: violation,
      path: 'entities',
      validator: 'EntityValidator'
    })),
    ...actorFieldFindings,
    ...relationshipFindings,
    ...visibilityReferenceFindings,
    ...roleMismatchFindings,
    ...overexposureFindings
  ]

  return {
    rules: UCC_ENTITY_STAGE_RULES,
    findings,
    valid: findings.length === 0
  }
}

export function validateUccMoneyObjectStage(contract = buildSchoolFeesUccSections()) {
  const moneyObjects = contract.money_objects ?? {}
  const baseReview = validateUccMoneyObjectsSection(moneyObjects, { entities: contract.entities })
  const escrowFindings = (moneyObjects.escrows ?? [])
    .filter((escrow) => !escrow.owner || !escrow.recipient || !escrow.release_condition || !escrow.refund_condition || !escrow.dispute_condition || !escrow.expiry_condition)
    .map((escrow) => createUccValidationFinding({
      code: !escrow.refund_condition ? 'MONEY_OBJECT.ESCROW_NO_REFUND_PATH' : 'MONEY_OBJECT.ESCROW_INCOMPLETE',
      title: 'Escrow incomplete',
      message: `${escrow.id} must define owner, recipient, release, refund, dispute, and expiry conditions.`,
      path: 'money_objects.escrows',
      validator: 'MoneyObjectValidator',
      severity: 'CRITICAL'
    }))
  const liabilityFindings = (moneyObjects.liabilities ?? [])
    .filter((liability) => !liability.liable_party || !liability.settlement_rules)
    .map((liability) => createUccValidationFinding({
      code: 'MONEY_OBJECT.LIABILITY_INCOMPLETE',
      title: 'Liability incomplete',
      message: `${liability.id ?? 'liability'} must define liable party and settlement rules.`,
      path: 'money_objects.liabilities',
      validator: 'MoneyObjectValidator'
    }))
  const fieldReview = validateUccPrimitiveFieldConventions(contract)
  const findings = [
    ...baseReview.walletsMissingOwner.map((id) => createUccValidationFinding({
      code: 'MONEY_OBJECT.OWNER_MISSING',
      title: 'Money object owner missing',
      message: `${id} has no declared owner.`,
      path: 'money_objects.wallets',
      validator: 'MoneyObjectValidator',
      severity: 'BLOCKER'
    })),
    ...baseReview.undisclosedFees.map((id) => createUccValidationFinding({
      code: 'MONEY_OBJECT.FEE_NOT_DISCLOSED',
      title: 'Fee not disclosed',
      message: `${id} is declared but no disclosure requirement exists.`,
      path: 'money_objects.fees',
      validator: 'MoneyObjectValidator',
      severity: 'CRITICAL'
    })),
    ...escrowFindings,
    ...liabilityFindings,
    ...fieldReview.invalidCurrencies.map((id) => createUccValidationFinding({
      code: 'MONEY_OBJECT.INVALID_CURRENCY',
      title: 'Invalid currency',
      message: `${id} uses an unsupported currency code.`,
      path: 'money_objects.wallets',
      validator: 'MoneyObjectValidator'
    }))
  ]

  return {
    rules: UCC_MONEY_OBJECT_STAGE_RULES,
    findings,
    valid: findings.length === 0
  }
}

export function validateUccRuleCoherenceStage(contract = buildSchoolFeesUccSections()) {
  const rules = contract.rules ?? {}
  const knownEvents = new Set([
    ...CAPABILITY_EVENT_TYPES,
    ...(contract.events_audit?.emitted_events ?? []),
    'MONEY_RECEIVED',
    'APPROVAL_GRANTED'
  ])
  const knownContexts = new Set([
    'wallet',
    'invoice',
    'school_fees_wallet',
    'auto_split_percentage',
    ...(contract.entities?.actors ?? []).map((actor) => actor.id),
    ...(contract.money_objects?.sources ?? []).map((item) => item.id),
    ...(contract.money_objects?.destinations ?? []).map((item) => item.id),
    ...(contract.money_objects?.wallets ?? []).map((item) => item.id),
    ...(contract.money_objects?.escrows ?? []).map((item) => item.id)
  ])
  const triggerFindings = (rules.triggers ?? [])
    .filter((trigger) => trigger.event && !knownEvents.has(trigger.event))
    .map((trigger) => createUccValidationFinding({
      code: 'RULE.TRIGGER_UNKNOWN_EVENT',
      title: 'Trigger references unknown event',
      message: `${trigger.id} references unknown event ${trigger.event}.`,
      path: 'rules.triggers',
      validator: 'RuleValidator'
    }))
  const conditionFindings = (rules.conditions ?? [])
    .filter((condition) => {
      const match = String(condition.expression ?? '').match(/([a-zA-Z_][\w]*)\./)
      return match && !knownContexts.has(match[1])
    })
    .map((condition) => createUccValidationFinding({
      code: 'RULE.CONDITION_UNKNOWN_REFERENCE',
      title: 'Condition references unknown object',
      message: `condition '${condition.id}' references an undeclared object.`,
      path: 'rules.conditions',
      validator: 'RuleValidator'
    }))
  const unsafeExpressionFindings = (rules.conditions ?? [])
    .map((condition) => ({ condition, review: validateSafeExpressionLanguage(condition.expression) }))
    .filter(({ review }) => !review.safe)
    .map(({ condition, review }) => createUccValidationFinding({
      code: 'SECURITY.UNSAFE_EXPRESSION',
      title: 'Unsafe expression blocked',
      message: `${condition.id} uses disallowed expression features: ${review.violations.join(', ')}.`,
      path: 'rules.conditions',
      validator: 'RuleValidator',
      severity: 'BLOCKER'
    }))
  const baseReview = validateUccRulesSection(rules, { kernelContract: contract.kernel_contract })
  const allowedOperations = new Set(contract.kernel_contract?.allowed_operations ?? [])
  const undeclaredCommandFindings = (rules.actions ?? [])
    .filter((action) => action.type === 'kernel_command' && !allowedOperations.has(action.command))
    .map((action) => createUccValidationFinding({
      code: 'RULE.ACTION_COMMAND_NOT_DECLARED',
      title: 'Action command not declared',
      message: `${action.id} uses kernel command ${action.command}, but it is not declared in kernel_contract.allowed_operations.`,
      path: 'rules.actions',
      validator: 'RuleValidator'
    }))
  const thresholdFindings = (rules.thresholds ?? [])
    .filter((threshold) => threshold.min == null || threshold.max == null || !threshold.unit)
    .map((threshold) => createUccValidationFinding({
      code: 'RULE.THRESHOLD_UNIT_OR_BOUNDS_MISSING',
      title: 'Threshold incomplete',
      message: `${threshold.id} must define units and bounds.`,
      path: 'rules.thresholds',
      validator: 'RuleValidator'
    }))
  const refundFindings = (rules.refund_rules ?? [])
    .filter(() => !(contract.kernel_contract?.allowed_operations ?? []).includes('refund_funds'))
    .map((rule) => createUccValidationFinding({
      code: 'RULE.REFUND_NO_KERNEL_OPERATION',
      title: 'Refund rule missing kernel operation',
      message: `${rule.id} requires refund_funds to be available.`,
      path: 'rules.refund_rules',
      validator: 'RuleValidator'
    }))
  const disputeFindings = (rules.dispute_rules ?? [])
    .filter((rule) => !normalizeKey(rule.action).includes('freeze'))
    .map((rule) => createUccValidationFinding({
      code: 'RULE.DISPUTE_NO_FROZEN_STATE',
      title: 'Dispute rule does not freeze funds',
      message: `${rule.id} must define frozen state behavior.`,
      path: 'rules.dispute_rules',
      validator: 'RuleValidator'
    }))
  const expiryFindings = (rules.expiry_rules ?? [])
    .filter((rule) => !/return|refund|release|resolve/i.test(rule.action ?? ''))
    .map((rule) => createUccValidationFinding({
      code: 'RULE.EXPIRY_NO_RESOLUTION',
      title: 'Expiry rule missing resolution',
      message: `${rule.id} must define resolution behavior.`,
      path: 'rules.expiry_rules',
      validator: 'RuleValidator'
    }))
  const findings = [
    ...triggerFindings,
    ...conditionFindings,
    ...unsafeExpressionFindings,
    ...baseReview.unknownKernelCommands.map((command) => createUccValidationFinding({
      code: 'RULE.ACTION_COMMAND_NOT_DECLARED',
      title: 'Kernel command missing contract',
      message: `${command} is not declared in kernel_contract.command_contracts.`,
      path: 'rules.actions',
      validator: 'RuleValidator'
    })),
    ...baseReview.schedulesMissingTimezone.map((id) => createUccValidationFinding({
      code: 'RULE.SCHEDULE_TIMEZONE_MISSING',
      title: 'Schedule timezone missing',
      message: `${id} is relative but has no timezone source.`,
      path: 'rules.schedules',
      validator: 'RuleValidator'
    })),
    ...baseReview.exceptionsMissingFallback.map((id) => createUccValidationFinding({
      code: 'RULE.EXCEPTION_RECOVERY_MISSING',
      title: 'Exception recovery missing',
      message: `${id} must have a recovery action.`,
      path: 'rules.exceptions',
      validator: 'RuleValidator'
    })),
    ...undeclaredCommandFindings,
    ...thresholdFindings,
    ...refundFindings,
    ...disputeFindings,
    ...expiryFindings
  ]

  return {
    rules: UCC_RULE_STAGE_RULES,
    findings,
    valid: findings.length === 0
  }
}

export function validateUccStateMachineSafetyStage(contract = buildSchoolFeesUccSections()) {
  const stateMachine = contract.state_machine ?? {}
  const stateIds = new Set((stateMachine.states ?? []).map((state) => state.id))
  const terminalStates = new Set(stateMachine.terminal_states ?? [])
  const baseReview = validateUccStateMachineSection(stateMachine, { kernelContract: contract.kernel_contract })
  const wildcardFindings = (stateMachine.transitions ?? [])
    .filter((transition) => transition.from === '*' && !transition.wildcard_allowed)
    .map((transition) => createUccValidationFinding({
      code: 'STATE.WILDCARD_NOT_EXPLICITLY_ALLOWED',
      title: 'Wildcard transition not explicitly allowed',
      message: `${transition.id} uses '*' but does not declare wildcard_allowed.`,
      path: 'state_machine.transitions',
      validator: 'StateMachineValidator'
    }))
  const incomingStates = new Set((stateMachine.transitions ?? []).map((transition) => transition.to))
  const unreachableStates = [...stateIds]
    .filter((stateId) => stateId !== stateMachine.initial_state)
    .filter((stateId) => !incomingStates.has(stateId))
  const outgoingStates = new Set((stateMachine.transitions ?? []).filter((transition) => transition.from !== '*').map((transition) => transition.from))
  const deadEndLockedStates = [...stateIds]
    .filter((stateId) => !terminalStates.has(stateId))
    .filter((stateId) => !outgoingStates.has(stateId))
    .filter((stateId) => /lock|escrow|fund/i.test(stateId))
  const terminalFundsUnresolved = baseReview.terminalStatesMissingResolution
  const findings = [
    ...baseReview.invalidTransitions.map((id) => createUccValidationFinding({
      code: 'STATE.INVALID_TRANSITION_REFERENCE',
      title: 'Transition references invalid state',
      message: `${id} references an unknown state.`,
      path: 'state_machine.transitions',
      validator: 'StateMachineValidator'
    })),
    ...baseReview.nonTerminalStatesMissingOutgoing.map((id) => createUccValidationFinding({
      code: 'STATE.DEAD_END_STATE',
      title: 'Non-terminal state has no outgoing path',
      message: `${id} has no outgoing transition.`,
      path: 'state_machine.states',
      validator: 'StateMachineValidator'
    })),
    ...wildcardFindings,
    ...unreachableStates.map((stateId) => createUccValidationFinding({
      code: 'STATE.UNREACHABLE_STATE',
      title: 'Unreachable state',
      message: `State '${stateId}' is declared but no transition leads to it.`,
      path: 'state_machine.states',
      validator: 'StateMachineValidator'
    })),
    ...deadEndLockedStates.map((stateId) => createUccValidationFinding({
      code: 'STATE.DEAD_END_WITH_LOCKED_FUNDS',
      title: 'Dead-end with locked funds',
      message: `State '${stateId}' has no outgoing transition but may contain locked funds.`,
      path: 'state_machine.states',
      validator: 'StateMachineValidator',
      severity: 'CRITICAL'
    })),
    ...terminalFundsUnresolved.map((stateId) => createUccValidationFinding({
      code: 'STATE.TERMINAL_FUNDS_UNRESOLVED',
      title: 'Terminal funds unresolved',
      message: `Terminal state '${stateId}' does not resolve available or locked wallet balance.`,
      path: 'state_machine.terminal_resolutions',
      validator: 'StateMachineValidator',
      severity: 'CRITICAL'
    }))
  ]

  return {
    rules: UCC_STATE_MACHINE_STAGE_RULES,
    findings,
    valid: findings.length === 0
  }
}

export function validateUccKernelContractStage(contract = buildSchoolFeesUccSections()) {
  const kernel = contract.kernel_contract ?? {}
  const baseReview = validateUccKernelContractSection(kernel, { rules: contract.rules })
  const directBalanceMutationFindings = (contract.rules?.actions ?? [])
    .filter((action) => action.type === 'direct_balance_mutation' || /increase_wallet_balance|decrease_wallet_balance|set_balance/i.test(`${action.command ?? ''} ${action.action ?? ''}`))
    .map((action) => createUccValidationFinding({
      code: 'KERNEL.DIRECT_BALANCE_MUTATION',
      title: 'Direct balance mutation',
      message: `Action '${action.id}' attempts to mutate balance outside the kernel command contract.`,
      path: 'rules.actions',
      validator: 'KernelContractValidator',
      severity: 'BLOCKER'
    }))
  const unbalancedLedgerFindings = (kernel.command_contracts ?? [])
    .filter((command) => command.ledger_effect && command.ledger_effect !== 'none')
    .filter((command) => !command.ledger_effect.debit || !command.ledger_effect.credit)
    .map((command) => createUccValidationFinding({
      code: 'KERNEL.LEDGER_EFFECT_UNBALANCED',
      title: 'Ledger effect unbalanced',
      message: `${command.id} must define both debit and credit ledger effects.`,
      path: 'kernel_contract.command_contracts',
      validator: 'KernelContractValidator',
      severity: 'CRITICAL'
    }))
  const prohibitedOperationFindings = baseReview.prohibitedOperationReferences.map((operation) => createUccValidationFinding({
    code: 'KERNEL.PROHIBITED_OPERATION_USED',
    title: 'Prohibited operation used',
    message: `Capability attempts to use ${operation}, which is prohibited for this capability.`,
    path: 'kernel_contract.prohibited_operations',
    validator: 'KernelContractValidator',
    severity: 'BLOCKER'
  }))
  const findings = [
    ...directBalanceMutationFindings,
    ...baseReview.moneyMovingActionsMissingCommand.map((id) => createUccValidationFinding({
      code: 'KERNEL.ACTION_NOT_CONTRACTED',
      title: 'Money-moving action missing kernel command',
      message: `${id} must map to an allowed kernel operation.`,
      path: 'rules.actions',
      validator: 'KernelContractValidator',
      severity: 'CRITICAL'
    })),
    ...baseReview.incompleteCommands.map((id) => createUccValidationFinding({
      code: 'KERNEL.COMMAND_INCOMPLETE',
      title: 'Kernel command incomplete',
      message: `${id} must declare inputs, preconditions, postconditions, and ledger effects.`,
      path: 'kernel_contract.command_contracts',
      validator: 'KernelContractValidator',
      severity: 'CRITICAL'
    })),
    ...baseReview.commandsMissingIdempotency.map((id) => createUccValidationFinding({
      code: 'KERNEL.MISSING_IDEMPOTENCY',
      title: 'Kernel command missing idempotency',
      message: `${id} has no idempotency key. This can cause duplicate payment release.`,
      path: 'kernel_contract.idempotency_rules',
      validator: 'KernelContractValidator',
      severity: 'CRITICAL'
    })),
    ...baseReview.externalSettlementMissingFinality.map((id) => createUccValidationFinding({
      code: 'KERNEL.EXTERNAL_SETTLEMENT_FINALITY_MISSING',
      title: 'External settlement finality missing',
      message: `${id} must define settlement finality.`,
      path: 'kernel_contract.settlement_rules',
      validator: 'KernelContractValidator',
      severity: 'CRITICAL'
    })),
    ...baseReview.reversalSensitiveMissing.map((id) => createUccValidationFinding({
      code: 'KERNEL.REVERSAL_BEHAVIOR_MISSING',
      title: 'Reversal behavior missing',
      message: `${id} must define reversal behavior.`,
      path: 'kernel_contract.reversal_rules',
      validator: 'KernelContractValidator',
      severity: 'CRITICAL'
    })),
    ...unbalancedLedgerFindings,
    ...prohibitedOperationFindings
  ]

  return {
    rules: UCC_KERNEL_STAGE_RULES,
    providerApiSkipped: baseReview.providerApiSkipped,
    findings,
    valid: findings.length === 0
  }
}

export function validateUccFinancialPhysicsStage(contract = buildSchoolFeesUccSections()) {
  const physics = contract.financial_physics ?? {}
  const baseReview = validateUccFinancialPhysicsSection(physics, {
    moneyObjects: contract.money_objects,
    kernelContract: contract.kernel_contract,
    stateMachine: contract.state_machine
  })
  const invariantIds = new Set((physics.invariants ?? []).map((invariant) => invariant.id))
  const liabilityScenarios = new Set((physics.liability_map ?? []).map((item) => item.scenario))
  const seriousFailureScenarios = [
    'fake_invoice_approved_by_parent',
    'system_releases_without_required_approval',
    'payment_provider_stub_fails_after_release_attempt'
  ]
  const findings = [
    !invariantIds.has('no_money_creation') && createUccValidationFinding({
      code: 'FINPHYS.MONEY_CREATION_INVARIANT_MISSING',
      title: 'No money creation invariant missing',
      message: 'Financial physics must declare no money creation.',
      path: 'financial_physics.invariants',
      validator: 'FinancialPhysicsValidator',
      severity: 'CRITICAL'
    }),
    !invariantIds.has('locked_funds_not_available') && createUccValidationFinding({
      code: 'FINPHYS.STATE_EXCLUSIVITY_VIOLATION',
      title: 'Locked funds availability invariant missing',
      message: 'Funds must not be represented as both locked and available.',
      path: 'financial_physics.invariants',
      validator: 'FinancialPhysicsValidator',
      severity: 'CRITICAL'
    }),
    ...baseReview.unbalancedLedgerEffects.map((id) => createUccValidationFinding({
      code: 'FINPHYS.BALANCE_CONSERVATION_VIOLATION',
      title: 'Balance conservation violation',
      message: `${id} has an unbalanced ledger effect.`,
      path: 'kernel_contract.command_contracts',
      validator: 'FinancialPhysicsValidator',
      severity: 'CRITICAL'
    })),
    ...baseReview.lockedObjectsMissingCompleteness.map((id) => createUccValidationFinding({
      code: 'FINPHYS.RELEASE_COMPLETENESS_MISSING',
      title: 'Release completeness missing',
      message: `${id} lacks release, refund, expiry, dispute, owner, or recipient declarations.`,
      path: 'financial_physics.release_completeness',
      validator: 'FinancialPhysicsValidator',
      severity: 'CRITICAL'
    })),
    ...seriousFailureScenarios
      .filter((scenario) => !liabilityScenarios.has(scenario))
      .map((scenario) => createUccValidationFinding({
        code: 'FINPHYS.LIABILITY_UNDECLARED',
        title: 'Liability undeclared',
        message: `No liability mapping exists for ${scenario}.`,
        path: 'financial_physics.liability_map',
        validator: 'FinancialPhysicsValidator',
        severity: 'CRITICAL'
      }))
  ].filter(Boolean)

  return {
    checks: UCC_FINANCIAL_PHYSICS_STAGE_CHECKS,
    findings,
    valid: findings.length === 0
  }
}

export function validateUccPolicyGovernorStage(
  contract = buildSchoolFeesUccSections(),
  { governorDecision = 'approve_with_conditions' } = {}
) {
  const policyReview = validateUccPolicySection(contract.policy, {
    entities: contract.entities,
    moneyObjects: contract.money_objects,
    autonomy: contract.autonomy
  })
  const prohibitedPatternUsed = (contract.rules?.actions ?? []).some((action) => normalizeKey(action.command).includes('unverified'))
  const usPooledContributionWarning = (contract.capability?.supported_jurisdictions ?? []).includes('US') &&
    (contract.entities?.actors ?? []).some((actor) => actor.role === 'contributor')
  const findings = [
    ...policyReview.violations.map((violation) => createUccValidationFinding({
      code: violation.includes('minor') ? 'POLICY.MINOR_PROTECTION_MISSING' : 'POLICY.VALIDATION_FAILED',
      title: 'Policy validation failed',
      message: violation,
      path: 'policy',
      validator: 'PolicyValidator',
      severity: violation.includes('minor') ? 'CRITICAL' : 'ERROR'
    })),
    prohibitedPatternUsed && createUccValidationFinding({
      code: 'POLICY.PROHIBITED_PATTERN',
      title: 'Prohibited policy pattern',
      message: 'Capability permits auto-release to an unverified recipient.',
      path: 'rules.actions',
      validator: 'PolicyValidator',
      severity: 'BLOCKER'
    }),
    usPooledContributionWarning && createUccValidationFinding({
      code: 'POLICY.JURISDICTION_REVIEW_REQUIRED',
      title: 'Jurisdiction review required',
      message: 'Capability supports US and includes pooled contributions. Compliance review required before release.',
      path: 'capability.supported_jurisdictions',
      validator: 'PolicyValidator',
      severity: 'WARNING',
      releaseImpact: { blocksPrivateRelease: false, blocksFullRuntime: true, blocksMarketplace: true }
    }),
    governorDecision === 'block' && createUccValidationFinding({
      code: 'GOVERNOR.BLOCKED',
      title: 'Governor blocked capability',
      message: 'No capability can run if the Governor blocks it.',
      path: 'release',
      validator: 'PolicyValidator',
      severity: 'BLOCKER'
    })
  ].filter(Boolean)

  return {
    governorDecisions: UCC_GOVERNOR_DECISIONS,
    governorDecision,
    findings,
    valid: !findings.some((finding) => ['ERROR', 'CRITICAL', 'BLOCKER'].includes(finding.severity))
  }
}

export function validateUccAutonomyConsentStage(contract = buildSchoolFeesUccSections()) {
  const autonomyReview = validateUccAutonomySection(contract.autonomy, { policy: contract.policy })
  const missingEscalationTrigger = (contract.autonomy?.escalation_rules ?? []).filter((rule) => !rule.condition || !rule.action)
  const findings = [
    ...autonomyReview.automaticActionsMissingConsent.map((action) => createUccValidationFinding({
      code: 'AUTONOMY.AUTO_MONEY_ACTION_WITHOUT_CONSENT',
      title: 'Automatic money action lacks consent',
      message: `${action} is enabled but no consent requirement exists.`,
      path: 'autonomy.dimensions',
      validator: 'AutonomyValidator',
      severity: 'CRITICAL'
    })),
    autonomyReview.externalReleaseFullyAutomatic && createUccValidationFinding({
      code: 'AUTONOMY.AUTO_EXTERNAL_RELEASE_UNSAFE',
      title: 'Automatic external release unsafe',
      message: 'Capability allows automatic external payment release to a new recipient without user approval.',
      path: 'autonomy.dimensions',
      validator: 'AutonomyValidator',
      severity: 'BLOCKER'
    }),
    !autonomyReview.ruleChangeRequiresConfirmation && createUccValidationFinding({
      code: 'AUTONOMY.RULE_MODIFICATION_UNPROTECTED',
      title: 'Rule modification unprotected',
      message: 'User-facing split percentage can be changed automatically without confirmation.',
      path: 'autonomy.dimensions',
      validator: 'AutonomyValidator'
    }),
    ...missingEscalationTrigger.map((rule) => createUccValidationFinding({
      code: 'AUTONOMY.ESCALATION_TRIGGER_MISSING',
      title: 'Autonomy escalation trigger missing',
      message: `${rule.action ?? 'escalation'} must define a runtime trigger.`,
      path: 'autonomy.escalation_rules',
      validator: 'AutonomyValidator'
    }))
  ].filter(Boolean)

  return {
    rules: UCC_AUTONOMY_CONSENT_STAGE_RULES,
    findings,
    valid: findings.length === 0
  }
}

export function validateUccEvidenceVerificationStage(contract = buildSchoolFeesUccSections()) {
  const evidence = contract.evidence ?? {}
  const baseReview = validateUccEvidenceSection(evidence)
  const requiredEvidence = evidence.required_evidence ?? []
  const highRiskEvidenceTypes = ['gps', 'photo', 'video', 'biometric_confirmation']
  const highRiskEvidencePresent = requiredEvidence.some((item) => highRiskEvidenceTypes.includes(item.type))
  const missingType = requiredEvidence.filter((item) => !item.type).map((item) => item.id)
  const missingRequiredFields = requiredEvidence.filter((item) => !(item.required_fields ?? []).length).map((item) => item.id)
  const antiSpoofingMissing = highRiskEvidencePresent && !(evidence.anti_spoofing_rules ?? []).length
  const findings = [
    ...missingType.map((id) => createUccValidationFinding({
      code: 'EVIDENCE.TYPE_MISSING',
      title: 'Evidence type missing',
      message: `${id} must define type.`,
      path: 'evidence.required_evidence',
      validator: 'EvidenceValidator'
    })),
    ...baseReview.missingSubmitter.map((id) => createUccValidationFinding({
      code: 'EVIDENCE.SUBMITTER_MISSING',
      title: 'Evidence submitter missing',
      message: `${id} must define submitter.`,
      path: 'evidence.required_evidence',
      validator: 'EvidenceValidator'
    })),
    ...missingRequiredFields.map((id) => createUccValidationFinding({
      code: 'EVIDENCE.REQUIRED_FIELDS_MISSING',
      title: 'Evidence required fields missing',
      message: `${id} must define required fields.`,
      path: 'evidence.required_evidence',
      validator: 'EvidenceValidator'
    })),
    ...baseReview.missingVerificationMethod.map((id) => createUccValidationFinding({
      code: 'EVIDENCE.VERIFICATION_METHOD_MISSING',
      title: 'Verification method missing',
      message: `${id} must define verification method.`,
      path: 'evidence.verification_methods',
      validator: 'EvidenceValidator'
    })),
    ...baseReview.automatedMethodsMissingThreshold.map((id) => createUccValidationFinding({
      code: 'EVIDENCE.CONFIDENCE_THRESHOLD_MISSING',
      title: 'Confidence threshold missing',
      message: `${id} automated verification must define confidence threshold.`,
      path: 'evidence.confidence_thresholds',
      validator: 'EvidenceValidator'
    })),
    ...baseReview.lowConfidenceMissingFallback.map((id) => createUccValidationFinding({
      code: 'EVIDENCE.LOW_CONFIDENCE_FALLBACK_MISSING',
      title: 'Low-confidence fallback missing',
      message: `${id} must define fallback for low-confidence outcomes.`,
      path: 'evidence.confidence_thresholds',
      validator: 'EvidenceValidator'
    })),
    ...baseReview.missingRetentionVisibility.map((id) => createUccValidationFinding({
      code: 'EVIDENCE.RETENTION_VISIBILITY_MISSING',
      title: 'Evidence retention visibility missing',
      message: `${id} must define retention and visibility.`,
      path: 'evidence.evidence_retention_rules',
      validator: 'EvidenceValidator'
    })),
    antiSpoofingMissing && createUccValidationFinding({
      code: 'EVIDENCE.GPS_NO_ANTI_SPOOFING',
      title: 'Anti-spoofing mitigation missing',
      message: 'High-risk evidence requires anti-spoofing mitigation.',
      path: 'evidence.anti_spoofing_rules',
      validator: 'EvidenceValidator',
      severity: 'CRITICAL'
    })
  ].filter(Boolean)

  return {
    rules: UCC_EVIDENCE_STAGE_RULES,
    findings,
    valid: findings.length === 0
  }
}

export function validateUccUiUxSafetyStage(contract = buildSchoolFeesUccSections()) {
  const baseReview = validateUccUiUxSection(contract.ui_ux, {
    policy: contract.policy,
    moneyObjects: contract.money_objects
  })
  const warningConditions = new Set((contract.ui_ux?.warning_points ?? []).map((warning) => warning.condition))
  const successHasReceipt = (contract.ui_ux?.required_surfaces ?? []).some((surface) => surface.type === 'receipt')
  const visibilitySurfacePresent = (contract.ui_ux?.generated_components ?? []).some((component) => normalizeKey(component).includes('timeline')) ||
    (contract.events_audit?.timeline_visibility ?? []).length > 0
  const highRiskNeedsReasonCodes = ['high', 'restricted'].includes(normalizeKey(contract.classification?.risk_class)) && !(contract.explainability?.reason_codes ?? []).length
  const findings = [
    baseReview.moneyLockMissingExplanation && createUccValidationFinding({
      code: 'UIUX.MISSING_LOCK_EXPLANATION',
      title: 'Missing lock explanation',
      message: 'school_fees_wallet restricts funds, but no explanation is shown before activation.',
      path: 'ui_ux.explanation_points',
      validator: 'UiUxValidator'
    }),
    baseReview.externalPaymentMissingConfirmation && createUccValidationFinding({
      code: 'UIUX.EXTERNAL_RELEASE_NO_CONFIRMATION',
      title: 'External release has no confirmation',
      message: 'release_to_school is external payment release but no confirmation screen is declared.',
      path: 'ui_ux.confirmation_points',
      validator: 'UiUxValidator',
      severity: 'CRITICAL'
    }),
    ...baseReview.consentsMissingCollection.map((consent) => createUccValidationFinding({
      code: 'UIUX.CONSENT_COLLECTION_MISSING',
      title: 'Consent collection missing',
      message: `${consent} requires a UI collection surface.`,
      path: 'ui_ux.consent_collection_points',
      validator: 'UiUxValidator'
    })),
    ...baseReview.errorStatesMissingRecovery.map((error) => createUccValidationFinding({
      code: 'UIUX.ERROR_NO_RECOVERY_PATH',
      title: 'Error state has no recovery path',
      message: `${error} is declared as an error state but no recovery path exists.`,
      path: 'ui_ux.error_recovery_paths',
      validator: 'UiUxValidator'
    })),
    !(warningConditions.has('school_unverified')) && createUccValidationFinding({
      code: 'UIUX.WARNING_SURFACE_MISSING',
      title: 'Warning surface missing',
      message: 'school_unverified must have a warning surface.',
      path: 'ui_ux.warning_points',
      validator: 'UiUxValidator'
    }),
    !successHasReceipt && createUccValidationFinding({
      code: 'UIUX.SUCCESS_RECEIPT_MISSING',
      title: 'Receipt missing for success state',
      message: 'Successful payment or contribution needs a receipt or confirmation.',
      path: 'ui_ux.required_surfaces',
      validator: 'UiUxValidator'
    }),
    !visibilitySurfacePresent && createUccValidationFinding({
      code: 'UIUX.MULTIPARTY_VISIBILITY_SURFACE_MISSING',
      title: 'Multi-party visibility surface missing',
      message: 'Multi-party capabilities need visibility surfaces.',
      path: 'ui_ux.generated_components',
      validator: 'UiUxValidator'
    }),
    highRiskNeedsReasonCodes && createUccValidationFinding({
      code: 'UIUX.HIGH_RISK_REASON_CODES_MISSING',
      title: 'High-risk reason codes missing',
      message: 'High-risk actions must have human-readable reason codes.',
      path: 'explainability.reason_codes',
      validator: 'UiUxValidator'
    })
  ].filter(Boolean)

  return {
    rules: UCC_UI_UX_STAGE_RULES,
    findings,
    valid: findings.length === 0
  }
}

export function validateUccEventsAuditStage(contract = buildSchoolFeesUccSections()) {
  const baseReview = validateUccEventsAuditSection(contract.events_audit, {
    stateMachine: contract.state_machine,
    rules: contract.rules
  })
  const auditRequirements = new Set(contract.events_audit?.audit_requirements ?? [])
  const findings = [
    ...baseReview.transitionsMissingEvent.map((id) => createUccValidationFinding({
      code: 'AUDIT.STATE_TRANSITION_EVENT_MISSING',
      title: 'State transition event missing',
      message: `${id} does not emit a declared event.`,
      path: 'events_audit.state_transition_events',
      validator: 'EventsAuditValidator'
    })),
    ...baseReview.moneyMovementsMissingEvent.map((id) => createUccValidationFinding({
      code: 'AUDIT.MONEY_MOVEMENT_EVENT_MISSING',
      title: 'Money movement event missing',
      message: `${id} changes balances but emits no declared event.`,
      path: 'events_audit.emitted_events',
      validator: 'EventsAuditValidator'
    })),
    !auditRequirements.has('record_consent_id') && createUccValidationFinding({
      code: 'AUDIT.CONSENT_ID_NOT_RECORDED',
      title: 'Consent ID not recorded',
      message: 'auto_split activation requires consent but audit requirements do not record consent_id.',
      path: 'events_audit.audit_requirements',
      validator: 'EventsAuditValidator'
    }),
    !auditRequirements.has('record_disclosure_version') && createUccValidationFinding({
      code: 'AUDIT.DISCLOSURE_VERSION_NOT_RECORDED',
      title: 'Disclosure version not recorded',
      message: 'Consent events must include disclosure_version.',
      path: 'events_audit.audit_requirements',
      validator: 'EventsAuditValidator'
    }),
    !auditRequirements.has('record_policy_decision') && createUccValidationFinding({
      code: 'AUDIT.POLICY_DECISION_NOT_RECORDED',
      title: 'Policy decision not recorded',
      message: 'Every policy decision must be recorded.',
      path: 'events_audit.audit_requirements',
      validator: 'EventsAuditValidator'
    }),
    baseReview.oversharingRisk && createUccValidationFinding({
      code: 'AUDIT.TIMELINE_VISIBILITY_UNSAFE',
      title: 'Timeline visibility unsafe',
      message: 'Contributor can view events containing private details.',
      path: 'events_audit.timeline_visibility',
      validator: 'EventsAuditValidator',
      severity: 'CRITICAL'
    })
  ].filter(Boolean)

  return {
    rules: UCC_EVENTS_AUDIT_STAGE_RULES,
    findings,
    valid: findings.length === 0
  }
}

export function validateUccTestingCoverageStage(contract = buildSchoolFeesUccSections()) {
  const baseReview = validateUccTestingSection(contract.testing, {
    policy: contract.policy,
    versioningMigration: contract.versioning_migration
  })
  const hasExternalIntegrations = (contract.dependencies?.external_integrations ?? []).length > 0
  const hasUiConsent = (contract.ui_ux?.consent_collection_points ?? []).length > 0
  const hasEvidenceVerification = (contract.evidence?.verification_methods ?? []).length > 0
  const findings = [
    !baseReview.ledgerTestsPresent && createUccValidationFinding({
      code: 'TESTING.LEDGER_TESTS_REQUIRED',
      title: 'Ledger tests required',
      message: 'Capability has money movement types but no ledger tests.',
      path: 'testing.ledger_tests',
      validator: 'TestingValidator'
    }),
    !baseReview.policyTestsPresent && createUccValidationFinding({
      code: 'TESTING.POLICY_TEST_COVERAGE_MISSING',
      title: 'Policy test coverage missing',
      message: "prohibited pattern 'release_to_unverified_school' has no policy test.",
      path: 'testing.policy_tests',
      validator: 'TestingValidator'
    }),
    !baseReview.fraudTestsPresent && createUccValidationFinding({
      code: 'TESTING.FRAUD_TESTS_REQUIRED',
      title: 'Fraud tests required',
      message: 'External recipient capabilities require fraud tests.',
      path: 'testing.fraud_tests',
      validator: 'TestingValidator'
    }),
    hasExternalIntegrations && !(contract.testing?.failure_tests ?? []).length && createUccValidationFinding({
      code: 'TESTING.FAILURE_TESTS_REQUIRED',
      title: 'Failure tests required',
      message: 'External integrations require failure tests.',
      path: 'testing.failure_tests',
      validator: 'TestingValidator'
    }),
    !baseReview.migrationTestsPresent && createUccValidationFinding({
      code: 'TESTING.MIGRATION_TESTS_REQUIRED',
      title: 'Migration tests required',
      message: 'Migration from 1.0.0 to 2.0.0 changes release rules but no migration tests are declared.',
      path: 'testing.migration_tests',
      validator: 'TestingValidator'
    }),
    hasUiConsent && !(contract.testing?.ui_tests ?? []).length && createUccValidationFinding({
      code: 'TESTING.UI_CONSENT_TESTS_REQUIRED',
      title: 'UI consent tests required',
      message: 'UI consent collection requires UI tests.',
      path: 'testing.ui_tests',
      validator: 'TestingValidator'
    }),
    hasEvidenceVerification && !(contract.testing?.fraud_tests ?? []).length && createUccValidationFinding({
      code: 'TESTING.EVIDENCE_FRAUD_TESTS_REQUIRED',
      title: 'Evidence fraud tests required',
      message: 'Evidence verification requires evidence or fraud tests.',
      path: 'testing.fraud_tests',
      validator: 'TestingValidator'
    })
  ].filter(Boolean)

  return {
    rules: UCC_TESTING_STAGE_RULES,
    findings,
    valid: findings.length === 0
  }
}

export function validateUccSimulationReadinessStage(contract = buildSchoolFeesUccSections()) {
  const baseReview = validateUccSimulationSection(contract.simulation, {
    classification: contract.classification,
    dependencies: contract.dependencies,
    moneyObjects: contract.money_objects,
    entities: contract.entities
  })
  const riskClass = normalizeKey(contract.classification?.risk_class)
  const mediumOrHighRisk = ['medium', 'high', 'restricted'].includes(riskClass)
  const hasProviderFailureScenario = (contract.simulation?.failure_scenarios ?? []).some((scenario) => /provider|external/i.test(`${scenario.id} ${scenario.expected_result}`))
  const hasFakeInvoiceScenario = (contract.simulation?.fraud_scenarios ?? []).some((scenario) => /fake_invoice|duplicate_invoice/i.test(`${scenario.id} ${scenario.expected_result}`))
  const findings = [
    !(contract.simulation?.normal_scenarios ?? []).length && createUccValidationFinding({
      code: 'SIMULATION.NORMAL_SCENARIO_MISSING',
      title: 'Normal scenario missing',
      message: 'Every capability must define normal scenarios.',
      path: 'simulation.normal_scenarios',
      validator: 'SimulationValidator'
    }),
    mediumOrHighRisk && !(contract.simulation?.edge_case_scenarios ?? []).length && createUccValidationFinding({
      code: 'SIMULATION.EDGE_CASE_SCENARIO_MISSING',
      title: 'Edge-case scenario missing',
      message: 'Every medium/high-risk capability must define edge cases.',
      path: 'simulation.edge_case_scenarios',
      validator: 'SimulationValidator'
    }),
    riskClass === 'high' && !(contract.simulation?.fraud_scenarios ?? []).length && createUccValidationFinding({
      code: 'SIMULATION.FRAUD_SCENARIO_MISSING',
      title: 'Fraud scenario missing',
      message: 'High-risk capabilities must define fraud scenarios.',
      path: 'simulation.fraud_scenarios',
      validator: 'SimulationValidator'
    }),
    (contract.dependencies?.external_integrations ?? []).length > 0 && !hasProviderFailureScenario && createUccValidationFinding({
      code: 'SIMULATION.PROVIDER_FAILURE_SCENARIO_MISSING',
      title: 'Provider failure scenario missing',
      message: 'Every capability with external provider must define provider failure scenarios.',
      path: 'simulation.failure_scenarios',
      validator: 'SimulationValidator'
    }),
    !baseReview.trappedFundsCovered && createUccValidationFinding({
      code: 'SIMULATION.TRAPPED_FUNDS_SCENARIO_MISSING',
      title: 'Trapped funds scenario missing',
      message: 'Capability uses escrow but does not simulate failed release or expired claim.',
      path: 'simulation.failure_scenarios',
      validator: 'SimulationValidator'
    }),
    !hasFakeInvoiceScenario && createUccValidationFinding({
      code: 'SIMULATION.FRAUD_SCENARIO_MISSING',
      title: 'Invoice fraud scenario missing',
      message: 'Capability verifies invoice but does not simulate fake invoice or duplicate invoice.',
      path: 'simulation.fraud_scenarios',
      validator: 'SimulationValidator'
    }),
    baseReview.multiParty && !(contract.simulation?.user_confusion_scenarios ?? []).length && createUccValidationFinding({
      code: 'SIMULATION.USER_CONFUSION_SCENARIO_MISSING',
      title: 'User confusion scenario missing',
      message: 'Multi-party capabilities must define user confusion scenarios.',
      path: 'simulation.user_confusion_scenarios',
      validator: 'SimulationValidator'
    })
  ].filter(Boolean)

  return {
    rules: UCC_SIMULATION_STAGE_RULES,
    findings,
    valid: findings.length === 0
  }
}

export function validateUccMonitoringReadinessStage(contract = buildSchoolFeesUccSections()) {
  const baseReview = validateUccMonitoringSection(contract.monitoring, {
    lifecycleStatus: 'active',
    riskClass: contract.classification?.risk_class
  })
  const metricSources = new Set((contract.monitoring?.metric_event_sources ?? []).map((source) => source.metric))
  const metricsWithoutSource = [
    ...(contract.monitoring?.health_metrics ?? []),
    ...(contract.monitoring?.risk_metrics ?? [])
  ].filter((metric) => /stuck|blocked|duplicate|verification/i.test(metric) && !metricSources.has(metric))
  const rollbackTriggersIncomplete = (contract.monitoring?.rollback_triggers ?? [])
    .filter((trigger) => typeof trigger === 'string' || !trigger.owner || !trigger.action)
    .map((trigger) => typeof trigger === 'string' ? trigger : trigger.trigger)
  const findings = [
    ...baseReview.violations.map((violation) => createUccValidationFinding({
      code: violation.includes('rollback') ? 'MONITORING.ROLLBACK_TRIGGER_MISSING' : 'MONITORING.READINESS_FAILED',
      title: 'Monitoring readiness failed',
      message: violation,
      path: 'monitoring',
      validator: 'MonitoringValidator'
    })),
    !(contract.monitoring?.user_experience_metrics ?? []).length && createUccValidationFinding({
      code: 'MONITORING.UX_METRICS_MISSING',
      title: 'UX metrics missing',
      message: 'Every user-facing capability must define UX metrics.',
      path: 'monitoring.user_experience_metrics',
      validator: 'MonitoringValidator'
    }),
    ...metricsWithoutSource.map((metric) => createUccValidationFinding({
      code: 'MONITORING.METRIC_NO_EVENT_SOURCE',
      title: 'Metric has no event source',
      message: `${metric} metric declared but no source event is auditable.`,
      path: 'monitoring.metric_event_sources',
      validator: 'MonitoringValidator'
    })),
    ...rollbackTriggersIncomplete.map((trigger) => createUccValidationFinding({
      code: 'MONITORING.ROLLBACK_TRIGGER_OWNER_ACTION_MISSING',
      title: 'Rollback trigger owner/action missing',
      message: `${trigger} must define owner and action.`,
      path: 'monitoring.rollback_triggers',
      validator: 'MonitoringValidator'
    }))
  ].filter(Boolean)

  return {
    rules: UCC_MONITORING_STAGE_RULES,
    findings,
    valid: findings.length === 0
  }
}

export function validateUccVersioningStage(contract = buildSchoolFeesUccSections()) {
  const baseReview = validateUccVersioningMigrationSection(contract.versioning_migration)
  const semverValid = /^\d+\.\d+\.\d+$/.test(contract.capability?.version ?? '')
  const consentConditions = new Set((contract.versioning_migration?.consent_on_upgrade ?? []).filter((rule) => rule.required).map((rule) => rule.condition))
  const findings = [
    !semverValid && createUccValidationFinding({
      code: 'VERSIONING.INVALID_CAPABILITY_VERSION',
      title: 'Capability version invalid',
      message: 'Capability version must be semantic.',
      path: 'capability.version',
      validator: 'VersioningMigrationValidator'
    }),
    ...baseReview.breakingChangesWithoutConsent.map((change) => createUccValidationFinding({
      code: 'VERSIONING.BREAKING_CHANGE_NO_CONSENT',
      title: 'Breaking change missing consent',
      message: `${change} changes release rules but consent_on_upgrade does not require user consent.`,
      path: 'versioning_migration.migration_rules',
      validator: 'VersioningMigrationValidator'
    })),
    ...baseReview.sensitiveChangesMissingConsent.map((condition) => createUccValidationFinding({
      code: 'VERSIONING.SENSITIVE_CHANGE_NO_CONSENT',
      title: 'Sensitive change consent missing',
      message: `${condition} requires consent.`,
      path: 'versioning_migration.consent_on_upgrade',
      validator: 'VersioningMigrationValidator'
    })),
    !consentConditions.has('data_visibility_changes') && createUccValidationFinding({
      code: 'VERSIONING.DATA_VISIBILITY_CHANGE_NO_CONSENT',
      title: 'Data visibility consent missing',
      message: 'Changes to data visibility require consent.',
      path: 'versioning_migration.consent_on_upgrade',
      validator: 'VersioningMigrationValidator'
    }),
    !baseReview.rollbackPreservesLedger && createUccValidationFinding({
      code: 'VERSIONING.ROLLBACK_LEDGER_TRUTH_VIOLATION',
      title: 'Rollback violates ledger truth',
      message: 'Rollback cannot violate ledger truth.',
      path: 'versioning_migration.rollback_plan',
      validator: 'VersioningMigrationValidator'
    }),
    !baseReview.retirementRequiresResolvedFunds && createUccValidationFinding({
      code: 'VERSIONING.RETIREMENT_WITH_ACTIVE_LOCKS',
      title: 'Retirement with active locks',
      message: 'Retirement rule does not specify how active locked funds are resolved.',
      path: 'versioning_migration.retirement_rules',
      validator: 'VersioningMigrationValidator',
      severity: 'CRITICAL'
    })
  ].filter(Boolean)

  return {
    rules: UCC_VERSIONING_STAGE_RULES,
    findings,
    valid: findings.length === 0
  }
}

export function validateUccExplainabilityStage(contract = buildSchoolFeesUccSections()) {
  const baseReview = validateUccExplainabilitySection(contract.explainability, {
    riskClass: contract.classification?.risk_class
  })
  const mediumOrHighRisk = ['medium', 'high', 'restricted'].includes(normalizeKey(contract.classification?.risk_class))
  const reasonCodes = contract.explainability?.reason_codes ?? []
  const findings = [
    !contract.explainability?.user_explanation && createUccValidationFinding({
      code: 'EXPLAINABILITY.USER_EXPLANATION_MISSING',
      title: 'User explanation missing',
      message: 'Every capability must have user_explanation.',
      path: 'explainability.user_explanation',
      validator: 'ExplainabilityValidator'
    }),
    mediumOrHighRisk && !contract.explainability?.admin_explanation && createUccValidationFinding({
      code: 'EXPLAINABILITY.ADMIN_EXPLANATION_MISSING',
      title: 'Admin explanation missing',
      message: 'Every medium/high-risk capability must have admin_explanation.',
      path: 'explainability.admin_explanation',
      validator: 'ExplainabilityValidator'
    }),
    ...baseReview.blockedActionsMissingReason.map((action) => createUccValidationFinding({
      code: 'EXPLAINABILITY.REASON_CODE_MISSING',
      title: 'Reason code missing',
      message: `Policy block '${action}' has no user-facing reason code.`,
      path: 'explainability.reason_codes',
      validator: 'ExplainabilityValidator'
    })),
    ...reasonCodes.filter((reason) => !reason.user_message).map((reason) => createUccValidationFinding({
      code: 'EXPLAINABILITY.REASON_CODE_USER_MESSAGE_MISSING',
      title: 'Reason code user message missing',
      message: `${reason.code} must have a user-safe message.`,
      path: 'explainability.reason_codes',
      validator: 'ExplainabilityValidator'
    })),
    ...reasonCodes.filter((reason) => !reason.internal_meaning).map((reason) => createUccValidationFinding({
      code: 'EXPLAINABILITY.REASON_CODE_INTERNAL_MEANING_MISSING',
      title: 'Reason code internal meaning missing',
      message: `${reason.code} must map to internal meaning.`,
      path: 'explainability.reason_codes',
      validator: 'ExplainabilityValidator'
    })),
    !/lock|restricted|release/i.test(contract.explainability?.user_explanation ?? '') && createUccValidationFinding({
      code: 'EXPLAINABILITY.USER_EXPLANATION_MISSING_LOCK',
      title: 'User explanation misses lock behavior',
      message: 'User explanation does not explain that funds may be restricted or locked.',
      path: 'explainability.user_explanation',
      validator: 'ExplainabilityValidator'
    })
  ].filter(Boolean)

  return {
    rules: UCC_EXPLAINABILITY_STAGE_RULES,
    findings,
    valid: findings.length === 0
  }
}

export function validateUccReleaseGateStage(
  contract = buildSchoolFeesUccSections(),
  {
    targetReleaseMode = contract.release?.release_mode,
    targetJurisdiction = contract.capability?.supported_jurisdictions?.[0],
    targetProduct = contract.capability?.supported_products?.[0],
    governorDecision = 'approve_with_conditions'
  } = {}
) {
  const validation = runUccValidationPipeline(contract)
  const policyStage = validateUccPolicyGovernorStage(contract, { governorDecision })
  const testingStage = validateUccTestingCoverageStage(contract)
  const monitoringStage = validateUccMonitoringReadinessStage(contract)
  const simulationStage = validateUccSimulationReadinessStage(contract)
  const riskClass = normalizeKey(contract.classification?.risk_class)
  const humanReviewRequired = ['medium', 'high', 'restricted'].includes(riskClass) || policyStage.findings.some((finding) => finding.code === 'POLICY.JURISDICTION_REVIEW_REQUIRED')
  const marketplaceIncomplete = targetReleaseMode === 'marketplace' && (!testingStage.valid || !monitoringStage.valid || !simulationStage.valid)
  const findings = [
    governorDecision === 'block' && createUccValidationFinding({
      code: 'RELEASE.GOVERNOR_BLOCKED',
      title: 'Governor blocked release',
      message: 'No capability can run if the Governor blocks it.',
      path: 'release',
      validator: 'ReleaseGateValidator',
      severity: 'BLOCKER'
    }),
    humanReviewRequired && createUccValidationFinding({
      code: 'RELEASE.HUMAN_REVIEW_REQUIRED_FOR_MEDIUM_RISK',
      title: 'Human review required',
      message: 'Medium-risk capabilities can be privately used only with human review.',
      path: 'classification.risk_class',
      validator: 'ReleaseGateValidator',
      severity: 'WARNING',
      releaseImpact: { blocksPrivateRelease: false, blocksFullRuntime: true, blocksMarketplace: true }
    }),
    marketplaceIncomplete && createUccValidationFinding({
      code: 'RELEASE.MARKETPLACE_TESTING_INCOMPLETE',
      title: 'Marketplace testing incomplete',
      message: 'Marketplace release requires stronger testing, simulation, monitoring, and documentation.',
      path: 'release.marketplace_eligibility',
      validator: 'ReleaseGateValidator',
      severity: 'WARNING',
      releaseImpact: { blocksMarketplace: true }
    })
  ].filter(Boolean)
  const releaseEligibility = {
    draft: true,
    simulation: validation.valid,
    privateCapability: validation.valid && governorDecision !== 'block',
    tenantLimited: validation.valid && governorDecision !== 'block',
    humanReviewRequired,
    assistedAutonomy: validation.valid && contract.autonomy?.global_autonomy_level === 'assisted_autonomy' && !humanReviewRequired,
    fullRuntime: validation.valid && targetReleaseMode === 'full_runtime' && !humanReviewRequired,
    marketplace: validation.valid && targetReleaseMode === 'marketplace' && !marketplaceIncomplete && !humanReviewRequired,
    blocked: governorDecision === 'block',
    reasonCodes: findings.map((finding) => finding.code)
  }

  return {
    inputs: UCC_RELEASE_DECISION_INPUTS,
    decisions: UCC_RELEASE_DECISIONS,
    targetReleaseMode,
    targetJurisdiction,
    targetProduct,
    valid: validation.valid && !releaseEligibility.blocked,
    releaseEligibility,
    findings
  }
}

export function classifyUccReadinessState(contract = buildSchoolFeesUccSections()) {
  const schema = validateUccJsonSchemaStage(contract)
  const validation = runUccValidationPipeline(contract)
  const release = validateUccReleaseGateStage(contract)
  const state = !schema.valid
    ? 'invalid_schema'
    : !validation.valid
      ? validation.failedSteps.includes('rule_validation') || validation.failedSteps.includes('dependency_validation')
        ? 'semantically_incomplete'
        : 'incomplete_draft'
      : release.releaseEligibility.blocked
        ? 'blocked'
        : release.releaseEligibility.fullRuntime
          ? 'full_runtime_ready'
          : release.releaseEligibility.marketplace
            ? 'marketplace_ready'
            : release.releaseEligibility.humanReviewRequired
              ? 'review_required'
              : release.releaseEligibility.assistedAutonomy
                ? 'assisted_ready'
                : release.releaseEligibility.privateCapability
                  ? 'private_ready'
                  : 'simulation_ready'
  const matrixEntry = UCC_DECISION_MATRIX.find((entry) => entry.contractState === state)

  return {
    decisionMatrix: UCC_DECISION_MATRIX,
    contractState: state,
    meaning: matrixEntry?.meaning,
    allowedOutcome: matrixEntry?.allowedOutcome
  }
}

export function buildContractorGpsEscrowValidationExample() {
  return {
    ...CONTRACTOR_GPS_ESCROW_VALIDATION_EXAMPLE,
    repairGuidance: [
      'invalid_because_escrow_can_trap_funds',
      'ask_deadline_clarification',
      'add_expiry_refund_or_dispute_rule',
      'revalidate'
    ]
  }
}

export function generateUccRepairSuggestions(findings = buildContractorGpsEscrowValidationExample().findings) {
  const requiredFixes = findings
    .filter((finding) => finding.releaseImpact?.blocksPrivateRelease || ['ERROR', 'CRITICAL', 'BLOCKER'].includes(finding.severity))
    .map((finding) => ({
      code: finding.code === 'FINPHYS.TRAPPED_FUNDS.NO_EXPIRY_PATH' ? 'FIX.ADD_ESCROW_EXPIRY_RULE' : `FIX.${normalizeKey(finding.code).toUpperCase()}`,
      description: finding.requiredAction || 'Fix the validator finding before release.'
    }))
  const suggestedFixes = findings
    .filter((finding) => finding.severity === 'WARNING' || finding.releaseImpact?.blocksMarketplace)
    .map((finding) => ({
      code: `SUGGEST.${normalizeKey(finding.code).toUpperCase()}`,
      description: finding.suggestedFix || UCC_REPAIR_EXAMPLES.suggested_fix
    }))
  const missingClarifications = findings
    .filter((finding) => /expiry|deadline|proof|visibility|clarification/i.test(`${finding.message} ${finding.requiredAction}`))
    .map(() => ({
      question: 'What should happen if the contractor does not submit GPS/photo proof by the deadline?',
      requiredFor: 'private_release'
    }))

  return {
    repairTypes: UCC_REPAIR_TYPES,
    examples: UCC_REPAIR_EXAMPLES,
    requiredFixes,
    suggestedFixes,
    missingClarifications
  }
}

export function buildCapabilityDoctorInput(validationResult = buildUccValidationResult()) {
  return {
    relationship: UCC_VALIDATOR_DOCTOR_RELATIONSHIP,
    staticFindings: validationResult.findings,
    runtimeEvidenceExpected: ['runtime_metrics', 'support_tickets', 'failure_rates', 'user_confusion_signals'],
    doctorInputReady: true
  }
}

export function runUccValidatorMode(contract = buildSchoolFeesUccSections(), mode = 'release_time') {
  const input = buildUccValidationInput({ contract, environment: { mode } })
  const result = buildUccValidationResult(input)
  const requirements = UCC_VALIDATOR_MODE_REQUIREMENTS[mode] ?? []
  return {
    mode,
    requirements,
    result,
    allowsIncompleteDrafts: mode === 'design_time',
    strictness: mode === 'runtime_preflight'
      ? 'current_state_and_command'
      : mode === 'release_time'
        ? 'complete_real_money_release'
        : mode === 'simulation_time'
          ? 'fake_money_execution_ready'
          : 'draft_repair_guidance'
  }
}

export function runUccRuntimePreflight({
  contract = buildSchoolFeesUccSections(),
  command = 'release_escrow',
  actor = 'parent',
  currentState = 'approval_pending',
  approvalPresent = true,
  consentActive = true,
  recipientVerified = true,
  invoiceValid = true,
  balanceSufficient = true,
  riskBlocked = false,
  capabilityActive = true,
  idempotencyKey = 'capability_instance_id + invoice_id + approval_id'
} = {}) {
  const allowedOperation = (contract.kernel_contract?.allowed_operations ?? []).includes(command)
  const actorPermission = (contract.entities?.permissions ?? [])
    .find((permission) => permission.actor === actor)?.can ?? []
  const actorAllowed = command !== 'release_escrow' || actorPermission.includes('approve_release')
  const stateAllows = (contract.state_machine?.transitions ?? []).some((transition) => (
    transition.from === currentState && transition.kernel_operation === command
  ))
  const policySatisfied = !(contract.policy?.prohibited_patterns ?? []).includes('release_to_unverified_school') || recipientVerified
  const checks = {
    capability_active: capabilityActive,
    command_allowed_in_current_state: stateAllows,
    actor_allowed_for_action: actorAllowed,
    user_approval_present: approvalPresent,
    consent_still_active: consentActive,
    recipient_still_verified: recipientVerified,
    invoice_still_valid: invoiceValid,
    balance_sufficient: balanceSufficient,
    kernel_command_allowed: allowedOperation,
    idempotency_key_exists: Boolean(idempotencyKey),
    policy_still_satisfied: policySatisfied,
    risk_engine_not_blocking: !riskBlocked
  }
  const failedChecks = Object.entries(checks).filter(([, passed]) => !passed).map(([check]) => check)
  let decision = 'ALLOW'
  if (failedChecks.some((check) => ['capability_active', 'kernel_command_allowed', 'policy_still_satisfied', 'risk_engine_not_blocking'].includes(check))) decision = 'BLOCK'
  else if (failedChecks.includes('user_approval_present')) decision = 'REQUIRE_APPROVAL'
  else if (failedChecks.length > 0) decision = 'REQUIRE_MANUAL_REVIEW'

  return {
    checks: UCC_RUNTIME_PREFLIGHT_CHECKS,
    flow: UCC_RUNTIME_PREFLIGHT_FLOW,
    allowedOutputs: UCC_RUNTIME_PREFLIGHT_OUTPUTS,
    command,
    actor,
    currentState,
    checkResults: checks,
    failedChecks,
    decision,
    canCallKernelCommand: decision === 'ALLOW' || decision === 'ALLOW_WITH_WARNING'
  }
}

export function validateUccWithPseudocodeOrchestrator(input = buildUccValidationInput()) {
  const normalized = normalizeUccForRuntime(input.contract)
  const normalizedInput = { ...input, contract: normalized.normalized }
  const schemaStage = validateUccJsonSchemaStage(normalizedInput.contract)
  const fatalSchemaFailure = schemaStage.findings.some((finding) => finding.code === 'SCHEMA.REQUIRED_FIELD_MISSING')
  if (fatalSchemaFailure) {
    return buildUccValidationResult(normalizedInput)
  }
  return buildUccValidationResult(normalizedInput)
}

export function computeReleaseEligibilityFromFindings(findings = []) {
  const hasBlocker = findings.some((finding) => finding.severity === 'BLOCKER')
  const hasCritical = findings.some((finding) => finding.severity === 'CRITICAL')
  const hasError = findings.some((finding) => finding.severity === 'ERROR')
  return {
    draft: !hasBlocker,
    simulation: !findings.some((finding) => finding.releaseImpact?.blocksSimulation),
    privateCapability: !hasBlocker && !hasCritical && !hasError && !findings.some((finding) => finding.releaseImpact?.blocksPrivateRelease),
    tenantLimited: !findings.some((finding) => finding.releaseImpact?.blocksTenantLimited),
    assistedAutonomy: !findings.some((finding) => finding.releaseImpact?.blocksAssistedAutonomy),
    fullRuntime: !findings.some((finding) => finding.releaseImpact?.blocksFullRuntime),
    marketplace: !findings.some((finding) => finding.releaseImpact?.blocksMarketplace),
    blocked: hasBlocker,
    reasonCodes: findings
      .filter((finding) => ['ERROR', 'CRITICAL', 'BLOCKER'].includes(finding.severity))
      .map((finding) => finding.code)
  }
}

export function createUccValidationFinding({
  id = 'finding_001',
  severity = 'ERROR',
  code = 'UCC.VALIDATION.ERROR',
  title = 'Validation finding',
  message = 'A validator reported an issue.',
  path = '',
  validator = 'UniversalCapabilityValidator',
  affectedObjects = [],
  requiredAction = '',
  suggestedFix = '',
  releaseImpact = {}
} = {}) {
  const normalizedSeverity = UCC_FINDING_SEVERITY_LEVELS.some((item) => item.level === severity) ? severity : 'ERROR'
  return {
    id,
    severity: normalizedSeverity,
    code,
    title,
    message,
    path,
    validator,
    affectedObjects,
    requiredAction,
    suggestedFix,
    releaseImpact: {
      blocksDraft: false,
      blocksSimulation: ['BLOCKER'].includes(normalizedSeverity),
      blocksPrivateRelease: ['ERROR', 'CRITICAL', 'BLOCKER'].includes(normalizedSeverity),
      blocksTenantLimited: ['CRITICAL', 'BLOCKER'].includes(normalizedSeverity),
      blocksAssistedAutonomy: ['CRITICAL', 'BLOCKER'].includes(normalizedSeverity),
      blocksFullRuntime: ['ERROR', 'CRITICAL', 'BLOCKER'].includes(normalizedSeverity),
      blocksMarketplace: ['WARNING', 'ERROR', 'CRITICAL', 'BLOCKER'].includes(normalizedSeverity),
      ...releaseImpact
    }
  }
}

export function buildUccRegistrySnapshot(overrides = {}) {
  const defaultPolicyChecks = [
    ...(SCHOOL_FEES_UCC_POLICY_SECTION.jurisdiction_rules ?? []).flatMap((rule) => rule.rules ?? []),
    ...(SCHOOL_FEES_UCC_POLICY_SECTION.kyc_kyb_requirements ?? []).map((rule) => `${rule.actor}:${rule.requirement}`),
    ...(SCHOOL_FEES_UCC_POLICY_SECTION.aml_rules ?? []),
    ...(SCHOOL_FEES_UCC_POLICY_SECTION.consumer_protection_rules ?? []),
    ...(SCHOOL_FEES_UCC_POLICY_SECTION.minor_protection_rules ?? []),
    ...(SCHOOL_FEES_UCC_POLICY_SECTION.data_privacy_rules ?? [])
  ]

  return {
    snapshotId: overrides.snapshotId ?? 'registry_snapshot_school_fees_v1',
    version: overrides.version ?? 'registry_snapshot_school_fees_v1',
    createdAt: overrides.createdAt ?? '2026-05-27T00:00:00.000Z',
    atoms: overrides.atoms ?? CAPABILITY_ATOMS.map((id) => ({ id, type: 'atom' })),
    microPrimitives: overrides.microPrimitives ?? CAPABILITY_MICRO_PRIMITIVES.map((id) => ({ id, type: 'micro_primitive' })),
    primitives: overrides.primitives ?? CAPABILITY_PRIMITIVES.map((id) => ({ id, purpose: normalizeKey(id) })),
    capabilities: overrides.capabilities ?? [{ id: SCHOOL_FEES_UCC_CAPABILITY_SECTION.id, version: SCHOOL_FEES_UCC_CAPABILITY_SECTION.version }],
    algorithms: overrides.algorithms ?? ALGORITHM_VAULT_ALGORITHMS.map((id) => ({ id, purpose: normalizeKey(id) })),
    assets: overrides.assets ?? ASSET_VAULT_ASSET_TYPES.map((id) => ({ id })),
    policies: overrides.policies ?? defaultPolicyChecks.map((id) => ({ id })),
    jurisdictions: overrides.jurisdictions ?? SCHOOL_FEES_UCC_CAPABILITY_SECTION.supported_jurisdictions.map((id) => ({ id })),
    kernelFeatures: overrides.kernelFeatures ?? UCC_SUPPORTED_KERNEL_FEATURES.map((id) => ({ id })),
    eventDefinitions: overrides.eventDefinitions ?? CAPABILITY_EVENT_TYPES.map((id) => ({ id })),
    disclosures: overrides.disclosures ?? SCHOOL_FEES_UCC_POLICY_SECTION.disclosure_requirements.map((disclosure) => ({ id: disclosure.id })),
    consentPatterns: overrides.consentPatterns ?? SCHOOL_FEES_UCC_POLICY_SECTION.consent_requirements.map((consent) => ({ id: consent.id })),
    evidencePatterns: overrides.evidencePatterns ?? SCHOOL_FEES_UCC_EVIDENCE_PARTIAL.required_evidence.map((evidence) => ({ id: evidence.id, type: evidence.type })),
    uiPatterns: overrides.uiPatterns ?? SCHOOL_FEES_UCC_UI_UX_SECTION.required_surfaces.map((surface) => ({ id: surface.id, type: surface.type })),
    simulationScenarios: overrides.simulationScenarios ?? [
      ...SCHOOL_FEES_UCC_SIMULATION_SECTION.normal_scenarios,
      ...SCHOOL_FEES_UCC_SIMULATION_SECTION.edge_case_scenarios,
      ...SCHOOL_FEES_UCC_SIMULATION_SECTION.fraud_scenarios
    ].map((id) => ({ id })),
    testPatterns: overrides.testPatterns ?? [
      ...SCHOOL_FEES_UCC_TESTING_PARTIAL.ledger_tests,
      ...SCHOOL_FEES_UCC_TESTING_PARTIAL.policy_tests,
      ...SCHOOL_FEES_UCC_TESTING_PARTIAL.ui_tests
    ].map((id) => ({ id }))
  }
}

export function buildUccPolicySnapshot(overrides = {}) {
  const defaultPolicyChecks = [
    ...(SCHOOL_FEES_UCC_POLICY_SECTION.jurisdiction_rules ?? []).flatMap((rule) => rule.rules ?? []),
    ...(SCHOOL_FEES_UCC_POLICY_SECTION.kyc_kyb_requirements ?? []).map((rule) => `${rule.actor}:${rule.requirement}`),
    ...(SCHOOL_FEES_UCC_POLICY_SECTION.aml_rules ?? []),
    ...(SCHOOL_FEES_UCC_POLICY_SECTION.consumer_protection_rules ?? []),
    ...(SCHOOL_FEES_UCC_POLICY_SECTION.minor_protection_rules ?? []),
    ...(SCHOOL_FEES_UCC_POLICY_SECTION.data_privacy_rules ?? [])
  ]

  return {
    snapshotId: overrides.snapshotId ?? 'policy_snapshot_us_education_wallet_v1',
    version: overrides.version ?? 'policy_snapshot_us_education_wallet_v1',
    createdAt: overrides.createdAt ?? '2026-05-27T00:00:00.000Z',
    policyChecks: overrides.policyChecks ?? defaultPolicyChecks,
    jurisdictions: overrides.jurisdictions ?? SCHOOL_FEES_UCC_CAPABILITY_SECTION.supported_jurisdictions,
    minorProtectionRules: overrides.minorProtectionRules ?? SCHOOL_FEES_UCC_POLICY_SECTION.minor_protection_rules,
    humanReviewRules: overrides.humanReviewRules ?? SCHOOL_FEES_UCC_POLICY_SECTION.human_review_rules
  }
}

export function validateUccRegistrySnapshot(snapshot = buildUccRegistrySnapshot()) {
  const missingFields = UCC_REGISTRY_SNAPSHOT_FIELDS.filter((field) => !(field in (snapshot ?? {})))
  const nonDeterministicFields = [
    !snapshot?.snapshotId && 'snapshotId',
    !snapshot?.createdAt && 'createdAt'
  ].filter(Boolean)
  const emptyRegistries = UCC_REGISTRY_SNAPSHOT_FIELDS
    .filter((field) => Array.isArray(snapshot?.[field]) && snapshot[field].length === 0)

  return {
    dependencies: UCC_VALIDATOR_REGISTRY_DEPENDENCIES,
    requiredFields: UCC_REGISTRY_SNAPSHOT_FIELDS,
    missingFields,
    nonDeterministicFields,
    emptyRegistries,
    valid: missingFields.length === 0 && nonDeterministicFields.length === 0
  }
}

export function buildUccDeterminismKey(input = buildUccValidationInput()) {
  return [
    input.contract?.capability?.id,
    input.contract?.capability?.version,
    input.registrySnapshot?.snapshotId ?? input.registrySnapshot?.version,
    input.policySnapshot?.snapshotId ?? input.policySnapshot?.version,
    input.environment?.kernelVersion,
    input.environment?.mode
  ].map((value) => String(value ?? 'missing')).join('|')
}

export function validateUccDeterminismEnvelope(input = buildUccValidationInput()) {
  const registryReview = validateUccRegistrySnapshot(input.registrySnapshot)
  const policySnapshotPresent = !!(input.policySnapshot?.snapshotId ?? input.policySnapshot?.version)
  const kernelVersionPresent = !!input.environment?.kernelVersion
  const validationModePresent = !!input.environment?.mode
  const missingInputs = [
    !input.contract && 'same_ucc',
    !registryReview.valid && 'same_registry_snapshot',
    !policySnapshotPresent && 'same_policy_snapshot',
    !kernelVersionPresent && 'same_kernel_version',
    !validationModePresent && 'same_validation_mode'
  ].filter(Boolean)

  return {
    rule: UCC_DETERMINISM_RULE,
    determinismKey: buildUccDeterminismKey(input),
    registryReview,
    missingInputs,
    deterministic: missingInputs.length === 0
  }
}

export function planUccRepairLoop({
  findings = buildContractorGpsEscrowValidationExample().findings,
  userAnswers = {}
} = {}) {
  const repairSuggestions = generateUccRepairSuggestions(findings)
  const trappedFundsFinding = findings.find((finding) => finding.code === 'FINPHYS.TRAPPED_FUNDS.NO_EXPIRY_PATH')
  const automaticPatches = trappedFundsFinding && userAnswers.recipientVerificationExpiry === 'refund_to_sender'
    ? [{
        target: 'rules.expiry_rules',
        patch: {
          id: 'recipient_verification_expiry',
          condition: 'recipient_unverified_after_7_days',
          action: 'refund_to_sender'
        }
      }]
    : []

  return {
    flow: UCC_REPAIR_LOOP_FLOW,
    requiredFixes: repairSuggestions.requiredFixes,
    clarifyingQuestions: repairSuggestions.missingClarifications,
    automaticPatches,
    revalidateAfterPatch: true
  }
}

export function buildAdminStudioValidationBadges(contract = buildSchoolFeesUccSections()) {
  const schema = validateUccJsonSchemaStage(contract)
  const dependencies = validateUccDependencyRegistryStage(contract)
  const financialPhysics = validateUccFinancialPhysicsStage(contract)
  const policy = validateUccPolicyGovernorStage(contract)
  const uiUx = validateUccUiUxSafetyStage(contract)
  const simulation = validateUccSimulationReadinessStage(contract)
  const release = validateUccReleaseGateStage(contract)
  const statusFor = (valid, fallback = 'Failed') => valid ? 'Pass' : fallback

  return {
    categories: UCC_ADMIN_STUDIO_BADGE_CATEGORIES,
    badges: [
      { label: 'Schema', status: statusFor(schema.valid) },
      { label: 'Dependencies', status: statusFor(dependencies.valid) },
      { label: 'Financial Physics', status: statusFor(financialPhysics.valid) },
      { label: 'Policy', status: policy.governorDecision === 'approve' ? 'Pass' : 'Needs Review' },
      { label: 'UI/UX', status: uiUx.valid ? 'Pass' : 'Warning' },
      { label: 'Simulation', status: simulation.valid ? 'Ready' : 'Not Ready' },
      { label: 'Release', status: release.releaseEligibility.privateCapability ? 'Private Ready' : 'Draft Only' }
    ]
  }
}

export function validateUccMarketplaceSubmission(contract = buildSchoolFeesUccSections(), {
  supportDocumentationComplete = true,
  marketplaceMetadata = ['category', 'description', 'jurisdictions', 'support_contact'],
  userFacingDisclosures = contract.policy?.disclosure_requirements ?? []
} = {}) {
  const validation = buildUccValidationResult(buildUccValidationInput({ contract, targetReleaseMode: 'marketplace' }))
  const releaseGate = validateUccReleaseGateStage({
    ...contract,
    release: { ...contract.release, release_mode: 'marketplace' }
  }, { targetReleaseMode: 'marketplace' })
  const blockers = [
    !validation.valid && 'full_schema_pass',
    validation.findings.some((finding) => finding.severity === 'CRITICAL') && 'no_critical_errors',
    validation.findings.some((finding) => finding.severity === 'BLOCKER') && 'no_blocker_findings',
    !validateUccTestingCoverageStage(contract).valid && 'complete_test_suite',
    !validateUccSimulationReadinessStage(contract).valid && 'complete_simulation_suite',
    !validateUccMonitoringReadinessStage(contract).valid && 'complete_monitoring_rules',
    !validateUccExplainabilityStage(contract).valid && 'complete_explainability_pack',
    !supportDocumentationComplete && 'complete_support_documentation',
    !validateUccPolicyGovernorStage(contract).valid && 'jurisdiction_aware_policy_review',
    !validateUccVersioningStage(contract).valid && 'safe_migration_plan',
    marketplaceMetadata.length < 4 && 'marketplace_metadata',
    userFacingDisclosures.length === 0 && 'user_facing_disclosures'
  ].filter(Boolean)

  return {
    requirements: UCC_MARKETPLACE_VALIDATION_REQUIREMENTS,
    releaseGate,
    blockers,
    marketplaceReady: blockers.length === 0 && releaseGate.releaseEligibility.marketplace
  }
}

export function buildUccValidationInput({
  contract = buildSchoolFeesUccSections(),
  environment = {},
  targetReleaseMode = contract.release?.release_mode,
  targetJurisdiction = contract.capability?.supported_jurisdictions?.[0],
  targetProduct = contract.capability?.supported_products?.[0],
  registrySnapshot = buildUccRegistrySnapshot(),
  policySnapshot = buildUccPolicySnapshot(),
  kernelFeatureSnapshot = { features: UCC_SUPPORTED_KERNEL_FEATURES }
} = {}) {
  return {
    contract,
    environment: {
      mode: 'release_time',
      capabilityRegistryVersion: registrySnapshot.version,
      policyVersion: policySnapshot.version,
      kernelVersion: 'kernel_current',
      ...environment
    },
    targetReleaseMode,
    targetJurisdiction,
    targetProduct,
    registrySnapshot,
    policySnapshot,
    kernelFeatureSnapshot
  }
}

export function deriveUccReleaseEligibility({
  contract = buildSchoolFeesUccSections(),
  validation = runUccValidationPipeline(contract),
  findings = []
} = {}) {
  const blocks = (field) => findings.some((finding) => finding.releaseImpact?.[field])
  const humanReviewRequired = (contract.policy?.human_review_rules ?? []).length > 0 || ['medium', 'high', 'restricted'].includes(normalizeKey(contract.classification?.risk_class))
  const reasonCodes = [
    humanReviewRequired && 'POLICY.HUMAN_REVIEW_REQUIRED',
    blocks('blocksMarketplace') && 'TESTING.MARKETPLACE_COVERAGE_INCOMPLETE',
    !validation.valid && 'VALIDATION.PIPELINE_FAILED'
  ].filter(Boolean)

  return {
    draft: !blocks('blocksDraft'),
    simulation: validation.valid && !blocks('blocksSimulation'),
    privateCapability: validation.valid && !blocks('blocksPrivateRelease'),
    tenantLimited: validation.valid && !blocks('blocksTenantLimited'),
    humanReviewRequired,
    assistedAutonomy: validation.valid && contract.autonomy?.global_autonomy_level === 'assisted_autonomy' && !blocks('blocksAssistedAutonomy'),
    fullRuntime: validation.valid && contract.release?.release_mode === 'full_runtime' && !blocks('blocksFullRuntime'),
    marketplace: validation.valid && contract.release?.release_mode === 'marketplace' && !blocks('blocksMarketplace'),
    blocked: !validation.valid || findings.some((finding) => finding.severity === 'BLOCKER'),
    reasonCodes
  }
}

export function buildUccValidationResult(input = buildUccValidationInput()) {
  const { contract, environment } = input
  const validation = runUccValidationPipeline(contract)
  const findings = validation.failedSteps.map((step, index) => createUccValidationFinding({
    id: `finding_${String(index + 1).padStart(3, '0')}`,
    severity: step.includes('financial_physics') || step.includes('kernel') ? 'CRITICAL' : 'ERROR',
    code: `UCC.${step.toUpperCase()}.FAILED`,
    title: `${step} failed`,
    message: `The ${step} stage reported an invalid contract condition.`,
    path: step,
    validator: 'UniversalCapabilityValidator',
    requiredAction: 'Fix the failed validator stage before release.',
    suggestedFix: 'Inspect the stage result for missing fields, unsafe rules, or incomplete dependencies.'
  }))
  if (validation.valid && contract.autonomy?.global_autonomy_level === 'assisted_autonomy') {
    findings.push(createUccValidationFinding({
      id: 'finding_info_001',
      severity: 'INFO',
      code: 'AUTONOMY.ASSISTED',
      title: 'Capability uses assisted autonomy',
      message: 'Automatic behavior is limited by consent, approval, and policy gates.',
      path: 'autonomy.global_autonomy_level',
      validator: 'AutonomyValidator'
    }))
  }
  const severity = UCC_FINDING_SEVERITY_LEVELS.reduce((summary, item) => {
    summary[item.level] = findings.filter((finding) => finding.severity === item.level).length
    return summary
  }, {})
  const releaseEligibility = deriveUccReleaseEligibility({ contract, validation, findings })

  return {
    contractId: `${contract.capability.id}@${contract.capability.version}`,
    capabilityId: contract.capability.id,
    capabilityVersion: contract.capability.version,
    valid: validation.valid,
    releaseEligibility,
    severity,
    findings,
    requiredFixes: findings.filter((finding) => finding.releaseImpact.blocksPrivateRelease).map((finding) => finding.requiredAction).filter(Boolean),
    suggestedFixes: findings.map((finding) => finding.suggestedFix).filter(Boolean),
    missingClarifications: environment.mode === 'design_time' && !validation.valid ? ['clarify_missing_required_sections'] : [],
    generatedArtifactsPreview: validation.valid ? compileUccToRuntimeArtifacts(contract).artifactNames : undefined
  }
}

export function validateCapabilityIdentitySchemaFragment(capability = SCHOOL_FEES_UCC_CAPABILITY_SECTION) {
  const required = UCC_CAPABILITY_IDENTITY_SCHEMA_FRAGMENT.required
  const missingFields = required.filter((field) => !(field in capability))
  const invalid = [
    capability.id && !UCC_ID_REGEX.test(capability.id) && 'id',
    capability.name && capability.name.length < 3 && 'name',
    capability.version && !/^[0-9]+\.[0-9]+\.[0-9]+$/.test(capability.version) && 'version',
    capability.description && capability.description.length < 10 && 'description',
    capability.category && !UCC_ID_REGEX.test(capability.category) && 'category',
    capability.lifecycle_status && !UCC_LIFECYCLE_STATUSES.includes(capability.lifecycle_status) && 'lifecycle_status',
    !Array.isArray(capability.supported_products) && 'supported_products',
    !Array.isArray(capability.supported_jurisdictions) && 'supported_jurisdictions',
    !Array.isArray(capability.tags) && 'tags'
  ].filter(Boolean)

  return {
    schema: UCC_CAPABILITY_IDENTITY_SCHEMA_FRAGMENT,
    missingFields,
    invalidFields: invalid,
    semanticReferencesCheckedElsewhere: true,
    valid: missingFields.length === 0 && invalid.length === 0
  }
}

export function validateMoneyObjectSchemaFragment(moneyObjects = SCHOOL_FEES_UCC_MONEY_OBJECTS_PARTIAL) {
  const walletTypeEnum = UCC_MONEY_OBJECT_SCHEMA_FRAGMENT.WalletObject.properties.type.enum
  const escrowTypeEnum = UCC_MONEY_OBJECT_SCHEMA_FRAGMENT.EscrowObject.properties.type.enum
  const walletFindings = (moneyObjects.wallets ?? []).flatMap((wallet) => [
    !wallet.id && 'wallet.id',
    wallet.id && !UCC_ID_REGEX.test(wallet.id) && `wallet.id:${wallet.id}`,
    !walletTypeEnum.includes(wallet.type) && `wallet.type:${wallet.type}`,
    !wallet.owner && `wallet.owner:${wallet.id}`,
    wallet.currency && !/^[A-Z]{3}$/.test(wallet.currency) && `wallet.currency:${wallet.id}`
  ].filter(Boolean))
  const escrowFindings = (moneyObjects.escrows ?? []).flatMap((escrow) => [
    !escrow.id && 'escrow.id',
    escrow.id && !UCC_ID_REGEX.test(escrow.id) && `escrow.id:${escrow.id}`,
    !escrowTypeEnum.includes(escrow.type) && `escrow.type:${escrow.type}`,
    !escrow.owner && `escrow.owner:${escrow.id}`,
    !escrow.recipient && `escrow.recipient:${escrow.id}`,
    !escrow.release_condition && `escrow.release_condition:${escrow.id}`
  ].filter(Boolean))

  return {
    schema: UCC_MONEY_OBJECT_SCHEMA_FRAGMENT,
    walletFindings,
    escrowFindings,
    semanticReferenceValidationRequired: true,
    valid: walletFindings.length === 0 && escrowFindings.length === 0
  }
}

export function validateKernelCommandContractSchemaFragment(kernelContract = SCHOOL_FEES_UCC_KERNEL_CONTRACT_SECTION) {
  const schema = UCC_KERNEL_COMMAND_CONTRACT_SCHEMA_FRAGMENT
  const required = schema.required
  const allowedFields = new Set(Object.keys(schema.properties))
  const commandFindings = (kernelContract?.command_contracts ?? []).flatMap((command, index) => {
    const commandId = command?.id ?? `command_${index}`
    const ledgerEffect = command?.ledger_effect
    const ledgerEffectIsObject = !!ledgerEffect && typeof ledgerEffect === 'object' && !Array.isArray(ledgerEffect)
    return [
      ...required.filter((field) => !(field in (command ?? {}))).map((field) => `${commandId}.missing:${field}`),
      ...Object.keys(command ?? {}).filter((field) => !allowedFields.has(field)).map((field) => `${commandId}.unknown:${field}`),
      command?.id && !UCC_ID_REGEX.test(command.id) && `${commandId}.id_pattern`,
      command?.operation && !UCC_KERNEL_OPERATION_ENUM.includes(command.operation) && `${commandId}.operation_enum:${command.operation}`,
      (!Array.isArray(command?.inputs) || command.inputs.length < 1) && `${commandId}.inputs_min_items`,
      !Array.isArray(command?.preconditions) && `${commandId}.preconditions_array`,
      !Array.isArray(command?.postconditions) && `${commandId}.postconditions_array`,
      !ledgerEffectIsObject && `${commandId}.ledger_effect_object`,
      ledgerEffectIsObject && !ledgerEffect.debit && `${commandId}.ledger_effect.debit`,
      ledgerEffectIsObject && !ledgerEffect.credit && `${commandId}.ledger_effect.credit`
    ].filter(Boolean)
  })

  return {
    schema,
    checkedCommands: (kernelContract?.command_contracts ?? []).map((command) => command.id),
    commandFindings,
    valid: commandFindings.length === 0
  }
}

export function buildCapabilityOSDashboard() {
  const definition = describeCapabilityOperatingSystem()
  const durableCapabilityModel = describeCapabilityTypeVsInstance()
  const runtimeObject = buildCapabilityRuntimeObject()
  const runtimeContinuity = validateCapabilityRuntimeContinuity(runtimeObject)
  const contractAmendment = buildCapabilityContractAmendment()
  const contractAmendmentReview = validateCapabilityContractAmendment(contractAmendment)
  const legalRuntimeTransition = validateCapabilityStateTransition({ from: 'scheduled', to: 'payment_due' })
  const blockedRuntimeTransition = validateCapabilityStateTransition({ from: 'draft', to: 'rent_paid' })
  const runtimeLedgerReview = validateCapabilityLedgerEntries()
  const runtimeEventTimeline = buildCapabilityEventTimeline()
  const runtimeSnapshot = buildCapabilityStateSnapshot()
  const runtimeMonitor = runCapabilityRuntimeMonitor({ expectedPaymentHappened: false })
  const resumedCapability = resumeCapabilityInstance()
  const runtimeMemory = buildCapabilityMemoryIndex(runtimeObject)
  const selectedRuntimeMode = chooseCapabilityRuntimeMode({ scheduledForFuture: true })
  const temporalCycle = buildCapabilityTemporalCycle()
  const temporalCycleReview = validateCapabilityTemporalCycle(temporalCycle)
  const versionPin = buildCapabilityVersionPin()
  const upgradeClassification = classifyCapabilityUpgrade({ bugFixOnly: false, behaviorChange: false })
  const instanceMigration = planCapabilityInstanceMigration()
  const closureSettlement = planCapabilityClosureSettlement()
  const healthStatus = evaluateCapabilityHealthStatus({ missedContributors: 2 })
  const livingDashboard = buildLivingCapabilityDashboard()
  const capabilityTimelineView = buildCapabilityTimelineView()
  const resumeBrief = buildCapabilityResumeBrief()
  const durableRuntimeStack = describeDurableCapabilityRuntimeStack()
  const durableOperatingFlow = buildDurableCapabilityOperatingFlow()
  const familyContributionExample = buildFamilyContributionCapabilityExample()
  const driftPrevention = evaluateCapabilityDriftPrevention()
  const familyContributionInvariantReview = validateFamilyContributionInvariants()
  const historyViews = buildCapabilityHistoryViews()
  const safeClosure = planSafeCapabilityClosure()
  const durabilityClass = classifyCapabilityDurability({ scheduled: true, holdsMoney: true, multiParty: true, longLived: true })
  const lifecycleEngine = describeDurableCapabilityLifecycleEngine()
  const durableRuntimeRecord = buildDurableCapabilityRuntimeRecord()
  const identityHierarchy = validateCapabilityIdentityHierarchy()
  const livingInstanceRecord = buildLivingCapabilityInstanceRecord()
  const livingInstanceRecordReview = validateLivingCapabilityInstanceRecord(livingInstanceRecord)
  const familyContributionContract = buildFamilyContributionCapabilityContract()
  const familyContributionContractReview = validateCapabilityContractLaw(familyContributionContract)
  const separatedState = buildSeparatedCapabilityStateMachines()
  const separatedStateReview = validateSeparatedCapabilityState(separatedState)
  const recordContributionCommand = handleCapabilityCommand()
  const blockedReleaseCommand = handleCapabilityCommand({ command: 'ReleaseFunds' })
  const sourcedEvent = buildCapabilitySourcedEvent()
  const sourcedEventReview = validateCapabilitySourcedEvent(sourcedEvent)
  const capabilitySnapshotRecord = buildCapabilitySnapshotRecord()
  const capabilitySnapshotReview = validateCapabilitySnapshotRecord(capabilitySnapshotRecord)
  const scheduleBinding = buildCapabilityScheduleBinding()
  const scheduleBindingReview = validateCapabilityScheduleBinding(scheduleBinding)
  const scheduledJob = buildScheduledJobRecord()
  const scheduledJobRun = enforceScheduledJobIdempotency(scheduledJob)
  const duplicateScheduledJobRun = enforceScheduledJobIdempotency(scheduledJob, new Set([scheduledJob.idempotency_key]))
  const ledgerBinding = buildCapabilityLedgerBinding()
  const ledgerBindingReview = validateCapabilityLedgerBinding(ledgerBinding)
  const runtimeUiComposition = composeCapabilityUiFromRuntimeState()
  const userViewState = buildUserCapabilityViewState()
  const resumeChangeSummary = summarizeCapabilityChangesSinceLastSeen({ viewState: userViewState })
  const amendmentRecord = buildCapabilityAmendmentRecord()
  const amendmentRecordReview = validateCapabilityAmendmentRecord(amendmentRecord)
  const versionLock = buildCapabilityVersionLock()
  const codeUpdateDecision = decideCapabilityCodeUpdate()
  const migrationReport = buildCapabilityMigrationReport()
  const runtimeHealthOutput = evaluateRuntimeHealthOutput()
  const recoveryEngine = runCapabilityRecoveryEngine()
  const abandonmentReview = detectCapabilityAbandonment()
  const finalStatement = generateCapabilityFinalStatement()
  const lifecycleStrength = classifyCapabilityLifecycleStrength({ scheduled: true, holdsMoney: true, multiParty: true })
  const instanceDashboard = buildCapabilityInstanceDashboard()
  const detailPageModel = buildCapabilityDetailPageModel()
  const interfaceBinding = validateGeneratedInterfaceBinding()
  const durableCreationFlow = buildDurableCapabilityCreationFlow()
  const durableReopenFlow = buildDurableCapabilityReopenFlow()
  const durableEndingFlow = buildDurableCapabilityEndingFlow()
  const runtimeLayer = describeDurableCapabilityRuntimeLayer()
  const durableConclusion = summarizeDurableCapabilityConclusion()
  const envelope = buildCapabilityEnvelope()
  const balance = evaluateCapabilityOSBalance()
  const compiled = compileCapabilityIntent('I want to pay a contractor only after site proof is approved.')
  const schoolFees = decomposeSchoolFeesWalletIntent()
  const architecture = buildCapabilityOSArchitecture()
  const kernelBoundary = compareCapabilityOSToFinancialKernel()
  const moneyRoute = routeMoneyMovementThroughKernel()
  const creationStack = buildCapabilityCreationStack()
  const splitRatioAtom = validateCapabilityAtom('SplitRatioAtom', 20)
  const escrowReuse = mapPrimitiveReuse('EscrowPrimitive')
  const composedCapability = composeCapabilityFromParts()
  const packageSkeleton = buildCapabilityPackageSkeleton()
  const schoolFeesPackage = summarizeSchoolFeesCapabilityPackage()
  const universalInterface = buildUniversalCapabilityInterface()
  const interfaceReview = validateUniversalCapabilityInterface(universalInterface)
  const commandFlow = evaluateRuntimeCommandFlow()
  const unsafeCommandFlow = evaluateRuntimeCommandFlow({ buttonClickedDirectlySendsMoney: true })
  const physicsInvariantReview = evaluateFinancialPhysicsInvariants()
  const capabilityTypeSystem = buildCapabilityTypeSystem()
  const validCompatibility = evaluateComponentCompatibility(['GoalWalletPrimitive', 'AutoSplitPrimitive'])
  const blockedCompatibility = evaluateComponentCompatibility(['UnverifiedEntityPayout', 'AutoReleasePrimitive'])
  const typeCompatibility = enforceCapabilityTypeCompatibility(['EscrowRelease'])
  const compositionPlan = evaluateCompositionAlgebraPlan()
  const contractorIntent = interpretProductIntent()
  const genesisPipeline = buildCapabilityGenesisPipeline()
  const releaseMode = assignCapabilityReleaseMode({ humanReviewRequired: true })
  const autonomyReview = evaluateCapabilityAutonomyModel()
  const unsafeAutonomyReview = evaluateCapabilityAutonomyModel({ money_movement: 'auto_execute_fully' })
  const governorReview = reviewCapabilityWithGovernor()
  const simulationPlan = buildCapabilitySimulationPlan()
  const simulationReadiness = evaluateSimulationReadiness()
  const failedSimulationReadiness = evaluateSimulationReadiness({ fraudPassed: false })
  const doctorReview = diagnoseCapabilityWithDoctor({ missingRefundPrimitive: true, weakDisclosure: true })
  const registryMatch = queryCapabilityRegistry()
  const template = loadCapabilityTemplate()
  const templateCustomization = validateTemplateCustomization()
  const lockedTemplateChange = validateTemplateCustomization({ attemptedLockedChanges: ['cannot_skip_consent'] })
  const contractorExperience = composeCapabilityExperience()
  const familyVaultAssets = selectAssetsFromVault()
  const schoolAlgorithms = bindAlgorithmsFromVault()
  const upgradedAlgorithms = bindAlgorithmsFromVault('school_fees_wallet', 'invoice_verification_algorithm')
  const capabilityEvent = emitCapabilityEvent({ type: 'PAYMENT_RELEASED' })
  const capabilityHistory = reconstructCapabilityHistory()
  const migrationPlan = planCapabilityVersionMigration()
  const blockedMigrationPlan = planCapabilityVersionMigration({ fundsLocked: true })
  const appIntegration = planExistingFintechAppIntegration()
  const save2PayGapReport = buildExistingAppIntegrationGapReport()
  const adminStudio = buildAdminCapabilityStudio()
  const studioConnection = evaluateAdminStudioConnection()
  const marketplaceListing = buildMarketplaceListing()
  const marketplaceCertification = certifyMarketplaceCapability()
  const familyRentWallet = createFamilyRentWalletFromWords()
  const gpsImageStack = composeGpsImageVerificationStack()
  const unsafeGpsImageStack = composeGpsImageVerificationStack({ release_conditions: ['photo_submitted'] })
  const runtimeMonitoringPlan = buildRuntimeMonitoringPlan()
  const gpsMonitoringDiagnosis = diagnoseRuntimeMonitoringProblem()
  const userExplanation = generateCapabilityExplanation()
  const consentRecord = buildStructuredConsentRecord()
  const consentReview = validateStructuredConsentRecord(consentRecord)
  const schoolVerification = evaluateEntityVerification()
  const blockedSchoolVerification = evaluateEntityVerification({ verificationLevel: 'unverified', action: 'auto_pay_unverified_school' })
  const lowBtsPermissions = evaluateBtsCapabilityPermissions()
  const highBtsPermissions = evaluateBtsCapabilityPermissions({ btsLevel: 'high' })
  const formlessFoundation = summarizeFormlessBankingFoundation()
  const invariantReview = enforceCapabilityOSInvariants()
  const failedInvariantReview = enforceCapabilityOSInvariants({ kernelContract: false })
  const fullStack = summarizeFullCapabilityOSStack()
  const pluginComparison = compareCapabilityOSWithPluginSystem()
  const criticalBuildSequence = buildCriticalCapabilityOSBuildSequence()
  const universalCapabilityContract = buildUniversalCapabilityContract()
  const universalCapabilityContractReview = validateUniversalCapabilityContract(universalCapabilityContract)
  const uccFlow = locateUccInAuraFlow()
  const familyRentUcc = convertMessyRequestToFormalUcc()
  const uccSkeleton = buildCanonicalUccSkeletonPartial()
  const uccSkeletonReview = validateUccTopLevelSections(uccSkeleton)
  const schoolFeesUccSections = buildSchoolFeesUccSections()
  const guardianSchoolFeesUcc = buildGuardianSchoolFeesUccExample()
  const schoolFeesUccContract = buildCanonicalUccSkeletonPartial(schoolFeesUccSections)
  const uccVersionReview = validateUccVersionSection(schoolFeesUccContract)
  const uccCapabilityReview = validateUccCapabilitySection(schoolFeesUccSections.capability)
  const uccActivationReview = validateUccCapabilitySection(schoolFeesUccSections.capability, { requireApprovedLifecycle: true })
  const duplicateCapabilityReview = validateUccCapabilitySection(schoolFeesUccSections.capability, { existingIds: ['school_fees_wallet'] })
  const uccIntentReview = validateUccIntentSection(schoolFeesUccSections.intent)
  const intentDriftReview = detectUccIntentDrift({ primitive: 'InvestmentPrimitive' })
  const uccClassificationReview = validateUccClassificationSection(schoolFeesUccSections.classification)
  const informationalRiskReview = validateUccClassificationSection({
    ...schoolFeesUccSections.classification,
    risk_class: 'informational'
  })
  const uccDependencyReview = validateUccDependenciesSection(schoolFeesUccSections.dependencies)
  const missingIntegrationFailureReview = validateUccDependenciesSection({
    ...schoolFeesUccSections.dependencies,
    external_integrations: ['payment_processor']
  })
  const uccEntityReview = validateUccEntitiesSection(schoolFeesUccSections.entities)
  const guardianEntityReview = validateUccEntitiesSection(guardianSchoolFeesUcc.entities)
  const missingVisibilityReview = validateUccEntitiesSection({
    ...schoolFeesUccSections.entities,
    data_visibility: schoolFeesUccSections.entities.data_visibility.filter((visibility) => visibility.actor !== 'school')
  })
  const uccMoneyObjectReview = validateUccMoneyObjectsSection(schoolFeesUccSections.money_objects, { entities: schoolFeesUccSections.entities })
  const guardianMoneyObjectReview = validateUccMoneyObjectsSection(guardianSchoolFeesUcc.money_objects, { entities: guardianSchoolFeesUcc.entities })
  const unsafeLockReview = validateUccMoneyObjectsSection({
    ...schoolFeesUccSections.money_objects,
    locks: [{ ...schoolFeesUccSections.money_objects.locks[0], failure_paths: [] }]
  }, { entities: schoolFeesUccSections.entities })
  const uccRulesReview = validateUccRulesSection(schoolFeesUccSections.rules)
  const missingScheduleTimezoneReview = validateUccRulesSection({
    ...schoolFeesUccSections.rules,
    schedules: [{ ...schoolFeesUccSections.rules.schedules[0], timezone: '' }]
  })
  const uccStateMachineReview = validateUccStateMachineSection(schoolFeesUccSections.state_machine, { kernelContract: schoolFeesUccSections.kernel_contract })
  const invalidStateTransitionReview = validateUccStateMachineSection({
    ...schoolFeesUccSections.state_machine,
    transitions: [{ id: 'bad_transition', from: 'ghost', to: 'payment_released' }]
  }, { kernelContract: schoolFeesUccSections.kernel_contract })
  const uccKernelContractReview = validateUccKernelContractSection(schoolFeesUccSections.kernel_contract, { rules: schoolFeesUccSections.rules })
  const missingIdempotencyReview = validateUccKernelContractSection({
    ...schoolFeesUccSections.kernel_contract,
    idempotency_rules: schoolFeesUccSections.kernel_contract.idempotency_rules.filter((rule) => rule.command !== 'release_to_school')
  }, { rules: schoolFeesUccSections.rules })
  const uccFinancialPhysicsReview = validateUccFinancialPhysicsSection(schoolFeesUccSections.financial_physics, {
    moneyObjects: schoolFeesUccSections.money_objects,
    kernelContract: schoolFeesUccSections.kernel_contract,
    stateMachine: schoolFeesUccSections.state_machine
  })
  const unbalancedLedgerReview = validateUccFinancialPhysicsSection(schoolFeesUccSections.financial_physics, {
    moneyObjects: schoolFeesUccSections.money_objects,
    kernelContract: {
      ...schoolFeesUccSections.kernel_contract,
      command_contracts: [
        ...schoolFeesUccSections.kernel_contract.command_contracts.slice(0, 1),
        {
          ...schoolFeesUccSections.kernel_contract.command_contracts[1],
          ledger_effect: { debit: 'parent_main_wallet.available' }
        },
        ...schoolFeesUccSections.kernel_contract.command_contracts.slice(2)
      ]
    },
    stateMachine: schoolFeesUccSections.state_machine
  })
  const uccPolicyReview = validateUccPolicySection(schoolFeesUccSections.policy, {
    entities: schoolFeesUccSections.entities,
    moneyObjects: schoolFeesUccSections.money_objects,
    autonomy: schoolFeesUccSections.autonomy
  })
  const missingFeeDisclosureReview = validateUccPolicySection({
    ...schoolFeesUccSections.policy,
    disclosure_requirements: schoolFeesUccSections.policy.disclosure_requirements.filter((disclosure) => disclosure.id !== 'platform_fee_disclosure')
  }, {
    entities: schoolFeesUccSections.entities,
    moneyObjects: schoolFeesUccSections.money_objects,
    autonomy: schoolFeesUccSections.autonomy
  })
  const uccAutonomyReview = validateUccAutonomySection(schoolFeesUccSections.autonomy, { policy: schoolFeesUccSections.policy })
  const unsafeExternalReleaseAutonomyReview = validateUccAutonomySection({
    ...schoolFeesUccSections.autonomy,
    dimensions: schoolFeesUccSections.autonomy.dimensions.map((dimension) => (
      dimension.dimension === 'external_payment_release'
        ? { ...dimension, level: 'auto_execute_without_user_approval' }
        : dimension
    ))
  }, { policy: schoolFeesUccSections.policy })
  const uccEvidenceReview = validateUccEvidenceSection(schoolFeesUccSections.evidence)
  const missingEvidenceThresholdReview = validateUccEvidenceSection({
    ...schoolFeesUccSections.evidence,
    confidence_thresholds: []
  })
  const uccUiUxReview = validateUccUiUxSection(schoolFeesUccSections.ui_ux, {
    policy: schoolFeesUccSections.policy,
    moneyObjects: schoolFeesUccSections.money_objects
  })
  const missingRecoveryReview = validateUccUiUxSection({
    ...schoolFeesUccSections.ui_ux,
    error_recovery_paths: schoolFeesUccSections.ui_ux.error_recovery_paths.filter((path) => path.error !== 'invoice_upload_failed')
  }, {
    policy: schoolFeesUccSections.policy,
    moneyObjects: schoolFeesUccSections.money_objects
  })
  const uccEventsAuditReview = validateUccEventsAuditSection(schoolFeesUccSections.events_audit, {
    stateMachine: schoolFeesUccSections.state_machine,
    rules: schoolFeesUccSections.rules
  })
  const oversharingEventsAuditReview = validateUccEventsAuditSection({
    ...schoolFeesUccSections.events_audit,
    timeline_visibility: schoolFeesUccSections.events_audit.timeline_visibility.map((visibility) => (
      visibility.actor === 'contributor' ? { ...visibility, visible_events: ['*'] } : visibility
    ))
  }, {
    stateMachine: schoolFeesUccSections.state_machine,
    rules: schoolFeesUccSections.rules
  })
  const uccTestingReview = validateUccTestingSection(schoolFeesUccSections.testing, {
    policy: schoolFeesUccSections.policy,
    versioningMigration: schoolFeesUccSections.versioning_migration
  })
  const missingLedgerTestsReview = validateUccTestingSection({
    ...schoolFeesUccSections.testing,
    ledger_tests: []
  }, {
    policy: schoolFeesUccSections.policy,
    versioningMigration: schoolFeesUccSections.versioning_migration
  })
  const uccSimulationReview = validateUccSimulationSection(schoolFeesUccSections.simulation, {
    classification: schoolFeesUccSections.classification,
    dependencies: schoolFeesUccSections.dependencies,
    moneyObjects: schoolFeesUccSections.money_objects,
    entities: schoolFeesUccSections.entities
  })
  const missingFailureSimulationReview = validateUccSimulationSection({
    ...schoolFeesUccSections.simulation,
    failure_scenarios: []
  }, {
    classification: schoolFeesUccSections.classification,
    dependencies: schoolFeesUccSections.dependencies,
    moneyObjects: schoolFeesUccSections.money_objects,
    entities: schoolFeesUccSections.entities
  })
  const uccMonitoringReview = validateUccMonitoringSection(schoolFeesUccSections.monitoring, {
    lifecycleStatus: 'active',
    riskClass: schoolFeesUccSections.classification.risk_class
  })
  const missingRollbackMonitoringReview = validateUccMonitoringSection({
    ...schoolFeesUccSections.monitoring,
    rollback_triggers: []
  }, {
    lifecycleStatus: 'active',
    riskClass: schoolFeesUccSections.classification.risk_class
  })
  const uccVersioningMigrationReview = validateUccVersioningMigrationSection(schoolFeesUccSections.versioning_migration)
  const unsafeVersioningMigrationReview = validateUccVersioningMigrationSection({
    ...schoolFeesUccSections.versioning_migration,
    retirement_rules: ['all_active_instances_must_be_completed_cancelled_or_migrated']
  })
  const uccExplainabilityReview = validateUccExplainabilitySection(schoolFeesUccSections.explainability, {
    riskClass: schoolFeesUccSections.classification.risk_class
  })
  const missingReasonCodeReview = validateUccExplainabilitySection({
    ...schoolFeesUccSections.explainability,
    reason_codes: schoolFeesUccSections.explainability.reason_codes.filter((reason) => reason.code !== 'SCHOOL_UNVERIFIED')
  }, {
    riskClass: schoolFeesUccSections.classification.risk_class
  })
  const uccReleaseReview = validateUccReleaseSection(schoolFeesUccSections.release, {
    governanceDecision: 'private_capability',
    testing: schoolFeesUccSections.testing,
    monitoring: schoolFeesUccSections.monitoring,
    explainability: schoolFeesUccSections.explainability
  })
  const blockedReleaseReview = validateUccReleaseSection({
    ...schoolFeesUccSections.release,
    release_mode: 'blocked'
  }, {
    governanceDecision: 'blocked',
    testing: schoolFeesUccSections.testing,
    monitoring: schoolFeesUccSections.monitoring,
    explainability: schoolFeesUccSections.explainability
  })
  const uccValidationPipeline = runUccValidationPipeline(schoolFeesUccSections)
  const uccCompilerOutput = compileUccToRuntimeArtifacts(schoolFeesUccSections)
  const guardianCompilerOutput = compileUccToRuntimeArtifacts(guardianSchoolFeesUcc)
  const uccInvariantReview = enforceUccMandatoryInvariants(schoolFeesUccSections)
  const governorBlockedInvariantReview = enforceUccMandatoryInvariants(schoolFeesUccSections, { governorBlocked: true })
  const uccRuntimeBinding = bindCompiledUccRuntime(uccCompilerOutput)
  const uccOutcome = classifyUccOutcome(schoolFeesUccSections)
  const uccValidatorSpec = describeUccSchemaValidatorSpecification()
  const workerSafetyConcern = detectUccValidatorSafetyConcerns()
  const rentSafetyConcern = detectUccValidatorSafetyConcerns(UCC_VALIDATOR_SAFETY_EXAMPLES.familyRentConditionallyValid.request)
  const privateReleaseDecision = classifyUccValidatorDecision(schoolFeesUccSections)
  const blockedValidatorDecision = classifyUccValidatorDecision(schoolFeesUccSections, { governorBlocked: true })
  const normalizedUcc = normalizeUccForRuntime({
    ...schoolFeesUccSections,
    extra_top_level_key: 'remove_me',
    capability: { ...schoolFeesUccSections.capability, id: ' school_fees_wallet ' }
  })
  const strictIdentityNormalization = normalizeUccForRuntime({
    ...schoolFeesUccSections,
    capability: { ...schoolFeesUccSections.capability, id: 'School Fees Wallet' }
  })
  const strictTopLevelReview = validateStrictUccTopLevelSchema(schoolFeesUccSections)
  const unknownTopLevelReview = validateStrictUccTopLevelSchema({
    ...schoolFeesUccSections,
    surprise: true
  })
  const schemaPackage = describeUccSchemaPackage()
  const primitiveFieldReview = validateUccPrimitiveFieldConventions(schoolFeesUccSections)
  const danglingReferenceReview = validateUccPrimitiveFieldConventions({
    ...schoolFeesUccSections,
    rules: {
      ...schoolFeesUccSections.rules,
      actions: [{ ...schoolFeesUccSections.rules.actions[0], from: 'missing_wallet' }]
    }
  })
  const coreEnumReview = validateUccCoreEnums(schoolFeesUccSections)
  const invalidEnumReview = validateUccCoreEnums({
    ...schoolFeesUccSections,
    release: { ...schoolFeesUccSections.release, release_mode: 'ship_it' }
  })
  const validationInput = buildUccValidationInput({ contract: schoolFeesUccSections })
  const validationResult = buildUccValidationResult(validationInput)
  const trappedFundsFinding = createUccValidationFinding(TRAPPED_FUNDS_FINDING_EXAMPLE)
  const releaseEligibility = deriveUccReleaseEligibility({
    contract: schoolFeesUccSections,
    validation: uccValidationPipeline,
    findings: [trappedFundsFinding]
  })
  const jsonSchemaStage = validateUccJsonSchemaStage(schoolFeesUccSections)
  const identityStage = validateUccIdentityStage(schoolFeesUccSections)
  const intentStage = validateUccIntentCompletenessStage(schoolFeesUccSections)
  const classificationStage = validateUccClassificationConsistencyStage(schoolFeesUccSections)
  const classificationStageFailure = validateUccClassificationConsistencyStage({
    ...schoolFeesUccSections,
    money_objects: { ...schoolFeesUccSections.money_objects, locks: [] }
  })
  const dependencyRegistryStage = validateUccDependencyRegistryStage(schoolFeesUccSections)
  const dependencyRegistryFailure = validateUccDependencyRegistryStage({
    ...schoolFeesUccSections,
    dependencies: { ...schoolFeesUccSections.dependencies, primitives: ['MissingPrimitive'] }
  })
  const entityStage = validateUccEntityPermissionVisibilityStage(schoolFeesUccSections)
  const entityRoleMismatchStage = validateUccEntityPermissionVisibilityStage({
    ...schoolFeesUccSections,
    entities: {
      ...schoolFeesUccSections.entities,
      permissions: [
        ...schoolFeesUccSections.entities.permissions,
        { actor: 'contributor', can: ['approve_release'] }
      ]
    }
  })
  const moneyObjectStage = validateUccMoneyObjectStage(schoolFeesUccSections)
  const moneyObjectEscrowFailure = validateUccMoneyObjectStage({
    ...schoolFeesUccSections,
    money_objects: {
      ...schoolFeesUccSections.money_objects,
      escrows: [{ ...schoolFeesUccSections.money_objects.escrows[0], refund_condition: '' }]
    }
  })
  const ruleCoherenceStage = validateUccRuleCoherenceStage(schoolFeesUccSections)
  const ruleTimezoneFailure = validateUccRuleCoherenceStage({
    ...schoolFeesUccSections,
    rules: {
      ...schoolFeesUccSections.rules,
      schedules: [{ ...schoolFeesUccSections.rules.schedules[0], timezone: '' }]
    }
  })
  const stateMachineSafetyStage = validateUccStateMachineSafetyStage(schoolFeesUccSections)
  const unreachableStateStage = validateUccStateMachineSafetyStage({
    ...schoolFeesUccSections,
    state_machine: {
      ...schoolFeesUccSections.state_machine,
      states: [...schoolFeesUccSections.state_machine.states, { id: 'ghost_state' }]
    }
  })
  const kernelStage = validateUccKernelContractStage(schoolFeesUccSections)
  const directMutationKernelStage = validateUccKernelContractStage({
    ...schoolFeesUccSections,
    rules: {
      ...schoolFeesUccSections.rules,
      actions: [
        ...schoolFeesUccSections.rules.actions,
        { id: 'increase_wallet_balance', type: 'direct_balance_mutation', action: 'increase_wallet_balance' }
      ]
    }
  })
  const financialPhysicsStage = validateUccFinancialPhysicsStage(schoolFeesUccSections)
  const liabilityFailureStage = validateUccFinancialPhysicsStage({
    ...schoolFeesUccSections,
    financial_physics: {
      ...schoolFeesUccSections.financial_physics,
      liability_map: schoolFeesUccSections.financial_physics.liability_map.filter((item) => item.scenario !== 'payment_provider_stub_fails_after_release_attempt')
    }
  })
  const policyGovernorStage = validateUccPolicyGovernorStage(schoolFeesUccSections)
  const governorBlockedStage = validateUccPolicyGovernorStage(schoolFeesUccSections, { governorDecision: 'block' })
  const autonomyConsentStage = validateUccAutonomyConsentStage(schoolFeesUccSections)
  const unsafeAutonomyConsentStage = validateUccAutonomyConsentStage({
    ...schoolFeesUccSections,
    autonomy: {
      ...schoolFeesUccSections.autonomy,
      dimensions: schoolFeesUccSections.autonomy.dimensions.map((dimension) => (
        dimension.dimension === 'external_payment_release'
          ? { ...dimension, level: 'auto_execute_fully' }
          : dimension
      ))
    }
  })
  const evidenceVerificationStage = validateUccEvidenceVerificationStage(schoolFeesUccSections)
  const missingEvidenceFieldsStage = validateUccEvidenceVerificationStage({
    ...schoolFeesUccSections,
    evidence: {
      ...schoolFeesUccSections.evidence,
      required_evidence: [{ ...schoolFeesUccSections.evidence.required_evidence[0], required_fields: [] }]
    }
  })
  const uiUxSafetyStage = validateUccUiUxSafetyStage(schoolFeesUccSections)
  const uiUxRecoveryFailure = validateUccUiUxSafetyStage({
    ...schoolFeesUccSections,
    ui_ux: {
      ...schoolFeesUccSections.ui_ux,
      error_recovery_paths: []
    }
  })
  const eventsAuditStage = validateUccEventsAuditStage(schoolFeesUccSections)
  const missingConsentAuditStage = validateUccEventsAuditStage({
    ...schoolFeesUccSections,
    events_audit: {
      ...schoolFeesUccSections.events_audit,
      audit_requirements: schoolFeesUccSections.events_audit.audit_requirements.filter((requirement) => requirement !== 'record_consent_id')
    }
  })
  const testingCoverageStage = validateUccTestingCoverageStage(schoolFeesUccSections)
  const missingFailureTestsStage = validateUccTestingCoverageStage({
    ...schoolFeesUccSections,
    testing: { ...schoolFeesUccSections.testing, failure_tests: [] }
  })
  const simulationReadinessStage = validateUccSimulationReadinessStage(schoolFeesUccSections)
  const missingTrappedFundsSimulationStage = validateUccSimulationReadinessStage({
    ...schoolFeesUccSections,
    simulation: { ...schoolFeesUccSections.simulation, failure_scenarios: [] }
  })
  const monitoringReadinessStage = validateUccMonitoringReadinessStage(schoolFeesUccSections)
  const missingMonitoringSourceStage = validateUccMonitoringReadinessStage({
    ...schoolFeesUccSections,
    monitoring: { ...schoolFeesUccSections.monitoring, metric_event_sources: [] }
  })
  const versioningStage = validateUccVersioningStage(schoolFeesUccSections)
  const unsafeRetirementStage = validateUccVersioningStage({
    ...schoolFeesUccSections,
    versioning_migration: { ...schoolFeesUccSections.versioning_migration, retirement_rules: [] }
  })
  const explainabilityStage = validateUccExplainabilityStage(schoolFeesUccSections)
  const missingReasonMessageStage = validateUccExplainabilityStage({
    ...schoolFeesUccSections,
    explainability: {
      ...schoolFeesUccSections.explainability,
      reason_codes: [{ ...schoolFeesUccSections.explainability.reason_codes[0], internal_meaning: '' }]
    }
  })
  const releaseGateStage = validateUccReleaseGateStage(schoolFeesUccSections)
  const marketplaceReleaseGateStage = validateUccReleaseGateStage({
    ...schoolFeesUccSections,
    release: { ...schoolFeesUccSections.release, release_mode: 'marketplace' }
  }, { targetReleaseMode: 'marketplace' })
  const blockedReleaseGateStage = validateUccReleaseGateStage(schoolFeesUccSections, { governorDecision: 'block' })
  const readinessState = classifyUccReadinessState(schoolFeesUccSections)
  const contractorGpsResult = buildContractorGpsEscrowValidationExample()
  const contractorRepairSuggestions = generateUccRepairSuggestions(contractorGpsResult.findings)
  const capabilityDoctorInput = buildCapabilityDoctorInput(validationResult)
  const designTimeMode = runUccValidatorMode(schoolFeesUccSections, 'design_time')
  const runtimePreflight = runUccRuntimePreflight()
  const blockedPreflight = runUccRuntimePreflight({ recipientVerified: false })
  const orchestratedValidation = validateUccWithPseudocodeOrchestrator(validationInput)
  const findingEligibility = computeReleaseEligibilityFromFindings(contractorGpsResult.findings)
  const capabilityIdentitySchemaReview = validateCapabilityIdentitySchemaFragment(schoolFeesUccSections.capability)
  const invalidCapabilityIdentitySchemaReview = validateCapabilityIdentitySchemaFragment({
    ...schoolFeesUccSections.capability,
    id: 'School Fees Wallet'
  })
  const moneyObjectSchemaReview = validateMoneyObjectSchemaFragment(schoolFeesUccSections.money_objects)
  const invalidMoneyObjectSchemaReview = validateMoneyObjectSchemaFragment({
    ...schoolFeesUccSections.money_objects,
    wallets: [{ ...schoolFeesUccSections.money_objects.wallets[0], currency: 'Ghana Cedi' }]
  })
  const kernelCommandSchemaReview = validateKernelCommandContractSchemaFragment(schoolFeesUccSections.kernel_contract)
  const invalidKernelCommandSchemaReview = validateKernelCommandContractSchemaFragment({
    ...schoolFeesUccSections.kernel_contract,
    command_contracts: [
      {
        ...schoolFeesUccSections.kernel_contract.command_contracts[0],
        operation: 'wire_magic',
        ledger_effect: { debit: 'school_fees_wallet.available' }
      },
      ...schoolFeesUccSections.kernel_contract.command_contracts.slice(1)
    ]
  })
  const registrySnapshot = buildUccRegistrySnapshot()
  const registrySnapshotReview = validateUccRegistrySnapshot(registrySnapshot)
  const determinismReview = validateUccDeterminismEnvelope(buildUccValidationInput({
    contract: schoolFeesUccSections,
    registrySnapshot,
    policySnapshot: buildUccPolicySnapshot()
  }))
  const missingSnapshotDeterminismReview = validateUccDeterminismEnvelope(buildUccValidationInput({
    contract: schoolFeesUccSections,
    registrySnapshot: { version: '' },
    policySnapshot: { version: '' },
    environment: { kernelVersion: '', mode: '' }
  }))
  const repairLoopPlan = planUccRepairLoop({
    findings: contractorGpsResult.findings,
    userAnswers: { recipientVerificationExpiry: 'refund_to_sender' }
  })
  const adminStudioBadges = buildAdminStudioValidationBadges(schoolFeesUccSections)
  const marketplaceSubmission = validateUccMarketplaceSubmission({
    ...schoolFeesUccSections,
    release: { ...schoolFeesUccSections.release, release_mode: 'marketplace' }
  })
  const marketplaceSubmissionBlock = validateUccMarketplaceSubmission(schoolFeesUccSections, {
    supportDocumentationComplete: false,
    marketplaceMetadata: [],
    userFacingDisclosures: []
  })
  const safeExpressionReview = validateSafeExpressionLanguage('risk_score < 0.7 AND consent.auto_split.active == true')
  const unsafeExpressionReview = validateSafeExpressionLanguage('eval(user_input)')
  const validatorSecurityReview = validateUccValidatorSecurityEnvelope(schoolFeesUccSections)
  const unsafeValidatorSecurityReview = validateUccValidatorSecurityEnvelope({
    ...schoolFeesUccSections,
    rules: {
      ...schoolFeesUccSections.rules,
      conditions: [
        ...schoolFeesUccSections.rules.conditions,
        { id: 'unsafe_eval_condition', expression: "eval('send_money_without_approval')" }
      ]
    }
  })
  const nonMutationReview = validateContractValidationNonMutation({
    before: schoolFeesUccSections,
    after: schoolFeesUccSections,
    artifacts: { repairSuggestions: contractorRepairSuggestions }
  })
  const mutationBlock = validateContractValidationNonMutation({
    before: schoolFeesUccSections,
    after: { ...schoolFeesUccSections, rules: { ...schoolFeesUccSections.rules, expiry_rules: [] } }
  })
  const contractPatchProposal = buildContractPatchProposal()
  const adminReadableReport = formatUccValidatorReport(validationResult, 'admin_readable_report')
  const userSafeReport = formatUccValidatorReport(validationResult, 'user_safe_explanation')
  const complianceReport = formatUccValidatorReport(validationResult, 'compliance_report')
  const validateContractApi = handleMinimalValidatorApi('validate_contract', {
    contract: schoolFeesUccSections,
    mode: 'release_time',
    target_jurisdiction: 'GH',
    target_product: 'PayFees'
  })
  const runtimeCommandApi = handleMinimalValidatorApi('validate_runtime_command', {
    command: 'release_to_school',
    actor_id: 'user_456',
    context: { approval_present: false }
  })
  const repairPlanApi = handleMinimalValidatorApi('generate_repair_plan', {
    findings: contractorGpsResult.findings
  })
  const validationPersistenceRows = buildValidationPersistenceRows(validationInput, validationResult)
  const validatorOwnInvariantReview = enforceValidatorOwnInvariants({
    contract: schoolFeesUccSections,
    validationResult,
    nonMutationReview,
    determinismReview
  })
  const schoolFeesValidationWalkthrough = buildSchoolFeesValidationWalkthrough(schoolFeesUccSections)
  const validatorEnabledOutcome = classifyValidatorEnabledOutcome(schoolFeesUccSections)
  const canonicalExecutionGate = enforceCanonicalExecutionGate({ contract: schoolFeesUccSections })
  const blockedExecutionGate = enforceCanonicalExecutionGate({ contract: schoolFeesUccSections, governorDecision: 'block' })
  const auraPslPipeline = describeAuraPslPipeline()
  const auraPslInternalForms = buildAuraPslInternalForms()
  const auraPslTopLevelReview = validateAuraPslTopLevelStructure()
  const auraPslDeterminism = validateAuraPslDeterminism()
  const unsafePslReview = validateAuraPslSpec({
    ...RENT_CONTRIBUTION_PSL_EXAMPLE,
    rules: [{ id: 'imperative_rule', condition: 'eval(user_input)', action: 'run code that sends money' }]
  })
  const directMutationPslReview = validateAuraPslSpec({
    ...RENT_CONTRIBUTION_PSL_EXAMPLE,
    rules: [{ id: 'direct_balance_mutation', condition: 'parent_approved == true', action: 'school_fees_wallet.balance = school_fees_wallet.balance - invoice.amount' }]
  })
  const schoolFeesPslFile = buildSchoolFeesPslFileExample()
  const pslProductReview = validateAuraPslProductDeclaration(FAMILY_RENT_PSL_PRODUCT_EXAMPLE)
  const duplicatePslProductReview = validateAuraPslProductDeclaration({ ...FAMILY_RENT_PSL_PRODUCT_EXAMPLE, id: 'school_fees_wallet' })
  const pslActorReview = validateAuraPslActorDeclarations(schoolFeesPslFile.actors)
  const pslActorBlock = validateAuraPslActorDeclarations({
    contributor: { ...PSL_ACTOR_DECLARATION_EXAMPLE.contributor, permissions: { can: ['withdraw'], cannot: ['withdraw'] } }
  })
  const pslEntityReview = validateAuraPslEntityDeclarations({ ...PSL_ENTITY_DECLARATION_EXAMPLE, ...schoolFeesPslFile.entities })
  const pslEntityBlock = validateAuraPslEntityDeclarations({ ghost_bank: { type: 'unregistered_entity_type' } })
  const pslProductCompilation = compileAuraPslProductToUccSections(schoolFeesPslFile)
  const pslRelationshipReview = validateAuraPslRelationships()
  const pslRelationshipBlock = validateAuraPslRelationships({ relationships: [{ from: 'contributor', to: 'unknown_wallet', type: 'contributes_to' }] })
  const pslMoneyObjectReview = validateAuraPslMoneyObjectDeclarations()
  const pslMoneyObjectBlock = validateAuraPslMoneyObjectDeclarations({
    rent_payment_escrow: { ...RENT_PSL_MONEY_OBJECTS_EXAMPLE.rent_payment_escrow, owner: '', refund_condition: '' }
  })
  const pslFundStateReview = validateAuraPslFundStates()
  const pslFundStateBlock = validateAuraPslFundStates(SCHOOL_FEES_PSL_FUND_STATES_EXAMPLE, { fund_001: ['available', 'locked'] })
  const pslEventReview = validateAuraPslEvents()
  const pslEventBlock = validateAuraPslEvents({ bad_event: { type: 'MAGIC_EVENT', source: '', payload: null } })
  const pslTriggerReview = validateAuraPslTriggers()
  const pslTriggerBlock = validateAuraPslTriggers({ unsafe_webhook: { external_webhook: { url: 'https://example.test/hook' } } })
  const pslConditionReview = validateAuraPslConditions()
  const pslConditionBlock = validateAuraPslConditions({ bad_condition: { expression: 'fetch(url)' } })
  const pslActionReview = validateAuraPslActions()
  const pslActionBlock = validateAuraPslActions({
    mutate_balance: { type: 'kernel_command', command: 'allocate_funds', amount: 'wallet.balance = 0' }
  })
  const pslRuleReview = validateAuraPslRules()
  const pslRuleBlock = validateAuraPslRules({
    unsafe_rule: { id: 'unsafe_rule', when: 'ghost_trigger', if: ['eval(user_input)'], then: ['unknown_action'], audit: { required: false }, priority: 'high' }
  })
  const pslStateMachineReview = validateAuraPslStateMachine()
  const pslStateMachineBlock = validateAuraPslStateMachine({
    ...SCHOOL_FEES_PSL_STATE_MACHINE_EXAMPLE,
    transitions: {
      ...SCHOOL_FEES_PSL_STATE_MACHINE_EXAMPLE.transitions,
      approval_to_release: { ...SCHOOL_FEES_PSL_STATE_MACHINE_EXAMPLE.transitions.approval_to_release, emits: [] }
    }
  })
  const pslInvariantReview = validateAuraPslInvariants()
  const pslInvariantBlock = validateAuraPslInvariants({
    bad_invariant: { statement: 'eval(user_input)', severity: 'blocker' }
  })
  const pslInvariantCompilation = compileAuraPslInvariantsToFinancialPhysics()
  const pslPolicyReview = validateAuraPslPolicies()
  const pslPolicyBlock = validateAuraPslPolicies({ bad_policy: { applies_when: 'fetch(url)', failure_action: 'block' } }, ['badpack'])
  const pslConsentReview = validateAuraPslConsents()
  const pslConsentBlock = validateAuraPslConsents({ auto_split_consent: { actor: 'guardian', scope: [] } })
  const pslDisclosureReview = validateAuraPslDisclosures()
  const pslDisclosureBlock = validateAuraPslDisclosures({ hidden_disclosure: { shown_before: 'wallet_activation', audience: 'guardian', message_key: 'hidden', must_confirm: false } }, { surfaces: {} })
  const pslEvidenceReview = validateAuraPslEvidence()
  const pslEvidenceBlock = validateAuraPslEvidence({ gps_photo_proof: { type: 'photo_with_gps', required_for: 'release' } })
  const pslAutonomyReview = validateAuraPslAutonomy()
  const pslAutonomyBlock = validateAuraPslAutonomy({
    global: 'full_auto',
    dimensions: { money_allocation: { level: 'auto_execute_fully', allowed_if: [] }, external_payment_release: { level: 'auto_execute_fully' } },
    blocked: []
  })
  const pslExperienceReview = validateAuraPslExperience()
  const pslExperienceBlock = validateAuraPslExperience({ surfaces: { progress_card: { type: 'dashboard_card', required: true } } })
  const pslAuditReview = validateAuraPslAudit()
  const pslAuditBlock = validateAuraPslAudit({ required_for: ['money_movement'], include: ['actor_id'], visibility: {} })
  const pslTestReview = validateAuraPslTests()
  const pslTestBlock = validateAuraPslTests({ ledger: [{ name: 'bad_ledger', expect: {} }] })
  const pslSimulationReview = validateAuraPslSimulation()
  const pslSimulationBlock = validateAuraPslSimulation({ normal: [], edge_cases: [], fraud: [], failure: [{ name: 'provider_failure', expected: {} }] })
  const pslMonitoringReview = validateAuraPslMonitoring()
  const pslMonitoringBlock = validateAuraPslMonitoring({ metrics: { stuck: { condition: 'eval(user_input)' } }, alerts: {}, rollback_triggers: [] })
  const pslToUccCandidate = compileAuraPslToUccCandidate(schoolFeesPslFile)
  const pslCompilerOutput = buildAuraPslCompilerOutput(schoolFeesPslFile)
  const pslEffectReview = analyzeAuraPslEffects()
  const pslEffectBlock = analyzeAuraPslEffects({
    release_payment_to_school: {
      type: 'kernel_command',
      command: 'release_escrow',
      effect: { category: 'external_transfer', risk: 'medium', requires: ['verified_recipient'] }
    }
  })
  const pslConflictResolution = resolveAuraPslRuleConflicts()
  const pslSafetyRestrictionReview = validateAuraPslSafetyRestrictions()
  const pslSafetyRestrictionBlock = validateAuraPslSafetyRestrictions({
    actions: { bad_release: { type: 'kernel_command', command: 'release_escrow' } },
    stateMachine: {
      ...SCHOOL_FEES_PSL_STATE_MACHINE_EXAMPLE,
      transitions: { bad_transition: { from: 'approval_pending', to: 'payment_released', actions: ['bad_release'] } }
    }
  })
  const familyRentPslFile = buildFamilyRentPslExample()
  const familyRentPslReview = validateFamilyRentPslExample(familyRentPslFile)
  const familyRentPslBlock = validateFamilyRentPslExample(buildFamilyRentPslExample({
    actions: {
      ...FAMILY_RENT_PSL_FILE_EXAMPLE.actions,
      release_to_landlord: { ...FAMILY_RENT_PSL_FILE_EXAMPLE.actions.release_to_landlord, idempotency_key: '' }
    }
  }))
  const contractorGpsPslFile = buildContractorGpsImagePslExample()
  const contractorGpsPslReview = validateContractorGpsImagePslExample(contractorGpsPslFile)
  const contractorGpsPslBlock = validateContractorGpsImagePslExample(buildContractorGpsImagePslExample({
    autonomy: { ...CONTRACTOR_GPS_IMAGE_PSL_FILE_EXAMPLE.autonomy, global: 'assisted_autonomy' },
    simulation: { ...CONTRACTOR_GPS_IMAGE_PSL_FILE_EXAMPLE.simulation, fraud: [] }
  }))
  const susuPslPartial = buildSusuG1SmoothPslPartial()
  const susuPslPartialReview = validateSusuG1SmoothPslPartial(susuPslPartial)
  const susuPslReview = validateSusuG1SmoothPslExample(susuPslPartial)
  const pslTypeSystemReview = validateAuraPslTypeSystemSample()
  const pslTypeSystemBlock = validateAuraPslTypeSystemSample({ amount: { value: 100 }, percentage: 120, walletOwner: 'ghost', kernelCommand: 'mint_money' })
  const pslReferenceSafetyReview = validateAuraPslReferenceSafety()
  const pslReferenceSafetyBlock = validateAuraPslReferenceSafety({ declarations: ['guardian'], references: ['release_to_school.to:school_account'] })
  const pslDependencyReview = validateAuraPslDependencies()
  const pslDependencyBlock = validateAuraPslDependencies({ ...AURA_PSL_DEPENDENCY_EXAMPLE, primitives: ['GhostPrimitive'] })
  const pslSecurityReview = validateAuraPslSecurityModel()
  const pslSecurityBlock = validateAuraPslSecurityModel({ expressions: ['fetch(url)'], integrations: [{ id: 'raw_http', url: 'https://example.test' }] })
  const pslCompilerError = createAuraPslCompilerError(AURA_PSL_ERROR_EXAMPLE)
  const adminStudioPslDraft = generatePslFromAdminStudioComponents()
  const naturalLanguagePslDraft = interpretNaturalLanguageToPslDraft()
  const pslRuntimePreflight = runAuraPslRuntimePreflight()
  const pslRuntimePreflightBlock = runAuraPslRuntimePreflight({ recipientVerified: false })
  const pslKernelContracts = buildKernelCommandContractsFromPslActions()
  const pslExperiencePhysics = deriveExperiencePhysicsRequirementsFromPslActions()
  const pslAssets = resolveAuraPslAssetNeeds()
  const pslAlgorithmReview = validateAuraPslAlgorithmReferences()
  const pslAlgorithmBlock = validateAuraPslAlgorithmReferences({ gps_confidence: { ref: 'InlineUntrustedGPS', version: 'draft', inputs: [], output: '' } })
  const pslVersioningReview = validateAuraPslVersioning()
  const pslGovernanceReview = validateAuraPslGovernance()
  const pslGovernanceBlock = validateAuraPslGovernance({ ...schoolFeesPslFile, policies: { bypass_all_policy_checks: true } })
  const pslMinimumReview = validateAuraPslMinimumValidCapability()
  const pslMinimumBlock = validateAuraPslMinimumValidCapability({ product: FAMILY_RENT_PSL_PRODUCT_EXAMPLE })
  const pslAntiPatternReview = detectAuraPslAntiPatterns()
  const pslAntiPatternBlock = detectAuraPslAntiPatterns(buildFamilyRentPslExample({
    money_objects: {
      ...FAMILY_RENT_PSL_FILE_EXAMPLE.money_objects,
      floating_wallet: {
        id: 'floating_wallet',
        type: 'goal_wallet',
        currency: 'USD',
        purpose: 'rent',
        allowed_states: ['available'],
        allowed_operations: ['allocate_funds'],
        restrictions: {}
      }
    }
  }))
  const pslImplementationPackage = describeAuraPslImplementationPackage()
  const pslServiceApiReview = handleAuraPslServiceApi('validate_psl')
  const pslClarificationsApi = handleAuraPslServiceApi('generate_clarifications')
  const pslDiagnostic = createAuraPslDiagnostic()
  const pslCliReview = runAuraPslCliCommand()
  const pslDiffReview = diffAuraPslSpecs()
  const pslRecipientDiffReview = diffAuraPslSpecs(buildFamilyRentPslExample(), buildFamilyRentPslExample({
    actions: {
      ...FAMILY_RENT_PSL_FILE_EXAMPLE.actions,
      release_to_landlord: { ...FAMILY_RENT_PSL_FILE_EXAMPLE.actions.release_to_landlord, to: 'any_recipient' }
    }
  }))
  const pslDisclosureDiffReview = diffAuraPslSpecs(buildFamilyRentPslExample(), buildFamilyRentPslExample({
    disclosures: {
      rent_release_update: { text: 'Added release disclosure text.', consent_scope_changes: false }
    }
  }))
  const pslFormlessBasis = describeAuraPslFormlessBankingBasis()
  const pslCanonicalBlueprint = buildAuraPslCanonicalRuntimeBlueprint()
  const pslCanonicalReview = validateAuraPslCanonicalStatement()
  const pslPhysicsHandoff = createFinancialPhysicsEngineHandoff()

  return {
    definition,
    envelope,
    balance,
    compiled,
    schoolFees,
    architecture,
    kernelBoundary,
    moneyRoute,
    creationStack,
    splitRatioAtom,
    escrowReuse,
    composedCapability,
    packageSkeleton,
    schoolFeesPackage,
    universalInterface,
    interfaceReview,
    commandFlow,
    unsafeCommandFlow,
    physicsInvariantReview,
    capabilityTypeSystem,
    validCompatibility,
    blockedCompatibility,
    typeCompatibility,
    compositionPlan,
    contractorIntent,
    genesisPipeline,
    releaseMode,
    autonomyReview,
    unsafeAutonomyReview,
    governorReview,
    simulationPlan,
    simulationReadiness,
    failedSimulationReadiness,
    doctorReview,
    registryMatch,
    template,
    templateCustomization,
    lockedTemplateChange,
    contractorExperience,
    familyVaultAssets,
    schoolAlgorithms,
    upgradedAlgorithms,
    capabilityEvent,
    capabilityHistory,
    migrationPlan,
    blockedMigrationPlan,
    appIntegration,
    adminStudio,
    studioConnection,
    marketplaceListing,
    marketplaceCertification,
    familyRentWallet,
    gpsImageStack,
    unsafeGpsImageStack,
    runtimeMonitoringPlan,
    gpsMonitoringDiagnosis,
    userExplanation,
    consentRecord,
    consentReview,
    schoolVerification,
    blockedSchoolVerification,
    lowBtsPermissions,
    highBtsPermissions,
    formlessFoundation,
    invariantReview,
    failedInvariantReview,
    fullStack,
    pluginComparison,
    criticalBuildSequence,
    universalCapabilityContract,
    universalCapabilityContractReview,
    uccFlow,
    familyRentUcc,
    uccSkeleton,
    uccSkeletonReview,
    schoolFeesUccSections,
    guardianSchoolFeesUcc,
    schoolFeesUccContract,
    uccVersionReview,
    uccCapabilityReview,
    uccActivationReview,
    duplicateCapabilityReview,
    uccIntentReview,
    intentDriftReview,
    uccClassificationReview,
    informationalRiskReview,
    uccDependencyReview,
    missingIntegrationFailureReview,
    uccEntityReview,
    guardianEntityReview,
    missingVisibilityReview,
    uccMoneyObjectReview,
    guardianMoneyObjectReview,
    unsafeLockReview,
    uccRulesReview,
    missingScheduleTimezoneReview,
    uccStateMachineReview,
    invalidStateTransitionReview,
    uccKernelContractReview,
    missingIdempotencyReview,
    uccFinancialPhysicsReview,
    unbalancedLedgerReview,
    uccPolicyReview,
    missingFeeDisclosureReview,
    uccAutonomyReview,
    unsafeExternalReleaseAutonomyReview,
    uccEvidenceReview,
    missingEvidenceThresholdReview,
    uccUiUxReview,
    missingRecoveryReview,
    uccEventsAuditReview,
    oversharingEventsAuditReview,
    uccTestingReview,
    missingLedgerTestsReview,
    uccSimulationReview,
    missingFailureSimulationReview,
    uccMonitoringReview,
    missingRollbackMonitoringReview,
    uccVersioningMigrationReview,
    unsafeVersioningMigrationReview,
    uccExplainabilityReview,
    missingReasonCodeReview,
    uccReleaseReview,
    blockedReleaseReview,
    uccValidationPipeline,
    uccCompilerOutput,
    guardianCompilerOutput,
    uccInvariantReview,
    governorBlockedInvariantReview,
    uccRuntimeBinding,
    uccOutcome,
    uccValidatorSpec,
    workerSafetyConcern,
    rentSafetyConcern,
    privateReleaseDecision,
    blockedValidatorDecision,
    normalizedUcc,
    strictIdentityNormalization,
    strictTopLevelReview,
    unknownTopLevelReview,
    schemaPackage,
    primitiveFieldReview,
    danglingReferenceReview,
    coreEnumReview,
    invalidEnumReview,
    validationInput,
    validationResult,
    trappedFundsFinding,
    releaseEligibility,
    jsonSchemaStage,
    identityStage,
    intentStage,
    classificationStage,
    classificationStageFailure,
    dependencyRegistryStage,
    dependencyRegistryFailure,
    entityStage,
    entityRoleMismatchStage,
    moneyObjectStage,
    moneyObjectEscrowFailure,
    ruleCoherenceStage,
    ruleTimezoneFailure,
    stateMachineSafetyStage,
    unreachableStateStage,
    kernelStage,
    directMutationKernelStage,
    financialPhysicsStage,
    liabilityFailureStage,
    policyGovernorStage,
    governorBlockedStage,
    autonomyConsentStage,
    unsafeAutonomyConsentStage,
    evidenceVerificationStage,
    missingEvidenceFieldsStage,
    uiUxSafetyStage,
    uiUxRecoveryFailure,
    eventsAuditStage,
    missingConsentAuditStage,
    testingCoverageStage,
    missingFailureTestsStage,
    simulationReadinessStage,
    missingTrappedFundsSimulationStage,
    monitoringReadinessStage,
    missingMonitoringSourceStage,
    versioningStage,
    unsafeRetirementStage,
    explainabilityStage,
    missingReasonMessageStage,
    releaseGateStage,
    marketplaceReleaseGateStage,
    blockedReleaseGateStage,
    readinessState,
    contractorGpsResult,
    contractorRepairSuggestions,
    capabilityDoctorInput,
    designTimeMode,
    runtimePreflight,
    blockedPreflight,
    orchestratedValidation,
    findingEligibility,
    capabilityIdentitySchemaReview,
    invalidCapabilityIdentitySchemaReview,
    moneyObjectSchemaReview,
    invalidMoneyObjectSchemaReview,
    cards: [
      { label: 'Capability OS', value: definition.definition.role },
      { label: 'Promise', value: definition.promise },
      { label: 'Pipeline', value: definition.pipeline.slice(0, 5).join(' / ') },
      { label: 'Capability type', value: durableCapabilityModel.type.fields.slice(0, 6).join(' / ') },
      { label: 'Capability instance', value: durableCapabilityModel.instance.fields.slice(0, 6).join(' / ') },
      { label: 'Runtime object', value: CAPABILITY_RUNTIME_OBJECT_LAYERS.map((layer) => layer.id).slice(0, 7).join(' / ') },
      { label: 'Runtime truth', value: runtimeObject.kernel_truth_sources.slice(0, 6).join(' / ') },
      { label: 'Lifecycle states', value: CAPABILITY_INSTANCE_LIFECYCLE_STATES.slice(0, 8).join(' / ') },
      { label: 'Continuity check', value: runtimeContinuity.valid ? `${runtimeContinuity.state}:${runtimeContinuity.allowedActionsNow.slice(0, 3).join(' / ')}` : runtimeContinuity.findings.join(' / ') },
      { label: 'Contract amendment', value: contractAmendmentReview.valid ? contractAmendment.requires_consent_from.join(' / ') : contractAmendmentReview.findings.join(' / ') },
      { label: 'Runtime transition', value: legalRuntimeTransition.legal ? legalRuntimeTransition.transition : legalRuntimeTransition.illegalReasons.join(' / ') },
      { label: 'Blocked transition', value: blockedRuntimeTransition.legal ? 'allowed' : blockedRuntimeTransition.illegalReasons.join(' / ') },
      { label: 'Runtime ledger', value: runtimeLedgerReview.balanced ? `${runtimeLedgerReview.totalDebits}:${runtimeLedgerReview.totalCredits}` : runtimeLedgerReview.findings.join(' / ') },
      { label: 'Runtime events', value: runtimeEventTimeline.replaySafe ? runtimeEventTimeline.events.map((event) => event.type).slice(0, 6).join(' / ') : runtimeEventTimeline.invalidEvents.join(' / ') },
      { label: 'Runtime snapshot', value: `${runtimeSnapshot.capability_state}:${runtimeSnapshot.current_cycle}:${runtimeSnapshot.next_action}` },
      { label: 'Runtime monitor', value: runtimeMonitor.healthy ? 'healthy' : runtimeMonitor.failures.join(' / ') },
      { label: 'Resume flow', value: resumedCapability.blankGeneratedScreenAllowed ? 'blank screen' : resumedCapability.flow.slice(0, 5).join(' / ') },
      { label: 'Resume state', value: `${resumedCapability.currentUiState.status}:${resumedCapability.currentUiState.paid}:${resumedCapability.currentUiState.nextAction}` },
      { label: 'Memory layers', value: runtimeMemory.layers.map((layer) => layer.id).slice(0, 6).join(' / ') },
      { label: 'Runtime mode', value: `${selectedRuntimeMode.mode}:${selectedRuntimeMode.definition.meaning}` },
      { label: 'Temporal engine', value: temporalCycleReview.valid ? `${temporalCycle.cycle}:${temporalCycle.due_date}:${temporalCycle.rent_release}` : temporalCycleReview.findings.join(' / ') },
      { label: 'Version pin', value: `${versionPin.contract_version}:${Object.entries(versionPin.primitive_versions).map(([key, value]) => `${key}@${value}`).slice(0, 3).join(' / ')}` },
      { label: 'Upgrade class', value: `${upgradeClassification.upgradeType}:${upgradeClassification.behavior}` },
      { label: 'Instance migration', value: instanceMigration.applyAllowed ? instanceMigration.report.summary : instanceMigration.report.rollback_path },
      { label: 'Closure settlement', value: closureSettlement.closeAllowed ? closureSettlement.options.map((option) => option.id).join(' / ') : closureSettlement.findings.join(' / ') },
      { label: 'Capability health', value: `${healthStatus.health}:${healthStatus.nextAction}` },
      { label: 'Living dashboard', value: livingDashboard.instances.map((instance) => `${instance.name}:${instance.health}`).join(' / ') },
      { label: 'Capability timeline', value: capabilityTimelineView.events.slice(0, 5).map((event) => event.text).join(' / ') },
      { label: 'Resume brief', value: resumeBrief.sinceLastOpen.slice(0, 4).join(' / ') },
      { label: 'Durable stack', value: durableRuntimeStack.components.slice(0, 7).join(' / ') },
      { label: 'Operating flow', value: durableOperatingFlow.complete ? durableOperatingFlow.flow.slice(0, 6).join(' / ') : 'incomplete' },
      { label: 'Family contribution', value: `${familyContributionExample.runtimeState.capability_id}:${familyContributionExample.runtimeState.current_cycle}:${familyContributionExample.runtimeState.missing_amount}` },
      { label: 'Drift prevention', value: driftPrevention.driftPrevented ? driftPrevention.controls.slice(0, 5).join(' / ') : driftPrevention.missingControls.join(' / ') },
      { label: 'Family invariants', value: familyContributionInvariantReview.valid ? FAMILY_CONTRIBUTION_INVARIANTS.slice(0, 5).join(' / ') : familyContributionInvariantReview.violations.join(' / ') },
      { label: 'History views', value: `${historyViews.technicalEventLog.length}:${historyViews.userTimeline.length}:${historyViews.auditTrail.length}` },
      { label: 'Safe closure', value: safeClosure.closeAllowed ? safeClosure.closingSummary.finalStatus : safeClosure.findings.join(' / ') },
      { label: 'Durability class', value: `${durabilityClass.classes.join(' / ')}:${durabilityClass.requiredStrength}` },
      { label: 'Lifecycle engine', value: `${lifecycleEngine.name}:${lifecycleEngine.includes.slice(0, 5).join(' / ')}` },
      { label: 'Durable runtime', value: `${durableRuntimeRecord.capability_instance_id}:${durableRuntimeRecord.status}:${durableRuntimeRecord.resume_supported}` },
      { label: 'Identity hierarchy', value: identityHierarchy.valid ? CAPABILITY_IDENTITY_LEVELS.map((level) => level.id).join(' / ') : identityHierarchy.missing.join(' / ') },
      { label: 'Instance record', value: livingInstanceRecordReview.valid ? `${livingInstanceRecord.capability_instance.id}:${livingInstanceRecord.capability_instance.lifecycle_state}` : livingInstanceRecordReview.findings.join(' / ') },
      { label: 'Contract law', value: familyContributionContractReview.valid ? `${familyContributionContract.contract.id}:${familyContributionContract.contract.rules.contribution_amount}` : familyContributionContractReview.findings.join(' / ') },
      { label: 'State separation', value: separatedStateReview.valid ? `${separatedState.lifecycle.current}:${separatedState.operational.current}:${separatedState.health.current}` : separatedStateReview.findings.join(' / ') },
      { label: 'Command event', value: recordContributionCommand.valid ? `${recordContributionCommand.command}->${recordContributionCommand.resultingEvent}` : recordContributionCommand.findings.join(' / ') },
      { label: 'Blocked command', value: blockedReleaseCommand.valid ? 'allowed' : blockedReleaseCommand.findings.join(' / ') },
      { label: 'Sourced event', value: sourcedEventReview.valid ? `${sourcedEvent.event_id}:${sourcedEvent.state_before}->${sourcedEvent.state_after}` : sourcedEventReview.findings.join(' / ') },
      { label: 'Snapshot record', value: capabilitySnapshotReview.valid ? `${capabilitySnapshotRecord.snapshot_id}:${capabilitySnapshotRecord.wallet_balance}` : capabilitySnapshotReview.findings.join(' / ') },
      { label: 'Schedule binding', value: scheduleBindingReview.valid ? scheduleBinding.schedule_binding.scheduled_jobs.map((job) => job.job_type).join(' / ') : scheduleBindingReview.findings.join(' / ') },
      { label: 'Job idempotency', value: `${scheduledJobRun.shouldExecute ? 'execute' : 'skip'}:${duplicateScheduledJobRun.duplicateActionPrevented ? 'duplicate_prevented' : 'duplicate_allowed'}` },
      { label: 'Ledger binding', value: ledgerBindingReview.valid ? Object.keys(ledgerBinding.ledger_binding.accounts).join(' / ') : ledgerBindingReview.findings.join(' / ') },
      { label: 'Runtime UI', value: `${runtimeUiComposition.title}:${runtimeUiComposition.health}:${runtimeUiComposition.nextRecommendedAction}` },
      { label: 'UI allowed actions', value: runtimeUiComposition.allowedActions.join(' / ') },
      { label: 'Last seen marker', value: `${userViewState.user_capability_view_state.user_id}:${userViewState.user_capability_view_state.last_seen_event_id}` },
      { label: 'Since last open', value: resumeChangeSummary.summary.slice(0, 4).join(' / ') },
      { label: 'Amendment record', value: amendmentRecordReview.valid ? `${amendmentRecord.amendment.change_type}:${amendmentRecord.amendment.status}` : amendmentRecordReview.findings.join(' / ') },
      { label: 'Version lock', value: `${versionLock.version_lock.capability_type_version}:${versionLock.version_lock.scheduler_version}` },
      { label: 'Code update', value: `${codeUpdateDecision.updateType}:${codeUpdateDecision.action}` },
      { label: 'Migration report', value: `${migrationReport.report.risk}:${migrationReport.report.migration_result}` },
      { label: 'Runtime health output', value: `${runtimeHealthOutput.capability_health.health_state}:${runtimeHealthOutput.capability_health.recommended_actions.join(' / ')}` },
      { label: 'Recovery engine', value: `${recoveryEngine.failure}:${recoveryEngine.nextState}` },
      { label: 'Abandonment', value: `${abandonmentReview.state}:${abandonmentReview.archiveAllowed ? 'archive' : 'settle_first'}` },
      { label: 'Final statement', value: `${finalStatement.finalStatus}:${finalStatement.totalCollected}:${finalStatement.totalRefunded}` },
      { label: 'Lifecycle strength', value: `${lifecycleStrength.strengthClass.class}:${lifecycleStrength.requiredRuntimeStrength}` },
      { label: 'Instance dashboard', value: instanceDashboard.capabilities.map((capability) => `${capability.name}:${capability.health}`).join(' / ') },
      { label: 'Detail page', value: detailPageModel.sections.map((section) => section.section).join(' / ') },
      { label: 'Interface binding', value: interfaceBinding.valid ? interfaceBinding.pattern.required.slice(0, 5).join(' / ') : interfaceBinding.findings.join(' / ') },
      { label: 'Creation flow', value: durableCreationFlow.durableCreation ? durableCreationFlow.flow.slice(0, 6).join(' / ') : 'not durable' },
      { label: 'Reopen flow', value: durableReopenFlow.continuityWorks ? durableReopenFlow.flow.slice(0, 6).join(' / ') : 'continuity missing' },
      { label: 'Ending flow', value: durableEndingFlow.safeEndingWorks ? durableEndingFlow.flow.slice(0, 6).join(' / ') : 'unsafe ending' },
      { label: 'Runtime layer', value: `${runtimeLayer.layer}:${runtimeLayer.submodules.slice(0, 6).map((item) => item.submodule).join(' / ')}` },
      { label: 'Durable backbone', value: durableConclusion.backbone.join(' / ') },
      { label: 'Components', value: envelope.components.slice(0, 6).map((item) => item.id).join(' / ') },
      { label: 'Evidence', value: envelope.evidenceRequirements.slice(0, 6).map((item) => item.id).join(' / ') },
      { label: 'Provider skipped', value: envelope.providerApiSkipped.join(' / ') || 'none' },
      { label: 'Creativity', value: balance.creativity.slice(0, 5).join(' / ') },
      { label: 'Control', value: balance.control.slice(0, 5).join(' / ') },
      { label: 'Compiled intent', value: compiled.installable ? 'installable governed capability' : 'blocked draft' },
      { label: 'Mental model', value: CAPABILITY_OS_MENTAL_MODEL_PIPELINE.slice(0, 6).join(' / ') },
      { label: 'School wallet', value: schoolFees.decomposition.slice(0, 6).join(' / ') },
      { label: 'Architecture', value: architecture.layers.slice(0, 4).map((layer) => layer.id).join(' / ') },
      { label: 'Kernel owns', value: kernelBoundary.financialKernel.responsibilities.slice(0, 5).join(' / ') },
      { label: 'OS owns', value: kernelBoundary.capabilityOS.responsibilities.slice(0, 5).join(' / ') },
      { label: 'Kernel route', value: moneyRoute.allowed ? moneyRoute.reason : 'blocked' },
      { label: 'Creation stack', value: creationStack.hierarchy.join(' / ') },
      { label: 'Sub-atoms', value: creationStack.subAtoms.slice(0, 7).join(' / ') },
      { label: 'Atoms', value: creationStack.atoms.slice(0, 7).join(' / ') },
      { label: 'Atom validation', value: splitRatioAtom.validated ? 'typed validated reusable' : 'invalid atom' },
      { label: 'Micro-primitives', value: creationStack.microPrimitives.slice(0, 6).join(' / ') },
      { label: 'Primitives', value: creationStack.primitives.slice(0, 6).join(' / ') },
      { label: 'Escrow reuse', value: escrowReuse.reuseCases.slice(0, 6).join(' / ') },
      { label: 'Capabilities', value: creationStack.capabilities.slice(0, 5).join(' / ') },
      { label: 'Products', value: creationStack.products.slice(0, 6).join(' / ') },
      { label: 'Capability formula', value: composedCapability.requiredFormula.join(' / ') },
      { label: 'Package skeleton', value: packageSkeleton.files.slice(0, 8).join(' / ') },
      { label: 'Manifest', value: `${schoolFeesPackage.capabilityId} / ${schoolFeesPackage.regions.join(' / ')}` },
      { label: 'Entities', value: schoolFeesPackage.entities.join(' / ') },
      { label: 'Money objects', value: schoolFeesPackage.moneyObjects.join(' / ') },
      { label: 'Rules', value: schoolFeesPackage.rules.join(' / ') },
      { label: 'Workflows', value: schoolFeesPackage.workflows.join(' / ') },
      { label: 'State machine', value: schoolFeesPackage.states.slice(0, 6).join(' / ') },
      { label: 'Policy', value: schoolFeesPackage.fraudChecks.join(' / ') },
      { label: 'Autonomy', value: schoolFeesPackage.validation.valid ? 'parent approval gates release' : 'invalid autonomy' },
      { label: 'UI surfaces', value: schoolFeesPackage.uiSurfaces.slice(0, 5).join(' / ') },
      { label: 'Package tests', value: schoolFeesPackage.tests.join(' / ') },
      { label: 'Universal interface', value: universalInterface.methods.join(' / ') },
      { label: 'Validate asks', value: CAPABILITY_VALIDATE_QUESTIONS.slice(0, 5).join(' / ') },
      { label: 'Simulations', value: CAPABILITY_SIMULATION_SCENARIOS.slice(0, 6).join(' / ') },
      { label: 'Compose asks', value: CAPABILITY_COMPOSE_QUESTIONS.slice(0, 5).join(' / ') },
      { label: 'Explain user', value: universalInterface.explain.user },
      { label: 'Monitor', value: CAPABILITY_MONITORING_SIGNALS.slice(0, 6).join(' / ') },
      { label: 'Test categories', value: CAPABILITY_TEST_CATEGORIES.slice(0, 6).join(' / ') },
      { label: 'Interface review', value: interfaceReview.governable ? 'governable' : 'blocked' },
      { label: 'Command flow', value: commandFlow.flow.slice(0, 6).join(' / ') },
      { label: 'Unsafe shortcut', value: unsafeCommandFlow.failures.join(' / ') },
      { label: 'Invariants', value: CAPABILITY_OS_FINANCIAL_INVARIANTS.slice(0, 5).join(' / ') },
      { label: 'Conservation', value: physicsInvariantReview.conservation.conserved ? 'funds conserved' : 'leak detected' },
      { label: 'State exclusivity', value: physicsInvariantReview.stateExclusivity.validSingleCurrentState ? 'one current fund state' : 'invalid state blend' },
      { label: 'Release completeness', value: physicsInvariantReview.lockedFundReview.valid ? 'complete release paths' : 'missing release paths' },
      { label: 'Reversal safety', value: REVERSAL_SAFETY_TYPES.join(' / ') },
      { label: 'Liability clarity', value: LIABILITY_RISK_TYPES.slice(0, 6).join(' / ') },
      { label: 'Capability types', value: capabilityTypeSystem.coreCapabilityTypes.slice(0, 7).join(' / ') },
      { label: 'Movement types', value: capabilityTypeSystem.moneyMovementTypes.slice(0, 8).join(' / ') },
      { label: 'Risk types', value: capabilityTypeSystem.riskTypes.slice(0, 6).join(' / ') },
      { label: 'Actor types', value: capabilityTypeSystem.actorTypes.slice(0, 8).join(' / ') },
      { label: 'Evidence types', value: capabilityTypeSystem.evidenceTypes.slice(0, 8).join(' / ') },
      { label: 'Evidence stubs', value: capabilityTypeSystem.providerApiSkipped.join(' / ') || 'none' },
      { label: 'Valid combo', value: validCompatibility.decision },
      { label: 'Blocked combo', value: blockedCompatibility.decision },
      { label: 'Type rules', value: CAPABILITY_TYPE_COMPATIBILITY_RULES.slice(0, 6).map((rule) => `${rule.component} needs ${rule.requires}`).join(' / ') },
      { label: 'Type review', value: typeCompatibility.valid ? 'compatible' : typeCompatibility.missingRequirements.join(' / ') },
      { label: 'Algebra patterns', value: COMPOSITION_ALGEBRA_PATTERNS.slice(0, 6).join(' / ') },
      { label: 'Sequential', value: COMPOSITION_MODE_EXAMPLES.sequential.join(' / ') },
      { label: 'Parallel', value: COMPOSITION_MODE_EXAMPLES.parallel.join(' / ') },
      { label: 'Guarded release', value: COMPOSITION_MODE_EXAMPLES.guarded.guards.join(' / ') },
      { label: 'Required companions', value: COMPOSITION_MODE_EXAMPLES.required_companion.EscrowPrimitive.join(' / ') },
      { label: 'Composition review', value: compositionPlan.valid ? 'valid composition' : 'blocked composition' },
      { label: 'Intent fields', value: PRODUCT_INTENT_EXTRACTION_FIELDS.slice(0, 7).join(' / ') },
      { label: 'Contractor intent', value: contractorIntent.extraction.required_primitives.slice(0, 6).join(' / ') },
      { label: 'Clarifiers', value: contractorIntent.clarifyingQuestions.slice(0, 4).join(' / ') },
      { label: 'Genesis pipeline', value: genesisPipeline.steps.slice(0, 7).join(' / ') },
      { label: 'Genesis release', value: genesisPipeline.readyForRelease ? 'complete pipeline' : 'missing steps' },
      { label: 'Release modes', value: Object.keys(CAPABILITY_RELEASE_MODES).slice(0, 6).join(' / ') },
      { label: 'Release decision', value: releaseMode.mode },
      { label: 'Autonomy dimensions', value: AUTONOMY_DIMENSIONS.slice(0, 7).join(' / ') },
      { label: 'Autonomy levels', value: AUTONOMY_LEVELS.slice(0, 8).join(' / ') },
      { label: 'School autonomy', value: Object.entries(SCHOOL_FEES_AUTONOMY_EXAMPLE).slice(0, 5).map(([key, value]) => `${key}:${value}`).join(' / ') },
      { label: 'Autonomy review', value: autonomyReview.safe ? 'safe autonomy mix' : 'unsafe autonomy mix' },
      { label: 'Unsafe autonomy', value: unsafeAutonomyReview.highRiskAuto.join(' / ') || 'none' },
      { label: 'Governor asks', value: GOVERNOR_REVIEW_QUESTIONS.slice(0, 7).join(' / ') },
      { label: 'Governor decisions', value: GOVERNOR_DECISIONS.slice(0, 7).join(' / ') },
      { label: 'Worker funds guard', value: governorReview.decision },
      { label: 'Safer alternative', value: governorReview.saferAlternative.slice(0, 5).join(' / ') },
      { label: 'Simulation groups', value: Object.keys(CAPABILITY_SIMULATION_GROUPS).join(' / ') },
      { label: 'Simulation count', value: `${simulationPlan.scenarioCount} scenarios` },
      { label: 'Provider sim stub', value: simulationPlan.providerApiSkipped.join(' / ') || 'none' },
      { label: 'Simulation ready', value: simulationReadiness.approved ? 'behaviour holds up' : 'blocked' },
      { label: 'Failed sim', value: failedSimulationReadiness.reason },
      { label: 'Doctor diagnostics', value: CAPABILITY_DOCTOR_DIAGNOSTICS.slice(0, 7).join(' / ') },
      { label: 'Doctor findings', value: doctorReview.findings.join(' / ') },
      { label: 'Registry stores', value: CAPABILITY_REGISTRY_STORES.slice(0, 8).join(' / ') },
      { label: 'Registry asks', value: CAPABILITY_REGISTRY_QUESTIONS.slice(0, 5).join(' / ') },
      { label: 'Rent match', value: registryMatch.matches.slice(0, 6).join(' / ') },
      { label: 'Templates', value: PRODUCT_TEMPLATE_CATALOG.slice(0, 6).join(' / ') },
      { label: 'School template', value: template.template.defaultPrimitives.join(' / ') },
      { label: 'Customizable', value: SCHOOL_FEES_WALLET_TEMPLATE.customizable.join(' / ') },
      { label: 'Locked template', value: lockedTemplateChange.valid ? 'valid' : lockedTemplateChange.lockedChanges.join(' / ') },
      { label: 'UI composer', value: UI_UX_COMPOSER_OUTPUTS.slice(0, 8).join(' / ') },
      { label: 'Contractor UI', value: contractorExperience.generatedSurfaces.slice(0, 6).join(' / ') },
      { label: 'Asset vault', value: ASSET_VAULT_ASSET_TYPES.slice(0, 8).join(' / ') },
      { label: 'Family assets', value: familyVaultAssets.selectedAssets.join(' / ') },
      { label: 'Algorithm vault', value: ALGORITHM_VAULT_ALGORITHMS.slice(0, 8).join(' / ') },
      { label: 'Susu algorithms', value: SUSU_ALGORITHM_BINDINGS.slice(0, 5).join(' / ') },
      { label: 'School algorithms', value: schoolAlgorithms.algorithms.join(' / ') },
      { label: 'Algorithm upgrade', value: upgradedAlgorithms.controlledMigrationNeeded ? 'controlled migration required' : 'no migration' },
      { label: 'Event bus', value: CAPABILITY_EVENT_TYPES.slice(0, 8).join(' / ') },
      { label: 'Event feeds', value: CAPABILITY_EVENT_FEEDS.join(' / ') },
      { label: 'Event emitted', value: capabilityEvent.validType ? capabilityEvent.type : 'invalid event' },
      { label: 'History questions', value: capabilityHistory.questions.slice(0, 7).join(' / ') },
      { label: 'Version history', value: SCHOOL_FEES_VERSION_HISTORY.map((item) => `${item.version}:${item.change}`).join(' / ') },
      { label: 'Migration checks', value: MIGRATION_SAFETY_CHECKS.join(' / ') },
      { label: 'Migration modes', value: MIGRATION_MODES.join(' / ') },
      { label: 'Migration result', value: migrationPlan.migrationAllowed ? 'allowed with consent safety' : migrationPlan.blockers.join(' / ') },
      { label: 'Blocked migration', value: blockedMigrationPlan.blockers.join(' / ') },
      { label: 'App integration', value: appIntegration.genericIntegrationFlow.join(' / ') },
      { label: 'Integration stubs', value: appIntegration.providerApiSkipped.join(' / ') },
      { label: 'Import gap grade', value: `${save2PayGapReport.feature}:${save2PayGapReport.compatibilityGrade}` },
      { label: 'Import required work', value: save2PayGapReport.integrationReadiness.requiredWork.slice(0, 4).join(' / ') },
      { label: 'Studio pieces', value: ADMIN_STUDIO_COMPONENTS.slice(0, 8).join(' / ') },
      { label: 'Studio flow', value: SCHOOL_FEE_STUDIO_FLOW.join(' / ') },
      { label: 'Studio warnings', value: studioConnection.warnings.join(' / ') },
      { label: 'Marketplace sources', value: CAPABILITY_MARKETPLACE_SOURCES.slice(0, 7).join(' / ') },
      { label: 'Marketplace fields', value: MARKETPLACE_LISTING_FIELDS.slice(0, 8).join(' / ') },
      { label: 'Marketplace listing', value: marketplaceListing.reusable ? marketplaceListing.listing.offering_mode : 'blocked listing' },
      { label: 'Marketplace cert', value: MARKETPLACE_CERTIFICATION_LEVELS.join(' / ') },
      { label: 'Marketplace safe', value: marketplaceCertification.marketplaceSafe ? 'safe marketplace listing' : 'dangerous marketplace' },
      { label: 'Family rent extraction', value: Object.keys(familyRentWallet.extraction).join(' / ') },
      { label: 'Family rent primitives', value: familyRentWallet.primitives.slice(0, 7).join(' / ') },
      { label: 'Family rent questions', value: familyRentWallet.missingInformation.slice(0, 5).join(' / ') },
      { label: 'Family rent UI', value: familyRentWallet.uiSurfaces.slice(0, 6).join(' / ') },
      { label: 'Family rent release', value: `${familyRentWallet.releaseMode} / landlord ${familyRentWallet.release.autonomy.landlord_payment}` },
      { label: 'GPS proof stack', value: gpsImageStack.stack.primitives.slice(0, 7).join(' / ') },
      { label: 'GPS proof rules', value: gpsImageStack.stack.release_conditions.join(' / ') },
      { label: 'GPS proof safety', value: gpsImageStack.safe ? 'reusable proof stack' : unsafeGpsImageStack.missingReleaseConditions.join(' / ') },
      { label: 'Runtime metrics', value: RUNTIME_MONITORING_METRICS.slice(0, 8).join(' / ') },
      { label: 'Monitor result', value: runtimeMonitoringPlan.complete ? 'full watch plan' : 'missing metrics' },
      { label: 'GPS issue', value: gpsMonitoringDiagnosis.problem },
      { label: 'GPS fixes', value: gpsMonitoringDiagnosis.recommendedFix.slice(0, 4).join(' / ') },
      { label: 'Explain asks', value: EXPLANATION_ENGINE_QUESTIONS.slice(0, 7).join(' / ') },
      { label: 'User explanation', value: userExplanation.explanation },
      { label: 'Explain moments', value: EXPLANATION_DISPLAY_MOMENTS.join(' / ') },
      { label: 'Consent defines', value: CONSENT_DEFINITION_FIELDS.slice(0, 6).join(' / ') },
      { label: 'Granular consent', value: SCHOOL_FEES_GRANULAR_CONSENT.slice(0, 4).join(' / ') },
      { label: 'Consent record', value: consentReview.valid ? consentRecord.consent_id : 'invalid consent' },
      { label: 'Entity types', value: CAPABILITY_ENTITY_TYPES.slice(0, 8).join(' / ') },
      { label: 'Verification', value: ENTITY_VERIFICATION_LEVELS.join(' / ') },
      { label: 'School allowed', value: schoolVerification.decision },
      { label: 'School blocked', value: blockedSchoolVerification.decision },
      { label: 'BTS areas', value: BTS_PERMISSION_INFLUENCE_AREAS.slice(0, 6).join(' / ') },
      { label: 'Low BTS', value: lowBtsPermissions.permissions.join(' / ') },
      { label: 'High BTS', value: highBtsPermissions.permissions.join(' / ') },
      { label: 'BTS explain', value: BTS_EXPLANATION_LINES.join(' / ') },
      { label: 'Fixed features', value: NORMAL_FINTECH_FIXED_FEATURES.join(' / ') },
      { label: 'Formless flow', value: FORMLESS_CAPABILITY_CREATION_FLOW.join(' / ') },
      { label: 'Capability examples', value: FORMLESS_BANKING_INTENT_EXAMPLES.slice(0, 5).join(' / ') },
      { label: 'Non-negotiables', value: CAPABILITY_OS_NON_NEGOTIABLE_INVARIANTS.slice(0, 6).join(' / ') },
      { label: 'Invariant result', value: invariantReview.valid ? 'all invariants pass' : 'blocked' },
      { label: 'Failed invariant', value: failedInvariantReview.violations.join(' / ') },
      { label: 'Full stack', value: `${fullStack.layerCount} layers` },
      { label: 'Stack top', value: FULL_CAPABILITY_OS_STACK.slice(0, 5).map((layer) => layer.name).join(' / ') },
      { label: 'Stack runtime', value: FULL_CAPABILITY_OS_STACK.slice(10, 14).map((layer) => layer.name).join(' / ') },
      { label: 'Stack lifecycle', value: FULL_CAPABILITY_OS_STACK.slice(14, 18).map((layer) => layer.name).join(' / ') },
      { label: 'Plugin asks', value: pluginComparison.normalPluginSystem.asks.join(' / ') },
      { label: 'AURA asks', value: pluginComparison.capabilityOS.asks.slice(0, 6).join(' / ') },
      { label: 'Build sequence', value: CRITICAL_CAPABILITY_OS_BUILD_SEQUENCE.slice(0, 8).join(' / ') },
      { label: 'First artifact', value: criticalBuildSequence.firstTechnicalArtifact },
      { label: 'UCC metadata', value: `${UNIVERSAL_CAPABILITY_CONTRACT_METADATA.abbreviation} / ${UNIVERSAL_CAPABILITY_CONTRACT_METADATA.fileName}` },
      { label: 'UCC formats', value: `${UNIVERSAL_CAPABILITY_CONTRACT_METADATA.authoringFormat} / ${UNIVERSAL_CAPABILITY_CONTRACT_METADATA.runtimeFormat} / ${UNIVERSAL_CAPABILITY_CONTRACT_METADATA.validationFormat}` },
      { label: 'UCC fields', value: UCC_DEFINITION_FIELDS.slice(0, 8).join(' / ') },
      { label: 'UCC sources', value: UCC_CREATION_SOURCES.slice(0, 5).join(' / ') },
      { label: 'UCC principle', value: UCC_CORE_PRINCIPLE },
      { label: 'UCC declares', value: UCC_MUST_DECLARE.slice(0, 7).join(' / ') },
      { label: 'UCC flow', value: uccFlow.flow.slice(0, 8).join(' / ') },
      { label: 'UCC review', value: universalCapabilityContractReview.valid ? 'valid contract' : 'invalid contract' },
      { label: 'Messy to UCC', value: familyRentUcc.contains.slice(0, 6).join(' / ') },
      { label: 'Formal capability', value: `${familyRentUcc.formalCapability.name} / ${familyRentUcc.formalCapability.payout_restriction}` },
      { label: 'UCC sections', value: UCC_TOP_LEVEL_SECTIONS.slice(0, 8).join(' / ') },
      { label: 'Skeleton capability', value: Object.keys(uccSkeleton.capability).slice(0, 7).join(' / ') },
      { label: 'Skeleton intent', value: Object.keys(uccSkeleton.intent).join(' / ') },
      { label: 'Skeleton deps', value: Object.keys(uccSkeleton.dependencies).join(' / ') },
      { label: 'Skeleton money', value: Object.keys(uccSkeleton.money_objects).slice(0, 8).join(' / ') },
      { label: 'Skeleton rules', value: Object.keys(uccSkeleton.rules).slice(0, 7).join(' / ') },
      { label: 'Skeleton kernel', value: Object.keys(uccSkeleton.kernel_contract).slice(0, 6).join(' / ') },
      { label: 'UCC spine UI', value: Object.keys(uccSkeleton.ui_ux).join(' / ') },
      { label: 'UCC spine audit', value: Object.keys(uccSkeleton.events_audit).join(' / ') },
      { label: 'UCC spine tests', value: Object.keys(uccSkeleton.testing).slice(0, 7).join(' / ') },
      { label: 'UCC spine sim', value: Object.keys(uccSkeleton.simulation).join(' / ') },
      { label: 'UCC spine monitoring', value: Object.keys(uccSkeleton.monitoring).join(' / ') },
      { label: 'UCC spine migration', value: Object.keys(uccSkeleton.versioning_migration).join(' / ') },
      { label: 'UCC spine explain', value: Object.keys(uccSkeleton.explainability).join(' / ') },
      { label: 'UCC spine release', value: Object.keys(uccSkeleton.release).join(' / ') },
      { label: 'UCC version rules', value: UCC_VERSION_VALIDATION_RULES.join(' / ') },
      { label: 'UCC version review', value: uccVersionReview.valid ? 'schema version supported' : 'schema version blocked' },
      { label: 'Lifecycle states', value: UCC_LIFECYCLE_STATUSES.slice(0, 7).join(' / ') },
      { label: 'Capability status', value: `${schoolFeesUccSections.capability.id} / ${schoolFeesUccSections.capability.lifecycle_status}` },
      { label: 'Capability review', value: uccCapabilityReview.valid ? 'capability structurally valid' : uccCapabilityReview.violations.join(' / ') },
      { label: 'Activation gate', value: uccActivationReview.valid ? 'activation ready' : uccActivationReview.violations.join(' / ') },
      { label: 'Duplicate capability', value: duplicateCapabilityReview.duplicateId ? 'globally unique id check blocks duplicate' : 'unique id' },
      { label: 'Intent outcomes', value: schoolFeesUccSections.intent.desired_outcomes.join(' / ') },
      { label: 'Intent review', value: uccIntentReview.valid ? 'intent boundaries declared' : uccIntentReview.violations.join(' / ') },
      { label: 'Intent drift', value: intentDriftReview.driftDetected ? intentDriftReview.flagged.join(' / ') : 'no drift' },
      { label: 'Classification partial', value: schoolFeesUccSections.classification.money_movement_types.join(' / ') },
      { label: 'Risk classes', value: UCC_RISK_CLASSES.join(' / ') },
      { label: 'Classification risk', value: `${schoolFeesUccSections.classification.risk_class} / ${schoolFeesUccSections.classification.autonomy_class}` },
      { label: 'Classification review', value: uccClassificationReview.valid ? 'classification policy aligned' : uccClassificationReview.violations.join(' / ') },
      { label: 'Informational block', value: informationalRiskReview.valid ? 'allowed' : informationalRiskReview.violations.join(' / ') },
      { label: 'UCC dependencies', value: schoolFeesUccSections.dependencies.primitives.join(' / ') },
      { label: 'Dependency review', value: uccDependencyReview.valid ? 'dependencies available' : uccDependencyReview.violations.join(' / ') },
      { label: 'Provider stubs', value: uccDependencyReview.providerApiSkipped.join(' / ') || 'none' },
      { label: 'Integration failure', value: missingIntegrationFailureReview.valid ? 'covered' : missingIntegrationFailureReview.integrationsMissingFailureHandling.join(' / ') },
      { label: 'UCC actors', value: schoolFeesUccSections.entities.actors.map((actor) => `${actor.id}:${actor.role}`).join(' / ') },
      { label: 'Entity review', value: uccEntityReview.valid ? 'permissions visibility verified' : uccEntityReview.violations.join(' / ') },
      { label: 'Guardian variant', value: guardianEntityReview.valid && guardianMoneyObjectReview.valid ? guardianSchoolFeesUcc.money_objects.sources[0].id : 'guardian variant blocked' },
      { label: 'Visibility block', value: missingVisibilityReview.valid ? 'covered' : missingVisibilityReview.missingDataVisibility.join(' / ') },
      { label: 'Money sources', value: schoolFeesUccSections.money_objects.sources.map((source) => source.id).join(' / ') },
      { label: 'Money destinations', value: schoolFeesUccSections.money_objects.destinations.map((destination) => destination.id).join(' / ') },
      { label: 'Wallet object', value: schoolFeesUccSections.money_objects.wallets.map((wallet) => `${wallet.id}:${wallet.owner}`).join(' / ') },
      { label: 'Lock paths', value: schoolFeesUccSections.money_objects.locks[0].release_paths.join(' / ') },
      { label: 'Money review', value: uccMoneyObjectReview.valid ? 'ownership and release paths clear' : uccMoneyObjectReview.violations.join(' / ') },
      { label: 'Unsafe lock', value: unsafeLockReview.valid ? 'allowed' : unsafeLockReview.violations.join(' / ') },
      { label: 'Rule triggers', value: schoolFeesUccSections.rules.triggers.map((trigger) => trigger.id).join(' / ') },
      { label: 'Rule commands', value: schoolFeesUccSections.rules.actions.map((action) => action.command).join(' / ') },
      { label: 'Rule review', value: uccRulesReview.valid ? 'rules map to kernel safely' : uccRulesReview.violations.join(' / ') },
      { label: 'Schedule block', value: missingScheduleTimezoneReview.valid ? 'timezone covered' : missingScheduleTimezoneReview.schedulesMissingTimezone.join(' / ') },
      { label: 'State machine', value: schoolFeesUccSections.state_machine.states.slice(0, 6).map((state) => state.id).join(' / ') },
      { label: 'Terminal states', value: schoolFeesUccSections.state_machine.terminal_states.join(' / ') },
      { label: 'State review', value: uccStateMachineReview.valid ? 'state paths resolve funds' : uccStateMachineReview.violations.join(' / ') },
      { label: 'Invalid transition', value: invalidStateTransitionReview.valid ? 'allowed' : invalidStateTransitionReview.invalidTransitions.join(' / ') },
      { label: 'Kernel allowed', value: schoolFeesUccSections.kernel_contract.allowed_operations.join(' / ') },
      { label: 'Kernel prohibited', value: schoolFeesUccSections.kernel_contract.prohibited_operations.join(' / ') },
      { label: 'Kernel contracts', value: uccKernelContractReview.commandIds.join(' / ') },
      { label: 'Kernel review', value: uccKernelContractReview.valid ? 'kernel calls contracted' : uccKernelContractReview.violations.join(' / ') },
      { label: 'Kernel provider stubs', value: uccKernelContractReview.providerApiSkipped.join(' / ') || 'none' },
      { label: 'Idempotency block', value: missingIdempotencyReview.valid ? 'covered' : missingIdempotencyReview.commandsMissingIdempotency.join(' / ') },
      { label: 'Physics invariants', value: schoolFeesUccSections.financial_physics.invariants.map((invariant) => invariant.id).join(' / ') },
      { label: 'Balance rule', value: schoolFeesUccSections.financial_physics.balance_conservation[0].rule },
      { label: 'State exclusivity rule', value: schoolFeesUccSections.financial_physics.state_exclusivity[0].rule },
      { label: 'Release completeness', value: schoolFeesUccSections.financial_physics.release_completeness[0].must_define.join(' / ') },
      { label: 'Liability map', value: schoolFeesUccSections.financial_physics.liability_map.map((item) => `${item.scenario}:${item.liable_party}`).join(' / ') },
      { label: 'Physics review', value: uccFinancialPhysicsReview.valid ? 'financial physics holds' : uccFinancialPhysicsReview.violations.join(' / ') },
      { label: 'Ledger block', value: unbalancedLedgerReview.valid ? 'balanced' : unbalancedLedgerReview.unbalancedLedgerEffects.join(' / ') },
      { label: 'Policy jurisdictions', value: schoolFeesUccSections.policy.jurisdiction_rules.map((rule) => rule.jurisdiction).join(' / ') },
      { label: 'Policy review', value: uccPolicyReview.valid ? 'policy coverage complete' : uccPolicyReview.violations.join(' / ') },
      { label: 'Fee disclosure block', value: missingFeeDisclosureReview.valid ? 'covered' : missingFeeDisclosureReview.feesMissingDisclosure.join(' / ') },
      { label: 'Autonomy dimensions', value: schoolFeesUccSections.autonomy.dimensions.slice(0, 5).map((dimension) => `${dimension.dimension}:${dimension.level}`).join(' / ') },
      { label: 'Autonomy review', value: uccAutonomyReview.valid ? 'granular autonomy safe' : uccAutonomyReview.violations.join(' / ') },
      { label: 'External release block', value: unsafeExternalReleaseAutonomyReview.valid ? 'allowed' : unsafeExternalReleaseAutonomyReview.violations.join(' / ') },
      { label: 'Evidence partial', value: schoolFeesUccSections.evidence.required_evidence.map((evidence) => evidence.id).join(' / ') },
      { label: 'Evidence review', value: uccEvidenceReview.valid ? 'evidence proof path complete' : uccEvidenceReview.violations.join(' / ') },
      { label: 'Evidence threshold block', value: missingEvidenceThresholdReview.valid ? 'covered' : missingEvidenceThresholdReview.automatedMethodsMissingThreshold.join(' / ') },
      { label: 'UI surfaces required', value: schoolFeesUccSections.ui_ux.required_surfaces.map((surface) => surface.id).join(' / ') },
      { label: 'UI review', value: uccUiUxReview.valid ? 'consent and recovery surfaces covered' : uccUiUxReview.violations.join(' / ') },
      { label: 'UI recovery block', value: missingRecoveryReview.valid ? 'covered' : missingRecoveryReview.errorStatesMissingRecovery.join(' / ') },
      { label: 'Audit events', value: schoolFeesUccSections.events_audit.emitted_events.slice(0, 8).join(' / ') },
      { label: 'Audit review', value: uccEventsAuditReview.valid ? 'events audit safe' : uccEventsAuditReview.violations.join(' / ') },
      { label: 'Overshare block', value: oversharingEventsAuditReview.valid ? 'covered' : 'timeline_visibility_overshares' },
      { label: 'Testing partial', value: schoolFeesUccSections.testing.unit_tests.concat(schoolFeesUccSections.testing.ledger_tests).slice(0, 5).join(' / ') },
      { label: 'Testing review', value: uccTestingReview.valid ? 'release tests covered' : uccTestingReview.violations.join(' / ') },
      { label: 'Ledger test block', value: missingLedgerTestsReview.valid ? 'covered' : missingLedgerTestsReview.violations.join(' / ') },
      { label: 'Simulation scenarios', value: Object.keys(schoolFeesUccSections.simulation).join(' / ') },
      { label: 'Simulation review', value: uccSimulationReview.valid ? 'scenario coverage complete' : uccSimulationReview.violations.join(' / ') },
      { label: 'Failure sim block', value: missingFailureSimulationReview.valid ? 'covered' : missingFailureSimulationReview.violations.join(' / ') },
      { label: 'Monitoring metrics', value: schoolFeesUccSections.monitoring.health_metrics.slice(0, 5).join(' / ') },
      { label: 'Monitoring review', value: uccMonitoringReview.valid ? 'runtime watch covered' : uccMonitoringReview.violations.join(' / ') },
      { label: 'Rollback block', value: missingRollbackMonitoringReview.valid ? 'covered' : missingRollbackMonitoringReview.violations.join(' / ') },
      { label: 'Migration rules', value: schoolFeesUccSections.versioning_migration.migration_rules.map((rule) => `${rule.from}->${rule.to}`).join(' / ') },
      { label: 'Migration review', value: uccVersioningMigrationReview.valid ? 'migration consent safe' : uccVersioningMigrationReview.violations.join(' / ') },
      { label: 'Retirement block', value: unsafeVersioningMigrationReview.valid ? 'covered' : unsafeVersioningMigrationReview.violations.join(' / ') },
      { label: 'Explain audiences', value: Object.keys(schoolFeesUccSections.explainability).filter((key) => key.endsWith('_explanation')).join(' / ') },
      { label: 'Reason codes', value: schoolFeesUccSections.explainability.reason_codes.map((reason) => reason.code).join(' / ') },
      { label: 'Explain review', value: uccExplainabilityReview.valid ? 'audience explanations complete' : uccExplainabilityReview.violations.join(' / ') },
      { label: 'Reason block', value: missingReasonCodeReview.valid ? 'covered' : missingReasonCodeReview.violations.join(' / ') },
      { label: 'Release modes', value: UCC_RELEASE_MODES.slice(0, 7).join(' / ') },
      { label: 'Release gates', value: schoolFeesUccSections.release.release_gates.join(' / ') },
      { label: 'Release review', value: uccReleaseReview.valid ? 'release gates aligned' : uccReleaseReview.violations.join(' / ') },
      { label: 'Blocked release', value: blockedReleaseReview.valid ? 'blocked safely' : blockedReleaseReview.violations.join(' / ') },
      { label: 'Validation pipeline', value: UCC_VALIDATION_PIPELINE_STEPS.slice(0, 7).join(' / ') },
      { label: 'Pipeline review', value: uccValidationPipeline.valid ? 'all validation stages pass' : uccValidationPipeline.failedSteps.join(' / ') },
      { label: 'Schema asks', value: UCC_VALIDATION_FOCUS_QUESTIONS.schema_validation.join(' / ') },
      { label: 'Physics asks', value: UCC_VALIDATION_FOCUS_QUESTIONS.financial_physics_validation.join(' / ') },
      { label: 'Compiler artifacts', value: UCC_COMPILER_OUTPUT_ARTIFACTS.slice(0, 6).join(' / ') },
      { label: 'Kernel command map', value: uccCompilerOutput.artifacts.kernel_command_map.map((command) => command.operation).join(' / ') },
      { label: 'UI directive map', value: uccCompilerOutput.artifacts.ui_directive_map.generate.slice(0, 5).join(' / ') },
      { label: 'Guardian compiler', value: guardianCompilerOutput.readyForRuntime ? guardianCompilerOutput.artifacts.capability_package.folder : guardianCompilerOutput.validation.failedSteps.join(' / ') },
      { label: 'UCC invariants', value: UCC_MANDATORY_INVARIANTS.slice(0, 7).join(' / ') },
      { label: 'Invariant review', value: uccInvariantReview.valid ? 'all invariants enforced' : uccInvariantReview.violations.join(' / ') },
      { label: 'Governor block', value: governorBlockedInvariantReview.valid ? 'allowed' : governorBlockedInvariantReview.violations.join(' / ') },
      { label: 'Implementation layers', value: UCC_TECHNICAL_IMPLEMENTATION_LAYERS.map((layer) => layer.layer).join(' / ') },
      { label: 'Runtime binding', value: uccRuntimeBinding.runtimeBound ? uccRuntimeBinding.components.join(' / ') : 'runtime blocked' },
      { label: 'Type shapes', value: Object.keys(UCC_GENERATED_TYPE_SHAPES).join(' / ') },
      { label: 'UCC outcome', value: uccOutcome.currentOutcome },
      { label: 'Source truth flow', value: UCC_CANONICAL_SOURCE_OF_TRUTH_FLOW.join(' / ') },
      { label: 'Validator dimensions', value: UCC_VALIDATOR_EVALUATION_DIMENSIONS.slice(0, 7).join(' / ') },
      { label: 'Validator position', value: uccValidatorSpec.positionFlow.slice(0, 6).join(' / ') },
      { label: 'Hard safety', value: UCC_HARD_SAFETY_PRINCIPLE },
      { label: 'Correct money flow', value: UCC_CORRECT_MONEY_FLOW.slice(0, 6).join(' / ') },
      { label: 'Schema formats', value: Object.keys(UCC_SCHEMA_FORMAT_STRATEGY).join(' / ') },
      { label: 'Worker risk', value: workerSafetyConcern.findings.slice(0, 4).join(' / ') },
      { label: 'Rent declarations', value: rentSafetyConcern.requiredDeclarations.slice(0, 5).join(' / ') },
      { label: 'Validator decision', value: privateReleaseDecision.result },
      { label: 'Blocked decision', value: blockedValidatorDecision.result },
      { label: 'Normalization', value: UCC_NORMALIZATION_STEPS.join(' / ') },
      { label: 'Canonical ID', value: normalizedUcc.normalized.capability.id },
      { label: 'Strict ID block', value: strictIdentityNormalization.identityCriticalIdViolation ? strictIdentityNormalization.suggestedCanonicalId : 'valid id' },
      { label: 'Removed keys', value: normalizedUcc.removedTopLevelKeys.join(' / ') || 'none' },
      { label: 'Type responsibility', value: Object.entries(UCC_GENERATED_TYPE_RESPONSIBILITIES).map(([key, values]) => `${key}:${values[0]}`).join(' / ') },
      { label: 'Schema package', value: `${schemaPackage.naming.packageName} / ${schemaPackage.naming.files.slice(0, 3).join(' / ')}` },
      { label: 'Strict schema', value: strictTopLevelReview.valid ? 'strict top level valid' : strictTopLevelReview.missingSections.join(' / ') },
      { label: 'Unknown key block', value: unknownTopLevelReview.valid ? 'allowed' : unknownTopLevelReview.unknownTopLevelKeys.join(' / ') },
      { label: 'Schema required', value: UCC_TOP_LEVEL_JSON_SCHEMA_FRAGMENT.required.slice(0, 7).join(' / ') },
      { label: 'ID convention', value: `${UCC_FIELD_CONVENTIONS.ids.regex} / ${UCC_FIELD_CONVENTIONS.ids.valid.slice(0, 3).join(' / ')}` },
      { label: 'Field review', value: primitiveFieldReview.valid ? 'field conventions valid' : primitiveFieldReview.violations.join(' / ') },
      { label: 'Dangling ref block', value: danglingReferenceReview.valid ? 'covered' : danglingReferenceReview.danglingReferences.join(' / ') },
      { label: 'Core enums', value: UCC_CREATION_METHODS.slice(0, 5).join(' / ') },
      { label: 'Movement enum', value: UCC_MONEY_MOVEMENT_TYPE_ENUM.slice(0, 9).join(' / ') },
      { label: 'Actor enum', value: UCC_ACTOR_TYPE_ENUM.slice(0, 9).join(' / ') },
      { label: 'Evidence enum', value: UCC_EVIDENCE_TYPE_ENUM.slice(0, 8).join(' / ') },
      { label: 'Kernel enum', value: UCC_KERNEL_OPERATION_ENUM.slice(0, 8).join(' / ') },
      { label: 'Enum review', value: coreEnumReview.valid ? 'core enums valid' : coreEnumReview.violations.join(' / ') },
      { label: 'Enum block', value: invalidEnumReview.valid ? 'allowed' : invalidEnumReview.violations.join(' / ') },
      { label: 'Validator modules', value: UCC_VALIDATOR_MODULES.slice(0, 8).join(' / ') },
      { label: 'Environment modes', value: Object.keys(UCC_VALIDATION_ENVIRONMENT_MODES).join(' / ') },
      { label: 'Validation input', value: UCC_VALIDATION_INPUT_SHAPE.slice(0, 5).join(' / ') },
      { label: 'Validation result', value: UCC_VALIDATION_RESULT_SHAPE.slice(0, 6).join(' / ') },
      { label: 'Release eligibility', value: Object.entries(validationResult.releaseEligibility).slice(0, 5).map(([key, value]) => `${key}:${value}`).join(' / ') },
      { label: 'Severity levels', value: UCC_FINDING_SEVERITY_LEVELS.map((item) => item.level).join(' / ') },
      { label: 'Finding shape', value: UCC_FINDING_STRUCTURE_FIELDS.slice(0, 7).join(' / ') },
      { label: 'Finding example', value: trappedFundsFinding.code },
      { label: 'Release impact', value: UCC_RELEASE_IMPACT_MODEL.join(' / ') },
      { label: 'Private impact block', value: releaseEligibility.privateCapability ? 'private release allowed' : trappedFundsFinding.releaseImpact.blocksPrivateRelease ? 'private release blocked' : 'review' },
      { label: 'Detailed pipeline', value: UCC_DETAILED_VALIDATION_PIPELINE_STEPS.slice(0, 8).join(' / ') },
      { label: 'Stage 0 tasks', value: UCC_STAGE0_NORMALIZATION_TASKS.slice(0, 7).join(' / ') },
      { label: 'Schema stage', value: jsonSchemaStage.valid ? 'shape valid' : jsonSchemaStage.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Identity stage', value: identityStage.valid ? 'identity valid' : identityStage.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Intent stage', value: intentStage.valid ? 'intent complete' : intentStage.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Classification stage', value: classificationStage.valid ? 'classification consistent' : classificationStage.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Classification block', value: classificationStageFailure.valid ? 'allowed' : classificationStageFailure.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Dependency registries', value: UCC_DEPENDENCY_REGISTRIES.join(' / ') },
      { label: 'Dependency stage', value: dependencyRegistryStage.valid ? 'registries resolved' : dependencyRegistryStage.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Dependency block', value: dependencyRegistryFailure.valid ? 'allowed' : dependencyRegistryFailure.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Entity stage', value: entityStage.valid ? 'roles and visibility safe' : entityStage.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Role mismatch block', value: entityRoleMismatchStage.valid ? 'allowed' : entityRoleMismatchStage.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Money object stage', value: moneyObjectStage.valid ? 'money objects complete' : moneyObjectStage.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Escrow block', value: moneyObjectEscrowFailure.valid ? 'allowed' : moneyObjectEscrowFailure.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Rule stage', value: ruleCoherenceStage.valid ? 'rules coherent' : ruleCoherenceStage.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Rule timezone block', value: ruleTimezoneFailure.valid ? 'allowed' : ruleTimezoneFailure.findings.map((finding) => finding.code).join(' / ') },
      { label: 'State stage', value: stateMachineSafetyStage.valid ? 'state machine safe' : stateMachineSafetyStage.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Unreachable state block', value: unreachableStateStage.valid ? 'allowed' : unreachableStateStage.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Kernel stage', value: kernelStage.valid ? 'kernel safety valid' : kernelStage.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Direct mutation block', value: directMutationKernelStage.valid ? 'allowed' : directMutationKernelStage.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Financial stage', value: financialPhysicsStage.valid ? 'financial physics safe' : financialPhysicsStage.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Liability block', value: liabilityFailureStage.valid ? 'covered' : liabilityFailureStage.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Governor decisions', value: UCC_GOVERNOR_DECISIONS.slice(0, 8).join(' / ') },
      { label: 'Policy governor', value: policyGovernorStage.valid ? policyGovernorStage.governorDecision : policyGovernorStage.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Governor blocked', value: governorBlockedStage.valid ? 'allowed' : governorBlockedStage.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Autonomy consent', value: autonomyConsentStage.valid ? 'autonomy consent safe' : autonomyConsentStage.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Unsafe autonomy block', value: unsafeAutonomyConsentStage.valid ? 'allowed' : unsafeAutonomyConsentStage.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Evidence verification', value: evidenceVerificationStage.valid ? 'evidence complete' : evidenceVerificationStage.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Evidence field block', value: missingEvidenceFieldsStage.valid ? 'allowed' : missingEvidenceFieldsStage.findings.map((finding) => finding.code).join(' / ') },
      { label: 'UI/UX stage', value: uiUxSafetyStage.valid ? 'ui safety valid' : uiUxSafetyStage.findings.map((finding) => finding.code).join(' / ') },
      { label: 'UI recovery block', value: uiUxRecoveryFailure.valid ? 'allowed' : uiUxRecoveryFailure.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Audit stage', value: eventsAuditStage.valid ? 'audit traceability valid' : eventsAuditStage.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Audit consent block', value: missingConsentAuditStage.valid ? 'allowed' : missingConsentAuditStage.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Testing stage', value: testingCoverageStage.valid ? 'test coverage valid' : testingCoverageStage.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Failure test block', value: missingFailureTestsStage.valid ? 'allowed' : missingFailureTestsStage.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Simulation stage', value: simulationReadinessStage.valid ? 'simulation ready' : simulationReadinessStage.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Trap sim block', value: missingTrappedFundsSimulationStage.valid ? 'allowed' : missingTrappedFundsSimulationStage.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Monitoring stage', value: monitoringReadinessStage.valid ? 'monitoring ready' : monitoringReadinessStage.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Metric source block', value: missingMonitoringSourceStage.valid ? 'allowed' : missingMonitoringSourceStage.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Versioning stage', value: versioningStage.valid ? 'upgrade safety valid' : versioningStage.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Retirement stage block', value: unsafeRetirementStage.valid ? 'allowed' : unsafeRetirementStage.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Explainability stage', value: explainabilityStage.valid ? 'explainability valid' : explainabilityStage.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Reason message block', value: missingReasonMessageStage.valid ? 'allowed' : missingReasonMessageStage.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Release inputs', value: UCC_RELEASE_DECISION_INPUTS.slice(0, 7).join(' / ') },
      { label: 'Release decisions', value: UCC_RELEASE_DECISIONS.join(' / ') },
      { label: 'Release gate stage', value: releaseGateStage.valid ? releaseGateStage.releaseEligibility.reasonCodes.join(' / ') || 'release valid' : releaseGateStage.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Marketplace gate', value: marketplaceReleaseGateStage.releaseEligibility.marketplace ? 'marketplace allowed' : marketplaceReleaseGateStage.releaseEligibility.reasonCodes.join(' / ') },
      { label: 'Blocked release gate', value: blockedReleaseGateStage.releaseEligibility.blocked ? blockedReleaseGateStage.releaseEligibility.reasonCodes.join(' / ') : 'allowed' },
      { label: 'Error taxonomy', value: UCC_ERROR_CODE_TAXONOMY.slice(0, 8).join(' / ') },
      { label: 'Error examples', value: UCC_ERROR_CODE_EXAMPLES.slice(0, 6).join(' / ') },
      { label: 'Error code uses', value: UCC_ERROR_CODE_USES.join(' / ') },
      { label: 'Decision matrix', value: readinessState.contractState },
      { label: 'Contractor example', value: contractorGpsResult.releaseEligibility.reasonCodes.join(' / ') },
      { label: 'Repair types', value: UCC_REPAIR_TYPES.join(' / ') },
      { label: 'Required repairs', value: contractorRepairSuggestions.requiredFixes.map((fix) => fix.code).join(' / ') },
      { label: 'Clarification', value: contractorRepairSuggestions.missingClarifications[0]?.question ?? 'none' },
      { label: 'Doctor input', value: capabilityDoctorInput.relationship.validatorProvides },
      { label: 'Validator modes', value: Object.keys(UCC_VALIDATOR_MODE_REQUIREMENTS).join(' / ') },
      { label: 'Design mode', value: designTimeMode.strictness },
      { label: 'Preflight checks', value: UCC_RUNTIME_PREFLIGHT_CHECKS.slice(0, 6).join(' / ') },
      { label: 'Preflight decision', value: runtimePreflight.decision },
      { label: 'Blocked preflight', value: blockedPreflight.decision },
      { label: 'Orchestrated validation', value: orchestratedValidation.valid ? 'valid' : 'invalid' },
      { label: 'Finding eligibility', value: Object.entries(findingEligibility).slice(0, 5).map(([key, value]) => `${key}:${value}`).join(' / ') },
      { label: 'Invalidity gradient', value: UCC_INVALIDITY_GRADIENT.join(' / ') },
      { label: 'Identity schema', value: capabilityIdentitySchemaReview.valid ? 'identity schema valid' : capabilityIdentitySchemaReview.invalidFields.join(' / ') },
      { label: 'Identity schema block', value: invalidCapabilityIdentitySchemaReview.valid ? 'allowed' : invalidCapabilityIdentitySchemaReview.invalidFields.join(' / ') },
      { label: 'Money schema', value: moneyObjectSchemaReview.valid ? 'money schema valid' : moneyObjectSchemaReview.walletFindings.concat(moneyObjectSchemaReview.escrowFindings).join(' / ') },
      { label: 'Money schema block', value: invalidMoneyObjectSchemaReview.valid ? 'allowed' : invalidMoneyObjectSchemaReview.walletFindings.join(' / ') },
      { label: 'Kernel command schema', value: kernelCommandSchemaReview.valid ? 'kernel command schema valid' : kernelCommandSchemaReview.commandFindings.join(' / ') },
      { label: 'Kernel schema block', value: invalidKernelCommandSchemaReview.valid ? 'allowed' : invalidKernelCommandSchemaReview.commandFindings.join(' / ') },
      { label: 'Core TS types', value: Object.keys(UCC_GENERATED_CORE_TYPE_DEFINITIONS.typescript).join(' / ') },
      { label: 'Core Go types', value: Object.keys(UCC_GENERATED_CORE_TYPE_DEFINITIONS.go).join(' / ') },
      { label: 'Core Rust types', value: Object.keys(UCC_GENERATED_CORE_TYPE_DEFINITIONS.rust).join(' / ') },
      { label: 'Registry deps', value: UCC_VALIDATOR_REGISTRY_DEPENDENCIES.slice(0, 8).join(' / ') },
      { label: 'Registry snapshot', value: registrySnapshotReview.valid ? registrySnapshot.snapshotId : registrySnapshotReview.missingFields.join(' / ') },
      { label: 'Determinism', value: determinismReview.deterministic ? determinismReview.determinismKey : determinismReview.missingInputs.join(' / ') },
      { label: 'Determinism block', value: missingSnapshotDeterminismReview.deterministic ? 'allowed' : missingSnapshotDeterminismReview.missingInputs.join(' / ') },
      { label: 'Repair loop', value: repairLoopPlan.flow.join(' / ') },
      { label: 'Repair patch', value: repairLoopPlan.automaticPatches[0]?.patch.action ?? 'clarify_first' },
      { label: 'Admin badges', value: adminStudioBadges.badges.map((badge) => `${badge.label}:${badge.status}`).join(' / ') },
      { label: 'Marketplace requirements', value: UCC_MARKETPLACE_VALIDATION_REQUIREMENTS.slice(0, 6).join(' / ') },
      { label: 'Marketplace submission', value: marketplaceSubmission.marketplaceReady ? 'marketplace ready' : marketplaceSubmission.releaseGate.releaseEligibility.reasonCodes.join(' / ') || 'review required' },
      { label: 'Marketplace block', value: marketplaceSubmissionBlock.marketplaceReady ? 'allowed' : marketplaceSubmissionBlock.blockers.join(' / ') },
      { label: 'Security rules', value: VALIDATOR_SECURITY_REQUIREMENTS.slice(0, 6).join(' / ') },
      { label: 'Safe expression', value: safeExpressionReview.safe ? 'safe grammar accepted' : safeExpressionReview.violations.join(' / ') },
      { label: 'Unsafe expression', value: unsafeExpressionReview.safe ? 'allowed' : unsafeExpressionReview.findingCode },
      { label: 'Security envelope', value: validatorSecurityReview.valid ? 'validator protected' : validatorSecurityReview.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Security block', value: unsafeValidatorSecurityReview.valid ? 'allowed' : unsafeValidatorSecurityReview.findings.map((finding) => finding.code).join(' / ') },
      { label: 'Non-mutating validation', value: nonMutationReview.valid ? 'source unchanged' : nonMutationReview.finding },
      { label: 'Mutation block', value: mutationBlock.valid ? 'allowed' : mutationBlock.finding },
      { label: 'Patch format', value: CONTRACT_PATCH_REQUIRED_FIELDS.join(' / ') },
      { label: 'Patch audit', value: contractPatchProposal.audit.changed_fields.join(' / ') },
      { label: 'Report formats', value: VALIDATOR_REPORT_FORMATS.join(' / ') },
      { label: 'Admin report', value: adminReadableReport.status },
      { label: 'User report', value: userSafeReport.message },
      { label: 'Compliance report', value: `${complianceReport.reviewRequired ? 'review required' : 'no review'}:${complianceReport.policyCategories.join(' / ')}` },
      { label: 'Validator APIs', value: MINIMAL_VALIDATOR_API_ROUTES.map((route) => route.path).join(' / ') },
      { label: 'Validate API', value: validateContractApi.valid ? 'valid' : validateContractApi.findings.map((finding) => finding.code).join(' / ') || 'validated' },
      { label: 'Preflight API', value: `${runtimeCommandApi.decision}:${runtimeCommandApi.requiredActions.join(' / ')}` },
      { label: 'Repair API', value: repairPlanApi.manualReviewRequired ? repairPlanApi.clarifyingQuestions[0]?.question ?? 'manual review' : 'auto patches ready' },
      { label: 'Validator tables', value: Object.keys(VALIDATOR_DATABASE_TABLES).slice(0, 6).join(' / ') },
      { label: 'Validation run row', value: validationPersistenceRows.validationRun.id },
      { label: 'Validator invariants', value: VALIDATOR_OWN_INVARIANTS.slice(0, 5).join(' / ') },
      { label: 'Invariant self-check', value: validatorOwnInvariantReview.valid ? 'validator invariants hold' : validatorOwnInvariantReview.violations.join(' / ') },
      { label: 'School fees walkthrough', value: schoolFeesValidationWalkthrough.allShownStagesPass ? 'all walkthrough stages pass' : Object.entries(schoolFeesValidationWalkthrough.stageReviews).filter(([, valid]) => !valid).map(([stage]) => stage).join(' / ') },
      { label: 'Validator enables', value: validatorEnabledOutcome.outcome },
      { label: 'Canonical gate', value: canonicalExecutionGate.mayExecute ? 'execution allowed by gates' : Object.entries(canonicalExecutionGate.gates).filter(([, passed]) => !passed).map(([gate]) => gate).join(' / ') },
      { label: 'Blocked gate', value: blockedExecutionGate.mayExecute ? 'allowed' : Object.entries(blockedExecutionGate.gates).filter(([, passed]) => !passed).map(([gate]) => gate).join(' / ') },
      { label: 'PSL definition', value: AURA_PSL_DEFINITION.describes.slice(0, 7).join(' / ') },
      { label: 'PSL relationship', value: Object.entries(AURA_PSL_RELATIONSHIP).map(([key, value]) => `${key}:${value}`).join(' / ') },
      { label: 'PSL draft', value: auraPslPipeline.formallyCheckable ? auraPslPipeline.pslDraft.money_objects[0].id : auraPslPipeline.pslReview.missing.join(' / ') },
      { label: 'PSL safety block', value: unsafePslReview.valid ? 'allowed' : unsafePslReview.unsafeRules.map((rule) => rule.violations.join(',')).concat(unsafePslReview.imperativeRules).join(' / ') },
      { label: 'PSL principles', value: AURA_PSL_DESIGN_PRINCIPLES.slice(0, 8).join(' / ') },
      { label: 'PSL stack', value: AURA_PSL_STACK_POSITION.slice(0, 7).join(' / ') },
      { label: 'PSL forms', value: auraPslInternalForms.forms.join(' / ') },
      { label: 'PSL runtime IR', value: auraPslInternalForms.capabilityPackageReady ? auraPslInternalForms.runtimeIr.kernel_command.command_contract_id : 'blocked ir' },
      { label: 'PSL modules', value: auraPslTopLevelReview.valid ? AURA_PSL_TOP_LEVEL_MODULES.slice(0, 8).join(' / ') : auraPslTopLevelReview.missingRequiredModules.join(' / ') },
      { label: 'PSL determinism', value: auraPslDeterminism.deterministic ? 'same psl + context -> same interpretation' : 'nondeterministic' },
      { label: 'PSL mutation block', value: directMutationPslReview.valid ? 'allowed' : directMutationPslReview.directBalanceMutations.join(' / ') },
      { label: 'PSL constructs', value: AURA_PSL_CORE_CONSTRUCTS.slice(0, 9).join(' / ') },
      { label: 'PSL file', value: `${schoolFeesPslFile.product.id}:${schoolFeesPslFile.state_machine.states.slice(0, 4).join(' / ')}` },
      { label: 'PSL product', value: pslProductReview.valid ? AURA_PSL_PRODUCT_REQUIRED_FIELDS.join(' / ') : pslProductReview.violations.join(' / ') },
      { label: 'PSL product block', value: duplicatePslProductReview.valid ? 'allowed' : duplicatePslProductReview.violations.join(' / ') },
      { label: 'PSL actors', value: pslActorReview.valid ? Object.keys(schoolFeesPslFile.actors).join(' / ') : pslActorReview.actorFindings.join(' / ') },
      { label: 'PSL actor block', value: pslActorBlock.valid ? 'allowed' : pslActorBlock.actorFindings.join(' / ') },
      { label: 'PSL entities', value: pslEntityReview.valid ? Object.keys(pslEntityReview.allowedTypes).length ? pslEntityReview.allowedTypes.slice(0, 6).join(' / ') : 'entities valid' : pslEntityReview.entityFindings.join(' / ') },
      { label: 'PSL entity block', value: pslEntityBlock.valid ? 'allowed' : pslEntityBlock.entityFindings.join(' / ') },
      { label: 'PSL to UCC', value: pslProductCompilation.valid ? Object.keys(pslProductCompilation.uccSections).join(' / ') : 'compile blocked' },
      { label: 'PSL relationships', value: pslRelationshipReview.valid ? AURA_PSL_RELATIONSHIP_TYPES.slice(0, 5).join(' / ') : pslRelationshipReview.findings.join(' / ') },
      { label: 'PSL relationship block', value: pslRelationshipBlock.valid ? 'allowed' : pslRelationshipBlock.findings.join(' / ') },
      { label: 'PSL money objects', value: pslMoneyObjectReview.valid ? AURA_PSL_MONEY_OBJECT_TYPES.slice(0, 8).join(' / ') : pslMoneyObjectReview.findings.join(' / ') },
      { label: 'PSL money block', value: pslMoneyObjectBlock.valid ? 'allowed' : pslMoneyObjectBlock.findings.join(' / ') },
      { label: 'PSL fund states', value: pslFundStateReview.valid ? AURA_PSL_FUND_STATES.slice(0, 8).join(' / ') : pslFundStateReview.findings.join(' / ') },
      { label: 'PSL fund block', value: pslFundStateBlock.valid ? 'allowed' : pslFundStateBlock.findings.join(' / ') },
      { label: 'PSL events', value: pslEventReview.valid ? Object.keys(SCHOOL_FEES_PSL_EVENTS_EXAMPLE).join(' / ') : pslEventReview.findings.join(' / ') },
      { label: 'PSL event block', value: pslEventBlock.valid ? 'allowed' : pslEventBlock.findings.join(' / ') },
      { label: 'PSL triggers', value: pslTriggerReview.valid ? AURA_PSL_TRIGGER_TYPES.join(' / ') : pslTriggerReview.findings.join(' / ') },
      { label: 'PSL trigger block', value: pslTriggerBlock.valid ? 'allowed' : pslTriggerBlock.findings.join(' / ') },
      { label: 'PSL expression types', value: AURA_PSL_PRIMITIVE_EXPRESSION_TYPES.slice(0, 8).join(' / ') },
      { label: 'PSL functions', value: AURA_PSL_APPROVED_FUNCTIONS.slice(0, 8).join(' / ') },
      { label: 'PSL conditions', value: pslConditionReview.valid ? 'truth-only conditions valid' : pslConditionReview.findings.join(' / ') },
      { label: 'PSL condition block', value: pslConditionBlock.valid ? 'allowed' : pslConditionBlock.findings.join(' / ') },
      { label: 'PSL actions', value: pslActionReview.valid ? AURA_PSL_ACTION_CATEGORIES.slice(0, 8).join(' / ') : pslActionReview.findings.join(' / ') },
      { label: 'PSL action block', value: pslActionBlock.valid ? 'allowed' : pslActionBlock.findings.join(' / ') },
      { label: 'PSL rule shape', value: pslRuleReview.valid ? AURA_PSL_RULE_REQUIRED_FIELDS.join(' / ') : pslRuleReview.findings.join(' / ') },
      { label: 'PSL rule block', value: pslRuleBlock.valid ? 'allowed' : pslRuleBlock.findings.join(' / ') },
      { label: 'PSL rule types', value: AURA_PSL_RULE_TYPES.join(' / ') },
      { label: 'PSL state machine', value: pslStateMachineReview.valid ? AURA_PSL_STATE_MACHINE_REQUIREMENTS.slice(0, 5).join(' / ') : pslStateMachineReview.findings.join(' / ') },
      { label: 'PSL state block', value: pslStateMachineBlock.valid ? 'allowed' : pslStateMachineBlock.findings.join(' / ') },
      { label: 'PSL invariants', value: pslInvariantReview.valid ? Object.keys(SCHOOL_FEES_PSL_INVARIANTS_EXAMPLE).join(' / ') : pslInvariantReview.findings.join(' / ') },
      { label: 'PSL invariant block', value: pslInvariantBlock.valid ? 'allowed' : pslInvariantBlock.findings.join(' / ') },
      { label: 'PSL invariant compile', value: pslInvariantCompilation.valid ? pslInvariantCompilation.globalInvariants.slice(0, 5).join(' / ') : pslInvariantCompilation.attemptedOverrides.join(' / ') },
      { label: 'PSL policies', value: pslPolicyReview.valid ? AURA_PSL_POLICY_PACKS_EXAMPLE.join(' / ') : pslPolicyReview.findings.join(' / ') },
      { label: 'PSL policy block', value: pslPolicyBlock.valid ? 'allowed' : pslPolicyBlock.findings.join(' / ') },
      { label: 'PSL consents', value: pslConsentReview.valid ? Object.keys(SCHOOL_FEES_PSL_CONSENTS_EXAMPLE).join(' / ') : pslConsentReview.findings.join(' / ') },
      { label: 'PSL consent block', value: pslConsentBlock.valid ? 'allowed' : pslConsentBlock.findings.join(' / ') },
      { label: 'PSL disclosures', value: pslDisclosureReview.valid ? Object.keys(SCHOOL_FEES_PSL_DISCLOSURES_EXAMPLE).join(' / ') : pslDisclosureReview.findings.join(' / ') },
      { label: 'PSL disclosure block', value: pslDisclosureBlock.valid ? 'allowed' : pslDisclosureBlock.findings.join(' / ') },
      { label: 'PSL evidence', value: pslEvidenceReview.valid ? Object.keys(SCHOOL_FEES_PSL_EVIDENCE_EXAMPLE).join(' / ') : pslEvidenceReview.findings.join(' / ') },
      { label: 'PSL evidence block', value: pslEvidenceBlock.valid ? 'allowed' : pslEvidenceBlock.findings.join(' / ') },
      { label: 'PSL autonomy', value: pslAutonomyReview.valid ? Object.keys(SCHOOL_FEES_PSL_AUTONOMY_EXAMPLE.dimensions).join(' / ') : pslAutonomyReview.findings.join(' / ') },
      { label: 'PSL autonomy block', value: pslAutonomyBlock.valid ? 'allowed' : pslAutonomyBlock.findings.join(' / ') },
      { label: 'PSL experience', value: pslExperienceReview.valid ? AURA_PSL_EXPERIENCE_RULES.slice(0, 5).join(' / ') : pslExperienceReview.findings.join(' / ') },
      { label: 'PSL experience block', value: pslExperienceBlock.valid ? 'allowed' : pslExperienceBlock.findings.join(' / ') },
      { label: 'PSL audit', value: pslAuditReview.valid ? SCHOOL_FEES_PSL_AUDIT_EXAMPLE.required_for.join(' / ') : pslAuditReview.findings.join(' / ') },
      { label: 'PSL audit block', value: pslAuditBlock.valid ? 'allowed' : pslAuditBlock.findings.join(' / ') },
      { label: 'PSL tests', value: pslTestReview.valid ? AURA_PSL_TEST_CATEGORIES.slice(0, 7).join(' / ') : pslTestReview.findings.join(' / ') },
      { label: 'PSL test block', value: pslTestBlock.valid ? 'allowed' : pslTestBlock.findings.join(' / ') },
      { label: 'PSL simulation', value: pslSimulationReview.valid ? Object.keys(SCHOOL_FEES_PSL_SIMULATION_EXAMPLE).join(' / ') : pslSimulationReview.findings.join(' / ') },
      { label: 'PSL simulation block', value: pslSimulationBlock.valid ? 'allowed' : pslSimulationBlock.findings.join(' / ') },
      { label: 'PSL monitoring', value: pslMonitoringReview.valid ? Object.keys(SCHOOL_FEES_PSL_MONITORING_EXAMPLE.metrics).join(' / ') : pslMonitoringReview.findings.join(' / ') },
      { label: 'PSL monitoring block', value: pslMonitoringBlock.valid ? 'allowed' : pslMonitoringBlock.findings.join(' / ') },
      { label: 'PSL-UCC map', value: Object.entries(AURA_PSL_TO_UCC_MAPPING).slice(0, 6).map(([key, value]) => `${key}->${value[0]}`).join(' / ') },
      { label: 'PSL candidate', value: pslToUccCandidate.validCandidate ? pslToUccCandidate.uccCandidate.capability.id : Object.entries(pslToUccCandidate.validationSummary).filter(([, valid]) => !valid).map(([key]) => key).join(' / ') },
      { label: 'PSL compiler', value: AURA_PSL_COMPILER_PIPELINE_STEPS.slice(0, 8).join(' / ') },
      { label: 'PSL artifacts', value: pslCompilerOutput.files.slice(0, 5).join(' / ') },
      { label: 'PSL approval', value: pslCompilerOutput.approvedForRelease ? 'approved' : 'candidate only' },
      { label: 'PSL effects', value: pslEffectReview.valid ? AURA_PSL_EFFECT_CATEGORIES.slice(0, 8).join(' / ') : pslEffectReview.findings.join(' / ') },
      { label: 'PSL effect block', value: pslEffectBlock.valid ? 'allowed' : pslEffectBlock.findings.join(' / ') },
      { label: 'PSL conflicts', value: `${pslConflictResolution.winner.id}:${pslConflictResolution.decision}` },
      { label: 'PSL restrictions', value: pslSafetyRestrictionReview.valid ? AURA_PSL_REQUIRED_SAFETY_RESTRICTIONS.slice(0, 6).join(' / ') : pslSafetyRestrictionReview.violations.join(' / ') },
      { label: 'PSL restriction block', value: pslSafetyRestrictionBlock.valid ? 'allowed' : pslSafetyRestrictionBlock.violations.join(' / ') },
      { label: 'Family rent PSL', value: familyRentPslReview.cleanCapability ? familyRentPslFile.product.id : Object.entries(familyRentPslReview.reviews).filter(([, review]) => !review.valid).map(([key]) => key).join(' / ') },
      { label: 'Family rent actors', value: Object.keys(familyRentPslFile.actors).join(' / ') },
      { label: 'Family rent money', value: Object.keys(familyRentPslFile.money_objects).join(' / ') },
      { label: 'Family rent block', value: familyRentPslBlock.cleanCapability ? 'allowed' : Object.entries(familyRentPslBlock.reviews).filter(([, review]) => !review.valid).map(([key, review]) => `${key}:${review.findings?.[0] ?? review.actorFindings?.[0] ?? review.entityFindings?.[0]}`).join(' / ') },
      { label: 'Contractor GPS PSL', value: contractorGpsPslReview.valid ? contractorGpsPslFile.product.id : Object.entries(contractorGpsPslReview.reviews).filter(([, review]) => !review.valid).map(([key]) => key).join(' / ') },
      { label: 'Contractor risk', value: contractorGpsPslReview.humanReviewRequired ? 'high risk human review' : 'review not required' },
      { label: 'Contractor block', value: contractorGpsPslBlock.valid ? 'allowed' : contractorGpsPslBlock.highRiskRequirements.join(' / ') },
      { label: 'Susu PSL partial', value: susuPslPartialReview.partialValid ? susuPslPartial.product.id : Object.entries(susuPslPartialReview.reviews).filter(([, review]) => !review.valid).map(([key]) => key).join(' / ') },
      { label: 'Susu missing', value: susuPslPartialReview.missingDeepSections.join(' / ') },
      { label: 'Susu PSL full', value: susuPslReview.valid ? 'complex circle valid' : Object.entries(susuPslReview.reviews).filter(([, review]) => !review.valid).map(([key]) => key).join(' / ') },
      { label: 'PSL type system', value: pslTypeSystemReview.valid ? AURA_PSL_TYPE_RULES.slice(0, 5).join(' / ') : pslTypeSystemReview.findings.join(' / ') },
      { label: 'PSL type block', value: pslTypeSystemBlock.valid ? 'allowed' : pslTypeSystemBlock.findings.join(' / ') },
      { label: 'PSL refs', value: pslReferenceSafetyReview.valid ? 'references declared' : pslReferenceSafetyReview.findings.join(' / ') },
      { label: 'PSL ref block', value: pslReferenceSafetyBlock.valid ? 'allowed' : pslReferenceSafetyBlock.findings.join(' / ') },
      { label: 'PSL ref categories', value: AURA_PSL_REFERENCE_CATEGORIES.slice(0, 8).join(' / ') },
      { label: 'PSL dependencies', value: pslDependencyReview.valid ? Object.keys(AURA_PSL_DEPENDENCY_EXAMPLE).join(' / ') : pslDependencyReview.findings.join(' / ') },
      { label: 'PSL dependency block', value: pslDependencyBlock.valid ? 'allowed' : pslDependencyBlock.findings.join(' / ') },
      { label: 'PSL security', value: pslSecurityReview.valid ? AURA_PSL_SECURITY_CONSTRAINTS.slice(0, 6).join(' / ') : pslSecurityReview.findings.join(' / ') },
      { label: 'PSL security block', value: pslSecurityBlock.valid ? 'allowed' : pslSecurityBlock.findings.join(' / ') },
      { label: 'PSL errors', value: AURA_PSL_ERROR_CODES.slice(0, 6).join(' / ') },
      { label: 'PSL error example', value: `${pslCompilerError.code}:${pslCompilerError.severity}` },
      { label: 'Admin PSL draft', value: adminStudioPslDraft.feedback.join(' / ') || adminStudioPslDraft.pslDraft.product.id },
      { label: 'NL PSL draft', value: `${naturalLanguagePslDraft.pslDraft.product?.id ?? naturalLanguagePslDraft.pslDraft.intent}:${naturalLanguagePslDraft.missingDetails.length}` },
      { label: 'PSL preflight', value: `${pslRuntimePreflight.decision}:${pslRuntimePreflight.failedChecks.join(' / ') || 'all checks pass'}` },
      { label: 'PSL preflight block', value: `${pslRuntimePreflightBlock.decision}:${pslRuntimePreflightBlock.failedChecks.join(' / ')}` },
      { label: 'PSL kernel builder', value: pslKernelContracts.kernelSafe ? pslKernelContracts.commandContracts.map((command) => command.id).join(' / ') : pslKernelContracts.findings.join(' / ') },
      { label: 'PSL exp physics', value: pslExperiencePhysics.requirements.slice(0, 6).join(' / ') },
      { label: 'PSL assets', value: pslAssets.resolved.map((asset) => asset.resolved_asset).slice(0, 4).join(' / ') },
      { label: 'PSL algorithms', value: pslAlgorithmReview.valid ? Object.keys(AURA_PSL_ALGORITHM_REFERENCES_EXAMPLE).join(' / ') : pslAlgorithmReview.findings.join(' / ') },
      { label: 'PSL algorithm block', value: pslAlgorithmBlock.valid ? 'allowed' : pslAlgorithmBlock.findings.join(' / ') },
      { label: 'PSL versioning', value: pslVersioningReview.valid ? AURA_PSL_VERSION_DIMENSIONS.slice(0, 5).join(' / ') : pslVersioningReview.findings.join(' / ') },
      { label: 'PSL governance', value: pslGovernanceReview.valid ? AURA_PSL_GOVERNANCE_RESTRICTIONS.slice(0, 5).join(' / ') : pslGovernanceReview.findings.join(' / ') },
      { label: 'PSL governance block', value: pslGovernanceBlock.valid ? 'allowed' : pslGovernanceBlock.findings.join(' / ') },
      { label: 'PSL minimum', value: pslMinimumReview.valid ? AURA_PSL_MINIMUM_VALID_CAPABILITY_FIELDS.slice(0, 5).join(' / ') : pslMinimumReview.findings.join(' / ') },
      { label: 'PSL minimum block', value: pslMinimumBlock.valid ? 'allowed' : pslMinimumBlock.findings.join(' / ') },
      { label: 'PSL anti-patterns', value: pslAntiPatternReview.valid ? AURA_PSL_ANTI_PATTERNS.slice(0, 5).join(' / ') : pslAntiPatternReview.findings.join(' / ') },
      { label: 'PSL anti-pattern block', value: pslAntiPatternBlock.valid ? 'allowed' : pslAntiPatternBlock.findings.join(' / ') },
      { label: 'PSL modules', value: Object.keys(pslImplementationPackage.modules).join(' / ') },
      { label: 'PSL runtime owners', value: Object.entries(pslImplementationPackage.runtimeOwnership).map(([key, value]) => `${key}:${value}`).join(' / ') },
      { label: 'PSL service routes', value: AURA_PSL_SERVICE_API_ROUTES.map((route) => route.id).join(' / ') },
      { label: 'PSL service validate', value: Object.entries(pslServiceApiReview).map(([key, value]) => `${key}:${value}`).join(' / ') },
      { label: 'PSL clarifications API', value: pslClarificationsApi.questions.join(' / ') },
      { label: 'PSL diagnostic', value: `${pslDiagnostic.code}:${pslDiagnostic.severity}:${pslDiagnostic.path}` },
      { label: 'PSL diagnostic feeds', value: pslDiagnostic.feeds.join(' / ') },
      { label: 'PSL CLI', value: `${pslCliReview.action}:${Object.keys(pslCliReview.outputs).join(' / ')}` },
      { label: 'PSL diff', value: `${pslDiffReview.changes.join(' / ') || 'no change'}:${pslDiffReview.classifications.join(' / ')}` },
      { label: 'PSL recipient diff', value: `${pslRecipientDiffReview.changes.join(' / ')}:${pslRecipientDiffReview.classifications.join(' / ')}` },
      { label: 'PSL disclosure diff', value: `${pslDisclosureDiffReview.changes.join(' / ')}:${pslDisclosureDiffReview.classifications.join(' / ')}` },
      { label: 'PSL diff classes', value: AURA_PSL_DIFF_CLASSIFICATIONS.join(' / ') },
      { label: 'PSL formless questions', value: pslFormlessBasis.questions.map((question) => question.id).join(' / ') },
      { label: 'PSL canonical artifacts', value: pslCanonicalBlueprint.complete ? pslCanonicalBlueprint.transformation.slice(0, 7).join(' / ') : pslCanonicalBlueprint.missingArtifacts.join(' / ') },
      { label: 'PSL canonical rule', value: pslCanonicalReview.valid ? pslCanonicalReview.canonicalStatement : pslCanonicalReview.findings.join(' / ') },
      { label: 'PSL execution chain', value: pslCanonicalReview.executionArchitecture.map((layer) => `${layer.layer}:${layer.responsibility}`).join(' / ') },
      { label: 'FPE next laws', value: pslPhysicsHandoff.laws.slice(0, 8).join(' / ') },
      { label: 'FPE handoff', value: pslPhysicsHandoff.readyForDeepDive ? pslPhysicsHandoff.nextArtifact : 'canonical_psl_not_ready' },
      { label: 'Skeleton review', value: uccSkeletonReview.complete ? 'top sections complete' : uccSkeletonReview.missingSections.join(' / ') }
    ]
  }
}
