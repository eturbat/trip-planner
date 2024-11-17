import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LandingPage from './Components/LandingPage';
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import cartReducer from './Components/reducers/cartReducer';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore} from 'redux';

const store = createStore(cartReducer);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

