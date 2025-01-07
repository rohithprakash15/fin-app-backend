import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LanguageContentResolverBase } from "./base/languageContent.resolver.base";
import { LanguageContent } from "./base/LanguageContent";
import { LanguageContentService } from "./languageContent.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LanguageContent)
export class LanguageContentResolver extends LanguageContentResolverBase {
  constructor(
    protected readonly service: LanguageContentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
