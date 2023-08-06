import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';import './home.css';
import Slides from '../../components/slides/Slides'
import bgImage from '../../assets/videobackground.mp4';
import BoxHome  from '../../components/BoxHome/BoxHome';
import {Informaation} from '../../data/db.json'
import Footer from '../../components/footer/Footer'

export default function Home() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return ( 
    <>
    <div className='homeContent'>
    <Carousel  activeIndex={index} onSelect={handleSelect}>
       {Informaation.sliders.map((slide, i) => {
        return (
          <Carousel.Item>        
        <img
          className="d-block w-100"
          src={slide}
          alt="slider image"
        />
      
      </Carousel.Item>
        )
      })}
      
    </Carousel>


 
    <div className='FormationHome'>
       <br/>
    <h1 className='titre'>Votre réseau d'expert de proximité </h1>
   
  
   <div className='homespan'>
  
   <p> Notre top ventes </p> 
    <hr/>
    </div>
 

   <div className="box-containerHome">

   <BoxHome titre='Formations CAO /DAO' linkhref='/formation/CAO' text="Catia, Solidworks, PTC CREO, Siemens NX, Solid Edge, Top Solid, Inventor, Onshape, FreeCAD..."/>

   <BoxHome titre='Formations Architecture et BIM' linkhref='/formation/DAO%20et%20architecture' text="Autocad, TurboCAD, DrafSight, Revit... "/>

   <BoxHome titre="Formation Bureau d'études" linkhref="/formation/bureau%20d'études%20et%20de%20méthodes" text="Cotation fonctionnelle et tolérancement ISO, dessin technique et lecture de plan ... "/>
    </div>
<br/><br/>

   <div  className='homespan'  > <p>Nos nouvelles formations  </p>   <hr/></div>
<br/>

   <div className="box-containerHome">


     <BoxHome titre="Formation Calcul &amp; simulation" linkhref='/formation/Bureautique'text="Abaqus, Nastran, FEMAP... "/>
     <BoxHome titre="Formation Technologies Web" linkhref='/detaiModule/CATIA/' text="HTML, CSS, PHP ..."/>
     <BoxHome titre="Formation Bureautique " linkhref='/detaiModule/CATIA/' text="Word, Excell, Powerpoint, Open Office ..."/>


    
   </div>

   

<br/><br/>
<br/>
<br/>
  <h1 className='titre' >
  Qui sommes nous
  </h1>
<br/><br/>
  <div className='descriptionSociete'>

<div className="description_image">
</div>
 
 


     <div className="description_text" >
   
      <h6><span >Victis</span> est un organisme de formation professionnelle qui allie expertise, proximité et un engagement complet pour mieux vous servir.</h6>
      <br/>
      <h6><span >Victis</span> vous assiste et vous accompagne dans le diagnostic de vos besoins en formation, l'élaboration de plan de formation, la réalisation des actions de formation et leur évaluation. Il vous aide également à financer vos actions de formation en collaboration avec les organismes collecteurs.</h6>
      <h6>Nous intervenons dans les domaines de l’Informatique et Télécom, Bureautique et Multimédia, Techniques Industrielles, Formations Métiers, Gestion, Finance, Comptabilité …</h6>
     </div> 

  </div>

  </div>

    </div>
 
  <section className="showcase">
        <div className="video-container">
            <video src={bgImage} autoPlay muted loop></video>
        </div>
        <div className="content">
            <h2>Besoin d'informations</h2>
            <h1>Faites nous part de vos projets</h1>
            <h2>nous vous aidons à les concrétiser</h2>
            <a href="/contact" className="btn" >Nous contacter</a> 
        </div>
    </section>


    <h1 className='titre' >
    Ils nous font confiance
  </h1>
<Slides images={Informaation.confiance} />
<Footer/>
 
    </>
  );
}