package com.example.ibas.services;

import com.example.ibas.domains.UserAuth;
import com.example.ibas.dtos.UseDetailsImpl;
import com.example.ibas.repositories.UserAuthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserAuthRepository userAuthRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<UserAuth> userAuthOptional = userAuthRepository.findByUsername(username);
        if(userAuthOptional.isPresent()) {
            UserDetails userDetails = new UseDetailsImpl(userAuthOptional.get());
            return userDetails;
        } else {
            throw new UsernameNotFoundException("No user found with this username and password");
        }
    }
}
