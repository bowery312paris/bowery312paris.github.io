app.controller("controller_blog",function($scope, $routeParams, $http, $timeout){

// Mobile menu
$scope.classmenu="invisible_menu";
$scope.classbar1="hamburger_top_bar";
$scope.classbar2="hamburger_middle1_bar";
$scope.classbar3="hamburger_middle2_bar";
$scope.classbar4="hamburger_bottom_bar";
$scope.classbar5="hamburger_bottom2_bar";	

$scope.hidemenu = function(){
	if($scope.classmenu ==="invisible_menu")
		$scope.classmenu = "shown_menu"
	if($scope.classmenu ==="hidden_menu")
		$scope.classmenu = "shown_menu"
	else if($scope.classmenu === "shown_menu")
		$scope.classmenu = "hidden_menu"
};

$scope.crosshamburger = function(){
	if($scope.classbar1 ==="hamburger_top_bar")
		$scope.classbar1 = "hamburger_top_bar_clicked"
	else if($scope.classbar1 === "hamburger_top_bar_clicked")
		$scope.classbar1= "hamburger_top_bar"
	if($scope.classbar2 ==="hamburger_middle1_bar")
		$scope.classbar2 = "hamburger_middle1_bar_clicked"
	else if($scope.classbar2 === "hamburger_middle1_bar_clicked")
		$scope.classbar2 = "hamburger_middle1_bar"
	if($scope.classbar3 ==="hamburger_middle2_bar")
		$scope.classbar3 = "hamburger_middle2_bar_clicked"
	else if($scope.classbar3 === "hamburger_middle2_bar_clicked")
		$scope.classbar3 = "hamburger_middle2_bar"
	if($scope.classbar4 ==="hamburger_bottom_bar")
		$scope.classbar4 = "hamburger_bottom_bar_clicked"
	else if($scope.classbar4 === "hamburger_bottom_bar_clicked")
		$scope.classbar4 = "hamburger_bottom_bar"
	if($scope.classbar5 ==="hamburger_bottom2_bar")
		$scope.classbar5 = "hamburger_bottom2_bar_clicked"
	else if($scope.classbar5 === "hamburger_bottom2_bar_clicked")
		$scope.classbar5 = "hamburger_bottom2_bar"
	
	
	
	
};

$scope.painting_to_display_b =[{"photo":"photo1", "path":"../photos/williambuchina/oeuvres/BUC-2016-0014 Assembling for Certain Reasons- Many Running in the Same Direction_2016_80 x 60 inches_ok.jpg"}];

$scope.buchina_paintings = [
	{"photo":"photo1", "path":"../photos/williambuchina/oeuvres/BUC-2016-0014 Assembling for Certain Reasons- Many Running in the Same Direction_2016_80 x 60 inches_ok.jpg"},
	{"photo":"photo2", "path":"../photos/williambuchina/oeuvres/BUC-2016-0018 Assembling for Certain Reasons- A Family Watches the Patriarch_2016_24 x 24 inches_ok.jpg"},
	{"photo":"photo3", "path":"../photos/williambuchina/oeuvres/BUC-2016-0011 Being Presented to An Elevated Judge_2016_36 x 54 inches.jpg"},
	{"photo":"photo4", "path":"../photos/williambuchina/oeuvres/0_ok.jpg"},
	{"photo":"photo5", "path":"../photos/williambuchina/oeuvres/unnamed-1.jpg"},
	{"photo":"photo6", "path":"../photos/williambuchina/Installation/Buchina_TTSAHL_Install01.jpg"}
];

$scope.painting_to_display_c =[{"photo":"photo1", "path":"../photos/colinkilian/oeuvres/col-oeuvres1.png"}];

$scope.colin_paintings = [
	{"photo":"photo1", "path":"../photos/colinkilian/oeuvres/col-oeuvres1.png"},
	{"photo":"photo2", "path":"../photos/colinkilian/oeuvres/col-oeuvres2.png"},
	{"photo":"photo3", "path":"../photos/colinkilian/oeuvres/col-oeuvres3_ok.jpg"},
	{"photo":"photo4", "path":"../photos/colinkilian/Installation/Colin_Kilian_Robert_Kuo_Install03.jpg"},
	{"photo":"photo5", "path":"../photos/colinkilian/oeuvres/col-oeuvres4.png"},
	{"photo":"photo6", "path":"../photos/colinkilian/oeuvres/col-oeuvres5.png"}
];

$scope.painting_to_display_s =[{"photo":"photo1", "path":"../photos/samuelstabler/oeuvres/STA-2016-0013 Untitled (Neon Cowboys)_2016_13.25 x 57.25 inches_ok.jpg"}];

$scope.samuel_paintings = [
	{"photo":"photo1", "path":"../photos/samuelstabler/oeuvres/STA-2016-0013 Untitled (Neon Cowboys)_2016_13.25 x 57.25 inches_ok.jpg"},
	{"photo":"photo2", "path":"../photos/samuelstabler/oeuvres/STA-2016-0040 Untitled (Red Cut-Out)_2016_30 x 22 inches_ok.jpg"},
	{"photo":"photo3", "path":"../photos/samuelstabler/oeuvres/STA-2016-0015 Untitled (Neon Cowboys)_2016_13.25 x 57.25 inches_ok.jpg"},
	{"photo":"photo4", "path":"../photos/samuelstabler/oeuvres/Stabler_Untitled (Blue Neon Cowboys)_install_white_5.jpg"},
	{"photo":"photo5", "path":"../photos/samuelstabler/oeuvres/STA-2017-0004 Untitled (Floral Still Life)_2017_60 x 40 inches_ok.jpg"},
	{"photo":"photo6", "path":"../photos/samuelstabler/oeuvres/Stabler_Untitled (Neon Cowboys)_install_white_10.jpg"}
];

	
$scope.painting_to_display_j =[{"photo":"photo1", "path":"../photos/jasonbyers/oeuvres/JAB_50States50Birds-Install01.jpg"}];

$scope.jason_paintings = [
	{"photo":"photo1", "path":"../photos/jasonbyers/oeuvres/JAB_50States50Birds-Install01.jpg"},
	{"photo":"photo2", "path":"../photos/jasonbyers/oeuvres/BYE-2016-0004 Alabama, Yellow Hammer_2016_6.5 x 4.5 inches_ok.jpg"},
	{"photo":"photo3", "path":"../photos/jasonbyers/oeuvres/BYE-2016-0021 Louisiana, Eastern Brown Pelican_2016_6.5 x 4.5 inches_ok.jpg"},
	{"photo":"photo4", "path":"../photos/jasonbyers/oeuvres/BYE-2016-0030 Nebraska, Western Meadowlark_2016_6.5 x 4.5 inches_ok.jpg"},
	{"photo":"photo5", "path":"../photos/jasonbyers/oeuvres/BYE-2016-0051 West Virginia, Cardinal_2016_6.5 x 4.5 inches_ok.jpg"},
	{"photo":"photo6", "path":"../photos/jasonbyers/oeuvres/BYE-2016-0015 Idaho, Mountain Bluebird_2016_6.5 x 4.5 inches_ok.jpg"}	
	
];	
	
	
	
	
	
	
	
	
	
	
	
$scope.painting_to_display_f_b = function(element){
	$scope.painting_to_display_b[0] = element;
};

$scope.painting_to_display_f_c = function(element){
	$scope.painting_to_display_c[0] = element;
};

$scope.painting_to_display_f_s = function(element){
	$scope.painting_to_display_s[0] = element;
};

$scope.painting_to_display_f_j = function(element){
	$scope.painting_to_display_j[0] = element;
};


});


