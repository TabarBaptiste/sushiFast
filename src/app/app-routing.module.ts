import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './component/detail/detail.component';
import { ProduitsComponent } from './component/produits/produits.component';
import { HomeComponent } from './component/home/home.component';
import { PanierComponent } from './component/panier/panier.component';
import { HistoriqueComponent } from './component/historique/historique.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'box-details/:id', component: DetailComponent },
  { path: 'produits', component: ProduitsComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'historique', component: HistoriqueComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
