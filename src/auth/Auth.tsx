import { useState } from "react";
import { CookieHandler } from "../utils/cookie.class";
import { supabase } from "../services/supabase.client";
import { StorageHandler } from "../utils/storage.class";
import { AlertService } from "../services/alert.service";
import { FormValidator } from "../utils/form-validator.class";

function Auth(props: any) {
  const formValidator = new FormValidator();
  const [disable, setDisable] = useState<boolean>(true);
  const [form, setForm] = useState<{
    email: string;
    password: string;
    InvalidPasswordMessage?: string;
    InvalidEmailMessage?: string;
  }>({
    email: "",
    password: "",
  });

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setDisable(true);
    const x = await supabase.auth
      .signIn({ ...form })
      .then(({ user, session, error }) => {
        if (session) {
          CookieHandler.setToken(session.access_token);
          StorageHandler.setUserData(user);
          if (typeof props.onLoginSuccess === "function")
            window.location.href = "/";
          AlertService.Success("You loged in successfully");
        }
        if (error) {
          AlertService.Error(error.message);
        }
      });
  };

  const setValidation = () => {
    let new_form = { ...form };
    new_form.InvalidEmailMessage =
      form.email && !formValidator.isEmailValid(form.email)
        ? "please enter a email in currect format"
        : "";
    new_form.InvalidPasswordMessage =
      form.password && !formValidator.isPasswordValid(form.password)
        ? "please enter valid password (more than 6 character)"
        : "";
    setForm(new_form);
  };

  const onFormChange = (event: any) => {
    let new_form = { ...form, [event.target.name]: event.target.value };
    setDisable(
      !(
        formValidator.isEmailValid(new_form.email) &&
        formValidator.isPasswordValid(new_form.password)
      )
    );
    setForm(new_form);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[400px]  p-4 rounded-lg flex flex-col justify-center">
        <span className="text-3xl font-bold pb-4"> Login</span>
        <form onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                email <span className=" text-red-700">*</span>
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              onBlur={setValidation}
              onChange={(event) => onFormChange(event)}
              required
              className="input input-bordered"
            />
            {form.InvalidEmailMessage ? (
              <span className="text-red-600 transition-all text-xs py-1">
                {form.InvalidEmailMessage}
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                password <span className=" text-red-700">*</span>
              </span>
            </label>
            <input
              type="password"
              required
              placeholder="password"
              onBlur={setValidation}
              onChange={(event) => onFormChange(event)}
              name="password"
              className="input input-bordered"
            />
            {form.InvalidPasswordMessage ? (
              <span className="text-red-600 transition-all text-xs py-1">
                {form.InvalidPasswordMessage}
              </span>
            ) : (
              ""
            )}
          </div>
          <div
            id="extra_actions"
            className="flex justify-between items-center py-1 text-sm text-blue-500"
          >
            <a href="#">sign up</a>
            <a href="#">forget password</a>
          </div>
          <button
            disabled={disable}
            type="submit"
            className="btn btn-success mt-14 w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Auth;
