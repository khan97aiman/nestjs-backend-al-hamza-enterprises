import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Attendance } from "../../attendance/entities/attendance.entity";

@Entity()
export class Employee {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "varchar",
        nullable: false,
    })
    @ApiProperty()
    firstName: string;

    @Column({
        type: "varchar",
        nullable: false,
    })
    @ApiProperty()
    lastName: string;

    @Column({
        type: "varchar",
        nullable: false,
    })
    @ApiProperty()
    designation: string;

    @Column({
        type: "varchar",
        nullable: false,
    })
    @ApiProperty()
    mobileNo: string;

    @Column({
        type: "date",
        nullable: false,
    })
    @ApiProperty()
    birthDate: string;

    @Column({
        type: "date",
        nullable: false,
    })
    @ApiProperty()
    hireDate: string;

    @Column({
        type: "money",
        nullable: false,
    })
    @ApiProperty()
    netSalary: string;

    @OneToMany(type => Attendance, attendance => attendance.id) attendances: Attendance[];  

}
