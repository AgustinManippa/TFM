import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conversation } from 'src/app/interfaces/conversation.model';
import { StorageService } from '../_services/storage.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {

  private backendUrl = 'http://localhost:8080'; // Reemplaza con la URL de tu backend
  public username: string;
  conversations: Conversation[] = [];

  // Nueva propiedad
  sendMessageResponse$: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient, private storageService: StorageService) {
    this.username = storageService.getUser().username;
  }

  getConversations(senderName: string = ''): Observable<Conversation[]> {
    const url = `${this.backendUrl}/api/messages/${this.username}?senderName=${senderName}`;
    return this.http.get<Conversation[]>(url);
  }

  sendMessage(content: string, recipientUsername: string) {
    const url = `${this.backendUrl}/api/messages`;

    const senderUsername = this.username;

    const body = { content, senderUsername, recipientUsername };

    this.http.post(url, body).subscribe(
      (response: any) => {
        this.sendMessageResponse$.next(response);
      },
      (error) => {
        console.error('Error al enviar el mensaje:', error);
      }
    );
  }
}