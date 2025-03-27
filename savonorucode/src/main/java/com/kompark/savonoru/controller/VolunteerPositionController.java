package com.kompark.savonoru.controller;

import com.kompark.savonoru.entity.VolunteeringPosition;
import com.kompark.savonoru.repository.VolunteeringPositionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/volunteer-positions")
public class VolunteerPositionController {

    @Autowired
    private VolunteeringPositionRepo volunteerPositionRepository;

    @GetMapping
    public List<VolunteeringPosition> getAllPositions() {
        return volunteerPositionRepository.findAll();
    }

    @GetMapping("/{id}")
    public VolunteeringPosition getPositionById(@PathVariable Long id) {
        return volunteerPositionRepository.findById(id).orElse(null);
    }

    @PostMapping
    public VolunteeringPosition createPosition(@RequestBody VolunteeringPosition position) {
        return volunteerPositionRepository.save(position);
    }

    @PutMapping("/{id}")
    public VolunteeringPosition updatePosition(@PathVariable Long id, @RequestBody VolunteeringPosition position) {
        position.setId(id);
        return volunteerPositionRepository.save(position);
    }

    @DeleteMapping("/{id}")
    public void deletePosition(@PathVariable Long id) {
        volunteerPositionRepository.deleteById(id);
    }
}