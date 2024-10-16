import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckLogin } from './core/helpers/CheckLogin';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'application';

  async ngAfterViewInit() {
    // const login = await CheckLogin.getToken()
  }
}
