// -- Д/З
// -- 25. Создать таблицу Jobs
// --  Job_id целое число первичный ключ автоинкремент,
// create table Jobs(
// Job_id integer primary key auto_increment);
// select * from Jobs;

// -- 26. Добавить поля title строка не null, description строка не null, salary целое число
// alter table Jobs
// add title varchar (128) not null,
// add description varchar (128) not null,
// add salary integer;

// -- 27. Переименовать поле title на job_title, description на job_description
// alter table Jobs
// change column title job_title varchar(128),
// change column description job_description varchar(128);

// -- 28. Удалить поле salary
// alter table Jobs
// drop column salary;

// -- 29. Добавить поля min_salary тип numeric(2,1), max_salary целое число
// alter table Jobs
// add min_salary numeric (2,1),
// add max_salary integer;

// -- 30. Изменить тип min_salary на целое число
// alter table Jobs
// modify min_salary integer;
// -- 31. Удалить таблицу
//  drop table Jobs;