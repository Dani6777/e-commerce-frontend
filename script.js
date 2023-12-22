
function emptyCard(){
    alert("Your Cart is empty");
}

function changeImage(){
    document.querySelector(".hover-image").src = "img/succulents-2.jpg";
}
function resetImage(){
    document.querySelector(".hover-image").src = "img/succulents-1.jpg";
}
function removeAlert(){
    document.querySelector(".alert").remove();
}