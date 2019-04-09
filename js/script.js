const $name = $('#name');
const $email = $('#mail');
const $cardNumber = $('#cc-num');
const $zip = $('#zip');
const $cvv = $('#cvv');
const $title = $('#title');
const $otherTitle = $('#other-title');
const $design = $('#design');
const $color = $('#color');
const $activities = $('.activities');
$name.focus();
$otherTitle.hide();

$title.on('change', function(){
  if( $('#title option:selected').text() === 'Other'){
    $otherTitle.show();
  } else {
    $otherTitle.hide();
  }
});


$design.on('change', function (){
  if( $('#design option:selected').val() === 'js puns'){
    $('#color option').removeAttr("selected");
    $('#color option').show();
    $('#color option').filter('[value="tomato"], [value="steelblue"], [value="dimgrey"]').hide();
    $('#color option[value="cornflowerblue"]').attr('selected', 'selected');


  } else if($('#design option:selected').val() === 'heart js'){
    $('#color option').removeAttr("selected");
    $('#color option').show();
    $('#color option').filter('[value="darkslategrey"], [value="gold"], [value="cornflowerblue"]').hide();
    $('#color option[value="tomato"]').attr('selected', 'selected');


  } else {
    $('#color option').removeAttr("selected");
    $('#color option[value="cornflowerblue"]').attr('selected', 'selected');
    $('#color option').show();
  }

});


$('input[name="js-frameworks"]').on('click', function (){
  if($('input[name="js-frameworks"]').prop(":checked", true)){
    $('input[name="express"]').attr('disabled', 'disabled');
  } else if($('input[name="js-frameworks"]').prop(":checked", false)){
    $('input[name="express"]').attr('disabled', false);
  }
});

$('input[name="express"]').on('click', function (){
  if($('input[name="express"]').prop(":checked", true)){
    $('input[name="js-frameworks"]').attr('disabled', 'disabled');
  } else if($('input[name="express"]').prop(":checked", false)){
    $('input[name="js-frameworks"]').attr('disabled', false);
  } 
});
