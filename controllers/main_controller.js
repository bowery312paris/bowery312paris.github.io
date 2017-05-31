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

$scope.painting_to_display_b =[{"photo":"photo1", "path":"../photos/williambuchina/oeuvres/BUC-2017-0004 Assembling for Certain Reasons- Men Who Played a Game of Chance and Won a Prize_2017_25 x 36 inches.jpg"}];

$scope.buchina_paintings = [
	{"photo":"photo1", "path":"../photos/williambuchina/oeuvres/BUC-2017-0004 Assembling for Certain Reasons- Men Who Played a Game of Chance and Won a Prize_2017_25 x 36 inches.jpg"},
	{"photo":"photo2", "path":"../photos/williambuchina/oeuvres/BUC-2017-0006 Assembling for Certain Reasons- Man Giving Prized Object to Another Man, Both Are Pleased_2017_12 x 24 inches.jpg"},
	{"photo":"photo3", "path":"../photos/williambuchina/oeuvres/BUC-2016-0011 Being Presented to An Elevated Judge_2016_36 x 54 inches.jpg"},
	{"photo":"photo4", "path":"../photos/williambuchina/oeuvres/BUC-2016-0001 Early in a Clear Evening_2016_36 x 54 inches.jpg"},
	{"photo":"photo5", "path":"../photos/williambuchina/oeuvres/BUC-2016-0003 While All the Others Are Working_2016_36 x 54 inches.jpg"},
	{"photo":"photo6", "path":"../photos/williambuchina/oeuvres/unspecified.jpg"}
];

$scope.painting_to_display_c =[{"photo":"photo1", "path":"../photos/colinkilian/oeuvres/col-oeuvres1.png"}];

$scope.colin_paintings = [
	{"photo":"photo1", "path":"../photos/colinkilian/oeuvres/col-oeuvres1.png"},
	{"photo":"photo2", "path":"../photos/colinkilian/oeuvres/col-oeuvres2.png"},
	{"photo":"photo3", "path":"../photos/colinkilian/oeuvres/KIL-2017-0005 Fox Hall 1_2017_30 x 42 inches.jpg"},
	{"photo":"photo4", "path":"../photos/colinkilian/Installation/Colin_Kilian_Robert_Kuo_Install03.jpg"},
	{"photo":"photo5", "path":"../photos/colinkilian/oeuvres/col-oeuvres4.png"},
	{"photo":"photo6", "path":"../photos/colinkilian/oeuvres/col-oeuvres5.png"}
];

$scope.painting_to_display_s =[{"photo":"photo1", "path":"../photos/samuelstabler/oeuvres/IMG_2651 (1).JPG"}];

$scope.samuel_paintings = [
	{"photo":"photo1", "path":"../photos/samuelstabler/oeuvres/IMG_2651 (1).JPG"},
	{"photo":"photo2", "path":"../photos/samuelstabler/oeuvres/STA-2017-0010 Untitled Cut-Out (Johnny Cash)_2017_28 x 21.25 inches.jpg"},
	{"photo":"photo3", "path":"../photos/samuelstabler/oeuvres/STA-2017-0011 Untitled Cut-Out Portrait (Emperor Maximilian)_2017_27 x 21 inches.jpg"},
	{"photo":"photo4", "path":"../photos/samuelstabler/oeuvres/STA-2017-0012 Untitled (Neon Cowboys)_2017_13 x 40 inches.jpg"},
	{"photo":"photo5", "path":"../photos/samuelstabler/oeuvres/STA-2017-0013 Untitled (Neon Cowboys)_2017_13 x 40 inches.jpg"},
	{"photo":"photo6", "path":"../photos/samuelstabler/oeuvres/Stabler_Untitled (Neon Cowboys)_install_white_10.jpg"}
];

	
$scope.painting_to_display_j =[{"photo":"photo1", "path":"../photos/jasonbyers/oeuvres/BYE-2016-0015 Idaho, Mountain Bluebird_2016_6.5 x 4.5 inches.jpg"}];

$scope.jason_paintings = [
	{"photo":"photo1", "path":"../photos/jasonbyers/oeuvres/BYE-2016-0015 Idaho, Mountain Bluebird_2016_6.5 x 4.5 inches.jpg"},
	{"photo":"photo2", "path":"../photos/jasonbyers/oeuvres/BYE-2016-0018 Iowa, Eastern Goldfinch_2016_6.5 x 4.5 inches.jpg"},
	{"photo":"photo3", "path":"../photos/jasonbyers/oeuvres/BYE-2016-0019 Kansas, Western Meadowlark_2016_6.5 x 4.5 inches.jpg"},
	{"photo":"photo4", "path":"../photos/jasonbyers/oeuvres/BYE-2016-0025 Michigan, Robin_2016_6.5 x 4.5 inches.jpg"},
	{"photo":"photo5", "path":"../photos/jasonbyers/oeuvres/BYE-2016-0027 Mississippi, Mockingbird_2016_6.5 x 4.5 inches.jpg"},
	{"photo":"photo6", "path":"../photos/jasonbyers/oeuvres/BYE-2016-0049 Virginia, Cardinal_2016_6.5 x 4.5 inches.jpg"}	
	
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


