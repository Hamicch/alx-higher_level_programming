-- lists all records with a score >= 10 in the table second_table of the database hbtn_0c_0 --

SELECT score >= 10, name FROM second_table
ORDER BY score Desc;
