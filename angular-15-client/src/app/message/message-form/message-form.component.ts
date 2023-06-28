import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConversationService } from 'src/app/_services/conversation.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
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
      const recipient = this.messageForm.get('recipient')?.value;
      const content = this.messageForm.get('content')?.value;
      
      this.conversationService.sendMessage(content, recipient);
      this.messageForm.reset();
    }
  }
}