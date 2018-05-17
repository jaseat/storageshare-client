import Messages from '../../components/Renter/Messages'
import {connect} from 'react-redux';

import { fetchMessages } from '../../actions/messages';


const mapStateToProps = state => {
  return {
    messages: state.messages.messages,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMessages: (id)=> dispatch(fetchMessages(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);