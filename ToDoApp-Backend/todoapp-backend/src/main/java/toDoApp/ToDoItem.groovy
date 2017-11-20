package toDoApp

import groovy.transform.Canonical


@Canonical
class ToDoItem {
    UUID uuid
    String toDo
}
