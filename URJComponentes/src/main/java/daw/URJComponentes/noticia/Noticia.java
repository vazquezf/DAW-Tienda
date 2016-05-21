package daw.URJComponentes.noticia;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Noticia {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private  long id ;
	
	private String titulo;
    private String imagen;
    private String descripcion;
    private static long contador = 0;
    
    protected Noticia(){}
    
	public Noticia(long id, String titulo, String imagen, String descripcion) {
		super();
		Noticia.contador++;
		this.id = Noticia.contador;
		this.titulo = titulo;
		this.imagen = imagen;
		this.descripcion = descripcion;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	
	
    
    
}
