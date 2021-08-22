import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UserLogged = createParamDecorator(
  (_: string, ctx: ExecutionContext) => {
    const arg = ctx?.getArgs();
    const type = ctx?.getType();

    return type === 'http' ? arg?.[0]?.user : arg?.[2]?.req.user;
  },
);
