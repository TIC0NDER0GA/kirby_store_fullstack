DO
$$
BEGIN
   IF NOT EXISTS (
      SELECT FROM pg_database WHERE datname = 'kirby_store'
   ) THEN
      EXECUTE 'CREATE DATABASE kirby_store';
   END IF;

   IF NOT EXISTS (
      SELECT FROM pg_database WHERE datname = 'kirby_store_test'
   ) THEN
      EXECUTE 'CREATE DATABASE kirby_store_test';
   END IF;
END
$$;