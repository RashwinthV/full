function sub(){
    var a=document.getElementById("fn").value;
    var b=document.getElementById("ln").value;
    var c=document.getElementById("ph").value;
    var d=document.getElementById("gen").value;
    var e=document.getElementById("mail").value;
    var f=document.getElementById("pass").value; 

    localStorage.setItem("name",a);
    localStorage.setItem("lastname",b);
    localStorage.setItem("phoneno" ,c);
    localStorage.setItem("Gender",d);
    localStorage.setItem("mail",e);
    localStorage.setItem("password",f);
}