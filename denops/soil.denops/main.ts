import { Denops, isArray, isString } from "./deps.ts";
import { execute, vars } from "./deps.ts";

export async function main(denops: Denops): Promise<void> {
  await denops.cmd(
    `command! -nargs=1 Hello call denops#notify("${denops.name}", "hello", [<f-args>])`,
  );

  await denops.cmd(
    `command! -nargs=1 Soil call denops#notify("${denops.name}", "hello", [<f-args>])`,
  );

  denops.dispatcher = {
    async hello(arg: unknown): Promise<void> {
      if (isString(arg)) {
        console.log("hello", arg);
      }
      await Promise.resolve();
    },

    /**
     * 接続作成コマンド command of create a connection
     */
    async crateConnection(arg: unknown): Promise<void> {
      if (isArray(arg)) {
        for (const [index, value] of arg.entries()) {
          console.log(index + ": ", value);
        }
      }
      await Promise.resolve();
    },
  };
}
