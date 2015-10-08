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
__p += '<div id="content-wrapper" class="col-md-12"><h2>Quotes about life</h2><br/><h3 class="black">"Life isn\'t about finding yourself. Life is about creating yourself." George Bernard Shaw</h3><br/><div id="content1" class="col-md-7"><h3>"The most important thing is to enjoy your life - to be happy - it\'s all that matters." Audrey Hepburn</h3><br/><br/><img src="./static/life is.jpg" class="image"/><br/><br/><h3>"The truth is you don\'t know what is going to happen tomorrow. Life is a crazy ride, and nothing is guaranteed." Eminem</h3><br/><img src="./static/do.jpg" class="image3"/><br/><br/><br/><div id="sidebar" class="col-md-7"><ul class="nav"><li><a href="#">Link1</a></li><li><a href="#">Link2</a></li><li><a href="#">Link3</a></li></ul></div><h2>Find more quotes</h2></div><div id="content2" class="col-md-5"><h3>"Life is 10 percent what you make it, and 90 percent how you take it." Irving Berlin</h3><br/><h3>"Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor." Sholom Aleichem</h3><br/><h3>"We do not remember days, we remember moments." Cesare Pavese</h3><br/><h3>"Life is a song - sing it. Life is a game - play it. Life is a challenge - meet it. Life is a dream - realize it. Life is a sacrifice - offer it. Life is love - enjoy it." Sai Baba</h3><br/><br/><img src="./static/choose progress.png" class="image2"/><br/><br/><form name="form1" action="index.html" method="GET"><h1 class="formular">Formular de inscriere</h1><h3 class="formular"><key>Nume:</key><input id="nume" placeholder="Nume" aria-describedby="basic-addon1" class="text form-control"/></h3><h3 class="formular"><key>Prenume:</key><input id="prenume" placeholder="Prenume" aria-describedby="basic-addon1" class="text form-control"/></h3><h3 class="formular"><key>Email:</key><input id="email" placeholder="Email" aria-describedby="basic-addon1" class="text form-control"/></h3><p><input type="submit" name="submit" value="Submit" class="button"/></p><p><input type="reset" name="reset" value="Reset" class="button"/></p></form></div></div>';

}
return __p
};

this["JST"]["#createArticle-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2>Create New Article</h2><div class="input-group"><input id="articleTitle" placeholder="Title" aria-describedby="basic-addon1" class="text form-control"/></div><br/><div class="input-group"><textarea id="articleDescription" placeholder="Description" aria-describedby="basic-addon1" class="text form-control"></textarea></div><br/><div class="input-group"><textarea id="articleContent" placeholder="Content" aria-describedby="basic-addon1" class="text form-control"></textarea></div><br/><div class="input-group"><input id="articleImage" placeholder="Image" aria-describedby="basic-addon1" class="text form-control"/></div><br/><button id="saveButton" class="btn btn-success">Save</button>';

}
return __p
};

this["JST"]["#createComment-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2>Create New Comment</h2><div class="input-group"><textarea id="commentContent" placeholder="Content" aria-describedby="basic-addon1" class="text form-control"></textarea></div><br/><button id="saveButtonComm" class="btn btn-success">Save</button>';

}
return __p
};

this["JST"]["#home-Item"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="imagine"><img src="' +
((__t = ( model.url_image )) == null ? '' : __t) +
'" align="left" class="url_image"/></div><br/><div class="titleArticle">' +
__e( model.title ) +
'</div><br/><div class="descriptionArticle">' +
__e( model.description ) +
'</div><br/><div class="contentArticle">' +
__e( model.content ) +
'</div><br/><div class="date">' +
__e( createDate() ) +
'</div><a href="#update-article/' +
__e( model.id ) +
'"><button id="editButton" class="btn btn-success">Edit</button></a><button id="deleteButtonHome" class="btn btn-default">Delete</button><a href="#show-article/' +
__e( model.id ) +
'"><button id="showButton" class="btn btn-info">Show Article</button></a>';

}
return __p
};

this["JST"]["#home-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="content-home" class="col-md-12"><h1 class="home">Welcome to my blog :)</h1></div><br/><br/><br/><div id="wrapper-article" class="col-md-12"><div id="content-article"><li class="listaArticol"><div id="imagine">url</div><div class="titleArticle">titlu</div><div class="descriptionArticle">desc</div><div class="contentArticle">content</div><div class="date">data</div><br/></li></div></div><br/><br/>';

}
return __p
};

this["JST"]["#navigation-navbar"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="banner" class="banner col-md-8 col-md-offset-2"><img src="./static/blog_header-black.png" width="100%"/></div><div id="menu" class="col-md-8 col-md-offset-2"><ul><li class="listch"><a href="#home" title="Home">Home</a></li><li class="listch"><a href="#blog" title="Blog">Blog</a></li><li class="listch"><a href="#create-article" title="Articles">Articles</a></li></ul></div>';

}
return __p
};

this["JST"]["#showArticle-article-comment"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<br/><div class="contentComm">' +
__e( model.content ) +
'</div><br/><div class="dateComm">' +
__e( createDate() ) +
'</div><br/><br/><a href="#show-article/' +
__e( model.articleId ) +
'/update-comment/' +
__e( model.id ) +
'"><button id="createComm" class="btn btn-success">Edit </button></a>';

}
return __p
};

this["JST"]["#showArticle-article-details"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2>This is my article with id = ' +
__e( model.id ) +
'</h2><br/><div id="imageShow"><img src="' +
((__t = ( model.url_image )) == null ? '' : __t) +
'" align="left" class="imageShowArticle"/></div><br/><div class="titleShowArticle">' +
__e( model.title ) +
'</div><br/><div class="descriptionShowArticle">' +
__e( model.description ) +
'</div><br/><div class="contentShowArticle">' +
__e( model.content ) +
'</div><br/><div class="dateShowArticle">' +
__e( createDate() ) +
'</div><a href="#show-article/' +
__e( model.id ) +
'/create-comment"><button id="createComm" class="btn btn-info">Create Comment</button></a>';

}
return __p
};

this["JST"]["#showArticle-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="show-article-details"></div><br/><br/><br/><br/><h2 class="comment">Comments</h2><br/><div id="show-article-comments"></div><br/><br/>';

}
return __p
};

this["JST"]["#updateArticle-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2>Update Article</h2><div class="input-group"><h4>Title</h4><input id="updateTitle" value="' +
((__t = ( model.title )) == null ? '' : __t) +
'" aria-describedby="basic-addon1" class="text form-control"/></div><br/><div class="input-group"><h4>Description</h4><textarea id="updateDescription" aria-describedby="basic-addon1" class="text form-control">' +
__e( model.description ) +
'</textarea></div><br/><div class="input-group"><h4>Content</h4><textarea id="updateContent" aria-describedby="basic-addon1" class="text form-control">' +
__e( model.content ) +
'</textarea></div><br/><div class="input-group"><h4>Image</h4><input id="updateImage" value="' +
((__t = ( model.url_image )) == null ? '' : __t) +
'" aria-describedby="basic-addon1" class="text form-control"/></div><br/><button id="saveButton" class="btn btn-success">Update</button><button id="deleteButton" class="Button btn btn-default">Delete</button>';

}
return __p
};

this["JST"]["#updateComment-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2>Update Comment</h2><div class="input-group"><h4>Content</h4><input id="updateContent" value="' +
((__t = ( model.content )) == null ? '' : __t) +
'" aria-describedby="basic-addon1" class="text form-control"/></div><br/><button id="saveButtonComment" class="btn btn-success">Update</button><button id="deleteButtonComment" class="Button btn btn-default">Delete</button>';

}
return __p
};