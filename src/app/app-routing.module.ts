import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';

const routes: Routes = [
{path:'',component:TitleComponent, pathMatch:'full'},
{path:'portfolio', component: CardComponent, pathMatch:'prefix'},
{path:'**',redirectTo:''}
];
/**
 * redirectTo
 * rota coringa, caso o usuario digite uma rota que não existe,
 *  ele redireciona para uma pagina de não encontrado
 *  ou como nesse exemplo para a pagina inicial
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
