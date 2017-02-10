import React from 'react';


class Carte extends React.Component{
	render(){
		return(
			
		<div>



			<h1>La bonne bouffe</h1>
			
			

			<p className="paragraphe">

			Venez goûter nos plats préparés avec amours et bienveillance. Notre chef Gertrude viendra probablement vous serrer la main. 
			<br/>Vous pourrez échanger avec cette passionnée de cuisine et repartir 
			<br/>avec des conseils pour reproduire sa cuisine inimitable.

			</p>
			
			
			<div className="border"></div>
			

			<h2>Plats :</h2>

	

			<div className="container">
		<div className="hover">
		<div className="poulet row">

		<div className="col-md-3 photo">
			<img src="http://www.epicurien.be/img/recettes-cuisines/20130928_poulet_morilles-500.jpg"/>	
		</div>
			
			<div className="col-lg-6 description">
			<h3 className="sous-titre">Poulet aux morilles</h3><span>23euro</span>
				
				<p>Un grand classique le poulet de Bresse aux morilles et à la crème. 
					<br/>Si vous ne trouvez pas de volaille de Bresse, choisissez un bon poulet fermier, 
						<br/>élevé aux grains et qui a vécu en liberté dans les champs.</p>
			
						
			</div>
			
			<button className="glyphicon glyphicon-plus-sign"></button> 

			
		</div>
			</div>


				
				
		<div className="hover">
		<div className="pruneaux row">

		<div className="col-md-3 photo">
			<img src="https://i1.wp.com/cotesoleils.fr/wp-content/uploads/2015/06/tajine-agneau-et-pruneaux-algc3a9rie1.jpg"/>	
		</div>
			
			<div className="col-lg-6 description">
			<h3 className="sous-titre">Tagine aux pruneaux</h3><span>18euro</span>
				
				<p>Un des plus célèbres Tajines Marocains, servi avec une délicieuse viande de veau<br/> et des pruneaux issus de l agriculture biologique.</p>
			
					

			</div>
			
			<button className="glyphicon glyphicon-plus-sign"></button> 

			
		</div>
			</div>




			<div className="hover">
		<div className="salade row">

		<div className="col-md-3 photo">
			<img src="http://scrat.hellocoton.fr/img/guide/recette-ma-salade-tiede-de-chou-kale-et-lentilles-patates-douces-et-saumon-fume-18911644.jpg"/>	
		</div>
			
			<div className="col-lg-6 description">
			<h3 className="sous-titre">Salade de saison</h3><span>14euro</span>
				
				<p>Toujours à l\heure, la salade de saison vous régalera avec ses légumes</p>
			
				

			</div>
			
			<button className="glyphicon glyphicon-plus-sign"></button> 

			
		</div>
			</div>


		



			</div>
	</div>

	)
	
	}

}



export default Carte;


