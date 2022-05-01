db.createUser(
  {
    user: "financas_user",
    pwd: "financas_password",
    roles: [{ role: "dbAdmin", db: "db_financas" }]
  }
);