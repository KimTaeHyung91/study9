package kr.co.hivelab.uit.dao;

import kr.co.hivelab.uit.dto.CategoryDto;

import java.util.HashMap;
import java.util.List;

public interface MainDao {
    public List< CategoryDto >                     getCategory() throws Exception;
    public List< HashMap< String, Object > >    getPromotion()                                      throws Exception;
    public List< HashMap< String, Object > >    getAllItemList( HashMap<String,Object> params )     throws Exception;
    public HashMap< String, Object >            getItemListCount( HashMap<String,Object> params )   throws Exception;
}
