( function ( win, $ ) {
    var mainObj = {
        init               : function () {
            this.setElement();
            this.iniLayout();
            this.bindEvent();
        },
        iniLayout          : function () {
            this.getPromotion();
            this.getItemListCount( 0 );
            this.getItemList( 0 );
            win.setTimeout( function () {
                mainObj.onLoadSetting();
            }, 50 );
            this.indexFirst = 0;
            this.tabListAnchor.eq( 0 ).addClass( 'active' );
        },
        setElement         : function () {
            this.promotionTemplate = $( '#promotionItem' );
            this.itemTemplate      = $( '#itemList' );
            this.visualImg         = $( '.visual_img' );
            this.sectionEventLst   = $( '.section_event_lst' );
            this.tab               = $( '.event_tab_lst' );
            this.eventLstTxt       = this.sectionEventLst.children( 'p.event_lst_txt' );
            this.spanCountTxt      = this.eventLstTxt.children( 'span.pink' );
            this.eventBox          = this.sectionEventLst.children( 'div.wrap_event_box' );
            this.lstEventBox       = this.eventBox.children( 'ul.lst_event_box' );
            this.tabList           = this.tab.children( 'li' );
            this.tabListAnchor     = this.tabList.children( 'a' );
            this.moreBtn           = this.eventBox.children( 'div.more' ).children( 'button.btn' );
            this.prevBtn           = $( '.btn_pre_e' );
            this.nextBtn           = $( '.btn_nxt_e' );
        },
        bindEvent          : function () {
            this.prevBtn.on( 'click', $.proxy( this.onBtnClickEvent, this ) );
            this.nextBtn.on( 'click', $.proxy( this.onBtnClickEvent, this ) );
            this.tabList.on( 'click', $.proxy( this.onListClickEvent, this ) );
            this.moreBtn.on( 'click', $.proxy( this.onMoreBtnClickEvent, this ) );
        },
        getPromotion       : function () {
            var promotionTemplateHtml = this.promotionTemplate.text();
            var visualImg             = this.visualImg;
            var resultHtml            = '';
            $.ajax( {
                        url     : 'getPromotion',
                        type    : 'POST',
                        dataType: 'json',
                        success : function ( result ) {
                            if ( result.RESULT_CODE === 'SUCCESS' ) {
                                for ( var i = 0; i < result.RESULT_DATA.length; i++ ) {
                                    resultHtml += promotionTemplateHtml.replace( '{id}', i + 1 )
                                                                       .replace( '{description}',
                                                                                 result.RESULT_DATA[ i ].DESCRIPTION )
                                                                       .replace( '{content}',
                                                                                 result.RESULT_DATA[ i ].CONTENT )
                                                                       .replace( '{place_name}',
                                                                                 result.RESULT_DATA[ i ].PLACE_NAME )
                                                                       .replace( '{file_name}',
                                                                                 result.RESULT_DATA[ i ].FILE_NAME );
                                }
                                visualImg.append( resultHtml );
                            }
                        }
                    } );
        },
        onLoadSetting      : function () {
            this.visualImgItem = this.visualImg.children( 'li' );
            this.visualImg.css( 'width', 414 * this.visualImgItem.length );
            for ( var i = 0; i < this.visualImgItem.length; i++ ) {
                this.visualImgItem.eq( i ).css( 'width', '414px' );
            }
        },
        onBtnClickEvent    : function ( e ) {
            ++this.indexFirst;
            var loopNumber = this.indexFirst % this.visualImgItem.length;
            var liWidth    = null;
            if ( loopNumber === 0 ) {
                loopNumber = this.visualImgItem.length;
            }
            if ( e.currentTarget.className === 'btn_pre_e' ) {
                this.visualImgItem.eq( loopNumber ).animate( { 'left': liWidth * loopNumber } );
            } else if ( e.currentTarget.className === 'btn_nxt_e' ) {
                $('#banner'+(loopNumber+1)).css({'left':'100%'})
                                           .animate({'left':'0'});
                $('#banner'+loopNumber).animate({'left' : '-414px'},function () {
                    this.style.display = 'none';
                });
            }
        },
        onListClickEvent   : function ( e ) {
            var categoryId = e.currentTarget.dataset.category;
            for ( var i = 0; i < this.tabListAnchor.length; i++ ) {
                if ( $( e.currentTarget ).index() === i ) {
                    this.tabListAnchor.eq( i ).addClass( 'active' );
                } else {
                    this.tabListAnchor.eq( i ).removeClass( 'active' );
                }
            }
            this.getItemListCount( categoryId );
            this.getItemList( categoryId );
            if ( this.lstEventBox.children('li').length !== 0 ) {
                this.lstEventBox.children('li').remove();
            }
        },
        onMoreBtnClickEvent: function () {
            this.indexFirst = this.indexFirst+2;
            console.log(this.indexFirst);
            this.lstEventBox.eq(0).children('li').eq(0+this.indexFirst).css({'display':'block'});
            this.lstEventBox.eq(0).children('li').eq(1+this.indexFirst).css({'display':'block'});
            this.lstEventBox.eq(1).children('li').eq(0+this.indexFirst).css({'display':'block'});
            this.lstEventBox.eq(1).children('li').eq(1+this.indexFirst).css({'display':'block'});
        },
        getItemListCount   : function ( categoryId ) {
            var spanCountTxt = this.spanCountTxt;
            $.ajax( {
                        url     : 'getListItemCount',
                        type    : 'POST',
                        data    : { categoryId: categoryId },
                        dataType: 'json',
                        success : function ( result ) {
                            if ( result.RESULT_CODE == 'SUCCESS' ) {
                                spanCountTxt.html( result.RESULT_DATA.COUNT + '개' );
                            }
                        }
                    } );
        },
        getItemList        : function ( categoryId ) {
            var itemListTemplateHtml = this.itemTemplate.text();
            var eventBox             = this.eventBox;
            var lstEventBoxHtml      = this.lstEventBox;
            $.ajax( {
                        url     : 'getAllItemList',
                        type    : 'POST',
                        data    : { categoryId: categoryId },
                        dataType: 'json',
                        success : function ( result ) {
                            if ( result.RESULT_CODE === 'SUCCESS' ) {
                                for ( var i = 0; i < result.RESULT_DATA.length; i++ ) {
                                    var liElement = null;
                                    if ( i % 2 === 0 ) {
                                        liElement = itemListTemplateHtml.replace( '{id}', result.RESULT_DATA[ i ].ID )
                                                                        .replace( '{description}',
                                                                                  result.RESULT_DATA[ i ].DESCRIPTION )
                                                                        .replace( '{description_alt}',
                                                                                  result.RESULT_DATA[ i ].DESCRIPTION )
                                                                        .replace( '{placeName}',
                                                                                  result.RESULT_DATA[ i ].PLACE_NAME )
                                                                        .replace( '{content}',
                                                                                  result.RESULT_DATA[ i ].CONTENT )
                                                                        .replace( '{file_name}',
                                                                                  result.RESULT_DATA[ i ].FILE_NAME );
                                        lstEventBoxHtml.eq( 0 ).append( liElement );
                                    } else {
                                        liElement = itemListTemplateHtml.replace( '{id}', result.RESULT_DATA[ i ].ID )
                                                                        .replace( '{description}',
                                                                                  result.RESULT_DATA[ i ].DESCRIPTION )
                                                                        .replace( '{description_alt}',
                                                                                  result.RESULT_DATA[ i ].DESCRIPTION )
                                                                        .replace( '{placeName}',
                                                                                  result.RESULT_DATA[ i ].PLACE_NAME )
                                                                        .replace( '{content}',
                                                                                  result.RESULT_DATA[ i ].CONTENT )
                                                                        .replace( '{file_name}',
                                                                                  result.RESULT_DATA[ i ].FILE_NAME );
                                        lstEventBoxHtml.eq( 1 ).append( liElement );
                                    }
                                    lstEventBoxHtml.children('li').css({'display':'none'});
                                }
                                lstEventBoxHtml.eq(0).children('li').eq(0).css({'display':'block'});
                                lstEventBoxHtml.eq(0).children('li').eq(1).css({'display':'block'});
                                lstEventBoxHtml.eq(1).children('li').eq(0).css({'display':'block'});
                                lstEventBoxHtml.eq(1).children('li').eq(1).css({'display':'block'});
                            }
                        }
                    } );
        }
    };
    $( function () {
        mainObj.init();
    } );
} )( window, window.jQuery );