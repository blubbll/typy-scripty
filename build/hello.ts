//generic hello function
const hello = (target: string) => {
    return `Hello, ${target}!`;
}

//display out
document.querySelectorAll("main")[0].innerHTML = hello("world");