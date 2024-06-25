// package com.legado.prototype.crudjee7.ejb;


// import java.util.List;

// import javax.ejb.Stateless;
// import javax.persistence.EntityManager;
// import javax.persistence.PersistenceContext;

// import com.legado.prototype.crudjee7.model.User;

// @Stateless
// public class UserBean {

//     @PersistenceContext(unitName = "myPU")
//     private EntityManager em;

//     public void createUser(User user) {
//         em.persist(user);
//     }

//     public List<User> findAllUsers() {
//         return em.createQuery("SELECT u FROM User u", User.class).getResultList();
//     }
// }
