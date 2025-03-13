package com.kompark.savonoru.service;

import com.kompark.savonoru.entity.Organisation;
import com.kompark.savonoru.entity.Role;
import com.kompark.savonoru.repository.OrganisationRepo;
import com.kompark.savonoru.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrganisationService {

    @Autowired
    private OrganisationRepo organisationrepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Organisation createOrganisation(Organisation organisation) {
        organisation.setPassword(passwordEncoder.encode(organisation.getPassword()));
        if (organisation.getRole() == null) {
            organisation.setRole(Role.ORGANISATION);
        }
        return organisationrepo.save(organisation);
    }

    public List<Organisation> getAllOrganisations() {
        return organisationrepo.findAll();
    }

    public Organisation getOrganisationById(Long id) {
        return organisationrepo.findById(id).get();
    }

    public Organisation updateOrganisation(Long id, Organisation organisationDetails) {
        Optional<Organisation> optionalOrganisation = organisationrepo.findById(id);
        if (optionalOrganisation.isPresent()) {
            Organisation organisation = optionalOrganisation.get();
            organisation.setEmail(organisationDetails.getEmail());
            organisation.setDescription(organisationDetails.getDescription());
            organisation.setLink(organisationDetails.getLink());
            organisation.setAddress(organisationDetails.getAddress());
            organisation.setPhoneNumber(organisationDetails.getPhoneNumber());
            return organisationrepo.save(organisation);
        } else {
            return null;
        }
    }
}