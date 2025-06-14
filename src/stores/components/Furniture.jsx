import React from 'react'
import {furnitureData} from '../data/furniture'

const Mobiles = () => {

    const firstFiveImages = furnitureData.slice(0,5)
  return (
   <>
   <div className="proTitle">
      <h2>Furniture</h2>
   </div>
  
     <div className='proSection'>
        {
            firstFiveImages.map((item)=>{
                 return(
                    <div className='imgBox'>
                        <img className='proImage' src={item.image} alt=""></img>
                    </div>

                 )
            })
        }
    </div>
   </>
  )
}

export default Mobiles