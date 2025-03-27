package com.kompark.savonoru.service;

import com.kompark.savonoru.entity.Volunteer;
import com.kompark.savonoru.entity.Hobby;
import com.kompark.savonoru.service.VolunteerService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.HashSet;
import java.util.Set;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class VolunteerServiceTest {

    @Autowired
    private VolunteerService volunteerService;

    @Test
    public void testCreateVolunteer() {
        Volunteer volunteer = new Volunteer();
        volunteer.setUsername("testuser");
        volunteer.setEmail("testuser@example.com");

        volunteer.setPassword("password");
        volunteer.setFirstName("Test");
        volunteer.setLastName("User");
        volunteer.setPhoneNumber("1234567890");
        Set<Hobby> hobbies = new HashSet<>();
        hobbies.add(Hobby.GAMTA);
        volunteer.setHobbies(hobbies);

    }
}