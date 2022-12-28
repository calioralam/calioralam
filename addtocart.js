const product = [
    {
        id: 0,
        image: 'Monstera Borsigiana.jpeg',
        title: 'Monstera Borsigiana',
        price: 25,
    },
    {
        id: 1,
        image: 'Monstera Thai Constellation.jpeg',
        title: 'Monstera Thai Constellation',
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
        image: 'aglonemaSuksom.jpeg',
        title: 'aglonemaSuksom ',
        price: 1,
    },
    {
        id: 4,
        image: 'aglonemaRotundumAceh.jpeg',
        title: 'aglonemaRotundumAceh',
        price: 18,
    },
    {
        id: 5,
        image: 'caladium.jpeg',
        title: 'caladium',
        price: 24,
    },
    {
        id: 6,
        image: 'monster.jpeg',
        title: 'monstera',
        price: 1,
    },
    {
        id: 7,
        image: 'algonem.png',
        title: 'algonema',
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
