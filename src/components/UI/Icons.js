import styles from "./Icons.module.css";

export const CrossIcon = (props) => {
  return (
    <svg
      className={styles.icon}
      onClick={props.onClick || ""}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width={props.width || "24"}
      height={props.height || "24"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};
