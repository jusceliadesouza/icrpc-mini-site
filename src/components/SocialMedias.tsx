import IonIcon from "@reacticons/ionicons";

const size = "large";

interface SocialMedias {
  instagram?: string;
  facebook?: string;
  youtube?: string;
  maps?: string;
}

export function SocialMedias(props: SocialMedias) {
  return (
    <div className="flex icons gap-2">
      <a
        href={`http://instagram.com/${props.instagram}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IonIcon name="logo-instagram" size={size} />
      </a>

      <a
        href={`http://fb.com/${props.facebook}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IonIcon name="logo-facebook" size={size} />
      </a>

      <a
        href={`https://www.youtube.com/@${props.youtube}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IonIcon name="logo-youtube" size={size} />
      </a>

      <a
        href={`https://goo.gl/maps/${props.maps}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IonIcon name="location-sharp" size={size} />
      </a>
    </div>
  );
}
