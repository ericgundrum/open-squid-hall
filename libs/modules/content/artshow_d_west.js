var artshow_d_west = (function(){

   return {
      textures: {
         "d_west-nameplate.png": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "d_west-nameplate.png"
               }
         },
         "d_west-BW-56.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "d_west-BW-56.jpg"
               }
         },
         "d_west-Raucous-Caucus-04.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "d_west-Raucous-Caucus-04.jpg"
               }
         },
         "d_west-chunga-05-front.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "d_west-chunga-05-front.jpg"
               }
         },
         "d_west-chunga-05-back.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "d_west-chunga-05-back.jpg"
               }
         },
         "d_west-chunga-17-front.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "d_west-chunga-17-front.jpg"
               }
         },
         "d_west-chunga-17-back.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "d_west-chunga-17-back.jpg"
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
                  "object": "artshow.art-panel-7,8-1",
                  "data": [
                     {
                        "place-name": "d_west-art",
                        "options": {
                           "placer": "ArtPlacer",
                           "moreInfoData": {
                              "title": "D West",
                              "link-text": "More about D West",
                              "link": "http://fancyclopedia.org/D._West",
                              "text": "D. West (Don West) was a noted UK fan artist and fan writer. He won multiple Nova and FAAn awards for Best Fan Artist. He was a Hugo finalist multiple times. He declined the Rotsler award. D. West was absolutely brilliant as an artist and a writer, matched only by the darkness of his humor."
                           }
                        },
                        "data": {
                           "textures": [
                              {
                                 "texture": "d_west-nameplate.png",
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
                                 "texture": "d_west-BW-56.jpg",
                                 "size": [
                                    0.5,
                                    0.71
                                 ],
                                 "position": [
                                    0.05,
                                    0.2
                                 ]
                              },
                              {
                                 "texture": "d_west-Raucous-Caucus-04.jpg",
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
                                 "texture": "d_west-chunga-05-front.jpg",
                                 "size": [
                                    0.5,
                                    0.65
                                 ],
                                 "position": [
                                    0.05,
                                    1.0
                                 ]
                              },
                              {
                                 "texture": "d_west-chunga-05-back.jpg",
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
                           "place-on": "back"
                        }
                     }
                  ]
               },
               {
                  "object": "artshow.art-panel-7,8-0",
                  "data": [
                     {
                        "place-name": "d_west-art",
                        "options": {
                           "placer": "ArtPlacer",
                           "moreInfoData": {
                              "title": "D West",
                              "link-text": "More about D West",
                              "link": "http://fancyclopedia.org/D._West",
                              "text": "D. West (Don West) was a noted UK fan artist and fan writer. He won multiple Nova and FAAn awards for Best Fan Artist. He was a Hugo finalist multiple times. He declined the Rotsler award. D. West was absolutely brilliant as an artist and a writer, matched only by the darkness of his humor."
                           }
                        },
                        "data": {
                           "textures": [
                              {
                                 "texture": "d_west-chunga-17-front.jpg",
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
                                 "texture": "d_west-chunga-17-back.jpg",
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
SQUIDSPACE.addAutoloadModule(artshow_d_west);