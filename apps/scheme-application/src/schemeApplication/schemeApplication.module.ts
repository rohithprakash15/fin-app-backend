import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SchemeApplicationModuleBase } from "./base/schemeApplication.module.base";
import { SchemeApplicationService } from "./schemeApplication.service";
import { SchemeApplicationController } from "./schemeApplication.controller";
import { SchemeApplicationResolver } from "./schemeApplication.resolver";

@Module({
  imports: [SchemeApplicationModuleBase, forwardRef(() => AuthModule)],
  controllers: [SchemeApplicationController],
  providers: [SchemeApplicationService, SchemeApplicationResolver],
  exports: [SchemeApplicationService],
})
export class SchemeApplicationModule {}
