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

/*const $all = $('input[name="all"]');
const $frameWorks = $('input[name="js-frameworks"]');
const $libs = $('input[name="js-libs"]');
const $express = $('input[name="express"]');
const $node = $('input[name="node"]');
const $buildTools = $('input[name="build-tools"]');
const $npm = $('input[name="npm"]');
*/
$('input[name="js-frameworks"]').on('click', function (){
  if($('input[name="js-frameworks"]').prop(":checked", true)){
    $('input[name="express"]').attr('disabled', 'disabled');
  } else if($('input[name="js-frameworks"]').prop(":checked", false)){
    $('input[name="express"]').attr('disabled', false);
  } else {
    $('input[name="express"]').attr('disabled', false);
  }
});

/*$($express).on('click', function (){
  if($express.prop(":checked", true)){
    $frameWorks.attr('disabled', 'disabled');
  } else if($express.prop(":checked", false)){
    $frameWorks.attr('disabled', false);
  }
});
*/
