import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConversationService } from 'src/app/_services/conversation.service';

@Component({
  selector: 'app-message-form-component',
  templateUrl: './message-form-component.component.html',
  styleUrls: ['./message-form-component.component.css']
})
export class MessageFormComponent {
  messageForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private conversationService: ConversationService) {
    this.messageForm = this.formBuilder.group({
      // sender: ['', Validators.required],
      recipient: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  sendMessage() {
    if (this.messageForm.valid) {
      // const sender = this.messageForm.get('sender')?.value;
      const recipient = this.messageForm.get('recipient')?.value;
      const content = this.messageForm.get('content')?.value;
      
      this.conversationService.sendMessage("4", content, recipient);
      this.messageForm.reset();
    }
  }
}






