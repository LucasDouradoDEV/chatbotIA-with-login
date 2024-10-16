import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { ChatComponent } from "../../components/chat/chat.component";

@Component({
  selector: 'app-chat-servicos-senai',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, ChatComponent],
  templateUrl: './chat-servicos-senai.component.html',
  styleUrl: './chat-servicos-senai.component.scss'
})
export class ChatServicosSenaiComponent {

}
