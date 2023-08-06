
import React from 'react';
import './plusInformation.css';
import { useParams } from 'react-router-dom';
import {formations} from '../../data/db.json'
import Footer from '../../components/footer/Footer'

import BoxLeft from '../../components/boxLeft/BoxLeft';
const img2 = ["https://raw.githubusercontent.com/azzouzisirin/photoSite/main/images/logo/safran_png.png", "https://raw.githubusercontent.com/azzouzisirin/photoSite/main/images/logo/logo-alstom.png", "https://raw.githubusercontent.com/azzouzisirin/photoSite/main/images/logo/ge_235x2352.png"];
const img1 =["https://raw.githubusercontent.com/azzouzisirin/photoSite/main/images/logo/qualiopi-logo.jpg"]


export default function PlusInformationModul() {

 
    let { idFormation,idModule,pays } = useParams();
    const formation=formations.find((forma)=> forma.idFormation===idFormation)

    const module=formation.modules.find((mod)=>mod.idModule===idModule)

    const detailformation=module.detail
    
      function Itemlist({listitem}){
   
      function ListItem ({t}){
      

        const prog=module.detail.prog[t]
        
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
  <>
      <div className='contentPlusInfo'>
     <div className='headTitre'>
      
     <img src={module.imgModul}   alt={module.imgModul}/>
   
          <h1 className='titleHead'> {module.nomModule}  à {pays} </h1>
      </div>   
  <br/>
  <div className='blocOne'>
  <div className='blocleft'>
 
    <h6> {detailformation.intro}  </h6>

   <div className=' divtitre'> Objectifs de la {module.nomModule}  </div>
<h6>{detailformation.objet} </h6>
<div className=' divtitre'> Programme de {module.nomModule}  </div>

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
 
<div className='blocright'>
  <div className='boxleft' id="prix">
    <h2 className='titresouligne'>Durée :</h2>
  <h3>5 jours soit 35 heures</h3> 
  <h2 className='titresouligne' >Prix :</h2>
  <h3>A partir de 2490 euros HT prix dégressif en fonction du nombre de participants</h3>
  <h2 className='titresouligne' >Dates de sessions :</h2>
  <h3>Nous consulter pour les prochaines dates de sessions</h3>
  <h2 className='titresouligne' >Les plus de nos formations:</h2>
  <h3>Alternance de contenus théoriques et cas pratiques afin de permettre aux participants de s’approprier progressivement les outils et méthodes.</h3>
  </div>



  <BoxLeft titre="Démarche qualité :" description="Certifopac atteste que nos prestations ont été évaluées et jugées conformes aux exigences du Référentiel national qualité au titre de la catégorie 'Actions de formation' (L.6313-1)."
text="Ce label Qualiopi nous permet d’être référencé par les financeurs de la formation professionnelle continue." 
images={img1}/>
<div className="boxleft"> 
<h1> Comment financer ma formation :</h1>
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

<div className="boxleft"> 
<h1> Qui sommes nous :</h1>
<h3> ENGINEERING CONCEPT est un organisme de formation professionnelle qui allie expertise, proximité et un engagement complet pour mieux vous servir.

ENGINEERING CONCEPT vous assiste et vous accompagne dans le diagnostic de vos besoins en formation, l'élaboration de plan de formation, la réalisation des actions de formation et leur évaluation. Il vous aide également à financer vos actions de formation en collaboration avec les organismes collecteurs.</h3>

</div>
<br/>
</div>
</div>
</div>
<Footer/>
    </>
)
      }