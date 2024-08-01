INSERT INTO users (email, password, role, created_at, updated_at)
VALUES
    ('user1@example.com', 'password1', 'trainer', NOW(), NOW()),
    ('user2@example.com', 'password2', 'trainee', NOW(), NOW()),
    ('user3@example.com', 'password3', 'trainee', NOW(), NOW());

INSERT INTO courses (title, description, trainer_id, created_at, updated_at)
VALUES
    ('Course 1', 'Description for course 1', 1, NOW(), NOW()),
    ('Course 2', 'Description for course 2', 1, NOW(), NOW());

INSERT INTO modules (title, course_id, created_at, updated_at)
VALUES
    ('Module 1 for Course 1', 1, NOW(), NOW()),
    ('Module 2 for Course 1', 1, NOW(), NOW()),
    ('Module 1 for Course 2', 2, NOW(), NOW());

INSERT INTO progress (trainee_id, course_id, module_id, status, created_at, updated_at)
VALUES
    (2, 1, 1, 'completed', NOW(), NOW()),
    (2, 1, 2, 'in progress', NOW(), NOW()),
    (3, 2, 3, 'completed', NOW(), NOW());
