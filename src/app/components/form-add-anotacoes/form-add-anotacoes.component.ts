import { Component, ElementRef, Input, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { gsap } from 'gsap';
import { CreateAnotacao } from '../../core/services/SetInsight';

@Component({
  selector: 'app-form-add-anotacoes',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './form-add-anotacoes.component.html',
  styleUrl: './form-add-anotacoes.component.scss'
})
export class FormAddAnotacoesComponent {

  @Input() pushNotificationText: string = '';
  
  constructor(private router: Router, private elementRef: ElementRef<HTMLElement>) {}

  formAddAnotacao = new FormGroup({
    anotacao: new FormControl('', [Validators.required])
  })

  elemt: any 

  async onSubmit() {
    if(this.formAddAnotacao.value.anotacao) {

      try{
        const returnNewAnotation = await CreateAnotacao.new(this.formAddAnotacao.value.anotacao)

        console.log('returnNewAnotation::', returnNewAnotation)

        this.pushNotificationText = returnNewAnotation
        
        this.startAnimationNotification()

        if(returnNewAnotation == "Salvo com sucesso!") {

          this.pushNotificationText = returnNewAnotation
          this.startAnimationNotification()

          this.formAddAnotacao.reset();
          
        }else if(returnNewAnotation == "Erro ao salvar anotação") {

          this.pushNotificationText = returnNewAnotation
          this.startAnimationNotification()
          
          
        }
        
        
      }catch(error) {
        this.pushNotificationText = "Erro ao salvar anotação..."
        this.startAnimationNotification()
        
      }
    }
  }

  async ngAfterViewInit() { 
    this.elemt = this.elementRef.nativeElement.querySelector('#snackbar')
  }

  startAnimationNotification() {
    if(this.elemt && this.pushNotificationText) {
      gsap.to(this.elemt, {
        duration: 0.3,
        opacity: 1
      })

      setTimeout(() => {
        gsap.to(this.elemt, {
          duration: 0.8,
          opacity: 0
        })
      }, 3000)
    }      
  }

}
