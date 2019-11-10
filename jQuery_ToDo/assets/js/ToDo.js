// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
    // //if li is grey
    // if($(this).css("color")==="rgb(128, 128, 128)"){
    //     //turn it to black
    //     $(this).css({
    //         color:"black",
    //         textDecoration:"none",
    //     });
    // }
    //     else{
    //         //turn it grey
    //         $(this).css({
    //             color:"grey",
    //             textDecoration:"line-through",
    //         }); 
    //     }
    //NOTE while using .on we cannot do $("li") because the first time..
    // ..it is acted there may not an li. there should always be an element..
    //..to be acted on the first time. Hence, $("ul").on("click","li"...)
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation(); //.remove is used to delete the element
    //.parent() gives the li(span is inside li)
    //event.stopPropagation() is used to stop event bubbling
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
         //.val() is similar to textContent giving back the text in the element
	}
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});