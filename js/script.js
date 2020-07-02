
{


    const tasks = [

    ];
    const addNewTask = (newTask) => {
        tasks.push({
            content: newTask,
        });

        render();
    };

    const removeTask = (index) => {
        tasks.splice(index, 1);
        render();

    }

    const doneTask = (index) => {
        tasks[index].done = !tasks[index].done;
        render();
    }

    const render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString +=
          `
           <button  class="js-remove buttonRemove grid"> &#10006; </button>
               
            <span class = "div__item"
            ${task.done ? "style =\"text-decoration: line-through\"" : ""} 
            >
             ${task.content}
            </span>
            
             <button class="js-done buttonDone grid"> &#10004;</button>  
                
          `
        }
        document.querySelector(".js-list").innerHTML = htmlString;

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
        });
    };



    const init = () => {
        render();
        const form = document.querySelector(".js-form");

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            document.querySelector(".js-newTask").focus();
            const newTask = document.querySelector(".js-newTask").value.trim();
            if (newTask === "") {
                return;
            }

            addNewTask(newTask);

        })
    }

    init();

};



