// This must be at the top, otherwise the
// jquery will execute before the page loads, loosing functionality

$(document).ready(function() {
  $('#form').submit(function(e) {
    e.preventDefault();
    const name = $('input#name').val();
    console.log(name);
  });
});


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
// $(document).on('mousemove', function(e) {
//   $('#coords').html('Coords: Y '+e.clientY+' X: '+e.clientX);
// }); --> this alows for the track& display of mouse
// coordinants while mouse is moving on the page



// How to set up a change in background colour when input is selected
// Then log the email/name that is being typed
// $('input').focus(function() {
//   $(this).css('background', 'green');
// });
// $('input').blur(function() {
//   $(this).css('background', '#f4f4f4');
// });
// $('input').keyup(function(e) {
//   console.log(e.target.value);
// });


// This code displays via alert the selection chosen by the user
// $('select#gender').change(function(e) {
//   alert(e.target.value);
// });
