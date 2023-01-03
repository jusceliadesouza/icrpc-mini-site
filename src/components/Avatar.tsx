import { Logo } from "./Logo/Logo";

export function Avatar () {
  return (
    <div className="w-28 h-28 flex items-center justify-center border-2 border-emerald-700 rounded-full">
      <Logo/>
    </div>
  )
}