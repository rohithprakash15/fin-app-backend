import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SchemeModuleBase } from "./base/scheme.module.base";
import { SchemeService } from "./scheme.service";
import { SchemeController } from "./scheme.controller";
import { SchemeResolver } from "./scheme.resolver";

@Module({
  imports: [SchemeModuleBase, forwardRef(() => AuthModule)],
  controllers: [SchemeController],
  providers: [SchemeService, SchemeResolver],
  exports: [SchemeService],
})
export class SchemeModule {}
