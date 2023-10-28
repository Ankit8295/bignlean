import PrimaryButton from "@/components/Buttons/PrimaryButton";
import InputField from "@/components/FormComponents/InputField";
import FormWrapper from "@/components/Wrappers/FormWrapper";

export default function RegisterForm() {
  return (
    <FormWrapper
      label="Register"
      link={{
        link: "/login",
        linkLabel: "Sign In",
        linkName: "Allready have an account?",
      }}
    >
      <form className="flex flex-col gap-[22px] w-[85%] mx-auto max-[550px]:w-[95%]">
        <InputField type="mobile" placeholder="Mobile Number" />
        <InputField type="text" placeholder="Referral Code" />
        <PrimaryButton
          className="w-[350px] mx-auto max-[550px]:w-full"
          label="Send otp"
        />
      </form>
    </FormWrapper>
  );
}
