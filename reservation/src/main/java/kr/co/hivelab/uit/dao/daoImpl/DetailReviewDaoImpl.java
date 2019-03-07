package kr.co.hivelab.uit.dao.daoImpl;

import kr.co.hivelab.uit.dao.DetailReviewDao;
import kr.co.hivelab.uit.dto.DetailDto;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class DetailReviewDaoImpl
        implements DetailReviewDao {

    @Autowired
    SqlSession sqlSession;

    private final String nameSpace = "detailDao";

    @Override
    public DetailDto getDetail( HashMap< String, Object > params ) throws Exception {
        return sqlSession.selectOne( nameSpace+".getDetail",params );
    }

    @Override
    public List< Map< String, Object > > getComment() throws
                                                      Exception {
        return sqlSession.selectList( nameSpace+".getComment" );
    }

    @Override
    public Map< String, Object > getRating() throws
                                             Exception {
        return sqlSession.selectOne( nameSpace+".getRating" );
    }
}
