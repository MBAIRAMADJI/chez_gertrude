import React, { Component } from 'react';
import './App.css';
import Carte from './carte/carte.jsx';
import Contact from './contact/contact';
import Footer from './footer/footer';


class App extends Component {
	render() {
		return (

			<div>
				<Carte />
				<Contact />
				<Footer />
			</div>

		);
	}
}

export default App;
