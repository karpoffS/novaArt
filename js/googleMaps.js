


/**
 * Created by sergey on 30.08.15.
 */
googleMaps = {

	initialize:function() {

		'use strict';

		/**
		 * Объект координат
		 * @type {google.maps.LatLng}
		 */
		var myLatlng = new google.maps.LatLng(55.11155489999999, 61.42228339999997);

		/**
		 * Настройки карты
		 * @type {{zoom: number, center: google.maps.LatLng, mapTypeId: *}}
		 */
		var myOptions = {
			zoom: 16,
				center: myLatlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		

		/**
		 * Объект карты
		 * @type {google.maps.Map}
		 */
		var map = new google.maps.Map(document.getElementById("geolocation"), myOptions);

		/**
		 * Объект ИнфоОкна
		 * @type {google.maps.InfoWindow}
		 */
		var infowindow = new google.maps.InfoWindow({
			content: "\u00ab\u041d\u0435\u0443\u043f\u0438\u0432\u0430\u0435\u043c\u0430\u044f \u0447\u0430\u0448\u0430\u00bb\u003c\u0062\u0072\u003e\u0035\u002d\u044f \u042d\u043b\u0435\u043a\u0442\u0440\u043e\u0432\u043e\u0437\u043d\u0430\u044f \u0443\u043b\u002c \u0035 \u043a\u043e\u0440\u043f\u0443\u0441 \u0031\u003c\u0062\u0072\u003e \u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a"
			//content: "«Неупиваемая чаша»<br>5-я Электровозная ул, 5 корпус 1<br> Челябинск"
		});

		/**
		 * Объект Маркера
		 * @type {google.maps.Marker}
		 */
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: "«Неупиваемая чаша»"
		});

		/**
		 * Слушаем событие клика
		 */
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});
	}
};