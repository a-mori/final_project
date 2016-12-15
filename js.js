$(document).ready(function() {
    var links = document.getElementById('links');
    var ba = parseInt(sessionStorage.getItem('ba'));
    var ca = parseInt(sessionStorage.getItem('ca'));
    
    $.ajax({
        url: 'navigation_bar.html',
        dataType: 'html',
        success: function(resp){
            console.log(resp);
            links.innerHTML = resp;
            var cart = document.getElementById('Cart');
            var order = document.getElementById('order');
            var sc = document.getElementById('shoppingCart');

            var rem = document.getElementById('r');
            var back = document.getElementById('back');

            document.getElementById('checkout').onclick = function() {
                location.href = 'order_form.html';
            }
            
            sc.onclick = function() {
                if(ba == 0 && ca == 0) {
                    order.innerHTML = 'x0 Products';
                    cart.style.display = 'block';
                }
                
                else {
                    cart.style.display = 'block';
                    order.innerHTML = 'x1 SimpleWatch(s)' + ' Cost: $' + (ba+ca);
                }
            }
            
            back.onclick = function() {
                cart.style.display = 'none';
            }
            
            r.onclick = function() {
                order.innerHTML = 'x0 Products';
            }
        }
    })
});