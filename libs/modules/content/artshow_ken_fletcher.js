var artshow_ken_fletcher = (function(){

   return {
      textures: {
         "ken_fletcher-nameplate.png": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "ken_fletcher-nameplate.png"
               }
         },
         "ken_fletcher-SaFA.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "ken_fletcher-SaFA.jpg"
               }
         },
         "ken_fletcher-vacuum.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "ken_fletcher-vacuum.jpg"
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
                        "place-name": "ken_fletcher-art",
                        "options": {
                           "placer": "ArtPlacer",
                           "moreInfoData": {
                              "title": "Ken Fletcher",
                              "link-text": "More about Ken Fletcher",
                              "link": "http://fancyclopedia.org/Ken_Fletcher",
                              "text": "Ken Fletcher is an American fan artist. He is well known for art supporting the Minneapolis in 73 bid. He is a Rotsler award winner. He was the 1979 DUFF delegate."
                           }
                        },
                        "data": {
                           "textures": [
                              {
                                 "texture": "ken_fletcher-nameplate.png",
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
                                 "texture": "ken_fletcher-SaFA.jpg",
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
                                 "texture": "ken_fletcher-vacuum.jpg",
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