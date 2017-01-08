'use strict'

var currentPageID = '#begin';

//USER STORY PAGE FILL
var allUserStories = [];
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


// NAVIGATION

$('#beginLink').on('click touch', function(){
  $(currentPageID).hide();
  $('#begin').fadeIn();
  currentPageID = '#begin';
});

$('#trainingLink').on('click touch', function(){
  $(currentPageID).hide();
  $('#training').fadeIn();
  currentPageID = '#training';
});

$('#projectsLink').on('click touch', function(){
  $(currentPageID).hide();
  $('#projects').fadeIn();
  currentPageID = '#projects';
});

$('#userStoriesLink').on('click touch', function(){
  $(currentPageID).hide();
  $('#userStories').fadeIn();
  currentPageID = '#userStories';
});

$('#aboutLink').on('click touch', function(){
  $(currentPageID).hide();
  $('#about').fadeIn();
  currentPageID = '#about';
});

$('#currentLink').on('click touch', function(){
  $(currentPageID).hide();
  $('#current').fadeIn();
  currentPageID = '#current';
});

$('#dreamsLink').on('click touch', function(){
  $(currentPageID).hide();
  $('#dreams').fadeIn();
  currentPageID = '#dreams';
});
