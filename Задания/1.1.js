function Min()
{
d=document
var a = Number(d.form1.A.value)
var b = Number(d.form1.B.value)
var x1 = Math.min(a,b)
d.form1.x1.value=x1;
}