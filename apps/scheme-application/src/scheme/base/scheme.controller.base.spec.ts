import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { SchemeController } from "../scheme.controller";
import { SchemeService } from "../scheme.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  applicationProcess: "exampleApplicationProcess",
  audioDescription: "exampleAudioDescription",
  benefits: "exampleBenefits",
  category: "exampleCategory",
  createdAt: new Date(),
  description: "exampleDescription",
  eligibility: "exampleEligibility",
  icon: "exampleIcon",
  id: "exampleId",
  title: "exampleTitle",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  applicationProcess: "exampleApplicationProcess",
  audioDescription: "exampleAudioDescription",
  benefits: "exampleBenefits",
  category: "exampleCategory",
  createdAt: new Date(),
  description: "exampleDescription",
  eligibility: "exampleEligibility",
  icon: "exampleIcon",
  id: "exampleId",
  title: "exampleTitle",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    applicationProcess: "exampleApplicationProcess",
    audioDescription: "exampleAudioDescription",
    benefits: "exampleBenefits",
    category: "exampleCategory",
    createdAt: new Date(),
    description: "exampleDescription",
    eligibility: "exampleEligibility",
    icon: "exampleIcon",
    id: "exampleId",
    title: "exampleTitle",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  applicationProcess: "exampleApplicationProcess",
  audioDescription: "exampleAudioDescription",
  benefits: "exampleBenefits",
  category: "exampleCategory",
  createdAt: new Date(),
  description: "exampleDescription",
  eligibility: "exampleEligibility",
  icon: "exampleIcon",
  id: "exampleId",
  title: "exampleTitle",
  updatedAt: new Date(),
};

const service = {
  createScheme() {
    return CREATE_RESULT;
  },
  schemes: () => FIND_MANY_RESULT,
  scheme: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Scheme", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SchemeService,
          useValue: service,
        },
      ],
      controllers: [SchemeController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /schemes", async () => {
    await request(app.getHttpServer())
      .post("/schemes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /schemes", async () => {
    await request(app.getHttpServer())
      .get("/schemes")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /schemes/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/schemes"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /schemes/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/schemes"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /schemes existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/schemes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/schemes")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
