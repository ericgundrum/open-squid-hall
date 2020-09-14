var artshow_ray_nelson = (function(){

   return {
      textures: {
         "ray_nelson-nameplate.png": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "ray_nelson-nameplate.png"
               }
         },
         "ray_nelson-crashed.png": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "ray_nelson-crashed.png"
               }
         },
         "ray_nelson-flying.png": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "ray_nelson-flying.png"
               }
         },
         "ray_nelson-medusa.png": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "ray_nelson-medusa.png"
               }
         },
         "ray_nelson-poetry.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "ray_nelson-poetry.jpg"
               }
         },
         "ray_nelson-tilt.png": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "ray_nelson-tilt.png"
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
                  "object": "artshow.art-panel-5,6-0",
                  "data": [
                     {
                        "place-name": "ray_nelson-art",
                        "options": {
                           "placer": "ArtPlacer",
                           "moreInfoData": {
                              "title": "Ray Nelson",
                              "link-text": "More about Ray Nelson",
                              "link": "http://fancyclopedia.org/Ray_Nelson",
                              "text": "Ray Nelson is a Rotsler Award winning fan artist, and a fan writer, editor, and professional science fiction author. He is a member of the First Fandom Hall of Fame. He invented the propellor beanie."
                           }
                        },
                        "data": {
                           "textures": [
                              {
                                 "texture": "ray_nelson-nameplate.png",
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
                                 "texture": "ray_nelson-crashed.png",
                                 "size": [
                                    0.33,
                                    0.45
                                 ],
                                 "position": [
                                    0.05,
                                    0.2
                                 ]
                              },
                              {
                                 "texture": "ray_nelson-flying.png",
                                 "size": [
                                    0.33,
                                    0.29
                                 ],
                                 "position": [
                                    0.43,
                                    0.2
                                 ]
                              },
                              {
                                 "texture": "ray_nelson-medusa.png",
                                 "size": [
                                    0.33,
                                    0.4
                                 ],
                                 "position": [
                                    0.81,
                                    0.2
                                 ]
                              },
                              {
                                 "texture": "ray_nelson-poetry.jpg",
                                 "size": [
                                    0.5,
                                    0.57
                                 ],
                                 "position": [
                                    0.05,
                                    0.7
                                 ]
                              },
                              {
                                 "texture": "ray_nelson-tilt.png",
                                 "size": [
                                    0.33,
                                    0.28
                                 ],
                                 "position": [
                                    0.81,
                                    0.7
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
SQUIDSPACE.addAutoloadModule(artshow_ray_nelson);