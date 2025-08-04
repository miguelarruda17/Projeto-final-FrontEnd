// Definição da interface Fornecedor
export interface Cliente {
    // Propriedade opcional 'forId' do tipo number
    cliId?: number;

    // Propriedade obrigatória 'forNomeFantasia' do tipo string
    cliNome: string;

    // Propriedade obrigatória 'forRazaoSocial' do tipo string
    cliCpf: string

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