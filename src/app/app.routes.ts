import { Routes } from '@angular/router';
import { ListagemComponent } from './pages/listagem/listagem.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component'; 

export const routes: Routes = [
    { path: '', redirectTo: 'listagem', pathMatch: 'full' },
    { path: 'listagem', component: ListagemComponent },
    { path: 'detalhes/:id', component: DetalhesComponent },
    { path: 'favoritos', component: FavoritosComponent} 
];