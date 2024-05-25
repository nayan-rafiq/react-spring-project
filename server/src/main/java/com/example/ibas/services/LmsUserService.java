package com.example.ibas.services;

import com.example.ibas.domains.LmsUser;
import com.example.ibas.domains.UserAuth;
import com.example.ibas.dtos.CreateUserDTO;
import com.example.ibas.exceptions.UsernameAlreadyUsedException;
import com.example.ibas.repositories.LmsUserRepository;
import com.example.ibas.repositories.UserAuthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LmsUserService {
    @Autowired
    private LmsUserRepository lmsUserRepository;

    @Autowired
    private UserAuthRepository userAuthRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<LmsUser> getAllUsers() {
        return lmsUserRepository.findAll();
    }

    public LmsUser createLmsUser(CreateUserDTO createUserDTO) {
        Optional<UserAuth> userAuthOptional = userAuthRepository.findByUsername(createUserDTO.getUsername());

        // check whether this username is already in use or not
        if(userAuthOptional.isEmpty()) {
            // not user found with this username, we can create one
            LmsUser lmsUser = new LmsUser();
            lmsUser.setName(createUserDTO.getName());
            lmsUser.setDesignation(createUserDTO.getDesignation());
            lmsUser.setJoinedAt(createUserDTO.getJoiningDate());
            LmsUser savedLmsUser = lmsUserRepository.save(lmsUser);

            UserAuth userAuth = new UserAuth();
            userAuth.setLmsUser(savedLmsUser);
            userAuth.setUsername(createUserDTO.getUsername());
            userAuth.setPasswordHash(passwordEncoder.encode(createUserDTO.getPassword()));
            userAuthRepository.save(userAuth);

            return savedLmsUser;
        } else {
            throw new UsernameAlreadyUsedException();
        }
    }

    public LmsUser getCurrentUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        UserDetails userDetails = (UserDetails) auth.getPrincipal();
        Optional<UserAuth> byUsername = userAuthRepository.findByUsername(userDetails.getUsername());
        if(byUsername.isPresent()) {
            LmsUser lmsUser = byUsername.get().getLmsUser();
            return lmsUser;
        } else {
            throw new UsernameNotFoundException("User is not logged in");
        }
    }
}
