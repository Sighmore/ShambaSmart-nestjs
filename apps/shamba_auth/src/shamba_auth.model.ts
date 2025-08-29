import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
