/* 
 * @author Ramirez Gonzalez juan José
 * 
 */

(function($){
    
    $.fn.verticalMenu=function(){
       
        return this.each(function(){
            
            var menu= $(this);
            menu.find('ul li > a').bind(
            		'mouseover',function(event){
                
                var currentlink=$(event.currentTarget);
                if (currentlink.parent().find('ul.active').size()==1){
                	currentlink.parent().find('ul.active').slideUp('medium',function(){
                        currentlink.parent().find('ul.active').removeClass('active');
                    });
                }
                
                else if (menu.find('ul li a:hover ul.active').size()==0){
                    show(currentlink)
                }  
                /*
                else if (menu.find('ul li a:hover').size()==0){
                    show(currentlink);
                }*/
                else{
                    menu.find('ul li ul.active').slideUp('medium',function(){
                    	menu.find('ul li ul').removeClass('active');
                        show(currentlink);
                    });
                }
            }
            
            );

            function show(currentlink){
                currentlink.parent().find('ul').addClass('active');
                currentlink.parent().find('ul').slideDown('medium');
            }
           });
    }
})(jQuery);