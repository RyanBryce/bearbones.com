select *
from products


-- -- service
-- this.subscribers = [
-- function updateCart(cart) {
--   $scope.cart = cart
-- },
-- ]
--
-- -- this.cart is updated
--
-- function notifySubscribers (subscribers) {
--   this.subscribers.forEach(function (cb) {
--   cb(this.cart);
--   })
-- }
--
-- this.subscribeToCart = function(CtrlCallBack) {
--   this.subscribers.push(CtrlCallBack)
-- }
--
--s
-- -- controller
--
-- .contorller('productsCtrl', function (cartService) {
--
--   cartService.subscribeToCart(updateCart);
--
--   function updateCart(cart) {
--     $scope.pro = cart
--   }
--})
