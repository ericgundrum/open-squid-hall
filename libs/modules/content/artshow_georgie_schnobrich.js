var artshow_georgie_schnobrich = (function(){

   return {
      textures: {
         "georgie-schnobrich-nameplate.png": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "georgie-schnobrich-nameplate.png"
               }
         },
         "georgie-schnobrich-2003-tiptree-ceremony.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "georgie-schnobrich-2003-tiptree-ceremony.jpg"
               }
         },
         "georgie-schnobrich-Forbidden Pasture.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "georgie-schnobrich-Forbidden Pasture.jpg"
               }
         },
         "georgie-schnobrich-chunga-03.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "georgie-schnobrich-chunga-03.jpg"
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
                  "object": "artshow.art-panel-15,16-0",
                  "data": [
                     {
                        "place-name": "georgie-schnobrich-art",
                        "options": {
                           "placer": "ArtPlacer",
                           "moreInfoData": {
                              "title": "Georgie Schnobrich",
                              "link-text": "More about Georgie Schnobrich",
                              "link": "http://fancyclopedia.org/Georgie_Schnobrich",
                              "text": ""
                           }
                        },
                        "data": {
                           "textures": [
                              {
                                 "texture": "georgie-schnobrich-nameplate.png",
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
                                 "texture": "georgie-schnobrich-2003-tiptree-ceremony.jpg",
                                 "size": [
                                    1.0,
                                    0.74
                                 ],
                                 "position": [
                                    0.1,
                                    0.2
                                 ]
                              },
                              {
                                 "texture": "georgie-schnobrich-chunga-03.jpg",
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
                                 "texture": "georgie-schnobrich-Forbidden Pasture.jpg",
                                 "size": [
                                    0.5,
                                    0.39
                                 ],
                                 "position": [
                                    0.65,
                                    1.0
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
SQUIDSPACE.addAutoloadModule(artshow_georgie_schnobrich);