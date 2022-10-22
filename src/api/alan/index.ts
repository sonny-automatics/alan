import { useQuery } from "react-query";
import { useErrorHandler } from "react-error-boundary";
import { queryKey } from "../key";
import { getName } from "./methods";

export interface Data {
  name: string;
}

interface DataFallback {
  name: "";
}

export const useName = (): Data | DataFallback => {
  const handleError = useErrorHandler();
  const fallback: DataFallback = { name: "" };

  const {
    data = fallback,
    isError,
    error,
  } = useQuery([queryKey.ALAN], ({ signal }) => getName(signal));

  if (isError) {
    handleError(error);
  }

  return data;
};
