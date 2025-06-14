import React, { useState } from 'react';
import {booksData} from '../data/books'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'


 const BookPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandler = (category) => {
    if (selectedProduct.includes(category)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== category));
    } else {
      setSelectedProduct([...selectedProduct,category]); // for single select — change to [...selectedProduct, company] for multi
    }
  };

  
  const uniqueCompanies = [...new Set(booksData.map(item => item.category))];

  const filteredMobiles =
    selectedProduct.length === 0
      ? booksData
      :booksData.filter(item => selectedProduct.includes(item.category));

 
    const filteredProduct = selectedProduct.length===0?
     booksData : booksData.filter((orange)=>selectedProduct.includes(orange.category))


 return(
   <>
    <Navbar />
       <div className="fullpage">
  <div className="pro-selected">
    {uniqueCompanies.map((category, index) => (
      <div key={index}>
        <label>
          <input
            type="checkbox"
            checked={selectedProduct.includes(category)}
            onChange={() => companyHandler(category)}
          />
          <span style={{ marginLeft: '6px' }}>{category}</span>
        </label>
      </div>
    ))}
  </div>

  <div className="pageSection">
    {filteredProduct.map((item) => (
      <div className="card" key={item.id}>
        <Link to={`/book/${item.id}`}>
          <div className="mobImg">
            <img src={item.image} alt={`${item.category} ${item.model}`} />
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



export default BookPage;