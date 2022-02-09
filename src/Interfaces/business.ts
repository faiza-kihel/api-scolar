import { AttachmentModel } from "./attachment";

export class BusinessModel {
    id?: number;
    status?: any; 
    createdAt?: any;
    updatedAt?: any
    name: string;
    decs?: string; 
    website? : string;
    email?: any;
    attachments?: AttachmentModel[];
    phoneNumber?: number;
    adresss?: any;
}