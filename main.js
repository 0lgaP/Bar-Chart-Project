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
******************************************************
------------------------------------------------------
Fade: in, out, toggle
Fade in: when btn is clicked, tag with id box fades
after 3000 miliseconds, then the button's text changes
to: 'Its Gone'
Fade out: when btn is clicked, tag with id box fades
in after 3000 miliseconds, then the button's text changes
to: 'She Back!'
Toggle: when btn is clicked, tag with id box toggles between
fade in and fade out, once the button is pressed it's text
changes to: 'Toggle me more'
------------------------------------------------------
$('#btnFadeOut').click(function() {
      $('#box').fadeOut(3000, function() {
        $('#btnFadeOut').text('Its Gone')
      })
$('#btnFadeIn').click(function() {
      $('#box').fadeIn(3000, function() {
        $('#btnFadeIn').text('She Back!')
      });
    });
$('#btnFadeTog').click(function() {
      $('#box').fadeToggle(1000, function() {
        $('#btnFadeTog').text('Toggle me more!')
      });
    });
------------------------------------------------------
******************************************************
------------------------------------------------------
Slide up, down, toggle & stop
------------------------------------------------------
$('#btnSlideUp').click(function() {
      $('#box').slideUp(3000)
    });
$('#btnSlideDown').click(function() {
      $('#box').slideDown(3000)
    });
$('#btnSlideTog').click(function() {
      $('#box').slideToggle(1000)
    });
$('#btnStop').click(function() {
      $('#box').stop()
    });
------------------------------------------------------
******************************************************
------------------------------------------------------
Animation: move around on button with id 'moveAround'
animating a div with the id 'box2'
------------------------------------------------------
$('#moveAround').click(function() {
      var box = $('#box2');
      box.animate({
        left: 300
      });
      box.animate({
        top: 300
      });
      box.animate({
        left: 0,
        top: 300
      });
      box.animate({
        left: 0,
        top: 0
      });
    });
------------------------------------------------------
******************************************************
------------------------------------------------------
Animation: left, right
------------------------------------------------------
$('#moveLeft').click(function() {
      $('#box2').animate({
        left: 500,
        height: '300px',
        width: '300px',
        opacity: '0.5'
      });
    });
$('#moveRight').click(function() {
      $('#box2').animate({
        left: 0,
        height: '100px',
        width: '100px',
        opacity: '1'
      });
    });
------------------------------------------------------
******************************************************
------------------------------------------------------
Create a new DOM Element, add style, add text & append
to body
------------------------------------------------------
var DOMobject = document.createElement('div');
    DOMobject.id = "myDiv";
    DOMobject.style.width = "100px";
    DOMobject.style.height = "100px";
    DOMobject.style.background = "pink"
    DOMobject.innerText = "Le div"
    document.body.appendChild(DOMobject);
------------------------------------------------------
******************************************************
------------------------------------------------------
Create new DOM element, add text & append to parent
by id
------------------------------------------------------
var spanElement = document.createElement('span');
    spanElement.innerText = "This is a span"
    document.getElementById('myDiv').appendChild(spanElement)
------------------------------------------------------
******************************************************
------------------------------------------------------
Functionality of BArChartProject
------------------------------------------------------
******************************************************
------------------------------------------------------
1. Element with the id submit is called .on 'click
2. Console logs "Clicked" when button is pressed
3. Data variable is updated to id's .val()
------------------------------------------------------
var x = [];
    $('#submit').on('click', function(){
      console.log("Clicked")
      var data = $('#arrValues').val();
      if(isNaN(parseInt(data, 10))){
        alert("Please only use numerals")
      } else {
        var array = JSON.parse("["+data+"]");
        x.push(array);
        console.log(x)
      };
------------------------------------------------------
******************************************************
------------------------------------------------------
------------------------------------------------------
*/
