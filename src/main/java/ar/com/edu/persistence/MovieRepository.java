package ar.com.edu.persistence;

import ar.com.edu.entities.Movie;
import ar.com.edu.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Integer> {
}
