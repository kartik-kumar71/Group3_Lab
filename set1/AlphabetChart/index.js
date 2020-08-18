

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

        case "D" :
            imgSrc = "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2019/12/03202400/Yellow-Labrador-Retriever.jpg";
            modal.style.display = "block";
            modalImg.src = imgSrc;
            modalImg.width = "500";
            modalImg.height = "500";
            captionText.innerHTML = "Dog";
            break;

        case "E" :
            imgSrc = "https://cdn.mos.cms.futurecdn.net/SFdkbdefTaog6XKV3wyqJ7-1200-80.jpg";
            modal.style.display = "block";
            modalImg.src = imgSrc;
            modalImg.width = "500";
            modalImg.height = "500";
            captionText.innerHTML = "Egg";
            break;

        case "F" :
            imgSrc = "https://api.time.com/wp-content/uploads/2019/11/fish-with-human-face-tik-tok-video.jpg";
            modal.style.display = "block";
            modalImg.src = imgSrc;
            modalImg.width = "500";
            modalImg.height = "500";
            captionText.innerHTML = "Fish";
            break;

        case "G" :
            imgSrc = "https://images.snowys.com.au/content/images/thumbs/0038891_merino-gloves_1100.jpeg";
            modal.style.display = "block";
            modalImg.src = imgSrc;
            modalImg.width = "500";
            modalImg.height = "500";
            captionText.innerHTML = "Gloves";
            break;

        case "H" :
            imgSrc = "https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/baby-animals-and-life-cycles/roosters-hens-and-chicks/english/wall-2018-roostershensandchicksmp4.transform/content-tile-large/image.png";
            modal.style.display = "block";
            modalImg.src = imgSrc;
            modalImg.width = "500";
            modalImg.height = "500";
            captionText.innerHTML = "Hen";
            break;

        case "I" :
            imgSrc = "https://img.taste.com.au/0D9Lo3B8/w1200-h630-cfill/taste/2018/12/fizzy-sherbet-ice-cream-recipe_1980x1320-145188-1.jpg";
            modal.style.display = "block";
            modalImg.src = imgSrc;
            modalImg.width = "500";
            modalImg.height = "500";
            captionText.innerHTML = "Ice cream";
            break;

        case "J" :
            imgSrc = "https://previews.123rf.com/images/manyapeace45/manyapeace451907/manyapeace45190700005/127661939-empty-jug-transparent-outline-style-bowl-images-milk-jug-arabic-jug-milk-bottle-milk-jug-arabic-jug.jpg";
            modal.style.display = "block";
            modalImg.src = imgSrc;
            modalImg.width = "500";
            modalImg.height = "500";
            captionText.innerHTML = "Jug";
            break;

        case "K" :
            imgSrc = "https://iq-images-processed.s3.amazonaws.com/uploads/made/5c1abb09af11bd64251bfb3fa4466bf25080c6fe.jpg";
            modal.style.display = "block";
            modalImg.src = imgSrc;
            modalImg.width = "500";
            modalImg.height = "500";
            captionText.innerHTML = "Kite";
            break;

        case "L" :
            imgSrc = "https://cdn.hswstatic.com/gif/lion.jpg";
            modal.style.display = "block";
            modalImg.src = imgSrc;
            modalImg.width = "500";
            modalImg.height = "500";
            captionText.innerHTML = "Lion";
            break;


        case "M" :
            imgSrc = "https://5.imimg.com/data5/YD/PM/MY-40752733/fresh-mango-500x500.jpg";
            modal.style.display = "block";
            modalImg.src = imgSrc;
            modalImg.width = "500";
            modalImg.height = "500";
            captionText.innerHTML = "Mango";
            break;


        case "N" :
            imgSrc = "https://static.scientificamerican.com/sciam/cache/file/27F15DB7-8D07-4A9A-A01C7E0D495A5AE0.jpg";
            modal.style.display = "block";
            modalImg.src = imgSrc;
            modalImg.width = "500";
            modalImg.height = "500";
            captionText.innerHTML = "Nest";
            break;


        case "O" :
            imgSrc = "https://www.quanta.org/orange/orange.jpg";
            modal.style.display = "block";
            modalImg.src = imgSrc;
            modalImg.width = "500";
            modalImg.height = "500";
            captionText.innerHTML = "Orange";
            break;



        case "P" :
            imgSrc = "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fgrrlscientist%2Ffiles%2F2018%2F09%2FRose-ringed_Parakeet_Psittacula_krameri_male_by_Dr._Raju_Kasambe_DSCN8937_3-1200x778.jpg";
            modal.style.display = "block";
            modalImg.src = imgSrc;
            modalImg.width = "500";
            modalImg.height = "500";
            captionText.innerHTML = "Parrot";
            break;



        case "Q" :
            imgSrc = "https://media.sheridan.com.au/catalog/product/cache/1/small_image/450x/17f82f742ffe127f42dca9de82fb58b1/d/e/deluxe_feather_down_quilt_snow_1_1700x1700.jpg";
            modal.style.display = "block";
            modalImg.src = imgSrc;
            modalImg.width = "500";
            modalImg.height = "500";
            captionText.innerHTML = "Quilt";
            break;



        case "R" :
            imgSrc = "https://api.time.com/wp-content/uploads/2019/03/us-movie-rabbits-meaning.jpg?quality=85&w=1024&h=512&crop=1";
            modal.style.display = "block";
            modalImg.src = imgSrc;
            modalImg.width = "500";
            modalImg.height = "500";
            captionText.innerHTML = "Rabbit";
            break;



        case "S" :
            imgSrc = "https://media.nationalgeographic.org/assets/photos/000/290/29094.jpg";
            modal.style.display = "block";
            modalImg.src = imgSrc;
            modalImg.width = "500";
            modalImg.height = "500";
            captionText.innerHTML = "Sun";
            break;



        case "T" :
            imgSrc = "https://www.metrorailnews.in/wp-content/uploads/2020/04/all-train-services-to-remain-suspended.jpg";
            modal.style.display = "block";
            modalImg.src = imgSrc;
            modalImg.width = "500";
            modalImg.height = "500";
            captionText.innerHTML = "Train";
            break;



        case "U" :
            imgSrc = "https://images-na.ssl-images-amazon.com/images/I/61cuu4HaRWL._SX466_.jpg";
            modal.style.display = "block";
            modalImg.src = imgSrc;
            modalImg.width = "500";
            modalImg.height = "500";
            captionText.innerHTML = "Umbrella";
            break;



        case "V" :
            imgSrc = "https://www.yopik.in/image/catalog/images/violin.jpg";
            modal.style.display = "block";
            modalImg.src = imgSrc;
            modalImg.width = "500";
            modalImg.height = "500";
            captionText.innerHTML = "Violin";
            break;



        case "W" :
            imgSrc = "https://3.imimg.com/data3/LE/XG/MY-3186432/glass-window-500x500.jpg";
            modal.style.display = "block";
            modalImg.src = imgSrc;
            modalImg.width = "500";
            modalImg.height = "500";
            captionText.innerHTML = "Window";
            break;



        case "X" :
            imgSrc = "https://imgaz1.staticbg.com/thumb/large/oaupload/banggood/images/8E/D8/f83b98ff-2050-4785-8d7e-bddcfeb89a07.jpg";
            modal.style.display = "block";
            modalImg.src = imgSrc;
            modalImg.width = "500";
            modalImg.height = "500";
            captionText.innerHTML = "Xylophone";
            break;


        case "Y" :
            imgSrc = "https://wgbh.brightspotcdn.com/dims4/default/b15fd06/2147483647/strip/true/crop/4334x2364+0+401/resize/990x540!/quality/70/?url=https%3A%2F%2Fwgbh.brightspotcdn.com%2F8e%2F07%2F1f9ec7bb4af7b6bfa15ed34d6088%2Fgettyimages-93216050.jpg";
            modal.style.display = "block";
            modalImg.src = imgSrc;
            modalImg.width = "500";
            modalImg.height = "500";
            captionText.innerHTML = "Yak";
            break;


        case "O" :
            imgSrc = "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjamiecartereurope%2Ffiles%2F2019%2F02%2F1-2-1200x675.jpgg";
            modal.style.display = "block";
            modalImg.src = imgSrc;
            modalImg.width = "500";
            modalImg.height = "500";
            captionText.innerHTML = "Zebra";
            break;
        

    
            

    }

    
    
}


var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}