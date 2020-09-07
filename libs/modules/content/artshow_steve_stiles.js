var artshow_steve_stiles = (function(){

   return {
      textures: {
         "steve-stiles-nameplate.png": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "steve-stiles-nameplate.png"
               }
         },
         "steve-stiles-chunga-14-back.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "steve-stiles-chunga-14-back.jpg"
               }
         },
         "steve-stiles-chunga-21-front.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "steve-stiles-chunga-21-front.jpg"
               }
         },
         "steve-stiles-File770-164.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "steve-stiles-File770-164.jpg"
               }
         },
         "steve-stiles-Inca10.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "steve-stiles-Inca10.jpg"
               }
         },
         "steve-stiles-Inca12.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "steve-stiles-Inca12.jpg"
               }
         },
         "steve-stiles-trap-door-26.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "steve-stiles-trap-door-26.jpg"
               }
         },
         "steve-stiles-trap-door-28.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "steve-stiles-trap-door-28.jpg"
               }
         },
         "steve-stiles-trap-door-31.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "steve-stiles-trap-door-31.jpg"
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
                  "object": "artshow.art-panel-13,14-0",
                  "data": [
                     {
                        "place-name": "steve-stiles-art",
                        "options": {
                           "placer": "ArtPlacer",
                           "moreInfoData": {
                              "title": "Steve Stiles",
                              "link-text": "More about Steve Stiles",
                              "link": "http://fancyclopedia.org/Steve_Stiles",
                              "text": ""
                           }
                        },
                        "data": {
                           "textures": [
                              {
                                 "texture": "steve-stiles-nameplate.png",
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
                                 "texture": "steve-stiles-chunga-14-back.jpg",
                                 "size": [
                                    0.5,
                                    0.65
                                 ],
                                 "position": [
                                    0.05,
                                    0.2
                                 ]
                              },
                              {
                                 "texture": "steve-stiles-chunga-21-front.jpg",
                                 "size": [
                                    0.5,
                                    0.65
                                 ],
                                 "position": [
                                    0.65,
                                    0.2
                                 ]
                              },
                              {
                                 "texture": "steve-stiles-File770-164.jpg",
                                 "size": [
                                    0.5,
                                    0.65
                                 ],
                                 "position": [
                                    0.05,
                                    1.0
                                 ]
                              },
                              {
                                 "texture": "steve-stiles-trap-door-28.jpg",
                                 "size": [
                                    0.42,
                                    0.65
                                 ],
                                 "position": [
                                    0.69,
                                    1.0
                                 ]
                              }
                           ],
                           "place-on": "back"
                        }
                     }
                  ]
               },
               {
                  "object": "artshow.art-panel-13,14-1",
                  "data": [
                     {
                        "place-name": "steve-stiles-art",
                        "options": {
                           "placer": "ArtPlacer",
                           "moreInfoData": {
                              "title": "Steve Stiles",
                              "link-text": "More about Steve Stiles",
                              "link": "http://fancyclopedia.org/Steve_Stiles",
                              "text": ""
                           }
                        },
                        "data": {
                           "textures": [
                              {
                                 "texture": "steve-stiles-Inca10.jpg",
                                 "size": [
                                    0.46,
                                    0.65
                                 ],
                                 "position": [
                                    0.07,
                                    0.2
                                 ]
                              },
                              {
                                 "texture": "steve-stiles-Inca12.jpg",
                                 "size": [
                                    0.46,
                                    0.65
                                 ],
                                 "position": [
                                    0.67,
                                    0.2
                                 ]
                              },
                              {
                                 "texture": "steve-stiles-trap-door-26.jpg",
                                 "size": [
                                    0.41,
                                    0.65
                                 ],
                                 "position": [
                                    0.09,
                                    1.0
                                 ]
                              },
                              {
                                 "texture": "steve-stiles-trap-door-31.jpg",
                                 "size": [
                                    0.41,
                                    0.65
                                 ],
                                 "position": [
                                    0.69,
                                    1.0
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
SQUIDSPACE.addAutoloadModule(artshow_steve_stiles);