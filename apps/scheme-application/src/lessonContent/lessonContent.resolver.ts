import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LessonContentResolverBase } from "./base/lessonContent.resolver.base";
import { LessonContent } from "./base/LessonContent";
import { LessonContentService } from "./lessonContent.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LessonContent)
export class LessonContentResolver extends LessonContentResolverBase {
  constructor(
    protected readonly service: LessonContentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
