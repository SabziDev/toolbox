import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useCancelQuery = (queryKey) => {
  const queryClient = useQueryClient();

  return () => {
    if (queryClient.isFetching({ queryKey }) === 0) return;

    queryClient.cancelQueries({ queryKey });
    // TODO Toast Cancelled-Error Message
    toast.success("درخواست لغو شد");
    // toast.success("Request cancelled");
  };
};

export default useCancelQuery;
