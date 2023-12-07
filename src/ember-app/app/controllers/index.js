import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.behk3.caption'),
          title: i18n.t('forms.application.sitemap.behk3.title'),
          children: [{
            link: 'i-i-s-behk3-питания-l',
            caption: i18n.t('forms.application.sitemap.behk3.i-i-s-behk3-питания-l.caption'),
            title: i18n.t('forms.application.sitemap.behk3.i-i-s-behk3-питания-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-behk3-документ-заказа-l',
            caption: i18n.t('forms.application.sitemap.behk3.i-i-s-behk3-документ-заказа-l.caption'),
            title: i18n.t('forms.application.sitemap.behk3.i-i-s-behk3-документ-заказа-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-behk3-контрагенты-l',
            caption: i18n.t('forms.application.sitemap.behk3.i-i-s-behk3-контрагенты-l.caption'),
            title: i18n.t('forms.application.sitemap.behk3.i-i-s-behk3-контрагенты-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-behk3-должности-l',
            caption: i18n.t('forms.application.sitemap.behk3.i-i-s-behk3-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.behk3.i-i-s-behk3-должности-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-behk3-ингредиенты-l',
            caption: i18n.t('forms.application.sitemap.behk3.i-i-s-behk3-ингредиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.behk3.i-i-s-behk3-ингредиенты-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-behk3-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.behk3.i-i-s-behk3-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.behk3.i-i-s-behk3-сотрудники-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }
      ]
    };
  }),
})