import React from 'react';
import Slides from '../../components/slides/Slides'
import './formations.css';
import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/Footer'

import {categories} from '../../data/db.json' 
import Box from '../../components/box/Box'
 
export default function Formations() {
  let { idCategories } = useParams();
  const categorie = categories.find((catg) => catg.idCategorie === idCategories);
const Test =({catg})=>{
  if(catg.idFormation===""){
    return <Box titre={catg.nomFormation} img={catg.imgFormation } linkhref={"/detaiModule/0"}/> 
  }
  if(catg.model===1){
    return <Box titre={catg.nomFormation} img={catg.imgFormation } linkhref={"/detailFormationModel1/"+catg.idFormation}/>
  }
  if(catg.model===2){
    return <Box titre={catg.nomFormation} img={catg.imgFormation } linkhref={"/detailFormationModel2/"+catg.idFormation}/>

  }
  
  if(catg.model===3){
    return <Box titre={catg.nomFormation} img={catg.imgFormation } linkhref={"/detailFormationModel3/"+catg.idFormation}/>

  }
  if(catg.model===4){
    return <Box titre={catg.nomFormation} img={catg.imgFormation } linkhref={"/detailFormationModel4/"+catg.idFormation}/>

  }
  if(catg.model===5){
    return <Box titre={catg.nomFormation} img={catg.imgFormation } linkhref={"/detailFormationModel5/"+catg.idFormation}/>

  }
}
  return ( 
    <> 
    <div className='ContientCateg'> 
      <Slides images={categorie.slideFormation} />

    
  <h1> {categorie.nomCategorie} 
 
  </h1>
  

   <div className="box-container-categ">
      {categorie.formation.map( (catg) => (
       <Test catg={catg}/>
       
       ))}
     
        </div>

       
       { categorie.descButton? <> 
 <div className='Grandtitre'>
 <div class="v-line">
</div>
<br/>
<p style={{color:"#231ab4",marginLeft:"-27%",fontSize:"20px"}} >Nos formations
<h2 style={{color:"black",fontWeight:"bold",fontSize:"50px"}} > Ingénierie mécanique </h2>
<h2 style={{color:"black",marginTop:"7px"}}> Améliorer les capacités techniques des acteurs de création</h2>
</p>

 
 </div>
 <div className='dernBloc'>
 <br/>
 <h6>Les organisations à vocation technique et d'ingénierie ont autant besoin d'excellents ingénieurs que d'excellents gestionnaires et opérateurs. Les techniques d'ingénierie continuent d'évoluer à un rythme important, il est donc impératif que les ingénieurs en exercice doivent être en mesure de mettre à jour continuellement leurs compétences pour maintenir leur organisation à la pointe des meilleures pratiques.
<br/> <br/>
Nos cours de formation en génie mécanique sont dispensés par des consultants en ingénierie ayant une réelle expertise. Cela vous permettra de développer des compétences en tant que praticien efficace, ainsi que la possibilité d'améliorer des capacités spécifiques. Celles-ci incluent divers sujets tels que la CAO, la FAO, les systèmes de tuyauterie, la simulation etc.
<br/><br/>
Inscrivez-vous aujourd'hui pour garder une longueur d'avance sur la concurrence à la fine pointe de la technologie.
<br/><br/>
En outre, les ingénieurs en général n'ont pas seulement besoin de devenir des «experts techniques», mais ont également besoin des compétences, des connaissances et de la compréhension pour diriger et gérer les autres, que ce soit en tant que superviseur, chef d'équipe ou gestionnaire. Veuillez consulter nos cours de leadership et de gestion pour plus de détails.</h6>

<br/><br/>
 </div>
 </>:null}
     </div>
     <Footer/>
     </>
  );
}
