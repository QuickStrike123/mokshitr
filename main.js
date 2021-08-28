var NameOfGuestArray = [];

function search(){

    var s = document.getElementById("s1").value;

    var found = 0;

    var j;

    for (j = 0 ; j < NameOfGuestArray.length ; j++){

        if (s==NameOfGuestArray[j]){

            found = found + 1;

        }

    }

    document.getElementById("Search").innerHTML = " Name Found " + found + "Times/s "

    console.log(" Name Found " + found + "Times/s ");

}

function Show2(){
    
    var DisplayStudentArray = [];

    var GuestName = document.getElementById("Name").value;

    console.log(GuestName);

    NameOfGuestArray.push(GuestName);

    var LenghtOfNameOfGuestArray = NameOfGuestArray.length;

    console.log(LenghtOfNameOfGuestArray);

    for (var k = 0 ; k < LenghtOfNameOfGuestArray ; k++ ){

        DisplayStudentArray.push( "<h4>" + NameOfGuestArray[k] + "</h4>" );

        console.log(DisplayStudentArray);


    }

    console.log(DisplayStudentArray);

    document.getElementById("Also-List-Of-Names").innerHTML = DisplayStudentArray;

    document.getElementById("Also-List-of-Names").innerHTML = DisplayStudentArray;
    
    document.getElementById("Show button").style.display = "none";

    document.getElementById("Show button 2").style.display = "inline-block";

}

function Show() {

    var DisplayStudentArray = [];

    var GuestName = document.getElementById("Name").value;

    console.log(GuestName);

    NameOfGuestArray.push(GuestName);

    var LenghtOfNameOfGuestArray = NameOfGuestArray.length;

    console.log(LenghtOfNameOfGuestArray);

    for (var k = 0 ; k < LenghtOfNameOfGuestArray ; k++ ){

        DisplayStudentArray.push( "<h4>" + NameOfGuestArray[k] + "</h4>" );

        console.log(DisplayStudentArray);


    }

    console.log(DisplayStudentArray);

    document.getElementById("List-of-Names").innerHTML = DisplayStudentArray;

    document.getElementById("Also-List-of-Names").innerHTML = DisplayStudentArray;
    
    document.getElementById("Show button").style.display = "none";

    document.getElementById("Show button 2").style.display = "inline-block";

}

function Sorting() {

    NameOfGuestArray.sort();

    console.log(NameOfGuestArray);

    var DisplayStudentArraySorting = [];

    var LenghtOfNameOfGuestArray = NameOfGuestArray.length;

    console.log(LenghtOfNameOfGuestArray);

    for (var l = 0 ; l < LenghtOfNameOfGuestArray ; l++) {

        DisplayStudentArraySorting.push("<h4>" + NameOfGuestArray[l] + "</h4>");

        console.log(DisplayStudentArraySorting);

    }

    document.getElementById("Sorting").innerHTML = NameOfGuestArray;

}