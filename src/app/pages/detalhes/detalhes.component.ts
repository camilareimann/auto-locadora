import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutomoveisService } from '../../services/automoveis.service';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {
  automovel: any;
  favoritos: any[] = [];

  constructor(private route: ActivatedRoute, private automoveisService: AutomoveisService) { }

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.automoveisService.getById(id).subscribe(data => {
      this.automovel = data;
      this.favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
      this.automovel.favorito = this.favoritos.some(fav => fav.id === this.automovel.id);
    });
  }

  favoritar(): void {
    if (this.automovel.favorito) {
      this.favoritos = this.favoritos.filter(fav => fav.id !== this.automovel.id);
      alert(`${this.automovel.name} removido dos favoritos.`);
    } else {
      this.favoritos.push(this.automovel);
      alert(`${this.automovel.name} adicionado aos favoritos.`);
    }
    localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
    this.automovel.favorito = !this.automovel.favorito;
  }
}