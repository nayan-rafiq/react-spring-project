package com.example.ibas.services;

import com.example.ibas.domains.ApplicationStatus;
import com.example.ibas.domains.LeaveApplication;
import com.example.ibas.domains.LmsUser;
import com.example.ibas.repositories.LeaveApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LeaveApplicationService {
    @Autowired
    private LeaveApplicationRepository leaveApplicationRepository;

    @Autowired
    private LmsUserService lmsUserService;

    public List<LeaveApplication> getCurrentUserLeaveApplications() {
        LmsUser currentUser = lmsUserService.getCurrentUser();
        return leaveApplicationRepository.findAllByApplicantId(currentUser.getId());
    }

    public LeaveApplication createLeaveApplication(LeaveApplication leaveApplicationDto) {
        LmsUser currentUser = lmsUserService.getCurrentUser();
        leaveApplicationDto.setApplicant(currentUser);
        leaveApplicationDto.setStatus(ApplicationStatus.PENDING);
        return leaveApplicationRepository.save(leaveApplicationDto);
    }

    public List<LeaveApplication> getAll(Long applicantId) {
        if(applicantId == null) {
            return leaveApplicationRepository.findAll();
        } else {
            return leaveApplicationRepository.findAllByApplicantId(applicantId);
        }
    }


}
