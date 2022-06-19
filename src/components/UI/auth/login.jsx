import React, { useEffect } from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
// import FormikControl from './FormikControl'
import { Card } from "@mui/material";
import { Navigate, useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import FormTemplate from "../Form/Form";
import "./auth.css";
import LinearIndeterminate from "../loader";
import { actionCurLocation } from "../../../action/action";
const LogInForm = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const token = useSelector((sel) => sel.token);
  const loading = useSelector((sel) => sel.loading);
  const dispatch = useDispatch();

  //   console.log(token);
  if (token) navigate("/");
  useEffect(() => {
    dispatch(actionCurLocation(location.pathname));

    // props.setLocationHandler(location);
  }, []);
  return (
    <Card>
      {loading ? <LinearIndeterminate /> : null}
      <FormTemplate />
    </Card>
  );
};
export default LogInForm;
