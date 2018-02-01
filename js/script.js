(function($){
  // Search
  var $searchWrap = $('#search-form-wrap'),
    isSearchAnim = false,
    searchAnimDuration = 200;

  var startSearchAnim = function(){
    isSearchAnim = true;
  };

  var stopSearchAnim = function(callback){
    setTimeout(function(){
      isSearchAnim = false;
      callback && callback();
    }, searchAnimDuration);
  };

  $('#nav-search-btn').on('click', function(){
    if (isSearchAnim) return;

    startSearchAnim();
    $searchWrap.addClass('on');
    stopSearchAnim(function(){
      $('.search-form-input').focus();
    });
  });

  $('.search-form-input').on('blur', function(){
    startSearchAnim();
    $searchWrap.removeClass('on');
    stopSearchAnim();
  });

  // Share
  /*$('body').on('click', function(){
    $('.article-share-box.on').removeClass('on');
  }).on('click', '.article-share-link', function(e){
    e.stopPropagation();

    var $this = $(this),
      url = $this.attr('data-url'),
      encodedUrl = encodeURIComponent(url),
      id = 'article-share-box-' + $this.attr('data-id'),
      offset = $this.offset();

    if ($('#' + id).length){
      var box = $('#' + id);

      if (box.hasClass('on')){
        box.removeClass('on');
        return;
      }
    } else {
      var html = [
        '<div id="' + id + '" class="article-share-box">',
          '<input class="article-share-input" value="' + url + '">',
          '<div class="article-share-links">',
			'<a href="http://tieba.baidu.com/f/commit/share/openShareApi?url=' + encodedUrl + '" class="article-share-tieba" target="_blank" title="百度贴吧"></a>',
			'<a href="http://service.weibo.com/share/share.php?url=' + encodedUrl + '" class="article-share-weibo" target="_blank" title="新浪微博"></a>',
			'<a href="http://share.v.t.qq.com/index.php?c=share&a=index&url=' + encodedUrl + '" class="article-share-tqq" target="_blank" title="腾讯微博"></a>',
			'<a href="http://widget.renren.com/dialog/share?resourceUrl=' + encodedUrl + '" class="article-share-renren" target="_blank" title="人人"></a>',
          '</div>',
        '</div>'
      ].join('');

      var box = $(html);

      $('body').append(box);
    }

    $('.article-share-box.on').hide();

    box.css({
      top: offset.top + 25,
      left: offset.left
    }).addClass('on');
  }).on('click', '.article-share-box', function(e){
    e.stopPropagation();
  }).on('click', '.article-share-box-input', function(){
    $(this).select();
  }).on('click', '.article-share-box-link', function(e){
    e.preventDefault();
    e.stopPropagation();

    window.open(this.href, 'article-share-box-window-' + Date.now(), 'width=500,height=450');
  });*/

  // Caption
  $('.article-entry').each(function(i){
    $(this).find('img').each(function(){
      if ($(this).parent().hasClass('fancybox')) return;

      var alt = this.alt;

      if (alt) $(this).after('<span class="caption">' + alt + '</span>');

      $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
    });

    $(this).find('.fancybox').each(function(){
      $(this).attr('rel', 'article' + i);
    });
  });

  if ($.fancybox){
    $('.fancybox').fancybox();
  }

  // Mobile nav
  var $container = $('#container'),
    isMobileNavAnim = false,
    mobileNavAnimDuration = 200;

  var startMobileNavAnim = function(){
    isMobileNavAnim = true;
  };

  var stopMobileNavAnim = function(){
    setTimeout(function(){
      isMobileNavAnim = false;
    }, mobileNavAnimDuration);
  }

  $('#main-nav-toggle').on('click', function(){
    if (isMobileNavAnim) return;

    startMobileNavAnim();
    $container.toggleClass('mobile-nav-on');
    stopMobileNavAnim();
  });

  $('#wrap').on('click', function(){
    if (isMobileNavAnim || !$container.hasClass('mobile-nav-on')) return;

    $container.removeClass('mobile-nav-on');
  });
  
    // link
    var $linkUl = $('#link-list');
    var $list = $('#link-list li');
    $linkUl.empty();
    var count = $list.length;
    for(var i = 0; i < count; i++)
    {
        var ran = Math.floor(Math.random() * $list.length);
        $linkUl.append($list.eq(ran));
        $list.splice(ran, 1);
    }
    
    // subtitle
    var subtitleList = [
        "『To look back, and saw one no longer young, never make public does not rise .』——IT生活",
        "『一入编程深似海，从此妹子是路人。』——IT生活",
        "『如果第一次你没有成功，那么称之为1.0版，继续加油。』——IT生活",
        "『程序员的美德：懒惰，没有耐心以及老子天下第一。』——IT生活",
        "『自己的代码六个月或更久不见，还不如别人写的代码。』——IT生活",
        "『开始90％的代码占开始90％的开发时间……剩下10％的代码还是占90％的开发时间。』——IT生活",
        "『注释代码就像是清洁浴室——尽管你满心不情愿，但它确实可以为你和你的客人创造一种更舒适的体验。』——IT生活",
        "『关于布尔值最妙的一点是，就算你错了，你也只是错了这一处而已。』——IT生活",
        "『如果Java真的有垃圾收集，那么大多数程序会执行自我删除。』——IT生活",
        "『Java之于JavaScript就像car之于carpet（地毯）。后者看上去像是前者的衍生物，实则是完全不同的两个东西。』——IT生活",
        "『数组的下标一定要从0或1开始吗？我认为，我采取的中间值0.5没有经过适当考虑就被驳回了。』——IT生活",
        "『复制粘贴是一个设计错误。』——IT生活",
        "『如果调试是消除软件bug的过程，那么编程就是产出bug的过程。』——IT生活",
        "『调试一段程序的难度是写出这段程序的难度的两倍，因此，如果你的代码尽可能清楚的话，那么你就不用费力地调试它。』——IT生活",
        "『你的目的是找bug的时候，bug已经很难找了；更不要说当你认为自己的代码中没有错误的时候。』——IT生活",
        "『这不是bug——这是没有被证明的功能。』——IT生活",
        "『如果没有需求和设计，那么编程就是添加bug到空的文本文件的艺术。』——IT生活",
        "『所谓坏的代码并不坏，它只是被误解了。』——IT生活",
        "『软件在发布前要经过beta测试。beta即拉丁语“仍然无法正常工作”的意思。』——IT生活",
        "『软件和教堂非常相似——首先，我们建造它们，然后我们祈祷。』——IT生活",
        "『我认为微软命名.Net，它就不会在Unix目录列表显示出来。』——IT生活",
        "『直到最后一个用户死去，软件才算完成。』——IT生活",
        "『这是我们这个行业的一件咄咄怪事：我们不仅不从错误中学习，我们也不从成功中学习。』——IT生活",
        "『好的程序员即使在过单行道时也总是会环顾两边。』——IT生活",
        "『程序员的烦恼是，你永远无法知道一个程序员在做什么，直到为时已晚。』——IT生活",
        "『IT人表示屁股上还得纹一个, 要不中间来个hello world!』——IT生活",
        "『真正的程序员喜欢兼卖爆米花，他们利用CPU散发出的热量做爆米花，可以根据米花爆裂的速度听出正在运行什么程序。』——IT生活",
        "『十年生死两茫茫，写程序，到天亮。』——IT生活"，
        "『一百万只猴子，给他们一百万个键盘，其中的一个会写出Java程序，其它的写的都是Perl程序。 』——IT生活",
        "『为什么程序员总是分不清万圣节和圣诞节？因为 Oct 31 == Dec 25。 』——IT生活",
        "『这个世界上只有10种人：懂得二进制的和不懂得二进制的。 』——IT生活",
        "『一个合格的程序员是不会写出诸如 “摧毁地球” 这样的程序的，他们会写一个函数叫“摧毁行星”而把地球当一个参数传进去。』——IT生活",
        "『C# JAVA都有对象，但是经常找不到对象；ASM C直接没有对象；javascript都是伪对象，最多算暧昧。但C++日子一直都好过，因为C++是多继承，富二代呀！！！』——IT生活",
        "『世界上最遥远的距离不是生与死，而是你亲手制造的BUG就在你眼前，你却怎么都找不到她……』——IT生活",
        "『继承，是幸福的延续；重载，是幸福的重生。』——IT生活",
        "『如果你的朋友最近没和你联系，要理解！只有三种可能：第一，他死了；第二，他改行当程序猿了；第三，需求又改了！ 』——IT生活"，
        "『成功chroot过很多系统，却从未成功chroot过妹子的心。 』——IT生活",
        "『一同学问我，软件外包是什么。解释了几句还没明白，遂想了一下：包工头知道吧？顿悟！』——IT生活",
        "『一个IT经理走进一家拉面馆说：“你们需要客户端吗？”老板说：“面一般是伙计端，忙的时候才需要客户端。』——IT生活",
        "『栈和队列的区别是啥？吃多了拉就是队列；吃多了吐就是栈。』——IT生活",
        "『汇编，C和C++是好朋友，每天一起吃饭。可是前天晚上C++一个人去吃饭了。问他怎么了，他说“汇编和C没有对象，他们去过节了……』——IT生活",
        "『为API生，为框架死，为debug奋斗一辈子，吃符号亏，上大小写的当，最后死在需求上。』——IT生活"
   ];
    var i = Math.floor(Math.random() * subtitleList.length);
    $('#subtitle').text(subtitleList[i]);
})(jQuery);