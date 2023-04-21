import '../App.css'

function About () {
    return (
        <div>
        
        <div id="carouselExampleAutoplaying" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img id='imgabout' src="https://images.pexels.com/photos/2294403/pexels-photo-2294403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h3 className='text-white'>Grandes Espacios</h3>
        <p className='text-white'>Áreas con el suficiente espacio para todos</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img  id='imgabout' src="https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h3 className='text-white'>Variedad de entrenamientos</h3>
        <p className='text-white'>Contamos con diferentes estilos de entrenamiento.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img id='imgabout' src="https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h3 className='text-white'>Sin Miedo al Exito</h3>
        <p className='text-white'>Entrena a tu ritmo, crea avances y superate.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    ); 
}
export default About;