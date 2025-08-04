import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  clientes: Cliente = {
    
    //cliente//
    cliNome: '',
    cliCpf: '',
    
    //contato//
    conCelular: '',
    conTelefoneComercial: '',
    conEmail: '',

    //endereço//
    endRua: '',
    endNumero: '',
    endCidade: '',
    endCep: '',
    endEstado: '',

  };

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
    // Método chamado ao inicializar o componente
  }

  createCliente(): void {
    // Método para criar um novo fornecedor
    this.clienteService.create(this.clientes).subscribe(() => {
      this.clienteService.showMessage('Cliente Criado!'); // Exibe mensagem de sucesso
      this.router.navigate(['/clientes']); // Redireciona para a lista de fornecedores
    });
  }

  cancel(): void {
    // Método para cancelar a operação e redirecionar
    this.router.navigate(['/clientes']); // Redireciona para a lista de fornecedores
  }
}
