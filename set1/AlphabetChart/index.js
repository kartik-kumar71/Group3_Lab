
$(".grid-item").on("click", handleClick)

function handleClick (){
    var clickedButton = this.innerHTML;
    console.log(clickedButton);
}