import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LessonContentModuleBase } from "./base/lessonContent.module.base";
import { LessonContentService } from "./lessonContent.service";
import { LessonContentController } from "./lessonContent.controller";
import { LessonContentResolver } from "./lessonContent.resolver";

@Module({
  imports: [LessonContentModuleBase, forwardRef(() => AuthModule)],
  controllers: [LessonContentController],
  providers: [LessonContentService, LessonContentResolver],
  exports: [LessonContentService],
})
export class LessonContentModule {}
