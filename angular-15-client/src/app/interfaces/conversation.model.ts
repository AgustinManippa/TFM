export interface Conversation {
  senderUsername: string; // Nombre de usuario del remitente de la conversación
  timestamp: Date; // Marca de tiempo de la conversación
  content: string; // Contenido de la conversación
  messages: Message[]; // Lista de mensajes en la conversación
}

export interface Message {
  content: string; // Contenido del mensaje
  senderUser: string; // Nombre de usuario del remitente del mensaje
  recipientUser: string; // Nombre de usuario del destinatario del mensaje
  timestamp: Date; // Marca de tiempo del mensaje
}