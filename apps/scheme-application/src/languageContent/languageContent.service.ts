import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LanguageContentServiceBase } from "./base/languageContent.service.base";

@Injectable()
export class LanguageContentService extends LanguageContentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
