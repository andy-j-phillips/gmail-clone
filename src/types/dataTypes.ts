export enum FilterActions {
  MOVE = "move",
}

export interface Contact {
  name: string;
  email: string;
  icon: string;
}

export interface FolderMessage {
  "message-id": string;
  from: string;
  subject: string;
}

export interface Message {
  from: string;
  id: string;
  subject: string;
  to: string;
  date: string;
  "reply-to": string;
  body: string;
}

export type Folders = string[];

export interface Settings {
  signature: string;
  "vacation-autorespond": boolean;
  density: string;
  "inbox-type": string;
  "messages-per-page": number;
  "reply-mode": string;
  spellcheck: boolean;
  autocorrect: boolean;
  "desktop-notifications": boolean;
}

export interface Filter {
  "match-field": keyof Message;
  "match-text": string;
  action: FilterActions;
  target: string;
}

export default {};
