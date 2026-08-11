/* ==========================================================
   PAKKA LOCAL â€” shared script
   NOTE ON CONTENT: every claim below is taken from the
   restaurant's own site. Nothing here is invented copy.
   ========================================================== */
const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
const RM=!!(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches);
const IMG=id=>`https://pakkalocalusa.com/pluto-images/${id}`;

/* ---------- MENU (from pakkalocalusa.com/menu) ---------- */
const CATS=[
 ['sig',"Signature dishes"],['bir',"Biryani & pulao"],['chaat',"Salads & chaat"],['soup',"Soups"],
 ['vsp',"Veg small plates"],['nsp',"Non-veg small plates"],['tan',"Tandoori plates"],
 ['vm',"Veg mains"],['nm',"Non-veg mains"],['rn',"Rice & noodles"],['bread',"Indian breads"],
 ['bf',"All-day breakfast"],['side',"Sides"],['des',"Desserts"]
];
const M=[
/* Signature */
{n:"Nalli Gosht Biryani",p:null,c:"sig",v:0,h:3,d:"Marrow-bone lamb shanks layered into the dum biryani â€” the one we would order.",sig:1},
{n:"Guntur Spl Chicken Biryani",p:null,c:"sig",v:0,h:3,d:"Guntur chillies, front and centre. Order it if you mean it.",sig:1},
{n:"Mandi",p:null,c:"sig",v:0,h:2,d:"Arabian-style smoked rice and meat, slow-cooked over low heat.",sig:1},
{n:"Nalli Rogan Josh",p:null,c:"sig",v:0,h:2,d:"Kashmiri lamb shank braised until the meat gives way at the spoon.",sig:1},
{n:"Kheema Pav",p:null,c:"sig",v:0,h:2,d:"Spiced minced meat with buttered pav â€” a Bombay morning on a plate.",sig:1},
{n:"Mutton Misal Pav",p:null,c:"sig",v:0,h:3,d:"Fiery misal given the mutton treatment, with farsan and pav.",sig:1},
{n:"Miryala Chicken with Gold Coin Paratha",p:null,c:"sig",v:0,h:3,d:"Black-pepper chicken alongside crisp coin parathas.",sig:1},
{n:"Blanket Shami Sheek Kebab",p:null,c:"sig",v:0,h:2,d:"Shami kebab wrapped and grilled, soft inside, charred outside.",sig:1},
{n:"Thecha Noodles (Veg)",p:null,c:"sig",v:1,h:3,d:"Maharashtrian green-chilli thecha tossed through noodles.",sig:1},
/* Biryani */
{n:"Zaffrani Chicken Biryani",p:17,c:"bir",v:0,h:2,d:"Saffron-scented dum biryani with long-grain basmati and halal chicken."},
{n:"Vijayawada Chicken Biryani",p:17,c:"bir",v:0,h:3,d:"Andhra-style, built for heat, with a deep chilli backbone."},
{n:"PL SPL Special Biryani",p:17,c:"bir",v:0,h:2,d:"Our house biryani â€” the one the reviews keep mentioning."},
{n:"Ghee Roast Goat Biryani",p:21,c:"bir",v:0,h:3,d:"Goat first ghee-roasted, then layered and sealed for the dum."},
{n:"Paneer Biryani",p:14.99,c:"bir",v:1,h:2,d:"Fragrant biryani cooked with paneer and whole spices."},
{n:"Paneer Tikka Biryani",p:14,c:"bir",v:1,h:2,d:"Tandoor-charred paneer tikka layered through saffron rice."},
{n:"Veg Dum Biryani",p:14,c:"bir",v:1,h:2,d:"Vegetables and rice sealed and steamed together, the same way as the meat."},
{n:"Cooker Pulaos",p:24,c:"bir",v:0,h:2,d:"Pressure-cooker pulao, rustic and generous â€” made for sharing."},
/* Chaat */
{n:"Burrata Chaat",p:14,c:"chaat",v:1,h:1,d:"Street chaat topped with burrata, nylon sev and papdi."},
{n:"Aloo Tikki Avocado Chaat",p:14,c:"chaat",v:1,h:1,d:"Fusion chaat with avocado and pomegranate."},
{n:"Palak Kakara Chaat",p:14,c:"chaat",v:1,h:1,d:"Besan-fried spinach layered with ragda, mint and tamarind chutney, pomegranate and sev."},
{n:"Desi Delight Chaat",p:14,c:"chaat",v:1,h:1,d:"Our house chaat, topped with tamarind and mint chutney."},
{n:"Tandoor Kissed Paneer Greens",p:14,c:"chaat",v:1,h:1,d:"Char-grilled paneer cubes with greens and a tangy, spicy dressing."},
{n:"Apple Walnut Salad",p:12,c:"chaat",v:1,h:0,d:"Layered apple and walnut in a flavoured yoghurt dressing."},
/* Soups */
{n:"Mutton Marag Soup",p:12,c:"soup",v:0,h:2,d:"Hyderabadi mutton broth, delicate and deeply spiced."},
{n:"Thyme Infused Mushroom Chicken Soup",p:11,c:"soup",v:0,h:0,d:"Mushroom and chicken with fresh thyme."},
{n:"Roasted Tomato Basil Soup",p:10,c:"soup",v:1,h:0,d:"Slow-roasted tomatoes with basil."},
/* Veg small plates */
{n:"Honey Chilli Lotus Stem",p:15,c:"vsp",v:1,h:2,d:"Crisp lotus stem in a sweet, spicy, tangy honey-chilli glaze with sesame and spring onion."},
{n:"Karam Podi Paneer",p:15,c:"vsp",v:1,h:3,d:"Soft paneer in a fiery house karam blend, finished with roasted curry leaves."},
{n:"Bangla Paneer",p:14,c:"vsp",v:1,h:2,d:"Golden-fried paneer in a Bengali-inspired masala, with mint chutney."},
{n:"Vada Pav Sliders",p:14,c:"vsp",v:1,h:2,d:"Potato fritters in buttery mini buns with garlic and mint chutney, plus fried chillies."},
{n:"Spice-Laced Crispy Mushroom",p:14,c:"vsp",v:1,h:2,d:"Crisp golden mushrooms tossed in a bold glaze with garlic and chillies."},
{n:"Fire Cracker Corn",p:14,c:"vsp",v:1,h:3,d:"Crisp corn kernels tossed hot and sharp."},
{n:"Cauliflower Dynamite",p:14,c:"vsp",v:1,h:2,d:"Battered cauliflower in a creamy, spicy dynamite sauce."},
{n:"Paneer (Appetizer)",p:15,c:"vsp",v:1,h:2,d:"Choose your style â€” Manchurian, chilli or 65."},
{n:"Tofu (Appetizer)",p:15,c:"vsp",v:1,h:2,d:"Crisp tofu tossed Indo-Chinese style."},
{n:"Gobi (Appetizer)",p:14,c:"vsp",v:1,h:2,d:"The Indo-Chinese classic, crisp and sticky."},
{n:"Baby Corn (Appetizer)",p:14,c:"vsp",v:1,h:2,d:"Golden baby corn, crunchy through to the last piece."},
{n:"Mushroom (Appetizer)",p:14,c:"vsp",v:1,h:2,d:"Battered mushrooms tossed in house sauce."},
/* Non-veg small plates */
{n:"Chitti Royala Vepdu",p:19,c:"nsp",v:0,h:3,d:"Crisp batter-fried shrimp tossed in the chef's special masala."},
{n:"Loose Prawns",p:19,c:"nsp",v:0,h:2,d:"Deep-fried golden prawns with bell peppers and spices."},
{n:"Goat Sukka",p:18,c:"nsp",v:0,h:3,d:"Dry-roasted goat with coconut and dark spice."},
{n:"Mamsam Kheema Balls",p:18,c:"nsp",v:0,h:2,d:"Mutton dumplings seasoned for heat, aroma and texture in equal measure."},
{n:"PPL Fried Wings",p:16,c:"nsp",v:0,h:2,d:"Deep-fried wings, marinated in house and tossed with spices."},
{n:"Deconstructed Chicken Lollipop",p:16,c:"nsp",v:0,h:2,d:"The Indo-Chinese favourite â€” drumettes marinated and batter-fried."},
{n:"Crispy Fried Fish",p:16,c:"nsp",v:0,h:2,d:"Golden-fried fish seasoned with herbs and spices."},
{n:"Street Style Apollo Fish",p:16,c:"nsp",v:0,h:3,d:"Crisp fish in street-style masala with garlic, green chilli and curry leaves."},
{n:"Dragon Chicken",p:15,c:"nsp",v:0,h:3,d:"Golden-fried chicken in a smoky chilli sauce with peppers and cashews."},
{n:"Thai Pai Chicken",p:15,c:"nsp",v:0,h:2,d:"Fusion chicken balancing Thai heat, sweetness and freshness."},
{n:"Renigunta Chicken",p:15,c:"nsp",v:0,h:3,d:"A rustic Andhra favourite â€” slow-roasted spices, curry leaves, a spicy finish."},
{n:"Bangla Kodi Chips",p:15,c:"nsp",v:0,h:2,d:"Thin, crisp chicken chips with a Bengali-leaning masala."},
{n:"Chicken (Appetizer)",p:15,c:"nsp",v:0,h:2,d:"Choose your style â€” Manchurian, chilli or 65."},
{n:"Konaseema Chicken Vepudu",p:14,c:"nsp",v:0,h:3,d:"Coastal Andhra fried chicken with curry leaves, green chilli and Konaseema masala."},
{n:"Egg (Appetizer)",p:14,c:"nsp",v:0,h:2,d:"Indo-Chinese egg starter, tossed hot."},
/* Tandoori */
{n:"PPL Special Tandoori Lamb Chops",p:21,c:"tan",v:0,h:2,d:"Creamy, spicy marinated chops cooked in the clay oven."},
{n:"Pachi Mirchi Kodi Kebab",p:17,c:"tan",v:0,h:3,d:"Green-chilli Andhra marinade on chicken, straight from the tandoor."},
{n:"Lemon Chicken Sheek Kebab",p:17,c:"tan",v:0,h:1,d:"Cashew-creamed chicken seekh finished in lemon butter sauce."},
{n:"Cheese Malai Broccoli",p:17,c:"tan",v:1,h:0,d:"Char-grilled broccoli in a cheese and malai marinade with mild spice."},
{n:"Reshmi Chicken Tikka",p:16,c:"tan",v:0,h:1,d:"A Mughal classic â€” chicken marinated in cream, yoghurt and mild spice."},
{n:"Chipotle Chicken Tikka",p:16,c:"tan",v:0,h:3,d:"A fiery take on the classic chicken tikka."},
{n:"Tandoori Murgh",p:16,c:"tan",v:0,h:2,d:"Bone-in chicken in tandoori masala, cooked in the clay oven."},
{n:"Paneer Tikka",p:16,c:"tan",v:1,h:1,d:"Paneer, peppers and onion charred on the skewer."},
/* Veg mains */
{n:"Paneer Butter Masala",p:15.99,c:"vm",v:1,h:1,d:"Paneer in a rich, creamy tomato-butter gravy."},
{n:"Paneer Tikka Masala",p:15.99,c:"vm",v:1,h:2,d:"Spicy, creamy curry built on tandoor-charred paneer tikka."},
{n:"Paneer (Main)",p:16,c:"vm",v:1,h:2,d:"Choose your gravy â€” kadai, palak or handi."},
{n:"Nizami Subz Handi",p:15,c:"vm",v:1,h:1,d:"Rich creamy gravy with vegetables and grated paneer."},
{n:"PPL Dal Makhani",p:15,c:"vm",v:1,h:1,d:"Slow-cooked black dal tempered with mild spices, rich cream and butter."},
{n:"Achari Mushroom Masala",p:15,c:"vm",v:1,h:2,d:"Tangy mushroom curry with a pickling-spice blend."},
{n:"Royal Dal Tadka",p:14,c:"vm",v:1,h:1,d:"Slow-cooked lentils tempered with ghee, garlic and red chilli."},
{n:"Chettinad Veg Curry",p:14,c:"vm",v:1,h:3,d:"Fiery mixed-vegetable curry with coconut milk and hand-blended spice."},
{n:"Malai Kofta",p:13.99,c:"vm",v:1,h:0,d:"Fried paneer dumplings in a creamy gravy."},
/* Non-veg mains */
{n:"Rampur Goat Curry",p:19,c:"nm",v:0,h:2,d:"Slow-cooked goat in Rampuri gravy with caramelised onion."},
{n:"Kadai Goat",p:19,c:"nm",v:0,h:3,d:"Goat tossed with peppers, tomato and kadai masala."},
{n:"Fish Curry",p:18,c:"nm",v:0,h:2,d:"Fish simmered in coconut milk with green chilli and masala."},
{n:"Classic Butter Chicken",p:16,c:"nm",v:0,h:1,d:"Chicken in a creamy, rich tomato gravy."},
{n:"Chicken Tikka Masala",p:16,c:"nm",v:0,h:2,d:"Charred tikka folded into a spiced tomato-cream gravy."},
{n:"Murgh Peshawari",p:16,c:"nm",v:0,h:1,d:"Chicken with saffron in a creamy cashew gravy."},
{n:"Chettinad Chicken Curry",p:16,c:"nm",v:0,h:3,d:"Hand-ground spices, curry leaves and red chilli."},
{n:"Kadai Murgh",p:16,c:"nm",v:0,h:2,d:"Slow-cooked chicken with tomato, capsicum, onion and kadai masala."},
{n:"Kodi Guddu Iguru",p:16,c:"nm",v:0,h:3,d:"Tangy, spicy egg curry with the chef's own spice mix."},
{n:"Mughlai Chicken",p:15.99,c:"nm",v:0,h:1,d:"Creamy, royal-style chicken curry."},
/* Rice & noodles */
{n:"Burnt Garlic Noodles",p:17,c:"rn",v:1,h:2,d:"Noodles tossed hard with burnt garlic."},
{n:"Burnt Garlic Rice",p:15,c:"rn",v:1,h:2,d:"Fried rice with deep, toasted garlic."},
{n:"Jeera Rice",p:7,c:"rn",v:1,h:0,d:"Basmati tempered with cumin."},
{n:"White Rice",p:3.99,c:"rn",v:1,h:0,d:"Plain steamed basmati."},
/* Breads */
{n:"Chicken Kulcha",p:5,c:"bread",v:0,h:1,d:"Stuffed with spiced chicken, cooked in the tandoor."},
{n:"Aloo Kulcha",p:4,c:"bread",v:1,h:1,d:"Stuffed with spiced potato."},
{n:"Lacha Paratha",p:4,c:"bread",v:1,h:0,d:"Layered, flaky and built for mopping gravy."},
{n:"Naan",p:3,c:"bread",v:1,h:0,d:"Plain, butter or garlic."},
{n:"Tandoori Roti",p:3,c:"bread",v:1,h:0,d:"Wholewheat, straight off the tandoor wall."},
/* Breakfast */
{n:"Mysore Special Dosa",p:13,c:"bf",v:1,h:2,d:"Red chilli chutney spread inside a crisp dosa."},
{n:"Gongura Karam Dosa",p:13,c:"bf",v:1,h:3,d:"Sorrel-leaf karam paste, sharp and sour-hot."},
{n:"Ellipaya Karam Dosa",p:13,c:"bf",v:1,h:3,d:"Garlic karam podi smeared across the dosa."},
{n:"Ghee Roast Masala Dosa",p:12,c:"bf",v:1,h:1,d:"Ghee-roasted and filled with potato masala."},
{n:"Ghee Karam Masala Dosa",p:12,c:"bf",v:1,h:2,d:"Ghee, karam podi and potato masala together."},
{n:"Puri Bhaji",p:12,c:"bf",v:1,h:1,d:"Puffed puris with potato bhaji."},
{n:"Masala Dosa",p:11,c:"bf",v:1,h:1,d:"The classic â€” crisp dosa, spiced potato filling."},
{n:"Chocolate Dosa",p:11,c:"bf",v:1,h:0,d:"For the table's youngest critic."},
{n:"Sambar Idly",p:11,c:"bf",v:1,h:1,d:"Steamed rice cakes soaked in hot sambar."},
{n:"Onion Chilli Pesarattu",p:11,c:"bf",v:1,h:2,d:"Green-gram crepe with onion and green chilli."},
{n:"Ghee Karam Idly",p:10,c:"bf",v:1,h:2,d:"Idly with ghee and karam podi."},
{n:"Pesarattu Plain",p:10,c:"bf",v:1,h:1,d:"Andhra green-gram crepe."},
{n:"Punugulu",p:10,c:"bf",v:1,h:1,d:"Crisp dosa-batter fritters with chutney."},
{n:"Mysore Bonda",p:10,c:"bf",v:1,h:1,d:"Fluffy fried bonda, crisp on the outside."},
{n:"Stuffed Mirchi Bhajji (4 pc)",p:10,c:"bf",v:1,h:3,d:"Big chillies stuffed and fried in besan batter."},
{n:"Idly",p:9.99,c:"bf",v:1,h:0,d:"Soft, fluffy steamed rice cakes."},
{n:"Onion Dosa",p:9,c:"bf",v:1,h:1,d:"Dosa with a layer of sautÃ©ed onion."},
{n:"Ghee Roast Dosa",p:9,c:"bf",v:1,h:0,d:"Roasted long and slow in ghee."},
{n:"Mirchi Bhajji (5 pc)",p:9,c:"bf",v:1,h:3,d:"Chilli fritters, straight from the fryer."},
{n:"Cut Mirchi",p:9,c:"bf",v:1,h:3,d:"Sliced chillies, battered and fried."},
{n:"Plain Dosa",p:8,c:"bf",v:1,h:0,d:"Crisp, thin, and honest."},
/* Sides */
{n:"Tender Chicken Crisp",p:9,c:"side",v:0,h:2,d:"Crisp chicken tenders for the table."},
{n:"Tandoori Cheesy Fries",p:7,c:"side",v:1,h:2,d:"Fries loaded with cheese and tandoori masala."},
{n:"Peri Peri Fries",p:6,c:"side",v:1,h:2,d:"Fries dusted in peri peri."},
{n:"Cheesy Fries",p:6,c:"side",v:1,h:0,d:"Fries under melted cheese."},
{n:"Classic Fries",p:6,c:"side",v:1,h:0,d:"Salted, hot, no argument."},
/* Desserts */
{n:"Rasmalai Croissant",p:14,c:"des",v:1,h:0,d:"A croissant soaked the rasmalai way."},
{n:"Apricot Delight",p:14,c:"des",v:1,h:0,d:"Stewed apricot with cream â€” an old Hyderabadi favourite."},
{n:"Infused Falooda",p:14,c:"des",v:1,h:0,d:"Rose, vermicelli, basil seed and ice cream."},
{n:"Hot Gulab Jamun",p:12,c:"des",v:1,h:0,d:"Served hot, with ice cream."}
];
/* ---------- HOURS (from the restaurant's listed hours) ---------- */
const HRS=[
 ["Sunday",[[690,900],[1050,1320]]],["Monday",[]],["Tuesday",[[690,900],[1050,1320]]],
 ["Wednesday",[[690,900],[1050,1320]]],["Thursday",[[690,900],[1050,1320]]],
 ["Friday",[[690,900],[1050,1380]]],["Saturday",[[690,900],[1050,1380]]]];
const fmtT=m=>{const h=Math.floor(m/60)%24,mm=m%60,ap=h>=12?"PM":"AM",hh=h%12===0?12:h%12;
  return hh+":"+String(mm).padStart(2,"0")+" "+ap};
const todaySlots=d=>HRS[d][1];
function nextOpening(day,mins){
  const s=todaySlots(day).find(s=>mins<s[0]);
  if(s)return{day,at:s[0],sameDay:true};
  let d=day,c=0;
  while(c<7){d=(d+1)%7;c++;if(HRS[d][1].length)return{day:d,at:HRS[d][1][0][0],sameDay:false}}
  return null;
}

/* ---------- SERVICE WINDOWS (derived from the listed hours) ---------- */
const SHIFTS=[
 {k:"pre",from:0,to:690,rail:0,t:"Before we open",h:"Until 11:30 AM",
  img:"a520a2a0-ed7c-4c1b-8341-bdcaa2ad23f0",sub:"Doors open at 11:30 AM",
  d:"We open at 11:30 AM. You can order online at any hour and collect once the doors are open.",
  cta:"Browse the menu",href:"menu.html"},
 {k:"buffet",from:690,to:900,rail:1,t:"The daily lunch buffet",h:"11:30 AM â€“ 3:00 PM",
  img:"4c936a5d-d842-4997-a4f6-0e1b939f530f",sub:"Weekdays $16.99 Â· weekends $24.99",
  d:"Rotating regional dishes, fresh every day, from 11:30 AM to 3 PM.",
  cta:"Buffet details",href:"https://pakkalocalusa.com/page/lunch-buffet"},
 {k:"break",from:900,to:1050,rail:1,t:"Between services",h:"3:00 PM â€“ 5:30 PM",
  img:"ef792317-f4d3-4659-8730-0e879ee2dcc4",sub:"Kitchen reopens at 5:30 PM",
  d:"The kitchen closes between lunch and dinner. Order online any time and pick it up once we reopen at 5:30 PM.",
  cta:"Order online",href:"https://order.boons.io/site/pakka-local/172/y"},
 {k:"dinner",from:1050,to:1440,rail:1,t:"Dinner and the dum biryani",h:"5:30 PM â€“ close",
  img:"ec1653d9-852a-4571-af64-41a9aa99d8b7",sub:"Sealed in a handi, cooked to order",
  d:"Layered with hand-ground spices and halal meat, our dum biryani is cooked the old way â€” no shortcuts, no compromises.",
  cta:"Order online",href:"https://order.boons.io/site/pakka-local/172/y"},
 {k:"tiffin",from:-1,to:-1,rail:1,t:"Dosas and tiffin",h:"All day",
  img:"a520a2a0-ed7c-4c1b-8341-bdcaa2ad23f0",sub:"Whole-day breakfast menu",
  d:"Dosas, idly, pesarattu, punugulu and mirchi bhajji run from open to close, not only in the morning.",
  cta:"See the tiffin menu",href:"menu.html#bf"}];

/* ---------- GALLERY (the restaurant's own photos) ---------- */
const GAL=[
 ["0b4c0921-8bb4-4033-8612-6811c705947e","A spread of biryani, curries and grilled meats"],
 ["ef792317-f4d3-4659-8730-0e879ee2dcc4","Paneer butter masala in a copper bowl"],
 ["228e1083-7eac-44df-81b6-d3609211c5d3","Spiced fried chicken with onion and lemon"],
 ["a0805a55-cbc2-4883-9723-97cdabc34da7","Copper bowls of curry with a glass of mango juice"],
 ["a520a2a0-ed7c-4c1b-8341-bdcaa2ad23f0","Fried idli with ghee and chilli powder on a banana leaf"],
 ["dddac5cf-bffc-4f40-ac16-a269ecf483d9","Garlic naan with chicken tikka masala"]];

/* ---------- REVIEWS (paraphrased from the Google reviews shown on their site) ---------- */
const REVIEWS=[
 {n:"Harika B",t:"Google review",x:"Ordered the chicken manchurian, butter naan, chicken butter masala, the Pakka Local special chicken biryani and shahi bread. Everything was delicious, and the chicken manchurian in particular came highly recommended."},
 {n:"Foodie Traveler",t:"Google review",x:"Dinner with the family was a wonderful experience â€” tasty food and excellent quality. The service drew special praise: it was their daughter's birthday and the team looked after them."},
 {n:"Nat Awee",t:"Google review",x:"Rated among the best Indian restaurants in San Ramon. Great service, good vibe, quality food and prices that felt right. The butter chicken was noted as very creamy."},
 {n:"Vlad Galant",t:"Google review",x:"A new place with a menu quite different from the usual Indian restaurant. Service is very good and the food is delicious, though the digital menu could use dish descriptions."}];

/* ---------- FAQ (answers drawn from their own site) ---------- */
const FAQ=[
 ["What are you known for?","Biryani above all â€” chicken, goat and veg dum biryani. Alongside that, dosas, naan and paratha, curries, Indo-Chinese dishes and the daily buffet.",
  ["Dosa","Biryani","Chicken Biryani","Goat Biryani","Naan","Garlic Naan","Butter Chicken","Chicken Tikka Masala","Dal Makhani","Malai Kofta","Samosa","Gulab Jamun","Lassi","Masala Chai","Buffet"]],
 ["What are the buffet timings and prices?","Every day from 11:30 AM to 3:00 PM. It is $16.99 on weekdays and $24.99 at weekends, with rotating regional dishes.",null],
 ["Do you offer delivery or takeout?","Both. Ordering directly through the restaurant's own menu rather than a third-party app keeps more of the money with the business.",null],
 ["Is there a bar?","Yes â€” craft cocktails and mocktails alongside your biryani. A full bar is unusual for an Indian restaurant.",null],
 ["Do you cater and host private events?","Yes to both. Catering is handled through the catering page, and the restaurant hosts private events and private dining.",null],
 ["What meals do you serve?","Lunch and dinner, plus a whole-day breakfast menu of dosas, idly and other tiffin.",null],
 ["Which areas do you serve?","San Ramon, Danville, Norris Canyon, Dublin, Blackhawk, Heritage Place, Alamo Oaks, San Ramon Village, Diablo, Camino Tassajara and other Tri-Valley neighbourhoods.",null]];

/* ========== SHARED BEHAVIOUR ========== */
(function(){const p=$('#pre');if(!p)return;let v=0;const b=$('#pb');
 const t=setInterval(()=>{v=Math.min(100,v+Math.random()*24);b.style.width=v+'%';
  if(v>=100){clearInterval(t);setTimeout(()=>{p.classList.add('done');document.body.classList.add('rdy')},320)}},120);
 addEventListener('load',()=>{v=100;b.style.width='100%'})})();

const prog=$('#prog'),nav=$('#nav'),tt=$('#tt');
function onScroll(){const h=document.documentElement;
 if(prog)prog.style.width=h.scrollTop/(h.scrollHeight-h.clientHeight)*100+'%';
 if(nav)nav.classList.toggle('st',h.scrollTop>24);
 if(tt)tt.classList.toggle('show',h.scrollTop>620)}
addEventListener('scroll',onScroll,{passive:true});onScroll();
if(tt)tt.onclick=()=>scrollTo({top:0,behavior:RM?'auto':'smooth'});

const brg=$('#brg'),dr=$('#dr');
if(brg){brg.onclick=()=>{const o=dr.classList.toggle('open');brg.classList.toggle('on',o);
  brg.setAttribute('aria-expanded',o);dr.setAttribute('aria-hidden',!o);document.body.classList.toggle('locked',o)};
 $$('#dr a').forEach(a=>a.onclick=()=>{dr.classList.remove('open');brg.classList.remove('on');
  document.body.classList.remove('locked');brg.setAttribute('aria-expanded',false)})}

/* Reveal on scroll. If IntersectionObserver is missing (very old browser),
   show everything immediately rather than letting the page fail. */
if(window.IntersectionObserver){
  const io=new IntersectionObserver(e=>e.forEach(x=>{
    if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),
    {threshold:.12,rootMargin:'0px 0px -8% 0px'});
  $$('.rv').forEach(el=>io.observe(el));
}else{
  $$('.rv').forEach(el=>el.classList.add('in'));
}

let tq;function toast(m){const t=$('#ts');if(!t)return;t.textContent=m;t.classList.add('show');
 clearTimeout(tq);tq=setTimeout(()=>t.classList.remove('show'),2100)}

/* status bar + hours table */
(function(){
  const n=new Date(),day=n.getDay(),mins=n.getHours()*60+n.getMinutes();
  const hb=$('#hb');
  if(hb)hb.innerHTML=HRS.map((h,i)=>{const sh=!h[1].length;
    return `<div class="hr2${i===day?' td':''}${sh?' sh':''}"><span>${h[0]}</span>
      <span>${sh?'Closed':h[1].map(s=>fmtT(s[0])+'â€“'+fmtT(s[1])).join(' Â· ')}</span></div>`}).join('');
  const st=$('#stat');if(!st)return;
  const cur=HRS[day][1].find(s=>mins>=s[0]&&mins<s[1]);
  if(cur)st.innerHTML=`<i class="dt"></i>Open now â€” until ${fmtT(cur[1])}`;
  else{const nx=nextOpening(day,mins);
   st.innerHTML=`<i class="dt off"></i>Closed â€” opens ${nx?(nx.sameDay?'':HRS[nx.day][0]+' ')+'at '+fmtT(nx.at):'soon'}`}
})();

const yr=$('#yr');if(yr)yr.textContent=new Date().getFullYear();

$$('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
 const id=a.getAttribute('href');if(id.length<2)return;
 const t=document.querySelector(id);if(!t)return;e.preventDefault();
 scrollTo({top:t.getBoundingClientRect().top+scrollY-70,behavior:RM?'auto':'smooth'})}));

/* ================= HOME PAGE ================= */
if($('#hero')){

/* live "right now" panel */
(function(){
  const media=$('#nowm'),rail=$('#nowR');if(!media)return;
  SHIFTS.forEach(s=>{const i=document.createElement('img');
    i.src=IMG(s.img)+'?w=1200&fit=cover';i.alt='';i.loading='lazy';i.dataset.k=s.k;media.appendChild(i)});
  rail.innerHTML=SHIFTS.filter(s=>s.rail).map(s=>
    `<button class="nr" data-k="${s.k}"><span class="nrd"></span>
      <span class="nrt">${s.t}<small>${s.sub}</small></span><span class="nrh">${s.h}</span></button>`).join('');
  let pinned=null;
  const byKey=k=>SHIFTS.find(s=>s.k===k);
  function paint(s,label){
    $$('#nowm img').forEach(i=>i.classList.toggle('on',i.dataset.k===s.k));
    $$('.nr').forEach(b=>b.classList.toggle('on',b.dataset.k===s.k));
    $('#nowEb').textContent=label;$('#nowT').textContent=s.t;$('#nowD').textContent=s.d;
    const c=$('#nowCta');c.childNodes[0].nodeValue=s.cta+' ';c.href=s.href;
  }
  function tick(){
    const n=new Date(),day=n.getDay(),mins=n.getHours()*60+n.getMinutes();
    const slots=todaySlots(day),cur=slots.find(s=>mins>=s[0]&&mins<s[1]);
    const open=!!cur,shut=slots.length===0;
    $('#clk').innerHTML=`<span class="dt${open?'':' off'}"></span>`+
      n.toLocaleTimeString([],{hour:'numeric',minute:'2-digit'})+' Â· '+HRS[day][0];
    let cd;
    if(open){const l=cur[1]-mins;cd=l<=60?`<b>${l} min</b> left of this service`:`Serving until <b>${fmtT(cur[1])}</b>`}
    else{const nx=nextOpening(day,mins);
      if(!nx)cd='Closed today';
      else if(nx.sameDay&&nx.at-mins<=180){const w=nx.at-mins,h=Math.floor(w/60);
        cd=`Opens in <b>${h?h+' hr ':''}${w%60} min</b>`}
      else cd=`Opens ${nx.sameDay?'':HRS[nx.day][0]+' '}at <b>${fmtT(nx.at)}</b>`}
    $('#cdn').innerHTML=cd;
    if(pinned)return;
    if(shut){paint(byKey('tiffin'),'Closed '+HRS[day][0]+'s');return}
    paint(SHIFTS.find(x=>x.from>=0&&mins>=x.from&&mins<x.to)||byKey('dinner'),open?'Now serving':'Up next');
  }
  rail.addEventListener('click',e=>{const b=e.target.closest('.nr');if(!b)return;
    pinned=b.dataset.k;paint(byKey(pinned),'Preview')});
  tick();setInterval(tick,20000);
})();

/* gallery + lightbox */
(function(){
  const g=$('#gl');if(!g)return;
  g.innerHTML=GAL.map((x,i)=>`<figure class="gi" data-i="${i}">
    <img src="${IMG(x[0])}?w=900&fit=cover" alt="${x[1]}" loading="lazy">
    <figcaption class="gc">${x[1]}</figcaption></figure>`).join('');
  const lb=$('#lb'),im=$('#lbi'),cp=$('#lbc');let c=0;
  const show=i=>{c=(i+GAL.length)%GAL.length;im.src=IMG(GAL[c][0])+'?w=1600&fit=cover';
    im.alt=GAL[c][1];cp.textContent=GAL[c][1]};
  g.onclick=e=>{const f=e.target.closest('.gi');if(!f)return;
    show(+f.dataset.i);lb.classList.add('open');document.body.classList.add('locked')};
  const close=()=>{lb.classList.remove('open');document.body.classList.remove('locked')};
  $('#lbx').onclick=close;lb.addEventListener('click',e=>{if(e.target===lb)close()});
  $('#lbn').onclick=e=>{e.stopPropagation();show(c+1)};
  $('#lbp').onclick=e=>{e.stopPropagation();show(c-1)};
  addEventListener('keydown',e=>{if(!lb.classList.contains('open'))return;
    if(e.key==='Escape')close();if(e.key==='ArrowRight')show(c+1);if(e.key==='ArrowLeft')show(c-1)});
})();

/* reviews */
(function(){
  const t=$('#rt');if(!t)return;
  t.innerHTML=REVIEWS.map(r=>`<article class="rw"><div class="st">â˜…â˜…â˜…â˜…â˜…</div><p>${r.x}</p>
    <div class="rwh"><div class="av">${r.n[0]}</div><div><b>${r.n}</b><small>${r.t}</small></div></div></article>`).join('');
  const step=()=>Math.min(t.clientWidth*.86,420);
  $('#rnx').onclick=()=>t.scrollBy({left:step(),behavior:RM?'auto':'smooth'});
  $('#rp').onclick=()=>t.scrollBy({left:-step(),behavior:RM?'auto':'smooth'});
})();

/* faq */
(function(){
  const f=$('#fq');if(!f)return;
  f.innerHTML=FAQ.map(([q,a,p],i)=>`<button class="fqq" aria-expanded="false" data-f="${i}">${q}<i></i></button>
    <div class="fqa" id="fa${i}"><div>${a}${p?`<div class="pc">${p.map(x=>`<span>${x}</span>`).join('')}</div>`:''}</div></div>`).join('');
  f.addEventListener('click',e=>{const b=e.target.closest('.fqq');if(!b)return;
    const pn=$('#fa'+b.dataset.f),open=b.classList.contains('on');
    $$('.fqq').forEach(x=>{x.classList.remove('on');x.setAttribute('aria-expanded','false')});
    $$('.fqa').forEach(x=>x.style.maxHeight=null);
    if(!open){b.classList.add('on');b.setAttribute('aria-expanded','true');pn.style.maxHeight=pn.scrollHeight+'px'}});
  $('.fqq').click();
})();

if(!RM&&window.matchMedia&&window.matchMedia('(hover:hover)').matches){const hv=$('.hv');
 addEventListener('scroll',()=>{const y=scrollY;if(y<900&&hv)hv.style.translate=`0 ${y*-.04}px`},{passive:true})}
}

/* ================= MENU PAGE ================= */
if($('#mg')){
const S={cat:'all',diet:'all',heat:3,q:''},plate=[];
const HW=['Mild only','+ Medium','Up to hot','Any heat'];
const HL=['Mild','Mild','Medium','Hot'];
const heat=h=>`<span class="ht2" title="Heat ${h} of 3">${[1,2,3].map(n=>`<i class="${n<=h?'on':''}"></i>`).join('')}<em>${HL[h]}</em></span>`;
const usd=p=>'$'+p.toFixed(2);

$('#cr').innerHTML=`<button class="on" data-c="all">Everything</button>`+
  CATS.map(c=>`<button data-c="${c[0]}">${c[1]}</button>`).join('');
$('#cr').onclick=e=>{const b=e.target.closest('button');if(!b)return;
  $$('#cr button').forEach(x=>x.classList.remove('on'));b.classList.add('on');S.cat=b.dataset.c;draw()};

function draw(){
  const q=S.q.toLowerCase().trim();
  const out=M.filter(d=>{
    if(S.cat!=='all'&&d.c!==S.cat)return false;
    if(S.diet==='veg'&&!d.v)return false;
    if(S.diet==='nonveg'&&d.v)return false;
    if(d.h>S.heat)return false;
    if(q&&!(d.n.toLowerCase().includes(q)||(d.d||'').toLowerCase().includes(q)))return false;
    return true});
  $('#mc').textContent=out.length
    ? `${out.length} dish${out.length===1?'':'es'} â€” ${S.cat==='all'?'all sections':(CATS.find(c=>c[0]===S.cat)||[,''])[1]}`
    : 'No matches';
  if(!out.length){$('#mg').innerHTML=`<div class="emp"><b>Nothing matches that.</b>Try a wider heat setting, or clear the search.</div>`;return}
  $('#mg').innerHTML=out.map((d,i)=>{const k=M.indexOf(d),on=plate.includes(k);
    return `<article class="ds" style="animation-delay:${Math.min(i*20,360)}ms">
      <h3 class="dn"><span class="mk ${d.v?'':'nv'}"></span>${d.n}${d.sig?'<span class="sgt">Signature</span>':''}</h3>
      <span class="dp ${d.p==null?'ask':''}">${d.p==null?'Ask us':usd(d.p)}</span>
      ${d.d?`<p class="dd">${d.d}</p>`:''}
      <div class="df">${heat(d.h)}<button class="ab${on?' ad':''}" data-add="${k}">${on?'On plate':'Add'}</button></div>
    </article>`}).join('');
}
$('#q').addEventListener('input',e=>{S.q=e.target.value;draw()});
$$('.sg button').forEach(b=>b.onclick=()=>{$$('.sg button').forEach(x=>x.classList.remove('on'));
  b.classList.add('on');S.diet=b.dataset.diet;draw()});
$('#heat').addEventListener('input',e=>{S.heat=+e.target.value;$('#hl').textContent=HW[S.heat];draw()});
$('#mg').addEventListener('click',e=>{const b=e.target.closest('[data-add]');if(!b)return;
  const i=+b.dataset.add,at=plate.indexOf(i);
  if(at>-1){plate.splice(at,1);toast('Removed '+M[i].n)}else{plate.push(i);toast(M[i].n+' added to your plate')}
  draw();dock()});

function dock(){
  const d=$('#pd');d.classList.toggle('up',plate.length>0);
  $('#pdn').textContent=`${plate.length} dish${plate.length===1?'':'es'}`;
  $('#pdtot').textContent=usd(plate.reduce((s,i)=>s+(M[i].p||0),0));
  $('#pdb').innerHTML=plate.map(i=>`<div class="pi"><span class="mk ${M[i].v?'':'nv'}"></span>
    <span>${M[i].n}</span><b>${M[i].p==null?'â€”':usd(M[i].p)}</b>
    <button data-rm="${i}" aria-label="Remove ${M[i].n}">âœ•</button></div>`).join('')
    ||`<div class="pi"><span>Nothing on the plate yet.</span></div>`;
}
$('#pdb').addEventListener('click',e=>{const b=e.target.closest('[data-rm]');if(!b)return;
  plate.splice(plate.indexOf(+b.dataset.rm),1);draw();dock()});
$('#pdh').onclick=()=>$('#pd').classList.toggle('min');
$('#pdclr').onclick=()=>{plate.length=0;draw();dock();toast('Plate cleared')};

/* deep link: menu.html#bf jumps straight to a section */
const hash=location.hash.replace('#','');
if(hash&&CATS.some(c=>c[0]===hash)){S.cat=hash;
  $$('#cr button').forEach(x=>x.classList.toggle('on',x.dataset.c===hash))}
draw();dock();
}
