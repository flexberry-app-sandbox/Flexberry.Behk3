import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISBehk3ДокументЗаказаLForm from './forms/i-i-s-behk3-документ-заказа-l';
import IISBehk3ДолжностиLForm from './forms/i-i-s-behk3-должности-l';
import IISBehk3ИнгредиентыLForm from './forms/i-i-s-behk3-ингредиенты-l';
import IISBehk3КонтрагентыLForm from './forms/i-i-s-behk3-контрагенты-l';
import IISBehk3ПитанияLForm from './forms/i-i-s-behk3-питания-l';
import IISBehk3СотрудникиLForm from './forms/i-i-s-behk3-сотрудники-l';
import IISBehk3ДокументЗаказаEForm from './forms/i-i-s-behk3-документ-заказа-e';
import IISBehk3ДолжностиEForm from './forms/i-i-s-behk3-должности-e';
import IISBehk3ИнгредиентыEForm from './forms/i-i-s-behk3-ингредиенты-e';
import IISBehk3КонтрагентыEForm from './forms/i-i-s-behk3-контрагенты-e';
import IISBehk3ПитанияEForm from './forms/i-i-s-behk3-питания-e';
import IISBehk3СотрудникиEForm from './forms/i-i-s-behk3-сотрудники-e';
import IISBehk3ДокументЗаказаModel from './models/i-i-s-behk3-документ-заказа';
import IISBehk3ДолжностиModel from './models/i-i-s-behk3-должности';
import IISBehk3ЗаписьModel from './models/i-i-s-behk3-запись';
import IISBehk3ИнгредиентыModel from './models/i-i-s-behk3-ингредиенты';
import IISBehk3КонтрагентыModel from './models/i-i-s-behk3-контрагенты';
import IISBehk3ПитанияModel from './models/i-i-s-behk3-питания';
import IISBehk3СоставБлюдаModel from './models/i-i-s-behk3-состав-блюда';
import IISBehk3СотрудникиModel from './models/i-i-s-behk3-сотрудники';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-behk3-документ-заказа': IISBehk3ДокументЗаказаModel,
    'i-i-s-behk3-должности': IISBehk3ДолжностиModel,
    'i-i-s-behk3-запись': IISBehk3ЗаписьModel,
    'i-i-s-behk3-ингредиенты': IISBehk3ИнгредиентыModel,
    'i-i-s-behk3-контрагенты': IISBehk3КонтрагентыModel,
    'i-i-s-behk3-питания': IISBehk3ПитанияModel,
    'i-i-s-behk3-состав-блюда': IISBehk3СоставБлюдаModel,
    'i-i-s-behk3-сотрудники': IISBehk3СотрудникиModel
  },

  'application-name': 'Behk3',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Behk3',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Behk3',
          title: 'Behk3'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        behk3: {
          caption: 'Behk3',
          title: 'Behk3',
          'i-i-s-behk3-питания-l': {
            caption: 'Питания',
            title: ''
          },
          'i-i-s-behk3-документ-заказа-l': {
            caption: 'Документ заказа',
            title: ''
          },
          'i-i-s-behk3-контрагенты-l': {
            caption: 'Контрагенты',
            title: ''
          },
          'i-i-s-behk3-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-behk3-ингредиенты-l': {
            caption: 'Ингредиенты',
            title: ''
          },
          'i-i-s-behk3-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-behk3-документ-заказа-l': IISBehk3ДокументЗаказаLForm,
    'i-i-s-behk3-должности-l': IISBehk3ДолжностиLForm,
    'i-i-s-behk3-ингредиенты-l': IISBehk3ИнгредиентыLForm,
    'i-i-s-behk3-контрагенты-l': IISBehk3КонтрагентыLForm,
    'i-i-s-behk3-питания-l': IISBehk3ПитанияLForm,
    'i-i-s-behk3-сотрудники-l': IISBehk3СотрудникиLForm,
    'i-i-s-behk3-документ-заказа-e': IISBehk3ДокументЗаказаEForm,
    'i-i-s-behk3-должности-e': IISBehk3ДолжностиEForm,
    'i-i-s-behk3-ингредиенты-e': IISBehk3ИнгредиентыEForm,
    'i-i-s-behk3-контрагенты-e': IISBehk3КонтрагентыEForm,
    'i-i-s-behk3-питания-e': IISBehk3ПитанияEForm,
    'i-i-s-behk3-сотрудники-e': IISBehk3СотрудникиEForm
  },

});

export default translations;
