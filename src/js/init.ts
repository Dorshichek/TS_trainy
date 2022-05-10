import {UI_ELEMENTS} from "./elements";
import {capitalLetter, createTask, priorityInputLength, priorityInputValue} from "./task";

document.addEventListener("DOMContentLoaded", init)

function init() {
  UI_ELEMENTS.TASK_GENERATOR.BUTTON.addEventListener('click', createTask)
  
  UI_ELEMENTS.TASK_GENERATOR.TITLE.addEventListener('input', capitalLetter)

  UI_ELEMENTS.TASK_GENERATOR.TEXT.addEventListener('input', capitalLetter)

  UI_ELEMENTS.TASK_GENERATOR.PRIORITY.addEventListener('input', priorityInputValue)

  UI_ELEMENTS.TASK_GENERATOR.PRIORITY.addEventListener('input', priorityInputLength)
}