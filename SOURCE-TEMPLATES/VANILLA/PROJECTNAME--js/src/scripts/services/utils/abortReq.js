import CustomSwal from "@/libs/Swal/CustomSwal";

const abortReq = () => {
  const controller = new AbortController();

  const cancelReq = () => {
    if (controller.signal.aborted) return;

    controller.abort();
    CustomSwal.fire({
      icon: "success",
      // TODO Swal Messages
      title: "موفق",
      // title: "Successful",
      text: "درخواست لغو شد",
      // text: "Request cancelled",
    });
  };

  return { signal: controller.signal, cancelReq };
};

export default abortReq;
