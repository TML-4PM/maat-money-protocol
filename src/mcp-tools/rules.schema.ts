export interface TxRulePattern { descriptionContains?: string; merchantName?: string; mcc?: string; minAmount?: number; maxAmount?: number; }
export interface TxRuleResult { ledgerAccountCode: string; taxTag?: string; gstClass?: 'INPUT'|'OUTPUT'|'NONE'; }
export interface TxRule { id: string; pattern: TxRulePattern; result: TxRuleResult; }
