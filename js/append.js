'use strict';

allUserStories.forEach(function(a){
  // $('#articleTemplate').append(a.toHtml());
  $('#userStories').append(a.toHtml());
});
