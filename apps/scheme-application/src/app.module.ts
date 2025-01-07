import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { CourseModule } from "./course/course.module";
import { LessonContentModule } from "./lessonContent/lessonContent.module";
import { SchemeApplicationModule } from "./schemeApplication/schemeApplication.module";
import { LanguageContentModule } from "./languageContent/languageContent.module";
import { CommentModule } from "./comment/comment.module";
import { UserProgressModule } from "./userProgress/userProgress.module";
import { DiscussionModule } from "./discussion/discussion.module";
import { SchemeModule } from "./scheme/scheme.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    CourseModule,
    LessonContentModule,
    SchemeApplicationModule,
    LanguageContentModule,
    CommentModule,
    UserProgressModule,
    DiscussionModule,
    SchemeModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
