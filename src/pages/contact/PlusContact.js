import React from 'react';
import './contact.css';
import {Informaation} from '../../data/db.json'
import Slides from '../../components/slides/Slides';
import FooterContact from '../../components/footer/Footer_Contact'


export default function PlusContact() {
 
    return ( <> 
    <Slides images={Informaation.imageContact} />
    <div className='PlusContact' >

<h6 > Quelque soit la nature de votre handicap, contactez notre référent handicap et définissez conjointement le processus d’accueil et les adaptations nécessaires pour suivre votre formation dans les meilleures conditions : azouz.bdioui@engineering-concept.fr</h6>
<br/> 
<h5> Prise en compte des besoins de formation des personnes en situation de handicap.</h5>
<br/>  
 <h6>  Conscient de sa responsabilité sociale sur ce sujet, ENGINEERING CONCEPT s’engage auprès de ses clients à fournir une offre de formations aux personnes en situation de handicap égale aux autres grâce à la mise en place de dispositions en fonction du type de handicap :</h6>      
 <br/>    
  <ul>
    <li> <span> Handicap moteur :</span> accessibilité des locaux, formation à distance, services adaptés  </li>
    <li> <span>Handicap sensoriel : </span>  prise en compte du handicap dans l’action de formation. Adaptation du format, mise à disposition de matériel technologique adapté, intégration communication avec le correspondant handicap de l'apprenant si besoin, accueil d’un traducteur…  </li>
    <li> <span> Maladies invalidantes :</span>  adaptation du format, du rythme et du contenu en cours particulier, mise à disposition de matériel technologique adapté. </li>
    </ul>     
    <br/>   
 <h5> Accueil physique des personnes en situation de handicap.</h5>      
 <br/>   
   <h6>Nous mettons à disposition des personnes en situation de handicap des locaux afin de recevoir des collaborateurs en situation de handicap : </h6>   
   <br/> 
    <ul>
      <li> Des toilettes accessibles aux personnes en fauteuil roulant,</li>  
      <li>  Des portes suffisamment large pour laisser passer un fauteuil roulant,</li>
      <li>  Mobilier adapté (bureau, salle de pause) pour les personnes à mobilité réduite,</li>
      <li> Service de livraison de repas afin de limiter les déplacements à l’extérieur.</li>
    </ul>   <br/> 
    <h6>Lorsque nous réalisons une formation dans les locaux client ou d’un partenaire, nous nous assurons que la salle soit parfaitement adaptée à une personne en situation de handicap. </h6>   
    <br/> 
<h5>Le réseau des structures d'accompagnement.</h5>
<br/> 
<h6>ENGINEERING CONCEPT a adopté depuis sa création une politique proactive de prise en charge des personnes en situation de handicap. Nous sommes en ce sens utilisateurs et abonnés du site de l’AGEFIPH (Association de Gestion du Fonds pour l’Insertion Professionnelle des Personnes Handicapées). </h6>   
<br/> 
<h6> Pour vous accompagner, de nombreux acteurs sont à votre écoute :</h6>   
<br/> 
<ul> 
<li>
<span>L'AGEFIPH </span> (Association de gestion du fonds pour l'insertion professionnelle des personnes handicapées) - <a target="_blank" rel="noreferrer" href="https://www.agefiph.fr/articles/propos-de-lagefiph/besoin-dune-information?utm_source=Liste+abonn%C3%A9s+ATHEME+Hebdo&utm_campaign=1aa57f2420-2014_LHOF_Semaine_174_24_2014_COPY_01&utm_medium=email&utm_term=0_284040868a-1aa57f2420-133678077&ct=t(2014_LHOF_Semaine_174_24_2014_COPY_01)" > Coordonnées   </a></li>   
</ul><br/> 
<h6>
 <a target="_blank"  rel="noreferrer" href="https://www.agefiph.fr/sites/default/files/medias/fichiers/2021-03/Contacts%20Ressources%20Handicap%20Formation%2003%202021.pdf?utm_source=Liste+abonn%C3%A9s+ATHEME+Hebdo&utm_campaign=1aa57f2420-2014_LHOF_Semaine_174_24_2014_COPY_01&utm_medium=email&utm_term=0_284040868a-1aa57f2420-133678077&ct=t(2014_LHOF_Semaine_174_24_2014_COPY_01)" > 
Annuaire des Ressources Handicap Formation de l'AGEFIPH :   </a></h6>   
<br/> 

<ul>  
<li> <span> Les MDPH </span>(Maison Départementale des Personnes Handicapées) -<a href="https://www.cnsa.fr/annuaire-des-mdph?utm_source=Liste+abonn%C3%A9s+ATHEME+Hebdo&utm_campaign=1aa57f2420-2014_LHOF_Semaine_174_24_2014_COPY_01&utm_medium=email&utm_term=0_284040868a-1aa57f2420-133678077&ct=t(2014_LHOF_Semaine_174_24_2014_COPY_01)" rel="noreferrer" target="_blank" >Coordonnées </a></li>

<li><span> FIPHPH </span>(Fonds pour l'Insertion des Personnes Handicapées dans la Fonction Publique) - <a href="https://www.fiphfp.fr/employeurs/ressources-employeurs/annuaire" target="_blank" rel="noreferrer">Coordonnées </a></li>

<li><span>Annuaire </span> des acteurs spécialistes du handicap à proximité de nos établissements - <a href="https://www.monparcourshandicap.gouv.fr/annuaire?utm_source=Liste+abonn%C3%A9s+ATHEME+Hebdo&utm_campaign=1aa57f2420-2014_LHOF_Semaine_174_24_2014_COPY_01&utm_medium=email&utm_term=0_284040868a-1aa57f2420-133678077&ct=t(2014_LHOF_Semaine_174_24_2014_COPY_01)" target="_blank" rel="noreferrer" >Coordonnées </a></li>

</ul>  
  <br/> 
<h6> Attention, certaines démarches peuvent être longues (recherche de financements spécifiques, adaptation de support, commande de matériel, mise à disposition d'une aide humaine...). Merci de bien vouloir anticiper un maximum vos démarches.

</h6>   
<br/> 
<h5>Contactez notre référent handicap : <a href="/contact" >Ici</a> </h5>
<br/>
        </div>
        <FooterContact/>
     </>)
    


}