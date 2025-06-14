import React from 'react'
import {speakerData} from '../data/speaker'
const Speaker = () => {
       const firstFiveImages = speakerData.slice(0,5)
  return (
   <>
   <div className="proTitle">
       <h2>Speakers</h2>
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

export default Speaker