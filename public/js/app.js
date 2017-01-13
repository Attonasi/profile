'use strict'

var currentPageID = '#begin';

function MakeUser(opts) {
  this.name= opts.name,
  this.profession= opts.profession,
  this.userUrl= opts.userUrl,
  this.lastUpdate= opts.lastUpdate,
  this.body= opts.body
}

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
// NOTE FROM BRAE: This needs a little bit of work. The date doesn't show up in the preview and appears as [object Object].

var allUsers = {};

allUsers.create = function() {

  var tempUser = new MakeUser({
    name: $('#yourName').val(),
    profession: $('#profession').val(),
    userUrl: $('#userUrl').val(),
    lastUpdate: $('#lastUpdate'),
    body: $('#aboutMe').val()
  });

  console.log(tempUser);

  $('.previewProfilePage a').attr('href', tempUser.userUrl);
  $('.previewProfilePage a').text(tempUser.name);
  $('#previewProfession').text(tempUser.profession);
  $('.previewProfilePage p').text(tempUser.body);
  $('.previewProfilePage h3').text(tempUser.lastUpdate);

  return tempUser;
};

$('#submitProfile').click(function() {
  console.log('sdflkjsdf')
  var monkey = allUsers.create();
  var tempUserStringified = JSON.stringify(monkey);
  localStorage.setItem(monkey.name, tempUserStringified);
});

$('#new-form').on('change', allUsers.create);

// NAVIGATION
// NOTE FROM BRAE: The navigation is good and everything is working well! I like how you added the mobile capabilities.

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
