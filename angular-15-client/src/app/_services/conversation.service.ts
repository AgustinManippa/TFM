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

  getConversations(senderName: string = ''): Observable<Conversation[]> {
    const url = `${this.backendUrl}/api/messages/${this.username}?senderName=${senderName}`;
    return this.http.get<Conversation[]>(url);
  }

  sendMessage(content: string, recipientUsername:string) {
    // const url = `/api/conversations/${conversationId}/messages`;
       const url = `${this.backendUrl}/api/messages`;

       if (this.username === recipientUsername) {
        console.error('No puedes enviarte un mensaje a ti mismo');
        return;
      }

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
          // Verificar si el destinatario no existe en la respuesta del backend
        if (response.error === 'El destinatario no existe') {
          console.error('El destinatario no existe');
          return;
        }
      },
      (error) => {
        console.error('Error al enviar el mensaje:', error);
      }
    );
  }
}