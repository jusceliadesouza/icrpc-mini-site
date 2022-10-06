import { Link } from "react-router-dom"

import { ArrowLeft } from "phosphor-react"

interface LinkProps {
  link: string
  local: string
}

export function ButtonBackToHome(props: LinkProps) {
  return (
    <footer className="m-8">
      <Link to={props.link} className="flex gap-2 items-center">
        <ArrowLeft />
        <p className="uppercase text-xs">
          Voltar a {props.local}
        </p>
      </Link>
    </footer>
  )
}