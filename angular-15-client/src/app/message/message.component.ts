import { Component } from '@angular/core';
import { ConversationService } from '../_services/conversation.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  constructor(private conversationService: ConversationService) { }
  
}
