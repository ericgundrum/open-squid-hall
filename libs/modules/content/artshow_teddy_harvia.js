var artshow_teddy_harvia = (function(){

   return {
      textures: {
         "teddy_harvia-nameplate.png": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "teddy_harvia-nameplate.png"
               }
         },
         "teddy_harvia-colossal-squid.png": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "teddy_harvia-colossal-squid.png"
               }
         },
         "teddy_harvia-loscon_art_300.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "teddy_harvia-loscon_art_300.jpg"
               }
         },
         "teddy_harvia-Headshot.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "teddy_harvia-Headshot.jpg"
               }
         },
         "teddy_harvia-Supermarine_Carousel_300.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "teddy_harvia-Supermarine_Carousel_300.jpg"
               }
         },
         "teddy_harvia-Submarine_Carousel_300.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "teddy_harvia-Submarine_Carousel_300.jpg"
               }
         },},
      materials: {},
      objects: {
      },
      layouts: {
         
         "artshow": {
            "options": {
            },
            "objectPlacements": [
               {
                  "object": "artshow.art-panel-19,20-1",
                  "data": [
                     {
                        "place-name": "teddy_harvia-art",
                        "options": {
                           "placer": "ArtPlacer",
                           "moreInfoData": {
                              "title": "Teddy Harvia",
                              "link-text": "More about Teddy Harvia",
                              "link": "http://fancyclopedia.org/Teddy_Harvia",
                              "text": ""
                           }
                        },
                        "data": {
                           "textures": [
                              {
                                 "texture": "teddy_harvia-nameplate.png",
                                 "size": [
                                    1.1,
                                    0.11
                                 ],
                                 "position": [
                                    0.05,
                                    0.04
                                 ]
                              },
                              {
                                 "texture": "teddy_harvia-colossal-squid.png",
                                 "size": [
                                    1.1,
                                    0.35
                                 ],
                                 "position": [
                                    0.05,
                                    0.2
                                 ]
                              },
                              {
                                 "texture": "teddy_harvia-loscon_art_300.jpg",
                                 "size": [
                                    0.5,
                                    0.73
                                 ],
                                 "position": [
                                    0.05,
                                    0.7
                                 ]
                              },
                              {
                                 "texture": "teddy_harvia-Headshot.jpg",
                                 "size": [
                                    0.3,
                                    0.3
                                 ],
                                 "position": [
                                    0.75,
                                    0.7
                                 ]
                              }
                           ],
                           "place-on": "back"
                        }
                     }
                  ]
               },
               {
                  "object": "artshow.art-panel-19,20-0",
                  "data": [
                     {
                        "place-name": "teddy_harvia-art",
                        "options": {
                           "placer": "ArtPlacer",
                           "moreInfoData": {
                              "title": "Teddy Harvia",
                              "link-text": "More about Teddy Harvia",
                              "link": "http://fancyclopedia.org/Teddy_Harvia",
                              "text": ""
                           }
                        },
                        "data": {
                           "textures": [
                              {
                                 "texture": "teddy_harvia-Supermarine_Carousel_300.jpg",
                                 "size": [
                                    0.5,
                                    0.66
                                 ],
                                 "position": [
                                    0.05,
                                    0.2
                                 ]
                              },
                              {
                                 "texture": "teddy_harvia-Submarine_Carousel_300.jpg",
                                 "size": [
                                    0.5,
                                    0.66
                                 ],
                                 "position": [
                                    0.65,
                                    0.2
                                 ]
                              }
                           ],
                           "place-on": "back"
                        }
                     }
                  ]
               },
            ]
         },
      }
   };
})();
SQUIDSPACE.addAutoloadModule(artshow_teddy_harvia);