import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ component: Component, ...rest }) {
  let selectuser = useSelector(state => state.dataCollection);
  console.log(selectuser);
  return (
    <Route
      {...rest}
      render={props =>
        selectuser.length !== 0 ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}
export default PrivateRoute;
