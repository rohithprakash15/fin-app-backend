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
  SchemeApplication as PrismaSchemeApplication,
  Scheme as PrismaScheme,
  User as PrismaUser,
} from "@prisma/client";

export class SchemeApplicationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SchemeApplicationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.schemeApplication.count(args);
  }

  async schemeApplications(
    args: Prisma.SchemeApplicationFindManyArgs
  ): Promise<PrismaSchemeApplication[]> {
    return this.prisma.schemeApplication.findMany(args);
  }
  async schemeApplication(
    args: Prisma.SchemeApplicationFindUniqueArgs
  ): Promise<PrismaSchemeApplication | null> {
    return this.prisma.schemeApplication.findUnique(args);
  }
  async createSchemeApplication(
    args: Prisma.SchemeApplicationCreateArgs
  ): Promise<PrismaSchemeApplication> {
    return this.prisma.schemeApplication.create(args);
  }
  async updateSchemeApplication(
    args: Prisma.SchemeApplicationUpdateArgs
  ): Promise<PrismaSchemeApplication> {
    return this.prisma.schemeApplication.update(args);
  }
  async deleteSchemeApplication(
    args: Prisma.SchemeApplicationDeleteArgs
  ): Promise<PrismaSchemeApplication> {
    return this.prisma.schemeApplication.delete(args);
  }

  async getScheme(parentId: string): Promise<PrismaScheme | null> {
    return this.prisma.schemeApplication
      .findUnique({
        where: { id: parentId },
      })
      .scheme();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.schemeApplication
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
