import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { ChatComponent } from "../../components/chat/chat.component";

@Component({
  selector: 'app-chat-servicos',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, ChatComponent],
  templateUrl: './chat-servicos.component.html',
  styleUrl: './chat-servicos.component.scss'
})
export class ChatServicosComponent {

}
