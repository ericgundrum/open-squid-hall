var artshow_atom = (function(){

   return {
      textures: {
         "atom-nameplate.png": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "atom-nameplate.png"
               }
         },
         "atom-03.jpeg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "atom-03.jpeg"
               }
         },
         "Atom-13.jpeg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "Atom-13.jpeg"
               }
         },
         "Atom-15.jpeg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "Atom-15.jpeg"
               }
         },
         "Atom-23.jpeg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "Atom-23.jpeg"
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
                  "object": "artshow.art-panel-1,2-1",
                  "data": [
                     {
                        "place-name": "atom-art",
                        "options": {
                           "placer": "ArtPlacer",
                           "moreInfoData": {
                              "title": "ATom",
                              "link-text": "More about ATom",
                              "link": "http://fancyclopedia.org/ATom",
                              "text": "Arthur (ATom) Thomson was a UK fan writer, artist and editor. He was the 1964 TAFF delegate. He was a Nova and Rotsler award winner for Best Fan Artist, and a multiple Hugo finalist. One of the greatest fan artists of all time, with a unique style, and associated with some of the greatest fanzines of the 1950s and onward."
                           }
                        },
                        "data": {
                           "textures": [
                              {
                                 "texture": "atom-nameplate.png",
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
                                 "texture": "atom-03.jpeg",
                                 "size": [
                                    0.5,
                                    0.73
                                 ],
                                 "position": [
                                    0.05,
                                    0.2
                                 ]
                              },
                              {
                                 "texture": "Atom-13.jpeg",
                                 "size": [
                                    0.5,
                                    0.71
                                 ],
                                 "position": [
                                    0.65,
                                    0.2
                                 ]
                              },
                              {
                                 "texture": "Atom-15.jpeg",
                                 "size": [
                                    0.5,
                                    0.66
                                 ],
                                 "position": [
                                    0.05,
                                    1.0
                                 ]
                              },
                              {
                                 "texture": "Atom-23.jpeg",
                                 "size": [
                                    0.5,
                                    0.63
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
SQUIDSPACE.addAutoloadModule(artshow_atom);