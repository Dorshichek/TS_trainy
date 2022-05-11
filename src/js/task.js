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
const elements_1 = require("./elements");
function createTask(event) {
    console.log(window.event);
    event.preventDefault();
    const title = elements_1.UI_ELEMENTS.TASK_GENERATOR.TITLE.value;
    const text = elements_1.UI_ELEMENTS.TASK_GENERATOR.TEXT.value;
    const priority = elements_1.UI_ELEMENTS.TASK_GENERATOR.PRIORITY.value;
    if (title && text && priority) {
        const TEMPLATE = elements_1.UI_ELEMENTS.TEMPLATE;
        const ELEMENT = document.createElement('div');
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
    const INPUTS = elements_1.UI_ELEMENTS.TASK_GENERATOR.INPUTS;
    const EMPTYLINE = '';
    INPUTS.forEach((input) => {
        input["value"] = EMPTYLINE;
    });
}
function capitalLetter() {
    const inputValueIsNotEmpty = this.value !== '';
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
    const string = this.value;
    const symbol = 1;
    if (string.length > symbol) {
        this.value = this.value.slice(1);
    }
}
exports.priorityInputLength = priorityInputLength;
function clearEmptyTaskMessage() {
    const emptyTaskMessage = elements_1.UI_ELEMENTS.TASK_EMPTY[0];
    console.log(elements_1.UI_ELEMENTS.TASK_EMPTY);
    if (emptyTaskMessage) {
        emptyTaskMessage.parentNode.removeChild(emptyTaskMessage);
    }
}
exports.clearEmptyTaskMessage = clearEmptyTaskMessage;
const counter = elements_1.UI_ELEMENTS.COUNTERS.TASKS.textContent;
console.log(counter);
