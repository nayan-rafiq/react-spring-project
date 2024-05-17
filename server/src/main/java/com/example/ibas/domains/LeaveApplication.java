package com.example.ibas.domains;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

@Entity
@Getter
@Setter
public class LeaveApplication {
    @Id
    @GeneratedValue
    protected Long id;
    protected Instant createdAt;

    @ManyToOne(fetch = FetchType.EAGER)
    private LmsUser applicant;

    private Instant fromDate;
    private Instant toDate;
    private String purpose;
    private LeaveType leaveType;
    private ApplicationStatus status;
    private String attachment;
}
