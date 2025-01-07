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
import { UserProgressController } from "../userProgress.controller";
import { UserProgressService } from "../userProgress.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  completed: "true",
  createdAt: new Date(),
  id: "exampleId",
  lastAccessedAt: new Date(),
  progress: 42,
  startedAt: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  completed: "true",
  createdAt: new Date(),
  id: "exampleId",
  lastAccessedAt: new Date(),
  progress: 42,
  startedAt: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    completed: "true",
    createdAt: new Date(),
    id: "exampleId",
    lastAccessedAt: new Date(),
    progress: 42,
    startedAt: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  completed: "true",
  createdAt: new Date(),
  id: "exampleId",
  lastAccessedAt: new Date(),
  progress: 42,
  startedAt: new Date(),
  updatedAt: new Date(),
};

const service = {
  createUserProgress() {
    return CREATE_RESULT;
  },
  userProgresses: () => FIND_MANY_RESULT,
  userProgress: ({ where }: { where: { id: string } }) => {
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

describe("UserProgress", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UserProgressService,
          useValue: service,
        },
      ],
      controllers: [UserProgressController],
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

  test("POST /userProgresses", async () => {
    await request(app.getHttpServer())
      .post("/userProgresses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        lastAccessedAt: CREATE_RESULT.lastAccessedAt.toISOString(),
        startedAt: CREATE_RESULT.startedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /userProgresses", async () => {
    await request(app.getHttpServer())
      .get("/userProgresses")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          lastAccessedAt: FIND_MANY_RESULT[0].lastAccessedAt.toISOString(),
          startedAt: FIND_MANY_RESULT[0].startedAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /userProgresses/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userProgresses"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /userProgresses/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userProgresses"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        lastAccessedAt: FIND_ONE_RESULT.lastAccessedAt.toISOString(),
        startedAt: FIND_ONE_RESULT.startedAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /userProgresses existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/userProgresses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        lastAccessedAt: CREATE_RESULT.lastAccessedAt.toISOString(),
        startedAt: CREATE_RESULT.startedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/userProgresses")
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
