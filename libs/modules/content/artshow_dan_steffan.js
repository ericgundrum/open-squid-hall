var artshow_dan_steffan = (function(){

   return {
      textures: {
         "dan_steffan-nameplate.png": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "dan_steffan-nameplate.png"
               }
         },
         "dan_steffan-Banana-Wings-50.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "dan_steffan-Banana-Wings-50.jpg"
               }
         },
         "dan_steffan-chung-11-front.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "dan_steffan-chung-11-front.jpg"
               }
         },
         "dan_steffan-chunga-14-front.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "dan_steffan-chunga-14-front.jpg"
               }
         },
         "dan_steffan-Inca08.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "dan_steffan-Inca08.jpg"
               }
         },
         "dan_steffan-trap-door-22.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "dan_steffan-trap-door-22.jpg"
               }
         },
         "dan_steffan-trap-door-23.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "dan_steffan-trap-door-23.jpg"
               }
         },
         "dan_steffan-trap-door-30.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "dan_steffan-trap-door-30.jpg"
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
                  "object": "artshow.art-panel-1,2-0",
                  "data": [
                     {
                        "place-name": "dan_steffan-art",
                        "options": {
                           "placer": "ArtPlacer",
                           "moreInfoData": {
                              "title": "Dan Steffan",
                              "link-text": "More about Dan Steffan",
                              "link": "http://fancyclopedia.org/Dan_Steffan",
                              "text": "Dan Steffan is a fan artist, writer and editor. He was the 1995 TAFF delegate. He has won multiple FAAn awards for Best Fan Artist, one FAAn award for Best Fanzine, and is a Past-President of FWA. Without a doubt, one of the best fan artists alive, and also an excellent writer. It is completely inexplicable how he has been overlooked for the Hugo."
                           }
                        },
                        "data": {
                           "textures": [
                              {
                                 "texture": "dan_steffan-nameplate.png",
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
                                 "texture": "dan_steffan-Banana-Wings-50.jpg",
                                 "size": [
                                    1.1,
                                    0.78
                                 ],
                                 "position": [
                                    0.05,
                                    0.2
                                 ]
                              },
                              {
                                 "texture": "dan_steffan-chung-11-front.jpg",
                                 "size": [
                                    0.5,
                                    0.65
                                 ],
                                 "position": [
                                    0.05,
                                    1.05
                                 ]
                              },
                              {
                                 "texture": "dan_steffan-chunga-14-front.jpg",
                                 "size": [
                                    0.5,
                                    0.65
                                 ],
                                 "position": [
                                    0.65,
                                    1.05
                                 ]
                              }
                           ],
                           "place-on": "back"
                        }
                     }
                  ]
               },
               {
                  "object": "artshow.art-panel-1,2-1",
                  "data": [
                     {
                        "place-name": "dan_steffan-art",
                        "options": {
                           "placer": "ArtPlacer",
                           "moreInfoData": {
                              "title": "Dan Steffan",
                              "link-text": "More about Dan Steffan",
                              "link": "http://fancyclopedia.org/Dan_Steffan",
                              "text": "Dan Steffan is a fan artist, writer and editor. He was the 1995 TAFF delegate. He has won multiple FAAn awards for Best Fan Artist, one FAAn award for Best Fanzine, and is a Past-President of FWA. Without a doubt, one of the best fan artists alive, and also an excellent writer. It is completely inexplicable how he has been overlooked for the Hugo."
                           }
                        },
                        "data": {
                           "textures": [
                              {
                                 "texture": "dan_steffan-Inca08.jpg",
                                 "size": [
                                    0.5,
                                    0.71
                                 ],
                                 "position": [
                                    0.05,
                                    0.2
                                 ]
                              },
                              {
                                 "texture": "dan_steffan-trap-door-22.jpg",
                                 "size": [
                                    0.42,
                                    0.65
                                 ],
                                 "position": [
                                    0.69,
                                    0.2
                                 ]
                              },
                              {
                                 "texture": "dan_steffan-trap-door-23.jpg",
                                 "size": [
                                    0.42,
                                    0.65
                                 ],
                                 "position": [
                                    0.09,
                                    1.0
                                 ]
                              },
                              {
                                 "texture": "dan_steffan-trap-door-30.jpg",
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
            ]
         },
      }
   };
})();
SQUIDSPACE.addAutoloadModule(artshow_dan_steffan);