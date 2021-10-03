import { useEffect, useState } from "react";

function Leftone() {
    const[valu,setVal]=useState(0);
    const cola={color:"yellow"}
    const colb={color:"pink"}
    const colc={color:"black"}
    useEffect(()=>{
       // setVal((valu+1)%3);
     setTimeout(() => setVal((valu+1)%3), 1000);
        console.log("came")
    },[valu])

    return (
      <div className="Leftone">
        
       
             <h2 class="myheading">
                 <span class="">One click</span>
               {valu==0? <div style={cola}>Candidate Sourcing</div> :""  }       
               {valu==1? <div style={colb}>Resume Screening</div>:""  }  
               {valu==2?  <div style={colc}>Career Page Creation.</div>:""  }  
            </h2>
                <div class="sub header">
                                  <p class="mypara">
                                             Broadcast job vacancies to job portals &amp; screen incoming resumes to find the top 10 candidates.
                                  </p>
                </div>
                <button className="mybutton">Demo</button>
                           
      </div>
    );
  }
  
  export default Leftone;
  