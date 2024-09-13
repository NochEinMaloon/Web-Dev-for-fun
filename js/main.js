console.log("Landing");

/* class Menu{
    constructor()
} */


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