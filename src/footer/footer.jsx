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

            

            <div className="col-lg-6 liens text-right">

              <a href="https://www.facebook.com/"><img src="http://simpleicon.com/wp-content/uploads/facebook-2.png" alt="Facebook"/></a>

          

              <a href="https://twitter.com/"><img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-512.png" alt="Twitter"/></a>

                   

              <a href="https://www.instagram.com/"><img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/78-instagram-512.png" alt="Instagram"/></a>

            </div>

          </div>

         

        </div>

      </footer>
    )
  }
}

export default Footer;
