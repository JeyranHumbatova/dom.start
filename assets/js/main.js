const inp=document.querySelectorAll("input")[0];
const inp2=document.querySelectorAll("input")[1];
const btn=document.querySelector("button");
let write=[];

function addArr() {
    write.push(inp.value);
    document.getElementById("text").style.color= inp2.value;
    document.getElementById("text").innerHTML = write;
    inp.value="";
}
