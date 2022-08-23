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
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @RequestMapping(value = "api/login", method = RequestMethod.POST)
    public long login(@RequestBody User user){
        boolean resultado = true;
        long init = 0;
        List<User> usuarios = userRepository.findAll();
        for (User use : usuarios){
            if(user.getUserName().equals(use.getUserName()) && user.getPassword().equals(use.getPassword())){
                init = use.getDni();
                resultado = true;
                break;

            }else{
                resultado=false;
            }
        }
        return init;
    }
}
