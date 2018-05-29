/* To Do: MySQL Workbench Setup
Use MySQLWorkbench to connect to your localhost.

Learn how to use MySQL workbench to do queries directly in the database. 
To connect to a specific database, use 'Use [databasename]' in the query box.

Create a text file with the commands you used as you query to the database. 
Upload the text file below.
*/

USE books; -- to set the database you want to use.  Replace with any database name

SELECT * FROM books; -- or any table in the books database

INSERT INTO books (title, author, created_at, updated_at) VALUES ('Algorithm Challenges', 'Martin Puryear', NOW(), NOW());

DELETE FROM books WHERE id = 35;

UPDATE books SET author = 'Dan Brown' WHERE id = 34;