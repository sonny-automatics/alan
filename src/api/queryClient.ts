const asyncError = (error: unknown) => {
  const message = error instanceof Error ? error.message : error
  console.log('Query client: ', message)
}

export const queryOptions = {
  defaultOptions: {
    queries: {
      onError: asyncError,
      staleTime: 0,
      cacheTime: 30000,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
    },

    mutations: {
      onError: asyncError,
    },
  },
}
