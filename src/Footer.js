import React, { Component } from 'react';
import Emoji from 'react-emoji-render';

class Footer extends Component {
  render(){
    return(
      <div>

        <footer>
         <div className="container">
           <div className="row">
             <div className="col-lg-8 col-md-10 mx-auto">

               <div className="SpaceDiv"></div>

               <p className="copyright text-muted">Copyright &copy; Richard KM 2018 <Emoji text=":+1:" /></p>

             </div>
           </div>
         </div>
       </footer>

      </div>
      );
    }
  }

  export default Footer;
