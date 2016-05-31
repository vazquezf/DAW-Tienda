package daw.URJComponentes.noticia;

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

@RestController
@RequestMapping("/noticias")
public class NoticiaController {

	private static final Logger log = LoggerFactory.getLogger(NoticiaController.class);

	@Autowired
	private NoticiaRepository noticiaRepository;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<Noticia> getNoticias() {
		log.info("Get Noticia {}");
		return noticiaRepository.findAll();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Noticia> getNoticia(@PathVariable long id) {

		log.info("Get book {}", id);

		Noticia anuncio = noticiaRepository.findOne(id);
		if (anuncio != null) {
			return new ResponseEntity<>(anuncio, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Noticia newNoticia(@RequestBody Noticia anuncio) {

		noticiaRepository.save(anuncio);

		return anuncio;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Noticia> updateNoticia(@PathVariable long id, @RequestBody Noticia updatedBook) {

		Noticia anuncio = noticiaRepository.findOne(id);
		if (anuncio != null) {

			updatedBook.setId(id);
			noticiaRepository.save(updatedBook);

			return new ResponseEntity<>(updatedBook, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Noticia> deleteNoticia(@PathVariable long id) {

		if (noticiaRepository.exists(id)) {
			noticiaRepository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
