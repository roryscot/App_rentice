// import React from 'react';

import logo from '../../src/logo.svg';

import {Contact, Footer, Header, Notes} from './';


// const HomePage = () => (
    // <div className="App">
    //     <header className="App-header">
    //         <img src={logo} className="App-logo" alt="logo" />
    //         <h1 className="App-title">Welcome to App_rentice</h1>
    //     </header>
    //     <Header />
    //     <p className="App-intro">
    //         sign in
    //     </p>
    //     <Notes />
    // </div>
// );

// export default HomePage;

import React, { Component } from 'react';

export default class Home extends Component {

  constructor(props) {
    super(props);
    // this.subscribetoggle = this.subscribetoggle.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);

    this.state = {
      subscribeModal: false,
      email: '',
      emailValid: false
    };
  }

//   subscribetoggle() {
//     if(this.state.emailValid) {
//       this.setState({
//         subscribeModal: !this.state.subscribeModal
//       });
//     }
//   }

  onChangeEmail(e){
    this.setState({emailValid : e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)});
    this.setState({[e.target.name]: e.target.value});
   }

  render() {
    return (
      <div className="container-fluid home">
        <div className="text-center row4 text-center">
        <Notes />
          {/* <div><h1>Know your audience</h1></div> */}
          {/* <div className="row7">
            <p className="text-bold fade-in">Do you want to know where your target audience is?</p>
            <p className="text-bold fade-in">Do you want to know how they feel?</p>
            <p className="text-bold fade-in">What is holding you back?</p>
          </div> */}
          <div className="input-group mb-3 home-email">
            <input type="email" className="form-control" onChange={this.onChangeEmail} name="email" placeholder="Enter your email..." aria-label="Username" aria-describedby="basic-addon1" required/>
            {/* <div className="input-group-append">
              <button className="btn btn-outline-secondary" onClick={this.subscribetoggle} type="button">Begin</button>
            </div> */}
          </div>
        </div>
        <div className="row">
          <div id="gradient" className="text-center">
            <h4>We turn the expressiveness of public dialogue into actionable insights.</h4>
            <div className="row">
              <div className="col" style={{border: "2px solid"}}>
                <h4>Politics:</h4>
                <p>Reduce the need for expensive polling</p>
                <p>Focus on the geography that matters</p>
                <p>Is your messaging working?</p>
              </div>
              <div className="col" style={{border: "2px solid"}}>
                <h4>Businesses:</h4>
                <p>How are your products being discussed?</p>
                <p>Where is your next market?</p>
                <p>What will better satisfy your customers?</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-center justify-content-center">
          <p>Chart your progress</p>
          <div className="row row-no-margin justify-content-center">
            <div className="card">
              <img src={require('../static/images/avg.jpg')} alt="radar"/>
            </div>
            <div className="card">
              <img src={require('../static/images/stats.jpeg')} alt="bar"/>
            </div>
            <div className="card">
              <img src={require('../static/images/graphs.png')} alt="calendar"/>
            </div>
          </div>
        </div>
        {/* <Subscribe modal={this.state.subscribeModal} toggle={this.subscribetoggle} email={this.state.email}/> */}
      </div>
    );
  }
}
