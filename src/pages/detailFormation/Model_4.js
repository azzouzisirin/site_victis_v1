import React from 'react';
import '../ModulDetail/modulDetail.css'
import { useParams } from 'react-router-dom';
import {formations} from '../../data/db.json'
import Footer from '../../components/footer/Footer'


export default function Model_4() {
  let { idFormation } = useParams();

  const formation=formations.find((forma)=> forma.idFormation===idFormation)
    return ( 
      <> 
      <div className='contentDetailModul' >
      <div className='headGandTitre' > 
    
      <div class="left">   <img src={formation.imgFormation}   alt={formation.imgFormation}/></div>
      <div class="right" >    <h1 className='titleGrandHead' > {formation.nomFormation} </h1></div>
     </div>   
     <br/>
     
 
  
     <a href={"/detaiModule/"+idFormation+"/"+formation.modules[0].idModule}> 
      <div className='blocModel4'>
 
  <div className="blocleftModel4v1">


 
<img src={formation.modules[0].imgModule} alt={formation.modules[0].imgModule}/>
</div>

<div className="blocRightModel4v1">
  {
    formation.modules[0].textModule.map((k)=>{
      return(
        <h6> {k}</h6>
      ) 

    })
  }


</div>


</div>
</a>
<a href={"/detaiModule/"+idFormation+"/"+formation.modules[1].idModule}> 
<div className='blocModel4'>
<div className="blocleftModel4v2">
{
    formation.modules[1].textModule.map((k)=>{
      return(
        <h6> {k}</h6>
      )

    })
  }

</div>

<div className="blocRightModel4v2">
<img src={formation.modules[1].imgModule} alt={formation.modules[0].imgModule}/>
 

</div>

</div>
</a>

<a href={"/detaiModule/"+idFormation+"/"+formation.modules[2].idModule}> 
<div className='blocModel4'>
<div className="blocleftModel4v1">

<img src={formation.modules[2].imgModule} alt=''/>
</div>

<div className="blocRightModel4v1">
  {
    formation.modules[2].textModule.map((k)=>{
      return(
        <h6> {k}</h6>
      )

    })
  }


</div>

</div>
</a>
<a href={"/detaiModule/"+idFormation+"/"+formation.modules[3].idModule}> 
<div className='blocModel4'>
<div className="blocleftModel4v2">
{
    formation.modules[3].textModule.map((k)=>{
      return(
        <h6> {k}</h6>
      )

    })
  }

</div>

<div className="blocRightModel4v2">
<img src={formation.modules[3].imgModule} alt=''/>
 

</div>

</div>
</a>
<a href={"/detaiModule/"+idFormation+"/"+formation.modules[0].idModule}> 
<div className='blocModel4'>
<div className="blocleftModel4v1">

<img src={formation.modules[4].imgModule} alt=''/>
</div>

<div className="blocRightModel4v1">
  {
    formation.modules[4].textModule.map((k)=>{
      return(
        <h6> {k}</h6>
      )

    })
  }


</div>

</div>

</a>






    








<br/>
     </div>
     <Footer/>
     </>
    )

}
