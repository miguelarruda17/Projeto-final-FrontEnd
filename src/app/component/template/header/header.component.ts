// Importa o módulo Component do Angular
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

// Decorador que define o componente
@Component({
  selector: 'app-header', // Seletor do componente, usado para referenciá-lo em templates
  templateUrl: './header.component.html', // Caminho para o template HTML do componente
  styleUrls: ['./header.component.css'] // Caminho para os estilos CSS do componente
})
// Classe que representa o componente Header
export class HeaderComponent {
  // O corpo da classe pode conter propriedades e métodos
   pageTitle = 'Inicio';
  pageIcon = 'home';

  routeData: Record<string, { title: string, icon: string }> = {
    '/': { title: 'Inicio', icon: 'home' },
    '/products': { title: 'Produtos', icon: 'storefront' },
    '/products/create': { title: 'Novo Produto', icon: 'add_box' + 'storefront'},
    '/products/update/:id': { title: 'Editar Produto', icon: 'edit' + 'storefront'},
    '/products/delete/:id': { title: 'Excluir Produto', icon: 'delete' + 'storefront'},
    '/fornecedores': { title: 'Fornecedores', icon: 'local_shipping'},
    '/fornecedor/create': { title: 'Novo Fornecedor', icon: 'add_box' + 'local_shipping'},
    '/fornecedor/update/:id': { title: 'Editar Fornecedor', icon: 'edit' + 'local_shipping'},
    '/fornecedor/delete/:id': { title: 'Excluir Fornecedor', icon: 'delete' + 'local_shipping'},
    '/formaPagamento': { title: 'Formas Pagamento', icon: 'local_atm'},
    '/formaPagamento/create': { title: 'Nova Forma Pagamento', icon: 'add_box' + 'local_atm'},
    '/formaPagamento/update/:id': { title: 'Editar Forma Pagamento', icon: 'edit' + 'local_atm'},
    '/formaPagamento/delete/:id': { title: 'Excluir Forma Pagamento', icon: 'delete' + 'local_atm'},
    '/clientes': {title: 'Clientes', icon: 'person'},
    '/cliente/create': {title: 'Novo Cliente', icon: 'add_box' + 'person'},
    '/cliente/update/:id': {title: 'Editar Cliente', icon: 'edit' + 'person'},
    '/cliente/delete/:id': {title: 'Excluir Cliente', icon: 'delete' + 'person'}
    // adicione outras rotas aqui
  };

  constructor(private router: Router) {
    /**
     * Ouvimos quando a rota muda (NavigationEnd)
     * Quando isso acontece, verificamos qual título/ícone mostrar.
     */
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        // Pega a URL limpa (sem query params, sem barra no final)
        const cleanUrl = event.urlAfterRedirects.split('?')[0].replace(/\/$/, '');

        // Tenta encontrar a rota exata
        let data = this.routeData[cleanUrl || '/'];

        // Se não encontrou rota exata, verifica se é uma rota com parâmetro (:id)
        if (!data) {
          const matchedKey = Object.keys(this.routeData).find((key) => {
            // Se a rota cadastrada tem :id, vamos comparar só a parte antes dele
            if (key.includes('/:')) {
              const base = key.split('/:')[0]; 
              return cleanUrl.startsWith(base);
            }
            return false;
          });

          // Se achou a rota genérica com :id, pega o título/ícone dela
          if (matchedKey) {
            data = this.routeData[matchedKey];
          }
        }

        // Atualiza o header (ou coloca padrão se não achar)
        if (data) {
          this.pageTitle = data.title;
          this.pageIcon = data.icon;
        } else {
          this.pageTitle = 'ERROR';
          this.pageIcon = 'apps';
        }
      });
  }
}