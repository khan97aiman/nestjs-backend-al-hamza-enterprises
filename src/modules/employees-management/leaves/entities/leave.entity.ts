import { ApiProperty } from "@nestjs/swagger";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Employee } from "../../employees/entities/employee.entity";

@Entity()
export class Leave {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "date",
        nullable: false,
    })
    @ApiProperty()
    dateOfRequest: string;

    @Column({
        type: "date",
        nullable: false,
    })
    @ApiProperty()
    startDate: string;

    @Column({
        type: "date",
        nullable: false,
    })
    @ApiProperty()
    endDate: string;

    @ManyToOne(type => Employee, employee => employee.id, { nullable:false, eager: true }) 
    employee: Employee; 

    @Column({
        type: "date",
        nullable: false,
    })
    @ApiProperty()
    reason: string;

    @Column({
        type: "boolean",
        nullable: false,
    })
    @ApiProperty()
    isLeavePaid: boolean;
}
