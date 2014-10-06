$(document).ready(function(){
  console.log("loaded");

  var $headings = $(".main h3");

  // ----- #1
  // console.log($headings);

  // ----- #2
  // $headings.hide();

  // ----- #3
  // $headings.css({
  //   color: "green"
  // });

  // ----- #4
  // $headings.on("click", function(){
  //   alert("heading has been clicked");
  // });

  // ----- #5
  // $headings.on("mouseenter", function(){
  //   $(this).toggleClass("heading-active");
  // });

  // ----- #6
  // $headings.on("click", function(){
  //   $(this).next("p").slideToggle();
  // });

  // ----- #7
  // $xkcdComicBlock = $(".xkcd-comic");
  // $xkcdComicBlock.on("click", function() {
  //   $this = $(this);
  //   // clean inner html
  //   $this.find(".comic").html("");
  //   // hide the element
  //   $this.hide();
  // });
  // $("#lessons-btn").on("click", function() {
  //   $.ajax({
  //     url: "http://dynamic.xkcd.com/api-0/jsonp/comic?callback=?",
  //     dataType: "json",
  //
  //     success: function(data) {
  //       $xkcdComicBlock.find(".comic").append(
  //         $("<img>").attr({
  //           src: data.img
  //         })
  //       );
  //     },
  //
  //     error: function() {
  //       $xkcdComicBlock.find(".comic").text("Can't load comic :(");
  //     },
  //
  //     complete: function() {
  //       $xkcdComicBlock.show();
  //     }
  //   });
  // });
});
