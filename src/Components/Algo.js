import React, { Component } from 'react';

class Algo extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item-algo">
           <div className="item-wrap">
            <a href={projects.url}>
               <img alt={projects.title} className="algo-pictures" src={projectImage} />
               <div className="overlay-algo">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="algo">

      <div className="row algo">

         <div className="twelve columns collapsed">

            <h1 className="algo-h1">Algorithm Challenges</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Algo;
