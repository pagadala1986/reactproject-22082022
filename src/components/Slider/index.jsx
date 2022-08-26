import React, { Component } from 'react'

class Slider extends Component {

 constructor(props ){
  super(props );
  this.state = {
    slider:['angular_training.jpg','react_training.jpg','full_stack_development.jpg']
  }
  //this.addSlider = this.addSlider.bind(this);
 }
 addSlider = () =>{
  this.setState({slider: [...this.state.slider,'aws_training.jpg']});
 }
  render() {
    const pathImg = 'https://www.achieversit.com/assets/images/';
    return (
      <>
        {/*  <!-- Carousel --> */}
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
        
          {/* <!-- Indicators/dots --> */}
          <div className="carousel-indicators">
            {
              this.state.slider && this.state.slider.map((item,index)=>{
                let activeIndicator = (index==0?'active':'')
                return(
                  <button type="button" data-bs-target="#demo" data-bs-slide-to={index} className={activeIndicator} key={index}></button>
                )
              })
            }
          </div>
        
          {/* <!-- The slideshow/carousel --> */}
          <div className="carousel-inner">
            {
              this.state.slider && this.state.slider.map((item,index)=>{
                let activeEle = (index==0?"carousel-item active":"carousel-item");
                return(
                  <div className={activeEle} key={index}>
                    <img src={pathImg+item} alt={item} className="d-block w-100" />
                  </div>
                )
              })
            }
          </div>
        
          {/* <!-- Left and right controls/icons --> */}
          <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
        <button onClick={this.addSlider}>Add New Slider</button>
        </>
    )
  }
}

export default Slider;
