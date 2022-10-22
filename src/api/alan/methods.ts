import { Data } from ".";

type TSignal = AbortSignal | null;

export const getName = async (signal: TSignal = null): Promise<Data> => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_URL + "/alan", {
      signal,
    });
    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message);
    }

    return responseData;
  } catch (error: unknown) {
    throw new Error(error as string);
  }
};
