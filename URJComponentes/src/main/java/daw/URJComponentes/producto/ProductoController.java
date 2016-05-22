package daw.URJComponentes.producto;

import java.util.Collection;
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
@RequestMapping("/productos")
public class ProductoController {

	private static final Logger log = LoggerFactory.getLogger(ProductoController.class);

	@Autowired
	private ProductoRepository repository;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public List<Producto> getProductos() {
		return repository.findAll();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Producto> getAnuncio(@PathVariable long id) {

		log.info("Get producto {}", id);

		Producto producto = repository.findOne(id);
		if (producto != null) {
			return new ResponseEntity<>(producto, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Producto nuevoProducto(@RequestBody Producto producto) {

		repository.save(producto);

		return producto;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Producto> actulizaAnuncio(@PathVariable long id, @RequestBody Producto updatedProducto) {

		Producto producto = repository.findOne(id);
		if (producto != null) {

			updatedProducto.setId(id);
			repository.save(updatedProducto);

			return new ResponseEntity<>(updatedProducto, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Producto> borraAnuncio(@PathVariable long id) {

		if (repository.exists(id)) {
			repository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
