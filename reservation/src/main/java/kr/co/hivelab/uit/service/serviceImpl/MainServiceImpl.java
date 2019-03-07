package kr.co.hivelab.uit.service.serviceImpl;

import kr.co.hivelab.uit.dao.MainDao;
import kr.co.hivelab.uit.dto.CategoryDto;
import kr.co.hivelab.uit.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class MainServiceImpl implements MainService {
    @Autowired
    private MainDao mainDao;

    @Override
    public List< CategoryDto > getCategory() throws
                                          Exception {
        return mainDao.getCategory();
    }

    @Override
    public HashMap<String,Object>  getPromotion() throws Exception {
        HashMap<String,Object> result = new HashMap<>(  );

        try {
            List<HashMap<String,Object>> getPromotionList = mainDao.getPromotion();
            result.put( "RESULT_CODE" , "SUCCESS" );
            result.put( "RESULT_DATA" , getPromotionList );
        } catch ( Exception e ) {
            result.put( "RESULT_CODE" , "ERROR" );
            result.put( "RESULT_DATA" , e.getMessage() );
        }
        return result;
    }

    @Override
    public HashMap< String, Object > getAllItemList( HashMap< String, Object > params ) throws Exception {
        HashMap<String,Object> result = new HashMap<>(  );
        try {
            List<HashMap<String,Object>> getAllItemList = mainDao.getAllItemList(params);
            result.put( "RESULT_CODE" , "SUCCESS" );
            result.put( "RESULT_DATA" , getAllItemList );
        } catch ( Exception e ) {
            result.put( "RESULT_CODE" , "ERROR" );
            result.put( "RESULT_DATA" , e.getMessage() );
        }
        return result;
    }

    @Override
    public HashMap< String, Object > getItemListCount( HashMap< String, Object > params ) throws Exception {
        HashMap<String,Object> result = new HashMap<>(  );
        try {
            HashMap<String,Object> getItemListCount = mainDao.getItemListCount( params );
            result.put( "RESULT_CODE" , "SUCCESS" );
            result.put( "RESULT_DATA" , getItemListCount );
        } catch ( Exception e ) {
            result.put( "RESULT_CODE" , "ERROR" );
            result.put( "RESULT_DATA" , e.getMessage() );
        }
        return result;
    }
}