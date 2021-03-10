import { useState } from 'react'

export default function Card({ title, alt, src, price }) {

const [priceVisible, setPriceVisible] = useState(true)


  return (
    <div data-testid="card">
      <h2 data-testid="title">{title}</h2>
      <img
        alt={alt}
        src={src}
      />
      <label data-testid="price" style={{display: priceVisible?'block':'none'}}>{price}</label>

      <button data-testid="toggle"  onClick={()=>{
          setPriceVisible(!priceVisible)
      }}>
        Toggle
      </button>
    </div>
  );
}
