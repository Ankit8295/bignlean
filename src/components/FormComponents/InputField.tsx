type Props = {
  label?: string;
  type: "mobile" | "text" | "email";
  placeholder?: string;
  error?: string;
  className?: string;
};
export default function InputField({
  type,
  label,
  placeholder,
  error,
  className,
}: Props) {
  return (
    <label className={`flex flex-col ${className}`}>
      {label && <span>{label}</span>}
      {type === "mobile" ? (
        <div className="w-full rounded-[15px] flex items-center sm-3 overflow-hidden">
          <span className="px-5 border-r border-gray-400 text-sm not-italic font-normal">
            +91
          </span>
          <input
            type="text"
            className="w-full outline-none p-5  text-sm not-italic font-normal"
            placeholder={placeholder}
            maxLength={10}
          />
        </div>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="w-full rounded-[15px] outline-none p-5 text-sm not-italic font-normal sm-3"
        />
      )}
      {error && <span>{error}</span>}
    </label>
  );
}
