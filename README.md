# Training Platform App

## Introduction 
This is a web application that allows users who are instructing or taking a training course to have the ability to track their progress within the course.

## Purpose 
Allow trainers and trainees to track their progress, including which training plan they're taking, what modules they've completed, and give feedback all in one place instead of keeping track manually or across multiple applications.

## Definitions 
 - Trainer
    - A person responsible for teaching courses on the platform. Trainers create course content, deliver lectures, manage assessments, and provide support to trainees. They ensure that the course objectives are met. Can be referred to as an instructor.
 - Trainee
    - An individual registered on the platform and enrolled in a course to gain knowledge or skills. Trainees actively participate in learning activities and complete assignments given by a trainer. Can be referred to as a student. 
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
        - What modules they've completed
        - See total completion of training plan
    - Ability for trainee to see what courses they are enrolled in and course progress



#### Should Have
- Course Progress
    - Ability to give feedback on certain modules
- Training Material 
     - Ability to upload and manage course materials for modules

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
``` mermaid
classDiagram
    class User {
        +int id
        +string password
        +string email
        +string role
    }

    class Trainer {
        +int userId
        +string specialization
        +string bio
    }

    class Trainee {
        +int userId
        +string progress
        +string goals
    }

    class Course {
        +int id
        +string title
        +string description
        +int trainerId
        +string traineeIds
    }

    class Module {
        +int id
        +int courseId
        +string title
    }

    class Progress {
        +int id
        +int traineeId
        +int courseId
        +int moduleId
        +int score
        +string status
    }

    User <|-- Trainer : is a
    User <|-- Trainee : is a
    Trainer "1" -- "0..*" Course : manages
    Trainee "0..*" -- "1" Course : enrolls in
    Course "1" -- "0..*" Module : contains
    Trainee "1" -- "0..*" Progress : has
    Course "1" -- "0..*" Progress : tracks
    Module "1" -- "0..*" Progress : contains
```


## ERD
``` mermaid
erDiagram
    USERS {
        int id PK
        string password
        string email
        string role
    }

    TRAINER {
        int user_id PK, FK
        string specialization
        string bio
    }

    TRAINEE {
        int user_id PK, FK
        string progress
        string goals
    }

    COURSE {
        int id PK
        string title
        string description
        int trainer_id FK
        string trainee_ids
    }

    MODULE {
        int id PK
        int course_id FK
        string title
    }

    PROGRESS {
        int id PK
        int trainee_id FK
        int course_id FK
        int module_id FK
        int score
        string status
    }

    USERS ||--o| TRAINER: "is a"
    USERS ||--o| TRAINEE: "is a"
    COURSE }o--|| TRAINER: "manages"
    COURSE }o--o{ TRAINEE: "includes"
    TRAINEE ||--o{ PROGRESS: "makes"
    COURSE ||--o{ PROGRESS: "tracks"
    MODULE ||--o{ PROGRESS: "tracks"
```



## Links
 - TODO: add link to application

 

## Getting Started 

### Technologies Used
- [TypeScript](https://www.typescriptlang.org/)
- [Mermaid.js](https://mermaid.js.org/intro/)
- [Express.js](https://expressjs.com/en/guide/routing.html)
- [Nodemon](https://github.com/remy/nodemon)
- [Docker](https://docs.docker.com/)
- [Flyway](https://documentation.red-gate.com/flyway)

### Installation 

### Notes on File Structure

### Troubleshooting / Things to Note

## Building / Deploying