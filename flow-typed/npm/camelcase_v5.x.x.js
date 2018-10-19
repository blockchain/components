// flow-typed signature: b7185ff11f80859485b8105d9313195e
// flow-typed version: 563901ec25/camelcase_v5.x.x/flow_>=v0.35.x

declare module "camelcase" {
  declare module.exports: (
    input: string | string[],
    options?: { pascalCase?: boolean }
  ) => string;
}
