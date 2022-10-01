import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpStatus,
  } from '@nestjs/common';
  import { Response } from 'express';
  import { TypeORMError } from 'typeorm';
  
  @Catch(TypeORMError)
  export class TypeOrmExceptionFilter implements ExceptionFilter {
    catch(exception: TypeORMError, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      let error = (exception as any).name;
      let message = (exception as any).message;
      let status = HttpStatus.BAD_REQUEST;
      response.status(status).json({
        statusCode: status,
        message: message,
        error: error,
      });
    }
  }
  