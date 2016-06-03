package daw.URJComponentes.usuario;

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
import daw.URJComponentes.pedido.Pedido;
import daw.URJComponentes.producto.Producto;

@RestController
@RequestMapping("/user")
public class UserController {

	private static final Logger log = LoggerFactory.getLogger(UserController.class);

	@Autowired
	private UserRepository userRepository;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<User> getProducts() {
		log.info("ahi va le pedido");

		return userRepository.findAll();
	}
	@RequestMapping(value = "/{id}", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Pedido newPedido(@RequestBody Pedido anuncio,@PathVariable long id) {
		log.info("ahi va le pedido");
		User user = userRepository.findOne(id);
		user.getPedidos().add(anuncio);
		userRepository.save(user);
		return anuncio;
	}
}
