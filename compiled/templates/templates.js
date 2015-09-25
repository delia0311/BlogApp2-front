this["JST"] = this["JST"] || {};

this["JST"]["#app-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="sidebar"></div><div id="container" class="container"></div>';

}
return __p
};

this["JST"]["#blog-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="content-wrapper" class="col-md-12"><h2>Quotes about life</h2><br/><h3 class="black">"Life isn\'t about finding yourself. Life is about creating yourself." George Bernard Shaw</h3><br/><div id="content1" class="col-md-7"><h3>"The most important thing is to enjoy your life - to be happy - it\'s all that matters." Audrey Hepburn</h3><br/><br/><img src="./static/life is.jpg" class="image"/><br/><br/><h3>"The truth is you don\'t know what is going to happen tomorrow. Life is a crazy ride, and nothing is guaranteed." Eminem</h3><br/><img src="./static/do.jpg" class="image3"/><br/><br/><br/><div id="sidebar" class="col-md-7"><ul class="nav"><li><a href="#">Link1</a></li><li><a href="#">Link2</a></li><li><a href="#">Link3</a></li></ul></div><h2>Find more quotes</h2></div><div id="content2" class="col-md-5"><h3>"Life is 10 percent what you make it, and 90 percent how you take it." Irving Berlin</h3><br/><h3>"Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor." Sholom Aleichem</h3><br/><h3>"We do not remember days, we remember moments." Cesare Pavese</h3><br/><h3>"Life is a song - sing it. Life is a game - play it. Life is a challenge - meet it. Life is a dream - realize it. Life is a sacrifice - offer it. Life is love - enjoy it." Sai Baba</h3><br/><br/><img src="./static/choose progress.png" class="image2"/><br/><br/></div></div>';

}
return __p
};

this["JST"]["#home-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="content-home" class="col-md-8 col-md-offset-2"><h1 class="home">Welcome to my blog :)</h1></div>';

}
return __p
};

this["JST"]["#navigation-navbar"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="banner" class="banner col-md-8 col-md-offset-2"><img src="./static/blog_header-black.png" width="100%"/></div><div id="menu" class="col-md-8 col-md-offset-2"><ul><li class="listch"><a href="#" title="Home">Home</a></li><li class="listch"><a href="#blog" title="Blog">Blog</a></li><li class="listch"><a href="#" title="Comments">Comments</a></li><li class="listch"><a href="#" title="Contact">Contact</a></li></ul></div>';

}
return __p
};