import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MessageComponent } from './message.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ConversationListComponent } from './conversation-list/conversation-list.component';
import { MessageFormComponent } from './message-form/message-form.component';

const routes: Routes = [
  {
    path: '',
    component: MessageComponent,
    children: [
      { path: 'chat-window-component', component: ChatWindowComponent },
      { path: 'coversation-list-component', component: ConversationListComponent },
      { path: 'message-form-component', component: MessageFormComponent },
      { path: '', redirectTo: 'chat-window-component', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageRoutingModule { }