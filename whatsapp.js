function sendToWhatsapp(){
    let number = "+91 ----------";
    
    var url = "https://wa.me/" + number + "?text=";

    window.open(url, '_blank').focus();
}
