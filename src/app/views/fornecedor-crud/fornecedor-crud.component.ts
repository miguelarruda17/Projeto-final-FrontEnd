// Importa os módulos necessários do Angular
import { Component, OnInit } from '@angular/core'; // Importa Component e OnInit
import { Router } from '@angular/router'; // Importa Router para navegação

// Decorador que define o componente
@Component({
  selector: 'app-fornecedor-crud', // Seletor do componente
  templateUrl: './fornecedor-crud.component.html', // Caminho para o template HTML do componente
  styleUrls: ['./fornecedor-crud.component.css'] // Caminho para os estilos CSS do componente
})

// Classe que representa o componente FornecedorCrud
export class FornecedorCrudComponent implements OnInit {

  // Construtor que injeta o serviço Router
  constructor(private router: Router) { }

  // Método do ciclo de vida que é chamado após a inicialização do componente
  ngOnInit(): void {
    // Aqui você pode adicionar lógica que deve ser executada quando o componente é inicializado
  }

  // Método para navegar para a página de criação de fornecedor
  navigateToFornecedorCreate(): void {
    this.router.navigate(['/fornecedor/create']); // Navega para a rota de criação de fornecedor
  }
}