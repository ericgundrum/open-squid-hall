var artshow_stu_shiffman = (function(){

   return {
      textures: {
         "stu_shiffman-nameplate.png": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "stu_shiffman-nameplate.png"
               }
         },
         "stu_shiffman-chunga-01-front.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "stu_shiffman-chunga-01-front.jpg"
               }
         },
         "stu_shiffman-chunga-11-back.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "stu_shiffman-chunga-11-back.jpg"
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
                  "object": "artshow.art-panel-3,4-1",
                  "data": [
                     {
                        "place-name": "stu_shiffman-art",
                        "options": {
                           "placer": "ArtPlacer",
                           "moreInfoData": {
                              "title": "Stu Shiffman",
                              "link-text": "More about Stu Shiffman",
                              "link": "http://fancyclopedia.org/Stu_Shiffman",
                              "text": ""
                           }
                        },
                        "data": {
                           "textures": [
                              {
                                 "texture": "stu_shiffman-nameplate.png",
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
                                 "texture": "stu_shiffman-chunga-01-front.jpg",
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
                                 "texture": "stu_shiffman-chunga-11-back.jpg",
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
SQUIDSPACE.addAutoloadModule(artshow_stu_shiffman);