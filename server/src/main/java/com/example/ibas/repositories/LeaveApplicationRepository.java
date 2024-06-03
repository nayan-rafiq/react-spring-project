package com.example.ibas.repositories;

import com.example.ibas.domains.ApplicationStatus;
import com.example.ibas.domains.LeaveApplication;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LeaveApplicationRepository extends ListCrudRepository<LeaveApplication, Long> {

    List<LeaveApplication> findAllByApplicantId(Long applicantId);

    // fetch all leave application by status
    @Query("")
    List<LeaveApplication> findAllByStatusAndApplicant_SupervisorId(ApplicationStatus status, Long superVisorId);

}
