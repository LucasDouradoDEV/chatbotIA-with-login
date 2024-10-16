import { NgFor } from '@angular/common';
import { Component, ElementRef, Input, AfterViewInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import gsap from 'gsap';
import { GetChat } from '../../core/helpers/getChat';
import { ChatInteractive } from '../../core/services/ChatInteractive';
import { GetChatId } from '../../core/helpers/getChatId';
import { GetUser } from '../../core/utils/getUser';
import { LocalStorageApp } from '../../core/utils/LocalStorage';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgFor
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements AfterViewInit{

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  @Input() tipoChat: string = '';
  @Input() placeholder : string = '';

  isLoading : boolean = true;

  formChat = new FormGroup({
    chatInput: new FormControl('', [Validators.required])
  });
  

  messages: any[] = [];

  elemtMessages : any
  elemtChat : any
  elemtChatSuggestion : any
  
  
  msgInput : string = '';


  async ngAfterViewInit() {

    this.elemtMessages = this.elementRef.nativeElement.querySelector('#chat-messages');
    this.elemtChat = this.elementRef.nativeElement.querySelector('#chat');
    this.elemtChatSuggestion = this.elementRef.nativeElement.querySelector('#chat-suggestions');

    this.messages = await GetChat.getChat(this.tipoChat)
    
    if (this.elemtMessages) {
      setTimeout(() => {
        this.scrollToBottom();  
      }, 1000)
      
    }
  }

  scrollToBottom() {
    if (this.elemtChat) {
      gsap.to(this.elemtMessages, {
        duration: 0.8,
        scrollTop: this.elemtChat.scrollHeight
      })
      
    }
  }
  

  

  async sendMessage() {
    

    this.msgInput = this.formChat.value?.chatInput == null ? "" : this.formChat.value.chatInput
    
    gsap.to('.chat-loading', {
      duration: 0.3,
      height: 'auto'
    })

    this.formChat.reset()

    let itemMsg = {
      id: this.messages.length + 1,
      chatId: await GetChatId.getChat(this.tipoChat),
      userId: await GetUser.getField('id'),
      role: "user",
      content: this.msgInput
    }



    //this.messages.push(itemMsg)

    this.scrollToBottom();

    gsap.to(this.elemtMessages, {
      duration: 0.8,
      scrollTop: this.elemtChat.scrollHeight
    })

    this.sendMessageChat()

    
    
  }


  async sendMessageChat() {

    console.log('ChatInteractive::SendChatExample')
    try {
      
      // let responseBot = await ChatInteractive.sendChatExample(this.tipoChat);

      let responseBot = await ChatInteractive.sendChat(this.tipoChat, this.msgInput);
      
      console.log(responseBot)

      this.messages = await GetChat.getChat(this.tipoChat)

      gsap.to(this.elemtMessages, {
        duration: 0.8,
        scrollTop: this.elemtChat.scrollHeight
      })

      gsap.to('.chat-loading', {
        duration: 0.3,
        height: 0
      })

    } catch (error) {
      console.error("Erro ao enviar o chat:", error);
    }
  }

  sendMessagePreDefine(message: string) {

    this.formChat.get('chatInput')?.setValue(message)

    this.sendMessage()
  }
}