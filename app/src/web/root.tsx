import { useMemo } from "react";
import { RelayEnvironmentProvider } from "react-relay";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import favicon from "./assets/favicon.png";
import { createRelayRenderEnvironment } from "./relay/createRelayRenderEnviroment";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href={favicon} />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  // 렌더링될 때마다 호출되니까 한번만 생성되게 useMemo로 감싸줌
  const environment = useMemo(() => createRelayRenderEnvironment(), []);
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Outlet />
    </RelayEnvironmentProvider>
  );
}
