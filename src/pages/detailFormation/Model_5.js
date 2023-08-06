import React from 'react';
import './detailFormation.css';
import { useParams } from 'react-router-dom';
import BoxLeft from '../../components/boxLeft/BoxLeft';
import {formations} from '../../data/db.json'
import Footer from '../../components/footer/Footer'

import BoxModul from '../../components/boxModul/BoxModul'
export default function Model_5() {
  let { idFormation } = useParams();

   const formation=formations.find((forma)=> forma.idFormation===idFormation)
   const img1 =["../../images/logo/qualiopi-logo.png"]
const img2 = ["../../images/logo/safran_png.png", "../../images/logo/logo-alstom.png", "../../images/logo/ge_235x2352.png"];

  
  
 
    return(
<> 
    <div className='contentDetailFormation_5' >
  <h1 className='titleHead'> {formation.nomFormation} </h1>
  <br/>
  
  <div className='blocModel5'>

  <div className='blocleftModel5'>
  <h3 className='headtwo'>Aperçu du logiciel  {formation.idFormation}</h3>

    {formation.texthaut?formation.texthaut.map((t)=>{
      return  <h6>{t} </h6> 
    }):null}
    <br/> <br/>
   <div className="containerboxModel5">
{formation.modules? formation.modules.map( (forma) => (
        <>  
    <BoxModul titre={forma.nomModule}  linkhref={"/detaiModule/"+formation.idFormation+"/"+forma.idModule}/>
      </> )):null}
      </div>
  </div> 
 

 
 
  <div className='blocRightModel5'>
  <BoxLeft titre="Démarche qualité :" description="Certifopac atteste que nos prestations ont été évaluées et jugées conformes aux exigences du Référentiel national qualité au titre de la catégorie 'Actions de formation' (L.6313-1)."
text="Ce label Qualiopi nous permet d’être référencé par les financeurs de la formation professionnelle continue." 
images={img1}/>
  
  <BoxLeft titre="Nos références :" description="Nous accompagnons dans leurs performances économique des clients issus de secteurs variés.
Voici un extrait de clients qui nous font confiance depuis plus de 10 ans"
text="Faites de même !" images={img2}/>


  </div>
  </div>
  <div className='blocmiddleModel1'> 
 <BoxLeft className="divun" titre="Démarche qualité :" description="Certifopac atteste que nos prestations ont été évaluées et jugées conformes aux exigences du Référentiel national qualité au titre de la catégorie 'Actions de formation' (L.6313-1)."
text="Ce label Qualiopi nous permet d’être référencé par les financeurs de la formation professionnelle continue." 
images={img1}/>
  
  <BoxLeft className='divdeux' titre="Nos références :" description="Nous accompagnons dans leurs performances économique des clients issus de secteurs variés.
Voici un extrait de clients qui nous font confiance depuis plus de 10 ans"
text="Faites de même !" images={img2}/>

  </div>
  </div>
  <Footer/>
  </>
 
  )

}

