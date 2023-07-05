import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConversationService } from 'src/app/_services/conversation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent {
  messageForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private conversationService: ConversationService) {
    this.messageForm = this.formBuilder.group({
      recipient: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  sendMessage() {
    if (this.messageForm.valid) {
      const recipient = this.messageForm.get('recipient')?.value;
      const content = this.messageForm.get('content')?.value;
  
      // Verificar si el destinatario es el mismo usuario
      if (recipient === this.conversationService.username) {
        Swal.fire({
          icon: 'error',
          title: 'No puedes enviarte un mensaje a ti mismo',
          confirmButtonText: 'Ok',
        });
        return;
      }
  
      this.conversationService.sendMessage(content, recipient);
  
      // Suscribirse a la respuesta del método sendMessage
      this.conversationService.sendMessageResponse$.subscribe((response: any) => {
        console.log(response.error);
        if (response.error === 'El destinatario no existe') {
          Swal.fire({
            icon: 'error',
            title: 'El destinatario no existe',
            confirmButtonText: 'Ok',
          });
        } else {
          Swal.fire({
            icon: 'success',
            title: 'Mensaje enviado con éxito',
            confirmButtonText: 'Ok',
          });
          this.messageForm.reset();
        }
      });
  
      this.messageForm.reset();
    }
  }

}