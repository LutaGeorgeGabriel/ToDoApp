package toDoApp;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
public class ToDoEndpointController {

    @RequestMapping(method = POST, value = "/addToDos")
    public static void addToDo(@RequestBody String jsonToDO) {
        System.out.println("POST");
        ToDoList.addToDos(ToDoUtils.transformToDos(jsonToDO));
    }

    @RequestMapping(method = GET, value = "/getToDos")
    public static String getToDos() {
        System.out.println("GET");
        return ToDoUtils.getJSONFromToDos(ToDoList.getToDos());
    }
}
