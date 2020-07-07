
{
    let tasks = [];

    const addNewTask = (newTask) => {
           tasks =
           [
            ...tasks,
            {content: newTask}]
             render();
             };

    const removeTask = (index) => {
        tasks = [
         ...tasks.slice(0, index),
         ...tasks.slice(index + 1)
         ]
        render();
    }

    const doneTask = (index) => {
           tasks[index].done = !tasks[index].done;
        render();
    }

    const bindEvents = () => {
    
    const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((removeButton, index) => {
        removeButton.addEventListener("click", () => {
            removeTask(index);
        });
    });

    const toggleDoneButtons = document.querySelectorAll(".js-done");

    toggleDoneButtons.forEach((toggleDoneButton, index) => {
        toggleDoneButton.addEventListener("click", () => {
            doneTask(index);
        });
    });}

    const render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString +=
          ` <button class="js-done buttonDone grid">
            ${task.done ? "&#10004;" : ""} 
            </button>  
             
            <span class = "div__item
            ${task.done ? "div__item--done" : ""}"
            >
             ${task.content}
            </span>
            
            <button  class="js-remove buttonRemove grid">
            &#10006;
            </button>
          `
        }
        document.querySelector(".js-list").innerHTML = htmlString;

        let htmlStringHeadline = "";
        if (htmlString)
        {htmlStringHeadline += ` 
        <button class="buttonsShowAfterClick"> Ukończ wszystkie </button>
        <button class="buttonsShowAfterClick"> Ukryj ukończone </button>`}
      
        document.querySelector(".js-headline").innerHTML = htmlStringHeadline;

        bindEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
    
    const newTaskElement = document.querySelector(".js-newTask");
    const newTask = newTaskElement.value.trim();

        if (newTask !== ""){
        addNewTask(newTask);
        newTaskElement.value = "";
        }
       newTaskElement.focus();
        
    };


    const init = () => {
        render();
        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit)
    
    }

    init();

};



