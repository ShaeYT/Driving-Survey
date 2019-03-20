var firstname;
var lastname;
var age;
var birthday;
var eyecolor;
var you = {
    firstnameProp : "",
    lastnameProp : "",
    ageProp : 0,
    birthdayProp : 0,
    eyecolorProp : "",
    if: function(){
        if(age>=18){
    alert("You Can Get Your Driver's License");
    }else if(age<=17 && age>=16){
        alert("You Can Get Your Learner's Permit");
        }else if(age<16){
            alert("You Are TOO Young To Drive");
            }
        },
    finale: function(){
        document.getElementById("target1").innerHTML=this.firstnameProp;
        document.getElementById("target2").innerHTML=this.lastnameProp;
        document.getElementById("target3").innerHTML=this.ageProp;
        document.getElementById("target4").innerHTML=this.birthdayProp;
        document.getElementById("target5").innerHTML=this.eyecolorProp;
        }
    };

document.getElementById('btn').addEventListener('click', function() {
    firstname = document.getElementById("fname").value;
    lastname = document.getElementById("lname").value;
    age = document.getElementById("age").value;
    birthday = document.getElementById("birthday").value;
    eyecolor = document.getElementById("eyecolor").value;
    you.firstnameProp = firstname;
    document.getElementById("lname").innerHTML= lastname;
    you.lastnameProp = lastname;
    document.getElementById("age").innerHTML= age;
    you.ageProp = age;
    document.getElementById("birthday").innerHTML = birthday;
    var date= document.getElementById("birthday").value;
    you.birthdayProp = birthday;
    document.getElementById("eyecolor").innerHTML = eyecolor;
    var formInput = document.getElementById("numberForm");
    you.eyecolorProp= eyecolor;
    you.if();
    you.finale();
});