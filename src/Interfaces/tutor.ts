import { AttachmentModel } from './attachment';
import { StudentModel } from './student';

export class TutorModel {
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
  students? : StudentModel[];
  phoneNumber?: number;
  adresss?: any;
}
