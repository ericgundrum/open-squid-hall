var artshow_brian_parker = (function(){

   return {
      textures: {
         "brian_parker-nameplate.png": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "brian_parker-nameplate.png"
               }
         },
         "brian_parker-Beam13.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "brian_parker-Beam13.jpg"
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
                  "object": "artshow.art-panel-11,12-1",
                  "data": [
                     {
                        "place-name": "brian_parker-art",
                        "options": {
                           "placer": "ArtPlacer",
                           "moreInfoData": {
                              "title": "Brian Parker",
                              "link-text": "More about Brian Parker",
                              "link": "http://fancyclopedia.org/Brian_Parker",
                              "text": "Brian Parker won a 2019 FAAn Award for Best Cover (Illo)."
                           }
                        },
                        "data": {
                           "textures": [
                              {
                                 "texture": "brian_parker-nameplate.png",
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
                                 "texture": "brian_parker-Beam13.jpg",
                                 "size": [
                                    0.5,
                                    0.65
                                 ],
                                 "position": [
                                    0.05,
                                    0.2
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
SQUIDSPACE.addAutoloadModule(artshow_brian_parker);