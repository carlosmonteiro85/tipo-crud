package com.legado.prototype.crudjee7.api.resource;

import java.util.List;

import com.legado.prototype.crudjee7.api.dto.response.UsuarioResponse;
import com.legado.prototype.crudjee7.domain.ejb.UsuarioBean;
import com.legado.prototype.crudjee7.domain.model.Usuario;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/usuarios")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class UsuarioResource {

    @Inject
    private UsuarioBean usuarioBean;

    public UsuarioResource() {
    }

    public UsuarioResource(UsuarioBean usuarioService) {
        this.usuarioBean = usuarioService;
    }

    @GET
    public List<UsuarioResponse> list() {
        return usuarioBean.findAll();
    }

    @POST
    public Response save(Usuario usuario) {
        usuarioBean.save(usuario);
        return Response.status(Response.Status.CREATED).entity(usuario).build();
    }

    @PUT
    @Path("/{id}")
    public Response update(@PathParam("id") Long id, Usuario usuario) {
        usuario.setId(id);
        usuarioBean.update(usuario);
        return Response.ok(usuario).build();
    }

    @GET
    @Path("/{id}")
    public Response findById(@PathParam("id") Long id) {
        return Response.ok(usuarioBean.findById(id)).build();
    }

    @DELETE
    @Path("/{id}")
    public Response delete(@PathParam("id") Long id) {
        usuarioBean.delete(id);
        return Response.noContent().build();
    }
}
