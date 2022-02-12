

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			hoverDelay: 150,
			hideDelay: 350
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);

// theme switch

// DOM Elements
const solarButton = document.getElementById('solar');
const lightButton = document.getElementById('light');
const darkButton = document.getElementById('dark');
const nightyButton = document.getElementById('nighty');
const body = document.body;



solarButton.onclick = () => {
	document.getElementById("theme").classList.remove("light","dark","dark-night"); 
	document.getElementById("theme").classList.add("solar");
	localStorage.setItem('theme', 'solar');

};


lightButton.onclick = () => {
	document.getElementById("theme").classList.remove("solar","dark","dark-night"); 
	document.getElementById("theme").classList.add("light");
	localStorage.setItem('theme', 'light');

};

darkButton.onclick = () => {
	document.getElementById("theme").classList.remove("solar","light","dark-night"); 
	document.getElementById("theme").classList.add("dark");
	localStorage.setItem('theme', 'dark');

};

nightyButton.onclick = () => {
	document.getElementById("theme").classList.remove( "solar","light","dark"); 
	document.getElementById("theme").classList.add("dark-night");
	localStorage.setItem('theme', 'dark-night');

};

const theme = localStorage.getItem('theme');
if (theme) {
	document.getElementById("theme").classList.remove("solar","light","dark","dark-night"); 
	body.classList.add(theme);
	
}
  