import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const logOutNotify = (submitHandler) => {
  confirmAlert({
    title: "Confirm to Log Out?",
    message: "Are you sure to do this.",
    buttons: [
      {
        label: "Yes",
        onClick: () => submitHandler(),
      },
      {
        label: "No",
        onClick: () => {},
      },
    ],
  });
};

export default logOutNotify;
