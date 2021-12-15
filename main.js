// eslint-disable-next-line require-jsdoc
// function multiply(a, b) {
//   return a * b;
// };
// console.log(multiply(4, 6));
//  Jquery thangs
// $('h1#heading1').hide() --> hides anything #=ID, .=class, none=tag
// $('.heading2').hide()
// $('p span').css('color', 'red') --> this uses two tags
// to isolate only the spans within a peragraph tag
// $('ul#list li:first').css('color', 'red')
// $('ul#list li:last').css('color', 'green')
// $('ul#list li:even').css('background-color', 'orange')
// $('ul#list li:odd').css('background-color', '#cccccc')
// $('ul#list li:nth-child(3n)').css('list-style', 'none') --> nth!
// $(':button').hide() --> :=all types of button(or whatever type)
// $(':text').hide();
// $('[href]').css('color', 'red'); --> change all href attributes
// $('a[href="http://yahoo.com"]').css('color', 'green')
// $('*').hide() --> *=all


// Events
// $(document).ready(function(){ --> document ready needs
// to be present,and wrap the js or jquery.
// Otherwise the page will try to execute the
// code before the page is loaded leading to script not executing
//   $('#btn1').click(function(){
//       alert('Button Clicked!')
//   });
// });
$(document).ready(function() {
  $(document).on('mousemove', function(e) {
    $('#coords').html('Coords: Y '+e.clientY+' X: '+e.clientX);
  });
});

// $('#btn1').click(function(){
//     alert('Button Clicked!')
// });
// $('#btn1').on('click', function(){
//   // $('#para1').hide()
//   $('#para1').toggle()
// })
// $('#btn2').on('click', function(){
//   $('#para1').show()
// })
// $('#btn1').dblclick(function(){
//   $('#para1').toggle();
// })
// $('#btn1').hover(function(){
//   $('#para1').toggle();
// });
// . hover is a combo of 'mouseenter' & 'mouseleave'
// u can even use 'mousemove'
// $('#btn1').on('mousedown', function(){
//   $('#para1').toggle();
// });
// $('#btn1').on('mouseup', function(){
//   $('#para1').toggle();
// });
// $('#btn1').click(function(e){
//     alert(e.currentTarget.id)
//     alert(e.currentTarget.innerHTML)
//     alert(e.currentTarget.outerHTML)
//     alert(e.currentTarget.className)
// });
