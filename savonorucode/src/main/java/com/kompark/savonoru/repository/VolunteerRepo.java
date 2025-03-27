package com.kompark.savonoru.repository;

import com.kompark.savonoru.entity.Volunteer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VolunteerRepo extends JpaRepository<Volunteer, Long> {

}