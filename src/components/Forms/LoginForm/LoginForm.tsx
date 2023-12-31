"use client";

import PrimaryButton from "@/components/Buttons/PrimaryButton";
import InputField from "@/components/FormComponents/InputField";
import FormWrapper from "@/components/Wrappers/FormWrapper";
import { loginUser } from "@/queries/Auth";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "@/utils/firebaseConfig";
import { toast } from "react-toastify";

interface CustomWindow extends Window {
  recaptchaVerifier?: any;
}

declare var window: CustomWindow;

export default function LoginForm() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isLoginSuccess, setIsLoginSuccess] = useState<any>(null);
  const [confirmResult, setConfirmResult] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "normal",
          callback: (response: any) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            // ...
          },
          "expired-callback": () => {
            // Response expired. Ask user to solve reCAPTCHA again.
            // ...
          },
        }
      );
    }
  }, [auth]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      return;
    }

    const confirmation = await signInWithPhoneNumber(
      auth,
      "+91" + phone,
      window.recaptchaVerifier
    );
    setConfirmResult(confirmation);
    setIsOtpSent(true);
  };

  const handleOtpHandler = (e: any) => {
    e.preventDefault();
    confirmResult?.confirm(otp).then(async (result: any) => {
      const res = await loginUser(JSON.stringify({ phone }));
      const user = await res?.json();
      if (res?.ok && user) {
        toast.success("Login Successfully!!!");
        setIsLoginSuccess(JSON.stringify(user));
      } else {
        toast.error("Something went wrong!!!");
      }
    });
  };

  useEffect(() => {
    if (isLoginSuccess) {
      localStorage.AUTH = isLoginSuccess;
      redirect("/");
    }
  }, [isLoginSuccess]);

  return (
    <>
      {!isOtpSent && (
        <FormWrapper
          label="Welcome Back"
          link={{
            link: "/register",
            linkLabel: "Sign Up",
            linkName: "Don't have an account?",
          }}
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-[22px] w-[85%] mx-auto max-[550px]:w-[95%]"
          >
            <InputField
              type="mobile"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <div id="recaptcha-container"></div>
            <PrimaryButton
              className="w-[350px] mx-auto max-[550px]:w-full"
              label="Send otp"
            />
          </form>
        </FormWrapper>
      )}

      {isOtpSent && (
        <FormWrapper label="Verify Otp" privacy={true}>
          <div>
            <h3 className="text-gray-500 text-center text-sm not-italic font-normal">
              We have sent and OTP to the Number
            </h3>
            <p className="text-black text-center text-sm not-italic font-normal">
              {phone}
            </p>
          </div>
          <form
            onSubmit={handleOtpHandler}
            className="flex flex-col gap-[22px] w-[85%] mx-auto mt-[28px]"
          >
            <OTPInput
              containerStyle={{ justifyContent: "center", gap: "25px" }}
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => (
                <input
                  {...props}
                  className="outline-none text-center  sm-3 text-black rounded-lg"
                  style={{ width: "60px", height: "60px" }}
                />
              )}
            />
            <PrimaryButton
              className="w-[350px] mx-auto mt-[22px] max-[550px]:w-full"
              label="Verify otp"
            />
          </form>
          <p className="text-gray-500 text-center text-sm not-italic font-normal mt-5">
            Resend Otp:<span className="text-red-700">58s</span>
          </p>
        </FormWrapper>
      )}
    </>
  );
}
