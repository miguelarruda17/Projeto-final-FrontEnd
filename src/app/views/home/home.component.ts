// Importa o módulo Component do Angular
import { Component } from '@angular/core';

// Decorador que define o componente
@Component({
  selector: 'app-home', // Seletor do componente, usado para referenciá-lo em templates
  templateUrl: './home.component.html', // Caminho para o template HTML do componente
  styleUrls: ['./home.component.css'] // Caminho para os estilos CSS do componente
})
// Classe que representa o componente Home
export class HomeComponent {
  // O corpo da classe pode conter propriedades e métodos, mas está vazio neste exemplo
}