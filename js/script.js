/******************************************
Treehouse Techdegree:
FSJS project 3 - Interactive Form
******************************************/

// Study guide for this project - https://teamtreehouse.com/projects/interactive-form


const $name = $('#name');
const $email = $('#mail');
const $cardDiv = $('#credit-card');
const $cardNumber = $('#cc-num');
const $zip = $('#zip');
const $cvv = $('#cvv');
const $expiration = $('#exp-month');
const $title = $('#title');
const $otherTitle = $('#other-title');
const $design = $('#design');
const $color = $('#color');
const $payment = $('#payment');
const $button = $('button');
const $colorDiv = $('#colors-js-puns');
const $activitiesInput = $('.activities input');
$name.focus();
$otherTitle.hide();
$colorDiv.hide();
$title.on('change', function() {
	if ($('#title option:selected').text() === 'Other') {
		$otherTitle.show();
	} else {
		$otherTitle.hide();
	}
});
//DESING SECTION
$design.on('change', function(e) {
	if ($(this)) {
		$colorDiv.show();
	} else {
		$colorDiv.hide();
	}
});
$design.on('change', function() {
	if ($('#design option:selected').val() === 'js puns') {
		$('#color option').removeAttr("selected");
		$('#color option').show();
		$('#color option').filter('[value="tomato"], [value="steelblue"], [value="dimgrey"]').hide();
		$('#color option[value="cornflowerblue"]').attr('selected', 'selected');
	} else if ($('#design option:selected').val() === 'heart js') {
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
const showDollarAmount = (inputChecked, dollar) => {
	const $toCheck = $("input[name=" + inputChecked + "]").prop('checked');
	if ($toCheck) {
		amount += dollar;
	} else if (!$toCheck) {
		amount -= dollar;
	}
	$('#total').text(amount);
}
const compressActivities = (checkInput, disableInput) => {
	const $toCheck = $('input[name=' + checkInput + ']').prop('checked');
	if ($toCheck) {
		$('input[name=' + disableInput + ']').attr('disabled', true);
	} else if (!$toCheck) {
		$('input[name=' + disableInput + ']').attr('disabled', false);
	}
}
$activitiesInput.on('change', function(e) {
	$totalAmount.show();
	if ($(e.target).prop("name") === "all") {
		showDollarAmount("all", 200);
	} else if ($(e.target).prop("name") === "js-frameworks") {
		compressActivities('js-frameworks', 'express');
		showDollarAmount('js-frameworks', 100);
	} else {
		if ($(e.target).prop("name") === "express") {
			compressActivities('express', 'js-frameworks');
			showDollarAmount('express', 100);
		} else if ($(e.target).prop("name") === "js-libs") {
			compressActivities('js-libs', 'node');
			showDollarAmount('js-libs', 100);
		} else if ($(e.target).prop("name") === "node") {
			compressActivities('node', 'js-libs');
			showDollarAmount('node', 100);
		} else if ($(e.target).prop("name") === "build-tools") {
			showDollarAmount('build-tools', 100);
		} else if ($(e.target).prop("name") === "npm") {
			showDollarAmount('npm', 100);
		}
	}
});
//PAYMENT SECTION
$('#payment option[value="credit card"]').attr('selected', true);
$('p').parent().hide();
$('#payment option[value="select_method"]').prop('disabled', true);
const $empty = $('<span>Enter A Credit Card Number</span>');
$empty.hide();
$cardNumber.on('focus', function(e) {
	if ($(this).val() === "") {
		$empty.insertBefore($cardNumber);
		$empty.show();
	}
});
$cardNumber.on('blur', function(e) {
	$empty.hide();
});
$cardNumber.on('input', function(e) {
	if (event.target.value.length <= 0) {
		$empty.show()
	} else {
		$empty.hide();
	}
});
$payment.on('change', function() {
	if ($('#payment option:selected').val() === 'credit card') {
		$cardDiv.insertAfter('#payment');
		$('p').parent().hide();
		$('#credit-card').show();
	} else if ($('#payment option:selected').val() === 'paypal') {
		$cardDiv.detach();
		$("p:eq(0)").parent().show();
		$('#credit-card').hide();
		$("p:eq(1)").parent().hide();
	} else if ($('#payment option:selected').val() === 'bitcoin') {
		$cardDiv.detach();
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
	if (show) {
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

const $checkboxError = $('<span id="error">Please select an activity</span>');
$button.on('click', function(e) {
	$('input:not(#other-title)').each(function(e) {
		const $error = $('<span id="error">Enter Input</span>');
		if ($(this).val() === "") {
			event.preventDefault();
			$cardError.css('top', '1030px');
			$zipError.css('top', '1030px');
			$cvvError.css('top', '1030px');
			$(this).css('border-color', 'red');
			$error.insertBefore($(this));
			$error.delay(1000).fadeOut(1000);
		} else if ($(this).val() !== "") {
			$(this).css('border-color', '#5e97b0');
		}
	})
	if ($('input:checked').length <= 0) {
		$checkboxError.show();
		$checkboxError.insertAfter('.activities');
		event.preventDefault();
		$cardError.css('top', '1030px');
		$zipError.css('top', '1030px');
		$cvvError.css('top', '1030px');
	} else {
		$checkboxError.hide();
	}
});
