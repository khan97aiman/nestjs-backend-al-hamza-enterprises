import { ApiProperty } from "@nestjs/swagger";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Employee } from "../../employees/entities/employee.entity";

@Entity()
export class AdvanceSalary {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "date",
        nullable: false,
    })
    @ApiProperty()
    date: string;

    @ManyToOne(type => Employee, employee => employee.id, { nullable:false, eager: true }) 
    employee: Employee; 

    @Column({
        type: "money",
        nullable: false,
    })
    @ApiProperty()
    amountRequested: string;

    @Column({
        type: "money",
        nullable: false,
    })
    @ApiProperty()
    amountApproved: string;
}
