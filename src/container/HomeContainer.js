import Home from '../components/Home';
import { connect } from 'react-redux';
import { addNote, searchEvent } from '../services/actions/action';

const mapStateToProps = state => ({
  data:state.reducerData
});

const mapDispatchToProps = dispatch => ({
  addNotes: data => dispatch(addNote(data)),
  searchData: data => dispatch(searchEvent(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
