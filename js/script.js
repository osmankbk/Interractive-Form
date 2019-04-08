const $name = $('#name');
const $email = $('#mail');
const $cardNumber = $('#cc-num');
const $zip = $('#zip');
const $cvv = $('#cvv');
const $title = $('#title');
const $otherTitle = $('#other-title');
const $design = $('#design');
const $color = $('#color');
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
    $('#color option[value="cornflowerblue"]').attr('selected', 'selected');
    $('#color option').show();
    $('#color option').filter('[value="tomato"], [value="steelblue"], [value="dimgrey"]').hide();

  } else if($('#design option:selected').val() === 'heart js'){
    $('#color option[value="tomato"]').attr('selected', 'selected');
    $('#color option').show();
    $('#color option').filter('[value="darkslategrey"], [value="gold"], [value="cornflowerblue"]').hide();

  } else {
    $('#color option[value="cornflowerblue"]').attr('selected', 'selected');
    $('#color option').show();
  }

});
