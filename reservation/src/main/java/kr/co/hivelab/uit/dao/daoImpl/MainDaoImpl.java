package kr.co.hivelab.uit.dao.daoImpl;

import kr.co.hivelab.uit.dao.MainDao;
import kr.co.hivelab.uit.dto.CategoryDto;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

@Repository
public class MainDaoImpl implements MainDao {
    @Autowired
    private SqlSession sqlSession;

    private final String nameSpace = "mainDao";

    @Override
    public List< CategoryDto > getCategory() throws Exception {
        return sqlSession.selectList( nameSpace+".getCategory" );
    }

    @Override
    public List< HashMap<String,Object> > getPromotion() throws Exception {
        return sqlSession.selectList( nameSpace+".getPromotion" );
    }

    @Override
    public List< HashMap< String, Object > > getAllItemList( HashMap<String,Object> params ) throws Exception {
        return sqlSession.selectList( nameSpace+".getAllItemList",params );
    }

    @Override
    public HashMap< String, Object > getItemListCount( HashMap< String, Object > params ) throws Exception {
        return sqlSession.selectOne( nameSpace+".getAllCount",params );
    }
}
