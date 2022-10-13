import { render } from '@testing-library/react'
import { ImageAlbum } from './ImageAlbum.tsx'


describe('MainScreen tests', () => { 
    test('should getDataPhotoAlbun should be return a list off images',  () => {
       const photos = [ 
        {
         id: '123445',
         name: 'foto1', 
         previewUrl:'https://media.gettyimages.com/photos/two-medicine-lake-sunrise-picture-id827422252?s=612x612'
        },
        {
          id: '123446',
          name: 'foto2', 
          previewUrl:'https://media.gettyimages.com/photos/two-medicine-lake-sunrise-picture-id827422252?s=612x612',
        }] 
       const { container } = render(<ImageAlbum photosAlbun={photos} />)
       expect( container ).toMatchSnapshot()  
     })
 })