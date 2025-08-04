import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './component/product/product-create/product-create.component';
import { FornecedorCrudComponent } from './views/fornecedor-crud/fornecedor-crud.component';
import { FornecedorCreateComponent } from './component/fornecedor/fornecedor-create/fornecedor-create.component';
import { FormaPagamentoCrudComponent } from './views/forma-pagamento-crud/forma-pagamento-crud.component';
import { FormaPagamentoCreateComponent } from './component/formaPagamento/forma-pagamento-create/forma-pagamento-create.component';
import { ProductUpdateComponent } from './component/product/product-update/product-update.component';
import { FornecedorUpdateComponent } from './component/fornecedor/fornecedor-update/fornecedor-update.component';
import { FormaPagamentoUpdateComponent } from './component/formaPagamento/forma-pagamento-update/forma-pagamento-update.component';
import { ProductDeleteComponent } from './component/product/product-delete/product-delete.component';
import { FornecedorDeleteComponent } from './component/fornecedor/fornecedor-delete/fornecedor-delete.component';
import { FormaPagamentoDeleteComponent } from './component/formaPagamento/forma-pagamento-delete/forma-pagamento-delete.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { ClienteCreateComponent } from './component/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './component/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './component/cliente/cliente-delete/cliente-delete.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
},
{
  path: "products",
  component: ProductCrudComponent
},
{
  path: "products/create",
  component: ProductCreateComponent
},
{
  path: "fornecedores",
  component: FornecedorCrudComponent
},
{
  path: "fornecedor/create",
  component: FornecedorCreateComponent 
},
{
  path: "formaPagamento",
  component: FormaPagamentoCrudComponent
},
{
  path: "formaPagamento/create",
  component: FormaPagamentoCreateComponent
},
{
  path: "products/update/:id",
  component: ProductUpdateComponent
},
{
  path: "fornecedor/update/:id",
  component:FornecedorUpdateComponent
},
{
 path: "formaPagamento/update/:id",
 component:FormaPagamentoUpdateComponent
},
{
  path: "products/delete/:proId",
  component:ProductDeleteComponent
},
{
  path: "fornecedor/delete/:forId", 
  component: FornecedorDeleteComponent
},
{
  path: "formaPagamento/delete/:fpgId", 
  component: FormaPagamentoDeleteComponent
},
{
  path: "clientes", 
  component: ClienteCrudComponent
},
{
  path: "cliente/create",
  component: ClienteCreateComponent
},
{
  path: "cliente/update/:id",
  component: ClienteUpdateComponent
},
{
  path: "cliente/delete/:id",
  component:ClienteDeleteComponent

}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
