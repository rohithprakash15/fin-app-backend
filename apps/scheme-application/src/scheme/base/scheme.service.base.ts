/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Scheme as PrismaScheme,
  SchemeApplication as PrismaSchemeApplication,
} from "@prisma/client";

export class SchemeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SchemeCountArgs, "select">): Promise<number> {
    return this.prisma.scheme.count(args);
  }

  async schemes(args: Prisma.SchemeFindManyArgs): Promise<PrismaScheme[]> {
    return this.prisma.scheme.findMany(args);
  }
  async scheme(
    args: Prisma.SchemeFindUniqueArgs
  ): Promise<PrismaScheme | null> {
    return this.prisma.scheme.findUnique(args);
  }
  async createScheme(args: Prisma.SchemeCreateArgs): Promise<PrismaScheme> {
    return this.prisma.scheme.create(args);
  }
  async updateScheme(args: Prisma.SchemeUpdateArgs): Promise<PrismaScheme> {
    return this.prisma.scheme.update(args);
  }
  async deleteScheme(args: Prisma.SchemeDeleteArgs): Promise<PrismaScheme> {
    return this.prisma.scheme.delete(args);
  }

  async findSchemeApplications(
    parentId: string,
    args: Prisma.SchemeApplicationFindManyArgs
  ): Promise<PrismaSchemeApplication[]> {
    return this.prisma.scheme
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .schemeApplications(args);
  }
}
