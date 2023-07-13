import '../../css/home.css'
import IMG1 from '../../images/image4.jpeg'
import IMG2 from '../../images/image5.jpeg'
import IMG3 from '../../images/image6.jpeg'
function Caruser1(props) {

  return (
  <div className="imgcarusel">
   <div id="carouselExampleAutoplaying" class="carousel slide imgcarusel" data-bs-ride="carousel">
  <div class="carousel-inner imgcarusel">
    <div class="carousel-item active ">
      <img src={IMG1} class="d-block w-100 imgcarusel" alt={IMG1}/>
    </div>
    <div class="carousel-item">
      <img src={IMG2} class="d-block w-100 imgcarusel" alt={IMG1}/>
    </div>
    <div class="carousel-item">
      <img src={IMG3} class="d-block w-100 imgcarusel" alt={IMG1}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  </div>
  );
}

export default Caruser1;
