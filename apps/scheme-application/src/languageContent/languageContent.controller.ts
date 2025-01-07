import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LanguageContentService } from "./languageContent.service";
import { LanguageContentControllerBase } from "./base/languageContent.controller.base";

@swagger.ApiTags("languageContents")
@common.Controller("languageContents")
export class LanguageContentController extends LanguageContentControllerBase {
  constructor(
    protected readonly service: LanguageContentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
