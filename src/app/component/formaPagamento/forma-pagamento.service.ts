import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormaPagamento } from './forma-pagamento-read/forma-pagamento.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormaPagamentoService {

  baseUrl = "http://localhost:8080/formapagamento"; // URL base da API

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  // Método para exibir mensagens de feedback ao usuário
  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000, // Duração da mensagem em milissegundos
      horizontalPosition: "right", // Posição horizontal da mensagem
      verticalPosition: "top" // Posição vertical da mensagem
    });
  }
  
  // Método para criar uma nova forma de pagamento
  create(formaPagamento: FormaPagamento): Observable<FormaPagamento> {
    return this.http.post<FormaPagamento>(this.baseUrl, formaPagamento);
  }

  // Método para ler todas as formas de pagamento
  read(): Observable<FormaPagamento[]> {
    return this.http.get<FormaPagamento[]>(this.baseUrl);
  }

  // Método para ler uma forma de pagamento pelo ID
  readById(id: string): Observable<FormaPagamento> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<FormaPagamento>(url);
  }

  // Método para atualizar uma forma de pagamento
  update(formaPagamento: FormaPagamento): Observable<FormaPagamento> {
    const url = `${this.baseUrl}/${formaPagamento.fpgId}`;
    return this.http.put<FormaPagamento>(url, formaPagamento);
  }

  // Método para excluir uma forma de pagamento
  delete(idFormaPagamento: number): Observable<FormaPagamento> {
    const url = `${this.baseUrl}/${idFormaPagamento}`;
    return this.http.delete<FormaPagamento>(url);
  }
}