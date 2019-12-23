DB setup:

createdb insurance;
createuser insuranceUser;
psql insurance 

grant all privileges on database insurance to insuranceUser;
grant all privileges on usertable to insuranceUser;


CREATE TABLE usertable (  
  id uuid PRIMARY KEY,
  password varchar,
  user_name varchar UNIQUE
);
insert into usertable values ('40da9106-2d21-4ec3-bc40-38a9388c7e4d','$2b$10$SxWTap9pvqtzLg3inpGzVOax/v3S8nS0CX9xN3SNE8LLjdJe97xEu','ssdn');
