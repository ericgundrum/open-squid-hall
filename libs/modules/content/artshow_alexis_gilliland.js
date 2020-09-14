var artshow_alexis_gilliland = (function(){

   return {
      textures: {
         "alexis_gilliland-nameplate.png": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "alexis_gilliland-nameplate.png"
               }
         },
         "alexis_gilliland-recipe.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "alexis_gilliland-recipe.jpg"
               }
         },
         "alexis_gilliland-post-literate.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "alexis_gilliland-post-literate.jpg"
               }
         },
         "alexis_gilliland-zwilnik.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "alexis_gilliland-zwilnik.jpg"
               }
         },
         "alexis_gilliland-cell-phone.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "alexis_gilliland-cell-phone.jpg"
               }
         },
         "alexis_gilliland-devil.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "alexis_gilliland-devil.jpg"
               }
         },
         "alexis_gilliland-one-app.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "alexis_gilliland-one-app.jpg"
               }
         },
         "alexis_gilliland-shakespeare.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "alexis_gilliland-shakespeare.jpg"
               }
         },
         "alexis_gilliland-rotsler-gravity.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "alexis_gilliland-rotsler-gravity.jpg"
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
                  "object": "artshow.art-panel-7,8-1",
                  "data": [
                     {
                        "place-name": "alexis_gilliland-art",
                        "options": {
                           "placer": "ArtPlacer",
                           "moreInfoData": {
                              "title": "Alexis Gilliland",
                              "link-text": "More about Alexis Gilliland",
                              "link": "http://fancyclopedia.org/Alexis_Gilliland",
                              "text": "Alexis Gilliland is a Rotsler Award and multiple FAAn award winning fan artist. He is also a professional science fiction writer."
                           }
                        },
                        "data": {
                           "textures": [
                              {
                                 "texture": "alexis_gilliland-nameplate.png",
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
                                 "texture": "alexis_gilliland-recipe.jpg",
                                 "size": [
                                    0.19,
                                    0.3
                                 ],
                                 "position": [
                                    0.05,
                                    0.2
                                 ]
                              },
                              {
                                 "texture": "alexis_gilliland-devil.jpg",
                                 "size": [
                                    0.34,
                                    0.3
                                 ],
                                 "position": [
                                    0.29,
                                    0.2
                                 ]
                              },
                              {
                                 "texture": "alexis_gilliland-one-app.jpg",
                                 "size": [
                                    0.23,
                                    0.3
                                 ],
                                 "position": [
                                    0.68,
                                    0.2
                                 ]
                              },
                              {
                                 "texture": "alexis_gilliland-post-literate.jpg",
                                 "size": [
                                    0.48,
                                    0.3
                                 ],
                                 "position": [
                                    0.05,
                                    0.55
                                 ]
                              },
                              {
                                 "texture": "alexis_gilliland-zwilnik.jpg",
                                 "size": [
                                    0.45,
                                    0.3
                                 ],
                                 "position": [
                                    0.58,
                                    0.55
                                 ]
                              },
                              {
                                 "texture": "alexis_gilliland-cell-phone.jpg",
                                 "size": [
                                    0.42,
                                    0.3
                                 ],
                                 "position": [
                                    0.05,
                                    0.9
                                 ]
                              },
                              {
                                 "texture": "alexis_gilliland-shakespeare.jpg",
                                 "size": [
                                    0.46,
                                    0.3
                                 ],
                                 "position": [
                                    0.52,
                                    0.9
                                 ]
                              },
                              {
                                 "texture": "alexis_gilliland-rotsler-gravity.jpg",
                                 "size": [
                                    0.49,
                                    0.3
                                 ],
                                 "position": [
                                    0.05,
                                    1.25
                                 ]
                              }
                           ],
                           "place-on": "front"
                        }
                     }
                  ]
               },
            ]
         },
      }
   };
})();
SQUIDSPACE.addAutoloadModule(artshow_alexis_gilliland);