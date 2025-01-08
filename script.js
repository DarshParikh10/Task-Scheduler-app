document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("new-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get input values
    const title = document.getElementById("task-title").value;
    const desc = document.getElementById("task-desc").value;
    const deadline = document.getElementById("task-deadline").value;

    if (!title.trim() || !deadline) {
      alert("Please fill out the required fields.");
      return;
    }

    // Create task element
    const task = document.createElement("li");
    task.classList.add("task");

    const taskTitle = document.createElement("h3");
    taskTitle.textContent = title;

    const taskDesc = document.createElement("p");
    taskDesc.textContent = desc || "No description provided.";

    const taskDeadline = document.createElement("p");
    taskDeadline.classList.add("deadline");
    taskDeadline.textContent = `Deadline: ${new Date(deadline).toLocaleDateString()}`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      task.style.animation = "fadeOut 0.5s ease";
      task.addEventListener("animationend", () => task.remove());
    });

    // Append elements to task
    task.appendChild(taskTitle);
    task.appendChild(taskDesc);
    task.appendChild(taskDeadline);
    task.appendChild(deleteButton);

    // Add task to the list
    taskList.appendChild(task);

    // Clear the form
    form.reset();
  });
});

/* Task fade-out animation */
@keyframes fadeOut {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.9);
  }
}
