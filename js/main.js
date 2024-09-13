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
            console.log("Test");
            
        }
    }
    var thispage = new Page();
    thispage.create();

    //why not workim?


    function createELM(name, parent, id){

    }

    //window.onload

    var Menubar = document.querySelector("menu");
    console.log(Menubar);
    

    console.log(menuitems);
    

    menuitems.forEach(menuitem => {
        var Menubar = document.querySelector("menu");

        const newMenitem = document.createElement("Menuitem");
        newMenitem.innerHTML = menuitem.Name;
        newMenitem.href = menuitem.link;

        newMenitem.classList.add("Menuitem");

        //TODO: Isactive check

        Menubar.appendChild(newMenitem);

        

        
        
    });