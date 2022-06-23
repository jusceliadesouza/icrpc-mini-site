interface ButtonProps {
  title: string
  link: string
}

export function Button(props: ButtonProps) {
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