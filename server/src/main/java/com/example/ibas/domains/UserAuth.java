package com.example.ibas.domains;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

@Getter
@Setter
@Entity
public class UserAuth {
    @Id
    @GeneratedValue
    protected Long id;
    protected Instant createdAt;
    private String username;
    private String passwordHash;

    @OneToOne
    private LmsUser lmsUser;

}
