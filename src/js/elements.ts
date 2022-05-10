export const UI_ELEMENTS: any = {
  TASK_GENERATOR: {
    TITLE: document.querySelector('.task-title'),
    TEXT: document.querySelector('.task-text'),
    PRIORITY: document.querySelector('.task-priority'),
    BUTTON: document.querySelector('.task-generator__button'),
    INPUTS: document.querySelectorAll('.task-generator__input'),
  },

  TEMPLATE: document.querySelector('.task'),
  TASKS_LIST: document.querySelector('.tasks-list'),
  CARD: document.querySelector('.task-card'),

  COUNTERS: {
    TASKS: document.querySelector('.footer__counter-tasks'),
    TODO: document.querySelector('.footer__counter-tasks-todo'),
    COMPLETE: document.querySelector('.footer__counter-tasks-complete'),
  },

  TASK_EMPTY: document.querySelectorAll('.main__tasks-empty'),
}