function sendToWhatsapp(){
    let number = "+919361766047";
    
    var url = "https://wa.me/" + number + "?text=";

    window.open(url, '_blank').focus();
}