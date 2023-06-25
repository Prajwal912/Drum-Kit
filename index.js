//if we use the handleClick() inside the eventlisterner then it will be the straight up function call so thats why we dont use ()
document.querySelector("button").addEventListener("click", handleClick)

function handleClick() {
    alert("i got clicked")
}