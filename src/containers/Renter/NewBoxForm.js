import { connect } from 'react-redux'
import NewBoxForm from '../../components/Renter/NewBoxForm'

const mapStateToProps = (state) => {
  return {
    // userId: state.user.userId
  };
}

export default connect(mapStateToProps)(NewBoxForm);