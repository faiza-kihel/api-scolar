import { AttachmentModel } from "./attachment";

export class StudentModel {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: any;
    password?: string;
    username: any;
    createdAt?: any;
    updatedAt?: any;
    roleId?: any;
    attachments?: AttachmentModel[];
    phoneNumber?: number;
    adresss?: any;
}