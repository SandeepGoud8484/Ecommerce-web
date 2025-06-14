import React, { useState } from 'react';
import {speakerData} from '../data/speaker'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'

 const SpeakerPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandler = (brand) => {
    if (selectedProduct.includes(brand)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== brand));
    } else {
      setSelectedProduct([...selectedProduct,brand]); // for single select — change to [...selectedProduct, company] for multi
    }
  };

  
  const uniqueCompanies = [...new Set(speakerData.map(item => item.brand))];
  console.log(uniqueCompanies);

//   const filteredMobiles =
//     selectedProduct.length === 0
//       ? speakerData
//       :speakerData.filter(item => selectedProduct.includes(item.brand));

 
    const filteredProduct = selectedProduct.length===0?
     speakerData : speakerData.filter((orange)=>selectedProduct.includes(orange.brand))


 return(
   <>
    <Navbar />
       <div className="fullpage">
  <div className="pro-selected">
    {uniqueCompanies.map((brand, index) => (
      <div key={index}>
        <label>
          <input
            type="checkbox"
            checked={selectedProduct.includes(brand)}
            onChange={() => companyHandler(brand)}
          />
          <span style={{ marginLeft: '6px' }}>{brand}</span>
        </label>
      </div>
    ))}
  </div>

  <div className="pageSection">
    {filteredProduct.map((item) => (
      <div className="card" key={item.id}>
        <Link to={`/speaker/${item.id}`}>
          <div className="mobImg">
            <img src={item.image} alt={`${item.brand} ${item.model}`} />
          </div>
        </Link>
        <div className="proModel">
          {item.brand}, {item.model}
        </div>
      </div>
    ))}
  </div>
</div>

   </>
  )
 }



export default SpeakerPage;