var artshow_taral_wayne = (function(){

   return {
      textures: {
         "taral_wayne-nameplate.png": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "taral_wayne-nameplate.png"
               }
         },
         "taral_wayne-Anticipation PR 4.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "taral_wayne-Anticipation PR 4.jpg"
               }
         },
         "taral_wayne-ToWalkThe Moon.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "taral_wayne-ToWalkThe Moon.jpg"
               }
         },
         "taral_wayne-Unloading the P.F. Gotlieb.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "taral_wayne-Unloading the P.F. Gotlieb.jpg"
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
                        "place-name": "taral_wayne-art",
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
                                 "texture": "taral_wayne-nameplate.png",
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
                                 "texture": "taral_wayne-Anticipation PR 4.jpg",
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
                                 "texture": "taral_wayne-ToWalkThe Moon.jpg",
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
                                 "texture": "taral_wayne-Unloading the P.F. Gotlieb.jpg",
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