package com.kompark.savonoru.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
public class VolunteeringOpportunity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name; //pavadinimas
    private String description; //aprasymas
    private String location; //savanoriavimo vieta
    private LocalDateTime startDate; //savanoriavimo pradzios data ir laikas
    private LocalDateTime endDate; //savanoriavimo pabaigos data ir laikas

    @ManyToOne
    private Organisation organisation; //organizacija, kuri siulo savanoriavimo galimybe

    @OneToMany(mappedBy = "volunteeringOpportunity", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<VolunteeringPosition> volunteeringPositions; //savanoriavimo pozicijos

    @ElementCollection
    @CollectionTable(name = "volunteering_hobbies", joinColumns = @JoinColumn(name = "volunteering_opportunity_id"))
    @Enumerated(EnumType.STRING)
    private List<Hobby> hobbies; //savanoriavimo poreikiai


}
