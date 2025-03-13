package com.kompark.savonoru.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "volunteers")
public class Volunteer extends User{

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "Hours_Volunteered")
    private int HoursVolunteered;

    @ElementCollection
    @CollectionTable(name = "volunteer_hobbies", joinColumns = @JoinColumn(name = "volunteer_id"))
    @Column(name = "hobby", nullable = true, unique = false)
    @Enumerated(EnumType.STRING)
    private Set<Hobby> hobbies = new HashSet<>();

    @Override
    public void setRole(Role role) {
        super.setRole(Role.VOLUNTEER);
    }
}
