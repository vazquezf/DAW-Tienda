package daw.URJComponentes.producto;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import daw.URJComponentes.comentarios.Comentario;

@Entity
public class Producto {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id = -1;
	private String nombre;

	@Column(length = 50000)
	private String description_corta;
	private String img_ruta;
	private float precio;
	private int stock;
	private String descripcion_larga;
	private boolean destacado;
	private boolean novedad;
	private String tipo;
	private int cantidad = 0;
	
	@OneToMany(fetch = FetchType.EAGER, cascade=CascadeType.ALL)
	private List<Comentario> comentarios= new ArrayList<>();
	
	public Producto() {}

	public Producto(String nombre, String description, String img_ruta, float precio, int stock,
			String descripcion_larga, boolean destacado, boolean novedad, String tipo) {
		super();
		this.nombre = nombre;
		this.description_corta = description;
		this.img_ruta = img_ruta;
		this.precio = precio;
		this.stock = stock;
		this.descripcion_larga = descripcion_larga;
		this.destacado = destacado;
		this.novedad = novedad;
		this.tipo = tipo;

		}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String title) {
		this.nombre = title;
	}

	public String getDescription_corta() {
		return description_corta;
	}

	public void setDescription_corta(String description) {
		this.description_corta = description;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getImg_ruta() {
		return img_ruta;
	}

	public void setImg_ruta(String img_ruta) {
		this.img_ruta = img_ruta;
	}
	public float getPrecio() {
		return precio;
	}

	public void setPrecio(float precio) {
		this.precio = precio;
	}

	public int getStock() {
		return stock;
	}

	public void setStock(int stock) {
		this.stock = stock;
	}

	public String getDescripcion_larga() {
		return descripcion_larga;
	}

	public void setDescripcion_larga(String descripcion_larga) {
		this.descripcion_larga = descripcion_larga;
	}

	public boolean isDestacado() {
		return destacado;
	}

	public void setDestacado(boolean destacado) {
		this.destacado = destacado;
	}

	public boolean isNovedad() {
		return novedad;
	}

	public void setNovedad(boolean novedad) {
		this.novedad = novedad;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	public List<Comentario> getComentarios() {
		return comentarios;
	}

	public void setComentarios(List<Comentario> comentarios) {
		this.comentarios = comentarios;
	}

	public int getCantidad() {
		return cantidad;
	}

	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}

	@Override
	public String toString() {
		return "Book [id=" + id + ", name=" + nombre + ", description_corta=" + description_corta + "]";
	}
}
