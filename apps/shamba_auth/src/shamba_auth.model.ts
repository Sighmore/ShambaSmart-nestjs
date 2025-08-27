import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity('user_login_table') // table name
export class User_Login {
  @PrimaryGeneratedColumn('uuid')
  id: string;

    @Column()
    fullName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  // Automatically hash password before saving
  @BeforeInsert()
  async hashPassword() {
    const saltRounds = 12;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
}


