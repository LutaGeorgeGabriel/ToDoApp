package toDoApp;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.json.JSONArray;

import java.util.ArrayList;
import java.util.List;

public class ToDoUtils {

    public static List<ToDoItem> transformToDos (String json){
        try{
            GsonBuilder builder = new GsonBuilder();
            Gson gson = builder.create();
            JSONArray array = new JSONArray(json);
            List<ToDoItem> toDos = new ArrayList<ToDoItem>();
            for(int i=0;i<array.length();i++){
                ToDoItem toDoItem = gson.fromJson(array.getString(i), ToDoItem.class);
                toDos.add(toDoItem);
            }
            return toDos;
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    public static String getJSONFromToDos(List<ToDoItem> toDoItems) {
        Gson gson = new Gson();
        return gson.toJson(toDoItems);
    }
}
