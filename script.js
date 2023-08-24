//your code here!
console.log("called")
let listContainer=document.getElementById("infi-list")
for(let i=0;i<20;i++){
	const listiitem=document.createElement("li")
	
	listiitem.textContent=`Item-${i}`
	// console.log("called2")

	listContainer.appendChild(listiitem)

}

