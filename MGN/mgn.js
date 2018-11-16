/* JavaScript: MGEN.JS v2.1.7-3g
 * Author: J.G. McCracken
 */

 "use strict";
/*
 * IMPORTANT!
 * Add new retreat dates to the top of the stack!
 * Format: ["Gender","Month Day, Year","Language"],
 */
var retreats=[
    ["Women","August 1, 2019","EN"],
    ["Men","April 25, 2019","EN"],
    ["Women","February 21, 2019","SP"],
    ["Men","December 6, 2018","SP"],
    ["Women","August 9, 2018","EN"],
    ["Men","April 26, 2018","EN"]
];

var rdate="";
var rgender="";
var rLang="";
var i=0;
var FORM=document.getElementById("FORM");
var MSGS=document.getElementById("MSGS");
var HELP_0=document.getElementById("HELP_0");
var HELP_1=document.getElementById("HELP_1");
var txtmsg=document.getElementById("txtmsg");
var counter=document.getElementById("counter");

function postNextRetreatDate()
{
    var curDate=Date.now();
    var nextdate=document.getElementById("nextdate");
    var header=document.getElementById("header");

    /*
     * To minimize access time, and make it easier to add new retreat dates
     * we add them to the top of the array. Likewise, the 'retreats[]' array
     * is parsed from the top down.
     */
    for (i=retreats.length-1; i > 0; i--){if (curDate > Date.parse(retreats[i][1])){continue} else {break}}
    rdate=new Date(retreats[i][1]);

    rgender=retreats[i][0].toLowerCase()=="women"?0:1;
    rLang=retreats[i][2].toLowerCase()=="en"?0:1;
    header.innerHTML=(!rLang?"ACTS Message Generator":"Generador de Mensajes ACTS");
    nextdate.innerHTML=(!rLang?((rgender?"Men":"Women")+"&apos;s Retreat Date&#58; "):(rgender?"Fecha de Retiro de Hombres:":"Fecha de Retiro de las Mujeres:"))
    + "<br />"
    + getMonthName(rdate.getMonth())+" "
    + rdate.getDate()+"-"
    + (rdate.getDate()+3)+", "
    + rdate.getFullYear();

    rfirstnamelabel.innerHTML=(!rLang?"Retreatant":(rgender?"Peregrino":"Peregrina"))+"&#58;"
    rfirstname.placeholder=(!rLang?"First name":"Nombre")
    rlastname.placeholder=(!rLang?"Last name":"Apellido")
    rcontactlabel.innerHTML=(!rLang?"Contact":"Contacto")+"&#58;"
    rcontact.placeholder=(!rLang?"First name":"Nombre contacto")
    rpartnerlabel.innerHTML=(!rLang?"Prayer Partner":(rgender?"Compañero":"Compañera")+" de Oración")+"&#58;"
    rpartner.placeholder=(!rLang?"Full name":"Nombre completo")
    rpartnerphone.placeholder=(!rLang?"Phone":"Teléfono")
    rpartneremail.placeholder=(!rLang?"Email":"Correo electrónico")
    rcandlelightlabel.innerHTML=(!rLang?"Candlelight Ceremony":"Ceremonia de las Noche de Vela")+"&#58;"
    rdestemaillabel.innerHTML=(!rLang?"Retreat Email":"Correo electrónico del Retiro")+"&#58;"
    createbtn.innerHTML="&emsp;"+(!rLang?"Create Message":"Crear un Mensaje")+"&emsp;"
    MSGS_btn.innerHTML="&emsp;"+(!rLang?"CLOSE":"CERRAR")+"&emsp;"
}

function outPutMsg()
{
    var helpbtn=document.getElementById("helpbtn");
    var rfirstname=document.getElementById("rfirstname").value
    var rlastname=document.getElementById("rlastname").value
    var rcontact=document.getElementById("rcontact").value
    var rpartner=document.getElementById("rpartner").value
    var rpartnerphone=document.getElementById("rpartnerphone").value
    var rpartneremail=document.getElementById("rpartneremail").value
    var rdestemail=document.getElementById("rdestemail").value
    var rcandlelight=document.getElementById("rcandlelight").value
    var msg=""

    if (!rfirstname){rfirstname=(!rLang?"your retreatant":(rgender?"su peregrino":"su peregrina"))}
    if (!rcontact){rcontact=(!rLang?"Hello,":"Hola,")}else{rcontact=(!rLang?"Hello ":"Hola ")+" "+rcontact+","}
    if (!rdestemail){rdestemail="email-address-here"}
    if (!rcandlelight){rcandlelight="7:15"}

    msg+=rcontact
    + "<br /><br />"
    + (!rLang?"Letters must be delivered to SEAS no later than ":"Las cartas deben enviarse a SEAS a más tardar el ")
    + getDayName(rdate.getDay()-1)
    + ", "
    + getMonthName(rdate.getMonth())
    + " "
    + (rdate.getDate()-1)
    + (!rLang?addDateSuffix(rdate.getDate()):"")+"."
    + '<ol style="padding-left:1em; line-height:normal"><li>'
    + (!rLang?"Write the letter and don&apos;t forget to sign it!":"¡Escriba la carta y no olvide firmarla!")
    + "</li><li>"
    if(!rLang)
    {
        msg+="Put the letter in an envelope, write "
        + rfirstname
        + "&apos;s full name on it and seal it."
    }
    else
    {
        msg+="Coloque la carta en un sobre, escriba el nombre completo de "
        + rfirstname
        + (rfirstname=="su peregrino" || rfirstname=="su peregrina"?" y séllela.":" y ciérrelo.")
    }
    msg+="</li><li>"
    + (!rLang?"Mail it in a second envelope to&#58;":"Envíelo por correo en un segundo sobre a:")
    + '<blockquote style="margin-left:1em">'
    + "St. Elizabeth Ann Seton Catholic Church<br />"
    + "Attn: "+(rgender?"Men":"Women")+"&apos;s ACTS Retreat<br />"
    + "6646 Addicks Satsuma Road <br />"
    + "Houston, TX 77084"
    + "</blockquote>"
    + "</li></ol>"

    + (!rLang?"If you are unable to mail the letter in time for it to reach the SEAS office by ":"Si no puede enviar la carta a tiempo para que llegue a la oficina de SEAS antes del ")
    + getDayName(rdate.getDay()-1)+", "
    + getMonthName(rdate.getMonth())+" "
    + (rdate.getDate()-1)
    + (!rLang?addDateSuffix(rdate.getDate()):"")
    + (!rLang?" and you plan to attend the send off at SEAS with your retreatant, you can drop it off ":", y tiene previsto asistir a la despedida en el SEAS con su "+(rgender?"peregrino":"peregrina")+"; puede dejarlo el ")
    + getDayName(rdate.getDay())
    + (!rLang?" and give it (secretly) to one of the people handling the check-in.":" y entregarlo (en secreto) a una de las personas que maneja el registro.")
    + "<br /><br />"
    + (!rLang?"You may also email the letter to the retreat director at":"También puede enviar la carta por correo electrónico al director del retiro a")
    + "&#58;<br />"
    + "<a href='mailto:"
    + rdestemail.toLowerCase()
    + "?body="
    + (!rLang?"Dear%20":(rgender?"Querido":"Querida"))
    + "%20"
    if (rfirstname=="your retreatant"||rfirstname=="su peregrino"||rfirstname=="su peregrina"){msg+=(!rLang?"(Name here)":"(Nombre aquí)")} else {msg+=rfirstname}
    msg+= ","
    + "&subject="
    + (!rLang?"Love%20Letter%20for%20":"Carta%20de%20Amor%20para%20")
    if (rfirstname=="your retreatant"||rfirstname=="su peregrino"||rfirstname=="su peregrina"){msg+=(!rLang?"(Name here)":"(Nombre aquí)")} else {msg+=rfirstname+"%20"+rlastname}
    msg+= "'>"
    + rdestemail+" </a><br /><br />"
    + (!rLang?"The letter will be printed and delivered confidentially.":"La carta será impresa y entregada de manera confidencial.")
    + "<br /><br />"
    + (!rLang?"<b>IMPORTANT!</b> Make sure the retreatant&apos;s full name is in the subject line. ":"<b>¡IMPORTANTE!</b> Asegúrese de que el nombre completo de los participantes se encuentre en la línea de asunto. ")
    + (!rLang?"Email letters will be accepted until noon Saturday!":"¡Las cartas por correo electrónico serán aceptadas hasta el mediodía del Sábado!")
    + "<br /><br /><b>"
    + (!rLang?"PLEASE DO NOT MENTION THE LETTERS":"¡POR FAVOR NO MENCIONEN LAS CARTAS")
    + "</b>"
    + (!rLang?" to ":" a ")
    + rfirstname
    + (!rLang?" until after the retreat is over!":" hasta que termine el retiro!")
    + "<br /><br />"
    + "<b>"
    + (!rLang?"Candlelight Ceremony":"Ceremonia de las Noche De Vela")
    + "<br /></b><i>"
    + getDayName(rdate.getDay()+2)+", "
    + getMonthName(rdate.getMonth())+" "+(rdate.getDate()+2)
    + (!rLang?addDateSuffix(rdate.getDate()):"")
    + (!rLang?" at ":" a las ")
    + getCivilTime(rcandlelight)
    + "<br />"
    + "Our Mother of Perpetual Help Retreat Center<br />"
    + "3417 West Little York Rd. <br />Houston, TX 77091</i><br /><br />"
    + (!rLang?"Upon entering the driveway of the retreat center you will be directed to the parking area, then escorted or directed to the retreat center where you will meet other family members, members of the ACTS Community, and friends. ":"Al ingresar a la entrada del centro de retiros, se le dirigirá al área de estacionamiento, luego se le escoltará o se le dirigirá al centro de retiros donde se encontrará con otros miembros de la familia, miembros de la comunidad de ACTS y amigos. ")
    + "<br /><br />"
    + (!rLang?"After preparing in song and prayer, we will greet the retreatants as they process through the room. ":"Después de prepararnos para cantar y orar, saludaremos a los participantes mientras procesan a través de la sala. ")
    + (!rLang?"Please make every effort to be there for ":"Por favor, haga todo lo posible para estar allí con ")
    + rfirstname+".<br /><br />"
    + (!rLang?"Again, please help keep this surprise a secret... ":"Nuevamente, por favor, ayude a mantener esta sorpresa en secreto ... ")
    + "<br /><br />";
    if (rpartner)
    {
        msg+=(!rLang?"If you have any questions please contact me, ":"Si tiene alguna pregunta, por favor póngase en contacto conmigo. ")
        + (!rLang?"I&apos;m happy to help any way I can. ":"Estoy feliz de ayuder de cualquier manera que pueda. ")
        + "<br /><br />"
    }

    msg+=(!rLang?"Thank you and God bless you! ":"¡Gracias y que Dios te bendiga! ")

    if (rpartner)
    {
        msg+= "<br /><br />"
        + rpartner
        + "<br />"
        + rpartnerphone
        + "<br />"
        + rpartneremail;
    }

    helpbtn.style.display="none";
    FORM.style.display="none";
    MSGS.style.display="inline";
    txtmsg.innerHTML=msg;
}

function getShortName(n){return n.substr(0,3)}

function getDHMS(ms)
{
    var days = Math.floor(ms / 86400000);
    var hours = Math.floor((ms % 86400000) / 3600000);
    var minutes = Math.floor((ms % 3600000) / 60000);
    var seconds = Math.floor((ms % 60000) / 1000);
    return days+"d "+hours+"h "+minutes+"m "+seconds+"s"
}

function getCivilTime(t)
{
    var args=t.split(":");
    var ct=(args[0] > 12?args[0]-12:args[0]);
    ct+=":"+args[1];
    ct+=" "+(args[0]>=12?"PM":"AM");
    return ct
}

function getMonthName(n)
{
    var m=[
    ["January","Enero"],
    ["February","Febrero"],
    ["March","Marzo"],
    ["April","Abril"],
    ["May","Mayo"],
    ["June","Junio"],
    [,"July","Julio"],
    ["August","Agosto"],
    ["September","Septiembre"],
    ["October","Octubre"],
    ["November","Noviembre"],
    ["December","Diciembre"]
    ];
    return m[n][rLang]
}

function getDayName(n)
{
    var w=[
    ["Sunday","Domingo"],
    ["Monday","Lunes"],
    ["Tuesday","Martes"],
    ["Wednesday","Miércoles"],
    ["Thursday","Jueves"],
    ["Friday","Viernes"],
    ["Saturday","Sábado"]
    ];
    return w[n][rLang]
}

function addDateSuffix(n)
{
    var rval="th";
    if(n==1||n==21||n==31){rval="st"}
    if(n==2||n==22){rval="nd"}
    if(n==3||n==23){rval="rd"}
    return rval
}

function refreshPage() {location.reload()}

function setupHelpBtn()
{
    var e=document.getElementById("helpbtn");

    e.onclick=function()
    {
        FORM.style.display="none";
        MSGS.style.display="none";
        this.style.display="none";
        if(rLang===0) {HELP_0.style.display="inline"}
        else {HELP_1.style.display="inline"}
    }
}

function setVersion()
{
    var ver=document.querySelector('meta[name="Version"]').content;
    document.getElementById("MYTITLE").innerHTML=ver;
    document.getElementById("VERSION").innerHTML=ver;
}

setupHelpBtn();

setVersion();
