import React from 'react';
import "./Carousel.css";
import {Carousel} from 'react-bootstrap';


class Carousel1 extends React.Component{
	render(){
		return(
		 
			<Carousel>
		   	<Carousel.Item>
		   		<img src="https://media-cdn.tripadvisor.com/media/photo-s/02/1b/9a/bf/le-grande-bouffe.jpg" />
		    <Carousel.Caption>
		    </Carousel.Caption>
		    </Carousel.Item>
		    <Carousel.Item>
		    	<img src="http://www.epicurien.be/img/recettes-cuisines/20130928_poulet_morilles-500.jpg"/>

		    <Carousel.Caption>
		    </Carousel.Caption>
		    </Carousel.Item>
		    <Carousel.Item>
	        	<img src="https://i1.wp.com/cotesoleils.fr/wp-content/uploads/2015/06/tajine-agneau-et-pruneaux-algc3a9rie1.jpg"/>
  			<Carousel.Caption>
		      </Carousel.Caption>
		    </Carousel.Item>
		  </Carousel>
    

);


	}
}

export default Carousel1;