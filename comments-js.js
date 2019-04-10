 tic = document.getElementById('comment-holder');
      if (tic) {
        zx = tic.getElementsByTagName("li");
        for (i = 0; i < zx.length; i++) {
          if (zx.item(i).getAttribute('CLASS') == 'comment') {
            tic_emo = zx.item(i).innerHTML.replace(/:\)/gi, "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/1.gif' alt='happy' class='comment_emo'/>");
            tic_emo = tic_emo.replace(/:\(/gi, "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/2.gif' alt='sad' class='comment_emo'/>");
            tic_emo = tic_emo.replace(/;\)/gi, "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/3.gif' alt='winticn' class='comment_emo'/>");
            tic_emo = tic_emo.replace(/:D/gi, "<img src='https://s.yimg.com/pu/emoticon/v2/4.gif' alt='grin' class='comment_emo'/>");
            tic_emo = tic_emo.replace(/confused/gi, "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/7.gif' alt='confused' class='comment_emo'/>");
            tic_emo = tic_emo.replace(/:p/gi, "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/10.gif' alt='tongue' class='comment_emo'/>");
            tic_emo = tic_emo.replace(/:o/gi, "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/13.gif' alt='surprise' class='comment_emo'/>");
            tic_emo = tic_emo.replace(/svp/gi, "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/63.gif' alt='svp' class='comment_emo'/>");
            tic_emo = tic_emo.replace(/stp/gi, "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/63.gif' alt='stp' class='comment_emo'/>");
            tic_emo = tic_emo.replace(/shameonya/gi, "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/68.gif' alt='shame' class='comment_emo'/>");
            tic_emo = tic_emo.replace(/rofl/gi, "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/24.gif' alt='rofl' class='comment_emo'/>");
            tic_emo = tic_emo.replace(/:\|/gi, "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/22.gif' alt='chock' class='comment_emo'/>");
            tic_emo = tic_emo.replace(/laugh/gi, "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/21.gif' alt='laugh' class='comment_emo'/>");
            tic_emo = tic_emo.replace(/zzz/gi, "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/28.gif' alt='zzz' class='comment_emo'/>");
            tic_emo = tic_emo.replace(/:'\(/gi, "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/20.gif' alt='cry' class='comment_emo'/>");
            tic_emo = tic_emo.replace(/B-\)/gi, "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/16.gif' alt='cool' class='comment_emo'/>");
            tic_emo = tic_emo.replace(/aurevoir/gi, "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/103.gif' alt='aurevoir' class='comment_emo'/>");
            tic_emo = tic_emo.replace(/bravo/gi, "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/41.gif' alt='bravo' class='comment_emo'/>");
            tic_emo = tic_emo.replace(/<a href="https:\/\/www.blogger.com\/profile.*?>(.*)<\/a>/gi, "$1");
 tic_emo = tic_emo.replace(/<img src="\/\/lh3.googleusercontent.com\/zFdxGE77.*?>/gi, "<svg class='svg-icon-24 avatar-icon'><use xlink:href='\/responsive\/sprite_v1_6.css.svg#ic_person_black_24dp'><\/use><\/svg>");
tic_emo = tic_emo.replace(/Unknown/gi, "Inconnu");
            tic_emo = tic_emo.replace(/s512/gi, "s36");
            zx.item(i).innerHTML = tic_emo;
          }
        }
      }
