import CustomSwal from "@/libs/Swal/CustomSwal";

const callApi = async (apiFn) => {
  try {
    return await apiFn();
  } catch (error) {
    CustomSwal.fire({
      // TODO Swal Messages
      icon: "error",
      title: "خطا",
      // title: "Error",
      text: error.message,
    });

    throw error;
  }
};

export default callApi;
