import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import {
  createNameApi,
  deleteNameApi,
  getNameApi,
  updateNameApi,
} from "@/services/CATEGORYNAME";

const useNameQuery = () => {
  // TODO Query-Key
  const queryKey = ["NAME"];

  const { data, ...rest } = useQuery({
    queryKey,
    queryFn: () => getNameApi(),
  });

  return { data, ...rest };
};

const useCreateNameMutation = () => {
  const queryClient = useQueryClient();

  // TODO Query-Key
  const queryKey = ["NAME"];

  const { mutate, ...rest } = useMutation({
    mutationFn: ({ data }) => createNameApi({ data }),

    // TODO Reset-Form?
    onSuccess: (_, { resetForm }) => {
      queryClient.invalidateQueries({
        queryKey,
      });

      // TODO onSuccess Message
      toast.success("MESSAGE");
      resetForm();
    },
  });

  return { mutate, ...rest };
};

const useUpdateNameMutation = () => {
  const queryClient = useQueryClient();

  // TODO Query-Key
  const queryKey = ["NAME"];

  const { mutate, ...rest } = useMutation({
    mutationFn: ({ id, data }) => updateNameApi({ id, data }),

    // TODO Reset-Form?
    onSuccess: (_, { id, data, resetForm }) => {
      const cachedItems = queryClient.getQueryData(queryKey);
      const updatedItems = cachedItems.map((cachedItem) =>
        cachedItem.id === id ? { ...cachedItem, ...data } : cachedItem,
      );
      queryClient.setQueryData(queryKey, updatedItems);

      // TODO onSuccess Message
      toast.success("MESSAGE");
      resetForm();
    },
  });

  return { mutate, ...rest };
};

const useDeleteNameMutation = () => {
  const queryClient = useQueryClient();

  // TODO Query-Key
  const queryKey = ["NAME"];

  const { mutate, ...rest } = useMutation({
    mutationFn: ({ id }) => deleteNameApi({ id }),

    onSuccess: (_, { id }) => {
      const cachedItems = queryClient.getQueryData(queryKey);
      const updatedItems = cachedItems.filter(
        (cachedItem) => cachedItem.id !== id,
      );
      queryClient.setQueryData(queryKey, updatedItems);

      // TODO onSuccess Message
      toast.success("MESSAGE");
    },
  });

  return { mutate, ...rest };
};

export {
  useCreateNameMutation,
  useDeleteNameMutation,
  useNameQuery,
  useUpdateNameMutation,
};
