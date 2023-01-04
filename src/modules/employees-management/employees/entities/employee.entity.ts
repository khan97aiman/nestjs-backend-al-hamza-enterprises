import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AdvanceSalary } from "../../advance-salary/entities/advance-salary.entity";
import { Attendance } from "../../attendance/entities/attendance.entity";
import { Leave } from "../../leaves/entities/leave.entity";
import { Overtime } from "../../overtime/entities/overtime.entity";
import { SalaryHistory } from "../../salary-history/entities/salary-history.entity";

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

    @OneToMany(type => Attendance, attendance => attendance.id) 
    attendances: Attendance[];  
    
    @OneToMany(type => AdvanceSalary, advanceSalary => advanceSalary.id) 
    advanceSalaryRequests: AdvanceSalary[];  

    @OneToMany(type => Leave, leave => leave.id) 
    leaves: Leave[];

    @OneToMany(type => Overtime, overtime => overtime.id) 
    overtimes: Overtime[];

    @OneToMany(type => SalaryHistory, salaryHistory => salaryHistory.id) 
    salaryHistories: SalaryHistory[];
}
