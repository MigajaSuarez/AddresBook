import { contact } from "src/app/Interfaces/oneContact";

export const testJson: contact = {
    "name": {
        "title": "Mr",
        "first": "Akash",
        "last": "Pujari"
    },
    "location": {
        "street": {
            "number": 158,
            "name": "Maharanipeta"
        },
        "city": "Sagar",
        "state": "Andaman and Nicobar Islands",
        "country": "India",
        "postcode": 51561,
    },
    "email": "akash.pujari@example.com",
    "phone": "9051172721",
    "cell": "7871495761",
    "picture": {
        "large": "https://randomuser.me/api/portraits/men/56.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/56.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/56.jpg"
    }
}
