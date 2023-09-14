import React from 'react'
import { Link } from 'react-router-dom'

const Product = (props) => {
  let imgsrc=''
  if(props.title === 'Apelsin'){
    imgsrc = "/static/images/Apelsin.jpg"
  } else if(props.title ==='Sprite'){
    imgsrc = "/static/images/Sprite.jpg"
  } else if(props.title ==='Redbull'){
    imgsrc = "/static/images/Redbull.jpg"
  } else if(props.title ==='Daim'){
    imgsrc = "/static/images/Daim.jpg"
  } else if(props.title ==='Gifflar'){
    imgsrc = "/static/images/Gifflar.jpg"
  } else if(props.title ==='Banan'){
    imgsrc = "/static/images/Banan.jpg"
  } else {
    imgsrc = "/static/images/pic.png"
  }

  return (
    <div>
          <img src={imgsrc} alt="" id='productImage'/>
          <h1 className='center'>{props.title}</h1>
          <p className='center'>{props.price} kr</p>          
    </div>
  )
}

export default Product