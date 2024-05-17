package com.example.ibas.domains;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

@Getter
@Setter
@Entity
public class LmsUser {
    @Id
    @GeneratedValue
    protected Long id;
    protected Instant createdAt;
    private String name;
    private String designation;
    private String joinedAt;
    private boolean isSuperUser;
}