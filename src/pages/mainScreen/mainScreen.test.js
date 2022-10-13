import { render } from '@testing-library/react'
import { MainScreen } from './MainScreen';

describe('MainScreen tests', () => { 
    test('should return loading text',  () => { 
           const text = 'loading...'
           const { getByText } = render(<MainScreen  />)
           console.log(getByText);
           // eslint-disable-next-line testing-library/prefer-screen-queries
           expect(getByText(text)).toBeTruthy()
     })
    
 })




