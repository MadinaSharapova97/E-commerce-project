const menu = document.getElementById("menu"),
    closeMenu = document.getElementById("close"),
    collapse_wrapper = document.getElementById("collapse_wrapper"),
    collapse = document.getElementById("collapse"),
    cart = document.getElementById("cart"),
    user_cart = document.getElementById("user_cart"),
    thumbnail_wrapper = document.getElementsByClassName("thumbnail_wrapper"),
    product1 = document.getElementById("product1"),
    closeModal = document.getElementById("closeModal"),
    carousel = document.getElementById("carousel"),
    circle = document.getElementsByClassName("circle"),
    productCarousel = document.getElementById("productCarousel"),
    counter = document.getElementById("counter"),
    minus = document.getElementById("minus"),
    plus = document.getElementById("plus"),
    count2 = document.getElementById("count2"),
    add_btn = document.getElementById("add_btn"),
    basket_wrapper = document.getElementById("basket_wrapper"),
    checkout = document.getElementById("checkout"),
    delete_cart = document.getElementById("delete_cart")


// menu
menu.addEventListener("click", () => {
    collapse_wrapper.style.transform = " translate(0%, 0)"
    collapse.style.transform = " translate(0%, 0)"
})
closeMenu.addEventListener("click", () => {
    collapse_wrapper.style.transform = " translate(-100%, 0)"
    collapse.style.transform = " translate(-100%, 0)"
})


// cart
let toggle = false

cart.addEventListener("click", () => {

    if (user_cart.classList.contains("userMobile")) {
        user_cart.classList.remove("userMobile")
    } else {
        user_cart.classList.add("userMobile")

    }
})

// products
let thumbnail = [
    {
        img: "./images/image-product-1-thumbnail.jpg",
        isOpen: false,
    },
    {
        img: "./images/image-product-2-thumbnail.jpg",
        isOpen: false,
    },
    {
        img: "./images/image-product-3-thumbnail.jpg",
        isOpen: false,
    },
    {
        img: "./images/image-product-4-thumbnail.jpg",
        isOpen: false,
    },
]

function draw() {
    let str = ""
    thumbnail.forEach((i, idx) => {
        str += `
           <img onclick="SelectedElement(${idx})" class="thumbnail ${i.isOpen ? ` activeThumbnail` : ""} " src="${i.img}" alt="img">
          `
    })
    thumbnail_wrapper[0].innerHTML = str
    thumbnail_wrapper[1].innerHTML = str

}
draw()
let products = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg",
]
function SelectedElement(n) {
    thumbnail = thumbnail.map((i, idx) => {
        if (n === idx) {
            i.isOpen = true
            product1.src = products[idx]
            productCarousel.src = products[idx]
        } else {
            i.isOpen = false
        }
        return i;
    }
    )
    draw()
}

// carousel
let IsOpenModal = false

function Carousel() {
    if (!IsOpenModal) {
        carousel.style.display = "block"
    }
    IsOpenModal = true
}

closeModal.addEventListener("click", () => {
    if (IsOpenModal) {
        carousel.style.display = "none"
    }
    IsOpenModal = false
})

let step = 0

circle[0].addEventListener("click", () => {
    if (step === 0) return
    step -= 1
    productCarousel.src = products[step]
})

circle[1].addEventListener("click", () => {
    if (step === products.length - 1) return
    step += 1
    productCarousel.src = products[step]
})

circle[2].addEventListener("click", () => {
    if (step === 0) return
    step -= 1
    product1.src = products[step]
})

circle[3].addEventListener("click", () => {
    if (step === products.length - 1) return
    step += 1
    product1.src = products[step]
})

// Add to cart

let count = 0

minus.addEventListener("click", () => {
    if (count < 1) {
        count2.style.visibility = "hidden"
        return
    }
    count--
    counter.textContent = count
    count2.textContent = count
    count2.style.visibility = "visible"
})

plus.addEventListener("click", () => {
    count++
    counter.textContent = count
    count2.textContent = count
    count2.style.visibility = "visible"
})


let insideOfCart = `
   <div id="basket">
     <div><img src="./images/image-product-1-thumbnail.jpg" width="70" height="70" alt=""></div>
      <div>
        <h4 id="span"></h4>
       </div>
     <div onclick="Delete_cart()"><img id="delete_cart" src="./images/icon-delete.svg" alt=""></div>
    </div>
`
function Empty() {
    if (count > 0) {
        basket_wrapper.innerHTML = insideOfCart
        checkout.style.display = "block"
    } else {
        basket_wrapper.innerHTML = `<h1>Your cart is empty</h1>`
    }
}

Empty()
add_btn.addEventListener("click", () => {
    Empty()
    let span = document.getElementById("span")
    span.innerHTML = `Fall Limited Edition Sneakers <br>
    $125.00 x ${count} <span>$${125 * count}.00</span>`
    user_cart.classList.add("userMobile")


})

checkout.addEventListener("click", () => {
    basket_wrapper.innerHTML = `<h1>Your cart is empty</h1>`
    checkout.style.display = "none"
    count = 0
    counter.textContent = count
    count2.textContent = count

})
function Delete_cart() {
    basket_wrapper.innerHTML = `<h1>Your cart is empty</h1>`
    checkout.style.display = "none"
    count = 0
    counter.textContent = count
    count2.textContent = count
}




