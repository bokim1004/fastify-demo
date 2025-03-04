import { graphql, loadQuery } from "react-relay";
import { createRelayLoaderEnvironment } from "../relay/createRelayLoaderEnviroment";

const query = graphql`
  query homeQuery {
    ping
  }
`;

export async function loader() {
  // 무조건 서버에서만 실행된다!

  const environment = createRelayLoaderEnvironment();
  const queryRef = loadQuery(environment, query, {});
  const response = await queryRef.source?.toPromise();
}

export default function Home() {
  return <div> Hello world</div>;
}
