$(function(){
    function submitClick(){
        
        var noun1 = $("#noun1").val();
        
        var noun2 = $("#noun2").val();
       
        var place = $("#place").val();
        
        var adj = $("#adj").val();
        
        var verb = $("#verb").val();
         
        $("#sentence").fadeIn();
        $("#sentence .noun1").html(noun1);
        $("#sentence .noun2").html(noun2);
        $("#sentence .place").html(place);
        $("#sentence .adj").html(adj);
        $("#sentence .verb").html(verb);
    }
    
    $("#sentence").hide(); 
    $("#dayCTA").click(submitClick);

});
