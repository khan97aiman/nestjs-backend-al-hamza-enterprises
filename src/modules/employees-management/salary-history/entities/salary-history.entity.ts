import { ApiProperty } from "@nestjs/swagger";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Employee } from "../../employees/entities/employee.entity";

@Entity()
export class SalaryHistory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "date",
        nullable: false,
    })
    @ApiProperty()
    fromDate: string;

    @Column({
        type: "date",
        nullable: false,
    })
    @ApiProperty()
    toDate: string;

    @ManyToOne(type => Employee, employee => employee.id, { nullable:false, eager: true }) 
    employee: Employee; 

    @Column({
        type: "money",
        nullable: false,
    })
    @ApiProperty()
    netSalary: string;
}
