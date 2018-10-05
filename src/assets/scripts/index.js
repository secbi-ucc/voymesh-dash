import printMe from './print.js';

import '../styles/index.scss';

import './masonry';
import './popover';
import './sidebar';
import './skycons';
import './googleMaps';
import './utils';


if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    printMe();
  });
}
