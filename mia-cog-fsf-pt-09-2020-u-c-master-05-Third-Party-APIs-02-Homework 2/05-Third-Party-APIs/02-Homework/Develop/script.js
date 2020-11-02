$(document).ready(function(){
    var nineAm= localStorage.getItem("9am")
    $("#9").children(".description").val(nineAm)
    var tenAm= localStorage.getItem("10am")
    $("#10").children(".description").val(tenAm)
    var elevenAm= localStorage.getItem("11am")
    $("#11").children(".description").val(elevenAm)
    var twelvePm= localStorage.getItem("12pm")
    $("#12").children(".description").val(twelvePm)
    var onePm= localStorage.getItem("1pm")
    $("#13").children(".description").val(onePm)
    var twoPm= localStorage.getItem("2pm")
    $("#14").children(".description").val(twoPm)
    var threePm= localStorage.getItem("3pm")
    $("#15").children(".description").val(threePm)
    var fourPm= localStorage.getItem("4pm")
    $("#16").children(".description").val(fourPm)
    var fivePm= localStorage.getItem("pm")
    $("#17").children(".description").val(fivePm)

    
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
        var event =  $(this).siblings(".description").val(); 
        var timeslot = $(this).siblings(".hour").text();
        localStorage[timeslot] = event;
       console.log(event)
       console.log(timeslot)

       var siblings= $(this).siblings(".description").val(); 
       console.log(siblings)
       
        });
      
    


    

    
     







});
