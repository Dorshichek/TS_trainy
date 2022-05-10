"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var elements_1 = require("./elements");
var task_1 = require("./task");
document.addEventListener("DOMContentLoaded", init);
function init() {
    elements_1.UI_ELEMENTS.TASK_GENERATOR.BUTTON.addEventListener('click', task_1.createTask);
    elements_1.UI_ELEMENTS.TASK_GENERATOR.TITLE.addEventListener('input', task_1.capitalLetter);
    elements_1.UI_ELEMENTS.TASK_GENERATOR.TEXT.addEventListener('input', task_1.capitalLetter);
    elements_1.UI_ELEMENTS.TASK_GENERATOR.PRIORITY.addEventListener('input', task_1.priorityInputValue);
    elements_1.UI_ELEMENTS.TASK_GENERATOR.PRIORITY.addEventListener('input', task_1.priorityInputLength);
}
