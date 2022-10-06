import { ButtonURL } from "../components/Button";
import { ButtonBackToHome } from "../components/ButtonBackToHome";
import { HeaderFederacao } from "../components/Header";

export function Federacao() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <HeaderFederacao
        icrname="Federação ICR Avivalista"
        local="do Brasil"
        text1="Uma Igreja Bíblica"
        instagram=""
        facebook=""
        youtube=""
        maps=""
      />

      <main className="flex flex-col w-[75%] gap-4 max-w-screen-sm max-w-screen-md">
        <div id="federacao" className="flex flex-col gap-4">
          <ButtonURL title="Site Oficial" link="http://igrejacristareformada.org.br" />

          {/* <ButtonURL title="WhatsApp" link="" /> */}

          <ButtonURL title="Estatuto da ICRAB" link="https://drive.google.com/file/d/1L8RM0prHMH5R23MrtrV9mxZzQAS3Q3kk/view" />

          <ButtonURL title="Confissão de Fé" link="https://igrejacristareformada.org.br/quem-somos/" />

          <ButtonURL title="Ouça a Rádio Castelo Forte" link="https://radiowebcasteloforte.com.br/" />
        </div >
      </main>

      <ButtonBackToHome link="/" local="Home" />
    </div>
  )
}