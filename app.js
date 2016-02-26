$(document).ready(function(){
  for(var i = 0; i < studentArray.length; i++){
    $('.people').append("<div></div>");

    var $el = $('.people').children().last();
    var student = studentArray[i];

    $el.append('<h2>' + student.name + '</h2>');
    $el.append('<h3>' + student.cohort + '</h3>');
    $el.append('<h1>' + student.grade + '</h1>');
    $el.append('<h5>' + student.colorFav + '</h5>');
  }
});

function Student(name, cohort, grade, colorFav){
  this.name = name;
  this.cohort = cohort;
  this.grade = grade;
  this.colorFav = colorFav;
  studentArray.push(this);
}

var studentArray = [];

var mike = new Student("Mike", "Kappa", "A", "Green");
var aaron = new Student("Aaron", "Kappa", "C", "Red");
var carl = new Student("Carl", "Kappa", "B", "#431431");

console.log(studentArray);
