package com.kompark.savonoru.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Entity
@Getter
@Setter

public class VolunteeringPosition {
    @Id
    @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
    private Long id;
    private String name;
    private int maxVolunteers;

    @ManyToMany
    private Set<Volunteer> volunteers;

    @ManyToOne
    @JoinColumn(name = "volunteering_opportunity_id")
    @JsonBackReference
    private VolunteeringOpportunity volunteeringOpportunity;


}
