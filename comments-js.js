var commentHolder = document.getElementById('comment-holder');

if (commentHolder) {
  var comments = commentHolder.getElementsByTagName("li");

  Array.from(comments).forEach(function(comment) {
    if (comment.getAttribute('class') === 'comment') {
      var commentContent = comment.innerHTML;

      var emoticonReplacements = {
        ":\\)": "1.gif",
        ":\\(": "2.gif",
        ";\\)": "3.gif",
        ":D": "4.gif",
        "confused": "7.gif",
        ":p": "10.gif",
        ":o": "13.gif",
        "svp|stp": "63.gif",
        "shameonya": "68.gif",
        "rofl": "24.gif",
        ":\\|": "22.gif",
        "laugh": "21.gif",
        "zzz": "28.gif",
        ":'\\(": "20.gif",
        "B-\\)": "16.gif",
        "aurevoir": "103.gif",
        "bravo": "41.gif",
        "<a href=\"https:\/\/www.blogger.com\/profile.*?>(.*)<\/a>": "$1",
        "<img src=\"\/\/www.blogger.com\/img\/blogger_logo_round_35.*?>": "<svg class='svg-icon-24 avatar-icon'><use xlink:href='\/responsive\/sprite_v1_6.css.svg#ic_person_black_24dp'><\/use><\/svg>",
        "Unknown": "Inconnu",
        "s512": "s36"
      };

      for (var emoticon in emoticonReplacements) {
        var regex = new RegExp(emoticon, "gi");
        commentContent = commentContent.replace(regex, "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/" + emoticonReplacements[emoticon] + "' alt='" + emoticon + "' class='comment_emo'/>");
      }

      comment.innerHTML = commentContent;
    }
  });
}
