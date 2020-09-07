var artshow_brad_foster = (function(){

   return {
      textures: {
         "brad-foster-nameplate.png": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "brad-foster-nameplate.png"
               }
         },
         "brad-foster-chunga-07-front.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "brad-foster-chunga-07-front.jpg"
               }
         },
         "brad-foster-trap-door-27.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "brad-foster-trap-door-27.jpg"
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
                        "place-name": "brad-foster-art",
                        "options": {
                           "placer": "ArtPlacer",
                           "moreInfoData": {
                              "title": "Brad Foster",
                              "link-text": "More about Brad Foster",
                              "link": "http://fancyclopedia.org/Brad_Foster",
                              "text": ""
                           }
                        },
                        "data": {
                           "textures": [
                              {
                                 "texture": "brad-foster-nameplate.png",
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
                                 "texture": "brad-foster-chunga-07-front.jpg",
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
                                 "texture": "brad-foster-trap-door-27.jpg",
                                 "size": [
                                    0.42,
                                    0.65
                                 ],
                                 "position": [
                                    0.69,
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
SQUIDSPACE.addAutoloadModule(artshow_brad_foster);