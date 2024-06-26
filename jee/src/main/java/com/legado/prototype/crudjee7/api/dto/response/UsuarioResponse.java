package com.legado.prototype.crudjee7.api.dto.response;

public class UsuarioResponse {
    private Long id;
    private String nome;
    private String cpf;
    private String telefone;
    private String email;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public UsuarioResponse() {
    }

    private UsuarioResponse(Builder builder) {
        this.id = builder.id;
        this.nome = builder.nome;
        this.cpf = builder.cpf;
        this.telefone = builder.telefone;
        this.email = builder.email;
    }

    public static Builder builder() {
        return new Builder();
    }

    public UsuarioResponse(String nome, String cpf, String telefone, String email) {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
        this.email = email;
    }

    public static class Builder {
        private Long id;
        private String nome;
        private String cpf;
        private String telefone;
        private String email;

        public Builder() {
            // Este construtor vazio é necessário para permitir a criação de um builder
        }

        public Builder nome(String nome) {
            this.nome = nome;
            return this;
        }

        public Builder cpf(String cpf) {
            this.cpf = cpf;
            return this;
        }

        public Builder telefone(String telefone) {
            this.telefone = telefone;
            return this;
        }

        public Builder email(String email) {
            this.email = email;
            return this;
        }

        public Builder id(Long id) {
            this.id = id; 
            return this;         
        }

        public UsuarioResponse build() {
            return new UsuarioResponse(this);
        }

    }
}
