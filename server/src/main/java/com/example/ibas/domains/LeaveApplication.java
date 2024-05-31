package com.example.ibas.domains;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.Instant;
import java.util.Date;

@Entity
@Getter
@Setter
public class LeaveApplication {
    @Id
    @GeneratedValue
    protected Long id;

    @CreationTimestamp
    protected Instant createdAt;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @ManyToOne(fetch = FetchType.EAGER)
    private LmsUser applicant;

    @NotNull
    private Date fromDate;

    @NotNull
    private Date toDate;

    private String purpose;

    @NotNull
    private LeaveType leaveType;

    private ApplicationStatus status;
    private String attachment;
}
