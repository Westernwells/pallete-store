import React from 'react'
import './styles.css'
export default function Services(){
    return(
      <section className="sev-sec">
      <div class="container-fluid">
      <div className="row">
      <div className="col-sm-12">
      <p className="sev-header">Our Sevices</p>
      </div>
      </div>
      <div class="row">
      <div class="col-sm-12 col-md-4">
      <div class="card cad text-center">
      <p className="s-bg">C</p>
      <h5 class="c-title text-center">Customization</h5>
      <p class="c-text">Some quick example text to build on the card title and make up the bulk the cards content</p>
      <button class="btn-pri" type="submit">Button</button>
      </div>
      </div>
      
      
      <div class="col-sm-12 col-md-4">
      <div class="card cadx text-center">
      <p className="s-bgx">C</p>
      <h5 class="c-title text-center">Customization</h5>
      <p class="c-text">Some quick example text to build on the card title and make up the bulk the cards content.</p>
      <button class=" btn-prix" type="submit">Button</button>
      </div>
      </div>
      
      <div class="col-sm-12 col-md-4">
      <div class="card cad text-center">
      <p className="s-bg">C</p>
      <h5 class="card-title text-center">Customization</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk the cards content.</p>
      <button class="btn-pri" type="submit">Button</button>
      </div>
      </div>
      </div>
      </div>
      </section>
      )
}