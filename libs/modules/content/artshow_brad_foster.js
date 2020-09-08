var artshow_brad_foster = (function(){

   return {
      textures: {
         "brad_foster-nameplate.png": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "brad_foster-nameplate.png"
               }
         },
         "brad_foster-chunga-07-front.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "brad_foster-chunga-07-front.jpg"
               }
         },
         "brad_foster-trap-door-27.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "brad_foster-trap-door-27.jpg"
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
                        "place-name": "brad_foster-art",
                        "options": {
                           "placer": "ArtPlacer",
                           "moreInfoData": {
                              "title": "Brad Foster",
                              "link-text": "More about Brad Foster",
                              "link": "http://fancyclopedia.org/Brad_Foster",
                              "text": "Brad Foster is a Texas fan artist. He has won a Rotsler award and multiple Hugo awards for Best Fan Artist. Brad is an indefatigable supporter of fannish conventions and zines. His style of precise, complex, fine line drawing is instantly recognizable."
                           }
                        },
                        "data": {
                           "textures": [
                              {
                                 "texture": "brad_foster-nameplate.png",
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
                                 "texture": "brad_foster-chunga-07-front.jpg",
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
                                 "texture": "brad_foster-trap-door-27.jpg",
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