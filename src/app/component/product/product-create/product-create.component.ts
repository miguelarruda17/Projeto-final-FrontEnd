// Importa os módulos necessários do Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Importa a interface Product que define a estrutura do objeto produto
import { Product } from '../product-read/product.model';
// Importa o serviço ProductService para gerenciar operações relacionadas a produtos
import { ProductService } from '../product.service';
import { Fornecedor } from '../../fornecedor/fornecedor-read/fornecedor.model';
import { FornecedorService } from '../../fornecedor/fornecedor.service';


// Decorador que define o componente
@Component({
  selector: 'app-product-create', // Seletor do componente
  templateUrl: './product-create.component.html', // Caminho para o template HTML do componente
  styleUrls: ['./product-create.component.css'] // Caminho para os estilos CSS do componente
})
export class ProductCreateComponent implements OnInit {

  // Inicializa um objeto product com propriedades padrão
  product: Product = {
    proNome: '', // Nome do produto
    proDescricao: '',
    proPrecoCusto: null, // Preço de custo do produto
    proPrecoVenda: null, // Preço de venda do produto
    proQuantidadeEstoque: null,
    proCategoria: '',
    proCodigoBarras: '',
    fornecedor: undefined,
    proMarca: '',
    proUnidadeMedida: '',
    proStatus: '',
    proDataCadastro: new Date(),
    proDataAtualizacao: new Date(),
  }

  forArray: Fornecedor[] = [];

  // Construtor que injeta o ProductService e o Router
  constructor(private productService: ProductService, private fornecedorService: FornecedorService, private router: Router) { }
 
  // Método que é chamado quando o componente é inicializado
  ngOnInit(): void {
    // Pode ser utilizado para inicializar dados ou fazer chamadas de serviço

      this.fornecedorService.read().subscribe((dados: Fornecedor[]) => {
    this.forArray = dados.filter(fornecedores => fornecedores.forStatus === 'ATIVO');
   });

  }

  // Método para criar um novo produto
  createProduct(): void {
    // Chama o método create do ProductService e passa o objeto product
    this.productService.create(this.prepararPayload()).subscribe(() => {
      // Exibe uma mensagem de sucesso após a criação do produto
      this.productService.showMessage('Produto criado!');
      // Navega para a lista de produtos após a criação
      this.router.navigate(['/products']);
    });
  }

  // Método para cancelar a operação e voltar à lista de produtos
  cancel(): void {
    // Navega para a lista de produtos
    this.router.navigate(['/products']);
  }

// Prepara o payload para o backend (formato compatível com LocalDateTime)
prepararPayload(): any {
  return {
    ...this.product,
    proDataCadastro: this.product.proDataCadastro
      ? this.product.proDataCadastro.toISOString().slice(0, 19) // yyyy-MM-ddTHH:mm:ss
      : null
  };
}

  
}


