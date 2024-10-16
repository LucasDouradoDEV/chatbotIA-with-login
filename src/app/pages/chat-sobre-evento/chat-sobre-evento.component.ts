import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { ChatComponent } from "../../components/chat/chat.component";
import { CheckLogin } from '../../core/helpers/CheckLogin';

@Component({
  selector: 'app-chat-sobre-evento',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, ChatComponent],
  templateUrl: './chat-sobre-evento.component.html',
  styleUrl: './chat-sobre-evento.component.scss'
})
export class ChatSobreEventoComponent {

}
