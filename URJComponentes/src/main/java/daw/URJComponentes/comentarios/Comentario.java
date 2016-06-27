package daw.URJComponentes.comentarios;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Comentario {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id = -1;

	@Column(length = 50000)
	private String opinion;
	private String valoracion_pos;
	private String valoracion_neg;
	private String recomendacion;
	private String nombreUsuario;

	public Comentario() {}

	public Comentario(String opinion, String valoracion_pos, String valoracion_neg, String recomendacion,
			String nombreUsuario) {
		this.opinion = opinion;
		this.valoracion_pos = valoracion_pos;
		this.valoracion_neg = valoracion_neg;
		this.recomendacion = recomendacion;
		this.nombreUsuario = nombreUsuario;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getOpinion() {
		return opinion;
	}

	public void setOpinion(String opinion) {
		this.opinion = opinion;
	}

	public String getValoracion_pos() {
		return valoracion_pos;
	}

	public void setValoracion_pos(String valoracion_pos) {
		this.valoracion_pos = valoracion_pos;
	}

	public String getValoracion_neg() {
		return valoracion_neg;
	}

	public void setValoracion_neg(String valoracion_neg) {
		this.valoracion_neg = valoracion_neg;
	}

	public String getRecomendacion() {
		return recomendacion;
	}

	public void setRecomendacion(String recomendacion) {
		this.recomendacion = recomendacion;
	}

	public String getNombreUsuario() {
		return nombreUsuario;
	}

	public void setNombreUsuario(String nombreUsuario) {
		this.nombreUsuario = nombreUsuario;
	}

}