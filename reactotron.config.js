import Reactotron, {storybook} from 'reactotron-react-native';
import {reactotronRedux as reduxPlugin} from 'reactotron-redux';

const oldConsoleLog = console.log;

console.log = (...args) => {
  oldConsoleLog(...args);
  Reactotron.display({
    name: 'Console Log',
    value: args,
    preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : null,
  });
};

const oldConsoleError = console.error;

console.error = (...args) => {
  oldConsoleError(...args);
  Reactotron.error(...args);
};

Reactotron.configure({
  name: 'Monstyr Reactotron',
}) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(reduxPlugin())
  .use(storybook())
  .connect();
