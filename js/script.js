const $name = $('#name');
const $email = $('#mail');
const $cardNumber = $('#cc-num');
const $zip = $('#zip');
const $cvv = $('#cvv');
const $expiration = $('#exp-month');
const $title = $('#title');
const $otherTitle = $('#other-title');
const $design = $('#design');
const $color = $('#color');
const $activities = $('.activities');
const $payment = $('#payment');
const $button = $('button');
const $colorDiv = $('#colors-js-puns');
$colorDiv.hide();
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
$design.on('change', function(e){
  if($(this)){
    $colorDiv.show();
  } else {
    $colorDiv.hide();
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

//ACTIVITIES SECTION
let amount = 0;
let $totalAmount = $('<label>Total: $<span id="total"></span></label>');

$($totalAmount).insertAfter('.activities');

$totalAmount.hide();
$('.activities input').on('change', function(){
  $totalAmount.show();
});

$('.activities input[name="all"]').on('change', function(event){
  const checked = $(this).prop('checked');
    if(checked){
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
      $totalAmount.show();
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
      $totalAmount.show();
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
      $totalAmount.show();
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
      $totalAmount.show();
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
      $totalAmount.show();
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

          //Help 1: the span is not hiding when the input is not empty
$cardNumber.on('focus', function(e){
  const $empty = $('<span>Enter A Credit Number</span>')
  if($(this).val() !== ""){
    $empty.hide();
    } else {
      $empty.insertBefore($cardNumber);
    }
  });


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
const $nameError = $('<span id="nameError">Please Enter Only Letters!</span>');
$($nameError).insertAfter($name);
$nameError.hide();

const $emailError = $('<span id="emailError">Please Enter A Valid Email Address!</span>');
$($emailError).insertAfter($email);
$emailError.hide();

const $cardError = $('<span id="cardError">Enter 13 or 16 Digits</span>');
$($cardError).insertAfter($cardNumber);
$($cardError).css('color', 'red');
$cardError.hide();

const $zipError = $('<span id="zipError">5 Digits</span>');
$($zipError).insertAfter($zip);
$($zipError).css('color', 'red');
$zipError.hide();

const $cvvError = $('<span id="cvvError">3 Digits</span>');
  $($cvvError).css('color', 'red');
  $($cvvError).insertAfter($cvv);
  $cvvError.hide();

const validName = (name) => {
  return /^[a-z]+$/i.test(name);
}
const validEmail = (email) => {
  return /^[^@]+@[a-z]+\.[a-z]+$/i.test(email);
}

const validCardNum = (card) => {
  return /^\d{13}(?:\d{3})?$/.test(card);
}

const validZib = (zip) => {
  return /^\d{5}$/.test(zip);
}
const validCvv = (cvv) => {
  return /^\d{3}$/.test(cvv);
}


const tipAppear = (show, element) => {
  if(show){
    element.style.display = "inherit";
  } else {
    element.style.display = "none";
  }
}
const creatorOfListeners = (validator) => {
  return e => {
    const text = e.target.value;
    const valid = validator(text);
    const showTip = text !== "" && !valid;
    const tip = e.target.nextElementSibling;
    tipAppear(showTip, tip);
  };
}
$name.on('input', creatorOfListeners(validName));
$email.on('input', creatorOfListeners(validEmail));
$cardNumber.on('input', creatorOfListeners(validCardNum));
$zip.on('input', creatorOfListeners(validZib));
$cvv.on('input', creatorOfListeners(validCvv));

              //HELP 2
$button.on('click', function (){
  $('input:not(#other-title)').each(function(e){
    const $error = $('<span id="error">Enter Input</span>');
    if($(this).val() === ""){
      event.preventDefault();
      $(this).css('border-color', 'red');
      $error.insertBefore($(this));
      $error.delay(1000).fadeOut(1000);
    }
  });
  $('.activities input').each(function(index, value){
    if($(this).prop('checked') === false){
      event.preventDefault();
      console.log(value);
    } else if($(this).prop('checked') === true){
      console.log("box checked");
      return false;
    }
  });
});
