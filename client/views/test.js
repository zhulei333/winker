/**
 * Created by zhuxiaolei on 2014/3/30.
 */
$("#method-example").click(function(event){
    $.mobile.navigate("#bar",{info:"info about #bar hash"});

    $.mobile.navigate('#baz');

    $(window).on('navigate',function(event,data){
        console.log(data.state.info);
        console.log(data.state.direction);
        console.log(data.state.url);
        console.log(data.state.hash);
    });

    window.history.back();
    //window.history.back();

})