$(document).ready(function() {
  
});


 

/*
******************************************************
------------------------------------------------------
JQuery wrapper that must be present on all Jquery code
------------------------------------------------------
$(document).ready(function(){
code will only execute once full doc is loaded
});
------------------------------------------------------
******************************************************
------------------------------------------------------
Hide  # = id | . = class | none = tag | 
------------------------------------------------------
      p span = isolate | * = all | [] = attribute
      ------------------------------------------------
      : = all types of | nth-child(xn) = every nth
------------------------------------------------------
$('h1#heading1').hide()
$('.heading2').hide()
$('p span').css('color', 'red') 
$('ul#list li:first').css('color', 'red')
$('ul#list li:last').css('color', 'green')
$('ul#list li:even').css('background-color', 'orange')
$('ul#list li:odd').css('background-color', '#cccccc')
$('ul#list li:nth-child(3n)').css('list-style', 'none')
$(':button').hide() 
$(':text').hide();
$('[href]').css('color', 'red');
$('a[href="http://yahoo.com"]').css('color', 'green')
$('*').hide()
------------------------------------------------------
******************************************************
------------------------------------------------------
Click, mouse and other .on behaviors
------------------------------------------------------
$('#btn1').click(function(){
    alert('Button Clicked!')
});
$('#btn1').on('click', function(){
  // $('#para1').hide()
  $('#para1').toggle()
})
$('#btn2').on('click', function(){
  $('#para1').show()
})
$('#btn1').dblclick(function(){
  $('#para1').toggle();
})
$('#btn1').hover(function(){
  $('#para1').toggle();
});
$('#btn1').on('mousedown', function(){
  $('#para1').toggle();
});
$('#btn1').on('mouseup', function(){
  $('#para1').toggle();
});
$('#btn1').click(function(e){
    alert(e.currentTarget.id)
    alert(e.currentTarget.innerHTML)
    alert(e.currentTarget.outerHTML)
    alert(e.currentTarget.className)
});
------------------------------------------------------
******************************************************
------------------------------------------------------
Track & display coordinants of a moving mouse
------------------------------------------------------
$(document).on('mousemove', function(e) {
  $('#coords').html('Coords: Y '+e.clientY+' X: '+e.clientX);
});
------------------------------------------------------
******************************************************
------------------------------------------------------
Set up a change in background colour when input is selected
Log the email/name that is being typed
------------------------------------------------------
$('input').focus(function() {
  $(this).css('background', 'green');
});
$('input').blur(function() {
  $(this).css('background', '#f4f4f4');
});
$('input').keyup(function(e) {
  console.log(e.target.value);
});
------------------------------------------------------
******************************************************
------------------------------------------------------
Display via alert the selection chosen by the user
------------------------------------------------------
$('select#gender').change(function(e) {
  alert(e.target.value);
});
------------------------------------------------------
******************************************************
------------------------------------------------------
Log the input with the id name to console
------------------------------------------------------
$('#form').submit(function(e) {
  e.preventDefault();
  const name = $('input#name').val();
  console.log(name);
});
------------------------------------------------------
******************************************************
------------------------------------------------------
Adding, removing class
------------------------------------------------------
$('p.para2').addClass('myClass');
$('p.para2').removeClass('myClass');
$('#btn1').click(function() {
$('p.para2').toggleClass('myClass');
})
------------------------------------------------------
******************************************************
******************************************************
******************************************************
------------------------------------------------------
The following commands require google flag 
"--allow-file-access-from-files"
They will not work from an external js file
------------------------------------------------------
******************************************************
------------------------------------------------------
Populating div with text 
------------------------------------------------------
$('#myDiv').html('<h3>Hello Fhqwgads</h3>');
------------------------------------------------------
******************************************************
------------------------------------------------------
Append & Prepend to list
------------------------------------------------------
$('ul').append('<li>Last! Come On</li>');
$('ul').prepend('<li>First! Come On</li>');
------------------------------------------------------
******************************************************
------------------------------------------------------
Append to & Prepend to
------------------------------------------------------
$('.para1').appendTo('.para2');
$('.para1').prependTo('.para2');
------------------------------------------------------
******************************************************
------------------------------------------------------
Before and After a tag
------------------------------------------------------
$('ul').before('<h4> Before the UL</h4>');
$('ul').after('<h4> After the UL</h4>');
------------------------------------------------------
******************************************************
------------------------------------------------------
Empty - removes not only child (and other descendant) 
elements, but also any text within the set of matched 
elements
------------------------------------------------------
 $('ul').empty();
------------------------------------------------------
******************************************************
------------------------------------------------------
.detach() method is the same as .remove(), except that
.detach() keeps all jQuery data associated with the 
removed elements. This method is useful when removed 
elements are to be reinserted into the DOM at a later 
time.
------------------------------------------------------
 $('.para2').detach()
------------------------------------------------------
******************************************************
------------------------------------------------------
Add & Remove Atributes
------------------------------------------------------
$('a').attr('target', "_blank");
$('a').removeAttr('target')
------------------------------------------------------
******************************************************
------------------------------------------------------
wrap - Wrap an HTML structure around each element in 
the set of matched elements.

wrapAll - Wrap an HTML structure around all elements 
in the set of matched elements.
------------------------------------------------------
$('p').wrap('<h1>')
$('p').wrapAll('<h1>')
------------------------------------------------------
******************************************************
------------------------------------------------------
Append to id
------------------------------------------------------
$('#newItem').keyup(function(e){
      var code = e.which;
      if(code == 13){
        e.preventDefault();
        $('ul').append('<li>'+e.target.value+'</li>')
      }
------------------------------------------------------
******************************************************
------------------------------------------------------
Append an array to the page in list format
------------------------------------------------------
var myArr = ['Brad', 'Kelly', 'Nate', 'Jose'];
    $.each(myArr, function(i, val) {
      $('#users').append('<li>'+val+'</li>')
    });
------------------------------------------------------
/*