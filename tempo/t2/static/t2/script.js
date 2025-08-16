// botão de buscas digitadas
var btnBuscaDigitada = document.querySelector("#btnBuscaLocalDigitadoScript");
// campos de latitude e longitude
var latitude = document.querySelector('#latitudeScript');

var longitude = document.querySelector('#longitudeScript');

// campos para dados agora
var temperaturaAgora = document.querySelector("#scriptTemperaturaAgora");
var velocidadedoVentoAgora = document.querySelector("#scriptVelocidadedoVentoAgora");
var precipitaçãoAgora = document.querySelector("#scriptPrecipitacaoTotalAgora");
var direcaoVentoAgora = document.querySelector("#scriptDirecaoVentoAgora");
var umidadeRelativaAgora = document.querySelector("#scriptUmidadeRelativaAgora");
var condicaoAgora = document.querySelector("#scriptCondicaoMeteorologicaAgora");
// campos para os dados de 7 dias
// temperatura 7 dias
var te1 = document.querySelector("#scriptTemperatura1");
var te2 = document.querySelector("#scriptTemperatura2");
var te3 = document.querySelector("#scriptTemperatura3");
var te4 = document.querySelector("#scriptTemperatura4");
var te5 = document.querySelector("#scriptTemperatura5");
var te6 = document.querySelector("#scriptTemperatura6");
var te7 = document.querySelector("#scriptTemperatura7");
// velocidade do vento 7 dias
var vv1 = document.querySelector("#scriptVelocidadedeVento1");
var vv2 = document.querySelector("#scriptVelocidadedeVento2");
var vv3 = document.querySelector("#scriptVelocidadedeVento3");
var vv4 = document.querySelector("#scriptVelocidadedeVento4");
var vv5 = document.querySelector("#scriptVelocidadedeVento5");
var vv6 = document.querySelector("#scriptVelocidadedeVento6");
var vv7 = document.querySelector("#scriptVelocidadedeVento7");
// direção do vento 7 dias
var dv1 = document.querySelector("#scriptDirecaoVento1")
var dv2 = document.querySelector("#scriptDirecaoVento2")
var dv3 = document.querySelector("#scriptDirecaoVento3")
var dv4 = document.querySelector("#scriptDirecaoVento4")
var dv5 = document.querySelector("#scriptDirecaoVento5")
var dv6 = document.querySelector("#scriptDirecaoVento6")
var dv7 = document.querySelector("#scriptDirecaoVento7")
// umidade relativa do ar 7 dias
var uv1 = document.querySelector("#scriptUmidadeRelativa1")
var uv2 = document.querySelector("#scriptUmidadeRelativa2")
var uv3 = document.querySelector("#scriptUmidadeRelativa3")
var uv4 = document.querySelector("#scriptUmidadeRelativa4")
var uv5 = document.querySelector("#scriptUmidadeRelativa5")
var uv6 = document.querySelector("#scriptUmidadeRelativa6")
var uv7 = document.querySelector("#scriptUmidadeRelativa7")
// precipitação 7 dias
var p1 = document.querySelector("#scriptPrecipitacaoTotal1")
var p2 = document.querySelector("#scriptPrecipitacaoTotal2")
var p3 = document.querySelector("#scriptPrecipitacaoTotal3")
var p4 = document.querySelector("#scriptPrecipitacaoTotal4")
var p5 = document.querySelector("#scriptPrecipitacaoTotal5")
var p6 = document.querySelector("#scriptPrecipitacaoTotal6")
var p7 = document.querySelector("#scriptPrecipitacaoTotal7")
// condição meteorológica 7 dias
var c1 = document.querySelector("#scriptCondicaoMeteorologica1")
var c2 = document.querySelector("#scriptCondicaoMeteorologica2")
var c3 = document.querySelector("#scriptCondicaoMeteorologica3")
var c4 = document.querySelector("#scriptCondicaoMeteorologica4")
var c5 = document.querySelector("#scriptCondicaoMeteorologica5")
var c6 = document.querySelector("#scriptCondicaoMeteorologica6")
var c7 = document.querySelector("#scriptCondicaoMeteorologica7")
// horas



btnBuscaDigitada.addEventListener('click', function (e) {
    e.preventDefault();

    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude.value}&longitude=${longitude.value}&hourly=temperature_2m,relativehumidity_2m,precipitation,weathercode,windspeed_10m,winddirection_10m&timezone=auto`)

        .then(response => response.json())
        .then((data) => {

            console.log(data)
            temperaturaAgora.innerHTML = data.hourly.temperature_2m[0] + "°";
            velocidadedoVentoAgora.innerHTML = data.hourly.windspeed_10m[0] + "km/h";
            precipitaçãoAgora.innerHTML = data.hourly.precipitation[0] + "mm";
            direcaoVentoAgora.innerHTML = data.hourly.winddirection_10m[0] + "°";
            umidadeRelativaAgora.innerHTML = data.hourly.relativehumidity_2m[0] + "%";
            condicaoAgora.innerHTML = data.hourly.weathercode[0];
            // dados dia 1:
            te1.innerHTML = data.hourly.temperature_2m[24] + "°";
            vv1.innerHTML = data.hourly.windspeed_10m[24] + "km/h";
            p1.innerHTML = data.hourly.precipitation[24] + "mm";
            dv1.innerHTML = data.hourly.winddirection_10m[24] + "°";
            uv1.innerHTML = data.hourly.relativehumidity_2m[24] + "%";
            c1.innerHTML = data.hourly.weathercode[24];
            // dados dia 2:
            te2.innerHTML = data.hourly.temperature_2m[48] + "°";
            vv2.innerHTML = data.hourly.windspeed_10m[48] + "km/h";
            p2.innerHTML = data.hourly.precipitation[48] + "mm";
            dv2.innerHTML = data.hourly.winddirection_10m[48] + "°";
            uv2.innerHTML = data.hourly.relativehumidity_2m[48] + "%";
            c2.innerHTML = data.hourly.weathercode[48];
            // dados dia 3:
            te3.innerHTML = data.hourly.temperature_2m[72] + "°";
            vv3.innerHTML = data.hourly.windspeed_10m[72] + "km/h";
            p3.innerHTML = data.hourly.precipitation[72] + "mm";
            dv3.innerHTML = data.hourly.winddirection_10m[72] + "°";
            uv3.innerHTML = data.hourly.relativehumidity_2m[72] + "%";
            c3.innerHTML = data.hourly.weathercode[72];
            // dados dia 4:
            te4.innerHTML = data.hourly.temperature_2m[96] + "°";
            vv4.innerHTML = data.hourly.windspeed_10m[96] + "km/h";
            p4.innerHTML = data.hourly.precipitation[96] + "mm";
            dv4.innerHTML = data.hourly.winddirection_10m[96] + "°";
            uv4.innerHTML = data.hourly.relativehumidity_2m[96] + "%";
            c4.innerHTML = data.hourly.weathercode[96];
            // dados dia 5:
            te5.innerHTML = data.hourly.temperature_2m[120] + "°";
            vv5.innerHTML = data.hourly.windspeed_10m[120] + "km/h";
            p5.innerHTML = data.hourly.precipitation[120] + "mm";
            dv5.innerHTML = data.hourly.winddirection_10m[120] + "°";
            uv5.innerHTML = data.hourly.relativehumidity_2m[120] + "%";
            c5.innerHTML = data.hourly.weathercode[120];
            // dados dia 6:
            te6.innerHTML = data.hourly.temperature_2m[144] + "°";
            vv6.innerHTML = data.hourly.windspeed_10m[144] + "km/h";
            p6.innerHTML = data.hourly.precipitation[144] + "mm";
            dv6.innerHTML = data.hourly.winddirection_10m[144] + "°";
            uv6.innerHTML = data.hourly.relativehumidity_2m[144] + "%";
            c6.innerHTML = data.hourly.weathercode[144];
            // dados dias 7:
            te7.innerHTML = data.hourly.temperature_2m[167] + "°";
            vv7.innerHTML = data.hourly.windspeed_10m[167] + "km/h";
            p7.innerHTML = data.hourly.precipitation[167] + "mm";
            dv7.innerHTML = data.hourly.winddirection_10m[167] + "°";
            uv7.innerHTML = data.hourly.relativehumidity_2m[167] + "%";
            c7.innerHTML = data.hourly.weathercode[167];






        })

})

// adicionando novo local:
var novoLocal = document.querySelector('.scriptNovoLocalLink');
var divP = document.querySelector('#NovoLocal');
novoLocal.addEventListener('click', function (e) {
    e.preventDefault();
    divP.classList.toggle('novoLocal_hide');

})

// buscar local salvo
var btnSalvo = document.querySelector('#btnBuscarLocalSalvoScript');
var select = document.querySelector('#select');
btnSalvo.addEventListener('click', function (e) {
    e.preventDefault();

    let latitude = select.value;
})

// buscando dados por seleção



document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("btnBuscarMeteo").addEventListener("click", function (e) {
        e.preventDefault();
        console.log("Botão clicado!");
        let latitude2 = document.getElementById('latitudeBusca').innerText;
        let longitude2 = document.getElementById('longitudeBusca').innerText;
        console.log(latitude2);
        console.log(longitude2);
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude2}&longitude=${longitude2}&hourly=temperature_2m,relativehumidity_2m,precipitation,weathercode,windspeed_10m,winddirection_10m&timezone=auto`)

            .then(response => response.json())
            .then((data) => {

                console.log(data)
                temperaturaAgora.innerHTML = data.hourly.temperature_2m[0] + "°";
                velocidadedoVentoAgora.innerHTML = data.hourly.windspeed_10m[0] + "km/h";
                precipitaçãoAgora.innerHTML = data.hourly.precipitation[0] + "mm";
                direcaoVentoAgora.innerHTML = data.hourly.winddirection_10m[0] + "°";
                umidadeRelativaAgora.innerHTML = data.hourly.relativehumidity_2m[0] + "%";
                condicaoAgora.innerHTML = data.hourly.weathercode[0];
                // dados dia 1:
                te1.innerHTML = data.hourly.temperature_2m[24] + "°";
                vv1.innerHTML = data.hourly.windspeed_10m[24] + "km/h";
                p1.innerHTML = data.hourly.precipitation[24] + "mm";
                dv1.innerHTML = data.hourly.winddirection_10m[24] + "°";
                uv1.innerHTML = data.hourly.relativehumidity_2m[24] + "%";
                c1.innerHTML = data.hourly.weathercode[24];
                // dados dia 2:
                te2.innerHTML = data.hourly.temperature_2m[48] + "°";
                vv2.innerHTML = data.hourly.windspeed_10m[48] + "km/h";
                p2.innerHTML = data.hourly.precipitation[48] + "mm";
                dv2.innerHTML = data.hourly.winddirection_10m[48] + "°";
                uv2.innerHTML = data.hourly.relativehumidity_2m[48] + "%";
                c2.innerHTML = data.hourly.weathercode[48];
                // dados dia 3:
                te3.innerHTML = data.hourly.temperature_2m[72] + "°";
                vv3.innerHTML = data.hourly.windspeed_10m[72] + "km/h";
                p3.innerHTML = data.hourly.precipitation[72] + "mm";
                dv3.innerHTML = data.hourly.winddirection_10m[72] + "°";
                uv3.innerHTML = data.hourly.relativehumidity_2m[72] + "%";
                c3.innerHTML = data.hourly.weathercode[72];
                // dados dia 4:
                te4.innerHTML = data.hourly.temperature_2m[96] + "°";
                vv4.innerHTML = data.hourly.windspeed_10m[96] + "km/h";
                p4.innerHTML = data.hourly.precipitation[96] + "mm";
                dv4.innerHTML = data.hourly.winddirection_10m[96] + "°";
                uv4.innerHTML = data.hourly.relativehumidity_2m[96] + "%";
                c4.innerHTML = data.hourly.weathercode[96];
                // dados dia 5:
                te5.innerHTML = data.hourly.temperature_2m[120] + "°";
                vv5.innerHTML = data.hourly.windspeed_10m[120] + "km/h";
                p5.innerHTML = data.hourly.precipitation[120] + "mm";
                dv5.innerHTML = data.hourly.winddirection_10m[120] + "°";
                uv5.innerHTML = data.hourly.relativehumidity_2m[120] + "%";
                c5.innerHTML = data.hourly.weathercode[120];
                // dados dia 6:
                te6.innerHTML = data.hourly.temperature_2m[144] + "°";
                vv6.innerHTML = data.hourly.windspeed_10m[144] + "km/h";
                p6.innerHTML = data.hourly.precipitation[144] + "mm";
                dv6.innerHTML = data.hourly.winddirection_10m[144] + "°";
                uv6.innerHTML = data.hourly.relativehumidity_2m[144] + "%";
                c6.innerHTML = data.hourly.weathercode[144];
                // dados dias 7:
                te7.innerHTML = data.hourly.temperature_2m[167] + "°";
                vv7.innerHTML = data.hourly.windspeed_10m[167] + "km/h";
                p7.innerHTML = data.hourly.precipitation[167] + "mm";
                dv7.innerHTML = data.hourly.winddirection_10m[167] + "°";
                uv7.innerHTML = data.hourly.relativehumidity_2m[167] + "%";
                c7.innerHTML = data.hourly.weathercode[167];






            })
    })


})
