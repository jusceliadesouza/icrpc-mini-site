import { Button } from "../components/Button";
import { Header } from "../components/Header";

export function Links() {
  return (
    <div className="flex flex-col items-center min-h-screen">

      <Header />

      <main className="flex flex-col w-[75%] gap-4 max-w-screen-sm max-w-screen-md">
        <div id="igreja-local" className="flex flex-col gap-4">
          <h2>Igreja Local</h2>
          <Button title="Seja um membro" link="https://igreja.digital/autocadastro?WjQrQTJNdCtTOGZFTzMrK0o5NlBCQT09" />

          <Button title="Pedidos de oração" link="mailto:icrportocanoa@igrejacristareformada.org.br?subject=Pedido de Oração"/>

        </div>

        <div id="federacao" className="flex flex-col gap-4 mb-20">
          <h2>Federação</h2>
          <Button title="Site Oficial" link="#" />

          <Button title="Estatuto da Igreja" link="https://drive.google.com/file/d/1L8RM0prHMH5R23MrtrV9mxZzQAS3Q3kk/view" />

          <Button title="Vídeo de Orientações Congresso de Pastores, Presbíteros, Diáconos e Obreiros" link="https://www.youtube.com/watch?v=dz1eJllm8iI" />

          <Button title="Inscreva-se no Congresso" link=""/>
        </div>

      </main>

      <footer className="flex flex-col items-center fixed top-auto bottom-0 p-4 w-full bg-emerald-700">
        <span className="flex text-sm font-thin">2022 • ICR Avivalista Porto Canoa</span>
        <span className="text-center text-[.625rem] font-thin">Desenvolvido pelo Depto. Mídia • ICR Porto Canoa</span>
      </footer>
    </div>
  )
}