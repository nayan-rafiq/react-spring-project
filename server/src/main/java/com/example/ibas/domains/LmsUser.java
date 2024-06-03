package com.example.ibas.domains;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.Instant;
import java.util.Date;

@Getter
@Setter
@Entity
public class LmsUser {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    protected Long id;

    @CreationTimestamp
    protected Instant createdAt;
    private String name;
    private String designation;
    private Date joinedAt;
    private boolean isSuperUser;

    @ManyToOne(fetch = FetchType.EAGER)
    private LmsUser supervisor;
}