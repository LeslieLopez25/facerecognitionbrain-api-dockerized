    BEGIN TRANSACTION;
     
    INSERT into users (name, email, entries, joined) values ('jessie', 'jessie@gmail.com', 5, '2021-03-05 14:19:08.978');
    INSERT into login (hash, email) values ('$2a$10$uknT7i3LXILfyynlFhj67uCH8kDjL8.PKbWCIQG0hZWcBuRgVr9VS', 'jessie@gmail.com');
     
    -- Test login after build using the following values
    -- jessie@gmail.com
    -- passworda

    COMMIT;