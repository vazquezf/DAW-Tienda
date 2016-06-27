package daw.URJComponentes.usuario;

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

import daw.URJComponentes.comentarios.Comentario;
import daw.URJComponentes.pedido.Pedido;
import daw.URJComponentes.producto.Producto;
import daw.URJComponentes.producto.ProductoRepository;

@RestController
@RequestMapping("/user")
public class UserController {

	private static final Logger log = LoggerFactory.getLogger(UserController.class);

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ProductoRepository productoRepository;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<User> getProducts() {
		log.info("ahi va le pedido");

		return userRepository.findAll();
	}
	@RequestMapping(value = "/{id}", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Producto newPedido(@RequestBody Producto anuncio,@PathVariable long id) {

		User user = userRepository.findOne(id);
		List<Producto> lProductos = productoRepository.findByNombre(anuncio.getNombre());
		log.info(lProductos.get(0).getNombre());
		for (int i=0;i<anuncio.getCantidad();i++){	
			user.lastPedido().addProduct(lProductos.get(i));
		}
		userRepository.save(user);
		return anuncio;
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	@ResponseStatus(HttpStatus.CREATED)
	public User Pedir(@PathVariable long id) {

		User user = userRepository.findOne(id);
		user.addNewPedido();
		userRepository.save(user);
		return user;
	}
	
}
