import { Component, OnInit } from '@angular/core';
import { Conversation } from 'src/app/interfaces/conversation.model';
import { ConversationService } from 'src/app/_services/conversation.service'

@Component({
  selector: 'app-conversation-list',
  templateUrl: './conversation-list.component.html',
  styleUrls: ['./conversation-list.component.css']
})
export class ConversationListComponent implements OnInit {
  conversations: Conversation[] = [];
  result: any;
  senderFilter: string = '';
  filteredConversations: Conversation[] = [];

  constructor(private conversationService: ConversationService) { }

  ngOnInit() {
    this.conversationService.getConversations().subscribe((response: any) => {
      if (Array.isArray(response)) {
        this.conversations = response;
        this.filteredConversations = response;
      } else if (response?.messages) {
        this.conversations = response.messages;
        this.filteredConversations = response.messages;
      } else {
        console.log('La respuesta no tiene la estructura esperada.');
      }
    });
  }

  filterConversations() {
    this.filteredConversations = this.conversations.filter(conversation =>
      conversation.senderUsername.toLowerCase().includes(this.senderFilter.toLowerCase())
    );
  }

  resetFilter() {
    this.senderFilter = '';
    this.filteredConversations = this.conversations;
  }
}