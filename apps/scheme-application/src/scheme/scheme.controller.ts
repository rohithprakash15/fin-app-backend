import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SchemeService } from "./scheme.service";
import { SchemeControllerBase } from "./base/scheme.controller.base";

@swagger.ApiTags("schemes")
@common.Controller("schemes")
export class SchemeController extends SchemeControllerBase {
  constructor(
    protected readonly service: SchemeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
