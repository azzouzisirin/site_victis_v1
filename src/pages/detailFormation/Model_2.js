import React from 'react';
import './detailFormation.css';
import { useParams } from 'react-router-dom';
import BoxLeft from '../../components/boxLeft/BoxLeft';
import {formations,pays} from '../../data/db.json'
import Footer from '../../components/footer/Footer'

import BoxModul from '../../components/boxModul/BoxModul'
export default function Model_2() {
  let { idFormation } = useParams();

   const formation=formations.find((forma)=> forma.idFormation===idFormation)
    const img2 = ["../../images/logo/safran_png.png", "../../images/logo/logo-alstom.png", "../../images/logo/ge_235x2352.png"];
    const img1 =["../../images/logo/qualiopi-logo.png"]
 
    function Itemlist({listitem}){
   
        function ListItem ({t}){
          const prog=formations.find((forma)=> forma.idFormation===idFormation).modulelist.prog[t]
          
         return (<>
         <ul style={{listStyle:"none",width:"80%"}}> 
         {
         prog.map((k)=>{
          return <li> {k}</li>
       
         })}
         </ul>
         
         </>)
           }
          return (<>
          {
        listitem.map((m)=>{
          return(<> 
          <h5> {m}</h5>
          <ListItem t={m}/>
          </> ) 
        })
      }
      </>
          )
      }
  
 
    return(
 <>
    <div className='contentDetailFormationModel1' >
  <h1 > {formation.nomFormation} </h1>
  <br/>
  <div className='blocOneModel1'>

<div className='blocleftDetailModel1'>
<h3 className='headtwo'>Aperçu du logiciel  {formation.idFormation}</h3>


 
      
    {formation.texthaut.map((t)=>{
      return  <h6>{t} </h6> 
    })}

{
  formation.modulelist? <Itemlist listitem={formation.modulelist.titrelist}/>:null
}



{
  formation.titre1? <h5> {formation.titre1}</h5>:null
}

{formation.textMoyen?formation.textMoyen.map((t)=>{
      return  <h6>{t} </h6> 
    }):null}
{
  formation.titre2? <h5> {formation.titre2}</h5>:null
}
{formation.textbas?formation.textbas.map((t)=>{
      return  <h6>{t} </h6> 
    }):null}
 
  </div> 
  <div className='blocrightModel1'>
 <BoxLeft titre="Démarche qualité :" description="Certifopac atteste que nos prestations ont été évaluées et jugées conformes aux exigences du Référentiel national qualité au titre de la catégorie 'Actions de formation' (L.6313-1)."
text="Ce label Qualiopi nous permet d’être référencé par les financeurs de la formation professionnelle continue." 
images={img1}/>
  
  <BoxLeft titre="Nos références :" description="Nous accompagnons dans leurs performances économique des clients issus de secteurs variés.
Voici un extrait de clients qui nous font confiance depuis plus de 10 ans"
text="Faites de même !" images={img2}/>

  </div>
  </div>
  </div>
<br/>
  <span className='title_span' >Nos formations {formation.idFormation}</span>
  <br/>

  <div className="containerboxModel1">
      {formation.modules? formation.modules.map( (forma) => (
        <> 
    <BoxModul titre={forma.nomModule}  linkhref={"/detaiModule/"+formation.idFormation+"/"+forma.idModule}/>
      </> )):null}
     
        </div> 
        <div className='blocmiddleModel1'> 
 <BoxLeft className="divun" titre="Démarche qualité :" description="Certifopac atteste que nos prestations ont été évaluées et jugées conformes aux exigences du Référentiel national qualité au titre de la catégorie 'Actions de formation' (L.6313-1)."
text="Ce label Qualiopi nous permet d’être référencé par les financeurs de la formation professionnelle continue." 
images={img1}/>
  
  <BoxLeft className='divdeux' titre="Nos références :" description="Nous accompagnons dans leurs performances économique des clients issus de secteurs variés.
Voici un extrait de clients qui nous font confiance depuis plus de 10 ans"
text="Faites de même !" images={img2}/>

  </div>
        <br/>
  <span className='title_span'>Localiser nos formations  {formation.idFormation}
</span>
  <br/>

  <table className="styled-table">
   
    <tbody>
    {pays.map( (p) => (
        <tr> <td> <a href={"/plusInformation/"+formation.nomFormation+"/"+p} >{formation.nomFormation} à {p} </a></td> </tr>
    ))}

    </tbody>
</table>
<Footer/>
  </>
  )

}

