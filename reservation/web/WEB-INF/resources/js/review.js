( function ( win, $ ) {
    var reviewObj = {
        init      : function () {
            this.setElement();
            this.initLayout();
        },
        setElement: function () {
            this.sectionReviewList = $( '.section_review_list' );
            this.shortReviewArea   = this.sectionReviewList.find( '.grade_area' );
            this.graphMask         = this.shortReviewArea.find( '.graph_value' );
            this.textValue         = this.shortReviewArea.find( '.text_value' );
            this.joinCount         = this.shortReviewArea.find( '.join_count > .green' );
            this.listReviewTemplate  = $( '#commentAllList' );
            this.listShortReview     = this.sectionReviewList.find( '.list_short_review' );
        },
        initLayout: function () {
            this.getRating();
            this.getDetail();
        },
        getDetail : function () {
            var listTemplate    = this.listReviewTemplate.text();
            var listShortReview = this.listShortReview;
            var resultHtml      = '';
            $.ajax( {
                        url     : 'review/getReviewComment',
                        type    : 'GET',
                        dataType: 'json',
                        success : function ( result ) {
                            if ( result.RESULT_CODE === 'SUCCESS' ) {
                                console.log(result.RESULT_DATA);
                                for ( var i = 0; i < result.RESULT_DATA.length; i++ ) {
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
        getRating : function () {
            var graphMask = this.graphMask,
                textValue = this.textValue,
                joinCount = this.joinCount;
            $.ajax( {
                        url     : 'review/getReview',
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
        reviewObj.init();
    } );
} )( window, window.jQuery );