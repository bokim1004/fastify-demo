import { Environment, Network, RecordSource, Store } from "relay-runtime";

export function createRelayRenderEnvironment() {
  //React에서 동작
  const network = Network.create(async (operation, variables, cacheConfig) => {
    const response = await fetch("/graphql", {
      method: "post",
      body: JSON.stringify({
        query: operation?.text,
        variables,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      signal: cacheConfig.metadata?.signal as AbortSignal,
    });

    return await response.json();
  });

  const store = new Store(new RecordSource());

  const environment = new Environment({
    network,
    store,
  });

  return environment;
}
