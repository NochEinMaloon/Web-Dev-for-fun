console.log("Landing");

/* class Menu{
    constructor()
} */

    const QueryArgs = window.location.search.substr(1).split("&");

    class Project{
        
    }

    class Page{
        constructor(){

            

            const getQueryParams = (query) => {
                let params = {};
                new URLSearchParams(query).forEach((value, key) => {
                  let decodedKey = decodeURIComponent(key);
                  let decodedValue = decodeURIComponent(value);
                  // This key is part of an array
                  if (decodedKey.endsWith("[]")) {
                    decodedKey = decodedKey.replace("[]", "");
                    params[decodedKey] || (params[decodedKey] = []);
                    params[decodedKey].push(decodedValue);
                    // Just a regular parameter
                  } else {
                    params[decodedKey] = decodedValue;
                  }
                });
              
                return params;
            };
              
            console.log(getQueryParams(window.location));
            
/*             console.log("Creating Page");
            console.log(this);
            console.log(QueryArgs);

            console.log("NEW QUERY");
            var  */
            
            
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
    

    