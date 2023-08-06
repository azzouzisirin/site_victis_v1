import React, { useRef ,useState} from 'react';
import './contact.css';
import {Informaation} from '../../data/db.json'
import FooterContact from '../../components/footer/Footer_Contact'
import emailjs from "@emailjs/browser";
 
export default function Contact() {
  const form = useRef();
  const [Nom, setNom] = useState();
  const [email, setemail] = useState();
  const [Message, setMessage] = useState();
  const [Formation, setFormation] = useState();
  const [Societe, setSociete] = useState();
  const [Tel, setTel] = useState();


  const sendEmail = (e) => {
    e.preventDefault();
    handleClick();
    emailjs
      .sendForm(
        "service_r966kfv",
        "template_kvjdl57",
        form.current,
        "i1_-pBzdNfLls330C"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const handleClick = () => {
    // 👇️ clear input value
    setNom('');
    setemail('');
    setMessage('');
    setFormation('');
    setSociete('');
    setTel('');
  };
return(
    <div> 
      <img src={Informaation.imageContact} alt={Informaation.imageContact} className="imgContact" />

      <div className='conteinContact'>
        <div className='leftcontainet'>
           

  <iframe   src="https://maps.google.com/maps?q=8%20Rue%20de%20Balzac,%2037000%20Tours,%20France&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title='contact'></iframe>
  </div>
 <div className='rigthcontainet'>
 <form class="form-grp clearfix grpelem" ref={form} onSubmit={sendEmail}>
<label> Nom : </label><br/>
<input type="text" placeholder="Entrez un nom" class="box" name="Nom" value={Nom} required/>
<br/><br/>
<label> Adresse électronique : </label><br/>
<input type="email" placeholder="Entrez l'adresse e-mail" class="box" name="email" value={email} required/>
<br/><br/><label> Message : </label><br/>
<textarea name="Entrez votre message" id="" cols="30" rows="10" class="box message" value={Message} placeholder="message"></textarea>
<br/><br/><label> Formation :</label><br/>
<input type="text" placeholder="Saisir du texte" class="box" name="nomForma" value={Formation} required/>
<br/><br/><label> Société :</label><br/>
<input type="text" placeholder="Entrez un société " class="box" name="Societe" value={Societe} required/>
<br/><br/><label> Tél. portable :</label><br/>
<input type="text" placeholder="Entrez un numéro de téléphone" class="box" name="tel" value={Tel} required/>

<br/>
<button type="submit" class="btn" style={{fontSize:"25px"}}> envoyer <i class="fas fa-paper-plane"></i> </button>

 </form>

 </div> </div>
 <div className='descbas'> 
 <br/>
 Merci de nous signaler la présence de personnes en situation de handicap parmi les participants. Nous prendrons ainsi les dispositions nécessaires pour les accueillir dans les meilleures conditions.

Plus d’informations sur la prise en compte des besoins de <a href='pluscontact'> formation des personnes en situation de handicap en cliquant ici.</a> 
<br/>
</div> 
<br/>

<FooterContact/>
    </div>

)

}