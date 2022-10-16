window.addEventListener("load", () => {
  const form = document.querySelector("#create-task");
  const input = document.querySelector("#create-new-task-input");
  const list_element = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    //disables refresh
    e.preventDefault();

    //checks of input is empty
    const task = input.value;
    if (!task) {
      alert("Enter a task");
      return;
    }

    const task_element = document.createElement("div");
    task_element.classList.add("task");

    const task_content_element = document.createElement("div");
    task_content_element.classList.add("contents"); //index.html line 27

    task_element.appendChild(task_content_element);

    const task_input_element = document.createElement("input");
    task_input_element.classList.add("text"); //index.html line 30
    task_input_element.type = "text";
    task_input_element.value = task;
    task_input_element.setAttribute("readonly", "readonly");

    task_content_element.appendChild(task_input_element);

    //creating actions and adding to the list element
    const task_actions_element = document.createElement("div");
    task_actions_element.classList.add("actions");

    const task_edit_element = document.createElement("button");
    task_edit_element.classList.add("edit");
    task_edit_element.innerHTML = "Edit";

    const task_delete_element = document.createElement("button");
    task_delete_element.classList.add("delete");
    task_delete_element.innerHTML = "Delete";

    task_actions_element.appendChild(task_edit_element);
    task_actions_element.appendChild(task_delete_element);
    task_element.appendChild(task_actions_element);

    list_element.appendChild(task_element);

    //clears the input box after submitting
    input.value = "";

    //edit function
    task_edit_element.addEventListener("click", () => {
      if (task_edit_element.innerText.toLowerCase() == "edit") {
        task_input_element.removeAttribute("readonly");
        task_input_element.focus();
        task_edit_element.innerText = "Save";
      } else {
        task_input_element.setAttribute("readonly", "readonly");
        task_edit_element.innerText = "Edit";
      }
    });

    //removing task from list
    task_delete_element.addEventListener("click", () => {
      list_element.removeChild(task_element);
    });
  });
});
