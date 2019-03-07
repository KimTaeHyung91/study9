package kr.co.hivelab.uit.service;

import kr.co.hivelab.uit.dto.DetailDto;

import java.util.HashMap;
import java.util.Map;

public interface DetailReviewService {
    public DetailDto getDetail( HashMap< String, Object > params ) throws Exception;
    public Map<String,Object> getComment() throws Exception;
    public Map<String,Object> getRating() throws Exception;
}
