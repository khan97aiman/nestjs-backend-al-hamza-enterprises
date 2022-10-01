import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";

export default class TypeOrmConfig {
    static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
      return {
        type: 'postgres', 
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        synchronize: configService.get('DB_SYNCHRONIZE'),
        autoLoadEntities: true,
        logging: configService.get('DB_LOGGING_LEVEL'),
        // define: {
        //   underscored: true,
        // },
      };
    }
  }
  
  export const TypeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    useFactory: async (
      configService: ConfigService,
    ): Promise<TypeOrmModuleOptions> =>
      TypeOrmConfig.getOrmConfig(configService),
    inject: [ConfigService],
  };
  