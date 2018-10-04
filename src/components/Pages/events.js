import React, { Component } from 'react';
import image1 from "../../pictures/Carousel/first.JPG";
import image2 from "../../pictures/Carousel/second.JPG";
import image3 from "../../pictures/Carousel/third.JPG";
class Events extends Component {
  render() {
    return (
      <div className="container-fluid">

        <h1>Products</h1>

        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src={image1} alt="First slide"/>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={image2} alt="Second slide"/>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={image3} alt="Third slide"/>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>



        <p>  Lorem ipsum phasellus massa laoreet tellus duis dolor nisi vitae, mattis ornare volutpat non donec libero dictum tortor commodo, dictum nunc cras himenaeos eu mattis taciti diam aliquam habitasse gravida erat sociosqu pulvinar habitasse.</p>


      </div>


    );
  }
}

export default Events;
