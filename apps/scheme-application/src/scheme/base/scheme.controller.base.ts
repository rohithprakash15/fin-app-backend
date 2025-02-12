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
import { SchemeService } from "../scheme.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SchemeCreateInput } from "./SchemeCreateInput";
import { Scheme } from "./Scheme";
import { SchemeFindManyArgs } from "./SchemeFindManyArgs";
import { SchemeWhereUniqueInput } from "./SchemeWhereUniqueInput";
import { SchemeUpdateInput } from "./SchemeUpdateInput";
import { SchemeApplicationFindManyArgs } from "../../schemeApplication/base/SchemeApplicationFindManyArgs";
import { SchemeApplication } from "../../schemeApplication/base/SchemeApplication";
import { SchemeApplicationWhereUniqueInput } from "../../schemeApplication/base/SchemeApplicationWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SchemeControllerBase {
  constructor(
    protected readonly service: SchemeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Scheme })
  @nestAccessControl.UseRoles({
    resource: "Scheme",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createScheme(@common.Body() data: SchemeCreateInput): Promise<Scheme> {
    return await this.service.createScheme({
      data: data,
      select: {
        applicationProcess: true,
        audioDescription: true,
        benefits: true,
        category: true,
        createdAt: true,
        description: true,
        documents: true,
        eligibility: true,
        icon: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Scheme] })
  @ApiNestedQuery(SchemeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Scheme",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async schemes(@common.Req() request: Request): Promise<Scheme[]> {
    const args = plainToClass(SchemeFindManyArgs, request.query);
    return this.service.schemes({
      ...args,
      select: {
        applicationProcess: true,
        audioDescription: true,
        benefits: true,
        category: true,
        createdAt: true,
        description: true,
        documents: true,
        eligibility: true,
        icon: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Scheme })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Scheme",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async scheme(
    @common.Param() params: SchemeWhereUniqueInput
  ): Promise<Scheme | null> {
    const result = await this.service.scheme({
      where: params,
      select: {
        applicationProcess: true,
        audioDescription: true,
        benefits: true,
        category: true,
        createdAt: true,
        description: true,
        documents: true,
        eligibility: true,
        icon: true,
        id: true,
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
  @swagger.ApiOkResponse({ type: Scheme })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Scheme",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateScheme(
    @common.Param() params: SchemeWhereUniqueInput,
    @common.Body() data: SchemeUpdateInput
  ): Promise<Scheme | null> {
    try {
      return await this.service.updateScheme({
        where: params,
        data: data,
        select: {
          applicationProcess: true,
          audioDescription: true,
          benefits: true,
          category: true,
          createdAt: true,
          description: true,
          documents: true,
          eligibility: true,
          icon: true,
          id: true,
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
  @swagger.ApiOkResponse({ type: Scheme })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Scheme",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteScheme(
    @common.Param() params: SchemeWhereUniqueInput
  ): Promise<Scheme | null> {
    try {
      return await this.service.deleteScheme({
        where: params,
        select: {
          applicationProcess: true,
          audioDescription: true,
          benefits: true,
          category: true,
          createdAt: true,
          description: true,
          documents: true,
          eligibility: true,
          icon: true,
          id: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/schemeApplications")
  @ApiNestedQuery(SchemeApplicationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SchemeApplication",
    action: "read",
    possession: "any",
  })
  async findSchemeApplications(
    @common.Req() request: Request,
    @common.Param() params: SchemeWhereUniqueInput
  ): Promise<SchemeApplication[]> {
    const query = plainToClass(SchemeApplicationFindManyArgs, request.query);
    const results = await this.service.findSchemeApplications(params.id, {
      ...query,
      select: {
        createdAt: true,
        documents: true,
        id: true,

        scheme: {
          select: {
            id: true,
          },
        },

        status: true,
        submittedAt: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/schemeApplications")
  @nestAccessControl.UseRoles({
    resource: "Scheme",
    action: "update",
    possession: "any",
  })
  async connectSchemeApplications(
    @common.Param() params: SchemeWhereUniqueInput,
    @common.Body() body: SchemeApplicationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      schemeApplications: {
        connect: body,
      },
    };
    await this.service.updateScheme({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/schemeApplications")
  @nestAccessControl.UseRoles({
    resource: "Scheme",
    action: "update",
    possession: "any",
  })
  async updateSchemeApplications(
    @common.Param() params: SchemeWhereUniqueInput,
    @common.Body() body: SchemeApplicationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      schemeApplications: {
        set: body,
      },
    };
    await this.service.updateScheme({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/schemeApplications")
  @nestAccessControl.UseRoles({
    resource: "Scheme",
    action: "update",
    possession: "any",
  })
  async disconnectSchemeApplications(
    @common.Param() params: SchemeWhereUniqueInput,
    @common.Body() body: SchemeApplicationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      schemeApplications: {
        disconnect: body,
      },
    };
    await this.service.updateScheme({
      where: params,
      data,
      select: { id: true },
    });
  }
}
