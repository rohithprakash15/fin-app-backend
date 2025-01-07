import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LanguageContentModuleBase } from "./base/languageContent.module.base";
import { LanguageContentService } from "./languageContent.service";
import { LanguageContentController } from "./languageContent.controller";
import { LanguageContentResolver } from "./languageContent.resolver";

@Module({
  imports: [LanguageContentModuleBase, forwardRef(() => AuthModule)],
  controllers: [LanguageContentController],
  providers: [LanguageContentService, LanguageContentResolver],
  exports: [LanguageContentService],
})
export class LanguageContentModule {}
