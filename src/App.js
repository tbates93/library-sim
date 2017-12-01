import React, { Component } from 'react';
import router from "./router"
import './App.css';
import { connect } from "react-redux"
import { getUser } from "./ducks/reducer"
import { withRouter } from 'react-router-dom';


class App extends Component {
    

    componentDidMount() {
      this.props.getUser().then(response => {
        //console.log('faslkdfjaosifjhaosdifjasdo', res)
        console.log(response)
      })
    }


    render() {
      return (
        <div className="App">
          {router}
        </div>
      );
    }
  }

  function mapStateToProps(state) {
    return {
      user: state.user,
    }
  }
  export default withRouter(connect(mapStateToProps, { getUser })(App));
  