import React from "react";
import s from "./Login.module.css";
import { AppStateType } from "../../redux/redux-store";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../redux/reducers/auth-reducer";
import { LoginFormType, LoginReduxForm } from "./Login";

const LoginPage = (props: LoginContainerType) => {
  const onSubmit = (formData: LoginFormType) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha,
    );
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div className={s.loginPage}>
      <div className={s.infoForLoginContainer}>
        <div>
          <a
            className={s.regLink}
            href="https://social-network.samuraijs.com/signUp"
          >
            Here
          </a>
          <span>
            you can create a new account, or just use this public email and
            password for logging in:
          </span>
        </div>
        <div className={s.emailAndPassContainer}>
          <span>
            email: <span className={s.loginData}>free@samuraijs.com</span>
          </span>
          <span>
            pass: <span className={s.loginData}>free</span>
          </span>
        </div>
      </div>
      <span className={s.mainTitle}>Login</span>
      <LoginReduxForm captchaURL={props.captchaUrl} onSubmit={onSubmit} />
    </div>
  );
};

type mapStateToPropsType = {
  isAuth: boolean;
  preloader: boolean;
  userId: string | null;
  captchaUrl: string | null;
};

type mapDispatchToPropsType = {
  login: (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha?: string | null,
  ) => void;
};
type LoginContainerType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    preloader: state.preloader.preloader,
    isAuth: state.auth.isAuth,
    userId: state.auth.userId,
    captchaUrl: state.auth.captchaURL,
  };
};

export default connect(mapStateToProps, { login })(LoginPage);
