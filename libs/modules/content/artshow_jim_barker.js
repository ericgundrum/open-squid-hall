var artshow_jim_barker = (function(){

   return {
      textures: {
         "jim_barker-nameplate.png": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "jim_barker-nameplate.png"
               }
         },
         "jim_barker-bob.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "jim_barker-bob.jpg"
               }
         },
         "jim_barker-daleks.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "jim_barker-daleks.jpg"
               }
         },
         "jim_barker-03.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "jim_barker-03.jpg"
               }
         },
         "jim_barker-Inca10.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "jim_barker-Inca10.jpg"
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
                        "place-name": "jim_barker-art",
                        "options": {
                           "placer": "ArtPlacer",
                           "moreInfoData": {
                              "title": "Jim Barker",
                              "link-text": "More about Jim Barker",
                              "link": "http://fancyclopedia.org/Jim_Barker",
                              "text": "Jim Barker is a Scottish fan artist and professional artist. He is a Rotsler Award winner."
                           }
                        },
                        "data": {
                           "textures": [
                              {
                                 "texture": "jim_barker-nameplate.png",
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
                                 "texture": "jim_barker-bob.jpg",
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
                                 "texture": "jim_barker-daleks.jpg",
                                 "size": [
                                    0.5,
                                    0.39
                                 ],
                                 "position": [
                                    0.65,
                                    0.2
                                 ]
                              },
                              {
                                 "texture": "jim_barker-03.jpg",
                                 "size": [
                                    0.5,
                                    0.54
                                 ],
                                 "position": [
                                    0.05,
                                    1.0
                                 ]
                              },
                              {
                                 "texture": "jim_barker-Inca10.jpg",
                                 "size": [
                                    0.5,
                                    0.71
                                 ],
                                 "position": [
                                    0.65,
                                    0.83
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
SQUIDSPACE.addAutoloadModule(artshow_jim_barker);