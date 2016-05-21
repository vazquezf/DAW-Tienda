package daw.URJComponentes.producto;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CarritoController {
	
	//Si se abre la URL http://127.0.0.1:8080/h2-console y se configura
	//la URL JDBC con el valor jdbc:h2:mem:testdb se puede acceder a la 
	//base de datos de la aplicación

	@Autowired
	private CarritoRepository carritoRepository;
	
	@Autowired
	private ProductoRepository productoRepository;
	
	@PostConstruct
	public void initi() {
		carritoRepository.save(new Carrito());
	}

	@RequestMapping("/carrito/{id}")
	public String verAnuncio(Model model, @PathVariable long id) {
		
		Carrito carrito = carritoRepository.findOne(id);
		carrito.getProductos().addAll(productoRepository.findByNombre("GTX"));
		List<Producto> productos = new ArrayList<Producto>();
		productos = carrito.getProductos();
		
		model.addAttribute("productos", productos);

		return "tablon";
	}
}