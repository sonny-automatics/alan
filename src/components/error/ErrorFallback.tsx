import { ErrorDialog } from "./ErrorDialog";

interface Props {
  error: unknown;
  resetErrorBoundary: (...args: Array<unknown>) => void;
}

export const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: Props): JSX.Element => {
  return <ErrorDialog error={error} handleError={resetErrorBoundary} />;
};
