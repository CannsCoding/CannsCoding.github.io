document.addEventListener("DOMContentLoaded", () => {
    // Wishlist data
    const wishlist = {
        randy: {
            big: [
                { name: "Odin 2", image: "images/Odin.jpg", link: "https://www.ayntec.com/collections/odin/products/odin-2?variant=44035820650688", price: 369},
                { name: "Skullcandy Crusher ANC 2", image: "images/skull.jpg", link: "https://www.amazon.com/Skullcandy-Canceling-Headphones-Microphone-Bluetooth/dp/B0CD1DZ6RD/ref=sr_1_4?crid=3J740MO3XOUK1", price: 130},
                { name: "Pokemon Scarlet & Violet Shiny Treasures", image: "images/poke.jpg", link: "https://www.amazon.com/Pokemon-Scarlet-Treasures-Japanese-Version/dp/B0CF1MDBS5/ref=sr_1_5?crid=1RUVESQMNS5FA&dib=eyJ2IjoiMSJ9.X1vQ7RHAvFj-h5-ibd27laeetDSXqqoWoQS0kJyGVLhgGvX5RvLh8niNKiF2uUkVwoW2vmlu5JxJ1R3fNf21fmvoJQxQOCJhCb7MT898ntjPu8Nz6j6MTbTG_BVpTrmoKfth90JayQff8IxyghJgoLnaeXgydO-wqlV1NBA-3WutxtUd26f45ABcSXa-odCTuH6KhQ18q63c-yRvwwVQX-7vJNKenMuIyDt4F4F3ZSLWI1hrkxC9347Xh_fwyCbJpVzcRRPboN9ZRSuxdUXNOfNDGnvwgP_Dfc4ph-X2XIE.hZN1IVFVCS-fLMj0p0MB5cNuoUcFNAI2NZKK1Wxywkk&dib_tag=se&keywords=pokemon+card+Japanese+High+Class+VSTAR+Universe&qid=1732555744&sprefix=pokemon+card+japanese+high+class+vstar+universe%2Caps%2C127&sr=8-5", price: 48},
                { name: "Ducky One 3 Mini Mist", image: "images/ducky.jpg", link: "https://mechanicalkeyboards.com/products/ducky-one-3-mini-mist", price: 99},
                { name: "HTC Vive Focus Vision", image: "images/HTC.jpg", link: "https://www.amazon.com/HTC-Vive-Focus-Vision-Controllers-Consumer/dp/B0DDRLX7V4/ref=asc_df_B0DDRLX7V4?mcid=2400d53b136531f2a3bb85c816591925&tag=hyprod-20&linkCode=df0&hvadid=708145033170&hvpos=&hvnetw=g&hvrand=5479306256501839036&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9025207&hvtargid=pla-2366255649782&th=1", price: 999},
                { name: "PowerA Wired GameCube", image: "images/game.jpg", link: "https://www.amazon.com/PowerA-Wired-GameCube-Controller-Nintendo-Switch/dp/B08HHG2JN7/ref=sr_1_1?crid=2MPOKFP4E1YSN&dib=eyJ2IjoiMSJ9.13W5unxWRfAF41ITFggQoAHfMTT_XeqvixVs6AFmWGZLpkDrydM9p3zCFnUvk6fRJ8GaW934_9QIqEMvriI99mmewqkBrsyEA40v1bykj1NM-o03Z8OiP0lfKKmdGHibxl1fA2OCSmZeVa-AL0ccfkHJwjPjVVi2BFzYGBlL5vP2fJx9jfSbYFATFC7etQRBGvHCurGskC_DUmdWZq5u0j9SXULIC8cx6oTqC9aW9KQ.3FsitSlBrXdwbG-kBKvIG5OS_uBsbglg_z_-u0cvgK4&dib_tag=se&keywords=gamecube%2Bcontroller%2Bswitch%2Bwired&qid=1732556090&sprefix=gamecube%2Bcontroller%2Bswitch%2Bw%2Caps%2C149&sr=8-1&th=1", price: 25}
            ],
            medium: [
                
            ],
            small: [
                
            ]
        },
        vance: {
            big: [
                { name: "Gaming Console", image: "images/console.jpg", link: "https://example.com/console", price: 500, priority: 2 },
                { name: "TV", image: "images/tv.jpg", link: "https://example.com/tv", price: 1000, priority: 1 }
            ],
            medium: [
                { name: "Smart Speaker", image: "images/speaker.jpg", link: "https://example.com/speaker", price: 150, priority: 3 },
                { name: "Smartwatch", image: "images/smartwatch.jpg", link: "https://example.com/smartwatch", price: 250, priority: 2 }
            ]
        }
    };

    // Function to populate the wishlist
    const populateWishlist = (category, subcategory, items) => {
        const list = document.querySelector(`#${category}-${subcategory} .item-list`);
        list.innerHTML = ""; // Clear the list before populating
        items.forEach((item) => {
            const li = document.createElement("li");

            const link = document.createElement("a");
            link.href = item.link;
            link.target = "_blank"; // Opens link in a new tab
            link.style.textDecoration = "none";
            link.style.color = "inherit";

            if (item.image) {
                const img = document.createElement("img");
                img.src = item.image;
                img.alt = item.name;
                link.appendChild(img);
            }

            const text = document.createTextNode(`${item.name} - $${item.price}`);
            link.appendChild(text);

            li.appendChild(link);
            list.appendChild(li);
        });
    };

    // Populate all wishlist items and initialize buttons
    Object.keys(wishlist).forEach((category) => {
        Object.keys(wishlist[category]).forEach((subcategory) => {
            populateWishlist(category, subcategory, wishlist[category][subcategory]);
            addFilterButtons(category, subcategory);
        });
    });
});
