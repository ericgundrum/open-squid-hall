var artshow_graham_west = (function(){

   return {
      textures: {
         "graham-west-nameplate.png": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "graham-west-nameplate.png"
               }
         },
         "graham-west-RubberCrab-08.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "graham-west-RubberCrab-08.jpg"
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
                  "object": "artshow.art-panel-9,10-1",
                  "data": [
                     {
                        "place-name": "graham-west-art",
                        "options": {
                           "placer": "ArtPlacer",
                           "moreInfoData": {
                              "title": "Graham West",
                              "link-text": "Rubber Crab #8",
                              "link": "https://efanzines.com/RubberCrab/RubberCrab-08.pdf",
                              "text": "Graham West won the FAAn Award for Best Cover for this portrait of his father."
                           }
                        },
                        "data": {
                           "textures": [
                              {
                                 "texture": "graham-west-nameplate.png",
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
                                 "texture": "graham-west-RubberCrab-08.jpg",
                                 "size": [
                                    0.5,
                                    0.71
                                 ],
                                 "position": [
                                    0.05,
                                    0.2
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
SQUIDSPACE.addAutoloadModule(artshow_graham_west);