package com.example.ibas.dtos;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;
import java.util.Date;

@Getter
@Setter
public class CreateUserDTO {
    @NotBlank
    private String name;

    @NotBlank
    @Pattern(regexp = "^[a-zA-Z0-9]+$")
    private String username;

    @NotBlank
    private String password;

    @NotBlank
    private String designation;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date joiningDate;
}
