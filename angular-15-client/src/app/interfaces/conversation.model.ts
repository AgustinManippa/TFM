 export interface Conversation {
    id: string;
    name: string;
    participants: string[];
    messages: Message[];
  }
  
  export interface Message {
    id: string;
    content: string;
    sender: string;
    recipient: string;
    timestamp: Date;
  }

