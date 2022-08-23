package ar.com.edu.controllers;

import ar.com.edu.entities.Movie;
import ar.com.edu.entities.User;
import ar.com.edu.persistence.MovieRepository;
import ar.com.edu.persistence.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MovieController {
    @Autowired
    private MovieRepository movieRepository;

    @RequestMapping(value = "api/movie", method = RequestMethod.POST)
    public void registrarPelicula(@RequestBody Movie movie){

        movieRepository.save(movie);
    }


}
