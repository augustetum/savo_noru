package com.kompark.savonoru.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;


@Getter
@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor
@Component
@Entity
@Table(name = "organizations")
public class Organisation extends User{

    @Column(name = "name", nullable = false, unique = true)
    private String name;

    @Column(name = "address")
    private String address;

    @Column(name = "WorkingArea")
    private String workingArea; //veiklos sritis

    @Column(name = "description") //veliau (nebutina)
    private String description;

    @Column(name = "web_link") //veliau (nebutina)
    private String link; //linkas i org website

    @Override
    public void setRole(Role role) {
        super.setRole(Role.ORGANISATION);
    }

}
