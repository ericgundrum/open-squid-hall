var artshow_harry_bell = (function(){

   return {
      textures: {
         "harry_bell-nameplate.png": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "harry_bell-nameplate.png"
               }
         },
         "harry_bell-Inca09L.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "harry_bell-Inca09L.jpg"
               }
         },
         "harry_bell-trap-door-25.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "harry_bell-trap-door-25.jpg"
               }
         },
         "harry_bell-trap-door-29.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "harry_bell-trap-door-29.jpg"
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
                  "object": "artshow.art-panel-9,10-0",
                  "data": [
                     {
                        "place-name": "harry_bell-art",
                        "options": {
                           "placer": "ArtPlacer",
                           "moreInfoData": {
                              "title": "Harry Bell",
                              "link-text": "More about Harry Bell",
                              "link": "http://fancyclopedia.org/Harry_Bell",
                              "text": "Harry Bell is a UK fan artist. He is a Rotsler award winner, FAAn award winner, and has been a Hugo finalist."
                           }
                        },
                        "data": {
                           "textures": [
                              {
                                 "texture": "harry_bell-nameplate.png",
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
                                 "texture": "harry_bell-Inca09L.jpg",
                                 "size": [
                                    0.5,
                                    0.7
                                 ],
                                 "position": [
                                    0.05,
                                    0.2
                                 ]
                              },
                              {
                                 "texture": "harry_bell-trap-door-25.jpg",
                                 "size": [
                                    0.41,
                                    0.65
                                 ],
                                 "position": [
                                    0.09,
                                    1.0
                                 ]
                              },
                              {
                                 "texture": "harry_bell-trap-door-29.jpg",
                                 "size": [
                                    0.41,
                                    0.65
                                 ],
                                 "position": [
                                    0.69,
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
SQUIDSPACE.addAutoloadModule(artshow_harry_bell);