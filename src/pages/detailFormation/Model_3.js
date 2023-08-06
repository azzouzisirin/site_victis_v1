import React from 'react';
import '../ModulDetail/modulDetail.css'
import { useParams } from 'react-router-dom';
import {formations} from '../../data/db.json'
import Footer from '../../components/footer/Footer'

import BoxLeft from '../../components/boxLeft/BoxLeft';
const img1 =["../../images/logo/qualiopi-logo.png"]
const img2 = ["../../images/logo/safran_png.png", "../../images/logo/logo-alstom.png", "../../images/logo/ge_235x2352.png"];

export default function Model_3() {
  let { idFormation } = useParams();

  const formation=formations.find((forma)=> forma.idFormation===idFormation)
function ListModule({listitem}){
  function  ModelText({context}){
    return (
      context.map((con)=>{ 
      return  (<>
      <br/>
       <p> {con}</p>
       
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
  function  ModelListspan({context}){
    return (<ul className='petitList'>
     
      <li><span className='h6span'> {context[0]} </span> {context[1]}</li>
    
     
      </ul>)
  } 
  function  ModelListTwo({context}){
    return (<>
      <ul className='ListTwo'> 
       {context ? context.map((p)=>{
       return  <li> {p}</li>
       }):null}
     
       </ul>
      </>)
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
  function  SousTitre({context}){
    return (<>   <br/>
      <h4 >   {context} </h4>  
      <br/>
    </>
    
    )
  } 
  function Itemlist({item,listitem}){
  
    function ListItem ({t}){

 
      const prog=formation.context[item].lesmodules[t]

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
      const context=formation.context[t]
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
     if(t.includes("sousTitre")){
      return <SousTitre context={context} item={t} />

     }
     if(t.includes("petitTitre")){
      return <PetitTitre context={context} item={t} />

     }
     if(t.includes("list")){
      return <ModelList context={context} />
     }
     if(t.includes("spanList")){
      return <ModelListspan context={context} />
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
      <> 
      <div className='contentDetailModul' >
        <br/>
      <div className='headGandTitre'>
     
      <div class="left">  <img src={formation.imgFormation}   alt={formation.imgFormation}/></div>  
      <div class="right">  <h1 className='titleGrandHead' > {formation.nomFormation}   </h1></div>  
      <br/>
     </div>   
     <br/>
     <div className='contentModule'>
     <div className='blocleftModel3'> 
  <ListModule listitem={formation.forma}/>
  </div>
 
 <div className='blocrightModul'>
{formation.duree? <> <div className='blocDetailFormation' id="prix">
  <h2 >Durée :</h2> 
 <h3>{formation.duree}</h3>
 <h2  >Prix :</h2>
 <h3>A partir de {formation.prix} euros HT prix dégressif en fonction du nombre de participants</h3>
 <h2  >Dates de sessions :</h2>
 <h3>Nous consulter pour les prochaines dates de sessions</h3>
 <h2 >Les plus de nos formations:</h2>
 <h3>Alternance de contenus théoriques et cas pratiques afin de permettre aux participants de s’approprier progressivement les outils et méthodes.</h3>
 </div>
 <div  className='Buttonaide'> <p><br/><a href="/contact" > Besoin d'un devis</a>   </p>   </div>
 </>
   :null

}
 
 <BoxLeft titre="Démarche qualité :" description="Certifopac atteste que nos prestations ont été évaluées et jugées conformes aux exigences du Référentiel national qualité au titre de la catégorie 'Actions de formation' (L.6313-1)."
 text="Ce label Qualiopi nous permet d’être référencé par les financeurs de la formation professionnelle continue." 
 images={img1}/>
 <div className="blocDetailFormation"> 
 <h2>Comment financer ma formation :</h2>
 <h3> Vous avez acquis des droits à la formation, notamment des heures CPF et CIF Vous pouvez les utiliser pour financer tout ou une partie de votre formation. </h3>
 <br/>
 <h4>Vous n’avez pas assez d’heures?</h4><br/>
 <h3>Ce n’est pas toujours bloquant, puisque selon les cas, vous pouvez bénéficier d’abondements complémentaires.</h3>
 <div className='aidebutton' id="chekbutton"> <a href="/detaiFinance" >Financer ma formation</a> </div>
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
 {formation.duree? <>
<div className='blocDetailFormation' id="prix">
 <h2 >Durée :</h2> 
<h3>{formation.duree}</h3>
<h2  >Prix :</h2>
<h3>A partir de {formation.prix} euros HT prix dégressif en fonction du nombre de participants</h3>
<h2  >Dates de sessions :</h2>
<h3>Nous consulter pour les prochaines dates de sessions</h3>
<h2 >Les plus de nos formations:</h2>
<h3>Alternance de contenus théoriques et cas pratiques afin de permettre aux participants de s’approprier progressivement les outils et méthodes.</h3>
</div>
<br/></> :null}

  

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
   <a href='/contact'> <img src="../../images/logo/logo_contactez.png" width={60}  alt="contact"/>
    <h4> Contactez-nous   </h4>   </a>  <br/> 
    </div>
  </div>
  <Footer/>
  </>
    )

}
