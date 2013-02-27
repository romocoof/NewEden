

$(document).ready(function() {
    $('#datatable').dataTable();
} );
var test=[[1,5,63,45,25,75,63,45],[5,5,63,25,74,63,34]];
var uniqTest=[[]];
for(var i=0;i<test.length;i++){
	uniqTest[i] = _.uniq(test[i]);
}
//console.log(uniqTest[0]);
//console.log(uniqTest[1]);
// [1, 5, 4, 2, 3]

var varTest =_.without([1, 2, 1, "test", "salut", 1, 4], "test", "salut");
//console.log(varTest);

  $(document).ready(function(){
    $('.carousel').carousel({
      interval: 2500
    });
  });

  $('#emailPopUp').popover("hide")


  //TYPEHEAD.HS

