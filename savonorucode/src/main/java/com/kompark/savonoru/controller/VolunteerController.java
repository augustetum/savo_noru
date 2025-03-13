// VolunteerController.java
package com.kompark.savonoru.controller;
import com.kompark.savonoru.entity.Role;

import com.kompark.savonoru.entity.Volunteer;
import com.kompark.savonoru.service.VolunteerService;
import lombok.AllArgsConstructor;
import com.kompark.savonoru.entity.Hobby;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@Controller
@RequestMapping("/api/volunteers")
public class VolunteerController {

    @Autowired
    private VolunteerService volunteerService;

    @PostMapping("/register") //frontui reikes perduot URL
   public ResponseEntity<Volunteer> createVolunteer(@RequestBody Volunteer volunteer) {
        volunteer.setRole(Role.VOLUNTEER);
        return new ResponseEntity<>(volunteerService.createVolunteer(volunteer), HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public @ResponseBody ResponseEntity<?> getAllVolunteers() {
        return ResponseEntity.ok(volunteerService.getAllVolunteers());
    }

    @GetMapping("/{id}")
    public @ResponseBody ResponseEntity<?> getVolunteerByID(@PathVariable Long id) {
        return ResponseEntity.ok(volunteerService.getVolunteerByID(id));
    }

    @PutMapping("/save")
    public @ResponseBody ResponseEntity<?> saveVolunteer(@RequestBody Volunteer volunteer) {
        return ResponseEntity.ok(volunteerService.createVolunteer(volunteer));
    }
}


