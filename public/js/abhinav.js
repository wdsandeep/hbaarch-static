function animateWordByword(elementID,fadeInUpSpeed='fadeInUp85se',paddingRight=15,IDorCLASS='#')
{
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
var $el = $(IDorCLASS+elementID), text = $.trim($el.text()),
    words = text.split(" "), html = "";

for (var i = 0; i < words.length; i++) {
    html += "<div style='    float: left;padding-right: "+paddingRight+"px;'>" + words[i] + ((i+1) === words.length ? "" : " ") + "</div>";
};
$el.html(html).children().css('opacity','0').each(function(i){
 var my=this; setTimeout(function(){$(my).css({'display': 'block', 'opacity': '1'}).addClass("animated "+fadeInUpSpeed);}, 300*i);
 $("#"+elementID).show(); $("#"+elementID).css('opacity','1');
});
 /*setTimeout(function(){
	
$el.find("div").promise().done(function(){
    $el.text(function(i, text){
       return $.trim(text);
    });            
});
}, (300*words.length)+500);*/

}