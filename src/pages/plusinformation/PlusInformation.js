
import React from 'react';
import './plusInformation.css';
import { useParams } from 'react-router-dom';
import {formations} from '../../data/db.json'
import Footer from '../../components/footer/Footer'

import BoxLeft from '../../components/boxLeft/BoxLeft';
const img1 =["../../images/logo/qualiopi-logo.png"]
const img2 = ["../../images/logo/safran_png.png", "../../images/logo/logo-alstom.png", "../../images/logo/ge_235x2352.png"];


export default function PlusInformation() {

 
    let { nomFormation,pays } = useParams();
    const formation=    formations.find((forma)=> forma.nomFormation===nomFormation)

    const detailformation=formation.detail
     
      function Itemlist({listitem}){
  
      function ListItem ({t}){
        const prog=formation.detail.prog[t]
        
       return (<>
       <ul > 
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
   
  detailformation ? 
  <> 
      <div className='contentDetailModul'>
        <br/>
     <div className='headGandTitre'>
      
     <div class="left">   <img src={formation.imgFormation}   alt={formation.imgFormation}/></div>
   
     <div class="right">    <h1 className='titleHead'> {nomFormation}  à {pays} </h1></div>
      </div>   
  <br/>
  <div className='blocOne'>
  <div className='blocleftModul'>
 
    <h6> {detailformation.intro}  </h6>

   <div className=' divtitre'> Objectifs de la {nomFormation}  </div>
<h6>{detailformation.objet} </h6>
<div className=' divtitre'> Programme de {nomFormation}  </div>

<Itemlist listitem={detailformation.titreprog}/>


<div className=' divtitre'> 

Public  </div>
 
<h6>{detailformation.public}</h6>
<div className=' divtitre'> 
 
Prérequis </div>
<h6>{detailformation.prérequis}</h6>
<div className=' divtitre'> 


Moyens pédagogiques :  </div>


<h6>{detailformation.moyen}</h6>
</div>
 
<div className='blocrightModul'>
  <div className='blocDetailFormation' id="prix">
    <h2 >Durée :</h2>
  <h3>5 jours soit 35 heures</h3> 
  <h2  >Prix :</h2>
  <h3>A partir de 2490 euros HT prix dégressif en fonction du nombre de participants</h3>
  <h2  >Dates de sessions :</h2>
  <h3>Nous consulter pour les prochaines dates de sessions</h3>
  <h2  >Les plus de nos formations:</h2>
  <h3>Alternance de contenus théoriques et cas pratiques afin de permettre aux participants de s’approprier progressivement les outils et méthodes.</h3>
  </div>



  <BoxLeft titre="Démarche qualité :" description="Certifopac atteste que nos prestations ont été évaluées et jugées conformes aux exigences du Référentiel national qualité au titre de la catégorie 'Actions de formation' (L.6313-1)."
text="Ce label Qualiopi nous permet d’être référencé par les financeurs de la formation professionnelle continue." 
images={img1}/>
<div className="blocDetailFormation"> 
<h2> Comment financer ma formation :</h2>
<h3> Vous avez acquis des droits à la formation, notamment des heures CPF et CIF Vous pouvez les utiliser pour financer tout ou une partie de votre formation. </h3>

<h4> Vous n’avez pas assez d’heures ?</h4>
<h3>Ce n’est pas toujours bloquant, puisque selon les cas, vous pouvez bénéficier d’abondements complémentaires.</h3>
<div className='aButton'> <a href="/detaiFinance" >Financer ma formation</a>
 </div>
 <br/>
</div>




  <BoxLeft titre="Nos références :" description="Nous accompagnons dans leurs performances économique des clients issus de secteurs variés.
Voici un extrait de clients qui nous font confiance depuis plus de 10 ans"
text="Faites de même !" images={img2}/>

<div className="blocDetailFormation"> 
<h2> Qui sommes nous :</h2>
<h3> ENGINEERING CONCEPT est un organisme de formation professionnelle qui allie expertise, proximité et un engagement complet pour mieux vous servir.

ENGINEERING CONCEPT vous assiste et vous accompagne dans le diagnostic de vos besoins en formation, l'élaboration de plan de formation, la réalisation des actions de formation et leur évaluation. Il vous aide également à financer vos actions de formation en collaboration avec les organismes collecteurs.</h3>

</div>
<br/>
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
</div>
<Footer/></>:
  <>
  <h1 className='titleHead'> Page en cours de construction </h1>
 
<div className='bloccContact'>

<h5>
Besoin d'un </h5>

<h5>programme personnalisé
</h5>
<a href="/contact"> cliquez ici</a>
</div>
<Footer/>
</>
 
)
      }