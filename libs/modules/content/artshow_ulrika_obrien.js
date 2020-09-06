var artshow_ulrika_obrien = (function(){

   return {
      textures: {
         "ulrika-obrien-nameplate.png": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "ulrika-obrien-nameplate.png"
               }
         },
         "ulrika-obrien-chunga-23-front.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "ulrika-obrien-chunga-23-front.jpg"
               }
         },
         "ulrika-obrien-chunga-23-back.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "ulrika-obrien-chunga-23-back.jpg"
               }
         },
         "ulrika-obrien-Thy_Life's_a_Miracle.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "ulrika-obrien-Thy_Life's_a_Miracle.jpg"
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
                  "object": "artshow.art-panel-17,18-0",
                  "data": [
                     {
                        "place-name": "ulrika-obrien-art",
                        "options": {
                           "placer": "ArtPlacer",
                           "moreInfoData": {
                              "title": "Ulrika O'Brien",
                              "link-text": "More about Ulrika O'Brien",
                              "link": "http://fancyclopedia.org/Ulrika_O%27Brien",
                              "text": ""
                           }
                        },
                        "data": {
                           "textures": [
                              {
                                 "texture": "ulrika-obrien-nameplate.png",
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
                                 "texture": "ulrika-obrien-chunga-23-front.jpg",
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
                                 "texture": "ulrika-obrien-chunga-23-back.jpg",
                                 "size": [
                                    0.5,
                                    0.65
                                 ],
                                 "position": [
                                    0.65,
                                    0.2
                                 ]
                              },
                              {
                                 "texture": "ulrika-obrien-Thy_Life's_a_Miracle.jpg",
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
SQUIDSPACE.addAutoloadModule(artshow_ulrika_obrien);