import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SchemeApplicationServiceBase } from "./base/schemeApplication.service.base";

@Injectable()
export class SchemeApplicationService extends SchemeApplicationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
