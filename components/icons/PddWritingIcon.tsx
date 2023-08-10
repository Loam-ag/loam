interface Props {
  color?: string;
}

const PddWritingIcon = ({ color }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
  >
    <path
      d="M7 7V5.5L11.5 1L13 2.5L8.5 7H7Z"
      stroke={color || 'white'}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.6 7H2.5C2.10218 7 1.72064 7.15804 1.43934 7.43934C1.15804 7.72064 1 8.10218 1 8.5C1 8.89782 1.15804 9.27936 1.43934 9.56066C1.72064 9.84196 2.10218 10 2.5 10H11.5C11.8978 10 12.2794 10.158 12.5607 10.4393C12.842 10.7206 13 11.1022 13 11.5C13 11.8978 12.842 12.2794 12.5607 12.5607C12.2794 12.842 11.8978 13 11.5 13H5.2"
      stroke={color || 'white'}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PddWritingIcon;
