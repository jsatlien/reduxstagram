//in App.js we're infusing Main.js with all of the action emitters and data that's already in the store. 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//grab all of the functions in actionCreator.js
import * as actionCreators from '../actions/actionCreator';
//grab main.js
import Main from './Main';

function mapStateToProps (state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;