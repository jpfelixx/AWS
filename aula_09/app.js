function funcao(){
    alert("usuário deve digitar nota entre 0 e 10")
}

function confirme(){
    var x;
    var r = confirm("sim")

    if(r){
        x = "OK";
    }
    else {
        x = "NÃO";
    }
    document.write("Vocẽ pressionou "+ x);
}
