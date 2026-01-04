export interface BankInstitution { id: string; name: string; supportsCdr: boolean; }
export interface BankAccount { id: string; institutionId: string; displayName: string; type: string; currency: string; externalId: string; isActive: boolean; }
export interface BankTransaction { id: string; bankAccountId: string; externalTxId: string; postedAt: string; amount: number; currency: string; description: string; merchantName?: string; merchantCategoryCode?: string; counterpartyBsb?: string; counterpartyAccount?: string; type: string; rawJson?: any; }
