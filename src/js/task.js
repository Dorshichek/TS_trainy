"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearEmptyTaskMessage = exports.priorityInputLength = exports.priorityInputValue = exports.capitalLetter = exports.createTask = void 0;
// class Task {
//   public id: number
//   public title: string
//   public text: string
//   public priority: number
//
//   constructor(title: string, text: string, priority: number) {
//     this.title = title
//     this.text = text
//     this.priority = priority
//   }
//
//
// }
var elements_1 = require("./elements");
function createTask() {
    event.preventDefault();
    var title = elements_1.UI_ELEMENTS.TASK_GENERATOR.TITLE.value;
    var text = elements_1.UI_ELEMENTS.TASK_GENERATOR.TEXT.value;
    var priority = elements_1.UI_ELEMENTS.TASK_GENERATOR.PRIORITY.value;
    if (title && text && priority) {
        var TEMPLATE = elements_1.UI_ELEMENTS.TEMPLATE;
        var ELEMENT = document.createElement('div');
        ELEMENT.classList.add('task-card');
        ELEMENT.append(TEMPLATE.content.cloneNode(true));
        ELEMENT.querySelector('.task-card__title').textContent = title;
        ELEMENT.querySelector('.task-card__text').textContent = text;
        ELEMENT.querySelector('.task-card__priority-number').textContent = priority;
        elements_1.UI_ELEMENTS.TASKS_LIST.append(ELEMENT);
        clearEmptyTaskMessage();
        clearInputs();
    }
}
exports.createTask = createTask;
function clearInputs() {
    var INPUTS = elements_1.UI_ELEMENTS.TASK_GENERATOR.INPUTS;
    var EMPTYLINE = '';
    INPUTS.forEach(function (input) {
        input["value"] = EMPTYLINE;
    });
}
function capitalLetter() {
    var inputValueIsNotEmpty = this.value !== '';
    if (inputValueIsNotEmpty) {
        this.value = this.value[0].toUpperCase() + this.value.slice(1);
    }
}
exports.capitalLetter = capitalLetter;
function priorityInputValue() {
    this.value = this.value.replace(/[^0-5]/g, '');
}
exports.priorityInputValue = priorityInputValue;
function priorityInputLength() {
    var string = this.value;
    if (string.length > 1) {
        this.value = this.value.slice(1);
    }
}
exports.priorityInputLength = priorityInputLength;
function clearEmptyTaskMessage() {
    var taskMessage = elements_1.UI_ELEMENTS.TASK_EMPTY[0];
    if (taskMessage) {
        taskMessage.parentNode.removeChild(taskMessage);
    }
}
exports.clearEmptyTaskMessage = clearEmptyTaskMessage;
var counter = elements_1.UI_ELEMENTS.COUNTERS.TASKS.textContent;
console.log(counter);
function taskCounter() {
}
