import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { ChatComponent } from "../../components/chat/chat.component";

@Component({
  selector: 'app-chat-palestra',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, ChatComponent],
  templateUrl: './chat-palestra.component.html',
  styleUrl: './chat-palestra.component.scss'
})
export class ChatPalestraComponent {

}
