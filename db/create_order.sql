insert into orders
(firstname, lastname, address, address2, city, state, zip, email)
values ($1, $2, $3, $4, $5, $6, $7, $8)
RETURNING *
