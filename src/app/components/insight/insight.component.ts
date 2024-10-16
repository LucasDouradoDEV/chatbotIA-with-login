import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-insight',
  standalone: true,
  imports: [],
  templateUrl: './insight.component.html',
  styleUrl: './insight.component.scss'
})
export class InsightComponent {
  @Input() title: string = '';
  @Input() lead: string = '';
  @Input() horario: string = '';
}
