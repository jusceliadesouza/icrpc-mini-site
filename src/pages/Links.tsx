import { Button } from "../components/Button";
import { Header } from "../components/Header";

import { MapPin, Calendar } from "phosphor-react"

export function Links() {
  return (
    <div className="flex flex-col items-center min-h-screen">

      <Header />

      <main className="flex flex-col w-[75%] gap-4 max-w-screen-sm max-w-screen-md">
        <div id="igreja-local" className="flex flex-col gap-4">
          <h2>Igreja Local</h2>
          <Button title="Seja um membro" link="https://igreja.digital/autocadastro?WjQrQTJNdCtTOGZFTzMrK0o5NlBCQT09" />

          <Button title="Pedidos de oração" link="mailto:icrportocanoa@igrejacristareformada.org.br?subject=Pedido de Oração" />

        </div>

        <div id="federacao" className="flex flex-col gap-4 mb-20">
          <h2>Federação ICRAB</h2>
          <Button title="Site Oficial" link="http://igrejacristareformada.org.br" />

          <Button title="Estatuto da Igreja" link="https://drive.google.com/file/d/1L8RM0prHMH5R23MrtrV9mxZzQAS3Q3kk/view" />
          

          <Button title="Confissão de Fé" link="https://igrejacristareformada.org.br/quem-somos/"/>
          <Button title="Ouça a Rádio Castelo Forte" link="https://radiowebcasteloforte.com.br/" />


          <div className="flex flex-col gap-4 mt-10 mb-20  text-center">
            <h3 className="text-bold uppercase">Congresso de Pastores, Presbíteros, Diáconos e Obreiros</h3>

            {/* <span className="text-xs flex justify-between gap-2">
              <div className="flex gap-1 items-center text-justify">
                <Calendar size={'1.5rem'} />
                <p>Dias 23, 24 e 25 de setembro</p>
              </div>
              <div className="flex gap-1 items-center text-justify ">
                <MapPin size={'1.5rem'}/> 
                <p>Estancia Moriá - Guarapari-ES</p>
              </div>
            </span> */}

            <Button title="Vídeo com Orientações - Pr. Arnaldo Penna " link="https://www.youtube.com/watch?v=dz1eJllm8iI" />

            <Button title="Inscreva-se no Congresso" link="https://wa.me/+552728886945?text=A%20paz do%20Senhor%20Jesus!%20Tenho%20interesse%20em%20me%20inscrever%20no%20Congresso!%20Como%20faço?" />

            <Button title="Já se inscreveu? Entre no grupo de inscritos no WhatsApp" link="https://chat.whatsapp.com/D9VElHHHRukGC0GoClTO8V" />
          </div>
        </div>

      </main>

      <footer className="flex flex-col items-center fixed top-auto bottom-0 p-4 w-full bg-emerald-700">
        <span className="flex text-sm font-thin">2022 • ICR Avivalista Porto Canoa</span>
        <span className="text-center text-[.625rem] font-thin">Desenvolvido pelo Depto. Mídia • ICR Porto Canoa</span>
      </footer>
    </div>
  )
}