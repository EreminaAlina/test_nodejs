import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 20,
        unique: true,
    })
    email: string;

    @Column({
        length: 15,
        nullable: true,
    })
    first_name: string;

    @Column({
        length: 30,
        nullable: true,
    })
    last_name: string;

    @Column({
        length: 60,
    })
    password: string;

    @Column({
        nullable: true,
    })
    sex: number;

    @Column({
        nullable: true,
    })
    photo: string;

    @Column()
    registration_date: Date;

    @Column()
    access_token: string;
}
