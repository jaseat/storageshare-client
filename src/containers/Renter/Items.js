import Items from '../../components/Renter/Items'
import {connect} from 'react-redux';

import { fetchItems } from '../../actions/items';


const mapStateToProps = state => {
  return {
    items: state.items.items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchItems: (id)=> dispatch(fetchItems(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);