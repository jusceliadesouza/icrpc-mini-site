import { Link } from "react-router-dom"

interface ButtonProps {
  title: string
  link: string
}

export function Button(props: ButtonProps) {
  return (
      // <a
      //   className="p-2 text-center rounded-xl border hover:bg-white hover:text-emerald-700 hover:font-bold"
      //   href={props.link}
      //   rel="noopener noreferrer"
      //   target="_blank"
      // >
      //   {props.title}
      // </a>

      <Link 
        to={props.link}
        className="p-2 border rounded-xl text-center hover:bg-white hover:text-emerald-700 hover:font-bold hover:uppercase transitions" 
      >
        {props.title}
        </Link>
  )
}

export function ButtonURL(props: ButtonProps) {
  return (
      <a
        className="p-2 text-center rounded-xl border hover:bg-white hover:text-emerald-700 hover:font-bold"
        href={props.link}
        rel="noopener noreferrer"
        target="_blank"
      >
        {props.title}
      </a>
  )
}