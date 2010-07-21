// ==========================================================================
// Project:   Images.imageController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Images */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Images.imageController = SC.ObjectController.create(
/** @scope Images.imageController.prototype */ {

  // Replace this with Image Records. Or better yet with:
  // contentBinding: 'Images.imagesController.selection' ;
  // with imagesController being an arrayController with a list of image records
  content: SC.Object.create({
    smallPath: sc_static('images/Leaf-dull.jpg'),
    largePath: sc_static('images/Leaf-dull-small.jpg')
  }),

  showingLarge: NO,

  path: function(){
    var large = this.get('showingLarge'),
        content = this.get('content'),
        ret;

    if (large) {
      ret = content.get('largePath') ;
    } else {
      ret = content.get('smallPath') ;
    }
    return ret ;
  }.property('content', 'showingLarge').cacheable()

}) ;
