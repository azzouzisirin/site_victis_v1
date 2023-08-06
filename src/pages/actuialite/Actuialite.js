import React from 'react';
import './actuialite.css';
import ActuialiteBox from '../../components/actuialiteBox/ActuialiteBox';
import {actuialites} from '../../data/db.json'
import Footer from '../../components/footer/Footer'


export default function Actuialite() {

return(  <> 
   <div className='actualite'>
   <div className='divSlide'> 
   <img src='../images/actuialite/live-classroom.jpg' alt=''/>
   </div>
 
        <div className="containerActual">
      {actuialites.map( (forma) => (
        <>   
            <ActuialiteBox img={forma.img} titre={forma.titre} date={forma.date} id={forma.id} />
      </> ))}
     <br/> <br/> 
        </div>
    
   
   </div>
   <Footer/>
   </>
)
}