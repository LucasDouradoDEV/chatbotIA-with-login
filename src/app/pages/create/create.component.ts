import { Component } from '@angular/core';
import { FormSignupComponent } from "../../components/form-signup/form-signup.component";
import { LogoSummitComponent } from '../../components/logo-summit/logo-summit.component';
import { LogoSenaiComponent } from '../../components/logo-senai/logo-senai.component';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormSignupComponent,LogoSummitComponent, LogoSenaiComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

}
