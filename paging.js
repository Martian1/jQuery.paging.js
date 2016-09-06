;(function($,window,document,undefined){
        var initDate={
            pageNo:1,
            totalPage:1,
            callback:function(){}
        };
        function Paging(element,options){
            this.element = element;
            this.options=options=$.extend(initDate,options||{});
            this.init();
        }
        Paging.prototype={
            // 将构造函数置为Paging，这里一定要将constructor重新设置回Paging，不然会指向Object的构造函数  
            constructor:Paging,
            init:function(){
                this.creatHtml();
                this.bindEvent();
            },
            creatHtml:function(){
                var me=this;
                var content="";
                var current=me.options.pageNo;
                var total=me.options.totalPage;
                if(current > 1){
                    content += "<a><</a>";
                }
                if(total > 7){
                    if(current < 4){
                        for(var i=1;i<7;i++){
                            if(current==i){
                                content += "<a class='current'>"+i+"</a>";
                            }else{
                                content += "<a>"+i+"</a>";
                            }
                        }
                        content += "...";
                        content += "<a>"+total+"</a>";
                    }else{
                        if(current < total - 3){
                            content += "<a name='1' type='button' class='page num'>1</a>";
                            content += "...";
                            for(var i=current-2;i<current+3;i++){
                                if(current==i){
                                    content += "<a class='current'>"+i+"</a>";
                                }else{
                                    content += "<a>"+i+"</a>";
                                }
                            }
                            content += "...";
                            content += "<a>"+total+"</a>";
                        }else{
                            content += "<a>1</a>";
                            content += "...";
                            for(var i=total-5;i<total+1;i++){
                                if(current==i){
                                    content += "<a class='current'>"+i+"</a>";
                                }else{
                                    content += "<a>"+i+"</a>";
                                }
                            }
                        }
                    }
                }else{
                    for(var i=1;i<total+1;i++){
                        if(current==i){
                            content += "<a class='current'>"+i+"</a>";
                        }else{
                            content += "<a>"+i+"</a>";
                        }
                    }
                }
                if(current < total){
                    content += "<a>></a>";
                }
                content += " 到第 ";
                content += "<input max='3' maxlength='3' value='"+current+"' type='text' />";
                content += " 页 ";
                content += "<a>Go</a>";
                me.element.html(content);
            },
            bindEvent:function(){
                var me=this;
                me.element.on('click','a',function(){
                    var num=$(this).html();console.log(num)
                    if(num=="&lt;"){
                        me.options.pageNo=+me.options.pageNo-1;
                    }else if(num=="&gt;"){
                        me.options.pageNo=+me.options.pageNo+1;
                    }else if(num=="Go"){
                        var ipt=+me.element.find('input').val();
                        if(ipt&&ipt<=me.options.totalPage&&ipt!=me.options.pageNo){
                            me.options.pageNo=ipt;
                        }
                    }else{
                        me.options.pageNo=+num;
                    }
                    me.creatHtml();
                    if(me.options.callback){
                        me.options.callback(me.options.pageNo);
                    }
                });
            }
        };
        $.fn.paging=function(options){
            options=$.extend(initDate,options||{});
            return new Paging($(this),options);
        }
    })(jQuery,window,document);