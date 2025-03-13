package com.kompark.savonoru.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.stereotype.Component;

@Getter
@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor
@Component
@Entity
@Table(name = "feedback")
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "description")
    private String description;

    @Column(name = "rating")
    private int rating;

    @Column(name = "user_id")
    private int userId;

    @ManyToOne
    @JoinColumn(name = "organisation_id")
    private Organisation organisation;

    @Column(name = "role")
    private String role;
}
