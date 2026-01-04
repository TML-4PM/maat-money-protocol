export interface LedgerAccount { id: string; code: string; name: string; type: 'ASSET'|'LIAB'|'EQUITY'|'INCOME'|'EXPENSE'; taxRelevant: boolean; gstClass: 'INPUT'|'OUTPUT'|'NONE'; }
export interface LedgerEntry { id: string; date: string; debitAccountCode: string; creditAccountCode: string; amount: number; currency: string; bankTransactionId?: string; narration?: string; }
