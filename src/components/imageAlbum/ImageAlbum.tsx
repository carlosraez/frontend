import { Photo } from '../../types/photos'
import './ImageAlbun.styles.css';
interface Props {
  photosAlbun: Array<Photo>
}

export const ImageAlbum = ({photosAlbun}:Props) => 
   (<>
    {photosAlbun?.map((photo) => (
        <img key={photo.id} src={photo.previewUrl} alt={photo.name} />
      ))}
  </>)

