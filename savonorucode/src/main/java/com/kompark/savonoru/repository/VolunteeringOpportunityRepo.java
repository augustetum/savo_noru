package com.kompark.savonoru.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.kompark.savonoru.entity.VolunteeringOpportunity;

@Repository
public interface VolunteeringOpportunityRepo extends JpaRepository<VolunteeringOpportunity, Long> {
}
