/* eslint-disable unicorn/no-global-object-property-assignment */

// TODO React-Query - Toaster
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";

// TODO React-Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },

  queryCache: new QueryCache({
    onError: (err) => err.isShowToast !== false && toast.error(err.message),
  }),
  mutationCache: new MutationCache({
    onError: (err) => err.isShowToast !== false && toast.error(err.message),
  }),
});
window.__TANSTACK_QUERY_CLIENT__ = queryClient;

const AppProviders = () => {
  return (
    // TODO React-Query
    <QueryClientProvider client={queryClient}>
      {/* TODO Toast Bg && TC */}
      <Toaster
        toastOptions={{
          style: { background: "COLOR", color: "COLOR" },
        }}
      />
    </QueryClientProvider>
  );
};

export default AppProviders;
