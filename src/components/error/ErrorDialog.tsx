interface Props {
  error: unknown;
  handleError: (...args: Array<unknown>) => void;
}

export const ErrorDialog = ({ error, handleError }: Props): JSX.Element => {
  return (
    <div>
      <div>{error!.toString()}</div>
      <button onClick={handleError}>Erneut versuchen</button>;
    </div>
  );
};
