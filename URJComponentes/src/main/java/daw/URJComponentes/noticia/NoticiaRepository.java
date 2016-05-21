package daw.URJComponentes.noticia;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface NoticiaRepository extends JpaRepository<Noticia, Long> {
	
	@Query("select u from Noticia u where u.titulo like %?1%")
	List<Noticia> findByNombre(String titulo);
}