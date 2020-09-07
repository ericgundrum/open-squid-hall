var artshow_taral_wayne = (function(){

   return {
      textures: {
         "taral-wayne-nameplate.png": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "taral-wayne-nameplate.png"
               }
         },
         "taral-wayne-Anticipation PR 4.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "taral-wayne-Anticipation PR 4.jpg"
               }
         },
         "taral-wayne-ToWalkThe Moon.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "taral-wayne-ToWalkThe Moon.jpg"
               }
         },
         "taral-wayne-Unloading the P.F. Gotlieb.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "taral-wayne-Unloading the P.F. Gotlieb.jpg"
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
                  "object": "artshow.art-panel-5,6-1",
                  "data": [
                     {
                        "place-name": "taral-wayne-art",
                        "options": {
                           "placer": "ArtPlacer",
                           "moreInfoData": {
                              "title": "Taral Wayne",
                              "link-text": "More about Taral Wayne",
                              "link": "http://fancyclopedia.org/Taral_Wayne",
                              "text": ""
                           }
                        },
                        "data": {
                           "textures": [
                              {
                                 "texture": "taral-wayne-nameplate.png",
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
                                 "texture": "taral-wayne-Anticipation PR 4.jpg",
                                 "size": [
                                    0.81,
                                    0.65
                                 ],
                                 "position": [
                                    0.05,
                                    0.2
                                 ]
                              },
                              {
                                 "texture": "taral-wayne-ToWalkThe Moon.jpg",
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
                                 "texture": "taral-wayne-Unloading the P.F. Gotlieb.jpg",
                                 "size": [
                                    0.5,
                                    0.65
                                 ],
                                 "position": [
                                    0.65,
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
SQUIDSPACE.addAutoloadModule(artshow_taral_wayne);