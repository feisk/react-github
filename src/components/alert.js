import React, { useContext } from "react";

import { AlertContext } from "../context/alert";

const Alert = () => {
  const { alert, hide } = useContext(AlertContext);

  return alert ? (
    <div
      className={`alert alert-${alert.type} alert-dismissible}`}
      role="alert"
    >
      {alert.text}
      <button type="button" className="close" aria-label="Close" onClick={hide}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  ) : null;
};

export { Alert };
