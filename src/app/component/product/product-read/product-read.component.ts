// Importa os módulos necessários do Angular
import { Component } from '@angular/core';
// Importa a interface Product que define a estrutura do objeto produto
import { Product } from './product.model';
// Importa o serviço ProductService para gerenciar operações relacionadas a produtos
import { ProductService } from '../product.service';

// Decorador que define o componente
@Component({
  selector: 'app-product-read', // Seletor do componente
  templateUrl: './product-read.component.html', // Caminho para o template HTML do componente
  styleUrls: ['./product-read.component.css'] // Caminho para os estilos CSS do componente
})
export class ProductReadComponent {

  // Declaração da variável products que armazenará a lista de produtos
  products!: Product[];
  // Define as colunas que serão exibidas na tabela
  displayedColumns = ['proId', 'proNome', 'proPrecoCusto', 'proPrecoVenda', 'action'];

  // Construtor que injeta o ProductService
  constructor(private productService: ProductService) { }

  // Método que é chamado quando o componente é inicializado
  ngOnInit(): void {
    // Chama o método read do ProductService para obter a lista de produtos
    this.productService.read().subscribe(products => {
      this.products = products; // Armazena a lista de produtos na variável products
      console.log(products); // Exibe a lista de produtos no console para depuração
    });
  }
}