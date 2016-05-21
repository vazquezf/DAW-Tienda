package daw.URJComponentes.producto;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ProductoRepository extends JpaRepository<Producto, Long> {
	@Query("select u from Producto u where u.nombre like %?1%")
	List<Producto> findByNombre(String nombre);
}