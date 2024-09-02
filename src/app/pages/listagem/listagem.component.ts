import { Component, OnInit } from '@angular/core';
import { AutomoveisService } from '../../services/automoveis.service';
import { CommonModule } from '@angular/common'; // Adicione esta importação
import { CabecalhoComponent } from '../../components/cabecalho/cabecalho.component';
import { RodapeComponent } from '../../components/rodape/rodape.component';
import { PesquisaComponent } from '../../components/pesquisa/pesquisa.component';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [CommonModule, CabecalhoComponent, RodapeComponent, PesquisaComponent, CardComponent],
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {
  automoveis: any[] = [];
  favoritos: any[] = [];
  filteredAutomoveis: any[] = []; // Para armazenar automóveis filtrados

  constructor(private automoveisService: AutomoveisService) { }

  ngOnInit(): void {
    this.automoveisService.listAll().subscribe(data => {
      this.automoveis = data;
      this.filteredAutomoveis = data; // Inicialmente, todos os automóveis estão filtrados
      this.favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
      this.automoveis.forEach(automovel => {
        automovel.favorito = this.favoritos.some(fav => fav.id === automovel.id);
      });
    });
  }

  favoritar(automovel: any): void {
    if (automovel.favorito) {
      this.favoritos = this.favoritos.filter(fav => fav.id !== automovel.id);
    } else {
      this.favoritos.push(automovel);
    }
    automovel.favorito = !automovel.favorito;
    localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
  }

  filtrarAutomoveis(query: string): void {
    if (!query) {
      this.filteredAutomoveis = this.automoveis;
    } else {
      this.filteredAutomoveis = this.automoveis.filter(automovel =>
        automovel.name.toLowerCase().includes(query.toLowerCase())
      ); 
    }
  }
}