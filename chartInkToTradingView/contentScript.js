var screenerListLoadWatcher = setInterval (updateLinks, 1000);


function updateLinks(){
    console.log("updateLinks called. -" + new Date().toISOString());

    rows = $(".scan_results_table tr");
    $($(rows[0]).children()[2]).text("TradingView"); //Update column header
   
    header = $(".scan_results_table tr")[0];


    if(rows.length > 1){
        for(i=1;i<rows.length;i++){
            clearInterval (screenerListLoadWatcher);
            col = $($($(rows[i]).children()[2]).children());
            symbol = col.text();
            tradingViewLink = 'https://in.tradingview.com/chart/?symbol='+symbol;
            col.attr("href", tradingViewLink);
            //console.log(tradingViewLink);
        }
    }
}

$(document).ready(function() {
    $(".run_scan_button").click(function(){
       console.log("Run scan clicked. -" + new Date().toISOString());
       screenerListLoadWatcher = setInterval (updateLinks, 2500);
    }); 
});

$(document).ready(function() {
    $(".paginate_button").click(function(e){ //Not working properly yet. TODO: update
        console.log("Paginate clicked. -" + new Date().toISOString());
       screenerListLoadWatcher = setInterval (updateLinks, 1000);
    }); 
});

 