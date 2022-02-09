import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class Encryption {
    
  //crypt password
  async Encrypt(password: any): Promise<any> {
    const saltOrRound = 20;
    const hash = await bcrypt.hash(password, saltOrRound);
    console.log('hash', hash);
    return hash;
  }

  //decrypt password
  //   async Decrypt(password): Promise<any> {
  //     const isMatch = await bcrypt.compare(password, hash);
  //  }
}
