import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import Model_1 from './pages/detailFormation/Model_1';
import Model_2 from './pages/detailFormation/Model_2';
import Model_3 from './pages/detailFormation/Model_3';
import Model_4 from './pages/detailFormation/Model_4';
import Model_5 from './pages/detailFormation/Model_5';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Categories from './pages/categories/Categories';
import Referance from './pages/Referance/Referance';

import DetailModule from './pages/ModulDetail/ModulDetail'
import DetailSubModule from './pages/SubModulDetail/SubModulDetail'

import PasFormation from './pages/ModulDetail/PasFormation'
import PlusInformation from './pages/plusinformation/PlusInformation';
import PlusInformationModul from './pages/plusinformation/PlusInformationModul';
import Actuialite from './pages/actuialite/Actuialite';
import Contact from './pages/contact/Contact';
import Formation from './pages/formation/Formations'
import PlusContact from './pages/contact/PlusContact'
import A_Distance from './pages/A_Distance/A_Distance';
import DetailActialite from './pages/DetailActialite/DetailActialite'
import DetaiFinance from './pages/ConditionGeneral/DetaiFinance'
import MentionsLegales from './pages/ConditionGeneral/MentionsLegales'
import PolitiqueConfidentialité from './pages/ConditionGeneral/PolitiqueConfidentialité'
import CookieConsent from 'react-cookie-consent';
function App() {

  return (
    <Router>
     <Navbar/> 
      <Switch>

      <Route path='/Categories'  component={Categories} />
      <Route path='/'  exact component={Home} />

      <Route path='/mentionsLegales'   component={MentionsLegales} />
      <Route path='/politiqueConfidentialité'   component={PolitiqueConfidentialité} />

      <Route path='/actuialite'  component={Actuialite} />
      <Route path='/referance'  component={Referance} />

      <Route path='/detailActuialite/:id'  component={DetailActialite} />

        <Route path='/formation/:idCategories' component={Formation} />
        <Route path='/detailFormationModel1/:idFormation' component={Model_1} />
        <Route path='/detailFormationModel2/:idFormation' component={Model_2} />
        <Route path='/detailFormationModel3/:idFormation' component={Model_3} />
        <Route path='/detailFormationModel4/:idFormation' exact component={Model_4} />
        <Route path='/detailFormationModel5/:idFormation' exact component={Model_5} />

       <Route path='/plusInformation/:nomFormation/:pays' component={PlusInformation} />
       <Route path='/plusInformationModul/:idFormation/:idModule/:pays' component={PlusInformationModul} />

        <Route path='/detaiFinance' component={DetaiFinance} />
        <Route path='/detaiModule/:idFormation/:idModule' component={DetailModule} />
        <Route path='/detaiSubModule/:idFormation/:idModule/:idSubModule' component={DetailSubModule} />
  
        <Route path='/a_distance' component={A_Distance} />
        <Route path='/contact' component={Contact} />
        <Route path='/pluscontact' component={PlusContact} />



      </Switch>
    
      <CookieConsent
  location="bottom"
  buttonText="Accept"
  cookieName="myAwesomeCookieName2"
  style={{    display: "flex",
    flexDirection: "column",
    width:"450px",
   
    marginBottom:"20px",
    borderRadius: "10px",
    background:"white",
    color:"black",
    borderStyle: "solid",
    borderColor:"white",
    boxShadow:"7px 7px 8px rgba(0,0,0,0.5)",

   
    animation: "0s ease 0s 1 normal none running none !important" }}
  buttonStyle={{ color: "#231ab4",background:"rgb(209, 227, 240)",display:"flex",marginTop:"3%", fontSize: "25px",padding:"15px",marginLeft:"20%" }}
>

<h2>Bienvenue sur le site </h2>

<h1> Victis Formation</h1><br/>
<p style={{marginLeft:"-160px",fontSize:"18px"}}>Nous utilisons plusieurs services de mesure d'audience et de comportement sur notre site afin d'améliorer celui-ci.
Ces services sont désactivés par défaut, mais vous pouvez les activer à tout moment à votre convenance.</p>
 <a href="/mentionsLegales">Lire la politique de confidentialité</a>

</CookieConsent>
    </Router>
  );
}

export default App;
