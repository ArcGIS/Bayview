/**
 * Esri © 2015
 **/
define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    'dojo/Evented',

    'dojo/_base/lang',
    'dojo/_base/connect',
    'dojo/parser',
    'dojo/query',
    'dojo/on',
    'dojo/dom-style',
    'dojo/dom-class',
    'dijit/registry',

    './BasemapToggle',
    'app/config/WidgetConfig',

    'dojo/text!./templates/Navigation.html'
  ],

  function(
    declare, WidgetBase, TemplatedMixin, WidgetsInTemplateMixin,
    Evented,
    lang, connect, parser, query, on, domStyle, domClass, registry,
    BasemapToggle,
    widgetConfig,
    template
  ) {

    return declare([WidgetBase, TemplatedMixin, WidgetsInTemplateMixin, Evented], {

      templateString: template,
      widgetsInTemplate: true,

      constructor: function() {

      },

      postCreate: function() {
        this.inherited(arguments);
        this.basemapToggle = new BasemapToggle({
          config: widgetConfig.basemapToggle
        }, this.basemapWidgetContainer);
        this.basemapToggle.startup();
      },

      startup: function() {
        console.log('Navigation started');
      }

    });
  });
