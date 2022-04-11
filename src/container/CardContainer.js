import Card from '../components/Card';
import { connect } from 'react-redux';
import { deleteNote, editNote } from '../services/actions/action';

const mapStateToProps = state => ({
  data:state.reducerData
});

const mapDispatchToProps = dispatch => ({
  deleteNote: data => dispatch(deleteNote(data)),
  editNotes: data => dispatch(editNote(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);