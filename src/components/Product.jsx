import React from 'react'

const Product = (props) => {
  let imgsrc=''
  if(props.title === 'Apelsin'){
    imgsrc = "src/assets/images/Apelsin.jpg"
  } else if(props.title ==='Sprite'){
    imgsrc = "src/assets/images/sprite.jpg"
  } else if(props.title ==='Redbull'){
    imgsrc = "src/assets/images/redbull.jpg"
  } else if(props.title ==='Daim'){
    imgsrc = "src/assets/images/daim.jpg"
  } else if(props.title ==='Gifflar'){
    imgsrc = "src/assets/images/gifflar.jpg"
  } else if(props.title ==='Banan'){
    imgsrc = "src/assets/images/banan.jpg"
  } else {
    imgsrc = "src/assets/images/pic.jpg"
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