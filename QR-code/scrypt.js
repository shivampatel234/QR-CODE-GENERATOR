let btn = document.querySelector("button");
let qr = document.querySelector(".qr");
let qrImage = document.querySelector("#qrImage")
let qrtext = document.querySelector("#qrText")

console.log(qrtext.value)



function qrCode(){
    qrImage.src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value

    
}

btn.addEventListener("click",() =>{
    qr.classList.remove("img")
    qrCode()

})

