// Importa o módulo Component do Angular
import { Component } from '@angular/core';

// Decorador que define o componente
@Component({
  selector: 'app-nav', // Seletor do componente, usado para referenciá-lo em templates
  templateUrl: './nav.component.html', // Caminho para o template HTML do componente
  styleUrls: ['./nav.component.css'] // Caminho para os estilos CSS do componente
})
// Classe que representa o componente Nav
export class NavComponent {
  // O corpo da classe pode conter propriedades e métodos, mas está vazio neste exemplo
}