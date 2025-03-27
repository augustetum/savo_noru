package com.kompark.savonoru.service;

import com.kompark.savonoru.entity.Feedback;
import com.kompark.savonoru.repository.FeedbackRepo;
import org.springframework.stereotype.Service;

@Service
public class FeedbackService {

    FeedbackRepo feedbackRepo;

    public Feedback createFeedback(Feedback feedback) {
        return feedbackRepo.save(feedback);
    }

    public Object getAllFeedbacksByID(Long ID) {
        return feedbackRepo.findById(ID);
    }
}
