interface Props {
  error: unknown;
}

export const ErrorAccordion = ({ error }: Props) => {
  return <div>{error?.toString() ?? "Keine Fehlermeldung verfügbar"}</div>;
};
