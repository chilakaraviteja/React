import React from "react";
import ReactDOM from "react-dom/client";

const restObj = [
  {
    id: "583805",
    name: "Olio - The Wood Fired Pizzeria",
    cloudinaryImageId: "fm9i2awf97alfu0cfhdg",
    locality: "Rajajinagar",
    areaName: "Rajajinagar",
    costForTwo: "₹300 for two",
    cuisines: ["Pizzas", "Italian"],
    avgRating: 4.2,
    parentId: "11633",
    avgRatingString: "4.2",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 35,
      lastMileTravel: 4.7,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "4.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: { nextCloseTime: "2024-08-11 05:00:00", opened: true },
    badges: {
      imageBadges: [{ imageId: "newg.png", description: "Gourmet" }],
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            { attributes: { description: "Gourmet", imageId: "newg.png" } },
          ],
        },
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
              },
            },
          ],
        },
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹125 OFF",
      subHeader: "ABOVE ₹249",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: { aggregatedRating: { rating: "--" } },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "405105",
    name: "Leon's - Burgers & Wings (Leon Grill)",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/2/4c1e29e2-fecf-41b6-8b21-5a58338247fe_405105.jpg",
    locality: "West of Chord Road",
    areaName: "Rajajinagar",
    costForTwo: "₹300 for two",
    cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
    avgRating: 4.4,
    parentId: "371281",
    avgRatingString: "4.4",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 26,
      lastMileTravel: 3.8,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "3.8 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: { nextCloseTime: "2024-08-11 04:00:00", opened: true },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
    },
    aggregatedDiscountInfoV3: {
      header: "₹125 OFF",
      subHeader: "ABOVE ₹249",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: { aggregatedRating: { rating: "--" } },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "334501",
    name: "Le MoMo",
    cloudinaryImageId: "zjbpim0nfx0l1ffx8lrn",
    locality: "KGE Layout",
    areaName: "Sahakara Nagar",
    costForTwo: "₹150 for two",
    cuisines: ["Chinese"],
    avgRating: 4.1,
    parentId: "124527",
    avgRatingString: "4.1",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 35,
      lastMileTravel: 8.8,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "8.8 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: { nextCloseTime: "2024-08-11 05:00:00", opened: true },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
    },
    aggregatedDiscountInfoV3: {
      header: "20% OFF",
      subHeader: "ABOVE ₹700",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: { aggregatedRating: { rating: "--" } },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "580103",
    name: "The Pastry Zone",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/28/2b2fe8aa-2274-4158-9338-ccef25fe2da4_580103.ss.jpg",
    locality: "Devasandra Layout",
    areaName: "Devasandra",
    costForTwo: "₹150 for two",
    cuisines: ["Bakery", "Desserts", "Ice Cream"],
    avgRating: 4.4,
    veg: true,
    parentId: "212397",
    avgRatingString: "4.4",
    totalRatingsString: "500+",
    sla: {
      deliveryTime: 33,
      lastMileTravel: 8.3,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "8.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: { nextCloseTime: "2024-08-17 00:00:00", opened: true },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
    },
    aggregatedDiscountInfoV3: {
      header: "₹70 OFF",
      subHeader: "ABOVE ₹179",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: { aggregatedRating: { rating: "--" } },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "787851",
    name: "Pizza Hut",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/18/accd1c37-3440-45f0-9799-9f98706e7eef_787851.jpg",
    locality: "RAJKUMAR ROAD",
    areaName: "RAJAJINAGAR",
    costForTwo: "₹350 for two",
    cuisines: ["Pizzas"],
    avgRating: 4.2,
    parentId: "721",
    avgRatingString: "4.2",
    totalRatingsString: "500+",
    sla: {
      deliveryTime: 35,
      lastMileTravel: 4.4,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "4.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: { nextCloseTime: "2024-08-11 05:00:00", opened: true },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
    },
    aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹189" },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: { aggregatedRating: { rating: "--" } },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "558068",
    name: "Pizza 99",
    cloudinaryImageId: "wkrucpjnjo56buc4h2in",
    locality: "3rd stage",
    areaName: "Basaveshwar Nagar",
    costForTwo: "₹300 for two",
    cuisines: ["Pizzas"],
    avgRating: 3.4,
    parentId: "10720",
    avgRatingString: "3.4",
    totalRatingsString: "3",
    sla: {
      deliveryTime: 30,
      lastMileTravel: 2.7,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "2.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: { nextCloseTime: "2024-08-11 05:02:00", opened: true },
    badges: {},
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: { aggregatedRating: { rating: "--" } },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "583805",
    name: "Olio - The Wood Fired Pizzeria",
    cloudinaryImageId: "fm9i2awf97alfu0cfhdg",
    locality: "Rajajinagar",
    areaName: "Rajajinagar",
    costForTwo: "₹300 for two",
    cuisines: ["Pizzas", "Italian"],
    avgRating: 4.2,
    parentId: "11633",
    avgRatingString: "4.2",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 35,
      lastMileTravel: 4.7,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "4.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: { nextCloseTime: "2024-08-11 05:00:00", opened: true },
    badges: {
      imageBadges: [{ imageId: "newg.png", description: "Gourmet" }],
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            { attributes: { description: "Gourmet", imageId: "newg.png" } },
          ],
        },
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
              },
            },
          ],
        },
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹125 OFF",
      subHeader: "ABOVE ₹249",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: { aggregatedRating: { rating: "--" } },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "405105",
    name: "Leon's - Burgers & Wings (Leon Grill)",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/2/4c1e29e2-fecf-41b6-8b21-5a58338247fe_405105.jpg",
    locality: "West of Chord Road",
    areaName: "Rajajinagar",
    costForTwo: "₹300 for two",
    cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
    avgRating: 4.4,
    parentId: "371281",
    avgRatingString: "4.4",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 26,
      lastMileTravel: 3.8,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "3.8 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: { nextCloseTime: "2024-08-11 04:00:00", opened: true },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
    },
    aggregatedDiscountInfoV3: {
      header: "₹125 OFF",
      subHeader: "ABOVE ₹249",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: { aggregatedRating: { rating: "--" } },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "334501",
    name: "Le MoMo",
    cloudinaryImageId: "zjbpim0nfx0l1ffx8lrn",
    locality: "KGE Layout",
    areaName: "Sahakara Nagar",
    costForTwo: "₹150 for two",
    cuisines: ["Chinese"],
    avgRating: 4.1,
    parentId: "124527",
    avgRatingString: "4.1",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 35,
      lastMileTravel: 8.8,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "8.8 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: { nextCloseTime: "2024-08-11 05:00:00", opened: true },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
    },
    aggregatedDiscountInfoV3: {
      header: "20% OFF",
      subHeader: "ABOVE ₹700",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: { aggregatedRating: { rating: "--" } },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "580103",
    name: "The Pastry Zone",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/28/2b2fe8aa-2274-4158-9338-ccef25fe2da4_580103.ss.jpg",
    locality: "Devasandra Layout",
    areaName: "Devasandra",
    costForTwo: "₹150 for two",
    cuisines: ["Bakery", "Desserts", "Ice Cream"],
    avgRating: 4.4,
    veg: true,
    parentId: "212397",
    avgRatingString: "4.4",
    totalRatingsString: "500+",
    sla: {
      deliveryTime: 33,
      lastMileTravel: 8.3,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "8.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: { nextCloseTime: "2024-08-17 00:00:00", opened: true },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
    },
    aggregatedDiscountInfoV3: {
      header: "₹70 OFF",
      subHeader: "ABOVE ₹179",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: { aggregatedRating: { rating: "--" } },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "787851",
    name: "Pizza Hut",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/18/accd1c37-3440-45f0-9799-9f98706e7eef_787851.jpg",
    locality: "RAJKUMAR ROAD",
    areaName: "RAJAJINAGAR",
    costForTwo: "₹350 for two",
    cuisines: ["Pizzas"],
    avgRating: 4.2,
    parentId: "721",
    avgRatingString: "4.2",
    totalRatingsString: "500+",
    sla: {
      deliveryTime: 35,
      lastMileTravel: 4.4,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "4.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: { nextCloseTime: "2024-08-11 05:00:00", opened: true },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
    },
    aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹189" },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: { aggregatedRating: { rating: "--" } },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "558068",
    name: "Pizza 99",
    cloudinaryImageId: "wkrucpjnjo56buc4h2in",
    locality: "3rd stage",
    areaName: "Basaveshwar Nagar",
    costForTwo: "₹300 for two",
    cuisines: ["Pizzas"],
    avgRating: 3.4,
    parentId: "10720",
    avgRatingString: "3.4",
    totalRatingsString: "3",
    sla: {
      deliveryTime: 30,
      lastMileTravel: 2.7,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "2.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: { nextCloseTime: "2024-08-11 05:02:00", opened: true },
    badges: {},
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: { aggregatedRating: { rating: "--" } },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
];

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ restObj }) => {
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    restObj;
  return (
    <div className="res-card">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${cloudinaryImageId}`}
        alt="pizza"
      />
      <div className="res-content">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString}</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* we should not use index in map */}
        {restObj.map((restData, idx) => (
          <RestaurantCard restObj={restData} key={idx} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
