import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SchemeApplicationResolverBase } from "./base/schemeApplication.resolver.base";
import { SchemeApplication } from "./base/SchemeApplication";
import { SchemeApplicationService } from "./schemeApplication.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SchemeApplication)
export class SchemeApplicationResolver extends SchemeApplicationResolverBase {
  constructor(
    protected readonly service: SchemeApplicationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
