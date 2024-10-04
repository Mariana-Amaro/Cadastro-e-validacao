function validar(){
    if(document.UAM_aula.teu_nome.value ==""){
        alert("Digite seu nome!");
        document.getElementById("teu_inome").focus();
        return false;
    }

    if(document.UAM_aula.tua_senha.value ==""){
        alert("Digite a senha!");
        document.getElementById("tua_isenha").focus();
        return false;
    }
    
    var data = new Date();
var dt = new Array();       // array para guardar a data com dt[0] sendo dia, dt[1] o mês e dt[2] o ano.
var aux =document.UAM_aula.tua_data.value;
    dt.aux.split("/");

if( ((dt[0] < 1)||(dt[0] > 31)) || ((dt[1] < 1)||(dt[1] > 12)) || ((dt[2]
< dt.getFullYear()-150)||(dt[2] > dt.getFullYear())) ) {
    alert("Digite uma data válida");
    document.getElementById("tua_data").focus();
    return(false);
    }
var vm =document.UAM_aula.teu_email.value();
    if(vm.search("@")==-1){
        alert("Digite um e-mail válido!");
        document.getElementById("teu_iemail").focus();
        return false;
    }
}


