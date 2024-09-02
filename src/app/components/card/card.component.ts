import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() automovel: any; // Recebe o automóvel como input
  @Output() favoritar = new EventEmitter<void>(); // Emite um evento quando o botão é clicado

  onFavoritar() {
    this.favoritar.emit(); // Emite o evento
  }
}