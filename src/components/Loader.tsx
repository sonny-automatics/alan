import { useIsFetching, useIsMutating } from "react-query";

export const Loader = (): JSX.Element => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  const isLoading = Boolean(isFetching || isMutating);

  return <>{isLoading && <div>Loader...</div>}</>;
};
