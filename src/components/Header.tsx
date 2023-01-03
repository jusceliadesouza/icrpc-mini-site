import { Avatar } from "./Avatar";

interface HeaderProps {
  icrname: string;
  local?: string;
  text1?: string;
  text2?: string;

  instagram?: string;
  facebook?: string;
  youtube?: string;
  maps?: string;
}

export function Header(props: HeaderProps) {
  return (
    <header className="w-full py-2 flex flex-col gap-4 items-center justify-center">
      <Avatar />

      <span className="text-sm font-bold uppercase">
        {props.icrname} {props.local}
      </span>

      <span className="text-xs text-center">
        <p>{props.text1}</p>
        <p>{props.text2}</p>
      </span>
    </header>
  );
}