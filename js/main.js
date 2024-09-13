console.log("Landing");

/* class Menu{
    constructor()
} */

    class Page{
        constructor(){
            console.log("Creating Page");
            console.log(this);
        }
        create(){
            var Qarrystring = window.location.search;
            console.log("Guerry: "+ Qarrystring);
            
            
            console.log("Pages:");
            console.log(Pages);
            Pages.forEach(Page => {
                console.log(Page);
                
            })
            
        }
        createheader(){
            menuitems.forEach(menuitem => {
                var Menubar = document.querySelector("menu");
        
                const newMenitem = document.createElement("Menuitem");
                newMenitem.innerHTML = menuitem.Name;
                newMenitem.href = menuitem.link;
        
                newMenitem.classList.add("Menuitem");
        
                //TODO: Isactive check
        
                Menubar.appendChild(newMenitem);
        
                
        
                
                
            });
        }
    }
    var thispage = new Page();
    thispage.create();
    thispage.createheader();

    //why not workim?


    function createELM(name, parent, id){

    }

    //window.onload

    var Menubar = document.querySelector("menu");
    console.log(Menubar);
    

    console.log(menuitems);
    

    