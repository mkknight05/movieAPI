$(document).ready(function () {
    console.log("ready!");
    const apiKey = "f50f2f0ce32549178130bdf3c6a29e2d";
   

    $("#goButton").click(function () {
        const getMovieInputFromUser = $("#inputText").val();

        $.ajax({
            success: function (data) {
                const multimedia= data.results[0].multimedia;
                 if  (multimedia != null) { 
                    $("#moviePic").attr('src',multimedia.src);
                 } else{
                    $("#moviePic").attr('src', "image-not-found.png") 
                 };
                const rating = "This movie is rated " + data.results[0].mpaa_rating;
                const critic = "This movie has been rated " + data.results[0].critics_pick +" by critics";
               
                console.log(data.results[0]);
                console.log(data.results[0].display_title)
                console.log(data.results[0].mpaa_rating)
                console.log(data.results[0].link.url)
                console.log(data.results[0].critics_pick);
                
                console.log(data.results[0].opening_date)
                
                $(".mainHeader").html(data.results[0].display_title);
                $("#ratingOne").html(rating);
                $("#critic").html(critic);

            },
            url: "https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=" + apiKey + "&query='" + getMovieInputFromUser + "'",
        })
    })


  








});