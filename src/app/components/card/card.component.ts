import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() title: string = '';
  @Input() lead: string = '';
  @Input() status: string = '';
  @Input() icon: string = '';
  @Input() url: string = '';

  
}
