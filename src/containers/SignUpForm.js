import SignUpForm from '../components/SignUpForm';
import { connect } from 'react-redux';

import { login } from '../actions/user';


const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (id) => dispatch(login(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);