//Selecting "cursor" and "body" using DOM.
const cursor=document.getElementById("cursor");
const body=document.getElementById("body");
console.log(body,cursor);
function movement(details) {
    console.log(details.clientX,details.clientY);
    cursor.style.left=details.clientX+"px";
    cursor.style.top=details.clientY+"px"; 
    
    const bodyWidth=50;
    console.log(cursor.style.left);
    console.log(cursor.style.left>="658px");
    
    if (details.clientX<900) {
        body.style.backgroundColor="red";

    }
    else {
        body.style.backgroundColor="lightblue";
    }

}

body.addEventListener("mousemove",movement)