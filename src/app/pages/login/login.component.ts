import { AfterViewInit, Component } from '@angular/core';
import { LogoSenaiComponent } from "../../components/logo-senai/logo-senai.component";
import { LogoSummitComponent } from "../../components/logo-summit/logo-summit.component";
import { FormLoginComponent } from "../../components/form-login/form-login.component";
import { CheckLogin } from '../../core/helpers/CheckLogin';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LogoSenaiComponent, LogoSummitComponent, FormLoginComponent],
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
