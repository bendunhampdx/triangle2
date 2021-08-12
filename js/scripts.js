$(document).ready(function() {
  $("#triangle").submit(function(event) {
    event.preventDefault();
    const side1 = parseInt($('input#side1').val());
    const side2 = parseInt($('input#side2').val());
    const side3 = parseInt($('input#side3').val());
      
      if (side1 + side2 <= side3 || side3 + side1 <= side2 || side3 + side2 <= side1) {
      $("#result").show();
      $("#output").text("This is NOT a triangle!").show(); 
    } else if (side1 === side2 && side2 === side3) {
      $("#result").show();
      $("#output").text("This is an Equilateral triangle!").show();
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      $("#result").show();
      $("#output").text("This is an Isosceles triangle!").show();
    } else if (side1 !== side2 || side1 !== side3 || side2 !== side3) {
      $("#result").show();
      $("#output").text("This is an Scalene triangle!").show();
    } else {
      $("#result").show();
      $("#output").text("This is NOT a triangle!").show();
    }
  })
});


// (side1 + side2 <= side3 || side3 + side1 <= side2 || side3 + side2 <= side1) {
//   console.log("just checking")
//   $("#result").show();
//   $("#output").text("This is NOT a triangle!").show();