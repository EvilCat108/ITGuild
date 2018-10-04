import React, { Component } from 'react';
import logo2 from "../../pictures/About/Colored.png";
class Documents extends Component {
  render() {
    return (
      <div className="container-fluid">

        <h1>About As</h1>
          <img src={logo2} alt="IT GUILD" height="500" width="700" />
        <p>  Lorem ipsum phasellus massa laoreet tellus duis dolor nisi vitae, mattis ornare volutpat non donec libero dictum tortor commodo, dictum nunc cras himenaeos eu mattis taciti diam aliquam habitasse gravida erat sociosqu pulvinar habitasse.</p>


      </div>
    );
  }
}

export default Documents;
