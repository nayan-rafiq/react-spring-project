package com.example.ibas.repositories;

import com.example.ibas.domains.LmsUser;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LmsUserRepository extends ListCrudRepository<LmsUser, Long> {

}
