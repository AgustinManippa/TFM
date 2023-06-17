import { Component, Input } from '@angular/core';
import { Conversation } from 'src/app/interfaces/conversation.model';


@Component({
  selector: 'app-chat-window-component',
  templateUrl: './chat-window-component.component.html',
  styleUrls: ['./chat-window-component.component.css']
})
export class ChatWindowComponent {

  @Input() conversation: Conversation = {
    id: '',
  name: '',
  participants: [],
  messages: []
  };
  
  constructor() {
  }
}