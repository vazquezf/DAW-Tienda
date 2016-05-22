package daw.URJComponentes.producto;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ProductController {
	
	//Si se abre la URL http://127.0.0.1:8080/h2-console y se configura
	//la URL JDBC con el valor jdbc:h2:mem:testdb se puede acceder a la 
	//base de datos de la aplicación

	@Autowired
	private ProductoRepository repository;

	@PostConstruct
	public void init() {
		repository.save(new Producto("GTX 760","Targeta grafica de gamma media pero que permitira jugar a las ultimas tendencias en videojuegos","Imagenes/item-1.jpg",250,5,"La nueva generación de EVGA GeForce GTX 970 ha llegado con el SSC.",true,false,"Portatil"));
		repository.save(new Producto("GTX TITAN","Targeta grafica de gamma media pero que permitira jugar a las ultimas tendencias en videojuegos","Imagenes/item-1.jpg",250,5,"La nueva generación de EVGA GeForce GTX 970 ha llegado con el SSC.",true,false,"Portatil"));
		repository.save(new Producto("GTX 1080","Targeta grafica de gamma media pero que permitira jugar a las ultimas tendencias en videojuegos","Imagenes/item-1.jpg",250,5,"La nueva generación de EVGA GeForce GTX 970 ha llegado con el SSC.",true,false,"Portatil"));

	}

	@RequestMapping("/ai")
	public String tablon(Model model) {

		model.addAttribute("productos", repository.findAll());

		return "tablon";
	}


	@RequestMapping("/ai/producto/{id}")
	public String verAnuncio(Model model, @PathVariable long id) {
		
		Producto producto = repository.findOne(id);

		model.addAttribute("producto", producto);

		return "ver_anuncio";
	}
}