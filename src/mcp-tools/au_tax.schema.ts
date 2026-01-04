export interface BasInput { periodStart: string; periodEnd: string; businessAbn: string; gstMethod: 'CASH'|'ACCRUAL'; }
export interface BasOutput { G1: number; G2: number; G3: number; G10: number; G11: number; A1: number; B1: number; paygW: number; paygI: number; explanation: string; }
