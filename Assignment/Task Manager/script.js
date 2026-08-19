// DOM Selectors
const taskForm = document.getElementById('task-form');       // getElementById
const taskTitleInput = document.getElementById('task-title');
const taskDescInput = document.getElementById('task-desc');
const taskList = document.querySelector('#task-list');       // querySelector

// TASK MANAGER

// Handle form submission
taskForm.addEventListener('submit', function (e) {
  e.preventDefault(); // prevent page refresh

  const title = taskTitleInput.value.trim();
  const desc = taskDescInput.value.trim();

  if (title === '' || desc === '') return;

  addTask(title, desc);

  taskForm.reset();
});

// Create a new task element and add it to the page
function addTask(title, desc) {
  const task = document.createElement('div');
  task.className = 'task';

  const taskTitle = document.createElement('h3');
  taskTitle.textContent = title;

  const taskDesc = document.createElement('p');
  taskDesc.textContent = desc;

  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete';
  completeBtn.className = 'complete-btn';

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';

  task.appendChild(taskTitle);
  task.appendChild(taskDesc);
  task.appendChild(completeBtn);
  task.appendChild(deleteBtn);

  taskList.appendChild(task);
}

/* Event delegation: one listener on the parent (#task-list) handles
clicks on Complete and Delete buttons for every task (event bubbling) */
taskList.addEventListener('click', function (e) {
  if (e.target.classList.contains('complete-btn')) {
    const task = e.target.closest('.task');
    task.classList.toggle('completed');

    const completeBtn = e.target;
    completeBtn.textContent = task.classList.contains('completed') ? 'Completed' : 'Complete';
  }

  if (e.target.classList.contains('delete-btn')) {
    const task = e.target.closest('.task');
    task.remove();
  }
});

// Example use of getElementsByClassName
function countTasks() {
  const tasks = document.getElementsByClassName('task');
  console.log('Total tasks:', tasks.length);
}

// Example use of querySelectorAll
function countCompletedTasks() {
  const completed = document.querySelectorAll('.task.completed');
  console.log('Completed tasks:', completed.length);
}


// EVENT PROPAGATION DEMO

const outer = document.getElementById('outer');
const middle = document.getElementById('middle');
const innerBtn = document.getElementById('inner-btn');
const demoLink = document.getElementById('demo-link');
const log = document.getElementById('log');

function logMessage(msg) {
  const p = document.createElement('p');
  p.textContent = msg;
  log.appendChild(p);
}

// Outer div listener - this shows bubbling normally reaches here
outer.addEventListener('click', function () {
  logMessage('Outer div click handler ran (event bubbled up)');
});

// Middle div listener - stops the event from bubbling further to "outer"
middle.addEventListener('click', function (e) {
  logMessage('Middle div click handler ran');
  e.stopPropagation(); // prevents "outer" listener from running
});

// Inner button has TWO click listeners.
innerBtn.addEventListener('click', function (e) {
  logMessage('Inner button - Listener 1 ran');
  e.stopImmediatePropagation(); // stopImmediatePropagation() stops the second listener on the SAME element from running.
});

innerBtn.addEventListener('click', function () {
  logMessage('Inner button - Listener 2 ran');
});

// preventDefault demo on a link - stops the browser from navigating away
demoLink.addEventListener('click', function (e) {
  e.preventDefault();
  logMessage('Link click default action was prevented (page did not navigate)');
});
