// Definição da interface Fornecedor
export interface Fornecedor {
    // Propriedade opcional 'forId' do tipo number
    forId?: number;

    // Propriedade obrigatória 'forNomeFantasia' do tipo string
    forNomeFantasia: string;

    // Propriedade obrigatória 'forCnpj' do tipo number
    forCnpj: number | null;

    // Propriedade obrigatória 'forRazaoSocial' do tipo string
    forRazaoSocial: string;
}