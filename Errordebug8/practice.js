function calculateArea(width,height){
    return width*height;
}
const area=calculateArea();
let width=10; height=5;//logical error
if(area>100){
    console.log("The area is large.");
}else{
    console.log("The area is small.");
}
if(width+height>100){
    console.log("Area is greater than or equal to 100");
}