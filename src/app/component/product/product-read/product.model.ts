import { Fornecedor } from "../../fornecedor/fornecedor.model";

// Define a interface Product que descreve a estrutura de um objeto produto
export interface Product {
    proId?: number;
    proNome: string; // Nome do produto (obrigatório)
    proDescricao: string;
    proPrecoCusto: number | null; // Preço de custo do produto (obrigatório)
    proPrecoVenda: number | null; // Preço de venda do produto (obrigatório)
    proQuantidadeEstoque: number | null; 
    proCategoria: string;
    proCodigoBarras: string;
    fornecedor?: Fornecedor,
    proMarca: string;
    proUnidadeMedida: string;
    proStatus: string;
    proDataCadastro: Date | null;
    proDataAtualizacao: Date | null;
}