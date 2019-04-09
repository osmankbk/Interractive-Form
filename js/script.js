const $name = $('#name');
const $email = $('#mail');
const $cardNumber = $('.col-6 col');
const $zip = $('.col-3 col');
const $cvv = $('.col-3 col');
const $expiration = $('#exp-month');
const $title = $('#title');
const $otherTitle = $('#other-title');
const $design = $('#design');
const $color = $('#color');
const $activities = $('.activities');
const $payment = $('#payment');
$name.focus();
$otherTitle.hide();

$title.on('change', function(){
  if( $('#title option:selected').text() === 'Other'){
    $otherTitle.show();
  } else {
    $otherTitle.hide();
  }
});

//DESING SECTION
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

//ACTIVITIES SECTION
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

//PAYMENT SECTION
$('#payment option[value="credit card"]').attr('selected', true);
$('p').parent().hide();
$('#payment option[value="select_method"]').prop('disabled', true);

$payment.on('change', function(){
  if($('#payment option:selected').val() === 'credit card'){
    $('p').parent().hide();
    $('#credit-card').show();
  } else if ($('#payment option:selected').val() === 'paypal'){
      $("p:eq(0)").parent().show();
      $('#credit-card').hide();
      $("p:eq(1)").parent().hide();
  } else if($('#payment option:selected').val() === 'bitcoin'){
    $("p:eq(1)").parent().show();
    $('#credit-card').hide();
    $("p:eq(0)").parent().hide();
  }
});
