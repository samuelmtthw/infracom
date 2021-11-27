import Swal from "sweetalert2";

function alertSuccess(message) {
  const data = {
    title: "Yash!",
    text: message,
    icon: "success",
  };

  Swal.fire(data);
}

function alertError(message) {
  const data = {
    title: "Ooof...",
    text: message,
    icon: "error",
  };

  Swal.fire(data);
}

export { alertSuccess, alertError };
