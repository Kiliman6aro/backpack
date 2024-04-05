

var app = new Vue({
    el: '#app',
    data: {
        users: [
            {
                "id": "cae811d2-8767-4bdf-b0a5-b053b2916488",
                "username": "Jerel13",
                "email": "Colten73@hotmail.com",
                "avatar": "https://loremflickr.com/320/240",
                "is_active": true,
                "timezone": "America/Mexico_City",
                "role": "a",
                "profile": {
                    "firstName": "Cruz",
                    "lastName": "Fritsch",
                    "birthday": "2023-05-25T23:51:10.265Z",
                    "address": "452 Aubrey Lodge"
                }
            },
            {
                "id": "85a40c17-054b-4aac-9ca1-e85527fec8b2",
                "username": "Kyler22",
                "email": "Amber22@hotmail.com",
                "avatar": "https://loremflickr.com/320/240/girl",
                "is_active": false,
                "timezone": "Asia/Kolkata",
                "role": "a",
                "profile": {
                    "firstName": "Alia",
                    "lastName": "Pfannerstill",
                    "birthday": "2023-07-18T02:31:23.421Z",
                    "address": "2189 Ignatius Light"
                }
            },
            {
                "id": "ebb6bcfa-6ff0-4aaf-bf63-4cdeb244532b",
                "username": "Reid.Huels",
                "email": "Bert.Kassulke20@gmail.com",
                "avatar": "https://loremflickr.com/320/240/men",
                "is_active": false,
                "timezone": "Asia/Colombo",
                "role": "b",
                "profile": {
                    "firstName": "Quentin",
                    "lastName": "Paucek",
                    "birthday": "2023-07-07T19:57:03.014Z",
                    "address": "22134 Hagenes Keys"
                }
            },
            {
                "id": "5660857d-9dfb-48dd-95eb-62b02963c2ae",
                "username": "Mallie.Mraz",
                "email": "Elsa_Konopelski@hotmail.com",
                "avatar": "https://loremflickr.com/320/240/dog",
                "is_active": false,
                "timezone": "America/Guatemala",
                "role": "c",
                "profile": {
                    "firstName": "Lesly",
                    "lastName": "Moen",
                    "birthday": "2023-07-18T03:16:56.630Z",
                    "address": "6145 Ayana Glens"
                }
            },
            {
                "id": "3c756045-0a12-4336-bbe0-af75de0192b5",
                "username": "Hailee_Connelly26",
                "email": "Dustin54@gmail.com",
                "avatar": "https://loremflickr.com/320/240/woman",
                "is_active": false,
                "timezone": "America/Mazatlan",
                "role": "c",
                "profile": {
                    "firstName": "Antonietta",
                    "lastName": "Feeney",
                    "birthday": "2023-08-16T14:45:42.189Z",
                    "address": "40796 Ward Camp"
                }
            },
            {
                "id": "ccaa9420-b3b5-4d7b-8758-625ac4efd9ed",
                "username": "Federico_Dooley",
                "email": "Elisa_Hodkiewicz72@gmail.com",
                "avatar": "https://loremflickr.com/320/240/cat",
                "is_active": false,
                "timezone": "Asia/Dhaka",
                "role": "b",
                "profile": {
                    "firstName": "Jeremy",
                    "lastName": "Abernathy",
                    "birthday": "2023-08-02T00:19:13.970Z",
                    "address": "792 Chloe Station"
                }
            },
            {
                "id": "9b4075fd-cdf2-4415-9460-a3620b86baab",
                "username": "Ramiro.Runte",
                "email": "Dereck.Rutherford8@hotmail.com",
                "avatar": "https://loremflickr.com/320/240/boy",
                "is_active": true,
                "timezone": "Asia/Tokyo",
                "role": "a",
                "profile": {
                    "firstName": "George",
                    "lastName": "Schinner",
                    "birthday": "2023-07-21T12:56:59.790Z",
                    "address": "7616 Dibbert Knolls"
                }
            },
            {
                "id": "e50214e6-2791-4774-b8c4-2ea85d18efbf",
                "username": "Dorothea.Ortiz67",
                "email": "Rosamond.Becker@gmail.com",
                "avatar": "https://loremflickr.com/320/240/children",
                "is_active": true,
                "timezone": "Asia/Kathmandu",
                "role": "c",
                "profile": {
                    "firstName": "Corrine",
                    "lastName": "Cummings",
                    "birthday": "2023-10-02T23:25:17.623Z",
                    "address": "899 Ryan Plaza"
                }
            },
            {
                "id": "b1304da4-fbc4-4416-afa1-ab6cff84fa42",
                "username": "Adeline.Mueller14",
                "email": "Nayeli.Dicki@gmail.com",
                "avatar": "https://loremflickr.com/320/240/spring",
                "is_active": true,
                "timezone": "Asia/Jakarta",
                "role": "b",
                "profile": {
                    "firstName": "Maybell",
                    "lastName": "Schmitt",
                    "birthday": "2023-04-11T20:00:35.532Z",
                    "address": "35310 Hagenes Ridge"
                }
            },
            {
                "id": "9d45e482-9b2b-470d-bbe9-1a15a8c06df0",
                "username": "Millie.Veum",
                "email": "Arjun30@hotmail.com",
                "avatar": "https://loremflickr.com/320/240/winter",
                "is_active": true,
                "timezone": "Europe/Vilnius",
                "role": "a",
                "profile": {
                    "firstName": "Alessia",
                    "lastName": "Reichel",
                    "birthday": "2024-03-15T03:57:56.219Z",
                    "address": "11542 Lisette Haven"
                }
            },
            {
                "id": "625a72c3-fe0d-4a05-8491-a6113dbe11c9",
                "username": "Rudy15",
                "email": "Sally_Larson@gmail.com",
                "avatar": "https://loremflickr.com/320/240/gate",
                "is_active": false,
                "timezone": "Etc/UTC",
                "role": "c",
                "profile": {
                    "firstName": "Justine",
                    "lastName": "Boehm",
                    "birthday": "2024-04-02T22:58:45.018Z",
                    "address": "51780 O'Reilly Springs"
                }
            },
            {
                "id": "9f0c0245-e6db-47b5-9261-1e9fd5a8ca9c",
                "username": "Mya.Champlin32",
                "email": "Constance.Parker12@gmail.com",
                "avatar": "https://loremflickr.com/320/240/tiger",
                "is_active": false,
                "timezone": "Europe/Riga",
                "role": "c",
                "profile": {
                    "firstName": "Genesis",
                    "lastName": "Moen",
                    "birthday": "2023-06-14T00:39:27.594Z",
                    "address": "80637 Vladimir Lane"
                }
            },
            {
                "id": "6820e881-581d-4ef7-98be-59526b41c160",
                "username": "Alice29",
                "email": "Brayan_Funk@hotmail.com",
                "avatar": "https://loremflickr.com/320/240/school",
                "is_active": false,
                "timezone": "Pacific/Pago_Pago",
                "role": "b",
                "profile": {
                    "firstName": "Amani",
                    "lastName": "Crona",
                    "birthday": "2023-11-24T00:31:25.663Z",
                    "address": "2295 Murazik Corner"
                }
            }
        ]
    },
    methods: {
        getRole(type){
            let roleName = "User";
            switch(type){
                case "a":
                    roleName = 'Admin'
                    break;
                case "c":
                    roleName = "Manager"
                    break;
                case "b":
                    roleName = "User"
                    break;
                default:
                    roleName = "User";
            }
            return roleName;
        }
    }
})