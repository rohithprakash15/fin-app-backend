/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { LanguageContent } from "./LanguageContent";
import { LanguageContentCountArgs } from "./LanguageContentCountArgs";
import { LanguageContentFindManyArgs } from "./LanguageContentFindManyArgs";
import { LanguageContentFindUniqueArgs } from "./LanguageContentFindUniqueArgs";
import { CreateLanguageContentArgs } from "./CreateLanguageContentArgs";
import { UpdateLanguageContentArgs } from "./UpdateLanguageContentArgs";
import { DeleteLanguageContentArgs } from "./DeleteLanguageContentArgs";
import { LanguageContentService } from "../languageContent.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LanguageContent)
export class LanguageContentResolverBase {
  constructor(
    protected readonly service: LanguageContentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "LanguageContent",
    action: "read",
    possession: "any",
  })
  async _languageContentsMeta(
    @graphql.Args() args: LanguageContentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [LanguageContent])
  @nestAccessControl.UseRoles({
    resource: "LanguageContent",
    action: "read",
    possession: "any",
  })
  async languageContents(
    @graphql.Args() args: LanguageContentFindManyArgs
  ): Promise<LanguageContent[]> {
    return this.service.languageContents(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => LanguageContent, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "LanguageContent",
    action: "read",
    possession: "own",
  })
  async languageContent(
    @graphql.Args() args: LanguageContentFindUniqueArgs
  ): Promise<LanguageContent | null> {
    const result = await this.service.languageContent(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => LanguageContent)
  @nestAccessControl.UseRoles({
    resource: "LanguageContent",
    action: "create",
    possession: "any",
  })
  async createLanguageContent(
    @graphql.Args() args: CreateLanguageContentArgs
  ): Promise<LanguageContent> {
    return await this.service.createLanguageContent({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => LanguageContent)
  @nestAccessControl.UseRoles({
    resource: "LanguageContent",
    action: "update",
    possession: "any",
  })
  async updateLanguageContent(
    @graphql.Args() args: UpdateLanguageContentArgs
  ): Promise<LanguageContent | null> {
    try {
      return await this.service.updateLanguageContent({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => LanguageContent)
  @nestAccessControl.UseRoles({
    resource: "LanguageContent",
    action: "delete",
    possession: "any",
  })
  async deleteLanguageContent(
    @graphql.Args() args: DeleteLanguageContentArgs
  ): Promise<LanguageContent | null> {
    try {
      return await this.service.deleteLanguageContent(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
