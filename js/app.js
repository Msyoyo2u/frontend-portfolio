// CODE EXPLAINED channel

const clear = document.queryselector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list")
const input = document.getElementById("input")


// class names
const CHECK= "fa-check-circle";
const UNCHECK= "fa-circle-thin";
const LINE_THROUGH = "lineThrough";


// show todays date
const options ={weekday : "long", month:"short", day:"numeric"};
const today = new Date ();

dateElement.innerHTML = today.toLocaleDateStrinf("en-US", options);
// add to do funtion

function addtodo (todo, id, done, trash){
	if(trash){ return; }
	const DONE =done ? CHECK : UNCHECK;
	const LINE =done ? LINE_THROUGH : "";
	//let LIST, id; 

  const item = `<li class="item">
<i class="fa ${DONE} co" job="complete" id="${id}"></i>
<p class="text">${LINE}">${todo}</p>
<i class="fa fa-trash-o de" job="delete" id="${id}"></i> 
</li>`
;

const postion = "beforeend";

list.innertAdjacenttHTML(postion, item);

//add an item to the list user the enter key
document.addEventListener("keyup",function(even){
if(event.keyCode ==13){
	const toDo = input.value;

	// if the input isn't empty
	if (toDo){
	addToDp(toDo);

	LIST.push({
	name : toDo?
	id : id
}
};
input.value=""
addToDO("coffe", 1, false, true);

	// body...
}

