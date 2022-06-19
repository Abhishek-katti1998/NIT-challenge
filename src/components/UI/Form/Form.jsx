import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import "./Form.css";
import { useSelector, useDispatch } from "react-redux";
import {
  actionFormik,
  actionCurLocation,
  actionLoad,
  actionToken,
} from "../../../action/action";
import validator from "../../../util/validator";
import { useFormik } from "formik";
import { login, signUp } from "../../../api/auth";
import { useEffect, useState } from "react";

const FormTemplate = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [err, setError] = useState("");
  //   const loading = useSelector((sel) => sel.loading);
  let curPath = useSelector((sel) => sel.path);
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  };
  const validate = (values) => validator(curPath, values);
  const onSubmit = (values) => {
    if (values.name && values.password && values.phoneNumber) {
      dispatch(actionLoad(true));
      signUp(
        values.name,
        values.email,
        values.password,
        values.phoneNumber
      ).then((e) => {
        // console.log("e", e);
        dispatch(actionToken(e.Token));
        dispatch(actionLoad(false));
      });
      formik.resetForm("");
      return;
    }
    if (values.name && values.password) {
      dispatch(actionLoad(true));
      login(values.name, values.password).then((e) => {
        console.log("token---->", e);
        if (e.Error) {
          setError(e.Error);
        }
        dispatch(actionToken(e.Token));
        dispatch(actionLoad(false));
      });
    }
    dispatch(actionFormik(formik));
    formik.resetForm("");
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  //   console.log("formik", formik?.values);
  //   console.log("Error", err);
  return (
    <div className="form-container">
      <h2>{location.pathname === "/login" ? "Login" : "SignUp"}</h2>
      <form className="form-auth" onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label className="label-auth">Name</label>
          <input
            onBlur={formik.handleBlur}
            value={formik.values.name}
            onChange={formik.handleChange}
            className="input-auth"
            type="name"
            placeholder="Name"
            name="name"
          ></input>
          {formik.errors.name && formik.touched.name ? (
            <div className="errors">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="form-control">
          {location.pathname === "/signUp" ? (
            <>
              <label className="label-auth" htmlFor="email">
                Email Id
              </label>
              <input
                onBlur={formik.handleBlur}
                value={formik.values.email}
                onChange={formik.handleChange}
                className="input-auth"
                type="email"
                placeholder="Email"
                name="email"
              ></input>
            </>
          ) : null}
          {formik.errors.email && formik.touched.email ? (
            <div className="errors">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-control">
          {location.pathname === "/signUp" && (
            <>
              <label className="label-auth" htmlFor="phoneNumber">
                Phone number
              </label>
              <input
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                className="input-auth"
                placeholder="Phone number(enter 9 digit number)"
                type="number"
                name="phoneNumber"
              ></input>
              {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
                <div className="errors">{formik.errors.phoneNumber}</div>
              ) : null}
            </>
          )}
        </div>
        <div className="form-control">
          <label className="label-auth" htmlFor="password">
            Password
          </label>
          <input
            onBlur={formik.handleBlur}
            value={formik.values.password}
            onChange={formik.handleChange}
            className="input-auth"
            placeholder="Password"
            type="password"
            name="password"
          ></input>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div className="errors">
              {formik.errors.password && formik.touched.password
                ? formik.errors.password
                : null}
            </div>
            <sub style={{ position: "relative", bottom: "20px" }}>
              minimum 8 charecters
            </sub>
          </div>
          <Link
            className="link"
            to={`${location.pathname === "/signUp" ? "/login" : "/signUp"}`}
          >
            {location.pathname === "/signUp" ? "Login" : "SignUp"}
          </Link>
        </div>
        <button
          style={
            props.loading ? { opacity: "0.5", cursor: "not-allowed" } : null
          }
          onClick={props.handleSubmit}
          type="submit"
          name={location.pathname === "/login" ? "LogIn" : "SignUp"}
          className="btnAuth"
        >
          {location.pathname === "/login" ? "LogIn" : "SignUp"}
        </button>
        <p
          style={{
            color: "red",
            position: "relative",
            top: "10px",
            left: "52px",
          }}
        >
          {err ? `${err} :(` : null}
        </p>
      </form>
    </div>
  );
};
export default FormTemplate;
