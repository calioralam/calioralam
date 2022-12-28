const product = [
    {
        id: 0,
        image: 'image/sszflip.jpg',
        title: 'Samsung Z flip 04 16/256',
        price: 25,
    },
    {
        id: 1,
        image: 'image/ROG.jpeg',
        title: 'ROG phone 6 8/256',
        price: 11,
    },
    {
        id: 2,
        image: 'image/rexus.jpeg',
        title: 'Rexus DAXA M84',
        price: 1,
    },
    {
        id: 3,
        image: 'image/JBL.jpeg',
        title: 'JBL tune 500 BT ',
        price: 1,
    },
    {
        id: 4,
        image: 'image/m2-2022.jpeg',
        title: 'Macbook Air M2 2022 8/256',
        price: 18,
    },
    {
        id: 5,
        image: 'image/ipadd.jpeg',
        title: 'Ipad Pro Gen 5 12,9 inch 2021',
        price: 24,
    },
    {
        id: 6,
        image: 'image/mouse.jpeg',
        title: 'Logitech G502 Hero',
        price: 1,
    },
    {
        id: 7,
        image: 'image/koca.jpeg',
        title: 'Gaming Chair Pink KUCA',
        price: 1,
    }         
 
    
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>Rp ${price} jt</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Masukkan Keranjang</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "KOSONG";
        document.getElementById("total").innerHTML = "Rp "+0+" jt";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "Rp "+total+" jt";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>Rp ${price} jt</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
                
            );
        }).join('');
    }

    
}