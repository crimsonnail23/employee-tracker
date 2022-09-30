INSERT INTO department (name)
VALUES
    ('Games'),
    ('Furniture'),
    ('Candy');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Manager', 35000.00, 2),
    ('Clerk', 20000.00, 1),
    ('Assistant Manager', 27500.00, 3);

INSERT INTO employee (first_name, last_name,role_id,manager_id)
VALUES
    ('john', 'smith',1,1),
    ('jenny', 'thompson',2,1),
    ('jimmy', 'chew',3,1);