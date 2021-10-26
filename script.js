(function() {
    "use strict";
    
    //clock

    document.addEventListener("DOMContentLoaded", function() {
        
        let c = document.getElementById("clock");
       
        //setTimeout(updateClock, 2000);
        setInterval(updateClock, 0);
        
        function updateClock() {
            
            let date = new Date();
            let h = date.getHours();
            let m = date.getMinutes();
            let s = date.getSeconds();

            if (h>12) { h=h-12; }


            if (m < 10) {
                m = "0" + m;
            }

            if (s < 10) {
                s = "0" + s;
            }

            c.innerHTML = h + ":" + m + ":" + s;
            
        };
        

        
    });
    


    
    // forms
    
    document.getElementById("form").addEventListener("submit", estimateDelivery);
    
    let e = document.getElementById("delivery");
    e.innerHTML = "0,00 &euro;";
    
    function estimateDelivery(event) {
        event.preventDefault();
        
        let linn = document.getElementById("linn");
        let v1 = document.getElementById("v1");
        let v2 = document.getElementById("v2");
        if (linn.value === "") {
            
            alert("Palun valige linn nimekirjast");
            
            linn.focus();
            
            return;    
            
            
        }
        if (linn.value === "tln" & v1.value === "present") {  
           alert("Teie tarne hind on 5€"); 
           linn.focus();
           return;    
        }
        if (linn.value === "tln" & v2.value === "contactless") {  
            alert("Teie tarne hind on 1€"); 
            linn.focus();
            return;    
         }
        if (linn.value ==="trt")
        {  
            alert("Teie tarne hind on 2.5€"); 
            linn.focus();
            return;  
        }  
        if (linn.value ==="nrv")
        {  
            alert("Teie tarne hind on 2.5€"); 
            linn.focus();
            return;  
        }  
        if (linn.value ==="prn")
        {  
            alert("Teie tarne hind on 3.5€"); 
            linn.focus();
            return;  
        }  
        else {
            
            e.innerHTML = "x,xx &euro;";
            
        }        
        
        console.log("Tarne hind on arvutatud");
    }
    
})();

// map


let mapAPIKey = "AqLLRE37SJGqIxXEYxezPUa6fF2oCzl3cvG4n05FtFIVBrotBYxchpMYYpwuxBak";

let map;

function GetMap() {
    
    "use strict";

    let centerPoint = new Microsoft.Maps.Location(
            58.38104, 
            26.71992,
             
               );

               let centerPoint2 = new Microsoft.Maps.Location(
                58.38104, 
                25.57885853606664,
                 
                   );
    
     

    map = new Microsoft.Maps.Map("#map", {
        credentials: mapAPIKey,
        center: centerPoint,
        zoom: 7,
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        disablePanning: true
    });

    


    let pushpin2 = new Microsoft.Maps.Pushpin(centerPoint2, {
        title: 'Viljandi',
       
    });



    let pushpin = new Microsoft.Maps.Pushpin(centerPoint, {
            title: 'Tartu Ülikool',
           
        });

      
        
    

        var infobox = new Microsoft.Maps.Infobox(centerPoint2, { title: 'Viljandi', description: 'Seattle', visible: false });
        infobox.setMap(map);
        Microsoft.Maps.Events.addHandler(pushpin2, 'click', function () {
            infobox.setOptions({ visible: true });
        });
        var infobox = new Microsoft.Maps.Infobox(centerPoint, { title: 'Lorem ipsum', description: 'Lorem ipsum', visible: false });
        infobox.setMap(map);
        Microsoft.Maps.Events.addHandler(pushpin, 'click', function () {
            infobox.setOptions({ visible: true });
        });


        
        
    map.entities.push(pushpin2);
    map.entities.push(pushpin);
}








// https://dev.virtualearth.net/REST/v1/Locations?q=1000 Vin Scully Ave, Los Angeles,CA&key=YOUR_KEY_HERE



// https://dev.virtualearth.net/REST/v1/Locations?q=1000 Vin Scully Ave, Los Angeles,CA&key=YOUR_KEY_HERE

