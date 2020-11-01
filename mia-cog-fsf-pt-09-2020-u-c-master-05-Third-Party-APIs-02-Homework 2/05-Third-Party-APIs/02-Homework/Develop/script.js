$(document).ready(function(){
    //set time
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    var currentHour = moment().hour();


    // change colors
    $('.time-block').each(function(){
        var id = parseInt($(this).attr('id'));
        if(id < currentHour){
            $(this).addClass('past')
        } else if( id === currentHour){
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })


    // add btn clcik and inside store test in local storage

    $("button").on("click",function(){
        var event =  $(".description").val();
        var timeslot = $(".hour").text();
        localStorage.timeslot = event;
       console.log()
        });
      
    


    // event listener for save button
    $("button").click (function(event)  {

    
    }); 







});
