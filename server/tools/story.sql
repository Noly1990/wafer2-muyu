
SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `userCollections`
-- ----------------------------
DROP TABLE IF EXISTS `story`;

CREATE TABLE `story` (
  `story_id` int(10) NOT NULL AUTO_INCREMENT,
  `title` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  `part1` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  `part2` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`story_id`),
  KEY `story_id` (`story_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='小故事信息';


INSERT INTO `story` (`title`,`part1`,`part2`) VALUES
('如果很重，为什么不放下呢？','  有个弟子去见他的师父。师父问他:“你最近怎么样？”他说:“我的心总是非常沉重。”然后徒弟就开始诉苦，讲他不欢喜什么、什么事不舒服，半小时过去了，师父一言不发，始终安静地听着。\n  等到他快讲完的时候，师父说:“可以了，不要再说了，我先出去一趟，等我回来，我们再继续说。”然后拿了一张白纸，让他托着跪在佛前。其实这位师父没有别的事，而是去休息了。于是徒弟老老实实托着一张薄薄的白纸跪在佛前。\n  十分钟过去了，他觉得有点儿撑不住了；二十分钟过去了，他觉得自己很辛苦；三十分钟过去了，这时他觉得这张白纸已不是一张，而是变成了上千张上万张白纸，重若千钧。\n  这时师父出来了，慈祥地问他:“感觉如何？”他说:“师父呀，这纸怎么这么重？我快晕倒了。”师父说:“如果它很重，你为什么不把它放下呢？其实，一张纸很轻，可是你如果一直不把它放下的话，它就会变得很重。”\n','感悟:\n  我们的念头虽无形无相，也没有重量，可是如果你执着于它，不知道放下的话，它就会像这张纸一样，越来越沉重。\n  徒弟拿着这张纸是因为他的师父要求他这样做，可是我们呢，没有人要求你拿起你的执着，没有人不让你放下，那你为什么不放下？'),
('两只蚂蚁爬向自由的故事','  有两只蚂蚁非常不幸，误入玻璃杯中。 他们慌张地在玻璃杯底四处触探，想寻找一个缝隙爬出去。不一会儿，他们便发现，这根本不可能。于是，他们开始沿着杯壁向上攀登。看来，这是通向自由的唯一路径。 然而，玻璃的表面实在太光滑了，他们刚爬了两步，便重重地跌了下去。他们揉揉摔疼了的身体，爬起来，再次往上攀登。很快，他们又重重地跌到杯底。\n  三次、四次、五次……有一次，眼看就要爬到杯口了，可惜，最后一步却失败了，而且，这一次比哪次都摔得疼。好半天，他们才喘过气来。一只蚂蚁一边揉着屁股，一边说:“咱们不能再冒险了。否则，会摔得粉身碎骨。”另一只蚂蚁说:“刚才，咱们离胜利不只差一步了吗？”说罢，他又重新开始攀登。一次又一次跌倒，一次又一次攀登，他到底摸到了杯口的边缘，用最后一点力气，翻过了这道透明的围墙。\n  隔着玻璃，杯子里的蚂蚁既羡慕又嫉妒地问:快告诉我，你获得成功的秘诀是什么？”\n  杯子外边的蚂蚁回答:“接近成功的时候可能最困难，谁在最困难的时候不丧失信心，谁就可能赢得胜利。”\n  杯子里的蚂蚁受到启发和鼓舞，不再惧怕被摔疼，也重新开始攀登，最终爬出了玻璃杯，与另一只蚂蚁会合。\n  而小蚂蚁之所以能不放弃，重要的因素是它拥有必胜的信念，在挫折中坚守必胜信念，就一定不会丧失坚持的力量。\n','省思:\n  你的责任就是你的方向，你的经历就是你的资本，你的性格就是你的命运。复杂的事情简单做，你就是专家；简单的事情重复做，你就是行家；重复的事情用心做，你就是赢家。美好是属于自信者的，机会是属于开拓者的，奇迹是属于执著者的！你若不想做，总会找到借口；你若想做，总会找到方法。'),
('是棉被把人暖热还是人把棉被暖热','  在一座破旧的庙宇里，有一个小和尚沮丧地对老和尚说:“我们这座小庙只有两个和尚。我化缘的时候，别人都对我恶语相加，经常说我是野和尚，给的香火钱更是少得可怜。今天我去化缘，这么冷的天都没有人给我开门，化到的斋饭也少得可怜。师父，我们寺庙要想成为您所说的庙宇千间、钟声不绝的大寺怕是不可能了。”\n  老和尚披着袈裟什么话也没有说，只是闭着眼睛静静地听着。\n  小和尚絮絮叨叨地说着，最后老和尚沉默一阵，终于睁开眼睛问道:“这北风吹得紧，外边又冰天雪地的，你冷不冷啊？”\n  小和尚浑身哆嗦着说道:“我冷呀，双脚都冻麻了。”\n  老和尚说道:“那不如我们早些睡觉吧！”\n  就这样，老和尚和小和尚熄灭了灯钻进了被窝，过了一个多小时，老和尚问道:“你暖和了吗？”\n  小和尚回答:“暖和了，就像睡在阳光下一样。”\n  老和尚说:“那你说是棉被把人暖热了，还是人把棉被暖热了？”\n  小和尚笑了:“师父呀，你真糊涂，棉被怎么可能把人暖热，是人把棉被暖热了。”\n  老和尚问到:“既然棉被反而要靠我们去暖它，那么我们还盖着棉被做什么？”\n  小和尚想了想说:“棉被可以保存我们的温暖，让我们在被窝里睡得舒服呀！”\n  黑暗中，老僧会心一笑:我们何尝不是躺在棉被下的人，而芸芸众生又何尝不是我们厚厚的棉被呢？只要我们一心向善，冰冷的棉被终究会被我们暖热的，而芸芸众生这床棉被也会把我们的温暖保存下来，我们睡在这样的被窝里不是很温暖吗？庙宇千间、钟声不绝的大寺还会是梦想吗？”\n  小和尚听了老和尚这一段话，恍然大悟。\n  第二天，小和尚很早就下山去化缘了，依然碰到了很多人对他恶语相加，可是小和尚却始终彬彬有礼地对待每一个人。十年之后，这座庙宇成了方圆十几公里的大寺，有了许多僧人，而香客更是络绎不绝，小和尚也成为了住持。','省思:\n  其实在这个世界上，我们都生活在棉被当中，别人就是我们的棉被，当我们用心去暖棉被的时候，棉被也会给我们温暖。\n  这个故事也告诉我们“众生一体”的道理。有人说，为什么我感受不到众生一体呢？首先我们要承认这个真相，就好像我们是一棵树，我是一片树叶，你是一片树叶，我们在两根不同的树枝上。虽然一棵树上根是根，干是干，叶是叶，花是花，但是这只是它们不同形式的存在方式。因为它们是一个整体，所以彼此不能伤害。\n  花不能去伤害叶子，叶子不能去伤害花，叶子如果伤害了花，那没有花就不能结果子，没有果子，农夫就会把树砍掉。\n  因此，怎么对待别人，别人就怎么对待自己，伤害别人就是伤害自己。这就好像众生是左手，我们是右手。左手提东西提酸了，右手要不要去帮忙？不用思考，右手肯定会去帮忙。所以我们利益众生就是在利益自己，我们帮助众生就是在帮助自己。');


SET FOREIGN_KEY_CHECKS = 1;