$(function(){
	$('#adv1_list li').click( function(){	
		 var index = $(this).index();
		 $(this).addClass('current').siblings().removeClass('current');
		 remvoeClass();
		 if(index==0){$(this).addClass("icon_01_current");}
		 if(index==1){$(this).addClass("icon_02_current");}
		 if(index==2){$(this).addClass("icon_03_current");}
		 if(index==3){$(this).addClass("icon_04_current");}
		$("#adv2 li").eq(index).show().siblings().hide();
		});		
		function remvoeClass(){
		     var li0=$('#adv1_step li').get(0);
			 var li1=$('#adv1_step li').get(1);	
			 var li2=$('#adv1_step li').get(2);
			 var li3=$('#adv1_step li').get(3);
			 $(li0).removeClass("icon_01_current");
			 $(li1).removeClass("icon_02_current");	
			 $(li2).removeClass("icon_03_current");	
			 $(li3).removeClass("icon_04_current");		
		}		
});

$(function(){
	
	})