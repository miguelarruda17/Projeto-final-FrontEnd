export interface FormaPagamento {
    fpgId?: number; // ID da forma de pagamento (opcional)
    fpgFormato: string; // Formato da forma de pagamento (obrigatório)
    fpgTipo: string; // Tipo da forma de pagamento (obrigatório)
}