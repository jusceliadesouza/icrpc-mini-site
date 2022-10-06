import { InstagramLogo, FacebookLogo, MapPin, YoutubeLogo } from 'phosphor-react'

const weight = "regular"

interface SocialMedias {
  instagram?: string
  facebook?: string
  youtube?: string
  maps?: string
}

export function SocialMedias(props: SocialMedias) {
  return (
    <div className='icons flex gap-2'>
      <a
        href={`http://instagram.com/${props.instagram}`}
        target="_blank" rel="noopener noreferrer"
      >
        <InstagramLogo weight={weight} className="icon" />
      </a>

      <a
        href={`http://fb.com/${props.facebook}`}
        target="_blank" rel="noopener noreferrer"
      >
        <FacebookLogo weight={weight} className="icon" />
      </a>

      <a
        href={`https://www.youtube.com/channel/${props.youtube}`}
        target="_blank" rel="noopener noreferrer"
      >
        <YoutubeLogo weight={weight} className="icon" />
      </a>

      <a
        href={`https://goo.gl/maps/${props.maps}`}
        target="_blank" rel="noopener noreferrer"
      >
        <MapPin weight={weight} className="icon" />
      </a>
    </div>
  )
}

export function MidiasFederacao() {
  return (
    <div className='icons flex gap-2'>
      <a
        href="http://instagram.com/icravivalistadobrasil_oficial"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramLogo weight={weight} className="icon" />
      </a>

      {/* <a href="http://fb.com/icrportocanoa" target="_blank" rel="noopener noreferrer">
        <FacebookLogo weight={weight} className="icon" />
      </a> */}

      <a
        href="https://www.youtube.com/c/FEDERA%C3%87%C3%83OIGREJACRISTARAVIVALISTADOBRASIL"
        target="_blank"
        rel="noopener noreferrer"
      >
        <YoutubeLogo weight={weight} className="icon" />
      </a>

      <a
        href="https://goo.gl/maps/7n8TJM4bDQ6trwRs6"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MapPin weight={weight} className="icon" />
      </a>
    </div>
  )
}