/**
 * Create a component with common options
 */
import createBasic from './create-basic';
import Loading from '../loading';

export default function(sfc) {
  sfc.components = Object.assign(sfc.components || {}, {
    Loading
  });
  return createBasic(sfc);
};
