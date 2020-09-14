var artshow_kurt_erichsen = (function(){

   return {
      textures: {
         "kurt_erichsen-nameplate.png": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "kurt_erichsen-nameplate.png"
               }
         },
         "kurt-erichsen-journeyplanet-46-apolloxi.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "kurt-erichsen-journeyplanet-46-apolloxi.jpg"
               }
         },
         "kurt_erichsen-Dragon.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "kurt_erichsen-Dragon.jpg"
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
                        "place-name": "kurt_erichsen-art",
                        "options": {
                           "placer": "ArtPlacer",
                           "moreInfoData": {
                              "title": "Kurt Erichsen",
                              "link-text": "More about Kurt Erichsen",
                              "link": "http://fancyclopedia.org/Kurt_Erichsen",
                              "text": "Kurt Erichsen is a Rotsler Award winning fan artist."
                           }
                        },
                        "data": {
                           "textures": [
                              {
                                 "texture": "kurt_erichsen-nameplate.png",
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
                                 "texture": "kurt-erichsen-journeyplanet-46-apolloxi.jpg",
                                 "size": [
                                    0.68,
                                    0.65
                                 ],
                                 "position": [
                                    0.05,
                                    0.2
                                 ]
                              },
                              {
                                 "texture": "kurt_erichsen-Dragon.jpg",
                                 "size": [
                                    0.37,
                                    0.52
                                 ],
                                 "position": [
                                    0.78,
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
SQUIDSPACE.addAutoloadModule(artshow_kurt_erichsen);