package kr.co.hivelab.uit.service.serviceImpl;

import kr.co.hivelab.uit.dao.DetailReviewDao;
import kr.co.hivelab.uit.dto.DetailDto;
import kr.co.hivelab.uit.service.DetailReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class DetailReviewServiceImpl
        implements DetailReviewService {
    @Autowired
    DetailReviewDao detailReviewDao;

    @Override
    public DetailDto getDetail( HashMap< String, Object > params ) throws
                                                                   Exception {

        return detailReviewDao.getDetail( params );
    }

    @Override
    public Map< String, Object > getComment() throws
                                              Exception {
        Map< String, Object > result = new HashMap<>();
        try {
            List< Map< String, Object > > getCommentList = detailReviewDao.getComment();
            result.put( "RESULT_CODE", "SUCCESS" );
            result.put( "RESULT_DATA", getCommentList );
        } catch ( Exception e ) {
            result.put( "RESULT_CODE", "ERROR" );
            result.put( "RESULT_DATA", e.getMessage() );
        }
        return result;
    }

    @Override
    public Map< String, Object > getRating() throws
                                             Exception {
        Map< String, Object > result = new HashMap<>();
        try {
            Map< String, Object >  getRating = detailReviewDao.getRating();
            result.put( "RESULT_CODE", "SUCCESS" );
            result.put( "RESULT_DATA", getRating );
        } catch ( Exception e ) {
            result.put( "RESULT_CODE", "ERROR" );
            result.put( "RESULT_DATA", e.getMessage() );
        }
        return result;
    }
}
