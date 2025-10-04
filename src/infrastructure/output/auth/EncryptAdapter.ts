import bcrypt from 'bcrypt';
import { EncryptIntPort } from '../../../application/output/EncryptIntPort';

export class EncryptAdapter implements EncryptIntPort {
    private  readonly saltRounds = 10;

    public  async hashPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(this.saltRounds);
        return bcrypt.hash(password, salt);
    }

    public  async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword);
    }
}