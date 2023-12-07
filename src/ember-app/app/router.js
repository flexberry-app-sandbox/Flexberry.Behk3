import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-behk3-документ-заказа-l');
  this.route('i-i-s-behk3-документ-заказа-e',
  { path: 'i-i-s-behk3-документ-заказа-e/:id' });
  this.route('i-i-s-behk3-документ-заказа-e.new',
  { path: 'i-i-s-behk3-документ-заказа-e/new' });
  this.route('i-i-s-behk3-должности-l');
  this.route('i-i-s-behk3-должности-e',
  { path: 'i-i-s-behk3-должности-e/:id' });
  this.route('i-i-s-behk3-должности-e.new',
  { path: 'i-i-s-behk3-должности-e/new' });
  this.route('i-i-s-behk3-ингредиенты-l');
  this.route('i-i-s-behk3-ингредиенты-e',
  { path: 'i-i-s-behk3-ингредиенты-e/:id' });
  this.route('i-i-s-behk3-ингредиенты-e.new',
  { path: 'i-i-s-behk3-ингредиенты-e/new' });
  this.route('i-i-s-behk3-контрагенты-l');
  this.route('i-i-s-behk3-контрагенты-e',
  { path: 'i-i-s-behk3-контрагенты-e/:id' });
  this.route('i-i-s-behk3-контрагенты-e.new',
  { path: 'i-i-s-behk3-контрагенты-e/new' });
  this.route('i-i-s-behk3-питания-l');
  this.route('i-i-s-behk3-питания-e',
  { path: 'i-i-s-behk3-питания-e/:id' });
  this.route('i-i-s-behk3-питания-e.new',
  { path: 'i-i-s-behk3-питания-e/new' });
  this.route('i-i-s-behk3-сотрудники-l');
  this.route('i-i-s-behk3-сотрудники-e',
  { path: 'i-i-s-behk3-сотрудники-e/:id' });
  this.route('i-i-s-behk3-сотрудники-e.new',
  { path: 'i-i-s-behk3-сотрудники-e/new' });
});

export default Router;
