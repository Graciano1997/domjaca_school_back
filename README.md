Create a config/config.json file with placeholder values or without sensitive information. You can also add a comment to remind others to update it with their actual credentials.

{
  "development": {
    "username": "YOUR_DB_USERNAME",
    "password": "YOUR_DB_PASSWORD",
    "database": "domjaca_development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "YOUR_DB_USERNAME",
    "password": "YOUR_DB_PASSWORD",
    "database": "domjaca_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "YOUR_DB_USERNAME",
    "password": "YOUR_DB_PASSWORD",
    "database": "domjaca_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
