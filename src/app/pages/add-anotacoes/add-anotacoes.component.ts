import { LogoSummitComponent } from '../../components/logo-summit/logo-summit.component';
import { LogoSenaiComponent } from '../../components/logo-senai/logo-senai.component';
import { Component } from "@angular/core";
import { FormAddAnotacoesComponent } from '../../components/form-add-anotacoes/form-add-anotacoes.component';

@Component({
  selector: 'app-add-anotacoes',
  standalone: true,
  imports: [FormAddAnotacoesComponent,LogoSummitComponent, LogoSenaiComponent],
  templateUrl: './add-anotacoes.component.html',
  styleUrl: './add-anotacoes.component.scss'
})
export class AddAnotacoesComponent {

}
