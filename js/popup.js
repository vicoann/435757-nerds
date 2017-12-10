  var link=document.querySelector(".write-us-button");
  var popup=document.querySelector(".write-us-form");
  var close=document.querySelector(".close-button");

  link.addEventListener ("click", function (evt){
    evt.preventDefault();
    popup.classList.add("write-us-form-show");

});

  close.addEventListener ("click", function (evt){
    evt.preventDefault();
    popup.classList.remove("write-us-form-show");
});
