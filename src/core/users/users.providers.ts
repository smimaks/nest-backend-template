import { Provider } from '@nestjs/common';
import { UsersRepository } from '@/core/users/repositories/users.repository';
import { IUsersRepository } from '@/core/users/types/users-repository.interface';
import { UsersService } from '@/core/users/services/users.service';
import { IUsersService } from '@/core/users/types/users-service.interface';
import { UsersTokensService } from '@/core/users/services/users-tokens.service';
import { IUsersTokensService } from '@/core/users/types/users-tokens-service.interface';
import { CreateUserCase } from '@/core/users/cases/create-user.case';
import { ICreateUserCase } from '@/core/users/types/create-user-case.interface';
import { LoginCase } from '@/core/users/cases/login.case';
import { ILoginCase } from '@/core/users/types/login-case.interface';
import { RefreshTokensCase } from '@/core/users/cases/refresh-tokens.case';
import { IRefreshTokensCase } from '@/core/users/types/refresh-tokens-case.interface';

export const USERS_DI_CONSTANTS = {
  USERS_REPOSITORY: Symbol('USERS_REPOSITORY'),
  USERS_SERVICE: Symbol('USERS_SERVICE'),
  USERS_TOKENS_SERVICE: Symbol('USERS_TOKENS_SERVICE'),
  CREATE_USER_CASE: Symbol('CREATE_USER_CASE'),
  LOGIN_CASE: Symbol('LOGIN_CASE'),
  REFRESH_TOKENS_CASE: Symbol('REFRESH_TOKENS_CASE'),
};

export const publicProviders: Provider[] = [
  {
    provide: USERS_DI_CONSTANTS.USERS_TOKENS_SERVICE,
    useClass: UsersTokensService,
  } satisfies Provider<IUsersTokensService>,
  {
    provide: USERS_DI_CONSTANTS.CREATE_USER_CASE,
    useClass: CreateUserCase,
  } satisfies Provider<ICreateUserCase>,
  {
    provide: USERS_DI_CONSTANTS.LOGIN_CASE,
    useClass: LoginCase,
  } satisfies Provider<ILoginCase>,
  {
    provide: USERS_DI_CONSTANTS.REFRESH_TOKENS_CASE,
    useClass: RefreshTokensCase,
  } satisfies Provider<IRefreshTokensCase>,
];

export const providers: Provider[] = [
  ...publicProviders,
  {
    provide: USERS_DI_CONSTANTS.USERS_REPOSITORY,
    useClass: UsersRepository,
  } satisfies Provider<IUsersRepository>,
  {
    provide: USERS_DI_CONSTANTS.USERS_SERVICE,
    useClass: UsersService,
  } satisfies Provider<IUsersService>,
];
