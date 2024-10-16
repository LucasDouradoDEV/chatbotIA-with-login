import { AfterViewInit, Component } from '@angular/core';
import { LogoPrincipalComponent } from "../../components/logo-principal/logo-principal.component";
import { LogoMarcaComponent } from "../../components/logo-marca/logo-marca.component";
import { FormLoginComponent } from "../../components/form-login/form-login.component";
import { CheckLogin } from '../../core/helpers/CheckLogin';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LogoPrincipalComponent, LogoMarcaComponent, FormLoginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements AfterViewInit {

  async ngAfterViewInit() {
    const login = await CheckLogin.getToken()

    if(login){
      window.location.replace('/')
    }
  }  

}
