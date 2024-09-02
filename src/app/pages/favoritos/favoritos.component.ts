import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CabecalhoComponent } from '../../components/cabecalho/cabecalho.component';
import { RodapeComponent } from '../../components/rodape/rodape.component';
import { PesquisaComponent } from '../../components/pesquisa/pesquisa.component';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule, CabecalhoComponent, RodapeComponent, PesquisaComponent, CardComponent],
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {
  favoritos: any[] = [];

  ngOnInit(): void {
    this.loadFavoritos();
  }

  loadFavoritos(): void {
    this.favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
  }
}