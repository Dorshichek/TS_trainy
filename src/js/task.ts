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
import {UI_ELEMENTS} from "./elements";

export {
  createTask
}

function createTask(event: any): void {
  console.log(window.event)
  event.preventDefault()
  const title: string = UI_ELEMENTS.TASK_GENERATOR.TITLE.value
  const text: string = UI_ELEMENTS.TASK_GENERATOR.TEXT.value
  const priority: string = UI_ELEMENTS.TASK_GENERATOR.PRIORITY.value

  if (title && text && priority) {
    const TEMPLATE = UI_ELEMENTS.TEMPLATE
    const ELEMENT = document.createElement('div')
    ELEMENT.classList.add('task-card')
    ELEMENT.append(TEMPLATE.content.cloneNode(true))
    ELEMENT.querySelector('.task-card__title')!.textContent = title
    ELEMENT.querySelector('.task-card__text')!.textContent = text
    ELEMENT.querySelector('.task-card__priority-number')!.textContent = priority
    UI_ELEMENTS.TASKS_LIST.append(ELEMENT)
    clearEmptyTaskMessage()
    clearInputs()
  }
}

function clearInputs(): void {
  const INPUTS = UI_ELEMENTS.TASK_GENERATOR.INPUTS
  const EMPTYLINE: string = ''
  INPUTS.forEach((input: any) => {
    input["value"] = EMPTYLINE
  })
}

export function capitalLetter(): void {
  const inputValueIsNotEmpty = this.value !== ''
  if (inputValueIsNotEmpty) {
    this.value = this.value[0].toUpperCase() + this.value.slice(1)
  }
}

export function priorityInputValue(): void {
  this.value = this.value.replace(/[^0-5]/g, '');
}

export function priorityInputLength(): void {
  const string = this.value
  const symbol: number = 1
  if (string.length > symbol) {
    this.value = this.value.slice(1)
  }
}

export function clearEmptyTaskMessage(): void {
  const emptyTaskMessage = UI_ELEMENTS.TASK_EMPTY[0]
  console.log(UI_ELEMENTS.TASK_EMPTY)
  if (emptyTaskMessage) {
    emptyTaskMessage.parentNode.removeChild(emptyTaskMessage)
  }
}

const counter: number = UI_ELEMENTS.COUNTERS.TASKS.textContent
console.log(counter)