interface CheckMarkProps {
  className?: string;
}

export default function CheckMarkIcon({ className }: CheckMarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width="16"
      height="17"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="black"
      strokeOpacity={0.5}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}
