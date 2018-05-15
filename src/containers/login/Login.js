import Layout from '../../components/login/Layout';
import { connect } from 'react-redux';

import { login } from '../../actions/user';


const mapStateToProps = state => {
  return {
    currentUser: state.user.id,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (credentials) => dispatch(login(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);