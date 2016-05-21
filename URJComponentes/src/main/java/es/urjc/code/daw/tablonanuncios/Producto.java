package es.urjc.code.daw.tablonanuncios;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Producto {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private  long id ;

	private String nombre;
	private String descripcion_corta;
	private String img_ruta;
	private float precio;
	private int stock;
	private String descripcion_larga;
	private boolean destacado;
	private boolean novedad;
	private String tipo;
	private static long contador = 0;
	
	public Producto() {}

	public Producto(String nombre, String descripcion_corta, String img_ruta, float precio, int stock,
			String descripcion_larga, boolean destacado, boolean novedad, String tipo) {
		super();
		Producto.contador ++;
		this.id = Producto.contador;
		this.nombre = nombre;
		this.descripcion_corta = descripcion_corta;
		this.img_ruta = img_ruta;
		this.precio = precio;
		this.stock = stock;
		this.descripcion_larga = descripcion_larga;
		this.destacado = destacado;
		this.novedad = novedad;
		this.tipo = tipo;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescripcion_corta() {
		return descripcion_corta;
	}

	public void setDescripcion_corta(String descripcion_corta) {
		this.descripcion_corta = descripcion_corta;
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

	

}
