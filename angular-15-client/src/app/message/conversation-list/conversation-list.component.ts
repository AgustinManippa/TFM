import { Component, OnInit } from '@angular/core';
import { Conversation } from 'src/app/interfaces/conversation.model';
import { ConversationService } from 'src/app/_services/conversation.service';

@Component({
  selector: 'app-conversation-list',
  templateUrl: './conversation-list.component.html',
  styleUrls: ['./conversation-list.component.css']
})
export class ConversationListComponent implements OnInit {
  conversations: Conversation[] = []; // Arreglo de conversaciones
  result: any;
  senderFilter: string = ''; // Filtro de remitente
  filteredConversations: Conversation[] = []; // Conversaciones filtradas

  constructor(private conversationService: ConversationService) { }

  ngOnInit() {
    // Al inicializar el componente, se obtienen las conversaciones del servicio
    this.conversationService.getConversations().subscribe((response: any) => {
      if (Array.isArray(response)) {
        // Si la respuesta es un arreglo, se asigna a las conversaciones y a las conversaciones filtradas
        this.conversations = response;
        this.filteredConversations = response;
      } else if (response?.messages) {
        // Si la respuesta tiene la propiedad 'messages', se asigna ese arreglo a las conversaciones y a las conversaciones filtradas
        this.conversations = response.messages;
        this.filteredConversations = response.messages;
      } else {
        console.log('La respuesta no tiene la estructura esperada.');
      }
    });
  }

  // Método para filtrar las conversaciones según el remitente
  filterConversations() {
    this.filteredConversations = this.conversations.filter(conversation =>
      conversation.senderUsername.toLowerCase().includes(this.senderFilter.toLowerCase())
    );
  }

  // Método para restablecer el filtro y mostrar todas las conversaciones
  resetFilter() {
    this.senderFilter = '';
    this.filteredConversations = this.conversations;
  }
}