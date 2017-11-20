package toDoApp

import groovy.transform.Canonical

@Canonical
class ToDoList {
    static List<ToDoItem> toDos = []

    static void addToDos(List<ToDoItem> toDoItems) {
        toDoItems.each {
            toDos.add(it)
        }
    }

    static List<ToDoItem> getToDos() {
        return toDos
    }
}
