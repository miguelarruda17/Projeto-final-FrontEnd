// Importa os módulos necessários do Angular
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // Importa Observable para trabalhar com dados assíncronos
import { Product } from './product-read/product.model'; // Importa a interface Product
import { HttpClient } from '@angular/common/http'; // Importa HttpClient para fazer requisições HTTP
import { MatSnackBar } from '@angular/material/snack-bar'; // Importa MatSnackBar para exibir mensagens

// Decorador que marca a classe como um serviço injetável
@Injectable({
  providedIn: 'root' // O serviço é fornecido na raiz da aplicação
})
export class ProductService {

  // URL base da API para operações com produtos
  baseUrl = "http://localhost:8080/produtos";

  // Construtor que injeta o MatSnackBar e HttpClient
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  // Método para exibir uma mensagem de notificação
  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000, // Duração da mensagem em milissegundos
      horizontalPosition: "right", // Posição horizontal da mensagem
      verticalPosition: "top" // Posição vertical da mensagem
    });
  }

  // Método para criar um novo produto
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product); // Faz uma requisição POST para criar o produto
  }

  // Método para ler todos os produtos
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl); // Faz uma requisição GET para obter a lista de produtos
  }

  // Método para ler um produto específico pelo ID
  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`; // Constrói a URL para o produto específico
    return this.http.get<Product>(url); // Faz uma requisição GET para obter o produto
  }

  // Método para atualizar um produto existente
  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.proId}`; // Constrói a URL para o produto a ser atualizado
    return this.http.put<Product>(url, product); // Faz uma requisição PUT para atualizar o produto
  }

  // Método para excluir um produto pelo ID
  delete(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`; // Constrói a URL para o produto a ser excluído
    return this.http.delete<Product>(url); // Faz uma requisição DELETE para excluir o produto
  }
}