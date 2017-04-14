//判断当前浏览类型  
function BrowserType()  
{  
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
    var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器  
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器  
    var isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE; //判断是否IE的Edge浏览器  
    var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器  
    var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器  
    var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器  
    if (isIE){$("body").addClass('btie');}else
    if (isSafari || isFF){$("body").addClass('btff');}else
    if (isOpera || isChrome){$("body").addClass('btchrome');}else{
        $("body").addClass('btff');
    }
    if (isIE)   
    {  
         var reIE = new RegExp("MSIE (\\d+\\.\\d+);");  
         reIE.test(userAgent);  
         var fIEVersion = parseFloat(RegExp["$1"]);  
         if(fIEVersion <= 10)  
         { return true;}  
         else  
         { return false}//IE版本过低  
     }//isIE end  
       
     if (isSafari) {  return true;}  
 }//myBrowser() end  
if(BrowserType()){$('section').removeClass('parallax');}
//lazyload
$(function() {
  var ua = window.navigator.userAgent.toLowerCase();
      if(ua.match(/MicroMessenger/i) == 'micromessenger'){
          $('#wecode').attr('src','img/wechatcode.jpg');
      }
     $(".lazy").lazyload({
       effect : "fadeIn",
       threshold : 200
     });
     $(".nav-trigger").click(function(){
      $("body").toggleClass("nav-active");
     });
     $("#closemenu").click(function(){
      $("body").removeClass("nav-active");
     });
     //parallax
     $('.background-image-holder').each(function() {
          var imgSrc = $(this).children('img').attr('src');
          $(this).css('background', 'url("' + imgSrc + '")');
          $(this).children('img').hide();
          $(this).css('background-position', 'initial');
      });

      // Fade in background images

      setTimeout(function() {
          $('.background-image-holder').each(function() {
              $(this).addClass('fadeIn');
          });
      }, 200);

      if ((/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
          $('section').removeClass('parallax');
      }
     //parallax
});
