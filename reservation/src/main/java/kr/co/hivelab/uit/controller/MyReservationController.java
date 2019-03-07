package kr.co.hivelab.uit.controller;

import kr.co.hivelab.uit.service.MyReservationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class MyReservationController {
    private static final Logger logger = LoggerFactory.getLogger( MyReservationController.class );

    @Autowired
    MyReservationService myReservationService;
}
