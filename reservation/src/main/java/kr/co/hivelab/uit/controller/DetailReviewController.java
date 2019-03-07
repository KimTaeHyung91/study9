package kr.co.hivelab.uit.controller;

import kr.co.hivelab.uit.dto.DetailDto;
import kr.co.hivelab.uit.service.DetailReviewService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;
import java.util.Map;

@Controller
public class DetailReviewController {
    private static final Logger logger = LoggerFactory.getLogger( DetailReviewController.class );

    @Autowired
    private DetailReviewService detailReviewService;

    @SuppressWarnings ( "unchecked" )
    @RequestMapping ( value = "/detail" )
    public String detail( Model model, @RequestParam HashMap< String, Object > params ) throws
                                                                                        Exception {
        DetailDto result = detailReviewService.getDetail( params );
        model.addAttribute( "detailItem", result );
        return "detail";
    }
    @SuppressWarnings ( "unchecked" )
    @RequestMapping ( value = "/detail/review" )
    public String review( Model model, @RequestParam HashMap< String, Object > params ) throws
                                                                                        Exception {
        model.addAttribute( "id",params.get( "id" ) );
        return "review";
    }

    @SuppressWarnings ( "unchecked" )
    @RequestMapping ( value = "getComment" )
    public ModelAndView getComment() throws
                                     Exception {
        ModelAndView mav = new ModelAndView( "jsonView" );
        Map< String, Object > result = detailReviewService.getComment();
        try {
            mav.addObject( "RESULT_CODE", result.get( "RESULT_CODE" ) );
            mav.addObject( "RESULT_DATA", result.get( "RESULT_DATA" ) );
        } catch ( Exception e ) {
            mav.addObject( "RESULT_CODE", result.get( "RESULT_CODE" ) );
            mav.addObject( "RESULT_DATA", result.get( "RESULT_DATA" ) );
        }
        return mav;
    }
    @SuppressWarnings ( "unchecked" )
    @RequestMapping ( value = "getRating" )
    public ModelAndView getRating() throws
                                     Exception {
        ModelAndView mav = new ModelAndView( "jsonView" );
        Map< String, Object > result = detailReviewService.getRating();
        try {
            mav.addObject( "RESULT_CODE", result.get( "RESULT_CODE" ) );
            mav.addObject( "RESULT_DATA", result.get( "RESULT_DATA" ) );
        } catch ( Exception e ) {
            mav.addObject( "RESULT_CODE", result.get( "RESULT_CODE" ) );
            mav.addObject( "RESULT_DATA", result.get( "RESULT_DATA" ) );
        }
        return mav;
    }
}
