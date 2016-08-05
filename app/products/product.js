document.addEventListener('DOMContentLoaded', function() {
    var products = getProductList();
    var id = getParameterByName('id');


    var product = document.getElementById('product');
    product.querySelector('#title').innerHTML = product.querySelector('#title').innerHTML.replace('__Title__', products[id].name)
    product.querySelector('.price').innerHTML = product.querySelector('.price').innerHTML.replace('__Price__', products[id].price)
    product.querySelector('.description').innerHTML = product.querySelector('.description').innerHTML.replace('__Description__', products[id].description)
    var tabContent = document.querySelector('.tabs .tab-content');

    tabContent.querySelector('#description').innerHTML = tabContent.querySelector('#description').innerHTML.replace('__Description__', products[id].description);

    var table = document.querySelector('.tab-content #specifications tbody');

    var spec = products[id].specifications
    for (var i = 0; i < spec.length; i++) {
        var tr = document.createElement("TR");
        tr.innerHTML = `<th>_label_</th>
                  <td>_value_</td>`;
        table.appendChild(tr);

        table.querySelector('th').innerHTML = table.querySelector('th').innerHTML.replace('_label_', spec[i].label);
        table.querySelector('td').innerHTML = table.querySelector('td').innerHTML.replace('_value_', spec[i].value);

    }

    var btn = document.querySelector('.add-to-cart .btn')
    btn.addEventListener('click', function() {
      for(j=0; j<cart.length; j++) {
        localStorage.cart(JSON.stringify(cart[j]));
      }

    })

    function getProduct() {
        return [{
            id: getParameterByName('id'),
            qty: document.querySelector('.qty').value,
            name:product.querySelector('#title').innerHTML
            }

        ]
    }

    var cart = getProduct();

})
