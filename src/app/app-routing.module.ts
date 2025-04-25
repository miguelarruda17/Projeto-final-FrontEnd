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
}
,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
