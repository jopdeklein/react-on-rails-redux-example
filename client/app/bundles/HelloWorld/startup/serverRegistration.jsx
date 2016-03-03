import ReactOnRails from 'react-on-rails';
import helloWorldStore from '../store/helloWorldStore.jsx';
import HelloWorldApp from './HelloWorldAppServer';

ReactOnRails.register({ HelloWorldApp });
ReactOnRails.registerStore({ helloWorldStore });
