package kr.co.hivelab.uit.dao;

import kr.co.hivelab.uit.dto.DetailDto;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public interface DetailReviewDao {
    public DetailDto getDetail( HashMap< String, Object > params ) throws Exception;
    public List< Map<String,Object> > getComment () throws Exception;
    public Map<String,Object> getRating () throws Exception;
}
