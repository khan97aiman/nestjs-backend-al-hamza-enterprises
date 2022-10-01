import { IsDate, IsNumber, IsString } from '@hippo-oss/nest-dto/openapi';

export class CreateEmployeeDto {
    @IsString({
        nullable: false,
    })
    firstName: string;

    @IsString({
        nullable: false,
    })
    lastName: string;

    @IsString({
        nullable: false,
    })
    designation: string;

    @IsString({
        nullable: false,
    })
    mobileNo: string;

    @IsDate({
        nullable: false,
    })
    birthDate: string;

    @IsDate({
        nullable: false,
    })
    hireDate: string;

    @IsNumber({
        nullable: false,
    })
    netSalary: string;
}
