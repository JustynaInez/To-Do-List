
{
    let tasks = [];
    let hideAllTasksDone = false;

    const addNewTask = (newTask) => 
    {
           tasks =
           [ 
            ...tasks,
            {content: newTask}
            ]
             render();
    };

    const removeTask = (index) => 
    {
        tasks = 
             [...tasks.slice(0, index),
              ...tasks.slice(index + 1)
             ]
        render();
    };

    const doneTask = (index) => {
    tasks = [ 
        ...tasks.slice(0, index),
    {
        ...tasks[index],
        done: !tasks[index].done
    },
    ...tasks.slice(index +1),
    ];
        render();
}

    const markAllTasksDone = () => {
    tasks = tasks.map((task) => ({
        ...task,
        done: true,
    }));
    render();
 }

    const toggleHideDoneButtons = ()=>{
    hideAllTasksDone = !hideAllTasksDone;
    render();
}

    const bindEventsRemove = () => 
    {
    const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => 
        {
        removeButton.addEventListener("click", () =>
        {
            removeTask(index);
        });
    });}
    
    const bindEventsDone = () => {

    const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => 
    {
        toggleDoneButton.addEventListener("click", () => 
        {
            doneTask(index);
        });
    });}

    const renderButtons =() => {
        const buttonsElement = document.querySelector(".js-headline");
    
            if (!tasks.length){
            buttonsElement.innerHTML = "";
            return
            }

            {
                buttonsElement.innerHTML =` 
            <button class="buttonsShowAfterClick js-doneAll" ${tasks.every(({done})=> done) ? "disabled" : "" }> Ukończ wszystkie </button>
           
            <button class="buttonsShowAfterClick js-hideAll">${hideAllTasksDone ? "Pokaż wszystkie" : "Ukryj ukończone"} </button>`
            }
    };

    const renderTask = () => {
        let htmlString = "";
        for (const task of tasks)
        {
            htmlString +=
          `<div class ="list ${task.done && hideAllTasksDone ? "list--hidden" :""}">
           <button class="js-done buttonDone">
            ${task.done ? "&#10004;" : ""} 
            </button>  
             
            <span class = "div__item
            ${task.done ? "div__item--done" : ""}"
            >
             ${task.content}
            </span>
            
            <button  class="js-remove buttonRemove">
            &#10006;
            </button>
            </div>
          `
        }
        document.querySelector(".js-list").innerHTML = htmlString;
    };
            
    bindButtonsEvents = () => {
        const markAllDoneButtons = document.querySelector(".js-doneAll");

            if(markAllDoneButtons){
            markAllDoneButtons.addEventListener("click", markAllTasksDone)
            };

        const hideAllDoneTasks = document.querySelector(".js-hideAll");

            if(hideAllDoneTasks) {
            hideAllDoneTasks.addEventListener("click", toggleHideDoneButtons)
            };
    };    

    const render = () =>{
        
        renderTask();
        renderButtons();
   
        bindEventsRemove();
        bindButtonsEvents();
        bindEventsDone ();
    };

    const onFormSubmit = (event) => 
    {
        event.preventDefault();
    
        const newTaskElement = document.querySelector(".js-newTask");
        const newTask = newTaskElement.value.trim();

        if (newTask !== "")
        {
        addNewTask(newTask);
        newTaskElement.value = "";
        }
       newTaskElement.focus();
        
    };


    const init = () =>
    {
        render();
        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit)
    
    }

    init();

};



