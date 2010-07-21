// ==========================================================================
// Project:   Images - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Images */

// This page describes the main user interface for your application.  
Images.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'labelView imageView'.w(),
    
    labelView: SC.LabelView.design({
      layout: { top: 20, centerY: 0, width: 200, height: 18 },
      textAlign: SC.ALIGN_CENTER,
      tagName: "h1", 
      value: "Welcome to SproutCore!"
    }),

    imageView: SC.ImageView.design({
      layout: {centerX: 0, centerY: 0, width: 750, height: 575},
      contentBinding: 'Images.imageController',
      contentValueKey: 'path',

      mouseDown: function() {
        Images.toggleImage() ;
      }
    })
  })

});
