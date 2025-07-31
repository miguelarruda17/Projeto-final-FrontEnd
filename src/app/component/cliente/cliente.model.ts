// Definição da interface Cliente
export interface Cliente {
    // Propriedade opcional 'forId' do tipo number
    cliId?: number;

    // Propriedade obrigatória 'cliNome' do tipo string
    cliNome: string;

    // Propriedade obrigatória 'cliCpf' do tipo string
    cliCpf: String;

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