import React from 'react';
import './footer.css';

class Footer extends React.Component {
  render(){
    return(
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 adresse">
              <h4>Adresse</h4>
              <ul>
                <li>Chez Gertrude</li>
                <li>55 Rue de Vincennes</li>
                <li>93100 Montreuil</li>
              </ul>
            </div>
            <div className="col-lg-6 liens">
              <ul className="text-right">
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Carte</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="row reseaux-sociaux">
          </div>

        </div>
      </footer>
    )
  }
}

export default Footer;
