package com.legado.prototype.crudjee7.core.conf;

import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

import com.legado.prototype.crudjee7.api.resource.UsuarioResource;
import com.legado.prototype.crudjee7.core.cors.CorsFilter;

@ApplicationPath("/api")
public class RestApplication extends Application {

    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> resources = new HashSet<>();

        // Adicione suas classes de recursos e provedores aqui
        resources.add(CorsFilter.class); // Adicione o filtro CorsFilter como um provedor
        resources.add(UsuarioResource.class);

        return resources;
    }

}