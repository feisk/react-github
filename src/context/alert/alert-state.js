import React, { useReducer } from "react";

import { SHOW_ALERT, HIDE_ALERT } from "./types";
import { AlertContext } from "./alert-context";
import { alertReducer } from "./alert-reducer";

const AlertState = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, null);

  const hide = () => dispatch({ type: HIDE_ALERT });

  const show = (text, type = "secondary") => {
    dispatch({
      type: SHOW_ALERT,
      payload: { text, type },
    });
  };

  return (
    <AlertContext.Provider value={{ hide, show, alert: state }}>
      {children}
    </AlertContext.Provider>
  );
};

export { AlertState };
