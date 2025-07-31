// Importa o HttpClient para fazer requisições HTTP
import { HttpClient } from '@angular/common/http';
// Importa o Injectable para permitir a injeção de dependências
import { Injectable } from '@angular/core';
// Importa o MatSnackBar para exibir mensagens de feedback ao usuário
import { MatSnackBar } from '@angular/material/snack-bar';
// Importa a interface Cliente que define a estrutura do objeto cliente
import { Cliente } from './cliente.model';
// Importa Observable do RxJS para trabalhar com programação reativa
import { Observable } from 'rxjs';

// Decorador Injectable que permite que o serviço seja injetado em outros componentes ou serviços
@Injectable({
  providedIn: 'root' // O serviço é fornecido na raiz da aplicação
})

export class ClienteService {

 // URL base para as requisições relacionadas a fornecedores
   baseUrl = "http://localhost:8080/clientes";
 
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
 
   // Método para criar um novo cliente
   create(fornecedor: Cliente): Observable<Cliente> {
     // Faz uma requisição POST para a URL base, enviando o objeto cliente
     return this.http.post<Cliente>(this.baseUrl, fornecedor);
   }
 
   // Método para ler todos os fornecedores
   read(): Observable<Cliente[]> {
     // Faz uma requisição GET para a URL base e retorna um array de clientes
     return this.http.get<Cliente[]>(this.baseUrl);
   }
 
   // Método para ler um cliente específico pelo ID
   readById(id: string): Observable<Cliente> {
     // Constrói a URL para a requisição GET usando o ID do cliente
     const url = `${this.baseUrl}/${id}`;
     // Faz a requisição GET e retorna um único cliente
     return this.http.get<Cliente>(url);
   }
 
   // Método para atualizar um cliente existente
   update(cliente: Cliente): Observable<Cliente> {
     // Constrói a URL para a requisição PUT usando o ID do cliente
     const url = `${this.baseUrl}/${cliente.cliId}`;
     // Faz a requisição PUT para atualizar o cliente e retorna o cliente atualizado
     return this.http.put<Cliente>(url, cliente);
   }
 
   // Método para excluir um fornecedor pelo ID
   delete(idCliente: number): Observable<Cliente> {
     // Constrói a URL para a requisição DELETE usando o ID do cliente
     const url = `${this.baseUrl}/${idCliente}`;
     // Faz a requisição DELETE e retorna o cliente excluído
     return this.http.delete<Cliente>(url);
   }
 }