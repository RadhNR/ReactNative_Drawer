// containers/ReduxFuncCounter.js

// help to create container component
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../state/actions';
import Cart from '../components/Cart';

function mapStateToProps(state) {
    return {
        items: state.items
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addRandomItem: function() {
            let id = Math.ceil(Math.random() * 10000);
            const item = {
                id: id,
                name: 'Prodcut' + id,
                price: Math.ceil(Math.random() * 100),
                qty: 1
            }
            const action = actions.addItem(item);
            dispatch(action);
        },
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect(mapStateToProps,  mapDispatchToProps) (Cart);
