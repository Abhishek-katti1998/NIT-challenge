import React, { useEffect } from "react";
import { Card } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import FormTemplate from "../Form/Form";
import { useDispatch, useSelector } from "react-redux";
import "./auth.css";
import LinearIndeterminate from "../loader";
import { actionCurLocation } from "../../../action/action";

const SignUp = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((sel) => sel.token);
  const loading = useSelector((sel) => sel.loading);
  useEffect(() => {
    dispatch(actionCurLocation(location.pathname));
    if (token) navigate("/");
    // props.setLocationHandler(location);
  }, []);
  return (
    <Card>
      {loading ? <LinearIndeterminate /> : null}
      <FormTemplate />
    </Card>
  );
};
export default SignUp;
