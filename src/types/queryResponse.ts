import { FolderMessage } from "./dataTypes";

export interface GetFolderResponse {
  id: string;
  emails: FolderMessage[];
}
