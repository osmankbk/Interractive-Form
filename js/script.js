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

let amount = 0;
let $totalAmount = $('<label>Total: $<span id="total"></span></label>');

$('.activities').append($totalAmount);

/*const activitiesDollar = (nameCheck, mula) =>{
  const $check = $('input[name=' + nameCheck + ']' ).prop('checked', true);
    if($check){
      amount += mula;
    } else if(!$check){
      amount -= mula;
    }
    $('#total').text(amount);
}*/
$totalAmount.hide();
$('.activities input[name="all"]').on('change', function(event){
  const checked = $(this).prop('checked');
    if(checked){
      $totalAmount.show();
      amount += 200;
      $('#total').text(amount);
    } else {
      amount -= 200;
      $('#total').text(amount);
    }
});


$('.activities input[name="js-frameworks"]').on('change', function(event){
  const checked = $(this).prop('checked');
    if(checked){
      $('.activities input[name="express"]').attr('disabled', true);
      amount += 100;
      $('#total').text(amount);
    } else {
      $('.activities input[name="express"]').attr('disabled', false);
      amount -= 100;
      $('#total').text(amount);
    }
});

$('.activities input[name="express"]').on('change', function(event){
  const checked = $(this).prop('checked');
    if(checked){
      $('.activities input[name="js-frameworks"]').attr('disabled', true);
      amount += 100;
      $('#total').text(amount);
    } else {
      $('.activities input[name="js-frameworks"]').attr('disabled', false);
      amount -= 100;
      $('#total').text(amount);
    }
});

$('.activities input[name="js-libs"]').on('change', function(event){
  const checked = $(this).prop('checked');
    if(checked){
      $('.activities input[name="node"]').attr('disabled', true);
      amount += 100;
      $('#total').text(amount);
    } else {
      $('.activities input[name="node"]').attr('disabled', false);
      amount -=  100;
      $('#total').text(amount);
    }

});

$('.activities input[name="node"]').on('change', function(event){
  const checked = $(this).prop('checked');
    if(checked){
      $('.activities input[name="js-libs"]').attr('disabled', true);
      amount += 100;
      $('#total').text(amount);
    } else {
      $('.activities input[name="js-libs"]').attr('disabled', false);
      amount -= 100;
      $('#total').text(amount);
    }

});

$('.activities input[name="build-tools"]').on('change', function(event){
  const checked = $(this).prop('checked');
    if(checked){
      amount += 100;
      $('#total').text(amount);
    } else {
      amount -= 100;
      $('#total').text(amount);
    }
});

$('.activities input[name="npm"]').on('change', function(event){
  const checked = $(this).prop('checked');
    if(checked){
      amount +=100;
      $('#total').text(amount);
    } else {
      amount -= 100;
      $('#total').text(amount);
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

//VALIDATION SECTION

const $nameError = $('<span>Please Enter A Valid Name!</span>');
  $name.append($nameError);

const validName = (name) => {
  return /^[a-z]+$/i.test(name);
}
const validEmail = (email) => {
  return /^[^@]+@[a-z]+\.[a-z]+$/i.test(email);
}

const validCardNum = (card) =>{
  return /^\d{13}$/.test(card);
}

function tipAppear(show, element){
  if(show){
    element.style.display = "inherit";
  } else {
    element.style.display = "none";
  }
}
const creatorOfListeners = (validator) =>{
  return e => {
    const text = e.target.value;
    const valid = validator(text);
    const showTip = text !== "" && !valid;
    const tip = $nameError;
    tipAppear(showTip, tip);
  };
}
$name.on('input', creatorOfListeners(validName));
$email.on('input', creatorOfListeners(validEmail));
