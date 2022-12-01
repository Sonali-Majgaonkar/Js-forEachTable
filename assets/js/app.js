var cl=console.log;

var ages = [12, 13, 14, 15, 2, 6, 36, 58, 59, 23, 45, 75, 8, 6];

for(var i=0;i<ages.length;i++){
    cl(ages[i]);
}

cl("Reverse Array");

for(var i=ages.length-1;i>=0;i--){
    cl(ages[i])
}

cl("ForEcah Loop");

//forEach >>is a method
//ForEcah fun accepts another function as argument.
//anonymus Function>>A fun without name
//callBack Function>>A function which is passes as argument/parameters in another function

//Syntac of forEach Loop: array-name.forEach(callBackFunction(parameters)){
//    parameter>>each and every elements of "array-name" array
//}


ages.forEach(function(age){
    cl(age);
})
cl("skill Array");


var skills = ["HTML5", "CSS3", "javaScript", "TypeScript", "Angular"];

//second parameter of callBack fun is represents index number and it is not manditory

skills.forEach(function(skill,i){
    cl(i+1,"I Love ",skill);
})

cl("forEach Using String interpolation")

var result=`<ul class="list-group">`;
skills.forEach(function(skill){
    result+=`<li class="list-group-item">I love ${skill}.</li>`
})

result+=`</ul>`
cl(result);
var skillsInfoDiv=document.getElementById("skillsInfo");
skillsInfoDiv.innerHTML=result;
/*array:[ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];
*/
   var data=[
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

  var elementInfo=document.getElementById('elementInfo');

  var resultElement=``;

  data.forEach(function(ele,i){
    resultElement+=`<tr>
        <td>${i+1}</td>
        <td>${ele.name}</td>
        <td>${ele.weight}</td>
        <td>${ele.symbol}</td>
        <td>${ele.position}</td>
    </tr>`
  })
  elementInfo.innerHTML=resultElement;


var hobbiesArray=['Traveling','Reading','Listing Music','Watchinf Movies','Internet Suffering','Cooking','Playing Games'];

var hobbiesInfo=document.getElementById('hobbiesInfo');

var resultHobbie=`<ul class='list-group'>`;

hobbiesArray.forEach(function(hobby){
            resultHobbie+=`<li class='list-group-item'>I love ${hobby}</li>`
})
resultHobbie+=`</ul>`;
hobbiesInfo.innerHTML=resultHobbie;

var stdArray = [{
    fname: "Tony",
    lname: 'Stark',
    nickName: 'Ironman',
    email: 'tony@stark.com'
},
{
    fname: "Peter",
    lname: 'Parkar',
    nickName: 'SpiderMan',
    email: 'peter@stark.com'
},
{
    fname: "Bruce",
    lname: 'Wayne',
    nickName: 'BatMan',
    email: 'bruce@wayne.com'
},
{
    fname: "Stephen",
    lname: 'Strange',
    nickName: 'Dr. Strange',
    email: 'dr@strange.com'
},
]
var studInfo=document.getElementById('studInfo');

var resultStud=``;
stdArray.forEach(function(stud,index){
    resultStud+=`<tr>
        <td>${index+1}</td>
        <td>${stud.fname}</td>
        <td>${stud.lname}</td>
        <td>${stud.nickName}</td>
        <td>${stud.email}</td>
    </tr>`
})
studInfo.innerHTML=resultStud;