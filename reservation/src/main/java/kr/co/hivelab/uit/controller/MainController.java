package kr.co.hivelab.uit.controller;

import kr.co.hivelab.uit.dto.CategoryDto;
import kr.co.hivelab.uit.service.MainService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;
import java.util.List;

@Controller
public class MainController {

    private static final Logger logger = LoggerFactory.getLogger( MainController.class );

    @Autowired
    private MainService mainService;

    @RequestMapping(value = "/")
    public String home( Model model ) throws Exception {
        List< CategoryDto > categoryList    = mainService.getCategory();
        model.addAttribute( "categoryList" , categoryList );
        return "mainPage";
    }
    @SuppressWarnings ( "unchecked" )
    @RequestMapping(value = "getPromotion")
    public ModelAndView getPromotion() throws Exception {
        ModelAndView                    mav             = new ModelAndView( "jsonView" );
        HashMap<String , Object>        result          = mainService.getPromotion();
        try {
            mav.addObject( "RESULT_CODE" , result.get( "RESULT_CODE" ) );
            mav.addObject( "RESULT_DATA" , result.get( "RESULT_DATA" ) );
        } catch ( Exception e ) {
            mav.addObject( "RESULT_CODE" , result.get( "RESULT_CODE" ) );
            mav.addObject( "RESULT_DATA" , result.get( "RESULT_DATA" ) );
        }
        return mav;
    }
    @SuppressWarnings ( "unchecked" )
    @RequestMapping(value = "getAllItemList")
    public ModelAndView getAllItemList( @RequestParam HashMap<String,Object> params ) throws Exception {
        ModelAndView                    mav             = new ModelAndView( "jsonView" );
        HashMap<String , Object>        result          = mainService.getAllItemList( params );
        try {
            mav.addObject( "RESULT_CODE" , result.get( "RESULT_CODE" ) );
            mav.addObject( "RESULT_DATA" , result.get( "RESULT_DATA" ) );
        } catch ( Exception e ) {
            mav.addObject( "RESULT_CODE" , result.get( "RESULT_CODE" ) );
            mav.addObject( "RESULT_DATA" , result.get( "RESULT_DATA" ) );
        }
        return mav;
    }
    @SuppressWarnings ( "unchecked" )
    @RequestMapping(value = "getListItemCount")
    public ModelAndView getListItemCount(@RequestParam HashMap<String,Object> params ) throws Exception {
        logger.info( "params :::::: " + params );
        ModelAndView                    mav             = new ModelAndView( "jsonView" );
        HashMap<String,Object>          result          = mainService.getItemListCount( params );
        try {
            mav.addObject( "RESULT_CODE" , result.get( "RESULT_CODE" ) );
            mav.addObject( "RESULT_DATA" , result.get( "RESULT_DATA" ) );
        } catch ( Exception e ) {
            mav.addObject( "RESULT_CODE" , result.get( "RESULT_CODE" ) );
            mav.addObject( "RESULT_DATA" , result.get( "RESULT_DATA" ) );
        }
        return mav;
    }
}
