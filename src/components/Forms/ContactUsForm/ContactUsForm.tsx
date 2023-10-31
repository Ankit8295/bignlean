import PrimaryButton from "@/components/Buttons/PrimaryButton";
import InputField from "@/components/FormComponents/InputField";

export default function ContactUsForm() {
  return (
    <div>
      <form className="flex flex-col gap-5">
        <InputField type="text" placeholder="Name" shadow={false} />
        <InputField type="email" placeholder="Email" shadow={false} />
        <InputField type="mobile" placeholder="Contact No" shadow={false} />
        <InputField type="textarea" placeholder="Message" shadow={false} />
        <PrimaryButton label="Send" />
      </form>
    </div>
  );
}
