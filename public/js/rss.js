var slideCount;
var slideWidth;
var slideHeight;
var sliderUlWidth;

$(function() {
	getRssFeed("https://konsult.coop/blog/feed.xml", mapFeed);
	
	$('.left-arrow').on('click', function () {
		moveLeft();
	});

	$('.right-arrow').on('click', function () {
		moveRight();
	});
	
	$(window).on('resize', function () {
		returnCarouselList();
	});
});

function moveLeft() {
	$('.rsscarousel').animate({
		left: + slideWidth
	}, 200, function () {
		$('.rsscarousel li:last-child').prependTo('.rsscarousel');
		$('.rsscarousel').css('left', '');
	});
}

function moveRight() {
	$('.rsscarousel').animate({
		left: - slideWidth
	}, 200, function () {
		$('.rsscarousel li:first-child').appendTo('.rsscarousel');
		$('.rsscarousel').css('left', '');
	});
}

function getRssFeed(url, callback) {
	return feednami.loadGoogleFormat(encodeURI(url), callback);
}

function mapFeed(result) {
	if (result.error) {
      console.log(result.error)
  } else {
		createCarouselList(result.feed.entries.slice(0, 5));
		createFeedList(result.feed.entries.slice(0, 20));
  }
}

function createCarouselList(elements) {
	var list = [];
	$(elements).each(function(index, element) {
        list.push("<div class=\"carousel-item\"> \
        <img class=\"d-block img-fluid w-100\" src=\"img/gothenburg.jpg\" alt=\"Vi finns bara på Sveriges framsida (än så länge?)\"> \
        <div class=\"carousel-caption d-none d-md-block bg-overlay\"> \
          <h3 class=\"text-shadow\" data-t><a href='"+ element.link +"'>"+ element.title +"</a></h3> \
          <p class=\"text-shadow\" data-t>"+ new Date(element.publishedDate).toLocaleDateString("pt-BR") +"</p> \
        </div> \
      </div> \
    ");
	});
	
	$(".rsscarousel").append(list);
	
}

function createFeedList(elements) {
	var list = [];
	$(elements).each(function(index, element) {
		list.push("<li><a href='"+ element.link +"'>"+ element.title +"</a></li>");
	});
	$(".list").append(list);
	returnCarouselList();
}

function returnCarouselList() {
	slideCount = $('.rsscarousel li').length;
	slideWidth = $('.rsscarousel li').width();
	slideHeight = $('.rsscarousel li').height();
	sliderUlWidth = slideCount * slideWidth;
	$('.slider').css({ width: slideWidth, height: slideHeight });
	$('.rsscarousel').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	$('.rsscarousel li:last-child').prependTo('.rsscarousel');
}