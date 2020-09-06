var artshow_ken_fletcher = (function(){

   return {
      textures: {
         "ken-fletcher-nameplate.png": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "ken-fletcher-nameplate.png"
               }
         },
         "ken-fletcher-SaFA.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "ken-fletcher-SaFA.jpg"
               }
         },
         "ken-fletcher-vacuum.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "ken-fletcher-vacuum.jpg"
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
                  "object": "artshow.art-panel-11,12-0",
                  "data": [
                     {
                        "place-name": "ken-fletcher-art",
                        "options": {
                           "placer": "ArtPlacer",
                           "moreInfoData": {
                              "title": "Ken Fletcher",
                              "link-text": "More about Ken Fletcher",
                              "link": "http://fancyclopedia.org/Ken_Fletcher",
                              "text": ""
                           }
                        },
                        "data": {
                           "textures": [
                              {
                                 "texture": "ken-fletcher-nameplate.png",
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
                                 "texture": "ken-fletcher-SaFA.jpg",
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
                                 "texture": "ken-fletcher-vacuum.jpg",
                                 "size": [
                                    0.5,
                                    0.23
                                 ],
                                 "position": [
                                    0.65,
                                    0.4
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
SQUIDSPACE.addAutoloadModule(artshow_ken_fletcher);