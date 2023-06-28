 export interface Conversation {
    senderUsername: string;
    timestamp: Date;
    content: string;
    messages: Message[];
  }
  
  export interface Message {
    content: string;
    senderUser: string;
    recipientUser: string;
    timestamp: Date;
  }

