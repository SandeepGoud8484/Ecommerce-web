import React from 'react'
import {kitchenData} from '../data/kitchen'

const Mobiles = () => {

    const firstFiveImages = kitchenData.slice(0,5)
  return (
   <>
   <div className="proTitle">
        <h2>Kitchen</h2>
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