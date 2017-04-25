update orders
set firstname = $2, lastname = $3, address = $4, address2 = $5, city = $6, state = $7, zip = $8, email = $9
where orderid = $1
RETURNING *
