const product = [
    {
        id: 0,
        image: 'Monsterabors.jpeg',
        title: 'Monstera Borsigiana',
        price: 250,
    },
    {
        id: 1,
        image: 'Monsteratai.jpeg',
        title: 'Monstera Thai Constellation',
        price: 110,
    },
    {
        id: 2,
        image: 'Caladiumgre.jpeg',
        title: 'Caladium green spider',
        price: 100,
    },
    {
        id: 3,
        image: 'aglonemaSuksom.jpeg',
        title: 'aglonema Suksom ',
        price: 120,
    },
    {
        id: 4,
        image: 'aglonemaRotundumAceh.jpeg',
        title: 'aglonema Rotundum Aceh',
        price: 180,
    },
    {
        id: 5,
        image: 'caladium.jpeg',
        title: 'caladium',
        price: 240,
    },
    {
        id: 6,
        image: 'monster.jpeg',
        title: 'monstera',
        price: 100,
    },
    {
        id: 7,
        image: 'algonem.png',
        title: 'algonema',
        price: 100,
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
        <h2>Rp ${price} k</h2>`+
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
        document.getElementById("total").innerHTML = "Rp "+0+" k";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "Rp "+total+" k";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>Rp ${price} k</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
                
            );
        }).join('');
    }

    
}
