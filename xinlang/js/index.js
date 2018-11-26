
     {
         let hoverMenu =  document.querySelector(".mainLeft #hoverMenu");
        let move = document.querySelector(".mainLeft .move");
        let botMenu = document.querySelector(".mainLeft .botMenu");
        let li = botMenu.querySelectorAll("li");
        hoverMenu.onmouseover = function(){
            botMenu.className = "botMenu show";
        };
        for(let i=0; i < li.length;i++){
            li[i].onmouseover = function(){
                for(var i=0; i < li.length;i++){
                    li[i].className ="";  
                }
                this.className="active"; 
            }
        }
        hoverMenu.onmouseout = function(){
            botMenu.className = "botMenu hide";
          
        };
    }