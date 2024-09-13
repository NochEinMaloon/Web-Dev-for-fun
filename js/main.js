console.log("Landing");

/* class Menu{
    constructor()
} */

    const QueryArgs = window.location.search.substr(1).split("&");

    class Project{
        
    }

    class Page{
        constructor(){
            console.log("Creating Page");
            console.log(this);
            console.log(QueryArgs);
            
        }
        create(){
            console.log("Guerry: "+ QueryArgs);
            
            
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
    

    