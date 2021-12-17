var soh=document.getElementById('soA');
var soB=document.getElementById('soB');
var soC=document.getElementById('soC');
var a = soh.value;
var max=a;
function kiemtra() {
    console.log(a)
    if(parseInt(soB.value)>max)
    {
        max=parseInt(soB.value)
    }
    if(parseInt(soC.value)>max)

    {
        max=parseInt(soC.value)
    }
    document.querySelector('#kq').innerText=max;

}