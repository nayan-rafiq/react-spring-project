package com.example.ibas.dtos;

import com.example.ibas.domains.ApplicationStatus;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SearchLeaveApplicationDTO {
    private ApplicationStatus status;
}
