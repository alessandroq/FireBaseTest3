<!DOCTYPE html>
<html lang="en" ng-app="snappWww" class="testing">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="{{pageDescription}}">
		<meta name="keywords" content="{{tags}}">

		<meta property="fb:app_id" content="833118346807963">
		<meta property="og:type" content="website">
		<meta property="og:title" content="snapp">
		<meta property="og:image" content="https://snapp.click/img/og/headpromo.png">
		<meta property="og:description" content="snapp is the easiest way to create your prototypes and build your apps. Design your ideas, add behavior and forget the code!">
		<meta property="og:url" content="https://snapp.click/">

		<meta name="twitter:card" content="summary_large_image">
		<meta name="twitter:site" content="@snappclick">
		<meta name="twitter:title" content="snapp">
		<meta name="twitter:description" content="snapp is the easiest way to create your prototypes and build your apps. Design your ideas, add behavior and forget the code!">
		<meta name="twitter:image" content="https://snapp.click/img/og/headpromo.png">

		<title ng-bind="'snapp' + title">snapp - create apps visually</title>

		<base href="/">

		<link rel="icon" type="image/png" href="favicon.png">
		<link rel="stylesheet" href="./css/snapp.min.css"/>
		
		<!-- Google Analytics Content Experiment code -->
		<!--<script>function utmx_section(){}function utmx(){}(function(){var
				k='98358071-3',d=document,l=d.location,c=d.cookie;
			if(l.search.indexOf('utm_expid='+k)>0)return;
			function f(n){if(c){var i=c.indexOf(n+'=');if(i>-1){var j=c.
			indexOf(';',i);return escape(c.substring(i+n.length+1,j<0?c.
					length:j))}}}var x=f('__utmx'),xx=f('__utmxx'),h=l.hash;d.write(
					'<sc'+'ript src="'+'http'+(l.protocol=='https:'?'s://ssl':
							'://www')+'.google-analytics.com/ga_exp.js?'+'utmxkey='+k+
					'&utmx='+(x?x:'')+'&utmxx='+(xx?xx:'')+'&utmxtime='+new Date().
					valueOf()+(h?'&utmxhash='+escape(h.substr(1)):'')+
					'" type="text/javascript" charset="utf-8"><\/sc'+'ript>')})();
		</script>-->
		<!--<script>utmx('url','A/B');</script>-->
		<!-- End of Google Analytics Content Experiment code -->
		<!--<script>
			(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
					function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
				e=o.createElement(i);r=o.getElementsByTagName(i)[0];
				e.src='//www.google-analytics.com/analytics.js';
				r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
			ga('create', 'UA-59964597-2' ,'auto');ga('send','pageview');
		</script>-->
	</head>
	<body>

	<navbar-menu ng-show="showHeader"></navbar-menu>

	<section role="main" class="container-fluid" id="main-section" ng-view autoscroll></section>

	<footer class="footer" ng-show="showFooter && hideSnapClinical()">
		<div class="container">

			<ul class="col-lg-12">
				<li><a href="./about">about us</a></li><!--
             	--><li><a href="./presskit">press kit</a></li><!--
				--><li><a href="./jobs">jobs</a></li><!--
				--><li><a href="https://play.google.com/store/apps/details?id=click.snapp.companion&ref=SnappHome">companion app</a></li><!--
				--><li><a href="./support">support</a></li><!--
				--><li><a href="./pricing">pricing</a></li><!--
				--><li><a href="./terms">terms of use</a></li><!--
				--><li><a href="./privacy">privacy policy</a></li>
			</ul>

			<div class="col-md-12 col-xs-12">
				<p class="text-muted small" id="footer-copyright">© Foneclay Inc. 2016 all rights reserved.</p>
			</div>

		</div>
	</footer>

	<script src="js/main.min.js"></script>

	<!-- docs blockly -->
	<!--<script src="/js/blockly/blockly_compressed.js"></script>-->
	<!--<script src="/js/blockly/blocks_compressed.js"></script>-->
	<!--<script src="/js/blockly/msg/js/en.js"></script>-->
	<!--<script src="/js/blockly/concat.min.js"></script>-->

	<!-- ADDING GLOBAL VARS TO READ BLOCKLY FILES -->
	<script type="text/javascript" >
      	ConnioCore = function(){};
		var docsURL = "";
		var Globals = {};
		var Creator = {
			currentProject: {
				designModel: {
					get: function(data) { return {models: []}; }
				},
			},
		};
	</script>

	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js"></script>
	<script type="text/javascript" src="../builder/blockly/blockly_compressed.js"></script>
	<script type="text/javascript" src="../builder/blockly/blocks_compressed.js"></script>
	<script type="text/javascript" src="../builder/blockly/msg/js/en.js"></script>

	</body>
</html>