import App from './components/App';
import { connect } from 'react-redux';

import { getUser } from './actions/user';


const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: ()=> dispatch(getUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);