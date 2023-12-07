import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-behk3-документ-заказа', 'Unit | Serializer | i-i-s-behk3-документ-заказа', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-behk3-документ-заказа',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-behk3-виды',
    'transform:i-i-s-behk3-питание',
    'transform:i-i-s-behk3-полы',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
