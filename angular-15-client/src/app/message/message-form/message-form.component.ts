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
    // Crear el formulario con el constructor FormBuilder y definir validadores para los campos
    this.messageForm = this.formBuilder.group({
      recipient: ['', Validators.required], // Campo del destinatario con validación requerida
      content: ['', Validators.required] // Campo del contenido del mensaje con validación requerida
    });
  }

  sendMessage() {
    if (this.messageForm.valid) {
      const recipient = this.messageForm.get('recipient')?.value; // Obtener el valor del campo destinatario
      const content = this.messageForm.get('content')?.value; // Obtener el valor del campo contenido del mensaje
  
      // Verificar si el destinatario es el mismo usuario
      if (recipient === this.conversationService.username) {
        Swal.fire({
          icon: 'error',
          title: 'No puedes enviarte un mensaje a ti mismo',
          confirmButtonText: 'Ok',
        });
        return;
      }
  
      // Llamar al servicio de conversación para enviar el mensaje
      this.conversationService.sendMessage(content, recipient);
  
      // Suscribirse a la respuesta del método sendMessage del servicio de conversación
      this.conversationService.sendMessageResponse$.subscribe((response: any) => {
        // Verificar si hay un error en la respuesta
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
          this.messageForm.reset(); // Restablecer el formulario después de enviar el mensaje exitosamente
        }
      });
  
      this.messageForm.reset(); // Restablecer el formulario después de enviar el mensaje
    }
  }

}