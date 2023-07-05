document.querySelector('.collections').addEventListener('click', () =>{
    document.querySelector('.dropdown').classList.toggle('active')
    document.querySelector('.collections i').classList.toggle('fa-angle-up')
})

document.querySelector('.toggle').addEventListener('click', () =>{
    document.querySelector('.nav-flex').classList.toggle('active')
    document.querySelector('.toggle i').classList.toggle('fa-xmark')
})

document.querySelectorAll('.navlinks').forEach(link =>{
    link.addEventListener('click', () =>{
        document.querySelector('.nav-flex').classList.remove('active')
        document.querySelector('.toggle i').classList.remove('fa-xmark')
    })
})
document.querySelectorAll('.nav-icons a').forEach(link =>{
    link.addEventListener('click', () =>{
        document.querySelector('.nav-flex').classList.remove('active')
        document.querySelector('.toggle i').classList.remove('fa-xmark')
    })
})

document.getElementById('display-form').addEventListener('click', () =>{
    document.querySelector('header .nav-form').classList.add('active')
})
document.querySelector('.fa-xmark').addEventListener('click', () =>{
    document.querySelector('header .nav-form').classList.remove('active')
})

// pagination
let products = [
    {
        id: 1,
        image: 'images/polo.png',
        title: 'Polo',
        price: 15,
        rating: 3.4,
        category: 'clothes'
    },
    {
        id: 1,
        image: 'images/pant-trouser.png',
        title: 'Pant Trouser',
        price: 17,
        rating: 4.5,
        category: 'clothes'
    },
    {
        id: 1,
        image: 'images/t-shirt.png',
        title: 'T-shirt',
        price: 10,
        rating: 4,
        category: 'clothes'
    },
    {
        id: 1,
        image: 'images/zipper-jeans.png',
        title: 'Zipper Jeans',
        price: 20,
        rating: 4,
        category: 'clothes'
    },
    {
        id: 1,
        image: 'images/polo.png',
        title: 'Polo',
        price: 15,
        rating: 3.4,
        category: 'clothes'
    },
    {
        id: 1,
        image: 'images/pant-trouser.png',
        title: 'Pant Trouser',
        price: 17,
        rating: 4.5,
        category: 'clothes'
    },
    {
        id: 1,
        image: 'images/t-shirt.png',
        title: 'T-shirt',
        price: 10,
        rating: 4,
        category: 'clothes'
    },
    {
        id: 1,
        image: 'images/zipper-jeans.png',
        title: 'Zipper Jeans',
        price: 20,
        rating: 4,
        category: 'clothes'
    },
    {
        id: 2,
        image: 'images/vans.png',
        title: 'Vans',
        price: 25,
        rating: 3.9,
        category: 'footwear'
    },
    {
        id: 2,
        image: 'images/nike.png',
        title: 'Nike',
        price: 27,
        rating: 4.5,
        category: 'footwear'
    },
    {
        id: 2,
        image: 'images/bag-1.png',
        title: 'Bag-1',
        price: 11,
        rating: 3.5,
        category: 'bags'
    },
    {
        id: 2,
        image: 'images/bag-2.png',
        title: 'bag-2',
        price: 13,
        rating: 4,
        category: 'bags'
    },
    {
        id: 2,
        image: 'images/vans.png',
        title: 'Vans',
        price: 25,
        rating: 3.9,
        category: 'footwear'
    },
    {
        id: 2,
        image: 'images/nike.png',
        title: 'Nike',
        price: 27,
        rating: 4.5,
        category: 'footwear'
    },
    {
        id: 2,
        image: 'images/bag-1.png',
        title: 'Bag-1',
        price: 11,
        rating: 3.5,
        category: 'bags'
    },
    {
        id: 2,
        image: 'images/bag-2.png',
        title: 'bag-2',
        price: 13,
        rating: 4,
        category: 'bags'
    }
]

const categories = [...new Set(products.map(item =>{
    return item
}))]

const displayItem = (items) =>{
    document.getElementById('product').innerHTML = items.map((item) =>{
        let { image, title, price, category, rating } = item;
        return(
            `
            <div class='box'>
                <a href='#' class='product-image-link'>
                    <div class='box-images'>
                        <img src=${image}></img>
                    </div>
                </a>
                <div class='box-text'>
                    <div class='product-name'>
                        <p class='product-title'>${title}</p>
                        <h2 class='product-price'>$${price}<sup>.00</sup></h2>
                    </div>
                    <small class='product-category'>${category}</small>
                    <div class='product-rating'>
                        <i class="fa-solid fa-star"></i>
                        <small class='rating'>${rating}</small>
                    </div>
                    <div class='product-button'>
                        <button class='product-btn'>Add to cart</button>
                    </div>
                </div>
            </div>
            `
        )
    }).join('');
};

const filterFirstCategories = categories.filter(item);
function item(value){
    if(value.id== 1){
        return value.id
    }
}
displayItem(filterFirstCategories)

const buttons = [
    {
        id: 1,
        name: '<<'
    },
    {
        id: 2,
        name: '>>'
    }
]

const filters = [...new Set(buttons.map(btn =>{
    return btn
}))]
document.getElementById('pagination-btn').innerHTML = filters.map(btn =>{
    let { name, id } = btn
    return(
        `<button class='btn-pagination' onclick='filterItems(${id})'>${name}</button>`
    )
}).join('')
const filterItems = (a) =>{
    const filterCategories = categories.filter(item)
    function item(value){
        if(value.id == a){
            return value.id
        }
    }
    displayItem(filterCategories)
}








let section = document.querySelectorAll('section')
let navlinks = document.querySelectorAll('.navlinks')

window.onscroll = () =>{
    if(window.scrollY > 400){
        document.querySelector('.scroll-to-top').classList.add('active')
    }else{
        document.querySelector('.scroll-to-top').classList.remove('active')
    }

    section.forEach(sec =>{
        let top = window.scrollY
        let height = sec.offsetHeight
        let offset = sec.offsetTop - 150
        let id = sec.getAttribute('id')

        if(top => offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active')
                document.querySelector('.nav-flex .navbar .navitems a[href*='+id+']').classList.add('active')
            })
        }
    })
}


// function sendMail(){
//     let params = {
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value,
//         message: document.getElementById('message').value,
//     }

//     let serviceID = 'service_vosdfte';
//     let templateID = 'template_0f30kle';

//     emailjs.send(serviceID, templateID, params)
//     .then((response) =>{
//         document.getElementById('name').value = '';
//         document.getElementById('email').value = '';
//         document.getElementById('message').value = '';
//         console.log(response);
//         alert('message sent successfuly!!');
//     })
//     .catch((err) => console.log(err))
// }



// <!-- emailjs link file -->
    // 
    // <script type="text/javascript">
    //     (function(){
    //         emailjs.init("3ktK8zqjwuOHsXe2_");
    //     })();
    // </script>