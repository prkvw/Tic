create script file.sh
CREATE DATABASE Temp; USE DATABASE Temp; CREATE TABLE Test_Table 
(Test_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT, Test_Name VARCHAR(30), Test_Date DATETIME, Test_Giver VARCHAR(30)); 
INSERT INTO Test_Table (Test_ID, Test_Name, Test_Date, Test_Giver) VALUES 
(NULL, 'Test','2000-01-01','Glen'); 
