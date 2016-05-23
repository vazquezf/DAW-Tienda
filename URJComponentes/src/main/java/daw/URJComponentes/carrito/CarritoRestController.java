package daw.URJComponentes.carrito;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/carrito")
public class CarritoRestController {

	private static final Logger log = LoggerFactory.getLogger(CarritoRestController.class);

	@Autowired
	private CarritoRepository repository;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public List<Carrito> getProductos() {
		return repository.findAll();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Carrito> getCarrito(@PathVariable long id) {

		log.info("Get producto {}", id);

		Carrito carrito = repository.findOne(id);
		if (carrito != null) {
			return new ResponseEntity<>(carrito, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Carrito nuevoCarrito(@RequestBody Carrito carrito) {

		repository.save(carrito);

		return carrito;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Carrito> actulizaCarrito(@PathVariable long id, @RequestBody Carrito updatedCarrito) {

		Carrito carrito = repository.findOne(id);
		if (carrito != null) {

			updatedCarrito.setId(id);
			repository.save(updatedCarrito);

			return new ResponseEntity<>(updatedCarrito, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Carrito> borraCarrito(@PathVariable long id) {

		if (repository.exists(id)) {
			repository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
