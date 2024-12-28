let lines = ["“We cannot solve problems with the kind of thinking we employed when we came up with them.” —Albert Einstein","“Learn as if you will live forever, live like you will die tomorrow.” —Mahatma Gandhi","“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” —Mark Twain","“Success is not final; failure is not fatal: It is the courage to continue that counts.” —Winston Churchill","“It is better to fail in originality than to succeed in imitation.” —Herman Melville","“I never dreamed about success. I worked for it.” —Estée Lauder","“You learn more from failure than from success. Don’t let it stop you. Failure builds character.” —Ayesha"];

function getQuotes(){
    let random = Math.floor(Math.random()*lines.length)
    document.getElementById("quote").innerHTML = lines[random];
    document.getElementById("generator").style.display ="none" ;
}