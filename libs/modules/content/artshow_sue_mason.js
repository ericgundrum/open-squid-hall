var artshow_sue_mason = (function(){

   return {
      textures: {
         "sue_mason-nameplate.png": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "sue_mason-nameplate.png"
               }
         },
         "sue_mason-plokta-19.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "sue_mason-plokta-19.jpg"
               }
         },
         "sue_mason-plokta-39.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "sue_mason-plokta-39.jpg"
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
                  "object": "artshow.art-panel-3,4-0",
                  "data": [
                     {
                        "place-name": "sue_mason-art",
                        "options": {
                           "placer": "ArtPlacer",
                           "moreInfoData": {
                              "title": "Sue Mason",
                              "link-text": "More about Sue Mason",
                              "link": "http://fancyclopedia.org/Sue_Mason",
                              "text": ""
                           }
                        },
                        "data": {
                           "textures": [
                              {
                                 "texture": "sue_mason-nameplate.png",
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
                                 "texture": "sue_mason-plokta-19.jpg",
                                 "size": [
                                    0.5,
                                    0.72
                                 ],
                                 "position": [
                                    0.05,
                                    0.2
                                 ]
                              },
                              {
                                 "texture": "sue_mason-plokta-39.jpg",
                                 "size": [
                                    0.5,
                                    0.71
                                 ],
                                 "position": [
                                    0.65,
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
SQUIDSPACE.addAutoloadModule(artshow_sue_mason);