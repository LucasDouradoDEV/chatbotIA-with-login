import { Component } from '@angular/core';
import { FormSignupComponent } from "../../components/form-signup/form-signup.component";
import { LogoMarcaComponent } from '../../components/logo-marca/logo-marca.component';
import { LogoPrincipalComponent } from '../../components/logo-principal/logo-principal.component';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormSignupComponent,LogoMarcaComponent, LogoPrincipalComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

}
