import useSWR, { SWRResponse, Fetcher } from "swr";

export const useAPI = <T>(url: string): SWRResponse<T, Error> => {
  const fetcher: Fetcher<T, string> = async () => {
    const res = await fetch(url);
    if (!res.ok) throw new Error("An error occurred while fetching the data.");

    console.log(url, res);

    const json = (await res.json()) as { data: T };
    return json.data;
  };
  return useSWR<T, Error>(url, fetcher);
};
