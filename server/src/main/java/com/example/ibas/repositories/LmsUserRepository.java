package com.example.ibas.repositories;

import com.example.ibas.domains.LmsUser;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LmsUserRepository extends ListCrudRepository<LmsUser, Long> {
}
