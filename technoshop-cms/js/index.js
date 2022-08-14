import { modalBtn, modal } from './elems.js';
import { modalController } from './modalController.js';

modalController({
  modal,
  btn: modalBtn,
  classOpen: 'd-block',
  classClose: 'btn-close',
});