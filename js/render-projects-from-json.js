function renderProjectsFromJson(){
    renderProjectCategoryJson();
}

function renderProjectCategoryJson(){
//    var filtersDiv = document.getElementById("filters");

       //reading data from jsonfile hosted in github repo
       $.getJSON("https://raw.githubusercontent.com/czelijm/AboutMe/gh-pages/js/assets/projects.json",(data)=>{
        // console.log(data);
        //html processing

        //htmlRender
        $('#filters').html(htmlCategoryPorfolioList(data.categories));
       // $('#portfolio_wrapper').html(htmlPorfolioItems(data.porftolioItems));
    })
}

function htmlCategoryPorfolioList(categories){
    var innerHtmlFilterUl= [
        '<ul class="clearfix">'
    ]
    categories.forEach((category,index)=>{
        console.log(category.name);
        if(index===0){
            innerHtmlFilterUl.push('<li><a id="all" href="#" data-filter='+ category.datafilter+' class="active">'+
            '<h5>'+category.name+'</h5> </a></li>');
        }else{
            innerHtmlFilterUl.push('<li><a id="" href="#" data-filter='+ category.datafilter+'>'+
            '<h5>'+category.name+'</h5> </a></li>');
        }
    });
    innerHtmlFilterUl.push('</ul>');
    // console.log(innerHtmlFilterUl.join(","));
    return innerHtmlFilterUl.join(","); 
}


function htmlPorfolioItems(porftolioItems){
    var innerHtml=[];
    porftolioItems.forEach(item=>{
        innerHtml.push(htmlPorfolioItem(item));
    })
    console.log(innerHtmlFilterUl.join(","));
    return innerHtml.join(",");
}

function htmlPorfolioItem(item) {
   return '<figure style="position: absolute; left: 0px; top: 0px; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1); width: 337px; opacity: 1;" class="portfolio-item one-four machineLearning isotope-item effect-oscar '+item.tags+' ">'+
    '<div class="portfolio_img">'+
    '<img src="'+item.image+'" alt="Portfolio 1"> </div> '+
    '<figcaption>'+	
				'<div>'+

                '<a href="#" class="" data-toggle="modal" data-target="#'+item.id+'Modal"><h2>'+item.titleShort+'</h2></a>'+
                '</div>'+
    '</figcaption>'+
    '</figure>'+
    '<div class="modal fade" id="#'+item.id+'Modal" tabindex="-1" role="dialog" aria-labelledby="#'+item.id+'ModalLabel" aria-hidden="true">'+
	'<div class="modal-dialog" role="document">'+
	  '<div class="modal-content">'+
		'<div class="modal-header">'+
		  '<h4 class="modal-title" id="#'+item.id+'ModalLabel">'+item.date+' '+item.title+'</h4>'+
		  '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
			'<span aria-hidden="true">&times;</span>'+
		 '</button>'+
		'</div>'+
		'<div class="modal-body">'+
			'<h6 class="text-left">'+item.link+'</h6>'+
			'<h6 class="text-left">'+item.description+'</h6>'+
			'<h6 class="text-left" style="margin: 0%;">'+item.technologies+'</h6>'+
		'</div>'+
		'<div class="modal-footer">'+
		  '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
		'</div>'+
	 ' </div>'+
	'</div>'+
  '</div>';

}





$(document).ready(
    renderProjectsFromJson()
);

