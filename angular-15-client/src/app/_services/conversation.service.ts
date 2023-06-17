import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conversation } from 'src/app/interfaces/conversation.model';
import { StorageService } from '../_services/storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {
  
  private backendUrl = 'http://localhost:8080'; // Reemplaza con la URL de tu backend
  private username: string;
  conversations: Conversation[] = [];

  constructor(private http: HttpClient, private storageService: StorageService) {
    this.username = storageService.getUser().username;
  }
  
  // getConversations(): Conversation[] {
  //   return this.conversations;
  // }

  getConversations(): Observable<Conversation[]> {
    const url = `${this.backendUrl}/api/messages/${this.username}`;
    return this.http.get<Conversation[]>(url);
  }

  addConversation(conversation: Conversation) {
    this.conversations.push(conversation);
  }

  sendMessage(conversationId: string, content: string, recipientUsername:string) {
    // const url = `/api/conversations/${conversationId}/messages`;
       const url = `${this.backendUrl}/api/messages`;


       // Comprobar si el dato existe
       if (this.username !== null) {
         // El dato existe en SesionStorage
         console.log(this.username);
       } else {
         // El dato no existe en SesionStorage
         console.log('El dato no está almacenado en SesionStorage.');
       }

    const senderUsername = this.username;

    const body = { content, senderUsername, recipientUsername };

    console.log(body)

    this.http.post(url, body).subscribe(
      (response: any) => {
        // Actualiza la conversación en el servicio con la respuesta del backend
        const updatedConversation = response.conversation;
        const conversationIndex = this.conversations.findIndex(conv => conv.id === updatedConversation.id);
        if (conversationIndex !== -1) {
          this.conversations[conversationIndex] = updatedConversation;
        }
      },
      (error) => {
        console.error('Error al enviar el mensaje:', error);
      }
    );
  }
}