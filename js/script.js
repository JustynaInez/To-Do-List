
{
const form = document.querySelector(".js-form");
const listElement = document.querySelector(".js-list")

const tasks = [
  
];

const render = () => {
    let htmlString = "";
    for (const task of tasks) {
        htmlString +=
        `
            <li 
            ${task.done ? "style =\"text-decoration: line-through\"" : ""} 
            >
            <button class="js-remove"> Usuń </button>

                ${task.content}
               
            </li>
    `
    }
    document.querySelector(".js-list").innerHTML = htmlString;  
};

    const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((removeButton, index) => {
    removeButton.addEventListener("click", () =>{
        task.splice(index, 1);
        render();
    });
    });


const init = () =>{
render();
form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const newTask = document.querySelector(".js-newTask").value.trim();
    if (newTask === "") {
        return;
    }

    tasks.push ({
        content: newTask,
    });

render(); 

})}

init();

};



