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
    '/products/create': { title: 'Novo Produto', icon: 'add_box' + 'storefront' },
    '/products/update': { title: 'Atualizar Produto', icon: 'add_box' + 'storefront' },
    '/fornecedores': { title: 'Fornecedores', icon: 'local_shipping' },
    '/fornecedor/create': { title: 'Fornecedores', icon: 'add_box' + 'local_shipping' },
    '/formaPagamento': { title: 'Forma Pagamento', icon: 'local_atm' },
    '/formaPagamento/create': { title: 'Forma Pagamento', icon: 'add_box' + 'local_atm' },
    // adicione outras rotas aqui
  };

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        const cleanUrl = event.urlAfterRedirects.split('?')[0].replace(/\/$/, '');
        const data = this.routeData[cleanUrl || '/'];

        if (data) {
          this.pageTitle = data.title;
          this.pageIcon = data.icon;
        } else {
          this.pageTitle = 'App';
          this.pageIcon = 'apps';
        }
      });
  }
}