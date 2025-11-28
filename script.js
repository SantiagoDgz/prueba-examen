var formulario = document.getElementById("computadora-form");

function calcular() {

    var gabinete = document.getElementById("gabinetes-select").value;
    var procesador = document.getElementById("procesadores-select").value;
    var disco = document.getElementById("disco-duro").value;
    var ram = document.getElementById("ram-select").value;
    var monitor = document.getElementById("monitor-select").value;
    
    var total = 0;

    if (gabinete == "minitorre") {
        total = total + 700;
    }
       else if (gabinete == "torre"){
            total = total + 1200;
        }
         else if (gabinete == "desktop"){
            total = total + 1200;
        }
         else if (gabinete == "gamer"){
            total = total + 1200;
        }

        if (procesador == "celeron"){
            total = total + 300;
        }
            else if (procesador == "intel-i3"){
                total = total + 500;
            }
            else if (procesador == "intel-i5"){
                total = total + 500;
            }
            else if (procesador == "intel-i7"){
                total = total + 500;
            }

    if (disco == "500GB"){
        total = total + 500;
    }
        else if (disco == "750GB"){
            total = total + 750;
        }
        else if (disco == "1TB"){
            total = total + 750;
        }
        else if (disco == "250GB-SSD"){
            total = total + 750;
        }
        else if (disco == "500GB-SSD"){
            total = total + 750;
        }

    if (ram == "4gb"){
        total = total + 500;
    }

        else if (ram == "8gb"){
            total = total + 1000;
        }
         else if (ram == "16gb"){
            total = total + 1000;
        }

    if (monitor == "17-inch"){
        total = total + 1000;
    }
        else if (monitor == "19-inch"){
            total = total + 2000;
        }
        else if (monitor == "21.5-inch"){
            total = total + 3000;
        }
        else if (monitor == "24-inch"){
            total = total + 4000;
        }
        else if (monitor == "27-inch"){
            total = total + 5000;
        }
        else if (monitor == "32-inch"){
            total = total + 6000;
        }   

        if (document.getElementById("teclado").checked){
            total = total + 500;
        }
        if (document.getElementById("mouse").checked){
            total = total + 500;
        }
        if (document.getElementById("audifonos").checked){
            total = total + 500;
        }
        if (document.getElementById("webcam").checked){
            total = total + 500;
        }
        if (document.getElementById("impresora").checked){
            total = total + 500;
        }
        if (document.getElementById("alfombrilla").checked){
            total = total + 500;
        }
        if (document.getElementById("silla-gamer").checked){
            total = total + 500;
        }
        if (document.getElementById("luces-rgb").checked){
            total = total + 500;
        }
        if (document.getElementById("microfono").checked){
            total = total + 500;
        }
        if (document.getElementById("hdmi").checked){
            total = total + 500;
        }
        if (document.getElementById("ventilador").checked){
            total = total + 500;
        }
        if (document.getElementById("refrigeracion-liquida").checked){
            total = total + 500;
        }
        if (document.getElementById("soporte-monitor").checked){
            total = total + 500;
        }
        if (document.getElementById("lector-sd").checked){
            total = total + 500;
        }
        if (document.getElementById("hub-usb").checked){
            total = total + 500;
        }
        if (document.getElementById("control-xbox").checked){
            total = total + 500;
        }
        if (document.getElementById("control-playstation").checked){
            total = total + 500;
        }
        if (document.getElementById("caja-herramientas").checked){
            total = total + 500;
        }
        if (document.getElementById("bocinas").checked){
            total = total + 500;
        }
        if (document.getElementById("cable-displayport").checked){
            total = total + 500;
        }

        document.getElementById("total").innerHTML = "Total: $" + total;
}