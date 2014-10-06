$(document).ready(function(){
  console.log("loaded");

  window.s = new Sample();
});

var Sample = function() {
  var $headings = $(".main h3");

  return {
    ex1: function() {
      console.log($headings);
    },

    ex2: function() {
      $headings.hide();
    },

    ex3: function() {
      $headings.css({
        color: "green"
      });
    },

    ex4: function() {
      $headings.on("click", function(){
        alert("heading has been clicked");
      });
    },

    ex5: function() {
      $headings.on("mouseenter", function(){
        $(this).toggleClass("heading-active");
      });
    },

    ex6: function() {
      $headings.on("click", function(){
        $(this).next("p").slideToggle();
      });
    },

    ex7: function() {
      $xkcdComicBlock = $(".xkcd-comic");

      $xkcdComicBlock.on("click", function() {
        $this = $(this);
        // clean inner html
        $this.find(".comic").html("");
        // hide the element
        $this.hide();
      });

      $("#lessons-btn").on("click", function() {
        $.ajax({
          url: "http://dynamic.xkcd.com/api-0/jsonp/comic?callback=?",
          dataType: "json",

          success: function(data) {
            $xkcdComicBlock.find(".comic").append(
              $("<img>").attr({
                src: data.img
              })
            );
          },

          error: function() {
            $xkcdComicBlock.find(".comic").text("Can't load comic :(");
          },

          complete: function() {
            $xkcdComicBlock.show();
          }
        });
      });
    }
  }
}
