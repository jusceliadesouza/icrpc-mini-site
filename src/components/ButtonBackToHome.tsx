import { Link } from "react-router-dom"

import IonIcon from "@reacticons/ionicons"

interface LinkProps {
  link: string
  local: string
}

export function ButtonBackToHome(props: LinkProps) {
  return (
    <footer className="m-8">
      <Link to={props.link} className="flex gap-2 items-center">
        <IonIcon name="arrow-back" />
        <p className="uppercase text-xs">
          Voltar a {props.local}
        </p>
      </Link>
    </footer>
  )
}