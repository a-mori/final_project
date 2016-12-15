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
            
            var product = document.getElementById('product');
            var home = document.getElementById('product');
            var contact = document.getElementById('contact');
            
            var a = document.getElementById('leather');
            var b = document.getElementById('black');
            var c = document.getElementById('white');
            var d = document.getElementById('metal1');
            var e = document.getElementById('white2');
            var f = document.getElementById('metal2');
            var g = document.getElementById('white3');

            var case1 = document.getElementById('case1');
            var band = document.getElementById('band');
            var face = document.getElementById('face');
            var price = document.getElementById('price');

            var but = document.getElementById('but');

            document.getElementById('checkout').onclick = function() {
                location.href = 'order_form.html';
            }
            
            sc.onclick = function() {
                if(ba == 0 && ca == 0) {
                    order.innerHTML = 'x0 Products';
                    cart.style.display = 'block';
                    console.log(sessionStorage.getItem('ba'));
                    console.log(sessionStorage.getItem('ca'));
                }
                
                else {
                    cart.style.display = 'block';
                    order.innerHTML = 'x1 SimpleWatch(s)' + ' Cost: $' + (ba+ca);
                    console.log(sessionStorage.getItem('ba'));
                    console.log(sessionStorage.getItem('ca'));
                }
            }
            
            back.onclick = function() {
                cart.style.display = 'none';
            }
            
            r.onclick = function() {
                sessionStorage.setItem('ba', 0);
                sessionStorage.setItem('ca', 0);
                order.innerHTML = 'x0 Products';
                console.log(sessionStorage.getItem('ba'));
                console.log(sessionStorage.getItem('ca'));
            }

            a.onclick = function() {
                band.style.backgroundColor = 'tan';
                sessionStorage.setItem('ba', 70);
                ba = 70;
                price.innerHTML = '$' + (ba + ca);
            }

            b.onclick = function() {
                band.style.backgroundColor = 'black';
                sessionStorage.setItem('ba', 30);
                ba = 30;
                price.innerHTML = '$' + (ba + ca);
            }

            c.onclick = function() {
                band.style.backgroundColor = 'white';
                sessionStorage.setItem('ba', 20);
                ba = 20;
                price.innerHTML = '$' + (ba + ca);
            }

            d.onclick = function() {
                case1.style.backgroundColor = 'darkgrey';
                case1.style.borderRadius = '100%';
                face.style.borderRadius = '100%';
                sessionStorage.setItem('ca', 130);
                ca = 130;
                price.innerHTML = '$' + (ba + ca);
            }

            e.onclick = function() {
                case1.style.backgroundColor = 'white';
                case1.style.borderRadius = '100%';
                face.style.borderRadius = '100%';
                sessionStorage.setItem('ca', 80);
                ca = 80;
                price.innerHTML = '$' + (ba + ca);
            }

            f.onclick = function() {
                case1.style.backgroundColor = 'darkgrey';
                case1.style.borderRadius = '0';
                face.style.borderRadius = '0';
                sessionStorage.setItem('ca', 130);
                ca = 130;
                price.innerHTML = '$' + (ba + ca);
            }

            g.onclick = function() {
                case1.style.backgroundColor = 'white';
                case1.style.borderRadius = '0';
                face.style.borderRadius = '0';
                sessionStorage.setItem('ca', 80);
                ca = 80;
                price.innerHTML = '$' + (ba + ca);
            }

            but.onclick = function() {
                cart.style.display = 'block';
                order.innerHTML = 'x1 SimpleWatch(s)' + ' Cost: $' + (ba+ca);
                sessionStorage.setItem('ba', ba);
                sessionStorage.setItem('ca', ca);
                console.log(sessionStorage.getItem('ba'));
                console.log(sessionStorage.getItem('ca'));
            }
        }
    })
});