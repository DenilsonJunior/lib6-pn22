events.on("ready",function(){$(".botao").on("click",function(){$(this).removeClass("infinite")}),$(".flexObra .smalltext").attr("tabindex","-1"),$(".noler").attr("tabindex","-1"),$(".flip-click").on("click",function(){$(this).removeClass("infinite")}),$("video").attr("tabindex","-1"),$(".owl-next").addClass("animated pulse infinite"),$(".line-interation").find(".line-major").addClass("animated fadeInRight"),$(".line-interation").find(".botao").on("click",function(){$(this).parent().parent(".line-minor").siblings(".line-major").css("display","block")}),$(".sec01").isInViewportComplete({container:window,released:!0,call:function(){$(".op01, .op02, .op03, .op04").removeClass("active")}}),$(".parentPonto1").isInViewportComplete({container:window,released:!0,call:function(){$(".op01").addClass("active"),$(".op02, .op03, .op04").removeClass("active")}}),$(".parentPonto2").isInViewportComplete({container:window,released:!0,call:function(){$(".op02").addClass("active"),$(".op01, .op03, .op04").removeClass("active")}}),$(".parentPonto3").isInViewportComplete({container:window,released:!0,call:function(){$(".op03").addClass("active"),$(".op01, .op02, .op04").removeClass("active")}}),$(".parentPonto4").isInViewportComplete({container:window,released:!0,call:function(){$(".op04").addClass("active"),$(".op01, .op02, .op03").removeClass("active")}})});
//# sourceMappingURL=script.js.map
