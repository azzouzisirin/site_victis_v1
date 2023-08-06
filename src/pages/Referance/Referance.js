
import React from 'react';
import './referance.css'
import {referance} from '../../data/db.json'
import Footer from '../../components/footer/Footer'

export default function Referance() {
return(
  <> 
    <div className='contentReferance'> 
     {referance.map( (forma) => (
       <div className='divImg'>

            <img src={forma} alt={forma} />
            </div>
   ))}
    
    </div>
    <Footer/>
    </>
)

}