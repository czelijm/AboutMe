function renderProjectsFromJson(){
   var filtersDiv = document.getElementById("filters");
//    var categories = [];
   var categoriesWithHtml = [];

   //reading data from jsonfile hosted in github repo
   $.getJSON("https://raw.githubusercontent.com/czelijm/AboutMe/gh-pages/js/assets/projects.json",(data)=>{
    console.log(data);
    var innerHtmlFilterUl= [
        '<div id="filters" class="sixteen columns">',
        '<ul class="clearfix">'
    ]
    data.categories.forEach((category,index)=>{
        console.log(category.name);
        if(index===0){
            innerHtmlFilterUl.push('<li><a id="all" href="#" data-filter='+ category.datafilter+' class="active"></a>'+
            '<h5>'+category.name+'</h5> </a></li>');
        }else{
            innerHtmlFilterUl.push('<li><a id="" href="#" data-filter='+ category.datafilter+'></a>'+
            '<h5>'+category.name+'</h5> </a></li>');
        }
    });
    innerHtmlFilterUl.push('</ul></div>');
    console.log(innerHtmlFilterUl);
})
   
}

renderProjectsFromJson();