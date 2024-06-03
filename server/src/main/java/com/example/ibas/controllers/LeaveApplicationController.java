package com.example.ibas.controllers;

import com.example.ibas.domains.LeaveApplication;
import com.example.ibas.services.LeaveApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/leave-applications")
public class LeaveApplicationController {

    @Autowired
    private LeaveApplicationService leaveApplicationService;

    @GetMapping("mine")
    @ResponseBody
    public List<LeaveApplication> getAllFromCurrentUser() {
        return leaveApplicationService.getCurrentUserLeaveApplications();
    }

    @ResponseBody
    @GetMapping
    public List<LeaveApplication> getAll(@RequestParam(required = false) Long applicantId) {
        return leaveApplicationService.getAll(applicantId);
    }

    @PostMapping
    @ResponseBody
    public LeaveApplication create(@RequestBody LeaveApplication leaveApplication) {
        return leaveApplicationService.createLeaveApplication(leaveApplication);
    }

    @ResponseBody
    @GetMapping("review")
    public List<LeaveApplication> getAllForReview() {
        return leaveApplicationService.getAllForReview();
    }
}
