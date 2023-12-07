import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-behk3-должности', 'Unit | Model | i-i-s-behk3-должности', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-behk3-документ-заказа',
    'model:i-i-s-behk3-должности',
    'model:i-i-s-behk3-запись',
    'model:i-i-s-behk3-ингредиенты',
    'model:i-i-s-behk3-контрагенты',
    'model:i-i-s-behk3-питания',
    'model:i-i-s-behk3-состав-блюда',
    'model:i-i-s-behk3-сотрудники',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
