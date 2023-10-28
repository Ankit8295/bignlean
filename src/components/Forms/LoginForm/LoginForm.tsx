"use client";

import PrimaryButton from "@/components/Buttons/PrimaryButton";
import InputField from "@/components/FormComponents/InputField";
import FormWrapper from "@/components/Wrappers/FormWrapper";

export default function LoginForm() {
  return (
    <FormWrapper
      label="Welcome Back"
      link={{
        link: "/register",
        linkLabel: "Sign Up",
        linkName: "Don't have an account?",
      }}
    >
      <form className="flex flex-col gap-[22px] w-[85%] mx-auto max-[550px]:w-[95%]">
        <InputField type="mobile" placeholder="Mobile Number" />
        <PrimaryButton
          className="w-[350px] mx-auto max-[550px]:w-full"
          label="Send otp"
        />
      </form>
    </FormWrapper>
  );
}
