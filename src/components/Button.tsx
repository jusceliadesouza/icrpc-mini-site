import { Link } from "react-router-dom";

interface ButtonProps {
  title: string;
  link: string;
  className?: string;
}

export function Button({ title, link }: ButtonProps) {
  return (
    <Link to={link} className="button">
      {title}
    </Link>
  );
}

export function ButtonURL({ title, link }: ButtonProps) {
  return (
    <a className="button" href={link} rel="noopener noreferrer">
      <span>{title}</span>
    </a>
  );
}
