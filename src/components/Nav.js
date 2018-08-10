import React from 'react';
// import Auth from './Auth';
// import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Nav(props) {
  // console.log(props)
  return (
    <div>
      <Link to="/dashboard"><button>Home</button></Link>
      <Link to="/new"><button>New Post</button></Link>
      <Link to="/"><button>Logout</button></Link>
      {/* <button onClick={this.login}>Login</button> */}
      <h1>{props.username}</h1>
      <h1>{props.profile}</h1>
    </div>
  )
}

let mapStateToProps = state => {
  return {
    username: state.username,
    profile: state.profile
  }
}
export default connect(mapStateToProps)(Nav);