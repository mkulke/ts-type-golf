interface App {
  bla?: boolean, 
}

type SetupParams = Parameters<typeof setupApp>;
type Tail<T extends any[]> = T extends [head: any, ...tail: infer U] ? U : never;
type MakeParams = Tail<SetupParams>;

function makeApp(...params: MakeParams): App {
  const app = {}
  setupApp(app, ...params);
  return app;
}


function setupApp(app: App, bla: boolean): void {
  app.bla = bla;
}

makeApp(true)
// will fail
// makeApp(true, 123)
