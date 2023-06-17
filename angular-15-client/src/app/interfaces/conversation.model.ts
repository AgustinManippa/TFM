 export interface Conversation {
    id: string;
    name: string;
    participants: string[];
    messages: Message[];
  }
  
  export interface Message {
    content: string;
    senderUser: string;
    recipientUser: string;
    timestamp: Date;
  }

