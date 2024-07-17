# Training Platform App

## Introduction 
This is a web application that allows users who are instructing or taking a training cohort to have the ability to track their progress within the course.

## Purpose 
Allow trainers and trainees to track their progress, including which training plan they're taking, what modules they've completed, and give feedback all in one place instead of keeping track manually or across multiple applications.

## Definitions 
 - Trainer
    - A person responsible for teaching courses on the platform. Trainers create course content, deliver lectures, manage assessments, and provide support to trainees. They ensure that the course objectives are met. Can be referred to as an instructor.
 - Trainee
    - An individual registered on the platform and enrolled in a course to gain knowledge or skills. Trainees actively participate in learning activities and complete assignments given by a trainer. Can be referred to as a student. 
 - Cohort
    - Group of trainees enrolled in a course.
 - Course
    - A structured program led by a trainer consisting of various modules, lessons, or assignments. 

## Features 

#### Must Haves 
- User Accounts / Authentication
    - Ability to create, edit, and delete a user using a secure login
    - Ability to have role based access
        - Trainer
        - Trainee
- Training Courses
    - Ability to create, edit, and delete a course
    - Ability to set statuses for modules 
- User Dashboard
    - Ability for trainers to keep track of which students are in a cohort
        - What modules they've completed
        - See total completion of training plan
    - Ability for trainee to see what courses they are enrolled in and course progress



#### Should Have
- Course Progress
    - Ability to give feedback on certain modules
- Training Material 
     - Ability to upload and manage course materials 

#### Could Have 
- Communication Tools
    - Ability for trainee to take notes on a particular module 
    - Ability to write questions when going through course / modules
    - Ability for course forms
    - Ability for messaging between trainer and trainee
- User Profile
    - Ability to set career goal
    - Ability to see previously taken courses
- Application Dashboard
    - Ability to see what courses are offered 
    - Ability to organize or tag courses based on categories
- Training Material
    - Ability to have content delivery 
        - video player 
        - pdf viewer 


#### Wish List
- 
- Ability to set a difficulty level on modules
- Mobile Responsiveness 
    - Progressive web app capabilities
- Interaction
    - Ability for trainers to create quizzes for trainees around certain modules
    - Ability to send recap emails with module notes
- Analytics
    - Ability for trainers to be able to see reports and insights or track how long each module took the trainee 
- Certifications 
    - Ability to generate a certificate of completion when trainee has completed a course
- Multilingual Support
    - Ability to add localization for multiple languages
    - Ability to switch languages in the UI
- API Integration 
    - Ability to integrate with different APIs to post progress (ex: slack channel)

#### Won't Have
- AI
    - Ability to recommended courses for a trainee to sign up for


## Domain Diagram
- User -> Trainer | Trainee
- Course -> has one trainer and multiple trainees
- Progress -> belongs to course
``` mermaid
classDiagram
    User <|-- Trainee
    User <|-- Trainer
```


## ERD
``` mermaid
erDiagram
    USER {
        int id
        string name
        string email
        string password
    }
    
    TRAINEE {
        int id
        int userId
    }
    
    TRAINER {
        int id
        int userId
    }
    
    COURSE {
        int id
        string title
        string description
        int trainerId
    }
    
    MODULE {
        int id
        string title
        int courseId
    }
    
    PROGRESS {
        int id
        int traineeId
        int courseId
        int moduleId
        int score
        string status
    }
    
    COHORT {
        int id
        string name
        int courseId
    }
```



## Links
 - TODO: add link to application

## Getting Started 

### Technologies Used

### Installation 

### Notes on File Structure

### Troubleshooting / Things to Note

## Building / Deploying