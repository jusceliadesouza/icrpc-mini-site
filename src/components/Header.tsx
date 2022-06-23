import { Logo } from "./Logo";
import { SocialMedias } from "./SocialMedias";

export function Header() {
  return (
    <header className="w-full py-2 flex flex-col gap-2 items-center justify-center mb-10">
      <Logo />

      <span className="text-sm font-bold">
        ICR PORTO CANOA • SERRA-ES
      </span>

      <span className="text-xs text-center">
        <p>
          Cultos às quintas, sábados e domingos às 19h30
        </p>
        <p>
          Escola Bíblica Dominical às 9h
        </p>
      </span>

      <span className="text-xs">
      </span>

      <SocialMedias />
    </header>
  )
}