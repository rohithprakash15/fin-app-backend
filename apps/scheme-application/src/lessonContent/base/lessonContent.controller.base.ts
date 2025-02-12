/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { LessonContentService } from "../lessonContent.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { LessonContentCreateInput } from "./LessonContentCreateInput";
import { LessonContent } from "./LessonContent";
import { LessonContentFindManyArgs } from "./LessonContentFindManyArgs";
import { LessonContentWhereUniqueInput } from "./LessonContentWhereUniqueInput";
import { LessonContentUpdateInput } from "./LessonContentUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class LessonContentControllerBase {
  constructor(
    protected readonly service: LessonContentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LessonContent })
  @nestAccessControl.UseRoles({
    resource: "LessonContent",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createLessonContent(
    @common.Body() data: LessonContentCreateInput
  ): Promise<LessonContent> {
    return await this.service.createLessonContent({
      data: {
        ...data,

        course: data.course
          ? {
              connect: data.course,
            }
          : undefined,
      },
      select: {
        audioContent: true,
        content: true,

        course: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        duration: true,
        id: true,
        order: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [LessonContent] })
  @ApiNestedQuery(LessonContentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "LessonContent",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async lessonContents(
    @common.Req() request: Request
  ): Promise<LessonContent[]> {
    const args = plainToClass(LessonContentFindManyArgs, request.query);
    return this.service.lessonContents({
      ...args,
      select: {
        audioContent: true,
        content: true,

        course: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        duration: true,
        id: true,
        order: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: LessonContent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "LessonContent",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async lessonContent(
    @common.Param() params: LessonContentWhereUniqueInput
  ): Promise<LessonContent | null> {
    const result = await this.service.lessonContent({
      where: params,
      select: {
        audioContent: true,
        content: true,

        course: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        duration: true,
        id: true,
        order: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: LessonContent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "LessonContent",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateLessonContent(
    @common.Param() params: LessonContentWhereUniqueInput,
    @common.Body() data: LessonContentUpdateInput
  ): Promise<LessonContent | null> {
    try {
      return await this.service.updateLessonContent({
        where: params,
        data: {
          ...data,

          course: data.course
            ? {
                connect: data.course,
              }
            : undefined,
        },
        select: {
          audioContent: true,
          content: true,

          course: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          duration: true,
          id: true,
          order: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: LessonContent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "LessonContent",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteLessonContent(
    @common.Param() params: LessonContentWhereUniqueInput
  ): Promise<LessonContent | null> {
    try {
      return await this.service.deleteLessonContent({
        where: params,
        select: {
          audioContent: true,
          content: true,

          course: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          duration: true,
          id: true,
          order: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
