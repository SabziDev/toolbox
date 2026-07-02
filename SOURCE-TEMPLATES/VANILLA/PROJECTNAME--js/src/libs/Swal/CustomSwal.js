import Swal from "sweetalert2";

const CustomSwal = Swal.mixin({
  // TODO Swal Btn Message && Color
  confirmButtonText: "باشه",
  // confirmButtonText: "OK",
  confirmButtonColor: "COLOR",
});

export default CustomSwal;
