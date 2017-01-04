'use strict'

var allPortfolioItems = [];
var folderName = 'stuff';

function MakePortfolio(folderName){

  this.folderName = folderName

  allPortfolioItems.push(this);
}

new MakePortfolio(folderName);

$('#articleLink').click(function(){
  $('#splash').hide();
  $('#article').fadeIn();
});
