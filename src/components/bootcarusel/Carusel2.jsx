import '../../css/home.css'
import IMG1 from '../../images/image7.jpeg'
import IMG2 from '../../images/image8.jpeg'
import IMG3 from '../../images/image9.jpeg'
function Caruser2(props) {

  return (
  <div className="imgcarusel">
   <div id="carouselExampleAutoplaying2" class="carousel slide imgcarusel" data-bs-ride="carousel">
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
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  </div>
  );
}

export default Caruser2;
