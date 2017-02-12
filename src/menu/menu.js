import React from 'react';
import './menu.css';


class Menu extends React.Component {
constructor(props) {
	super(props);
	this.state = {isHidden:false}
}

	showCart = () => {
		this.setState({
			isHidden :!this.state.isHidden
		});
	}

	render () {
		return (
			<div>
				<div id="header">
					<p style={{"marginLeft":"40px", "fontFamily":"Bad Script", "fontSize":"22px"}}><a href="#">Chez Gertrude</a></p>
					<div>
						<ul id="my_menu" style={{"marginLeft":"300px"}}>
							<li><a href="#">Accueil</a></li>
							<li><a href="#">Carte</a></li>
							<li><a href="#">Contact</a></li>
						</ul>
					</div>
						<a onClick={this.showCart} href="#"><button className='btn btn-warning btn-lg' style={{"marginRight":"20px"}}>Panier
						 	
						</button></a>
						{this.state.isHidden && <Dropdown /> }
				</div>
			</div>

			)
	}
}

class Dropdown extends React.Component{
	render() {
			return (
		<div className="dropDown">
			<div className="panierTotal">
	         <table className="table">
	         	<thead>
	         		<tr>
	         			<th>Plat</th>
	         			<th>Qté</th>
	         			<th>P. U.</th>
	         			<th>P.T.</th>
	         		</tr>
	         	</thead>
	         	<tbody>
	         		<tr>
	         			<td></td>
	         			<td></td>
	         			<td></td>
	         			<td></td>
	         		</tr>
	         	</tbody>
	         </table>
	          <h3>Total</h3>
	        
	        </div>
     	</div>
     	)
	}
}

export default Menu;