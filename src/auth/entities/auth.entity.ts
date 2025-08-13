import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum UserRole {
  ADMIN = 'Admin',
  SELLER = 'Seller',
  STOREMAN = 'Storeman',
  ACCOUNTANT = 'Accountant',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'f_name', type: 'varchar', length: 100 })
  fName: string;

  @Column({ type: 'varchar', length: 70, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 60 })
  password: string;

  @Column({ name: 'phone_number', type: 'varchar', length: 20, nullable: true })
  phoneNumber: string;

 @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.SELLER, 
  })
  role: UserRole;

  @Column({ type: 'text', nullable: true })
  address: string;

  @Column({ name: 'profile_image', type: 'text', nullable: true })
  profileImage: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}
