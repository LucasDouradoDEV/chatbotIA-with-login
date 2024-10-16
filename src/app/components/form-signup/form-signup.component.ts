import { Component, ElementRef, Input, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { gsap } from 'gsap';
import { CreateUser } from '../../core/services/CreateUser';
import { LocalStorageApp } from '../../core/utils/LocalStorage';

@Component({
  selector: 'app-form-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './form-signup.component.html',
  styleUrl: './form-signup.component.scss'
})
export class FormSignupComponent implements AfterViewInit  {

  @Input() pushNotificationText: string = '';
  
  constructor(private router: Router, private elementRef: ElementRef<HTMLElement>) {}

  formSignUp = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  })

  elemt: any 

  async onSubmit() {
    if(this.formSignUp.value.nome && this.formSignUp.value.email) {

      try{
        const returnNewUser = await CreateUser.new(this.formSignUp.value.nome, this.formSignUp.value.email)

        console.log('returnNewUser::', returnNewUser)

        this.pushNotificationText = returnNewUser
        
        this.startAnimationNotification()

        if(returnNewUser == "Criado com sucesso") {

          setTimeout(() => {
            LocalStorageApp.deleteLocalStorage();
            window.location.replace('/login')
          }, 2500)
        }else if(returnNewUser == "E-mail já cadastrado") {

          this.pushNotificationText = returnNewUser
          this.startAnimationNotification()
          
          setTimeout(() => {
            LocalStorageApp.deleteLocalStorage();
            window.location.replace('/login')
          }, 2500)
        }
        
        
      }catch(error) {
        this.pushNotificationText = "Erro ao criar usuário..."
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
