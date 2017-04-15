select o.orderid, firstname, lastname, address, address2, city, state, zip, email, quantity, p.productid, name, price, description, imgurl1
from orders o
inner join order_products op on o.orderid = op.orderid
inner join products p on op.productid = p.productid
where o.orderid = $1
