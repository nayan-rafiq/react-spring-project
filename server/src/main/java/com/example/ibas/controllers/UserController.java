package com.example.ibas.controllers;

import com.example.ibas.domains.LmsUser;
import com.example.ibas.domains.UserAuth;
import com.example.ibas.dtos.CreateUserDTO;
import com.example.ibas.exceptions.UsernameAlreadyUsedException;
import com.example.ibas.repositories.LmsUserRepository;
import com.example.ibas.repositories.UserAuthRepository;
import com.example.ibas.services.LmsUserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("api/users")
public class UserController {

    @Autowired
    private LmsUserService lmsUserService;


    @GetMapping
    @ResponseBody
    public Collection<LmsUser> getAllUsers() {
        return lmsUserService.getAllUsers();
    }

    @PostMapping
    @ResponseBody
    @Transactional
    public LmsUser createUser(@RequestBody @Valid CreateUserDTO createUserDTO) {
        return lmsUserService.createLmsUser(createUserDTO);
    }

    @GetMapping("me")
    @ResponseBody
    public LmsUser getProfile() {
        return lmsUserService.getCurrentUser();
    }
}
