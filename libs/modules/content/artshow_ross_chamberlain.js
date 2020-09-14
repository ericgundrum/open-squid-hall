var artshow_ross_chamberlain = (function(){

   return {
      textures: {
         "ross_chamberlain-nameplate.png": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "ross_chamberlain-nameplate.png"
               }
         },
         "ross_chamberlain-wooden-nickel.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "ross_chamberlain-wooden-nickel.jpg"
               }
         },
         "ross_chamberlain-chunga-10-front.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "ross_chamberlain-chunga-10-front.jpg"
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
                        "place-name": "ross_chamberlain-art",
                        "options": {
                           "placer": "ArtPlacer",
                           "moreInfoData": {
                              "title": "Ross Chamberlain",
                              "link-text": "More about Ross Chamberlain",
                              "link": "http://fancyclopedia.org/Ross_Chamberlain",
                              "text": "Ross Chamberlain is an American fan artist and fan writer. He is a Rotsler Award winner."
                           }
                        },
                        "data": {
                           "textures": [
                              {
                                 "texture": "ross_chamberlain-nameplate.png",
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
                                 "texture": "ross_chamberlain-wooden-nickel.jpg",
                                 "size": [
                                    0.5,
                                    0.25
                                 ],
                                 "position": [
                                    0.05,
                                    0.2
                                 ]
                              },
                              {
                                 "texture": "ross_chamberlain-chunga-10-front.jpg",
                                 "size": [
                                    0.5,
                                    0.65
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
SQUIDSPACE.addAutoloadModule(artshow_ross_chamberlain);