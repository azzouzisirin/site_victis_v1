import React from 'react';
import Slides from '../../components/slides/Slides'
import './categories.css';
import Footer from '../../components/footer/Footer'

import {categories} from '../../data/db.json'
import Box from '../../components/box/Box'
const slides_formation = ["../images/slides_formation/banniere_office.jpg", "../images/slides_formation/banniere_catia.jpg", "../images/slides_formation/banniere_architecture.jpg","../images/slides_formation/banniere_adobe.jpg"];

export default function Categories() {
  return (<> 
    <div className='ContientCateg'>
  
      <Slides images={slides_formation} />
     
  <h1 >Nos Formations</h1>


      <div className="box-container-categ">
      {categories.map( (catg) => (
        <>
    <Box titre={catg.nomCategorie} img={catg.imgCategorie} linkhref={"/formation/"+catg.idCategorie}/>
      </> ))}
     <br/>
     <br/>
        </div>

    </div>
    <Footer/>
    </>
  );
}
