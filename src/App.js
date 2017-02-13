import React, { Component } from 'react';
import Carte from './carte/carte.jsx';
import Contact from './contact/contact';
import Footer from './footer/footer';
import Menu from './menu/menu';
import Carousel1 from './carousel/Carousel1.jsx';



class App extends Component {
	render() {
		return (

			<div>
				<Menu />
				<Carousel1/>
				<Carte />
				<Contact />
				<Footer />
			</div>

		);
	}
}

export default App;
