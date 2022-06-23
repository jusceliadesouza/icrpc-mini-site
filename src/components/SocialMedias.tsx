import { InstagramLogo, FacebookLogo, MapPin, YoutubeLogo } from 'phosphor-react'

const weight = "regular"

interface SocialMediasProps {
  url: string
}

export function SocialMedias(props: SocialMediasProps) {
  return (
    <div className='icons flex gap-2'>
      <a href="http://instagram.com/icrportocanoa" target="_blank" rel="noopener noreferrer">
        <InstagramLogo weight={weight} className="icon" />
      </a>

      <a href="http://fb.com/icrportocanoa" target="_blank" rel="noopener noreferrer">
        <FacebookLogo weight={weight} className="icon" />
      </a>

      <a href="https://www.youtube.com/channel/UCV9jz8PaiFuPsZjCZNPVvBA" target="_blank" rel="noopener noreferrer">
        <YoutubeLogo weight={weight} className="icon"/>
      </a>

      <a href="https://goo.gl/maps/ZfzdhNiLxoqU3DV67" target="_blank" rel="noopener noreferrer">
        <MapPin weight={weight} className="icon" />
      </a>
    </div>
  )
}