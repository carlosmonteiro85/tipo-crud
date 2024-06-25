package com.legado.prototype.crudjee7.ejb;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.legado.prototype.crudjee7.model.Usuario;

// EJB para Regras de Negócio
@Stateless
public class UsuarioBean {

    @PersistenceContext(unitName = "myPU")
    private EntityManager em;

    public List<Usuario> findAll() {
        return em.createQuery("SELECT u FROM Usuario u", Usuario.class).getResultList();
    }

    public Usuario find(Long id) {
        return em.find(Usuario.class, id);
    }

    public void create(Usuario usuario) {
        em.persist(usuario);
    }

    public void update(Usuario usuario) {
        em.merge(usuario);
    }

    public void delete(Long id) {
        Usuario usuario = find(id);
        if (usuario != null) {
            em.remove(usuario);
        }
    }
}
