// Importa o HttpClient para fazer requisições HTTP
import { HttpClient } from '@angular/common/http';
// Importa o Injectable para permitir a injeção de dependências
import { Injectable } from '@angular/core';
// Importa o MatSnackBar para exibir mensagens de feedback ao usuário
import { MatSnackBar } from '@angular/material/snack-bar';
// Importa a interface Fornecedor que define a estrutura do objeto fornecedor
import { Fornecedor } from './fornecedor.model';
// Importa Observable do RxJS para trabalhar com programação reativa
import { Observable } from 'rxjs';

// Decorador Injectable que permite que o serviço seja injetado em outros componentes ou serviços
@Injectable({
  providedIn: 'root' // O serviço é fornecido na raiz da aplicação
})
export class FornecedorService {

  // URL base para as requisições relacionadas a fornecedores
  baseUrl = "http://localhost:8080/fornecedor";

  // Construtor que injeta o MatSnackBar e o HttpClient
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  // Método para exibir uma mensagem de feedback ao usuário
  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000, // Duração da mensagem em milissegundos
      horizontalPosition: "right", // Posição horizontal da mensagem
      verticalPosition: "top" // Posição vertical da mensagem
    });
  }

  // Método para criar um novo fornecedor
  create(fornecedor: Fornecedor): Observable<Fornecedor> {
    // Faz uma requisição POST para a URL base, enviando o objeto fornecedor
    return this.http.post<Fornecedor>(this.baseUrl, fornecedor);
  }

  // Método para ler todos os fornecedores
  read(): Observable<Fornecedor[]> {
    // Faz uma requisição GET para a URL base e retorna um array de fornecedores
    return this.http.get<Fornecedor[]>(this.baseUrl);
  }

  // Método para ler um fornecedor específico pelo ID
  readById(id: string): Observable<Fornecedor> {
    // Constrói a URL para a requisição GET usando o ID do fornecedor
    const url = `${this.baseUrl}/${id}`;
    // Faz a requisição GET e retorna um único fornecedor
    return this.http.get<Fornecedor>(url);
  }

  // Método para atualizar um fornecedor existente
  update(fornecedor: Fornecedor): Observable<Fornecedor> {
    // Constrói a URL para a requisição PUT usando o ID do fornecedor
    const url = `${this.baseUrl}/${fornecedor.forId}`;
    // Faz a requisição PUT para atualizar o fornecedor e retorna o fornecedor atualizado
    return this.http.put<Fornecedor>(url, fornecedor);
  }

  // Método para excluir um fornecedor pelo ID
  delete(idFornecedor: number): Observable<Fornecedor> {
    // Constrói a URL para a requisição DELETE usando o ID do fornecedor
    const url = `${this.baseUrl}/${idFornecedor}`;
    // Faz a requisição DELETE e retorna o fornecedor excluído
    return this.http.delete<Fornecedor>(url);
  }
}