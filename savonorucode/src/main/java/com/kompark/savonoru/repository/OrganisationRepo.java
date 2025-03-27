package com.kompark.savonoru.repository;

import com.kompark.savonoru.entity.Organisation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrganisationRepo extends JpaRepository<Organisation, Long> {
}
