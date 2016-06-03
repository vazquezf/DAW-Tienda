package daw.URJComponentes.pedido;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.OneToMany;

import daw.URJComponentes.producto.Producto;

@Entity
public class Pedido {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id= -1;
	
	@OneToMany(fetch = FetchType.EAGER)
	private List<Producto> productos = new ArrayList<>();
	
	protected Pedido() {
	}
	
	public Pedido(List<Producto> productos) {
		super();
		this.productos = productos;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public List<Producto> getProductos() {
		return productos;
	}

	public void setProductos(List<Producto> productos) {
		this.productos = productos;
	}
	
	
}
