import { Button, ButtonURL } from "../components/Button"
import { Header } from "../components/Header";

export function Links() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Header
        icrname="ICR Porto Canoa"
        local="• Serra-ES"
        text1="Cultos às quintas-feiras, sábados e domingos às 19h30"
        text2="Escola Bíblica Dominical às 09h00"
        instagram="icrportocanoa"
        facebook="icrportocanoa"
        youtube="UCV9jz8PaiFuPsZjCZNPVvBA"
        maps="ZfzdhNiLxoqU3DV67"
      />

      <main className="flex flex-col w-[75%] gap-4 max-w-screen-sm max-w-screen-md">
        <div id="igreja-local" className="flex flex-col gap-4">
          <ButtonURL
            title="Seja um membro"
            link="https://igreja.digital/autocadastro?WjQrQTJNdCtTOGZFTzMrK0o5NlBCQT09"
          />

          <ButtonURL
            title="Pedidos de oração"
            link="mailto:icrportocanoa@igrejacristareformada.org.br?subject=Pedido de Oração" />

          {/* <Button
            title="Escola Bíblica Dominical"
            link=""
          /> */}

          <Button
            title="Federação ICRAB"
            link="/federacao"
          />
        </div>
      </main >

      <footer className="flex flex-col items-center fixed top-auto bottom-0 p-4 w-full bg-emerald-700">
        <span className="flex text-sm font-thin">
          2022 • ICR Avivalista Porto Canoa
        </span>
      </footer>
    </div >
  )
}