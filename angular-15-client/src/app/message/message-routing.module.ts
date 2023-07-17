import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MessageComponent } from './message.component';
import { ConversationListComponent } from './conversation-list/conversation-list.component';
import { MessageFormComponent } from './message-form/message-form.component';

const routes: Routes = [
  {
    path: '', // Ruta raíz del módulo de mensajes
    component: MessageComponent, // Componente principal del módulo de mensajes
    children: [
      { path: 'coversation-list-component', component: ConversationListComponent }, // Ruta para el componente de lista de conversaciones
      { path: 'message-form-component', component: MessageFormComponent }, // Ruta para el componente del formulario de mensajes
      { path: '', redirectTo: 'home', pathMatch: 'full' } // Redirección a 'home' si no se proporciona una ruta válida
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Importar las rutas hijas del módulo de mensajes
  exports: [RouterModule]
})
export class MessageRoutingModule { }