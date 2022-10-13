import { useEffect, useState } from 'react'
import { photosApi } from '../../__dont_modify__/api/photos';
import { ImageAlbum } from '../../components/imageAlbum/ImageAlbum';
import { Photo } from '../../types/photos';
import { englishLanguage } from '../../i18n/english';
import './mainScreen.styles.css';

export const MainScreen = () => {
    const [photosAlbun, setPhotosAlbun] = useState<Array<Photo>>([]);
    const [error, setError] = useState<Boolean>(false);

  /**
   * Get Data off the API Service
   * @returns {void} SetData If data or set Error 
  */
  const getDataPhotoAlbun = async () => {
      try {
        const {  getPhotos } = photosApi;
        const data = await getPhotos({page:1});
        setPhotosAlbun(data.photos);
      } catch (error) {
        setError(true);
      }   
    }
  
  useEffect(() => {
       getDataPhotoAlbun()
  },)
   
  /**
   * Show Albun Photos
   * @returns {JSX.Element} SetData If data or set Error 
  */
  const getAlbum = (): JSX.Element => {
   return <ImageAlbum photosAlbun={photosAlbun} />     
  }

  /**
   * Show Loading or Album off photos
   * @returns {string | JSX.Element}
  */
  const getGridAlbun = (): string | JSX.Element => photosAlbun?.length > 0 ?  getAlbum() : englishLanguage.loading
  
  /**
   * Show error message for reload the page
   * @returns {JSX.Element}
  */
  const showError = (): JSX.Element => ( <p>{englishLanguage.showError}</p>)

  return (
    <div className="container">
      {error ? showError() : getGridAlbun()}
    </div>
  )
}
