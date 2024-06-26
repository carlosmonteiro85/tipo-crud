package com.legado.prototype.crudjee7.api.exceptionhandler;

import javax.ejb.EJBException;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

import com.legado.prototype.crudjee7.domain.exception.ErrorMessage;
import com.legado.prototype.crudjee7.domain.exception.ObjectNotFoundException;

@Provider
public class ExceptionHandlerMapper implements ExceptionMapper<Throwable> {

    private static final String DEFAULT_MESSAGE = "Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.";

    @Override
    public Response toResponse(Throwable exception) {

        if (exception instanceof EJBException) {
            Throwable cause = ((EJBException) exception).getCause();
            if (cause instanceof ObjectNotFoundException) {
                return Response.status(Response.Status.NOT_FOUND)
                        .entity(new ErrorMessage(cause.getMessage()))
                        .build();
            }
        }

        if (exception instanceof ObjectNotFoundException) {
            return Response.status(Response.Status.NOT_FOUND)
                    .entity(new ErrorMessage(exception.getMessage()))
                    .build();
        } else if (exception instanceof RuntimeException) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(new ErrorMessage(DEFAULT_MESSAGE))
                    .build();
        } else {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(new ErrorMessage(DEFAULT_MESSAGE))
                    .build();
        }
    }
}
