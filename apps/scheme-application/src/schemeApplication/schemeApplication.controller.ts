import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SchemeApplicationService } from "./schemeApplication.service";
import { SchemeApplicationControllerBase } from "./base/schemeApplication.controller.base";

@swagger.ApiTags("schemeApplications")
@common.Controller("schemeApplications")
export class SchemeApplicationController extends SchemeApplicationControllerBase {
  constructor(
    protected readonly service: SchemeApplicationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
