import { Component, OnInit } from '@angular/core';
import { Conversation } from 'src/app/interfaces/conversation.model';
import { ConversationService } from 'src/app/_services/conversation.service'
@Component({
  selector: 'app-conversation-list-component',
  templateUrl: './conversation-list-component.component.html',
  styleUrls: ['./conversation-list-component.component.css']
})
export class ConversationListComponent implements OnInit {
  conversations: Conversation[] = [];

  constructor(private conversationService: ConversationService) { }

  ngOnInit() {
    this.conversations = this.conversationService.getConversations();
  }
}
