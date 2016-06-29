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
	
	@Autowired
	private UserComponent userComponent;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<User> getProducts() {
		log.info("ahi va los users");

		return userRepository.findAll();
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public User newPedido(@RequestBody Producto anuncio,@PathVariable long id) {

		User user = userComponent.getLoggedUser();
		List<Producto> lProductos = productoRepository.findByNombre(anuncio.getNombre());
		log.info(lProductos.get(0).getNombre());
		Pedido pedido = user.lastPedido();
		System.out.println(user.getPedidos().get(user.getPedidos().size()-1).getId());
		pedido.addProduct(lProductos.get(0));
		user.lastPedido().setProductos(pedido.getProductos());
		userRepository.save(user);
		return user;
		}
	
	@RequestMapping(value = "/{id}/pedir", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public User Pedir(@PathVariable long id) {

		User user = userComponent.getLoggedUser();
		user.addNewPedido();
		userRepository.save(user);
		return user;
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<User> Borrar(@PathVariable long id) {

		User user = userComponent.getLoggedUser();
		user.deletePedido();
		log.info("borrando pedido");
		return new ResponseEntity<>(user, HttpStatus.OK);
	}
	@RequestMapping(value = "/{id}/{cod}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<User> BorrarUno(@PathVariable long id,@PathVariable int cod) {

		User user = userComponent.getLoggedUser();
		user.deleteOne(cod);
		log.info("borrando pedido"+cod);
		userRepository.save(user);
		return new ResponseEntity<>(user, HttpStatus.OK);
	}
}
