package ar.com.edu.persistence;

import ar.com.edu.entities.Tarjeta;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TarjetaRepository extends JpaRepository<Tarjeta, Long> {


}
