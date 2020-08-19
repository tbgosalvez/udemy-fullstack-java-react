package com.tbg.restwebservice.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Date;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
public class TodoController {

    @Autowired
    TodoRepo todoRepo;

    @GetMapping("/")
    public String retrieveHome() {
        return "Hallo Welt!";
    }

    @GetMapping("/todo-bean")
    public Todo getTodoBean() {
        return new Todo(-1, "tbg", "test", false, new Date());
    }
    
    @GetMapping("/{username}/todos")
    public List<Todo> retrieveAll(@PathVariable String username) {
        return todoRepo.findByUsername(username);
    }

    @GetMapping("/{username}/todos/{id}")
    public Todo retrieveTodo(@PathVariable String username, @PathVariable int id) {
        return todoRepo.findById(id).get();
    }

    @DeleteMapping("/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable int id) {
        todoRepo.deleteById(id);
        
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(
            @PathVariable String username,
            @PathVariable int id,
            @RequestBody Todo todo) {

        todo.setUsername(username);
        
        todoRepo.save(todo);

        return new ResponseEntity<Todo>(todo, HttpStatus.OK);
    }

    @PostMapping("/{username}/todos")
    public ResponseEntity<Void> postTodo(
            @PathVariable String username,
            @RequestBody Todo todo) {
        
        todo.setUsername(username);
        
        Todo createdTodo = todoRepo.save(todo);

        // return Location (URI) of created item
        URI uri = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(createdTodo.getId())
                .toUri();

        return ResponseEntity.created(uri).build();
    }
}
