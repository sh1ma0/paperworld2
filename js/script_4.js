window.addEventListener('load', init);
  function init(){
      //ステージ作成
      var stage = new createjs.Stage('myCanvas');
      // console.log("canvas loaded");

      if(createjs.Touch.isSupported() == true){
          createjs.Touch.enable(stage)
      }

      // bgmのロード
      createjs.Sound.registerSound("sound/puddle_BGM.wav", "bgm");

      // キャンバスの幅と高さを変数に入れておく
      var canvas_w = document.getElementById('myCanvas').width;
      var canvas_h = document.getElementById('myCanvas').height;

      // 画像のロード
      var manifest = [
          // 'img/alpabet bg-min.png',
          // 'img/alphabet_1-min.png',
          // 'img/alphabet_2-min.png',
          // 'img/alphabet_3-min.png',
          // 'img/alphabet_4-min.png',
          // 'img/alphabet_5-min.png',
          'img/character.png',
          'img/crayon_E-min.png',
          'img/crayon_L-min.png',
          'img/crayon_P_gr-min.png', //3
          'img/crayon_P_red-min.png',
          'img/crayon_G.png',
          //stage 1
          'img/s1_ground-min.png', //6
          'img/s1_hill-min.png',
          'img/s1_hill3-min.png',
          'img/s1_stone-min.png',
          //stage 2
          'img/s2_ground-min.png', //10
          'img/s2_hill-min.png',
          'img/s2_hill3_1-min.png',
          'img/s2_hill3_2-min.png',
          'img/s2_stone-min.png',
          'img/crayon_D-min.png',
          'img/apple-min.png',
          'img/p-apple-min.png',
          'img/alphabet_A-min.png',
          'img/alphabet_P_red-min.png',
          'img/alphabet_P_green-min.png',
          'img/alphabet_L-min.png',
          'img/alphabet_E-min.png',
          'img_home/bg-min.png',     //23
          'img_home/btn_1-min.png',
          'img_home/btn_2-min.png',
          'img_home/btn_3-min.png',
          'img_home/btn_4-min.png',
          'img_home/btn_5-min.png',
          'img_home/btn_6-min.png',
          'img_home/btn_7-min.png',
          'img_home/cloud_low-min.png',
          'img_home/cloud_up-min.png',
          'img_home/line_down-min.png',
          'img_home/line-min.png',
          'img_home/question-min.png',
          'img_home/stage_1-min.png',
          'img_home/title-min.png',
          'img_home/titleBord-min.png',
          ];

      // LoadQueue クラスの呼び出し
      var loader = new createjs.LoadQueue();

      // 読み込み開始
      loader.loadManifest(manifest);
      console.log('manifest called');

      // 読み込み完了
      loader.addEventListener('complete', addStage);
      console.log('manifest completed');

      function addStage(){

          // //BGM play
          // createjs.Sound.play("bgm")

          // 空
          // var data_sky = {
          //     images:['sprite/s1_sky.png'],
          //     frames:{width:2048, height:1297},
          //     animations:{
          //         paper:0,
          //         color:1
          //     }
          // }
          // var spriteSheet_sky = new createjs.SpriteSheet(data_sky);
          // var animation_sky = new createjs.Sprite(spriteSheet_sky);
          // stage.addChild(animation_sky);
          // animation_sky.scaleX = 0.5;
          // animation_sky.scaleY = 0.5;
          // animation_sky.x = 0;
          // animation_sky.y = 0;

          // HOME画面を入れるコンテナ
          var container_home = new createjs.Container();
          container_home.x = 0;
          container_home.y = 0;
          stage.addChild(container_home);

          // シーン１の表示オブジェクトを入れるcontainer
          var container = new createjs.Container();
          container.x = 0;
          container.y = 0;
          stage.addChild(container);

          // シーン2の表示オブジェクトを入れるcontainer_2
          var container_2 = new createjs.Container();
          container_2.x = 1024;
          container_2.y = 0;
          stage.addChild(container_2);

          // クレヨンP(赤)
          var crayon_p_red = new createjs.Bitmap(manifest[4]);
          crayon_p_red.x = 1024;
          crayon_p_red.y = 470;
          crayon_p_red.scaleX = 0.5;
          crayon_p_red.scaleY = 0.5;
          // stage.addChild(crayon_p_red);

          // クレヨンP(緑)
          var crayon_p_green = new createjs.Bitmap(manifest[3]);
          crayon_p_green.x = 1400;
          crayon_p_green.y = 470;
          crayon_p_green.scaleX = 0.5;

          // クレヨンL(青)
          var crayon_L = new createjs.Bitmap(manifest[2]);
          crayon_L.x = 2000;
          crayon_L.y = 470;
          crayon_L.scaleX = 0.5;
          crayon_L.scaleY = 0.5;
          // stage.addChild(crayon_L);

          // クレヨンE（ピンク）
          var crayon_E = new createjs.Bitmap(manifest[1]);
          crayon_E.x = 3000;
          crayon_E.y = 470;
          crayon_E.scaleX = 0.5;
          crayon_E.scaleY = 0.5;
          // stage.addChild(crayon_E);

          // クレヨンD
          var crayon_D = new createjs.Bitmap(manifest[15]);
          crayon_D.x = 3400;
          crayon_D.y = 470;
          crayon_D.scaleX = 0.5;
          crayon_D.scaleY = 0.5;
          // stage.addChild(crayon_D);

          //キャラクタースプライト
          var data_character = {
              // images: ['sprite/charaSprite_2-min.png'],
              images: ['sprite/charaSprite-min.png'],
              frames: {width:260, height:302.75},
              // animations:{
              //       stop: 0,
              //       walk: [0,1,2,3],
              //     // stop_R: 0,
              //     // stop_L: 4,
              //     // walk_R: [1,2,3],
              //     // walk_L: [5,6,7]
              // }
          }
          var spriteSheet_character = new createjs.SpriteSheet(data_character);
          var animation_character = new createjs.Sprite(spriteSheet_character,0);
          // stage.addChild(animation_character);
          animation_character.scaleX = 0.5;
          animation_character.scaleY = 0.5;
          animation_character.x = 400;
          animation_character.y = 430;

          var bg = new createjs.Bitmap(manifest[23]);
          bg.x = 0;
          bg.y = 0;
          bg.scaleX = 0.5;
          bg.scaleY = 0.5;
          container_home.addChild(bg);

          var cloud_low = new createjs.Bitmap(manifest[31]);
          cloud_low.x = 0;
          cloud_low.y = 551;
          cloud_low.scaleX = 0.5;
          cloud_low.scaleY = 0.5;
          container_home.addChild(cloud_low);

          var cloud_up = new createjs.Bitmap(manifest[32]);
          cloud_up.x = 0;
          cloud_up.y = 0;
          cloud_up.scaleX = 0.5;
          cloud_up.scaleY = 0.5;
          container_home.addChild(cloud_up);

          var line_down = new createjs.Bitmap(manifest[34]);
          line_down.x = 264
          line_down.y = 388;
          line_down.scaleX = 0.5;
          line_down.scaleY = 0.5;
          container_home.addChild(line_down);

          var line_down_2 = new createjs.Bitmap(manifest[34]);
          line_down_2.x = 768
          line_down_2.y = 388;
          line_down_2.scaleX = 0.5;
          line_down_2.scaleY = 0.5;
          container_home.addChild(line_down_2);

          var line_up = new createjs.Bitmap(manifest[33]);
          line_up.x = 512
          line_up.y = 388;
          line_up.scaleX = 0.5;
          line_up.scaleY = 0.5;
          container_home.addChild(line_up);

          var question = new createjs.Bitmap(manifest[35]);
          question.x = 397;
          question.y = 278;
          question.scaleX = 0.5;
          question.scaleY = 0.5;
          container_home.addChild(question);

          var question_2 = new createjs.Bitmap(manifest[35]);
          question_2.x = 640
          question_2.y = 370;
          question_2.scaleX = 0.5;
          question_2.scaleY = 0.5;
          container_home.addChild(question_2);

          var question_3 = new createjs.Bitmap(manifest[35]);
          question_3.x = 892
          question_3.y = 278;
          question_3.scaleX = 0.5;
          question_3.scaleY = 0.5;
          container_home.addChild(question_3);

          var stage_1 = new createjs.Bitmap(manifest[36]);
          stage_1.x = 16
          stage_1.y = 299;
          stage_1.scaleX = 0.5;
          stage_1.scaleY = 0.5;
          container_home.addChild(stage_1);

          var title_bord = new createjs.Bitmap(manifest[38]);
          title_bord.x = 244
          title_bord.y = 1;
          title_bord.scaleX = 0.5;
          title_bord.scaleY = 0.5;
          container_home.addChild(title_bord);

          var title = new createjs.Bitmap(manifest[37]);
          title.x = 287
          title.y = 53;
          title.scaleX = 0.5;
          title.scaleY = 0.5;
          container_home.addChild(title);

          var btn_1 = new createjs.Bitmap(manifest[24]);
          btn_1.x = 97;
          btn_1.y = 606;
          btn_1.scaleX = 0.5;
          btn_1.scaleY = 0.5;
          container_home.addChild(btn_1);

          var btn_2 = new createjs.Bitmap(manifest[25]);
          btn_2.x = 201;
          btn_2.y = 679;
          btn_2.scaleX = 0.5;
          btn_2.scaleY = 0.5;
          container_home.addChild(btn_2);

          var btn_3 = new createjs.Bitmap(manifest[26]);
          btn_3.x = 323;
          btn_3.y = 606;
          btn_3.scaleX = 0.5;
          btn_3.scaleY = 0.5;
          container_home.addChild(btn_3);

          var btn_4 = new createjs.Bitmap(manifest[27]);
          btn_4.x = 435;
          btn_4.y = 679;
          btn_4.scaleX = 0.5;
          btn_4.scaleY = 0.5;
          container_home.addChild(btn_4);

          var btn_5 = new createjs.Bitmap(manifest[28]);
          btn_5.x = 563;
          btn_5.y = 606;
          btn_5.scaleX = 0.5;
          btn_5.scaleY = 0.5;
          container_home.addChild(btn_5);

          var btn_6 = new createjs.Bitmap(manifest[29]);
          btn_6.x = 665;
          btn_6.y = 679;
          btn_6.scaleX = 0.5;
          btn_6.scaleY = 0.5;
          container_home.addChild(btn_6);

          var btn_7 = new createjs.Bitmap(manifest[30]);
          btn_7.x = 779;
          btn_7.y = 606;
          btn_7.scaleX = 0.5;
          btn_7.scaleY = 0.5;
          container_home.addChild(btn_7);

          // ステージ１をクリックしたらcontainer と container_2 をロード
          stage_1.addEventListener('click', function(){

              stage.removeChild(container_home);

              // // 空
              // var data_sky = {
              //     images:['sprite/s1_sky.png'],
              //     frames:{width:2048, height:1297},
              //     animations:{
              //         paper:0,
              //         color:1
              //     }
              // }
              // var spriteSheet_sky = new createjs.SpriteSheet(data_sky);
              // var animation_sky = new createjs.Sprite(spriteSheet_sky);
              // stage.addChild(animation_sky);
              // animation_sky.scaleX = 0.5;
              // animation_sky.scaleY = 0.5;
              // animation_sky.x = 0;
              // animation_sky.y = 0;

              // // シーン１の表示オブジェクトを入れるcontainer
              // var container = new createjs.Container();
              // container.x = 0;
              // container.y = 0;
              // stage.addChild(container);
              //
              // // シーン2の表示オブジェクトを入れるcontainer_2
              // var container_2 = new createjs.Container();
              // container_2.x = 1024;
              // container_2.y = 0;
              // stage.addChild(container_2);

              // ステージ1を入れていく

              var ppc = new createjs.PlayPropsConfig().set({interrupt: createjs.Sound.INTERRUPT_ANY, loop: -1, volume: 0.3})
              //BGM play
              // createjs.Sound.play("bgm", ppc);

              // var myMedia = new Media("sound/puddle_BGM.wav");
              // myMedia.play();

              document.addEventListener("deviceready", onDeviceReady, false);
              function onDeviceReady() {
                var apple2Sound = new Media('sound/puddle_BGM.wav');
                apple2Sound.play();
              }

              // 空
              var data_sky = {
                  images:['sprite/s1_sky.png'],
                  frames:{width:2048, height:1297},
                  animations:{
                      paper:0,
                      color:1
                  }
              }
              var spriteSheet_sky = new createjs.SpriteSheet(data_sky);
              var animation_sky = new createjs.Sprite(spriteSheet_sky);
              container.addChild(animation_sky);
              animation_sky.scaleX = 0.5;
              animation_sky.scaleY = 0.5;
              animation_sky.x = 0;
              animation_sky.y = 0;
              console.log('sora');

              // 山 右
              var data_mt_right = {
                  images:['sprite/s1_mt_r.png'],
                  frames:{width: 543, height:657},
                  animations: {
                      paper: 0,
                      color: 1
                  }
              }
              var spriteSheet_mt_right = new createjs.SpriteSheet(data_mt_right);
              var animation_mt_right = new createjs.Sprite(spriteSheet_mt_right);
              container.addChild(animation_mt_right);
              animation_mt_right.scaleX = 0.5;
              animation_mt_right.scaleY = 0.5;
              animation_mt_right.x = 753;
              animation_mt_right.y = 215;

              // 山 左 2
              var data_mt_left2 = {
                  images:['sprite/s1_mt_left2-min.png'],
                  frames:{width: 356, height:580},
                  animations: {
                      paper: 0,
                      color: 1
                  }
              }
              var spriteSheet_mt_left2 = new createjs.SpriteSheet(data_mt_left2);
              var animation_mt_left2 = new createjs.Sprite(spriteSheet_mt_left2);
              container.addChild(animation_mt_left2);
              animation_mt_left2.scaleX = 0.5;
              animation_mt_left2.scaleY = 0.5;
              animation_mt_left2.x = 0;
              animation_mt_left2.y = 200;

              // /山 左 3
              var data_mt_left3 = {
                  images:['sprite/s1_mt_left3-min.png'],
                  frames:{width: 661, height:700},
                  animations: {
                      paper: 0,
                      color: 1
                  }
              }
              var spriteSheet_mt_left3 = new createjs.SpriteSheet(data_mt_left3);
              var animation_mt_left3 = new createjs.Sprite(spriteSheet_mt_left3);
              container.addChild(animation_mt_left3);
              animation_mt_left3.scaleX = 0.5;
              animation_mt_left3.scaleY = 0.5;
              animation_mt_left3.x = 0;
              animation_mt_left3.y = 145;

              // 山 左
              var data_mt_left = {
                  images:['sprite/s1_mt_left-min.png'],
                  frames:{width: 173, height:657},
                  animations: {
                      paper: 0,
                      color: 1
                  }
              }
              var spriteSheet_mt_left = new createjs.SpriteSheet(data_mt_left);
              var animation_mt_left = new createjs.Sprite(spriteSheet_mt_left);
              container.addChild(animation_mt_left);
              animation_mt_left.scaleX = 0.5;
              animation_mt_left.scaleY = 0.5;
              animation_mt_left.x = 0;
              animation_mt_left.y = 198;

              // 山 真ん中
              var data_mt_center = {
                  images:['sprite/s1_mt_bl_ct.png'],
                  frames:{width:1479, height:855},
                  animations:{
                      papar:0,
                      color:1
                  }
              }
              var spriteSheet_mt_center = new createjs.SpriteSheet(data_mt_center);
              var animation_mt_center = new createjs.Sprite(spriteSheet_mt_center);
              container.addChild(animation_mt_center);
              animation_mt_center.scaleX = 0.5;
              animation_mt_center.scaleY = 0.5;
              animation_mt_center.x = 180;
              animation_mt_center.y = 80;

              // 雲 スプライト
              var data_cloud = {
                  images:['sprite/s1_cloud.png'],
                  frames:{width:1978, height:391},
                  animations:{
                      paper:0,
                      color:1
                  }
              }
              var spriteSheet_cloud = new createjs.SpriteSheet(data_cloud);
              var animation_cloud = new createjs.Sprite(spriteSheet_cloud);
              container.addChild(animation_cloud);
              animation_cloud.scaleX = 0.5;
              animation_cloud.scaleY = 0.5;
              animation_cloud.x = 20;
              animation_cloud.y = 0;

              // 丘 3
              var hill3_1 = new createjs.Bitmap(manifest[8]);
              hill3_1.x = 0;
              hill3_1.y = 423;
              hill3_1.scaleX = 0.5;
              hill3_1.scaleY = 0.5;
              container.addChild(hill3_1);

              // 地面
              var ground_1 = new createjs.Bitmap(manifest[6]);
              ground_1.x = 0;
              ground_1.y = 554;
              ground_1.scaleX = 0.5;
              ground_1.scaleY = 0.5;
              container.addChild(ground_1);

              // // 丘
              var hill_1 = new createjs.Bitmap(manifest[7]);
              hill_1.x = 0;
              hill_1.y = 424;
              hill_1.scaleX = 0.5;
              hill_1.scaleY = 0.5;
              container.addChild(hill_1);

              // 木
              var data_tree = {
                  images:['sprite/s1_tree.png'],
                  frames:{width:1777, height:1054},
                  animations: {
                      paper: 0,
                      color: 1
                  }
              }
              var spriteSheet_tree = new createjs.SpriteSheet(data_tree);
              var animation_tree = new createjs.Sprite(spriteSheet_tree);
              container.addChild(animation_tree);
              animation_tree.scaleX = 0.5;
              animation_tree.scaleY = 0.5;
              animation_tree.x = 110;
              animation_tree.y = 0;

              // 植物 赤
              var data_prant_red = {
                  images:['sprite/s1_prant_red.png'],
                  frames:{width:1797, height:197},
                  animations: {
                      paper: 0,
                      color: 1
                  }
              }
              var spriteSheet_prant_red = new createjs.SpriteSheet(data_prant_red);
              var animation_prant_red = new createjs.Sprite(spriteSheet_prant_red);
              container.addChild(animation_prant_red);
              animation_prant_red.scaleX = 0.5;
              animation_prant_red.scaleY = 0.5;
              animation_prant_red.x = 120;
              animation_prant_red.y = 424;

              // 石ころ
              var stone_1 = new createjs.Bitmap(manifest[9]);
              stone_1.x = 285;
              stone_1.y = 500;
              stone_1.scaleX = 0.5;
              stone_1.scaleY = 0.5;
              container.addChild(stone_1);

              //葉っぱ
              var data_leaf = {
                  images: ['sprite/s1_leaf_2-min.png'],
                  frames: {width:1845, height:257},
                  animations:{
                      paper:0,
                      color:1
                  }
              }
              var spriteSheet_leaf = new createjs.SpriteSheet(data_leaf);
              var animation_leaf = new createjs.Sprite(spriteSheet_leaf);
              container.addChild(animation_leaf);
              animation_leaf.scaleX = 0.5;
              animation_leaf.scaleY = 0.5;
              animation_leaf.x = 103;
              animation_leaf.y = 640;

              // 花 赤 スプライト
              var data = {
                  images:["sprite/s1_flw_red.png"],
                  frames:{width:1771, height: 389},
                  animations: {
                      paper:0,
                      color:1
                  }
              }

              var spriteSheet = new createjs.SpriteSheet(data);
              var animation = new createjs.Sprite(spriteSheet);
              container.addChild(animation);
              animation.scaleX = 0.5;
              animation.scaleY = 0.5;
              animation.x = 25;
              animation.y = 573;

              // 花（白）
              var data_flw_wh = {
                  images: ['sprite/s1_flw_wh.png'],
                  frames: {width:1523, height:317},
                  animations:{
                      paper:0,
                      color:1
                  }
              }
              var spriteSheet_flw_wh = new createjs.SpriteSheet(data_flw_wh);
              var animation_flw_wh = new createjs.Sprite(spriteSheet_flw_wh);
              container.addChild(animation_flw_wh);
              animation_flw_wh.scaleX = 0.5;
              animation_flw_wh.scaleY = 0.5;
              animation_flw_wh.x = 0;
              animation_flw_wh.y = 620;

              // 草
              var data_grass = {
                  images: ['sprite/s1_grass.png'],
                  frames: {width:1772, height:151},
                  animations:{
                      paper:0,
                      color:1
                  }
              }
              var spriteSheet_grass = new createjs.SpriteSheet(data_grass);
              var animation_grass = new createjs.Sprite(spriteSheet_grass);
              container.addChild(animation_grass);
              animation_grass.scaleX = 0.5;
              animation_grass.scaleY = 0.5;
              animation_grass.x = 50;
              animation_grass.y = 460;

             //ステージ2のオブジェクトをロード

             // 空 スプライト
              var data_s2_sky = {
                  images: ['sprite/s1_sky.png'],
                  frames: {width:2048, height:1321},
                  animations:{
                      paper:0,
                      color:1
                  }
              }
              var spriteSheet_s2_sky = new createjs.SpriteSheet(data_s2_sky);
              var animation_s2_sky = new createjs.Sprite(spriteSheet_s2_sky);
              container_2.addChild(animation_s2_sky);
              animation_s2_sky.scaleX = 0.5;
              animation_s2_sky.scaleY = 0.5;
              animation_s2_sky.x = 0;
              animation_s2_sky.y = 0;

              // 山 左２
              var data_s2_mt_left2 = {
                  images: ['sprite_2/s2_mt_left2-min.png'],
                  frames: {width:605, height:580},
                  animations:{
                      paper:0,
                      color:1
                  }
              }
              var spriteSheet_s2_mt_left2 = new createjs.SpriteSheet(data_s2_mt_left2);
              var animation_s2_mt_left2 = new createjs.Sprite(spriteSheet_s2_mt_left2);
              container_2.addChild(animation_s2_mt_left2);
              animation_s2_mt_left2.scaleX = 0.5;
              animation_s2_mt_left2.scaleY = 0.5;
              animation_s2_mt_left2.x = 60;
              animation_s2_mt_left2.y = 200;

              // 山 センター
              var data_s2_mt_center = {
                  images: ['sprite_2/s2_mt_center-min.png'],
                  frames: {width:1175, height:850},
                  animations:{
                      paper:0,
                      color:1
                  }
              }
              var spriteSheet_s2_mt_center = new createjs.SpriteSheet(data_s2_mt_center);
              var animation_s2_mt_center = new createjs.Sprite(spriteSheet_s2_mt_center);
              container_2.addChild(animation_s2_mt_center);
              animation_s2_mt_center.scaleX = 0.5;
              animation_s2_mt_center.scaleY = 0.5;
              animation_s2_mt_center.x = 200;
              animation_s2_mt_center.y = 100;

              // 山 左
              var data_s2_mt_left = {
                  images: ['sprite_2/s2_mt_left-min.png'],
                  frames: {width:365, height:657},
                  animations:{
                      paper:0,
                      color:1
                  }
              }
              var spriteSheet_s2_mt_left = new createjs.SpriteSheet(data_s2_mt_left);
              var animation_s2_mt_left = new createjs.Sprite(spriteSheet_s2_mt_left);
              container_2.addChild(animation_s2_mt_left);
              animation_s2_mt_left.scaleX = 0.5;
              animation_s2_mt_left.scaleY = 0.5;
              animation_s2_mt_left.x = 0;
              animation_s2_mt_left.y = 215;

              // 山 右
              var data_s2_mt_right = {
                  images: ['sprite_2/s2_mt_right-min.png'],
                  frames: {width:251, height:581},
                  animations:{
                      paper:0,
                      color:1
                  }
              }
              var spriteSheet_s2_mt_right = new createjs.SpriteSheet(data_s2_mt_right);
              var animation_s2_mt_right = new createjs.Sprite(spriteSheet_s2_mt_right);
              container_2.addChild(animation_s2_mt_right);
              animation_s2_mt_right.scaleX = 0.5;
              animation_s2_mt_right.scaleY = 0.5;
              animation_s2_mt_right.x = 899;
              animation_s2_mt_right.y = 200;

              // 山 右 2
              var data_s2_mt_right2 = {
                  images: ['sprite_2/s2_mt_right2-min.png'],
                  frames: {width:733, height:657},
                  animations:{
                      paper:0,
                      color:1
                  }
              }
              var spriteSheet_s2_mt_right2 = new createjs.SpriteSheet(data_s2_mt_right2);
              var animation_s2_mt_right2 = new createjs.Sprite(spriteSheet_s2_mt_right2);
              container_2.addChild(animation_s2_mt_right2);
              animation_s2_mt_right2.scaleX = 0.5;
              animation_s2_mt_right2.scaleY = 0.5;
              animation_s2_mt_right2.x = 658;
              animation_s2_mt_right2.y = 200;

              // 雲_2 スプライト
              var data_s2_cloud = {
                  images: ['sprite_2/s2_cloud-min.png'],
                  frames: {width:1799, height:421},
                  animations:{
                      paper:0,
                      color:1
                  }
              }
              var spriteSheet_s2_cloud = new createjs.SpriteSheet(data_s2_cloud);
              var animation_s2_cloud = new createjs.Sprite(spriteSheet_s2_cloud);
              container_2.addChild(animation_s2_cloud);
              animation_s2_cloud.scaleX = 0.5;
              animation_s2_cloud.scaleY = 0.5;
              animation_s2_cloud.x = 120;
              animation_s2_cloud.y = 10;

              // 地面
              var s2_ground = new createjs.Bitmap(manifest[10]);
              s2_ground.x = 0;
              s2_ground.y = 541;
              s2_ground.scaleX = 0.5;
              s2_ground.scaleY = 0.5;
              container_2.addChild(s2_ground);

              // 丘 3
              var s2_hill3 = new createjs.Bitmap(manifest[12]);
              s2_hill3.x = 400;
              s2_hill3.y = 423;
              s2_hill3.scaleX = 0.5;
              s2_hill3.scaleY = 0.5;
              container_2.addChild(s2_hill3);

              // 丘 3_2
              var s2_hill3_2 = new createjs.Bitmap(manifest[13]);
              s2_hill3_2.x = 862;
              s2_hill3_2.y = 423;
              s2_hill3_2.scaleX = 0.5;
              s2_hill3_2.scaleY = 0.5;
              container_2.addChild(s2_hill3_2);

              // 丘
              var s2_hill = new createjs.Bitmap(manifest[11]);
              s2_hill.x = 0;
              s2_hill.y = 424;
              s2_hill.scaleX = 0.5;
              s2_hill.scaleY = 0.5;
              container_2.addChild(s2_hill);

              // 花（赤）
              var data_s2_flw_red = {
                  images: ['sprite_2/s2_flw_red-min.png'],
                  frames: {width:1855, height:340},
                  animations:{
                      paper:0,
                      color:1
                  }
              }
              var spriteSheet_s2_flw_red = new createjs.SpriteSheet(data_s2_flw_red);
              var animation_s2_flw_red = new createjs.Sprite(spriteSheet_s2_flw_red);
              container_2.addChild(animation_s2_flw_red);
              animation_s2_flw_red.scaleX = 0.5;
              animation_s2_flw_red.scaleY = 0.5;
              animation_s2_flw_red.x = 20;
              animation_s2_flw_red.y = 600;

              // 花（白）
              var data_s2_flw_wh = {
                  images: ['sprite_2/s2_flw_wh-min.png'],
                  frames: {width:1553, height:317},
                  animations:{
                      paper:0,
                      color:1
                  }
              }
              var spriteSheet_s2_flw_wh = new createjs.SpriteSheet(data_s2_flw_wh);
              var animation_s2_flw_wh = new createjs.Sprite(spriteSheet_s2_flw_wh);
              container_2.addChild(animation_s2_flw_wh);
              animation_s2_flw_wh.scaleX = 0.5;
              animation_s2_flw_wh.scaleY = 0.5;
              animation_s2_flw_wh.x = 248;
              animation_s2_flw_wh.y = 620;

              // 草
              var data_s2_grass = {
                  images: ['sprite_2/s2_grass-min.png'],
                  frames: {width:1149, height:49},
                  animations:{
                      paper:0,
                      color:1
                  }
              }
              var spriteSheet_s2_grass = new createjs.SpriteSheet(data_s2_grass);
              var animation_s2_grass = new createjs.Sprite(spriteSheet_s2_grass);
              container_2.addChild(animation_s2_grass);
              animation_s2_grass.scaleX = 0.5;
              animation_s2_grass.scaleY = 0.5;
              animation_s2_grass.x = 215;
              animation_s2_grass.y = 515;

              // 葉っぱ
              var data_s2_leaf = {
                  images: ['sprite_2/s2_leaf_2-min.png'],
                  frames: {width:1688.5, height:263},
                  animations:{
                      paper:0,
                      color:1
                  }
              }
              var spriteSheet_s2_leaf = new createjs.SpriteSheet(data_s2_leaf);
              var animation_s2_leaf = new createjs.Sprite(spriteSheet_s2_leaf);
              container_2.addChild(animation_s2_leaf);
              animation_s2_leaf.scaleX = 0.5;
              animation_s2_leaf.scaleY = 0.5;
              animation_s2_leaf.x = 0;
              animation_s2_leaf.y = 637;

              // 植物（緑）
              var data_s2_prant_gr = {
                  images: ['sprite_2/s2_prant_gr-min.png'],
                  frames: {width:1071, height:74},
                  animations:{
                      paper:0,
                      color:1
                  }
              }
              var spriteSheet_s2_prant_gr = new createjs.SpriteSheet(data_s2_prant_gr);
              var animation_s2_prant_gr = new createjs.Sprite(spriteSheet_s2_prant_gr);
              container_2.addChild(animation_s2_prant_gr);
              animation_s2_prant_gr.scaleX = 0.5;
              animation_s2_prant_gr.scaleY = 0.5;
              animation_s2_prant_gr.x = 290;
              animation_s2_prant_gr.y = 460;

              // 植物（赤）
              var data_s2_prant_red = {
                  images: ['sprite_2/s2_prant_red-min.png'],
                  frames: {width:1705, height:183},
                  animations:{
                      paper:0,
                      color:1
                  }
              }
              var spriteSheet_s2_prant_red = new createjs.SpriteSheet(data_s2_prant_red);
              var animation_s2_prant_red = new createjs.Sprite(spriteSheet_s2_prant_red);
              container_2.addChild(animation_s2_prant_red);
              animation_s2_prant_red.scaleX = 0.5;
              animation_s2_prant_red.scaleY = 0.5;
              animation_s2_prant_red.x = 110;
              animation_s2_prant_red.y = 440;

              // 木
              var data_s2_tree = {
                  images: ['sprite_2/s2_tree-min.png'],
                  frames: {width:1513, height:1085},
                  animations:{
                      paper:0,
                      color:1
                  }
              }
              var spriteSheet_s2_tree = new createjs.SpriteSheet(data_s2_tree);
              var animation_s2_tree = new createjs.Sprite(spriteSheet_s2_tree);
              container_2.addChild(animation_s2_tree);
              animation_s2_tree.scaleX = 0.5;
              animation_s2_tree.scaleY = 0.5;
              animation_s2_tree.x = 75;
              animation_s2_tree.y = 5;

              // 石ころ
              var s2_stone = new createjs.Bitmap(manifest[14]);
              s2_stone.x = 70;
              s2_stone.y = 545;
              s2_stone.scaleX = 0.5;
              s2_stone.scaleY = 0.5;
              container_2.addChild(s2_stone);

              // スペルボード
              var data_spellBord = {
                  images:['sprite/spellBord.png'],
                  frames:{width:919, height:298},
                  animations:{
                      A: 0,
                      AP: 1,
                      APP: 2,
                      APPL: 3,
                      APPLE: 4
                  }
              }
              var spriteSheet_spellBord = new createjs.SpriteSheet(data_spellBord);
              var animation_spellBord = new createjs.Sprite(spriteSheet_spellBord);
              stage.addChild(animation_spellBord);
              animation_spellBord.scaleX = 0.5;
              animation_spellBord.scaleY = 0.5;
              animation_spellBord.x = 277;
              animation_spellBord.y = 15;

              // 右半分をタッチで右に歩く見えないボタン
              var right_touch = new createjs.Shape();
              right_touch.graphics
                  .setStrokeStyle(1)
                  .beginStroke("#563d7c")
                  .beginFill('white')
                  .drawRect(canvas_w/2, 0, canvas_w/2, canvas_h);
              stage.addChild(right_touch);
              right_touch.alpha = 0.01;

              // 左半分をタッチしたら左に歩く見えないボタン
              var left_touch = new createjs.Shape();
              left_touch.graphics
                  .setStrokeStyle(1)
                  .beginStroke('#563d7c')
                  .beginFill('white')
                  .drawRect(0, 0, canvas_w/2, canvas_h);
              stage.addChild(left_touch);
              left_touch.alpha = 0.01;

              // // クレヨンP(赤)
              // var crayon_p_red = new createjs.Bitmap(manifest[4]);
              // crayon_p_red.x = 1024;
              // crayon_p_red.y = 470;
              // crayon_p_red.scaleX = 0.5;
              // crayon_p_red.scaleY = 0.5;
              stage.addChild(crayon_p_red);

              // // クレヨンP(緑)
              // var crayon_p_green = new createjs.Bitmap(manifest[3]);
              // crayon_p_green.x = 1400;
              // crayon_p_green.y = 470;
              // crayon_p_green.scaleX = 0.5;
              crayon_p_green.scaleY = 0.5;

              // // クレヨンL(青)
              // var crayon_L = new createjs.Bitmap(manifest[2]);
              // crayon_L.x = 2000;
              // crayon_L.y = 470;
              // crayon_L.scaleX = 0.5;
              // crayon_L.scaleY = 0.5;
              // stage.addChild(crayon_L);
              //
              // // クレヨンE（ピンク）
              // var crayon_E = new createjs.Bitmap(manifest[1]);
              // crayon_E.x = 3000;
              // crayon_E.y = 470;
              // crayon_E.scaleX = 0.5;
              // crayon_E.scaleY = 0.5;
              // stage.addChild(crayon_E);
              //
              // // クレヨンD
              // var crayon_D = new createjs.Bitmap(manifest[15]);
              // crayon_D.x = 3400;
              // crayon_D.y = 470;
              // crayon_D.scaleX = 0.5;
              // crayon_D.scaleY = 0.5;
              // stage.addChild(crayon_D);

              //apple
              var apple = new createjs.Bitmap(manifest[17]);
              apple.x = 403;
              apple.y = 0;
              apple.scaleX = 0.5;
              apple.scaleY = 0.5;
              // stage.addChild(apple);
              // apple.alpha = 0;
              // stage.addChild(apple);

              // //キャラクタースプライト
              // var data_character = {
              //     // images: ['sprite/charaSprite_2-min.png'],
              //     images: ['sprite/charaSprite-min.png'],
              //     frames: {width:260, height:302.75},
              //     // animations:{
              //     //       stop: 0,
              //     //       walk: [0,1,2,3],
              //     //     // stop_R: 0,
              //     //     // stop_L: 4,
              //     //     // walk_R: [1,2,3],
              //     //     // walk_L: [5,6,7]
              //     // }
              // }
              // var spriteSheet_character = new createjs.SpriteSheet(data_character);
              // var animation_character = new createjs.Sprite(spriteSheet_character,0);
              stage.addChild(animation_character);
              // animation_character.scaleX = 0.5;
              // animation_character.scaleY = 0.5;
              // animation_character.x = 400;
              // animation_character.y = 430;

              //junp
              animation_character.addEventListener('click',function(){
                  createjs.Tween.get(animation_character)
                  .to({y:230}, 300, createjs.Ease.cubicOut)
                  .to({y:430}, 450, createjs.Ease.cubicIn);
              });

              // //junp
              // window.addEventListener('keydown',function(){
              //     console.log("keydown")
              //     var keyCode = event.keyCode;
              //     if(keyCode == 38){
              //         createjs.Tween.get(animation_character)
              //         .to({y:230}, 200, createjs.Ease.cubicOut)
              //         .to({y:430}, 200, createjs.Ease.cubicIn);
              //     }
              // });

              // クリックされているかの判定
              var pressLeft = false;
              var pressRight = false;

              //画面の右側がタッチされていることを検知
              right_touch.addEventListener('mousedown',handleDownRight)
              function handleDownRight(){
                      pressRight = true;
                      // animation_character.gotoAndPlay('walk');
                      // animation_character.gotoAndPlay('walk_R');
                      // console.log('right touched', pressRight);
                  }

              // 画面右側のタッチが外れたことを検知
              right_touch.addEventListener('pressup', handleUpRight)
              function handleUpRight(){
                  pressRight = false;
                  // animation_character.gotoAndPlay('stop');
                  // animation_character.gotoAndPlay('stop_R');
                  console.log(pressRight);
              }

              //画面の左側がタッチされていることを検知
              left_touch.addEventListener('mousedown',handleDownLeft)
              function handleDownLeft(){
                  pressLeft = true;
                  // animation_character.gotoAndPlay('walk');
                  // animation_character.gotoAndPlay('walk_L');
                  console.log('left touched', pressLeft);
              }

              //画面の左側からタッチが外れたことを検知
              left_touch.addEventListener('pressup', handleUpLeft)
              function handleUpLeft(){
                  pressLeft = false;
                  // animation_character.gotoAndPlay('stop');
                  // animation_character.gotoAndPlay('stop_L');
                  console.log(pressLeft);
              }
          });

          // reauestAnimartionFrameを使う
          createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCED;
          createjs.Ticker.setFPS(30);

          // 時間経過
          createjs.Ticker.addEventListener('tick', function(){

          // // // 自動で横にスクロール
          if (container.x <= -1024){
                container.x = 1024;
            } else if (container_2.x <= -1024){
                container_2.x = 1024;
            }

                container.x -= 16;
                container_2.x -= 16;

              // クレヨンP（赤）が近づいてくる & 当たり判定
                crayon_p_red.x -= 16;

                var point = crayon_p_red.localToLocal(0, 0, animation_character);
                var isHit = animation_character.hitTest(point.x, point.y);

                if(isHit == true){
                    stage.removeChild(crayon_p_red);
                    stage.addChild(crayon_p_green);
                    animation.gotoAndPlay('color');
                    animation_s2_flw_red.gotoAndPlay('color');
                    animation_s2_prant_red.gotoAndPlay('color');
                    animation_prant_red.gotoAndPlay('color');
                    animation_spellBord.gotoAndPlay('AP');
                } else if(crayon_p_red.x <= -1024){
                      crayon_p_red.x = 5024;
                }

                // クレヨンP（緑）が近づいてくる & 当たり判定
                crayon_p_green.x -= 16;

                var point = crayon_p_green.localToLocal(0, 0, animation_character);
                var isHit = animation_character.hitTest(point.x, point.y);
                if(isHit == true){
                    stage.removeChild(crayon_p_green);
                    stage.addChild(crayon_L);
                    animation_tree.gotoAndPlay('color');
                    animation_s2_tree.gotoAndPlay('color');
                    animation_grass.gotoAndPlay('color');
                    animation_s2_grass.gotoAndPlay('color');
                    animation_leaf.gotoAndPlay('color');
                    animation_s2_leaf.gotoAndPlay('color');
                    animation_s2_prant_gr.gotoAndPlay('color');
                    animation_spellBord.gotoAndPlay('APP');
                }
              //
              //   // クレヨンLが近づいてくる & 当たり判定
              //   crayon_L.x -= 16;
              //   var point = crayon_L.localToLocal(0, 0, animation_character);
              //   var isHit = animation_character.hitTest(point.x, point.y);
              //   if(isHit == true){
              //       stage.removeChild(crayon_L);
              //       stage.addChild(crayon_E);
              //       console.log('crayon_E =' + crayon_E.x);
              //       animation_spellBord.gotoAndPlay('APPL');
              //       animation_mt_center.gotoAndPlay('color');
              //       animation_mt_left.gotoAndPlay('color');
              //       animation_mt_left2.gotoAndPlay('color');
              //       animation_s2_mt_left2.gotoAndPlay('color');
              //       animation_s2_mt_right.gotoAndPlay('color');
              //       animation_s2_mt_right2.gotoAndPlay('color');
              //       animation_sky.gotoAndPlay('color');
              //       // animation_s2_sky.gotoAndPlay('color');
              //       animation_cloud.gotoAndPlay('color');
              //       animation_s2_cloud.gotoAndPlay('color');
              //   } else if(crayon_L.x <= -1024){
              //         crayon_L.x = 4800
              //   }
              //
              //   //ピンクのクレヨンとの当たり判定
              //   crayon_E.x -= 16;
              //   var point = crayon_E.localToLocal(0, 0, animation_character);
              //   var isHit = animation_character.hitTest(point.x, point.y);
              //   if(isHit == true){
              //       stage.removeChild(crayon_E);
              //       animation_spellBord.gotoAndPlay('APPLE');
              //       animation_s2_mt_center.gotoAndPlay('color');
              //       animation_mt_left2.gotoAndPlay('color');
              //       animation_mt_left3.gotoAndPlay('color');
              //       animation_mt_right.gotoAndPlay('color');
              //       animation_s2_mt_left.gotoAndPlay('color');
              //       animation_flw_wh.gotoAndPlay('color');
              //       animation_s2_flw_wh.gotoAndPlay('color');
              //       // stage.addChild(apple);
              //       // createjs.Tween.get(apple)
              //       // .to({y:510}, 200);
              //
              //   //  createjs.Tween.get('animation_character').call()
              //   //  animation_character.gotoAndPlay('walk');
              //
              //   // console.log("container.x =" + container.x);
              //   // console.log("container_2.x =" + container.x);
              //
              // // //クリックしたらスクロール、ある座標を超えたら繰り返し
              // // if (pressRight == true){
              // //
              // //     if (container.x <= -1024){
              // //         container.x = 1024;
              // //     } else if (container_2.x <= -1024){
              // //         container_2.x = 1024;
              // //     }
              // //
              // //     container.x -= 32;
              // //     container_2.x -= 32;
              // //     // console.log("container.x =" + container.x);
              // //     // console.log("container_2.x =" + container.x);
              // //
              // // } else if (pressLeft == true){
              // //
              // //     if(container.x >= 1024){    //if を入れ子にしている
              // //         container.x = -1024;
              // //     } else if (container_2.x >=1024){
              // //         container_2.x = -1024;
              // //     }
              // //     container.x += 64;
              // //     container_2.x += 64;
              // //     console.log(container.x);
              // //
              // //     // if(container.x >= 1024){    //if を入れ子にしている
              // //     //     container.x = -1024;
              // //     // } else if (container_2.x >=1024){
              // //     //     container_2.x = -1024;
              // //     // }
              // // }
              //
              // // // 時間の経過とともにスクロール
              // // container.x -= 15;
              // // container_2.x -= 15;
              // // crayon_p_red.x -= 50;
              // // crayon_p_green.x -= 50;
              // // crayon_L.x -= 50;
              // // crayon_E.x -= 50;
              // //
              // // console.log(container_2.x);
              // //
              // // if (container.x <= -1024){
              // //     container.x = 1024;
              // // } else if (container_2.x <= -1024){
              // //       container_2.x = 1024
              // // } else if (crayon_p_red.x <= -1024){
              // //       crayon_p_red.x = 1024
              // // } else if (crayon_p_green.x <= -1024){
              // //       crayon_p_green.x = 1024
              // // } else if (crayon_L.x <= -1024) {
              // //       crayon_L.x <= 1024
              // // } else if (crayon_E.x <= -1024){
              // //       crayon_E.x <= 1024
              // // }
              // //
              //
              // // // クレヨンP(赤)とキャラの当たり判定
              // // if (pressRight == true) {
              // //     crayon_p_red.x -= 50;
              // // } else if (pressLeft == true) {
              // //     crayon_p_red.x += 50;
              // // }
              // // var point = crayon_p_red.localToLocal(0, 0, animation_character);
              // // var isHit = animation_character.hitTest(point.x, point.y);
              // //
              // // if(isHit == true){
              // //     stage.removeChild(crayon_p_red);
              // //     stage.addChild(crayon_p_green);
              // //     animation.gotoAndPlay('color');
              // //     animation_s2_flw_red.gotoAndPlay('color');
              // //     animation_s2_prant_red.gotoAndPlay('color');
              // //     animation_prant_red.gotoAndPlay('color');
              // //     animation_spellBord.gotoAndPlay('AP');
              // //
              // // } else if(crayon_p_red.x <= -1024){
              // //     crayon_p_red.x = 5024;
              // // }
              //
              // // //緑のクレヨンとの当たり判定
              // // if (pressRight == true) {
              // //     crayon_p_green.x -= 50;
              // // } else if (pressLeft == true) {
              // //     crayon_p_green.x += 50;
              // // }
              // // var point = crayon_p_green.localToLocal(0, 0, animation_character);
              // // var isHit = animation_character.hitTest(point.x, point.y);
              // // if(isHit == true){
              // //     stage.removeChild(crayon_p_green);
              // //     stage.addChild(crayon_L);
              // //     animation_tree.gotoAndPlay('color');
              // //     animation_s2_tree.gotoAndPlay('color');
              // //     animation_grass.gotoAndPlay('color');
              // //     animation_s2_grass.gotoAndPlay('color');
              // //     animation_leaf.gotoAndPlay('color');
              // //     animation_s2_leaf.gotoAndPlay('color');
              // //     animation_s2_prant_gr.gotoAndPlay('color');
              // //     animation_spellBord.gotoAndPlay('APP');
              // // }
              //
              // // //青のクレヨンとの当たり判定
              // // if (pressRight == true) {
              // //     crayon_L.x -= 50;
              // // } else if (pressLeft == true) {
              // //     crayon_L.x += 50;
              // // }
              // // var point = crayon_L.localToLocal(0, 0, animation_character);
              // // var isHit = animation_character.hitTest(point.x, point.y);
              // // if(isHit == true){
              // //     stage.removeChild(crayon_L);
              // //     // stage.addChild(crayon_E);
              // //     console.log('crayon_E =' + crayon_E.x);
              // //     animation_spellBord.gotoAndPlay('APPL');
              // //     animation_mt_center.gotoAndPlay('color');
              // //     animation_mt_left.gotoAndPlay('color');
              // //     animation_mt_left2.gotoAndPlay('color');
              // //     animation_s2_mt_left2.gotoAndPlay('color');
              // //     animation_s2_mt_right.gotoAndPlay('color');
              // //     animation_s2_mt_right2.gotoAndPlay('color');
              // //     animation_sky.gotoAndPlay('color');
              // //     // animation_s2_sky.gotoAndPlay('color');
              // //     animation_cloud.gotoAndPlay('color');
              // //     animation_s2_cloud.gotoAndPlay('color');
              // // } else if(crayon_L.x <= -1024){
              // //       crayon_L.x = 4800
              // // }
              //
              // // //ピンクのクレヨンとの当たり判定
              // // if (pressRight == true) {
              // //     crayon_E.x -= 50;
              // //     // console.log('crayon_E = ' + crayon_E.x);
              // // } else if (pressLeft == true) {
              // //     crayon_E.x += 50;
              // // }
              // // var point = crayon_E.localToLocal(0, 0, animation_character);
              // // var isHit = animation_character.hitTest(point.x, point.y);
              // // if(isHit == true){
              // //     stage.removeChild(crayon_E);
              // //     animation_spellBord.gotoAndPlay('APPLE');
              // //     animation_s2_mt_center.gotoAndPlay('color');
              // //     animation_mt_left2.gotoAndPlay('color');
              // //     animation_mt_left3.gotoAndPlay('color');
              // //     animation_mt_right.gotoAndPlay('color');
              // //     animation_s2_mt_left.gotoAndPlay('color');
              // //     animation_flw_wh.gotoAndPlay('color');
              // //     animation_s2_flw_wh.gotoAndPlay('color');
              // //     // stage.addChild(apple);
              // //     // createjs.Tween.get(apple)
              // //     // .to({y:510}, 200);
              //
              //     // クリア時のアニメーション
              //
              //     // 暗くするための背景をアドしてアルファ上げる
              //     var bg = new createjs.Shape();
              //     bg.graphics.beginFill("black");
              //     bg.graphics.drawRect(0, 0, 1024, 768);
              //     bg.alpha = 0;
              //     console.log("bg loaded");
              //     stage.addChild(bg);
              //     createjs.Tween.get(bg)
              //     .to({alpha:0.8}, 500)
              //     .call(addApple)
              //     .call(addA)
              //     .call(addP_red)
              //     .call(addP_green)
              //     .call(addL)
              //     .call(addE);
              //
              //     // りんごを出して落とす
              //     function addApple(){
              //         stage.addChild(apple);
              //         createjs.Tween.get(apple)
              //         .to({y:200}, 100);
              //     }
              //
              //     // Aを出す
              //     function addA(){
              //         spell_A = new createjs.Bitmap(manifest[18]);
              //         spell_A.x = 329 ;
              //         spell_A.y = 448;
              //         spell_A.scaleX = 0.5;
              //         spell_A.scaleY = 0.5;
              //         stage.addChild(spell_A);
              //     }
              //
              //     // P_redを出す
              //     function addP_red(){
              //         spell_P_red = new createjs.Bitmap(manifest[19]);
              //         spell_P_red.x = 419;
              //         spell_P_red.y = 448;
              //         spell_P_red.scaleX = 0.5;
              //         spell_P_red.scaleY = 0.5;
              //         stage.addChild(spell_P_red);
              //     }
              //
              //     // P_greenを出す
              //     function addP_green(){
              //         addP_green = new createjs.Bitmap(manifest[20]);
              //         addP_green.x = 493;
              //         addP_green.y = 448;
              //         addP_green.scaleX = 0.5;
              //         addP_green.scaleY = 0.5;
              //         stage.addChild(addP_green);
              //     }
              //
              //     // Lを出す
              //     function addL(){
              //         spell_L = new createjs.Bitmap(manifest[21]);
              //         spell_L.x = 572;
              //         spell_L.y = 448;
              //         spell_L.scaleX = 0.5;
              //         spell_L.scaleY = 0.5;
              //         stage.addChild(spell_L);
              //         console.log("LLLLLL");
              //     }
              //
              //     // Eを出す
              //     function addE(){
              //         spell_E = new createjs.Bitmap(manifest[22]);
              //         spell_E.x = 643;
              //         spell_E.y = 448;
              //         spell_E.scaleX = 0.5;
              //         spell_E.scaleY = 0.5;
              //         stage.addChild(spell_E);
              //     }
              //
              //     if(crayon_E.x <= -1024){
              //         crayon_E.x = 4800;
              //     }
              // }
              //
              // // //appleが近づく
              // // if (pressRight == true) {
              // //     apple.x -= 50;
              // //     console.log('apple.x=' + apple.x);
              // // } else if (pressLeft == true) {
              // //     apple.x += 50;
              // // }
              //
              // // // 避けるクレヨン
              // // crayon_D.x -= 40;
              // // if (crayon_D.x <= 0){
              // //     crayon_D.x = 2048;
              // //   }
              //
              // // 避けるクレヨン
              // if (pressRight == true) {
              //     crayon_D.x -= 50;
              //     // console.log('crayon_E');
              // } else if (pressLeft == true) {
              //     crayon_D.x += 50;
              // }
              //
              stage.update();
        });
      }
  }
