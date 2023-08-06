import React from 'react';
import './modulDetail.css'
import { useParams } from 'react-router-dom';
import BoxLeft from '../../components/boxLeft/BoxLeft';
import {formations,pays} from '../../data/db.json'
import BoxModul from '../../components/boxModul/BoxModul'
import Footer from '../../components/footer/Footer'

const img1 =["../../images/logo/qualiopi-logo.png"]
const img2 = ["../../images/logo/safran_png.png", "../../images/logo/logo-alstom.png", "../../images/logo/ge_235x2352.png"];

export default function ModulDetail() {
    let { idModule, idFormation} = useParams();
    const formation=formations.find((forma)=> forma.idFormation===idFormation)
const module=formation.modules.find((mod)=>mod.idModule===idModule)
const model=module.model;
function ListModule({listitem}){
  function  ModelText({context}){
    return (
      context.map((con)=>{
      return  (<>
    
       <h6> {con}</h6>
       
       </>
     )
      })

    )
  } 

  function  ModelList({context}){
    return (<>
      <ul> 
       {context ? context.map((p)=>{
       return  <li> {p}</li>
       }):null}
     
       </ul>
      </>)
  } 
  function  ModelListTwo({context}){
    return (<div className='ListTwo'>
      <ul > 
       {context ? context.map((p)=>{
       return  <li> {p}</li>
       }):null}
     
       </ul>
      </div>)
  }
  function  ModelTitre({context}){
    return (
      <div className=' divtitre'>  {context}</div>
    )
  } 
  function  PetitTitre({context}){
    return (<>   <br/>
      <h2>   {context} </h2>  
      <br/>
    </>
    
    )
  } 
  function Itemlist({item,listitem}){
  
    function ListItem ({t}){

 
      const prog=module.context[item].lesmodules[t]

     return (<>
     <ul> 
      {prog ? prog.map((p)=>{
      return  <li> {p}</li>
      }):null}
    
      </ul>
     </>)
       } 
      return (<>
      {
    listitem.titrmodul.map((m)=>{
      return(<> 
      <h5> {m}</h5>

      <ListItem t={m}/>
      </> ) 
    })
  }
  </>
      )
  }

 
    function Listmodul ({t}){
      const context=module.context[t]
     if(t.includes("text")){
      return  <ModelText context={context} />
     }
     if(t.includes("listTwo")){
      return  <ModelListTwo context={context} />
     }
     if(t.includes("titre")){
        return <ModelTitre context={context} />
     }
     if(t.includes("modules")){
      return <Itemlist listitem={context} item={t} />

     }
     if(t.includes("petitTitre")){
      return <PetitTitre context={context} item={t} />

     }
     if(t.includes("list")){
      return <ModelList context={context} />
     }
       }
      return (<>
      {
    listitem.map((m)=>{
      return(<> 
    
      <Listmodul t={m}/>
      </> ) 
    })
  }
  </>
      )
  }

    
    return (
      model===1 ? 
      <> 
      <div className='contentDetailModul' >
        <br/>
      <div className='headGandTitre'>
      <div class="left"><img src={formation.imgFormation}   alt={formation.imgFormation}/></div>
      <div class="right"> <h1 className='titleGrandHead'> {module.nomModule}   </h1> </div>    
     </div>    
 <br/>
 <div className='contentModule'>
   <div className='blocleftModul'>
  <ListModule listitem={module.forma}/>
  </div>
 
 <div className='blocrightModul'>

 <div className='blocDetailFormation' id="prix">
  <h2 >Durée :</h2> 
 <h3>{module.duree}</h3>
 <h2  >Prix :</h2>
 <h3>A partir de {module.prix} euros HT prix dégressif en fonction du nombre de participants</h3>
 <h2  >Dates de sessions :</h2>
 <h3>Nous consulter pour les prochaines dates de sessions</h3>
 <h2 >Les plus de nos formations:</h2>
 <h3>Alternance de contenus théoriques et cas pratiques afin de permettre aux participants de s’approprier progressivement les outils et méthodes.</h3>
 </div>
 <div  className='Buttonaide'> <p><br/><a href="/contact" > Besoin d'un devis</a>   </p>   </div>
 
   
 
 <BoxLeft titre="Démarche qualité :" description="Certifopac atteste que nos prestations ont été évaluées et jugées conformes aux exigences du Référentiel national qualité au titre de la catégorie 'Actions de formation' (L.6313-1)."
 text="Ce label Qualiopi nous permet d’être référencé par les financeurs de la formation professionnelle continue." 
 images={img1}/>

 <div className="blocDetailFormation"> 
 <h2>Comment financer ma formation :</h2>
 <h3> Vous avez acquis des droits à la formation, notamment des heures CPF et CIF Vous pouvez les utiliser pour financer tout ou une partie de votre formation. </h3>
 <br/>
 <h4>Vous n’avez pas assez d’heures?</h4><br/>
 <h3>Ce n’est pas toujours bloquant, puisque selon les cas, vous pouvez bénéficier d’abondements complémentaires.</h3>
 <br/>
 <div className='aidebutton' > <a href="/detaiFinance" >Financer ma formation</a> </div>
 </div>
 
 
 
 
 
 <BoxLeft titre="Nos références :" description="Nous accompagnons dans leurs performances économique des clients issus de secteurs variés.
 Voici un extrait de clients qui nous font confiance depuis plus de 10 ans"
 text="Faites de même !" images={img2}/>
 
 <div className="blocDetailFormation"> 
 <h2> Qui sommes nous :</h2>
 <h3> ENGINEERING CONCEPT est un organisme de formation professionnelle qui allie expertise, proximité et un engagement complet pour mieux vous servir.
 
 ENGINEERING CONCEPT vous assiste et vous accompagne dans le diagnostic de vos besoins en formation, l'élaboration de plan de formation, la réalisation des actions de formation et leur évaluation. Il vous aide également à financer vos actions de formation en collaboration avec les organismes collecteurs.</h3>
 
 </div>
 

 </div>
 </div>
 <div className='SmallblocrightModul'>

<div className='blocDetailFormation' id="prix">
 <h2 >Durée :</h2> 
<h3>{module.duree}</h3>
<h2  >Prix :</h2>
<h3>A partir de {module.prix} euros HT prix dégressif en fonction du nombre de participants</h3>
<h2  >Dates de sessions :</h2>
<h3>Nous consulter pour les prochaines dates de sessions</h3>
<h2 >Les plus de nos formations:</h2>
<h3>Alternance de contenus théoriques et cas pratiques afin de permettre aux participants de s’approprier progressivement les outils et méthodes.</h3>
</div>
<br/>

  

<BoxLeft titre="Démarche qualité :" description="Certifopac atteste que nos prestations ont été évaluées et jugées conformes aux exigences du Référentiel national qualité au titre de la catégorie 'Actions de formation' (L.6313-1)."
text="Ce label Qualiopi nous permet d’être référencé par les financeurs de la formation professionnelle continue." 
images={img1}/>

<div className="blocDetailFormation"> 
<h2>Comment financer ma formation :</h2>
<h3> Vous avez acquis des droits à la formation, notamment des heures CPF et CIF Vous pouvez les utiliser pour financer tout ou une partie de votre formation. </h3>
<br/>
<h4>Vous n’avez pas assez d’heures?</h4><br/>
<h3>Ce n’est pas toujours bloquant, puisque selon les cas, vous pouvez bénéficier d’abondements complémentaires.</h3>
<div className='aidebutton' > <a href="/detaiFinance" >Financer ma formation</a> </div>
</div>





<BoxLeft titre="Nos références :" description="Nous accompagnons dans leurs performances économique des clients issus de secteurs variés.
Voici un extrait de clients qui nous font confiance depuis plus de 10 ans"
text="Faites de même !" images={img2}/>

<div className="blocDetailFormation"> 
<h2> Qui sommes nous :</h2>
<h3> ENGINEERING CONCEPT est un organisme de formation professionnelle qui allie expertise, proximité et un engagement complet pour mieux vous servir.

ENGINEERING CONCEPT vous assiste et vous accompagne dans le diagnostic de vos besoins en formation, l'élaboration de plan de formation, la réalisation des actions de formation et leur évaluation. Il vous aide également à financer vos actions de formation en collaboration avec les organismes collecteurs.</h3>

</div>


</div>

 <div className='Contact'>
   <br/>
   <a href='/contact'> <img src="../../images/logo/logo_contactez.png" width={60} alt="contact"/>
    <h4> Contactez-nous   </h4>   </a>  <br/> 
    </div>
  </div>
  <Footer/>
  </>

  : 
    <>
    <div className='contentDetailFormationModel1' >
    <br/>
  <h1 > {module.nomModule} </h1>
  <br/>
  
  <div className='blocOneModel1'>

<div className='blocleftDetailModel1'>
<h3 className='headtwo'>Aperçu du logiciel  {module.idModule}</h3>
 
      
    {module.texthaut.map((t)=>{
      return  <h6>{t} </h6> 
    })}
  
  </div>  
  <div className='blocrightModel1'> 
  <BoxLeft titre="Démarche qualité :" description="Certifopac atteste que nos prestations ont été évaluées et jugées conformes aux exigences du Référentiel national qualité au titre de la catégorie 'Actions de formation' (L.6313-1)."
  text="Ce label Qualiopi nous permet d’être référencé par les financeurs de la formation professionnelle continue." 
  images={img1}/>
  
  
  </div>
  </div>
  </div>
  <br/>
  <h2 className='titleThree' >Nos formations {module.idModule}</h2>
  <br/>
  
  <div className="containerboxModel1">
      {module.submodules? module.submodules.map( (forma) => (
        <>  
    <BoxModul titre={forma.idSubModule}  linkhref={"/detaiSubModule/"+idFormation+"/"+module.idModule+"/"+forma.idSubModule}/>
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
  <span className='titleThree'>Localiser nos formations  {module.idModule}
  </span>
  <br/>
   
  <table className="styled-table">
   
    <tbody>
    {pays.map( (p) => (  
        <tr> <td> <a href={"/plusInformationModul/"+formation.idFormation+"/"+module.idModule+"/"+p} >{module.nomModule} à {p} </a></td> </tr>
    ))}
  
    </tbody>
  </table>
  <Footer/>
  </>
    )

}
 