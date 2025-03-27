package com.kompark.savonoru.repository;

import com.kompark.savonoru.entity.VolunteeringPosition;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VolunteeringPositionRepo extends JpaRepository<VolunteeringPosition, Long> {
}
