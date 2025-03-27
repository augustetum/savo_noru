package com.kompark.savonoru.controller;

import com.kompark.savonoru.entity.Feedback;
import com.kompark.savonoru.service.FeedbackService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("/api/organisations")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @PostMapping("/feedback")
    public ResponseEntity<Feedback> createFeedback(@RequestBody Feedback feedback) {
        return new ResponseEntity<>(feedbackService.createFeedback(feedback), HttpStatus.CREATED);
    }
    @GetMapping("/feedback/{ID}")
    public ResponseEntity<?> getAllFeedbacksByID(@PathVariable Long ID) {
        return ResponseEntity.ok(feedbackService.getAllFeedbacksByID(ID));
    }
}
