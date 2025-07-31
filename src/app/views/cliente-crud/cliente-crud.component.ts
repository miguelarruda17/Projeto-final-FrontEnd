// Importa os módulos necessários do Angular
import { Component, OnInit } from '@angular/core'; // Importa Component e OnInit
import { Router } from '@angular/router'; // Importa Router para navegação

@Component({
  selector: 'app-cliente-crud',
  templateUrl: './cliente-crud.component.html',
  styleUrls: ['./cliente-crud.component.css']
})
export class ClienteCrudComponent implements OnInit {

// Construtor que injeta o serviço Router
  constructor(private router: Router) { }

  // Método do ciclo de vida que é chamado após a inicialização do componente
  ngOnInit(): void {
    // Aqui você pode adicionar lógica que deve ser executada quando o componente é inicializado
  }

  // Método para navegar para a página de criação de cliente
  navigateToClienteCreate(): void {
    this.router.navigate(['/cliente/create']); // Navega para a rota de criação de cliente
  }

}