import HomeContainer from "./container/HomeContainer";
import {Provider} from 'react-redux';
import { createStore } from "redux";
import { rootReducer } from "./services/reducers";
import CardContainer from "./container/CardContainer";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <HomeContainer/>
      <CardContainer/>
    </Provider>
  );
}

export default App;
