'use strict'

var allUserStories = [];
var currentPageID = '#begin';

function MakeUserStory(bargle){

  this.title = bargle.title;
  this.author = bargle.author;
  this.mvpStory = bargle.mvpStory;
  this.publishedOn = bargle.publishedOn;
  this.body = bargle.body
}

MakeUserStory.prototype.toHtml = function() {

  var argle = $('#articleTemplate').html();
  var bargle = Handlebars.compile(argle);
  return bargle(this);
}
userStories.forEach(function(argle){
  allUserStories.push(new MakeUserStory(argle));
})

allUserStories.forEach(function(a){
  // $('#articleTemplate').append(a.toHtml());
  $('#userStories').append(a.toHtml());
});

$('#beginLink').click(function(){
  $(currentPageID).hide();
  $('#begin').fadeIn();
  currentPageID = '#begin';
});

$('#trainingLink').click(function(){
  $(currentPageID).hide();
  $('#training').fadeIn();
  currentPageID = '#training';
});

$('#projectsLink').click(function(){
  $(currentPageID).hide();
  $('#projects').fadeIn();
  currentPageID = '#projects';
});

$('#userStoriesLink').click(function(){
  $(currentPageID).hide();
  $('#userStories').fadeIn();
  currentPageID = '#userStories';
});

$('#aboutLink').click(function(){
  $(currentPageID).hide();
  $('#about').fadeIn();
  currentPageID = '#about';
});

$('#currentLink').click(function(){
  $(currentPageID).hide();
  $('#current').fadeIn();
  currentPageID = '#current';
});

$('#dreamsLink').click(function(){
  $(currentPageID).hide();
  $('#dreams').fadeIn();
  currentPageID = '#dreams';
});
