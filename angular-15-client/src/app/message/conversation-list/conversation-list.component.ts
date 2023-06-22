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

  constructor(private conversationService: ConversationService) { }

  ngOnInit() {
    console.log("Hola");
    this.conversationService.getConversations().subscribe((response: any) => {
      console.log(response);
      this.result = response;
    
      if (Array.isArray(response)) {
        this.conversations = response;
      } else if (response?.messages) {
        this.conversations = response.messages;
      } else {
        console.log('La respuesta no tiene la estructura esperada.');
      }
    });
  }
}