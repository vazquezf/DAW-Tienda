package daw.URJComponentes.comprasAnteriores;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.OneToMany;

import daw.URJComponentes.carrito.Carrito;

@Entity
public class ComprasAnteriores {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	private static long contador = 0; 
	@OneToMany
	private List<Carrito> carritos;
	
	protected ComprasAnteriores() {
		super();
		ComprasAnteriores.contador++;
		this.id = ComprasAnteriores.contador;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public List<Carrito> getProductos() {
		return carritos;
	}

	public void setProductos(List<Carrito> carritos) {
		this.carritos = carritos;
	}
	
	
}
