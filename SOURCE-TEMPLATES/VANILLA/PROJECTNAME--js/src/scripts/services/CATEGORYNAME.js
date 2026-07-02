import api from "./axios/api";

const getNameApi = async () => {
  // TODO Req End-Point
  const res = await api.get("/NAME", {
    // TODO Req Paramas?
    params: { NAME: VALUE },
  });

  return res.data;
};

const createNameApi = async ({ data }) => {
  // TODO Req End-Point
  const res = await api.post("/NAME", data);

  return res.data;
};

const updateNameApi = async ({ id, data }) => {
  // TODO Req End-Point
  const res = await api.put(`/NAME/${id}`, data);

  return res.data;
};

const deleteNameApi = async ({ id }) => {
  // TODO Req End-Point
  const res = await api.delete(`/NAME/${id}`);

  return res.data;
};

export { createNameApi, deleteNameApi, getNameApi, updateNameApi };
