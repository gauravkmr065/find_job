import image from './laptopDashboard.png'
function Pagetwo() {
    return (
      <div className="pagetwo">
          <div className="topheading">
          <h1>Leverage Expertia’s AI Engine to Identify the top 10 Professionals for your Job.</h1>
          </div>
        <div className="heading">
        <div className="container-left">
        <div  className="note">Expertia identifies the best Tech professionals from within your applicant pool or sourced from job boards to recommend the top 10 for your Job!</div>
        <div className="note" > Each professional has attached Skill scores and ranks based on how confident Expertia is about its recommendation,</div>
        <div  className="note">In addition Expertia uses Explainable AI to reason why a professional is best suited for your job </div>
        </div>
        <div className="container-right">
        <img alt="background image " src={image} class="myimage2"  />
        </div>
        </div>

       
      </div>
    );
  }
  
  export default Pagetwo;
  