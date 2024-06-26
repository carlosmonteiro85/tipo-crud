package com.legado.prototype.crudjee7.domain.ejb;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.legado.prototype.crudjee7.api.dto.response.UsuarioResponse;
import com.legado.prototype.crudjee7.domain.exception.ObjectNotFoundException;
import com.legado.prototype.crudjee7.domain.model.Usuario;

// EJB para Regras de Negócio
@Stateless
public class UsuarioBean {

    @PersistenceContext(unitName = "myPU")
    private EntityManager em;

    public List<UsuarioResponse> findAll() {
        List<UsuarioResponse> usuarios = new ArrayList<>();
        List<Usuario> resultList = em.createQuery("SELECT u FROM Usuario u", Usuario.class).getResultList();

        for (Usuario usuario : resultList) {
                usuarios.add(bindUsuarioResponse(usuario));
        }
        return usuarios;
    }

    public UsuarioResponse findById(Long id) {
        Usuario usuario = em.find(Usuario.class, id);

        if (usuario == null) {
            throw new ObjectNotFoundException("Usuário não encontrado com id " + id);
        }
        
        return bindUsuarioResponse(usuario);
    }
    
    public void save(Usuario usuario) {
        em.persist(usuario);
    }
    
    public void update(Usuario usuario) {
        em.merge(usuario);
    }
    
    public void delete(Long id) {
        Usuario usuario = em.find(Usuario.class, id);
        if (usuario != null) {
            em.remove(usuario);
        }
    }
    private UsuarioResponse bindUsuarioResponse(Usuario usuario) {
        return UsuarioResponse.builder()
                .id(usuario.getId())
                .nome(usuario.getNome())
                .cpf(usuario.getCpf())
                .telefone(usuario.getTelefone())
                .email(usuario.getEmail())
                .build();
    }
}
