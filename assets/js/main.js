let cursorInterval = 500;
let cursorVisibility = false;

let passion = "Web Developer";
let passionIndex = 0;
let passionInterval = 110;

$(() => {
	$('.cursor').css('visibility', 'hidden');
	setInterval(() => {
		if (cursorVisibility) {
			$('.cursor').css('visibility', 'hidden');
			cursorVisibility = false;
		} else {
			$('.cursor').css('visibility', 'visible');
			cursorVisibility = true;
		}
	}, cursorInterval);

	let fillPassion = setInterval(() => {
		$('#passion-text').text(passion.substring(0, passionIndex));
		passionIndex++;
		if (passionIndex > passion.length) {
			clearInterval(fillPassion);
			$("#passion-cursor").remove();
		}
	}, passionInterval);

	/* jquery smooth scroll */
	$('a[href*="#"]').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 500, 'swing');
	});
});