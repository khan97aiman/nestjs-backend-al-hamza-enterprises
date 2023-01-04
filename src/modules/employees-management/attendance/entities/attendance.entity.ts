import { ApiProperty } from "@nestjs/swagger";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Employee } from "../../employees/entities/employee.entity";

@Entity()
export class Attendance {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "date",
        nullable: false,
    })
    @ApiProperty()
    date: string;

    @Column({
        type: "time",
        nullable: true,
    })
    @ApiProperty()
    checkInTime: string;

    @Column({
        type: "time",
        nullable: true,
    })
    @ApiProperty()
    checkOutTime: string;

    @ManyToOne(type => Employee, employee => employee.id, { nullable:false, eager: true }) 
    employee: Employee; 

    @Column({
        type: "boolean",
        nullable: false,
    })
    @ApiProperty()
    isPresent: boolean;
}
