import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Behk3',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Behk3',
          title: 'Behk3'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
