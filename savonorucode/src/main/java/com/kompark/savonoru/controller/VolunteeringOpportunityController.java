package com.kompark.savonoru.controller;

import com.kompark.savonoru.entity.VolunteeringOpportunity;
import com.kompark.savonoru.entity.VolunteeringPosition;
import com.kompark.savonoru.repository.VolunteeringOpportunityRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/volunteering-opportunities")
public class VolunteeringOpportunityController {

    @Autowired
    private VolunteeringOpportunityRepo volunteeringOpportunityRepository;

    @GetMapping("/all")
    public @ResponseBody List<VolunteeringOpportunity> getAllOpportunities() {
        return volunteeringOpportunityRepository.findAll();
    }

    @GetMapping("/{id}")
    public VolunteeringOpportunity getOpportunityById(@PathVariable Long id) {
        return volunteeringOpportunityRepository.findById(id).orElse(null);
    }

    @PostMapping("/create")
    public VolunteeringOpportunity createOpportunity(@RequestBody VolunteeringOpportunity opportunity) {
        for (VolunteeringPosition position : opportunity.getVolunteeringPositions()) {
            position.setVolunteeringOpportunity(opportunity);
        }
        return volunteeringOpportunityRepository.save(opportunity);
    }

    @PutMapping("/{id}")
    public VolunteeringOpportunity updateOpportunity(@PathVariable Long id, @RequestBody VolunteeringOpportunity opportunity) {
        opportunity.setId(id);
        return volunteeringOpportunityRepository.save(opportunity);
    }

    @DeleteMapping("/{id}")
    public void deleteOpportunity(@PathVariable Long id) {
        volunteeringOpportunityRepository.deleteById(id);
    }
}