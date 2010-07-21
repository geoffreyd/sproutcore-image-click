// Extend Image object with some app logic

SC.mixin(Images, {

  toggleImage: function() {

    Images.imageController.toggleProperty('showingLarge') ;

  }

}) ;