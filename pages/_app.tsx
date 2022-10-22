import type { AppProps } from "next/app";
import { useState } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryOptions } from "../src/api/queryClient";
import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { Loader } from "../src/components/Loader";
import { ErrorBoundaryComponent } from "../src/components/error";

function MyApp({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) {
  const [queryClient] = useState(() => new QueryClient(queryOptions));

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Loader />
        <ErrorBoundaryComponent>
          <Component {...pageProps} />
        </ErrorBoundaryComponent>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
