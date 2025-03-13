package com.kompark.savonoru.service;


import com.kompark.savonoru.entity.Role;
import com.kompark.savonoru.entity.Volunteer;
import com.kompark.savonoru.repository.VolunteerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VolunteerService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private VolunteerRepo volunteerRepository;

    public List<Volunteer> getAllVolunteers() {
        return volunteerRepository.findAll();
    }

    public Volunteer getVolunteerByID(Long id) {
        return volunteerRepository.findById(id).orElse(null);
    }


    public Volunteer createVolunteer(Volunteer volunteer) {
        volunteer.setPassword(passwordEncoder.encode(volunteer.getPassword()));
        if (volunteer.getRole() == null) {
            volunteer.setRole(Role.VOLUNTEER);
        }
        return volunteerRepository.save(volunteer);
    }
}
