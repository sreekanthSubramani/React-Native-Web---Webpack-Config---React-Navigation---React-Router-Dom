import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
document.addEventListener('DOMContentLoaded', () => {
  AppRegistry.runApplication(appName, {
    rootTag: document.getElementById('root'),
  });
});


