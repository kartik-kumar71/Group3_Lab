
$(".grid-item").on("click", handleClick)
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var imgSrc = ""


function handleClick (){
    var clickedButton = this.innerHTML;

    switch (clickedButton) {
        case "A" :
            imgSrc = "https://4.imimg.com/data4/QY/GN/MY-24065638/fresh-apple-500x500.jpg";
            modal.style.display = "block";
            modalImg.src = imgSrc;
            modalImg.width = "500";
            modalImg.height = "500";
            captionText.innerHTML = "Apple";
            break;

        case "B" :
            imgSrc = "https://contents.mediadecathlon.com/p1578781/86c25cb66174e1f8fac65872de1c9dcb/p1578781.jpg";
            modal.style.display = "block";
            modalImg.src = imgSrc;
            modalImg.width = "500";
            modalImg.height = "500";
            captionText.innerHTML = "Ball";
            break;

        case "C" :
            imgSrc = "https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg";
            modal.style.display = "block";
            modalImg.src = imgSrc;
            modalImg.width = "500";
            modalImg.height = "500";
            captionText.innerHTML = "Cat";
            break;

    }

    
    
}


var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}