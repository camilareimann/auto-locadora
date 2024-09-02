import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pesquisa',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss']
})
export class PesquisaComponent {
  query: string = '';
  @Output() search = new EventEmitter<string>(); 

  onSearch() {
    this.search.emit(this.query); 
  }
}