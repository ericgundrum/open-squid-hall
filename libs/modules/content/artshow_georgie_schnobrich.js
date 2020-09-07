var artshow_georgie_schnobrich = (function(){

   return {
      textures: {
         "georgie_schnobrich-nameplate.png": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "georgie_schnobrich-nameplate.png"
               }
         },
         "georgie_schnobrich-2003-tiptree-ceremony.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "georgie_schnobrich-2003-tiptree-ceremony.jpg"
               }
         },
         "georgie_schnobrich-Forbidden Pasture.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "georgie_schnobrich-Forbidden Pasture.jpg"
               }
         },
         "georgie_schnobrich-chunga-03.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "georgie_schnobrich-chunga-03.jpg"
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
                        "place-name": "georgie_schnobrich-art",
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
                                 "texture": "georgie_schnobrich-nameplate.png",
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
                                 "texture": "georgie_schnobrich-2003-tiptree-ceremony.jpg",
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
                                 "texture": "georgie_schnobrich-chunga-03.jpg",
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
                                 "texture": "georgie_schnobrich-Forbidden Pasture.jpg",
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