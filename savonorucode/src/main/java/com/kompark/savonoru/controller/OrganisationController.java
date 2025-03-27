package com.kompark.savonoru.controller;

import com.kompark.savonoru.entity.Organisation;
import com.kompark.savonoru.entity.Role;
import com.kompark.savonoru.service.OrganisationService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@Controller
@RequestMapping("/api/organisations")

public class OrganisationController{

    @Autowired
    private OrganisationService organisationService;

    @PostMapping("/register")
    public ResponseEntity<?> createOrganisation(@RequestBody Organisation organisation) {
        try {
            organisation.setRole(Role.ORGANISATION);
            return new ResponseEntity<>(organisationService.createOrganisation(organisation), HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred during registration");
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Organisation> updateOrganisation(@PathVariable Long id, @RequestBody Organisation organisationDetails) {
        Organisation updatedOrganisation = organisationService.updateOrganisation(id, organisationDetails);
        if (updatedOrganisation != null) {
            return new ResponseEntity<>(updatedOrganisation, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Organisation> getOrganisationById(@PathVariable Long id) {
        Organisation organisation = organisationService.getOrganisationById(id);
        if (organisation != null) {
            return new ResponseEntity<>(organisation, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
