// package com.legado.prototype.crudjee7.rest;

// import java.util.List;

// import javax.inject.Inject;
// import javax.ws.rs.Consumes;
// import javax.ws.rs.GET;
// import javax.ws.rs.POST;
// import javax.ws.rs.Path;
// import javax.ws.rs.Produces;
// import javax.ws.rs.core.MediaType;

// import com.legado.prototype.crudjee7.ejb.UserBean;
// import com.legado.prototype.crudjee7.model.User;

// @Path("/users")
// public class UserResource {

//     @Inject
//     private UserBean userBean;

//     @POST
//     @Consumes(MediaType.APPLICATION_JSON)
//     public void createUser(User user) {
//         userBean.createUser(user);
//     }

//     @GET
//     @Produces(MediaType.APPLICATION_JSON)
//     public List<User> getUsers() {
//         return userBean.findAllUsers();
//     }
// }
