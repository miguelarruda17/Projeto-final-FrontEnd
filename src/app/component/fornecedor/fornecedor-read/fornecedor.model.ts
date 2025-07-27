// Definição da interface Fornecedor
export interface Fornecedor {
    // Propriedade opcional 'forId' do tipo number
    forId?: number;

    // Propriedade obrigatória 'forNomeFantasia' do tipo string
    forNomeFantasia: string;

    // Propriedade obrigatória 'forRazaoSocial' do tipo string
    forRazaoSocial: string;

    // Propriedade obrigatória 'forCnpj' do tipo number
    forCnpj: String;

    forStatus: string;

    //Contato
    conCelular: string;

    conTelefoneComercial: string;

    conEmail: string;

    //endereço
    endRua: string;

    endNumero: string;

    endCidade: string;

    endCep: string;

    endEstado: string;

}