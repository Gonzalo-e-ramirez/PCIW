package ar.com.edu.controllers;

import ar.com.edu.entities.User;
import ar.com.edu.persistence.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @RequestMapping(value = "api/user", method = RequestMethod.POST)
    public long registrarUsuario(@RequestBody User user){

        userRepository.save(user);
        return 1;
    }

    @RequestMapping(value = "api/user", method = RequestMethod.GET)
    public List<User> enviarUsuario(){
        List<User> user = userRepository.findAll();

        return user;
    }

    @RequestMapping(value = "api/user", method = RequestMethod.DELETE)
    public void eliminarUsuario(@RequestBody Long id){
        userRepository.deleteById(id);
    }

}
