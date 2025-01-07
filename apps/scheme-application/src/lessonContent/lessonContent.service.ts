import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LessonContentServiceBase } from "./base/lessonContent.service.base";

@Injectable()
export class LessonContentService extends LessonContentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
