CREATE USER siteweb@'%' IDENTIFIED BY '0ILQcvXhvIzQj75s';
GRANT USAGE ON greenitaccess.* TO siteweb@'%' REQUIRE NONE WITH MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0; 
GRANT EXECUTE ON greenitaccess.* TO siteweb@'%'; 
