import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ВидыEnum from '../enums/i-i-s-behk3-виды';

export default FlexberryEnum.extend({
  enum: ВидыEnum,
  sourceType: 'IIS.Behk3.Виды'
});
