const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://late-suggestion.surge.sh"
  })
);

const db = {
  restaurants: [
    {
      id: 1,
      name: "n/naka",
      image:
        "https://cdn.vox-cdn.com/thumbor/TlHjzjMHVgFIWhxuMKbvaUckZoo=/0x0:2000x1335/1200x0/filters:focal(0x0:2000x1335):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8774731/2017_06_13_n_naka_031.jpg",
      cuisine: "Japanese",
      description:
        "Upscale Japanese tasting menus prepared by chef Niki Nakayama & served in a modern setting.",
      color: "#ff0000",
      cost: "$$$$"
    },
    {
      id: 2,
      name: "Le Grand",
      image:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1558633458%2FLe-Grand-Dishes-FT-BLOG0519.jpg%3Fitok%3DUC-uS8mJ&w=400&c=sc&poi=face&q=85",
      cuisine: "Mediterranean",
      description:
        "A modern Mediterranean inspired restaurant with a focus on fresh seafood with a coastal California touch.",
      color: "#ff0000",
      cost: "$$$$"
    },
    {
      id: 3,
      name: "Commonwealth",
      image:
        "https://assets.simpleviewinc.com/simpleview/image/fetch/q_75/https://assets.simpleviewinc.com/simpleview/image/upload/crm/boston/CWMP_Main-Dining-Room-copy_2577d80d-5056-a36a-06890328022df441.jpg",
      cuisine: "Small plates",
      description:
        "Glass-fronted bar/grill offering a menu of global small plates in a convivial environment.",
      color: "#ff0000",
      cost: "$$"
    },
    {
      id: 4,
      name: "Kinjiro",
      image:
        "https://3.bp.blogspot.com/-rEx1mhVTwz0/Vi8QDIIBekI/AAAAAAAAjbU/bgclNiB4xt8/s1600/kinjiro-02.jpg",
      cuisine: "Japanese",
      description:
        "Serene setting for Japanese small plates such as octopus ceviche & bone-marrow dengaku.",
      color: "#ff0000"
    },
    {
      id: 5,
      name: "Somni",
      image:
        "https://cdn.vox-cdn.com/thumbor/8LziSiRpfw0vRa5-zX2UExsJaWs=/0x0:2000x1335/1200x675/filters:focal(811x560:1131x880)/cdn.vox-cdn.com/uploads/chorus_image/image/58970831/2018_03_01_Somni_001.0.jpg",
      cuisine: "Spanish",
      description:
        "A tasting-menu only eatery by José Andrés and his team at the SLS Hotel in Beverly Hills.",
      color: "#ff0000",
      cost: "$$$"
    },
    {
      id: 6,
      name: "Bavel",
      image:
        "https://cdn.vox-cdn.com/thumbor/PlWePfLyjIMamlpe7nzJOQBgTnk=/0x0:2000x1334/1200x0/filters:focal(0x0:2000x1334):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10667685/JakobLayman.0418.Bavel_017.jpg",
      cuisine: "Middle Eastern",
      description:
        "Ori Menashe’s Middle Eastern follow-up to his always-packed Bestia, with a similar downtown vibe.",
      color: "#ff0000",
      cost: "$$$"
    }
  ],
  ratings: [
    {
      id: 1,
      restaurant: 1,
      rating: 8.6,
      review:
        "This is dinner as theatre, and it’s not for everyone. You wouldn’t feel out of place in a suit, and it’s not the spot for a rowdy dinner with your loud friends from college. It is, however, one of the best, most refined, experiences you can have in a restaurant in LA.",
      publication: 0,
      url: "https://www.theinfatuation.com/los-angeles/reviews/nnaka"
    },
    {
      id: 2,
      restaurant: 1,
      rating: 9,
      review:
        "Spotless plates hit tablemates simultaneously; left-handed eaters notice how subtly the staff replaces silverware on the correct side. It’s a focused kind of dance, one Nakayama believes is the truest representation of not only her food, but her personal progression.",
      publication: 1,
      url:
        "https://la.eater.com/2017/6/29/15894282/n-naka-kaiseki-niki-nakayama-feature-photos-inside"
    },
    {
      id: 3,
      restaurant: 1,
      rating: 8,
      review:
        "It is almost startling to realize that n/naka may be the first dedicated kaiseki restaurant in Los Angeles, at least the first outside the Japanese expatriate community, and that the sheer level of cooking in this modest bungalow eclipses what you find in grand dining rooms whose chefs appear in national magazines.",
      publication: 2,
      url:
        "https://www.latimes.com/food/la-xpm-2012-jun-15-la-fo-0616-gold-20120616-story.html"
    },
    {
      id: 4,
      restaurant: 2,
      rating: 8,
      review:
        "Entrees include everything from spaghetti, scallops, and a ribeye steak, with other nods towards dishes that speak to the background of Greek chefs Alex and Chris Manos, including housemade pita and shrimp saganaki.",
      publication: 1,
      url:
        "https://la.eater.com/2019/4/24/18514467/le-grand-downtown-opening-new-photos-inside"
    },
    {
      id: 5,
      restaurant: 3,
      rating: 7,
      review:
        "The atmosphere at Commonwealth is trendy but warm and, I suspect, designed on a budget. Tables are typically built for two but larger parties can be accommodated. It’s on the loud side, though we found it more energizing than annoying. I’d say it’s a great spot for first dates or anniversary dinners. If you forget to make a reservation, six stools stand at attention at the wine bar for drop-in diners and drinkers.",
      publication: 2,
      url:
        "https://www.latimes.com/socal/burbank-leader/tn-blr-et-dining-review-commonwealth-dishes-up-uncommon-delights-20140428-story.html"
    },
    {
      id: 6,
      restaurant: 4,
      rating: 8.8,
      review:
        "The miso bubbles and caramelizes beautifully on the sawn bones. The half melted marrow, searingly hot, has a similar softness to the vegetable and carries the sweetness as beautifully but is almost infinitely rich. A spoonful or so will do, smeared onto toast.",
      publication: 2,
      url:
        "https://www.latimes.com/food/jonathan-gold/la-fo-gold-kinjiro-review-20150702-story.html"
    },
    {
      id: 7,
      restaurant: 5,
      rating: 9,
      review:
        "The menu blurs the line between whimsy and academia, between applied theory and cheeky cleverness. Zabala’s pizza margherita is made from powdered egg whites, tomato water, and dolloped with a mozzarella mousse.",
      publication: 1,
      url:
        "https://la.eater.com/2019/12/2/20992126/los-angeles-times-critic-week-in-review-beverly-hills-somni"
    },
    {
      id: 8,
      restaurant: 6,
      rating: 8.9,
      review:
        "Eating at Bavel isn’t about checking it off your list. You eat here because this is one of the most exciting restaurants in Los Angeles, and it feels like it’s going to stay that way. So make that 5pm reservation. And probably a follow-up one in a couple of months, just to be safe.",
      publication: 0,
      url: "https://www.theinfatuation.com/los-angeles/reviews/bavel"
    }
  ],
  publications: [
    {
      name: "The Infatuation",
      image:
        "https://d37219swed47g7.cloudfront.net/static/sg/2017/img/ny/logo_infat.2f0a5cc76458.png"
    },
    {
      name: "Eater LA",
      image:
        "https://www.southbaybyjackie.com/wp-content/uploads/2016/12/Eater-logo-2.png"
    },
    {
      name: "Los Angeles Times",
      image:
        "https://caravanoutpostojai.com/wp-content/uploads/2017/05/latimes-logo.png"
    }
  ]
};

app.get("/api/restaurants", (request, response) => {
  response.json(db.restaurants);
});

app.post("/api/restaurants", (request, response) => {
  const restaurant = request.body;
  restaurant.id = db.restaurants.length + 1;
  db.restaurants.push(restaurant);
  response.json(restaurant);
});

app.post("/api/ratings", (request, response) => {
  const rating = request.body;
  rating.id = db.ratings.length + 1;
  db.ratings.push(rating);
  response.json(rating);
});

app.get("/api/restaurants/:id", (request, response) => {
  const id = Number(request.params.id);
  const post = db.restaurants.find(post => {
    return post.id === id;
  });

  if (post) {
    response.json(post);
  } else {
    response.status(404).send();
  }
});

app.get("/api/publications/", (request, response) => {
  response.json(db.publications);
});

app.get("/api/ratings/", (request, response) => {
  response.json(db.ratings);
});

app.get("/api/restaurants/:id/ratings", (request, response) => {
  const postid = Number(request.params.id);
  console.log("yew");
  const ratings = [];
  db.ratings.find(rating => {
    if (rating.restaurant === postid) {
      ratings.push(rating);
    }
  });
  response.send(ratings);
});

app.patch("/api/restaurants/:id", (request, response) => {
  const id = Number(request.params.id);

  const position = id - 1;

  Object.assign(db.restaurants[position], request.body);
  db.restaurants[position] = restaurant;
});

app.delete("/api/restaurants/:id", (request, response) => {
  const id = Number(request.params.id);
  const restaurant = db.restaurants.find(restaurant => {
    return restaurant.id === id;
  });

  if (restaurant) {
    db.restaurants = db.restaurants.filter(restaurant => {
      return restaurant.id !== id;
    });
    response.status(204).send();
  } else {
    response.status(404).send();
  }

  const reviews = db.ratings;

  if (reviews) {
    db.ratings = db.ratings.filter(rating => {
      return rating.restaurant !== id;
    });
    response.status(204).send();
  } else {
    response.status(404).send();
  }
});

app.listen(process.env.PORT || 3001);
