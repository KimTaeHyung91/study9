( function ( win, $ ) {
    var detailObj = {
        init         : function () {
            this.setElement();
            this.iniLayout();
            this.bindEvent();
        },
        setElement   : function () {
            this.groupVisual         = $( '.group_visual' );
            this.sectionReviewList   = $( '.section_review_list' );
            this.sectionStoreDetails = $( '.section_store_details' );
            this.sectionInfoTab      = $( '.section_info_tab' );
            this.detailAreaWrap      = $( '.detail_area_wrap' );
            this.detailLocation      = $( '.detail_location' );
            this.listReviewTemplate  = $( '#commentList' );
            this.containerVisual     = this.groupVisual.find( 'div.container_visual' );
            this.detailVisualImg     = this.containerVisual.children( 'ul.detail_swipe' );
            this.detailVisualImgItem = this.detailVisualImg.children( 'li.item' );
            this.detailListImg       = this.detailVisualImgItem.children( 'img' );
            this.detailListHeadline  = this.detailVisualImgItem.children( 'div.visual_txt' )
                                           .children( 'h2' )
                                           .children( 'span' );
            this.detailListHeadline  = this.detailVisualImgItem.children( 'div.visual_txt' ).children( 'p' );
            this.listShortReview     = this.sectionReviewList.find( '.list_short_review' );
            this.shortReviewArea     = this.sectionReviewList.find( '.grade_area' );
            this.graphMask           = this.shortReviewArea.find( '.graph_value' );
            this.textValue           = this.shortReviewArea.find( '.text_value' );
            this.joinCount           = this.shortReviewArea.find( '.join_count > .green' );
            this.storeDetails        = this.sectionStoreDetails.find( '.store_details' );
            this.bkMoreOpen          = this.sectionStoreDetails.find( '._open' );
            this.bkMoreClose         = this.sectionStoreDetails.find( '._close' );
            this.infoTabLst          = this.sectionInfoTab.children( 'ul.info_tab_lst' );
            this.infoDetail          = this.infoTabLst.find( 'li._detail' ).children( 'a' );
            this.infoPath            = this.infoTabLst.find( 'li._path' ).children( 'a' );
        },
        iniLayout    : function () {
            this.getDetail();
            this.getRating();
        },
        bindEvent    : function () {
            this.bkMoreOpen.on( 'click', $.proxy( this.onClickBkMore, this ) );
            this.bkMoreClose.on( 'click', $.proxy( this.onClickBkMore, this ) );
            this.infoDetail.on( 'click', $.proxy( this.onClickInfo, this ) );
            this.infoPath.on( 'click', $.proxy( this.onClickInfo, this ) );
        },
        onLoadSetting: function () {
        },
        onClickBkMore: function ( e ) {
            if ( e.currentTarget.classList[ 1 ] === '_open' ) {
                this.storeDetails.removeClass( 'close3' );
                $( e.currentTarget ).hide();
                this.bkMoreClose.show();
            } else {
                $( e.currentTarget ).hide();
                this.bkMoreOpen.show();
                this.storeDetails.addClass( 'close3' );
            }
        },
        onClickInfo  : function ( e ) {
            var liElement = $( e.currentTarget );
            if ( liElement.parent().attr( 'class' ).indexOf( '_detail' ) >= 0 ) {
                $( e.currentTarget ).addClass('active');
                this.infoPath.removeClass('active');
                this.detailAreaWrap.removeClass('hide');
                this.detailLocation.addClass('hide')
            } else if ( liElement.parent().attr( 'class' ).indexOf( '_path' ) >= 0 ) {
                $( e.currentTarget ).addClass('active');
                this.infoDetail.removeClass('active');
                this.detailAreaWrap.addClass('hide');
                this.detailLocation.removeClass('hide');
            }
        },
        getDetail    : function () {
            var listTemplate    = this.listReviewTemplate.text();
            var listShortReview = this.listShortReview;
            var resultHtml      = '';
            $.ajax( {
                        url     : 'getComment',
                        type    : 'GET',
                        dataType: 'json',
                        success : function ( result ) {
                            if ( result.RESULT_CODE === 'SUCCESS' ) {
                                for ( var i = 0; i < 3 ; i++ ) {
                                    resultHtml += listTemplate.replace( '{description}', result.RESULT_DATA[ i ].DESCRIPTION )
                                                              .replace( '{comment}', result.RESULT_DATA[ i ].COMMENT )
                                                              .replace( '{score}',
                                                                        result.RESULT_DATA[ i ].SCORE + '.0' )
                                                              .replace( '{create_date}',
                                                                        result.RESULT_DATA[ i ].CREATE_DATE );
                                }
                                listShortReview.append( resultHtml );
                            }
                        }
                    } );
        },
        getRating    : function () {
            var graphMask = this.graphMask;
            var textValue = this.textValue;
            var joinCount = this.joinCount;
            $.ajax( {
                        url     : 'getRating',
                        type    : 'GET',
                        dataType: 'json',
                        success : function ( result ) {
                            if ( result.RESULT_CODE === 'SUCCESS' ) {
                                graphMask.css( 'width', result.RESULT_DATA.RATING );
                                textValue.children( 'span' ).text( result.RESULT_DATA.RATING * 1 / 10 );
                                joinCount.text( result.RESULT_DATA.COUNT + '개' );
                            }
                        }
                    } );
        }
    };
    $( function () {
        detailObj.init();
    } );
} )( window, window.jQuery );