import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SchemeServiceBase } from "./base/scheme.service.base";

@Injectable()
export class SchemeService extends SchemeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
