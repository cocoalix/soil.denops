import { Denops, isNumber, isString } from "./deps.ts";
import { ensure, is } from "./deps.ts";
import { execute, vars } from "./deps.ts";

import { DbType } from "./types.ts";

export async function main(denops: Denops): Promise<void> {
  denops.dispatcher = {
    //async hello(arg: unknown): Promise<void> {
    //  if (isString(arg)) {
    //    console.log("hello", arg);
    //  }
    //  await Promise.resolve();
    //},

    /**
     * 接続作成コマンド command of create a connection
     */
    async createConnection(
      aName: unknown,
      aType: unknown,
      aHost: unknown,
      aPort: unknown,
      aUser: unknown,
      aIdentity: unknown,
    ): Promise<void> {
      const name = ensure(aName, isString);
      const type = ensure(aType, isString) as DbType;
      const host = ensure(aHost, isString);
      const port = ensure(aPort, isNumber);
      const user = ensure(aUser, isString);
      const identity = ensure(aIdentity, isString);

      console.log(
        name + " " + type + " " + host + " " + port + " " + user + " " +
          identity,
      );

      await Promise.resolve();
    },
  };

  //await denops.cmd(
  //  `command! -nargs=1 Hello call denops#notify("${denops.name}", "hello", [<f-args>])`,
  //);

  await denops.cmd(
    `command! -nargs=6 Soil call denops#notify("${denops.name}", "createConnection", [<f-args>])`,
  );
}
