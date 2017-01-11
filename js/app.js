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
});

allUserStories.forEach(function(a){
  $('#userStories').append(a.toHtml());
});

//Create New User Profiles
var allUsers = [];

function MakeUser(){
  this.userName = $('#yourName').val();
  this.userProfession = $('#profession').val();
  this.userUrl = $('#userUrl').val();
  this.userDescription = $('#aboutMe').val();
  this.lastDateUpdated = $('#lastUpdate').val();

  return this;

}
$('#submitProfile').click(function(event){
  event.preventDefault();
  allUsers.push(new MakeUser());

});

$('#previewProfile').click(function(event){
  event.preventDefault();
  // var argle = $('profilePreviewForm').html();
  // var bargle = Handlebars.compile(argle);

  var tempUser = new MakeUser();
  console.log(tempUser);
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

$('#createProfileLink').on('click touch', function(){
  $(currentPageID).hide();
  $('#createProfile').fadeIn();
  currentPageID = '#createProfile';
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
