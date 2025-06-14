
import React, { useState } from 'react';
import {computerData} from '../data/computers'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'  

 const ComputerPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandler = (company) => {
    if (selectedProduct.includes(company)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== company));
    } else {
      setSelectedProduct([...selectedProduct,company]); // for single select — change to [...selectedProduct, company] for multi
    }
  };

  
  const uniqueCompanies = [...new Set(computerData.map(item => item.company))];

  const filteredMobiles =
    selectedProduct.length === 0
      ? computerData
      : computerData.filter(item => selectedProduct.includes(item.company));

 
    const filteredProduct = selectedProduct.length===0?
     computerData : computerData.filter((orange)=>selectedProduct.includes(orange.company))

  return(
   <>
    <Navbar />
       <div className="fullpage">
  <div className="pro-selected">
    {uniqueCompanies.map((company, index) => (
      <div key={index}>
        <label>
          <input
            type="checkbox"
            checked={selectedProduct.includes(company)}
            onChange={() => companyHandler(company)}
          />
          <span style={{ marginLeft: '6px' }}>{company}</span>
        </label>
      </div>
    ))}
  </div>

  <div className="pageSection">
    {filteredProduct.map((item) => (
      <div className="card" key={item.id}>
        <Link to={`/computers/${item.id}`}>
          <div className="mobImg">
            <img src={item.image} alt={`${item.company} ${item.model}`} />
          </div>
        </Link>
        <div className="proModel">
          {item.company}, {item.model}
        </div>
      </div>
    ))}
  </div>
</div>

   </>
  )













// const ComputersPage = () => {
//   return (
//    <>
//     <Navbar />
//     <div className='pageSection'>
//         {computerData.map((item)=>{
//             return(
//                 <div>
//                     <div className="pageImg">
//                         <img src={item.image} alt=""/>
//                     </div>
//                     <div className="proModel">
//                         {item.company},{item.model}
//                     </div>
//                 </div>
//             )
            
//         }
//         )}
//     </div>
//    </>
//   )
// }
 }

export default ComputerPage;