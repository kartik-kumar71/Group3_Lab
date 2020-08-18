
$(".grid-item").on("click", handleClick)
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");


function handleClick (){
    
    var img = "https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png";
    
    modal.style.display = "block";
    modalImg.src = img;
    captionText.innerHTML = "apple";
    
}


var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}