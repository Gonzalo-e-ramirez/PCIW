package ar.com.edu.controllers;

import ar.com.edu.entities.Tarjeta;
import ar.com.edu.persistence.TarjetaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TarjetaController {
    @Autowired
    private TarjetaRepository tarjetaRepository;

    @RequestMapping(value = "api/tarjeta", method = RequestMethod.POST)
    public long registrarTarjeta(@RequestBody Tarjeta tarjeta){

        tarjetaRepository.save(tarjeta);
        return 1;
    }

    @RequestMapping(value = "api/tarjeta", method = RequestMethod.GET)
    public List<Tarjeta> enviarTarjeta(){
        List<Tarjeta> tarjeta = tarjetaRepository.findAll();

        return tarjeta;
    }

    @RequestMapping(value = "api/tarjeta", method = RequestMethod.DELETE)
    public void eliminarUsuario(@RequestBody Long id){
        tarjetaRepository.deleteById(id);
    }


}
