import {
    Facebook,
    MailOutline,
    Phone,
    LinkedIn,
    Room,
    Twitter,
  } from "@material-ui/icons";
  import logo from '../../logo.png'
  import pdfFile from '../../assets/Reglement interieur.pdf';

 
import './footer.css';
import {Informaation} from '../../data/db.json' 
  

  const Footer_Contact = () => {
    return (
      <div className="ContainerFooter"> 
        <div className="Left">
        <div className="divlogo">
      <div className="leftDiv"><img className="Logo" src={logo}  alt="logo victis information"/> </div>  
      <div className="rightDiv"> <h3 className="Title">Victis Formation</h3></div>

        </div>
         <br/>
         <h5>vous propose une offre complète de formations adaptées à tout public : particuliers, étudiants, employés, demandeurs d'emploi et chefs d'entreprises. Un centre de formation professionnelle implanté en plein centre ville, ayant une infrastructure adaptée aux exigences des normes de la formation demandée.</h5>
         <div className="SocialContainer">
         <div className="SocialIcon"
         color="#3B5999">
         <a href={Informaation.facebook}  target="_blank" rel="noopener noreferrer">  <Facebook color="primary" style={{ fontSize : "40px" }} /></a>
            </div>

            <div className="SocialIcon" >
            <a href={Informaation.linkidin}  target="_blank" rel="noopener noreferrer" >   <LinkedIn color="primary" style={{ fontSize : "40px" }} /> </a>
            </div>
            <div className="SocialIcon" >
            <a href={Informaation.twiter}  target="_blank" rel="noopener noreferrer">      <Twitter color="primary" style={{ fontSize : "40px" }} /></a>
            </div>
          
          </div>
        </div>
        <div className="CenterUn">
          <h3 className="Title">Nos formations </h3>
       
<h5 className="divtitre" ><a href="/formation/CAO">Formations CAO </a> </h5> 
           <h5 className="divtitre"> <a href="/formation/Design">Dessin technique</a>  </h5> 
         <h5 className="divtitre"> <a href="/bureau%20d'études%20et%20de%20méthodes">Bureau d'études</a>  </h5> 
          <h5 className="divtitre"> <a href="/detailFormationModel3/Cotation%20fonctionnelle">Cotation fonctionnelle</a>  </h5>  
           <h5 className="divtitre"> <a href="/formation/DAO%20et%20architecture">Formations DAO</a>  </h5>
        <h5 className="divtitre">   <a href="/detailFormationModel5/Autocad"> Formation Autocad</a>  </h5>  
           <h5 className="divtitre"><a href="/formation/Design">  Design et 3D</a>  </h5> 

         
        </div>
        <div className="CenterDeux">
          <h3 className="Title">A propos de nos formations </h3>
       
       
           <h5 className="divtitre"> <a href={pdfFile} target="_blank" rel="noreferrer"> Règlement intérieur    </a></h5>
    <h5 className="divtitre"> <a href="/detaiFinance" target="_blank" rel="noreferrer"> Financer une formation</a></h5>
    <h5 className="divtitre"> <a href="/mentionsLegales" target="_blank" rel="noreferrer" >  Mentions légales </a></h5>
    <h5 className="divtitre"> <a href="/politiqueConfidentialité" target="_blank" rel="noreferrer"  >  Politique de confidentialité  </a></h5>

        </div>
        <div className="Right">
          
        <h3 className="Title">Nous contacter</h3>
        <div className="ContactItem">
            <Room style={{marginRight:"-2px",fontSize : "30px",marginTop:"-7px"}}/> <h5 style={{marginLeft:"10px"}} > {Informaation.adresse}  </h5>
          </div>
          <div className="ContactItem">
            <Phone style={{marginRight:"5px",fontSize : "30px",marginTop:"-10px"}}/><h5 style={{marginLeft:"-1px"}}> {Informaation.numero}  </h5>


          </div>
          <div className="ContactItem">
            <MailOutline style={{marginRight:"10px",fontSize : "30px",marginTop:"-10px"}} /><h5 style={{marginLeft:"-1px"}}>{Informaation.email}  </h5>
          </div>
          <div className="ContactItem">
          <h5 style={{marginLeft:"2px"}}>    SIRET :  {Informaation.siret}  </h5>
          </div>
          <div className="ContactItem">
          <h5 style={{marginLeft:"2px"}}>      Numéro De Déclaration D'activité :  {Informaation.nSerie}  </h5>


          </div>
        </div> 
      </div>
    )
  };
  
  export default Footer_Contact;
  