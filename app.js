'use strict'

var allPortfolioItems = [];

function MakePortfolio(folderName){

  this.folderName = folderName

  allPortfolioItems.push(this);
}

new MakePortfolio(education);
