package daw.URJComponentes.producto;

import java.util.Collection;

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

import daw.URJComponentes.comentarios.Comentario;

@RestController
@RequestMapping("/productos")
public class ProductoController {

	private static final Logger log = LoggerFactory.getLogger(ProductoController.class);

	@Autowired
	private ProductoRepository productoRepository;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<Producto> getProducts() {
		return productoRepository.findAll();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Producto> getProduct(@PathVariable long id) {


		Producto anuncio = productoRepository.findOne(id);		
		if (anuncio != null) {
			return new ResponseEntity<>(anuncio, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Producto newProduct(@RequestBody Producto anuncio) {
		productoRepository.save(anuncio);
		return anuncio;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Producto> updateProduct(@PathVariable long id, @RequestBody Producto updatedBook) {

		Producto anuncio = productoRepository.findOne(id);
		if (anuncio != null) {

			updatedBook.setId(id);
			productoRepository.save(updatedBook);

			return new ResponseEntity<>(updatedBook, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Producto> deleteProduct(@PathVariable long id) {

		if (productoRepository.exists(id)) {
			productoRepository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Comentario newComentario(@RequestBody Comentario anuncio,@PathVariable long id) {
		log.info("he llegado");
		Producto producto = productoRepository.findOne(id);
		producto.getComentarios().add(anuncio);
		productoRepository.save(producto);
		return anuncio;
	}
	
	@RequestMapping(value = "/buscador/{nombre}", method = RequestMethod.GET)
	public Collection<Producto> getProductByName(@PathVariable String nombre) {
		return productoRepository.findByNombre(nombre);
	}
	
	@RequestMapping(value = "/buscadorTipo/{tipo}", method = RequestMethod.GET)
	public Collection<Producto> getProductByTipo(@PathVariable String tipo) {
		return productoRepository.findByTipo(tipo);
	}
}
