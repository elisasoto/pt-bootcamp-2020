import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('User can see word test', ()=>{
    render(<App />)

    const testElement = screen.queryByText('test', {
      exact: false,
    })
    expect(testElement).toBeVisible()
  })

  it('The Bridge elements visible in multiple places', ()=>{
    render(<App />)

    const theBridgeElements = screen.queryAllByText('The Bridge', {exact: false})
    theBridgeElements.forEach((element)=>{
      expect(element).toBeVisible();
    })
  })

  it('Link redirects to Google', ()=>{
    render(<App />)
    
    const googleLink = screen.queryByTestId('google-link')
    expect(googleLink).toBeVisible();
    expect(googleLink).toHaveAttribute('href', 'https://google.es')
  })
  

});
