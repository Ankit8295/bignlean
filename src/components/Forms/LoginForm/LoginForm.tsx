"use client";

import PrimaryButton from "@/components/Buttons/PrimaryButton";
import InputField from "@/components/FormComponents/InputField";
import FormWrapper from "@/components/Wrappers/FormWrapper";
import { loginUser } from "@/queries/Auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [phone, setPhone] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      return;
    }
    const res = await loginUser(JSON.stringify({ phone }));
    const user = await res?.json();
    if (res?.ok && user) {
      localStorage.setItem("AUTH", JSON.stringify(user));
    }
    router.push("/");
  };
  return (
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
        <PrimaryButton
          className="w-[350px] mx-auto max-[550px]:w-full"
          label="Send otp"
        />
      </form>
    </FormWrapper>
  );
}
