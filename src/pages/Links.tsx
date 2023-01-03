import { Button, ButtonURL } from "../components/Button";
import { Header } from "../components/Header";
import { SocialMedias } from "../components/SocialMedias";

export function Links() {
  const username = "icrportocanoa";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <Header
        icrname="ICR Porto Canoa"
        local="• Serra-ES"
        text1="Cultos às quintas-feiras, sábados e domingos às 19h30"
        text2="Escola Bíblica Dominical às 09h00"
        maps=""
      />

      <main className="flex flex-col w-[75%] gap-8 max-w-screen-md">
        <div id="igreja-local" className="flex flex-col gap-4">
          <ButtonURL
            title="Seja um membro"
            link="https://igreja.digital/autocadastro?WjQrQTJNdCtTOGZFTzMrK0o5NlBCQT09"
          />
          <ButtonURL
            title="Pedido de oração"
            link="mailto:icrportocanoa@igrejacristareformada.org.br?subject=Pedido de Oração"
          />
        </div>

        <ButtonURL
            title="Estatuto da ICRAB"
            link="https://drive.google.com/file/d/1L8RM0prHMH5R23MrtrV9mxZzQAS3Q3kk/view?usp=drivesdk"
          />

          <ButtonURL
            title="Confissão de fé"
            link="https://igrejacristareformada.org.br/quem-somos/"
          />

        <SocialMedias
          instagram={username}
          facebook={username}
          youtube={username}
          maps={"LXVbeigxpgpkXb2a6"}
        />
      </main>

      <footer className="flex flex-col items-center p-4 w-full bg-white text-center">
        <span className="text-sm">
          2023 • Igreja Cristã Reformada Avivalista Porto Canoa
        </span>
        <span className="text-xs">
          Desenvolvido por
          <a
            href="http://www.github.com/jusceliadesouza"
            className="ml-1 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Juscélia de Souza
          </a>
        </span>
      </footer>
    </div>
  );
}
