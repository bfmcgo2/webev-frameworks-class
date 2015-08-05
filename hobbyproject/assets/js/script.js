	



$(document).ready(function(){

	L.mapbox.accessToken = 'pk.eyJ1IjoiYmZtY2dvMiIsImEiOiJlS0c1a1drIn0.GNJBFHhd6pqumZDjScZF7Q';

	var southWest = L.latLng([18.812717856407776,-138.2080078125]),
	    northEast = L.latLng([54.901882187385006, -50.6689453125]),
	    bounds = L.latLngBounds(southWest, northEast);


	    // creating maps and zoom boundaries
	var map = L.mapbox.map('map', 'mapbox.streets',{
		maxBounds:bounds,
		maxZoom:6,
		minZoom:4
	});

	map.fitBounds(bounds);

	// Creating Hikes I've been on
	function addMarkerToMap (color, latitude, longitude, videoID, description, details){
    	L.marker([latitude,longitude], {
	        icon: L.mapbox.marker.icon({
	            'marker-size': 'large',
	            'marker-color': color
	        })
	    })
	    .addTo(map)
	    .on("click", function() {
	    	if (videoID && description && details) {
	    		// create video
		    	console.log("marker clicked with video url: ", videoID);

		    	$(".video-preview").remove();

		    	var createVideo = document.createElement("iframe");
				createVideo.setAttribute("class", "video-preview")
				createVideo.setAttribute("src","https://player.vimeo.com/video/"+videoID+"?autoplay=0&loop=1&title=0&byline=0&portrait=0")
				createVideo.setAttribute("height", "25%");
				createVideo.setAttribute("width", "100%");
				createVideo.setAttribute("frameborder", "0");
				createVideo.setAttribute("zIndex","1");
				document.querySelector("body").appendChild(createVideo);
				// swap description
				document.querySelector(".description p").innerHTML = description;
				document.querySelector(".details h3").innerHTML = details;
	    	}
	    });
	}


	// Creating Hikes I want to go on
	//function addBlueMarkerToMap (latitude,longitude){
    //	var clickMarker = L.marker([latitude,longitude], {
	//        icon: L.mapbox.marker.icon({
	//            'marker-size': 'large',
	//            'marker-color': '#05B8CC'
	//        })
	//    }).addTo(map);
	//}
	//

	// placing orange pins
	//var orangeMarkers = [
		addMarkerToMap("#fa0", 40.18044715758667, -106.85165405273438, "72168339", "The Devil's Causeway, a narrow strip of land in the heart of the Flat Tops Wilderness Area, is notorious for causing sheer terror, or awe and thrill, for those who dare to cross it. This land bridge is roughly 50 feet in length, and narrows to as little as 3 feet in width.", "Devil's Causeway"),
		addMarkerToMap("#fa0", 37.82958198283902, -83.55960845947266, "23869720",  "The Red River Gorge is a unique, scenic natural area that attracts thousands of visitors each year. Spectacular rock features, including sandstone arches and towering cliffs, are just part of the attraction. Outdoor enthusiasts come to the gorge year-round to enjoy hiking, camping, canoeing, wildlife viewing and other recreation opportunities.", "Red River Gorge" ),
		addMarkerToMap("#fa0", 37.312836976839144, -113.01464080810547, "12463658", "Designated in 1919, Zion is Utah's oldest national park. The park is known for its incredible canyons and spectacular views. Famous hikes including The Narrows, Subway, and Angels Landing attract adventure enthusiasts from around the world. Hiking possibilities are endless.", "Mt. Zion" ),
		addMarkerToMap("#fa0", 33.803863538792875, -84.14525270462036, "104898610", "Minutes from downtown Atlanta, the massive gray Stone Mountain monolith towers over the city’s gently rolling urban landscape. Stone Mountain Park, the 3200 acres of land surrounding the massive, nearly-bald mountain and its surrounding preserve, offers many miles of hiking on both popular and more serene trails.", "Stone Mountain"),
		addMarkerToMap("#fa0", 36.272510970903284, -121.80267333984376, "58045466", "While there are miles of trails for the dedicated hiker and backpacker, Big Sur also offers spectacular scenery within steps of Highway 1. And for those willing to hike a few miles, the rewards include rapidly changing settings of oak and lush redwood forests, ocean views, rocky streams, and coastal brush.", "Big Sur"),
		addMarkerToMap("#fa0", 40.72306326129451, -73.98983001708984, "106468233", "With 100 itineraries, NYC Discovery prides itself on offering Manhattan’s largest selection. Choices range from areas like Central Park, to Civil War NY and Titanic, to a Taste of Chinatown (dim sum and green-tea ice cream) or Brooklyn Heights/Cobble Hill (egg creams and spinach pie). Guides emphasize quirky stuff, like the specific subway grate where Marilyn Monroe flashed her gams in The Seven Year Itch.", "New York City"),
		addMarkerToMap("#fa0", 38.725161847874716, -109.56390380859375, "110636084", "Arches National Park offers a diverse selection of hikes, from short 10 minute walks that go right up to several of the arches (suitable for all ages), to 7 mile hikes through some of the more remote sections of the park.", "Moab")
	//];
	//console.log(orangeMarkers)



	// Placing the blue pins
	//var blueMarkers = [
		addMarkerToMap("#05B8CC", 44.94232389645865, -108.20932388305664, "131850801","The narrows of Blue John Canyon are some of the best anywhere in the Southwest, offering a range of canyoneering challenges to suit all levels; there are deep but obstruction-free slots, watery potholes, steeply descending sections requiring difficult downclimbing, and several sheer drops where rappelling is needed.", "Blue John Canyon"),
		addMarkerToMap("#05B8CC", 40.26996488643512, -105.58685302734375, "92559369","Long's Peak stands proudly as Colorado's northernmost fourteener. It is unquestionably the monarch of the Front Range and northern Colorado. It is not only the highest peak in Rocky Mountain National Park and Boulder County, but it is also the 15th highest peak in Colorado.", "Long's Peak"),
		addMarkerToMap("#05B8CC", 35.96689214303232, -111.95343017578125, "75112600","Many people visit the grand canyon for the unbeatable views but there is an entirely different world below the rim. The best way to appreciate the canyon is from the bottom, usually with a trip to the Bright Angel campground along the South Kaibab Trail and the Bright Angel trail. Other hikes include the rim trail along the south rim, where you can walk along the rim stopping at several fantastic view points. For a longer hike through the canyon consider hiking the rim-to-rim trail or taking a multi-day trek to the bottom of the canyon with nights at bright angel and cottonwood.", "Grand Canyon"),
		addMarkerToMap("#05B8CC", 31.04433054150274, -98.48221778869629, "14903221","Each trail in Colorado Bend State Park provides a unique opportunity to enjoy something special.  Whether its wildlife, beautiful views, or a technical bike ride, each trail has something to offer.  Take your time and enjoy!", "Colorado Bend State Park")
	//];

	$(".intro-layer .cta-container .cta-button").click(function(){
		console.log("clicked!");
		$(".intro-layer").fadeOut("slow");
	})

	//console.log(orangeMarkers[1])



	// orangeMarkers[1].addEventListener('click',function(){
	// 	var createVideo = document.createElement("iframe");
 //        createVideo.setAttribute("class", "video-preview")
	// 	createVideo.setAttribute("src","https://player.vimeo.com/video/72168339?autoplay=0&loop=1&title=0&byline=0&portrait=0")
	// 	createVideo.setAttribute("height", "300");
	// 	createVideo.setAttribute("width", "100%");
	// 	createVideo.setAttribute("frameborder", "0");
 //        createVideo.setAttribute("zIndex","1");
	// 	document.querySelector("body").appendChild(createVideo);

	// });

    
// 40.18044715758667,-106.85165405273438


});
