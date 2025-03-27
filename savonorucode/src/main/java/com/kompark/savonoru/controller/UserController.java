package com.kompark.savonoru.controller;

import com.kompark.savonoru.entity.User;
import com.kompark.savonoru.service.UserService;
import org.springframework.security.core.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@Controller
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    UserService userService;

    @PutMapping("/addPhoto")
    public ResponseEntity<?> addPhoto(@RequestPart User user , @RequestPart MultipartFile imageFile){
        try{
            User user1 = userService.addPhoto(user, imageFile);
            return new ResponseEntity<>(user1, HttpStatus.ACCEPTED);
        }
        catch(Exception e){
            return new ResponseEntity<>(e.getMessage() ,HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/current-id")
    public ResponseEntity<Long> getCurrentUserId() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        User user = userService.findByUsername(username).orElseThrow(() -> new RuntimeException("User not found"));
        return ResponseEntity.ok(user.getId());
    }


}
