package daw.URJComponentes;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;

import daw.URJComponentes.comentarios.Comentario;
import daw.URJComponentes.noticia.Noticia;
import daw.URJComponentes.noticia.NoticiaRepository;
import daw.URJComponentes.pedido.Pedido;
import daw.URJComponentes.producto.Producto;
import daw.URJComponentes.producto.ProductoRepository;
import daw.URJComponentes.usuario.User;
import daw.URJComponentes.usuario.UserRepository;



@Controller
public class DatabaseInitializer implements CommandLineRunner {

	@Autowired
	private ProductoRepository productoRepository;
	
	@Autowired
	private NoticiaRepository noticiaRepository;

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public void run(String... args) throws Exception {

		// Sample books
		Producto producto = new Producto("GTX 760","Targeta grafica de gamma baja pero que permitira jugar a las ultimas tendencias en videojuegos","Imagenes/item-1.jpg",250,5,"La nueva generación de EVGA GeForce GTX 970 ha llegado con el SSC.",true,false,"Portatil");
		producto.getComentarios().add(new Comentario("Cool", "bien","mal","si","Javi"));
		productoRepository.save(producto);
		productoRepository.save(new Producto("GTX TITAN","Targeta grafica de gamma media pero que permitira jugar a las ultimas tendencias en videojuegos","Imagenes/item-2.jpg",250,5,"La nueva generación de EVGA GeForce GTX 970 ha llegado con el SSC.",true,true,"Portatil"));
		productoRepository.save(new Producto("GTX 1080","Targeta grafica de gamma alta pero que permitira jugar a las ultimas tendencias en videojuegos","Imagenes/item-3.jpg",250,5,"La nueva generación de EVGA GeForce GTX 970 ha llegado con el SSC.",false,true,"Portatil"));
		
		noticiaRepository.save(new Noticia("SUEÑOS DE  Y NEON", "Imagenes/fbiiphone.jpg", "Los personajes que protagonizan este relato sobreviven en una sociedad en decadencia a la que, no obstante, lograrán devolver la posibilidad de un futuro. Año 2484. En un mundo dominado por las grandes corporaciones, solo un hombre, Jordi Thompson, detective privado deslenguado y vividor, pero de gran talento y sentido d..."));
		noticiaRepository.save(new Noticia("SUEÑOS DE ACERO Y NEON", "Imagenes/fbiiphone.jpg", "Los personajes que protagonizan este relato sobreviven en una sociedad en decadencia a la que, no obstante, lograrán devolver la posibilidad de un futuro. Año 2484. En un mundo dominado por las grandes corporaciones, solo un hombre, Jordi Thompson, detective privado deslenguado y vividor, pero de gran talento y sentido d..."));
		noticiaRepository.save(new Noticia("SUEÑOS DE ACERO Y ", "Imagenes/fbiiphone.jpg", "Los personajes que protagonizan este relato sobreviven en una sociedad en decadencia a la que, no obstante, lograrán devolver la posibilidad de un futuro. Año 2484. En un mundo dominado por las grandes corporaciones, solo un hombre, Jordi Thompson, detective privado deslenguado y vividor, pero de gran talento y sentido d..."));
		noticiaRepository.save(new Noticia("SUEÑOS DE ACERO Y NEON", "Imagenes/fbiiphone.jpg", "Los personajes que protagonizan este relato sobreviven en una sociedad en decadencia a la que, no obstante, lograrán devolver la posibilidad de un futuro. Año 2484. En un mundo dominado por las grandes corporaciones, solo un hombre, Jordi Thompson, detective privado deslenguado y vividor, pero de gran talento y sentido d..."));
		
		
		userRepository.save(new User("juan", "algo", "garcia", "user","jaun.estac@gmail.com", "user", "ROLE_USER"));
		userRepository.save(new User("manolo", "Felipe", "estac", "admin","manolof.estac@gmail.com","admin", "ROLE_USER", "ROLE_ADMIN"));
		
		// Sample users

}
}