const faces = [
  {
    source: '[睡]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_9.8cf4c38.png'
  },
  {
    source: '[闭嘴]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_8.c6ea514.png'
  },
  {
    source: '[害羞]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_7.eca1535.png'
  },
  {
    source: '[流泪]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_6.dde0d83.png'
  },
  {
    source: '[可怜]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_5.ece2a96.png'
  },
  {
    source: '[发呆]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_4.28b310a.png'
  },
  {
    source: '[色]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_3.41d9a9a.png'
  },
  {
    source: '[呲牙]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_2.cd1e2bd.png'
  },
  {
    source: '[微笑]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_1.7d9f699.png'
  },
  {
    source: '[抓狂]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_18.b93331d.png'
  },
  {
    source: '[奸笑]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_17.bcebf79.png'
  },
  {
    source: '[不失礼貌的微笑]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_16.9d17f6d.png'
  },
  {
    source: '[思考]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_15.f58c082.png'
  },
  {
    source: '[撇嘴]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_14.8130d96.png'
  },
  {
    source: '[调皮]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_13.aaa8265.png'
  },
  {
    source: '[发怒]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_12.0f24f23.png'
  },
  {
    source: '[尴尬]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_11.8824107.png'
  },
  {
    source: '[吃瓜群众]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_10.42a731c.png'
  },
  {
    source: '[憨笑]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_27.0006230.png'
  },
  {
    source: '[流汗]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_26.1117a72.png'
  },
  {
    source: '[灵光一现]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_25.51e6984.png'
  },
  {
    source: '[困]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_24.6e6570b.png'
  },
  {
    source: '[傲慢]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_23.27eb25d.png'
  },
  {
    source: '[白眼]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_22.281d379.png'
  },
  {
    source: '[愉快]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_21.c408154.png'
  },
  {
    source: '[偷笑]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_20.7a46372.png'
  },
  {
    source: '[吐]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_19.249e025.png'
  },
  {
    source: '[敲打]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_36.c31c83f.png'
  },
  {
    source: '[骷髅]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_35.8d57f28.png'
  },
  {
    source: '[衰]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_34.cf5b4d5.png'
  },
  {
    source: '[晕]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_33.12a8e53.png'
  },
  {
    source: '[嘘]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_32.0de65f2.png'
  },
  {
    source: '[疑问]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_31.606e7a5.png'
  },
  {
    source: '[咒骂]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_30.91e4aa4.png'
  },
  {
    source: '[奋斗]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_29.2801857.png'
  },
  {
    source: '[捂脸]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_28.8981538.png'
  },
  {
    source: '[鄙视]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_45.df24295.png'
  },
  {
    source: '[打哈欠]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_44.74cc36f.png'
  },
  {
    source: '[右哼哼]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_43.ab03a70.png'
  },
  {
    source: '[左哼哼]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_42.886fc7b.png'
  },
  {
    source: '[坏笑]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_41.2751fc1.png'
  },
  {
    source: '[泣不成声]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_40.348108b.png'
  },
  {
    source: '[抠鼻]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_39.5b41924.png'
  },
  {
    source: '[擦汗]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_38.2d77d3e.png'
  },
  {
    source: '[再见]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_37.2f6e44f.png'
  },
  {
    source: '[拥抱]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_54.08f068d.png'
  },
  {
    source: '[大金牙]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_53.3e59e29.png'
  },
  {
    source: '[得意]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_52.cc6d6bc.png'
  },
  {
    source: '[机智]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_51.e6d838e.png'
  },
  {
    source: '[亲亲]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_50.419e678.png'
  },
  {
    source: '[阴险]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_49.392c709.png'
  },
  {
    source: '[摸头]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_48.1b40529.png'
  },
  {
    source: '[快哭了]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_47.63391a1.png'
  },
  {
    source: '[委屈]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_46.82c0215.png'
  },
  {
    source: '[红脸]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_63.c32f5b5.png'
  },
  {
    source: '[做鬼脸]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_62.d7ca811.png'
  },
  {
    source: '[哭笑]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_61.a296509.png'
  },
  {
    source: '[大哭]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_60.9016267.png'
  },
  {
    source: '[尬笑]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_59.8a63cb5.png'
  },
  {
    source: '[酷拽]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_58.327784e.png'
  },
  {
    source: '[震惊]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_57.6b8baad.png'
  },
  {
    source: '[送心]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_56.5777828.png'
  },
  {
    source: '[大笑]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_55.74ed629.png'
  },
  {
    source: '[耶]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_72.04f3881.png'
  },
  {
    source: '[皱眉]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_71.e8c2090.png'
  },
  {
    source: '[囧]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_70.285ebe9.png'
  },
  {
    source: '[绝望的凝视]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_69.cabd864.png'
  },
  {
    source: '[惊讶]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_68.1e326db.png'
  },
  {
    source: '[嘿哈]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_67.9ceed33.png'
  },
  {
    source: '[斜眼]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_66.fb6750b.png'
  },
  {
    source: '[恐惧]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_65.19740fe.png'
  },
  {
    source: '[鼓掌]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_64.6c4f6bb.png'
  },
  {
    source: '[飞吻]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_81.8e1cf74.png'
  },
  {
    source: '[钱]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_80.d0a73bb.png'
  },
  {
    source: '[强]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_79.6185c09.png'
  },
  {
    source: '[加好友]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_78.28310a5.png'
  },
  {
    source: '[互相关注]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_77.afd454e.png'
  },
  {
    source: '[互粉]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_76.8452494.png'
  },
  {
    source: '[吐血]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_75.b7ccb48.png'
  },
  {
    source: '[我想静静]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_74.d954f2d.png'
  },
  {
    source: '[石化]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_73.55516c0.png'
  },
  {
    source: '[生病]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_90.aa0a4e8.png'
  },
  {
    source: '[难过]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_89.5a2cba8.png'
  },
  {
    source: '[听歌]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_88.4eb52e4.png'
  },
  {
    source: '[紫薇别走]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_87.f741137.png'
  },
  {
    source: '[舔屏]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_86.8b2a629.png'
  },
  {
    source: '[泪奔]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_85.43ad2fc.png'
  },
  {
    source: '[悠闲]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_84.10dda08.png'
  },
  {
    source: '[惊恐]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_83.bc66012.png'
  },
  {
    source: '[打脸]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_82.c6f2aee.png'
  },
  {
    source: '[黑脸]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_99.3264111.png'
  },
  {
    source: '[白眼的狗]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_98.9f6d4ad.png'
  },
  {
    source: '[看]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_97.39cdc9f.png'
  },
  {
    source: '[无辜呆]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_96.4fb9d71.png'
  },
  {
    source: '[吐舌]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_95.6b0752f.png'
  },
  {
    source: '[吐彩虹]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_94.f9c84dc.png'
  },
  {
    source: '[惊喜]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_93.5ee641b.png'
  },
  {
    source: '[如花]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_92.13db022.png'
  },
  {
    source: '[绿帽子]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_91.57fc147.png'
  },
  {
    source: '[赞]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_108.a6defc6.png'
  },
  {
    source: '[心碎]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_107.1c0b941.png'
  },
  {
    source: '[爱心]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_106.ba42c9a.png'
  },
  {
    source: '[嘴唇]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_105.3881f71.png'
  },
  {
    source: '[凋谢]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_104.680e2d1.png'
  },
  {
    source: '[玫瑰]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_103.6c2eed8.png'
  },
  {
    source: '[不看]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_102.b113c42.png'
  },
  {
    source: '[熊吉]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_101.dec591d.png'
  },
  {
    source: '[猪头]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_100.6adf5c8.png'
  },
  {
    source: '[右]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_117.6dd2889.png'
  },
  {
    source: '[左]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_116.16df22c.png'
  },
  {
    source: '[击掌]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_115.a7dbbf7.png'
  },
  {
    source: '[碰拳]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_114.4b8db8b.png'
  },
  {
    source: '[比心]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_113.582f64b.png'
  },
  {
    source: '[谢谢]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_112.2dd347d.png'
  },
  {
    source: '[ok]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_111.b8dc9e6.png'
  },
  {
    source: '[握手]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_110.34d5723.png'
  },
  {
    source: '[弱]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_109.7854933.png'
  },
  {
    source: '[18禁]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_126.21e6944.png'
  },
  {
    source: '[红包]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_125.ac32796.png'
  },
  {
    source: '[礼物]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_124.83c188d.png'
  },
  {
    source: '[庆祝]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_123.da47506.png'
  },
  {
    source: '[拳头]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_122.b3763ee.png'
  },
  {
    source: '[勾引]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_121.570cd4d.png'
  },
  {
    source: '[抱拳]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_120.6c3effe.png'
  },
  {
    source: '[胜利]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_119.947368f.png'
  },
  {
    source: '[力量]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_118.1612154.png'
  },
  {
    source: '[太阳]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_135.5741bcc.png'
  },
  {
    source: '[月亮]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_134.a4856c6.png'
  },
  {
    source: '[便便]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_133.2665597.png'
  },
  {
    source: '[炸弹]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_132.fe320d4.png'
  },
  {
    source: '[菜刀]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_131.e225098.png'
  },
  {
    source: '[v5]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_130.2e42cc3.png'
  },
  {
    source: '[给力]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_129.0b59244.png'
  },
  {
    source: '[666]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_128.e55728c.png'
  },
  {
    source: '[去污粉]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_127.ce1b9d7.png'
  },
  {
    source: '[蛋糕]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_141.7bc6b3d.png'
  },
  {
    source: '[咖啡]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_140.6908619.png'
  },
  {
    source: '[啤酒]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_139.ccb84eb.png'
  },
  {
    source: '[西瓜]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_138.b0effa7.png'
  },
  {
    source: '[黄瓜]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_137.9dd21f9.png'
  },
  {
    source: '[发]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_136.5eba004.png'
  },
  {
    source: '[太阳]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_135.5741bcc.png'
  },
  {
    source: '[月亮]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_134.a4856c6.png'
  },
  {
    source: '[便便]',
    show: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/jj_emoji_133.2665597.png'
  }

]
export default faces
