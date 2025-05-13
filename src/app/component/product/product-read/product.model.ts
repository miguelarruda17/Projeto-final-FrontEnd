// Define a interface Product que descreve a estrutura de um objeto produto
export interface Product {
    proId?: number; // ID do produto (opcional)
    proNome: string; // Nome do produto (obrigatório)
    proPrecoCusto: number | null; // Preço de custo do produto (obrigatório)
    proPrecoVenda: number | null; // Preço de venda do produto (obrigatório)
}