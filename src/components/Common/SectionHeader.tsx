type Props = {
  label: string;
  showBtn?: boolean;
  btnLabel?: string;
  onClick?: () => void;
};

export default function SectionHeader({
  label,
  showBtn,
  btnLabel,
  onClick,
}: Props) {
  return (
    <div className="flex items-center justify-between">
      <p className="text-black text-xl not-italic font-semibold">{label}</p>
      {showBtn && (
        <button
          onClick={onClick}
          className="text-sm not-italic font-semibold text-gradient"
        >
          {btnLabel}
        </button>
      )}
    </div>
  );
}
