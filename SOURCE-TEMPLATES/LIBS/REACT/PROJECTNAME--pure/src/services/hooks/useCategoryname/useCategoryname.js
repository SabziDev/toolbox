import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useNameQuery = () => {
  // TODO Query-Key && data: name && queryFn
  const queryKey = ["NAME"];

  const { data: name, ...rest } = useQuery({
    queryKey,
    queryFn: ({ signal }) => getNameApi({ signal }),
  });

  return { name, ...rest };
};

const useCreateNameMutation = () => {
  const queryClient = useQueryClient();

  // TODO Query-Key && mutate: createName && queryFn
  const queryKey = ["NAME"];

  const { mutate: createName, ...rest } = useMutation({
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

  return { createName, ...rest };
};

const useUpdateNameMutation = () => {
  const queryClient = useQueryClient();

  // TODO Query-Key && mutate: updateName && queryFn
  const queryKey = ["NAME"];

  const { mutate: updateName, ...rest } = useMutation({
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

  return { updateName, ...rest };
};

const useDeleteNameMutation = () => {
  const queryClient = useQueryClient();

  // TODO Query-Key && mutate: deleteName && queryFn
  const queryKey = ["NAME"];

  const { mutate: deleteName, ...rest } = useMutation({
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

  return { deleteName, ...rest };
};
