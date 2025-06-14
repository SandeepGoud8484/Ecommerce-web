
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import  LandingPage from './stores/pages/LandingPage'
import MobilePage from './stores/pages/MobilePage'
import ComputersPage from './stores/pages/ComputersPage'
import WatchesPage from './stores/pages/WatchesPage'
import MenFashion from './stores/pages/MenFashion'
import WomanPage from './stores/pages/WomanPage'
import FurniturePage from './stores/pages/FurniturePage'
import AcPage from './stores/pages/AcPage'
import KitchenPage from './stores/pages/KitchenPage'
import FridgePage from './stores/pages/FridgePage'
import TvPage from './stores/pages/TvPage'
import BooksPage from './stores/pages/BooksPage'
import SpeakersPage from './stores/pages/SpeakersPage'
import MobileSingle from './singles/MobileSingle.jsx'
import UserCart from './stores/UserCart.jsx'
// import TestPage from './stores/TestPage.jsx'
import ComputerSingle from './singles/ComputerSingle.jsx'
import WatchSingle from './singles/WatchSingle.jsx'
import MenSingle from './singles/MenSingle.jsx'
import WomanSingle from './singles/WomanSingle.jsx'
import FurnitureSingle from './singles/FurnitureSingle.jsx'
import KitchenSingle from './singles/KitchenSingle.jsx'
import FridgeSingle from './singles/FridgeSingle.jsx'
import TvSingle from './singles/TvSingle.jsx'
import BookSingle from './singles/BookSingle.jsx'
import SpeakerSingle from './singles/SpeakerSingle.jsx'

import './App.css';

const App = ()=>{
  return(
    <div>
       <Routes>
        <Route path='/' element = {<LandingPage />}/>
        <Route path='/mobiles' element ={<MobilePage />}/>
         <Route path='/computers' element ={<ComputersPage />}/>
           <Route path='/watches' element ={<WatchesPage />}/>
           <Route path='/men' element ={<MenFashion />}/>
            <Route path='/woman' element ={<WomanPage />}/>
             <Route path='/furniture' element ={<FurniturePage />}/>
               <Route path='/ac' element ={<AcPage />}/>
                <Route path='/kitchen' element ={<KitchenPage />}/>
                 <Route path='/fridge' element ={<FridgePage />}/>
                  <Route path='/tv' element ={<TvPage />}/>
                      <Route path='/books' element ={<BooksPage />}/>
                      <Route path='/speakers' element ={<SpeakersPage />}/>
                      <Route path='/mobiles/:id' element ={<MobileSingle />}/>
                      <Route path='/cart' element ={<UserCart />}/>
                        {/* <Route path='/test' element ={<TestPage />}/> */}
                        <Route path='/computers/:id' element ={<ComputerSingle />}/>
                         <Route path='/watches/:id' element ={<WatchSingle />}/>
                          <Route path='/men/:id' element ={<MenSingle />}/>
                          <Route path='/woman/:id' element ={<WomanSingle />}/>
                          <Route path='/furniture/:id' element ={<FurnitureSingle />}/>
                           <Route path='/kitchen/:id' element ={<KitchenSingle />}/>
                            <Route path='/fridge/:id' element ={<FridgeSingle />}/>
                             <Route path='/tv/:id' element ={<TvSingle />}/>
                             <Route path='/book/:id' element ={<BookSingle />}/>
                             <Route path='/speaker/:id' element ={<SpeakerSingle />}/>



     </Routes> 
   
    </div>
  )
}

export default App



















