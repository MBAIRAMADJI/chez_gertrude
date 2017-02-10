import React from 'react';
import './contact.css';

class Contact extends React.Component {
  // componentDidMount(){
  //   //partea de js, json
  // }
  render(){
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            <h2><span className="glyphicon glyphicon-map-marker"> Comment nous trouver</span></h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
          <iframe width="100%" height="350" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.194860276762!2d2.433772950820848!3d48.854494508834044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d5f8a4cb333%3A0x573ff85ea4c31510!2sSimplon.co!5e0!3m2!1sen!2sfr!4v1486637720490"></iframe>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
