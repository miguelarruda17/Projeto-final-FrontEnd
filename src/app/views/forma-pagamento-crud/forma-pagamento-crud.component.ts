// Importa os módulos necessários do Angular
import { Component, OnInit } from '@angular/core'; // Importa Component e OnInit
import { Router } from '@angular/router'; // Importa Router para navegação

// Decorador que define o componente
@Component({
  selector: 'app-forma-pagamento-crud', // Seletor do componente
  templateUrl: './forma-pagamento-crud.component.html', // Caminho para o template HTML do componente
  styleUrls: ['./forma-pagamento-crud.component.css'] // Caminho para os estilos CSS do componente
})

// Classe que representa o componente FormaPagamentoCrud
export class FormaPagamentoCrudComponent implements OnInit {

  // Construtor que injeta o serviço Router
  constructor(private router: Router) { }

  // Método do ciclo de vida que é chamado após a inicialização do componente
  ngOnInit(): void {
    // Aqui você pode adicionar lógica que deve ser executada quando o componente é inicializado
  }

  // Método para navegar para a página de criação de forma de pagamento
  navigateToFormaPagamentoCreate(): void {
    this.router.navigate(['/formaPagamento/create']); // Navega para a rota de criação de forma de pagamento
  }
}