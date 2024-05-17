package com.example.ibas.domains;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

@Getter
@Setter
@Entity
public class LeaveAllocation {
    @Id
    @GeneratedValue
    protected Long id;
    protected Instant createdAt;

    @ManyToOne
    private LmsUser lmsUser;

    private int year;
    private LeaveType leaveType;
    private int amount;
}
