import { Component, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthLogin } from '../../core/auth/Auth';
import { gsap } from 'gsap';
import { CheckDate } from '../../core/helpers/dateEvent';



@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.scss'
})

export class FormLoginComponent implements AfterViewInit {

  @Input() pushNotificationText: string = '';

  constructor(private router: Router, private elementRef: ElementRef<HTMLElement>) {}

  formLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  })

  elemt: any 

  async onSubmit() {
    if(this.formLogin.value.email) {
      const checkLogin = await AuthLogin.Login(this.formLogin.value.email)

      if(checkLogin == "Logado com sucesso") {
        let eventToday = CheckDate.eventDate()

        if(eventToday != "Before") {
          this.router.navigate(['/']);
        }else{
          this.router.navigate(['/cronograma']);
        }

        this.pushNotificationText = checkLogin
      }else {

        this.pushNotificationText = checkLogin
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
