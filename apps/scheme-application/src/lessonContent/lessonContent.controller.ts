import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LessonContentService } from "./lessonContent.service";
import { LessonContentControllerBase } from "./base/lessonContent.controller.base";

@swagger.ApiTags("lessonContents")
@common.Controller("lessonContents")
export class LessonContentController extends LessonContentControllerBase {
  constructor(
    protected readonly service: LessonContentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
