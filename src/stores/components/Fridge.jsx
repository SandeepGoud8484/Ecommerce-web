import React from 'react'
import {fridgeData} from '../data/fridge'

const Mobiles = () => {

    const firstFiveImages = fridgeData.slice(0,5)
  return (
   <>
   <div className="proTitle">
    <h2>Fridges</h2>
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